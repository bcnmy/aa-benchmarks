export const NEXUS_ARTIFACTS = {
  BootstrapLib: {
    address: "0x6c77ddf87a1717465d29f8f16f44711eb0c839c0",
    // prettier-ignore
    abi: [
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "module",
            "type": "address"
          },
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "name": "createArrayConfig",
        "outputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "module",
                "type": "address"
              },
              {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
              }
            ],
            "internalType": "struct BootstrapConfig[]",
            "name": "config",
            "type": "tuple[]"
          }
        ],
        "stateMutability": "pure",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address[]",
            "name": "modules",
            "type": "address[]"
          },
          {
            "internalType": "bytes[]",
            "name": "datas",
            "type": "bytes[]"
          }
        ],
        "name": "createMultipleConfigs",
        "outputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "module",
                "type": "address"
              },
              {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
              }
            ],
            "internalType": "struct BootstrapConfig[]",
            "name": "configs",
            "type": "tuple[]"
          }
        ],
        "stateMutability": "pure",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "module",
            "type": "address"
          },
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "name": "createSingleConfig",
        "outputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "module",
                "type": "address"
              },
              {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
              }
            ],
            "internalType": "struct BootstrapConfig",
            "name": "config",
            "type": "tuple"
          }
        ],
        "stateMutability": "pure",
        "type": "function"
      }
    ],
    bytecode:
      "0x60806040526004361015610011575f80fd5b5f3560e01c80631d184bb31461010957806375dc30101461007757638491599f1461003a575f80fd5b6100736100463661046f565b6001600160a01b03610056610321565b9216825260208201526040519182916020835260208301906103d1565b0390f35b6100803661046f565b60409061008c82610341565b6001815291601f1901925f5b8481106100d5575061007393506001600160a01b036100b6846104b2565b519116905260206100c6836104b2565b51015260405191829182610410565b6020906100e0610321565b5f815260608382015282828701015201610098565b634e487b7160e01b5f52604160045260245ffd5b60403660031901126102fd5760043567ffffffffffffffff81116102fd57366023820112156102fd57806004013561014861014382610367565b610341565b916024602084848152019260051b820101903682116102fd57602401915b818310610301576024358467ffffffffffffffff82116102fd57366023830112156102fd57816004013561019c61014382610367565b926024602085848152019260051b820101903682116102fd5760248101925b8284106102cd5785858051825103610288578051916101dc61014384610367565b928084526101ec601f1991610367565b015f5b8181106102685750505f5b825181101561025a57806001600160a01b03610218600193866104d3565b511661022482856104d3565b516001600160a01b03610235610321565b92168252602082015261024882876104d3565b5261025381866104d3565b50016101fa565b604051806100738682610410565b602090610273610321565b5f8152606083820152828288010152016101ef565b60405162461bcd60e51b815260206004820152601d60248201527f426f6f7473747261704c69623a206c656e677468206d69736d617463680000006044820152606490fd5b833567ffffffffffffffff81116102fd576020916102f283926024369187010161037f565b8152019301926101bb565b5f80fd5b82356001600160a01b03811681036102fd57815260209283019201610166565b604051906040820182811067ffffffffffffffff8211176100f557604052565b6040519190601f01601f1916820167ffffffffffffffff8111838210176100f557604052565b67ffffffffffffffff81116100f55760051b60200190565b81601f820112156102fd5780359067ffffffffffffffff82116100f5576103af601f8301601f1916602001610341565b92828452602083830101116102fd57815f926020809301838601378301015290565b906020806060936001600160a01b03815116845201516040828401528051918291826040860152018484015e5f828201840152601f01601f1916010190565b602081016020825282518091526040820191602060408360051b8301019401925f915b83831061044257505050505090565b9091929394602080610460600193603f1986820301875289516103d1565b97019301930191939290610433565b9060406003198301126102fd576004356001600160a01b03811681036102fd57916024359067ffffffffffffffff82116102fd576104af9160040161037f565b90565b8051156104bf5760200190565b634e487b7160e01b5f52603260045260245ffd5b80518210156104bf5760209160051b01019056fea26469706673582212208e309560a07503d983ee14c7a7889da3ca879c1b06028cc27d19090f05408ebc64736f6c634300081b0033",
  },
  Bootstrap: {
    address: "0x00000008c901d8871b6F6942De0B5D9cCf3873d3",
    // prettier-ignore
    abi: [
      {
        "inputs": [],
        "name": "CanNotRemoveLastValidator",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "EnableModeSigError",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "bytes4",
            "name": "selector",
            "type": "bytes4"
          }
        ],
        "name": "FallbackAlreadyInstalledForSelector",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "FallbackCallTypeInvalid",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "FallbackHandlerUninstallFailed",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "bytes4",
            "name": "selector",
            "type": "bytes4"
          }
        ],
        "name": "FallbackNotInstalledForSelector",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "FallbackSelectorForbidden",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "currentHook",
            "type": "address"
          }
        ],
        "name": "HookAlreadyInstalled",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "HookPostCheckFailed",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "InvalidInput",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "module",
            "type": "address"
          }
        ],
        "name": "InvalidModule",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "moduleTypeId",
            "type": "uint256"
          }
        ],
        "name": "InvalidModuleTypeId",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "entry",
            "type": "address"
          }
        ],
        "name": "LinkedList_EntryAlreadyInList",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "entry",
            "type": "address"
          }
        ],
        "name": "LinkedList_InvalidEntry",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "LinkedList_InvalidPage",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "moduleTypeId",
            "type": "uint256"
          }
        ],
        "name": "MismatchModuleTypeId",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "bytes4",
            "name": "selector",
            "type": "bytes4"
          }
        ],
        "name": "MissingFallbackHandler",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "ModuleAddressCanNotBeZero",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "moduleTypeId",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "module",
            "type": "address"
          }
        ],
        "name": "ModuleAlreadyInstalled",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "moduleTypeId",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "module",
            "type": "address"
          }
        ],
        "name": "ModuleNotInstalled",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "NoValidatorInstalled",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "operator",
            "type": "address"
          }
        ],
        "name": "UnauthorizedOperation",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "module",
            "type": "address"
          }
        ],
        "name": "ValidatorNotInstalled",
        "type": "error"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "contract IERC7484",
            "name": "registry",
            "type": "address"
          }
        ],
        "name": "ERC7484RegistryConfigured",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "moduleTypeId",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "module",
            "type": "address"
          }
        ],
        "name": "ModuleInstalled",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "moduleTypeId",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "module",
            "type": "address"
          }
        ],
        "name": "ModuleUninstalled",
        "type": "event"
      },
      {
        "stateMutability": "payable",
        "type": "fallback"
      },
      {
        "inputs": [],
        "name": "eip712Domain",
        "outputs": [
          {
            "internalType": "bytes1",
            "name": "fields",
            "type": "bytes1"
          },
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "version",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "chainId",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "verifyingContract",
            "type": "address"
          },
          {
            "internalType": "bytes32",
            "name": "salt",
            "type": "bytes32"
          },
          {
            "internalType": "uint256[]",
            "name": "extensions",
            "type": "uint256[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getActiveHook",
        "outputs": [
          {
            "internalType": "address",
            "name": "hook",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "cursor",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "size",
            "type": "uint256"
          }
        ],
        "name": "getExecutorsPaginated",
        "outputs": [
          {
            "internalType": "address[]",
            "name": "array",
            "type": "address[]"
          },
          {
            "internalType": "address",
            "name": "next",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes4",
            "name": "selector",
            "type": "bytes4"
          }
        ],
        "name": "getFallbackHandlerBySelector",
        "outputs": [
          {
            "internalType": "CallType",
            "name": "",
            "type": "bytes1"
          },
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "module",
                "type": "address"
              },
              {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
              }
            ],
            "internalType": "struct BootstrapConfig[]",
            "name": "validators",
            "type": "tuple[]"
          },
          {
            "components": [
              {
                "internalType": "address",
                "name": "module",
                "type": "address"
              },
              {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
              }
            ],
            "internalType": "struct BootstrapConfig[]",
            "name": "executors",
            "type": "tuple[]"
          },
          {
            "components": [
              {
                "internalType": "address",
                "name": "module",
                "type": "address"
              },
              {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
              }
            ],
            "internalType": "struct BootstrapConfig",
            "name": "hook",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "address",
                "name": "module",
                "type": "address"
              },
              {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
              }
            ],
            "internalType": "struct BootstrapConfig[]",
            "name": "fallbacks",
            "type": "tuple[]"
          },
          {
            "internalType": "contract IERC7484",
            "name": "registry",
            "type": "address"
          },
          {
            "internalType": "address[]",
            "name": "attesters",
            "type": "address[]"
          },
          {
            "internalType": "uint8",
            "name": "threshold",
            "type": "uint8"
          }
        ],
        "name": "getInitNexusCalldata",
        "outputs": [
          {
            "internalType": "bytes",
            "name": "init",
            "type": "bytes"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "module",
                "type": "address"
              },
              {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
              }
            ],
            "internalType": "struct BootstrapConfig[]",
            "name": "validators",
            "type": "tuple[]"
          },
          {
            "components": [
              {
                "internalType": "address",
                "name": "module",
                "type": "address"
              },
              {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
              }
            ],
            "internalType": "struct BootstrapConfig",
            "name": "hook",
            "type": "tuple"
          },
          {
            "internalType": "contract IERC7484",
            "name": "registry",
            "type": "address"
          },
          {
            "internalType": "address[]",
            "name": "attesters",
            "type": "address[]"
          },
          {
            "internalType": "uint8",
            "name": "threshold",
            "type": "uint8"
          }
        ],
        "name": "getInitNexusScopedCalldata",
        "outputs": [
          {
            "internalType": "bytes",
            "name": "init",
            "type": "bytes"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "module",
                "type": "address"
              },
              {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
              }
            ],
            "internalType": "struct BootstrapConfig",
            "name": "validator",
            "type": "tuple"
          },
          {
            "internalType": "contract IERC7484",
            "name": "registry",
            "type": "address"
          },
          {
            "internalType": "address[]",
            "name": "attesters",
            "type": "address[]"
          },
          {
            "internalType": "uint8",
            "name": "threshold",
            "type": "uint8"
          }
        ],
        "name": "getInitNexusWithSingleValidatorCalldata",
        "outputs": [
          {
            "internalType": "bytes",
            "name": "init",
            "type": "bytes"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "cursor",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "size",
            "type": "uint256"
          }
        ],
        "name": "getValidatorsPaginated",
        "outputs": [
          {
            "internalType": "address[]",
            "name": "array",
            "type": "address[]"
          },
          {
            "internalType": "address",
            "name": "next",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "module",
                "type": "address"
              },
              {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
              }
            ],
            "internalType": "struct BootstrapConfig[]",
            "name": "validators",
            "type": "tuple[]"
          },
          {
            "components": [
              {
                "internalType": "address",
                "name": "module",
                "type": "address"
              },
              {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
              }
            ],
            "internalType": "struct BootstrapConfig[]",
            "name": "executors",
            "type": "tuple[]"
          },
          {
            "components": [
              {
                "internalType": "address",
                "name": "module",
                "type": "address"
              },
              {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
              }
            ],
            "internalType": "struct BootstrapConfig",
            "name": "hook",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "address",
                "name": "module",
                "type": "address"
              },
              {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
              }
            ],
            "internalType": "struct BootstrapConfig[]",
            "name": "fallbacks",
            "type": "tuple[]"
          },
          {
            "internalType": "contract IERC7484",
            "name": "registry",
            "type": "address"
          },
          {
            "internalType": "address[]",
            "name": "attesters",
            "type": "address[]"
          },
          {
            "internalType": "uint8",
            "name": "threshold",
            "type": "uint8"
          }
        ],
        "name": "initNexus",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "module",
                "type": "address"
              },
              {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
              }
            ],
            "internalType": "struct BootstrapConfig[]",
            "name": "validators",
            "type": "tuple[]"
          },
          {
            "components": [
              {
                "internalType": "address",
                "name": "module",
                "type": "address"
              },
              {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
              }
            ],
            "internalType": "struct BootstrapConfig",
            "name": "hook",
            "type": "tuple"
          },
          {
            "internalType": "contract IERC7484",
            "name": "registry",
            "type": "address"
          },
          {
            "internalType": "address[]",
            "name": "attesters",
            "type": "address[]"
          },
          {
            "internalType": "uint8",
            "name": "threshold",
            "type": "uint8"
          }
        ],
        "name": "initNexusScoped",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "contract IModule",
            "name": "validator",
            "type": "address"
          },
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          },
          {
            "internalType": "contract IERC7484",
            "name": "registry",
            "type": "address"
          },
          {
            "internalType": "address[]",
            "name": "attesters",
            "type": "address[]"
          },
          {
            "internalType": "uint8",
            "name": "threshold",
            "type": "uint8"
          }
        ],
        "name": "initNexusWithSingleValidator",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "registry",
        "outputs": [
          {
            "internalType": "contract IERC7484",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "stateMutability": "payable",
        "type": "receive"
      }
    ],
    bytecode:
      //"0x60806040526004361015610027575b36156100255761001d366111de565b602081519101f35b005b5f3560e01c806301fe9ff2146100e65780630a664dba146100e1578063481ddd23146100dc57806355470cf1146100d75780635faac46b146100d25780637b103999146100cd578063837b892e146100c857806384b0196e146100c357806385a924cc146100be5780639e2533ed146100b9578063d6fe71f1146100b45763ea5f61d00361000e57610d59565b610c1b565b610b27565b6109ee565b6108ee565b6107d4565b610777565b6105b9565b6103c1565b61026d565b61021f565b610179565b6001600160a01b038116036100fc57565b5f80fd5b6044359061010d826100eb565b565b359061010d826100eb565b9181601f840112156100fc5782359167ffffffffffffffff83116100fc576020808501948460051b0101116100fc57565b6084359060ff821682036100fc57565b6064359060ff821682036100fc57565b359060ff821682036100fc57565b346100fc5760a03660031901126100fc57600435610196816100eb565b60243567ffffffffffffffff81116100fc57366023820112156100fc57806004013567ffffffffffffffff81116100fc5736602482840101116100fc576101db610100565b926064359367ffffffffffffffff85116100fc5761020061002595369060040161011a565b939092602461020d61014b565b960190610e69565b5f9103126100fc57565b346100fc575f3660031901126100fc5760206001600160a01b037f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f0354166001600160a01b0360405191168152f35b346100fc5760203660031901126100fc576004356001600160e01b0319811681036100fc576001600160e01b0319165f9081527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f026020526040902060405190604082019082821067ffffffffffffffff831117610321576040918252546001600160a01b03811680845260589190911b6001600160f81b0319166020938401819052825190815292830152819081015b0390f35b610f2d565b908160409103126100fc5790565b60a06003198201126100fc5760043567ffffffffffffffff81116100fc578161035f9160040161011a565b9290929160243567ffffffffffffffff81116100fc578161038291600401610326565b9160443561038f816100eb565b916064359067ffffffffffffffff82116100fc576103af9160040161011a565b909160843560ff811681036100fc5790565b346100fc576103de6103d236610334565b929693969190916112bf565b5f5b81811061042157836001600160a01b036103f982610fad565b1661040057005b8061041b61041061002593610fad565b916020810190610fb7565b9161141a565b61042c818385610f86565b3590610437826100eb565b61044f610445828587610f86565b6020810190610fb7565b61045884611b21565b60405163ecd0596160e01b8152600160048201526001600160a01b0385169490602081602481895afa9081156104fc575f91610515575b50156105015761049e90611c83565b833b156100fc576104c8935f92836040518097819582946306d61fe760e41b845260048401611409565b03925af19182156104fc576001926104e2575b50016103e0565b806104f05f6104f693610f41565b80610215565b5f6104db565b6111d3565b6369c9a24560e11b5f52600160045260245ffd5b610536915060203d811161053c575b61052e8183610f41565b8101906113f1565b5f61048f565b503d610524565b60409060031901126100fc5760043561055b816100eb565b9060243590565b90929192604082016040835281518091526020606084019201905f5b81811061059a575050506001600160a01b036020919416910152565b82516001600160a01b031684526020938401939092019160010161057e565b346100fc576105c736610543565b9060016001600160a01b038216141580610761575b61074657811561073757906105f081611f68565b61063b61062e5f946001600160a01b03165f527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f0060205260405f2090565b546001600160a01b031690565b6001600160a01b038116801515908161072b575b5080610722575b156106c3576106b761062e826106816106bd946106738988611f9a565b906001600160a01b03169052565b6001600160a01b03165f527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f0060205260405f2090565b93611fc2565b9261063b565b908360016001600160a01b038416141580610719575b6106ef575b815261031d60405192839283610562565b915061071361070661070084611fd5565b83611f9a565b516001600160a01b031690565b916106de565b508015156106d9565b50828410610656565b6001915014155f61064f565b63f725081760e01b5f5260045ffd5b637c84ecfb60e01b5f526001600160a01b031660045260245ffd5b5061077261076e82612010565b1590565b6105dc565b346100fc575f3660031901126100fc5760206001600160a01b035f5416604051908152f35b805180835260209291819084018484015e5f828201840152601f01601f1916010190565b9060206107d192818152019061079c565b90565b346100fc5760803660031901126100fc5760043567ffffffffffffffff81116100fc57610805903690600401610326565b60243590610812826100eb565b6044359067ffffffffffffffff82116100fc576001600160a01b036108c46108e29261031d9560ff6108af61084e6108d498369060040161011a565b61085994919461015b565b948861089761086d8935996104458b6100eb565b6040519c8d9b8c602062ff4ff960e11b9101521660248c015260a060448c015260c48b0191610fea565b9316606488015286830360231901608488015261100a565b911660a483015203601f198101835282610f41565b604051928391306020840161104d565b03601f198101835282610f41565b604051918291826107c0565b346100fc575f3660031901126100fc57610990604061099d8151916109138184610f41565b600e83527f4e65787573426f6f747374726170000000000000000000000000000000000000602084015280516109498282610f41565b600581527f312e302e3000000000000000000000000000000000000000000000000000000060208201528151948594600f60f81b865260e0602087015260e086019061079c565b918483039085015261079c565b4660608301523060808301525f60a083015281810360c083015260206060519182815201906080905f5b8181106109d5575050500390f35b82518452859450602093840193909201916001016109c7565b346100fc5761031d6108d46108e260a06108c460246001600160a01b0360ff6108af610897610a4a610a1f36610334565b9a946040989493989792969197519e8f9d8e6355470cf160e01b6020820152015260c48d01916110c9565b8a81036023190160448c01529061106d565b60e06003198201126100fc5760043567ffffffffffffffff81116100fc5781610a879160040161011a565b9290929160243567ffffffffffffffff81116100fc5781610aaa9160040161011a565b9290929160443567ffffffffffffffff81116100fc5781610acd91600401610326565b9160643567ffffffffffffffff81116100fc5782610aed9160040161011a565b92909291610afb608461010f565b9160a4359067ffffffffffffffff82116100fc57610b1b9160040161011a565b90916107d160c461016b565b346100fc57610b3536610a5c565b97909493929591966040519a8b9a63d6fe71f160e01b60208d015260248c0160e090526101048c0190610b67926110c9565b906023198b83030160448c0152610b7d926110c9565b8881036023190160648a0152610b929161106d565b90602319888303016084890152610ba8926110c9565b916001600160a01b031660a48601526023198583030160c4860152610bcc9261100a565b9060ff1660e483015203601f1981018252610be79082610f41565b604051908190610bfb90306020840161104d565b03601f1981018252610c0d9082610f41565b60405161031d8192826107c0565b346100fc57610c3d610c2c36610a5c565b929a9399949a9895989190916112bf565b5f5b828110610d2b575050505f5b818110610ce257505050610c6d610c6182610fad565b6001600160a01b031690565b610ccc575b505f5b818110610c7e57005b80610c97610c61610c926001948688610f86565b610fad565b15610cc757610cc1610cad610c92838688610f86565b610cbb610445848789610f86565b916115e8565b01610c75565b610cc1565b8061041b610410610cdc93610fad565b5f610c72565b80610cf6610c61610c926001948688610f86565b15610d2657610d20610d0c610c92838688610f86565b610d1a610445848789610f86565b91611565565b01610c4b565b610d20565b80610d53610d3f610c926001948787610f86565b610d4d610445848888610f86565b91611382565b01610c3f565b346100fc57610d6736610543565b9060016001600160a01b038216141580610e57575b6107465781156107375790610d9081611f68565b610dce61062e5f946001600160a01b03165f527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f0160205260405f2090565b6001600160a01b0381168015159081610e4b575b5080610e42575b156106c3576106b761062e82610e06610e3c946106738988611f9a565b6001600160a01b03165f527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f0160205260405f2090565b92610dce565b50828410610de9565b6001915014155f610de2565b50610e6461076e82612063565b610d7c565b92946001600160a01b0394610e80939792966112bf565b1691610e8b83611b21565b60405163ecd0596160e01b815260016004820152602081602481875afa9081156104fc575f91610f0e575b501561050157610ec583611c83565b823b156100fc57610eef925f92836040518096819582946306d61fe760e41b845260048401611409565b03925af180156104fc57610f005750565b806104f05f61010d93610f41565b610f27915060203d60201161053c5761052e8183610f41565b5f610eb6565b634e487b7160e01b5f52604160045260245ffd5b90601f8019910116810190811067ffffffffffffffff82111761032157604052565b6040519061010d604083610f41565b634e487b7160e01b5f52603260045260245ffd5b9190811015610fa85760051b81013590603e19813603018212156100fc570190565b610f72565b356107d1816100eb565b903590601e19813603018212156100fc570180359067ffffffffffffffff82116100fc576020019181360383136100fc57565b908060209392818452848401375f828201840152601f01601f1916010190565b916020908281520191905f5b8181106110235750505090565b9091926020806001926001600160a01b03873561103f816100eb565b168152019401929101611016565b6040906001600160a01b036107d19493168152816020820152019061079c565b6001600160a01b038135611080816100eb565b1682526020810135601e19823603018112156100fc57016020813591019067ffffffffffffffff81116100fc5780360382136100fc576040838160206107d19601520191610fea565b90602083828152019060208160051b85010193835f915b8383106110f05750505050505090565b909192939495601f198282030186528635603e19843603018112156100fc5760206111206001938683940161106d565b9801960194930191906110e0565b67ffffffffffffffff811161032157601f01601f191660200190565b6020818303126100fc5780519067ffffffffffffffff82116100fc570181601f820112156100fc5780519061117e8261112e565b9261118c6040519485610f41565b828452602083830101116100fc57815f9260208093018386015e8301015290565b6107d193926001600160a01b03606093168252602082015281604082015201905f610fea565b6040513d5f823e3d90fd5b906001600160a01b036112186001600160a01b037f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f03541690565b16918261122b576107d19192505f6119c4565b60405163d68f602560e01b8152905f828061124b363433600485016111ad565b038183885af19182156104fc575f92611297575b5061126a905f6119c4565b92803b156100fc57604051630b9dfbed60e11b8152915f918391829084908290610eef90600483016107c0565b61126a9192506112b8903d805f833e6112b08183610f41565b81019061114a565b919061125f565b6001600160a01b039093919316928373ffffffffffffffffffffffffffffffffffffffff195f5416175f5583611319575b5050507ff98c8404c5b1bfef2e6ba9233c6e88845aedfd36eea8b192725d8c199571cf325f80a2565b833b156100fc575f9161135160ff92604051958694859463f05c04e160e01b865216600485015260406024850152604484019161100a565b038183865af180156104fc57611369575b80806112f0565b806113755f8093610f41565b8003126100fc575f611362565b9161138c83611b21565b60405163ecd0596160e01b8152600160048201526001600160a01b0384169390602081602481885afa9081156104fc575f916113d2575b501561050157610ec590611c83565b6113eb915060203d60201161053c5761052e8183610f41565b5f6113c3565b908160209103126100fc575180151581036100fc5790565b9160206107d1938181520191610fea565b9161142483611b81565b60405163ecd0596160e01b81526004808201526001600160a01b0384169390602081602481885afa9081156104fc575f91611522575b501561150f57610ec5906114a86114986001600160a01b037f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f03541690565b6001600160a01b03811615611541565b6001600160a01b031673ffffffffffffffffffffffffffffffffffffffff197f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f035416177f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f0355565b6369c9a24560e11b5f526004805260245ffd5b61153b915060203d60201161053c5761052e8183610f41565b5f61145a565b156115495750565b6001600160a01b039063741cbe0360e01b5f521660045260245ffd5b9161156f83611bd7565b60405163ecd0596160e01b8152600260048201526001600160a01b0384169390602081602481885afa9081156104fc575f916115c9575b50156115b557610ec590611e14565b6369c9a24560e11b5f52600260045260245ffd5b6115e2915060203d60201161053c5761052e8183610f41565b5f6115a6565b90916115f382611c2d565b60405163ecd0596160e01b8152600360048201526001600160a01b0383169290602081602481875afa9081156104fc575f9161185e575b501561184a5761178e846117586116a96116a286806116806116736116658361165f6116596117ed9e8c61187d565b906118a8565b996118de565b356001600160f81b03191690565b6001600160f81b03191690565b9a6001600160f81b03198c16158015611833575b61169d906118ed565b61188b565b3691611903565b966116d86001600160e01b031984166306d61fe760e41b8114908115611822575b8115611819575b5015611939565b61172d8361172861076e826001600160e01b0319165f9081527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f0260205260409020546001600160a01b0316151590565b61194f565b611747611738610f63565b6001600160a01b039096168652565b6001600160f81b0319166020850152565b63ffffffff60e01b165f527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f0260205260405f2090565b8151815460209093015174ff000000000000000000000000000000000000000060589190911c167fffffffffffffffffffffff0000000000000000000000000000000000000000009093166001600160a01b0390911617919091179055565b803b156100fc576040516306d61fe760e41b8152915f918391829084908290610eef90600483016107c0565b9050155f6116d1565b638a91b0e360e01b811491506116ca565b50607f60f91b6001600160f81b03198d1614611694565b6369c9a24560e11b5f52600360045260245ffd5b611877915060203d60201161053c5761052e8183610f41565b5f61162a565b906004116100fc5790600490565b90929192836005116100fc5783116100fc57600501916004190190565b356001600160e01b03198116929190600482106118c3575050565b6001600160e01b031960049290920360031b82901b16169150565b9060041015610fa85760040190565b156118f457565b63867a1dcf60e01b5f5260045ffd5b92919261190f8261112e565b9161191d6040519384610f41565b8294818452818301116100fc578281602093845f960137010152565b1561194057565b63c001660b60e01b5f5260045ffd5b156119575750565b63a56a04dd60e01b5f5263ffffffff60e01b1660045260245ffd5b1561197a5750565b6308c63e2760e01b5f5263ffffffff60e01b1660045260245ffd5b3d156119bf573d906119a68261112e565b916119b46040519384610f41565b82523d5f602084013e565b606090565b50505f80356001600160e01b031981168083527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f0260205260408320606091905493611a236001600160a01b0386169560581b6001600160f81b03191690565b936001600160a01b03861615611ad1575050506001600160f81b03198216607f60f91b14905015611a7f57505f8091611a5a611fe3565b90602082519201905afa90611a6d611995565b915b15611a7657565b50602081519101fd5b6001600160f81b03198116611ab557505f8091611a9a611fe3565b906020825192019034905af190611aaf611995565b91611a6f565b632e5bf3f960e21b5f526001600160f81b03191660045260245ffd5b9193509194935060e01c63150b7a0263bc197c81821463f23a6e61831417911417611b01575b9061010d91611972565b506040805160048152602081018390526024810190915292506001611af7565b6001600160a01b035f54169081611b36575050565b813b156100fc576001600160a01b0360445f9260405194859384926396fb721760e01b8452166004830152600160248301525afa80156104fc57611b775750565b5f61010d91610f41565b6001600160a01b035f54169081611b96575050565b813b156100fc576001600160a01b0360445f9260405194859384926396fb721760e01b8452166004830152600460248301525afa80156104fc57611b775750565b6001600160a01b035f54169081611bec575050565b813b156100fc576001600160a01b0360445f9260405194859384926396fb721760e01b8452166004830152600260248301525afa80156104fc57611b775750565b6001600160a01b035f54169081611c42575050565b813b156100fc576001600160a01b0360445f9260405194859384926396fb721760e01b8452166004830152600360248301525afa80156104fc57611b775750565b6001600160a01b03811680158015611e0a575b611df8575f9081527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f0060205260409020546001600160a01b0316611ddd5760015f527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f0060205261010d90611d8f611d2c7ffe44ceacbf4f03c6ac19f86826dd265fa9ec25125e8b1766c207f24cd3bc73c761062e565b611d67837f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f00906001600160a01b03165f5260205260405f2090565b906001600160a01b031673ffffffffffffffffffffffffffffffffffffffff19825416179055565b60015f527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f006020527ffe44ceacbf4f03c6ac19f86826dd265fa9ec25125e8b1766c207f24cd3bc73c7611d67565b631034f46960e21b5f526001600160a01b031660045260245ffd5b637c84ecfb60e01b5f5260045260245ffd5b5060018114611c96565b6001600160a01b03811680158015611f46575b611df8575f9081527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f0160205260409020546001600160a01b0316611ddd5760015f527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f0160205261010d90611ef8611ebd7fbdfeb076d903611fa58576955630d640569633049bcf40ad9c22db9251b54a1361062e565b611d67837f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f01906001600160a01b03165f5260205260405f2090565b60015f527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f016020527fbdfeb076d903611fa58576955630d640569633049bcf40ad9c22db9251b54a13611d67565b5060018114611e27565b67ffffffffffffffff81116103215760051b60200190565b90611f7282611f50565b611f7f6040519182610f41565b8281528092611f90601f1991611f50565b0190602036910137565b8051821015610fa85760209160051b010190565b634e487b7160e01b5f52601160045260245ffd5b5f198114611fd05760010190565b611fae565b5f19810191908211611fd057565b60405190602036830101604052816014360181525f602036920137604051601481016040523360601b9052565b6001600160a01b031680600114159081612028575090565b90505f527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f006020526001600160a01b0360405f205416151590565b6001600160a01b03168060011415908161207b575090565b90505f527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f016020526001600160a01b0360405f20541615159056fea2646970667358221220ef7f5ad009e1021190a16a899c7aa9da23ee9bf36cb253e3cd5f51d9f8215f2164736f6c634300081b0033",
      // installs executor
      "0x60806040526004361015610027575b36156100255761001d3661139a565b602081519101f35b005b5f3560e01c806301fe9ff2146100e65780630a664dba146100e1578063481ddd23146100dc57806355470cf1146100d75780635faac46b146100d25780637b103999146100cd578063837b892e146100c857806384b0196e146100c357806385a924cc146100be5780639e2533ed146100b9578063d6fe71f1146100b45763ea5f61d00361000e57610de7565b610ca9565b610b9b565b610a49565b61092d565b6107f2565b610795565b6105be565b6103c6565b61026d565b61021f565b610179565b6001600160a01b038116036100fc57565b5f80fd5b6044359061010d826100eb565b565b359061010d826100eb565b9181601f840112156100fc5782359167ffffffffffffffff83116100fc576020808501948460051b0101116100fc57565b6084359060ff821682036100fc57565b6064359060ff821682036100fc57565b359060ff821682036100fc57565b346100fc5760a03660031901126100fc57600435610196816100eb565b60243567ffffffffffffffff81116100fc57366023820112156100fc57806004013567ffffffffffffffff81116100fc5736602482840101116100fc576101db610100565b926064359367ffffffffffffffff85116100fc5761020061002595369060040161011a565b939092602461020d61014b565b960190610ff4565b5f9103126100fc57565b346100fc575f3660031901126100fc5760206001600160a01b037f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f0354166001600160a01b0360405191168152f35b346100fc5760203660031901126100fc576004356001600160e01b0319811681036100fc576102cd906001600160e01b0319165f527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f0260205260405f2090565b60405190604082019082821067ffffffffffffffff831117610326576040918252546001600160a01b03811680845260589190911b6001600160f81b0319166020938401819052825190815292830152819081015b0390f35b610ef7565b908160409103126100fc5790565b60a06003198201126100fc5760043567ffffffffffffffff81116100fc57816103649160040161011a565b9290929160243567ffffffffffffffff81116100fc57816103879160040161032b565b91604435610394816100eb565b916064359067ffffffffffffffff82116100fc576103b49160040161011a565b909160843560ff811681036100fc5790565b346100fc576103e36103d736610339565b929693969190916114cb565b5f5b81811061042657836001600160a01b036103fe82611185565b1661040557005b8061042061041561002593611185565b91602081019061118f565b916117de565b61043181838561115e565b359061043c826100eb565b61045461044a82858761115e565b602081019061118f565b61045d84611ee5565b60405163ecd0596160e01b8152600160048201526001600160a01b0385169490602081602481895afa908115610501575f9161051a575b5015610506576104a390612047565b833b156100fc576104cd935f92836040518097819582946306d61fe760e41b8452600484016116b1565b03925af1918215610501576001926104e7575b50016103e5565b806104f55f6104fb93610f0b565b80610215565b5f6104e0565b61138f565b6369c9a24560e11b5f52600160045260245ffd5b61053b915060203d8111610541575b6105338183610f0b565b810190611699565b5f610494565b503d610529565b60409060031901126100fc57600435610560816100eb565b9060243590565b90929192604082016040835281518091526020606084019201905f5b81811061059f575050506001600160a01b036020919416910152565b82516001600160a01b0316845260209384019390920191600101610583565b346100fc576105cc36610548565b9060016001600160a01b03821614158061077f575b61076457811561073c57906105f581612345565b6106406106335f946001600160a01b03165f527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f0060205260405f2090565b546001600160a01b031690565b6001600160a01b0381168015159081610730575b5080610727575b156106c8576106bc610633826106866106c2946106788988612377565b906001600160a01b03169052565b6001600160a01b03165f527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f0060205260405f2090565b9361239f565b92610640565b908360016001600160a01b03841614158061071e575b6106f4575b815261032260405192839283610567565b915061071861070b610705846123b2565b83612377565b516001600160a01b031690565b916106e3565b508015156106de565b5082841061065b565b6001915014155f610654565b7ff7250817000000000000000000000000000000000000000000000000000000005f5260045ffd5b637c84ecfb60e01b5f526001600160a01b031660045260245ffd5b5061079061078c82612437565b1590565b6105e1565b346100fc575f3660031901126100fc5760206001600160a01b035f5416604051908152f35b805180835260209291819084018484015e5f828201840152601f01601f1916010190565b9060206107ef9281815201906107ba565b90565b346100fc5760803660031901126100fc5760043567ffffffffffffffff81116100fc5761082390369060040161032b565b60243561082f816100eb565b60443567ffffffffffffffff81116100fc577f01fe9ff20000000000000000000000000000000000000000000000000000000061090360206103229560ff6108ee6109139761088561092198369060040161011a565b906001600160a01b036108d661089961015b565b97826108b38235926108aa846100eb565b8c81019061118f565b9190926040519e8f9d8e01521660248c015260a060448c015260c48b01916111c2565b931660648801528683036023190160848801526111e2565b911660a483015203601f198101835282610f0b565b6040519283913060208401611225565b03601f198101835282610f0b565b604051918291826107de565b346100fc575f3660031901126100fc576109eb60406109f88151916109528184610f0b565b600e83527f4e65787573426f6f747374726170000000000000000000000000000000000000602084015280516109888282610f0b565b600581527f312e302e30000000000000000000000000000000000000000000000000000000602082015281519485947f0f00000000000000000000000000000000000000000000000000000000000000865260e0602087015260e08601906107ba565b91848303908501526107ba565b4660608301523060808301525f60a083015281810360c083015260206060519182815201906080905f5b818110610a30575050500390f35b8251845285945060209384019390920191600101610a22565b346100fc5761032261091361092160a061090360246001600160a01b0360ff6108ee6108d6610abe610a7a36610339565b9a946040989493989792969197519e8f9d8e7f55470cf1000000000000000000000000000000000000000000000000000000006020820152015260c48d01916112a1565b8a81036023190160448c015290611245565b60e06003198201126100fc5760043567ffffffffffffffff81116100fc5781610afb9160040161011a565b9290929160243567ffffffffffffffff81116100fc5781610b1e9160040161011a565b9290929160443567ffffffffffffffff81116100fc5781610b419160040161032b565b9160643567ffffffffffffffff81116100fc5782610b619160040161011a565b92909291610b6f608461010f565b9160a4359067ffffffffffffffff82116100fc57610b8f9160040161011a565b90916107ef60c461016b565b346100fc57610ba936610ad0565b97909493929591966040519a8b9a60208c017fd6fe71f100000000000000000000000000000000000000000000000000000000905260248c0160e090526101048c0190610bf5926112a1565b906023198b83030160448c0152610c0b926112a1565b8881036023190160648a0152610c2091611245565b90602319888303016084890152610c36926112a1565b916001600160a01b031660a48601526023198583030160c4860152610c5a926111e2565b9060ff1660e483015203601f1981018252610c759082610f0b565b604051908190610c89903060208401611225565b03601f1981018252610c9b9082610f0b565b6040516103228192826107de565b346100fc57610ccb610cba36610ad0565b929a9399949a9895989190916114cb565b5f5b828110610db9575050505f5b818110610d7057505050610cfb610cef82611185565b6001600160a01b031690565b610d5a575b505f5b818110610d0c57005b80610d25610cef610d20600194868861115e565b611185565b15610d5557610d4f610d3b610d2083868861115e565b610d4961044a84878961115e565b91611942565b01610d03565b610d4f565b80610420610415610d6a93611185565b5f610d00565b80610d84610cef610d20600194868861115e565b15610db457610dae610d9a610d2083868861115e565b610da861044a84878961115e565b9161176f565b01610cd9565b610dae565b80610de1610dcd610d20600194878761115e565b610ddb61044a84888861115e565b91611600565b01610ccd565b346100fc57610df536610548565b9060016001600160a01b038216141580610ee5575b61076457811561073c5790610e1e81612345565b610e5c6106335f946001600160a01b03165f527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f0160205260405f2090565b6001600160a01b0381168015159081610ed9575b5080610ed0575b156106c8576106bc61063382610e94610eca946106788988612377565b6001600160a01b03165f527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f0160205260405f2090565b92610e5c565b50828410610e77565b6001915014155f610e70565b50610ef261078c8261248a565b610e0a565b634e487b7160e01b5f52604160045260245ffd5b90601f8019910116810190811067ffffffffffffffff82111761032657604052565b6040519061010d604083610f0b565b67ffffffffffffffff811161032657601f01601f191660200190565b60405190610f67606083610f0b565b602382527f746f7200000000000000000000000000000000000000000000000000000000006040837f5745523a20626f6f7473747261703a20696e7374616c6c696e6720657865637560208201520152565b60405190610fc8604083610f0b565b601482527f5745523a20626f6f7473747261703a20646f6e650000000000000000000000006020830152565b92946001600160a01b039461100b939792966114cb565b61107160405161101c606082610f0b565b602481527f5745523a20626f6f7473747261703a20696e7374616c6c696e672076616c696460208201527f61746f720000000000000000000000000000000000000000000000000000000060408201526115a7565b169061107c82611ee5565b60405163ecd0596160e01b815260016004820152602081602481865afa908115610501575f9161112b575b5015610506576110b682612047565b813b156100fc576110de925f9160405194859283926306d61fe760e41b8452600484016116b1565b038183855af19182156105015761110c92611117575b50611105611100610f58565b6115a7565b36906116c2565b61010d611100610fb9565b806104f55f61112593610f0b565b5f6110f4565b611144915060203d602011610541576105338183610f0b565b5f6110a7565b634e487b7160e01b5f52603260045260245ffd5b91908110156111805760051b81013590603e19813603018212156100fc570190565b61114a565b356107ef816100eb565b903590601e19813603018212156100fc570180359067ffffffffffffffff82116100fc576020019181360383136100fc57565b908060209392818452848401375f828201840152601f01601f1916010190565b916020908281520191905f5b8181106111fb5750505090565b9091926020806001926001600160a01b038735611217816100eb565b1681520194019291016111ee565b6040906001600160a01b036107ef949316815281602082015201906107ba565b6001600160a01b038135611258816100eb565b1682526020810135601e19823603018112156100fc57016020813591019067ffffffffffffffff81116100fc5780360382136100fc576040838160206107ef96015201916111c2565b90602083828152019060208160051b85010193835f915b8383106112c85750505050505090565b909192939495601f198282030186528635603e19843603018112156100fc5760206112f860019386839401611245565b9801960194930191906112b8565b6020818303126100fc5780519067ffffffffffffffff82116100fc570181601f820112156100fc5780519061133a82610f3c565b926113486040519485610f0b565b828452602083830101116100fc57815f9260208093018386015e8301015290565b6107ef93926001600160a01b03606093168252602082015281604082015201905f6111c2565b6040513d5f823e3d90fd5b906001600160a01b036113d46001600160a01b037f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f03541690565b1691826113e7576107ef9192505f611d5f565b604051907fd68f60250000000000000000000000000000000000000000000000000000000082525f828061142036343360048501611369565b038183885af1918215610501575f926114a3575b5061143f905f611d5f565b92803b156100fc576114845f929183926040519485809481937f173bf7da000000000000000000000000000000000000000000000000000000008352600483016107de565b03925af18015610501576114955750565b806104f55f61010d93610f0b565b61143f9192506114c4903d805f833e6114bc8183610f0b565b810190611306565b9190611434565b6001600160a01b039093919316928373ffffffffffffffffffffffffffffffffffffffff195f5416175f5583611525575b5050507ff98c8404c5b1bfef2e6ba9233c6e88845aedfd36eea8b192725d8c199571cf325f80a2565b833b156100fc575f9161157660ff9260405195869485947ff05c04e10000000000000000000000000000000000000000000000000000000086521660048501526040602485015260448401916111e2565b038183865af180156105015761158e575b80806114fc565b8061159a5f8093610f0b565b8003126100fc575f611587565b5f80916040516115ed8161091360208201947f41304fac0000000000000000000000000000000000000000000000000000000086526020602484015260448301906107ba565b51906a636f6e736f6c652e6c6f675afa50565b9161160a83611ee5565b60405163ecd0596160e01b8152600160048201526001600160a01b0384169390602081602481885afa908115610501575f9161167a575b50156105065761165090612047565b823b156100fc57611484925f92836040518096819582946306d61fe760e41b8452600484016116b1565b611693915060203d602011610541576105338183610f0b565b5f611641565b908160209103126100fc575180151581036100fc5790565b9160206107ef9381815201916111c2565b6116cb81611f45565b60405163ecd0596160e01b8152600260048201526001600160a01b0382169190602081602481865afa908115610501575f91611750575b501561173c57611711906121f1565b803b156100fc575f809161148493826040518096819582946306d61fe760e41b8452600484016116b1565b6369c9a24560e11b5f52600260045260245ffd5b611769915060203d602011610541576105338183610f0b565b5f611702565b9161177983611f45565b60405163ecd0596160e01b8152600260048201526001600160a01b0384169390602081602481885afa908115610501575f916117bf575b501561173c57611650906121f1565b6117d8915060203d602011610541576105338183610f0b565b5f6117b0565b916117e883611f9b565b60405163ecd0596160e01b81526004808201526001600160a01b0384169390602081602481885afa908115610501575f916118e6575b50156118d3576116509061186c61185c6001600160a01b037f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f03541690565b6001600160a01b03811615611905565b6001600160a01b031673ffffffffffffffffffffffffffffffffffffffff197f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f035416177f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f0355565b6369c9a24560e11b5f526004805260245ffd5b6118ff915060203d602011610541576105338183610f0b565b5f61181e565b1561190d5750565b6001600160a01b03907f741cbe03000000000000000000000000000000000000000000000000000000005f521660045260245ffd5b909161194d82611ff1565b60405163ecd0596160e01b8152600360048201526001600160a01b0383169290602081602481875afa908115610501575f91611b91575b5015611b7d57611aa984611a72611a036119fc86806119da6119cd6119bf836119b96119b3611b089e8c611bb0565b90611bdb565b99611c11565b356001600160f81b03191690565b6001600160f81b03191690565b9a6001600160f81b03198c16158015611b66575b6119f790611c20565b611bbe565b3691611c4f565b96611a326001600160e01b031984166306d61fe760e41b8114908115611b3c575b8115611b33575b5015611c85565b611a4783611a4261078c826123c0565b611cb4565b611a61611a52610f2d565b6001600160a01b039096168652565b6001600160f81b0319166020850152565b6001600160e01b0319165f527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f0260205260405f2090565b8151815460209093015174ff000000000000000000000000000000000000000060589190911c167fffffffffffffffffffffff0000000000000000000000000000000000000000009093166001600160a01b0390911617919091179055565b803b156100fc576114845f929183926040519485809481936306d61fe760e41b8352600483016107de565b9050155f611a2b565b7f8a91b0e30000000000000000000000000000000000000000000000000000000081149150611a24565b50607f60f91b6001600160f81b03198d16146119ee565b6369c9a24560e11b5f52600360045260245ffd5b611baa915060203d602011610541576105338183610f0b565b5f611984565b906004116100fc5790600490565b90929192836005116100fc5783116100fc57600501916004190190565b919091356001600160e01b031981169260048110611bf7575050565b6001600160e01b0319929350829060040360031b1b161690565b90600410156111805760040190565b15611c2757565b7f867a1dcf000000000000000000000000000000000000000000000000000000005f5260045ffd5b929192611c5b82610f3c565b91611c696040519384610f0b565b8294818452818301116100fc578281602093845f960137010152565b15611c8c57565b7fc001660b000000000000000000000000000000000000000000000000000000005f5260045ffd5b15611cbc5750565b6001600160e01b0319907fa56a04dd000000000000000000000000000000000000000000000000000000005f521660045260245ffd5b15611cfa5750565b6001600160e01b0319907f08c63e27000000000000000000000000000000000000000000000000000000005f521660045260245ffd5b3d15611d5a573d90611d4182610f3c565b91611d4f6040519384610f0b565b82523d5f602084013e565b606090565b505060605f905f35906001600160e01b03198216611dae816001600160e01b0319165f527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f0260205260405f2090565b5493611dce6001600160a01b0386169560581b6001600160f81b03191690565b936001600160a01b03861615611e95575050506001600160f81b03198216607f60f91b14905015611e2a57505f8091611e0561240a565b90602082519201905afa90611e18611d30565b915b15611e2157565b50602081519101fd5b6001600160f81b03198116611e6057505f8091611e4561240a565b906020825192019034905af190611e5a611d30565b91611e1a565b7fb96fcfe4000000000000000000000000000000000000000000000000000000005f526001600160f81b03191660045260245ffd5b9193509194935060e01c63150b7a0263bc197c81821463f23a6e61831417911417611ec5575b9061010d91611cf2565b506040805160048152602081018390526024810190915292506001611ebb565b6001600160a01b035f54169081611efa575050565b813b156100fc576001600160a01b0360445f9260405194859384926396fb721760e01b8452166004830152600160248301525afa801561050157611f3b5750565b5f61010d91610f0b565b6001600160a01b035f54169081611f5a575050565b813b156100fc576001600160a01b0360445f9260405194859384926396fb721760e01b8452166004830152600260248301525afa801561050157611f3b5750565b6001600160a01b035f54169081611fb0575050565b813b156100fc576001600160a01b0360445f9260405194859384926396fb721760e01b8452166004830152600460248301525afa801561050157611f3b5750565b6001600160a01b035f54169081612006575050565b813b156100fc576001600160a01b0360445f9260405194859384926396fb721760e01b8452166004830152600360248301525afa801561050157611f3b5750565b6001600160a01b038116801580156121e7575b6121d5575f9081527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f0060205260409020546001600160a01b03166121a15760015f527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f0060205261010d906121536120f07ffe44ceacbf4f03c6ac19f86826dd265fa9ec25125e8b1766c207f24cd3bc73c7610633565b61212b837f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f00906001600160a01b03165f5260205260405f2090565b906001600160a01b031673ffffffffffffffffffffffffffffffffffffffff19825416179055565b60015f527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f006020527ffe44ceacbf4f03c6ac19f86826dd265fa9ec25125e8b1766c207f24cd3bc73c761212b565b7f40d3d1a4000000000000000000000000000000000000000000000000000000005f526001600160a01b031660045260245ffd5b637c84ecfb60e01b5f5260045260245ffd5b506001811461205a565b6001600160a01b03811680158015612323575b6121d5575f9081527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f0160205260409020546001600160a01b03166121a15760015f527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f0160205261010d906122d561229a7fbdfeb076d903611fa58576955630d640569633049bcf40ad9c22db9251b54a13610633565b61212b837f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f01906001600160a01b03165f5260205260405f2090565b60015f527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f016020527fbdfeb076d903611fa58576955630d640569633049bcf40ad9c22db9251b54a1361212b565b5060018114612204565b67ffffffffffffffff81116103265760051b60200190565b9061234f8261232d565b61235c6040519182610f0b565b828152809261236d601f199161232d565b0190602036910137565b80518210156111805760209160051b010190565b634e487b7160e01b5f52601160045260245ffd5b5f1981146123ad5760010190565b61238b565b5f198101919082116123ad57565b6124036001600160a01b03916001600160e01b0319165f527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f0260205260405f2090565b5416151590565b60405190602036830101604052816014360181525f602036920137604051601481016040523360601b9052565b6001600160a01b03168060011415908161244f575090565b90505f527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f006020526001600160a01b0360405f205416151590565b6001600160a01b0316806001141590816124a2575090565b90505f527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f016020526001600160a01b0360405f20541615159056fea26469706673582212203a58c70c632fba3bc0bd908fb4408da25b63c84fdadb7229eeb12efae73a009064736f6c634300081b0033",
  },
  Nexus: {
    address: "0x000000039dfcAd030719B07296710F045F0558f7",
    // prettier-ignore
    abi: [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "anEntryPoint",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [],
          "name": "AccountAccessUnauthorized",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "CanNotRemoveLastValidator",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "EmergencyTimeLockNotExpired",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "EnableModeSigError",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "EntryPointCanNotBeZero",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "ExecutionFailed",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "bytes4",
              "name": "selector",
              "type": "bytes4"
            }
          ],
          "name": "FallbackAlreadyInstalledForSelector",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "FallbackCallTypeInvalid",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "FallbackHandlerUninstallFailed",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "bytes4",
              "name": "selector",
              "type": "bytes4"
            }
          ],
          "name": "FallbackNotInstalledForSelector",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "FallbackSelectorForbidden",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "currentHook",
              "type": "address"
            }
          ],
          "name": "HookAlreadyInstalled",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "HookPostCheckFailed",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "ImplementationIsNotAContract",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "InnerCallFailed",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "InvalidImplementationAddress",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "InvalidInput",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "module",
              "type": "address"
            }
          ],
          "name": "InvalidModule",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "moduleTypeId",
              "type": "uint256"
            }
          ],
          "name": "InvalidModuleTypeId",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "LinkedList_AlreadyInitialized",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "entry",
              "type": "address"
            }
          ],
          "name": "LinkedList_EntryAlreadyInList",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "entry",
              "type": "address"
            }
          ],
          "name": "LinkedList_InvalidEntry",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "LinkedList_InvalidPage",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "moduleTypeId",
              "type": "uint256"
            }
          ],
          "name": "MismatchModuleTypeId",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "bytes4",
              "name": "selector",
              "type": "bytes4"
            }
          ],
          "name": "MissingFallbackHandler",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "ModuleAddressCanNotBeZero",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "moduleTypeId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "module",
              "type": "address"
            }
          ],
          "name": "ModuleAlreadyInstalled",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "moduleTypeId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "module",
              "type": "address"
            }
          ],
          "name": "ModuleNotInstalled",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "NexusInitializationFailed",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "NoValidatorInstalled",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "UnauthorizedCallContext",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            }
          ],
          "name": "UnauthorizedOperation",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "CallType",
              "name": "callType",
              "type": "bytes1"
            }
          ],
          "name": "UnsupportedCallType",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "ExecType",
              "name": "execType",
              "type": "bytes1"
            }
          ],
          "name": "UnsupportedExecType",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "moduleTypeId",
              "type": "uint256"
            }
          ],
          "name": "UnsupportedModuleType",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "UpgradeFailed",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "module",
              "type": "address"
            }
          ],
          "name": "ValidatorNotInstalled",
          "type": "error"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "contract IERC7484",
              "name": "registry",
              "type": "address"
            }
          ],
          "name": "ERC7484RegistryConfigured",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address",
              "name": "hook",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            }
          ],
          "name": "EmergencyHookUninstallRequest",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "nonce",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "initCode",
                  "type": "bytes"
                },
                {
                  "internalType": "bytes",
                  "name": "callData",
                  "type": "bytes"
                },
                {
                  "internalType": "bytes32",
                  "name": "accountGasLimits",
                  "type": "bytes32"
                },
                {
                  "internalType": "uint256",
                  "name": "preVerificationGas",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes32",
                  "name": "gasFees",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes",
                  "name": "paymasterAndData",
                  "type": "bytes"
                },
                {
                  "internalType": "bytes",
                  "name": "signature",
                  "type": "bytes"
                }
              ],
              "indexed": false,
              "internalType": "struct PackedUserOperation",
              "name": "userOp",
              "type": "tuple"
            },
            {
              "indexed": false,
              "internalType": "bytes",
              "name": "innerCallRet",
              "type": "bytes"
            }
          ],
          "name": "Executed",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "moduleTypeId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "module",
              "type": "address"
            }
          ],
          "name": "ModuleInstalled",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "moduleTypeId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "module",
              "type": "address"
            }
          ],
          "name": "ModuleUninstalled",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "bytes",
              "name": "callData",
              "type": "bytes"
            },
            {
              "indexed": false,
              "internalType": "bytes",
              "name": "result",
              "type": "bytes"
            }
          ],
          "name": "TryDelegateCallUnsuccessful",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "bytes",
              "name": "callData",
              "type": "bytes"
            },
            {
              "indexed": false,
              "internalType": "bytes",
              "name": "result",
              "type": "bytes"
            }
          ],
          "name": "TryExecuteUnsuccessful",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "implementation",
              "type": "address"
            }
          ],
          "name": "Upgraded",
          "type": "event"
        },
        {
          "stateMutability": "payable",
          "type": "fallback"
        },
        {
          "inputs": [],
          "name": "DOMAIN_SEPARATOR",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "accountId",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "pure",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "addDeposit",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "eip712Domain",
          "outputs": [
            {
              "internalType": "bytes1",
              "name": "fields",
              "type": "bytes1"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "version",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "chainId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "verifyingContract",
              "type": "address"
            },
            {
              "internalType": "bytes32",
              "name": "salt",
              "type": "bytes32"
            },
            {
              "internalType": "uint256[]",
              "name": "extensions",
              "type": "uint256[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "hook",
              "type": "address"
            },
            {
              "internalType": "bytes",
              "name": "deInitData",
              "type": "bytes"
            }
          ],
          "name": "emergencyUninstallHook",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "entryPoint",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "ExecutionMode",
              "name": "mode",
              "type": "bytes32"
            },
            {
              "internalType": "bytes",
              "name": "executionCalldata",
              "type": "bytes"
            }
          ],
          "name": "execute",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "ExecutionMode",
              "name": "mode",
              "type": "bytes32"
            },
            {
              "internalType": "bytes",
              "name": "executionCalldata",
              "type": "bytes"
            }
          ],
          "name": "executeFromExecutor",
          "outputs": [
            {
              "internalType": "bytes[]",
              "name": "returnData",
              "type": "bytes[]"
            }
          ],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "nonce",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "initCode",
                  "type": "bytes"
                },
                {
                  "internalType": "bytes",
                  "name": "callData",
                  "type": "bytes"
                },
                {
                  "internalType": "bytes32",
                  "name": "accountGasLimits",
                  "type": "bytes32"
                },
                {
                  "internalType": "uint256",
                  "name": "preVerificationGas",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes32",
                  "name": "gasFees",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes",
                  "name": "paymasterAndData",
                  "type": "bytes"
                },
                {
                  "internalType": "bytes",
                  "name": "signature",
                  "type": "bytes"
                }
              ],
              "internalType": "struct PackedUserOperation",
              "name": "userOp",
              "type": "tuple"
            },
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "name": "executeUserOp",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getActiveHook",
          "outputs": [
            {
              "internalType": "address",
              "name": "hook",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getDeposit",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "result",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "cursor",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "size",
              "type": "uint256"
            }
          ],
          "name": "getExecutorsPaginated",
          "outputs": [
            {
              "internalType": "address[]",
              "name": "array",
              "type": "address[]"
            },
            {
              "internalType": "address",
              "name": "next",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes4",
              "name": "selector",
              "type": "bytes4"
            }
          ],
          "name": "getFallbackHandlerBySelector",
          "outputs": [
            {
              "internalType": "CallType",
              "name": "",
              "type": "bytes1"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getImplementation",
          "outputs": [
            {
              "internalType": "address",
              "name": "implementation",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "cursor",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "size",
              "type": "uint256"
            }
          ],
          "name": "getValidatorsPaginated",
          "outputs": [
            {
              "internalType": "address[]",
              "name": "array",
              "type": "address[]"
            },
            {
              "internalType": "address",
              "name": "next",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "structHash",
              "type": "bytes32"
            }
          ],
          "name": "hashTypedData",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes",
              "name": "initData",
              "type": "bytes"
            }
          ],
          "name": "initializeAccount",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "moduleTypeId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "module",
              "type": "address"
            },
            {
              "internalType": "bytes",
              "name": "initData",
              "type": "bytes"
            }
          ],
          "name": "installModule",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "moduleTypeId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "module",
              "type": "address"
            },
            {
              "internalType": "bytes",
              "name": "additionalContext",
              "type": "bytes"
            }
          ],
          "name": "isModuleInstalled",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "hash",
              "type": "bytes32"
            },
            {
              "internalType": "bytes",
              "name": "signature",
              "type": "bytes"
            }
          ],
          "name": "isValidSignature",
          "outputs": [
            {
              "internalType": "bytes4",
              "name": "",
              "type": "bytes4"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint192",
              "name": "key",
              "type": "uint192"
            }
          ],
          "name": "nonce",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "proxiableUUID",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "registry",
          "outputs": [
            {
              "internalType": "contract IERC7484",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "contract IERC7484",
              "name": "newRegistry",
              "type": "address"
            },
            {
              "internalType": "address[]",
              "name": "attesters",
              "type": "address[]"
            },
            {
              "internalType": "uint8",
              "name": "threshold",
              "type": "uint8"
            }
          ],
          "name": "setRegistry",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "ExecutionMode",
              "name": "mode",
              "type": "bytes32"
            }
          ],
          "name": "supportsExecutionMode",
          "outputs": [
            {
              "internalType": "bool",
              "name": "isSupported",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "moduleTypeId",
              "type": "uint256"
            }
          ],
          "name": "supportsModule",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "supportsNestedTypedDataSign",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "validator",
              "type": "address"
            }
          ],
          "name": "supportsNestedTypedDataSignWithValidator",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "moduleTypeId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "module",
              "type": "address"
            },
            {
              "internalType": "bytes",
              "name": "deInitData",
              "type": "bytes"
            }
          ],
          "name": "uninstallModule",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "newImplementation",
              "type": "address"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "name": "upgradeToAndCall",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "nonce",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "initCode",
                  "type": "bytes"
                },
                {
                  "internalType": "bytes",
                  "name": "callData",
                  "type": "bytes"
                },
                {
                  "internalType": "bytes32",
                  "name": "accountGasLimits",
                  "type": "bytes32"
                },
                {
                  "internalType": "uint256",
                  "name": "preVerificationGas",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes32",
                  "name": "gasFees",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes",
                  "name": "paymasterAndData",
                  "type": "bytes"
                },
                {
                  "internalType": "bytes",
                  "name": "signature",
                  "type": "bytes"
                }
              ],
              "internalType": "struct PackedUserOperation",
              "name": "op",
              "type": "tuple"
            },
            {
              "internalType": "bytes32",
              "name": "userOpHash",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "missingAccountFunds",
              "type": "uint256"
            }
          ],
          "name": "validateUserOp",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "validationData",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "withdrawDepositTo",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "stateMutability": "payable",
          "type": "receive"
        }
      ],
    bytecode:
      // "0x60806040526004361015610027575b36156100255761001d3661297d565b602081519101f35b005b5f3560e01c80630a664dba14610216578063112d3a7d146102115780631626ba7e1461020c57806319822f7c146102075780633644e51514610202578063481ddd23146101fd5780634a58db19146101f85780634b6a1419146101f35780634d44560d146101ee5780634f1ef286146101e957806352d1902d146101e45780635faac46b146101df5780636575f6aa146101da5780637b103999146101d557806384b0196e146101d05780638dd7712f146101cb5780639517e29f146101c65780639cfd7cff146101c1578063a71763a8146101bc578063aaf10f42146101b7578063b0d691fe146101b2578063c399ec88146101ad578063cd64f80a146101a8578063d03c7914146101a3578063d620c85a1461019e578063d691c96414610199578063d86f2b3c14610194578063e9ae5c531461018f578063ea5f61d01461018a578063eab77e17146101855763f2dc691d0361000e57611a03565b61198f565b611893565b6117bd565b6116fc565b6115cd565b611524565b611477565b61122a565b6111d4565b611191565b611133565b61104a565b610feb565b610e42565b610d4e565b610cb0565b610c67565b610c41565b610a97565b6109d2565b6108d8565b610804565b61076d565b610733565b6106a2565b610576565b610378565b610316565b6102f0565b610229565b5f91031261022557565b5f80fd5b34610225575f3660031901126102255760206001600160a01b035f5160206146c55f395f51905f5254166001600160a01b0360405191168152f35b6001600160a01b0381160361022557565b359061028082610264565b565b9181601f840112156102255782359167ffffffffffffffff8311610225576020838186019501011161022557565b606060031982011261022557600435916024356102cc81610264565b916044359067ffffffffffffffff8211610225576102ec91600401610282565b9091565b3461022557602061030c610303366102b0565b92919091612a99565b6040519015158152f35b346102255760403660031901126102255760043560243567ffffffffffffffff811161022557602091610350610356923690600401610282565b91611bcf565b6040516001600160e01b03199091168152f35b90816101209103126102255790565b346102255760603660031901126102255760043567ffffffffffffffff8111610225576103a9903690600401610369565b60243590604435906103e56001600160a01b037f0000000000000000000000000000000071727de22e5e9d8baf0edac6f37da032163314611c7d565b60208101359061040c604083901c6001600160a01b03169260031a60f81b600160f81b1490565b156104fd57926020916104839461044661043f61043861042c3685611e3f565b93610100810190611f1f565b9086612b24565b3691611dee565b61010082015261045e82610459816132df565b611aec565b5f6001600160a01b03604051809881968295639700320360e01b845260048401611f52565b0393165af19182156104f8576104b59282915f916104c9575b50915b6104b9575b506040519081529081906020820190565b0390f35b5f9081803892335af1505f6104a4565b6104eb915060203d6020116104f1575b6104e38183611b45565b810190611c93565b5f61049c565b503d6104d9565b611bc4565b928161053794610512826104596020966132df565b5f6001600160a01b03604051809881968295639700320360e01b845260048401611d97565b0393165af19182156104f8576104b59282915f91610557575b509161049f565b610570915060203d6020116104f1576104e38183611b45565b5f610550565b34610225575f366003190112610225577fa739dd55141be329d725a186160497e55439d8af9eb6daff12cc467e1b66e8a3467f000000000000000000000000000000000000000000000000000000000000210514307f000000000000000000000000000000039dfcad030719b07296710f045f0558f71416156105ff575b602090604051908152f35b50602061068960a06040517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f81527ff3fbaf4e62ef217b8151b366cdaba8fa578e78940637d6c1ec320d10a718877260208201527f06c015bd22b4c69690933c1058878ebdfef31f9aaae40bbe86d8a09fe1b2972c60408201524660608201523060808201522090565b90506105f4565b6001600160e01b031981160361022557565b3461022557602036600319011261022557604060206106fc6004356106c681610690565b63ffffffff60e01b165f527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f0260205260405f2090565b82519061070882611b24565b54906001600160a01b0382169182825260ff60f81b9060581b16928391015282519182526020820152f35b5f366003190112610225575f388180347f0000000000000000000000000000000071727de22e5e9d8baf0edac6f37da0325af11561022557005b60203660031901126102255760043567ffffffffffffffff8111610225575f6107b661079e82933690600401610282565b6107a6613b3e565b6107ae613bc0565b810190612001565b906001600160a01b0360208351930191165af46107d1612038565b50156107f5576107df612c5d565b156107e657005b63c4d0a0b160e01b5f5260045ffd5b63315927c560e01b5f5260045ffd5b60403660031901126102255760043561081c81610264565b5f7f0000000000000000000000000000000071727de22e5e9d8baf0edac6f37da032602435336001600160a01b038316148015610896575b61085d90611c7d565b604051936014526034526f205c28780000000000000000000000008252604460108338935af11561088e575f603452005b3d5f823e3d90fd5b50333014610854565b906040600319830112610225576004356108b881610264565b916024359067ffffffffffffffff8211610225576102ec91600401610282565b6108e13661089f565b906001600160a01b036109086001600160a01b035f5160206146c55f395f51905f52541690565b1680610918575061002592612117565b60405163d68f602560e01b81529290915f848061093a363433600485016120ca565b038183875af19384156104f8575f946109aa575b5061095a929394612117565b803b1561022557604051630b9dfbed60e11b8152915f91839182908490829061098690600483016120f0565b03925af180156104f85761099657005b806109a45f61002593611b45565b8061021b565b61095a9394506109cb903d805f833e6109c38183611b45565b810190612067565b939261094e565b34610225575f36600319011261022557307f000000000000000000000000000000039dfcad030719b07296710f045f0558f703610a335760206040517f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8152f35b639f03a0265f526004601cfd5b90929192604082016040835281518091526020606084019201905f5b818110610a78575050506001600160a01b036020919416910152565b82516001600160a01b0316845260209384019390920191600101610a5c565b3461022557604036600319011261022557600435610ab481610264565b6024359060016001600160a01b038216141580610c2b575b610c10578115610c015790610ae081613c33565b610b18610b0b5f946001600160a01b03165f525f5160206146a55f395f51905f5260205260405f2090565b546001600160a01b031690565b6001600160a01b0381168015159081610bf5575b5080610bec575b15610b8d57610b81610b0b82610b5e610b8794610b508988613582565b906001600160a01b03169052565b6001600160a01b03165f525f5160206146a55f395f51905f5260205260405f2090565b93613c65565b92610b18565b908360016001600160a01b038416141580610be3575b610bb9575b81526104b560405192839283610a40565b9150610bdd610bd0610bca84613c73565b83613582565b516001600160a01b031690565b91610ba8565b50801515610ba3565b50828410610b33565b6001915014155f610b2c565b63f725081760e01b5f5260045ffd5b637c84ecfb60e01b5f526001600160a01b031660045260245ffd5b50610c3c610c38826132df565b1590565b610acc565b34610225576020366003190112610225576020610c5f600435612cef565b604051908152f35b34610225575f3660031901126102255760206001600160a01b035f5416604051908152f35b805180835260209291819084018484015e5f828201840152601f01601f1916010190565b34610225575f36600319011261022557610cef610cfd610cce612e07565b604092919251938493600f60f81b855260e0602086015260e0850190610c8c565b908382036040850152610c8c565b4660608301523060808301525f60a083015281810360c083015260206060519182815201906080905f5b818110610d35575050500390f35b8251845285945060209384019390920191600101610d27565b60403660031901126102255760043567ffffffffffffffff811161022557610d7a903690600401610369565b610dae6001600160a01b037f0000000000000000000000000000000071727de22e5e9d8baf0edac6f37da032163314611c7d565b6001600160a01b03610dd46001600160a01b035f5160206146c55f395f51905f52541690565b1680610de457506100259061225a565b60405163d68f602560e01b8152915f8380610e04363433600485016120ca565b038183865af19283156104f8575f93610e22575b5061095a9061225a565b61095a919350610e3b903d805f833e6109c38183611b45565b9290610e18565b610e4b366102b0565b6001600160a01b039391937f0000000000000000000000000000000071727de22e5e9d8baf0edac6f37da0321633148015610fe2575b610e8a90611c7d565b6001600160a01b03610eb06001600160a01b035f5160206146c55f395f51905f52541690565b1680610f065750610ee4907fd21d0b289f126c4b473ea641963e766833c2f13866e4ff480abd787c100ef123948484612f44565b604080519182526001600160a01b03909216602082015290819081015b0390a1005b906040519463d68f602560e01b86525f8680610f27363433600485016120ca565b038183875af19586156104f8575f96610fc0575b5090610f48918585612f44565b803b1561022557604051630b9dfbed60e11b8152935f918591829084908290610f7490600483016120f0565b03925af19283156104f8577fd21d0b289f126c4b473ea641963e766833c2f13866e4ff480abd787c100ef12393610fac575b50610ee4565b806109a45f610fba93611b45565b5f610fa6565b610f4892919650610fda903d805f833e6109c38183611b45565b959091610f3b565b50333014610e81565b34610225575f366003190112610225576104b560405161100c604082611b45565b601481527f6269636f6e6f6d792e6e657875732e312e302e300000000000000000000000006020820152604051918291602083526020830190610c8c565b611053366102b0565b916001600160a01b037f0000000000000000000000000000000071727de22e5e9d8baf0edac6f37da032163314801561112a575b61109090611c7d565b6001600160a01b036110b66001600160a01b035f5160206146c55f395f51905f52541690565b16806110c6575061002593612354565b60405163d68f602560e01b815293909290915f85806110ea363433600485016120ca565b038183885af19485156104f8575f9561110a575b5061095a939495612354565b61095a949550611123903d805f833e6109c38183611b45565b94936110fe565b50333014611087565b34610225575f366003190112610225577f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b03811615611189575b6020906001600160a01b0360405191168152f35b503054611175565b34610225575f3660031901126102255760206040516001600160a01b037f0000000000000000000000000000000071727de22e5e9d8baf0edac6f37da032168152f35b34610225575f36600319011261022557306020526370a082315f52602080806024601c7f0000000000000000000000000000000071727de22e5e9d8baf0edac6f37da0325afa601f3d1116815102604051908152f35b6112333661089f565b6112676001600160a01b037f0000000000000000000000000000000071727de22e5e9d8baf0edac6f37da032163314611c7d565b5f5160206146c55f395f51905f525461128f9084906001600160a01b03808316911614612303565b6112c9836001600160a01b03165f527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f0460205260405f2090565b548061135357505050610f017f2841d18703faaff388732165e48fe431468531b1b1e626b1b7cbcbfc0d79c7409142611332826001600160a01b03165f527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f0460205260405f2090565b55604080516001600160a01b03909216825242602083015290918291820190565b6113606203f480826124f2565b42106113c957505050610f017fcbd44a75f6935b5837022648b6c8487db984701200c5381c7c0f8c2b1d69b9da9142611332826001600160a01b03165f527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f0460205260405f2090565b6113d690939192936124dd565b421061146857611447610f01927f341347516a9de374859dfda710fa4828b2d48cb57d4fbe4c1149612b8e02276e945f611440856001600160a01b03165f527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f0460205260405f2090565b5583612fe7565b60408051600481526001600160a01b03909216602083015290918291820190565b6303f9796960e11b5f5260045ffd5b34610225576020366003190112610225576104b56004358060081b60ff60f81b82161591821561150c575b82156114f7575b50816114c3575b5060405190151581529081906020820190565b6001600160f81b0319811615915081156114df575b505f6114b0565b6001600160f81b031916600160f81b1490505f6114d8565b6001600160f81b03199081161491505f6114a9565b6001600160f81b03198116600160f81b1492506114a2565b34610225575f366003190112610225576020610c5f6124ff565b90604060031983011261022557600435916024359067ffffffffffffffff8211610225576102ec91600401610282565b602081016020825282518091526040820191602060408360051b8301019401925f915b8383106115a057505050505090565b90919293946020806115be600193603f198682030187528951610c8c565b97019301930191939290611591565b6115d63661153e565b916115e03361331f565b156116e9576001600160a01b0361160b6001600160a01b035f5160206146c55f395f51905f52541690565b168061162c575091611620916104b593612604565b6040519182918261156e565b90926040519263d68f602560e01b84525f848061164e363433600485016120ca565b038183875af19384156104f8575f946116c9575b5061166e929394612604565b90803b1561022557604051630b9dfbed60e11b8152925f91849182908490829061169b90600483016120f0565b03925af19182156104f8576104b5926116b5575b50611620565b806109a45f6116c393611b45565b5f6116af565b61166e9394506116e2903d805f833e6109c38183611b45565b9392611662565b635c93ff2f60e11b5f523360045260245ffd5b346102255760203660031901126102255760043577ffffffffffffffffffffffffffffffffffffffffffffffff81168091036102255760405190631aab3f0d60e11b825230600483015260248201526020816044816001600160a01b037f0000000000000000000000000000000071727de22e5e9d8baf0edac6f37da032165afa80156104f8576104b5915f9161179e57506040519081529081906020820190565b6117b7915060203d6020116104f1576104e38183611b45565b5f6104a4565b6117c63661153e565b906117fb6001600160a01b037f0000000000000000000000000000000071727de22e5e9d8baf0edac6f37da032163314611c7d565b6001600160a01b036118216001600160a01b035f5160206146c55f395f51905f52541690565b1680611831575061002592612753565b60405163d68f602560e01b81529290915f8480611853363433600485016120ca565b038183875af19384156104f8575f94611873575b5061095a929394612753565b61095a93945061188c903d805f833e6109c38183611b45565b9392611867565b34610225576040366003190112610225576004356118b081610264565b6024359060016001600160a01b03821614158061197d575b610c10578115610c0157906118dc81613c33565b611907610b0b5f946001600160a01b03165f525f5160206146e55f395f51905f5260205260405f2090565b6001600160a01b0381168015159081611971575b5080611968575b15610b8d57610b81610b0b8261193f61196294610b508988613582565b6001600160a01b03165f525f5160206146e55f395f51905f5260205260405f2090565b92611907565b50828410611922565b6001915014155f61191b565b5061198a610c388261331f565b6118c8565b6060366003190112610225576004356119a781610264565b6024359067ffffffffffffffff8211610225573660238301121561022557816004013567ffffffffffffffff8111610225573660248260051b85010111610225576044359160ff8316830361022557602461002594019061285a565b3461022557602036600319011261022557602061030c600435612938565b906014116102255790601490565b909291928360141161022557831161022557601401916013190190565b906004116102255790600490565b909291928360041161022557831161022557600401916003190190565b909291928360051161022557831161022557600501916004190190565b90939293848311610225578411610225578101920390565b356bffffffffffffffffffffffff19811692919060148210611acc575050565b6bffffffffffffffffffffffff1960149290920360031b82901b16169150565b15611af45750565b6001600160a01b039063342cf00f60e11b5f521660045260245ffd5b634e487b7160e01b5f52604160045260245ffd5b6040810190811067ffffffffffffffff821117611b4057604052565b611b10565b90601f8019910116810190811067ffffffffffffffff821117611b4057604052565b908160209103126102255751611b7c81610690565b90565b908060209392818452848401375f828201840152601f01601f1916010190565b611b7c94926001600160a01b0360609316825260208201528160408201520191611b7f565b6040513d5f823e3d90fd5b6020916001600160a01b0391611c0c611c2d9580611bf6611bf08287611a21565b90611aac565b60601c94611c0786610459816132df565b611a2f565b604051637aa8f17760e11b8152968795869490938593913360048601611b9f565b0392165afa5f9181611c4c575b50611b7c57506001600160e01b031990565b611c6f91925060203d602011611c76575b611c678183611b45565b810190611b67565b905f611c3a565b503d611c5d565b15611c8457565b635629665f60e11b5f5260045ffd5b90816020910312610225575190565b9035601e198236030181121561022557016020813591019167ffffffffffffffff821161022557813603831361022557565b611b7c91611cf281611ce584610275565b6001600160a01b03169052565b60208201356020820152611d88611d7c611d43611d28611d156040870187611ca2565b6101206040880152610120870191611b7f565b611d356060870187611ca2565b908683036060880152611b7f565b6080850135608085015260a085013560a085015260c085013560c0850152611d6e60e0860186611ca2565b9085830360e0870152611b7f565b92610100810190611ca2565b91610100818503910152611b7f565b929190611dae602091604086526040860190611cd4565b930152565b6040519061028061012083611b45565b60405190610280604083611b45565b67ffffffffffffffff8111611b4057601f01601f191660200190565b929192611dfa82611dd2565b91611e086040519384611b45565b829481845281830111610225578281602093845f960137010152565b9080601f8301121561022557816020611b7c93359101611dee565b9190916101208184031261022557611e55611db3565b92611e5f82610275565b845260208201356020850152604082013567ffffffffffffffff81116102255781611e8b918401611e24565b6040850152606082013567ffffffffffffffff81116102255781611eb0918401611e24565b60608501526080820135608085015260a082013560a085015260c082013560c085015260e082013567ffffffffffffffff81116102255781611ef3918401611e24565b60e085015261010082013567ffffffffffffffff811161022557611f179201611e24565b610100830152565b903590601e1981360301821215610225570180359067ffffffffffffffff82116102255760200191813603831361022557565b929190611dae60209160408652611f756040870182516001600160a01b03169052565b828101516060870152610100611fec611fb8611fa2604085015161012060808c01526101608b0190610c8c565b60608501518a8203603f190160a08c0152610c8c565b608084015160c08a015260a084015160e08a015260c0840151838a015260e0840151603f198a8303016101208b0152610c8c565b910151868203603f1901610140880152610c8c565b91909160408184031261022557803561201981610264565b92602082013567ffffffffffffffff811161022557611b7c9201611e24565b3d15612062573d9061204982611dd2565b916120576040519384611b45565b82523d5f602084013e565b606090565b6020818303126102255780519067ffffffffffffffff8211610225570181601f820112156102255780519061209b82611dd2565b926120a96040519485611b45565b8284526020838301011161022557815f9260208093018386015e8301015290565b611b7c93926001600160a01b03606093168252602082015281604082015201905f611b7f565b906020611b7c928181520190610c8c565b1561210857565b63325c055b60e21b5f5260045ffd5b9190916001600160a01b03811690612130821515612101565b61213c813b1515612101565b3055307f000000000000000000000000000000039dfcad030719b07296710f045f0558f714610a33576001600160a01b037f0000000000000000000000000000000071727de22e5e9d8baf0edac6f37da0321633148015612251575b6121a190611c7d565b6352d1902d6001527f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc602060016004601d855afa510361224357807fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b5f80a281817f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5561222d57505050565b815f926040519485378338925af41561088e5750565b6355299b496001526004601dfd5b50333014612198565b6122676060820182611f1f565b80600411610225576040515f9283929060031982019060040183378101826003198201528160031991030190305af461229e612038565b90156122f4577fd3fddfd1276d1cc278f10907710a44474a32f917b2fcfa198f46ca7689215e2f916122ef6122e192604051938493604085526040850190611cd4565b908382036020850152610c8c565b0390a1565b632b3f6d1160e21b5f5260045ffd5b1561230b5750565b6001600160a01b0390635f300b3960e11b5f52600480521660245260445ffd5b15612334575050565b6001600160a01b039250635f300b3960e11b5f526004521660245260445ffd5b9291909261236e848261236986868484612a99565b61232b565b604080518281526001600160a01b03861660208201527f341347516a9de374859dfda710fa4828b2d48cb57d4fbe4c1149612b8e02276e9190a1600181036123ba5750610280926131a8565b600281036123cc575061028092613033565b909190600381036124b15750906124ad926124796124a8936124716040516123f381611b24565b5f81525f60208201526124126106c661240c8589611a4c565b90612a63565b8151815460209093015174ff000000000000000000000000000000000000000060589190911c167fffffffffffffffffffffff0000000000000000000000000000000000000000009093166001600160a01b0390911617919091179055565b805a94611a5a565b604051638a91b0e360e01b60208201529491859161249a9160248401612fd6565b03601f198101855284611b45565b614243565b5050565b9091906004146124c057505050565b61028092612fe7565b634e487b7160e01b5f52601160045260245ffd5b906201518082018092116124ed57565b6124c9565b919082018092116124ed57565b60015f525f5160206146a55f395f51905f5260205261253d7ffe44ceacbf4f03c6ac19f86826dd265fa9ec25125e8b1766c207f24cd3bc73c7610b0b565b6001600160a01b038116801515806125f9575b156125ea57602060049160405192838092636b10642d60e11b82525afa5f91816125ca575b506125ab575b50610b0b6125a6916001600160a01b03165f525f5160206146a55f395f51905f5260205260405f2090565b61253d565b636b10642d60e11b146125be575f61257b565b50636b10642d60e11b90565b6125e391925060203d81116104f1576104e38183611b45565b905f612575565b506001600160e01b0319919050565b506001811415612550565b919061260f3361335f565b600883901b926001600160f81b03198116612630575090611b7c9291613687565b6001600160f81b03198116600160f81b03612651575090611b7c92916135bc565b6001600160f81b03198082160361273b57509061266d9161428e565b90916126776134d9565b936001600160f81b031981166126a9575091612692926142cd565b61269b82613570565b526126a581613570565b5090565b6001600160f81b03198116600160f81b0361271f575081836126ca926142a8565b6126d385613570565b52156126de57505090565b7f5bd4c60b4b38b664d8fb5944eb974e3d85083d79afe5ce934ccabcc913707c109161271961270c85613570565b5160405193849384613596565b0390a190565b6308c3ee0360e11b5f526001600160f81b03191660045260245ffd5b632e5bf3f960e21b5f5260ff60f81b1660045260245ffd5b600881901b9291906001600160f81b0319811661277657509061028092916137ba565b6001600160f81b03198116600160f81b036127975750906102809291613731565b6001600160f81b03198082160361273b5750906127b39161428e565b929091906001600160f81b031981166127e157505f9083604051938437838338925af41561088e5701604052565b9192916001600160f81b03198116600160f81b0361284257508183612805926142a8565b92901561281157505050565b6122ef7f5bd4c60b4b38b664d8fb5944eb974e3d85083d79afe5ce934ccabcc913707c109360405193849384613596565b6308c3ee0360e11b5f5260ff60f81b1660045260245ffd5b6001600160a01b0390939193817f0000000000000000000000000000000071727de22e5e9d8baf0edac6f37da032163314801561292f575b61289b90611c7d565b1692836001600160a01b03195f5416175f55836128dc575b5050507ff98c8404c5b1bfef2e6ba9233c6e88845aedfd36eea8b192725d8c199571cf325f80a2565b833b15610225575f91612903604051948593849363f05c04e160e01b85526004850161384b565b038183865af180156104f85761291b575b80806128b3565b806109a45f61292993611b45565b5f612914565b50333014612892565b600181036129465750600190565b600281036129545750600190565b600381036129625750600190565b600481036129705750600190565b61297957600190565b5f90565b906001600160a01b036129a46001600160a01b035f5160206146c55f395f51905f52541690565b1691826129b757611b7c9192505f6138c0565b60405163d68f602560e01b8152905f82806129d7363433600485016120ca565b038183885af19182156104f8575f92612a43575b506129f6905f6138c0565b92803b1561022557604051630b9dfbed60e11b8152915f918391829084908290612a2390600483016120f0565b03925af180156104f857612a35575b50565b806109a45f61028093611b45565b6129f6919250612a5c903d805f833e6109c38183611b45565b91906129eb565b356001600160e01b0319811692919060048210612a7e575050565b6001600160e01b031960049290920360031b82901b16169150565b92909160018403612ab0575050611b7c91506132df565b60028403612ac4575050611b7c915061331f565b60038403612af357611b7c935060048210612aeb57612ae69161240c91611a4c565b613a1d565b50505f613a1d565b5050906004145f14612b1f575f5160206146c55f395f51905f52546001600160a01b0391821691161490565b505f90565b9290803560601c601482013591603481013560e01c91612c41610c386038840193612b67868201998281600460388e968188013560e01c80980103010191611a94565b9a909a99603c605b604051612b7d608082611b45565b8181527f70486173682c6279746573333220696e69744461746148617368290000000000606060208301927f4d6f64756c65456e61626c654d6f64652861646472657373206d6f64756c652c84527f75696e74323536206d6f64756c65547970652c6279746573333220757365724f604082015201522091612c00368b8b611dee565b6020815191012060405194602086019485528960408701528c6060870152608086015260a085015260a08452612c3760c085611b45565b0191519020613a68565b612c4e5761028093612e7b565b6346fdc33360e01b5f5260045ffd5b60015f8190525f5160206146a55f395f51905f526020527ffe44ceacbf4f03c6ac19f86826dd265fa9ec25125e8b1766c207f24cd3bc73c7546001600160a01b0316141580612ca95790565b5060015f525f5160206146a55f395f51905f526020527ffe44ceacbf4f03c6ac19f86826dd265fa9ec25125e8b1766c207f24cd3bc73c7546001600160a01b0316151590565b7fa739dd55141be329d725a186160497e55439d8af9eb6daff12cc467e1b66e8a3467f000000000000000000000000000000000000000000000000000000000000210514307f000000000000000000000000000000039dfcad030719b07296710f045f0558f7141615612d7a575b6719010000000000005f52601a52603a526042601820905f603a52565b50612e0260a06040517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f81527ff3fbaf4e62ef217b8151b366cdaba8fa578e78940637d6c1ec320d10a718877260208201527f06c015bd22b4c69690933c1058878ebdfef31f9aaae40bbe86d8a09fe1b2972c60408201524660608201523060808201522090565b612d5d565b604051612e15604082611b45565b600581527f4e65787573000000000000000000000000000000000000000000000000000000602082015290604051612e4e604082611b45565b600581527f312e302e30000000000000000000000000000000000000000000000000000000602082015290565b9291906001600160a01b03612ea46001600160a01b035f5160206146c55f395f51905f52541690565b1680612eb4575061028093612f44565b60405163d68f602560e01b815293909290915f8580612ed8363433600485016120ca565b038183885af19485156104f8575f95612f24575b50612ef8939495612f44565b803b1561022557604051630b9dfbed60e11b8152915f918391829084908290612a2390600483016120f0565b612ef8949550612f3d903d805f833e6109c38183611b45565b9493612eec565b939291906001600160a01b03811615612fc75760018503612f6a5761028093945061417f565b60028503612f7d576102809394506140fc565b60038503612f9057610280939450613eab565b60048503612fa357610280939450613d83565b84612fb357610280939450613ca8565b6304c1896960e11b5f52600485905260245ffd5b635316c18d60e01b5f5260045ffd5b916020611b7c938181520191611b7f565b5f5160206146c55f395f51905f5280546001600160a01b03191690556124ad92906124a85a9261249a604051958692638a91b0e360e01b60208501526020602485018181520191611b7f565b90613049906001600160a01b0393810190612001565b92166001600160a01b0382168015801561319e575b61318b576001600160a01b03613092835f5160206146e55f395f51905f52906001600160a01b03165f5260205260405f2090565b54160361316f5791816131136124ad946130f86130d3610b0b61249a975f5160206146e55f395f51905f52906001600160a01b03165f5260205260405f2090565b915f5160206146e55f395f51905f52906001600160a01b03165f5260205260405f2090565b906001600160a01b03166001600160a01b0319825416179055565b61314e61313e825f5160206146e55f395f51905f52906001600160a01b03165f5260205260405f2090565b6001600160a01b03198154169055565b6124a85a92604051948591638a91b0e360e01b6020840152602483016120f0565b637c84ecfb60e01b5f526001600160a01b03821660045260245ffd5b50637c84ecfb60e01b5f5260045260245ffd5b506001811461305e565b906131be906001600160a01b0393810190612001565b92166001600160a01b038216801580156132d5575b61318b576001600160a01b03613207835f5160206146a55f395f51905f52906001600160a01b03165f5260205260405f2090565b54160361316f57613265906130f8613240610b0b855f5160206146a55f395f51905f52906001600160a01b03165f5260205260405f2090565b915f5160206146a55f395f51905f52906001600160a01b03165f5260205260405f2090565b61329061313e825f5160206146a55f395f51905f52906001600160a01b03165f5260205260405f2090565b613298612c5d565b156132c6576124ad9161249a916124a85a92604051948591638a91b0e360e01b6020840152602483016120f0565b63330c676160e21b5f5260045ffd5b50600181146131d3565b6001600160a01b0316806001141590816132f7575090565b90505f525f5160206146a55f395f51905f526020526001600160a01b0360405f205416151590565b6001600160a01b031680600114159081613337575090565b90505f525f5160206146e55f395f51905f526020526001600160a01b0360405f205416151590565b6001600160a01b035f54169081613374575050565b813b15610225576001600160a01b0360445f9260405194859384926396fb721760e01b8452166004830152600260248301525afa80156104f8576133b55750565b5f61028091611b45565b6001600160a01b035f541690816133d4575050565b813b15610225576001600160a01b0360445f9260405194859384926396fb721760e01b8452166004830152600460248301525afa80156104f8576133b55750565b6001600160a01b035f5416908161342a575050565b813b15610225576001600160a01b0360445f9260405194859384926396fb721760e01b8452166004830152600360248301525afa80156104f8576133b55750565b6001600160a01b035f54169081613480575050565b813b15610225576001600160a01b0360445f9260405194859384926396fb721760e01b8452166004830152600160248301525afa80156104f8576133b55750565b67ffffffffffffffff8111611b405760051b60200190565b604080519091906134ea8382611b45565b6001815291601f1901825f5b82811061350257505050565b8060606020809385010152016134f6565b9061351d826134c1565b61352a6040519182611b45565b828152809261353b601f19916134c1565b01905f5b82811061354b57505050565b80606060208093850101520161353f565b634e487b7160e01b5f52603260045260245ffd5b80511561357d5760200190565b61355c565b805182101561357d5760209160051b010190565b91611b7c93916135ae91604085526040850191611b7f565b916020818403910152610c8c565b803501803592602090910191506001600160f81b0319811661364557506135e282613513565b915f5b8181106135f25750505090565b806136296136036001938587614300565b803561360e81610264565b6136216020830135926040810190611f1f565b929091614421565b6136338287613582565b5261363e8186613582565b50016135e5565b9291906001600160f81b03198416600160f81b0361366857611b7c929350614322565b6308c3ee0360e11b5f9081526001600160f81b03198516600452602490fd5b90613694919392936143d2565b91909261369f6134d9565b956001600160f81b031981166136ce5750906136bb9391614421565b6136c483613570565b52612a3282613570565b6001600160f81b03198116600160f81b036128425750836136f09284926143fa565b6136f986613570565b5215613703575050565b7fb5282692b8c578af7fb880895d599035496b5e64d1f14bf428a1ed3bc406f662916122ef61270c86613570565b8035016020810192903591506001600160f81b0319811661379857505f5b81811061375b57505050565b8061379261376c6001938587614300565b803561377781610264565b61378a6020830135926040810190611f1f565b92909161444e565b0161374f565b92916001600160f81b03198416600160f81b0361366857612a32929350614322565b906137c4916143d2565b90939092906001600160f81b031916806137e4575090610280939161444e565b600160f81b81036138395750836137fc9284926143fa565b92901561380857505050565b6122ef7fb5282692b8c578af7fb880895d599035496b5e64d1f14bf428a1ed3bc406f6629360405193849384613596565b6308c3ee0360e11b5f5260045260245ffd5b60ff90911681526040602082018190528101839052606001915f5b8181106138735750505090565b9091926020806001926001600160a01b03873561388f81610264565b168152019401929101613866565b156138a55750565b6308c63e2760e01b5f5263ffffffff60e01b1660045260245ffd5b50505f80356001600160e01b031981168083527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f026020526040832060609190549361391f6001600160a01b0386169560581b6001600160f81b03191690565b936001600160a01b038616156139cd575050506001600160f81b03198216607f60f91b1490501561397b57505f809161395661446a565b90602082519201905afa90613969612038565b915b1561397257565b50602081519101fd5b6001600160f81b031981166139b157505f809161399661446a565b906020825192019034905af1906139ab612038565b9161396b565b632e5bf3f960e21b5f526001600160f81b03191660045260245ffd5b9193509194935060e01c63150b7a0263bc197c81821463f23a6e618314179114176139fd575b906102809161389d565b5060408051600481526020810183905260248101909152925060016139f3565b6001600160a01b03613a60819263ffffffff60e01b165f527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f0260205260405f2090565b541691161490565b91613a7f613a79611bf08385611a21565b60601c90565b92613a8c610c38856132df565b613b225792602092613ab3836001600160a01b0394613aad613ad498612cef565b93611a2f565b604051637aa8f17760e11b8152968795869490938593913060048601611b9f565b0392165afa5f9181613b01575b50613aeb57505f90565b6001600160e01b031916630b135d3f60e11b1490565b613b1b91925060203d602011611c7657611c678183611b45565b905f613ae1565b63342cf00f60e11b5f526001600160a01b03841660045260245ffd5b60015f525f5160206146e55f395f51905f526020527fbdfeb076d903611fa58576955630d640569633049bcf40ad9c22db9251b54a13546001600160a01b0316613bb15760015f525f5160206146e55f395f51905f5260205261028060405f2060016001600160a01b0319825416179055565b6329e42f3360e11b5f5260045ffd5b60015f525f5160206146a55f395f51905f526020527ffe44ceacbf4f03c6ac19f86826dd265fa9ec25125e8b1766c207f24cd3bc73c7546001600160a01b0316613bb15760015f525f5160206146a55f395f51905f5260205261028060405f2060016001600160a01b0319825416179055565b90613c3d826134c1565b613c4a6040519182611b45565b8281528092613c5b601f19916134c1565b0190602036910137565b5f1981146124ed5760010190565b5f198101919082116124ed57565b919081101561357d5760051b0190565b9082101561357d576102ec9160051b810190611f1f565b9150613cca908035810191602083019235916020810135019060208201913590565b929391808403613d74575f5b818110613ce557505050505050565b80613cf36001928489613c81565b35828103613d175750613d11613d0a828887613c91565b908761417f565b01613cd6565b60028103613d3a5750613d35613d2e828887613c91565b90876140fc565b613d11565b60038103613d585750613d35613d51828887613c91565b9087613eab565b600403613d3557613d35613d6d828887613c91565b9087613d83565b63b4fa3fb360e01b5f5260045ffd5b91613d8d836133bf565b60405163ecd0596160e01b81526004808201526001600160a01b0384169390602081602481885afa9081156104f8575f91613e40575b5015613e2d57613e0390613dfe613dee6001600160a01b035f5160206146c55f395f51905f52541690565b6001600160a01b03811615613e87565b614202565b823b1561022557612a23925f92836040518096819582946306d61fe760e41b845260048401612fd6565b6369c9a24560e11b5f526004805260245ffd5b613e62915060203d602011613e68575b613e5a8183611b45565b810190613e6f565b5f613dc3565b503d613e50565b90816020910312610225575180151581036102255790565b15613e8f5750565b6001600160a01b039063741cbe0360e01b5f521660045260245ffd5b9091613eb682613415565b60405163ecd0596160e01b8152600360048201526001600160a01b0383169290602081602481875afa9081156104f8575f9161407f575b501561406b57612412846106c6613f5f61043f8680613f3d613f30613f2283613f1c61240c61400e9e8c611a4c565b9961409e565b356001600160f81b03191690565b6001600160f81b03191690565b9a6001600160f81b03198c16158015614054575b613f5a906140ad565b611a77565b96613f8e6001600160e01b031984166306d61fe760e41b8114908115614043575b811561403a575b50156140c3565b613fe383613fde610c38826001600160e01b0319165f9081527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f0260205260409020546001600160a01b0316151590565b6140d9565b613ffd613fee611dc3565b6001600160a01b039096168652565b6001600160f81b0319166020850152565b803b15610225576040516306d61fe760e41b8152915f918391829084908290612a2390600483016120f0565b9050155f613f87565b638a91b0e360e01b81149150613f80565b50607f60f91b6001600160f81b03198d1614613f51565b6369c9a24560e11b5f52600360045260245ffd5b614098915060203d602011613e6857613e5a8183611b45565b5f613eed565b906004101561357d5760040190565b156140b457565b63867a1dcf60e01b5f5260045ffd5b156140ca57565b63c001660b60e01b5f5260045ffd5b156140e15750565b63a56a04dd60e01b5f5263ffffffff60e01b1660045260245ffd5b916141068361335f565b60405163ecd0596160e01b8152600260048201526001600160a01b0384169390602081602481885afa9081156104f8575f91614160575b501561414c57613e0390614497565b6369c9a24560e11b5f52600260045260245ffd5b614179915060203d602011613e6857613e5a8183611b45565b5f61413d565b916141898361346b565b60405163ecd0596160e01b8152600160048201526001600160a01b0384169390602081602481885afa9081156104f8575f916141e3575b50156141cf57613e03906145b4565b6369c9a24560e11b5f52600160045260245ffd5b6141fc915060203d602011613e6857613e5a8183611b45565b5f6141c0565b6001600160a01b0361028091166001600160a01b03166001600160a01b03195f5160206146c55f395f51905f525416175f5160206146c55f395f51905f5255565b604051939260209291906142578487611b45565b5f86525f928380936020890196601f190136883760208451940192f1903d9081614286575b5f908286523e9190565b5f915061427c565b918160141161022557823560601c92601401916013190190565b5f9192806040519485378338925af4913d82523d5f602084013e60203d830101604052565b5f919392806040519586378438925af4156142f7573d82523d5f602084013e60203d830101604052565b503d5f823e3d90fd5b919081101561357d5760051b81013590605e1981360301821215610225570190565b91909161432e83613513565b925f5b81811061433d57505050565b8061434b6001928486614300565b80359061435782610264565b6143766020820135604083019361436e8585611f1f565b9290916143fa565b614380858b613582565b521561438f575b505001614331565b7fb5282692b8c578af7fb880895d599035496b5e64d1f14bf428a1ed3bc406f662916143ba91611f1f565b906143c861270c858b613582565b0390a15f80614387565b908060141161022557813560601c926034821061022557601483013592603401916033190190565b905f928491604051958692833738935af1913d82523d5f602084013e60203d830101604052565b90925f92819594604051968792833738935af1156142f7573d82523d5f602084013e60203d830101604052565b8380935f93604051958692833738935af11561088e5701604052565b60405190602036830101604052816014360181525f602036920137604051601481016040523360601b9052565b6001600160a01b038116801580156145aa575b614598575f9081525f5160206146e55f395f51905f5260205260409020546001600160a01b031661457d5760015f525f5160206146e55f395f51905f526020526102809061454261451a7fbdfeb076d903611fa58576955630d640569633049bcf40ad9c22db9251b54a13610b0b565b6130f8835f5160206146e55f395f51905f52906001600160a01b03165f5260205260405f2090565b60015f525f5160206146e55f395f51905f526020527fbdfeb076d903611fa58576955630d640569633049bcf40ad9c22db9251b54a136130f8565b631034f46960e21b5f526001600160a01b031660045260245ffd5b637c84ecfb60e01b5f5260045260245ffd5b50600181146144aa565b6001600160a01b0381168015801561469a575b614598575f9081525f5160206146a55f395f51905f5260205260409020546001600160a01b031661457d5760015f525f5160206146a55f395f51905f526020526102809061465f6146377ffe44ceacbf4f03c6ac19f86826dd265fa9ec25125e8b1766c207f24cd3bc73c7610b0b565b6130f8835f5160206146a55f395f51905f52906001600160a01b03165f5260205260405f2090565b60015f525f5160206146a55f395f51905f526020527ffe44ceacbf4f03c6ac19f86826dd265fa9ec25125e8b1766c207f24cd3bc73c76130f8565b50600181146145c756fe0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f000bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f030bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f01a2646970667358221220744101ecf4df256f2cb78d481ad3a96d8a27f96e71bb7375a3d81264864ef9f764736f6c634300081b0033",
      "0x60806040526004361015610027575b36156100255761001d36612a99565b602081519101f35b005b5f3560e01c80630a664dba14610216578063112d3a7d146102115780631626ba7e1461020c57806319822f7c146102075780633644e51514610202578063481ddd23146101fd5780634a58db19146101f85780634b6a1419146101f35780634d44560d146101ee5780634f1ef286146101e957806352d1902d146101e45780635faac46b146101df5780636575f6aa146101da5780637b103999146101d557806384b0196e146101d05780638dd7712f146101cb5780639517e29f146101c65780639cfd7cff146101c1578063a71763a8146101bc578063aaf10f42146101b7578063b0d691fe146101b2578063c399ec88146101ad578063cd64f80a146101a8578063d03c7914146101a3578063d620c85a1461019e578063d691c96414610199578063d86f2b3c14610194578063e9ae5c531461018f578063ea5f61d01461018a578063eab77e17146101855763f2dc691d0361000e576119fc565b611988565b61188c565b6117cf565b61170e565b6115c7565b61151e565b61146d565b611220565b6111da565b6111b0565b611152565b611082565b611023565b610e80565b610da5565b610ceb565b610ca2565b610c7c565b610ab9565b6109f4565b6108fb565b610831565b610768565b61073e565b6106a9565b61057d565b610377565b610316565b6102f0565b610229565b5f91031261022557565b5f80fd5b34610225575f3660031901126102255760206001600160a01b035f5160206149d85f395f51905f5254166001600160a01b0360405191168152f35b6001600160a01b0381160361022557565b359061028082610264565b565b9181601f840112156102255782359167ffffffffffffffff8311610225576020838186019501011161022557565b606060031982011261022557600435916024356102cc81610264565b916044359067ffffffffffffffff8211610225576102ec91600401610282565b9091565b3461022557602061030c610303366102b0565b92919091612bb4565b6040519015158152f35b346102255760403660031901126102255760043560243567ffffffffffffffff811161022557602091610350610356923690600401610282565b91611bc5565b6001600160e01b031960405191168152f35b90816101209103126102255790565b346102255760603660031901126102255760043567ffffffffffffffff8111610225576103a8903690600401610368565b60243590604435906103cb6f71727de22e5e9d8baf0edac6f37da0323314611c73565b602081013590610413604083901c6001600160a01b0316926103f36103ee611cdd565b612c3f565b610404846103ff611d3e565b612c98565b60031a60f81b600160f81b1490565b15610504579260209161048a9461044d61044661043f6104333685611eea565b93610100810190611fca565b9086612cfd565b3691611e99565b610100820152610465826104608161351b565b611ae5565b5f6001600160a01b03604051809881968295639700320360e01b845260048401611ffd565b0393165af19182156104ff576104bc9282915f916104d0575b50915b6104c0575b506040519081529081906020820190565b0390f35b5f9081803892335af1505f6104ab565b6104f2915060203d6020116104f8575b6104ea8183611b3e565b810190611d79565b5f6104a3565b503d6104e0565b611bba565b928161053e946105198261046060209661351b565b5f6001600160a01b03604051809881968295639700320360e01b845260048401611e7d565b0393165af19182156104ff576104bc9282915f9161055e575b50916104a6565b610577915060203d6020116104f8576104ea8183611b3e565b5f610557565b34610225575f366003190112610225577f0000000000000000000000000000000000000000000000000000000000000000467f000000000000000000000000000000000000000000000000000000000000000014307f0000000000000000000000000000000000000000000000000000000000000000141615610606575b602090604051908152f35b50602061069060a06040517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f81527f000000000000000000000000000000000000000000000000000000000000000060208201527f000000000000000000000000000000000000000000000000000000000000000060408201524660608201523060808201522090565b90506105fb565b6001600160e01b031981160361022557565b3461022557602036600319011261022557604060206107046004356106cd81610697565b6001600160e01b0319165f527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f0260205260405f2090565b82519061071082611b1d565b54906001600160f81b03196001600160a01b0383169283835260581b16928391015282519182526020820152f35b5f366003190112610225575f388180346f71727de22e5e9d8baf0edac6f37da0325af11561022557005b60203660031901126102255760043567ffffffffffffffff8111610225575f6107b161079982933690600401610282565b6107a1613d97565b6107a9613e32565b8101906120ac565b906001600160a01b0360208351930191165af46107cc6120e3565b5015610809576107da612e4f565b156107e157005b7fc4d0a0b1000000000000000000000000000000000000000000000000000000005f5260045ffd5b7f315927c5000000000000000000000000000000000000000000000000000000005f5260045ffd5b60403660031901126102255760043561084981610264565b6024356f71727de22e5e9d8baf0edac6f37da032331480156108b9575b61086f90611c73565b604051916014526034526f205c28780000000000000000000000005f525f3860446010836f71727de22e5e9d8baf0edac6f37da0325af1156108b1575f603452005b3d5f823e3d90fd5b50333014610866565b906040600319830112610225576004356108db81610264565b916024359067ffffffffffffffff8211610225576102ec91600401610282565b610904366108c2565b906001600160a01b0361092b6001600160a01b035f5160206149d85f395f51905f52541690565b168061093b5750610025926121ca565b90916040519263d68f602560e01b84525f848061095d36343360048501612175565b038183875af19384156104ff575f946109cc575b5061097d9293946121ca565b803b15610225576109a85f92918392604051948580948193630b9dfbed60e11b83526004830161100f565b03925af180156104ff576109b857005b806109c65f61002593611b3e565b8061021b565b61097d9394506109ed903d805f833e6109e58183611b3e565b810190612112565b9392610971565b34610225575f36600319011261022557307f000000000000000000000000000000000000000000000000000000000000000003610a555760206040517f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8152f35b639f03a0265f526004601cfd5b90929192604082016040835281518091526020606084019201905f5b818110610a9a575050506001600160a01b036020919416910152565b82516001600160a01b0316845260209384019390920191600101610a7e565b3461022557604036600319011261022557600435610ad681610264565b6024359060016001600160a01b038216141580610c66575b610c4b578115610c235790610b0281613ea5565b610b3a610b2d5f946001600160a01b03165f525f5160206149b85f395f51905f5260205260405f2090565b546001600160a01b031690565b6001600160a01b0381168015159081610c17575b5080610c0e575b15610baf57610ba3610b2d82610b80610ba994610b7289886137be565b906001600160a01b03169052565b6001600160a01b03165f525f5160206149b85f395f51905f5260205260405f2090565b93613ed7565b92610b3a565b908360016001600160a01b038416141580610c05575b610bdb575b81526104bc60405192839283610a62565b9150610bff610bf2610bec84613ee5565b836137be565b516001600160a01b031690565b91610bca565b50801515610bc5565b50828410610b55565b6001915014155f610b4e565b7ff7250817000000000000000000000000000000000000000000000000000000005f5260045ffd5b637c84ecfb60e01b5f526001600160a01b031660045260245ffd5b50610c77610c738261351b565b1590565b610aee565b34610225576020366003190112610225576020610c9a600435612ee1565b604051908152f35b34610225575f3660031901126102255760206001600160a01b035f5416604051908152f35b805180835260209291819084018484015e5f828201840152601f01601f1916010190565b34610225575f36600319011261022557610d46610d54610d09612ff9565b6040929192519384937f0f00000000000000000000000000000000000000000000000000000000000000855260e0602086015260e0850190610cc7565b908382036040850152610cc7565b4660608301523060808301525f60a083015281810360c083015260206060519182815201906080905f5b818110610d8c575050500390f35b8251845285945060209384019390920191600101610d7e565b60403660031901126102255760043567ffffffffffffffff811161022557610dd1903690600401610368565b610dec6f71727de22e5e9d8baf0edac6f37da0323314611c73565b6001600160a01b03610e126001600160a01b035f5160206149d85f395f51905f52541690565b1680610e225750610025906122f4565b6040519163d68f602560e01b83525f8380610e4236343360048501612175565b038183865af19283156104ff575f93610e60575b5061097d906122f4565b61097d919350610e79903d805f833e6109e58183611b3e565b9290610e56565b610e89366102b0565b6f71727de22e5e9d8baf0edac6f37da03293919333148015611006575b610eaf90611c73565b6001600160a01b03610ed56001600160a01b035f5160206149d85f395f51905f52541690565b1680610f2b5750610f09907fd21d0b289f126c4b473ea641963e766833c2f13866e4ff480abd787c100ef123948484613135565b604080519182526001600160a01b03909216602082015290819081015b0390a1005b906040519463d68f602560e01b86525f8680610f4c36343360048501612175565b038183875af19586156104ff575f96610fe4575b5090610f6d918585613135565b803b1561022557610f985f94918592604051968780948193630b9dfbed60e11b83526004830161100f565b03925af19283156104ff577fd21d0b289f126c4b473ea641963e766833c2f13866e4ff480abd787c100ef12393610fd0575b50610f09565b806109c65f610fde93611b3e565b5f610fca565b610f6d92919650610ffe903d805f833e6109e58183611b3e565b959091610f60565b50333014610ea6565b906020611020928181520190610cc7565b90565b34610225575f366003190112610225576104bc604051611044604082611b3e565b601481527f6269636f6e6f6d792e6e657875732e312e302e300000000000000000000000006020820152604051918291602083526020830190610cc7565b61108b366102b0565b916f71727de22e5e9d8baf0edac6f37da03233148015611149575b6110af90611c73565b6001600160a01b036110d56001600160a01b035f5160206149d85f395f51905f52541690565b16806110e5575061002593612407565b916040939193519363d68f602560e01b85525f858061110936343360048501612175565b038183885af19485156104ff575f95611129575b5061097d939495612407565b61097d949550611142903d805f833e6109e58183611b3e565b949361111d565b503330146110a6565b34610225575f366003190112610225577f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b038116156111a8575b6020906001600160a01b0360405191168152f35b503054611194565b34610225575f3660031901126102255760206040516f71727de22e5e9d8baf0edac6f37da0328152f35b34610225575f36600319011261022557306020526370a082315f52602080806024601c6f71727de22e5e9d8baf0edac6f37da0325afa601f3d1116815102604051908152f35b611229366108c2565b6112446f71727de22e5e9d8baf0edac6f37da0323314611c73565b5f5160206149d85f395f51905f525461126c9084906001600160a01b038083169116146123b6565b6112a6836001600160a01b03165f527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f0460205260405f2090565b548061133057505050610f267f2841d18703faaff388732165e48fe431468531b1b1e626b1b7cbcbfc0d79c740914261130f826001600160a01b03165f527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f0460205260405f2090565b55604080516001600160a01b03909216825242602083015290918291820190565b61133d6203f480826125a5565b42106113a657505050610f267fcbd44a75f6935b5837022648b6c8487db984701200c5381c7c0f8c2b1d69b9da914261130f826001600160a01b03165f527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f0460205260405f2090565b6113b39093919293612590565b421061144557611424610f26927f341347516a9de374859dfda710fa4828b2d48cb57d4fbe4c1149612b8e02276e945f61141d856001600160a01b03165f527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f0460205260405f2090565b558361320a565b60408051600481526001600160a01b03909216602083015290918291820190565b7f07f2f2d2000000000000000000000000000000000000000000000000000000005f5260045ffd5b34610225576020366003190112610225576104bc6004358060081b6001600160f81b0319821615918215611506575b82156114f1575b50816114bd575b5060405190151581529081906020820190565b6001600160f81b0319811615915081156114d9575b505f6114aa565b6001600160f81b031916600160f81b1490505f6114d2565b6001600160f81b03199081161491505f6114a3565b6001600160f81b03198116600160f81b14925061149c565b34610225575f366003190112610225576020610c9a6125b2565b90604060031983011261022557600435916024359067ffffffffffffffff8211610225576102ec91600401610282565b602081016020825282518091526040820191602060408360051b8301019401925f915b83831061159a57505050505090565b90919293946020806115b8600193603f198682030187528951610cc7565b9701930193019193929061158b565b6115d036611538565b916115da3361355b565b156116e2576001600160a01b036116056001600160a01b035f5160206149d85f395f51905f52541690565b168061162657509161161a916104bc936126b6565b60405191829182611568565b90926040519263d68f602560e01b84525f848061164836343360048501612175565b038183875af19384156104ff575f946116c2575b506116689293946126b6565b90803b15610225576116945f93918492604051958680948193630b9dfbed60e11b83526004830161100f565b03925af19182156104ff576104bc926116ae575b5061161a565b806109c65f6116bc93611b3e565b5f6116a8565b6116689394506116db903d805f833e6109e58183611b3e565b939261165c565b7fb927fe5e000000000000000000000000000000000000000000000000000000005f523360045260245ffd5b346102255760203660031901126102255760043577ffffffffffffffffffffffffffffffffffffffffffffffff811680910361022557604051907f35567e1a00000000000000000000000000000000000000000000000000000000825230600483015260248201526020816044816f71727de22e5e9d8baf0edac6f37da0325afa80156104ff576104bc915f916117b057506040519081529081906020820190565b6117c9915060203d6020116104f8576104ea8183611b3e565b5f6104ab565b6117d836611538565b906117f46f71727de22e5e9d8baf0edac6f37da0323314611c73565b6001600160a01b0361181a6001600160a01b035f5160206149d85f395f51905f52541690565b168061182a575061002592612811565b90916040519263d68f602560e01b84525f848061184c36343360048501612175565b038183875af19384156104ff575f9461186c575b5061097d929394612811565b61097d939450611885903d805f833e6109e58183611b3e565b9392611860565b34610225576040366003190112610225576004356118a981610264565b6024359060016001600160a01b038216141580611976575b610c4b578115610c2357906118d581613ea5565b611900610b2d5f946001600160a01b03165f525f5160206149f85f395f51905f5260205260405f2090565b6001600160a01b038116801515908161196a575b5080611961575b15610baf57610ba3610b2d8261193861195b94610b7289886137be565b6001600160a01b03165f525f5160206149f85f395f51905f5260205260405f2090565b92611900565b5082841061191b565b6001915014155f611914565b50611983610c738261355b565b6118c1565b6060366003190112610225576004356119a081610264565b6024359067ffffffffffffffff8211610225573660238301121561022557816004013567ffffffffffffffff8111610225573660248260051b85010111610225576044359160ff83168303610225576024610025940190612924565b3461022557602036600319011261022557602061030c600435612a54565b906014116102255790601490565b909291928360141161022557831161022557601401916013190190565b906004116102255790600490565b909291928360041161022557831161022557600401916003190190565b909291928360051161022557831161022557600501916004190190565b90939293848311610225578411610225578101920390565b356bffffffffffffffffffffffff19811692919060148210611ac5575050565b6bffffffffffffffffffffffff1960149290920360031b82901b16169150565b15611aed5750565b6001600160a01b039063342cf00f60e11b5f521660045260245ffd5b634e487b7160e01b5f52604160045260245ffd5b6040810190811067ffffffffffffffff821117611b3957604052565b611b09565b90601f8019910116810190811067ffffffffffffffff821117611b3957604052565b90816020910312610225575161102081610697565b908060209392818452848401375f828201840152601f01601f1916010190565b61102094926001600160a01b0360609316825260208201528160408201520191611b75565b6040513d5f823e3d90fd5b6020916001600160a01b0391611c02611c239580611bec611be68287611a1a565b90611aa5565b60601c94611bfd866104608161351b565b611a28565b93909160405196879586948593637aa8f17760e11b85523360048601611b95565b0392165afa5f9181611c42575b5061102057506001600160e01b031990565b611c6591925060203d602011611c6c575b611c5d8183611b3e565b810190611b60565b905f611c30565b503d611c53565b15611c7a57565b7fac52ccbe000000000000000000000000000000000000000000000000000000005f5260045ffd5b6040519061028061012083611b3e565b60405190610280604083611b3e565b67ffffffffffffffff8111611b3957601f01601f191660200190565b60405190611cec606083611b3e565b602482527f65787573000000000000000000000000000000000000000000000000000000006040837f5745523a2076616c6964617465557365724f7020656e7465726564206174206e60208201520152565b60405190611d4d604083611b3e565b601282527f5745523a2076616c696461746f722069732000000000000000000000000000006020830152565b90816020910312610225575190565b9035601e198236030181121561022557016020813591019167ffffffffffffffff821161022557813603831361022557565b61102091611dd881611dcb84610275565b6001600160a01b03169052565b60208201356020820152611e6e611e62611e29611e0e611dfb6040870187611d88565b6101206040880152610120870191611b75565b611e1b6060870187611d88565b908683036060880152611b75565b6080850135608085015260a085013560a085015260c085013560c0850152611e5460e0860186611d88565b9085830360e0870152611b75565b92610100810190611d88565b91610100818503910152611b75565b929190611e94602091604086526040860190611dba565b930152565b929192611ea582611cc1565b91611eb36040519384611b3e565b829481845281830111610225578281602093845f960137010152565b9080601f830112156102255781602061102093359101611e99565b9190916101208184031261022557611f00611ca2565b92611f0a82610275565b845260208201356020850152604082013567ffffffffffffffff81116102255781611f36918401611ecf565b6040850152606082013567ffffffffffffffff81116102255781611f5b918401611ecf565b60608501526080820135608085015260a082013560a085015260c082013560c085015260e082013567ffffffffffffffff81116102255781611f9e918401611ecf565b60e085015261010082013567ffffffffffffffff811161022557611fc29201611ecf565b610100830152565b903590601e1981360301821215610225570180359067ffffffffffffffff82116102255760200191813603831361022557565b929190611e94602091604086526120206040870182516001600160a01b03169052565b82810151606087015261010061209761206361204d604085015161012060808c01526101608b0190610cc7565b60608501518a8203603f190160a08c0152610cc7565b608084015160c08a015260a084015160e08a015260c0840151838a015260e0840151603f198a8303016101208b0152610cc7565b910151868203603f1901610140880152610cc7565b9190916040818403126102255780356120c481610264565b92602082013567ffffffffffffffff8111610225576110209201611ecf565b3d1561210d573d906120f482611cc1565b916121026040519384611b3e565b82523d5f602084013e565b606090565b6020818303126102255780519067ffffffffffffffff8211610225570181601f820112156102255780519061214682611cc1565b926121546040519485611b3e565b8284526020838301011161022557815f9260208093018386015e8301015290565b61102093926001600160a01b03606093168252602082015281604082015201905f611b75565b156121a257565b7fc970156c000000000000000000000000000000000000000000000000000000005f5260045ffd5b9190916001600160a01b038116906121e382151561219b565b6121ef813b151561219b565b3055307f000000000000000000000000000000000000000000000000000000000000000014610a55576f71727de22e5e9d8baf0edac6f37da032331480156122eb575b61223b90611c73565b6352d1902d6001527f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc602060016004601d855afa51036122dd57807fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b5f80a281817f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc556122c757505050565b815f926040519485378338925af4156108b15750565b6355299b496001526004601dfd5b50333014612232565b6123016060820182611fca565b80600411610225576040515f9283929060031982019060040183378101826003198201528160031991030190305af46123386120e3565b901561238e577fd3fddfd1276d1cc278f10907710a44474a32f917b2fcfa198f46ca7689215e2f9161238961237b92604051938493604085526040850190611dba565b908382036020850152610cc7565b0390a1565b7facfdb444000000000000000000000000000000000000000000000000000000005f5260045ffd5b156123be5750565b6001600160a01b0390635f300b3960e11b5f52600480521660245260445ffd5b156123e7575050565b6001600160a01b039250635f300b3960e11b5f526004521660245260445ffd5b92919092612421848261241c86868484612bb4565b6123de565b604080518281526001600160a01b03861660208201527f341347516a9de374859dfda710fa4828b2d48cb57d4fbe4c1149612b8e02276e9190a16001810361246d5750610280926133cb565b6002810361247f575061028092613256565b909190600381036125645750906125609261252c61255b936125246040516124a681611b1d565b5f81525f60208201526124c56106cd6124bf8589611a45565b90612b7e565b8151815460209093015174ff000000000000000000000000000000000000000060589190911c167fffffffffffffffffffffff0000000000000000000000000000000000000000009093166001600160a01b0390911617919091179055565b805a94611a53565b939061254d604051958692638a91b0e360e01b6020850152602484016131f9565b03601f198101855284611b3e565b6144f3565b5050565b90919060041461257357505050565b6102809261320a565b634e487b7160e01b5f52601160045260245ffd5b906201518082018092116125a057565b61257c565b919082018092116125a057565b60015f525f5160206149b85f395f51905f526020526125f07ffe44ceacbf4f03c6ac19f86826dd265fa9ec25125e8b1766c207f24cd3bc73c7610b2d565b6001600160a01b038116801515806126ab575b1561269d57602060049160405192838092636b10642d60e11b82525afa5f918161267d575b5061265e575b50610b2d612659916001600160a01b03165f525f5160206149b85f395f51905f5260205260405f2090565b6125f0565b636b10642d60e11b14612671575f61262e565b50636b10642d60e11b90565b61269691925060203d81116104f8576104ea8183611b3e565b905f612628565b50506001600160e01b031990565b506001811415612603565b91906126c13361359b565b8260081b926126d8816001600160f81b0319161590565b156126e957509061102092916138c8565b6001600160f81b03198116600160f81b0361270a57509061102092916137f8565b6001600160f81b0319808216036127f45750906127269161453e565b9091612730613715565b936001600160f81b0319811661276257509161274b9261457d565b612754826137ac565b5261275e816137ac565b5090565b6001600160f81b03198116600160f81b036127d85750818361278392614558565b61278c856137ac565b521561279757505090565b7f5bd4c60b4b38b664d8fb5944eb974e3d85083d79afe5ce934ccabcc913707c10916127d26127c5856137ac565b51604051938493846137d2565b0390a190565b6308c3ee0360e11b5f526001600160f81b03191660045260245ffd5b6001600160f81b031990632e5bf3f960e21b5f521660045260245ffd5b91908260081b9261282a816001600160f81b0319161590565b1561283b5750906102809291613a04565b6001600160f81b03198116600160f81b0361285c5750906102809291613972565b6001600160f81b0319808216036127f45750906128789161453e565b929091906001600160f81b031981166128a657505f9083604051938437838338925af4156108b15701604052565b9192916001600160f81b03198116600160f81b03612907575081836128ca92614558565b9290156128d657505050565b6123897f5bd4c60b4b38b664d8fb5944eb974e3d85083d79afe5ce934ccabcc913707c1093604051938493846137d2565b6001600160f81b0319906308c3ee0360e11b5f521660045260245ffd5b6001600160a01b03909392936f71727de22e5e9d8baf0edac6f37da03233148015612a4b575b61295390611c73565b1692836001600160a01b03195f5416175f5583612994575b5050507ff98c8404c5b1bfef2e6ba9233c6e88845aedfd36eea8b192725d8c199571cf325f80a2565b833b1561022557604080517ff05c04e100000000000000000000000000000000000000000000000000000000815260ff9094166004850152602484015260448301819052829160648301915f5b818110612a1d575050509080825f9350038183865af180156104ff57612a09575b808061296b565b806109c65f612a1793611b3e565b5f612a02565b919350916020806001926001600160a01b038735612a3a81610264565b1681520194019101918493926129e1565b5033301461294a565b60018103612a625750600190565b60028103612a705750600190565b60038103612a7e5750600190565b60048103612a8c5750600190565b612a9557600190565b5f90565b906001600160a01b03612ac06001600160a01b035f5160206149d85f395f51905f52541690565b169182612ad3576110209192505f613ad5565b6040519063d68f602560e01b82525f8280612af336343360048501612175565b038183885af19182156104ff575f92612b5e575b50612b12905f613ad5565b92803b1561022557612b3e5f92918392604051948580948193630b9dfbed60e11b83526004830161100f565b03925af180156104ff57612b50575b50565b806109c65f61028093611b3e565b612b12919250612b77903d805f833e6109e58183611b3e565b9190612b07565b919091356001600160e01b031981169260048110612b9a575050565b6001600160e01b0319929350829060040360031b1b161690565b92909160018403612bcb575050611020915061351b565b60028403612bdf575050611020915061355b565b60038403612c0e57611020935060048210612c0657612c01916124bf91611a45565b613c42565b50505f613c42565b5050906004145f14612c3a575f5160206149d85f395f51905f52546001600160a01b0391821691161490565b505f90565b612c85612c93610280926040519283917f41304fac0000000000000000000000000000000000000000000000000000000060208401526020602484018181520190610cc7565b03601f198101835282611b3e565b613c8e565b612c93612ce891610280936001600160a01b036040519485937f319af333000000000000000000000000000000000000000000000000000000006020860152604060248601526064850190610cc7565b9116604483015203601f198101835282611b3e565b9290803560601c601482013591603481013560e01c91612e1a610c736038840193612d40868201998281600460388e968188013560e01c80980103010191611a8d565b9a909a99603c605b604051612d56608082611b3e565b8181527f70486173682c6279746573333220696e69744461746148617368290000000000606060208301927f4d6f64756c65456e61626c654d6f64652861646472657373206d6f64756c652c84527f75696e74323536206d6f64756c65547970652c6279746573333220757365724f604082015201522091612dd9368b8b611e99565b6020815191012060405194602086019485528960408701528c6060870152608086015260a085015260a08452612e1060c085611b3e565b0191519020613ca8565b612e27576102809361306d565b7f46fdc333000000000000000000000000000000000000000000000000000000005f5260045ffd5b60015f8190525f5160206149b85f395f51905f526020527ffe44ceacbf4f03c6ac19f86826dd265fa9ec25125e8b1766c207f24cd3bc73c7546001600160a01b0316141580612e9b5790565b5060015f525f5160206149b85f395f51905f526020527ffe44ceacbf4f03c6ac19f86826dd265fa9ec25125e8b1766c207f24cd3bc73c7546001600160a01b0316151590565b7f0000000000000000000000000000000000000000000000000000000000000000467f000000000000000000000000000000000000000000000000000000000000000014307f0000000000000000000000000000000000000000000000000000000000000000141615612f6c575b6719010000000000005f52601a52603a526042601820905f603a52565b50612ff460a06040517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f81527f000000000000000000000000000000000000000000000000000000000000000060208201527f000000000000000000000000000000000000000000000000000000000000000060408201524660608201523060808201522090565b612f4f565b604051613007604082611b3e565b600581527f4e65787573000000000000000000000000000000000000000000000000000000602082015290604051613040604082611b3e565b600581527f312e302e30000000000000000000000000000000000000000000000000000000602082015290565b9291906001600160a01b036130966001600160a01b035f5160206149d85f395f51905f52541690565b16806130a6575061028093613135565b916040939193519363d68f602560e01b85525f85806130ca36343360048501612175565b038183885af19485156104ff575f95613115575b506130ea939495613135565b803b1561022557612b3e5f92918392604051948580948193630b9dfbed60e11b83526004830161100f565b6130ea94955061312e903d805f833e6109e58183611b3e565b94936130de565b939291906001600160a01b038116156131d1576001850361315b5761028093945061442f565b6002850361316e576102809394506143ac565b600385036131815761028093945061414f565b600485036131945761028093945061400e565b846131a457610280939450613f1a565b7f098312d2000000000000000000000000000000000000000000000000000000005f52600485905260245ffd5b7f5316c18d000000000000000000000000000000000000000000000000000000005f5260045ffd5b916020611020938181520191611b75565b5f5160206149d85f395f51905f5280546001600160a01b0319169055612560929061255b5a9261254d604051958692638a91b0e360e01b60208501526020602485018181520191611b75565b9061326c906001600160a01b03938101906120ac565b92166001600160a01b038216801580156133c1575b6133ae576001600160a01b036132b5835f5160206149f85f395f51905f52906001600160a01b03165f5260205260405f2090565b5416036133925791816133366125609461331b6132f6610b2d61254d975f5160206149f85f395f51905f52906001600160a01b03165f5260205260405f2090565b915f5160206149f85f395f51905f52906001600160a01b03165f5260205260405f2090565b906001600160a01b03166001600160a01b0319825416179055565b613371613361825f5160206149f85f395f51905f52906001600160a01b03165f5260205260405f2090565b6001600160a01b03198154169055565b61255b5a92604051948591638a91b0e360e01b60208401526024830161100f565b637c84ecfb60e01b5f526001600160a01b03821660045260245ffd5b50637c84ecfb60e01b5f5260045260245ffd5b5060018114613281565b906133e1906001600160a01b03938101906120ac565b92166001600160a01b03821680158015613511575b6133ae576001600160a01b0361342a835f5160206149b85f395f51905f52906001600160a01b03165f5260205260405f2090565b541603613392576134889061331b613463610b2d855f5160206149b85f395f51905f52906001600160a01b03165f5260205260405f2090565b915f5160206149b85f395f51905f52906001600160a01b03165f5260205260405f2090565b6134b3613361825f5160206149b85f395f51905f52906001600160a01b03165f5260205260405f2090565b6134bb612e4f565b156134e9576125609161254d9161255b5a92604051948591638a91b0e360e01b60208401526024830161100f565b7fcc319d84000000000000000000000000000000000000000000000000000000005f5260045ffd5b50600181146133f6565b6001600160a01b031680600114159081613533575090565b90505f525f5160206149b85f395f51905f526020526001600160a01b0360405f205416151590565b6001600160a01b031680600114159081613573575090565b90505f525f5160206149f85f395f51905f526020526001600160a01b0360405f205416151590565b6001600160a01b035f541690816135b0575050565b813b15610225576001600160a01b0360445f9260405194859384926396fb721760e01b8452166004830152600260248301525afa80156104ff576135f15750565b5f61028091611b3e565b6001600160a01b035f54169081613610575050565b813b15610225576001600160a01b0360445f9260405194859384926396fb721760e01b8452166004830152600460248301525afa80156104ff576135f15750565b6001600160a01b035f54169081613666575050565b813b15610225576001600160a01b0360445f9260405194859384926396fb721760e01b8452166004830152600360248301525afa80156104ff576135f15750565b6001600160a01b035f541690816136bc575050565b813b15610225576001600160a01b0360445f9260405194859384926396fb721760e01b8452166004830152600160248301525afa80156104ff576135f15750565b67ffffffffffffffff8111611b395760051b60200190565b604080519091906137268382611b3e565b6001815291601f1901825f5b82811061373e57505050565b806060602080938501015201613732565b90613759826136fd565b6137666040519182611b3e565b8281528092613777601f19916136fd565b01905f5b82811061378757505050565b80606060208093850101520161377b565b634e487b7160e01b5f52603260045260245ffd5b8051156137b95760200190565b613798565b80518210156137b95760209160051b010190565b9161102093916137ea91604085526040850191611b75565b916020818403910152610cc7565b905080350160208101903591613816816001600160f81b0319161590565b1561388857506138258261374f565b915f5b8181106138355750505090565b8061386c61384660019385876145b0565b803561385181610264565b6138646020830135926040810190611fca565b9290916146d1565b61387682876137be565b5261388181866137be565b5001613828565b9291906001600160f81b03198416600160f81b036138ab576110209293506145d2565b6001600160f81b0319846308c3ee0360e11b5f521660045260245ffd5b906138d591939293614682565b9190926138e0613715565b956001600160f81b0319811661390f5750906138fc93916146d1565b613905836137ac565b52612b4d826137ac565b6001600160f81b03198116600160f81b036129075750836139319284926146aa565b61393a866137ac565b5215613944575050565b7fb5282692b8c578af7fb880895d599035496b5e64d1f14bf428a1ed3bc406f662916123896127c5866137ac565b90508035019060208201913590613991816001600160f81b0319161590565b156139e257505f5b8181106139a557505050565b806139dc6139b660019385876145b0565b80356139c181610264565b6139d46020830135926040810190611fca565b9290916146fe565b01613999565b92916001600160f81b03198416600160f81b036138ab57612b4d9293506145d2565b6001600160f81b031991613a1791614682565b909490939192911680613a3057509061028093916146fe565b600160f81b8103613a85575083613a489284926146aa565b929015613a5457505050565b6123897fb5282692b8c578af7fb880895d599035496b5e64d1f14bf428a1ed3bc406f66293604051938493846137d2565b6308c3ee0360e11b5f5260045260245ffd5b15613a9f5750565b6001600160e01b0319907f08c63e27000000000000000000000000000000000000000000000000000000005f521660045260245ffd5b505060605f905f35906001600160e01b03198216613b24816001600160e01b0319165f527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f0260205260405f2090565b5493613b446001600160a01b0386169560581b6001600160f81b03191690565b936001600160a01b03861615613bf2575050506001600160f81b03198216607f60f91b14905015613ba057505f8091613b7b61471a565b90602082519201905afa90613b8e6120e3565b915b15613b9757565b50602081519101fd5b6001600160f81b03198116613bd657505f8091613bbb61471a565b906020825192019034905af190613bd06120e3565b91613b90565b632e5bf3f960e21b5f526001600160f81b03191660045260245ffd5b9193509194935060e01c63150b7a0263bc197c81821463f23a6e61831417911417613c22575b9061028091613a97565b506040805160048152602081018390526024810190915292506001613c18565b6001600160a01b03613c8681926001600160e01b0319165f527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f0260205260405f2090565b541691161490565b5f80916020815191016a636f6e736f6c652e6c6f675afa50565b91613cbf613cb9611be68385611a1a565b60601c90565b92613ccc610c738561351b565b613d7b5792602092613cf3836001600160a01b0394613ced613d1498612ee1565b93611a28565b93909160405196879586948593637aa8f17760e11b85523060048601611b95565b0392165afa5f9181613d5a575b50613d2b57505f90565b6001600160e01b0319167f1626ba7e000000000000000000000000000000000000000000000000000000001490565b613d7491925060203d602011611c6c57611c5d8183611b3e565b905f613d21565b63342cf00f60e11b5f526001600160a01b03841660045260245ffd5b60015f525f5160206149f85f395f51905f526020527fbdfeb076d903611fa58576955630d640569633049bcf40ad9c22db9251b54a13546001600160a01b0316613e0a5760015f525f5160206149f85f395f51905f5260205261028060405f2060016001600160a01b0319825416179055565b7f53c85e66000000000000000000000000000000000000000000000000000000005f5260045ffd5b60015f525f5160206149b85f395f51905f526020527ffe44ceacbf4f03c6ac19f86826dd265fa9ec25125e8b1766c207f24cd3bc73c7546001600160a01b0316613e0a5760015f525f5160206149b85f395f51905f5260205261028060405f2060016001600160a01b0319825416179055565b90613eaf826136fd565b613ebc6040519182611b3e565b8281528092613ecd601f19916136fd565b0190602036910137565b5f1981146125a05760010190565b5f198101919082116125a057565b91908110156137b95760051b0190565b908210156137b9576102ec9160051b810190611fca565b9150613f3c908035810191602083019235916020810135019060208201913590565b929391808403613fe6575f5b818110613f5757505050505050565b80613f656001928489613ef3565b35828103613f895750613f83613f7c828887613f03565b908761442f565b01613f48565b60028103613fac5750613fa7613fa0828887613f03565b90876143ac565b613f83565b60038103613fca5750613fa7613fc3828887613f03565b908761414f565b600403613fa757613fa7613fdf828887613f03565b908761400e565b7fb4fa3fb3000000000000000000000000000000000000000000000000000000005f5260045ffd5b91614018836135fb565b60405163ecd0596160e01b81526004808201526001600160a01b0384169390602081602481885afa9081156104ff575f916140cb575b50156140b85761408e906140896140796001600160a01b035f5160206149d85f395f51905f52541690565b6001600160a01b03811615614112565b6144b2565b823b1561022557612b3e925f92836040518096819582946306d61fe760e41b8452600484016131f9565b6369c9a24560e11b5f526004805260245ffd5b6140ed915060203d6020116140f3575b6140e58183611b3e565b8101906140fa565b5f61404e565b503d6140db565b90816020910312610225575180151581036102255790565b1561411a5750565b6001600160a01b03907f741cbe03000000000000000000000000000000000000000000000000000000005f521660045260245ffd5b909161415a82613651565b60405163ecd0596160e01b8152600360048201526001600160a01b0383169290602081602481875afa9081156104ff575f916142e2575b50156142ce576124c5846106cd61420361044686806141e16141d46141c6836141c06124bf6142729e8c611a45565b99614301565b356001600160f81b03191690565b6001600160f81b03191690565b9a6001600160f81b03198c161580156142b7575b6141fe90614310565b611a70565b966142326001600160e01b031984166306d61fe760e41b81149081156142a6575b811561429d575b501561433f565b61424783614242610c7382614747565b61436e565b614261614252611cb2565b6001600160a01b039096168652565b6001600160f81b0319166020850152565b803b1561022557612b3e5f929183926040519485809481936306d61fe760e41b83526004830161100f565b9050155f61422b565b638a91b0e360e01b81149150614224565b50607f60f91b6001600160f81b03198d16146141f5565b6369c9a24560e11b5f52600360045260245ffd5b6142fb915060203d6020116140f3576140e58183611b3e565b5f614191565b90600410156137b95760040190565b1561431757565b7f867a1dcf000000000000000000000000000000000000000000000000000000005f5260045ffd5b1561434657565b7fc001660b000000000000000000000000000000000000000000000000000000005f5260045ffd5b156143765750565b6001600160e01b0319907fa56a04dd000000000000000000000000000000000000000000000000000000005f521660045260245ffd5b916143b68361359b565b60405163ecd0596160e01b8152600260048201526001600160a01b0384169390602081602481885afa9081156104ff575f91614410575b50156143fc5761408e90614791565b6369c9a24560e11b5f52600260045260245ffd5b614429915060203d6020116140f3576140e58183611b3e565b5f6143ed565b91614439836136a7565b60405163ecd0596160e01b8152600160048201526001600160a01b0384169390602081602481885afa9081156104ff575f91614493575b501561447f5761408e906148c7565b6369c9a24560e11b5f52600160045260245ffd5b6144ac915060203d6020116140f3576140e58183611b3e565b5f614470565b6001600160a01b0361028091166001600160a01b03166001600160a01b03195f5160206149d85f395f51905f525416175f5160206149d85f395f51905f5255565b604051939260209291906145078487611b3e565b5f86525f928380936020890196601f190136883760208451940192f1903d9081614536575b5f908286523e9190565b5f915061452c565b918160141161022557823560601c92601401916013190190565b5f9192806040519485378338925af4913d82523d5f602084013e60203d830101604052565b5f919392806040519586378438925af4156145a7573d82523d5f602084013e60203d830101604052565b503d5f823e3d90fd5b91908110156137b95760051b81013590605e1981360301821215610225570190565b9190916145de8361374f565b925f5b8181106145ed57505050565b806145fb60019284866145b0565b80359061460782610264565b6146266020820135604083019361461e8585611fca565b9290916146aa565b614630858b6137be565b521561463f575b5050016145e1565b7fb5282692b8c578af7fb880895d599035496b5e64d1f14bf428a1ed3bc406f6629161466a91611fca565b906146786127c5858b6137be565b0390a15f80614637565b908060141161022557813560601c926034821061022557601483013592603401916033190190565b905f928491604051958692833738935af1913d82523d5f602084013e60203d830101604052565b90925f92819594604051968792833738935af1156145a7573d82523d5f602084013e60203d830101604052565b8380935f93604051958692833738935af1156108b15701604052565b60405190602036830101604052816014360181525f602036920137604051601481016040523360601b9052565b61478a6001600160a01b03916001600160e01b0319165f527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f0260205260405f2090565b5416151590565b6001600160a01b038116801580156148bd575b6148ab575f9081525f5160206149f85f395f51905f5260205260409020546001600160a01b03166148775760015f525f5160206149f85f395f51905f526020526102809061483c6148147fbdfeb076d903611fa58576955630d640569633049bcf40ad9c22db9251b54a13610b2d565b61331b835f5160206149f85f395f51905f52906001600160a01b03165f5260205260405f2090565b60015f525f5160206149f85f395f51905f526020527fbdfeb076d903611fa58576955630d640569633049bcf40ad9c22db9251b54a1361331b565b7f40d3d1a4000000000000000000000000000000000000000000000000000000005f526001600160a01b031660045260245ffd5b637c84ecfb60e01b5f5260045260245ffd5b50600181146147a4565b6001600160a01b038116801580156149ad575b6148ab575f9081525f5160206149b85f395f51905f5260205260409020546001600160a01b03166148775760015f525f5160206149b85f395f51905f526020526102809061497261494a7ffe44ceacbf4f03c6ac19f86826dd265fa9ec25125e8b1766c207f24cd3bc73c7610b2d565b61331b835f5160206149b85f395f51905f52906001600160a01b03165f5260205260405f2090565b60015f525f5160206149b85f395f51905f526020527ffe44ceacbf4f03c6ac19f86826dd265fa9ec25125e8b1766c207f24cd3bc73c761331b565b50600181146148da56fe0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f000bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f030bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f01a2646970667358221220fe97787868a39a6947757fb4df4d944331b36dec158c8a79dec7172695e8743264736f6c634300081b0033",
  },
  K1Validator: {
    address: "0x00000004171351c442B202678c48D8AB5B321E8f",
    // prettier-ignore
    abi: [
      {
        "inputs": [],
        "name": "InvalidDataLength",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "ModuleAlreadyInitialized",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "NewOwnerIsContract",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "NoOwnerProvided",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "OwnerCannotBeZeroAddress",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "ZeroAddressNotAllowed",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "sender",
            "type": "address"
          }
        ],
        "name": "addSafeSender",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "sender",
            "type": "address"
          },
          {
            "internalType": "ExecutionMode",
            "name": "mode",
            "type": "bytes32"
          },
          {
            "internalType": "bytes",
            "name": "executionCalldata",
            "type": "bytes"
          }
        ],
        "name": "execute",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "smartAccount",
            "type": "address"
          }
        ],
        "name": "isInitialized",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "typeId",
            "type": "uint256"
          }
        ],
        "name": "isModuleType",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "pure",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "sender",
            "type": "address"
          },
          {
            "internalType": "bytes32",
            "name": "hash",
            "type": "bytes32"
          },
          {
            "internalType": "bytes",
            "name": "signature",
            "type": "bytes"
          }
        ],
        "name": "isValidSignatureWithSender",
        "outputs": [
          {
            "internalType": "bytes4",
            "name": "sigValidationResult",
            "type": "bytes4"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "pure",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "name": "onInstall",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes",
            "name": "",
            "type": "bytes"
          }
        ],
        "name": "onUninstall",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "sender",
            "type": "address"
          }
        ],
        "name": "removeSafeSender",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "smartAccountOwners",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "supportsNestedTypedDataSign",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "result",
            "type": "bytes32"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "hash",
            "type": "bytes32"
          },
          {
            "internalType": "bytes",
            "name": "sig",
            "type": "bytes"
          },
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "name": "validateSignatureWithData",
        "outputs": [
          {
            "internalType": "bool",
            "name": "validSig",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "sender",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "nonce",
                "type": "uint256"
              },
              {
                "internalType": "bytes",
                "name": "initCode",
                "type": "bytes"
              },
              {
                "internalType": "bytes",
                "name": "callData",
                "type": "bytes"
              },
              {
                "internalType": "bytes32",
                "name": "accountGasLimits",
                "type": "bytes32"
              },
              {
                "internalType": "uint256",
                "name": "preVerificationGas",
                "type": "uint256"
              },
              {
                "internalType": "bytes32",
                "name": "gasFees",
                "type": "bytes32"
              },
              {
                "internalType": "bytes",
                "name": "paymasterAndData",
                "type": "bytes"
              },
              {
                "internalType": "bytes",
                "name": "signature",
                "type": "bytes"
              }
            ],
            "internalType": "struct PackedUserOperation",
            "name": "userOp",
            "type": "tuple"
          },
          {
            "internalType": "bytes32",
            "name": "userOpHash",
            "type": "bytes32"
          }
        ],
        "name": "validateUserOp",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "version",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "pure",
        "type": "function"
      }
    ],
    bytecode:
      "0x60806040526004361015610011575f80fd5b5f3560e01c806306fdde03146101045780632e5b63a6146100ff57806354fd4d50146100fa5780635c81ca68146100f55780636d61fe70146100f05780638a91b0e3146100eb578063940d3840146100e657806397003203146100e1578063d60b347f146100dc578063d620c85a146100d7578063d80892cd146100d2578063e824b568146100cd578063ecd05961146100c8578063f2fde38b146100c35763f551e2ee146100be575f80fd5b6108fa565b610864565b61082c565b6107fd565b6106a2565b610668565b61061a565b6104ee565b61043d565b6103ba565b6102cc565b61023e565b6101e7565b6101a3565b610133565b602060409281835280519182918282860152018484015e5f828201840152601f01601f1916010190565b3461018e575f36600319011261018e5761018a604051610154604082610c50565b600b81527f4b3156616c696461746f72000000000000000000000000000000000000000000602082015260405191829182610109565b0390f35b5f80fd5b6001600160a01b0381160361018e57565b3461018e57602036600319011261018e576001600160a01b036004356101c881610192565b165f525f60205260206001600160a01b0360405f205416604051908152f35b3461018e575f36600319011261018e5761018a604051610208604082610c50565b600581527f312e302e30000000000000000000000000000000000000000000000000000000602082015260405191829182610109565b3461018e57602036600319011261018e5761026d6001600160a01b0360043561026681610192565b163361109d565b005b9181601f8401121561018e5782359167ffffffffffffffff831161018e576020838186019501011161018e57565b602060031982011261018e576004359067ffffffffffffffff821161018e576102c89160040161026f565b9091565b3461018e576102da3661029d565b90816102e257005b610308336001600160a01b03165f525f6020526001600160a01b0360405f205416151590565b610392578160141161018e57610374813560601c610327811515610cf0565b610332813b15610d1f565b61034c336001600160a01b03165f525f60205260405f2090565b906001600160a01b031673ffffffffffffffffffffffffffffffffffffffff19825416179055565b6014821161037e57005b8161026d9261038c92610c93565b90610f0e565b7fe72ce85e000000000000000000000000000000000000000000000000000000005f5260045ffd5b3461018e576103c83661029d565b5050335f525f60205260405f2073ffffffffffffffffffffffffffffffffffffffff198154169055335f52600160205260405f205460015b8181111561040a57005b8082038281116104385761042161042791336116f5565b336111ba565b505f19811461043857600101610400565b610efa565b3461018e57606036600319011261018e5760043560243567ffffffffffffffff811161018e5761047190369060040161026f565b60443567ffffffffffffffff811161018e5761049190369060040161026f565b601481949294036104c65760141161018e5761018a936104b4933560601c610f82565b60405190151581529081906020820190565b7fdfe93090000000000000000000000000000000000000000000000000000000005f5260045ffd5b3461018e57604036600319011261018e5760043567ffffffffffffffff811161018e5780360361012060031982011261018e576024359061058b604051610536606082610c50565b602b81527f5745523a2076616c6964617465557365724f7020656e7465726564206174206b60208201527f312076616c696461746f72000000000000000000000000000000000000000000604082015261103e565b6001600160a01b0383600401356105a181610192565b165f525f6020526001600160a01b0360405f20541692610104810135916022190182121561018e57019060048201359167ffffffffffffffff831161018e5760240190823603821361018e576105f693610f82565b156106105761018a5f5b6040519081529081906020820190565b61018a6001610600565b3461018e57602036600319011261018e57602061065e60043561063c81610192565b6001600160a01b03165f525f6020526001600160a01b0360405f205416151590565b6040519015158152f35b3461018e575f36600319011261018e5760206040517fd620c85a000000000000000000000000000000000000000000000000000000008152f35b606036600319011261018e576004356106ba81610192565b60243560443567ffffffffffffffff811161018e576106dd90369060040161026f565b90926106ef6106ea610d4e565b61103e565b6001600160a01b03610721610714836001600160a01b03165f525f60205260405f2090565b546001600160a01b031690565b16330361079e5761076d935f6001600160a01b038195604051978896879586937fd691c96400000000000000000000000000000000000000000000000000000000855260048501610eaa565b0393165af180156107995761077e57005b61026d903d805f833e6107918183610c50565b810190610dfd565b610ed7565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f5745523a20696e76616c6964206d73672e73656e6465720000000000000000006044820152606490fd5b3461018e57602036600319011261018e5761026d6001600160a01b0360043561082581610192565b16336111ba565b3461018e57602036600319011261018e57602060043560018114908115610859575b506040519015158152f35b60029150145f61084e565b3461018e57602036600319011261018e5760043561088181610192565b6001600160a01b038116156108d2578061089f61026d923b15610d1f565b335f525f60205260405f20906001600160a01b031673ffffffffffffffffffffffffffffffffffffffff19825416179055565b7f8579befe000000000000000000000000000000000000000000000000000000005f5260045ffd5b3461018e57606036600319011261018e5760043561091781610192565b6024359060443567ffffffffffffffff811161018e5761093b90369060040161026f565b90808261ffff60605119046164920290601f19908301013514610c27575b506001600160a01b035f93166dd9ecebf3c23529de49815dac1c4c8114908115610c1d575b8115610c0c575b50610bf9575b82156109f3575b61018a9383156109e1575b505050604051918291155f03631626ba7e1760e01b829190917fffffffff000000000000000000000000000000000000000000000000000000006020820193169052565b6109eb9350611280565b5f808061099d565b91508281610a0033611564565b93604051600119838301013560f01c968760420196881597600e8401600e8b860101988b8103948588019b6041198d01946119015f52604086602037831017816042601e201817610bb05750507f5479706564446174615369676e2800000000000000000000000000000000000085526001199099019990989760286f07fffffe0000000000000100000000008a848e8237515f1a1c91525b88515f1a60288114610aba5790651201000000016001921c17980197610a99565b50908481610b99989a6040899b9d61018a9f95607f969b9a9b7f20636f6e74656e74732c627974657331206669656c64732c737472696e67206e85527f616d652c737472696e672076657273696f6e2c75696e7432353620636861696e60208601527f49642c6164647265737320766572696679696e67436f6e74726163742c627974848601527f657333322073616c742c75696e743235365b5d20657874656e73696f6e7329006060860152878501378737010301852082526101208220604052600116604201601e209160411901935b60405215610ba157611410565b929350610992565b610bab9033611632565b611410565b935095979950505061018a9850610b99949650859291505f907f983e65e5148e570cd828ead231ee759a8d7958721a768f93bc4483ba005c32de5f5260205260405f2091610b8c565b9150610c06818385611410565b9161098b565b610c17915033611320565b5f610985565b338114915061097e565b6040810135018035925060200190505f610959565b634e487b7160e01b5f52604160045260245ffd5b90601f8019910116810190811067ffffffffffffffff821117610c7257604052565b610c3c565b67ffffffffffffffff8111610c7257601f01601f191660200190565b909291928360141161018e57831161018e57601401916013190190565b356bffffffffffffffffffffffff19811692919060148210610cd0575050565b6bffffffffffffffffffffffff1960149290920360031b82901b16169150565b15610cf757565b7fc81abf60000000000000000000000000000000000000000000000000000000005f5260045ffd5b15610d2657565b7f83e6a1cb000000000000000000000000000000000000000000000000000000005f5260045ffd5b60405190610d5d606083610c50565b602482527f61746f72000000000000000000000000000000000000000000000000000000006040837f5745523a206578656375746520656e7465726564206174206b312076616c696460208201520152565b67ffffffffffffffff8111610c725760051b60200190565b929192610dd382610c77565b91610de16040519384610c50565b82948184528183011161018e578281602093845f96015e010152565b60208183031261018e5780519067ffffffffffffffff821161018e570181601f8201121561018e57805190610e3182610daf565b92610e3f6040519485610c50565b82845260208085019360051b8301019181831161018e5760208101935b838510610e6b57505050505090565b845167ffffffffffffffff811161018e57820183603f8201121561018e57602091610e9f8583604086809601519101610dc7565b815201940193610e5c565b91926060938192845260406020850152816040850152848401375f828201840152601f01601f1916010190565b6040513d5f823e3d90fd5b6001600160a01b03610ef79216906001611124565b90565b634e487b7160e01b5f52601160045260245ffd5b905f5b601482048110610f2057505050565b806014029060148204810361043857600181019182821161043857826014029260148404036104385782811161018e5783831161018e57610f75610f6f60019483610f7b948901910390610cb0565b60601c90565b33610ee2565b5001610f11565b929190917f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0602083013511611036576001600160a01b039384610fcf610fc9368587611184565b86611372565b91169416841461102d5761101861101e926001600160a01b03946020527b19457468657265756d205369676e6564204d6573736167653a0a33325f52603c600420923691611184565b90611372565b1614611028575f90565b600190565b50505050600190565b505050505f90565b5f809160405161108a8161107c60208201947f41304fac00000000000000000000000000000000000000000000000000000000865260248301610109565b03601f198101835282610c50565b51906a636f6e736f6c652e6c6f675afa50565b815f52600180016020526110c58160405f20906001600160a01b03165f5260205260405f2090565b5461111e5780611118915f52600160205260405f20600181540190848260051b82015555805f52600160205260405f2054925f52600260205260405f20906001600160a01b03165f5260205260405f2090565b55600190565b50505f90565b9061113083828461134b565b61117d575f81815260208390526040902080546001908101600581901b830186905591829055611118939091945f520160205260405f20906001600160a01b03165f5260205260405f2090565b5050505f90565b92919261119082610c77565b9161119e6040519384610c50565b82948184528183011161018e578281602093845f960137010152565b90805f5260026020526111e18260405f20906001600160a01b03165f5260205260405f2090565b5491821561117d575f19830191838311610438575f828152600160205260409020545f19810191908211610438575f94848484611240956111189803611256575b50905061123191506001611762565b6002905f5260205260405f2090565b906001600160a01b03165f5260205260405f2090565b6112769261123161126c61124093856001611725565b8092856001611744565b555f808481611222565b9092915f933a1561129057505050565b90919293503a3a5260203a3a386d378edcd5b5b0a24f5342d8c1048561fffffa503a51156112c2575b610ef792611410565b60405192631626ba7e3a526d378edcd5b5b0a24f5342d8c1048560205260408052454561ffff011793845a106d378edcd5b5b0a24f5342d8c1048583141761131e57610ef7943a906064601c3a923090fa5060405292506112b9565bfe5b611345915f52600260205260405f20906001600160a01b03165f5260205260405f2090565b54151590565b600190611345935f520160205260405f20906001600160a01b03165f5260205260405f2090565b9190600190604051935f52602081015160405260408151146113d15760418151146113b45750506020604060805f805b5afa505f6060523d6060185191604052565b60805f602093604084606082960151841a875201516060526113a2565b60805f6020937f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff604080950151601b8160ff1c018752166060526113a2565b90610ef79291335f525f6020526001600160a01b0360405f205416610f82565b9080601f8301121561018e578151610ef792602001610dc7565b519061145582610192565b565b9080601f8301121561018e57815161146e81610daf565b9261147c6040519485610c50565b81845260208085019260051b82010192831161018e57602001905b8282106114a45750505090565b8151815260209182019101611497565b9060e08282031261018e5781517fff000000000000000000000000000000000000000000000000000000000000008116810361018e5792602083015167ffffffffffffffff811161018e578261150b918501611430565b92604081015167ffffffffffffffff811161018e578361152c918301611430565b9260608201519261153f6080840161144a565b9260a08101519260c082015167ffffffffffffffff811161018e57610ef79201611457565b905f6001600160a01b03926004604051809581936342580cb760e11b8352165afa8015610799575f925f5f5f905f925f945f966115f9575b50906001600160a01b03939291604051986101208a016040525f1a60f81b60408a015260208151910120606089015260208151910120608088015260a08701521660c085015260e08401526020815160051b910120610100830152565b9450505050506001600160a01b03935061162591503d805f833e61161d8183610c50565b8101906114b4565b959790949193919061159c565b5f6001600160a01b03916004604051809481936342580cb760e11b8352165afa9081156107995760a0915f915f5f915f936116d0575b50604051937f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f855260208151910120602085015260208151910120604084015260608301526080820152206719010000000000005f52601a52603a526042601820905f603a52565b925050506116e891503d805f833e61161d8183610c50565b509394509250905f611668565b5f52600160205260405f209081548110156117155760010160051b015490565b638277484f5f526020526024601cfd5b905f5260205260405f209081548110156117155760010160051b015490565b905f5260205260405f209081548110156117155760010160051b0155565b905f5260205260405f2080549081156117a6575f19820191808311610438578154831015611795575f9060051b82015555565b82638277484f5f526020526024601cfd5b505056fea2646970667358221220289a0b52cad564c17da6ba029a0295aa54883c598bb942619dc405648fafbe6064736f6c634300081b0033",
  },
  K1ValidatorFactory: {
    address: "0x00000bb19a3579F4D779215dEf97AFbd0e30DB55",
    // prettier-ignore
    abi: [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "implementation",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "factoryOwner",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "k1Validator",
              "type": "address"
            },
            {
              "internalType": "contract RegistryBootstrap",
              "name": "bootstrapper",
              "type": "address"
            },
            {
              "internalType": "contract IERC7484",
              "name": "registry",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [],
          "name": "AlreadyInitialized",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "InnerCallFailed",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "InvalidEntryPointAddress",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "NewOwnerIsZeroAddress",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "NoHandoverRequest",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "Unauthorized",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "ZeroAddressNotAllowed",
          "type": "error"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "index",
              "type": "uint256"
            }
          ],
          "name": "AccountCreated",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "pendingOwner",
              "type": "address"
            }
          ],
          "name": "OwnershipHandoverCanceled",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "pendingOwner",
              "type": "address"
            }
          ],
          "name": "OwnershipHandoverRequested",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "oldOwner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "OwnershipTransferred",
          "type": "event"
        },
        {
          "inputs": [],
          "name": "ACCOUNT_IMPLEMENTATION",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "BOOTSTRAPPER",
          "outputs": [
            {
              "internalType": "contract RegistryBootstrap",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "K1_VALIDATOR",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "REGISTRY",
          "outputs": [
            {
              "internalType": "contract IERC7484",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "epAddress",
              "type": "address"
            },
            {
              "internalType": "uint32",
              "name": "unstakeDelaySec",
              "type": "uint32"
            }
          ],
          "name": "addStake",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "cancelOwnershipHandover",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "pendingOwner",
              "type": "address"
            }
          ],
          "name": "completeOwnershipHandover",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "eoaOwner",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "index",
              "type": "uint256"
            },
            {
              "internalType": "address[]",
              "name": "attesters",
              "type": "address[]"
            },
            {
              "internalType": "uint8",
              "name": "threshold",
              "type": "uint8"
            }
          ],
          "name": "computeAccountAddress",
          "outputs": [
            {
              "internalType": "address payable",
              "name": "expectedAddress",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "eoaOwner",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "index",
              "type": "uint256"
            },
            {
              "internalType": "address[]",
              "name": "attesters",
              "type": "address[]"
            },
            {
              "internalType": "uint8",
              "name": "threshold",
              "type": "uint8"
            }
          ],
          "name": "createAccount",
          "outputs": [
            {
              "internalType": "address payable",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "owner",
          "outputs": [
            {
              "internalType": "address",
              "name": "result",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "pendingOwner",
              "type": "address"
            }
          ],
          "name": "ownershipHandoverExpiresAt",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "result",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "renounceOwnership",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "requestOwnershipHandover",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "transferOwnership",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "epAddress",
              "type": "address"
            }
          ],
          "name": "unlockStake",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "epAddress",
              "type": "address"
            },
            {
              "internalType": "address payable",
              "name": "withdrawAddress",
              "type": "address"
            }
          ],
          "name": "withdrawStake",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ],
    bytecode:
      // "0x6080806040526004361015610012575f80fd5b5f905f3560e01c90816306433b1b14610a88575080630d51f0b7146105e05780632569296214610595578063290ab98414610551578063322cc8ca1461045957806345171159146103e65780634a1ce5991461038457806354d1f13d1461033e57806367d2d1c9146102fa578063715018a6146102af5780638da5cb5b14610284578063b36f9705146101d4578063d0733b3b14610190578063f04e283e14610142578063f2fde38b146101035763fee81cf4146100ce575f80fd5b34610100576020366003190112610100576100e7610ac9565b9063389a75e1600c5252602080600c2054604051908152f35b80fd5b50602036600319011261010057610118610ac9565b610120610c91565b8060601b156101355761013290610cad565b80f35b637448fbae82526004601cfd5b50602036600319011261010057610157610ac9565b61015f610c91565b63389a75e1600c528082526020600c20805442116101835790826101329255610cad565b636f5e881883526004601cfd5b503461010057806003193601126101005760206040516001600160a01b037f0000000000000000000000006c77ddf87a1717465d29f8f16f44711eb0c839c0168152f35b5034610100576040366003190112610100576101ee610ac9565b90602435916001600160a01b038316809303610280576001600160a01b0390610215610c91565b168015610271578192813b1561026d57829160248392604051948593849263611d2e7560e11b845260048401525af18015610262576102515750f35b8161025b91610bf5565b6101005780f35b6040513d84823e3d90fd5b5050fd5b6391fdf19160e01b8252600482fd5b5080fd5b50346101005780600319360112610100576020638b78c6d819546001600160a01b0360405191168152f35b5080600319360112610100576102c3610c91565b80638b78c6d819547f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380638b78c6d8195580f35b503461010057806003193601126101005760206040516001600160a01b037f00000000000000000000000000000008c901d8871b6f6942de0b5d9ccf3873d3168152f35b50806003193601126101005763389a75e1600c52338152806020600c2055337ffa7b8eab7da67f412cc9575ed43464468f9bfbae89d1675917346ca6d8fe3c928280a280f35b5034610100576020366003190112610100576001600160a01b036103a6610ac9565b6103ae610c91565b168015610271578082913b156103e35781809160046040518094819363bb9fe6bf60e01b83525af18015610262576102515750f35b50fd5b506040366003190112610100576103fb610ac9565b906024359163ffffffff8316809303610280576001600160a01b039061041f610c91565b168015610271578192813b1561026d578290602460405180948193621cb65b60e51b8352600483015234905af18015610262576102515750f35b50346101005760209061049661048861047136610af3565b906040969496959295519586948a86019889610b6d565b03601f198101835282610bf5565b5190206040517fcc3735a920a3ca505d382bbc545af43d6000803e6038573d6000fd5b3d6000f36060527f5155f3363d3d373d3d363d7f360894a13ba1a3210667c828492db98dca3e207660405261600984527f000000000000000000000000000000039dfcad030719b07296710f045f0558f7601e5268603d3d8160223d3973600a52605f602120906040528260605260ff83536035523060601b60015260155260558120906035526001600160a01b0360405191168152f35b503461010057806003193601126101005760206040516001600160a01b037f000000000000000000000000000000039dfcad030719b07296710f045f0558f7168152f35b50806003193601126101005763389a75e1600c523381526202a30042016020600c2055337fdbf36a107da19e49527a7176a1babf963b4b0ff8cde35ee35d6cd8f1f9ac7e1d8280a280f35b506105ea36610af3565b93909491604051602081019061060881610488898b878b8a89610b6d565b519020905f95604051977fcc3735a920a3ca505d382bbc545af43d6000803e6038573d6000fd5b3d6000f36060527f5155f3363d3d373d3d363d7f360894a13ba1a3210667c828492db98dca3e20766040526160096020527f000000000000000000000000000000039dfcad030719b07296710f045f0558f7601e5268603d3d8160223d3973600a52605f60212060358a01523060581b895260ff89538360158a01526055892097341594893b15610a5f575050600193610a55575f388180348c5af115610a48575f610756995b80604052816060526bffffffffffffffffffffffff198760601b16602082015260148152610705603482610bf5565b604051809b8192638491599f60e01b83526001600160a01b037f00000000000000000000000000000004171351c442b202678c48d8ab5b321e8f166004840152604060248401526044830190610c6d565b0381736c77ddf87a1717465d29f8f16f44711eb0c839c05af4988915610913575f99610990575b50916020989192896107c26040519b8c956341bdc49760e11b8752608060048801526001600160a01b0381511660848801520151604060a487015260c4860190610c6d565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031660248601528481036003190160448601528281520191905f5b81811061096257505050819060ff5f9416606483015203816001600160a01b037f00000000000000000000000000000008c901d8871b6f6942de0b5d9ccf3873d3165afa958615610913575f96610922575b5015610872575b6020846001600160a01b0360405191168152f35b6001600160a01b03841690813b1561091e575f6108ab9660405180988192634b6a141960e01b8352602060048401526024830190610c6d565b038183865af1958615610913576020966108f7575b506001600160a01b037f33310a89c32d8cc00057ad6ef6274d2f8fe22389a992cf89983e09fc84f6cfff91169280a45f808061085e565b6109049193505f90610bf5565b5f916001600160a01b036108c0565b6040513d5f823e3d90fd5b5f80fd5b9095503d805f833e6109348183610bf5565b810160208282031261091e57815167ffffffffffffffff811161091e5761095b9201610c17565b945f610857565b91949350916020806001926001600160a01b0361097e89610adf565b1681520195019101918a939492610805565b98503d805f8b3e6109a1818b610bf5565b8901986020818b031261091e5780519067ffffffffffffffff821161091e57016040818b031261091e576040519960408b018b811067ffffffffffffffff821117610a345760405281516001600160a01b038116810361091e578b52602082015167ffffffffffffffff811161091e5760049b610a276107c29360209593869401610c17565b828201529b50505061077d565b634e487b7160e01b5f52604160045260245ffd5b63b12d13eb5f526004601cfd5b5f610756996106d6565b9198509350605f602134f5968715610a7b575f610756996106d6565b63301164255f526004601cfd5b3461091e575f36600319011261091e576020906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168152f35b600435906001600160a01b038216820361091e57565b35906001600160a01b038216820361091e57565b90608060031983011261091e576004356001600160a01b038116810361091e57916024359160443567ffffffffffffffff811161091e578260238201121561091e5780600401359267ffffffffffffffff841161091e5760248460051b8301011161091e57602401919060643560ff8116810361091e5790565b909160349296959394966bffffffffffffffffffffffff199060601b168252601482015201915f945b808610610bcd57505060f81b7fff000000000000000000000000000000000000000000000000000000000000001681526001019150565b90926020806001926001600160a01b03610be688610adf565b16815201940195019490610b96565b90601f8019910116810190811067ffffffffffffffff821117610a3457604052565b81601f8201121561091e5780519067ffffffffffffffff8211610a345760405192610c4c601f8401601f191660200185610bf5565b8284526020838301011161091e57815f9260208093018386015e8301015290565b805180835260209291819084018484015e5f828201840152601f01601f1916010190565b638b78c6d819543303610ca057565b6382b429005f526004601cfd5b6001600160a01b031680638b78c6d819547f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e05f80a3638b78c6d8195556fea264697066735822122034eaa7eb2e9cd30500f4938f2e22beffa7450c938912732a9d96e86f8531e15a64736f6c634300081b0033",
      // __$e80299cacbec5a11ff4d4f929f201a5fa0$__
      // 6c77ddf87a1717465d29f8f16f44711eb0c839c0
      "0x6080806040526004361015610012575f80fd5b5f905f3560e01c90816306433b1b14610d28575080630d51f0b7146105ee57806325692962146105a3578063290ab98414610577578063322cc8ca1461048e57806345171159146104015780634a1ce5991461038657806354d1f13d1461034057806367d2d1c914610314578063715018a6146102c95780638da5cb5b1461029e578063b36f9705146101bc578063d0733b3b14610190578063f04e283e14610142578063f2fde38b146101035763fee81cf4146100ce575f80fd5b34610100576020366003190112610100576100e7610d69565b9063389a75e1600c5252602080600c2054604051908152f35b80fd5b50602036600319011261010057610118610d69565b610120610fdb565b8060601b156101355761013290610ff7565b80f35b637448fbae82526004601cfd5b50602036600319011261010057610157610d69565b61015f610fdb565b63389a75e1600c528082526020600c20805442116101835790826101329255610ff7565b636f5e881883526004601cfd5b503461010057806003193601126101005760206040517004171351c442b202678c48d8ab5b321e8f8152f35b5034610100576040366003190112610100576101d6610d69565b90602435916001600160a01b03831680930361029a576001600160a01b03906101fd610fdb565b168015610272578192813b1561026e5782916024839260405194859384927fc23a5cea00000000000000000000000000000000000000000000000000000000845260048401525af18015610263576102525750f35b8161025c91610e96565b6101005780f35b6040513d84823e3d90fd5b5050fd5b6004827f91fdf191000000000000000000000000000000000000000000000000000000008152fd5b5080fd5b50346101005780600319360112610100576020638b78c6d819546001600160a01b0360405191168152f35b5080600319360112610100576102dd610fdb565b80638b78c6d819547f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380638b78c6d8195580f35b503461010057806003193601126101005760206040517008c901d8871b6f6942de0b5d9ccf3873d38152f35b50806003193601126101005763389a75e1600c52338152806020600c2055337ffa7b8eab7da67f412cc9575ed43464468f9bfbae89d1675917346ca6d8fe3c928280a280f35b5034610100576020366003190112610100576001600160a01b036103a8610d69565b6103b0610fdb565b168015610272578082913b156103fe578180916004604051809481937fbb9fe6bf0000000000000000000000000000000000000000000000000000000083525af18015610263576102525750f35b50fd5b50604036600319011261010057610416610d69565b906024359163ffffffff831680930361029a576001600160a01b039061043a610fdb565b168015610272578192813b1561026e5782906024604051809481937f0396cb60000000000000000000000000000000000000000000000000000000008352600483015234905af18015610263576102525750f35b5034610100576020906104cb6104bd6104a636610d93565b906040969496959295519586948a86019889610e0d565b03601f198101835282610e96565b5190206040517fcc3735a920a3ca505d382bbc545af43d6000803e6038573d6000fd5b3d6000f36060527f5155f3363d3d373d3d363d7f360894a13ba1a3210667c828492db98dca3e2076604052616009845270039dfcad030719b07296710f045f0558f7601e5268603d3d8160223d3973600a52605f602120906040528260605260ff83536035523060601b60015260155260558120906035526001600160a01b0360405191168152f35b5034610100578060031936011261010057602060405170039dfcad030719b07296710f045f0558f78152f35b50806003193601126101005763389a75e1600c523381526202a30042016020600c2055337fdbf36a107da19e49527a7176a1babf963b4b0ff8cde35ee35d6cd8f1f9ac7e1d8280a280f35b506105f836610d93565b93604095939295516020810190610617816104bd89878c8a8989610e0d565b51902060409661065b885161062c8a82610e96565b601b81527f5745523a20656e746572696e67206372656174654163636f756e7400000000006020820152610f32565b5f968851947fcc3735a920a3ca505d382bbc545af43d6000803e6038573d6000fd5b3d6000f36060527f5155f3363d3d373d3d363d7f360894a13ba1a3210667c828492db98dca3e20768a5261600960205270039dfcad030719b07296710f045f0558f7601e5268603d3d8160223d3973600a52605f60212060358701523060581b865260ff865383601587015260558620983415948a3b15610d00575050600193610cf7575f388180348d5af115610cea576107d3955b8a525f606052610758898b516107298d82610e96565b600a81527f6163636f756e74574552000000000000000000000000000000000000000000006020820152610f8f565b5f8a516bffffffffffffffffffffffff198760601b16602082015260148152610782603482610e96565b8b805198899283927f8491599f0000000000000000000000000000000000000000000000000000000084527004171351c442b202678c48d8ab5b321e8f600485015260248401526044830190610f0e565b0381736c77ddf87a1717465d29f8f16f44711eb0c839c05af4958615610ce0575f96610c1f575b509185919261084a6001600160a01b0360209851168c61081c81519182610e96565b601e81527f5745523a20626f6f74737472617020636f6e66696720637265617465642000008a820152610f8f565b5f808c6108ce81519161085d8184610e96565b601d83527f5745523a2063616c6c696e6720626f6f747374726170706572206174200000008c8401526108a9815193849263319af33360e01b8f85015260248401526064830190610f0e565b7008c901d8871b6f6942de0b5d9ccf3873d3604483015203601f198101835282610e96565b89815191016a636f6e736f6c652e6c6f675afa50866109378c519889957f837b892e000000000000000000000000000000000000000000000000000000008752608060048801526001600160a01b03815116608488015201518d60a487015260c4860190610f0e565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031660248601528481036003190160448601528281520191905f5b818110610bf157505050819060ff5f9416606483015203817008c901d8871b6f6942de0b5d9ccf3873d35afa928315610ba3575f93610bb1575b50610a1987516109c5606082610e96565b602c81527f5745523a204e6578757320696e6974206461746120637265617465642062792060208201527f626f6f747374726170706572000000000000000000000000000000000000000089820152610f32565b15610a6f575b6020856001600160a01b0388610a688151610a3a8382610e96565b601681527f5745523a2052657475726e696e67206163636f756e740000000000000000000086820152610f32565b5191168152f35b610aad8651610a7e8882610e96565b601981527f5745523a20696e697469616c697a696e67206163636f756e74000000000000006020820152610f32565b6001600160a01b03851691823b15610bad575f610afe918851809381927f4b6a1419000000000000000000000000000000000000000000000000000000008352602060048401526024830190610f0e565b038183875af18015610ba357916001600160a01b039593916020989593610b8e575b508590610b608651610b328882610e96565b601881527f5745523a206163636f756e7420696e697469616c697a656400000000000000008b820152610f32565b16907f33310a89c32d8cc00057ad6ef6274d2f8fe22389a992cf89983e09fc84f6cfff8480a4918194610a1f565b610b9b9194505f90610e96565b5f9285610b20565b87513d5f823e3d90fd5b5f80fd5b9092503d805f833e610bc38183610e96565b8101602082820312610bad57815167ffffffffffffffff8111610bad57610bea9201610eb8565b915f6109b4565b91949350916020806001926001600160a01b03610c0d89610d7f565b1681520195019101918793949261097a565b9095503d805f833e610c318183610e96565b810190602081830312610bad5780519067ffffffffffffffff8211610bad57018a81830312610bad578a51918b830183811067ffffffffffffffff821117610cb3578c5281516001600160a01b0381168103610bad578352602082015167ffffffffffffffff8111610bad57610ca79201610eb8565b6020820152945f6107fa565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b8a513d5f823e3d90fd5b63b12d13eb5f526004601cfd5b6107d395610713565b9199509350605f602134f5978815610d1b576107d395610713565b63301164255f526004601cfd5b34610bad575f366003190112610bad576020906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168152f35b600435906001600160a01b0382168203610bad57565b35906001600160a01b0382168203610bad57565b906080600319830112610bad576004356001600160a01b0381168103610bad57916024359160443567ffffffffffffffff8111610bad5782602382011215610bad5780600401359267ffffffffffffffff8411610bad5760248460051b83010111610bad57602401919060643560ff81168103610bad5790565b60609190911b6bffffffffffffffffffffffff191681526014810191909152929392603401915f5b818110610e6e575050507fff000000000000000000000000000000000000000000000000000000000000006001929360f81b1681520190565b9091926020806001926001600160a01b03610e8888610d7f565b168152019401929101610e35565b90601f8019910116810190811067ffffffffffffffff821117610cb357604052565b81601f82011215610bad5780519067ffffffffffffffff8211610cb35760405192610eed601f8401601f191660200185610e96565b82845260208383010111610bad57815f9260208093018386015e8301015290565b805180835260209291819084018484015e5f828201840152601f01601f1916010190565b5f6104bd610f7882936040519283917f41304fac000000000000000000000000000000000000000000000000000000006020840152602060248401526044830190610f0e565b6020815191016a636f6e736f6c652e6c6f675afa50565b610fc6610f785f939284936001600160a01b0360405194859363319af33360e01b6020860152604060248601526064850190610f0e565b9116604483015203601f198101835282610e96565b638b78c6d819543303610fea57565b6382b429005f526004601cfd5b6001600160a01b031680638b78c6d819547f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e05f80a3638b78c6d8195556fea2646970667358221220851c6baf78e5932e412f38c4a9025ab27f9d2dfb26d4ce7a7299be9a535e444464736f6c634300081b0033",
  },
  ModuleRegistry: {
    address: "0x000000000069E2a187AEFFb852bF3cCdC95151B2",
    // prettier-ignore
    abi: [{"inputs":[],"name":"AccessDenied","type":"error"},{"inputs":[],"name":"AlreadyAttested","type":"error"},{"inputs":[{"internalType":"address","name":"module","type":"address"}],"name":"AlreadyRegistered","type":"error"},{"inputs":[],"name":"AlreadyRevoked","type":"error"},{"inputs":[],"name":"AttestationNotFound","type":"error"},{"inputs":[],"name":"DifferentResolvers","type":"error"},{"inputs":[],"name":"ExternalError_ModuleRegistration","type":"error"},{"inputs":[],"name":"ExternalError_ResolveAttestation","type":"error"},{"inputs":[],"name":"ExternalError_ResolveRevocation","type":"error"},{"inputs":[],"name":"ExternalError_SchemaValidation","type":"error"},{"inputs":[{"internalType":"address","name":"factory","type":"address"}],"name":"FactoryCallFailed","type":"error"},{"inputs":[],"name":"InsufficientAttestations","type":"error"},{"inputs":[],"name":"InvalidAddress","type":"error"},{"inputs":[],"name":"InvalidAttestation","type":"error"},{"inputs":[],"name":"InvalidDeployment","type":"error"},{"inputs":[],"name":"InvalidExpirationTime","type":"error"},{"inputs":[],"name":"InvalidModuleType","type":"error"},{"inputs":[],"name":"InvalidModuleTypes","type":"error"},{"inputs":[{"internalType":"contract IExternalResolver","name":"resolver","type":"address"}],"name":"InvalidResolver","type":"error"},{"inputs":[{"internalType":"ResolverUID","name":"uid","type":"bytes32"}],"name":"InvalidResolverUID","type":"error"},{"inputs":[],"name":"InvalidSalt","type":"error"},{"inputs":[],"name":"InvalidSchema","type":"error"},{"inputs":[{"internalType":"contract IExternalSchemaValidator","name":"validator","type":"address"}],"name":"InvalidSchemaValidator","type":"error"},{"inputs":[],"name":"InvalidSignature","type":"error"},{"inputs":[],"name":"InvalidThreshold","type":"error"},{"inputs":[],"name":"InvalidTrustedAttesterInput","type":"error"},{"inputs":[{"internalType":"address","name":"moduleAddress","type":"address"}],"name":"ModuleAddressIsNotContract","type":"error"},{"inputs":[{"internalType":"address","name":"module","type":"address"}],"name":"ModuleNotFoundInRegistry","type":"error"},{"inputs":[],"name":"NoTrustedAttestersFound","type":"error"},{"inputs":[],"name":"ResolverAlreadyExists","type":"error"},{"inputs":[{"internalType":"address","name":"attester","type":"address"}],"name":"RevokedAttestation","type":"error"},{"inputs":[{"internalType":"SchemaUID","name":"uid","type":"bytes32"}],"name":"SchemaAlreadyExists","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"moduleAddress","type":"address"},{"indexed":true,"internalType":"address","name":"attester","type":"address"},{"indexed":false,"internalType":"SchemaUID","name":"schemaUID","type":"bytes32"},{"indexed":true,"internalType":"AttestationDataRef","name":"sstore2Pointer","type":"address"}],"name":"Attested","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"}],"name":"ModuleRegistration","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"ResolverUID","name":"uid","type":"bytes32"},{"indexed":true,"internalType":"address","name":"resolver","type":"address"}],"name":"NewResolver","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"ResolverUID","name":"uid","type":"bytes32"},{"indexed":false,"internalType":"address","name":"newOwner","type":"address"}],"name":"NewResolverOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"smartAccount","type":"address"}],"name":"NewTrustedAttesters","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract IExternalResolver","name":"resolver","type":"address"}],"name":"ResolverRevocationError","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"moduleAddress","type":"address"},{"indexed":true,"internalType":"address","name":"revoker","type":"address"},{"indexed":false,"internalType":"SchemaUID","name":"schema","type":"bytes32"}],"name":"Revoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"SchemaUID","name":"uid","type":"bytes32"},{"indexed":true,"internalType":"address","name":"registerer","type":"address"}],"name":"SchemaRegistered","type":"event"},{"inputs":[{"internalType":"SchemaUID","name":"schemaUID","type":"bytes32"},{"internalType":"address","name":"attester","type":"address"},{"components":[{"internalType":"address","name":"moduleAddress","type":"address"},{"internalType":"uint48","name":"expirationTime","type":"uint48"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"ModuleType[]","name":"moduleTypes","type":"uint256[]"}],"internalType":"struct AttestationRequest[]","name":"requests","type":"tuple[]"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"attest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"SchemaUID","name":"schemaUID","type":"bytes32"},{"internalType":"address","name":"attester","type":"address"},{"components":[{"internalType":"address","name":"moduleAddress","type":"address"},{"internalType":"uint48","name":"expirationTime","type":"uint48"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"ModuleType[]","name":"moduleTypes","type":"uint256[]"}],"internalType":"struct AttestationRequest","name":"request","type":"tuple"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"attest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"SchemaUID","name":"schemaUID","type":"bytes32"},{"components":[{"internalType":"address","name":"moduleAddress","type":"address"},{"internalType":"uint48","name":"expirationTime","type":"uint48"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"ModuleType[]","name":"moduleTypes","type":"uint256[]"}],"internalType":"struct AttestationRequest","name":"request","type":"tuple"}],"name":"attest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"SchemaUID","name":"schemaUID","type":"bytes32"},{"components":[{"internalType":"address","name":"moduleAddress","type":"address"},{"internalType":"uint48","name":"expirationTime","type":"uint48"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"ModuleType[]","name":"moduleTypes","type":"uint256[]"}],"internalType":"struct AttestationRequest[]","name":"requests","type":"tuple[]"}],"name":"attest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"attester","type":"address"}],"name":"attesterNonce","outputs":[{"internalType":"uint256","name":"nonce","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"salt","type":"bytes32"},{"internalType":"bytes","name":"initCode","type":"bytes"}],"name":"calcModuleAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"module","type":"address"},{"internalType":"address[]","name":"attesters","type":"address[]"},{"internalType":"uint256","name":"threshold","type":"uint256"}],"name":"check","outputs":[],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"module","type":"address"},{"internalType":"ModuleType","name":"moduleType","type":"uint256"},{"internalType":"address[]","name":"attesters","type":"address[]"},{"internalType":"uint256","name":"threshold","type":"uint256"}],"name":"check","outputs":[],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"module","type":"address"},{"internalType":"ModuleType","name":"moduleType","type":"uint256"}],"name":"check","outputs":[],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"module","type":"address"}],"name":"check","outputs":[],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"smartAccount","type":"address"},{"internalType":"address","name":"module","type":"address"}],"name":"checkForAccount","outputs":[],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"smartAccount","type":"address"},{"internalType":"address","name":"module","type":"address"},{"internalType":"ModuleType","name":"moduleType","type":"uint256"}],"name":"checkForAccount","outputs":[],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"salt","type":"bytes32"},{"internalType":"ResolverUID","name":"resolverUID","type":"bytes32"},{"internalType":"bytes","name":"initCode","type":"bytes"},{"internalType":"bytes","name":"metadata","type":"bytes"},{"internalType":"bytes","name":"resolverContext","type":"bytes"}],"name":"deployModule","outputs":[{"internalType":"address","name":"moduleAddress","type":"address"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"factory","type":"address"},{"internalType":"bytes","name":"callOnFactory","type":"bytes"},{"internalType":"bytes","name":"metadata","type":"bytes"},{"internalType":"ResolverUID","name":"resolverUID","type":"bytes32"},{"internalType":"bytes","name":"resolverContext","type":"bytes"}],"name":"deployViaFactory","outputs":[{"internalType":"address","name":"moduleAddress","type":"address"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"eip712Domain","outputs":[{"internalType":"bytes1","name":"fields","type":"bytes1"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"version","type":"string"},{"internalType":"uint256","name":"chainId","type":"uint256"},{"internalType":"address","name":"verifyingContract","type":"address"},{"internalType":"bytes32","name":"salt","type":"bytes32"},{"internalType":"uint256[]","name":"extensions","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"module","type":"address"},{"internalType":"address","name":"attester","type":"address"}],"name":"findAttestation","outputs":[{"components":[{"internalType":"uint48","name":"time","type":"uint48"},{"internalType":"uint48","name":"expirationTime","type":"uint48"},{"internalType":"uint48","name":"revocationTime","type":"uint48"},{"internalType":"PackedModuleTypes","name":"moduleTypes","type":"uint32"},{"internalType":"address","name":"moduleAddress","type":"address"},{"internalType":"address","name":"attester","type":"address"},{"internalType":"AttestationDataRef","name":"dataPointer","type":"address"},{"internalType":"SchemaUID","name":"schemaUID","type":"bytes32"}],"internalType":"struct AttestationRecord","name":"attestation","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"module","type":"address"},{"internalType":"address[]","name":"attesters","type":"address[]"}],"name":"findAttestations","outputs":[{"components":[{"internalType":"uint48","name":"time","type":"uint48"},{"internalType":"uint48","name":"expirationTime","type":"uint48"},{"internalType":"uint48","name":"revocationTime","type":"uint48"},{"internalType":"PackedModuleTypes","name":"moduleTypes","type":"uint32"},{"internalType":"address","name":"moduleAddress","type":"address"},{"internalType":"address","name":"attester","type":"address"},{"internalType":"AttestationDataRef","name":"dataPointer","type":"address"},{"internalType":"SchemaUID","name":"schemaUID","type":"bytes32"}],"internalType":"struct AttestationRecord[]","name":"attestations","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"moduleAddress","type":"address"}],"name":"findModule","outputs":[{"components":[{"internalType":"ResolverUID","name":"resolverUID","type":"bytes32"},{"internalType":"address","name":"sender","type":"address"},{"internalType":"bytes","name":"metadata","type":"bytes"}],"internalType":"struct ModuleRecord","name":"moduleRecord","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"ResolverUID","name":"uid","type":"bytes32"}],"name":"findResolver","outputs":[{"components":[{"internalType":"contract IExternalResolver","name":"resolver","type":"address"},{"internalType":"address","name":"resolverOwner","type":"address"}],"internalType":"struct ResolverRecord","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"SchemaUID","name":"uid","type":"bytes32"}],"name":"findSchema","outputs":[{"components":[{"internalType":"uint48","name":"registeredAt","type":"uint48"},{"internalType":"contract IExternalSchemaValidator","name":"validator","type":"address"},{"internalType":"string","name":"schema","type":"string"}],"internalType":"struct SchemaRecord","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"smartAccount","type":"address"}],"name":"findTrustedAttesters","outputs":[{"internalType":"address[]","name":"attesters","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"moduleAddress","type":"address"},{"internalType":"uint48","name":"expirationTime","type":"uint48"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"ModuleType[]","name":"moduleTypes","type":"uint256[]"}],"internalType":"struct AttestationRequest","name":"request","type":"tuple"},{"internalType":"address","name":"attester","type":"address"}],"name":"getDigest","outputs":[{"internalType":"bytes32","name":"digest","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"moduleAddress","type":"address"}],"internalType":"struct RevocationRequest[]","name":"requests","type":"tuple[]"},{"internalType":"address","name":"attester","type":"address"}],"name":"getDigest","outputs":[{"internalType":"bytes32","name":"digest","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"moduleAddress","type":"address"}],"internalType":"struct RevocationRequest","name":"request","type":"tuple"},{"internalType":"address","name":"attester","type":"address"}],"name":"getDigest","outputs":[{"internalType":"bytes32","name":"digest","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"moduleAddress","type":"address"},{"internalType":"uint48","name":"expirationTime","type":"uint48"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"ModuleType[]","name":"moduleTypes","type":"uint256[]"}],"internalType":"struct AttestationRequest[]","name":"requests","type":"tuple[]"},{"internalType":"address","name":"attester","type":"address"}],"name":"getDigest","outputs":[{"internalType":"bytes32","name":"digest","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"ResolverUID","name":"resolverUID","type":"bytes32"},{"internalType":"address","name":"moduleAddress","type":"address"},{"internalType":"bytes","name":"metadata","type":"bytes"},{"internalType":"bytes","name":"resolverContext","type":"bytes"}],"name":"registerModule","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IExternalResolver","name":"resolver","type":"address"}],"name":"registerResolver","outputs":[{"internalType":"ResolverUID","name":"uid","type":"bytes32"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"schema","type":"string"},{"internalType":"contract IExternalSchemaValidator","name":"validator","type":"address"}],"name":"registerSchema","outputs":[{"internalType":"SchemaUID","name":"uid","type":"bytes32"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"moduleAddress","type":"address"}],"internalType":"struct RevocationRequest[]","name":"requests","type":"tuple[]"}],"name":"revoke","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"attester","type":"address"},{"components":[{"internalType":"address","name":"moduleAddress","type":"address"}],"internalType":"struct RevocationRequest[]","name":"requests","type":"tuple[]"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"revoke","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"moduleAddress","type":"address"}],"internalType":"struct RevocationRequest","name":"request","type":"tuple"}],"name":"revoke","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"attester","type":"address"},{"components":[{"internalType":"address","name":"moduleAddress","type":"address"}],"internalType":"struct RevocationRequest","name":"request","type":"tuple"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"revoke","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"ResolverUID","name":"uid","type":"bytes32"},{"internalType":"contract IExternalResolver","name":"resolver","type":"address"}],"name":"setResolver","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"ResolverUID","name":"uid","type":"bytes32"},{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferResolverOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"threshold","type":"uint8"},{"internalType":"address[]","name":"attesters","type":"address[]"}],"name":"trustAttesters","outputs":[],"stateMutability":"nonpayable","type":"function"}],
    bytecode:
      "0x6080604052600436106102045760003560e01c80637cb2afd811610118578063b65d1012116100a0578063dd0fd2781161006f578063dd0fd2781461069e578063e14f3d32146106cb578063f05c04e1146106eb578063f095ec1b1461070b578063f190e2b11461072b57600080fd5b8063b65d101214610604578063b6b791a114610624578063c23697a814610651578063d90486241461067157600080fd5b8063945e3641116100e7578063945e36411461054a57806396fb72171461056a5780639f3e1b531461058a578063b060cb1e146105aa578063b50b706b146105d757600080fd5b80637cb2afd8146104c257806384b0196e146104e257806388dc678d1461050a5780638e6ec8241461052a57600080fd5b80634990a6821161019b57806355f47dde1161016a57806355f47dde146103b6578063617734d0146103d657806370d2af24146103f657806371c61a2b1461041657806377efcab4146104a257600080fd5b80634990a682146103365780634c13560c146103565780634ece78ca14610376578063529562a11461039657600080fd5b80631d4d9810116101d75780631d4d98101461029b57806329757d37146102c95780632b30c899146102e95780632ed944671461031657600080fd5b806303b79c841461020957806304a1f298146102395780630bb30abc1461025b5780631896f70a1461027b575b600080fd5b61021c610217366004613836565b61073e565b6040516001600160a01b0390911681526020015b60405180910390f35b34801561024557600080fd5b5061025961025436600461393b565b6107b8565b005b34801561026757600080fd5b506102596102763660046139c6565b610875565b34801561028757600080fd5b50610259610296366004613a21565b61098c565b3480156102a757600080fd5b506102bb6102b6366004613a51565b610acf565b604051908152602001610230565b3480156102d557600080fd5b506102596102e4366004613ab9565b610cc2565b3480156102f557600080fd5b50610309610304366004613b3f565b610d77565b6040516102309190613c11565b34801561032257600080fd5b50610259610331366004613c60565b610eb9565b34801561034257600080fd5b50610259610351366004613cc3565b610fb0565b34801561036257600080fd5b50610259610371366004613d04565b610fbf565b34801561038257600080fd5b50610259610391366004613d32565b610fcb565b3480156103a257600080fd5b506102596103b1366004613d96565b611077565b3480156103c257600080fd5b506102bb6103d1366004613dd7565b611087565b3480156103e257600080fd5b506102bb6103f1366004613e1d565b6110c1565b34801561040257600080fd5b506102bb610411366004613e66565b6110fe565b34801561042257600080fd5b5061047b610431366004613e83565b60408051808201909152600080825260208201525060009081526020818152604091829020825180840190935280546001600160a01b039081168452600190910154169082015290565b6040805182516001600160a01b039081168252602093840151169281019290925201610230565b3480156104ae57600080fd5b506102596104bd366004613e9c565b611131565b3480156104ce57600080fd5b506102596104dd366004613a21565b61113e565b3480156104ee57600080fd5b506104f76111e0565b6040516102309796959493929190613f08565b34801561051657600080fd5b50610259610525366004613fa1565b611249565b34801561053657600080fd5b50610259610545366004613ff4565b6112a4565b34801561055657600080fd5b50610259610565366004614057565b611357565b34801561057657600080fd5b5061025961058536600461409d565b611362565b34801561059657600080fd5b506102bb6105a53660046140c9565b61136d565b3480156105b657600080fd5b506105ca6105c5366004613e83565b6114f0565b60405161023091906140e6565b3480156105e357600080fd5b506102bb6105f23660046140c9565b60056020526000908152604090205481565b34801561061057600080fd5b5061025961061f366004614125565b6115ea565b34801561063057600080fd5b5061064461063f3660046140c9565b6115f6565b6040516102309190614188565b34801561065d57600080fd5b5061025961066c3660046140c9565b611656565b34801561067d57600080fd5b5061069161068c366004613d04565b611662565b604051610230919061419b565b3480156106aa57600080fd5b506106be6106b93660046140c9565b6116fb565b60405161023091906141aa565b3480156106d757600080fd5b506102bb6106e6366004613e1d565b61184d565b3480156106f757600080fd5b506102596107063660046141eb565b611882565b34801561071757600080fd5b5061021c610726366004614211565b611af7565b61021c61073936600461424f565b611b04565b600087815260208190526040812060018101546001600160a01b031661077f5760405163f184406b60e01b8152600481018a90526024015b60405180910390fd5b61078a88888c611c1b565b9150600061079b83338c8a8a611cee565b90506107aa8184848888611e6c565b505098975050505050505050565b6001600160a01b0385166000908152600560205260408120805482906107dd906142f9565b9182905550905060006107f96107f4878785611f20565b61213b565b9050600061083e888387878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061225392505050565b90508061085e57604051638baa579f60e01b815260040160405180910390fd5b61086a888a8989612358565b505050505050505050565b81801580610881575081155b1561089f576040516305a74e6160e01b815260040160405180910390fd5b818110156108c0576040516339093e6560e21b815260040160405180910390fd5b6000805b8281101561096c5760008686838181106108e0576108e0614312565b90506020020160208101906108f591906140c9565b9050826001600160a01b0316816001600160a01b0316116109295760405163cd0ecff160e01b815260040160405180910390fd5b809250610941600061093b8a84612478565b906124a2565b156109525761094f85614328565b94505b846000036109635750505050610986565b506001016108c4565b506040516339093e6560e21b815260040160405180910390fd5b50505050565b806001600160a01b0381161580610a0f57506040516301ffc9a760e01b81526314f0f87d60e21b60048201526001600160a01b038216906301ffc9a790602401602060405180830381865afa1580156109e9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a0d919061433f565b155b15610a385760405163f9492e7560e01b81526001600160a01b0382166004820152602401610776565b60008381526020819052604090206001015483906001600160a01b03163314610a7457604051634ca8886760e01b815260040160405180910390fd5b60008481526020819052604080822080546001600160a01b0319166001600160a01b03871690811782559151909287917f335721b01866dc23fbee8b6b2c7b1e14d6f05c28cd35a2c934239f94095602a09190a35050505050565b6000816001600160a01b03811615801590610b5657506040516301ffc9a760e01b815263b2275fa960e01b60048201526001600160a01b038216906301ffc9a790602401602060405180830381865afa158015610b30573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b54919061433f565b155b15610b7f57604051630f09140760e01b81526001600160a01b0382166004820152602401610776565b60006040518060600160405280610b934290565b65ffffffffffff168152602001856001600160a01b0316815260200187878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050509152509050610bf28161254a565b60008181526002602052604090205490935065ffffffffffff1615610c2d57604051635988c65560e11b815260048101849052602401610776565b60008381526002602090815260409182902083518154928501516001600160a01b0316600160301b026001600160d01b031990931665ffffffffffff90911617919091178155908201518291906001820190610c8990826143f3565b505060405133915084907fd16733fb8c2a502f4e1d1d63970cbab355e37ff6d6d12a215b7d0197ea5535f490600090a350509392505050565b6001600160a01b038416600090815260056020526040812080548290610ce7906142f9565b918290555090506000610cfd6107f48684612586565b90506000610d42878387878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061225392505050565b905080610d6257604051638baa579f60e01b815260040160405180910390fd5b610d6d8789886126c8565b5050505050505050565b606081806001600160401b03811115610d9257610d92614361565b604051908082528060200260200182016040528015610dcb57816020015b610db86137aa565b815260200190600190039081610db05790505b50915060005b81811015610eb057610e0986868684818110610def57610def614312565b9050602002016020810190610e0491906140c9565b612478565b6040805161010081018252825465ffffffffffff8082168352600160301b820481166020840152600160601b82041692820192909252600160901b90910463ffffffff16606082015260018201546001600160a01b0390811660808301526002830154811660a083015260038301541660c082015260049091015460e08201528351849083908110610e9d57610e9d614312565b6020908102919091010152600101610dd1565b50509392505050565b81801580610ec5575081155b15610ee3576040516305a74e6160e01b815260040160405180910390fd5b81811015610f04576040516339093e6560e21b815260040160405180910390fd5b6000805b8281101561096c576000868683818110610f2457610f24614312565b9050602002016020810190610f3991906140c9565b9050826001600160a01b0316816001600160a01b031611610f6d5760405163cd0ecff160e01b815260040160405180910390fd5b809250610f7e8861093b8b84612478565b15610f8f57610f8c85614328565b94505b84600003610fa05750505050610fa9565b50600101610f08565b5050505050565b610fbb33838361270d565b5050565b610fbb82826000612807565b6001600160a01b038516600090815260056020526040812080548290610ff0906142f9565b9182905550905060006110076107f48787856129c0565b9050600061104c888387878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061225392505050565b90508061106c57604051638baa579f60e01b815260040160405180910390fd5b610d6d88888861270d565b611082838383612807565b505050565b6001600160a01b0381166000908152600560205260408120546110ba906107f4906110b39060016144b2565b8590612586565b9392505050565b6001600160a01b0381166000908152600560205260408120546110f6906107f4906110ed9060016144b2565b869086906129c0565b949350505050565b6001600160a01b0381166000908152600560205260408120546110ba906107f49061112a9060016144b2565b8590612ac5565b61113b3382612b39565b50565b60008281526020819052604090206001015482906001600160a01b0316331461117a57604051634ca8886760e01b815260040160405180910390fd5b6000838152602081815260409182902060010180546001600160a01b0319166001600160a01b038616908117909155915191825284917f7a2c54badf601a71ed23c3ec8c070bac418dfd4fb160e0351861983746662d77910160405180910390a2505050565b600f60f81b606080600080808361123760408051808201825260128152715268696e6573746f6e65526567697374727960701b60208083019190915282518084019093526004835263076312e360e41b9083015291565b97989097965046955030945091925090565b600086815260208190526040902060018101546001600160a01b03166112855760405163f184406b60e01b815260048101889052602401610776565b60006112958760008a8989611cee565b9050610d6d8188848787611e6c565b6001600160a01b0384166000908152600560205260408120805482906112c9906142f9565b9182905550905060006112df6107f48684612ac5565b90506000611324878387878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061225392505050565b90508061134457604051638baa579f60e01b815260040160405180910390fd5b61134e8787612b39565b50505050505050565b610fbb3383836126c8565b610fbb338383612807565b6000816001600160a01b03811615806113f257506040516301ffc9a760e01b81526314f0f87d60e21b60048201526001600160a01b038216906301ffc9a790602401602060405180830381865afa1580156113cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113f0919061433f565b155b1561141b5760405163f9492e7560e01b81526001600160a01b0382166004820152602401610776565b604080518082019091526001600160a01b038416815233602082015261144081612b64565b6000818152602081905260409020549093506001600160a01b03161561147957604051630f5f2ba160e21b815260040160405180910390fd5b600083815260208181526040808320845181546001600160a01b03199081166001600160a01b03928316178355938601516001909201805490941691811691909117909255519086169185917f335721b01866dc23fbee8b6b2c7b1e14d6f05c28cd35a2c934239f94095602a09190a35050919050565b604080516060808201835260008083526020830152918101919091526000828152600260209081526040918290208251606081018452815465ffffffffffff81168252600160301b90046001600160a01b031692810192909252600181018054929391929184019161156190614377565b80601f016020809104026020016040519081016040528092919081815260200182805461158d90614377565b80156115da5780601f106115af576101008083540402835291602001916115da565b820191906000526020600020905b8154815290600101906020018083116115bd57829003601f168201915b5050505050815250509050919050565b61108233848484612358565b6040805160608082018352600080835260208084018290528385018390526001600160a01b038681168352600180835292869020865194850187528054855292830154169083015260028101805493949293919284019161156190614377565b61113b33826000612807565b61166a6137aa565b6116748383612478565b6040805161010081018252825465ffffffffffff8082168352600160301b820481166020840152600160601b82041692820192909252600160901b90910463ffffffff16606082015260018201546001600160a01b0390811660808301526002830154811660a083015260038301541660c082015260049091015460e08201529392505050565b6001600160a01b0380821660009081526003602052604081208054606093919260ff821692620100009092049091169082900361173a57505050919050565b816001600160401b0381111561175257611752614361565b60405190808252806020026020018201604052801561177b578160200160208202803683370190505b509350808460008151811061179257611792614312565b6001600160a01b039092166020928302919091019091015260015b8281101561184457836001016000866001846117c991906144c5565b815181106117d9576117d9614312565b6020908102919091018101516001600160a01b03908116835282820193909352604091820160009081208a851682529091522054865191169086908390811061182457611824614312565b6001600160a01b03909216602092830291909101909101526001016117ad565b50505050919050565b6001600160a01b0381166000908152600560205260408120546110f6906107f4906118799060016144b2565b86908690611f20565b604080516020808402828101820190935283825283926118bf929186918591829190850190849080828437600092019190915250612b9692505050565b6118dc5760405163cd0ecff160e01b815260040160405180910390fd5b8015806118e9575060ff81115b156119075760405163cd0ecff160e01b815260040160405180910390fd5b8181146119275760405163cd0ecff160e01b815260040160405180910390fd5b60008383828161193957611939614312565b905060200201602081019061194e91906140c9565b6001600160a01b0316036119755760405163cd0ecff160e01b815260040160405180910390fd5b33600090815260036020526040902060ff85168210156119a85760405163aabd5a0960e01b815260040160405180910390fd5b805460ff8681166101000261ffff199092169084161717815583836000816119d2576119d2614312565b90506020020160208101906119e791906140c9565b81546001600160a01b0391909116620100000262010000600160b01b031990911617815581611a1581614328565b92505060005b82811015611ac4576000858583818110611a3757611a37614312565b9050602002016020810190611a4c91906140c9565b90508585611a5b8460016144b2565b818110611a6a57611a6a614312565b9050602002016020810190611a7f91906140c9565b6001600160a01b03918216600090815260018581016020908152604080842033855290915290912080546001600160a01b031916929093169190911790915501611a1b565b5060405133907ff689fb4afceb60ac48a5ca8113a5a57cb15e51d317f0ec57e07340192d9fb45990600090a25050505050565b60006110f6838386612ba1565b600083815260208190526040812060018101546001600160a01b0316611b405760405163f184406b60e01b815260048101869052602401610776565b306001600160a01b038b1603611b74576040516301b3a38360e21b81526001600160a01b038b166004820152602401610776565b604051630d84daa960e31b81526001600160a01b037f0000000000000000000000005f5e3201de0550d370641f7afb0b987a29b51ecb1690636c26d548903490611bc6908e908e908e90600401614501565b60206040518083038185885af1158015611be4573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190611c09919061452f565b9150600061079b836000888b8b611cee565b600081606081901c3314801590611c3b57506001600160601b0319811615155b15611c59576040516381e69d9b60e01b815260040160405180910390fd5b600085858080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920182905250939450611ca1925089915088905087612ba1565b905081602001825186818334f595505050806001600160a01b0316846001600160a01b031614611ce45760405163e6c4247b60e01b815260040160405180910390fd5b5050509392505050565b604080516060808201835260008083526020830152918101919091526001600160a01b038616600090815260016020526040812054611d2c91141590565b15611d55576040516345ed80e960e01b81526001600160a01b0387166004820152602401610776565b6001600160a01b0386163b611d7d57604051637483e90760e01b815260040160405180910390fd5b6040518060600160405280858152602001866001600160a01b0316815260200184848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201829052509390945250506001600160a01b03898116825260016020818152604093849020865181559086015191810180546001600160a01b03191692909316919091179091559083015192935083929091506002820190611e2c90826143f3565b50506040516001600160a01b03881691507fbc854169953f463b8509327459b9a9785beb45f6cdafdad8e75b9a33f401676890600090a295945050505050565b82546001600160a01b03168015801590611efa5750604051633da3df8760e21b81526001600160a01b0382169063f68f7e1c90611eb590339089908b908990899060040161454c565b6020604051808303816000875af1158015611ed4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ef8919061433f565b155b15611f1857604051633b0cfdad60e01b815260040160405180910390fd5b505050505050565b6000606083825b818110156120d457827fe78ff87b9693fc54b8a43c3b84702ae7bfbb7fc6235105790033913428381e1f888884818110611f6357611f63614312565b9050602002810190611f759190614597565b611f839060208101906140c9565b898985818110611f9557611f95614312565b9050602002810190611fa79190614597565b611fb89060408101906020016145b7565b8a8a86818110611fca57611fca614312565b9050602002810190611fdc9190614597565b611fea9060408101906145df565b604051611ff8929190614625565b60405180910390208b8b8781811061201257612012614312565b90506020028101906120249190614597565b612032906060810190614635565b60405160200161204392919061467e565b60408051601f198184030181528282528051602091820120908301969096526001600160a01b039094169381019390935265ffffffffffff9091166060830152608082015260a081019190915260c001604051602081830303815290604052805190602001206040516020016120ba9291906146ad565b60408051601f198184030181529190529250600101611f27565b508151602080840191909120604080517f432f54a02ff5e7b0998295a12eea6e09f826e00e15ebb49cdb5dd6914e7eadf793810193909352820152606081018590526080015b60405160208183030381529060405280519060200120925050509392505050565b7f190f5d5283f5db87880acc624fa77467696f8aa33364cc797fda60178803f9dd7f000000000000000000000000000000000069e2a187aeffb852bf3ccdc95151b230147f000000000000000000000000000000000000000000000000000000000000000146141661222e5750604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f81527f965bdbd96142286fcb2d9d6d6847b7d0146c665f390f54b4b623eeee5ffaa2fe60208201527fe8245ed8f93ccf147bc8972ab6d5f8278ed994d647700daaa5b7ebde9370aa6f9181019190915246606082015230608082015260a090205b67190100000000000060005280601a5281603a52604260182090506000603a52919050565b6001600160a01b0390921691600083156110ba5760405183600052602083015160405260408351036122c3576040830151601b8160ff1c016020528060011b60011c60605250602060016080600060015afa805186183d15176122c1575060006060526040525060016110ba565b505b604183510361230957606083015160001a6020526040830151606052602060016080600060015afa805186183d1517612307575060006060526040525060016110ba565b505b600060605280604052631626ba7e60e01b808252846004830152602482016040815284516020018060448501828860045afa505060208160443d01858a5afa9051909114169150509392505050565b806000816001600160401b0381111561237357612373614361565b6040519080825280602002602001820160405280156123ac57816020015b6123996137aa565b8152602001906001900390816123915790505b5090506000805b838110156124455760006123eb888a8989868181106123d4576123d4614312565b90506020028101906123e69190614597565b612c2e565b8584815181106123fd576123fd614312565b6020026020010181935082905250508160000361241c5780925061243c565b82811461243c57604051631ac80ea760e01b815260040160405180910390fd5b506001016123b3565b50600086815260026020526040902061245f908390613047565b600081815260208190526040902061134e908390613119565b6001600160a01b039182166000908152600460209081526040808320939094168252919091522090565b815460009063ffffffff81811691603081901c821691606082901c81169160901c16836124d6576000945050505050612544565b82158015906124e457508242115b156124f6576000945050505050612544565b8115612509576000945050505050612544565b8515158015612529575061252763ffffffff8083169088906131bf16565b155b1561253b576000945050505050612544565b60019450505050505b92915050565b60003382604001518360200151604051602001612569939291906146cf565b604051602081830303815290604052805190602001209050919050565b60007fe6fb0252edfa0719f65bc4b7ff11df181a55bbef752d6bacaff6f4a369160b757fe78ff87b9693fc54b8a43c3b84702ae7bfbb7fc6235105790033913428381e1f6125d760208601866140c9565b6125e760408701602088016145b7565b6125f460408801886145df565b604051612602929190614625565b6040519081900390206126186060890189614635565b60405160200161262992919061467e565b60408051601f198184030181528282528051602091820120908301969096526001600160a01b039094169381019390935265ffffffffffff9091166060830152608082015260a081019190915260c0015b60408051601f19818403018152828252805160209182012090830193909352810191909152606081018390526080015b60405160208183030381529060405280519060200120905092915050565b6000806126d6848685612c2e565b600086815260026020526040902091935091506126f49083906131de565b6000818152602081905260409020610fa990839061324d565b806000816001600160401b0381111561272857612728614361565b60405190808252806020026020018201604052801561276157816020015b61274e6137aa565b8152602001906001900390816127465790505b5090506000805b838110156127ed5760006127938888888581811061278857612788614312565b9050602002016132f1565b8584815181106127a5576127a5614312565b602002602001018193508290525050816000036127c4578092506127e4565b8281146127e457604051631ac80ea760e01b815260040160405180910390fd5b50600101612768565b50600081815260208190526040902061134e9083906134e7565b6001600160a01b0380841660009081526003602052604090208054909160ff808316926101008104909116916201000090910416801580612846575081155b15612864576040516305a74e6160e01b815260040160405180910390fd5b816001036128f95760006128788783612478565b905061288481876124a2565b15612893575050505050505050565b60015b8481101561096c576001600160a01b03928316600090815260018701602090815260408083208c87168452909152902054909216916128d58884612478565b91506128e182886124a2565b156128f157505050505050505050565b600101612896565b60006129058783612478565b905061291181876124a2565b15612924578261292081614328565b9350505b60015b848110156129a0576001600160a01b03928316600090815260018701602090815260408083208c87168452909152902054909216916129668884612478565b915061297282886124a2565b15612985578361298181614328565b9450505b8360000361299857505050505050505050565b600101612927565b508215610d6d576040516339093e6560e21b815260040160405180910390fd5b6000606083825b81811015612a7b57827fe772c71320d83e91a3076e1414875f1affb9dbb84c39717315b34b38b9b4ef8e888884818110612a0357612a03614312565b612a179260209182020190810191506140c9565b604051602001612a3a9291909182526001600160a01b0316602082015260400190565b60405160208183030381529060405280519060200120604051602001612a619291906146ad565b60408051601f1981840301815291905292506001016129c7565b508151602080840191909120604080517f7d1efebd1edb795fc2fef1b96025f39b311dd4c4481a7f726342969d70b423c8938101939093528201526060810185905260800161211a565b60007f0c087e39c84c32f053f4f3e0086d64914296a605bd371cfe0bdca1d506aed4707fe772c71320d83e91a3076e1414875f1affb9dbb84c39717315b34b38b9b4ef8e612b1660208601866140c9565b60405160200161267a9291909182526001600160a01b0316602082015260400190565b600080612b4684846132f1565b60008181526020819052604090209193509150610fa99083906135cf565b80516040516001600160601b031933606090811b821660208401529290921b9091166034820152600090604801612569565b600061254482613618565b600030828585604051602001612bb8929190614625565b60405160208183030381529060405280519060200120604051602001612c0e939291906001600160f81b0319815260609390931b6001600160601b03191660018401526015830191909152603582015260550190565b60408051601f198184030181529190528051602090910120949350505050565b612c366137aa565b60008481526002602052604081205465ffffffffffff16612c6a57604051635f9bd90760e11b815260040160405180910390fd5b426000612c7d60408601602087016145b7565b65ffffffffffff1614158015612cb2575065ffffffffffff8116612ca760408601602087016145b7565b65ffffffffffff1611155b15612cd0576040516308e8b93760e01b815260040160405180910390fd5b6000612cdf60208601866140c9565b90506000612ced8288612478565b805490915065ffffffffffff1615801590612d1657508054600160601b900465ffffffffffff16155b15612d34576040516335d9080560e01b815260040160405180910390fd5b6001600160a01b038216600090815260016020526040902054935083612d7857604051634eb2dcd760e01b81526001600160a01b0383166004820152602401610776565b6000612d97612d906001600160a01b038a1685613651565b8890613689565b90506040518061010001604052808565ffffffffffff168152602001886020016020810190612dc691906145b7565b65ffffffffffff16815260006020820152604001612e21612dea60608b018b614635565b808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152506136d792505050565b63ffffffff168152602001846001600160a01b03168152602001896001600160a01b03168152602001826001600160a01b031681526020018a81525095508560046000856001600160a01b03166001600160a01b0316815260200190815260200160002060008a6001600160a01b03166001600160a01b0316815260200190815260200160002060008201518160000160006101000a81548165ffffffffffff021916908365ffffffffffff16021790555060208201518160000160066101000a81548165ffffffffffff021916908365ffffffffffff160217905550604082015181600001600c6101000a81548165ffffffffffff021916908365ffffffffffff16021790555060608201518160000160126101000a81548163ffffffff021916908363ffffffff16021790555060808201518160010160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060a08201518160020160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060c08201518160030160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060e08201518160040155905050806001600160a01b0316886001600160a01b0316846001600160a01b03167ff68f1df3d74509783e9300e8637b046836c091fd39cdcd33b14b0ffdf6940d628c60405161303391815260200190565b60405180910390a450505050935093915050565b805465ffffffffffff1661306e57604051635f9bd90760e11b815260040160405180910390fd5b8054600160301b90046001600160a01b031680158015906130fb57506040516365b7641360e11b81526001600160a01b0382169063cb6ec826906130b6908690600401613c11565b6020604051808303816000875af11580156130d5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906130f9919061433f565b155b1561108257604051635e1d867960e01b815260040160405180910390fd5b80546001600160a01b03168061312e57505050565b6040516367b14e7760e11b81526001600160a01b0382169063cf629cee9061315a908690600401613c11565b6020604051808303816000875af1158015613179573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061319d919061433f565b151560000361108257604051635b0ae41f60e01b815260040160405180910390fd5b60006131cc8260026147fb565b831663ffffffff161515905092915050565b805465ffffffffffff1661320557604051635f9bd90760e11b815260040160405180910390fd5b8054600160301b90046001600160a01b031680158015906130fb5750604051637949978f60e01b81526001600160a01b03821690637949978f906130b690869060040161419b565b80546001600160a01b031680158015906132d357506040516334c85d0760e01b81526001600160a01b038216906334c85d079061328e90869060040161419b565b6020604051808303816000875af11580156132ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906132d1919061433f565b155b1561108257604051635b0ae41f60e01b815260040160405180910390fd5b6132f96137aa565b60008060048161330c60208701876140c9565b6001600160a01b0390811682526020808301939093526040918201600090812089831682528452828120835161010081018552815465ffffffffffff8082168352600160301b8204811683890152600160601b82041695820195909552600160901b90940463ffffffff166060850152600180820154841660808601526002820154841660a0860152600382015490931660c0850152600481015460e0850152929650919350916133bf908701876140c9565b6001600160a01b03908116825260208201929092526040016000205460c0850151909350166134015760405163120a2e7760e01b815260040160405180910390fd5b846001600160a01b03168360a001516001600160a01b03161461343757604051634ca8886760e01b815260040160405180910390fd5b604083015165ffffffffffff16156134625760405163905e710760e01b815260040160405180910390fd5b805465ffffffffffff60601b1916600160601b65ffffffffffff4216021781556001600160a01b03851661349960208601866140c9565b6001600160a01b03167feee7de70b290c411a060d8bb9b1cba152a40d74147fef0974d7c2b25ac9b718a8560e001516040516134d791815260200190565b60405180910390a3509250929050565b80546000906001600160a01b031680613504576001915050612544565b604051636ac403ff60e11b81526001600160a01b0382169063d58807fe90613530908790600401613c11565b6020604051808303816000875af192505050801561356b575060408051601f3d908101601f191682019092526135689181019061433f565b60015b6135b5576040516001600160a01b03821681527fbab8c8262d5baeb21d73c5944504fb6c26d6eb88d29af8653bd3382ad8fe56a99060200160405180910390a16000915050612544565b80156135c657600192505050612544565b505b5092915050565b80546000906001600160a01b0316806135ec576001915050612544565b604051638b6e59ff60e01b81526001600160a01b03821690638b6e59ff9061353090879060040161419b565b805160019060021161364c57815160051b82016020830192505b82516020909301805190931091508083188202613632575b505b919050565b6040516001600160601b0319606084811b8216602084015283901b1660348201524260488201524660688201526000906088016126aa565b60006110ba61369b60408501856145df565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525086925061375f915050565b80516000908180805b83811015613755578581815181106136fa576136fa614312565b60200260200101519150601f821180613718575061371883836131bf565b1561373657604051631092ef5760e11b815260040160405180910390fd5b6137418260026147fb565b61374b9084614807565b92506001016136e0565b5090949350505050565b60008251600181018060401b6bfd61000080600a3d393df3001761ffff821186015283600a8201601587016000f5925050816137a35763301164256000526004601cfd5b9092525090565b6040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915290565b60008083601f84011261380057600080fd5b5081356001600160401b0381111561381757600080fd5b60208301915083602082850101111561382f57600080fd5b9250929050565b60008060008060008060008060a0898b03121561385257600080fd5b883597506020890135965060408901356001600160401b038082111561387757600080fd5b6138838c838d016137ee565b909850965060608b013591508082111561389c57600080fd5b6138a88c838d016137ee565b909650945060808b01359150808211156138c157600080fd5b506138ce8b828c016137ee565b999c989b5096995094979396929594505050565b6001600160a01b038116811461113b57600080fd5b60008083601f84011261390957600080fd5b5081356001600160401b0381111561392057600080fd5b6020830191508360208260051b850101111561382f57600080fd5b6000806000806000806080878903121561395457600080fd5b863595506020870135613966816138e2565b945060408701356001600160401b038082111561398257600080fd5b61398e8a838b016138f7565b909650945060608901359150808211156139a757600080fd5b506139b489828a016137ee565b979a9699509497509295939492505050565b600080600080606085870312156139dc57600080fd5b84356139e7816138e2565b935060208501356001600160401b03811115613a0257600080fd5b613a0e878288016138f7565b9598909750949560400135949350505050565b60008060408385031215613a3457600080fd5b823591506020830135613a46816138e2565b809150509250929050565b600080600060408486031215613a6657600080fd5b83356001600160401b03811115613a7c57600080fd5b613a88868287016137ee565b9094509250506020840135613a9c816138e2565b809150509250925092565b60006080828403121561364a57600080fd5b600080600080600060808688031215613ad157600080fd5b853594506020860135613ae3816138e2565b935060408601356001600160401b0380821115613aff57600080fd5b613b0b89838a01613aa7565b94506060880135915080821115613b2157600080fd5b50613b2e888289016137ee565b969995985093965092949392505050565b600080600060408486031215613b5457600080fd5b8335613b5f816138e2565b925060208401356001600160401b03811115613b7a57600080fd5b613b86868287016138f7565b9497909650939450505050565b65ffffffffffff8082511683528060208301511660208401528060408301511660408401525063ffffffff6060820151166060830152608081015160018060a01b0380821660808501528060a08401511660a0850152505060c0810151613c0560c08401826001600160a01b03169052565b5060e090810151910152565b6020808252825182820181905260009190848201906040850190845b81811015613c5457613c40838551613b93565b928401926101009290920191600101613c2d565b50909695505050505050565b600080600080600060808688031215613c7857600080fd5b8535613c83816138e2565b94506020860135935060408601356001600160401b03811115613ca557600080fd5b613cb1888289016138f7565b96999598509660600135949350505050565b60008060208385031215613cd657600080fd5b82356001600160401b03811115613cec57600080fd5b613cf8858286016138f7565b90969095509350505050565b60008060408385031215613d1757600080fd5b8235613d22816138e2565b91506020830135613a46816138e2565b600080600080600060608688031215613d4a57600080fd5b8535613d55816138e2565b945060208601356001600160401b0380821115613d7157600080fd5b613d7d89838a016138f7565b90965094506040880135915080821115613b2157600080fd5b600080600060608486031215613dab57600080fd5b8335613db6816138e2565b92506020840135613dc6816138e2565b929592945050506040919091013590565b60008060408385031215613dea57600080fd5b82356001600160401b03811115613e0057600080fd5b613e0c85828601613aa7565b9250506020830135613a46816138e2565b600080600060408486031215613e3257600080fd5b83356001600160401b03811115613e4857600080fd5b613a88868287016138f7565b60006020828403121561364a57600080fd5b60008060408385031215613e7957600080fd5b613d228484613e54565b600060208284031215613e9557600080fd5b5035919050565b600060208284031215613eae57600080fd5b6110ba8383613e54565b60005b83811015613ed3578181015183820152602001613ebb565b50506000910152565b60008151808452613ef4816020860160208601613eb8565b601f01601f19169290920160200192915050565b60ff60f81b881681526000602060e06020840152613f2960e084018a613edc565b8381036040850152613f3b818a613edc565b606085018990526001600160a01b038816608086015260a0850187905284810360c08601528551808252602080880193509091019060005b81811015613f8f57835183529284019291840191600101613f73565b50909c9b505050505050505050505050565b60008060008060008060808789031215613fba57600080fd5b863595506020870135613fcc816138e2565b945060408701356001600160401b0380821115613fe857600080fd5b61398e8a838b016137ee565b6000806000806060858703121561400a57600080fd5b8435614015816138e2565b93506140248660208701613e54565b925060408501356001600160401b0381111561403f57600080fd5b61404b878288016137ee565b95989497509550505050565b6000806040838503121561406a57600080fd5b8235915060208301356001600160401b0381111561408757600080fd5b61409385828601613aa7565b9150509250929050565b600080604083850312156140b057600080fd5b82356140bb816138e2565b946020939093013593505050565b6000602082840312156140db57600080fd5b81356110ba816138e2565b6020815265ffffffffffff825116602082015260018060a01b036020830151166040820152600060408301516060808401526110f66080840182613edc565b60008060006040848603121561413a57600080fd5b8335925060208401356001600160401b03811115613b7a57600080fd5b8051825260018060a01b03602082015116602083015260006040820151606060408501526110f66060850182613edc565b6020815260006110ba6020830184614157565b61010081016125448284613b93565b6020808252825182820181905260009190848201906040850190845b81811015613c545783516001600160a01b0316835292840192918401916001016141c6565b60008060006040848603121561420057600080fd5b833560ff81168114613b5f57600080fd5b60008060006040848603121561422657600080fd5b8335925060208401356001600160401b0381111561424357600080fd5b613b86868287016137ee565b60008060008060008060008060a0898b03121561426b57600080fd5b8835614276816138e2565b975060208901356001600160401b038082111561429257600080fd5b61429e8c838d016137ee565b909950975060408b01359150808211156142b757600080fd5b6142c38c838d016137ee565b909750955060608b0135945060808b01359150808211156138c157600080fd5b634e487b7160e01b600052601160045260246000fd5b60006001820161430b5761430b6142e3565b5060010190565b634e487b7160e01b600052603260045260246000fd5b600081614337576143376142e3565b506000190190565b60006020828403121561435157600080fd5b815180151581146110ba57600080fd5b634e487b7160e01b600052604160045260246000fd5b600181811c9082168061438b57607f821691505b60208210810361364a57634e487b7160e01b600052602260045260246000fd5b601f821115611082576000816000526020600020601f850160051c810160208610156143d45750805b601f850160051c820191505b81811015611f18578281556001016143e0565b81516001600160401b0381111561440c5761440c614361565b6144208161441a8454614377565b846143ab565b602080601f831160018114614455576000841561443d5750858301515b600019600386901b1c1916600185901b178555611f18565b600085815260208120601f198616915b8281101561448457888601518255948401946001909101908401614465565b50858210156144a25787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b80820180821115612544576125446142e3565b81810381811115612544576125446142e3565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b6001600160a01b038416815260406020820181905260009061452690830184866144d8565b95945050505050565b60006020828403121561454157600080fd5b81516110ba816138e2565b6001600160a01b0386811682528516602082015260806040820181905260009061457890830186614157565b828103606084015261458b8185876144d8565b98975050505050505050565b60008235607e198336030181126145ad57600080fd5b9190910192915050565b6000602082840312156145c957600080fd5b813565ffffffffffff811681146110ba57600080fd5b6000808335601e198436030181126145f657600080fd5b8301803591506001600160401b0382111561461057600080fd5b60200191503681900382131561382f57600080fd5b8183823760009101908152919050565b6000808335601e1984360301811261464c57600080fd5b8301803591506001600160401b0382111561466657600080fd5b6020019150600581901b360382131561382f57600080fd5b60008184825b858110156146a2578135835260209283019290910190600101614684565b509095945050505050565b600083516146bf818460208801613eb8565b9190910191825250602001919050565b60006bffffffffffffffffffffffff19808660601b16835284516146fa816014860160208901613eb8565b60609490941b169190920160148101919091526028019392505050565b600181815b80851115614752578160001904821115614738576147386142e3565b8085161561474557918102915b93841c939080029061471c565b509250929050565b60008261476957506001612544565b8161477657506000612544565b816001811461478c5760028114614796576147b2565b6001915050612544565b60ff8411156147a7576147a76142e3565b50506001821b612544565b5060208310610133831016604e8410600b84101617156147d5575081810a612544565b6147df8383614717565b80600019048211156147f3576147f36142e3565b029392505050565b60006110ba838361475a565b63ffffffff8181168382160190808211156135c8576135c86142e356fea2646970667358221220807a0dcf2c6cec2c89009e31067a7ecb222a220b82380e3501b0be4d5c970b7a64736f6c63430008190033",
  },
} as const;
