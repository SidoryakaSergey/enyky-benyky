import React, { type ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import './../../styles/components/Layout.css';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
};
