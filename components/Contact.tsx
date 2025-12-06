import React, { useState } from 'react';
import { askAiAssistant } from '../services/geminiService';

export const Contact: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'form' | 'ai'>('form');
  
  // AI State
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAiSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    setIsLoading(true);
    setAnswer('');
    
    const result = await askAiAssistant(question);
    
    setAnswer(result);
    setIsLoading(false);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-brand-400 font-semibold tracking-wide uppercase text-sm mb-2">联系我们</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">开启您的精密制造之旅</h3>
            <p className="text-slate-400 text-lg mb-8">无论是样品试制还是批量生产，艾佩斯团队都随时准备为您提供专业的技术支持和报价服务。</p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-white/10 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white">工厂地址</h4>
                  <p className="text-slate-400 mt-1">江苏省苏州市工业园区金鸡湖大道88号<br/>艾佩斯高新科技园 A座</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-white/10 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white">销售邮箱</h4>
                  <p className="text-slate-400 mt-1">sales@apex-precision.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-white/10 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white">联系电话</h4>
                  <p className="text-slate-400 mt-1">+86 512 6688 9988</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Form Panel */}
          <div className="bg-white rounded-2xl p-1 shadow-2xl">
            {/* Tabs */}
            <div className="flex p-1 bg-slate-100 rounded-xl mb-6">
              <button
                onClick={() => setActiveTab('form')}
                className={`flex-1 py-3 text-sm font-medium rounded-lg transition-all ${
                  activeTab === 'form' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                在线留言
              </button>
              <button
                onClick={() => setActiveTab('ai')}
                className={`flex-1 py-3 text-sm font-medium rounded-lg transition-all flex items-center justify-center gap-2 ${
                  activeTab === 'ai' ? 'bg-brand-50 text-brand-600 shadow-sm border border-brand-100' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                AI 智能咨询
              </button>
            </div>

            <div className="px-6 pb-8 text-slate-800">
              {activeTab === 'form' ? (
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">姓名</label>
                    <input type="text" className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all" placeholder="您的姓名" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">公司邮箱</label>
                    <input type="email" className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all" placeholder="name@company.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">咨询内容</label>
                    <textarea rows={4} className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all" placeholder="请简述您的需求、材质要求及预计产量..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3 rounded-lg transition-colors shadow-lg shadow-brand-500/30">
                    提交需求
                  </button>
                </form>
              ) : (
                <div className="flex flex-col h-[400px]">
                  <div className="flex-1 overflow-y-auto mb-4 p-4 bg-slate-50 rounded-lg border border-slate-100 space-y-4">
                     <div className="flex gap-3">
                       <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0">
                         <span className="text-xs font-bold text-brand-600">AI</span>
                       </div>
                       <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm border border-slate-100 text-sm text-slate-700">
                         你好！我是艾佩斯智能助手。您可以问我关于加工能力、交期、材质或认证的问题。
                       </div>
                     </div>

                     {answer && (
                       <div className="flex gap-3 animate-fade-in">
                         <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0">
                           <span className="text-xs font-bold text-brand-600">AI</span>
                         </div>
                         <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm border border-slate-100 text-sm text-slate-700 leading-relaxed">
                           {answer}
                         </div>
                       </div>
                     )}
                     
                     {isLoading && (
                       <div className="flex gap-3">
                         <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0">
                           <span className="text-xs font-bold text-brand-600">AI</span>
                         </div>
                         <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm border border-slate-100 text-sm text-slate-500 italic">
                           正在思考中...
                         </div>
                       </div>
                     )}
                  </div>

                  <form onSubmit={handleAiSubmit} className="relative">
                    <input
                      type="text"
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      placeholder="例如：你们能加工钛合金吗？"
                      className="w-full pl-4 pr-12 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none"
                    />
                    <button
                      type="submit"
                      disabled={isLoading || !question.trim()}
                      className="absolute right-2 top-2 p-1.5 bg-brand-600 text-white rounded-md hover:bg-brand-700 disabled:opacity-50 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};