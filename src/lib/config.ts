// Application configuration

// OAuth Configuration (for Phase 2 - real implementation)
export const OAUTH_CONFIG = {
  microsoft: {
    clientId: import.meta.env.VITE_MICROSOFT_CLIENT_ID || 'mock-client-id',
    authority: import.meta.env.VITE_MICROSOFT_AUTHORITY || 'https://login.microsoftonline.com/common',
    redirectUri: import.meta.env.VITE_MICROSOFT_REDIRECT_URI || 'http://localhost:5173/auth/callback',
    scopes: ['openid', 'profile', 'email', 'User.Read'],
  },
  google: {
    clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID || 'mock-google-client-id',
    redirectUri: import.meta.env.VITE_GOOGLE_REDIRECT_URI || 'http://localhost:5173/auth/callback',
  },
};

// API Configuration (for Phase 2 - backend integration)
export const API_CONFIG = {
  baseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
  timeout: 30000, // 30 seconds
};

// Feature Flags
export const FEATURES = {
  enableDemoMode: true, // Allow demo login without OAuth
  enableDarkMode: false, // Dark mode toggle (Phase 2)
  enableNotifications: true,
  enableFileUpload: false, // Phase 2
  enableAICourseAssistant: false, // Phase 2
};

// Default Tenant (for single-tenant mode or fallback)
export const DEFAULT_TENANT = {
  id: 'tenant-1',
  name: 'University of Victoria',
  domain: 'uvic.ca',
  logo: '/placeholder.svg',
  primaryColor: '#002855',
};

