/* Autogenerated file. Do not edit manually. */

/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-imports */

/*
  Fuels version: 0.97.2
*/

import { ContractFactory, decompressBytecode } from "fuels";
import type { Provider, Account, DeployContractOptions } from "fuels";

import { Game } from "./Game";

const bytecode = decompressBytecode("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");

export class GameFactory extends ContractFactory<Game> {

  static readonly bytecode = bytecode;

  constructor(accountOrProvider: Account | Provider) {
    super(
      bytecode,
      Game.abi,
      accountOrProvider,
      Game.storageSlots
    );
  }

  static deploy (
    wallet: Account,
    options: DeployContractOptions = {}
  ) {
    const factory = new GameFactory(wallet);
    return factory.deploy(options);
  }
}
