import Layout from "./layout";
import i18n from "i18next";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { getRefCode } from "./Page/utils/interact";

const { Web3 } = require("web3");

const contractABI = require("./config/ico-abi.json");
const contractAddress = require("./config/contracts.json").icoAddress;
const usdtABI = require("./config/usdt-abi.json");
const usdtAddress = require("./config/contracts.json").usdtAddress;
const receiverABI = require("./config/receiver-abi.json");
const receiverAddress =
  require("./config/contracts.json").ethReceiverAddress;



const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      rpc: "https://bsc-testnet-rpc.publicnode.com", // required
    },
  },
};

const ethProviderOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      rpc: "https://eth-sepolia.g.alchemy.com/v2/tZgBg81RgxE0pkpnQ6pjNpddJBd6nR_b", // required
    },
  },
};

function App() {
  //State variables
  const [provider, setProvider] = useState(null);
  const [walletAddress, setAddress] = useState("");
  const [refCode, setRefCode] = useState(0);
  const [guestCode, setGuestCode] = useState(0)


 

  const handelClick = (lang) => {
    i18n.changeLanguage(lang);
    console.log(handelClick, "sdj");
  };

  async function connectWallet(eth) {
    try {
      let web3Modal = new Web3Modal({
        network: "mainnet", // optional
        theme: "dark",
        cacheProvider: false,

        providerOptions: eth ? ethProviderOptions : providerOptions
      });
      const web3ModalInstance = await web3Modal.connect();
      const provider = new Web3(web3ModalInstance);
      if (web3ModalInstance) {
        setProvider(provider);
        const accounts = await provider.eth.getAccounts();
        const address = accounts[0];
        setAddress(address);

        try {
          const code = await getRefCode(address);
          setRefCode(code)
          } catch (err){
            console.log(err)
          }
      }

    } catch (error) {
      console.error(error);
    }
  }

  const buyWithUSDT = async (amount) => {
    let total = amount * 10 ** 6
    console.log(total)

    const icoContract = new provider.eth.Contract(
      contractABI,
      contractAddress
    )

    const usdtContract = new provider.eth.Contract(
      usdtABI,
     usdtAddress
    )

    // Build the transaction object
    const approvalObject = {
      from: walletAddress,
      to: usdtAddress,
      value: "0x0", // For ERC-20 transfers, set value to 0
      gas: 250000,
      data: usdtContract.methods.approve(contractAddress, total).encodeABI(),
    };
    //@ts-expect-error provider check
    await provider.eth.sendTransaction(approvalObject).then(async () => {
      // Build the transaction object
      const transactionObject = {
        from: walletAddress,
        to: contractAddress,
        value: "0x0", // For ERC-20 transfers, set value to 0
        gas: 250000,
        data: icoContract.methods
          .buyTokenswithUSDT(amount, guestCode)
          .encodeABI(),
      };
      //@ts-expect-error provider check
      await provider.eth.sendTransaction(transactionObject);

       window.location.href = "/"
    });
  };
  const buyWithBNB = async (amount) => {
    let total = provider.utils.toWei(amount, 'ether');

    const icoContract = new provider.eth.Contract(
      contractABI,
      contractAddress
    )

    

   
      const transactionObject = {
        from: walletAddress,
        to: contractAddress,
        value: total, // For ERC-20 transfers, set value to 0
        gas: 250000,
        data: icoContract.methods
          .buyTokens(guestCode)
          .encodeABI(),
      };
      //@ts-expect-error provider check
      await provider.eth.sendTransaction(transactionObject);

      window.location.href = "/"
    
  };
  const buyWithETH = async (amount) => {
    let total = provider.utils.toWei(amount, 'ether');

    const receiverContract = new provider.eth.Contract(
      receiverABI,
      receiverAddress
    )


   
      const transactionObject = {
        from: walletAddress,
        to: receiverAddress,
        value: total, // For ERC-20 transfers, set value to 0
        gas: 250000,
        data: receiverContract.methods
          .payWithETH()
          .encodeABI(),
      };
      //@ts-expect-error provider check
      await provider.eth.sendTransaction(transactionObject);

       window.location.href = "/"
    
  };
  const generateRefCode = async () => {
    
    const icoContract = new provider.eth.Contract(
      contractABI,
      contractAddress
    )


   
      const transactionObject = {
        from: walletAddress,
        to: contractAddress,
        value: "0x0", // For ERC-20 transfers, set value to 0
        gas: 250000,
        data: icoContract.methods
          .generateRefCode(walletAddress)
          .encodeABI(),
      };
      //@ts-expect-error provider check
      await provider.eth.sendTransaction(transactionObject);

       window.location.href = "/"
    
  };

  return (
    <div className="">
      <ToastContainer />
      <Layout
        walletAddress={walletAddress}
        setAddress={setAddress}
        connectWallet={connectWallet}
        buyWithUSDT={buyWithUSDT}
        buyWithBNB={buyWithBNB}
        buyWithETH={buyWithETH}
        refCode={refCode}
        setRefCode={setRefCode}
        generateRefCode={generateRefCode}
        guestCode={guestCode}
        setGuestCode={setGuestCode}
        handelClick={handelClick}
      />
    </div>
  );
}

export default App;
