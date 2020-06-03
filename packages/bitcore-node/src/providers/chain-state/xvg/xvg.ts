import { BTCStateProvider } from '../btc/btc';

export class AUDAXStateProvider extends BTCStateProvider {
  constructor(chain: string = 'AUDAX') {
    super(chain);
  }
}
