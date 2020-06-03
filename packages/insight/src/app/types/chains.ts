export type Protocol = 'BTC' | 'AUDAX';
export type Code = 'BTC' | 'AUDAX' | 'tBTC' | 'taudax';
export type Network = 'mainnet' | 'testnet' | 'regtest';

export interface Chain {
  code: Code;
  name: string;
  network: Network;
  protocol: Protocol;
}

export const AUDAX: Chain = {
  code: 'AUDAX',
  name: 'Bitcoin Cash',
  network: 'mainnet',
  protocol: 'AUDAX'
};

export const taudax: Chain = {
  code: 'taudax',
  name: 'Bitcoin Cash Testnet',
  network: 'testnet',
  protocol: 'AUDAX'
};

export const BTC: Chain = {
  code: 'BTC',
  name: 'Bitcoin',
  network: 'mainnet',
  protocol: 'BTC'
};

export const tBTC: Chain = {
  code: 'tBTC',
  name: 'Bitcoin Testnet',
  network: 'testnet',
  protocol: 'BTC'
};

export const Chains = {
  AUDAX,
  tAUDAX,
  BTC,
  tBTC
};
