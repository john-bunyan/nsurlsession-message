import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'http-nsurlsession-error',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  "plugins": {
    "CapacitorHttp": {
      "enabled": true
    },
    "CapacitorCookies": {
      "enabled": true,
    }
  }
};

export default config;
