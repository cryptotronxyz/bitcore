import { AUDAX, BTC, Chain, tAUDAX, tBTC } from './chains';

export interface ChainDenomination {
  [k: string]: Unit;
}

export interface Unit {
  code: string;
  name: string;
  rate: number;
}

export type RateListing = Unit[];

const generateBitcoinDenomination = (chain: Chain): ChainDenomination => ({
  [chain.code]: {
    code: chain.code,
    name: chain.name,
    rate: 1
  },
  [`${chain.code}Bits`]: {
    code: `${chain.code}_bits`,
    name: `Bits (${chain.code})`,
    rate: 1_000_000
  },
  [`${chain.code}Satoshis`]: {
    code: `${chain.code}_satoshis`,
    name: `Satoshis (${chain.code})`,
    rate: 100_000_000
  }
});

export const AUDAXDenomination = generateBitcoinDenomination(AUDAX);
export const tAUDAXDenomination = generateBitcoinDenomination(tAUDAX);
export const BTCDenomination = generateBitcoinDenomination(BTC);
export const tBTCDenomination = generateBitcoinDenomination(tBTC);

export const ChainDenominations = {
  AUDAX: AUDAXDenomination,
  taudax: tAUDAXDenomination,
  BTC: BTCDenomination,
  tBTC: tBTCDenomination
};
