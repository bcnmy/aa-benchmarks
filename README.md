# AA Benchmarks

A comprehensive benchmark for smart contract accounts that support account abstraction (ERC-4337), built on Hardhat for accurate, transaction-based, fee measurements (see [Methodology](#methodology)) and for use of existing TypeScript utilities around fee calculations. This work was inspired by ZeroDev's work on [aa-benchmark](https://github.com/zerodevapp/aa-benchmark), which is built on Foundry.

## Methodology

This tool seeks to measure the cost of the entire transaction landed on-chain for each action, including associated L1 fees. As smart accounts are expected to proliferate on L2s, it's important to consider L1 fees (measured as a function of the RLP-encoded signed transaction and the blob gas market) on top of L2 execution costs. L1 fees can impact the cost of transactions on L2s, so optimizing the size of calldata is important.

The L1 fee calculations are done following the formula and constants specified in [Optimism Ecotone](https://docs.optimism.io/stack/transactions/fees#ecotone).

There are two different categories of benchmarks measured in this test: **User Operation** and **Runtime**.

- **User Operation**: Measuring the cost of user operations are tricky because each bundler may calculate pre-verification gas differently and the costs may differ based on the number of user operations in the bundle. In this test, the on-chain cost for a bundler to execute the user operation in a bundle of size 1 is measured, to present a lower-bound fee required for the user operation to land in an exclusive bundle. In other words, fees are calculated based on the transaction receipt and the serialized signed EIP-1559 transaction for `entryPoint.handleUserOp([userOp])`. As multi-user-op bundles become more prevalent, we can expect actual fees to undercut the data presented here.
- **Runtime**: Runtime transactions are defined as those performed outside of the user operation flow, with the owner key interacting directly with the account factory or account, akin to the way you might use MetaMask today to interact directly with smart contracts. Support for runtime transactions also enable contracts to interact directly with your smart account. For this flow, fees are calculated based on the transaction's receipt and the serialized signed EIP-1559 transaction.

## Results

These numbers are derived from local simulations with fixed inputs (see [Run benchmark](#run-benchmark) below to try different inputs) and actual on-chain numbers may differ.

#### ⛽️ Benchmarks for other networks

[Ethereum Mainnet](/benchmarks/ethereum.md) | [Arbitrum Mainnet](/benchmarks/arbitrum.md) | [Polygon Mainnet](/benchmarks/polygon.md) | **Optimism Mainnet** | [Base Mainnet](/benchmarks/base.md) | [Zora Mainnet](/benchmarks/zora.md)

---

<!-- BENCHMARK_RESULTS -->

### Optimism Mainnet

#### Run parameters

| Parameter            | Latest fees snapshot | 2024-03-31 (high blob fees) |
| :------------------- | -------------------: | --------------------------: |
| Gas price (gwei)     |        `0.061023704` |               `0.060233618` |
| L1 base fee (gwei)   |        `3.578904748` |                     `24.05` |
| L1 base fee scalar   |               `1368` |                      `1368` |
| Blob base fee (wei)  |                  `1` |               `46930000000` |
| Blob base fee scalar |             `810949` |                    `810949` |
| ETH price (USD)      |            `$3168.1` |                         `-` |

#### User Operation: Account creation

##### Total fee (USD)

|                           | Latest fees snapshot | 2024-03-31 (high blob fees) |
| :------------------------ | -------------------: | --------------------------: |
| Modular Account           |            `$0.1661` |                   `$0.2251` |
| Biconomy v2               |            `$0.0639` |                   `$0.1334` |
| Kernel v2.1               |            `$0.0574` |                   `$0.1289` |
| Safe                      |            `$0.0844` |                   `$0.1714` |
| Simple Account            |            `$0.0576` |                   `$0.1146` |
| Light Account             |            `$0.0602` |                   `$0.1188` |
| Light Account v2          |            `$0.0517` |                   `$0.1082` |
| Multi-Owner Light Account |            `$0.0567` |                   `$0.1131` |
| Coinbase Smart Wallet     |            `$0.0616` |                   `$0.1291` |
| Nexus                     |            `$0.0663` |                   `$0.1315` |
| Kernel V3.1               |            `$0.0656` |                   `$0.1418` |

<details>
<summary><b>Details</b></summary>

##### Latest fees snapshot

|                           | Execution gas | Execution fee (ETH) |  L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------ | ------------: | ------------------: | ------: | ------------: | --------------: | --------------: |
| Modular Account           |      `858351` |       `0.000052380` |  `8020` | `0.000000039` |   `0.000052419` |       `$0.1661` |
| Biconomy v2               |      `329947` |       `0.000020135` |  `9224` | `0.000000045` |   `0.000020180` |       `$0.0639` |
| Kernel v2.1               |      `296301` |       `0.000018081` |  `9472` | `0.000000046` |   `0.000018128` |       `$0.0574` |
| Safe                      |      `435486` |       `0.000026575` | `11552` | `0.000000057` |   `0.000026632` |       `$0.0844` |
| Simple Account            |      `297367` |       `0.000018146` |  `7568` | `0.000000037` |   `0.000018183` |       `$0.0576` |
| Light Account             |      `310532` |       `0.000018950` |  `7800` | `0.000000038` |   `0.000018988` |       `$0.0602` |
| Light Account v2          |      `266901` |       `0.000016287` |  `7496` | `0.000000037` |   `0.000016324` |       `$0.0517` |
| Multi-Owner Light Account |      `292822` |       `0.000017869` |  `7484` | `0.000000037` |   `0.000017906` |       `$0.0567` |
| Coinbase Smart Wallet     |      `317904` |       `0.000019400` |  `8964` | `0.000000044` |   `0.000019444` |       `$0.0616` |
| Nexus                     |      `342381` |       `0.000020893` |  `8664` | `0.000000042` |   `0.000020936` |       `$0.0663` |
| Kernel V3.1               |      `338419` |       `0.000020652` | `10108` | `0.000000049` |   `0.000020701` |       `$0.0656` |

##### 2024-03-31 (high blob fees)

|                           | Execution gas | Execution fee (ETH) |  L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------ | ------------: | ------------------: | ------: | ------------: | --------------: | --------------: |
| Modular Account           |      `858351` |       `0.000051702` |  `8020` | `0.000019340` |   `0.000071042` |       `$0.2251` |
| Biconomy v2               |      `329947` |       `0.000019874` |  `9224` | `0.000022244` |   `0.000042118` |       `$0.1334` |
| Kernel v2.1               |      `296301` |       `0.000017847` |  `9472` | `0.000022842` |   `0.000040689` |       `$0.1289` |
| Safe                      |      `435486` |       `0.000026231` | `11552` | `0.000027858` |   `0.000054089` |       `$0.1714` |
| Simple Account            |      `297367` |       `0.000017911` |  `7568` | `0.000018250` |   `0.000036162` |       `$0.1146` |
| Light Account             |      `310532` |       `0.000018704` |  `7800` | `0.000018810` |   `0.000037514` |       `$0.1188` |
| Light Account v2          |      `266901` |       `0.000016076` |  `7496` | `0.000018077` |   `0.000034153` |       `$0.1082` |
| Multi-Owner Light Account |      `292822` |       `0.000017638` |  `7484` | `0.000018048` |   `0.000035686` |       `$0.1131` |
| Coinbase Smart Wallet     |      `317904` |       `0.000019149` |  `8964` | `0.000021617` |   `0.000040765` |       `$0.1291` |
| Nexus                     |      `342381` |       `0.000020623` |  `8664` | `0.000020893` |   `0.000041516` |       `$0.1315` |
| Kernel V3.1               |      `338419` |       `0.000020384` | `10108` | `0.000024376` |   `0.000044760` |       `$0.1418` |

</details>

#### User Operation: Native transfer

##### Total fee (USD)

|                           | Latest fees snapshot | 2024-03-31 (high blob fees) |
| :------------------------ | -------------------: | --------------------------: |
| Modular Account           |            `$0.0320` |                   `$0.0869` |
| Biconomy v2               |            `$0.0314` |                   `$0.0909` |
| Kernel v2.1               |            `$0.0317` |                   `$0.0876` |
| Safe                      |            `$0.0342` |                   `$0.0907` |
| Simple Account            |            `$0.0293` |                   `$0.0818` |
| Light Account             |            `$0.0297` |                   `$0.0845` |
| Light Account v2          |            `$0.0293` |                   `$0.0819` |
| Multi-Owner Light Account |            `$0.0293` |                   `$0.0819` |
| Coinbase Smart Wallet     |            `$0.0304` |                   `$0.0895` |
| Nexus                     |            `$0.0319` |                   `$0.0870` |
| Kernel V3.1               |            `$0.0370` |                   `$0.0925` |

<details>
<summary><b>Details</b></summary>

##### Latest fees snapshot

|                           | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------ | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Modular Account           |      `165100` |       `0.000010075` | `7248` | `0.000000035` |   `0.000010110` |       `$0.0320` |
| Biconomy v2               |      `161912` |       `0.000009880` | `7848` | `0.000000038` |   `0.000009919` |       `$0.0314` |
| Kernel v2.1               |      `163398` |       `0.000009971` | `7388` | `0.000000036` |   `0.000010007` |       `$0.0317` |
| Safe                      |      `176479` |       `0.000010769` | `7460` | `0.000000037` |   `0.000010806` |       `$0.0342` |
| Simple Account            |      `151045` |       `0.000009217` | `6932` | `0.000000034` |   `0.000009251` |       `$0.0293` |
| Light Account             |      `152880` |       `0.000009329` | `7248` | `0.000000035` |   `0.000009365` |       `$0.0297` |
| Light Account v2          |      `151040` |       `0.000009217` | `6944` | `0.000000034` |   `0.000009251` |       `$0.0293` |
| Multi-Owner Light Account |      `151148` |       `0.000009224` | `6944` | `0.000000034` |   `0.000009258` |       `$0.0293` |
| Coinbase Smart Wallet     |      `156812` |       `0.000009569` | `7796` | `0.000000038` |   `0.000009607` |       `$0.0304` |
| Nexus                     |      `164351` |       `0.000010029` | `7288` | `0.000000036` |   `0.000010065` |       `$0.0319` |
| Kernel V3.1               |      `190912` |       `0.000011650` | `7336` | `0.000000036` |   `0.000011686` |       `$0.0370` |

##### 2024-03-31 (high blob fees)

|                           | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------ | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Modular Account           |      `165100` |       `0.000009945` | `7248` | `0.000017479` |   `0.000027423` |       `$0.0869` |
| Biconomy v2               |      `161912` |       `0.000009753` | `7848` | `0.000018926` |   `0.000028678` |       `$0.0909` |
| Kernel v2.1               |      `163398` |       `0.000009842` | `7388` | `0.000017816` |   `0.000027658` |       `$0.0876` |
| Safe                      |      `176479` |       `0.000010630` | `7460` | `0.000017990` |   `0.000028620` |       `$0.0907` |
| Simple Account            |      `151045` |       `0.000009098` | `6932` | `0.000016717` |   `0.000025815` |       `$0.0818` |
| Light Account             |      `152880` |       `0.000009209` | `7248` | `0.000017479` |   `0.000026687` |       `$0.0845` |
| Light Account v2          |      `151040` |       `0.000009098` | `6944` | `0.000016746` |   `0.000025843` |       `$0.0819` |
| Multi-Owner Light Account |      `151148` |       `0.000009104` | `6944` | `0.000016746` |   `0.000025850` |       `$0.0819` |
| Coinbase Smart Wallet     |      `156812` |       `0.000009445` | `7796` | `0.000018800` |   `0.000028246` |       `$0.0895` |
| Nexus                     |      `164351` |       `0.000009899` | `7288` | `0.000017575` |   `0.000027475` |       `$0.0870` |
| Kernel V3.1               |      `190912` |       `0.000011499` | `7336` | `0.000017691` |   `0.000029190` |       `$0.0925` |

</details>

#### User Operation: ERC-20 transfer

##### Total fee (USD)

|                           | Latest fees snapshot | 2024-03-31 (high blob fees) |
| :------------------------ | -------------------: | --------------------------: |
| Modular Account           |            `$0.0368` |                   `$0.0967` |
| Biconomy v2               |            `$0.0361` |                   `$0.1007` |
| Kernel v2.1               |            `$0.0364` |                   `$0.0974` |
| Safe                      |            `$0.0389` |                   `$0.1003` |
| Simple Account            |            `$0.0340` |                   `$0.0916` |
| Light Account             |            `$0.0343` |                   `$0.0942` |
| Light Account v2          |            `$0.0340` |                   `$0.0916` |
| Multi-Owner Light Account |            `$0.0340` |                   `$0.0916` |
| Coinbase Smart Wallet     |            `$0.0351` |                   `$0.0991` |
| Nexus                     |            `$0.0365` |                   `$0.0956` |
| Kernel V3.1               |            `$0.0417` |                   `$0.1010` |

<details>
<summary><b>Details</b></summary>

##### Latest fees snapshot

|                           | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------ | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Modular Account           |      `189487` |       `0.000011563` | `7920` | `0.000000039` |   `0.000011602` |       `$0.0368` |
| Biconomy v2               |      `185868` |       `0.000011342` | `8532` | `0.000000042` |   `0.000011384` |       `$0.0361` |
| Kernel v2.1               |      `187609` |       `0.000011449` | `8060` | `0.000000039` |   `0.000011488` |       `$0.0364` |
| Safe                      |      `200732` |       `0.000012249` | `8120` | `0.000000040` |   `0.000012289` |       `$0.0389` |
| Simple Account            |      `175283` |       `0.000010696` | `7616` | `0.000000037` |   `0.000010734` |       `$0.0340` |
| Light Account             |      `177013` |       `0.000010802` | `7908` | `0.000000039` |   `0.000010841` |       `$0.0343` |
| Light Account v2          |      `175186` |       `0.000010690` | `7616` | `0.000000037` |   `0.000010728` |       `$0.0340` |
| Multi-Owner Light Account |      `175294` |       `0.000010697` | `7616` | `0.000000037` |   `0.000010734` |       `$0.0340` |
| Coinbase Smart Wallet     |      `181014` |       `0.000011046` | `8456` | `0.000000041` |   `0.000011088` |       `$0.0351` |
| Nexus                     |      `188136` |       `0.000011481` | `7820` | `0.000000038` |   `0.000011519` |       `$0.0365` |
| Kernel V3.1               |      `214817` |       `0.000013109` | `7856` | `0.000000038` |   `0.000013147` |       `$0.0417` |

##### 2024-03-31 (high blob fees)

|                           | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------ | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Modular Account           |      `189487` |       `0.000011413` | `7920` | `0.000019099` |   `0.000030513` |       `$0.0967` |
| Biconomy v2               |      `185868` |       `0.000011196` | `8532` | `0.000020575` |   `0.000031771` |       `$0.1007` |
| Kernel v2.1               |      `187609` |       `0.000011300` | `8060` | `0.000019437` |   `0.000030737` |       `$0.0974` |
| Safe                      |      `200732` |       `0.000012091` | `8120` | `0.000019582` |   `0.000031672` |       `$0.1003` |
| Simple Account            |      `175283` |       `0.000010558` | `7616` | `0.000018366` |   `0.000028924` |       `$0.0916` |
| Light Account             |      `177013` |       `0.000010662` | `7908` | `0.000019070` |   `0.000029732` |       `$0.0942` |
| Light Account v2          |      `175186` |       `0.000010552` | `7616` | `0.000018366` |   `0.000028918` |       `$0.0916` |
| Multi-Owner Light Account |      `175294` |       `0.000010559` | `7616` | `0.000018366` |   `0.000028925` |       `$0.0916` |
| Coinbase Smart Wallet     |      `181014` |       `0.000010903` | `8456` | `0.000020392` |   `0.000031295` |       `$0.0991` |
| Nexus                     |      `188136` |       `0.000011332` | `7820` | `0.000018858` |   `0.000030190` |       `$0.0956` |
| Kernel V3.1               |      `214817` |       `0.000012939` | `7856` | `0.000018945` |   `0.000031884` |       `$0.1010` |

</details>

#### User Operation: Uniswap V3 ERC-20 swap

##### Total fee (USD)

|                           | Latest fees snapshot | 2024-03-31 (high blob fees) |
| :------------------------ | -------------------: | --------------------------: |
| Modular Account           |            `$0.0405` |                   `$0.1109` |
| Biconomy v2               |            `$0.0398` |                   `$0.1148` |
| Kernel v2.1               |            `$0.0402` |                   `$0.1116` |
| Safe                      |            `$0.0428` |                   `$0.1146` |
| Simple Account            |            `$0.0378` |                   `$0.1059` |
| Light Account             |            `$0.0381` |                   `$0.1085` |
| Light Account v2          |            `$0.0377` |                   `$0.1058` |
| Multi-Owner Light Account |            `$0.0377` |                   `$0.1056` |
| Coinbase Smart Wallet     |            `$0.0389` |                   `$0.1134` |
| Nexus                     |            `$0.0402` |                   `$0.1098` |
| Kernel V3.1               |            `$0.0455` |                   `$0.1151` |

<details>
<summary><b>Details</b></summary>

##### Latest fees snapshot

|                           | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------ | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Modular Account           |      `208682` |       `0.000012735` | `9300` | `0.000000046` |   `0.000012780` |       `$0.0405` |
| Biconomy v2               |      `205018` |       `0.000012511` | `9900` | `0.000000048` |   `0.000012559` |       `$0.0398` |
| Kernel v2.1               |      `207241` |       `0.000012647` | `9428` | `0.000000046` |   `0.000012693` |       `$0.0402` |
| Safe                      |      `220464` |       `0.000013454` | `9500` | `0.000000047` |   `0.000013500` |       `$0.0428` |
| Simple Account            |      `194829` |       `0.000011889` | `8996` | `0.000000044` |   `0.000011933` |       `$0.0378` |
| Light Account             |      `196151` |       `0.000011970` | `9300` | `0.000000046` |   `0.000012015` |       `$0.0381` |
| Light Account v2          |      `194311` |       `0.000011858` | `8996` | `0.000000044` |   `0.000011902` |       `$0.0377` |
| Multi-Owner Light Account |      `194407` |       `0.000011863` | `8972` | `0.000000044` |   `0.000011907` |       `$0.0377` |
| Coinbase Smart Wallet     |      `200573` |       `0.000012240` | `9836` | `0.000000048` |   `0.000012288` |       `$0.0389` |
| Nexus                     |      `207286` |       `0.000012649` | `9188` | `0.000000045` |   `0.000012694` |       `$0.0402` |
| Kernel V3.1               |      `234378` |       `0.000014303` | `9212` | `0.000000045` |   `0.000014348` |       `$0.0455` |

##### 2024-03-31 (high blob fees)

|                           | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------ | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Modular Account           |      `208682` |       `0.000012570` | `9300` | `0.000022427` |   `0.000034997` |       `$0.1109` |
| Biconomy v2               |      `205018` |       `0.000012349` | `9900` | `0.000023874` |   `0.000036223` |       `$0.1148` |
| Kernel v2.1               |      `207241` |       `0.000012483` | `9428` | `0.000022736` |   `0.000035219` |       `$0.1116` |
| Safe                      |      `220464` |       `0.000013279` | `9500` | `0.000022909` |   `0.000036189` |       `$0.1146` |
| Simple Account            |      `194829` |       `0.000011735` | `8996` | `0.000021694` |   `0.000033429` |       `$0.1059` |
| Light Account             |      `196151` |       `0.000011815` | `9300` | `0.000022427` |   `0.000034242` |       `$0.1085` |
| Light Account v2          |      `194311` |       `0.000011704` | `8996` | `0.000021694` |   `0.000033398` |       `$0.1058` |
| Multi-Owner Light Account |      `194407` |       `0.000011710` | `8972` | `0.000021636` |   `0.000033346` |       `$0.1056` |
| Coinbase Smart Wallet     |      `200573` |       `0.000012081` | `9836` | `0.000023720` |   `0.000035801` |       `$0.1134` |
| Nexus                     |      `207286` |       `0.000012486` | `9188` | `0.000022157` |   `0.000034643` |       `$0.1098` |
| Kernel V3.1               |      `234378` |       `0.000014117` | `9212` | `0.000022215` |   `0.000036332` |       `$0.1151` |

</details>

#### User Operation: Session key creation

##### Total fee (USD)

|                           | Latest fees snapshot | 2024-03-31 (high blob fees) |
| :------------------------ | -------------------: | --------------------------: |
| Modular Account           |            `$0.0708` |                   `$0.1561` |
| Biconomy v2               |            `$0.0346` |                   `$0.0986` |
| Kernel v2.1               |            `$0.0334` |                   `$0.1008` |
| Safe                      |        `Unsupported` |               `Unsupported` |
| Simple Account            |        `Unsupported` |               `Unsupported` |
| Light Account             |        `Unsupported` |               `Unsupported` |
| Light Account v2          |        `Unsupported` |               `Unsupported` |
| Multi-Owner Light Account |        `Unsupported` |               `Unsupported` |
| Coinbase Smart Wallet     |        `Unsupported` |               `Unsupported` |
| Nexus                     |        `Unsupported` |               `Unsupported` |
| Kernel V3.1               |        `Unsupported` |               `Unsupported` |

<details>
<summary><b>Details</b></summary>

##### Latest fees snapshot

|                           | Execution gas | Execution fee (ETH) |  L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------ | ------------: | ------------------: | ------: | ------------: | --------------: | --------------: |
| Modular Account           |      `365368` |       `0.000022296` | `11308` | `0.000000055` |   `0.000022351` |       `$0.0708` |
| Biconomy v2               |      `178212` |       `0.000010875` |  `8452` | `0.000000041` |   `0.000010917` |       `$0.0346` |
| Kernel v2.1               |      `172136` |       `0.000010504` |  `8888` | `0.000000044` |   `0.000010548` |       `$0.0334` |
| Safe                      |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Simple Account            |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Light Account             |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Light Account v2          |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Multi-Owner Light Account |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Coinbase Smart Wallet     |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Nexus                     |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Kernel V3.1               |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |

##### 2024-03-31 (high blob fees)

|                           | Execution gas | Execution fee (ETH) |  L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------ | ------------: | ------------------: | ------: | ------------: | --------------: | --------------: |
| Modular Account           |      `365368` |       `0.000022007` | `11308` | `0.000027269` |   `0.000049277` |       `$0.1561` |
| Biconomy v2               |      `178212` |       `0.000010734` |  `8452` | `0.000020382` |   `0.000031116` |       `$0.0986` |
| Kernel v2.1               |      `172136` |       `0.000010368` |  `8888` | `0.000021434` |   `0.000031802` |       `$0.1008` |
| Safe                      |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Simple Account            |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Light Account             |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Light Account v2          |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Multi-Owner Light Account |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Coinbase Smart Wallet     |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Nexus                     |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Kernel V3.1               |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |

</details>

#### User Operation: Session key native transfer

##### Total fee (USD)

|                           | Latest fees snapshot | 2024-03-31 (high blob fees) |
| :------------------------ | -------------------: | --------------------------: |
| Modular Account           |            `$0.0318` |                   `$0.0929` |
| Biconomy v2               |        `Unsupported` |               `Unsupported` |
| Kernel v2.1               |            `$0.0247` |                   `$0.0994` |
| Safe                      |        `Unsupported` |               `Unsupported` |
| Simple Account            |        `Unsupported` |               `Unsupported` |
| Light Account             |        `Unsupported` |               `Unsupported` |
| Light Account v2          |        `Unsupported` |               `Unsupported` |
| Multi-Owner Light Account |        `Unsupported` |               `Unsupported` |
| Coinbase Smart Wallet     |        `Unsupported` |               `Unsupported` |
| Nexus                     |        `Unsupported` |               `Unsupported` |
| Kernel V3.1               |        `Unsupported` |               `Unsupported` |

<details>
<summary><b>Details</b></summary>

##### Latest fees snapshot

|                           | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------ | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Modular Account           |      `163716` |       `0.000009991` | `8072` | `0.000000040` |   `0.000010030` |       `$0.0318` |
| Biconomy v2               |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Kernel v2.1               |      `127202` |       `0.000007762` | `9828` | `0.000000048` |   `0.000007810` |       `$0.0247` |
| Safe                      |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Simple Account            |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Light Account             |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Light Account v2          |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Multi-Owner Light Account |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Coinbase Smart Wallet     |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Nexus                     |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Kernel V3.1               |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |

##### 2024-03-31 (high blob fees)

|                           | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------ | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Modular Account           |      `163716` |       `0.000009861` | `8072` | `0.000019466` |   `0.000029327` |       `$0.0929` |
| Biconomy v2               |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Kernel v2.1               |      `127202` |       `0.000007662` | `9828` | `0.000023700` |   `0.000031362` |       `$0.0994` |
| Safe                      |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Simple Account            |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Light Account             |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Light Account v2          |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Multi-Owner Light Account |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Coinbase Smart Wallet     |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Nexus                     |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Kernel V3.1               |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |

</details>

#### User Operation: Session key ERC-20 transfer

##### Total fee (USD)

|                           | Latest fees snapshot | 2024-03-31 (high blob fees) |
| :------------------------ | -------------------: | --------------------------: |
| Modular Account           |            `$0.0378` |                   `$0.1038` |
| Biconomy v2               |            `$0.0286` |                   `$0.1148` |
| Kernel v2.1               |            `$0.0298` |                   `$0.1118` |
| Safe                      |        `Unsupported` |               `Unsupported` |
| Simple Account            |        `Unsupported` |               `Unsupported` |
| Light Account             |        `Unsupported` |               `Unsupported` |
| Light Account v2          |        `Unsupported` |               `Unsupported` |
| Multi-Owner Light Account |        `Unsupported` |               `Unsupported` |
| Coinbase Smart Wallet     |        `Unsupported` |               `Unsupported` |
| Nexus                     |        `Unsupported` |               `Unsupported` |
| Kernel V3.1               |        `Unsupported` |               `Unsupported` |

<details>
<summary><b>Details</b></summary>

##### Latest fees snapshot

|                           | Execution gas | Execution fee (ETH) |  L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------ | ------------: | ------------------: | ------: | ------------: | --------------: | --------------: |
| Modular Account           |      `194942` |       `0.000011896` |  `8720` | `0.000000043` |   `0.000011939` |       `$0.0378` |
| Biconomy v2               |      `147023` |       `0.000008972` | `11348` | `0.000000056` |   `0.000009027` |       `$0.0286` |
| Kernel v2.1               |      `153240` |       `0.000009351` | `10804` | `0.000000053` |   `0.000009404` |       `$0.0298` |
| Safe                      |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Simple Account            |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Light Account             |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Light Account v2          |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Multi-Owner Light Account |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Coinbase Smart Wallet     |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Nexus                     |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Kernel V3.1               |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |

##### 2024-03-31 (high blob fees)

|                           | Execution gas | Execution fee (ETH) |  L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------ | ------------: | ------------------: | ------: | ------------: | --------------: | --------------: |
| Modular Account           |      `194942` |       `0.000011742` |  `8720` | `0.000021028` |   `0.000032770` |       `$0.1038` |
| Biconomy v2               |      `147023` |       `0.000008856` | `11348` | `0.000027366` |   `0.000036222` |       `$0.1148` |
| Kernel v2.1               |      `153240` |       `0.000009230` | `10804` | `0.000026054` |   `0.000035284` |       `$0.1118` |
| Safe                      |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Simple Account            |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Light Account             |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Light Account v2          |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Multi-Owner Light Account |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Coinbase Smart Wallet     |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Nexus                     |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Kernel V3.1               |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |

</details>

#### Runtime: Account creation

##### Total fee (USD)

|                           | Latest fees snapshot | 2024-03-31 (high blob fees) |
| :------------------------ | -------------------: | --------------------------: |
| Modular Account           |            `$0.1403` |                   `$0.1579` |
| Biconomy v2               |            `$0.0382` |                   `$0.0617` |
| Kernel v2.1               |            `$0.0317` |                   `$0.0609` |
| Safe                      |            `$0.0560` |                   `$0.1001` |
| Simple Account            |            `$0.0337` |                   `$0.0514` |
| Light Account             |            `$0.0359` |                   `$0.0530` |
| Light Account v2          |            `$0.0278` |                   `$0.0449` |
| Multi-Owner Light Account |            `$0.0328` |                   `$0.0499` |
| Coinbase Smart Wallet     |            `$0.0369` |                   `$0.0589` |
| Nexus                     |            `$0.0407` |                   `$0.0642` |
| Kernel V3.1               |            `$0.0350` |                   `$0.0693` |

<details>
<summary><b>Details</b></summary>

##### Latest fees snapshot

|                           | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------ | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Modular Account           |      `725323` |       `0.000044262` | `2556` | `0.000000013` |   `0.000044274` |       `$0.1403` |
| Biconomy v2               |      `197473` |       `0.000012051` | `3140` | `0.000000015` |   `0.000012066` |       `$0.0382` |
| Kernel v2.1               |      `163890` |       `0.000010001` | `3876` | `0.000000019` |   `0.000010020` |       `$0.0317` |
| Safe                      |      `289207` |       `0.000017648` | `5884` | `0.000000029` |   `0.000017677` |       `$0.0560` |
| Simple Account            |      `174219` |       `0.000010631` | `2372` | `0.000000012` |   `0.000010643` |       `$0.0337` |
| Light Account             |      `185267` |       `0.000011306` | `2312` | `0.000000011` |   `0.000011317` |       `$0.0359` |
| Light Account v2          |      `143842` |       `0.000008778` | `2288` | `0.000000011` |   `0.000008789` |       `$0.0278` |
| Multi-Owner Light Account |      `169655` |       `0.000010353` | `2300` | `0.000000011` |   `0.000010364` |       `$0.0328` |
| Coinbase Smart Wallet     |      `190525` |       `0.000011627` | `2948` | `0.000000014` |   `0.000011641` |       `$0.0369` |
| Nexus                     |      `210309` |       `0.000012834` | `3152` | `0.000000015` |   `0.000012849` |       `$0.0407` |
| Kernel V3.1               |      `180465` |       `0.000011013` | `4564` | `0.000000022` |   `0.000011035` |       `$0.0350` |

##### 2024-03-31 (high blob fees)

|                           | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------ | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Modular Account           |      `725323` |       `0.000043689` | `2556` | `0.000006164` |   `0.000049853` |       `$0.1579` |
| Biconomy v2               |      `197473` |       `0.000011895` | `3140` | `0.000007572` |   `0.000019467` |       `$0.0617` |
| Kernel v2.1               |      `163890` |       `0.000009872` | `3876` | `0.000009347` |   `0.000019219` |       `$0.0609` |
| Safe                      |      `289207` |       `0.000017420` | `5884` | `0.000014189` |   `0.000031609` |       `$0.1001` |
| Simple Account            |      `174219` |       `0.000010494` | `2372` | `0.000005720` |   `0.000016214` |       `$0.0514` |
| Light Account             |      `185267` |       `0.000011159` | `2312` | `0.000005575` |   `0.000016735` |       `$0.0530` |
| Light Account v2          |      `143842` |       `0.000008664` | `2288` | `0.000005518` |   `0.000014182` |       `$0.0449` |
| Multi-Owner Light Account |      `169655` |       `0.000010219` | `2300` | `0.000005546` |   `0.000015765` |       `$0.0499` |
| Coinbase Smart Wallet     |      `190525` |       `0.000011476` | `2948` | `0.000007109` |   `0.000018585` |       `$0.0589` |
| Nexus                     |      `210309` |       `0.000012668` | `3152` | `0.000007601` |   `0.000020269` |       `$0.0642` |
| Kernel V3.1               |      `180465` |       `0.000010870` | `4564` | `0.000011006` |   `0.000021876` |       `$0.0693` |

</details>

#### Runtime: Native transfer

##### Total fee (USD)

|                           | Latest fees snapshot | 2024-03-31 (high blob fees) |
| :------------------------ | -------------------: | --------------------------: |
| Modular Account           |            `$0.0098` |                   `$0.0303` |
| Biconomy v2               |        `Unsupported` |               `Unsupported` |
| Kernel v2.1               |            `$0.0088` |                   `$0.0305` |
| Safe                      |            `$0.0147` |                   `$0.0524` |
| Simple Account            |            `$0.0077` |                   `$0.0282` |
| Light Account             |            `$0.0077` |                   `$0.0281` |
| Light Account v2          |            `$0.0077` |                   `$0.0282` |
| Multi-Owner Light Account |            `$0.0077` |                   `$0.0283` |
| Coinbase Smart Wallet     |            `$0.0077` |                   `$0.0283` |
| Nexus                     |            `$0.0077` |                   `$0.0294` |
| Kernel V3.1               |            `$0.0094` |                   `$0.0312` |

<details>
<summary><b>Details</b></summary>

##### Latest fees snapshot

|                           | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------ | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Modular Account           |       `50408` |       `0.000003076` | `2712` | `0.000000013` |   `0.000003089` |       `$0.0098` |
| Biconomy v2               |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Kernel v2.1               |       `45364` |       `0.000002768` | `2856` | `0.000000014` |   `0.000002782` |       `$0.0088` |
| Safe                      |       `75840` |       `0.000004628` | `4968` | `0.000000024` |   `0.000004652` |       `$0.0147` |
| Simple Account            |       `39381` |       `0.000002403` | `2712` | `0.000000013` |   `0.000002416` |       `$0.0077` |
| Light Account             |       `39396` |       `0.000002404` | `2700` | `0.000000013` |   `0.000002417` |       `$0.0077` |
| Light Account v2          |       `39368` |       `0.000002402` | `2712` | `0.000000013` |   `0.000002416` |       `$0.0077` |
| Multi-Owner Light Account |       `39463` |       `0.000002408` | `2712` | `0.000000013` |   `0.000002421` |       `$0.0077` |
| Coinbase Smart Wallet     |       `39681` |       `0.000002421` | `2712` | `0.000000013` |   `0.000002435` |       `$0.0077` |
| Nexus                     |       `39685` |       `0.000002422` | `2856` | `0.000000014` |   `0.000002436` |       `$0.0077` |
| Kernel V3.1               |       `48615` |       `0.000002967` | `2868` | `0.000000014` |   `0.000002981` |       `$0.0094` |

##### 2024-03-31 (high blob fees)

|                           | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------ | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Modular Account           |       `50408` |       `0.000003036` | `2712` | `0.000006540` |   `0.000009576` |       `$0.0303` |
| Biconomy v2               |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Kernel v2.1               |       `45364` |       `0.000002732` | `2856` | `0.000006887` |   `0.000009620` |       `$0.0305` |
| Safe                      |       `75840` |       `0.000004568` | `4968` | `0.000011980` |   `0.000016549` |       `$0.0524` |
| Simple Account            |       `39381` |       `0.000002372` | `2712` | `0.000006540` |   `0.000008912` |       `$0.0282` |
| Light Account             |       `39396` |       `0.000002373` | `2700` | `0.000006511` |   `0.000008884` |       `$0.0281` |
| Light Account v2          |       `39368` |       `0.000002371` | `2712` | `0.000006540` |   `0.000008911` |       `$0.0282` |
| Multi-Owner Light Account |       `39463` |       `0.000002377` | `2712` | `0.000006540` |   `0.000008917` |       `$0.0283` |
| Coinbase Smart Wallet     |       `39681` |       `0.000002390` | `2712` | `0.000006540` |   `0.000008930` |       `$0.0283` |
| Nexus                     |       `39685` |       `0.000002390` | `2856` | `0.000006887` |   `0.000009278` |       `$0.0294` |
| Kernel V3.1               |       `48615` |       `0.000002928` | `2868` | `0.000006916` |   `0.000009844` |       `$0.0312` |

</details>

#### Runtime: ERC-20 transfer

##### Total fee (USD)

|                           | Latest fees snapshot | 2024-03-31 (high blob fees) |
| :------------------------ | -------------------: | --------------------------: |
| Modular Account           |            `$0.0145` |                   `$0.0401` |
| Biconomy v2               |        `Unsupported` |               `Unsupported` |
| Kernel v2.1               |            `$0.0134` |                   `$0.0402` |
| Safe                      |            `$0.0194` |                   `$0.0621` |
| Simple Account            |            `$0.0123` |                   `$0.0380` |
| Light Account             |            `$0.0123` |                   `$0.0379` |
| Light Account v2          |            `$0.0123` |                   `$0.0380` |
| Multi-Owner Light Account |            `$0.0123` |                   `$0.0380` |
| Coinbase Smart Wallet     |            `$0.0124` |                   `$0.0381` |
| Nexus                     |            `$0.0123` |                   `$0.0379` |
| Kernel V3.1               |            `$0.0140` |                   `$0.0396` |

<details>
<summary><b>Details</b></summary>

##### Latest fees snapshot

|                           | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------ | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Modular Account           |       `74693` |       `0.000004558` | `3388` | `0.000000017` |   `0.000004575` |       `$0.0145` |
| Biconomy v2               |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Kernel v2.1               |       `69230` |       `0.000004225` | `3532` | `0.000000017` |   `0.000004242` |       `$0.0134` |
| Safe                      |       `99715` |       `0.000006085` | `5640` | `0.000000028` |   `0.000006113` |       `$0.0194` |
| Simple Account            |       `63503` |       `0.000003875` | `3388` | `0.000000017` |   `0.000003892` |       `$0.0123` |
| Light Account             |       `63438` |       `0.000003871` | `3376` | `0.000000017` |   `0.000003888` |       `$0.0123` |
| Light Account v2          |       `63410` |       `0.000003870` | `3388` | `0.000000017` |   `0.000003886` |       `$0.0123` |
| Multi-Owner Light Account |       `63505` |       `0.000003875` | `3388` | `0.000000017` |   `0.000003892` |       `$0.0123` |
| Coinbase Smart Wallet     |       `63803` |       `0.000003893` | `3388` | `0.000000017` |   `0.000003910` |       `$0.0124` |
| Nexus                     |       `63384` |       `0.000003868` | `3376` | `0.000000017` |   `0.000003884` |       `$0.0123` |
| Kernel V3.1               |       `72317` |       `0.000004413` | `3376` | `0.000000017` |   `0.000004430` |       `$0.0140` |

##### 2024-03-31 (high blob fees)

|                           | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------ | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Modular Account           |       `74693` |       `0.000004499` | `3388` | `0.000008170` |   `0.000012669` |       `$0.0401` |
| Biconomy v2               |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Kernel v2.1               |       `69230` |       `0.000004170` | `3532` | `0.000008517` |   `0.000012687` |       `$0.0402` |
| Safe                      |       `99715` |       `0.000006006` | `5640` | `0.000013601` |   `0.000019607` |       `$0.0621` |
| Simple Account            |       `63503` |       `0.000003825` | `3388` | `0.000008170` |   `0.000011995` |       `$0.0380` |
| Light Account             |       `63438` |       `0.000003821` | `3376` | `0.000008141` |   `0.000011962` |       `$0.0379` |
| Light Account v2          |       `63410` |       `0.000003819` | `3388` | `0.000008170` |   `0.000011990` |       `$0.0380` |
| Multi-Owner Light Account |       `63505` |       `0.000003825` | `3388` | `0.000008170` |   `0.000011995` |       `$0.0380` |
| Coinbase Smart Wallet     |       `63803` |       `0.000003843` | `3388` | `0.000008170` |   `0.000012013` |       `$0.0381` |
| Nexus                     |       `63384` |       `0.000003818` | `3376` | `0.000008141` |   `0.000011959` |       `$0.0379` |
| Kernel V3.1               |       `72317` |       `0.000004356` | `3376` | `0.000008141` |   `0.000012497` |       `$0.0396` |

</details>

#### Runtime: Uniswap V3 ERC-20 swap

##### Total fee (USD)

|                           | Latest fees snapshot | 2024-03-31 (high blob fees) |
| :------------------------ | -------------------: | --------------------------: |
| Modular Account           |            `$0.0286` |                   `$0.0646` |
| Biconomy v2               |        `Unsupported` |               `Unsupported` |
| Kernel v2.1               |            `$0.0276` |                   `$0.0645` |
| Safe                      |            `$0.0302` |                   `$0.0831` |
| Simple Account            |            `$0.0265` |                   `$0.0625` |
| Light Account             |            `$0.0265` |                   `$0.0623` |
| Light Account v2          |            `$0.0264` |                   `$0.0623` |
| Multi-Owner Light Account |            `$0.0265` |                   `$0.0623` |
| Coinbase Smart Wallet     |            `$0.0266` |                   `$0.0626` |
| Nexus                     |            `$0.0264` |                   `$0.0623` |
| Kernel V3.1               |            `$0.0282` |                   `$0.0641` |

<details>
<summary><b>Details</b></summary>

##### Latest fees snapshot

|                           | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------ | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Modular Account           |      `147781` |       `0.000009018` | `4760` | `0.000000023` |   `0.000009041` |       `$0.0286` |
| Biconomy v2               |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Kernel v2.1               |      `142287` |       `0.000008683` | `4888` | `0.000000024` |   `0.000008707` |       `$0.0276` |
| Safe                      |      `155690` |       `0.000009501` | `6984` | `0.000000034` |   `0.000009535` |       `$0.0302` |
| Simple Account            |      `136943` |       `0.000008357` | `4760` | `0.000000023` |   `0.000008380` |       `$0.0265` |
| Light Account             |      `136457` |       `0.000008327` | `4748` | `0.000000023` |   `0.000008350` |       `$0.0265` |
| Light Account v2          |      `136429` |       `0.000008325` | `4748` | `0.000000023` |   `0.000008349` |       `$0.0264` |
| Multi-Owner Light Account |      `136524` |       `0.000008331` | `4748` | `0.000000023` |   `0.000008354` |       `$0.0265` |
| Coinbase Smart Wallet     |      `137243` |       `0.000008375` | `4760` | `0.000000023` |   `0.000008398` |       `$0.0266` |
| Nexus                     |      `136403` |       `0.000008324` | `4748` | `0.000000023` |   `0.000008347` |       `$0.0264` |
| Kernel V3.1               |      `145355` |       `0.000008870` | `4760` | `0.000000023` |   `0.000008893` |       `$0.0282` |

##### 2024-03-31 (high blob fees)

|                           | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------ | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Modular Account           |      `147781` |       `0.000008901` | `4760` | `0.000011479` |   `0.000020380` |       `$0.0646` |
| Biconomy v2               |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Kernel v2.1               |      `142287` |       `0.000008570` | `4888` | `0.000011787` |   `0.000020358` |       `$0.0645` |
| Safe                      |      `155690` |       `0.000009378` | `6984` | `0.000016842` |   `0.000026220` |       `$0.0831` |
| Simple Account            |      `136943` |       `0.000008249` | `4760` | `0.000011479` |   `0.000019727` |       `$0.0625` |
| Light Account             |      `136457` |       `0.000008219` | `4748` | `0.000011450` |   `0.000019669` |       `$0.0623` |
| Light Account v2          |      `136429` |       `0.000008218` | `4748` | `0.000011450` |   `0.000019667` |       `$0.0623` |
| Multi-Owner Light Account |      `136524` |       `0.000008223` | `4748` | `0.000011450` |   `0.000019673` |       `$0.0623` |
| Coinbase Smart Wallet     |      `137243` |       `0.000008267` | `4760` | `0.000011479` |   `0.000019745` |       `$0.0626` |
| Nexus                     |      `136403` |       `0.000008216` | `4748` | `0.000011450` |   `0.000019666` |       `$0.0623` |
| Kernel V3.1               |      `145355` |       `0.000008755` | `4760` | `0.000011479` |   `0.000020234` |       `$0.0641` |

</details>

<!-- /BENCHMARK_RESULTS -->

## Run benchmark

Copy `.env.sample` to `.env` and update the values within `.env`:

```bash
cp .env.sample .env
```

Test running the benchmarks over the supported accounts and see the results in your terminal:

```bash
pnpm benchmark
```

Run the benchmarks and update this file with the new results:

```bash
pnpm benchmark:write
```

## Contributing

To add a new smart account to this repo, follow the steps below.

1. Fork this repo.
2. Add the account's artifacts under [test/artifacts](test/artifacts/).
3. Implement the account's fixture and export an object matching the `AccountConfig` interface. Add this file under [test/accounts](test/accounts/).
4. Add your account under [test/accounts.ts](test/accounts.ts) to include your account in the benchmarks.
5. Generate the results and write to the README by running `pnpm benchmark:write`.
6. Open a PR against this repo.
