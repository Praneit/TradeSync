import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const CallbackPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Extract OAuth parameters
    const code = searchParams.get('code');
    const state = searchParams.get('state');
    const error = searchParams.get('error');

    if (code) {
      // Store in session storage or context
      sessionStorage.setItem('oauth_code', code);
      if (state) {
        sessionStorage.setItem('oauth_state', state);
      }
      
      // Redirect to main app
      navigate('/dashboard');
    } else if (error) {
      console.error('OAuth error:', error);
      navigate('/login?error=' + error);
    }
  }, [searchParams, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-slate-800">Processing Authentication...</h2>
        <p className="text-slate-600 mt-2">Please wait while we complete the Open Banking authorization.</p>
      </div>
    </div>
  );
};

export default CallbackPage;