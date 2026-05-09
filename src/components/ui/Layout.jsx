import React from 'react';
import TopBanner from '../ads/TopBanner';
import BottomBanner from '../ads/BottomBanner';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();
  
  // Define which paths show which banners
  const showTopBanner = ['/', '/menu', '/expeditions'].includes(location.pathname);
  const showBottomBanner = ['/results', '/profile', '/shop', '/archives'].includes(location.pathname) || location.pathname.startsWith('/expedition/');

  return (
    <div className="min-h-screen flex flex-col">
      {showTopBanner && <TopBanner />}
      
      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        {children}
      </main>

      {showBottomBanner && <BottomBanner />}
    </div>
  );
};

export default Layout;
