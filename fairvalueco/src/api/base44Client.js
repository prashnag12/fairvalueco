import { createClient } from '@base44/sdk';

const isVercel = typeof window !== 'undefined' && 
  !window.location.hostname.includes('base44.app') && 
  !window.location.hostname.includes('localhost');

export const base44 = createClient({
  appId: '69be6ef835353e81a6b19336',
  requiresAuth: false,
  ...(isVercel ? { serverUrl: window.location.origin } : {}),
});