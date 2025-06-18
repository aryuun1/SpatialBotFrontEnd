import axios from "axios";

const API_BASE = "http://127.0.0.1:5000"; // Change if your FastAPI runs elsewhere

export const connectWallet = (walletId, privateKey) => 
  axios.post(`${API_BASE}/wallet/connect`, { walletId, privateKey });

export const getEthBalance = (wallet_address, private_key) => 
  axios.get(`${API_BASE}/wallet/eth-balance`, { 
    params: { wallet_address, private_key } 
  });

export const getArbBalance = (wallet_address, private_key) => 
  axios.get(`${API_BASE}/wallet/arb-balance`, { 
    params: { wallet_address, private_key } 
  });

export const getPrice = (pair) => axios.get(`${API_BASE}/price`, { params: { pair } });
export const getArbitrage = (pair) => axios.get(`${API_BASE}/arbitrage/`, { params: { pair } });
export const executeArbitrage = (pair, execute = true, max_amount) =>
  axios.get(`${API_BASE}/execute/arbitrage`, { params: { pair, execute, max_amount } });
export const monitorArbitrage = (params) =>
  axios.get(`${API_BASE}/execute/monitor`, { params });