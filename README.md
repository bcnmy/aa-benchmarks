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

| Parameter            | 2024-05-14 (latest) | 2024-03-31 (high blob fees) |
| :------------------- | ------------------: | --------------------------: |
| Gas price (gwei)     |       `0.061023704` |               `0.060233618` |
| L1 base fee (gwei)   |       `3.578904748` |                     `24.05` |
| L1 base fee scalar   |              `1368` |                      `1368` |
| Blob base fee (wei)  |                 `1` |               `46930000000` |
| Blob base fee scalar |            `810949` |                    `810949` |
| ETH price (USD)      |           `$2948.6` |                         `-` |

#### User Operation: Account creation

##### Total fee (USD)

|       | 2024-05-14 (latest) | 2024-03-31 (high blob fees) |
| :---- | ------------------: | --------------------------: |
| Nexus |           `$0.0617` |                   `$0.1224` |

<details>
<summary><b>Details</b></summary>

##### 2024-05-14 (latest)

|       | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :---- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Nexus |      `342381` |       `0.000020893` | `8664` | `0.000000042` |   `0.000020936` |       `$0.0617` |

##### 2024-03-31 (high blob fees)

|       | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :---- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Nexus |      `342381` |       `0.000020623` | `8664` | `0.000020893` |   `0.000041516` |       `$0.1224` |

</details>

#### User Operation: Native transfer

##### Total fee (USD)

|       | 2024-05-14 (latest) | 2024-03-31 (high blob fees) |
| :---- | ------------------: | --------------------------: |
| Nexus |           `$0.0297` |                   `$0.0810` |

<details>
<summary><b>Details</b></summary>

##### 2024-05-14 (latest)

|       | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :---- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Nexus |      `164351` |       `0.000010029` | `7288` | `0.000000036` |   `0.000010065` |       `$0.0297` |

##### 2024-03-31 (high blob fees)

|       | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :---- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Nexus |      `164351` |       `0.000009899` | `7288` | `0.000017575` |   `0.000027475` |       `$0.0810` |

</details>

#### User Operation: ERC-20 transfer

##### Total fee (USD)

|       | 2024-05-14 (latest) | 2024-03-31 (high blob fees) |
| :---- | ------------------: | --------------------------: |
| Nexus |           `$0.0340` |                   `$0.0890` |

<details>
<summary><b>Details</b></summary>

##### 2024-05-14 (latest)

|       | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :---- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Nexus |      `188136` |       `0.000011481` | `7820` | `0.000000038` |   `0.000011519` |       `$0.0340` |

##### 2024-03-31 (high blob fees)

|       | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :---- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Nexus |      `188136` |       `0.000011332` | `7820` | `0.000018858` |   `0.000030190` |       `$0.0890` |

</details>

#### User Operation: Uniswap V3 ERC-20 swap

##### Total fee (USD)

|       | 2024-05-14 (latest) | 2024-03-31 (high blob fees) |
| :---- | ------------------: | --------------------------: |
| Nexus |           `$0.0374` |                   `$0.1021` |

<details>
<summary><b>Details</b></summary>

##### 2024-05-14 (latest)

|       | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :---- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Nexus |      `207286` |       `0.000012649` | `9188` | `0.000000045` |   `0.000012694` |       `$0.0374` |

##### 2024-03-31 (high blob fees)

|       | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :---- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Nexus |      `207286` |       `0.000012486` | `9188` | `0.000022157` |   `0.000034643` |       `$0.1021` |

</details>

#### User Operation: Session key creation

##### Total fee (USD)

|       | 2024-05-14 (latest) | 2024-03-31 (high blob fees) |
| :---- | ------------------: | --------------------------: |
| Nexus |       `Unsupported` |               `Unsupported` |

<details>
<summary><b>Details</b></summary>

##### 2024-05-14 (latest)

|       | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :---- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Nexus |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |

