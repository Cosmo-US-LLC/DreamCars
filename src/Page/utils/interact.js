const {Web3} = require('web3');
const web3 = new Web3("https://bsc-testnet-rpc.publicnode.com");
const ethweb3 = new Web3("https://ethereum-sepolia-rpc.publicnode.com")


const contractABI = require("../../config/ico-abi.json");
const contractAddress = require("../../config/contracts.json").icoAddress
const usdtABI = require("../../config/usdt-abi.json");
const usdtAddress = require("../../config/contracts.json").usdtAddress
const receiverABI = require("../../config/receiver-abi.json");
const receiverAddress = require("../../config/contracts.json").ethReceiverAddress


const icoContract = new web3.eth.Contract(
    contractABI,
    contractAddress
);
const usdtContract = new web3.eth.Contract(
    usdtABI,
    usdtAddress
);
const receiverContract = new ethweb3.eth.Contract(
    receiverABI,
    receiverAddress
);

export const getEth = async () => {
    const { getEthPriceNow, getEthPriceHistorical } = require('get-eth-price');

    let eth; 
    await getEthPriceNow()

      .then(data => {
        var rawdata = JSON.stringify(data);
        var prices = rawdata.split(',')
        var usd = prices[1].match(/\d+/g);
        var ethusd = parseInt(usd[0]);

       
        eth = ethusd;
      }

      )
      return eth;
  }

  export const getBnb = async () => {
    const bnbprice = await icoContract.methods.getRoundedBNBPrice().call();
    const bnbconv = web3.utils.fromWei(bnbprice, "ether")
    console.log(bnbconv)

    return Number(bnbconv)

  }

  export const getParticipants = async () => {
    const participants = await icoContract.methods.participants().call();
    return Number(participants)
  }

  export const getRefCode = async (address) => {
    const refCode = await icoContract.methods.refByAddr(address).call();
    console.log(refCode)

    return Number(refCode);
  }

  





export const getICOPrice = async () => {

    const mintPrice = await icoContract.methods.tokenPrice().call()
    const priceEther = web3.utils.fromWei(mintPrice, "ether");
    return Number(priceEther)

}

export const getReceiverBalance = async () => {
    const balance = await ethweb3.eth.getBalance(receiverAddress);
    const raweth = Number(ethweb3.utils.fromWei(balance, "ether"));
    console.log(raweth)
    const ethPrice = await getEth();
    console.log(ethPrice)

    return Number(raweth * ethPrice)
}

export const getTotalAmountRaised = async () => {
    const bnbBalance = await web3.eth.getBalance(contractAddress);
    const pricebnb = Number(web3.utils.fromWei(bnbBalance, "ether"));
    console.log(pricebnb)
    const bnbconv = await getBnb();
    const bnbUsd = pricebnb * bnbconv;
    console.log(bnbUsd)

    const usdtBalance = await usdtContract.methods.balanceOf(contractAddress).call();
    const rawusdt = Number(Number(usdtBalance)/ 10 ** 6);
    console.log(rawusdt)

    const ethBalance = await getReceiverBalance();
    console.log(ethBalance)
    


    return Number(bnbUsd + rawusdt + ethBalance);
}