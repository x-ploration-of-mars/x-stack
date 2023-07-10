import { type CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.vercel.xstack',
  appName: 'x-stack',
  webDir: 'dist',
  server: {
    url: 'https://x-stack.vercel.app',
    androidScheme: 'https'
  }
};

export default config;
