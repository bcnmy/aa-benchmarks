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
| ETH price (USD)      |            `$2948.6` |                         `-` |

#### User Operation: Account creation

##### Total fee (USD)

|             | Latest fees snapshot | 2024-03-31 (high blob fees) |
| :---------- | -------------------: | --------------------------: |
| Kernel V3.1 |            `$0.0610` |                   `$0.1320` |

<details>
<summary><b>Details</b></summary>

##### Latest fees snapshot

|             | Execution gas | Execution fee (ETH) |  L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :---------- | ------------: | ------------------: | ------: | ------------: | --------------: | --------------: |
| Kernel V3.1 |      `338419` |       `0.000020652` | `10108` | `0.000000049` |   `0.000020701` |       `$0.0610` |

##### 2024-03-31 (high blob fees)

|             | Execution gas | Execution fee (ETH) |  L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :---------- | ------------: | ------------------: | ------: | ------------: | --------------: | --------------: |
| Kernel V3.1 |      `338419` |       `0.000020384` | `10108` | `0.000024376` |   `0.000044760` |       `$0.1320` |

</details>

#### User Operation: Native transfer

##### Total fee (USD)

|             | Latest fees snapshot | 2024-03-31 (high blob fees) |
| :---------- | -------------------: | --------------------------: |
| Kernel V3.1 |            `$0.0345` |                   `$0.0861` |

<details>
<summary><b>Details</b></summary>

##### Latest fees snapshot

|             | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :---------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Kernel V3.1 |      `190912` |       `0.000011650` | `7336` | `0.000000036` |   `0.000011686` |       `$0.0345` |

##### 2024-03-31 (high blob fees)

|             | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :---------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Kernel V3.1 |      `190912` |       `0.000011499` | `7336` | `0.000017691` |   `0.000029190` |       `$0.0861` |

</details>

#### User Operation: ERC-20 transfer

##### Total fee (USD)

|             | Latest fees snapshot | 2024-03-31 (high blob fees) |
| :---------- | -------------------: | --------------------------: |
| Kernel V3.1 |            `$0.0388` |                   `$0.0940` |

<details>
<summary><b>Details</b></summary>

##### Latest fees snapshot

|             | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :---------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Kernel V3.1 |      `214817` |       `0.000013109` | `7856` | `0.000000038` |   `0.000013147` |       `$0.0388` |

##### 2024-03-31 (high blob fees)

|             | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :---------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Kernel V3.1 |      `214817` |       `0.000012939` | `7856` | `0.000018945` |   `0.000031884` |       `$0.0940` |

</details>

#### User Operation: Uniswap V3 ERC-20 swap

##### Total fee (USD)

|             | Latest fees snapshot | 2024-03-31 (high blob fees) |
| :---------- | -------------------: | --------------------------: |
| Kernel V3.1 |            `$0.0423` |                   `$0.1071` |

<details>
<summary><b>Details</b></summary>

##### Latest fees snapshot

|             | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :---------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Kernel V3.1 |      `234378` |       `0.000014303` | `9212` | `0.000000045` |   `0.000014348` |       `$0.0423` |

##### 2024-03-31 (high blob fees)

|             | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :---------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Kernel V3.1 |      `234378` |       `0.000014117` | `9212` | `0.000022215` |   `0.000036332` |       `$0.1071` |

</details>

#### User Operation: Session key creation

##### Total fee (USD)

|             | Latest fees snapshot | 2024-03-31 (high blob fees) |
| :---------- | -------------------: | --------------------------: |
| Kernel V3.1 |        `Unsupported` |               `Unsupported` |

<details>
<summary><b>Details</b></summary>

##### Latest fees snapshot

|             | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :---------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Kernel V3.1 |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |

##### 2024-03-31 (high blob fees)

|             | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :---------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Kernel V3.1 |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |

</details>

#### User Operation: Session key native transfer

##### Total fee (USD)

