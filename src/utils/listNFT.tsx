import { getClient, Execute } from "@reservoir0x/reservoir-kit-client";
import { ethers } from "ethers";
import erc721ContractABI from '../contracts/erc721ContractABI.json'

const contractAddress = "0x5531Cc6980831ee1FA9B138892d681c5dE4eAB90";

export const ListToken = async (account: any, signer: any) => {
  let tokenID: any = null;

  const findToken = async () => {
    const contract = new ethers.Contract(contractAddress, erc721ContractABI, signer)
    let totalSupply = await contract.totalSupply()
    console.log(`Looking for tokens owned by ${account}`);
    for(let i = 0; i < totalSupply; i++) {
        let tokenOwner = await contract.ownerOf(i)
        if(tokenOwner.toLowerCase() === account.toLowerCase()) {
            console.log(`Token ${i} owned by account ${account}`);
            tokenID = i;
            i = totalSupply;
        }
    }
  }

  await findToken()
  if(tokenID != null) {
    console.log("Initiating offline signature")
    getClient()?.actions.listToken({
      listings: [{
        token: `0x5531Cc6980831ee1FA9B138892d681c5dE4eAB90:${tokenID}`,
        weiPrice: "10000000000000000",
        orderbook: "opensea",
        orderKind: "seaport"
      }],
      signer,
      onProgress: (steps: Execute['steps']) => {
        console.log(steps)
      }
    })
  } else {
    console.log("Cannot list NFT because you don't own one");
  }
}