import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const publicKeyString = "GghvcjRjgFUzkzd7kq45cdmCjxKGaobdetiY99hG4crM"; // Example address

// Check if the public key is valid
try {
  const publicKey = new PublicKey("GgJJRwLg9NzFQ97o1CJLGLp1KLSUMBwFc6eQNVEr4fbW");
  if (!publicKey.toString()) {
    throw new Error("Invalid public key format");
  }

  //const connection = new Connection("https://api.devnet.solana.com", "confirmed");


  // Connect to the Solana mainnet
const connection = new Connection("https://api.mainnet-beta.solana.com", "confirmed");

  // Fetch balance in lamports (smallest unit of SOL)
  const balanceInLamports = await connection.getBalance(publicKey);

  // Convert lamports to SOL
  const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

  console.log(`💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL} SOL.`);
} catch (error) {
  console.error("Error:", error.message);
}
