import React from 'react';
import { Stat } from '../types';

const stats: Stat[] = [
  { label: '成立年份', value: '1998', description: '二十余年行业积淀' },
  { label: '生产面积', value: '50,000+', description: '平方米现代化厂房' },
  { label: '专业员工', value: '300+', description: '资深工程师与技术人员' },
  { label: '出口国家', value: '40+', description: '服务全球顶级客户' },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div>
            <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-2">关于艾佩斯</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              以匠心致初心，<br/>打造世界级制造标杆
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              艾佩斯精密制造（Apex Precision）成立于1998年，总部位于中国苏州工业园区。作为一家领先的精密制造解决方案提供商，我们始终致力于为全球客户提供高质量、高精度的零部件加工及组装服务。
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              我们引进了德国和日本最先进的五轴联动加工中心，拥有恒温生产车间和CNAS认证的检测实验室。从原型设计到大规模量产，艾佩斯始终是您值得信赖的合作伙伴。
            </p>
            
            {/* Signature / Badge */}
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 bg-brand-50 rounded-full flex items-center justify-center text-brand-600">
                 <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <p className="font-bold text-slate-900">品质承诺</p>
                <p className="text-sm text-slate-500">100% 全检出厂，零缺陷追求</p>
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <img src="https://picsum.photos/id/119/600/800" alt="Factory Interior" className="w-full h-64 object-cover rounded-lg shadow-md transform translate-y-8" />
            <img src="https://picsum.photos/id/252/600/800" alt="Engineer working" className="w-full h-64 object-cover rounded-lg shadow-md" />
            <img src="https://picsum.photos/id/381/600/800" alt="Precision parts" className="w-full h-64 object-cover rounded-lg shadow-md transform translate-y-8" />
            <img src="https://picsum.photos/id/403/600/800" alt="CNC Machine" className="w-full h-64 object-cover rounded-lg shadow-md" />
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-100 pt-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-brand-600 mb-2">{stat.value}</div>
              <div className="font-medium text-slate-900 mb-1">{stat.label}</div>
              <div className="text-sm text-slate-500">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};