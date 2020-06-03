import { LoggerConfig, NgxLoggerLevel } from 'ngx-logger';
import { AUDAX, BTC, Chain, tAUDAX, tBTC } from '../app/types/chains';

const loggingSettings: LoggerConfig = {
  serverLoggingUrl: '/api/logs/insight',
  level: NgxLoggerLevel.DEBUG,
  serverLogLevel: NgxLoggerLevel.ERROR
};

const initialChain: Chain = AUDAX;

const expectedChains: Chain[] = [AUDAX, tAUDAX, BTC, tBTC];

export const environment = {
  apiPrefix: 'https://api.bitcore.io/api',
  ratesApi: 'https://bitpay.com/api/rates/AUDAX',
  production: true,
  debugRouting: false,
  loggingSettings,
  initialDisplayValueCode: initialChain.code,
  initialChain,
  expectedChains,
  pollingRateMilliseconds: 60 * 1000
};
