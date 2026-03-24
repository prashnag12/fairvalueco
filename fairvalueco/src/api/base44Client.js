import { createClient } from '@base44/sdk';

const isVercel = typeof window !== 'undefined' && !window.location.hostname.includes('base44.app');

export const base44 = createClient({
  appId: '69be6ef835353e81a6b19336',
  requiresAuth: false,
  serverUrl: isVercel ? window.location.origin : 'https://api.base44.com',
});