import { useEffect, useState } from "react";
import { useWallet } from "@fuels/react";

import {
  Game,
  IdentityOutput,
  OutcomeInput,
  OutcomeOutput,
} from "@/types/contracts/Game";
import Button from "./Button";
import { gameContractAddress } from "../../../lib";
import { Account, BN } from "fuels";
import { usePlaceBet } from "@/hooks/usePlaceBet";
import { useRequestRandom } from "@/hooks/useRequestRandom";
import { useProcessOutcomes } from "@/hooks/useProcessOutcomes";

type Bet = {
  user: string;
  outcome: OutcomeInput;
  amount: BN;
};

export default function GameContract() {
  const [bets, setBets] = useState<Bet[]>([]);
  const [betOutcome, setBetOutcome] = useState<OutcomeInput>(OutcomeInput.BLUE);
  const [betAmount, setBetAmount] = useState<number>();
  const placeBet = usePlaceBet();
  const requestRandom = useRequestRandom();
  const processOutcomes = useProcessOutcomes();

  const { wallet } = useWallet();

  useEffect(() => {
    const updateDeposits = async (wallet: Account) => {
      const game = new Game(gameContractAddress, wallet);
      const res = await game.functions.get_all_bets().dryRun();
      setBets(
        res.value.map((value: [IdentityOutput, OutcomeOutput, BN]) => {
          const [user, outcome, amount] = value;
          let outcomeInput: OutcomeInput;
          switch (outcome) {
            case OutcomeOutput.BLUE:
              outcomeInput = OutcomeInput.BLUE;
              break;
            case OutcomeOutput.GREEN:
              outcomeInput = OutcomeInput.GREEN;
              break;
            case OutcomeOutput.YELLOW:
              outcomeInput = OutcomeInput.YELLOW;
              break;
            case OutcomeOutput.RED:
              outcomeInput = OutcomeInput.RED;
              break;
          }
          return {
            user: user.Address!.bits,
            outcome: outcomeInput,
            amount: amount,
          };
        })
      );
    };
    if (wallet) {
      updateDeposits(wallet);
    }
  }, [wallet]);

  return (
    <>
      <div>
        <h3 className="mb-1 text-sm font-bold text-white">
          Current bets are TODO
        </h3>
        {bets.map((bet) => (
          <div key={bet.user}>
            <span>{bet.user}</span>
            <span>{(bet.amount.toNumber() / 10 ** 9).toFixed(3)}</span>
            <span>{bet.outcome}</span>
          </div>
        ))}
        <select
          className="text-black"
          onChange={(e) => {
            switch (e.target.value) {
              case "1":
                setBetOutcome(OutcomeInput.BLUE);
                break;
              case "2":
                setBetOutcome(OutcomeInput.GREEN);
                break;
              case "3":
                setBetOutcome(OutcomeInput.YELLOW);
                break;
              case "4":
                setBetOutcome(OutcomeInput.RED);
                break;
            }
          }}
        >
          <option value="1">Blue</option>
          <option value="2">Green</option>
          <option value="3">Yellow</option>
          <option value="4">Red</option>
        </select>
        <div className="flex items-center justify-between text-base">
          <input
            type="text"
            value={betAmount}
            onChange={(e) => {
              setBetAmount(Number(e.target.value));
            }}
            className="w-2/3 bg-gray-800 rounded-md px-2 py-1 mr-3 truncate font-mono"
            data-testid="liquidityToAdd"
          />
          <Button
            onClick={() => {
              if (betAmount) {
                placeBet.mutate({ betAmount, betOutcome });
              }
            }}
            className="w-1/3"
            disabled={placeBet.isPending}
          >
            Place Bet
          </Button>
        </div>
      </div>
      <div>
        <Button
          onClick={() => requestRandom.mutate()}
          disabled={requestRandom.isPending}
        >
          Request Random
        </Button>
        <Button
          onClick={() => processOutcomes.mutate()}
          disabled={processOutcomes.isPending}
        >
          Process Outcomes
        </Button>
      </div>
      <div></div>
    </>
  );
}
