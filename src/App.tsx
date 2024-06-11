import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom';
import HomePage from '@/pages/home';
import Layout from '@/components/layout/layout';
import SignInPage from '@/pages/sign-in';
import SignUpPage from '@/pages/sign-up';
import { DashboardHomePage } from '@/pages/dashboard-home';
import { DashboardServicePage } from '@/pages/dashboard-service';
import { DashboardUserPage } from '@/pages/dashboard-user';
import { isAdmin } from '@/lib/utils';
import { AuthProvider, useAuth } from '@/context/auth-context';
import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from '@/components/ui/tooltip';
import { AboutUsPage } from '@/pages/about-us';
import { ContactPage } from '@/pages/contact';
const PrivateRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  return isAdmin() ? children : <Navigate to="/signin" />;
};


const IsNotLoginRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { isLogin } = useAuth();
  return isLogin() ? <Navigate to="/" /> : children;
}

function App() {

  return (
    <Router>
      <AuthProvider>
        <TooltipProvider>
          <Layout>
            <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="/about-us" element={
                <AboutUsPage />}
              />
              <Route path="/contact" element={
                <ContactPage />}
              />
              <Route path="/signup" element={
                <IsNotLoginRoute>
                  <SignUpPage />
                </IsNotLoginRoute>
              } />
              <Route path="/" element={<HomePage />} />
              <Route path="/signin" element={
                <IsNotLoginRoute>
                  <SignInPage />
                </IsNotLoginRoute>
              } />
              <Route path="/dashboard-home" element={
                <PrivateRoute>
                  <DashboardHomePage />
                </PrivateRoute>
              } />
              <Route path="/dashboard-service" element={
                <PrivateRoute>
                  <DashboardServicePage />
                </PrivateRoute>
              } />
              <Route path="/dashboard-user" element={
                <PrivateRoute>
                  <DashboardUserPage />
                </PrivateRoute>
              } />
              <Route path="*" element={<div>404</div>} />
            </Routes>
          </Layout>
        </TooltipProvider>
      </AuthProvider>
      <Toaster />
    </Router>

  )
}

export default App
