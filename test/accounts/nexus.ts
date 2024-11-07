import hre from "hardhat";
import {
  encodeFunctionData,
  encodePacked,
  getAbiItem,
  getContract,
  parseEther,
  toHex,
  walletActions,
  zeroAddress,
  zeroHash,
} from "viem";
import {AccountConfig, AccountDataV07} from "../accounts";
import {NEXUS_ARTIFACTS} from "../artifacts/nexus";
import {getEntryPointV07} from "../utils/entryPoint";

/* 

enum SignatureType {
  EOA = 0,
  CONTRACT = 1,
} 
  
*/

async function accountFixture(): Promise<AccountDataV07> {
  const [walletClient] = await hre.viem.getWalletClients();
  const publicClient = await hre.viem.getPublicClient();
  const testClient = (await hre.viem.getTestClient()).extend(walletActions);

  // Deploy Nexus-related contracts to the network using hardhat_setCode.
  for (const {address, bytecode} of Object.values(NEXUS_ARTIFACTS)) {
    await hre.network.provider.send("hardhat_setCode", [address, bytecode]);
  }

  // Get the Nexus factory contract
  const nexusFactory = getContract({
    address: NEXUS_ARTIFACTS.K1ValidatorFactory.address,
    abi: NEXUS_ARTIFACTS.K1ValidatorFactory.abi,
    publicClient,
    walletClient,
  });

  // If the factory requires setting up using an impersonated account
  await testClient.impersonateAccount({address: zeroAddress});
  await hre.network.provider.send("hardhat_setBalance", [
    zeroAddress,
    toHex(parseEther("10000")),
  ]);
  // No need to call `setImplementation` here; it's already set in the constructor.
  await testClient.stopImpersonatingAccount({address: zeroAddress});

  return {
    entryPoint: getEntryPointV07({walletClient, publicClient}),

    createAccount: async (salt, ownerAddress) => {
      const attesters = [ownerAddress];
      const threshold = 1;

      const hash = await nexusFactory.write.createAccount([
        ownerAddress,
        salt,
        attesters,
        threshold,
      ]);

      return hash;
    },

    getAccountAddress: async (salt, ownerAddress) => {
      const attesters = [ownerAddress];
      const threshold = 1;
      return await nexusFactory.read.computeAccountAddress([
        ownerAddress,
        salt,
        attesters,
        threshold,
      ]);
    },

    getOwnerSignature: async (owner, userOp, entryPoint) => {
      const userOpHash = await entryPoint.read.getUserOpHash([userOp]);
      const signature = await owner.signMessage({
        message: {raw: userOpHash},
      });
      //console.log("Signature", signature);
      //const signatureHex = concatHex([toHex(SignatureType.EOA, { size: 1 }), signature]);
      //console.log("Sig hex", signatureHex);
      //return signatureHex;
      return signature;
    },

    encodeUserOpExecute: (target, value, data) => {
      try {
        const executionCalldata = encodePacked(
          ["address", "uint256", "bytes"],
          [target, value, data],
        );

        const defaultMode = toHex(0, {size: 32});

        /* console.log("Executing encodeUserOpExecute with:", {
          zeroHash,
          executionCalldata,
        }); */

        return encodeFunctionData({
          abi: [
            getAbiItem({
              abi: NEXUS_ARTIFACTS.Nexus.abi,
              name: "execute",
            }),
          ],
          args: [defaultMode, executionCalldata],
        });
      } catch (error) {
        console.error("Error encoding UserOpExecute:", error);
        throw error;
      }
    },

    encodeRuntimeExecute: async (
      target,
      value,
      data,
      owner,
      accountAddress,
    ) => {
      if (!accountAddress) {
        throw new Error("Account address is required");
      }
      try {
        const executionCalldata = encodePacked(
          ["address", "uint256", "bytes"],
          [target, value, data],
        );

        const defaultMode = toHex(0, {size: 32});
        /*         console.log("Executing encodeRuntimeExecute with:", {
          zeroHash,
          executionCalldata,
        }); */

        return encodeFunctionData({
          abi: [
            getAbiItem({
              abi: NEXUS_ARTIFACTS.Nexus.abi,
              name: "execute",
            }),
          ],
          args: [defaultMode, executionCalldata],
        });
      } catch (error) {
        console.error("Error encoding RuntimeExecute:", error);
        throw error;
      }
    },

    getDummySignature: (_userOp) => {
      //return concatHex([toHex(SignatureType.EOA, { size: 1 })]);
      return "0x";
    },
    getInitCode: (salt, ownerAddress) => {
      const attesters = [ownerAddress];
      const threshold = 1;

      // Log the owner address and parameters
      /* 
      console.log("Owner Address: ", ownerAddress);
      console.log("Salt: ", salt.toString());
      console.log("Attesters: ", attesters);
      console.log("Threshold: ", threshold); 
      */

      return encodePacked(
        ["address", "bytes"],
        [
          nexusFactory.address,
          encodeFunctionData({
            abi: [
              getAbiItem({
                abi: nexusFactory.abi,
                name: "createAccount",
              }),
            ],
            args: [ownerAddress, salt, attesters, threshold],
          }),
        ],
      );
    },
  };
}

export const nexus: AccountConfig = {
  name: "Nexus",
  accountFixture,
};
