import React, { useState } from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import FeaturesSection from './components/FeaturesSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';
import { User } from './types';

type ViewType = 'landing' | 'login' | 'dashboard';

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('landing');
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const handleLogin = (user: User) => {
    setCurrentUser(user);
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentView('landing');
  };

  const goToLogin = () => {
    setCurrentView('login');
  };

  if (currentView === 'login') {
    return <LoginPage onLogin={handleLogin} />;
  }

  if (currentView === 'dashboard' && currentUser) {
    return <DashboardPage user={currentUser} onLogout={handleLogout} />;
  }

  return (
    <div className="min-h-screen">
      <HeroSection onGetStarted={goToLogin} />
      <BenefitsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection onGetStarted={goToLogin} />
      <Footer />
    </div>
  );
}

export default App;
