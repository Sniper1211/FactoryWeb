import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Features } from './components/Features';
import { Products } from './components/Products';
import { Contact } from './components/Contact';

const Footer: React.FC = () => (
  <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
           <span className="text-2xl font-bold text-white tracking-tighter block mb-4">
              APEX<span className="font-light">MFG</span>
            </span>
            <p className="max-w-xs text-sm">
              全球领先的精密制造解决方案提供商，致力于通过技术创新推动工业进步。
            </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">快速链接</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-brand-400 transition-colors">关于我们</a></li>
            <li><a href="#products" className="hover:text-brand-400 transition-colors">产品展示</a></li>
            <li><a href="#features" className="hover:text-brand-400 transition-colors">制造工艺</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">法律条款</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-brand-400 transition-colors">隐私政策</a></li>
            <li><a href="#" className="hover:text-brand-400 transition-colors">服务条款</a></li>
            <li><a href="#" className="hover:text-brand-400 transition-colors">Sitemap</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm">
        &copy; {new Date().getFullYear()} Apex Precision Industries Co., Ltd. All rights reserved.
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Products />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;