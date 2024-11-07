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
      "0x60806040526004361015610027575b36156100255761001d3661126c565b602081519101f35b005b5f3560e01c806301fe9ff2146100e65780630a664dba146100e1578063481ddd23146100dc57806355470cf1146100d75780635faac46b146100d25780637b103999146100cd578063837b892e146100c857806384b0196e146100c357806385a924cc146100be5780639e2533ed146100b9578063d6fe71f1146100b45763ea5f61d00361000e57610de7565b610ca9565b610b9b565b610a49565b61092d565b6107f2565b610795565b6105be565b6103c6565b61026d565b61021f565b610179565b6001600160a01b038116036100fc57565b5f80fd5b6044359061010d826100eb565b565b359061010d826100eb565b9181601f840112156100fc5782359167ffffffffffffffff83116100fc576020808501948460051b0101116100fc57565b6084359060ff821682036100fc57565b6064359060ff821682036100fc57565b359060ff821682036100fc57565b346100fc5760a03660031901126100fc57600435610196816100eb565b60243567ffffffffffffffff81116100fc57366023820112156100fc57806004013567ffffffffffffffff81116100fc5736602482840101116100fc576101db610100565b926064359367ffffffffffffffff85116100fc5761020061002595369060040161011a565b939092602461020d61014b565b960190610ef7565b5f9103126100fc57565b346100fc575f3660031901126100fc5760206001600160a01b037f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f0354166001600160a01b0360405191168152f35b346100fc5760203660031901126100fc576004356001600160e01b0319811681036100fc576102cd906001600160e01b0319165f527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f0260205260405f2090565b60405190604082019082821067ffffffffffffffff831117610326576040918252546001600160a01b03811680845260589190911b6001600160f81b0319166020938401819052825190815292830152819081015b0390f35b610fbb565b908160409103126100fc5790565b60a06003198201126100fc5760043567ffffffffffffffff81116100fc57816103649160040161011a565b9290929160243567ffffffffffffffff81116100fc57816103879160040161032b565b91604435610394816100eb565b916064359067ffffffffffffffff82116100fc576103b49160040161011a565b909160843560ff811681036100fc5790565b346100fc576103e36103d736610339565b9296939691909161137e565b5f5b81811061042657836001600160a01b036103fe8261103b565b1661040557005b806104206104156100259361103b565b916020810190611045565b916114f2565b610431818385611014565b359061043c826100eb565b61045461044a828587611014565b6020810190611045565b61045d84611c7c565b60405163ecd0596160e01b8152600160048201526001600160a01b0385169490602081602481895afa908115610501575f9161051a575b5015610506576104a390611dde565b833b156100fc576104cd935f92836040518097819582946306d61fe760e41b8452600484016114e1565b03925af1918215610501576001926104e7575b50016103e5565b806104f55f6104fb93610fcf565b80610215565b5f6104e0565b611261565b6369c9a24560e11b5f52600160045260245ffd5b61053b915060203d8111610541575b6105338183610fcf565b8101906114c9565b5f610494565b503d610529565b60409060031901126100fc57600435610560816100eb565b9060243590565b90929192604082016040835281518091526020606084019201905f5b81811061059f575050506001600160a01b036020919416910152565b82516001600160a01b0316845260209384019390920191600101610583565b346100fc576105cc36610548565b9060016001600160a01b03821614158061077f575b61076457811561073c57906105f5816120dc565b6106406106335f946001600160a01b03165f527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f0060205260405f2090565b546001600160a01b031690565b6001600160a01b0381168015159081610730575b5080610727575b156106c8576106bc610633826106866106c294610678898861210e565b906001600160a01b03169052565b6001600160a01b03165f527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f0060205260405f2090565b93612136565b92610640565b908360016001600160a01b03841614158061071e575b6106f4575b815261032260405192839283610567565b915061071861070b61070584612149565b8361210e565b516001600160a01b031690565b916106e3565b508015156106de565b5082841061065b565b6001915014155f610654565b7ff7250817000000000000000000000000000000000000000000000000000000005f5260045ffd5b637c84ecfb60e01b5f526001600160a01b031660045260245ffd5b5061079061078c826121ce565b1590565b6105e1565b346100fc575f3660031901126100fc5760206001600160a01b035f5416604051908152f35b805180835260209291819084018484015e5f828201840152601f01601f1916010190565b9060206107ef9281815201906107ba565b90565b346100fc5760803660031901126100fc5760043567ffffffffffffffff81116100fc5761082390369060040161032b565b60243561082f816100eb565b60443567ffffffffffffffff81116100fc577f01fe9ff20000000000000000000000000000000000000000000000000000000061090360206103229560ff6108ee6109139761088561092198369060040161011a565b906001600160a01b036108d661089961015b565b97826108b38235926108aa846100eb565b8c810190611045565b9190926040519e8f9d8e01521660248c015260a060448c015260c48b0191611078565b93166064880152868303602319016084880152611098565b911660a483015203601f198101835282610fcf565b60405192839130602084016110db565b03601f198101835282610fcf565b604051918291826107de565b346100fc575f3660031901126100fc576109eb60406109f88151916109528184610fcf565b600e83527f4e65787573426f6f747374726170000000000000000000000000000000000000602084015280516109888282610fcf565b600581527f312e302e30000000000000000000000000000000000000000000000000000000602082015281519485947f0f00000000000000000000000000000000000000000000000000000000000000865260e0602087015260e08601906107ba565b91848303908501526107ba565b4660608301523060808301525f60a083015281810360c083015260206060519182815201906080905f5b818110610a30575050500390f35b8251845285945060209384019390920191600101610a22565b346100fc5761032261091361092160a061090360246001600160a01b0360ff6108ee6108d6610abe610a7a36610339565b9a946040989493989792969197519e8f9d8e7f55470cf1000000000000000000000000000000000000000000000000000000006020820152015260c48d0191611157565b8a81036023190160448c0152906110fb565b60e06003198201126100fc5760043567ffffffffffffffff81116100fc5781610afb9160040161011a565b9290929160243567ffffffffffffffff81116100fc5781610b1e9160040161011a565b9290929160443567ffffffffffffffff81116100fc5781610b419160040161032b565b9160643567ffffffffffffffff81116100fc5782610b619160040161011a565b92909291610b6f608461010f565b9160a4359067ffffffffffffffff82116100fc57610b8f9160040161011a565b90916107ef60c461016b565b346100fc57610ba936610ad0565b97909493929591966040519a8b9a60208c017fd6fe71f100000000000000000000000000000000000000000000000000000000905260248c0160e090526101048c0190610bf592611157565b906023198b83030160448c0152610c0b92611157565b8881036023190160648a0152610c20916110fb565b90602319888303016084890152610c3692611157565b916001600160a01b031660a48601526023198583030160c4860152610c5a92611098565b9060ff1660e483015203601f1981018252610c759082610fcf565b604051908190610c899030602084016110db565b03601f1981018252610c9b9082610fcf565b6040516103228192826107de565b346100fc57610ccb610cba36610ad0565b929a9399949a98959891909161137e565b5f5b828110610db9575050505f5b818110610d7057505050610cfb610cef8261103b565b6001600160a01b031690565b610d5a575b505f5b818110610d0c57005b80610d25610cef610d206001948688611014565b61103b565b15610d5557610d4f610d3b610d20838688611014565b610d4961044a848789611014565b916116d9565b01610d03565b610d4f565b80610420610415610d6a9361103b565b5f610d00565b80610d84610cef610d206001948688611014565b15610db457610dae610d9a610d20838688611014565b610da861044a848789611014565b91611656565b01610cd9565b610dae565b80610de1610dcd610d206001948787611014565b610ddb61044a848888611014565b9161145a565b01610ccd565b346100fc57610df536610548565b9060016001600160a01b038216141580610ee5575b61076457811561073c5790610e1e816120dc565b610e5c6106335f946001600160a01b03165f527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f0160205260405f2090565b6001600160a01b0381168015159081610ed9575b5080610ed0575b156106c8576106bc61063382610e94610eca94610678898861210e565b6001600160a01b03165f527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f0160205260405f2090565b92610e5c565b50828410610e77565b6001915014155f610e70565b50610ef261078c82612221565b610e0a565b92946001600160a01b0394610f0e9397929661137e565b1691610f1983611c7c565b60405163ecd0596160e01b815260016004820152602081602481875afa908115610501575f91610f9c575b501561050657610f5383611dde565b823b156100fc57610f7d925f92836040518096819582946306d61fe760e41b8452600484016114e1565b03925af1801561050157610f8e5750565b806104f55f61010d93610fcf565b610fb5915060203d602011610541576105338183610fcf565b5f610f44565b634e487b7160e01b5f52604160045260245ffd5b90601f8019910116810190811067ffffffffffffffff82111761032657604052565b6040519061010d604083610fcf565b634e487b7160e01b5f52603260045260245ffd5b91908110156110365760051b81013590603e19813603018212156100fc570190565b611000565b356107ef816100eb565b903590601e19813603018212156100fc570180359067ffffffffffffffff82116100fc576020019181360383136100fc57565b908060209392818452848401375f828201840152601f01601f1916010190565b916020908281520191905f5b8181106110b15750505090565b9091926020806001926001600160a01b0387356110cd816100eb565b1681520194019291016110a4565b6040906001600160a01b036107ef949316815281602082015201906107ba565b6001600160a01b03813561110e816100eb565b1682526020810135601e19823603018112156100fc57016020813591019067ffffffffffffffff81116100fc5780360382136100fc576040838160206107ef9601520191611078565b90602083828152019060208160051b85010193835f915b83831061117e5750505050505090565b909192939495601f198282030186528635603e19843603018112156100fc5760206111ae600193868394016110fb565b98019601949301919061116e565b67ffffffffffffffff811161032657601f01601f191660200190565b6020818303126100fc5780519067ffffffffffffffff82116100fc570181601f820112156100fc5780519061120c826111bc565b9261121a6040519485610fcf565b828452602083830101116100fc57815f9260208093018386015e8301015290565b6107ef93926001600160a01b03606093168252602082015281604082015201905f611078565b6040513d5f823e3d90fd5b906001600160a01b036112a66001600160a01b037f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f03541690565b1691826112b9576107ef9192505f611af6565b604051907fd68f60250000000000000000000000000000000000000000000000000000000082525f82806112f23634336004850161123b565b038183885af1918215610501575f92611356575b50611311905f611af6565b92803b156100fc57610f7d5f929183926040519485809481937f173bf7da000000000000000000000000000000000000000000000000000000008352600483016107de565b611311919250611377903d805f833e61136f8183610fcf565b8101906111d8565b9190611306565b6001600160a01b039093919316928373ffffffffffffffffffffffffffffffffffffffff195f5416175f55836113d8575b5050507ff98c8404c5b1bfef2e6ba9233c6e88845aedfd36eea8b192725d8c199571cf325f80a2565b833b156100fc575f9161142960ff9260405195869485947ff05c04e1000000000000000000000000000000000000000000000000000000008652166004850152604060248501526044840191611098565b038183865af1801561050157611441575b80806113af565b8061144d5f8093610fcf565b8003126100fc575f61143a565b9161146483611c7c565b60405163ecd0596160e01b8152600160048201526001600160a01b0384169390602081602481885afa908115610501575f916114aa575b501561050657610f5390611dde565b6114c3915060203d602011610541576105338183610fcf565b5f61149b565b908160209103126100fc575180151581036100fc5790565b9160206107ef938181520191611078565b916114fc83611cdc565b60405163ecd0596160e01b81526004808201526001600160a01b0384169390602081602481885afa908115610501575f916115fa575b50156115e757610f53906115806115706001600160a01b037f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f03541690565b6001600160a01b03811615611619565b6001600160a01b031673ffffffffffffffffffffffffffffffffffffffff197f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f035416177f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f0355565b6369c9a24560e11b5f526004805260245ffd5b611613915060203d602011610541576105338183610fcf565b5f611532565b156116215750565b6001600160a01b03907f741cbe03000000000000000000000000000000000000000000000000000000005f521660045260245ffd5b9161166083611d32565b60405163ecd0596160e01b8152600260048201526001600160a01b0384169390602081602481885afa908115610501575f916116ba575b50156116a657610f5390611f88565b6369c9a24560e11b5f52600260045260245ffd5b6116d3915060203d602011610541576105338183610fcf565b5f611697565b90916116e482611d88565b60405163ecd0596160e01b8152600360048201526001600160a01b0383169290602081602481875afa908115610501575f91611928575b5015611914576118408461180961179a61179386806117716117646117568361175061174a61189f9e8c611947565b90611972565b996119a8565b356001600160f81b03191690565b6001600160f81b03191690565b9a6001600160f81b03198c161580156118fd575b61178e906119b7565b611955565b36916119e6565b966117c96001600160e01b031984166306d61fe760e41b81149081156118d3575b81156118ca575b5015611a1c565b6117de836117d961078c82612157565b611a4b565b6117f86117e9610ff1565b6001600160a01b039096168652565b6001600160f81b0319166020850152565b6001600160e01b0319165f527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f0260205260405f2090565b8151815460209093015174ff000000000000000000000000000000000000000060589190911c167fffffffffffffffffffffff0000000000000000000000000000000000000000009093166001600160a01b0390911617919091179055565b803b156100fc57610f7d5f929183926040519485809481936306d61fe760e41b8352600483016107de565b9050155f6117c2565b7f8a91b0e300000000000000000000000000000000000000000000000000000000811491506117bb565b50607f60f91b6001600160f81b03198d1614611785565b6369c9a24560e11b5f52600360045260245ffd5b611941915060203d602011610541576105338183610fcf565b5f61171b565b906004116100fc5790600490565b90929192836005116100fc5783116100fc57600501916004190190565b919091356001600160e01b03198116926004811061198e575050565b6001600160e01b0319929350829060040360031b1b161690565b90600410156110365760040190565b156119be57565b7f867a1dcf000000000000000000000000000000000000000000000000000000005f5260045ffd5b9291926119f2826111bc565b91611a006040519384610fcf565b8294818452818301116100fc578281602093845f960137010152565b15611a2357565b7fc001660b000000000000000000000000000000000000000000000000000000005f5260045ffd5b15611a535750565b6001600160e01b0319907fa56a04dd000000000000000000000000000000000000000000000000000000005f521660045260245ffd5b15611a915750565b6001600160e01b0319907f08c63e27000000000000000000000000000000000000000000000000000000005f521660045260245ffd5b3d15611af1573d90611ad8826111bc565b91611ae66040519384610fcf565b82523d5f602084013e565b606090565b505060605f905f35906001600160e01b03198216611b45816001600160e01b0319165f527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f0260205260405f2090565b5493611b656001600160a01b0386169560581b6001600160f81b03191690565b936001600160a01b03861615611c2c575050506001600160f81b03198216607f60f91b14905015611bc157505f8091611b9c6121a1565b90602082519201905afa90611baf611ac7565b915b15611bb857565b50602081519101fd5b6001600160f81b03198116611bf757505f8091611bdc6121a1565b906020825192019034905af190611bf1611ac7565b91611bb1565b7fb96fcfe4000000000000000000000000000000000000000000000000000000005f526001600160f81b03191660045260245ffd5b9193509194935060e01c63150b7a0263bc197c81821463f23a6e61831417911417611c5c575b9061010d91611a89565b506040805160048152602081018390526024810190915292506001611c52565b6001600160a01b035f54169081611c91575050565b813b156100fc576001600160a01b0360445f9260405194859384926396fb721760e01b8452166004830152600160248301525afa801561050157611cd25750565b5f61010d91610fcf565b6001600160a01b035f54169081611cf1575050565b813b156100fc576001600160a01b0360445f9260405194859384926396fb721760e01b8452166004830152600460248301525afa801561050157611cd25750565b6001600160a01b035f54169081611d47575050565b813b156100fc576001600160a01b0360445f9260405194859384926396fb721760e01b8452166004830152600260248301525afa801561050157611cd25750565b6001600160a01b035f54169081611d9d575050565b813b156100fc576001600160a01b0360445f9260405194859384926396fb721760e01b8452166004830152600360248301525afa801561050157611cd25750565b6001600160a01b03811680158015611f7e575b611f6c575f9081527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f0060205260409020546001600160a01b0316611f385760015f527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f0060205261010d90611eea611e877ffe44ceacbf4f03c6ac19f86826dd265fa9ec25125e8b1766c207f24cd3bc73c7610633565b611ec2837f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f00906001600160a01b03165f5260205260405f2090565b906001600160a01b031673ffffffffffffffffffffffffffffffffffffffff19825416179055565b60015f527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f006020527ffe44ceacbf4f03c6ac19f86826dd265fa9ec25125e8b1766c207f24cd3bc73c7611ec2565b7f40d3d1a4000000000000000000000000000000000000000000000000000000005f526001600160a01b031660045260245ffd5b637c84ecfb60e01b5f5260045260245ffd5b5060018114611df1565b6001600160a01b038116801580156120ba575b611f6c575f9081527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f0160205260409020546001600160a01b0316611f385760015f527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f0160205261010d9061206c6120317fbdfeb076d903611fa58576955630d640569633049bcf40ad9c22db9251b54a13610633565b611ec2837f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f01906001600160a01b03165f5260205260405f2090565b60015f527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f016020527fbdfeb076d903611fa58576955630d640569633049bcf40ad9c22db9251b54a13611ec2565b5060018114611f9b565b67ffffffffffffffff81116103265760051b60200190565b906120e6826120c4565b6120f36040519182610fcf565b8281528092612104601f19916120c4565b0190602036910137565b80518210156110365760209160051b010190565b634e487b7160e01b5f52601160045260245ffd5b5f1981146121445760010190565b612122565b5f1981019190821161214457565b61219a6001600160a01b03916001600160e01b0319165f527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f0260205260405f2090565b5416151590565b60405190602036830101604052816014360181525f602036920137604051601481016040523360601b9052565b6001600160a01b0316806001141590816121e6575090565b90505f527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f006020526001600160a01b0360405f205416151590565b6001600160a01b031680600114159081612239575090565b90505f527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f016020526001600160a01b0360405f20541615159056fea26469706673582212206a55a47ef686d4ea1765adce1a44a5b6b19cecc8010679c82a6b6dba751403ad64736f6c634300081b0033",
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
      "0x60806040526004361015610027575b36156100255761001d366129c1565b602081519101f35b005b5f3560e01c80630a664dba14610216578063112d3a7d146102115780631626ba7e1461020c57806319822f7c146102075780633644e51514610202578063481ddd23146101fd5780634a58db19146101f85780634b6a1419146101f35780634d44560d146101ee5780634f1ef286146101e957806352d1902d146101e45780635faac46b146101df5780636575f6aa146101da5780637b103999146101d557806384b0196e146101d05780638dd7712f146101cb5780639517e29f146101c65780639cfd7cff146101c1578063a71763a8146101bc578063aaf10f42146101b7578063b0d691fe146101b2578063c399ec88146101ad578063cd64f80a146101a8578063d03c7914146101a3578063d620c85a1461019e578063d691c96414610199578063d86f2b3c14610194578063e9ae5c531461018f578063ea5f61d01461018a578063eab77e17146101855763f2dc691d0361000e576119ac565b611938565b61183c565b61179a565b6116d9565b611592565b6114e9565b611438565b6111eb565b6111a5565b61117b565b61111d565b61104d565b610fee565b610e5f565b610d84565b610cca565b610c81565b610c5b565b610a98565b6109d3565b6108da565b610810565b610747565b61071d565b610688565b61055c565b610377565b610316565b6102f0565b610229565b5f91031261022557565b5f80fd5b34610225575f3660031901126102255760206001600160a01b035f5160206148285f395f51905f5254166001600160a01b0360405191168152f35b6001600160a01b0381160361022557565b359061028082610264565b565b9181601f840112156102255782359167ffffffffffffffff8311610225576020838186019501011161022557565b606060031982011261022557600435916024356102cc81610264565b916044359067ffffffffffffffff8211610225576102ec91600401610282565b9091565b3461022557602061030c610303366102b0565b92919091612adc565b6040519015158152f35b346102255760403660031901126102255760043560243567ffffffffffffffff811161022557602091610350610356923690600401610282565b91611b78565b6001600160e01b031960405191168152f35b90816101209103126102255790565b346102255760603660031901126102255760043567ffffffffffffffff8111610225576103a8903690600401610368565b60243590604435906103cb6f71727de22e5e9d8baf0edac6f37da0323314611c26565b6020810135906103f2604083901c6001600160a01b03169260031a60f81b600160f81b1490565b156104e357926020916104699461042c61042561041e6104123685611e01565b93610100810190611ee1565b9086612b67565b3691611db0565b6101008201526104448261043f81613385565b611a95565b5f6001600160a01b03604051809881968295639700320360e01b845260048401611f14565b0393165af19182156104de5761049b9282915f916104af575b50915b61049f575b506040519081529081906020820190565b0390f35b5f9081803892335af1505f61048a565b6104d1915060203d6020116104d7575b6104c98183611aee565b810190611c55565b5f610482565b503d6104bf565b611b6d565b928161051d946104f88261043f602096613385565b5f6001600160a01b03604051809881968295639700320360e01b845260048401611d59565b0393165af19182156104de5761049b9282915f9161053d575b5091610485565b610556915060203d6020116104d7576104c98183611aee565b5f610536565b34610225575f366003190112610225577f0000000000000000000000000000000000000000000000000000000000000000467f000000000000000000000000000000000000000000000000000000000000000014307f00000000000000000000000000000000000000000000000000000000000000001416156105e5575b602090604051908152f35b50602061066f60a06040517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f81527f000000000000000000000000000000000000000000000000000000000000000060208201527f000000000000000000000000000000000000000000000000000000000000000060408201524660608201523060808201522090565b90506105da565b6001600160e01b031981160361022557565b3461022557602036600319011261022557604060206106e36004356106ac81610676565b6001600160e01b0319165f527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f0260205260405f2090565b8251906106ef82611acd565b54906001600160f81b03196001600160a01b0383169283835260581b16928391015282519182526020820152f35b5f366003190112610225575f388180346f71727de22e5e9d8baf0edac6f37da0325af11561022557005b60203660031901126102255760043567ffffffffffffffff8111610225575f61079061077882933690600401610282565b610780613be7565b610788613c82565b810190611fc3565b906001600160a01b0360208351930191165af46107ab611ffa565b50156107e8576107b9612cb9565b156107c057005b7fc4d0a0b1000000000000000000000000000000000000000000000000000000005f5260045ffd5b7f315927c5000000000000000000000000000000000000000000000000000000005f5260045ffd5b60403660031901126102255760043561082881610264565b6024356f71727de22e5e9d8baf0edac6f37da03233148015610898575b61084e90611c26565b604051916014526034526f205c28780000000000000000000000005f525f3860446010836f71727de22e5e9d8baf0edac6f37da0325af115610890575f603452005b3d5f823e3d90fd5b50333014610845565b906040600319830112610225576004356108ba81610264565b916024359067ffffffffffffffff8211610225576102ec91600401610282565b6108e3366108a1565b906001600160a01b0361090a6001600160a01b035f5160206148285f395f51905f52541690565b168061091a5750610025926120f2565b90916040519263d68f602560e01b84525f848061093c3634336004850161208c565b038183875af19384156104de575f946109ab575b5061095c9293946120f2565b803b15610225576109875f92918392604051948580948193630b9dfbed60e11b8352600483016120b2565b03925af180156104de5761099757005b806109a55f61002593611aee565b8061021b565b61095c9394506109cc903d805f833e6109c48183611aee565b810190612029565b9392610950565b34610225575f36600319011261022557307f000000000000000000000000000000000000000000000000000000000000000003610a345760206040517f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8152f35b639f03a0265f526004601cfd5b90929192604082016040835281518091526020606084019201905f5b818110610a79575050506001600160a01b036020919416910152565b82516001600160a01b0316845260209384019390920191600101610a5d565b3461022557604036600319011261022557600435610ab581610264565b6024359060016001600160a01b038216141580610c45575b610c2a578115610c025790610ae181613cf5565b610b19610b0c5f946001600160a01b03165f525f5160206148085f395f51905f5260205260405f2090565b546001600160a01b031690565b6001600160a01b0381168015159081610bf6575b5080610bed575b15610b8e57610b82610b0c82610b5f610b8894610b518988613628565b906001600160a01b03169052565b6001600160a01b03165f525f5160206148085f395f51905f5260205260405f2090565b93613d27565b92610b19565b908360016001600160a01b038416141580610be4575b610bba575b815261049b60405192839283610a41565b9150610bde610bd1610bcb84613d35565b83613628565b516001600160a01b031690565b91610ba9565b50801515610ba4565b50828410610b34565b6001915014155f610b2d565b7ff7250817000000000000000000000000000000000000000000000000000000005f5260045ffd5b637c84ecfb60e01b5f526001600160a01b031660045260245ffd5b50610c56610c5282613385565b1590565b610acd565b34610225576020366003190112610225576020610c79600435612d4b565b604051908152f35b34610225575f3660031901126102255760206001600160a01b035f5416604051908152f35b805180835260209291819084018484015e5f828201840152601f01601f1916010190565b34610225575f36600319011261022557610d25610d33610ce8612e63565b6040929192519384937f0f00000000000000000000000000000000000000000000000000000000000000855260e0602086015260e0850190610ca6565b908382036040850152610ca6565b4660608301523060808301525f60a083015281810360c083015260206060519182815201906080905f5b818110610d6b575050500390f35b8251845285945060209384019390920191600101610d5d565b60403660031901126102255760043567ffffffffffffffff811161022557610db0903690600401610368565b610dcb6f71727de22e5e9d8baf0edac6f37da0323314611c26565b6001600160a01b03610df16001600160a01b035f5160206148285f395f51905f52541690565b1680610e0157506100259061221c565b6040519163d68f602560e01b83525f8380610e213634336004850161208c565b038183865af19283156104de575f93610e3f575b5061095c9061221c565b61095c919350610e58903d805f833e6109c48183611aee565b9290610e35565b610e68366102b0565b6f71727de22e5e9d8baf0edac6f37da03293919333148015610fe5575b610e8e90611c26565b6001600160a01b03610eb46001600160a01b035f5160206148285f395f51905f52541690565b1680610f0a5750610ee8907fd21d0b289f126c4b473ea641963e766833c2f13866e4ff480abd787c100ef123948484612f9f565b604080519182526001600160a01b03909216602082015290819081015b0390a1005b906040519463d68f602560e01b86525f8680610f2b3634336004850161208c565b038183875af19586156104de575f96610fc3575b5090610f4c918585612f9f565b803b1561022557610f775f94918592604051968780948193630b9dfbed60e11b8352600483016120b2565b03925af19283156104de577fd21d0b289f126c4b473ea641963e766833c2f13866e4ff480abd787c100ef12393610faf575b50610ee8565b806109a55f610fbd93611aee565b5f610fa9565b610f4c92919650610fdd903d805f833e6109c48183611aee565b959091610f3f565b50333014610e85565b34610225575f3660031901126102255761049b60405161100f604082611aee565b601481527f6269636f6e6f6d792e6e657875732e312e302e300000000000000000000000006020820152604051918291602083526020830190610ca6565b611056366102b0565b916f71727de22e5e9d8baf0edac6f37da03233148015611114575b61107a90611c26565b6001600160a01b036110a06001600160a01b035f5160206148285f395f51905f52541690565b16806110b057506100259361232f565b916040939193519363d68f602560e01b85525f85806110d43634336004850161208c565b038183885af19485156104de575f956110f4575b5061095c93949561232f565b61095c94955061110d903d805f833e6109c48183611aee565b94936110e8565b50333014611071565b34610225575f366003190112610225577f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b03811615611173575b6020906001600160a01b0360405191168152f35b50305461115f565b34610225575f3660031901126102255760206040516f71727de22e5e9d8baf0edac6f37da0328152f35b34610225575f36600319011261022557306020526370a082315f52602080806024601c6f71727de22e5e9d8baf0edac6f37da0325afa601f3d1116815102604051908152f35b6111f4366108a1565b61120f6f71727de22e5e9d8baf0edac6f37da0323314611c26565b5f5160206148285f395f51905f52546112379084906001600160a01b038083169116146122de565b611271836001600160a01b03165f527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f0460205260405f2090565b54806112fb57505050610f057f2841d18703faaff388732165e48fe431468531b1b1e626b1b7cbcbfc0d79c74091426112da826001600160a01b03165f527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f0460205260405f2090565b55604080516001600160a01b03909216825242602083015290918291820190565b6113086203f480826124cd565b421061137157505050610f057fcbd44a75f6935b5837022648b6c8487db984701200c5381c7c0f8c2b1d69b9da91426112da826001600160a01b03165f527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f0460205260405f2090565b61137e90939192936124b8565b4210611410576113ef610f05927f341347516a9de374859dfda710fa4828b2d48cb57d4fbe4c1149612b8e02276e945f6113e8856001600160a01b03165f527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f0460205260405f2090565b5583613074565b60408051600481526001600160a01b03909216602083015290918291820190565b7f07f2f2d2000000000000000000000000000000000000000000000000000000005f5260045ffd5b346102255760203660031901126102255761049b6004358060081b6001600160f81b03198216159182156114d1575b82156114bc575b5081611488575b5060405190151581529081906020820190565b6001600160f81b0319811615915081156114a4575b505f611475565b6001600160f81b031916600160f81b1490505f61149d565b6001600160f81b03199081161491505f61146e565b6001600160f81b03198116600160f81b149250611467565b34610225575f366003190112610225576020610c796124da565b90604060031983011261022557600435916024359067ffffffffffffffff8211610225576102ec91600401610282565b602081016020825282518091526040820191602060408360051b8301019401925f915b83831061156557505050505090565b9091929394602080611583600193603f198682030187528951610ca6565b97019301930191939290611556565b61159b36611503565b916115a5336133c5565b156116ad576001600160a01b036115d06001600160a01b035f5160206148285f395f51905f52541690565b16806115f15750916115e59161049b936125de565b60405191829182611533565b90926040519263d68f602560e01b84525f84806116133634336004850161208c565b038183875af19384156104de575f9461168d575b506116339293946125de565b90803b156102255761165f5f93918492604051958680948193630b9dfbed60e11b8352600483016120b2565b03925af19182156104de5761049b92611679575b506115e5565b806109a55f61168793611aee565b5f611673565b6116339394506116a6903d805f833e6109c48183611aee565b9392611627565b7fb927fe5e000000000000000000000000000000000000000000000000000000005f523360045260245ffd5b346102255760203660031901126102255760043577ffffffffffffffffffffffffffffffffffffffffffffffff811680910361022557604051907f35567e1a00000000000000000000000000000000000000000000000000000000825230600483015260248201526020816044816f71727de22e5e9d8baf0edac6f37da0325afa80156104de5761049b915f9161177b57506040519081529081906020820190565b611794915060203d6020116104d7576104c98183611aee565b5f61048a565b6117a336611503565b906001600160a01b036117ca6001600160a01b035f5160206148285f395f51905f52541690565b16806117da575061002592612739565b90916040519263d68f602560e01b84525f84806117fc3634336004850161208c565b038183875af19384156104de575f9461181c575b5061095c929394612739565b61095c939450611835903d805f833e6109c48183611aee565b9392611810565b346102255760403660031901126102255760043561185981610264565b6024359060016001600160a01b038216141580611926575b610c2a578115610c02579061188581613cf5565b6118b0610b0c5f946001600160a01b03165f525f5160206148485f395f51905f5260205260405f2090565b6001600160a01b038116801515908161191a575b5080611911575b15610b8e57610b82610b0c826118e861190b94610b518988613628565b6001600160a01b03165f525f5160206148485f395f51905f5260205260405f2090565b926118b0565b508284106118cb565b6001915014155f6118c4565b50611933610c52826133c5565b611871565b60603660031901126102255760043561195081610264565b6024359067ffffffffffffffff8211610225573660238301121561022557816004013567ffffffffffffffff8111610225573660248260051b85010111610225576044359160ff8316830361022557602461002594019061284c565b3461022557602036600319011261022557602061030c60043561297c565b906014116102255790601490565b909291928360141161022557831161022557601401916013190190565b906004116102255790600490565b909291928360041161022557831161022557600401916003190190565b909291928360051161022557831161022557600501916004190190565b90939293848311610225578411610225578101920390565b356bffffffffffffffffffffffff19811692919060148210611a75575050565b6bffffffffffffffffffffffff1960149290920360031b82901b16169150565b15611a9d5750565b6001600160a01b039063342cf00f60e11b5f521660045260245ffd5b634e487b7160e01b5f52604160045260245ffd5b6040810190811067ffffffffffffffff821117611ae957604052565b611ab9565b90601f8019910116810190811067ffffffffffffffff821117611ae957604052565b908160209103126102255751611b2581610676565b90565b908060209392818452848401375f828201840152601f01601f1916010190565b611b2594926001600160a01b0360609316825260208201528160408201520191611b28565b6040513d5f823e3d90fd5b6020916001600160a01b0391611bb5611bd69580611b9f611b9982876119ca565b90611a55565b60601c94611bb08661043f81613385565b6119d8565b93909160405196879586948593637aa8f17760e11b85523360048601611b48565b0392165afa5f9181611bf5575b50611b2557506001600160e01b031990565b611c1891925060203d602011611c1f575b611c108183611aee565b810190611b10565b905f611be3565b503d611c06565b15611c2d57565b7fac52ccbe000000000000000000000000000000000000000000000000000000005f5260045ffd5b90816020910312610225575190565b9035601e198236030181121561022557016020813591019167ffffffffffffffff821161022557813603831361022557565b611b2591611cb481611ca784610275565b6001600160a01b03169052565b60208201356020820152611d4a611d3e611d05611cea611cd76040870187611c64565b6101206040880152610120870191611b28565b611cf76060870187611c64565b908683036060880152611b28565b6080850135608085015260a085013560a085015260c085013560c0850152611d3060e0860186611c64565b9085830360e0870152611b28565b92610100810190611c64565b91610100818503910152611b28565b929190611d70602091604086526040860190611c96565b930152565b6040519061028061012083611aee565b60405190610280604083611aee565b67ffffffffffffffff8111611ae957601f01601f191660200190565b929192611dbc82611d94565b91611dca6040519384611aee565b829481845281830111610225578281602093845f960137010152565b9080601f8301121561022557816020611b2593359101611db0565b9190916101208184031261022557611e17611d75565b92611e2182610275565b845260208201356020850152604082013567ffffffffffffffff81116102255781611e4d918401611de6565b6040850152606082013567ffffffffffffffff81116102255781611e72918401611de6565b60608501526080820135608085015260a082013560a085015260c082013560c085015260e082013567ffffffffffffffff81116102255781611eb5918401611de6565b60e085015261010082013567ffffffffffffffff811161022557611ed99201611de6565b610100830152565b903590601e1981360301821215610225570180359067ffffffffffffffff82116102255760200191813603831361022557565b929190611d7060209160408652611f376040870182516001600160a01b03169052565b828101516060870152610100611fae611f7a611f64604085015161012060808c01526101608b0190610ca6565b60608501518a8203603f190160a08c0152610ca6565b608084015160c08a015260a084015160e08a015260c0840151838a015260e0840151603f198a8303016101208b0152610ca6565b910151868203603f1901610140880152610ca6565b919091604081840312610225578035611fdb81610264565b92602082013567ffffffffffffffff811161022557611b259201611de6565b3d15612024573d9061200b82611d94565b916120196040519384611aee565b82523d5f602084013e565b606090565b6020818303126102255780519067ffffffffffffffff8211610225570181601f820112156102255780519061205d82611d94565b9261206b6040519485611aee565b8284526020838301011161022557815f9260208093018386015e8301015290565b611b2593926001600160a01b03606093168252602082015281604082015201905f611b28565b906020611b25928181520190610ca6565b156120ca57565b7fc970156c000000000000000000000000000000000000000000000000000000005f5260045ffd5b9190916001600160a01b0381169061210b8215156120c3565b612117813b15156120c3565b3055307f000000000000000000000000000000000000000000000000000000000000000014610a34576f71727de22e5e9d8baf0edac6f37da03233148015612213575b61216390611c26565b6352d1902d6001527f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc602060016004601d855afa510361220557807fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b5f80a281817f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc556121ef57505050565b815f926040519485378338925af4156108905750565b6355299b496001526004601dfd5b5033301461215a565b6122296060820182611ee1565b80600411610225576040515f9283929060031982019060040183378101826003198201528160031991030190305af4612260611ffa565b90156122b6577fd3fddfd1276d1cc278f10907710a44474a32f917b2fcfa198f46ca7689215e2f916122b16122a392604051938493604085526040850190611c96565b908382036020850152610ca6565b0390a1565b7facfdb444000000000000000000000000000000000000000000000000000000005f5260045ffd5b156122e65750565b6001600160a01b0390635f300b3960e11b5f52600480521660245260445ffd5b1561230f575050565b6001600160a01b039250635f300b3960e11b5f526004521660245260445ffd5b92919092612349848261234486868484612adc565b612306565b604080518281526001600160a01b03861660208201527f341347516a9de374859dfda710fa4828b2d48cb57d4fbe4c1149612b8e02276e9190a160018103612395575061028092613235565b600281036123a75750610280926130c0565b9091906003810361248c575090612488926124546124839361244c6040516123ce81611acd565b5f81525f60208201526123ed6106ac6123e785896119f5565b90612aa6565b8151815460209093015174ff000000000000000000000000000000000000000060589190911c167fffffffffffffffffffffff0000000000000000000000000000000000000000009093166001600160a01b0390911617919091179055565b805a94611a03565b9390612475604051958692638a91b0e360e01b602085015260248401613063565b03601f198101855284611aee565b614343565b5050565b90919060041461249b57505050565b61028092613074565b634e487b7160e01b5f52601160045260245ffd5b906201518082018092116124c857565b6124a4565b919082018092116124c857565b60015f525f5160206148085f395f51905f526020526125187ffe44ceacbf4f03c6ac19f86826dd265fa9ec25125e8b1766c207f24cd3bc73c7610b0c565b6001600160a01b038116801515806125d3575b156125c557602060049160405192838092636b10642d60e11b82525afa5f91816125a5575b50612586575b50610b0c612581916001600160a01b03165f525f5160206148085f395f51905f5260205260405f2090565b612518565b636b10642d60e11b14612599575f612556565b50636b10642d60e11b90565b6125be91925060203d81116104d7576104c98183611aee565b905f612550565b50506001600160e01b031990565b50600181141561252b565b91906125e933613405565b8260081b92612600816001600160f81b0319161590565b15612611575090611b259291613732565b6001600160f81b03198116600160f81b03612632575090611b259291613662565b6001600160f81b03198082160361271c57509061264e9161438e565b909161265861357f565b936001600160f81b0319811661268a575091612673926143cd565b61267c82613616565b5261268681613616565b5090565b6001600160f81b03198116600160f81b03612700575081836126ab926143a8565b6126b485613616565b52156126bf57505090565b7f5bd4c60b4b38b664d8fb5944eb974e3d85083d79afe5ce934ccabcc913707c10916126fa6126ed85613616565b516040519384938461363c565b0390a190565b6308c3ee0360e11b5f526001600160f81b03191660045260245ffd5b6001600160f81b031990632e5bf3f960e21b5f521660045260245ffd5b91908260081b92612752816001600160f81b0319161590565b15612763575090610280929161386e565b6001600160f81b03198116600160f81b0361278457509061028092916137dc565b6001600160f81b03198082160361271c5750906127a09161438e565b929091906001600160f81b031981166127ce57505f9083604051938437838338925af4156108905701604052565b9192916001600160f81b03198116600160f81b0361282f575081836127f2926143a8565b9290156127fe57505050565b6122b17f5bd4c60b4b38b664d8fb5944eb974e3d85083d79afe5ce934ccabcc913707c10936040519384938461363c565b6001600160f81b0319906308c3ee0360e11b5f521660045260245ffd5b6001600160a01b03909392936f71727de22e5e9d8baf0edac6f37da03233148015612973575b61287b90611c26565b1692836001600160a01b03195f5416175f55836128bc575b5050507ff98c8404c5b1bfef2e6ba9233c6e88845aedfd36eea8b192725d8c199571cf325f80a2565b833b1561022557604080517ff05c04e100000000000000000000000000000000000000000000000000000000815260ff9094166004850152602484015260448301819052829160648301915f5b818110612945575050509080825f9350038183865af180156104de57612931575b8080612893565b806109a55f61293f93611aee565b5f61292a565b919350916020806001926001600160a01b03873561296281610264565b168152019401910191849392612909565b50333014612872565b6001810361298a5750600190565b600281036129985750600190565b600381036129a65750600190565b600481036129b45750600190565b6129bd57600190565b5f90565b906001600160a01b036129e86001600160a01b035f5160206148285f395f51905f52541690565b1691826129fb57611b259192505f61393f565b6040519063d68f602560e01b82525f8280612a1b3634336004850161208c565b038183885af19182156104de575f92612a86575b50612a3a905f61393f565b92803b1561022557612a665f92918392604051948580948193630b9dfbed60e11b8352600483016120b2565b03925af180156104de57612a78575b50565b806109a55f61028093611aee565b612a3a919250612a9f903d805f833e6109c48183611aee565b9190612a2f565b919091356001600160e01b031981169260048110612ac2575050565b6001600160e01b0319929350829060040360031b1b161690565b92909160018403612af3575050611b259150613385565b60028403612b07575050611b2591506133c5565b60038403612b3657611b25935060048210612b2e57612b29916123e7916119f5565b613aac565b50505f613aac565b5050906004145f14612b62575f5160206148285f395f51905f52546001600160a01b0391821691161490565b505f90565b9290803560601c601482013591603481013560e01c91612c84610c526038840193612baa868201998281600460388e968188013560e01c80980103010191611a3d565b9a909a99603c605b604051612bc0608082611aee565b8181527f70486173682c6279746573333220696e69744461746148617368290000000000606060208301927f4d6f64756c65456e61626c654d6f64652861646472657373206d6f64756c652c84527f75696e74323536206d6f64756c65547970652c6279746573333220757365724f604082015201522091612c43368b8b611db0565b6020815191012060405194602086019485528960408701528c6060870152608086015260a085015260a08452612c7a60c085611aee565b0191519020613af8565b612c915761028093612ed7565b7f46fdc333000000000000000000000000000000000000000000000000000000005f5260045ffd5b60015f8190525f5160206148085f395f51905f526020527ffe44ceacbf4f03c6ac19f86826dd265fa9ec25125e8b1766c207f24cd3bc73c7546001600160a01b0316141580612d055790565b5060015f525f5160206148085f395f51905f526020527ffe44ceacbf4f03c6ac19f86826dd265fa9ec25125e8b1766c207f24cd3bc73c7546001600160a01b0316151590565b7f0000000000000000000000000000000000000000000000000000000000000000467f000000000000000000000000000000000000000000000000000000000000000014307f0000000000000000000000000000000000000000000000000000000000000000141615612dd6575b6719010000000000005f52601a52603a526042601820905f603a52565b50612e5e60a06040517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f81527f000000000000000000000000000000000000000000000000000000000000000060208201527f000000000000000000000000000000000000000000000000000000000000000060408201524660608201523060808201522090565b612db9565b604051612e71604082611aee565b600581527f4e65787573000000000000000000000000000000000000000000000000000000602082015290604051612eaa604082611aee565b600581527f312e302e30000000000000000000000000000000000000000000000000000000602082015290565b9291906001600160a01b03612f006001600160a01b035f5160206148285f395f51905f52541690565b1680612f10575061028093612f9f565b916040939193519363d68f602560e01b85525f8580612f343634336004850161208c565b038183885af19485156104de575f95612f7f575b50612f54939495612f9f565b803b1561022557612a665f92918392604051948580948193630b9dfbed60e11b8352600483016120b2565b612f54949550612f98903d805f833e6109c48183611aee565b9493612f48565b939291906001600160a01b0381161561303b5760018503612fc55761028093945061427f565b60028503612fd8576102809394506141fc565b60038503612feb57610280939450613f9f565b60048503612ffe57610280939450613e5e565b8461300e57610280939450613d6a565b7f098312d2000000000000000000000000000000000000000000000000000000005f52600485905260245ffd5b7f5316c18d000000000000000000000000000000000000000000000000000000005f5260045ffd5b916020611b25938181520191611b28565b5f5160206148285f395f51905f5280546001600160a01b031916905561248892906124835a92612475604051958692638a91b0e360e01b60208501526020602485018181520191611b28565b906130d6906001600160a01b0393810190611fc3565b92166001600160a01b0382168015801561322b575b613218576001600160a01b0361311f835f5160206148485f395f51905f52906001600160a01b03165f5260205260405f2090565b5416036131fc5791816131a061248894613185613160610b0c612475975f5160206148485f395f51905f52906001600160a01b03165f5260205260405f2090565b915f5160206148485f395f51905f52906001600160a01b03165f5260205260405f2090565b906001600160a01b03166001600160a01b0319825416179055565b6131db6131cb825f5160206148485f395f51905f52906001600160a01b03165f5260205260405f2090565b6001600160a01b03198154169055565b6124835a92604051948591638a91b0e360e01b6020840152602483016120b2565b637c84ecfb60e01b5f526001600160a01b03821660045260245ffd5b50637c84ecfb60e01b5f5260045260245ffd5b50600181146130eb565b9061324b906001600160a01b0393810190611fc3565b92166001600160a01b0382168015801561337b575b613218576001600160a01b03613294835f5160206148085f395f51905f52906001600160a01b03165f5260205260405f2090565b5416036131fc576132f2906131856132cd610b0c855f5160206148085f395f51905f52906001600160a01b03165f5260205260405f2090565b915f5160206148085f395f51905f52906001600160a01b03165f5260205260405f2090565b61331d6131cb825f5160206148085f395f51905f52906001600160a01b03165f5260205260405f2090565b613325612cb9565b156133535761248891612475916124835a92604051948591638a91b0e360e01b6020840152602483016120b2565b7fcc319d84000000000000000000000000000000000000000000000000000000005f5260045ffd5b5060018114613260565b6001600160a01b03168060011415908161339d575090565b90505f525f5160206148085f395f51905f526020526001600160a01b0360405f205416151590565b6001600160a01b0316806001141590816133dd575090565b90505f525f5160206148485f395f51905f526020526001600160a01b0360405f205416151590565b6001600160a01b035f5416908161341a575050565b813b15610225576001600160a01b0360445f9260405194859384926396fb721760e01b8452166004830152600260248301525afa80156104de5761345b5750565b5f61028091611aee565b6001600160a01b035f5416908161347a575050565b813b15610225576001600160a01b0360445f9260405194859384926396fb721760e01b8452166004830152600460248301525afa80156104de5761345b5750565b6001600160a01b035f541690816134d0575050565b813b15610225576001600160a01b0360445f9260405194859384926396fb721760e01b8452166004830152600360248301525afa80156104de5761345b5750565b6001600160a01b035f54169081613526575050565b813b15610225576001600160a01b0360445f9260405194859384926396fb721760e01b8452166004830152600160248301525afa80156104de5761345b5750565b67ffffffffffffffff8111611ae95760051b60200190565b604080519091906135908382611aee565b6001815291601f1901825f5b8281106135a857505050565b80606060208093850101520161359c565b906135c382613567565b6135d06040519182611aee565b82815280926135e1601f1991613567565b01905f5b8281106135f157505050565b8060606020809385010152016135e5565b634e487b7160e01b5f52603260045260245ffd5b8051156136235760200190565b613602565b80518210156136235760209160051b010190565b91611b25939161365491604085526040850191611b28565b916020818403910152610ca6565b905080350160208101903591613680816001600160f81b0319161590565b156136f2575061368f826135b9565b915f5b81811061369f5750505090565b806136d66136b06001938587614400565b80356136bb81610264565b6136ce6020830135926040810190611ee1565b929091614521565b6136e08287613628565b526136eb8186613628565b5001613692565b9291906001600160f81b03198416600160f81b0361371557611b25929350614422565b6001600160f81b0319846308c3ee0360e11b5f521660045260245ffd5b9061373f919392936144d2565b91909261374a61357f565b956001600160f81b031981166137795750906137669391614521565b61376f83613616565b52612a7582613616565b6001600160f81b03198116600160f81b0361282f57508361379b9284926144fa565b6137a486613616565b52156137ae575050565b7fb5282692b8c578af7fb880895d599035496b5e64d1f14bf428a1ed3bc406f662916122b16126ed86613616565b905080350190602082019135906137fb816001600160f81b0319161590565b1561384c57505f5b81811061380f57505050565b806138466138206001938587614400565b803561382b81610264565b61383e6020830135926040810190611ee1565b92909161454e565b01613803565b92916001600160f81b03198416600160f81b0361371557612a75929350614422565b6001600160f81b031991613881916144d2565b90949093919291168061389a575090610280939161454e565b600160f81b81036138ef5750836138b29284926144fa565b9290156138be57505050565b6122b17fb5282692b8c578af7fb880895d599035496b5e64d1f14bf428a1ed3bc406f662936040519384938461363c565b6308c3ee0360e11b5f5260045260245ffd5b156139095750565b6001600160e01b0319907f08c63e27000000000000000000000000000000000000000000000000000000005f521660045260245ffd5b505060605f905f35906001600160e01b0319821661398e816001600160e01b0319165f527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f0260205260405f2090565b54936139ae6001600160a01b0386169560581b6001600160f81b03191690565b936001600160a01b03861615613a5c575050506001600160f81b03198216607f60f91b14905015613a0a57505f80916139e561456a565b90602082519201905afa906139f8611ffa565b915b15613a0157565b50602081519101fd5b6001600160f81b03198116613a4057505f8091613a2561456a565b906020825192019034905af190613a3a611ffa565b916139fa565b632e5bf3f960e21b5f526001600160f81b03191660045260245ffd5b9193509194935060e01c63150b7a0263bc197c81821463f23a6e61831417911417613a8c575b9061028091613901565b506040805160048152602081018390526024810190915292506001613a82565b6001600160a01b03613af081926001600160e01b0319165f527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f0260205260405f2090565b541691161490565b91613b0f613b09611b9983856119ca565b60601c90565b92613b1c610c5285613385565b613bcb5792602092613b43836001600160a01b0394613b3d613b6498612d4b565b936119d8565b93909160405196879586948593637aa8f17760e11b85523060048601611b48565b0392165afa5f9181613baa575b50613b7b57505f90565b6001600160e01b0319167f1626ba7e000000000000000000000000000000000000000000000000000000001490565b613bc491925060203d602011611c1f57611c108183611aee565b905f613b71565b63342cf00f60e11b5f526001600160a01b03841660045260245ffd5b60015f525f5160206148485f395f51905f526020527fbdfeb076d903611fa58576955630d640569633049bcf40ad9c22db9251b54a13546001600160a01b0316613c5a5760015f525f5160206148485f395f51905f5260205261028060405f2060016001600160a01b0319825416179055565b7f53c85e66000000000000000000000000000000000000000000000000000000005f5260045ffd5b60015f525f5160206148085f395f51905f526020527ffe44ceacbf4f03c6ac19f86826dd265fa9ec25125e8b1766c207f24cd3bc73c7546001600160a01b0316613c5a5760015f525f5160206148085f395f51905f5260205261028060405f2060016001600160a01b0319825416179055565b90613cff82613567565b613d0c6040519182611aee565b8281528092613d1d601f1991613567565b0190602036910137565b5f1981146124c85760010190565b5f198101919082116124c857565b91908110156136235760051b0190565b90821015613623576102ec9160051b810190611ee1565b9150613d8c908035810191602083019235916020810135019060208201913590565b929391808403613e36575f5b818110613da757505050505050565b80613db56001928489613d43565b35828103613dd95750613dd3613dcc828887613d53565b908761427f565b01613d98565b60028103613dfc5750613df7613df0828887613d53565b90876141fc565b613dd3565b60038103613e1a5750613df7613e13828887613d53565b9087613f9f565b600403613df757613df7613e2f828887613d53565b9087613e5e565b7fb4fa3fb3000000000000000000000000000000000000000000000000000000005f5260045ffd5b91613e6883613465565b60405163ecd0596160e01b81526004808201526001600160a01b0384169390602081602481885afa9081156104de575f91613f1b575b5015613f0857613ede90613ed9613ec96001600160a01b035f5160206148285f395f51905f52541690565b6001600160a01b03811615613f62565b614302565b823b1561022557612a66925f92836040518096819582946306d61fe760e41b845260048401613063565b6369c9a24560e11b5f526004805260245ffd5b613f3d915060203d602011613f43575b613f358183611aee565b810190613f4a565b5f613e9e565b503d613f2b565b90816020910312610225575180151581036102255790565b15613f6a5750565b6001600160a01b03907f741cbe03000000000000000000000000000000000000000000000000000000005f521660045260245ffd5b9091613faa826134bb565b60405163ecd0596160e01b8152600360048201526001600160a01b0383169290602081602481875afa9081156104de575f91614132575b501561411e576123ed846106ac6140536104258680614031614024614016836140106123e76140c29e8c6119f5565b99614151565b356001600160f81b03191690565b6001600160f81b03191690565b9a6001600160f81b03198c16158015614107575b61404e90614160565b611a20565b966140826001600160e01b031984166306d61fe760e41b81149081156140f6575b81156140ed575b501561418f565b61409783614092610c5282614597565b6141be565b6140b16140a2611d85565b6001600160a01b039096168652565b6001600160f81b0319166020850152565b803b1561022557612a665f929183926040519485809481936306d61fe760e41b8352600483016120b2565b9050155f61407b565b638a91b0e360e01b81149150614074565b50607f60f91b6001600160f81b03198d1614614045565b6369c9a24560e11b5f52600360045260245ffd5b61414b915060203d602011613f4357613f358183611aee565b5f613fe1565b90600410156136235760040190565b1561416757565b7f867a1dcf000000000000000000000000000000000000000000000000000000005f5260045ffd5b1561419657565b7fc001660b000000000000000000000000000000000000000000000000000000005f5260045ffd5b156141c65750565b6001600160e01b0319907fa56a04dd000000000000000000000000000000000000000000000000000000005f521660045260245ffd5b9161420683613405565b60405163ecd0596160e01b8152600260048201526001600160a01b0384169390602081602481885afa9081156104de575f91614260575b501561424c57613ede906145e1565b6369c9a24560e11b5f52600260045260245ffd5b614279915060203d602011613f4357613f358183611aee565b5f61423d565b9161428983613511565b60405163ecd0596160e01b8152600160048201526001600160a01b0384169390602081602481885afa9081156104de575f916142e3575b50156142cf57613ede90614717565b6369c9a24560e11b5f52600160045260245ffd5b6142fc915060203d602011613f4357613f358183611aee565b5f6142c0565b6001600160a01b0361028091166001600160a01b03166001600160a01b03195f5160206148285f395f51905f525416175f5160206148285f395f51905f5255565b604051939260209291906143578487611aee565b5f86525f928380936020890196601f190136883760208451940192f1903d9081614386575b5f908286523e9190565b5f915061437c565b918160141161022557823560601c92601401916013190190565b5f9192806040519485378338925af4913d82523d5f602084013e60203d830101604052565b5f919392806040519586378438925af4156143f7573d82523d5f602084013e60203d830101604052565b503d5f823e3d90fd5b91908110156136235760051b81013590605e1981360301821215610225570190565b91909161442e836135b9565b925f5b81811061443d57505050565b8061444b6001928486614400565b80359061445782610264565b6144766020820135604083019361446e8585611ee1565b9290916144fa565b614480858b613628565b521561448f575b505001614431565b7fb5282692b8c578af7fb880895d599035496b5e64d1f14bf428a1ed3bc406f662916144ba91611ee1565b906144c86126ed858b613628565b0390a15f80614487565b908060141161022557813560601c926034821061022557601483013592603401916033190190565b905f928491604051958692833738935af1913d82523d5f602084013e60203d830101604052565b90925f92819594604051968792833738935af1156143f7573d82523d5f602084013e60203d830101604052565b8380935f93604051958692833738935af1156108905701604052565b60405190602036830101604052816014360181525f602036920137604051601481016040523360601b9052565b6145da6001600160a01b03916001600160e01b0319165f527f0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f0260205260405f2090565b5416151590565b6001600160a01b0381168015801561470d575b6146fb575f9081525f5160206148485f395f51905f5260205260409020546001600160a01b03166146c75760015f525f5160206148485f395f51905f526020526102809061468c6146647fbdfeb076d903611fa58576955630d640569633049bcf40ad9c22db9251b54a13610b0c565b613185835f5160206148485f395f51905f52906001600160a01b03165f5260205260405f2090565b60015f525f5160206148485f395f51905f526020527fbdfeb076d903611fa58576955630d640569633049bcf40ad9c22db9251b54a13613185565b7f40d3d1a4000000000000000000000000000000000000000000000000000000005f526001600160a01b031660045260245ffd5b637c84ecfb60e01b5f5260045260245ffd5b50600181146145f4565b6001600160a01b038116801580156147fd575b6146fb575f9081525f5160206148085f395f51905f5260205260409020546001600160a01b03166146c75760015f525f5160206148085f395f51905f52602052610280906147c261479a7ffe44ceacbf4f03c6ac19f86826dd265fa9ec25125e8b1766c207f24cd3bc73c7610b0c565b613185835f5160206148085f395f51905f52906001600160a01b03165f5260205260405f2090565b60015f525f5160206148085f395f51905f526020527ffe44ceacbf4f03c6ac19f86826dd265fa9ec25125e8b1766c207f24cd3bc73c7613185565b506001811461472a56fe0bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f000bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f030bb70095b32b9671358306b0339b4c06e7cbd8cb82505941fba30d1eb5b82f01a26469706673582212200306975e968f1a38f6c0fa94312bbabf1ab4e1f004c893208e90d6231599262f64736f6c634300081b0033",
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
      "0x60806040526004361015610011575f80fd5b5f3560e01c806306fdde03146100f45780632e5b63a6146100ef57806354fd4d50146100ea5780635c81ca68146100e55780636d61fe70146100e05780638a91b0e3146100db578063940d3840146100d657806397003203146100d1578063d60b347f146100cc578063d620c85a146100c7578063e824b568146100c2578063ecd05961146100bd578063f2fde38b146100b85763f551e2ee146100b3575f80fd5b610768565b6106d2565b61069a565b61066b565b610631565b6105e3565b61051d565b61046c565b6103e9565b6102bc565b61022e565b6101d7565b610193565b610123565b602060409281835280519182918282860152018484015e5f828201840152601f01601f1916010190565b3461017e575f36600319011261017e5761017a604051610144604082610abe565b600b81527f4b3156616c696461746f720000000000000000000000000000000000000000006020820152604051918291826100f9565b0390f35b5f80fd5b6001600160a01b0381160361017e57565b3461017e57602036600319011261017e576001600160a01b036004356101b881610182565b165f525f60205260206001600160a01b0360405f205416604051908152f35b3461017e575f36600319011261017e5761017a6040516101f8604082610abe565b600581527f312e302e300000000000000000000000000000000000000000000000000000006020820152604051918291826100f9565b3461017e57602036600319011261017e5761025d6001600160a01b0360043561025681610182565b1633610d12565b005b9181601f8401121561017e5782359167ffffffffffffffff831161017e576020838186019501011161017e57565b602060031982011261017e576004359067ffffffffffffffff821161017e576102b89160040161025f565b9091565b3461017e576102ca3661028d565b9081156103c1576102f7336001600160a01b03165f525f6020526001600160a01b0360405f205416151590565b610399578160141161017e5761037b61031a610314601484610b1e565b60601c90565b61032e6001600160a01b0382161515610b5e565b610339813b15610b8d565b610353336001600160a01b03165f525f60205260405f2090565b906001600160a01b031673ffffffffffffffffffffffffffffffffffffffff19825416179055565b6014821161038557005b8161025d9261039392610b01565b90610be8565b7fe72ce85e000000000000000000000000000000000000000000000000000000005f5260045ffd5b7f1f2a381c000000000000000000000000000000000000000000000000000000005f5260045ffd5b3461017e576103f73661028d565b5050335f525f60205260405f2073ffffffffffffffffffffffffffffffffffffffff198154169055335f52600160205260405f205460015b8181111561043957005b8082038281116104675761045061045691336113b1565b33610e2f565b505f1981146104675760010161042f565b610bd4565b3461017e57606036600319011261017e5760043560243567ffffffffffffffff811161017e576104a090369060040161025f565b60443567ffffffffffffffff811161017e576104c090369060040161025f565b601481949294036104f55760141161017e5761017a936104e3933560601c610c56565b60405190151581529081906020820190565b7fdfe93090000000000000000000000000000000000000000000000000000000005f5260045ffd5b3461017e57604036600319011261017e5760043567ffffffffffffffff811161017e5780360361012060031982011261017e57602435906001600160a01b03836004013561056a81610182565b165f525f6020526001600160a01b0360405f20541692610104810135916022190182121561017e57019060048201359167ffffffffffffffff831161017e5760240190823603821361017e576105bf93610c56565b156105d95761017a5f5b6040519081529081906020820190565b61017a60016105c9565b3461017e57602036600319011261017e57602061062760043561060581610182565b6001600160a01b03165f525f6020526001600160a01b0360405f205416151590565b6040519015158152f35b3461017e575f36600319011261017e5760206040517fd620c85a000000000000000000000000000000000000000000000000000000008152f35b3461017e57602036600319011261017e5761025d6001600160a01b0360043561069381610182565b1633610e2f565b3461017e57602036600319011261017e576020600435600181149081156106c7575b506040519015158152f35b60029150145f6106bc565b3461017e57602036600319011261017e576004356106ef81610182565b6001600160a01b03811615610740578061070d61025d923b15610b8d565b335f525f60205260405f20906001600160a01b031673ffffffffffffffffffffffffffffffffffffffff19825416179055565b7f8579befe000000000000000000000000000000000000000000000000000000005f5260045ffd5b3461017e57606036600319011261017e5760043561078581610182565b6024359060443567ffffffffffffffff811161017e576107a990369060040161025f565b90808261ffff60605119046164920290601f19908301013514610a95575b506001600160a01b035f93166dd9ecebf3c23529de49815dac1c4c8114908115610a8b575b8115610a7a575b50610a67575b8215610861575b61017a93831561084f575b505050604051918291155f03631626ba7e1760e01b829190917fffffffff000000000000000000000000000000000000000000000000000000006020820193169052565b6108599350610ef5565b5f808061080b565b9150828161086e3361121b565b93604051600119838301013560f01c968760420196881597600e8401600e8b860101988b8103948588019b6041198d01946119015f52604086602037831017816042601e201817610a1e5750507f5479706564446174615369676e2800000000000000000000000000000000000085526001199099019990989760286f07fffffe0000000000000100000000008a848e8237515f1a1c91525b88515f1a602881146109285790651201000000016001921c17980197610907565b50908481610a07989a6040899b9d61017a9f95607f969b9a9b7f20636f6e74656e74732c627974657331206669656c64732c737472696e67206e85527f616d652c737472696e672076657273696f6e2c75696e7432353620636861696e60208601527f49642c6164647265737320766572696679696e67436f6e74726163742c627974848601527f657333322073616c742c75696e743235365b5d20657874656e73696f6e7329006060860152878501378737010301852082526101208220604052600116604201601e209160411901935b60405215610a0f57611085565b929350610800565b610a1990336112ee565b611085565b935095979950505061017a9850610a07949650859291505f907f983e65e5148e570cd828ead231ee759a8d7958721a768f93bc4483ba005c32de5f5260205260405f20916109fa565b9150610a74818385611085565b916107f9565b610a85915033610f95565b5f6107f3565b33811491506107ec565b6040810135018035925060200190505f6107c7565b634e487b7160e01b5f52604160045260245ffd5b90601f8019910116810190811067ffffffffffffffff821117610ae057604052565b610aaa565b67ffffffffffffffff8111610ae057601f01601f191660200190565b909291928360141161017e57831161017e57601401916013190190565b356bffffffffffffffffffffffff19811692919060148210610b3e575050565b6bffffffffffffffffffffffff1960149290920360031b82901b16169150565b15610b6557565b7fc81abf60000000000000000000000000000000000000000000000000000000005f5260045ffd5b15610b9457565b7f83e6a1cb000000000000000000000000000000000000000000000000000000005f5260045ffd5b6001600160a01b03610bd19216906001610d99565b90565b634e487b7160e01b5f52601160045260245ffd5b905f5b601482048110610bfa57505050565b806014029060148204810361046757600181019182821161046757826014029260148404036104675782811161017e5783831161017e57610c4961031460019483610c4f948901910390610b1e565b33610bbc565b5001610beb565b929190917f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0602083013511610d0a576001600160a01b039384610ca3610c9d368587610df9565b86610fe7565b911694168414610d0157610cec610cf2926001600160a01b03946020527b19457468657265756d205369676e6564204d6573736167653a0a33325f52603c600420923691610df9565b90610fe7565b1614610cfc575f90565b600190565b50505050600190565b505050505f90565b815f5260018001602052610d3a8160405f20906001600160a01b03165f5260205260405f2090565b54610d935780610d8d915f52600160205260405f20600181540190848260051b82015555805f52600160205260405f2054925f52600260205260405f20906001600160a01b03165f5260205260405f2090565b55600190565b50505f90565b90610da5838284610fc0565b610df2575f81815260208390526040902080546001908101600581901b830186905591829055610d8d939091945f520160205260405f20906001600160a01b03165f5260205260405f2090565b5050505f90565b929192610e0582610ae5565b91610e136040519384610abe565b82948184528183011161017e578281602093845f960137010152565b90805f526002602052610e568260405f20906001600160a01b03165f5260205260405f2090565b54918215610df2575f19830191838311610467575f828152600160205260409020545f19810191908211610467575f94848484610eb595610d8d9803610ecb575b509050610ea69150600161141e565b6002905f5260205260405f2090565b906001600160a01b03165f5260205260405f2090565b610eeb92610ea6610ee1610eb5938560016113e1565b8092856001611400565b555f808481610e97565b9092915f933a15610f0557505050565b90919293503a3a5260203a3a386d378edcd5b5b0a24f5342d8c1048561fffffa503a5115610f37575b610bd192611085565b60405192631626ba7e3a526d378edcd5b5b0a24f5342d8c1048560205260408052454561ffff011793845a106d378edcd5b5b0a24f5342d8c10485831417610f9357610bd1943a906064601c3a923090fa506040529250610f2e565bfe5b610fba915f52600260205260405f20906001600160a01b03165f5260205260405f2090565b54151590565b600190610fba935f520160205260405f20906001600160a01b03165f5260205260405f2090565b9190600190604051935f52602081015160405260408151146110465760418151146110295750506020604060805f805b5afa505f6060523d6060185191604052565b60805f602093604084606082960151841a87520151606052611017565b60805f6020937f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff604080950151601b8160ff1c01875216606052611017565b90610bd19291335f525f6020526001600160a01b0360405f205416610c56565b81601f8201121561017e578051906110bc82610ae5565b926110ca6040519485610abe565b8284526020838301011161017e57815f9260208093018386015e8301015290565b51906110f682610182565b565b9080601f8301121561017e5781519167ffffffffffffffff8311610ae0578260051b906040519361112c6020840186610abe565b845260208085019282010192831161017e57602001905b8282106111505750505090565b8151815260209182019101611143565b9060e08282031261017e5781517fff000000000000000000000000000000000000000000000000000000000000008116810361017e5792602083015167ffffffffffffffff811161017e57826111b79185016110a5565b92604081015167ffffffffffffffff811161017e57836111d89183016110a5565b926060820151926111eb608084016110eb565b9260a08101519260c082015167ffffffffffffffff811161017e57610bd192016110f8565b6040513d5f823e3d90fd5b905f6001600160a01b03926004604051809581936342580cb760e11b8352165afa80156112e9575f925f5f5f905f925f945f966112b0575b50906001600160a01b03939291604051986101208a016040525f1a60f81b60408a015260208151910120606089015260208151910120608088015260a08701521660c085015260e08401526020815160051b910120610100830152565b9450505050506001600160a01b0393506112dc91503d805f833e6112d48183610abe565b810190611160565b9597909491939190611253565b611210565b5f6001600160a01b03916004604051809481936342580cb760e11b8352165afa9081156112e95760a0915f915f5f915f9361138c575b50604051937f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f855260208151910120602085015260208151910120604084015260608301526080820152206719010000000000005f52601a52603a526042601820905f603a52565b925050506113a491503d805f833e6112d48183610abe565b509394509250905f611324565b5f52600160205260405f209081548110156113d15760010160051b015490565b638277484f5f526020526024601cfd5b905f5260205260405f209081548110156113d15760010160051b015490565b905f5260205260405f209081548110156113d15760010160051b0155565b905f5260205260405f208054908115611462575f19820191808311610467578154831015611451575f9060051b82015555565b82638277484f5f526020526024601cfd5b505056fea26469706673582212208bfadfcbceb833dc96335675d43acf8db8a9f90d5c22bba5c0ab63dc5450126f64736f6c634300081b0033",
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
      "0x6080806040526004361015610012575f80fd5b5f905f3560e01c90816306433b1b14610abb575080630d51f0b7146105ee57806325692962146105a3578063290ab98414610577578063322cc8ca1461048e57806345171159146104015780634a1ce5991461038657806354d1f13d1461034057806367d2d1c914610314578063715018a6146102c95780638da5cb5b1461029e578063b36f9705146101bc578063d0733b3b14610190578063f04e283e14610142578063f2fde38b146101035763fee81cf4146100ce575f80fd5b34610100576020366003190112610100576100e7610afc565b9063389a75e1600c5252602080600c2054604051908152f35b80fd5b50602036600319011261010057610118610afc565b610120610cc5565b8060601b156101355761013290610ce1565b80f35b637448fbae82526004601cfd5b50602036600319011261010057610157610afc565b61015f610cc5565b63389a75e1600c528082526020600c20805442116101835790826101329255610ce1565b636f5e881883526004601cfd5b503461010057806003193601126101005760206040517004171351c442b202678c48d8ab5b321e8f8152f35b5034610100576040366003190112610100576101d6610afc565b90602435916001600160a01b03831680930361029a576001600160a01b03906101fd610cc5565b168015610272578192813b1561026e5782916024839260405194859384927fc23a5cea00000000000000000000000000000000000000000000000000000000845260048401525af18015610263576102525750f35b8161025c91610c29565b6101005780f35b6040513d84823e3d90fd5b5050fd5b6004827f91fdf191000000000000000000000000000000000000000000000000000000008152fd5b5080fd5b50346101005780600319360112610100576020638b78c6d819546001600160a01b0360405191168152f35b5080600319360112610100576102dd610cc5565b80638b78c6d819547f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380638b78c6d8195580f35b503461010057806003193601126101005760206040517008c901d8871b6f6942de0b5d9ccf3873d38152f35b50806003193601126101005763389a75e1600c52338152806020600c2055337ffa7b8eab7da67f412cc9575ed43464468f9bfbae89d1675917346ca6d8fe3c928280a280f35b5034610100576020366003190112610100576001600160a01b036103a8610afc565b6103b0610cc5565b168015610272578082913b156103fe578180916004604051809481937fbb9fe6bf0000000000000000000000000000000000000000000000000000000083525af18015610263576102525750f35b50fd5b50604036600319011261010057610416610afc565b906024359163ffffffff831680930361029a576001600160a01b039061043a610cc5565b168015610272578192813b1561026e5782906024604051809481937f0396cb60000000000000000000000000000000000000000000000000000000008352600483015234905af18015610263576102525750f35b5034610100576020906104cb6104bd6104a636610b26565b906040969496959295519586948a86019889610ba0565b03601f198101835282610c29565b5190206040517fcc3735a920a3ca505d382bbc545af43d6000803e6038573d6000fd5b3d6000f36060527f5155f3363d3d373d3d363d7f360894a13ba1a3210667c828492db98dca3e2076604052616009845270039dfcad030719b07296710f045f0558f7601e5268603d3d8160223d3973600a52605f602120906040528260605260ff83536035523060601b60015260155260558120906035526001600160a01b0360405191168152f35b5034610100578060031936011261010057602060405170039dfcad030719b07296710f045f0558f78152f35b50806003193601126101005763389a75e1600c523381526202a30042016020600c2055337fdbf36a107da19e49527a7176a1babf963b4b0ff8cde35ee35d6cd8f1f9ac7e1d8280a280f35b506105f836610b26565b939094916040516020810190610616816104bd898b878b8a89610ba0565b519020905f95604051977fcc3735a920a3ca505d382bbc545af43d6000803e6038573d6000fd5b3d6000f36060527f5155f3363d3d373d3d363d7f360894a13ba1a3210667c828492db98dca3e207660405261600960205270039dfcad030719b07296710f045f0558f7601e5268603d3d8160223d3973600a52605f60212060358a01523060581b895260ff89538360158a01526055892097341594893b15610a92575050600193610a88575f388180348c5af115610a7b575f610756995b80604052816060526bffffffffffffffffffffffff198760601b16602082015260148152610704603482610c29565b604051809b81927f8491599f0000000000000000000000000000000000000000000000000000000083527004171351c442b202678c48d8ab5b321e8f6004840152604060248401526044830190610ca1565b0381736c77ddf87a1717465d29f8f16f44711eb0c839c05af498891561092d575f996109aa575b50916020989192896107db6040519b8c957f837b892e000000000000000000000000000000000000000000000000000000008752608060048801526001600160a01b0381511660848801520151604060a487015260c4860190610ca1565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031660248601528481036003190160448601528281520191905f5b81811061097c57505050819060ff5f9416606483015203817008c901d8871b6f6942de0b5d9ccf3873d35afa95861561092d575f9661093c575b5015610873575b6020846001600160a01b0360405191168152f35b6001600160a01b03841690813b15610938575f6108c596604051809881927f4b6a1419000000000000000000000000000000000000000000000000000000008352602060048401526024830190610ca1565b038183865af195861561092d57602096610911575b506001600160a01b037f33310a89c32d8cc00057ad6ef6274d2f8fe22389a992cf89983e09fc84f6cfff91169280a45f808061085f565b61091e9193505f90610c29565b5f916001600160a01b036108da565b6040513d5f823e3d90fd5b5f80fd5b9095503d805f833e61094e8183610c29565b810160208282031261093857815167ffffffffffffffff8111610938576109759201610c4b565b945f610858565b91949350916020806001926001600160a01b0361099889610b12565b1681520195019101918a93949261081e565b98503d805f8b3e6109bb818b610c29565b8901986020818b03126109385780519067ffffffffffffffff821161093857016040818b0312610938576040519960408b018b811067ffffffffffffffff821117610a4e5760405281516001600160a01b0381168103610938578b52602082015167ffffffffffffffff81116109385760049b610a416107db9360209593869401610c4b565b828201529b50505061077d565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b63b12d13eb5f526004601cfd5b5f610756996106d5565b9198509350605f602134f5968715610aae575f610756996106d5565b63301164255f526004601cfd5b34610938575f366003190112610938576020906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168152f35b600435906001600160a01b038216820361093857565b35906001600160a01b038216820361093857565b906080600319830112610938576004356001600160a01b038116810361093857916024359160443567ffffffffffffffff811161093857826023820112156109385780600401359267ffffffffffffffff84116109385760248460051b8301011161093857602401919060643560ff811681036109385790565b60609190911b6bffffffffffffffffffffffff191681526014810191909152929392603401915f5b818110610c01575050507fff000000000000000000000000000000000000000000000000000000000000006001929360f81b1681520190565b9091926020806001926001600160a01b03610c1b88610b12565b168152019401929101610bc8565b90601f8019910116810190811067ffffffffffffffff821117610a4e57604052565b81601f820112156109385780519067ffffffffffffffff8211610a4e5760405192610c80601f8401601f191660200185610c29565b8284526020838301011161093857815f9260208093018386015e8301015290565b805180835260209291819084018484015e5f828201840152601f01601f1916010190565b638b78c6d819543303610cd457565b6382b429005f526004601cfd5b6001600160a01b031680638b78c6d819547f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e05f80a3638b78c6d8195556fea2646970667358221220df9b2cbe3ba93a898b5ac803652f93898b385c36ec7d0b21165614d97a5d4c0964736f6c634300081b0033",
  },
  ModuleRegistry: {
    address: "0x000000000069E2a187AEFFb852bF3cCdC95151B2",
    // prettier-ignore
    abi: [{"inputs":[],"name":"AccessDenied","type":"error"},{"inputs":[],"name":"AlreadyAttested","type":"error"},{"inputs":[{"internalType":"address","name":"module","type":"address"}],"name":"AlreadyRegistered","type":"error"},{"inputs":[],"name":"AlreadyRevoked","type":"error"},{"inputs":[],"name":"AttestationNotFound","type":"error"},{"inputs":[],"name":"DifferentResolvers","type":"error"},{"inputs":[],"name":"ExternalError_ModuleRegistration","type":"error"},{"inputs":[],"name":"ExternalError_ResolveAttestation","type":"error"},{"inputs":[],"name":"ExternalError_ResolveRevocation","type":"error"},{"inputs":[],"name":"ExternalError_SchemaValidation","type":"error"},{"inputs":[{"internalType":"address","name":"factory","type":"address"}],"name":"FactoryCallFailed","type":"error"},{"inputs":[],"name":"InsufficientAttestations","type":"error"},{"inputs":[],"name":"InvalidAddress","type":"error"},{"inputs":[],"name":"InvalidAttestation","type":"error"},{"inputs":[],"name":"InvalidDeployment","type":"error"},{"inputs":[],"name":"InvalidExpirationTime","type":"error"},{"inputs":[],"name":"InvalidModuleType","type":"error"},{"inputs":[],"name":"InvalidModuleTypes","type":"error"},{"inputs":[{"internalType":"contract IExternalResolver","name":"resolver","type":"address"}],"name":"InvalidResolver","type":"error"},{"inputs":[{"internalType":"ResolverUID","name":"uid","type":"bytes32"}],"name":"InvalidResolverUID","type":"error"},{"inputs":[],"name":"InvalidSalt","type":"error"},{"inputs":[],"name":"InvalidSchema","type":"error"},{"inputs":[{"internalType":"contract IExternalSchemaValidator","name":"validator","type":"address"}],"name":"InvalidSchemaValidator","type":"error"},{"inputs":[],"name":"InvalidSignature","type":"error"},{"inputs":[],"name":"InvalidThreshold","type":"error"},{"inputs":[],"name":"InvalidTrustedAttesterInput","type":"error"},{"inputs":[{"internalType":"address","name":"moduleAddress","type":"address"}],"name":"ModuleAddressIsNotContract","type":"error"},{"inputs":[{"internalType":"address","name":"module","type":"address"}],"name":"ModuleNotFoundInRegistry","type":"error"},{"inputs":[],"name":"NoTrustedAttestersFound","type":"error"},{"inputs":[],"name":"ResolverAlreadyExists","type":"error"},{"inputs":[{"internalType":"address","name":"attester","type":"address"}],"name":"RevokedAttestation","type":"error"},{"inputs":[{"internalType":"SchemaUID","name":"uid","type":"bytes32"}],"name":"SchemaAlreadyExists","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"moduleAddress","type":"address"},{"indexed":true,"internalType":"address","name":"attester","type":"address"},{"indexed":false,"internalType":"SchemaUID","name":"schemaUID","type":"bytes32"},{"indexed":true,"internalType":"AttestationDataRef","name":"sstore2Pointer","type":"address"}],"name":"Attested","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"}],"name":"ModuleRegistration","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"ResolverUID","name":"uid","type":"bytes32"},{"indexed":true,"internalType":"address","name":"resolver","type":"address"}],"name":"NewResolver","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"ResolverUID","name":"uid","type":"bytes32"},{"indexed":false,"internalType":"address","name":"newOwner","type":"address"}],"name":"NewResolverOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"smartAccount","type":"address"}],"name":"NewTrustedAttesters","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract IExternalResolver","name":"resolver","type":"address"}],"name":"ResolverRevocationError","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"moduleAddress","type":"address"},{"indexed":true,"internalType":"address","name":"revoker","type":"address"},{"indexed":false,"internalType":"SchemaUID","name":"schema","type":"bytes32"}],"name":"Revoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"SchemaUID","name":"uid","type":"bytes32"},{"indexed":true,"internalType":"address","name":"registerer","type":"address"}],"name":"SchemaRegistered","type":"event"},{"inputs":[{"internalType":"SchemaUID","name":"schemaUID","type":"bytes32"},{"internalType":"address","name":"attester","type":"address"},{"components":[{"internalType":"address","name":"moduleAddress","type":"address"},{"internalType":"uint48","name":"expirationTime","type":"uint48"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"ModuleType[]","name":"moduleTypes","type":"uint256[]"}],"internalType":"struct AttestationRequest[]","name":"requests","type":"tuple[]"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"attest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"SchemaUID","name":"schemaUID","type":"bytes32"},{"internalType":"address","name":"attester","type":"address"},{"components":[{"internalType":"address","name":"moduleAddress","type":"address"},{"internalType":"uint48","name":"expirationTime","type":"uint48"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"ModuleType[]","name":"moduleTypes","type":"uint256[]"}],"internalType":"struct AttestationRequest","name":"request","type":"tuple"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"attest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"SchemaUID","name":"schemaUID","type":"bytes32"},{"components":[{"internalType":"address","name":"moduleAddress","type":"address"},{"internalType":"uint48","name":"expirationTime","type":"uint48"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"ModuleType[]","name":"moduleTypes","type":"uint256[]"}],"internalType":"struct AttestationRequest","name":"request","type":"tuple"}],"name":"attest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"SchemaUID","name":"schemaUID","type":"bytes32"},{"components":[{"internalType":"address","name":"moduleAddress","type":"address"},{"internalType":"uint48","name":"expirationTime","type":"uint48"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"ModuleType[]","name":"moduleTypes","type":"uint256[]"}],"internalType":"struct AttestationRequest[]","name":"requests","type":"tuple[]"}],"name":"attest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"attester","type":"address"}],"name":"attesterNonce","outputs":[{"internalType":"uint256","name":"nonce","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"salt","type":"bytes32"},{"internalType":"bytes","name":"initCode","type":"bytes"}],"name":"calcModuleAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"module","type":"address"},{"internalType":"address[]","name":"attesters","type":"address[]"},{"internalType":"uint256","name":"threshold","type":"uint256"}],"name":"check","outputs":[],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"module","type":"address"},{"internalType":"ModuleType","name":"moduleType","type":"uint256"},{"internalType":"address[]","name":"attesters","type":"address[]"},{"internalType":"uint256","name":"threshold","type":"uint256"}],"name":"check","outputs":[],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"module","type":"address"},{"internalType":"ModuleType","name":"moduleType","type":"uint256"}],"name":"check","outputs":[],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"module","type":"address"}],"name":"check","outputs":[],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"smartAccount","type":"address"},{"internalType":"address","name":"module","type":"address"}],"name":"checkForAccount","outputs":[],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"smartAccount","type":"address"},{"internalType":"address","name":"module","type":"address"},{"internalType":"ModuleType","name":"moduleType","type":"uint256"}],"name":"checkForAccount","outputs":[],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"salt","type":"bytes32"},{"internalType":"ResolverUID","name":"resolverUID","type":"bytes32"},{"internalType":"bytes","name":"initCode","type":"bytes"},{"internalType":"bytes","name":"metadata","type":"bytes"},{"internalType":"bytes","name":"resolverContext","type":"bytes"}],"name":"deployModule","outputs":[{"internalType":"address","name":"moduleAddress","type":"address"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"factory","type":"address"},{"internalType":"bytes","name":"callOnFactory","type":"bytes"},{"internalType":"bytes","name":"metadata","type":"bytes"},{"internalType":"ResolverUID","name":"resolverUID","type":"bytes32"},{"internalType":"bytes","name":"resolverContext","type":"bytes"}],"name":"deployViaFactory","outputs":[{"internalType":"address","name":"moduleAddress","type":"address"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"eip712Domain","outputs":[{"internalType":"bytes1","name":"fields","type":"bytes1"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"version","type":"string"},{"internalType":"uint256","name":"chainId","type":"uint256"},{"internalType":"address","name":"verifyingContract","type":"address"},{"internalType":"bytes32","name":"salt","type":"bytes32"},{"internalType":"uint256[]","name":"extensions","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"module","type":"address"},{"internalType":"address","name":"attester","type":"address"}],"name":"findAttestation","outputs":[{"components":[{"internalType":"uint48","name":"time","type":"uint48"},{"internalType":"uint48","name":"expirationTime","type":"uint48"},{"internalType":"uint48","name":"revocationTime","type":"uint48"},{"internalType":"PackedModuleTypes","name":"moduleTypes","type":"uint32"},{"internalType":"address","name":"moduleAddress","type":"address"},{"internalType":"address","name":"attester","type":"address"},{"internalType":"AttestationDataRef","name":"dataPointer","type":"address"},{"internalType":"SchemaUID","name":"schemaUID","type":"bytes32"}],"internalType":"struct AttestationRecord","name":"attestation","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"module","type":"address"},{"internalType":"address[]","name":"attesters","type":"address[]"}],"name":"findAttestations","outputs":[{"components":[{"internalType":"uint48","name":"time","type":"uint48"},{"internalType":"uint48","name":"expirationTime","type":"uint48"},{"internalType":"uint48","name":"revocationTime","type":"uint48"},{"internalType":"PackedModuleTypes","name":"moduleTypes","type":"uint32"},{"internalType":"address","name":"moduleAddress","type":"address"},{"internalType":"address","name":"attester","type":"address"},{"internalType":"AttestationDataRef","name":"dataPointer","type":"address"},{"internalType":"SchemaUID","name":"schemaUID","type":"bytes32"}],"internalType":"struct AttestationRecord[]","name":"attestations","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"moduleAddress","type":"address"}],"name":"findModule","outputs":[{"components":[{"internalType":"ResolverUID","name":"resolverUID","type":"bytes32"},{"internalType":"address","name":"sender","type":"address"},{"internalType":"bytes","name":"metadata","type":"bytes"}],"internalType":"struct ModuleRecord","name":"moduleRecord","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"ResolverUID","name":"uid","type":"bytes32"}],"name":"findResolver","outputs":[{"components":[{"internalType":"contract IExternalResolver","name":"resolver","type":"address"},{"internalType":"address","name":"resolverOwner","type":"address"}],"internalType":"struct ResolverRecord","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"SchemaUID","name":"uid","type":"bytes32"}],"name":"findSchema","outputs":[{"components":[{"internalType":"uint48","name":"registeredAt","type":"uint48"},{"internalType":"contract IExternalSchemaValidator","name":"validator","type":"address"},{"internalType":"string","name":"schema","type":"string"}],"internalType":"struct SchemaRecord","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"smartAccount","type":"address"}],"name":"findTrustedAttesters","outputs":[{"internalType":"address[]","name":"attesters","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"moduleAddress","type":"address"},{"internalType":"uint48","name":"expirationTime","type":"uint48"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"ModuleType[]","name":"moduleTypes","type":"uint256[]"}],"internalType":"struct AttestationRequest","name":"request","type":"tuple"},{"internalType":"address","name":"attester","type":"address"}],"name":"getDigest","outputs":[{"internalType":"bytes32","name":"digest","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"moduleAddress","type":"address"}],"internalType":"struct RevocationRequest[]","name":"requests","type":"tuple[]"},{"internalType":"address","name":"attester","type":"address"}],"name":"getDigest","outputs":[{"internalType":"bytes32","name":"digest","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"moduleAddress","type":"address"}],"internalType":"struct RevocationRequest","name":"request","type":"tuple"},{"internalType":"address","name":"attester","type":"address"}],"name":"getDigest","outputs":[{"internalType":"bytes32","name":"digest","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"moduleAddress","type":"address"},{"internalType":"uint48","name":"expirationTime","type":"uint48"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"ModuleType[]","name":"moduleTypes","type":"uint256[]"}],"internalType":"struct AttestationRequest[]","name":"requests","type":"tuple[]"},{"internalType":"address","name":"attester","type":"address"}],"name":"getDigest","outputs":[{"internalType":"bytes32","name":"digest","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"ResolverUID","name":"resolverUID","type":"bytes32"},{"internalType":"address","name":"moduleAddress","type":"address"},{"internalType":"bytes","name":"metadata","type":"bytes"},{"internalType":"bytes","name":"resolverContext","type":"bytes"}],"name":"registerModule","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IExternalResolver","name":"resolver","type":"address"}],"name":"registerResolver","outputs":[{"internalType":"ResolverUID","name":"uid","type":"bytes32"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"schema","type":"string"},{"internalType":"contract IExternalSchemaValidator","name":"validator","type":"address"}],"name":"registerSchema","outputs":[{"internalType":"SchemaUID","name":"uid","type":"bytes32"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"moduleAddress","type":"address"}],"internalType":"struct RevocationRequest[]","name":"requests","type":"tuple[]"}],"name":"revoke","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"attester","type":"address"},{"components":[{"internalType":"address","name":"moduleAddress","type":"address"}],"internalType":"struct RevocationRequest[]","name":"requests","type":"tuple[]"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"revoke","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"moduleAddress","type":"address"}],"internalType":"struct RevocationRequest","name":"request","type":"tuple"}],"name":"revoke","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"attester","type":"address"},{"components":[{"internalType":"address","name":"moduleAddress","type":"address"}],"internalType":"struct RevocationRequest","name":"request","type":"tuple"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"revoke","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"ResolverUID","name":"uid","type":"bytes32"},{"internalType":"contract IExternalResolver","name":"resolver","type":"address"}],"name":"setResolver","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"ResolverUID","name":"uid","type":"bytes32"},{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferResolverOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"threshold","type":"uint8"},{"internalType":"address[]","name":"attesters","type":"address[]"}],"name":"trustAttesters","outputs":[],"stateMutability":"nonpayable","type":"function"}],
    bytecode:
      "0x6080604052600436106102045760003560e01c80637cb2afd811610118578063b65d1012116100a0578063dd0fd2781161006f578063dd0fd2781461069e578063e14f3d32146106cb578063f05c04e1146106eb578063f095ec1b1461070b578063f190e2b11461072b57600080fd5b8063b65d101214610604578063b6b791a114610624578063c23697a814610651578063d90486241461067157600080fd5b8063945e3641116100e7578063945e36411461054a57806396fb72171461056a5780639f3e1b531461058a578063b060cb1e146105aa578063b50b706b146105d757600080fd5b80637cb2afd8146104c257806384b0196e146104e257806388dc678d1461050a5780638e6ec8241461052a57600080fd5b80634990a6821161019b57806355f47dde1161016a57806355f47dde146103b6578063617734d0146103d657806370d2af24146103f657806371c61a2b1461041657806377efcab4146104a257600080fd5b80634990a682146103365780634c13560c146103565780634ece78ca14610376578063529562a11461039657600080fd5b80631d4d9810116101d75780631d4d98101461029b57806329757d37146102c95780632b30c899146102e95780632ed944671461031657600080fd5b806303b79c841461020957806304a1f298146102395780630bb30abc1461025b5780631896f70a1461027b575b600080fd5b61021c610217366004613836565b61073e565b6040516001600160a01b0390911681526020015b60405180910390f35b34801561024557600080fd5b5061025961025436600461393b565b6107b8565b005b34801561026757600080fd5b506102596102763660046139c6565b610875565b34801561028757600080fd5b50610259610296366004613a21565b61098c565b3480156102a757600080fd5b506102bb6102b6366004613a51565b610acf565b604051908152602001610230565b3480156102d557600080fd5b506102596102e4366004613ab9565b610cc2565b3480156102f557600080fd5b50610309610304366004613b3f565b610d77565b6040516102309190613c11565b34801561032257600080fd5b50610259610331366004613c60565b610eb9565b34801561034257600080fd5b50610259610351366004613cc3565b610fb0565b34801561036257600080fd5b50610259610371366004613d04565b610fbf565b34801561038257600080fd5b50610259610391366004613d32565b610fcb565b3480156103a257600080fd5b506102596103b1366004613d96565b611077565b3480156103c257600080fd5b506102bb6103d1366004613dd7565b611087565b3480156103e257600080fd5b506102bb6103f1366004613e1d565b6110c1565b34801561040257600080fd5b506102bb610411366004613e66565b6110fe565b34801561042257600080fd5b5061047b610431366004613e83565b60408051808201909152600080825260208201525060009081526020818152604091829020825180840190935280546001600160a01b039081168452600190910154169082015290565b6040805182516001600160a01b039081168252602093840151169281019290925201610230565b3480156104ae57600080fd5b506102596104bd366004613e9c565b611131565b3480156104ce57600080fd5b506102596104dd366004613a21565b61113e565b3480156104ee57600080fd5b506104f76111e0565b6040516102309796959493929190613f08565b34801561051657600080fd5b50610259610525366004613fa1565b611249565b34801561053657600080fd5b50610259610545366004613ff4565b6112a4565b34801561055657600080fd5b50610259610565366004614057565b611357565b34801561057657600080fd5b5061025961058536600461409d565b611362565b34801561059657600080fd5b506102bb6105a53660046140c9565b61136d565b3480156105b657600080fd5b506105ca6105c5366004613e83565b6114f0565b60405161023091906140e6565b3480156105e357600080fd5b506102bb6105f23660046140c9565b60056020526000908152604090205481565b34801561061057600080fd5b5061025961061f366004614125565b6115ea565b34801561063057600080fd5b5061064461063f3660046140c9565b6115f6565b6040516102309190614188565b34801561065d57600080fd5b5061025961066c3660046140c9565b611656565b34801561067d57600080fd5b5061069161068c366004613d04565b611662565b604051610230919061419b565b3480156106aa57600080fd5b506106be6106b93660046140c9565b6116fb565b60405161023091906141aa565b3480156106d757600080fd5b506102bb6106e6366004613e1d565b61184d565b3480156106f757600080fd5b506102596107063660046141eb565b611882565b34801561071757600080fd5b5061021c610726366004614211565b611af7565b61021c61073936600461424f565b611b04565b600087815260208190526040812060018101546001600160a01b031661077f5760405163f184406b60e01b8152600481018a90526024015b60405180910390fd5b61078a88888c611c1b565b9150600061079b83338c8a8a611cee565b90506107aa8184848888611e6c565b505098975050505050505050565b6001600160a01b0385166000908152600560205260408120805482906107dd906142f9565b9182905550905060006107f96107f4878785611f20565b61213b565b9050600061083e888387878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061225392505050565b90508061085e57604051638baa579f60e01b815260040160405180910390fd5b61086a888a8989612358565b505050505050505050565b81801580610881575081155b1561089f576040516305a74e6160e01b815260040160405180910390fd5b818110156108c0576040516339093e6560e21b815260040160405180910390fd5b6000805b8281101561096c5760008686838181106108e0576108e0614312565b90506020020160208101906108f591906140c9565b9050826001600160a01b0316816001600160a01b0316116109295760405163cd0ecff160e01b815260040160405180910390fd5b809250610941600061093b8a84612478565b906124a2565b156109525761094f85614328565b94505b846000036109635750505050610986565b506001016108c4565b506040516339093e6560e21b815260040160405180910390fd5b50505050565b806001600160a01b0381161580610a0f57506040516301ffc9a760e01b81526314f0f87d60e21b60048201526001600160a01b038216906301ffc9a790602401602060405180830381865afa1580156109e9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a0d919061433f565b155b15610a385760405163f9492e7560e01b81526001600160a01b0382166004820152602401610776565b60008381526020819052604090206001015483906001600160a01b03163314610a7457604051634ca8886760e01b815260040160405180910390fd5b60008481526020819052604080822080546001600160a01b0319166001600160a01b03871690811782559151909287917f335721b01866dc23fbee8b6b2c7b1e14d6f05c28cd35a2c934239f94095602a09190a35050505050565b6000816001600160a01b03811615801590610b5657506040516301ffc9a760e01b815263b2275fa960e01b60048201526001600160a01b038216906301ffc9a790602401602060405180830381865afa158015610b30573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b54919061433f565b155b15610b7f57604051630f09140760e01b81526001600160a01b0382166004820152602401610776565b60006040518060600160405280610b934290565b65ffffffffffff168152602001856001600160a01b0316815260200187878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050509152509050610bf28161254a565b60008181526002602052604090205490935065ffffffffffff1615610c2d57604051635988c65560e11b815260048101849052602401610776565b60008381526002602090815260409182902083518154928501516001600160a01b0316600160301b026001600160d01b031990931665ffffffffffff90911617919091178155908201518291906001820190610c8990826143f3565b505060405133915084907fd16733fb8c2a502f4e1d1d63970cbab355e37ff6d6d12a215b7d0197ea5535f490600090a350509392505050565b6001600160a01b038416600090815260056020526040812080548290610ce7906142f9565b918290555090506000610cfd6107f48684612586565b90506000610d42878387878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061225392505050565b905080610d6257604051638baa579f60e01b815260040160405180910390fd5b610d6d8789886126c8565b5050505050505050565b606081806001600160401b03811115610d9257610d92614361565b604051908082528060200260200182016040528015610dcb57816020015b610db86137aa565b815260200190600190039081610db05790505b50915060005b81811015610eb057610e0986868684818110610def57610def614312565b9050602002016020810190610e0491906140c9565b612478565b6040805161010081018252825465ffffffffffff8082168352600160301b820481166020840152600160601b82041692820192909252600160901b90910463ffffffff16606082015260018201546001600160a01b0390811660808301526002830154811660a083015260038301541660c082015260049091015460e08201528351849083908110610e9d57610e9d614312565b6020908102919091010152600101610dd1565b50509392505050565b81801580610ec5575081155b15610ee3576040516305a74e6160e01b815260040160405180910390fd5b81811015610f04576040516339093e6560e21b815260040160405180910390fd5b6000805b8281101561096c576000868683818110610f2457610f24614312565b9050602002016020810190610f3991906140c9565b9050826001600160a01b0316816001600160a01b031611610f6d5760405163cd0ecff160e01b815260040160405180910390fd5b809250610f7e8861093b8b84612478565b15610f8f57610f8c85614328565b94505b84600003610fa05750505050610fa9565b50600101610f08565b5050505050565b610fbb33838361270d565b5050565b610fbb82826000612807565b6001600160a01b038516600090815260056020526040812080548290610ff0906142f9565b9182905550905060006110076107f48787856129c0565b9050600061104c888387878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061225392505050565b90508061106c57604051638baa579f60e01b815260040160405180910390fd5b610d6d88888861270d565b611082838383612807565b505050565b6001600160a01b0381166000908152600560205260408120546110ba906107f4906110b39060016144b2565b8590612586565b9392505050565b6001600160a01b0381166000908152600560205260408120546110f6906107f4906110ed9060016144b2565b869086906129c0565b949350505050565b6001600160a01b0381166000908152600560205260408120546110ba906107f49061112a9060016144b2565b8590612ac5565b61113b3382612b39565b50565b60008281526020819052604090206001015482906001600160a01b0316331461117a57604051634ca8886760e01b815260040160405180910390fd5b6000838152602081815260409182902060010180546001600160a01b0319166001600160a01b038616908117909155915191825284917f7a2c54badf601a71ed23c3ec8c070bac418dfd4fb160e0351861983746662d77910160405180910390a2505050565b600f60f81b606080600080808361123760408051808201825260128152715268696e6573746f6e65526567697374727960701b60208083019190915282518084019093526004835263076312e360e41b9083015291565b97989097965046955030945091925090565b600086815260208190526040902060018101546001600160a01b03166112855760405163f184406b60e01b815260048101889052602401610776565b60006112958760008a8989611cee565b9050610d6d8188848787611e6c565b6001600160a01b0384166000908152600560205260408120805482906112c9906142f9565b9182905550905060006112df6107f48684612ac5565b90506000611324878387878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061225392505050565b90508061134457604051638baa579f60e01b815260040160405180910390fd5b61134e8787612b39565b50505050505050565b610fbb3383836126c8565b610fbb338383612807565b6000816001600160a01b03811615806113f257506040516301ffc9a760e01b81526314f0f87d60e21b60048201526001600160a01b038216906301ffc9a790602401602060405180830381865afa1580156113cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113f0919061433f565b155b1561141b5760405163f9492e7560e01b81526001600160a01b0382166004820152602401610776565b604080518082019091526001600160a01b038416815233602082015261144081612b64565b6000818152602081905260409020549093506001600160a01b03161561147957604051630f5f2ba160e21b815260040160405180910390fd5b600083815260208181526040808320845181546001600160a01b03199081166001600160a01b03928316178355938601516001909201805490941691811691909117909255519086169185917f335721b01866dc23fbee8b6b2c7b1e14d6f05c28cd35a2c934239f94095602a09190a35050919050565b604080516060808201835260008083526020830152918101919091526000828152600260209081526040918290208251606081018452815465ffffffffffff81168252600160301b90046001600160a01b031692810192909252600181018054929391929184019161156190614377565b80601f016020809104026020016040519081016040528092919081815260200182805461158d90614377565b80156115da5780601f106115af576101008083540402835291602001916115da565b820191906000526020600020905b8154815290600101906020018083116115bd57829003601f168201915b5050505050815250509050919050565b61108233848484612358565b6040805160608082018352600080835260208084018290528385018390526001600160a01b038681168352600180835292869020865194850187528054855292830154169083015260028101805493949293919284019161156190614377565b61113b33826000612807565b61166a6137aa565b6116748383612478565b6040805161010081018252825465ffffffffffff8082168352600160301b820481166020840152600160601b82041692820192909252600160901b90910463ffffffff16606082015260018201546001600160a01b0390811660808301526002830154811660a083015260038301541660c082015260049091015460e08201529392505050565b6001600160a01b0380821660009081526003602052604081208054606093919260ff821692620100009092049091169082900361173a57505050919050565b816001600160401b0381111561175257611752614361565b60405190808252806020026020018201604052801561177b578160200160208202803683370190505b509350808460008151811061179257611792614312565b6001600160a01b039092166020928302919091019091015260015b8281101561184457836001016000866001846117c991906144c5565b815181106117d9576117d9614312565b6020908102919091018101516001600160a01b03908116835282820193909352604091820160009081208a851682529091522054865191169086908390811061182457611824614312565b6001600160a01b03909216602092830291909101909101526001016117ad565b50505050919050565b6001600160a01b0381166000908152600560205260408120546110f6906107f4906118799060016144b2565b86908690611f20565b604080516020808402828101820190935283825283926118bf929186918591829190850190849080828437600092019190915250612b9692505050565b6118dc5760405163cd0ecff160e01b815260040160405180910390fd5b8015806118e9575060ff81115b156119075760405163cd0ecff160e01b815260040160405180910390fd5b8181146119275760405163cd0ecff160e01b815260040160405180910390fd5b60008383828161193957611939614312565b905060200201602081019061194e91906140c9565b6001600160a01b0316036119755760405163cd0ecff160e01b815260040160405180910390fd5b33600090815260036020526040902060ff85168210156119a85760405163aabd5a0960e01b815260040160405180910390fd5b805460ff8681166101000261ffff199092169084161717815583836000816119d2576119d2614312565b90506020020160208101906119e791906140c9565b81546001600160a01b0391909116620100000262010000600160b01b031990911617815581611a1581614328565b92505060005b82811015611ac4576000858583818110611a3757611a37614312565b9050602002016020810190611a4c91906140c9565b90508585611a5b8460016144b2565b818110611a6a57611a6a614312565b9050602002016020810190611a7f91906140c9565b6001600160a01b03918216600090815260018581016020908152604080842033855290915290912080546001600160a01b031916929093169190911790915501611a1b565b5060405133907ff689fb4afceb60ac48a5ca8113a5a57cb15e51d317f0ec57e07340192d9fb45990600090a25050505050565b60006110f6838386612ba1565b600083815260208190526040812060018101546001600160a01b0316611b405760405163f184406b60e01b815260048101869052602401610776565b306001600160a01b038b1603611b74576040516301b3a38360e21b81526001600160a01b038b166004820152602401610776565b604051630d84daa960e31b81526001600160a01b037f0000000000000000000000005f5e3201de0550d370641f7afb0b987a29b51ecb1690636c26d548903490611bc6908e908e908e90600401614501565b60206040518083038185885af1158015611be4573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190611c09919061452f565b9150600061079b836000888b8b611cee565b600081606081901c3314801590611c3b57506001600160601b0319811615155b15611c59576040516381e69d9b60e01b815260040160405180910390fd5b600085858080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920182905250939450611ca1925089915088905087612ba1565b905081602001825186818334f595505050806001600160a01b0316846001600160a01b031614611ce45760405163e6c4247b60e01b815260040160405180910390fd5b5050509392505050565b604080516060808201835260008083526020830152918101919091526001600160a01b038616600090815260016020526040812054611d2c91141590565b15611d55576040516345ed80e960e01b81526001600160a01b0387166004820152602401610776565b6001600160a01b0386163b611d7d57604051637483e90760e01b815260040160405180910390fd5b6040518060600160405280858152602001866001600160a01b0316815260200184848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201829052509390945250506001600160a01b03898116825260016020818152604093849020865181559086015191810180546001600160a01b03191692909316919091179091559083015192935083929091506002820190611e2c90826143f3565b50506040516001600160a01b03881691507fbc854169953f463b8509327459b9a9785beb45f6cdafdad8e75b9a33f401676890600090a295945050505050565b82546001600160a01b03168015801590611efa5750604051633da3df8760e21b81526001600160a01b0382169063f68f7e1c90611eb590339089908b908990899060040161454c565b6020604051808303816000875af1158015611ed4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ef8919061433f565b155b15611f1857604051633b0cfdad60e01b815260040160405180910390fd5b505050505050565b6000606083825b818110156120d457827fe78ff87b9693fc54b8a43c3b84702ae7bfbb7fc6235105790033913428381e1f888884818110611f6357611f63614312565b9050602002810190611f759190614597565b611f839060208101906140c9565b898985818110611f9557611f95614312565b9050602002810190611fa79190614597565b611fb89060408101906020016145b7565b8a8a86818110611fca57611fca614312565b9050602002810190611fdc9190614597565b611fea9060408101906145df565b604051611ff8929190614625565b60405180910390208b8b8781811061201257612012614312565b90506020028101906120249190614597565b612032906060810190614635565b60405160200161204392919061467e565b60408051601f198184030181528282528051602091820120908301969096526001600160a01b039094169381019390935265ffffffffffff9091166060830152608082015260a081019190915260c001604051602081830303815290604052805190602001206040516020016120ba9291906146ad565b60408051601f198184030181529190529250600101611f27565b508151602080840191909120604080517f432f54a02ff5e7b0998295a12eea6e09f826e00e15ebb49cdb5dd6914e7eadf793810193909352820152606081018590526080015b60405160208183030381529060405280519060200120925050509392505050565b7f190f5d5283f5db87880acc624fa77467696f8aa33364cc797fda60178803f9dd7f000000000000000000000000000000000069e2a187aeffb852bf3ccdc95151b230147f000000000000000000000000000000000000000000000000000000000000000146141661222e5750604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f81527f965bdbd96142286fcb2d9d6d6847b7d0146c665f390f54b4b623eeee5ffaa2fe60208201527fe8245ed8f93ccf147bc8972ab6d5f8278ed994d647700daaa5b7ebde9370aa6f9181019190915246606082015230608082015260a090205b67190100000000000060005280601a5281603a52604260182090506000603a52919050565b6001600160a01b0390921691600083156110ba5760405183600052602083015160405260408351036122c3576040830151601b8160ff1c016020528060011b60011c60605250602060016080600060015afa805186183d15176122c1575060006060526040525060016110ba565b505b604183510361230957606083015160001a6020526040830151606052602060016080600060015afa805186183d1517612307575060006060526040525060016110ba565b505b600060605280604052631626ba7e60e01b808252846004830152602482016040815284516020018060448501828860045afa505060208160443d01858a5afa9051909114169150509392505050565b806000816001600160401b0381111561237357612373614361565b6040519080825280602002602001820160405280156123ac57816020015b6123996137aa565b8152602001906001900390816123915790505b5090506000805b838110156124455760006123eb888a8989868181106123d4576123d4614312565b90506020028101906123e69190614597565b612c2e565b8584815181106123fd576123fd614312565b6020026020010181935082905250508160000361241c5780925061243c565b82811461243c57604051631ac80ea760e01b815260040160405180910390fd5b506001016123b3565b50600086815260026020526040902061245f908390613047565b600081815260208190526040902061134e908390613119565b6001600160a01b039182166000908152600460209081526040808320939094168252919091522090565b815460009063ffffffff81811691603081901c821691606082901c81169160901c16836124d6576000945050505050612544565b82158015906124e457508242115b156124f6576000945050505050612544565b8115612509576000945050505050612544565b8515158015612529575061252763ffffffff8083169088906131bf16565b155b1561253b576000945050505050612544565b60019450505050505b92915050565b60003382604001518360200151604051602001612569939291906146cf565b604051602081830303815290604052805190602001209050919050565b60007fe6fb0252edfa0719f65bc4b7ff11df181a55bbef752d6bacaff6f4a369160b757fe78ff87b9693fc54b8a43c3b84702ae7bfbb7fc6235105790033913428381e1f6125d760208601866140c9565b6125e760408701602088016145b7565b6125f460408801886145df565b604051612602929190614625565b6040519081900390206126186060890189614635565b60405160200161262992919061467e565b60408051601f198184030181528282528051602091820120908301969096526001600160a01b039094169381019390935265ffffffffffff9091166060830152608082015260a081019190915260c0015b60408051601f19818403018152828252805160209182012090830193909352810191909152606081018390526080015b60405160208183030381529060405280519060200120905092915050565b6000806126d6848685612c2e565b600086815260026020526040902091935091506126f49083906131de565b6000818152602081905260409020610fa990839061324d565b806000816001600160401b0381111561272857612728614361565b60405190808252806020026020018201604052801561276157816020015b61274e6137aa565b8152602001906001900390816127465790505b5090506000805b838110156127ed5760006127938888888581811061278857612788614312565b9050602002016132f1565b8584815181106127a5576127a5614312565b602002602001018193508290525050816000036127c4578092506127e4565b8281146127e457604051631ac80ea760e01b815260040160405180910390fd5b50600101612768565b50600081815260208190526040902061134e9083906134e7565b6001600160a01b0380841660009081526003602052604090208054909160ff808316926101008104909116916201000090910416801580612846575081155b15612864576040516305a74e6160e01b815260040160405180910390fd5b816001036128f95760006128788783612478565b905061288481876124a2565b15612893575050505050505050565b60015b8481101561096c576001600160a01b03928316600090815260018701602090815260408083208c87168452909152902054909216916128d58884612478565b91506128e182886124a2565b156128f157505050505050505050565b600101612896565b60006129058783612478565b905061291181876124a2565b15612924578261292081614328565b9350505b60015b848110156129a0576001600160a01b03928316600090815260018701602090815260408083208c87168452909152902054909216916129668884612478565b915061297282886124a2565b15612985578361298181614328565b9450505b8360000361299857505050505050505050565b600101612927565b508215610d6d576040516339093e6560e21b815260040160405180910390fd5b6000606083825b81811015612a7b57827fe772c71320d83e91a3076e1414875f1affb9dbb84c39717315b34b38b9b4ef8e888884818110612a0357612a03614312565b612a179260209182020190810191506140c9565b604051602001612a3a9291909182526001600160a01b0316602082015260400190565b60405160208183030381529060405280519060200120604051602001612a619291906146ad565b60408051601f1981840301815291905292506001016129c7565b508151602080840191909120604080517f7d1efebd1edb795fc2fef1b96025f39b311dd4c4481a7f726342969d70b423c8938101939093528201526060810185905260800161211a565b60007f0c087e39c84c32f053f4f3e0086d64914296a605bd371cfe0bdca1d506aed4707fe772c71320d83e91a3076e1414875f1affb9dbb84c39717315b34b38b9b4ef8e612b1660208601866140c9565b60405160200161267a9291909182526001600160a01b0316602082015260400190565b600080612b4684846132f1565b60008181526020819052604090209193509150610fa99083906135cf565b80516040516001600160601b031933606090811b821660208401529290921b9091166034820152600090604801612569565b600061254482613618565b600030828585604051602001612bb8929190614625565b60405160208183030381529060405280519060200120604051602001612c0e939291906001600160f81b0319815260609390931b6001600160601b03191660018401526015830191909152603582015260550190565b60408051601f198184030181529190528051602090910120949350505050565b612c366137aa565b60008481526002602052604081205465ffffffffffff16612c6a57604051635f9bd90760e11b815260040160405180910390fd5b426000612c7d60408601602087016145b7565b65ffffffffffff1614158015612cb2575065ffffffffffff8116612ca760408601602087016145b7565b65ffffffffffff1611155b15612cd0576040516308e8b93760e01b815260040160405180910390fd5b6000612cdf60208601866140c9565b90506000612ced8288612478565b805490915065ffffffffffff1615801590612d1657508054600160601b900465ffffffffffff16155b15612d34576040516335d9080560e01b815260040160405180910390fd5b6001600160a01b038216600090815260016020526040902054935083612d7857604051634eb2dcd760e01b81526001600160a01b0383166004820152602401610776565b6000612d97612d906001600160a01b038a1685613651565b8890613689565b90506040518061010001604052808565ffffffffffff168152602001886020016020810190612dc691906145b7565b65ffffffffffff16815260006020820152604001612e21612dea60608b018b614635565b808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152506136d792505050565b63ffffffff168152602001846001600160a01b03168152602001896001600160a01b03168152602001826001600160a01b031681526020018a81525095508560046000856001600160a01b03166001600160a01b0316815260200190815260200160002060008a6001600160a01b03166001600160a01b0316815260200190815260200160002060008201518160000160006101000a81548165ffffffffffff021916908365ffffffffffff16021790555060208201518160000160066101000a81548165ffffffffffff021916908365ffffffffffff160217905550604082015181600001600c6101000a81548165ffffffffffff021916908365ffffffffffff16021790555060608201518160000160126101000a81548163ffffffff021916908363ffffffff16021790555060808201518160010160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060a08201518160020160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060c08201518160030160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060e08201518160040155905050806001600160a01b0316886001600160a01b0316846001600160a01b03167ff68f1df3d74509783e9300e8637b046836c091fd39cdcd33b14b0ffdf6940d628c60405161303391815260200190565b60405180910390a450505050935093915050565b805465ffffffffffff1661306e57604051635f9bd90760e11b815260040160405180910390fd5b8054600160301b90046001600160a01b031680158015906130fb57506040516365b7641360e11b81526001600160a01b0382169063cb6ec826906130b6908690600401613c11565b6020604051808303816000875af11580156130d5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906130f9919061433f565b155b1561108257604051635e1d867960e01b815260040160405180910390fd5b80546001600160a01b03168061312e57505050565b6040516367b14e7760e11b81526001600160a01b0382169063cf629cee9061315a908690600401613c11565b6020604051808303816000875af1158015613179573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061319d919061433f565b151560000361108257604051635b0ae41f60e01b815260040160405180910390fd5b60006131cc8260026147fb565b831663ffffffff161515905092915050565b805465ffffffffffff1661320557604051635f9bd90760e11b815260040160405180910390fd5b8054600160301b90046001600160a01b031680158015906130fb5750604051637949978f60e01b81526001600160a01b03821690637949978f906130b690869060040161419b565b80546001600160a01b031680158015906132d357506040516334c85d0760e01b81526001600160a01b038216906334c85d079061328e90869060040161419b565b6020604051808303816000875af11580156132ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906132d1919061433f565b155b1561108257604051635b0ae41f60e01b815260040160405180910390fd5b6132f96137aa565b60008060048161330c60208701876140c9565b6001600160a01b0390811682526020808301939093526040918201600090812089831682528452828120835161010081018552815465ffffffffffff8082168352600160301b8204811683890152600160601b82041695820195909552600160901b90940463ffffffff166060850152600180820154841660808601526002820154841660a0860152600382015490931660c0850152600481015460e0850152929650919350916133bf908701876140c9565b6001600160a01b03908116825260208201929092526040016000205460c0850151909350166134015760405163120a2e7760e01b815260040160405180910390fd5b846001600160a01b03168360a001516001600160a01b03161461343757604051634ca8886760e01b815260040160405180910390fd5b604083015165ffffffffffff16156134625760405163905e710760e01b815260040160405180910390fd5b805465ffffffffffff60601b1916600160601b65ffffffffffff4216021781556001600160a01b03851661349960208601866140c9565b6001600160a01b03167feee7de70b290c411a060d8bb9b1cba152a40d74147fef0974d7c2b25ac9b718a8560e001516040516134d791815260200190565b60405180910390a3509250929050565b80546000906001600160a01b031680613504576001915050612544565b604051636ac403ff60e11b81526001600160a01b0382169063d58807fe90613530908790600401613c11565b6020604051808303816000875af192505050801561356b575060408051601f3d908101601f191682019092526135689181019061433f565b60015b6135b5576040516001600160a01b03821681527fbab8c8262d5baeb21d73c5944504fb6c26d6eb88d29af8653bd3382ad8fe56a99060200160405180910390a16000915050612544565b80156135c657600192505050612544565b505b5092915050565b80546000906001600160a01b0316806135ec576001915050612544565b604051638b6e59ff60e01b81526001600160a01b03821690638b6e59ff9061353090879060040161419b565b805160019060021161364c57815160051b82016020830192505b82516020909301805190931091508083188202613632575b505b919050565b6040516001600160601b0319606084811b8216602084015283901b1660348201524260488201524660688201526000906088016126aa565b60006110ba61369b60408501856145df565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525086925061375f915050565b80516000908180805b83811015613755578581815181106136fa576136fa614312565b60200260200101519150601f821180613718575061371883836131bf565b1561373657604051631092ef5760e11b815260040160405180910390fd5b6137418260026147fb565b61374b9084614807565b92506001016136e0565b5090949350505050565b60008251600181018060401b6bfd61000080600a3d393df3001761ffff821186015283600a8201601587016000f5925050816137a35763301164256000526004601cfd5b9092525090565b6040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915290565b60008083601f84011261380057600080fd5b5081356001600160401b0381111561381757600080fd5b60208301915083602082850101111561382f57600080fd5b9250929050565b60008060008060008060008060a0898b03121561385257600080fd5b883597506020890135965060408901356001600160401b038082111561387757600080fd5b6138838c838d016137ee565b909850965060608b013591508082111561389c57600080fd5b6138a88c838d016137ee565b909650945060808b01359150808211156138c157600080fd5b506138ce8b828c016137ee565b999c989b5096995094979396929594505050565b6001600160a01b038116811461113b57600080fd5b60008083601f84011261390957600080fd5b5081356001600160401b0381111561392057600080fd5b6020830191508360208260051b850101111561382f57600080fd5b6000806000806000806080878903121561395457600080fd5b863595506020870135613966816138e2565b945060408701356001600160401b038082111561398257600080fd5b61398e8a838b016138f7565b909650945060608901359150808211156139a757600080fd5b506139b489828a016137ee565b979a9699509497509295939492505050565b600080600080606085870312156139dc57600080fd5b84356139e7816138e2565b935060208501356001600160401b03811115613a0257600080fd5b613a0e878288016138f7565b9598909750949560400135949350505050565b60008060408385031215613a3457600080fd5b823591506020830135613a46816138e2565b809150509250929050565b600080600060408486031215613a6657600080fd5b83356001600160401b03811115613a7c57600080fd5b613a88868287016137ee565b9094509250506020840135613a9c816138e2565b809150509250925092565b60006080828403121561364a57600080fd5b600080600080600060808688031215613ad157600080fd5b853594506020860135613ae3816138e2565b935060408601356001600160401b0380821115613aff57600080fd5b613b0b89838a01613aa7565b94506060880135915080821115613b2157600080fd5b50613b2e888289016137ee565b969995985093965092949392505050565b600080600060408486031215613b5457600080fd5b8335613b5f816138e2565b925060208401356001600160401b03811115613b7a57600080fd5b613b86868287016138f7565b9497909650939450505050565b65ffffffffffff8082511683528060208301511660208401528060408301511660408401525063ffffffff6060820151166060830152608081015160018060a01b0380821660808501528060a08401511660a0850152505060c0810151613c0560c08401826001600160a01b03169052565b5060e090810151910152565b6020808252825182820181905260009190848201906040850190845b81811015613c5457613c40838551613b93565b928401926101009290920191600101613c2d565b50909695505050505050565b600080600080600060808688031215613c7857600080fd5b8535613c83816138e2565b94506020860135935060408601356001600160401b03811115613ca557600080fd5b613cb1888289016138f7565b96999598509660600135949350505050565b60008060208385031215613cd657600080fd5b82356001600160401b03811115613cec57600080fd5b613cf8858286016138f7565b90969095509350505050565b60008060408385031215613d1757600080fd5b8235613d22816138e2565b91506020830135613a46816138e2565b600080600080600060608688031215613d4a57600080fd5b8535613d55816138e2565b945060208601356001600160401b0380821115613d7157600080fd5b613d7d89838a016138f7565b90965094506040880135915080821115613b2157600080fd5b600080600060608486031215613dab57600080fd5b8335613db6816138e2565b92506020840135613dc6816138e2565b929592945050506040919091013590565b60008060408385031215613dea57600080fd5b82356001600160401b03811115613e0057600080fd5b613e0c85828601613aa7565b9250506020830135613a46816138e2565b600080600060408486031215613e3257600080fd5b83356001600160401b03811115613e4857600080fd5b613a88868287016138f7565b60006020828403121561364a57600080fd5b60008060408385031215613e7957600080fd5b613d228484613e54565b600060208284031215613e9557600080fd5b5035919050565b600060208284031215613eae57600080fd5b6110ba8383613e54565b60005b83811015613ed3578181015183820152602001613ebb565b50506000910152565b60008151808452613ef4816020860160208601613eb8565b601f01601f19169290920160200192915050565b60ff60f81b881681526000602060e06020840152613f2960e084018a613edc565b8381036040850152613f3b818a613edc565b606085018990526001600160a01b038816608086015260a0850187905284810360c08601528551808252602080880193509091019060005b81811015613f8f57835183529284019291840191600101613f73565b50909c9b505050505050505050505050565b60008060008060008060808789031215613fba57600080fd5b863595506020870135613fcc816138e2565b945060408701356001600160401b0380821115613fe857600080fd5b61398e8a838b016137ee565b6000806000806060858703121561400a57600080fd5b8435614015816138e2565b93506140248660208701613e54565b925060408501356001600160401b0381111561403f57600080fd5b61404b878288016137ee565b95989497509550505050565b6000806040838503121561406a57600080fd5b8235915060208301356001600160401b0381111561408757600080fd5b61409385828601613aa7565b9150509250929050565b600080604083850312156140b057600080fd5b82356140bb816138e2565b946020939093013593505050565b6000602082840312156140db57600080fd5b81356110ba816138e2565b6020815265ffffffffffff825116602082015260018060a01b036020830151166040820152600060408301516060808401526110f66080840182613edc565b60008060006040848603121561413a57600080fd5b8335925060208401356001600160401b03811115613b7a57600080fd5b8051825260018060a01b03602082015116602083015260006040820151606060408501526110f66060850182613edc565b6020815260006110ba6020830184614157565b61010081016125448284613b93565b6020808252825182820181905260009190848201906040850190845b81811015613c545783516001600160a01b0316835292840192918401916001016141c6565b60008060006040848603121561420057600080fd5b833560ff81168114613b5f57600080fd5b60008060006040848603121561422657600080fd5b8335925060208401356001600160401b0381111561424357600080fd5b613b86868287016137ee565b60008060008060008060008060a0898b03121561426b57600080fd5b8835614276816138e2565b975060208901356001600160401b038082111561429257600080fd5b61429e8c838d016137ee565b909950975060408b01359150808211156142b757600080fd5b6142c38c838d016137ee565b909750955060608b0135945060808b01359150808211156138c157600080fd5b634e487b7160e01b600052601160045260246000fd5b60006001820161430b5761430b6142e3565b5060010190565b634e487b7160e01b600052603260045260246000fd5b600081614337576143376142e3565b506000190190565b60006020828403121561435157600080fd5b815180151581146110ba57600080fd5b634e487b7160e01b600052604160045260246000fd5b600181811c9082168061438b57607f821691505b60208210810361364a57634e487b7160e01b600052602260045260246000fd5b601f821115611082576000816000526020600020601f850160051c810160208610156143d45750805b601f850160051c820191505b81811015611f18578281556001016143e0565b81516001600160401b0381111561440c5761440c614361565b6144208161441a8454614377565b846143ab565b602080601f831160018114614455576000841561443d5750858301515b600019600386901b1c1916600185901b178555611f18565b600085815260208120601f198616915b8281101561448457888601518255948401946001909101908401614465565b50858210156144a25787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b80820180821115612544576125446142e3565b81810381811115612544576125446142e3565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b6001600160a01b038416815260406020820181905260009061452690830184866144d8565b95945050505050565b60006020828403121561454157600080fd5b81516110ba816138e2565b6001600160a01b0386811682528516602082015260806040820181905260009061457890830186614157565b828103606084015261458b8185876144d8565b98975050505050505050565b60008235607e198336030181126145ad57600080fd5b9190910192915050565b6000602082840312156145c957600080fd5b813565ffffffffffff811681146110ba57600080fd5b6000808335601e198436030181126145f657600080fd5b8301803591506001600160401b0382111561461057600080fd5b60200191503681900382131561382f57600080fd5b8183823760009101908152919050565b6000808335601e1984360301811261464c57600080fd5b8301803591506001600160401b0382111561466657600080fd5b6020019150600581901b360382131561382f57600080fd5b60008184825b858110156146a2578135835260209283019290910190600101614684565b509095945050505050565b600083516146bf818460208801613eb8565b9190910191825250602001919050565b60006bffffffffffffffffffffffff19808660601b16835284516146fa816014860160208901613eb8565b60609490941b169190920160148101919091526028019392505050565b600181815b80851115614752578160001904821115614738576147386142e3565b8085161561474557918102915b93841c939080029061471c565b509250929050565b60008261476957506001612544565b8161477657506000612544565b816001811461478c5760028114614796576147b2565b6001915050612544565b60ff8411156147a7576147a76142e3565b50506001821b612544565b5060208310610133831016604e8410600b84101617156147d5575081810a612544565b6147df8383614717565b80600019048211156147f3576147f36142e3565b029392505050565b60006110ba838361475a565b63ffffffff8181168382160190808211156135c8576135c86142e356fea2646970667358221220807a0dcf2c6cec2c89009e31067a7ecb222a220b82380e3501b0be4d5c970b7a64736f6c63430008190033",
  },
} as const;
