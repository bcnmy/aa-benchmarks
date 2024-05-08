export const ENTRY_POINT_ARTIFACTS = {
  ENTRY_POINT_V06: {
    address: "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",
    abi: [
      {
        inputs: [
          {internalType: "uint256", name: "preOpGas", type: "uint256"},
          {internalType: "uint256", name: "paid", type: "uint256"},
          {internalType: "uint48", name: "validAfter", type: "uint48"},
          {internalType: "uint48", name: "validUntil", type: "uint48"},
          {internalType: "bool", name: "targetSuccess", type: "bool"},
          {internalType: "bytes", name: "targetResult", type: "bytes"},
        ],
        name: "ExecutionResult",
        type: "error",
      },
      {
        inputs: [
          {internalType: "uint256", name: "opIndex", type: "uint256"},
          {internalType: "string", name: "reason", type: "string"},
        ],
        name: "FailedOp",
        type: "error",
      },
      {
        inputs: [{internalType: "address", name: "sender", type: "address"}],
        name: "SenderAddressResult",
        type: "error",
      },
      {
        inputs: [
          {internalType: "address", name: "aggregator", type: "address"},
        ],
        name: "SignatureValidationFailed",
        type: "error",
      },
      {
        inputs: [
          {
            components: [
              {internalType: "uint256", name: "preOpGas", type: "uint256"},
              {internalType: "uint256", name: "prefund", type: "uint256"},
              {internalType: "bool", name: "sigFailed", type: "bool"},
              {internalType: "uint48", name: "validAfter", type: "uint48"},
              {internalType: "uint48", name: "validUntil", type: "uint48"},
              {
                internalType: "bytes",
                name: "paymasterContext",
                type: "bytes",
              },
            ],
            internalType: "struct IEntryPoint.ReturnInfo",
            name: "returnInfo",
            type: "tuple",
          },
          {
            components: [
              {internalType: "uint256", name: "stake", type: "uint256"},
              {
                internalType: "uint256",
                name: "unstakeDelaySec",
                type: "uint256",
              },
            ],
            internalType: "struct IStakeManager.StakeInfo",
            name: "senderInfo",
            type: "tuple",
          },
          {
            components: [
              {internalType: "uint256", name: "stake", type: "uint256"},
              {
                internalType: "uint256",
                name: "unstakeDelaySec",
                type: "uint256",
              },
            ],
            internalType: "struct IStakeManager.StakeInfo",
            name: "factoryInfo",
            type: "tuple",
          },
          {
            components: [
              {internalType: "uint256", name: "stake", type: "uint256"},
              {
                internalType: "uint256",
                name: "unstakeDelaySec",
                type: "uint256",
              },
            ],
            internalType: "struct IStakeManager.StakeInfo",
            name: "paymasterInfo",
            type: "tuple",
          },
        ],
        name: "ValidationResult",
        type: "error",
      },
      {
        inputs: [
          {
            components: [
              {internalType: "uint256", name: "preOpGas", type: "uint256"},
              {internalType: "uint256", name: "prefund", type: "uint256"},
              {internalType: "bool", name: "sigFailed", type: "bool"},
              {internalType: "uint48", name: "validAfter", type: "uint48"},
              {internalType: "uint48", name: "validUntil", type: "uint48"},
              {
                internalType: "bytes",
                name: "paymasterContext",
                type: "bytes",
              },
            ],
            internalType: "struct IEntryPoint.ReturnInfo",
            name: "returnInfo",
            type: "tuple",
          },
          {
            components: [
              {internalType: "uint256", name: "stake", type: "uint256"},
              {
                internalType: "uint256",
                name: "unstakeDelaySec",
                type: "uint256",
              },
            ],
            internalType: "struct IStakeManager.StakeInfo",
            name: "senderInfo",
            type: "tuple",
          },
          {
            components: [
              {internalType: "uint256", name: "stake", type: "uint256"},
              {
                internalType: "uint256",
                name: "unstakeDelaySec",
                type: "uint256",
              },
            ],
            internalType: "struct IStakeManager.StakeInfo",
            name: "factoryInfo",
            type: "tuple",
          },
          {
            components: [
              {internalType: "uint256", name: "stake", type: "uint256"},
              {
                internalType: "uint256",
                name: "unstakeDelaySec",
                type: "uint256",
              },
            ],
            internalType: "struct IStakeManager.StakeInfo",
            name: "paymasterInfo",
            type: "tuple",
          },
          {
            components: [
              {internalType: "address", name: "aggregator", type: "address"},
              {
                components: [
                  {internalType: "uint256", name: "stake", type: "uint256"},
                  {
                    internalType: "uint256",
                    name: "unstakeDelaySec",
                    type: "uint256",
                  },
                ],
                internalType: "struct IStakeManager.StakeInfo",
                name: "stakeInfo",
                type: "tuple",
              },
            ],
            internalType: "struct IEntryPoint.AggregatorStakeInfo",
            name: "aggregatorInfo",
            type: "tuple",
          },
        ],
        name: "ValidationResultWithAggregation",
        type: "error",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "bytes32",
            name: "userOpHash",
            type: "bytes32",
          },
          {
            indexed: true,
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            indexed: false,
            internalType: "address",
            name: "factory",
            type: "address",
          },
          {
            indexed: false,
            internalType: "address",
            name: "paymaster",
            type: "address",
          },
        ],
        name: "AccountDeployed",
        type: "event",
      },
      {anonymous: false, inputs: [], name: "BeforeExecution", type: "event"},
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "account",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "totalDeposit",
            type: "uint256",
          },
        ],
        name: "Deposited",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "aggregator",
            type: "address",
          },
        ],
        name: "SignatureAggregatorChanged",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "account",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "totalStaked",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "unstakeDelaySec",
            type: "uint256",
          },
        ],
        name: "StakeLocked",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "account",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "withdrawTime",
            type: "uint256",
          },
        ],
        name: "StakeUnlocked",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "account",
            type: "address",
          },
          {
            indexed: false,
            internalType: "address",
            name: "withdrawAddress",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "StakeWithdrawn",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "bytes32",
            name: "userOpHash",
            type: "bytes32",
          },
          {
            indexed: true,
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "paymaster",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "bool",
            name: "success",
            type: "bool",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "actualGasCost",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "actualGasUsed",
            type: "uint256",
          },
        ],
        name: "UserOperationEvent",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "bytes32",
            name: "userOpHash",
            type: "bytes32",
          },
          {
            indexed: true,
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "bytes",
            name: "revertReason",
            type: "bytes",
          },
        ],
        name: "UserOperationRevertReason",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "account",
            type: "address",
          },
          {
            indexed: false,
            internalType: "address",
            name: "withdrawAddress",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "Withdrawn",
        type: "event",
      },
      {
        inputs: [],
        name: "SIG_VALIDATION_FAILED",
        outputs: [{internalType: "uint256", name: "", type: "uint256"}],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {internalType: "bytes", name: "initCode", type: "bytes"},
          {internalType: "address", name: "sender", type: "address"},
          {internalType: "bytes", name: "paymasterAndData", type: "bytes"},
        ],
        name: "_validateSenderAndPaymaster",
        outputs: [],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {internalType: "uint32", name: "unstakeDelaySec", type: "uint32"},
        ],
        name: "addStake",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [{internalType: "address", name: "account", type: "address"}],
        name: "balanceOf",
        outputs: [{internalType: "uint256", name: "", type: "uint256"}],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{internalType: "address", name: "account", type: "address"}],
        name: "depositTo",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [{internalType: "address", name: "", type: "address"}],
        name: "deposits",
        outputs: [
          {internalType: "uint112", name: "deposit", type: "uint112"},
          {internalType: "bool", name: "staked", type: "bool"},
          {internalType: "uint112", name: "stake", type: "uint112"},
          {internalType: "uint32", name: "unstakeDelaySec", type: "uint32"},
          {internalType: "uint48", name: "withdrawTime", type: "uint48"},
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{internalType: "address", name: "account", type: "address"}],
        name: "getDepositInfo",
        outputs: [
          {
            components: [
              {internalType: "uint112", name: "deposit", type: "uint112"},
              {internalType: "bool", name: "staked", type: "bool"},
              {internalType: "uint112", name: "stake", type: "uint112"},
              {
                internalType: "uint32",
                name: "unstakeDelaySec",
                type: "uint32",
              },
              {internalType: "uint48", name: "withdrawTime", type: "uint48"},
            ],
            internalType: "struct IStakeManager.DepositInfo",
            name: "info",
            type: "tuple",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {internalType: "address", name: "sender", type: "address"},
          {internalType: "uint192", name: "key", type: "uint192"},
        ],
        name: "getNonce",
        outputs: [{internalType: "uint256", name: "nonce", type: "uint256"}],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{internalType: "bytes", name: "initCode", type: "bytes"}],
        name: "getSenderAddress",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              {internalType: "address", name: "sender", type: "address"},
              {internalType: "uint256", name: "nonce", type: "uint256"},
              {internalType: "bytes", name: "initCode", type: "bytes"},
              {internalType: "bytes", name: "callData", type: "bytes"},
              {
                internalType: "uint256",
                name: "callGasLimit",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "verificationGasLimit",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "preVerificationGas",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "maxFeePerGas",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "maxPriorityFeePerGas",
                type: "uint256",
              },
              {
                internalType: "bytes",
                name: "paymasterAndData",
                type: "bytes",
              },
              {internalType: "bytes", name: "signature", type: "bytes"},
            ],
            internalType: "struct UserOperation",
            name: "userOp",
            type: "tuple",
          },
        ],
        name: "getUserOpHash",
        outputs: [{internalType: "bytes32", name: "", type: "bytes32"}],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              {
                components: [
                  {internalType: "address", name: "sender", type: "address"},
                  {internalType: "uint256", name: "nonce", type: "uint256"},
                  {internalType: "bytes", name: "initCode", type: "bytes"},
                  {internalType: "bytes", name: "callData", type: "bytes"},
                  {
                    internalType: "uint256",
                    name: "callGasLimit",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "verificationGasLimit",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "preVerificationGas",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "maxFeePerGas",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "maxPriorityFeePerGas",
                    type: "uint256",
                  },
                  {
                    internalType: "bytes",
                    name: "paymasterAndData",
                    type: "bytes",
                  },
                  {internalType: "bytes", name: "signature", type: "bytes"},
                ],
                internalType: "struct UserOperation[]",
                name: "userOps",
                type: "tuple[]",
              },
              {
                internalType: "contract IAggregator",
                name: "aggregator",
                type: "address",
              },
              {internalType: "bytes", name: "signature", type: "bytes"},
            ],
            internalType: "struct IEntryPoint.UserOpsPerAggregator[]",
            name: "opsPerAggregator",
            type: "tuple[]",
          },
          {
            internalType: "address payable",
            name: "beneficiary",
            type: "address",
          },
        ],
        name: "handleAggregatedOps",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              {internalType: "address", name: "sender", type: "address"},
              {internalType: "uint256", name: "nonce", type: "uint256"},
              {internalType: "bytes", name: "initCode", type: "bytes"},
              {internalType: "bytes", name: "callData", type: "bytes"},
              {
                internalType: "uint256",
                name: "callGasLimit",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "verificationGasLimit",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "preVerificationGas",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "maxFeePerGas",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "maxPriorityFeePerGas",
                type: "uint256",
              },
              {
                internalType: "bytes",
                name: "paymasterAndData",
                type: "bytes",
              },
              {internalType: "bytes", name: "signature", type: "bytes"},
            ],
            internalType: "struct UserOperation[]",
            name: "ops",
            type: "tuple[]",
          },
          {
            internalType: "address payable",
            name: "beneficiary",
            type: "address",
          },
        ],
        name: "handleOps",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [{internalType: "uint192", name: "key", type: "uint192"}],
        name: "incrementNonce",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {internalType: "bytes", name: "callData", type: "bytes"},
          {
            components: [
              {
                components: [
                  {internalType: "address", name: "sender", type: "address"},
                  {internalType: "uint256", name: "nonce", type: "uint256"},
                  {
                    internalType: "uint256",
                    name: "callGasLimit",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "verificationGasLimit",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "preVerificationGas",
                    type: "uint256",
                  },
                  {
                    internalType: "address",
                    name: "paymaster",
                    type: "address",
                  },
                  {
                    internalType: "uint256",
                    name: "maxFeePerGas",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "maxPriorityFeePerGas",
                    type: "uint256",
                  },
                ],
                internalType: "struct EntryPoint.MemoryUserOp",
                name: "mUserOp",
                type: "tuple",
              },
              {internalType: "bytes32", name: "userOpHash", type: "bytes32"},
              {internalType: "uint256", name: "prefund", type: "uint256"},
              {
                internalType: "uint256",
                name: "contextOffset",
                type: "uint256",
              },
              {internalType: "uint256", name: "preOpGas", type: "uint256"},
            ],
            internalType: "struct EntryPoint.UserOpInfo",
            name: "opInfo",
            type: "tuple",
          },
          {internalType: "bytes", name: "context", type: "bytes"},
        ],
        name: "innerHandleOp",
        outputs: [
          {internalType: "uint256", name: "actualGasCost", type: "uint256"},
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {internalType: "address", name: "", type: "address"},
          {internalType: "uint192", name: "", type: "uint192"},
        ],
        name: "nonceSequenceNumber",
        outputs: [{internalType: "uint256", name: "", type: "uint256"}],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              {internalType: "address", name: "sender", type: "address"},
              {internalType: "uint256", name: "nonce", type: "uint256"},
              {internalType: "bytes", name: "initCode", type: "bytes"},
              {internalType: "bytes", name: "callData", type: "bytes"},
              {
                internalType: "uint256",
                name: "callGasLimit",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "verificationGasLimit",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "preVerificationGas",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "maxFeePerGas",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "maxPriorityFeePerGas",
                type: "uint256",
              },
              {
                internalType: "bytes",
                name: "paymasterAndData",
                type: "bytes",
              },
              {internalType: "bytes", name: "signature", type: "bytes"},
            ],
            internalType: "struct UserOperation",
            name: "op",
            type: "tuple",
          },
          {internalType: "address", name: "target", type: "address"},
          {internalType: "bytes", name: "targetCallData", type: "bytes"},
        ],
        name: "simulateHandleOp",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              {internalType: "address", name: "sender", type: "address"},
              {internalType: "uint256", name: "nonce", type: "uint256"},
              {internalType: "bytes", name: "initCode", type: "bytes"},
              {internalType: "bytes", name: "callData", type: "bytes"},
              {
                internalType: "uint256",
                name: "callGasLimit",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "verificationGasLimit",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "preVerificationGas",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "maxFeePerGas",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "maxPriorityFeePerGas",
                type: "uint256",
              },
              {
                internalType: "bytes",
                name: "paymasterAndData",
                type: "bytes",
              },
              {internalType: "bytes", name: "signature", type: "bytes"},
            ],
            internalType: "struct UserOperation",
            name: "userOp",
            type: "tuple",
          },
        ],
        name: "simulateValidation",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "unlockStake",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address payable",
            name: "withdrawAddress",
            type: "address",
          },
        ],
        name: "withdrawStake",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address payable",
            name: "withdrawAddress",
            type: "address",
          },
          {internalType: "uint256", name: "withdrawAmount", type: "uint256"},
        ],
        name: "withdrawTo",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {stateMutability: "payable", type: "receive"},
    ],
    bytecode:
      "0x60806040526004361015610023575b361561001957600080fd5b610021615531565b005b60003560e01c80630396cb60146101b35780630bd28e3b146101aa5780631b2e01b8146101a15780631d732756146101985780631fad948c1461018f578063205c28781461018657806335567e1a1461017d5780634b1d7cf5146101745780635287ce121461016b57806370a08231146101625780638f41ec5a14610159578063957122ab146101505780639b249f6914610147578063a61935311461013e578063b760faf914610135578063bb9fe6bf1461012c578063c23a5cea14610123578063d6383f941461011a578063ee219423146101115763fc7e286d0361000e5761010c611bcd565b61000e565b5061010c6119b5565b5061010c61184d565b5061010c6116b4565b5061010c611536565b5061010c6114f7565b5061010c6114d6565b5061010c611337565b5061010c611164565b5061010c611129565b5061010c6110a4565b5061010c610f54565b5061010c610bf8565b5061010c610b33565b5061010c610994565b5061010c6108ba565b5061010c6106e7565b5061010c610467565b5061010c610385565b5060207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103595760043563ffffffff8116808203610359576103547fa5ae833d0bb1dcd632d98a8b70973e8516812898e19bf27b70071ebc8dc52c01916102716102413373ffffffffffffffffffffffffffffffffffffffff166000526000602052604060002090565b9161024d811515615697565b61026a610261600185015463ffffffff1690565b63ffffffff1690565b11156156fc565b54926103366dffffffffffffffffffffffffffff946102f461029834888460781c166121d5565b966102a4881515615761565b6102b0818911156157c6565b6102d4816102bc6105ec565b941684906dffffffffffffffffffffffffffff169052565b6001602084015287166dffffffffffffffffffffffffffff166040830152565b63ffffffff83166060820152600060808201526103313373ffffffffffffffffffffffffffffffffffffffff166000526000602052604060002090565b61582b565b6040805194855263ffffffff90911660208501523393918291820190565b0390a2005b600080fd5b6024359077ffffffffffffffffffffffffffffffffffffffffffffffff8216820361035957565b50346103595760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103595760043577ffffffffffffffffffffffffffffffffffffffffffffffff81168103610359576104149033600052600160205260406000209077ffffffffffffffffffffffffffffffffffffffffffffffff16600052602052604060002090565b61041e8154612491565b9055005b73ffffffffffffffffffffffffffffffffffffffff81160361035957565b6024359061044d82610422565b565b60c4359061044d82610422565b359061044d82610422565b50346103595760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103595760206104fc6004356104a881610422565b73ffffffffffffffffffffffffffffffffffffffff6104c561035e565b91166000526001835260406000209077ffffffffffffffffffffffffffffffffffffffffffffffff16600052602052604060002090565b54604051908152f35b507f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60a0810190811067ffffffffffffffff82111761055157604052565b610559610505565b604052565b610100810190811067ffffffffffffffff82111761055157604052565b67ffffffffffffffff811161055157604052565b6060810190811067ffffffffffffffff82111761055157604052565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761055157604052565b6040519061044d82610535565b6040519060c0820182811067ffffffffffffffff82111761055157604052565b604051906040820182811067ffffffffffffffff82111761055157604052565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f60209267ffffffffffffffff8111610675575b01160190565b61067d610505565b61066f565b92919261068e82610639565b9161069c60405193846105ab565b829481845281830111610359578281602093846000960137010152565b9181601f840112156103595782359167ffffffffffffffff8311610359576020838186019501011161035957565b5034610359576101c07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103595767ffffffffffffffff60043581811161035957366023820112156103595761074a903690602481600401359101610682565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdc36016101808112610359576101006040519161078783610535565b12610359576040516107988161055e565b6107a0610440565b815260443560208201526064356040820152608435606082015260a43560808201526107ca61044f565b60a082015260e43560c08201526101043560e082015281526101243560208201526101443560408201526101643560608201526101843560808201526101a4359182116103595761083e9261082661082e9336906004016106b9565b9290916128b1565b6040519081529081906020820190565b0390f35b9060407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc8301126103595760043567ffffffffffffffff9283821161035957806023830112156103595781600401359384116103595760248460051b830101116103595760240191906024356108b781610422565b90565b5034610359576108c936610842565b6108d4929192611e3a565b6108dd83611d2d565b60005b84811061095d57506000927fbb47ee3e183a558b1a2ff0874b079f3fc5478b7454eacf2bfc5af2ff5878f9728480a183915b85831061092d576109238585611ed7565b6100216001600255565b909193600190610953610941878987611dec565b61094b8886611dca565b51908861233f565b0194019190610912565b8061098b610984610972600194869896611dca565b5161097e848a88611dec565b84613448565b9083612f30565b019290926108e0565b50346103595760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610359576004356109d081610422565b6024359060009133835282602052604083206dffffffffffffffffffffffffffff81541692838311610ad557848373ffffffffffffffffffffffffffffffffffffffff829593610a788496610a3f610a2c8798610ad29c6121c0565b6dffffffffffffffffffffffffffff1690565b6dffffffffffffffffffffffffffff167fffffffffffffffffffffffffffffffffffff0000000000000000000000000000825416179055565b6040805173ffffffffffffffffffffffffffffffffffffffff831681526020810185905233917fd1c19fbcd4551a5edfb66d43d2e337c04837afda3482b42bdf569a8fccdae5fb91a2165af1610acc611ea7565b50615ba2565b80f35b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f576974686472617720616d6f756e7420746f6f206c61726765000000000000006044820152fd5b50346103595760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610359576020600435610b7181610422565b73ffffffffffffffffffffffffffffffffffffffff610b8e61035e565b911660005260018252610bc98160406000209077ffffffffffffffffffffffffffffffffffffffffffffffff16600052602052604060002090565b547fffffffffffffffffffffffffffffffffffffffffffffffff00000000000000006040519260401b16178152f35b503461035957610c0736610842565b610c0f611e3a565b6000805b838210610df657610c249150611d2d565b7fbb47ee3e183a558b1a2ff0874b079f3fc5478b7454eacf2bfc5af2ff5878f972600080a16000805b848110610d5c57505060008093815b818110610c9357610923868660007f575ff3acadd5ab348fe1855e217e0f3678f8d767d7494c9f9fefbee2e17cca4d8180a2611ed7565b610cf7610ca182848a6124cb565b610ccc610cb3610cb36020840161256d565b73ffffffffffffffffffffffffffffffffffffffff1690565b7f575ff3acadd5ab348fe1855e217e0f3678f8d767d7494c9f9fefbee2e17cca4d600080a280612519565b906000915b808310610d1457505050610d0f90612491565b610c5c565b90919497610d4f610d49610d5592610d438c8b610d3c82610d368e8b8d611dec565b92611dca565b519161233f565b906121d5565b99612491565b95612491565b9190610cfc565b610d678186886124cb565b6020610d7f610d768380612519565b9290930161256d565b9173ffffffffffffffffffffffffffffffffffffffff60009316905b828410610db45750505050610daf90612491565b610c4d565b90919294610d4f81610de985610de2610dd0610dee968d611dca565b51610ddc8c8b8a611dec565b85613448565b908b613148565b612491565b929190610d9b565b610e018285876124cb565b90610e0c8280612519565b92610e1c610cb36020830161256d565b9173ffffffffffffffffffffffffffffffffffffffff8316610e416001821415612577565b610e62575b505050610e5c91610e56916121d5565b91612491565b90610c13565b909592610e7b6040999693999895989788810190611fc8565b92908a3b156103595789938b918a5193849283927fe3563a4f00000000000000000000000000000000000000000000000000000000845260049e8f850193610ec294612711565b03815a93600094fa9081610f3b575b50610f255786517f86a9f75000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8a16818a0190815281906020010390fd5b0390fd5b9497509295509093509181610e56610e5c610e46565b80610f48610f4e9261057b565b8061111e565b38610ed1565b50346103595760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103595761083e73ffffffffffffffffffffffffffffffffffffffff600435610fa881610422565b608060409283928351610fba81610535565b60009381858093528260208201528287820152826060820152015216815280602052209061104965ffffffffffff6001835194610ff686610535565b80546dffffffffffffffffffffffffffff8082168852607082901c60ff161515602089015260789190911c1685870152015463ffffffff8116606086015260201c16608084019065ffffffffffff169052565b5191829182919091608065ffffffffffff8160a08401956dffffffffffffffffffffffffffff808251168652602082015115156020870152604082015116604086015263ffffffff6060820151166060860152015116910152565b50346103595760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103595773ffffffffffffffffffffffffffffffffffffffff6004356110f581610422565b16600052600060205260206dffffffffffffffffffffffffffff60406000205416604051908152f35b600091031261035957565b50346103595760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261035957602060405160018152f35b50346103595760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261035957600467ffffffffffffffff8135818111610359576111b590369084016106b9565b9050602435916111c483610422565b604435908111610359576111db90369085016106b9565b92909115908161132d575b506112c6576014821015611236575b610f21836040519182917f08c379a0000000000000000000000000000000000000000000000000000000008352820160409060208152600060208201520190565b6112466112529261124c92612b88565b90612b96565b60601c90565b3b1561125f5738806111f5565b610f21906040519182917f08c379a0000000000000000000000000000000000000000000000000000000008352820160609060208152601b60208201527f41413330207061796d6173746572206e6f74206465706c6f796564000000000060408201520190565b610f21836040519182917f08c379a0000000000000000000000000000000000000000000000000000000008352820160609060208152601960208201527f41413230206163636f756e74206e6f74206465706c6f7965640000000000000060408201520190565b90503b15386111e6565b50346103595760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103595760043567ffffffffffffffff81116103595761138960249136906004016106b9565b906113bf6040519283927f570e1a3600000000000000000000000000000000000000000000000000000000845260048401612d2c565b0360208273ffffffffffffffffffffffffffffffffffffffff92816000857f0000000000000000000000007fc98430eaedbb6070b35b39d798725049088348165af1918215611471575b600092611441575b50604051917f6ca7b806000000000000000000000000000000000000000000000000000000008352166004820152fd5b61146391925060203d811161146a575b61145b81836105ab565b810190612d17565b9038611411565b503d611451565b611479612183565b611409565b90816101609103126103595790565b60207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc820112610359576004359067ffffffffffffffff8211610359576108b79160040161147e565b50346103595760206114ef6114ea3661148d565b612a0c565b604051908152f35b5060207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103595761002160043561153181610422565b61562b565b5034610359576000807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126116b1573381528060205260408120600181019063ffffffff825416908115611653576115f06115b5611618936115a76115a2855460ff9060701c1690565b61598f565b65ffffffffffff42166159f4565b84547fffffffffffffffffffffffffffffffffffffffffffff000000000000ffffffff16602082901b69ffffffffffff000000001617909455565b7fffffffffffffffffffffffffffffffffff00ffffffffffffffffffffffffffff8154169055565b60405165ffffffffffff91909116815233907ffa9b3c14cc825c412c9ed81b3ba365a5b459439403f18829e572ed53a4180f0a90602090a280f35b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f6e6f74207374616b6564000000000000000000000000000000000000000000006044820152fd5b80fd5b50346103595760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610359576004356116f081610422565b610ad273ffffffffffffffffffffffffffffffffffffffff6117323373ffffffffffffffffffffffffffffffffffffffff166000526000602052604060002090565b926117ea611755610a2c86546dffffffffffffffffffffffffffff9060781c1690565b94611761861515615a0e565b6117c26001820161179a65ffffffffffff611786835465ffffffffffff9060201c1690565b16611792811515615a73565b421015615ad8565b80547fffffffffffffffffffffffffffffffffffffffffffff00000000000000000000169055565b7fffffff0000000000000000000000000000ffffffffffffffffffffffffffffff8154169055565b6040805173ffffffffffffffffffffffffffffffffffffffff831681526020810186905233917fb7c918e0e249f999e965cafeb6c664271b3f4317d296461500e71da39f0cbda391a2600080809581948294165af1611847611ea7565b50615b3d565b50346103595760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103595767ffffffffffffffff6004358181116103595761189e90369060040161147e565b602435916118ab83610422565b604435908111610359576118c6610f219136906004016106b9565b6118ce611caa565b6118d785612e2b565b6118ea6118e48287613240565b906153ba565b946118fa826000924384526121e2565b96438252819360609573ffffffffffffffffffffffffffffffffffffffff8316611981575b50505050608001519361194e6040611940602084015165ffffffffffff1690565b92015165ffffffffffff1690565b906040519687967f8b7ac980000000000000000000000000000000000000000000000000000000008852600488016127e1565b8395508394965061199b60409492939451809481936127d3565b03925af19060806119aa611ea7565b92919038808061191f565b5034610359576119c43661148d565b6119cc611caa565b6119d582612e2b565b6119df8183613240565b825160a00151919391611a0c9073ffffffffffffffffffffffffffffffffffffffff166154dc565b6154dc565b90611a30611a07855173ffffffffffffffffffffffffffffffffffffffff90511690565b94611a39612b50565b50611a68611a4c60409586810190611fc8565b90600060148310611bc55750611246611a079261124c92612b88565b91611a72916153ba565b805173ffffffffffffffffffffffffffffffffffffffff169073ffffffffffffffffffffffffffffffffffffffff821660018114916080880151978781015191886020820151611ac79065ffffffffffff1690565b91015165ffffffffffff16916060015192611ae06105f9565b9a8b5260208b0152841515898b015265ffffffffffff1660608a015265ffffffffffff16608089015260a088015215159081611bbc575b50611b515750610f2192519485947fe0cff05f00000000000000000000000000000000000000000000000000000000865260048601612cbd565b9190610f2193611b60846154dc565b611b87611b6b610619565b73ffffffffffffffffffffffffffffffffffffffff9096168652565b6020850152519586957ffaecb4e400000000000000000000000000000000000000000000000000000000875260048701612c2b565b90501538611b17565b9150506154dc565b50346103595760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103595773ffffffffffffffffffffffffffffffffffffffff600435611c1e81610422565b16600052600060205260a0604060002065ffffffffffff60018254920154604051926dffffffffffffffffffffffffffff90818116855260ff8160701c161515602086015260781c16604084015263ffffffff8116606084015260201c166080820152f35b60209067ffffffffffffffff8111611c9d575b60051b0190565b611ca5610505565b611c96565b60405190611cb782610535565b604051608083610100830167ffffffffffffffff811184821017611d20575b60405260009283815283602082015283604082015283606082015283838201528360a08201528360c08201528360e082015281528260208201528260408201528260608201520152565b611d28610505565b611cd6565b90611d3782611c83565b611d4460405191826105ab565b8281527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0611d728294611c83565b019060005b828110611d8357505050565b602090611d8e611caa565b82828501015201611d77565b507f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020918151811015611ddf575b60051b010190565b611de7611d9a565b611dd7565b9190811015611e2d575b60051b810135907ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffea181360301821215610359570190565b611e35611d9a565b611df6565b6002805414611e495760028055565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152fd5b3d15611ed2573d90611eb882610639565b91611ec660405193846105ab565b82523d6000602084013e565b606090565b73ffffffffffffffffffffffffffffffffffffffff168015611f6a57600080809381935af1611f04611ea7565b5015611f0c57565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f41413931206661696c65642073656e6420746f2062656e6566696369617279006044820152fd5b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f4141393020696e76616c69642062656e656669636961727900000000000000006044820152fd5b9035907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe181360301821215610359570180359067ffffffffffffffff82116103595760200191813603831361035957565b90816020910312610359575190565b601f82602094937fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0938186528686013760008582860101520116010190565b60005b83811061207a5750506000910152565b818101518382015260200161206a565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f6020936120c681518092818752878088019101612067565b0116010190565b906120e76080916108b796946101c0808652850191612028565b9360e0815173ffffffffffffffffffffffffffffffffffffffff80825116602087015260208201516040870152604082015160608701526060820151858701528482015160a087015260a08201511660c086015260c081015182860152015161010084015260208101516101208401526040810151610140840152606081015161016084015201516101808201526101a081840391015261208a565b506040513d6000823e3d90fd5b507f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b919082039182116121cd57565b61044d612190565b919082018092116121cd57565b905a918160206121fb6060830151936060810190611fc8565b906122348560405195869485947f1d732756000000000000000000000000000000000000000000000000000000008652600486016120cd565b03816000305af16000918161230f575b50612308575060206000803e7fdeaddead000000000000000000000000000000000000000000000000000000006000511461229b5761229561228a6108b7945a906121c0565b6080840151906121d5565b91614afc565b6040517f220266b600000000000000000000000000000000000000000000000000000000815280610f21600482016080906000815260406020820152600f60408201527f41413935206f7574206f6620676173000000000000000000000000000000000060608201520190565b9250505090565b61233191925060203d8111612338575b61232981836105ab565b810190612019565b9038612244565b503d61231f565b909291925a9380602061235b6060830151946060810190611fc8565b906123948660405195869485947f1d732756000000000000000000000000000000000000000000000000000000008652600486016120cd565b03816000305af160009181612471575b5061246a575060206000803e7fdeaddead00000000000000000000000000000000000000000000000000000000600051146123fc576123f66123eb6108b795965a906121c0565b6080830151906121d5565b92614ddf565b610f21836040519182917f220266b600000000000000000000000000000000000000000000000000000000835260048301608091815260406020820152600f60408201527f41413935206f7574206f6620676173000000000000000000000000000000000060608201520190565b9450505050565b61248a91925060203d81116123385761232981836105ab565b90386123a4565b6001907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146124bf570190565b6124c7612190565b0190565b919081101561250c575b60051b810135907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa181360301821215610359570190565b612514611d9a565b6124d5565b9035907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe181360301821215610359570180359067ffffffffffffffff821161035957602001918160051b3603831361035957565b356108b781610422565b1561257e57565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f4141393620696e76616c69642061676772656761746f720000000000000000006044820152fd5b90357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18236030181121561035957016020813591019167ffffffffffffffff821161035957813603831361035957565b6108b7916126578161263d8461045c565b73ffffffffffffffffffffffffffffffffffffffff169052565b602082013560208201526126f26126a361268861267760408601866125dc565b610160806040880152860191612028565b61269560608601866125dc565b908583036060870152612028565b6080840135608084015260a084013560a084015260c084013560c084015260e084013560e084015261010080850135908401526101206126e5818601866125dc565b9185840390860152612028565b9161270361014091828101906125dc565b929091818503910152612028565b949391929083604087016040885252606086019360608160051b8801019482600090815b848310612754575050505050508460206108b795968503910152612028565b9091929394977fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa08b820301855288357ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffea1843603018112156127cf57600191846127bd920161262c565b98602090810196950193019190612735565b8280fd5b908092918237016000815290565b9290936108b796959260c0958552602085015265ffffffffffff8092166040850152166060830152151560808201528160a0820152019061208a565b1561282457565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f4141393220696e7465726e616c2063616c6c206f6e6c790000000000000000006044820152fd5b9060406108b79260008152816020820152019061208a565b6040906108b793928152816020820152019061208a565b909291925a936128c230331461281d565b8151946040860151955a6113886060830151890101116129e2576108b7966000958051612909575b50505090612903915a9003608084015101943691610682565b91615047565b612938916129349161292f855173ffffffffffffffffffffffffffffffffffffffff1690565b615c12565b1590565b612944575b80806128ea565b61290392919450612953615c24565b908151612967575b5050600193909161293d565b7f1c4fada7374c0a9ee8841fc38afe82932dc0f8e69012e927f061a8bae611a20173ffffffffffffffffffffffffffffffffffffffff6020870151926129d860206129c6835173ffffffffffffffffffffffffffffffffffffffff1690565b9201519560405193849316968361289a565b0390a3388061295b565b7fdeaddead0000000000000000000000000000000000000000000000000000000060005260206000fd5b612a22612a1c6040830183611fc8565b90615c07565b90612a33612a1c6060830183611fc8565b90612ae9612a48612a1c610120840184611fc8565b60405194859360208501956101008201359260e08301359260c08101359260a08201359260808301359273ffffffffffffffffffffffffffffffffffffffff60208201359135168c9693909a9998959261012098959273ffffffffffffffffffffffffffffffffffffffff6101408a019d168952602089015260408801526060870152608086015260a085015260c084015260e08301526101008201520152565b0391612b1b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0938481018352826105ab565b51902060408051602081019283523091810191909152466060820152608092830181529091612b4a90826105ab565b51902090565b604051906040820182811067ffffffffffffffff821117612b7b575b60405260006020838281520152565b612b83610505565b612b6c565b906014116103595790601490565b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000009035818116939260148110612bcb57505050565b60140360031b82901b16169150565b9060c060a06108b793805184526020810151602085015260408101511515604085015265ffffffffffff80606083015116606086015260808201511660808501520151918160a0820152019061208a565b9294612c8c61044d95612c7a610100959998612c68612c54602097610140808c528b0190612bda565b9b878a019060208091805184520151910152565b80516060890152602001516080880152565b805160a08701526020015160c0860152565b73ffffffffffffffffffffffffffffffffffffffff81511660e0850152015191019060208091805184520151910152565b612d0661044d94612cf4612cdf60a0959998969960e0865260e0860190612bda565b98602085019060208091805184520151910152565b80516060840152602001516080830152565b019060208091805184520151910152565b9081602091031261035957516108b781610422565b9160206108b7938181520191612028565b90612d6c73ffffffffffffffffffffffffffffffffffffffff916108b797959694606085526060850191612028565b941660208201526040818503910152612028565b60009060033d11612d8d57565b905060046000803e60005160e01c90565b600060443d106108b7576040517ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc91823d016004833e815167ffffffffffffffff918282113d602484011117612e1a57818401948551938411612e22573d85010160208487010111612e1a57506108b7929101602001906105ab565b949350505050565b50949350505050565b612e386040820182611fc8565b612e50612e448461256d565b93610120810190611fc8565b9290303b1561035957600093612e949160405196879586957f957122ab00000000000000000000000000000000000000000000000000000000875260048701612d3d565b0381305afa9081612f1d575b5061044d576001612eaf612d80565b6308c379a014612ec8575b612ec057565b61044d612183565b612ed0612d9e565b80612edc575b50612eba565b80516000925015612ed657610f21906040519182917f220266b600000000000000000000000000000000000000000000000000000000835260048301612882565b80610f48612f2a9261057b565b38612ea0565b9190612f3b9061317f565b73ffffffffffffffffffffffffffffffffffffffff929183166130da5761306c57612f659061317f565b9116612ffe57612f725750565b604080517f220266b600000000000000000000000000000000000000000000000000000000815260048101929092526024820152602160448201527f41413332207061796d61737465722065787069726564206f72206e6f7420647560648201527f6500000000000000000000000000000000000000000000000000000000000000608482015260a490fd5b610f21826040519182917f220266b600000000000000000000000000000000000000000000000000000000835260048301608091815260406020820152601460408201527f41413334207369676e6174757265206572726f7200000000000000000000000060608201520190565b610f21836040519182917f220266b600000000000000000000000000000000000000000000000000000000835260048301608091815260406020820152601760408201527f414132322065787069726564206f72206e6f742064756500000000000000000060608201520190565b610f21846040519182917f220266b600000000000000000000000000000000000000000000000000000000835260048301608091815260406020820152601460408201527f41413234207369676e6174757265206572726f7200000000000000000000000060608201520190565b9291906131549061317f565b909273ffffffffffffffffffffffffffffffffffffffff808095169116036130da5761306c57612f65905b80156131d25761318e9061535f565b73ffffffffffffffffffffffffffffffffffffffff65ffffffffffff8060408401511642119081156131c2575b5091511691565b90506020830151164210386131bb565b50600090600090565b156131e257565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f41413934206761732076616c756573206f766572666c6f7700000000000000006044820152fd5b916000915a9381519061325382826136b3565b61325c81612a0c565b602084015261329a6effffffffffffffffffffffffffffff60808401516060850151176040850151176101008401359060e0850135171711156131db565b6132a382613775565b6132ae818584613836565b97906132df6129346132d4875173ffffffffffffffffffffffffffffffffffffffff1690565b60208801519061546c565b6133db576132ec43600052565b73ffffffffffffffffffffffffffffffffffffffff61332460a0606097015173ffffffffffffffffffffffffffffffffffffffff1690565b166133c1575b505a810360a0840135106133545760809360c092604087015260608601525a900391013501910152565b6040517f220266b600000000000000000000000000000000000000000000000000000000815280610f21600482016080906000815260406020820152601e60408201527f41413430206f76657220766572696669636174696f6e4761734c696d6974000060608201520190565b909350816133d2929750858461455c565b9590923861332a565b6040517f220266b600000000000000000000000000000000000000000000000000000000815280610f21600482016080906000815260406020820152601a60408201527f4141323520696e76616c6964206163636f756e74206e6f6e636500000000000060608201520190565b9290916000925a825161345b81846136b3565b61346483612a0c565b60208501526134a26effffffffffffffffffffffffffffff60808301516060840151176040840151176101008601359060e0870135171711156131db565b6134ab81613775565b6134b78186868b613ba2565b98906134e86129346134dd865173ffffffffffffffffffffffffffffffffffffffff1690565b60208701519061546c565b6135e0576134f543600052565b73ffffffffffffffffffffffffffffffffffffffff61352d60a0606096015173ffffffffffffffffffffffffffffffffffffffff1690565b166135c5575b505a840360a08601351061355f5750604085015260608401526080919060c0905a900391013501910152565b604080517f220266b600000000000000000000000000000000000000000000000000000000815260048101929092526024820152601e60448201527f41413430206f76657220766572696669636174696f6e4761734c696d697400006064820152608490fd5b909250816135d79298508686856147ef565b96909138613533565b610f21826040519182917f220266b600000000000000000000000000000000000000000000000000000000835260048301608091815260406020820152601a60408201527f4141323520696e76616c6964206163636f756e74206e6f6e636500000000000060608201520190565b1561365557565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f4141393320696e76616c6964207061796d6173746572416e64446174610000006044820152fd5b613725906136dd6136c38261256d565b73ffffffffffffffffffffffffffffffffffffffff168452565b602081013560208401526080810135604084015260a0810135606084015260c0810135608084015260e081013560c084015261010081013560e0840152610120810190611fc8565b90811561376a5761374f61124c6112468460a09461374a601461044d9998101561364e565b612b88565b73ffffffffffffffffffffffffffffffffffffffff16910152565b505060a06000910152565b60a081015173ffffffffffffffffffffffffffffffffffffffff16156137b75760c060035b60ff60408401519116606084015102016080830151019101510290565b60c0600161379a565b6137d86040929594939560608352606083019061262c565b9460208201520152565b9061044d602f60405180947f414132332072657665727465643a20000000000000000000000000000000000060208301526138268151809260208686019101612067565b810103600f8101855201836105ab565b916000926000925a936139046020835193613865855173ffffffffffffffffffffffffffffffffffffffff1690565b9561387d6138766040830183611fc8565b9084613e0d565b60a086015173ffffffffffffffffffffffffffffffffffffffff16906138a243600052565b85809373ffffffffffffffffffffffffffffffffffffffff809416159889613b3a575b60600151908601516040517f3a871cdd0000000000000000000000000000000000000000000000000000000081529788968795869390600485016137c0565b03938a1690f1829181613b1a575b50613b115750600190613923612d80565b6308c379a014613abd575b50613a50575b613941575b50505a900391565b61396b9073ffffffffffffffffffffffffffffffffffffffff166000526000602052604060002090565b613986610a2c82546dffffffffffffffffffffffffffff1690565b8083116139e3576139dc926dffffffffffffffffffffffffffff9103166dffffffffffffffffffffffffffff167fffffffffffffffffffffffffffffffffffff0000000000000000000000000000825416179055565b3880613939565b6040517f220266b600000000000000000000000000000000000000000000000000000000815280610f21600482016080906000815260406020820152601760408201527f41413231206469646e2774207061792070726566756e6400000000000000000060608201520190565b6040517f220266b600000000000000000000000000000000000000000000000000000000815280610f21600482016080906000815260406020820152601660408201527f4141323320726576657274656420286f72204f4f47290000000000000000000060608201520190565b613ac5612d9e565b9081613ad1575061392e565b610f2191613adf91506137e2565b6040519182917f220266b600000000000000000000000000000000000000000000000000000000835260048301612882565b95506139349050565b613b3391925060203d81116123385761232981836105ab565b9038613912565b9450613b80610a2c613b6c8c73ffffffffffffffffffffffffffffffffffffffff166000526000602052604060002090565b546dffffffffffffffffffffffffffff1690565b8b811115613b975750856060835b969150506138c5565b606087918d03613b8e565b90926000936000935a94613beb6020835193613bd2855173ffffffffffffffffffffffffffffffffffffffff1690565b9561387d613be36040830183611fc8565b90848c61412b565b03938a1690f1829181613ded575b50613de45750600190613c0a612d80565b6308c379a014613d8e575b50613d20575b613c29575b5050505a900391565b613c539073ffffffffffffffffffffffffffffffffffffffff166000526000602052604060002090565b91613c6f610a2c84546dffffffffffffffffffffffffffff1690565b90818311613cba575082547fffffffffffffffffffffffffffffffffffff0000000000000000000000000000169190036dffffffffffffffffffffffffffff16179055388080613c20565b604080517f220266b600000000000000000000000000000000000000000000000000000000815260048101929092526024820152601760448201527f41413231206469646e2774207061792070726566756e640000000000000000006064820152608490fd5b610f21846040519182917f220266b600000000000000000000000000000000000000000000000000000000835260048301608091815260406020820152601660408201527f4141323320726576657274656420286f72204f4f47290000000000000000000060608201520190565b613d96612d9e565b9081613da25750613c15565b8691613dae91506137e2565b90610f216040519283927f220266b60000000000000000000000000000000000000000000000000000000084526004840161289a565b9650613c1b9050565b613e0691925060203d81116123385761232981836105ab565b9038613bf9565b909180613e1957505050565b81515173ffffffffffffffffffffffffffffffffffffffff1692833b6140be57606083510151604051907f570e1a3600000000000000000000000000000000000000000000000000000000825260208280613e78878760048401612d2c565b0381600073ffffffffffffffffffffffffffffffffffffffff95867f0000000000000000000000007fc98430eaedbb6070b35b39d7987250490883481690f19182156140b1575b600092614091575b508082169586156140245716809503613fb7573b15613f4a5761124c6112467fd51a9c61267aa6196961883ecf5ff2da6619c37dac0fa92122513fb32c032d2d93613f1193612b88565b602083810151935160a001516040805173ffffffffffffffffffffffffffffffffffffffff9485168152939091169183019190915290a3565b6040517f220266b600000000000000000000000000000000000000000000000000000000815280610f21600482016080906000815260406020820152602060408201527f4141313520696e6974436f6465206d757374206372656174652073656e64657260608201520190565b6040517f220266b600000000000000000000000000000000000000000000000000000000815280610f21600482016080906000815260406020820152602060408201527f4141313420696e6974436f6465206d7573742072657475726e2073656e64657260608201520190565b6040517f220266b600000000000000000000000000000000000000000000000000000000815280610f21600482016080906000815260406020820152601b60408201527f4141313320696e6974436f6465206661696c6564206f72204f4f47000000000060608201520190565b6140aa91925060203d811161146a5761145b81836105ab565b9038613ec7565b6140b9612183565b613ebf565b6040517f220266b600000000000000000000000000000000000000000000000000000000815280610f21600482016080906000815260406020820152601f60408201527f414131302073656e64657220616c726561647920636f6e73747275637465640060608201520190565b9290918161413a575b50505050565b82515173ffffffffffffffffffffffffffffffffffffffff1693843b6143e257606084510151604051907f570e1a3600000000000000000000000000000000000000000000000000000000825260208280614199888860048401612d2c565b0381600073ffffffffffffffffffffffffffffffffffffffff95867f0000000000000000000000007fc98430eaedbb6070b35b39d7987250490883481690f19182156143d5575b6000926143b5575b5080821696871561434757168096036142d9573b15614273575061124c6112467fd51a9c61267aa6196961883ecf5ff2da6619c37dac0fa92122513fb32c032d2d9361423393612b88565b602083810151935160a001516040805173ffffffffffffffffffffffffffffffffffffffff9485168152939091169183019190915290a338808080614134565b604080517f220266b600000000000000000000000000000000000000000000000000000000815260048101929092526024820152602060448201527f4141313520696e6974436f6465206d757374206372656174652073656e6465726064820152608490fd5b610f21826040519182917f220266b600000000000000000000000000000000000000000000000000000000835260048301608091815260406020820152602060408201527f4141313420696e6974436f6465206d7573742072657475726e2073656e64657260608201520190565b610f21846040519182917f220266b600000000000000000000000000000000000000000000000000000000835260048301608091815260406020820152601b60408201527f4141313320696e6974436f6465206661696c6564206f72204f4f47000000000060608201520190565b6143ce91925060203d811161146a5761145b81836105ab565b90386141e8565b6143dd612183565b6141e0565b604080517f220266b600000000000000000000000000000000000000000000000000000000815260048101929092526024820152601f60448201527f414131302073656e64657220616c726561647920636f6e7374727563746564006064820152608490fd5b1561444f57565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f4141343120746f6f206c6974746c6520766572696669636174696f6e476173006044820152fd5b919060408382031261035957825167ffffffffffffffff81116103595783019080601f83011215610359578151916144e483610639565b916144f260405193846105ab565b838352602084830101116103595760209261451291848085019101612067565b92015190565b9061044d602f60405180947f414133332072657665727465643a20000000000000000000000000000000000060208301526138268151809260208686019101612067565b93919260609460009460009380519261459b60a08a86015195614580888811614448565b015173ffffffffffffffffffffffffffffffffffffffff1690565b916145c68373ffffffffffffffffffffffffffffffffffffffff166000526000602052604060002090565b946145e2610a2c87546dffffffffffffffffffffffffffff1690565b968588106147825773ffffffffffffffffffffffffffffffffffffffff60208a98946146588a966dffffffffffffffffffffffffffff8b6146919e03166dffffffffffffffffffffffffffff167fffffffffffffffffffffffffffffffffffff0000000000000000000000000000825416179055565b015194604051998a98899788937ff465c77e000000000000000000000000000000000000000000000000000000008552600485016137c0565b0395169103f190818391849361475c575b506147555750506001906146b4612d80565b6308c379a014614733575b506146c657565b6040517f220266b600000000000000000000000000000000000000000000000000000000815280610f21600482016080906000815260406020820152601660408201527f4141333320726576657274656420286f72204f4f47290000000000000000000060608201520190565b61473b612d9e565b908161474757506146bf565b610f2191613adf9150614518565b9450925050565b90925061477b91503d8085833e61477381836105ab565b8101906144ad565b91386146a2565b6040517f220266b600000000000000000000000000000000000000000000000000000000815280610f21600482016080906000815260406020820152601e60408201527f41413331207061796d6173746572206465706f73697420746f6f206c6f77000060608201520190565b91949293909360609560009560009382519061481660a08b84015193614580848611614448565b936148418573ffffffffffffffffffffffffffffffffffffffff166000526000602052604060002090565b61485c610a2c82546dffffffffffffffffffffffffffff1690565b8781106149b7579273ffffffffffffffffffffffffffffffffffffffff60208a989693946146588a966dffffffffffffffffffffffffffff8d6148d69e9c9a03166dffffffffffffffffffffffffffff167fffffffffffffffffffffffffffffffffffff0000000000000000000000000000825416179055565b0395169103f1908183918493614999575b506149915750506001906148f9612d80565b6308c379a014614972575b5061490c5750565b604080517f220266b600000000000000000000000000000000000000000000000000000000815260048101929092526024820152601660448201527f4141333320726576657274656420286f72204f4f4729000000000000000000006064820152608490fd5b61497a612d9e565b90816149865750614904565b613dae925050614518565b955093505050565b9092506149b091503d8085833e61477381836105ab565b91386148e7565b610f218a6040519182917f220266b600000000000000000000000000000000000000000000000000000000835260048301608091815260406020820152601e60408201527f41413331207061796d6173746572206465706f73697420746f6f206c6f77000060608201520190565b60031115614a2f57565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b929190614a7c6040916002865260606020870152606086019061208a565b930152565b939291906003811015614a2f57604091614a7c91865260606020870152606086019061208a565b9061044d603660405180947f4141353020706f73744f702072657665727465643a20000000000000000000006020830152614aec8151809260208686019101612067565b81010360168101855201836105ab565b929190925a93600091805191614b1183615318565b9260a0810195614b35875173ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff93908481169081614ca457505050614b76825173ffffffffffffffffffffffffffffffffffffffff1690565b985b5a90030193840297604084019089825110614c37577f49628fd1471006c1482da88028e9ce4dbb080b815c9b0344d39e5a8e6ec1419f94614bc26020928c614c329551039061553a565b015194896020614c04614be9865173ffffffffffffffffffffffffffffffffffffffff1690565b9a5173ffffffffffffffffffffffffffffffffffffffff1690565b9401519785604051968796169a16988590949392606092608083019683521515602083015260408201520152565b0390a4565b6040517f220266b600000000000000000000000000000000000000000000000000000000815280610f21600482016080906000815260406020820152602060408201527f414135312070726566756e642062656c6f772061637475616c476173436f737460608201520190565b9a918051614cb4575b5050614b78565b6060850151600099509091803b15614ddb579189918983614d07956040518097819682957fa9a234090000000000000000000000000000000000000000000000000000000084528c029060048401614a5e565b0393f19081614dc8575b50614dc3576001614d20612d80565b6308c379a014614da4575b614d37575b3880614cad565b6040517f220266b600000000000000000000000000000000000000000000000000000000815280610f21600482016080906000815260406020820152601260408201527f4141353020706f73744f7020726576657274000000000000000000000000000060608201520190565b614dac612d9e565b80614db75750614d2b565b613adf610f2191614aa8565b614d30565b80610f48614dd59261057b565b38614d11565b8980fd5b9392915a90600092805190614df382615318565b9360a0830196614e17885173ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff95908681169081614f0d57505050614e58845173ffffffffffffffffffffffffffffffffffffffff1690565b915b5a9003019485029860408301908a825110614ea757507f49628fd1471006c1482da88028e9ce4dbb080b815c9b0344d39e5a8e6ec1419f949392614bc2614c32938c60209451039061553a565b604080517f220266b600000000000000000000000000000000000000000000000000000000815260048101929092526024820152602060448201527f414135312070726566756e642062656c6f772061637475616c476173436f73746064820152608490fd5b93918051614f1d575b5050614e5a565b606087015160009a509091803b1561504357918a918a83614f70956040518097819682957fa9a234090000000000000000000000000000000000000000000000000000000084528c029060048401614a5e565b0393f19081615030575b5061502b576001614f89612d80565b6308c379a01461500e575b614fa0575b3880614f16565b610f218b6040519182917f220266b600000000000000000000000000000000000000000000000000000000835260048301608091815260406020820152601260408201527f4141353020706f73744f7020726576657274000000000000000000000000000060608201520190565b615016612d9e565b806150215750614f94565b613dae8d91614aa8565b614f99565b80610f4861503d9261057b565b38614f7a565b8a80fd5b909392915a9480519161505983615318565b9260a081019561507d875173ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff938185169182615165575050506150bd825173ffffffffffffffffffffffffffffffffffffffff1690565b985b5a90030193840297604084019089825110614c37577f49628fd1471006c1482da88028e9ce4dbb080b815c9b0344d39e5a8e6ec1419f946151096020928c614c329551039061553a565b61511288614a25565b015194896020615139614be9865173ffffffffffffffffffffffffffffffffffffffff1690565b940151604080519182529815602082015297880152606087015290821695909116939081906080820190565b9a918151615175575b50506150bf565b8784026151818a614a25565b60028a1461520c576060860151823b15610359576151d493600080948d604051978896879586937fa9a2340900000000000000000000000000000000000000000000000000000000855260048501614a81565b0393f180156151ff575b6151ec575b505b388061516e565b80610f486151f99261057b565b386151e3565b615207612183565b6151de565b6060860151823b156103595761525793600080948d604051978896879586937fa9a2340900000000000000000000000000000000000000000000000000000000855260048501614a81565b0393f19081615305575b50615300576001615270612d80565b6308c379a0146152ed575b156151e5576040517f220266b600000000000000000000000000000000000000000000000000000000815280610f21600482016080906000815260406020820152601260408201527f4141353020706f73744f7020726576657274000000000000000000000000000060608201520190565b6152f5612d9e565b80614db7575061527b565b6151e5565b80610f486153129261057b565b38615261565b60e060c082015191015180821461533c57480180821015615337575090565b905090565b5090565b6040519061534d8261058f565b60006040838281528260208201520152565b615367615340565b5065ffffffffffff808260a01c1680156153b3575b604051926153898461058f565b73ffffffffffffffffffffffffffffffffffffffff8116845260d01c602084015216604082015290565b508061537c565b6153cf6153d5916153c9615340565b5061535f565b9161535f565b9073ffffffffffffffffffffffffffffffffffffffff9182825116928315615461575b65ffffffffffff928391826040816020850151169301511693836040816020840151169201511690808410615459575b50808511615451575b506040519561543f8761058f565b16855216602084015216604082015290565b935038615431565b925038615428565b8151811693506153f8565b73ffffffffffffffffffffffffffffffffffffffff16600052600160205267ffffffffffffffff6154c88260401c60406000209077ffffffffffffffffffffffffffffffffffffffffffffffff16600052602052604060002090565b918254926154d584612491565b9055161490565b9073ffffffffffffffffffffffffffffffffffffffff6154fa612b50565b9216600052600060205263ffffffff600160406000206dffffffffffffffffffffffffffff815460781c1685520154166020830152565b61044d3361562b565b73ffffffffffffffffffffffffffffffffffffffff16600052600060205260406000206dffffffffffffffffffffffffffff8082541692830180931161561e575b8083116155c05761044d92166dffffffffffffffffffffffffffff167fffffffffffffffffffffffffffffffffffff0000000000000000000000000000825416179055565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f6465706f736974206f766572666c6f77000000000000000000000000000000006044820152fd5b615626612190565b61557b565b73ffffffffffffffffffffffffffffffffffffffff9061564b348261553a565b168060005260006020527f2da466a7b24304f47e87fa2e1e5a81b9831ce54fec19055ce277ca2f39ba42c460206dffffffffffffffffffffffffffff60406000205416604051908152a2565b1561569e57565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f6d757374207370656369667920756e7374616b652064656c61790000000000006044820152fd5b1561570357565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f63616e6e6f7420646563726561736520756e7374616b652074696d65000000006044820152fd5b1561576857565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f6e6f207374616b652073706563696669656400000000000000000000000000006044820152fd5b156157cd57565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f7374616b65206f766572666c6f770000000000000000000000000000000000006044820152fd5b9065ffffffffffff6080600161044d9461588b6dffffffffffffffffffffffffffff86511682906dffffffffffffffffffffffffffff167fffffffffffffffffffffffffffffffffffff0000000000000000000000000000825416179055565b602085015115156eff000000000000000000000000000082549160701b16807fffffffffffffffffffffffffffffffffff00ffffffffffffffffffffffffffff83161783557fffffff000000000000000000000000000000ffffffffffffffffffffffffffff7cffffffffffffffffffffffffffff000000000000000000000000000000604089015160781b16921617178155019263ffffffff6060820151167fffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000008554161784550151167fffffffffffffffffffffffffffffffffffffffffffff000000000000ffffffff69ffffffffffff0000000083549260201b169116179055565b1561599657565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f616c726561647920756e7374616b696e670000000000000000000000000000006044820152fd5b91909165ffffffffffff808094169116019182116121cd57565b15615a1557565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f4e6f207374616b6520746f2077697468647261770000000000000000000000006044820152fd5b15615a7a57565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f6d7573742063616c6c20756e6c6f636b5374616b6528292066697273740000006044820152fd5b15615adf57565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f5374616b65207769746864726177616c206973206e6f742064756500000000006044820152fd5b15615b4457565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f6661696c656420746f207769746864726177207374616b6500000000000000006044820152fd5b15615ba957565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f6661696c656420746f20776974686472617700000000000000000000000000006044820152fd5b816040519182372090565b9060009283809360208451940192f190565b3d610800808211615c4b575b50604051906020818301016040528082526000602083013e90565b905038615c3056fea2646970667358221220a706d8b02d7086d80e9330811f5af84b2614abdc5e9a1f2260126070a31d7cee64736f6c63430008110033",
  },
  SENDER_CREATOR_V06: {
    address: "0x7fc98430eAEdbb6070B35B39D798725049088348",
    abi: [
      {
        inputs: [{internalType: "bytes", name: "initCode", type: "bytes"}],
        name: "createSender",
        outputs: [{internalType: "address", name: "sender", type: "address"}],
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
    bytecode:
      "0x6080604052600436101561001257600080fd5b6000803560e01c63570e1a361461002857600080fd5b346100c95760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100c95760043567ffffffffffffffff918282116100c957366023830112156100c95781600401359283116100c95736602484840101116100c9576100c561009e84602485016100fc565b60405173ffffffffffffffffffffffffffffffffffffffff90911681529081906020820190565b0390f35b80fd5b507f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b90806014116101bb5767ffffffffffffffff917fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec82018381116101cd575b604051937fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f81600b8701160116850190858210908211176101c0575b604052808452602084019036848401116101bb576020946000600c819682946014880187378301015251923560601c5af19060005191156101b557565b60009150565b600080fd5b6101c86100cc565b610178565b6101d56100cc565b61013a56fea26469706673582212201927e80b76ab9b71c952137dd676621a9fdf520c25928815636594036eb1c40364736f6c63430008110033",
  },
  ENTRY_POINT_V07: {
    address: "0x0000000071727De22E5E9d8BAf0edAc6f37da032",
    abi: [
      {
        inputs: [
          {internalType: "bool", name: "success", type: "bool"},
          {internalType: "bytes", name: "ret", type: "bytes"},
        ],
        name: "DelegateAndRevert",
        type: "error",
      },
      {
        inputs: [
          {internalType: "uint256", name: "opIndex", type: "uint256"},
          {internalType: "string", name: "reason", type: "string"},
        ],
        name: "FailedOp",
        type: "error",
      },
      {
        inputs: [
          {internalType: "uint256", name: "opIndex", type: "uint256"},
          {internalType: "string", name: "reason", type: "string"},
          {internalType: "bytes", name: "inner", type: "bytes"},
        ],
        name: "FailedOpWithRevert",
        type: "error",
      },
      {
        inputs: [{internalType: "bytes", name: "returnData", type: "bytes"}],
        name: "PostOpReverted",
        type: "error",
      },
      {inputs: [], name: "ReentrancyGuardReentrantCall", type: "error"},
      {
        inputs: [{internalType: "address", name: "sender", type: "address"}],
        name: "SenderAddressResult",
        type: "error",
      },
      {
        inputs: [
          {internalType: "address", name: "aggregator", type: "address"},
        ],
        name: "SignatureValidationFailed",
        type: "error",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "bytes32",
            name: "userOpHash",
            type: "bytes32",
          },
          {
            indexed: true,
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            indexed: false,
            internalType: "address",
            name: "factory",
            type: "address",
          },
          {
            indexed: false,
            internalType: "address",
            name: "paymaster",
            type: "address",
          },
        ],
        name: "AccountDeployed",
        type: "event",
      },
      {anonymous: false, inputs: [], name: "BeforeExecution", type: "event"},
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "account",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "totalDeposit",
            type: "uint256",
          },
        ],
        name: "Deposited",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "bytes32",
            name: "userOpHash",
            type: "bytes32",
          },
          {
            indexed: true,
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "bytes",
            name: "revertReason",
            type: "bytes",
          },
        ],
        name: "PostOpRevertReason",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "aggregator",
            type: "address",
          },
        ],
        name: "SignatureAggregatorChanged",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "account",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "totalStaked",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "unstakeDelaySec",
            type: "uint256",
          },
        ],
        name: "StakeLocked",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "account",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "withdrawTime",
            type: "uint256",
          },
        ],
        name: "StakeUnlocked",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "account",
            type: "address",
          },
          {
            indexed: false,
            internalType: "address",
            name: "withdrawAddress",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "StakeWithdrawn",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "bytes32",
            name: "userOpHash",
            type: "bytes32",
          },
          {
            indexed: true,
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "paymaster",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {indexed: false, internalType: "bool", name: "success", type: "bool"},
          {
            indexed: false,
            internalType: "uint256",
            name: "actualGasCost",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "actualGasUsed",
            type: "uint256",
          },
        ],
        name: "UserOperationEvent",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "bytes32",
            name: "userOpHash",
            type: "bytes32",
          },
          {
            indexed: true,
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
        ],
        name: "UserOperationPrefundTooLow",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "bytes32",
            name: "userOpHash",
            type: "bytes32",
          },
          {
            indexed: true,
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "bytes",
            name: "revertReason",
            type: "bytes",
          },
        ],
        name: "UserOperationRevertReason",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "account",
            type: "address",
          },
          {
            indexed: false,
            internalType: "address",
            name: "withdrawAddress",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "Withdrawn",
        type: "event",
      },
      {
        inputs: [
          {internalType: "uint32", name: "unstakeDelaySec", type: "uint32"},
        ],
        name: "addStake",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [{internalType: "address", name: "account", type: "address"}],
        name: "balanceOf",
        outputs: [{internalType: "uint256", name: "", type: "uint256"}],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {internalType: "address", name: "target", type: "address"},
          {internalType: "bytes", name: "data", type: "bytes"},
        ],
        name: "delegateAndRevert",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [{internalType: "address", name: "account", type: "address"}],
        name: "depositTo",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [{internalType: "address", name: "", type: "address"}],
        name: "deposits",
        outputs: [
          {internalType: "uint256", name: "deposit", type: "uint256"},
          {internalType: "bool", name: "staked", type: "bool"},
          {internalType: "uint112", name: "stake", type: "uint112"},
          {internalType: "uint32", name: "unstakeDelaySec", type: "uint32"},
          {internalType: "uint48", name: "withdrawTime", type: "uint48"},
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{internalType: "address", name: "account", type: "address"}],
        name: "getDepositInfo",
        outputs: [
          {
            components: [
              {internalType: "uint256", name: "deposit", type: "uint256"},
              {internalType: "bool", name: "staked", type: "bool"},
              {internalType: "uint112", name: "stake", type: "uint112"},
              {internalType: "uint32", name: "unstakeDelaySec", type: "uint32"},
              {internalType: "uint48", name: "withdrawTime", type: "uint48"},
            ],
            internalType: "struct IStakeManager.DepositInfo",
            name: "info",
            type: "tuple",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {internalType: "address", name: "sender", type: "address"},
          {internalType: "uint192", name: "key", type: "uint192"},
        ],
        name: "getNonce",
        outputs: [{internalType: "uint256", name: "nonce", type: "uint256"}],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{internalType: "bytes", name: "initCode", type: "bytes"}],
        name: "getSenderAddress",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              {internalType: "address", name: "sender", type: "address"},
              {internalType: "uint256", name: "nonce", type: "uint256"},
              {internalType: "bytes", name: "initCode", type: "bytes"},
              {internalType: "bytes", name: "callData", type: "bytes"},
              {
                internalType: "bytes32",
                name: "accountGasLimits",
                type: "bytes32",
              },
              {
                internalType: "uint256",
                name: "preVerificationGas",
                type: "uint256",
              },
              {internalType: "bytes32", name: "gasFees", type: "bytes32"},
              {internalType: "bytes", name: "paymasterAndData", type: "bytes"},
              {internalType: "bytes", name: "signature", type: "bytes"},
            ],
            internalType: "struct PackedUserOperation",
            name: "userOp",
            type: "tuple",
          },
        ],
        name: "getUserOpHash",
        outputs: [{internalType: "bytes32", name: "", type: "bytes32"}],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              {
                components: [
                  {internalType: "address", name: "sender", type: "address"},
                  {internalType: "uint256", name: "nonce", type: "uint256"},
                  {internalType: "bytes", name: "initCode", type: "bytes"},
                  {internalType: "bytes", name: "callData", type: "bytes"},
                  {
                    internalType: "bytes32",
                    name: "accountGasLimits",
                    type: "bytes32",
                  },
                  {
                    internalType: "uint256",
                    name: "preVerificationGas",
                    type: "uint256",
                  },
                  {internalType: "bytes32", name: "gasFees", type: "bytes32"},
                  {
                    internalType: "bytes",
                    name: "paymasterAndData",
                    type: "bytes",
                  },
                  {internalType: "bytes", name: "signature", type: "bytes"},
                ],
                internalType: "struct PackedUserOperation[]",
                name: "userOps",
                type: "tuple[]",
              },
              {
                internalType: "contract IAggregator",
                name: "aggregator",
                type: "address",
              },
              {internalType: "bytes", name: "signature", type: "bytes"},
            ],
            internalType: "struct IEntryPoint.UserOpsPerAggregator[]",
            name: "opsPerAggregator",
            type: "tuple[]",
          },
          {
            internalType: "address payable",
            name: "beneficiary",
            type: "address",
          },
        ],
        name: "handleAggregatedOps",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              {internalType: "address", name: "sender", type: "address"},
              {internalType: "uint256", name: "nonce", type: "uint256"},
              {internalType: "bytes", name: "initCode", type: "bytes"},
              {internalType: "bytes", name: "callData", type: "bytes"},
              {
                internalType: "bytes32",
                name: "accountGasLimits",
                type: "bytes32",
              },
              {
                internalType: "uint256",
                name: "preVerificationGas",
                type: "uint256",
              },
              {internalType: "bytes32", name: "gasFees", type: "bytes32"},
              {internalType: "bytes", name: "paymasterAndData", type: "bytes"},
              {internalType: "bytes", name: "signature", type: "bytes"},
            ],
            internalType: "struct PackedUserOperation[]",
            name: "ops",
            type: "tuple[]",
          },
          {
            internalType: "address payable",
            name: "beneficiary",
            type: "address",
          },
        ],
        name: "handleOps",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [{internalType: "uint192", name: "key", type: "uint192"}],
        name: "incrementNonce",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {internalType: "bytes", name: "callData", type: "bytes"},
          {
            components: [
              {
                components: [
                  {internalType: "address", name: "sender", type: "address"},
                  {internalType: "uint256", name: "nonce", type: "uint256"},
                  {
                    internalType: "uint256",
                    name: "verificationGasLimit",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "callGasLimit",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "paymasterVerificationGasLimit",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "paymasterPostOpGasLimit",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "preVerificationGas",
                    type: "uint256",
                  },
                  {internalType: "address", name: "paymaster", type: "address"},
                  {
                    internalType: "uint256",
                    name: "maxFeePerGas",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "maxPriorityFeePerGas",
                    type: "uint256",
                  },
                ],
                internalType: "struct EntryPoint.MemoryUserOp",
                name: "mUserOp",
                type: "tuple",
              },
              {internalType: "bytes32", name: "userOpHash", type: "bytes32"},
              {internalType: "uint256", name: "prefund", type: "uint256"},
              {internalType: "uint256", name: "contextOffset", type: "uint256"},
              {internalType: "uint256", name: "preOpGas", type: "uint256"},
            ],
            internalType: "struct EntryPoint.UserOpInfo",
            name: "opInfo",
            type: "tuple",
          },
          {internalType: "bytes", name: "context", type: "bytes"},
        ],
        name: "innerHandleOp",
        outputs: [
          {internalType: "uint256", name: "actualGasCost", type: "uint256"},
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {internalType: "address", name: "", type: "address"},
          {internalType: "uint192", name: "", type: "uint192"},
        ],
        name: "nonceSequenceNumber",
        outputs: [{internalType: "uint256", name: "", type: "uint256"}],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{internalType: "bytes4", name: "interfaceId", type: "bytes4"}],
        name: "supportsInterface",
        outputs: [{internalType: "bool", name: "", type: "bool"}],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "unlockStake",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address payable",
            name: "withdrawAddress",
            type: "address",
          },
        ],
        name: "withdrawStake",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address payable",
            name: "withdrawAddress",
            type: "address",
          },
          {internalType: "uint256", name: "withdrawAmount", type: "uint256"},
        ],
        name: "withdrawTo",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {stateMutability: "payable", type: "receive"},
    ],
    bytecode:
      "0x60806040526004361015610024575b361561001957600080fd5b61002233612748565b005b60003560e01c806242dc5314611b0057806301ffc9a7146119ae5780630396cb60146116765780630bd28e3b146115fa5780631b2e01b814611566578063205c2878146113d157806322cdde4c1461136b57806335567e1a146112b35780635287ce12146111a557806370a0823114611140578063765e827f14610e82578063850aaf6214610dc35780639b249f6914610c74578063b760faf914610c3a578063bb9fe6bf14610a68578063c23a5cea146107c4578063dbed18e0146101a15763fc7e286d0361000e573461019c5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261019c5773ffffffffffffffffffffffffffffffffffffffff61013a61229f565b16600052600060205260a0604060002065ffffffffffff6001825492015460405192835260ff8116151560208401526dffffffffffffffffffffffffffff8160081c16604084015263ffffffff8160781c16606084015260981c166080820152f35b600080fd5b3461019c576101af36612317565b906101b86129bd565b60009160005b82811061056f57506101d08493612588565b6000805b8481106102fc5750507fbb47ee3e183a558b1a2ff0874b079f3fc5478b7454eacf2bfc5af2ff5878f972600080a16000809360005b81811061024757610240868660007f575ff3acadd5ab348fe1855e217e0f3678f8d767d7494c9f9fefbee2e17cca4d8180a2613ba7565b6001600255005b6102a261025582848a612796565b73ffffffffffffffffffffffffffffffffffffffff6102766020830161282a565b167f575ff3acadd5ab348fe1855e217e0f3678f8d767d7494c9f9fefbee2e17cca4d600080a2806127d6565b906000915b8083106102b957505050600101610209565b909194976102f36102ed6001926102e78c8b6102e0826102da8e8b8d61269d565b9261265a565b5191613597565b90612409565b99612416565b950191906102a7565b6020610309828789612796565b61031f61031682806127d6565b9390920161282a565b9160009273ffffffffffffffffffffffffffffffffffffffff8091165b8285106103505750505050506001016101d4565b909192939561037f83610378610366848c61265a565b516103728b898b61269d565b856129f6565b9290613dd7565b9116840361050a576104a5576103958491613dd7565b9116610440576103b5576103aa600191612416565b96019392919061033c565b60a487604051907f220266b6000000000000000000000000000000000000000000000000000000008252600482015260406024820152602160448201527f41413332207061796d61737465722065787069726564206f72206e6f7420647560648201527f65000000000000000000000000000000000000000000000000000000000000006084820152fd5b608488604051907f220266b6000000000000000000000000000000000000000000000000000000008252600482015260406024820152601460448201527f41413334207369676e6174757265206572726f720000000000000000000000006064820152fd5b608488604051907f220266b6000000000000000000000000000000000000000000000000000000008252600482015260406024820152601760448201527f414132322065787069726564206f72206e6f74206475650000000000000000006064820152fd5b608489604051907f220266b6000000000000000000000000000000000000000000000000000000008252600482015260406024820152601460448201527f41413234207369676e6174757265206572726f720000000000000000000000006064820152fd5b61057a818487612796565b9361058585806127d6565b919095602073ffffffffffffffffffffffffffffffffffffffff6105aa82840161282a565b1697600192838a1461076657896105da575b5050505060019293949550906105d191612409565b939291016101be565b8060406105e892019061284b565b918a3b1561019c57929391906040519485937f2dd8113300000000000000000000000000000000000000000000000000000000855288604486016040600488015252606490818601918a60051b8701019680936000915b8c83106106e657505050505050838392610684927ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc8560009803016024860152612709565b03818a5afa90816106d7575b506106c657602486604051907f86a9f7500000000000000000000000000000000000000000000000000000000082526004820152fd5b93945084936105d1600189806105bc565b6106e0906121bd565b88610690565b91939596977fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9c908a9294969a0301865288357ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffee18336030181121561019c57836107538793858394016128ec565b9a0196019301909189979695949261063f565b606483604051907f08c379a00000000000000000000000000000000000000000000000000000000082526004820152601760248201527f4141393620696e76616c69642061676772656761746f720000000000000000006044820152fd5b3461019c576020807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261019c576107fc61229f565b33600052600082526001604060002001908154916dffffffffffffffffffffffffffff8360081c16928315610a0a5765ffffffffffff8160981c1680156109ac57421061094e5760009373ffffffffffffffffffffffffffffffffffffffff859485947fffffffffffffff000000000000000000000000000000000000000000000000ff86951690556040517fb7c918e0e249f999e965cafeb6c664271b3f4317d296461500e71da39f0cbda33391806108da8786836020909392919373ffffffffffffffffffffffffffffffffffffffff60408201951681520152565b0390a2165af16108e8612450565b50156108f057005b606490604051907f08c379a00000000000000000000000000000000000000000000000000000000082526004820152601860248201527f6661696c656420746f207769746864726177207374616b6500000000000000006044820152fd5b606485604051907f08c379a00000000000000000000000000000000000000000000000000000000082526004820152601b60248201527f5374616b65207769746864726177616c206973206e6f742064756500000000006044820152fd5b606486604051907f08c379a00000000000000000000000000000000000000000000000000000000082526004820152601d60248201527f6d7573742063616c6c20756e6c6f636b5374616b6528292066697273740000006044820152fd5b606485604051907f08c379a00000000000000000000000000000000000000000000000000000000082526004820152601460248201527f4e6f207374616b6520746f2077697468647261770000000000000000000000006044820152fd5b3461019c5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261019c573360005260006020526001604060002001805463ffffffff8160781c16908115610bdc5760ff1615610b7e5765ffffffffffff908142160191818311610b4f5780547fffffffffffffff000000000000ffffffffffffffffffffffffffffffffffff001678ffffffffffff00000000000000000000000000000000000000609885901b161790556040519116815233907ffa9b3c14cc825c412c9ed81b3ba365a5b459439403f18829e572ed53a4180f0a90602090a2005b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f616c726561647920756e7374616b696e670000000000000000000000000000006044820152fd5b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f6e6f74207374616b6564000000000000000000000000000000000000000000006044820152fd5b60207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261019c57610022610c6f61229f565b612748565b3461019c5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261019c5760043567ffffffffffffffff811161019c576020610cc8610d1b9236906004016122c2565b919073ffffffffffffffffffffffffffffffffffffffff9260405194859283927f570e1a360000000000000000000000000000000000000000000000000000000084528560048501526024840191612709565b03816000857f000000000000000000000000efc2c1444ebcc4db75e7613d20c6a62ff67a167c165af1908115610db757602492600092610d86575b50604051917f6ca7b806000000000000000000000000000000000000000000000000000000008352166004820152fd5b610da991925060203d602011610db0575b610da181836121ed565b8101906126dd565b9083610d56565b503d610d97565b6040513d6000823e3d90fd5b3461019c5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261019c57610dfa61229f565b60243567ffffffffffffffff811161019c57600091610e1e839236906004016122c2565b90816040519283928337810184815203915af4610e39612450565b90610e7e6040519283927f99410554000000000000000000000000000000000000000000000000000000008452151560048401526040602484015260448301906123c6565b0390fd5b3461019c57610e9036612317565b610e9b9291926129bd565b610ea483612588565b60005b848110610f1c57506000927fbb47ee3e183a558b1a2ff0874b079f3fc5478b7454eacf2bfc5af2ff5878f972600080a16000915b858310610eec576102408585613ba7565b909193600190610f12610f0087898761269d565b610f0a888661265a565b519088613597565b0194019190610edb565b610f47610f40610f2e8385979561265a565b51610f3a84898761269d565b846129f6565b9190613dd7565b73ffffffffffffffffffffffffffffffffffffffff929183166110db5761107657610f7190613dd7565b911661101157610f8657600101929092610ea7565b60a490604051907f220266b6000000000000000000000000000000000000000000000000000000008252600482015260406024820152602160448201527f41413332207061796d61737465722065787069726564206f72206e6f7420647560648201527f65000000000000000000000000000000000000000000000000000000000000006084820152fd5b608482604051907f220266b6000000000000000000000000000000000000000000000000000000008252600482015260406024820152601460448201527f41413334207369676e6174757265206572726f720000000000000000000000006064820152fd5b608483604051907f220266b6000000000000000000000000000000000000000000000000000000008252600482015260406024820152601760448201527f414132322065787069726564206f72206e6f74206475650000000000000000006064820152fd5b608484604051907f220266b6000000000000000000000000000000000000000000000000000000008252600482015260406024820152601460448201527f41413234207369676e6174757265206572726f720000000000000000000000006064820152fd5b3461019c5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261019c5773ffffffffffffffffffffffffffffffffffffffff61118c61229f565b1660005260006020526020604060002054604051908152f35b3461019c5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261019c5773ffffffffffffffffffffffffffffffffffffffff6111f161229f565b6000608060405161120181612155565b828152826020820152826040820152826060820152015216600052600060205260a06040600020608060405161123681612155565b6001835493848352015490602081019060ff8316151582526dffffffffffffffffffffffffffff60408201818560081c16815263ffffffff936060840193858760781c16855265ffffffffffff978891019660981c1686526040519788525115156020880152511660408601525116606084015251166080820152f35b3461019c5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261019c5760206112ec61229f565b73ffffffffffffffffffffffffffffffffffffffff6113096122f0565b911660005260018252604060002077ffffffffffffffffffffffffffffffffffffffffffffffff821660005282526040600020547fffffffffffffffffffffffffffffffffffffffffffffffff00000000000000006040519260401b16178152f35b3461019c577ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc60208136011261019c576004359067ffffffffffffffff821161019c5761012090823603011261019c576113c9602091600401612480565b604051908152f35b3461019c5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261019c5761140861229f565b60243590336000526000602052604060002090815491828411611508576000808573ffffffffffffffffffffffffffffffffffffffff8295839561144c848a612443565b90556040805173ffffffffffffffffffffffffffffffffffffffff831681526020810185905233917fd1c19fbcd4551a5edfb66d43d2e337c04837afda3482b42bdf569a8fccdae5fb91a2165af16114a2612450565b50156114aa57005b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f6661696c656420746f20776974686472617700000000000000000000000000006044820152fd5b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f576974686472617720616d6f756e7420746f6f206c61726765000000000000006044820152fd5b3461019c5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261019c5761159d61229f565b73ffffffffffffffffffffffffffffffffffffffff6115ba6122f0565b9116600052600160205277ffffffffffffffffffffffffffffffffffffffffffffffff604060002091166000526020526020604060002054604051908152f35b3461019c5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261019c5760043577ffffffffffffffffffffffffffffffffffffffffffffffff811680910361019c5733600052600160205260406000209060005260205260406000206116728154612416565b9055005b6020807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261019c5760043563ffffffff9182821680920361019c5733600052600081526040600020928215611950576001840154908160781c1683106118f2576116f86dffffffffffffffffffffffffffff9182349160081c16612409565b93841561189457818511611836579065ffffffffffff61180592546040519061172082612155565b8152848101926001845260408201908816815260608201878152600160808401936000855233600052600089526040600020905181550194511515917fffffffffffffffffffffffffff0000000000000000000000000000000000000060ff72ffffffff0000000000000000000000000000006effffffffffffffffffffffffffff008954945160081b16945160781b1694169116171717835551167fffffffffffffff000000000000ffffffffffffffffffffffffffffffffffffff78ffffffffffff0000000000000000000000000000000000000083549260981b169116179055565b6040519283528201527fa5ae833d0bb1dcd632d98a8b70973e8516812898e19bf27b70071ebc8dc52c0160403392a2005b606483604051907f08c379a00000000000000000000000000000000000000000000000000000000082526004820152600e60248201527f7374616b65206f766572666c6f770000000000000000000000000000000000006044820152fd5b606483604051907f08c379a00000000000000000000000000000000000000000000000000000000082526004820152601260248201527f6e6f207374616b652073706563696669656400000000000000000000000000006044820152fd5b606482604051907f08c379a00000000000000000000000000000000000000000000000000000000082526004820152601c60248201527f63616e6e6f7420646563726561736520756e7374616b652074696d65000000006044820152fd5b606482604051907f08c379a00000000000000000000000000000000000000000000000000000000082526004820152601a60248201527f6d757374207370656369667920756e7374616b652064656c61790000000000006044820152fd5b3461019c5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261019c576004357fffffffff00000000000000000000000000000000000000000000000000000000811680910361019c57807f60fc6b6e0000000000000000000000000000000000000000000000000000000060209214908115611ad6575b8115611aac575b8115611a82575b8115611a58575b506040519015158152f35b7f01ffc9a70000000000000000000000000000000000000000000000000000000091501482611a4d565b7f3e84f0210000000000000000000000000000000000000000000000000000000081149150611a46565b7fcf28ef970000000000000000000000000000000000000000000000000000000081149150611a3f565b7f915074d80000000000000000000000000000000000000000000000000000000081149150611a38565b3461019c576102007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261019c5767ffffffffffffffff60043581811161019c573660238201121561019c57611b62903690602481600401359101612268565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdc36016101c0811261019c5761014060405191611b9e83612155565b1261019c5760405192611bb0846121a0565b60243573ffffffffffffffffffffffffffffffffffffffff8116810361019c578452602093604435858201526064356040820152608435606082015260a435608082015260c43560a082015260e43560c08201526101043573ffffffffffffffffffffffffffffffffffffffff8116810361019c5760e08201526101243561010082015261014435610120820152825261016435848301526101843560408301526101a43560608301526101c43560808301526101e43590811161019c57611c7c9036906004016122c2565b905a3033036120f7578351606081015195603f5a0260061c61271060a0840151890101116120ce5760009681519182611ff0575b5050505090611cca915a9003608085015101923691612268565b925a90600094845193611cdc85613ccc565b9173ffffffffffffffffffffffffffffffffffffffff60e0870151168015600014611ea957505073ffffffffffffffffffffffffffffffffffffffff855116935b5a9003019360a06060820151910151016080860151850390818111611e95575b50508302604085015192818410600014611dce5750506003811015611da157600203611d79576113c99293508093611d7481613d65565b613cf6565b5050507fdeadaa51000000000000000000000000000000000000000000000000000000008152fd5b6024857f4e487b710000000000000000000000000000000000000000000000000000000081526021600452fd5b81611dde92979396940390613c98565b506003841015611e6857507f49628fd1471006c1482da88028e9ce4dbb080b815c9b0344d39e5a8e6ec1419f60808683015192519473ffffffffffffffffffffffffffffffffffffffff865116948873ffffffffffffffffffffffffffffffffffffffff60e0890151169701519160405192835215898301528760408301526060820152a46113c9565b807f4e487b7100000000000000000000000000000000000000000000000000000000602492526021600452fd5b6064919003600a0204909301928780611d3d565b8095918051611eba575b5050611d1d565b6003861015611fc1576002860315611eb35760a088015190823b1561019c57600091611f2491836040519586809581947f7c627b210000000000000000000000000000000000000000000000000000000083528d60048401526080602484015260848301906123c6565b8b8b0260448301528b60648301520393f19081611fad575b50611fa65787893d610800808211611f9e575b506040519282828501016040528184528284013e610e7e6040519283927fad7954bc000000000000000000000000000000000000000000000000000000008452600484015260248301906123c6565b905083611f4f565b8980611eb3565b611fb89199506121bd565b6000978a611f3c565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b91600092918380938c73ffffffffffffffffffffffffffffffffffffffff885116910192f115612023575b808080611cb0565b611cca929195503d6108008082116120c6575b5060405190888183010160405280825260008983013e805161205f575b5050600194909161201b565b7f1c4fada7374c0a9ee8841fc38afe82932dc0f8e69012e927f061a8bae611a20188870151918973ffffffffffffffffffffffffffffffffffffffff8551169401516120bc604051928392835260408d84015260408301906123c6565b0390a38680612053565b905088612036565b877fdeaddead000000000000000000000000000000000000000000000000000000006000526000fd5b606486604051907f08c379a00000000000000000000000000000000000000000000000000000000082526004820152601760248201527f4141393220696e7465726e616c2063616c6c206f6e6c790000000000000000006044820152fd5b60a0810190811067ffffffffffffffff82111761217157604052565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610140810190811067ffffffffffffffff82111761217157604052565b67ffffffffffffffff811161217157604052565b6060810190811067ffffffffffffffff82111761217157604052565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761217157604052565b67ffffffffffffffff811161217157601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b9291926122748261222e565b9161228260405193846121ed565b82948184528183011161019c578281602093846000960137010152565b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361019c57565b9181601f8401121561019c5782359167ffffffffffffffff831161019c576020838186019501011161019c57565b6024359077ffffffffffffffffffffffffffffffffffffffffffffffff8216820361019c57565b9060407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc83011261019c5760043567ffffffffffffffff9283821161019c578060238301121561019c57816004013593841161019c5760248460051b8301011161019c57602401919060243573ffffffffffffffffffffffffffffffffffffffff8116810361019c5790565b60005b8381106123b65750506000910152565b81810151838201526020016123a6565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f602093612402815180928187528780880191016123a3565b0116010190565b91908201809211610b4f57565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610b4f5760010190565b91908203918211610b4f57565b3d1561247b573d906124618261222e565b9161246f60405193846121ed565b82523d6000602084013e565b606090565b604061248e8183018361284b565b90818351918237206124a3606084018461284b565b90818451918237209260c06124bb60e083018361284b565b908186519182372091845195602087019473ffffffffffffffffffffffffffffffffffffffff833516865260208301358789015260608801526080870152608081013560a087015260a081013582870152013560e08501526101009081850152835261012083019167ffffffffffffffff918484108385111761217157838252845190206101408501908152306101608601524661018086015260608452936101a00191821183831017612171575251902090565b67ffffffffffffffff81116121715760051b60200190565b9061259282612570565b6040906125a260405191826121ed565b8381527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe06125d08295612570565b019160005b8381106125e25750505050565b60209082516125f081612155565b83516125fb816121a0565b600081526000849181838201528187820152816060818184015260809282848201528260a08201528260c08201528260e082015282610100820152826101208201528652818587015281898701528501528301528286010152016125d5565b805182101561266e5760209160051b010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b919081101561266e5760051b810135907ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffee18136030182121561019c570190565b9081602091031261019c575173ffffffffffffffffffffffffffffffffffffffff8116810361019c5790565b601f82602094937fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0938186528686013760008582860101520116010190565b7f2da466a7b24304f47e87fa2e1e5a81b9831ce54fec19055ce277ca2f39ba42c4602073ffffffffffffffffffffffffffffffffffffffff61278a3485613c98565b936040519485521692a2565b919081101561266e5760051b810135907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa18136030182121561019c570190565b9035907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18136030182121561019c570180359067ffffffffffffffff821161019c57602001918160051b3603831361019c57565b3573ffffffffffffffffffffffffffffffffffffffff8116810361019c5790565b9035907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18136030182121561019c570180359067ffffffffffffffff821161019c5760200191813603831361019c57565b90357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18236030181121561019c57016020813591019167ffffffffffffffff821161019c57813603831361019c57565b61012091813573ffffffffffffffffffffffffffffffffffffffff811680910361019c576129626129476129ba9561299b93855260208601356020860152612937604087018761289c565b9091806040880152860191612709565b612954606086018661289c565b908583036060870152612709565b6080840135608084015260a084013560a084015260c084013560c084015261298d60e085018561289c565b9084830360e0860152612709565b916129ac610100918281019061289c565b929091818503910152612709565b90565b60028054146129cc5760028055565b60046040517f3ee5aeb5000000000000000000000000000000000000000000000000000000008152fd5b926000905a93805194843573ffffffffffffffffffffffffffffffffffffffff811680910361019c5786526020850135602087015260808501356fffffffffffffffffffffffffffffffff90818116606089015260801c604088015260a086013560c088015260c086013590811661010088015260801c610120870152612a8060e086018661284b565b801561357b576034811061351d578060141161019c578060241161019c5760341161019c57602481013560801c60a0880152601481013560801c60808801523560601c60e08701525b612ad285612480565b60208301526040860151946effffffffffffffffffffffffffffff8660c08901511760608901511760808901511760a0890151176101008901511761012089015117116134bf57604087015160608801510160808801510160a08801510160c0880151016101008801510296835173ffffffffffffffffffffffffffffffffffffffff81511690612b66604085018561284b565b806131e4575b505060e0015173ffffffffffffffffffffffffffffffffffffffff1690600082156131ac575b6020612bd7918b828a01516000868a604051978896879586937f19822f7c00000000000000000000000000000000000000000000000000000000855260048501613db5565b0393f160009181613178575b50612c8b573d8c610800808311612c83575b50604051916020818401016040528083526000602084013e610e7e6040519283927f65c8fd4d000000000000000000000000000000000000000000000000000000008452600484015260606024840152600d60648401527f4141323320726576657274656400000000000000000000000000000000000000608484015260a0604484015260a48301906123c6565b915082612bf5565b9a92939495969798999a91156130f2575b509773ffffffffffffffffffffffffffffffffffffffff835116602084015190600052600160205260406000208160401c60005260205267ffffffffffffffff604060002091825492612cee84612416565b9055160361308d575a8503116130285773ffffffffffffffffffffffffffffffffffffffff60e0606093015116612d42575b509060a09184959697986040608096015260608601520135905a900301910152565b969550505a9683519773ffffffffffffffffffffffffffffffffffffffff60e08a01511680600052600060205260406000208054848110612fc3576080612dcd9a9b9c600093878094039055015192602089015183604051809d819582947f52b7512c0000000000000000000000000000000000000000000000000000000084528c60048501613db5565b039286f1978860009160009a612f36575b50612e86573d8b610800808311612e7e575b50604051916020818401016040528083526000602084013e610e7e6040519283927f65c8fd4d000000000000000000000000000000000000000000000000000000008452600484015260606024840152600d60648401527f4141333320726576657274656400000000000000000000000000000000000000608484015260a0604484015260a48301906123c6565b915082612df0565b9991929394959697989998925a900311612eab57509096959094939291906080612d20565b60a490604051907f220266b6000000000000000000000000000000000000000000000000000000008252600482015260406024820152602760448201527f41413336206f766572207061796d6173746572566572696669636174696f6e4760648201527f61734c696d6974000000000000000000000000000000000000000000000000006084820152fd5b915098503d90816000823e612f4b82826121ed565b604081838101031261019c5780519067ffffffffffffffff821161019c57828101601f83830101121561019c578181015191612f868361222e565b93612f9460405195866121ed565b838552820160208483850101011161019c57602092612fba9184808701918501016123a3565b01519838612dde565b60848b604051907f220266b6000000000000000000000000000000000000000000000000000000008252600482015260406024820152601e60448201527f41413331207061796d6173746572206465706f73697420746f6f206c6f7700006064820152fd5b608490604051907f220266b6000000000000000000000000000000000000000000000000000000008252600482015260406024820152601e60448201527f41413236206f76657220766572696669636174696f6e4761734c696d697400006064820152fd5b608482604051907f220266b6000000000000000000000000000000000000000000000000000000008252600482015260406024820152601a60448201527f4141323520696e76616c6964206163636f756e74206e6f6e63650000000000006064820152fd5b600052600060205260406000208054808c11613113578b9003905538612c9c565b608484604051907f220266b6000000000000000000000000000000000000000000000000000000008252600482015260406024820152601760448201527f41413231206469646e2774207061792070726566756e640000000000000000006064820152fd5b9091506020813d6020116131a4575b81613194602093836121ed565b8101031261019c57519038612be3565b3d9150613187565b508060005260006020526040600020548a81116000146131d75750612bd7602060005b915050612b92565b6020612bd7918c036131cf565b833b61345a57604088510151602060405180927f570e1a360000000000000000000000000000000000000000000000000000000082528260048301528160008161323260248201898b612709565b039273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000efc2c1444ebcc4db75e7613d20c6a62ff67a167c1690f1908115610db75760009161343b575b5073ffffffffffffffffffffffffffffffffffffffff811680156133d6578503613371573b1561330c5760141161019c5773ffffffffffffffffffffffffffffffffffffffff9183887fd51a9c61267aa6196961883ecf5ff2da6619c37dac0fa92122513fb32c032d2d604060e0958787602086015195510151168251913560601c82526020820152a391612b6c565b60848d604051907f220266b6000000000000000000000000000000000000000000000000000000008252600482015260406024820152602060448201527f4141313520696e6974436f6465206d757374206372656174652073656e6465726064820152fd5b60848e604051907f220266b6000000000000000000000000000000000000000000000000000000008252600482015260406024820152602060448201527f4141313420696e6974436f6465206d7573742072657475726e2073656e6465726064820152fd5b60848f604051907f220266b6000000000000000000000000000000000000000000000000000000008252600482015260406024820152601b60448201527f4141313320696e6974436f6465206661696c6564206f72204f4f4700000000006064820152fd5b613454915060203d602011610db057610da181836121ed565b3861327c565b60848d604051907f220266b6000000000000000000000000000000000000000000000000000000008252600482015260406024820152601f60448201527f414131302073656e64657220616c726561647920636f6e7374727563746564006064820152fd5b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f41413934206761732076616c756573206f766572666c6f7700000000000000006044820152fd5b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f4141393320696e76616c6964207061796d6173746572416e64446174610000006044820152fd5b5050600060e087015260006080870152600060a0870152612ac9565b9092915a906060810151916040928351967fffffffff00000000000000000000000000000000000000000000000000000000886135d7606084018461284b565b600060038211613b9f575b7f8dd7712f0000000000000000000000000000000000000000000000000000000094168403613a445750505061379d6000926136b292602088015161363a8a5193849360208501528b602485015260648401906128ec565b90604483015203906136727fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0928381018352826121ed565b61379189519485927e42dc5300000000000000000000000000000000000000000000000000000000602085015261020060248501526102248401906123c6565b613760604484018b60806101a091805173ffffffffffffffffffffffffffffffffffffffff808251168652602082015160208701526040820151604087015260608201516060870152838201518487015260a082015160a087015260c082015160c087015260e08201511660e0860152610100808201519086015261012080910151908501526020810151610140850152604081015161016085015260608101516101808501520151910152565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdc83820301610204840152876123c6565b039081018352826121ed565b6020918183809351910182305af1600051988652156137bf575b505050505050565b909192939495965060003d8214613a3a575b7fdeaddead00000000000000000000000000000000000000000000000000000000810361385b57608487878051917f220266b600000000000000000000000000000000000000000000000000000000835260048301526024820152600f60448201527f41413935206f7574206f662067617300000000000000000000000000000000006064820152fd5b7fdeadaa510000000000000000000000000000000000000000000000000000000091929395949650146000146138c55750506138a961389e6138b8935a90612443565b608085015190612409565b9083015183611d748295613d65565b905b3880808080806137b7565b909261395290828601518651907ff62676f440ff169a3a9afdbf812e89e7f95975ee8e5c31214ffdef631c5f479273ffffffffffffffffffffffffffffffffffffffff9580878551169401516139483d610800808211613a32575b508a519084818301018c5280825260008583013e8a805194859485528401528a8301906123c6565b0390a35a90612443565b916139636080860193845190612409565b926000905a94829488519761397789613ccc565b948260e08b0151168015600014613a1857505050875116955b5a9003019560a06060820151910151019051860390818111613a04575b5050840290850151928184106000146139de57505080611e68575090816139d89293611d7481613d65565b906138ba565b6139ee9082849397950390613c98565b50611e68575090826139ff92613cf6565b6139d8565b6064919003600a02049094019338806139ad565b90919892509751613a2a575b50613990565b955038613a24565b905038613920565b8181803e516137d1565b613b97945082935090613a8c917e42dc53000000000000000000000000000000000000000000000000000000006020613b6b9501526102006024860152610224850191612709565b613b3a604484018860806101a091805173ffffffffffffffffffffffffffffffffffffffff808251168652602082015160208701526040820151604087015260608201516060870152838201518487015260a082015160a087015260c082015160c087015260e08201511660e0860152610100808201519086015261012080910151908501526020810151610140850152604081015161016085015260608101516101808501520151910152565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdc83820301610204840152846123c6565b037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081018952886121ed565b60008761379d565b5081356135e2565b73ffffffffffffffffffffffffffffffffffffffff168015613c3a57600080809381935af1613bd4612450565b5015613bdc57565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f41413931206661696c65642073656e6420746f2062656e6566696369617279006044820152fd5b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f4141393020696e76616c69642062656e656669636961727900000000000000006044820152fd5b73ffffffffffffffffffffffffffffffffffffffff166000526000602052613cc66040600020918254612409565b80915590565b610120610100820151910151808214613cf257480180821015613ced575090565b905090565b5090565b9190917f49628fd1471006c1482da88028e9ce4dbb080b815c9b0344d39e5a8e6ec1419f6080602083015192519473ffffffffffffffffffffffffffffffffffffffff946020868851169660e089015116970151916040519283526000602084015260408301526060820152a4565b60208101519051907f67b4fa9642f42120bf031f3051d1824b0fe25627945b27b8a6a65d5761d5482e60208073ffffffffffffffffffffffffffffffffffffffff855116940151604051908152a3565b613dcd604092959493956060835260608301906128ec565b9460208201520152565b8015613e6457600060408051613dec816121d1565b828152826020820152015273ffffffffffffffffffffffffffffffffffffffff811690604065ffffffffffff91828160a01c16908115613e5c575b60d01c92825191613e37836121d1565b8583528460208401521691829101524211908115613e5457509091565b905042109091565b839150613e27565b5060009060009056fea2646970667358221220b094fd69f04977ae9458e5ba422d01cd2d20dbcfca0992ff37f19aa07deec25464736f6c63430008170033",
  },
  SENDER_CREATOR_V07: {
    address: "0xEFC2c1444eBCC4Db75e7613d20C6a62fF67A167C",
    abi: [
      {
        inputs: [{internalType: "bytes", name: "initCode", type: "bytes"}],
        name: "createSender",
        outputs: [{internalType: "address", name: "sender", type: "address"}],
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
    bytecode:
      "0x6080600436101561000f57600080fd5b6000803560e01c63570e1a361461002557600080fd5b3461018a5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261018a576004359167ffffffffffffffff9081841161018657366023850112156101865783600401358281116101825736602482870101116101825780601411610182577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec810192808411610155577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f81600b8501160116830190838210908211176101555792846024819482600c60209a968b9960405286845289840196603889018837830101525193013560601c5af1908051911561014d575b5073ffffffffffffffffffffffffffffffffffffffff60405191168152f35b90503861012e565b6024857f4e487b710000000000000000000000000000000000000000000000000000000081526041600452fd5b8380fd5b8280fd5b80fdfea26469706673582212207adef8895ad3393b02fab10a111d85ea80ff35366aa43995f4ea20e67f29200664736f6c63430008170033",
  },
} as const;
