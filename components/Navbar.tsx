import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: '首页', href: '#hero' },
  { label: '关于我们', href: '#about' },
  { label: '核心工艺', href: '#features' },
  { label: '产品展示', href: '#products' },
  { label: '联系/智能客服', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-sm rotate-45 ${scrolled ? 'bg-brand-600' : 'bg-white'}`}></div>
              <span className={`text-2xl font-bold tracking-tighter ${scrolled ? 'text-slate-900' : 'text-white'}`}>
                APEX<span className="font-light">MFG</span>
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-brand-500 ${scrolled ? 'text-slate-700' : 'text-white/90 hover:text-white'}`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                scrolled 
                  ? 'bg-brand-600 text-white hover:bg-brand-700' 
                  : 'bg-white text-brand-900 hover:bg-slate-100'
              }`}
            >
              获取报价
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-slate-700' : 'text-white'}`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl absolute top-full left-0 w-full border-t border-slate-100">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-brand-600 hover:bg-slate-50"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-slate-100">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-4 py-3 bg-brand-600 text-white rounded-lg font-semibold"
              >
                立即咨询
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};