##### 2024-03-31 (high blob fees)

|       | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :---- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Nexus |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |

</details>

#### User Operation: Session key native transfer

##### Total fee (USD)

|       | 2024-05-14 (latest) | 2024-03-31 (high blob fees) |
| :---- | ------------------: | --------------------------: |
| Nexus |       `Unsupported` |               `Unsupported` |

<details>
<summary><b>Details</b></summary>

##### 2024-05-14 (latest)

|       | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :---- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Nexus |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |

##### 2024-03-31 (high blob fees)

|       | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :---- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Nexus |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |

</details>

#### User Operation: Session key ERC-20 transfer

##### Total fee (USD)

|       | 2024-05-14 (latest) | 2024-03-31 (high blob fees) |
| :---- | ------------------: | --------------------------: |
| Nexus |       `Unsupported` |               `Unsupported` |

<details>
<summary><b>Details</b></summary>

##### 2024-05-14 (latest)

|       | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :---- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Nexus |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |

##### 2024-03-31 (high blob fees)

|       | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :---- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Nexus |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |

</details>

#### Runtime: Account creation

##### Total fee (USD)

|       | 2024-05-14 (latest) | 2024-03-31 (high blob fees) |
| :---- | ------------------: | --------------------------: |
| Nexus |           `$0.0379` |                   `$0.0598` |

<details>
<summary><b>Details</b></summary>

##### 2024-05-14 (latest)

|       | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :---- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Nexus |      `210309` |       `0.000012834` | `3152` | `0.000000015` |   `0.000012849` |       `$0.0379` |

##### 2024-03-31 (high blob fees)

|       | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :---- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Nexus |      `210309` |       `0.000012668` | `3152` | `0.000007601` |   `0.000020269` |       `$0.0598` |

</details>

#### Runtime: Native transfer

##### Total fee (USD)

|       | 2024-05-14 (latest) | 2024-03-31 (high blob fees) |
| :---- | ------------------: | --------------------------: |
| Nexus |           `$0.0072` |                   `$0.0274` |

<details>
<summary><b>Details</b></summary>

##### 2024-05-14 (latest)

|       | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :---- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Nexus |       `39685` |       `0.000002422` | `2856` | `0.000000014` |   `0.000002436` |       `$0.0072` |

##### 2024-03-31 (high blob fees)

|       | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :---- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Nexus |       `39685` |       `0.000002390` | `2856` | `0.000006887` |   `0.000009278` |       `$0.0274` |

</details>

#### Runtime: ERC-20 transfer

##### Total fee (USD)

|       | 2024-05-14 (latest) | 2024-03-31 (high blob fees) |
| :---- | ------------------: | --------------------------: |
| Nexus |           `$0.0115` |                   `$0.0353` |

<details>
<summary><b>Details</b></summary>

##### 2024-05-14 (latest)

|       | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :---- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Nexus |       `63384` |       `0.000003868` | `3376` | `0.000000017` |   `0.000003884` |       `$0.0115` |

##### 2024-03-31 (high blob fees)

|       | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :---- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Nexus |       `63384` |       `0.000003818` | `3376` | `0.000008141` |   `0.000011959` |       `$0.0353` |

</details>

#### Runtime: Uniswap V3 ERC-20 swap

##### Total fee (USD)

|       | 2024-05-14 (latest) | 2024-03-31 (high blob fees) |
| :---- | ------------------: | --------------------------: |
| Nexus |           `$0.0246` |                   `$0.0580` |

<details>
<summary><b>Details</b></summary>

##### 2024-05-14 (latest)

|       | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :---- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Nexus |      `136403` |       `0.000008324` | `4748` | `0.000000023` |   `0.000008347` |       `$0.0246` |

##### 2024-03-31 (high blob fees)

|       | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :---- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Nexus |      `136403` |       `0.000008216` | `4748` | `0.000011450` |   `0.000019666` |       `$0.0580` |

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
