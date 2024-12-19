/* Autogenerated file. Do not edit manually. */

/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-imports */

/*
  Fuels version: 0.97.2
  Forc version: 0.66.5
  Fuel-Core version: 0.40.0
*/

import { Contract, Interface } from "fuels";
import type {
  Provider,
  Account,
  StorageSlot,
  AbstractAddress,
  BigNumberish,
  BN,
  FunctionFragment,
  InvokeFunction,
} from 'fuels';

import type { Enum, Result } from "./common";

export enum AccessErrorInput { NotOwner = 'NotOwner' };
export enum AccessErrorOutput { NotOwner = 'NotOwner' };
export type IdentityInput = Enum<{ Address: AddressInput, ContractId: ContractIdInput }>;
export type IdentityOutput = Enum<{ Address: AddressOutput, ContractId: ContractIdOutput }>;
export enum InitializationErrorInput { CannotReinitialized = 'CannotReinitialized' };
export enum InitializationErrorOutput { CannotReinitialized = 'CannotReinitialized' };
export enum LiquidityPoolErrorInput { VaultAlreadyStarted = 'VaultAlreadyStarted', CannotCloseCurrentRound = 'CannotCloseCurrentRound', WrongDepositedAsset = 'WrongDepositedAsset', VaultNotStarted = 'VaultNotStarted', NoCollateralInVault = 'NoCollateralInVault', MustSignalWithdrawalAfterRoundCompletion = 'MustSignalWithdrawalAfterRoundCompletion', WithdrawalMustBeLarger = 'WithdrawalMustBeLarger', WithdrawalMustBeSmaller = 'WithdrawalMustBeSmaller', MustWithdrawAfterRoundCompletion = 'MustWithdrawAfterRoundCompletion', NoFundsToWithdraw = 'NoFundsToWithdraw', CannotRequestCollateral = 'CannotRequestCollateral', MustRequestCollateralLessThanTotal = 'MustRequestCollateralLessThanTotal', CannotDepositCollateral = 'CannotDepositCollateral', DepositedAmountGt0 = 'DepositedAmountGt0' };
export enum LiquidityPoolErrorOutput { VaultAlreadyStarted = 'VaultAlreadyStarted', CannotCloseCurrentRound = 'CannotCloseCurrentRound', WrongDepositedAsset = 'WrongDepositedAsset', VaultNotStarted = 'VaultNotStarted', NoCollateralInVault = 'NoCollateralInVault', MustSignalWithdrawalAfterRoundCompletion = 'MustSignalWithdrawalAfterRoundCompletion', WithdrawalMustBeLarger = 'WithdrawalMustBeLarger', WithdrawalMustBeSmaller = 'WithdrawalMustBeSmaller', MustWithdrawAfterRoundCompletion = 'MustWithdrawAfterRoundCompletion', NoFundsToWithdraw = 'NoFundsToWithdraw', CannotRequestCollateral = 'CannotRequestCollateral', MustRequestCollateralLessThanTotal = 'MustRequestCollateralLessThanTotal', CannotDepositCollateral = 'CannotDepositCollateral', DepositedAmountGt0 = 'DepositedAmountGt0' };
export enum PauseErrorInput { Paused = 'Paused', NotPaused = 'NotPaused' };
export enum PauseErrorOutput { Paused = 'Paused', NotPaused = 'NotPaused' };
export type StateInput = Enum<{ Uninitialized: undefined, Initialized: IdentityInput, Revoked: undefined }>;
export type StateOutput = Enum<{ Uninitialized: void, Initialized: IdentityOutput, Revoked: void }>;

export type AddressInput = { bits: string };
export type AddressOutput = AddressInput;
export type AssetIdInput = { bits: string };
export type AssetIdOutput = AssetIdInput;
export type ContractIdInput = { bits: string };
export type ContractIdOutput = ContractIdInput;
export type DepositInput = { amount: BigNumberish };
export type DepositOutput = { amount: BN };
export type OwnershipSetInput = { new_owner: IdentityInput };
export type OwnershipSetOutput = { new_owner: IdentityOutput };
export type RoundInfoInput = { round: BigNumberish, has_vault_started: boolean, round_start_time: BigNumberish };
export type RoundInfoOutput = { round: BN, has_vault_started: boolean, round_start_time: BN };
export type RoundStartedInput = { round: BigNumberish, round_collateral: BigNumberish };
export type RoundStartedOutput = { round: BN, round_collateral: BN };

