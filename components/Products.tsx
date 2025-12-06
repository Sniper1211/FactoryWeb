import React from 'react';
import { Product } from '../types';

const products: Product[] = [
  {
    id: '1',
    title: '汽车发动机缸体组件',
    description: '采用高强度铝合金压铸与精密CNC加工，服务于知名德系车企。',
    imageUrl: 'https://picsum.photos/id/192/400/300',
    category: '汽车零部件'
  },
  {
    id: '2',
    title: '航空级钛合金连接件',
    description: '五轴联动加工，公差控制在微米级，满足航空航天严苛标准。',
    imageUrl: 'https://picsum.photos/id/250/400/300',
    category: '航空航天'
  },
  {
    id: '3',
    title: '医疗手术机器人臂',
    description: '复杂曲面加工与高洁净度表面处理，助力高端医疗设备国产化。',
    imageUrl: 'https://picsum.photos/id/96/400/300',
    category: '医疗器械'
  },
  {
    id: '4',
    title: '5G基站散热模组',
    description: '高效散热片设计，精密压铸与高导热材料应用。',
    imageUrl: 'https://picsum.photos/id/60/400/300',
    category: '通讯电子'
  },
  {
    id: '5',
    title: '工业自动化夹具',
    description: '非标定制，硬质氧化处理，耐磨耐用，提高产线效率。',
    imageUrl: 'https://picsum.photos/id/1/400/300',
    category: '工业自动化'
  },
  {
    id: '6',
    title: '新能源电池箱体',
    description: '大型龙门加工中心制造，确保平面度与密封性。',
    imageUrl: 'https://picsum.photos/id/201/400/300',
    category: '新能源'
  }
];

export const Products: React.FC = () => {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-2">产品案例</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">精密智造，广泛应用</h3>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center font-semibold text-brand-600 hover:text-brand-700 mt-4 md:mt-0">
            索取完整产品手册
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group relative overflow-hidden rounded-xl bg-white shadow-md border border-slate-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.imageUrl} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {product.category}
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">{product.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{product.description}</p>
                <div className="flex items-center text-brand-600 font-medium text-sm">
                  查看详情
                  <svg className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <a href="#contact" className="inline-block px-6 py-3 bg-slate-100 text-slate-700 font-medium rounded-lg hover:bg-slate-200 transition-colors">
            查看更多案例
          </a>
        </div>
      </div>
    </section>
  );
};