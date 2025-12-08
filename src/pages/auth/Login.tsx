import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/lib/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const { loginWithMicrosoft, isLoading } = useAuth();
  const [showDemo, setShowDemo] = useState(false);

  const handleMicrosoftLogin = async () => {
    try {
      await loginWithMicrosoft();
      navigate('/student/dashboard'); // Will be redirected based on role in Phase 2
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleDemoMode = () => {
    setShowDemo(true);
    navigate('/role-select');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-2">
          {/* School Logo Placeholder */}
          <div className="flex justify-center mb-4">
            <div className="bg-navy text-white px-6 py-3 rounded text-2xl font-bold">
              UViC
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">School Management System</CardTitle>
          <CardDescription>
            Sign in to access your courses, grades, and more
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Microsoft Sign In Button */}
          <Button
            onClick={handleMicrosoftLogin}
            disabled={isLoading}
            className="w-full h-12 bg-microsoft-blue hover:bg-[#008DD4] text-white font-medium flex items-center justify-center gap-3"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Signing in...
              </>
            ) : (
              <>
                {/* Microsoft Logo */}
                <svg className="h-5 w-5" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h11v11H0z" fill="#f25022"/>
                  <path d="M12 0h11v11H12z" fill="#00a4ef"/>
                  <path d="M0 12h11v11H0z" fill="#7fba00"/>
                  <path d="M12 12h11v11H12z" fill="#ffb900"/>
                </svg>
                Sign in with Microsoft
              </>
            )}
          </Button>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-500">Or</span>
            </div>
          </div>

          {/* Demo Mode Link */}
          <div className="text-center">
            <button
              onClick={handleDemoMode}
              className="text-sm text-blue-accent hover:underline"
            >
              Continue in Demo Mode
            </button>
          </div>

          {/* Help Text */}
          <div className="text-center text-xs text-gray-500 mt-6">
            <p>Use your institutional Microsoft account to sign in.</p>
            <p className="mt-2">
              Need help? Contact{' '}
              <a href="mailto:support@uvic.ca" className="text-blue-accent hover:underline">
                IT Support
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;

