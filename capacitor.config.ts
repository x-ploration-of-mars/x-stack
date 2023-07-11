import { type CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.vercel.xstack',
  appName: 'x-stack',
  webDir: 'dist',
  server: {
    url: 'https://x-stack.vercel.app',
    allowNavigation: ['discord.com/*', '*.discord.com' ,"192.0.2.1"],
    androidScheme: 'https'
  }
};

export default config;
