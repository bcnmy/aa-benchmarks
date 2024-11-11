export const KERNEL_V3_ARTIFACTS = {
  MetaFactory: {
    // owned by 0x9775137314fE595c943712B0b336327dfa80aE8A
    address: "0xd703aaE79538628d27099B8c4f621bE4CCd142d5",
    abi: [
      {
        inputs: [{internalType: "address", name: "_owner", type: "address"}],
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {inputs: [], name: "AlreadyInitialized", type: "error"},
      {inputs: [], name: "NewOwnerIsZeroAddress", type: "error"},
      {inputs: [], name: "NoHandoverRequest", type: "error"},
      {inputs: [], name: "NotApprovedFactory", type: "error"},
      {inputs: [], name: "Unauthorized", type: "error"},
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "pendingOwner",
            type: "address",
          },
        ],
        name: "OwnershipHandoverCanceled",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "pendingOwner",
            type: "address",
          },
        ],
        name: "OwnershipHandoverRequested",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "oldOwner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "newOwner",
            type: "address",
          },
        ],
        name: "OwnershipTransferred",
        type: "event",
      },
      {
        inputs: [
          {
            internalType: "contract KernelFactory",
            name: "factory",
            type: "address",
          },
          {internalType: "bool", name: "approval", type: "bool"},
        ],
        name: "approveFactory",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [
          {internalType: "contract KernelFactory", name: "", type: "address"},
        ],
        name: "approved",
        outputs: [{internalType: "bool", name: "", type: "bool"}],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "cancelOwnershipHandover",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [
          {internalType: "address", name: "pendingOwner", type: "address"},
        ],
        name: "completeOwnershipHandover",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "contract KernelFactory",
            name: "factory",
            type: "address",
          },
          {internalType: "bytes", name: "createData", type: "bytes"},
          {internalType: "bytes32", name: "salt", type: "bytes32"},
        ],
        name: "deployWithFactory",
        outputs: [{internalType: "address", name: "", type: "address"}],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [],
        name: "owner",
        outputs: [{internalType: "address", name: "result", type: "address"}],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {internalType: "address", name: "pendingOwner", type: "address"},
        ],
        name: "ownershipHandoverExpiresAt",
        outputs: [{internalType: "uint256", name: "result", type: "uint256"}],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [],
        name: "requestOwnershipHandover",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "contract IEntryPoint",
            name: "entryPoint",
            type: "address",
          },
          {internalType: "uint32", name: "unstakeDelay", type: "uint32"},
        ],
        name: "stake",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [{internalType: "address", name: "newOwner", type: "address"}],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "contract IEntryPoint",
            name: "entryPoint",
            type: "address",
          },
        ],
        name: "unlockStake",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "contract IEntryPoint",
            name: "entryPoint",
            type: "address",
          },
          {internalType: "address payable", name: "recipient", type: "address"},
        ],
        name: "withdrawStake",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
    ],
    bytecode:
      "0x6080604052600436106100c25760003560e01c8063b36f97051161007f578063d8b964e611610059578063d8b964e614610172578063f04e283e146101b2578063f2fde38b146101c5578063fee81cf4146101d857600080fd5b8063b36f970514610139578063c5265d5d1461014c578063c7e55f3e1461015f57600080fd5b806325692962146100c75780634a1ce599146100d157806354d1f13d146100e45780636e7dbabb146100ec578063715018a6146100ff5780638da5cb5b14610107575b600080fd5b6100cf610219565b005b6100cf6100df3660046105a7565b610269565b6100cf6102c7565b6100cf6100fa3660046105cb565b610303565b6100cf610336565b34801561011357600080fd5b50638b78c6d819545b6040516001600160a01b0390911681526020015b60405180910390f35b6100cf610147366004610609565b61034a565b61011c61015a366004610637565b6103b1565b6100cf61016d3660046106c2565b610466565b34801561017e57600080fd5b506101a261018d3660046105a7565b60006020819052908152604090205460ff1681565b6040519015158152602001610130565b6100cf6101c03660046105a7565b6104d2565b6100cf6101d33660046105a7565b610512565b3480156101e457600080fd5b5061020b6101f33660046105a7565b63389a75e1600c908152600091909152602090205490565b604051908152602001610130565b60006202a30067ffffffffffffffff164201905063389a75e1600c5233600052806020600c2055337fdbf36a107da19e49527a7176a1babf963b4b0ff8cde35ee35d6cd8f1f9ac7e1d600080a250565b610271610539565b806001600160a01b031663bb9fe6bf6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156102ac57600080fd5b505af11580156102c0573d6000803e3d6000fd5b5050505050565b63389a75e1600c523360005260006020600c2055337ffa7b8eab7da67f412cc9575ed43464468f9bfbae89d1675917346ca6d8fe3c92600080a2565b61030b610539565b6001600160a01b03919091166000908152602081905260409020805460ff1916911515919091179055565b61033e610539565b6103486000610554565b565b610352610539565b60405163611d2e7560e11b81526001600160a01b03828116600483015283169063c23a5cea90602401600060405180830381600087803b15801561039557600080fd5b505af11580156103a9573d6000803e3d6000fd5b505050505050565b6001600160a01b03841660009081526020819052604081205460ff166103ea57604051633220d5f360e21b815260040160405180910390fd5b604051633a9b44eb60e21b81526001600160a01b0386169063ea6d13ac9061041a908790879087906004016106f9565b6020604051808303816000875af1158015610439573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061045d9190610732565b95945050505050565b61046e610539565b604051621cb65b60e51b815263ffffffff821660048201526001600160a01b03831690630396cb609034906024016000604051808303818588803b1580156104b557600080fd5b505af11580156104c9573d6000803e3d6000fd5b50505050505050565b6104da610539565b63389a75e1600c52806000526020600c20805442111561050257636f5e88186000526004601cfd5b6000905561050f81610554565b50565b61051a610539565b8060601b61053057637448fbae6000526004601cfd5b61050f81610554565b638b78c6d819543314610348576382b429006000526004601cfd5b638b78c6d81980546001600160a01b039092169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a355565b6001600160a01b038116811461050f57600080fd5b6000602082840312156105b957600080fd5b81356105c481610592565b9392505050565b600080604083850312156105de57600080fd5b82356105e981610592565b9150602083013580151581146105fe57600080fd5b809150509250929050565b6000806040838503121561061c57600080fd5b823561062781610592565b915060208301356105fe81610592565b6000806000806060858703121561064d57600080fd5b843561065881610592565b9350602085013567ffffffffffffffff8082111561067557600080fd5b818701915087601f83011261068957600080fd5b81358181111561069857600080fd5b8860208285010111156106aa57600080fd5b95986020929092019750949560400135945092505050565b600080604083850312156106d557600080fd5b82356106e081610592565b9150602083013563ffffffff811681146105fe57600080fd5b604081528260408201528284606083013760006060848301015260006060601f19601f8601168301019050826020830152949350505050565b60006020828403121561074457600080fd5b81516105c48161059256",
  },
  KernelFactory: {
    address: "0xaac5D4240AF87249B3f71BC8E4A2cae074A3E419",
    abi: [
      {
        inputs: [{internalType: "address", name: "_impl", type: "address"}],
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {inputs: [], name: "InitializeError", type: "error"},
      {
        inputs: [
          {internalType: "bytes", name: "data", type: "bytes"},
          {internalType: "bytes32", name: "salt", type: "bytes32"},
        ],
        name: "createAccount",
        outputs: [{internalType: "address", name: "", type: "address"}],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [
          {internalType: "bytes", name: "data", type: "bytes"},
          {internalType: "bytes32", name: "salt", type: "bytes32"},
        ],
        name: "getAddress",
        outputs: [{internalType: "address", name: "", type: "address"}],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "implementation",
        outputs: [{internalType: "address", name: "", type: "address"}],
        stateMutability: "view",
        type: "function",
      },
    ],
    bytecode:
      "0x60806040818152600490600436101561001757600080fd5b600092833560e01c90816348aac39214610267575080635c60da1b1461021f5763ea6d13ac1461004657600080fd5b61004f36610352565b94919083519560209661007a86828a81019486888737868201908c820152038a8101845201826103a5565b5190209483958551917fcc3735a920a3ca505d382bbc545af43d6000803e6038573d6000fd5b3d6000f36060527f5155f3363d3d373d3d363d7f360894a13ba1a3210667c828492db98dca3e2076875261600989527f000000000000000000000000bac849bb641841b44e965fb01a4bf5f074f84b4d601e5268603d3d8160223d3973600a52605f97602192605f60212060358601523060581b855260ff855380601586015260558520993415948b3b156101fe57505050506001916101f85785388180348c5af1156101ed57505b818652846060521561016b575b505091516001600160a01b0390931683525050f35b8082859493859483378101838152039082875af1903d156101e7573d9067ffffffffffffffff82116101d3578351916101ad601f8201601f19168801846103a5565b8252853d92013e5b156101c35738808080610156565b5163487e630960e11b8152600490fd5b634e487b7160e01b81526041600452602490fd5b506101b5565b63b12d13eb8652601cfd5b50610149565b91939a5091935034f59687156102145750610149565b63301164258652601cfd5b838234610263578160031936011261026357517f000000000000000000000000bac849bb641841b44e965fb01a4bf5f074f84b4d6001600160a01b03168152602090f35b5080fd5b848334610263578260209361029d8361027f36610352565b90808a879498019788378201908982015203878101845201826103a5565b51902081517fcc3735a920a3ca505d382bbc545af43d6000803e6038573d6000fd5b3d6000f36060527f5155f3363d3d373d3d363d7f360894a13ba1a3210667c828492db98dca3e2076835261600985527f000000000000000000000000bac849bb641841b44e965fb01a4bf5f074f84b4d601e5268603d3d8160223d3973600a52605f6021209083528360605260ff84536035523060601b6001526015526055822091603552519060018060a01b03168152f35b9060406003198301126103a05760043567ffffffffffffffff928382116103a057806023830112156103a05781600401359384116103a057602484830101116103a057602401919060243590565b600080fd5b90601f8019910116810190811067ffffffffffffffff8211176103c757604052565b634e487b7160e01b600052604160045260246000fd",
  },
  Kernel: {
    address: "0xBAC849bB641841b44E965fB01A4Bf5F074f84b4D",
    abi: [
      {
        inputs: [
          {
            internalType: "contract IEntryPoint",
            name: "_entrypoint",
            type: "address",
          },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {inputs: [], name: "EnableNotApproved", type: "error"},
      {inputs: [], name: "ExecutionReverted", type: "error"},
      {
        inputs: [{internalType: "uint256", name: "idx", type: "uint256"}],
        name: "InitConfigError",
        type: "error",
      },
      {inputs: [], name: "InvalidCallType", type: "error"},
      {inputs: [], name: "InvalidCaller", type: "error"},
      {inputs: [], name: "InvalidExecutor", type: "error"},
      {inputs: [], name: "InvalidFallback", type: "error"},
      {inputs: [], name: "InvalidMode", type: "error"},
      {inputs: [], name: "InvalidModuleType", type: "error"},
      {inputs: [], name: "InvalidNonce", type: "error"},
      {inputs: [], name: "InvalidSelector", type: "error"},
      {inputs: [], name: "InvalidSignature", type: "error"},
      {inputs: [], name: "InvalidValidationType", type: "error"},
      {inputs: [], name: "InvalidValidator", type: "error"},
      {inputs: [], name: "NonceInvalidationError", type: "error"},
      {inputs: [], name: "NotSupportedCallType", type: "error"},
      {inputs: [], name: "OnlyExecuteUserOp", type: "error"},
      {inputs: [], name: "PermissionDataLengthMismatch", type: "error"},
      {inputs: [], name: "PermissionNotAlllowedForSignature", type: "error"},
      {inputs: [], name: "PermissionNotAlllowedForUserOp", type: "error"},
      {inputs: [], name: "PolicyDataTooLarge", type: "error"},
      {
        inputs: [{internalType: "uint256", name: "i", type: "uint256"}],
        name: "PolicyFailed",
        type: "error",
      },
      {inputs: [], name: "PolicySignatureOrderError", type: "error"},
      {inputs: [], name: "RootValidatorCannotBeRemoved", type: "error"},
      {inputs: [], name: "SignerPrefixNotPresent", type: "error"},
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "uint256",
            name: "moduleTypeId",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "address",
            name: "module",
            type: "address",
          },
        ],
        name: "ModuleInstalled",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "module",
            type: "address",
          },
          {indexed: false, internalType: "bool", name: "result", type: "bool"},
        ],
        name: "ModuleUninstallResult",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "uint256",
            name: "moduleTypeId",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "address",
            name: "module",
            type: "address",
          },
        ],
        name: "ModuleUninstalled",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "uint32",
            name: "nonce",
            type: "uint32",
          },
        ],
        name: "NonceInvalidated",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "PermissionId",
            name: "permission",
            type: "bytes4",
          },
          {
            indexed: false,
            internalType: "uint32",
            name: "nonce",
            type: "uint32",
          },
        ],
        name: "PermissionInstalled",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "PermissionId",
            name: "permission",
            type: "bytes4",
          },
        ],
        name: "PermissionUninstalled",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "Received",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "ValidationId",
            name: "rootValidator",
            type: "bytes21",
          },
        ],
        name: "RootValidatorUpdated",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "bytes4",
            name: "selector",
            type: "bytes4",
          },
          {
            indexed: false,
            internalType: "ValidationId",
            name: "vId",
            type: "bytes21",
          },
          {indexed: false, internalType: "bool", name: "allowed", type: "bool"},
        ],
        name: "SelectorSet",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "uint256",
            name: "batchExecutionindex",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "bytes",
            name: "result",
            type: "bytes",
          },
        ],
        name: "TryExecuteUnsuccessful",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "implementation",
            type: "address",
          },
        ],
        name: "Upgraded",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "contract IValidator",
            name: "validator",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint32",
            name: "nonce",
            type: "uint32",
          },
        ],
        name: "ValidatorInstalled",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "contract IValidator",
            name: "validator",
            type: "address",
          },
        ],
        name: "ValidatorUninstalled",
        type: "event",
      },
      {stateMutability: "payable", type: "fallback"},
      {
        inputs: [],
        name: "accountId",
        outputs: [
          {
            internalType: "string",
            name: "accountImplementationId",
            type: "string",
          },
        ],
        stateMutability: "pure",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "ValidationId",
            name: "_rootValidator",
            type: "bytes21",
          },
          {internalType: "contract IHook", name: "hook", type: "address"},
          {internalType: "bytes", name: "validatorData", type: "bytes"},
          {internalType: "bytes", name: "hookData", type: "bytes"},
        ],
        name: "changeRootValidator",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [],
        name: "currentNonce",
        outputs: [{internalType: "uint32", name: "", type: "uint32"}],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "eip712Domain",
        outputs: [
          {internalType: "bytes1", name: "fields", type: "bytes1"},
          {internalType: "string", name: "name", type: "string"},
          {internalType: "string", name: "version", type: "string"},
          {internalType: "uint256", name: "chainId", type: "uint256"},
          {internalType: "address", name: "verifyingContract", type: "address"},
          {internalType: "bytes32", name: "salt", type: "bytes32"},
          {internalType: "uint256[]", name: "extensions", type: "uint256[]"},
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "entrypoint",
        outputs: [
          {internalType: "contract IEntryPoint", name: "", type: "address"},
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {internalType: "ExecMode", name: "execMode", type: "bytes32"},
          {internalType: "bytes", name: "executionCalldata", type: "bytes"},
        ],
        name: "execute",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [
          {internalType: "ExecMode", name: "execMode", type: "bytes32"},
          {internalType: "bytes", name: "executionCalldata", type: "bytes"},
        ],
        name: "executeFromExecutor",
        outputs: [
          {internalType: "bytes[]", name: "returnData", type: "bytes[]"},
        ],
        stateMutability: "payable",
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
          {internalType: "bytes32", name: "userOpHash", type: "bytes32"},
        ],
        name: "executeUserOp",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "contract IExecutor",
            name: "executor",
            type: "address",
          },
        ],
        name: "executorConfig",
        outputs: [
          {
            components: [
              {internalType: "contract IHook", name: "hook", type: "address"},
            ],
            internalType: "struct ExecutorManager.ExecutorConfig",
            name: "",
            type: "tuple",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "ValidationId",
            name: "_rootValidator",
            type: "bytes21",
          },
          {internalType: "contract IHook", name: "hook", type: "address"},
          {internalType: "bytes", name: "validatorData", type: "bytes"},
          {internalType: "bytes", name: "hookData", type: "bytes"},
          {internalType: "bytes[]", name: "initConfig", type: "bytes[]"},
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {internalType: "uint256", name: "moduleType", type: "uint256"},
          {internalType: "address", name: "module", type: "address"},
          {internalType: "bytes", name: "initData", type: "bytes"},
        ],
        name: "installModule",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [
          {internalType: "ValidationId[]", name: "vIds", type: "bytes21[]"},
          {
            components: [
              {internalType: "uint32", name: "nonce", type: "uint32"},
              {internalType: "contract IHook", name: "hook", type: "address"},
            ],
            internalType: "struct ValidationManager.ValidationConfig[]",
            name: "configs",
            type: "tuple[]",
          },
          {internalType: "bytes[]", name: "validationData", type: "bytes[]"},
          {internalType: "bytes[]", name: "hookData", type: "bytes[]"},
        ],
        name: "installValidations",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [{internalType: "uint32", name: "nonce", type: "uint32"}],
        name: "invalidateNonce",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [
          {internalType: "ValidationId", name: "vId", type: "bytes21"},
          {internalType: "bytes4", name: "selector", type: "bytes4"},
        ],
        name: "isAllowedSelector",
        outputs: [{internalType: "bool", name: "", type: "bool"}],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {internalType: "uint256", name: "moduleType", type: "uint256"},
          {internalType: "address", name: "module", type: "address"},
          {internalType: "bytes", name: "additionalContext", type: "bytes"},
        ],
        name: "isModuleInstalled",
        outputs: [{internalType: "bool", name: "", type: "bool"}],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {internalType: "bytes32", name: "hash", type: "bytes32"},
          {internalType: "bytes", name: "signature", type: "bytes"},
        ],
        name: "isValidSignature",
        outputs: [{internalType: "bytes4", name: "", type: "bytes4"}],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {internalType: "address", name: "", type: "address"},
          {internalType: "address", name: "", type: "address"},
          {internalType: "uint256[]", name: "", type: "uint256[]"},
          {internalType: "uint256[]", name: "", type: "uint256[]"},
          {internalType: "bytes", name: "", type: "bytes"},
        ],
        name: "onERC1155BatchReceived",
        outputs: [{internalType: "bytes4", name: "", type: "bytes4"}],
        stateMutability: "pure",
        type: "function",
      },
      {
        inputs: [
          {internalType: "address", name: "", type: "address"},
          {internalType: "address", name: "", type: "address"},
          {internalType: "uint256", name: "", type: "uint256"},
          {internalType: "uint256", name: "", type: "uint256"},
          {internalType: "bytes", name: "", type: "bytes"},
        ],
        name: "onERC1155Received",
        outputs: [{internalType: "bytes4", name: "", type: "bytes4"}],
        stateMutability: "pure",
        type: "function",
      },
      {
        inputs: [
          {internalType: "address", name: "", type: "address"},
          {internalType: "address", name: "", type: "address"},
          {internalType: "uint256", name: "", type: "uint256"},
          {internalType: "bytes", name: "", type: "bytes"},
        ],
        name: "onERC721Received",
        outputs: [{internalType: "bytes4", name: "", type: "bytes4"}],
        stateMutability: "pure",
        type: "function",
      },
      {
        inputs: [{internalType: "PermissionId", name: "pId", type: "bytes4"}],
        name: "permissionConfig",
        outputs: [
          {
            components: [
              {
                internalType: "PassFlag",
                name: "permissionFlag",
                type: "bytes2",
              },
              {
                internalType: "contract ISigner",
                name: "signer",
                type: "address",
              },
              {
                internalType: "PolicyData[]",
                name: "policyData",
                type: "bytes22[]",
              },
            ],
            internalType: "struct ValidationManager.PermissionConfig",
            name: "",
            type: "tuple",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "rootValidator",
        outputs: [{internalType: "ValidationId", name: "", type: "bytes21"}],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{internalType: "bytes4", name: "selector", type: "bytes4"}],
        name: "selectorConfig",
        outputs: [
          {
            components: [
              {internalType: "contract IHook", name: "hook", type: "address"},
              {internalType: "address", name: "target", type: "address"},
              {internalType: "CallType", name: "callType", type: "bytes1"},
            ],
            internalType: "struct SelectorManager.SelectorConfig",
            name: "",
            type: "tuple",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{internalType: "ExecMode", name: "mode", type: "bytes32"}],
        name: "supportsExecutionMode",
        outputs: [{internalType: "bool", name: "", type: "bool"}],
        stateMutability: "pure",
        type: "function",
      },
      {
        inputs: [
          {internalType: "uint256", name: "moduleTypeId", type: "uint256"},
        ],
        name: "supportsModule",
        outputs: [{internalType: "bool", name: "", type: "bool"}],
        stateMutability: "pure",
        type: "function",
      },
      {
        inputs: [
          {internalType: "uint256", name: "moduleType", type: "uint256"},
          {internalType: "address", name: "module", type: "address"},
          {internalType: "bytes", name: "deInitData", type: "bytes"},
        ],
        name: "uninstallModule",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [
          {internalType: "ValidationId", name: "vId", type: "bytes21"},
          {internalType: "bytes", name: "deinitData", type: "bytes"},
          {internalType: "bytes", name: "hookDeinitData", type: "bytes"},
        ],
        name: "uninstallValidation",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_newImplementation",
            type: "address",
          },
        ],
        name: "upgradeTo",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [],
        name: "validNonceFrom",
        outputs: [{internalType: "uint32", name: "", type: "uint32"}],
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
          {internalType: "bytes32", name: "userOpHash", type: "bytes32"},
          {
            internalType: "uint256",
            name: "missingAccountFunds",
            type: "uint256",
          },
        ],
        name: "validateUserOp",
        outputs: [
          {
            internalType: "ValidationData",
            name: "validationData",
            type: "uint256",
          },
        ],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [{internalType: "ValidationId", name: "vId", type: "bytes21"}],
        name: "validationConfig",
        outputs: [
          {
            components: [
              {internalType: "uint32", name: "nonce", type: "uint32"},
              {internalType: "contract IHook", name: "hook", type: "address"},
            ],
            internalType: "struct ValidationManager.ValidationConfig",
            name: "",
            type: "tuple",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {stateMutability: "payable", type: "receive"},
    ],
    bytecode:
      "0x6080604052600436101561001d575b36612dc85761001b612d97565b005b60003560e01c8063112d3a7d146101fd578063150b7a02146101f85780631626ba7e146101f357806319822f7c146101ee5780631f1b92e3146101e95780633659cfe6146101e45780633c3b752b146101df57806352141cd9146101da57806357b3a5f4146101d55780636e6fa0c6146101d0578063721e67f4146101cb57806384b0196e146101c65780638dd7712f146101c157806390ef8862146101bc5780639198bdf5146101b75780639517e29f146101b25780639cfd7cff146101ad578063a65d69d4146101a8578063a71763a8146101a3578063adb610a31461019e578063b8afe17d14610199578063bc197c8114610194578063c3e589781461018f578063d03c79141461018a578063d691c96414610185578063e6f3d50a14610180578063e9ae5c531461017b578063f1f7f0f914610176578063f23a6e61146101715763f2dc691d0361000e57611cec565b611c92565b611c5a565b611b2e565b61199e565b6118ba565b61186d565b611791565b61168a565b611620565b6115ec565b6114c0565b61147b565b611424565b6112f8565b6111f1565b6110d0565b610fcc565b610f2a565b610e7e565b610e21565b610d73565b610b99565b6109c2565b610849565b610691565b610371565b610311565b6102b7565b610291565b6001600160a01b0381160361021357565b600080fd5b359061022382610202565b565b9181601f84011215610213578235916001600160401b038311610213576020838186019501011161021357565b6060600319820112610213576004359160243561026e81610202565b91604435906001600160401b0382116102135761028d91600401610225565b9091565b346102135760206102ad6102a436610252565b92919091611eec565b6040519015158152f35b34610213576080366003190112610213576102d3600435610202565b6102de602435610202565b6064356001600160401b038111610213576102fd903690600401610225565b5050604051630a85bd0160e11b8152602090f35b34610213576040366003190112610213576024356001600160401b0381116102135761034f6103466020923690600401610225565b9060043561209c565b6040516001600160e01b03199091168152f35b90816101209103126102135790565b606036600319011261021357600480356001600160401b0381116102135761039c9036908301610362565b60243590604435906001600160a01b03907f0000000000000000000000000000000071727de22e5e9d8baf0edac6f37da0328216330361065c578084926103e66020830135613115565b6001600160f81b031990911615959093909186610632575b908461040a93926132fa565b9561041c61041784611e7a565b6121db565b94159485806105f0575b6105df57602001516001600160a01b03169182169081156105ce5760019261045b61047a926000526000602052604060002090565b80546001600160a01b0319166001600160a01b03909216919091179055565b0361052d57826104cf575b50506104be576104a89250805b6104ac575b506040519081529081906020820190565b0390f35b3490349034903490335af15038610497565b604051631a0a9b9f60e21b81528390fd5b6105269250610522916105046104fe6104f86104ed61051b95611eb3565b936060810190612207565b90611d1b565b90611e4e565b63ffffffff60e01b16600052602052604060002090565b5460ff1690565b1590565b3880610485565b8291929161059b575b5061058a576104f881606061054c930190612207565b638dd7712f60e01b916001600160e01b03199161056891611e4e565b1603610579576104a8925080610492565b60405163dbbb044b60e01b81528390fd5b604051631a0a9b9f60e21b81528490fd5b6105c8915061051b6105af61052292611eb3565b6105046104fe6105c26060880188612207565b90611d0a565b38610536565b604051631a0a9b9f60e21b81528990fd5b604051633ab3447f60e11b81528990fd5b50805163ffffffff1663ffffffff61062a6106216000805160206158e08339815191525463ffffffff9060c81c1690565b63ffffffff1690565b911610610426565b93509061040a916106526000805160206158e08339815191525460581b90565b94909192506103fe565b6040516348f5c3ed60e01b81528590fd5b6004359063ffffffff8216820361021357565b359063ffffffff8216820361021357565b6020366003190112610213576106a561066d565b6106c76106c16000805160206158e08339815191525460581b90565b60581c90565b6001600160a01b0390337f0000000000000000000000000000000071727de22e5e9d8baf0edac6f37da032831614158061083f575b156108345760405163ecd0596160e01b8152600480820152911690602081602481855afa9081156107c557600091610805575b50156107f35760405163d68f602560e01b81529160008380610756363433600485016122ca565b038183865af19283156107c5576000936107ca575b50610775906134a1565b803b1561021357604051630b9dfbed60e11b81529160009183918290849082906107a29060048301612306565b03925af180156107c5576107b257005b806107bf61001b9261111a565b80610ed7565b612090565b6107759193506107ec903d806000833e6107e4818361119f565b81019061226c565b929061076b565b6040516348f5c3ed60e01b8152600490fd5b610827915060203d60201161082d575b61081f818361119f565b810190612239565b3861072f565b503d610815565b505061001b906134a1565b50303314156106fc565b60203660031901126102135760043561086181610202565b61087d6106c16000805160206158e08339815191525460581b90565b6001600160a01b0390337f0000000000000000000000000000000071727de22e5e9d8baf0edac6f37da0328316141580610976575b1561096b5760405163ecd0596160e01b8152600480820152911690602081602481855afa9081156107c55760009161094c575b50156107f35760405163d68f602560e01b8152916000838061090c363433600485016122ca565b038183865af19283156107c55760009361092b575b5061077590612317565b610775919350610945903d806000833e6107e4818361119f565b9290610921565b610965915060203d60201161082d5761081f818361119f565b386108e5565b505061001b90612317565b50303314156108b2565b6001600160581b031981160361021357565b9181601f84011215610213578235916001600160401b038311610213576020808501948460051b01011161021357565b346102135760a03660031901126102135760048035906109e182610980565b602435906109ee82610202565b6001600160401b0360443581811161021357610a0d9036908401610225565b909160643581811161021357610a269036908601610225565b92909160843590811161021357610a409036908701610992565b9490966001600160581b0319610a8081610a79610a6c6000805160206158e08339815191525460581b90565b6001600160581b03191690565b161561236b565b891615610b88576001600160f81b03198916600160f81b8114159081610b79575b50610b685788610ab6610b049798999a61356a565b610ad7610ac16111c0565b60018152925b6001600160a01b03166020840152565b6000805160206158e0833981519152805463ffffffff60a81b1916600160a81b1790556135c5565b6135c5565b60005b818110610b1057005b600080610b1e8385886123f5565b60409391610b30855180938193612411565b039082305af1610b3e612432565b5015610b4d5750600101610b07565b51636534eae560e11b81528084019182529081906020010390fd5b6040516361c4e91b60e11b81528790fd5b600160f91b1415905038610aa1565b604051631a0a9b9f60e21b81528790fd5b6080366003190112610213576004803590610bb382610980565b60243591610bc083610202565b6001600160401b039260443584811161021357610be09036908501610225565b909460643590811161021357610bf99036908601610225565b91610c166106c16000805160206158e08339815191525460581b90565b6001600160a01b0390337f0000000000000000000000000000000071727de22e5e9d8baf0edac6f37da0328316141580610d57575b15610d4657169660405163ecd0596160e01b815260208180610c748b8201906004602083019252565b03818c5afa9081156107c557600091610d27575b5015610d165760405163d68f602560e01b81529460008680610cae3634338e85016122ca565b0381838d5af19586156107c557600096610cf7575b50610cce9596612462565b823b15610213576107a29260009283604051809681958294630b9dfbed60e11b84528301612306565b610cce9650610d10903d806000833e6107e4818361119f565b95610cc3565b6040516348f5c3ed60e01b81528790fd5b610d40915060203d60201161082d5761081f818361119f565b38610c88565b505092909361001b96929550612462565b5030331415610c4b565b6001600160e01b031981160361021357565b34610213576020366003190112610213576104a8610db5600435610d9681610d61565b600060408051610da581611132565b8281528260208201520152611fc3565b60405190610dc282611132565b80546001600160a01b0390811680845260019092015480821660208086019182526001600160f81b031960589390931b831660409687019081528651958652915190931692840192909252905116918101919091529081906060820190565b3461021357604036600319011261021357602060ff610e72600435610e4581610980565b610e5a60243591610e5583610d61565b611eb3565b9063ffffffff60e01b16600052602052604060002090565b54166040519015158152f35b34610213576020366003190112610213576020610eb4600435610ea081610202565b6000604051610eae8161114d565b52612f61565b60405190610ec18261114d565b546001600160a01b031690819052604051908152f35b600091031261021357565b60005b838110610ef55750506000910152565b8181015183820152602001610ee5565b90602091610f1e81518092818552858086019101610ee2565b601f01601f1916010190565b3461021357600036600319011261021357610f79610f466137d7565b90604051928392600f60f81b8452610f6b60209360e0602087015260e0860190610f05565b908482036040860152610f05565b90466060840152306080840152600060a084015282820360c0840152602060605192838152019160809160005b828110610fb557505050500390f35b835185528695509381019392810192600101610fa6565b6040366003190112610213576004356001600160401b03811161021357610ff7903690600401610362565b6001600160a01b03907f0000000000000000000000000000000071727de22e5e9d8baf0edac6f37da032821633036107f357602435600090815260208190526040902054606091906001906001600160a01b0316938416141590816110a0575b61107261106b826060611079940190612207565b8091611d29565b903061391e565b501561108e5761108557005b61001b91613945565b60405163f21e646b60e01b8152600490fd5b915061107961107261106b6110c66110be61106b6060880188612207565b90348961389c565b9492505050611057565b3461021357600036600319011261021357602063ffffffff6000805160206158e08339815191525460c81c16604051908152f35b634e487b7160e01b600052604160045260246000fd5b6001600160401b03811161112d57604052565b611104565b606081019081106001600160401b0382111761112d57604052565b602081019081106001600160401b0382111761112d57604052565b604081019081106001600160401b0382111761112d57604052565b61012081019081106001600160401b0382111761112d57604052565b90601f801991011681019081106001600160401b0382111761112d57604052565b6040519061022382611168565b6040519061022382611183565b6001600160401b03811161112d5760051b60200190565b6080366003190112610213576001600160401b036004358181116102135761121d903690600401610992565b906024358381116102135736602382011215610213578060040135611241816111da565b91604091611252604051948561119f565b8084526020906024602086019160061b8401019236841161021357602401905b8382106112ba57505050505060443584811161021357611296903690600401610992565b91606435958611610213576112b261001b963690600401610992565b95909461256e565b84823603126102135782859182516112d181611168565b6112da85610680565b8152828501356112e981610202565b83820152815201910190611272565b61130136610252565b61131d6106c16000805160206158e08339815191525460581b90565b6001600160a01b0390337f0000000000000000000000000000000071727de22e5e9d8baf0edac6f37da032831614158061141a575b1561140e5760405163ecd0596160e01b815260048082015291169290602081602481875afa9081156107c5576000916113ef575b50156107f35760405163d68f602560e01b815293600085806113ad363433600485016122ca565b038183885af19485156107c5576000956113ce575b5061077593949561272a565b6107759495506113e8903d806000833e6107e4818361119f565b94936113c2565b611408915060203d60201161082d5761081f818361119f565b38611386565b50509161001b9361272a565b5030331415611352565b34610213576000366003190112610213576104a860405161144481611168565b60168152756b65726e656c2e616476616e6365642e76302e332e3160501b6020820152604051918291602083526020830190610f05565b34610213576000366003190112610213576040517f0000000000000000000000000000000071727de22e5e9d8baf0edac6f37da0326001600160a01b03168152602090f35b6114c936610252565b6114e56106c16000805160206158e08339815191525460581b90565b6001600160a01b0390337f0000000000000000000000000000000071727de22e5e9d8baf0edac6f37da03283161415806115e2575b156115d65760405163ecd0596160e01b815260048082015291169290602081602481875afa9081156107c5576000916115b7575b50156107f35760405163d68f602560e01b81529360008580611575363433600485016122ca565b038183885af19485156107c557600095611596575b50610775939495612ad9565b6107759495506115b0903d806000833e6107e4818361119f565b949361158a565b6115d0915060203d60201161082d5761081f818361119f565b3861154e565b50509161001b93612ad9565b503033141561151a565b3461021357600036600319011261021357602063ffffffff6000805160206158e08339815191525460a81c16604051908152f35b3461021357602036600319011261021357604061165060043561164281610980565b61164a612c8f565b50611e7a565b602082519161165e83611168565b5463ffffffff81169283815260018060a01b03928391019160201c168152835192835251166020820152f35b346102135760a0366003190112610213576116a6600435610202565b6116b1602435610202565b6001600160401b03604435818111610213576116d1903690600401610992565b5050606435818111610213576116eb903690600401610992565b505060843590811161021357611705903690600401610225565b505060405163bc197c8160e01b8152602090f35b602080825282516001600160f01b03191681830152808301516001600160a01b03166040808401919091529092015160608083015280516080830181905260a090920192908101919060005b828110611773575050505090565b83516001600160501b03191685529381019392810192600101611765565b3461021357602080600319360112610213576004356117af81610d61565b6117d460409160608380516117c381611132565b600081526000878201520152611ffb565b908051916117e183611132565b805460f081901b6001600160f01b031916845260101c6001600160a01b031684840152815160019182018054808352600091825286822083880197939490939092905b82821061184b576104a888888861183d818e038261119f565b818301525191829182611719565b845460501b6001600160501b0319168952978801979383019390830190611824565b346102135760203660031901126102135760206102ad600435612ca8565b9060406003198301126102135760043591602435906001600160401b0382116102135761028d91600401610225565b6118c33661188b565b916001600160a01b036118d533612f61565b541690811561198c57606060019460018414159485611975575b6118f99293614147565b92611965575b5050906040519060208083016020845284518091526040840191602060408360051b8701019601926000905b8382106119385786880387f35b90919293948380611954839a603f198b82030186528951610f05565b99970195949391909101910161192b565b61196e91613945565b38806118ff565b6118f99250611985363487613818565b92506118ef565b60405163710c949760e01b8152600490fd5b60603660031901126102135760048035906119b882610980565b6001600160401b0391602435838111610213576119d89036908401610225565b93604435908111610213576119f09036908501610225565b90611a0d6106c16000805160206158e08339815191525460581b90565b6001600160a01b0390337f0000000000000000000000000000000071727de22e5e9d8baf0edac6f37da0328316141580611b24575b15611b1457169560405163ecd0596160e01b815260208180611a6b8a8201906004602083019252565b03818b5afa9081156107c557600091611af5575b5015611ae45760405163d68f602560e01b81529360008580611aa53634338d85016122ca565b0381838c5af19485156107c557600095611ac5575b50610cce9495612d6a565b610cce9550611ade903d806000833e6107e4818361119f565b94611aba565b6040516348f5c3ed60e01b81528690fd5b611b0e915060203d60201161082d5761081f818361119f565b38611a7f565b50509261001b9592919450612d6a565b5030331415611a42565b611b373661188b565b611b536106c16000805160206158e08339815191525460581b90565b6001600160a01b0390337f0000000000000000000000000000000071727de22e5e9d8baf0edac6f37da0328316141580611c50575b15611c445760405163ecd0596160e01b815260048082015291169190602081602481865afa9081156107c557600091611c25575b50156107f35760405163d68f602560e01b81529260008480611be3363433600485016122ca565b038183875af19384156107c557600094611c04575b50610775929394612d7f565b610775939450611c1e903d806000833e6107e4818361119f565b9392611bf8565b611c3e915060203d60201161082d5761081f818361119f565b38611bbc565b50509061001b92612d7f565b5030331415611b88565b346102135760003660031901126102135760206000805160206158e08339815191525460581b604051906001600160581b0319168152f35b346102135760a036600319011261021357611cae600435610202565b611cb9602435610202565b6084356001600160401b03811161021357611cd8903690600401610225565b505060405163f23a6e6160e01b8152602090f35b346102135760203660031901126102135760206102ad600435612d8a565b906008116102135760040190600490565b906004116102135790600490565b909291928360041161021357831161021357600401916003190190565b906018116102135760040190601490565b906014116102135790601490565b906020116102135790602090565b909291928360011161021357831161021357600101916000190190565b909291928360141161021357831161021357601401916013190190565b906009116102135760010190600890565b909291928360091161021357831161021357600901916008190190565b906016116102135790601690565b906016116102135760020190601490565b909291928360161161021357831161021357601601916015190190565b906002116102135790600290565b90602c116102135760180190601490565b90939293848311610213578411610213578101920390565b6001600160e01b03199035818116939260048110611e6b57505050565b60040360031b82901b16169150565b6001600160581b0319166000527f7bcaa2ced2a71450ed5a9a1b4848e8e5206dbc3f06011e595f7f55428cc6f850602052604060002090565b6001600160581b0319166000527f7bcaa2ced2a71450ed5a9a1b4848e8e5206dbc3f06011e595f7f55428cc6f851602052604060002090565b90929060018103611f3b57506001600160a01b0392611f359250611f25915060581b600160581b600160f81b0316600160f81b17611e7a565b5460201c6001600160a01b031690565b16151590565b60028103611f7b57506001600160a01b0392611f359250611f6f9150611f62908416612f61565b546001600160a01b031690565b6001600160a01b031690565b600303611fbb57611f9c611f976104fe600193611faa95611d1b565b611fc3565b01546001600160a01b031690565b6001600160a01b0390811691161490565b505050600090565b63ffffffff60e01b166000527f7c341349a4360fdd5d5bc07e69f325dc6aaea3eb018b3e0ea7e53cc0bb0d6f3b602052604060002090565b63ffffffff60e01b166000527f7bcaa2ced2a71450ed5a9a1b4848e8e5206dbc3f06011e595f7f55428cc6f852602052604060002090565b90816020910312610213575161204881610d61565b90565b908060209392818452848401376000828201840152601f01601f1916010190565b612048949260609260018060a01b031682526020820152816040820152019161204b565b6040513d6000823e3d90fd5b916120a691612f9a565b91906001600160f81b0319808316156121ba575b6001600160a01b0390816120d3611f6f611f2587611e7a565b16156121a8578316600160f81b03612158579060209392916120f7612115966130cc565b604051637aa8f17760e11b815296879586948593336004860161206c565b039260581c165afa9081156107c55760009161212f575090565b612048915060203d602011612151575b612149818361119f565b810190612033565b503d61213f565b509060081b92600160f11b61218661217961217287611ffb565b5460f01b90565b6001600160f01b03191690565b166121965761204893339061301b565b604051635b71057960e01b8152600490fd5b604051631a0a9b9f60e21b8152600490fd5b91506121d56000805160206158e08339815191525460581b90565b916120ba565b906040516121e881611168565b915463ffffffff81168352602090811c6001600160a01b031690830152565b903590601e198136030182121561021357018035906001600160401b0382116102135760200191813603831361021357565b90816020910312610213575180151581036102135790565b6001600160401b03811161112d57601f01601f191660200190565b602081830312610213578051906001600160401b038211610213570181601f8201121561021357805161229e81612251565b926122ac604051948561119f565b81845260208284010111610213576120489160208085019101610ee2565b916080939160018060a01b03168352602083015260606040830152806060830152806000848401376000828201840152601f01601f1916010190565b906020612048928181520190610f05565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8190556001600160a01b03167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b600080a2565b1561237257565b60405162461bcd60e51b8152602060048201526013602482015272185b1c9958591e481a5b9a5d1a585b1a5e9959606a1b6044820152606490fd5b6000805160206158e0833981519152805463ffffffff60a81b191660a89290921b63ffffffff60a81b16919091179055565b634e487b7160e01b600052603260045260246000fd5b9082101561240c5761028d9160051b810190612207565b6123df565b908092918237016000815290565b6040519061242c8261114d565b60008252565b3d1561245d573d9061244382612251565b91612451604051938461119f565b82523d6000602084013e565b606090565b94939291906001600160581b03198616156121a8576001600160f81b03198616600160f81b811415908161251e575b5061250c5761249f8661356a565b6001600160a01b036124b3611f2588611e7a565b16156124c2575b505050505050565b61250195610aff6124e96000805160206158e08339815191525463ffffffff9060a81c1690565b92610ac76124f56111c0565b63ffffffff9095168552565b3880808080806124ba565b6040516361c4e91b60e11b8152600490fd5b600160f91b1415905038612491565b9060405161253a81611132565b82546001600160a01b039081168252600190930154928316602082015260589290921b6001600160f81b0319166040830152565b959294919390946125916106c16000805160206158e08339815191525460581b90565b6001600160a01b0390337f0000000000000000000000000000000071727de22e5e9d8baf0edac6f37da03283161415806126de575b156126ce5760405163ecd0596160e01b8152600480820152911695906020816024818a5afa9081156107c5576000916126af575b50156107f35760405163d68f602560e01b81529660008880612621363433600485016122ca565b0381838b5af19788156107c55760009861268e575b506126429697986139be565b803b1561021357604051630b9dfbed60e11b815291600091839182908490829061266f9060048301612306565b03925af180156107c557612681575b50565b806107bf6102239261111a565b6126429798506126a8903d806000833e6107e4818361119f565b9796612636565b6126c8915060203d60201161082d5761081f818361119f565b386125fa565b50509193909294610223966139be565b50303314156125c6565b91602061204893818152019161204b565b6bffffffffffffffffffffffff19903581811693926014811061271b57505050565b60140360031b82901b16169150565b60018103612863575060581b600160581b600160f81b0316600160f81b17906127ee6127c7611f6f6127c16127bb6127b461277161276789611e7a565b5463ffffffff1690565b6000805160206158e083398151915290612793825463ffffffff9060a81c1690565b9063ffffffff9081168183161461284f575b50505460a81c63ffffffff1690565b9786611d57565b906126f9565b60601c90565b6127de6127d26111c0565b63ffffffff9096168652565b6001600160a01b03166020850152565b61282860148201358201916034810135810190605481013501946014860135936034601484013593019160346014830135920190876135c5565b60048114612836575b505050565b6104fe6128499160346102239501611d1b565b90613d9c565b600161285c9201166123ad565b38806127a5565b600281036128bf5750916128b061022393612895611f6f6127c16127bb60148801358801966034890135890198611d57565b928391601482013591603401906001600160a01b0316613d53565b60346014830135920190613ba0565b9091906003810361293f575061293a611f6f61292a610223958461292560186127c197013582016127c160388401358401996128fe6104fe8787611d1b565b9061291f611f6f61290f8989611d46565b60188801359760380196916126f9565b91613a2c565b611d46565b60188601359560380194916126f9565b613ba0565b90600482036129d4576001600160a01b03831693843b156102135761297e94600092836040518098819582946306d61fe760e41b8452600484016126e8565b03925af19283156107c5576000805160206158a0833981519152936129c1575b50604080519182526001600160a01b03909216602082015290819081015b0390a1565b806107bf6129ce9261111a565b3861299e565b60058203612a12576001600160a01b03831693843b156102135761297e94600092836040518098819582946306d61fe760e41b8452600484016126e8565b60068203612a50576001600160a01b03831693843b156102135761297e94600092836040518098819582946306d61fe760e41b8452600484016126e8565b604051631092ef5760e11b8152600490fd5b359060208110612a70575090565b6000199060200360031b1b1690565b919060405190612a8e8261114d565b819360008352116102135760206000910152565b929192612aae82612251565b91612abc604051938461119f565b829481845281830111610213578281602093846000960137010152565b60018103612b02575061267e92919060581b600160581b600160f81b0316600160f81b17613fef565b60028103612b1f575061267e9291906001600160a01b0316613f6a565b60038103612b4a575050612b448280612b3e6104fe61267e9686611d1b565b93611d29565b91613eb0565b909160048203612bde57612bab61299e916000805160206158c083398151915295612b846000805160206158e08339815191525460581b90565b612b90611f2582611e7a565b6001600160a01b03888116911614612bb1575b503691612aa2565b83613e01565b612bbd612bd891611e7a565b8054640100000000600160c01b031916640100000000179055565b38612ba3565b60058203612c6f576000805160206158e08339815191525460581b5b612c0d612c078684611d65565b90612a62565b906001600160f81b03198116600160f91b14612c44575b5050612bab61299e916000805160206158c0833981519152953691612aa2565b60081b6001600160e01b03191614612c5d573880612c24565b6040516313002bdd60e31b8152600490fd5b60068203612a50576000805160206158e08339815191525460581b612bfa565b60405190612c9c82611168565b60006020838281520152565b612cbc818060081b918160301b9160501b90565b929091600160f81b916001600160f81b031991908216838114159081612d60575b81612d55575b81612d46575b50612d3c5716908114159081612d32575b50612d2b576001600160e01b031916612d25576001600160501b031916612d2057600190565b600090565b50600090565b5050600090565b9050151538612cfa565b5050505050600090565b607f60f91b1415905038612ce9565b838114159150612ce3565b8015159150612cdd565b91612d7a91610223959493613fef565b614347565b9061267e9291614147565b60071115612d2057600190565b7f88a5966d370b9919b20f3e2c13ff65706f196a4e32cc2c12bf57088f8852587460408051338152346020820152a1565b612de5612de06000356001600160e01b031916611fc3565b61252d565b80516001600160a01b03908190612dfd908216611f6f565b1615612f4f57815160609082908190612e1e906001600160a01b0316611f6f565b16600181141580612f45575b15612f055750508251612e4a91506001600160a01b031636903490613818565b60408301516001600160f81b031990811680612ece5750506020830151612e79906001600160a01b03166143da565b93905b15612ec657516001600160a01b0316918083169060018214159182612ebb575b5050612eab575b825160208401f35b612eb491613945565b3880612ea3565b141590503880612e9c565b835160208501fd5b03612ef3576020830151612eec906001600160a01b031636906138f7565b9390612e7c565b604051632d6a6bb760e01b8152600490fd5b03612e4a57337f0000000000000000000000000000000071727de22e5e9d8baf0edac6f37da032831614612e4a576040516348f5c3ed60e01b8152600490fd5b5081811415612e2a565b604051631cd4b64760e21b8152600490fd5b6001600160a01b031660009081527f1bbee3173dbdc223633258c9f337a0fff8115f206d302bea0ed3eac003b68b866020526040902090565b9182358060f81c80600014612fe05780600114612fd357600214612fbd57600080fd5b6001600160d81b03191692600501916004190190565b5092601501916014190190565b5050600160009301916000190190565b90926080926120489694835260018060a01b031660208301526040820152816060820152019161204b565b90919261303a9461302e9185858561441a565b9492939196909661450e565b509065ffffffffffff80911642109182156130c0575b50506130ad5761308e6130646020966130cc565b60405163392dffaf60e01b8152978896879586959193916001600160e01b03191660048701612ff0565b03916001600160a01b03165afa9081156107c55760009161212f575090565b506001600160e01b031995945050505050565b16421190503880613050565b6120489060405160208101917f1547321c374afde8a591d972a084b071c594c275e36724931ff96c25f2999c83835260408201526040815261310d81611132565b519020614537565b90818060081b9160ff839260f01c1660021461312d57565b6001600160d81b031983169150565b9080601f830112156102135781602061204893359101612aa2565b9190610120838203126102135761316c6111cd565b9261317681610218565b8452602081013560208501526040810135916001600160401b039283811161021357816131a491840161313c565b6040860152606082013583811161021357816131c191840161313c565b60608601526080820135608086015260a082013560a086015260c082013560c086015260e082013583811161021357816131fc91840161313c565b60e086015261010092838301359081116102135761321a920161313c565b90830152565b90816020910312610213575190565b80516001600160a01b0316825261204891906132ad61327d61326b61012060208501516020870152604085015190806040880152860190610f05565b60608401518582036060870152610f05565b6080830151608085015260a083015160a085015260c083015160c085015260e083015184820360e0860152610f05565b916101008092015191818403910152610f05565b9392916132de90604092865260606020870152606086019061322f565b930152565b9291906132de60209160408652604086019061322f565b92909260009261330a3682613157565b91610100918281019161331d8383612207565b90949093600160f81b936001600160f81b03199384168514613466575b5050508716036133c7575050604051639700320360e01b81529360209285928391600091839161336d91600484016132e3565b039260581c6001600160a01b03165af19081156107c55761204892600092613396575b50614a46565b6133b991925060203d6020116133c0575b6133b1818361119f565b810190613220565b9038613390565b503d6133a7565b909460081b93909291600160f01b6133e461217961217288611ffb565b166134545760006134056133ff60209661342f99858a61484d565b94614a46565b604051630ccab7a160e01b8152979096889586948593926001600160e01b031916600485016132c1565b03926001600160a01b03165af19081156107c557612048926000926133965750614a46565b6040516314b9743f60e01b8152600490fd5b9091955061348293985061347b929450612207565b908861464b565b9691929093613495858995993691612aa2565b9086015238808061333a565b6000805160206158e083398151915280549163ffffffff92600a848260a81c1601908482116135545782851691851682116135425760c81c84161015613530576000805160206158e0833981519152805463ffffffff60c81b191660c89290921b63ffffffff60c81b1691909117905554818160c81c1691829160a81c16106135275750565b610223906123ad565b604051633ab3447f60e11b8152600490fd5b60405163e60fd64760e01b8152600490fd5b634e487b7160e01b600052601160045260246000fd5b60207f6789ec0c85d6458d897a36a70129b101f8b4d84c6e218046c3107373dbcbae88916000805160206158e08339815191528160581c6001600160581b0360a81b825416179055604051906001600160581b0319168152a1565b91939092946135d661276784611e7a565b936000805160206158e0833981519152946135f9865463ffffffff9060a81c1690565b63ffffffff8092818084169116146137c3575b50506020820180516001600160a01b0397919291613639918916156137ba575b5460a81c63ffffffff1690565b8161364b610621865163ffffffff1690565b91161490811591613790575b50613530576136a66136b39261366c87611e7a565b815181546020938401516001600160c01b031990911663ffffffff9290921691909117921b640100000000600160c01b0316919091179055565b516001600160a01b031690565b9160018584160361377f575b5050506001600160f81b03198116600160f81b8103613763575060581c1690813b15610213576040516306d61fe760e41b815292600091849182916137089190600484016126e8565b038183855af19081156107c5576000805160206158a0833981519152926129bc92613750575b5060408051600181526001600160a01b03909216602083015290918291820190565b806107bf61375d9261111a565b3861372e565b909350600160f91b1415905061250c576102239160081b614bc8565b61378892613ba0565b3880806136bf565b905061379e61276787611e7a565b906137b0610621855163ffffffff1690565b9116101538613657565b6001845261362c565b60016137d09201166123ad565b388161360c565b6040516137e381611168565b600681526512d95c9b995b60d21b60208201529060405161380381611168565b6005815264302e332e3160d81b602082015290565b60405163d68f602560e01b815233600482015260248101929092526060604483015260648201839052600092839183918290849060849083908084838501378181018301849052601f01601f191681010301926001600160a01b03165af19182156107c557809261388857505090565b61204892503d8091833e6107e4818361119f565b600092836138c395936040519687958694859363d68f602560e01b8552336004860161206c565b03926001600160a01b03165af19081156107c5576000916138e2575090565b61204891503d806000833e6107e4818361119f565b60009060405192808385378338925af4913d82523d6000602084013e60203d830101604052565b60009192806040519485378338925af4913d82523d6000602084013e60203d830101604052565b6001600160a01b0316803b1561021357604051630b9dfbed60e11b815260206004820152916000918391829084908290613983906024830190610f05565b03925af180156107c5576139945750565b6102239061111a565b80511561240c5760200190565b805182101561240c5760209160051b010190565b96959192939694909460005b8681106139dc57505050505050509050565b80613a1d8a60019360051b8501356139f381610980565b613a0984613a01818c6139aa565b51938c6123f5565b90613a15868b8b6123f5565b9490936135c5565b016139ca565b901561240c5790565b6001600160a01b03939192919084831615613b98575b613a4b90611fc3565b94613a77613a6a613a5c8385613a23565b356001600160f81b03191690565b6001600160f81b03191690565b946001600160f81b031980871680613b795750509080613a9992861693611d73565b823b1561021357613ac492600092836040518096819582946306d61fe760e41b8452600484016126e8565b03925af19485156107c557613b29613b499360019361022398613b66575b5060408051600381526001600160a01b03881660208201526000805160206158a08339815191529190a15b82546001600160a01b0319166001600160a01b03909116178255565b0180546001600160a01b0319166001600160a01b03909316929092178255565b805460ff60a01b191660589290921c60ff60a01b16919091179055565b806107bf613b739261111a565b38613ae2565b925092505094919403612ef3576001613b4991613b2961022396613b0d565b849250613a42565b6001600160a01b0316919082158015613d49575b6128315760405163d60b347f60e01b8152306004820152602081602481875afa9081156107c557600091613d2a575b50613c7b579080613bf392611d73565b9190813b15610213576040516306d61fe760e41b81529260009184918291613c1f9190600484016126e8565b038183855af19081156107c5576000805160206158a0833981519152926129bc92613c68575b505b60408051600481526001600160a01b03909216602083015290918291820190565b806107bf613c759261111a565b38613c45565b6001600160f81b031980613c92613a5c8585613a23565b1614613cb3575b50506129bc6000805160206158a083398151915291613c47565b9080613cbe92611d73565b9190813b15610213576040516306d61fe760e41b81529260009184918291613cea9190600484016126e8565b038183855af19081156107c5576000805160206158a0833981519152926129bc92613d17575b5091613c99565b806107bf613d249261111a565b38613d10565b613d43915060203d60201161082d5761081f818361119f565b38613be3565b5060018314613bb4565b9092613d5f9082614ecc565b6001600160a01b031691823b156102135761398392600092836040518096819582946306d61fe760e41b845260206004850152602484019161204b565b7f9d17cd6d095ac90a655405ab29f30a7ee7e88ef3974c1bf7544bf591043bb71a91606091613dce82610e5a83611eb3565b600160ff198254161790556040519163ffffffff60e01b1682526001600160581b031916602082015260016040820152a1565b60407f2b82f87bf66300af618a9621d3f221edfab735f5bacb4e004cce1b62375396c3919392935a825195613e6187613e536020820193638a91b0e360e01b8552602060248401526044830190610f05565b03601f19810189528861119f565b6000918291828587519a613e748c61114d565b828c525193f1943d9081613ea7575b6020818360009352013e81516001600160a01b0390911681528415156020820152a1565b60009150613e83565b613ebd9093929193611fc3565b80546001600160a01b031981168255600190910180546001600160a01b03928316959193909290605884901b6001600160f81b03191615613f0e575b505082546001600160a81b0319169092555050565b6000805160206158c08339815191529382613f31613f5e95613f38943691612aa2565b9116613e01565b5083546040805160038152929091166001600160a01b0316602083015290918291820190565b0390a138808080613ef9565b6001600160a01b0390811660008181527f1bbee3173dbdc223633258c9f337a0fff8115f206d302bea0ed3eac003b68b8660205260409081902080546001600160a01b0319811690915590921694936000805160206158c083398151915293613fdf91613fd991369190612aa2565b82613e01565b50815190600282526020820152a1565b92919061402061400e6000805160206158e08339815191525460581b90565b6001600160581b031980871691161490565b612c5d57614030611f2585611e7a565b9361405161403d82611e7a565b8054640100000000600160c01b0319169055565b6001600160f81b03198116600160f81b810361409757509161372e613fd96129bc936000805160206158c08339815191529560018060a01b039060581c16933691612aa2565b909250600160f91b0361250c576102239160081b614f56565b6040516140bc81611168565b600181528060005b6020808210156140df579060606020928285010152016140c4565b50505090565b906140ef826111da565b6140fc604051918261119f565b828152809261410d601f19916111da565b019060005b82811061411e57505050565b806060602080938501015201614112565b90604061204892600081528160208201520190610f05565b61415b818060081b918160301b9160501b90565b5090936001600160f81b031993600160f81b9390925084168381036141e657505061418d908035019060208201913590565b9290931680156000146141a55750506120489161525d565b036141b357612048916151a0565b60405162461bcd60e51b815260206004820152600b60248201526a155b9cdd5c1c1bdc9d195960aa1b6044820152606490fd5b949594909190806142835750906141fc916150f4565b939092946142086140b0565b97168061422d57505061421a93615145565b6142238361399d565b5261267e8261399d565b036141b35761423b9361511c565b6142448461399d565b52610223577fe723f28f104e46b47fd3531f3608374ac226bcf3ddda334a23a266453e0efdb76129bc6142768461399d565b516040519182918261412f565b9195939182036141b3576142ba906142b461429c6140b0565b97806142ae6127c16127bb8387611d57565b93611d90565b9161391e565b6142c68795929561399d565b52169081036143045750156142d757565b7fe723f28f104e46b47fd3531f3608374ac226bcf3ddda334a23a266453e0efdb76129bc6142768461399d565b6141b3576102235760405162461bcd60e51b815260206004820152601360248201527211195b1959d85d1958d85b1b0819985a5b1959606a1b6044820152606490fd5b9091906001600160a01b0316801580156143d0575b61283157811561240c576000805160206158c0833981519152926129bc926001600160f81b031982358116146143b0575b505060408051600481526001600160a01b03909216602083015290918291820190565b6143c181613fd9926143c894611d73565b3691612aa2565b50388061438d565b506001811461435c565b600080604092835136810185523683823784516014810186523360601b90528260143601925af1918151913d83523d6000602085013e60203d8401019052565b848461449d9261448897969498956040519161443583611183565b61449760009b8c92838652836020870152604086019d8e52606086019c8d918583528560808901528560a0890152606060c089015260e088019286845261010089019687529063ffffffff60e01b169052565b6001600160a01b039091169052565b526152f6565b60ff806144b66144b0613a5c8786613a23565b60f81c90565b16036144fc576144e56144d0846144e0956144f594611d73565b9490955163ffffffff60e01b1690565b611ffb565b5460101c6001600160a01b031690565b9351929190565b60405163b32eeb6960e01b8152600490fd5b8065ffffffffffff91828160a01c1692831560011461452f575b5060d01c92565b925038614528565b7fbd7a7acd509f23d74aba305f18d3dee9b50804e98da655bc44404cb9f53c27557f000000000000000000000000bac849bb641841b44e965fb01a4bf5f074f84b4d30147f0000000000000000000000000000000000000000000000000000000000000001461416156145c4575b671901000000000000600052601a52603a526042601820906000603a52565b5060a06040517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f81527f32ba20807d2fff2dbb34e0bcfa82982565bef566d4c0c633dc57b700b81c342760208201527fa54d0256a5ef7b691e1e01baacb06baa29013253f551f7dad7708516cb21264d6040820152466060820152306080820152206145a5565b91929092614657612c8f565b906146629085611d57565b61466b916126f9565b60601c602082018190526000805160206158e08339815191525460a81c63ffffffff1680835260349560148082013582018089019791959294919360548601358601808b019490880135939092878c01358801808a013593908d0192918a0135918891908d8436906146dc92612aa2565b8051906020012091366146f0908888612aa2565b8051906020012036614703908b8d612aa2565b8051602091820120604080517fb17ab1224aca0d4255ef8161acaf2ac121b8faa32a4b2258c912cc5f8308c5059381019384526001600160581b0319989098169088015263ffffffff9390931660608701526001600160a01b0393909316608086015260a085019390935260c084019290925260e0808401929092529082529061478f6101008261119f565b51902061479b90614537565b607489013589018d8b82013591016147b292615548565b9a6147bd94886135c5565b6147c781836156e5565b6147d091611d1b565b6147d991611e4e565b6147e291613d9c565b6094810135019293830192013590565b805482101561240c5760005260206000200190600090565b6001600160c01b0319903581811693926008811061482757505050565b60080360031b82901b16169150565b60409061204893928152816020820152019061322f565b60009493916001868161485f85611ffb565b016000835b6148a5575b5050505060ff806148806144b0613a5c8789613a23565b16036144fc5761010061489d6143c1856144e59661204898611d73565b910152611ffb565b8197969754811015614a3e576148d66148ce6148c183856147f2565b90549060031b1c60501b90565b908160501c90565b9890976148f26148ec6144b0613a5c8585613a23565b60ff1690565b808403614a0d575090818161492b61491f6149196149138461494898611dad565b9061480a565b60c01c90565b6001600160401b031690565b6009019161493d6143c1848484611dbe565b6101008b0152611e36565b989098975b600160f01b1615614962575b50830183614864565b998661499f929b60018060a01b036040918983518092633894f6e760e11b8252818b868260209c8d9760049c63ffffffff60e01b168d8401614836565b0393165af19586156107c55788966149ee575b505084166149d45750506149ca859493928592614a46565b9a91929350614959565b51631f24c1fb60e11b81529081018c815281906020010390fd5b614a05929650803d106133c0576133b1818361119f565b9338806149b2565b9099919890831115614a2b57604051630760bdcf60e11b8152600490fd5b614a3361241f565b61010088015261494d565b969596614869565b6001600160a01b03818318811615606083811b848601821b9081149186901b141717600114614a7757505050600190565b65ffffffffffff60a01b80831693906001600160d01b031984811691908316908615614ad9575b8381168015614ad2575b878110908818028088189714614aca575b508181119082180218921716171790565b955038614ab9565b5080614aa8565b955085614a9e565b8054906000906000815582614af557505050565b6000526020600020918201915b828110614b0e57505050565b818155600101614b02565b6001600160501b03199035818116939260168110614b3657505050565b60160360031b82901b16169150565b80546801000000000000000081101561112d57614b67916001820181556147f2565b819291549060031b9160501c821b9160018060b01b03901b1916179055565b9092809260209483528483013701016000815290565b6001600160f01b03199035818116939260028110614bb957505050565b60020360031b82901b16169150565b91908035016020808201913560fe81118015614ec4575b614eb257600180614bef87611ffb565b0154614e99575b60001982019260005b848110614d6c5750505093614cc0614cb98387614c59614caa614c91612179614c8b614c8587614cdc9e9f8e614c80614cea9f8f90611f6f6127c16127bb614c4b614c519489896123f5565b90611de9565b9a8b91611ffb565b805462010000600160b01b03191660109290921b62010000600160b01b0316919091179055565b6123f5565b90611e17565b90614b9c565b614c9a88611ffb565b9060f01c61ffff19825416179055565b6001600160a01b0316966123f5565b8091611dfa565b6040519586939092906001600160e01b03191660208501614b86565b03601f19810184528361119f565b803b15610213576000614d1192604051809481926306d61fe760e41b835260048301612306565b038183855af19081156107c5576000805160206158a0833981519152926129bc92614d59575b5060408051600681526001600160a01b03909216602083015290918291820190565b806107bf614d669261111a565b38614d37565b614dad83614d798a611ffb565b01614da7614d9a614d94614d8e868a8d6123f5565b90611ddb565b90614b19565b6001600160501b03191690565b90614b45565b614dc7611f6f611f6f6127c16127bb614c4b868a8d6123f5565b90614dd6614cb982878a6123f5565b92614df78b614cdc604096875195869363ffffffff60e01b168a8501614b86565b803b156102135783516306d61fe760e41b8152916000918391829084908290614e239060048301612306565b03925af180156107c5578593614e5d6127c16127bb614c4b878c8f6000805160206158a083398151915299614e7d99614e86575b506123f5565b9051600581526001600160a01b0390911660208201529081906040820190565b0390a101614bff565b806107bf614e939261111a565b38614e57565b614ead6001614ea788611ffb565b01614ae1565b614bf6565b60405163b62d956d60e01b8152600490fd5b508015614bdf565b6000805160206158a083398151915291604091906001600160a01b0380821615614f4d575b90911660008181527f1bbee3173dbdc223633258c9f337a0fff8115f206d302bea0ed3eac003b68b8660205283902080546001600160a01b0319166001600160a01b0390931692909217909155815190600282526020820152a1565b60019150614ef1565b91908035019160209060208401933590614f6f81611ffb565b926001808501600181540185036150e2576000825b615036575b50505050614fd691614fd182614cc06102239798614fae6001614ea7614cdc98611ffb565b8754614fc59060101c6001600160a01b0316611f6f565b946000198101916123f5565b613e01565b5080546000805160206158c083398151915290615023906150029060101c6001600160a01b0316611f6f565b60408051600681526001600160a01b03909216602083015290918291820190565b0390a180546001600160b01b0319169055565b81548110156150dd579082826000805160206158c08339815191526150d28c6150a46150b28a612bab8d8f8961508a916150798d9f8f6148ce916148c1916147f2565b6001600160a01b03169990506123f5565b60409691875195869463ffffffff60e01b16908501614b86565b03601f19810183528261119f565b5051600581526001600160a01b0390911660208201529081906040820190565b0390a1019091614f84565b614f89565b60405163013dcc8d60e31b8152600490fd5b908060141161021357813560601c928160341161021357601483013592603401916033190190565b906000928491604051958692833738935af1913d82523d6000602084013e60203d830101604052565b9092600092819594604051968792833738935af115615174573d82523d6000602084013e60203d830101604052565b503d6000823e3d90fd5b919081101561240c5760051b81013590605e1981360301821215610213570190565b9190916151ac836140e5565b9260005b8181106151bc57505050565b806151ca600192848661517e565b80356151d581610202565b6151f6602080936040936151eb85830183612207565b93909201359061511c565b615200858b6139aa565b521561520f575b5050016151b0565b7fe723f28f104e46b47fd3531f3608374ac226bcf3ddda334a23a266453e0efdb79161525361523e858b6139aa565b51838051948594888652850152830190610f05565b0390a13880615207565b919091615269836140e5565b9260005b81811061527957505050565b806152af602061528c600194868861517e565b803561529781610202565b6152a46040830183612207565b939092013590615145565b6152b982886139aa565b526152c481876139aa565b500161526d565b90926080926120489594835260018060a01b0316602083015260408201528160608201520190610f05565b91906060830160019360016153156144e0845163ffffffff60e01b1690565b01936000936000958054965b87811061533357505050505050505050565b806153456148ce6148c18c94866147f2565b6001600160a01b031660a088019081526080880195909161536e906001600160f01b0319168752565b6153886153816144b0613a5c8a85613a23565b60ff168952565b6153966148ec895160ff1690565b80840361551057508681816153bb61491f61491961491361540f9c9d6153e298611dad565b60208c018181528c60c06153d76143c160099586018789611dbe565b910152510191611e36565b959095965b51600160f11b90615401906001600160f01b031916612179565b166001600160f01b03191690565b1561541c575b5001615321565b51909150615432906001600160a01b0316611f6f565b865161545690615449906001600160e01b03191681565b6001600160e01b03191690565b60e08701519091906001600160a01b03169161549b6101008901519360c08a01516040948551808095819463184dfdbb60e11b835260209a8b9760049a8b86016152cb565b03915afa9384156107c5578b946154f1575b50506001600160a01b0383166154d65750860180518b93926154ce91614a46565b905238615415565b9051631f24c1fb60e11b815290810183815281906020010390fd5b615508929450803d106133c0576133b1818361119f565b9138806154ad565b83919694501060001461552f57604051630760bdcf60e11b8152600490fd5b61540f8b9361553e3688612a7f565b60c08a01526153e7565b6000805160206158e08339815191525460009493929060581b916001600160f81b03198316600160f81b810361560b5750604051637aa8f17760e11b81529360209385939092849283926155a092306004860161206c565b039160581c6001600160a01b03165afa9081156107c5576000916155ec575b505b6001600160e01b0319166374eca2c160e11b016155da57565b6040516362467c7760e11b8152600490fd5b615605915060203d60201161215157612149818361119f565b386155bf565b919550929190600160f91b0361250c5760209161562e9160081b9584308861441a565b60405163392dffaf60e01b8152929792958694938593849361566193909230906001600160e01b03191660048701612ff0565b03916001600160a01b03165afa9081156107c557600091615683575b506155c1565b61569c915060203d60201161215157612149818361119f565b3861567d565b156156a957565b60405162461bcd60e51b8152602060048201526014602482015273496e76616c69642073656c6563746f724461746160601b6044820152606490fd5b6156f26104fe8383611d1b565b90600483101561570157505050565b602c83106158915761571c611f6f6127c16127bb8685611d46565b602c8201358201602c604c820191013591604c840135840194615756615748613a6a613a5c8787613a23565b6001600160f81b0319161590565b80615800575b9461579d61293a95611f6f956157a2956102239b956127c19a6157b2575b61578d611f6f6127c16127bb8a8a611e25565b916001600160a01b031690613a2c565b611e25565b602c86013595604c0194916126f9565b6157fb606c87013587016157f5602c604c8301920135806157dc611f6f6127c16127bb8488611d57565b936157f0856001600160a01b038a16614ecc565b611d90565b91613ba0565b61577a565b5091939092956040519163ecd0596160e01b83526020838061582a60048201906002602083019252565b03816001600160a01b0389165afa9283156107c557610223986127c19761293a97611f6f976157a29761579d95600091615872575b50959a50959b509550955095505061575c565b61588b915060203d60201161082d5761081f818361119f565b3861585f565b5050600461022391146156a256fed21d0b289f126c4b473ea641963e766833c2f13866e4ff480abd787c100ef123341347516a9de374859dfda710fa4828b2d48cb57d4fbe4c1149612b8e02276e7bcaa2ced2a71450ed5a9a1b4848e8e5206dbc3f06011e595f7f55428cc6f84f",
  },
  KernelECDSAValidator: {
    address: "0x845ADb2C711129d4f3966735eD98a9F09fC4cE57",
    abi: [
      {
        inputs: [
          {internalType: "address", name: "smartAccount", type: "address"},
        ],
        name: "AlreadyInitialized",
        type: "error",
      },
      {
        inputs: [{internalType: "address", name: "target", type: "address"}],
        name: "InvalidTargetAddress",
        type: "error",
      },
      {
        inputs: [
          {internalType: "address", name: "smartAccount", type: "address"},
        ],
        name: "NotInitialized",
        type: "error",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "kernel",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "owner",
            type: "address",
          },
        ],
        name: "OwnerRegistered",
        type: "event",
      },
      {
        inputs: [{internalType: "address", name: "", type: "address"}],
        name: "ecdsaValidatorStorage",
        outputs: [{internalType: "address", name: "owner", type: "address"}],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {internalType: "address", name: "smartAccount", type: "address"},
        ],
        name: "isInitialized",
        outputs: [{internalType: "bool", name: "", type: "bool"}],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{internalType: "uint256", name: "typeID", type: "uint256"}],
        name: "isModuleType",
        outputs: [{internalType: "bool", name: "", type: "bool"}],
        stateMutability: "pure",
        type: "function",
      },
      {
        inputs: [
          {internalType: "address", name: "", type: "address"},
          {internalType: "bytes32", name: "hash", type: "bytes32"},
          {internalType: "bytes", name: "sig", type: "bytes"},
        ],
        name: "isValidSignatureWithSender",
        outputs: [{internalType: "bytes4", name: "", type: "bytes4"}],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{internalType: "bytes", name: "_data", type: "bytes"}],
        name: "onInstall",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [{internalType: "bytes", name: "", type: "bytes"}],
        name: "onUninstall",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [{internalType: "bytes", name: "hookData", type: "bytes"}],
        name: "postCheck",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [
          {internalType: "address", name: "msgSender", type: "address"},
          {internalType: "uint256", name: "value", type: "uint256"},
          {internalType: "bytes", name: "", type: "bytes"},
        ],
        name: "preCheck",
        outputs: [{internalType: "bytes", name: "", type: "bytes"}],
        stateMutability: "payable",
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
          {internalType: "bytes32", name: "userOpHash", type: "bytes32"},
        ],
        name: "validateUserOp",
        outputs: [{internalType: "uint256", name: "", type: "uint256"}],
        stateMutability: "payable",
        type: "function",
      },
    ],
    bytecode:
      "0x608060408181526004918236101561001657600080fd5b600090813560e01c908163173bf7da1461043a57816320709efc14610403575080636d61fe701461034a5780638a91b0e3146102d4578063970032031461028e578063d60b347f14610240578063d68f602514610124578063ecd05961146100e55763f551e2ee1461008757600080fd5b346100e25760603660031901126100e2576100a061049e565b506044359067ffffffffffffffff82116100e257506100c76020936100d09236910161046b565b906024356105e5565b90516001600160e01b03199091168152f35b80fd5b50919034610120576020366003190112610120576020925081359160018314928315610116575b5050519015158152f35b149150388061010c565b8280fd5b509160603660031901126101205761013a61049e565b9267ffffffffffffffff6044358181116101205761015b903690850161046b565b505033825260208281528483205490956001600160a01b039182169116036101f157835192858401918211848310176101de575083949291945283815282519382859384528251928382860152825b8481106101c857505050828201840152601f01601f19168101030190f35b81810183015188820188015287955082016101aa565b634e487b7160e01b835260419052602482fd5b835162461bcd60e51b8152808401869052602360248201527f454344534156616c696461746f723a2073656e646572206973206e6f74206f776044820152623732b960e91b6064820152608490fd5b50903461028a57602036600319011261028a5760209061028161026161049e565b6001600160a01b0390811660009081526020819052604090205416151590565b90519015158152f35b5080fd5b506003199082823601126100e25783359167ffffffffffffffff831161028a576101209083360301126100e257506020926102cd91602435910161051d565b9051908152f35b5091602036600319011261012057803567ffffffffffffffff811161034657610300903690830161046b565b5050336000908152602081905260409020546001600160a01b031615610330575081903382528160205281205580f35b602491519063f91bd6f160e01b82523390820152fd5b8380fd5b5091602036600319011261012057803567ffffffffffffffff811161034657610376903690830161046b565b33600090815260208190526040902054919290916001600160a01b03166103ec5750601411610120573560601c90338352826020528220816bffffffffffffffffffffffff60a01b825416179055337fa5e1f8b4009110f5525798d04ae2125421a12d0590aa52c13682ff1bd3c492ca8380a380f35b6024908451906393360fbf60e01b82523390820152fd5b90508234610120576020366003190112610120576020926001600160a01b0391908261042d61049e565b1681528085522054168152f35b8285602036600319011261028a5780359067ffffffffffffffff8211610120576104669136910161046b565b505080f35b9181601f840112156104995782359167ffffffffffffffff8311610499576020838186019501011161049957565b600080fd5b600435906001600160a01b038216820361049957565b92919267ffffffffffffffff918281116105075760405192601f8201601f19908116603f011684019081118482101761050757604052829481845281830111610499578281602093846000960137010152565b634e487b7160e01b600052604160045260246000fd5b3360009081526020819052604081205490926001600160a01b03918216926101008101359036819003601e19018212156105e1570180359067ffffffffffffffff82116105e1576020019181360383136105e157836105866105803685876104b4565b8361067d565b1685146105d9576105ca926105c4916020527b19457468657265756d205369676e6564204d6573736167653a0a33328752603c6004209236916104b4565b9061067d565b16036105d35790565b50600190565b505050505090565b8580fd5b919033600052600060205260018060a01b0391826040600020541693836106106105803685876104b4565b16851461066c5761064f926105c4916020527b19457468657265756d205369676e6564204d6573736167653a0a3332600052603c6004209236916104b4565b160361066057630b135d3f60e11b90565b6001600160e01b031990565b50630b135d3f60e11b949350505050565b919091602060016080600082948390604080998151986106bb575b5050505afa51923d156106ad57600060605252565b638baa579f6000526004601cfd5b8492835287808201518352828251146106fb5760418251146106e4575050509050388881610698565b60609384830151901a905201519052388881610698565b9250015190601b8260ff1c019052848060ff1b031660605238888161069856",
  },
  /* KernelSessionKeyValidator: {
    address: "0x5C06CE2b673fD5E6e56076e40DD46aB67f5a72A5",
    abi: [
      {
        type: "function",
        name: "disable",
        inputs: [
          {
            name: "_data",
            type: "bytes",
            internalType: "bytes",
          },
        ],
        outputs: [],
        stateMutability: "payable",
      },
      {
        type: "function",
        name: "enable",
        inputs: [
          {
            name: "_data",
            type: "bytes",
            internalType: "bytes",
          },
        ],
        outputs: [],
        stateMutability: "payable",
      },
      {
        type: "function",
        name: "sessionData",
        inputs: [
          {
            name: "sessionKey",
            type: "address",
            internalType: "address",
          },
          {
            name: "kernel",
            type: "address",
            internalType: "address",
          },
        ],
        outputs: [
          {
            name: "merkleRoot",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "validAfter",
            type: "uint48",
            internalType: "uint48",
          },
          {
            name: "validUntil",
            type: "uint48",
            internalType: "uint48",
          },
          {
            name: "paymaster",
            type: "address",
            internalType: "address",
          },
          {
            name: "enabled",
            type: "bool",
            internalType: "bool",
          },
        ],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "validCaller",
        inputs: [
          {
            name: "",
            type: "address",
            internalType: "address",
          },
          {
            name: "",
            type: "bytes",
            internalType: "bytes",
          },
        ],
        outputs: [
          {
            name: "",
            type: "bool",
            internalType: "bool",
          },
        ],
        stateMutability: "pure",
      },
      {
        type: "function",
        name: "validateSignature",
        inputs: [
          {
            name: "",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "",
            type: "bytes",
            internalType: "bytes",
          },
        ],
        outputs: [
          {
            name: "",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        stateMutability: "pure",
      },
      {
        type: "function",
        name: "validateUserOp",
        inputs: [
          {
            name: "userOp",
            type: "tuple",
            internalType: "struct UserOperation",
            components: [
              {
                name: "sender",
                type: "address",
                internalType: "address",
              },
              {
                name: "nonce",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "initCode",
                type: "bytes",
                internalType: "bytes",
              },
              {
                name: "callData",
                type: "bytes",
                internalType: "bytes",
              },
              {
                name: "callGasLimit",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "verificationGasLimit",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "preVerificationGas",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "maxFeePerGas",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "maxPriorityFeePerGas",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "paymasterAndData",
                type: "bytes",
                internalType: "bytes",
              },
              {
                name: "signature",
                type: "bytes",
                internalType: "bytes",
              },
            ],
          },
          {
            name: "userOpHash",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [
          {
            name: "",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        stateMutability: "payable",
      },
    ],
    bytecode:
      "0x60c060408181526004908136101561001657600080fd5b600092833560e01c9081630c9595561461020c57508063333daf92146101de5780633a871cdd1461019557806352721fdd146101085780638fc925aa146100ab57639ea9bd591461006657600080fd5b346100a3573660031901126100a75761007d61033f565b506024356001600160401b0381116100a35761009c925036910161030d565b5050610fd6565b8280fd5b5080fd5b509060203660031901126100a3578035906001600160401b038211610104576100d69136910161030d565b6014929192116100a3576002913560601c83528260205280832033845260205282200160ff19815416905580f35b8380fd5b8382346100a757806003193601126100a75761012261033f565b6001600160a01b036024358181169290839003610191579160a09491849316825281602052828220908252602052209081549160ff600260018301549201541691805193845265ffffffffffff80831660208601528260301c169084015260601c606083015215156080820152f35b8480fd5b50600319836060368301126101db578335916001600160401b0383116100a7576101609083360301126101db57506020926101d491602435910161047d565b9051908152f35b80fd5b50346100a3573660031901126100a7576024356001600160401b0381116100a35761009c925036910161030d565b9290506020366003190112610104578035906001600160401b038211610191576102389136910161030d565b8060149492941161019157806034116101915780603a1161019157808311610191576054116101045760029161026d8261038a565b6014840135825260208201603485013560d01c81526bffffffffffff00000000000065ffffffffffff83850192603a88013560d01c845260608601948089013560601c8652608087019860018a523560601c8a5289602052808a20338b526020528920955186555116915160301b16916bffffffffffffffffffffffff19905160601b169117176001820155019051151560ff8019835416911617905580f35b9181601f8401121561033a578235916001600160401b03831161033a576020838186019501011161033a57565b600080fd5b600435906001600160a01b038216820361033a57565b9093929384831161033a57841161033a578101920390565b35906020811061037b575090565b6000199060200360031b1b1690565b60a081019081106001600160401b038211176103a557604052565b634e487b7160e01b600052604160045260246000fd5b90601f801991011681019081106001600160401b038211176103a557604052565b903590601e198136030182121561033a57018035906001600160401b03821161033a5760200191813603831361033a57565b6001600160401b0381116103a55760051b60200190565b1561042c57565b60405162461bcd60e51b815260206004820152602360248201527f53657373696f6e4b657956616c696461746f723a20706172616d206d69736d616044820152620e8c6d60eb1b6064820152608490fd5b9161014083019161048e83856103dc565b60149291921161033a576104a284866103dc565b60559391931161033a57803560601c600052600060205260406000203360005260205260406000209560ff60028801541615610f7c578654968715610f4c5760010154958660601c60018114600014610ec357506105046101208301836103dc565b905015610e6f57610516905b826103dc565b806080999299528860a0528060551161033a5760406054198a83810103011261033a576001600160401b0360558a01351161033a5760a0906054199060558b01358b01908b0103011261033a5760405161056f8161038a565b60a05160558a81013590910101356001600160a01b038116810361033a57815260a0805160558b0135908101607501356020840152905101609501356001600160e01b03198116810361033a57604082015260a051966001600160401b0360b560558c01358a0101351161033a57608051880160558b0135890160b581013501607401121561033a5761061060558b8101358a0160b581013501013561040e565b9861061e6040519a8b6103bb565b60558b8101358a810160b581013590810190920135808d5260805160a05160208f019f949093918401918401016060909202919091016075011161033a576055820135908101908b0160b50135016075019b5b60a051605583810135808301908e0160b5810135918201910190910135606002016075018e1015610701578d60609160805101031261033a576040518060608101106001600160401b036060830111176103a557600660208f60608401604052803584520135101561033a576060916020918f8084604092013585840152013560408201528152019c019b610671565b50509093969960559295989b5060d5939699506060870152013560a051010135600281101561033a57608084015260a051966001600160401b0360758901351161033a576080518801607460758a01358a0101121561033a5761076d605560758a01358a01013561040e565b9661077b60405198896103bb565b605560758a01358a010135885260208801998a9760805160a05190810160758d816055818301358301013560051b910135840101011161033a57607590818d013501019b5b60758c816055818301358301013560051b91013560a0510101018d10156107f1578c35815260209c8d019c016107c0565b5091939597995091939597995060018060a01b038751168015908115610e4b575b5015610dfa5761082560608201826103dc565b60441161033a576024602089015191013511610da35761084860608201826103dc565b60841161033a576064013560ff166002811015610a9d576080880151906002821015610a9d5703610d4e5761088060608201826103dc565b60641161033a57604481013560048101106109c1576108a260608301836103dc565b6044830135602481016004909101116109c1576108d76108dd916108e893602460448701350191600460448801350191610355565b9061036d565b9260608101906103dc565b6024604484013585810182019101116109c1576024604481610914968287013501019401350191610355565b9790988860041161033a5760408801516001600160e01b03199081168b3590911603610cff5760005b60608901518051821015610ab3576020908260051b0101518051600401806004116109c157815190816004016004116109c1576024820182600401116109c1578d6108d7918e6024610990950192610355565b60208201516006811015610a9d576109d75760406109b092015114610425565b60001981146109c15760010161093d565b634e487b7160e01b600052601160045260246000fd5b60208201516006811015610a9d576001036109ff5760406109fa92015110610425565b6109b0565b60208201516006811015610a9d57600203610a225760406109fa92015111610425565b60208201516006811015610a9d57600303610a465760406109fa9201511115610425565b60208201516006811015610a9d57600403610a6a5760406109fa9201511015610425565b60208201516006811015610a9d57600514610a87575b50506109b0565b6040610a969201511415610425565b3880610a80565b634e487b7160e01b600052602160045260246000fd5b5050939750939750939790946040519060208083015260e082019060018060a01b0381511660408401526020810151606084015263ffffffff60e01b604082015116608084015260608101519160a08085015282518091526020610100850193019060005b818110610cc457505050608001516002811015610a9d57610b4891839160c083015203601f1981018352826103bb565b602081519101209080519283610c8d575b50509050149283610b9e575b505050610b975760015b60ff16607082901b65ffffffffffff60a01b161760d09190911b6001600160d01b0319161790565b6000610b6f565b6020527b19457468657265756d205369676e6564204d6573736167653a0a3332600052603c60042060405192935091608081016001600160401b038111828210176103a55760405260418152602081019236605584011161033a576000809260417f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a1608094826014602099018a3784606185015260405198516040526040840151908160605285526060840151851a885210915114165afa50600051903d15610c7f57600060605260405260018060a01b0316903560601c14388080610b65565b638baa579f6000526004601cfd5b9260051b01602001905b8251811160051b9081526020835191185260206040600020920191818310610c9757915050803880610b59565b9091938451805182526020810151906006821015610a9d57826040606092602094856001970152015160408201520195019101919091610b18565b60405162461bcd60e51b815260206004820152602160248201527f53657373696f6e4b657956616c696461746f723a20736967206d69736d6174636044820152600d60fb1b6064820152608490fd5b60405162461bcd60e51b815260206004820152602760248201527f53657373696f6e4b657956616c696461746f723a206f7065726174696f6e206d6044820152660d2e6dac2e8c6d60cb1b6064820152608490fd5b60405162461bcd60e51b815260206004820152602960248201527f53657373696f6e4b657956616c696461746f723a2076616c7565206c696d697460448201526808195e18d95959195960ba1b6064820152608490fd5b60405162461bcd60e51b8152602060048201526024808201527f53657373696f6e4b657956616c696461746f723a20746172676574206d69736d6044820152630c2e8c6d60e31b6064820152608490fd5b9050610e5a60608301836103dc565b60241161033a576010013560601c1438610812565b60405162461bcd60e51b815260206004820152602660248201527f53657373696f6e4b657956616c696461746f723a207061796d6173746572206e6044820152651bdd081cd95d60d21b6064820152608490fd5b80610ed3575b5061051690610510565b610ee16101208401846103dc565b60141161033a573560601c03610ef75738610ec9565b60405162461bcd60e51b815260206004820152602760248201527f53657373696f6e4b657956616c696461746f723a207061796d6173746572206d6044820152660d2e6dac2e8c6d60cb1b6064820152608490fd5b60010154607081901b65ffffffffffff60a01b1660d09190911b6001600160d01b03191617965093945050505050565b60405162461bcd60e51b815260206004820152602c60248201527f53657373696f6e4b657956616c696461746f723a2073657373696f6e206b657960448201526b081b9bdd08195b98589b195960a21b6064820152608490fd5b60405162461bcd60e51b8152602060048201526024808201527f53657373696f6e4b657956616c696461746f723a206e6f7420696d706c656d656044820152631b9d195960e21b6064820152608490fd",
  }, */
} as const;