|             | Latest fees snapshot | 2024-03-31 (high blob fees) |
| :---------- | -------------------: | --------------------------: |
| Kernel V3.1 |        `Unsupported` |               `Unsupported` |

<details>
<summary><b>Details</b></summary>

##### Latest fees snapshot

|             | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :---------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Kernel V3.1 |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |

##### 2024-03-31 (high blob fees)

|             | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :---------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Kernel V3.1 |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |

</details>

#### User Operation: Session key ERC-20 transfer

##### Total fee (USD)

|             | Latest fees snapshot | 2024-03-31 (high blob fees) |
| :---------- | -------------------: | --------------------------: |
| Kernel V3.1 |        `Unsupported` |               `Unsupported` |

<details>
<summary><b>Details</b></summary>

##### Latest fees snapshot

|             | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :---------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Kernel V3.1 |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |

##### 2024-03-31 (high blob fees)

|             | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :---------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Kernel V3.1 |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |

</details>

#### Runtime: Account creation

##### Total fee (USD)

|             | Latest fees snapshot | 2024-03-31 (high blob fees) |
| :---------- | -------------------: | --------------------------: |
| Kernel V3.1 |            `$0.0325` |                   `$0.0645` |

<details>
<summary><b>Details</b></summary>

##### Latest fees snapshot

|             | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :---------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Kernel V3.1 |      `180465` |       `0.000011013` | `4564` | `0.000000022` |   `0.000011035` |       `$0.0325` |

##### 2024-03-31 (high blob fees)

|             | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :---------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Kernel V3.1 |      `180465` |       `0.000010870` | `4564` | `0.000011006` |   `0.000021876` |       `$0.0645` |

</details>

#### Runtime: Native transfer

##### Total fee (USD)

|             | Latest fees snapshot | 2024-03-31 (high blob fees) |
| :---------- | -------------------: | --------------------------: |
| Kernel V3.1 |            `$0.0088` |                   `$0.0290` |

<details>
<summary><b>Details</b></summary>

##### Latest fees snapshot

|             | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :---------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Kernel V3.1 |       `48615` |       `0.000002967` | `2868` | `0.000000014` |   `0.000002981` |       `$0.0088` |

##### 2024-03-31 (high blob fees)

|             | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :---------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Kernel V3.1 |       `48615` |       `0.000002928` | `2868` | `0.000006916` |   `0.000009844` |       `$0.0290` |

</details>

#### Runtime: ERC-20 transfer

##### Total fee (USD)

|             | Latest fees snapshot | 2024-03-31 (high blob fees) |
| :---------- | -------------------: | --------------------------: |
| Kernel V3.1 |            `$0.0131` |                   `$0.0368` |

<details>
<summary><b>Details</b></summary>

##### Latest fees snapshot

|             | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :---------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Kernel V3.1 |       `72317` |       `0.000004413` | `3376` | `0.000000017` |   `0.000004430` |       `$0.0131` |

##### 2024-03-31 (high blob fees)

|             | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :---------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Kernel V3.1 |       `72317` |       `0.000004356` | `3376` | `0.000008141` |   `0.000012497` |       `$0.0368` |

</details>

#### Runtime: Uniswap V3 ERC-20 swap

##### Total fee (USD)

|             | Latest fees snapshot | 2024-03-31 (high blob fees) |
| :---------- | -------------------: | --------------------------: |
| Kernel V3.1 |            `$0.0262` |                   `$0.0597` |

<details>
<summary><b>Details</b></summary>

##### Latest fees snapshot

|             | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :---------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Kernel V3.1 |      `145355` |       `0.000008870` | `4760` | `0.000000023` |   `0.000008893` |       `$0.0262` |

##### 2024-03-31 (high blob fees)

|             | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :---------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Kernel V3.1 |      `145355` |       `0.000008755` | `4760` | `0.000011479` |   `0.000020234` |       `$0.0597` |

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
