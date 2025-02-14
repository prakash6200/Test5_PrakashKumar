import React, { useState } from "react";
import { ethers } from "ethers";

const ConnectMetaMask: React.FC = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [balance, setBalance] = useState<string | null>(null);
  const [recipient, setRecipient] = useState<string>(""); // Address for transfer
  const [amount, setAmount] = useState<string>(""); // Amount for transfer
  const [mintAddress, setMintAddress] = useState<string>(""); // Address for minting
  const [mintAmount, setMintAmount] = useState<string>(""); // Amount for minting
  const [tokenName, setTokenName] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [contract, setContract] = useState<ethers.Contract | null>(null);

  const tokenAddress = "0x8ec71fa667c7aeA1Fb31Ea4AaCb1853D434bc019"; // Replace with your token contract address
  const tokenABI = [{"inputs":[{"internalType":"uint256","name":"initialSupply","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"allowance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InsufficientAllowance","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InsufficientBalance","type":"error"},{"inputs":[{"internalType":"address","name":"approver","type":"address"}],"name":"ERC20InvalidApprover","type":"error"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"}],"name":"ERC20InvalidReceiver","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"ERC20InvalidSender","type":"error"},{"inputs":[{"internalType":"address","name":"spender","type":"address"}],"name":"ERC20InvalidSpender","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];

  const handleConnect = async () => {
    if (!window.ethereum) {
      setError("MetaMask is not installed");
      return;
    }

    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      setAccount(address);

      const tokenContract = new ethers.Contract(tokenAddress, tokenABI, signer);
      setContract(tokenContract);

      // Get token name
      const name = await tokenContract.name();
      setTokenName(name);

      // Get balance
      const tokenBalance = await tokenContract.balanceOf(address);
      setBalance(ethers.formatUnits(tokenBalance, 18)); // Assuming 18 decimals

      setError(null);
    } catch (err) {
      setError("Failed to connect to MetaMask");
      console.error(err);
    }
  };

  const handleTransfer = async () => {
    if (!contract || !recipient || !amount) return;

    try {
      const amountInWei = ethers.parseUnits(amount, 18);
      const tx = await contract.transfer(recipient, amountInWei);
      await tx.wait();
      alert("Transaction successful!");

      const newBalance = await contract.balanceOf(account!);
      setBalance(ethers.formatUnits(newBalance, 18));
    } catch (err) {
      setError("Transaction failed");
      console.error(err);
    }
  };

  const handleMint = async () => {
    if (!contract || !mintAddress || !mintAmount) {
      setError("Enter a valid address and amount");
      return;
    }

    try {
      const mintAmountInWei = ethers.parseUnits(mintAmount, 18);
      console.log(`Minting ${mintAmount} tokens to ${mintAddress}...`);

      const tx = await contract.mint(mintAddress, mintAmountInWei);
      await tx.wait();

      alert("Mint successful!");
      if (mintAddress.toLowerCase() === account?.toLowerCase()) {
        const updatedBalance = await contract.balanceOf(account);
        setBalance(ethers.formatUnits(updatedBalance, 18));
      }
    } catch (err) {
      setError("Minting failed");
      console.error(err);
    }
  };

  return (
    <div className="container position-relative vh-100">
      <div className="position-absolute top-0 end-0 p-3">
        <div className="card p-4 shadow-lg" style={{ width: "350px" }}>
          <h3 className="text-center mb-3">MetaMask Connection</h3>

          {account ? (
            <div className="text-center">
              <p><strong>Token:</strong> {tokenName || "Loading..."}</p>
              <p><strong>Address:</strong> {account}</p>
              <p><strong>Balance:</strong> {balance} Tokens</p>

              {/* Transfer Section */}
              <h5 className="mt-4">Transfer Tokens</h5>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Recipient Address"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
              />
              <input
                type="number"
                className="form-control mb-3"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <button className="btn btn-primary w-100" onClick={handleTransfer}>
                Transfer
              </button>

              {/* Minting Section */}
              <h5 className="mt-4">Mint Tokens</h5>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Address to Mint"
                value={mintAddress}
                onChange={(e) => setMintAddress(e.target.value)}
              />
              <input
                type="number"
                className="form-control mb-3"
                placeholder="Amount"
                value={mintAmount}
                onChange={(e) => setMintAmount(e.target.value)}
              />
              <button className="btn btn-success w-100" onClick={handleMint}>
                Mint Tokens
              </button>
            </div>
          ) : (
            <div className="text-center">
              <button className="btn btn-primary w-100" onClick={handleConnect}>
                Connect MetaMask
              </button>
            </div>
          )}

          {error && (
            <div className="alert alert-danger mt-3" role="alert">
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConnectMetaMask;
