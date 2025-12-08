import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/lib/contexts/AuthContext';
import { Loader2 } from 'lucide-react';
import { DEFAULT_ROUTES } from '@/lib/constants';

const MicrosoftCallback = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    // Simulate processing OAuth callback
    const processCallback = async () => {
      // In real implementation, this would:
      // 1. Extract code from URL params
      // 2. Exchange code for token
      // 3. Get user info from Microsoft Graph API
      // 4. Create/update user in backend
      // 5. Set auth state
      
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // For now, if user is authenticated, redirect to their dashboard
      if (user) {
        navigate(DEFAULT_ROUTES[user.role]);
      } else {
        // If something went wrong, redirect to login
        navigate('/login');
      }
    };

    processCallback();
  }, [navigate, user]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-microsoft-blue text-white p-4 rounded-full">
            <Loader2 className="h-12 w-12 animate-spin" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Signing in with Microsoft...
        </h2>
        <p className="text-gray-600">
          Please wait while we complete your authentication
        </p>
      </div>
    </div>
  );
};

export default MicrosoftCallback;

