// Avalanche

import joe from "../assets/tokens/joe.png";
import eth from "../assets/tokens/eth.png";
import avax from "../assets/tokens/avax.png";
import btc from "../assets/tokens/btc.png";

/**
 *  Core Addresses
 */
export const factoryAddress = '0x4C78B0E18fEdB7221Da76E808eA5d66393caA08b';
export const routerAddress = '0xa36efedd276351898ee49771d33d515b957bbeab';
export const oracleAddress = '0x3e767792afdBF9C3C8892533D61AfA7175B0DeC3';

export interface IShuttle {
    launched: boolean,
    shuttleId: number,
    borrowable: string,
    collateral: string,
    orbiterId: number,
    orbiterStatus: boolean,
    orbiterAlbireo: string,
    orbiterDeneb: string,
    orbiterName: string,
    strategy: string,
    token0: string,
    token1: string,
    poolName: string,
    lpToken: string,
    usdc: string,
    token0img: string,
    token1img: string
}

/**
 * @notice All lending pools
 */
export const ALL_LENDING_POOLS: { [shuttle: number] : IShuttle } = { 
  0: { 
    launched: true,
    shuttleId: 0,
    borrowable: '0x3a8C6A042d6Df68c9143197aCeB185301979081D',
    collateral: '0xb9EBEc450f4e5212bE27c3d4B7Cdd05D569Cfa42',
    orbiterId: 0,
    orbiterStatus: true,
    orbiterAlbireo: "",
    orbiterDeneb: "",
    orbiterName: 'Trader Joe',
    strategy: "MasterChefV3",
    token0: '',
    token0img: joe,
    token1: '',
    token1img: avax,
    poolName: "JOE-AVAX",
    lpToken: '0x454e67025631c065d3cfad6d71e6892f74487a15',
    usdc: '0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e',
  },
  1: { 
    launched: true,
    shuttleId: 1,
    borrowable: '0x3a8C6A042d6Df68c9143197aCeB185301979081D',
    collateral: '0xb9EBEc450f4e5212bE27c3d4B7Cdd05D569Cfa42',
    orbiterId: 0,
    orbiterStatus: true,
    orbiterAlbireo: "",
    orbiterDeneb: "",
    orbiterName: 'Trader Joe',
    strategy: "MasterChefV3",
    token0: '',
    token0img: eth,
    token1: '',
    token1img: avax,
    poolName: "ETH.e-AVAX",
    lpToken: '0xfe15c2695f1f920da45c30aae47d11de51007af9',
    usdc: '0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e',
  },
  2: { 
    launched: true,
    shuttleId: 2,
    borrowable: '0x3a8C6A042d6Df68c9143197aCeB185301979081D',
    collateral: '0xb9EBEc450f4e5212bE27c3d4B7Cdd05D569Cfa42',
    orbiterId: 0,
    orbiterStatus: true,
    orbiterAlbireo: "",
    orbiterDeneb: "",
    orbiterName: 'Trader Joe',
    strategy: "MasterChefV3",
    token0: '',
    token0img: btc,
    token1: '',
    token1img: avax,
    poolName: "BTC.b-AVAX",
    lpToken: '0x2fd81391e30805cc7f2ec827013ce86dc591b806',
    usdc: '0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e',
  },
}

export const POOL_LIST = Object.values(ALL_LENDING_POOLS);