export type LiquidityPoolConfigurables = Partial<{
  DEPOSIT_ASSET_ID: AssetIdInput;
}>;

const abi = {
  "programType": "contract",
  "specVersion": "1",
  "encodingVersion": "1",
  "concreteTypes": [
    {
      "type": "()",
      "concreteTypeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
    },
    {
      "type": "bool",
      "concreteTypeId": "b760f44fa5965c2474a3b471467a22c43185152129295af588b022ae50b50903"
    },
    {
      "type": "enum LiquidityPoolError",
      "concreteTypeId": "f0341066f61d2e6c5cbf9909d1098acc8887e4d6a27ce1259b340479741bba8f",
      "metadataTypeId": 1
    },
    {
      "type": "enum standards::src5::AccessError",
      "concreteTypeId": "3f702ea3351c9c1ece2b84048006c8034a24cbc2bad2e740d0412b4172951d3d",
      "metadataTypeId": 2
    },
    {
      "type": "enum standards::src5::State",
      "concreteTypeId": "192bc7098e2fe60635a9918afb563e4e5419d386da2bdbf0d716b4bc8549802c",
      "metadataTypeId": 3
    },
    {
      "type": "enum std::identity::Identity",
      "concreteTypeId": "ab7cd04e05be58e3fc15d424c2c4a57f824a2a2d97d67252440a3925ebdc1335",
      "metadataTypeId": 4
    },
    {
      "type": "enum std::result::Result<(),enum LiquidityPoolError>",
      "concreteTypeId": "f4b351b641758c52ac41a33c9bd2d2a0ede6a68b14eed11fc50a3d1501039c4e",
      "metadataTypeId": 5,
      "typeArguments": [
        "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d",
        "f0341066f61d2e6c5cbf9909d1098acc8887e4d6a27ce1259b340479741bba8f"
      ]
    },
    {
      "type": "enum sway_libs::ownership::errors::InitializationError",
      "concreteTypeId": "1dfe7feadc1d9667a4351761230f948744068a090fe91b1bc6763a90ed5d3893",
      "metadataTypeId": 6
    },
    {
      "type": "enum sway_libs::pausable::errors::PauseError",
      "concreteTypeId": "8b3afcadf894415a10b09fc3717487e33802c8ffbb030edafe84ca4a71b280bc",
      "metadataTypeId": 7
    },
    {
      "type": "struct Deposit",
      "concreteTypeId": "1d2ce56b7181bc4bbcfc46234dbd20eff7f64898591d7aa139af7b018310f68f",
      "metadataTypeId": 10
    },
    {
      "type": "struct RoundInfo",
      "concreteTypeId": "ac37a60d585a9f59811cec711282c0d1b62da497752e294b7a8d306f6f64c333",
      "metadataTypeId": 11
    },
    {
      "type": "struct RoundStarted",
      "concreteTypeId": "abbc63f552b47b6ec05ebba9e1249b1ee4a7c6ec7da80d710eb6dc7c2a5370eb",
      "metadataTypeId": 12
    },
    {
      "type": "struct std::asset_id::AssetId",
      "concreteTypeId": "c0710b6731b1dd59799cf6bef33eee3b3b04a2e40e80a0724090215bbf2ca974",
      "metadataTypeId": 14
    },
    {
      "type": "struct std::contract_id::ContractId",
      "concreteTypeId": "29c10735d33b5159f0c71ee1dbd17b36a3e69e41f00fab0d42e1bd9f428d8a54",
      "metadataTypeId": 15
    },
    {
      "type": "struct sway_libs::ownership::events::OwnershipSet",
      "concreteTypeId": "e1ef35033ea9d2956f17c3292dea4a46ce7d61fdf37bbebe03b7b965073f43b5",
      "metadataTypeId": 16
    },
    {
      "type": "u64",
      "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
    }
  ],
  "metadataTypes": [
    {
      "type": "b256",
      "metadataTypeId": 0
    },
    {
      "type": "enum LiquidityPoolError",
      "metadataTypeId": 1,
      "components": [
        {
          "name": "VaultAlreadyStarted",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        },
        {
          "name": "CannotCloseCurrentRound",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        },
        {
          "name": "WrongDepositedAsset",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        },
        {
          "name": "VaultNotStarted",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        },
        {
          "name": "NoCollateralInVault",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        },
        {
          "name": "MustSignalWithdrawalAfterRoundCompletion",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        },
        {
          "name": "WithdrawalMustBeLarger",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        },
        {
          "name": "WithdrawalMustBeSmaller",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        },
        {
          "name": "MustWithdrawAfterRoundCompletion",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        },
        {
          "name": "NoFundsToWithdraw",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        },
        {
          "name": "CannotRequestCollateral",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        },
        {
          "name": "MustRequestCollateralLessThanTotal",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        },
        {
          "name": "CannotDepositCollateral",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        },
        {
          "name": "DepositedAmountGt0",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        }
      ]
    },
    {
      "type": "enum standards::src5::AccessError",
      "metadataTypeId": 2,
      "components": [
        {
          "name": "NotOwner",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        }
      ]
    },
    {
      "type": "enum standards::src5::State",
      "metadataTypeId": 3,
      "components": [
        {
          "name": "Uninitialized",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        },
        {
          "name": "Initialized",
          "typeId": 4
        },
        {
          "name": "Revoked",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        }
      ]
    },
    {
      "type": "enum std::identity::Identity",
      "metadataTypeId": 4,
      "components": [
        {
          "name": "Address",
          "typeId": 13
        },
        {
          "name": "ContractId",
          "typeId": 15
        }
      ]
    },
    {
      "type": "enum std::result::Result",
      "metadataTypeId": 5,
      "components": [
        {
          "name": "Ok",
          "typeId": 9
        },
        {
          "name": "Err",
          "typeId": 8
        }
      ],
      "typeParameters": [
        9,
        8
      ]
    },
    {
      "type": "enum sway_libs::ownership::errors::InitializationError",
      "metadataTypeId": 6,
      "components": [
        {
          "name": "CannotReinitialized",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        }
      ]
    },
    {
      "type": "enum sway_libs::pausable::errors::PauseError",
      "metadataTypeId": 7,
      "components": [
        {
          "name": "Paused",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        },
        {
          "name": "NotPaused",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        }
      ]
    },
    {
      "type": "generic E",
      "metadataTypeId": 8
    },
    {
      "type": "generic T",
      "metadataTypeId": 9
    },
    {
      "type": "struct Deposit",
      "metadataTypeId": 10,
      "components": [
        {
          "name": "amount",
          "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        }
      ]
    },
    {
      "type": "struct RoundInfo",
      "metadataTypeId": 11,
      "components": [
        {
          "name": "round",
          "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        },
        {
          "name": "has_vault_started",
          "typeId": "b760f44fa5965c2474a3b471467a22c43185152129295af588b022ae50b50903"
        },
        {
          "name": "round_start_time",
          "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        }
      ]
    },
    {
      "type": "struct RoundStarted",
      "metadataTypeId": 12,
      "components": [
        {
          "name": "round",
          "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        },
        {
          "name": "round_collateral",
          "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        }
      ]
    },
    {
      "type": "struct std::address::Address",
      "metadataTypeId": 13,
      "components": [
        {
          "name": "bits",
          "typeId": 0
        }
      ]
    },
    {
      "type": "struct std::asset_id::AssetId",
      "metadataTypeId": 14,
      "components": [
        {
          "name": "bits",
          "typeId": 0
        }
      ]
    },
    {
      "type": "struct std::contract_id::ContractId",
      "metadataTypeId": 15,
      "components": [
        {
          "name": "bits",
          "typeId": 0
        }
      ]
    },
    {
      "type": "struct sway_libs::ownership::events::OwnershipSet",
      "metadataTypeId": 16,
      "components": [
        {
          "name": "new_owner",
          "typeId": 4
        }
      ]
    }
  ],
  "functions": [
    {
      "inputs": [],
      "name": "owner",
      "output": "192bc7098e2fe60635a9918afb563e4e5419d386da2bdbf0d716b4bc8549802c",
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [],
      "name": "is_paused",
      "output": "b760f44fa5965c2474a3b471467a22c43185152129295af588b022ae50b50903",
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [],
      "name": "pause",
      "output": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d",
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [],
      "name": "unpause",
      "output": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d",
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [],
      "name": "available_collateral",
      "output": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0",
      "attributes": [
        {
          "name": "doc-comment",
          "arguments": [
            " Get total collateral of liquidity pool"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Returns"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * total_collatera: u64"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Storage Accesses"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * Reads: `1`"
          ]
        },
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [],
      "name": "can_close_current_round",
      "output": "b760f44fa5965c2474a3b471467a22c43185152129295af588b022ae50b50903",
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [],
      "name": "close_round",
      "output": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d",
      "attributes": [
        {
          "name": "doc-comment",
          "arguments": [
            " Close the current round and begin the next round."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Additional Information"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " This function moves collateral from `signaled_withdraws` to `withdraws`"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Reverts"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * When 7 days has not passed since the beginning of the round."
          ]
        },
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [],
      "name": "current_round_info",
      "output": "ac37a60d585a9f59811cec711282c0d1b62da497752e294b7a8d306f6f64c333",
      "attributes": [
        {
          "name": "doc-comment",
          "arguments": [
            " Get the current round info"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Returns"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * [RoundInfo] - Current round info"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Number of Storage Accesses"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * Reads: `3`"
          ]
        },
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [],
      "name": "deposit",
      "output": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d",
      "attributes": [
        {
          "name": "doc-comment",
          "arguments": [
            " Deposit funds to be used as collateral in the next round."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Reverts:"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * When the deposited asset is not DEPOSIT_ASSET_ID"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * When contract is paused"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Number of Storage Accesses"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " Reads: `2`"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " Writes: `3`"
          ]
        },
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        },
        {
          "name": "payable",
          "arguments": []
        }
      ]
    },
    {
      "inputs": [],
      "name": "deposit_for_user",
      "output": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0",
      "attributes": [
        {
          "name": "doc-comment",
          "arguments": [
            " Get deposit of a user in liquidity_pool"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Returns"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * deposit: u64"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Storage Accesses"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * Reads: `1`"
          ]
        },
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "new_owner",
          "concreteTypeId": "ab7cd04e05be58e3fc15d424c2c4a57f824a2a2d97d67252440a3925ebdc1335"
        },
        {
          "name": "game_contract_id",
          "concreteTypeId": "29c10735d33b5159f0c71ee1dbd17b36a3e69e41f00fab0d42e1bd9f428d8a54"
        }
      ],
      "name": "initialize",
      "output": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d",
      "attributes": [
        {
          "name": "doc-comment",
          "arguments": [
            " Initializes the contract owner."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Arguments"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * `new_owner`: [Option<Identity>] - Value to set the owner to"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Reverts"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * When the owner is already initialized."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Number of Storage Accesses"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * Writes: `2`"
          ]
        },
        {
          "name": "storage",
          "arguments": [
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "amount",
          "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        }
      ],
      "name": "request_collateral",
      "output": "f4b351b641758c52ac41a33c9bd2d2a0ede6a68b14eed11fc50a3d1501039c4e",
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [],
      "name": "send_remaining_collateral",
      "output": "f4b351b641758c52ac41a33c9bd2d2a0ede6a68b14eed11fc50a3d1501039c4e",
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "amount",
          "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        }
      ],
      "name": "signal_withdrawal",
      "output": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d",
      "attributes": [
        {
          "name": "doc-comment",
          "arguments": [
            " User signals withdrawal of their collateral."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Additional Information"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " Amount must be at least 10% of a user's total deposit"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " A user can call `withdrawal` after the current round has closed"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Reverts:"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * When the vault hasn't been started"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * When there is no collateral in the vault"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * When the withdrawal < 10% of collateral"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * When the withdrawal > collateral"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Number of Storage Accesses"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " Reads: `5`"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " Writes: `2`"
          ]
        },
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [],
      "name": "start_vault",
      "output": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d",
      "attributes": [
        {
          "name": "doc-comment",
          "arguments": [
            " Start the vault and begin round #1"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Reverts"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * When the vault has already started."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * When called by a non-owner"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * When the contract is paused"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Number of Storage Accesses"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * Reads: `3 + 2n`"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * Writes: `5 + 2n`"
          ]
        },
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [],
      "name": "total_deposits",
      "output": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0",
      "attributes": [
        {
          "name": "doc-comment",
          "arguments": [
            " Get total deposits of liquidity pool"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Returns"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * total_deposits: u64"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Storage Accesses"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * Reads: `1`"
          ]
        },
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [],
      "name": "withdrawal",
      "output": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d",
      "attributes": [
        {
          "name": "doc-comment",
          "arguments": [
            " User initiates withdrawal of their signalled withdrawal amount"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Reverts:"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * When the vault hasn't been started"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * When there are no funds available for withdrawal"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Number of Storage Accesses"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " Reads: `4`"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " Writes: `1`"
          ]
        },
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    }
  ],
  "loggedTypes": [
    {
      "logId": "4571204900286667806",
      "concreteTypeId": "3f702ea3351c9c1ece2b84048006c8034a24cbc2bad2e740d0412b4172951d3d"
    },
    {
      "logId": "17308477302293474924",
      "concreteTypeId": "f0341066f61d2e6c5cbf9909d1098acc8887e4d6a27ce1259b340479741bba8f"
    },
    {
      "logId": "10032608944051208538",
      "concreteTypeId": "8b3afcadf894415a10b09fc3717487e33802c8ffbb030edafe84ca4a71b280bc"
    },
    {
      "logId": "2102307375703768139",
      "concreteTypeId": "1d2ce56b7181bc4bbcfc46234dbd20eff7f64898591d7aa139af7b018310f68f"
    },
    {
      "logId": "2161305517876418151",
      "concreteTypeId": "1dfe7feadc1d9667a4351761230f948744068a090fe91b1bc6763a90ed5d3893"
    },
    {
      "logId": "16280289466020123285",
      "concreteTypeId": "e1ef35033ea9d2956f17c3292dea4a46ce7d61fdf37bbebe03b7b965073f43b5"
    },
    {
      "logId": "12374875781412977518",
      "concreteTypeId": "abbc63f552b47b6ec05ebba9e1249b1ee4a7c6ec7da80d710eb6dc7c2a5370eb"
    }
  ],
  "messagesTypes": [],
  "configurables": [
    {
      "name": "DEPOSIT_ASSET_ID",
      "concreteTypeId": "c0710b6731b1dd59799cf6bef33eee3b3b04a2e40e80a0724090215bbf2ca974",
      "offset": 49616
    }
  ]
};

const storageSlots: StorageSlot[] = [
  {
    "key": "2363bd25f30eb67114355bcc289cd76046f0650e5231933bc61f27892911d580",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  },
  {
    "key": "3c3161bdebde8381a79ce381468641c4fb0ae77ea8ceda5bd07a163562c7b2ea",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  },
  {
    "key": "a9e529a421eb524ecae94090cdc88a04ba27e7a8d3a24a6bdc584586a0ea7495",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  },
  {
    "key": "d021312a073214d1c1dae221987ac58a8dc6696fc52b563bb8e5b983df693ce3",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  },
  {
    "key": "f0588a2f33e780d2c36e5f643ffe6ea1bb4c951abf93ac8f214c94bdc23bcbca",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  }
];

export class LiquidityPoolInterface extends Interface {
  constructor() {
    super(abi);
  }

  declare functions: {
    owner: FunctionFragment;
    is_paused: FunctionFragment;
    pause: FunctionFragment;
    unpause: FunctionFragment;
    available_collateral: FunctionFragment;
    can_close_current_round: FunctionFragment;
    close_round: FunctionFragment;
    current_round_info: FunctionFragment;
    deposit: FunctionFragment;
    deposit_for_user: FunctionFragment;
    initialize: FunctionFragment;
    request_collateral: FunctionFragment;
    send_remaining_collateral: FunctionFragment;
    signal_withdrawal: FunctionFragment;
    start_vault: FunctionFragment;
    total_deposits: FunctionFragment;
    withdrawal: FunctionFragment;
  };
}

export class LiquidityPool extends Contract {
  static readonly abi = abi;
  static readonly storageSlots = storageSlots;

  declare interface: LiquidityPoolInterface;
  declare functions: {
    owner: InvokeFunction<[], StateOutput>;
    is_paused: InvokeFunction<[], boolean>;
    pause: InvokeFunction<[], void>;
    unpause: InvokeFunction<[], void>;
    available_collateral: InvokeFunction<[], BN>;
    can_close_current_round: InvokeFunction<[], boolean>;
    close_round: InvokeFunction<[], void>;
    current_round_info: InvokeFunction<[], RoundInfoOutput>;
    deposit: InvokeFunction<[], void>;
    deposit_for_user: InvokeFunction<[], BN>;
    initialize: InvokeFunction<[new_owner: IdentityInput, game_contract_id: ContractIdInput], void>;
    request_collateral: InvokeFunction<[amount: BigNumberish], Result<void, LiquidityPoolErrorOutput>>;
    send_remaining_collateral: InvokeFunction<[], Result<void, LiquidityPoolErrorOutput>>;
    signal_withdrawal: InvokeFunction<[amount: BigNumberish], void>;
    start_vault: InvokeFunction<[], void>;
    total_deposits: InvokeFunction<[], BN>;
    withdrawal: InvokeFunction<[], void>;
  };

  constructor(
    id: string | AbstractAddress,
    accountOrProvider: Account | Provider,
  ) {
    super(id, abi, accountOrProvider);
  }
}