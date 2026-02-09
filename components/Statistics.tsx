import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell, LineChart, Line
} from 'recharts';
import { Users, FileText, Wrench, MousePointer2, TrendingUp, History, Zap } from 'lucide-react';

const userTrendData = [
  { name: '1月', users: 400, active: 320 },
  { name: '2月', users: 520, active: 450 },
  { name: '3月', users: 680, active: 520 },
  { name: '4月', users: 850, active: 700 },
  { name: '5月', users: 1100, active: 950 },
  { name: '6月', users: 1450, active: 1200 },
];

const applicationData = [
  { name: '卫星数据', data: 450, tools: 120 },
  { name: '矢量地图', data: 320, tools: 210 },
  { name: '高程模型', data: 180, tools: 80 },
  { name: '专题要素', data: 290, tools: 150 },
  { name: '样本库', data: 150, tools: 300 },
];

const accessData = [
  { time: '00:00', visits: 120 },
  { time: '04:00', visits: 45 },
  { time: '08:00', visits: 560 },
  { time: '12:00', visits: 890 },
  { time: '16:00', visits: 1100 },
  { time: '20:00', visits: 750 },
  { time: '23:59', visits: 320 },
];

const retentionData = [
  { name: '次日', value: 72, color: '#3B82F6' },
  { name: '3日', value: 58, color: '#60A5FA' },
  { name: '7日', value: 45, color: '#93C5FD' },
  { name: '14日', value: 36, color: '#BFDBFE' },
  { name: '30日', value: 28, color: '#DBEAFE' },
];

const StatCard = ({ title, value, trend, icon: Icon, color }: any) => (
  <div className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all group overflow-hidden relative">
    <div className={`absolute top-0 right-0 w-32 h-32 bg-${color}-50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110 duration-500 opacity-50`} />
    <div className="relative z-10">
      <div className={`w-12 h-12 rounded-2xl bg-${color}-50 text-${color}-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
        <Icon className="w-6 h-6" />
      </div>
      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{title}</p>
      <div className="flex items-end justify-between">
        <h3 className="text-2xl font-black text-gray-900">{value}</h3>
        <div className="flex items-center text-emerald-500 font-bold text-xs">
          <TrendingUp className="w-3 h-3 mr-1" />
          {trend}
        </div>
      </div>
    </div>
  </div>
);

export const Statistics: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-10">
      {/* 头部 */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-[22px] font-black text-gray-900 tracking-tight flex items-center">
            <Zap className="w-6 h-6 mr-3 text-blue-600" />
            统计分析中心
          </h2>
          <p className="text-sm text-gray-400 font-medium mt-1">
            全维度监测平台运行态势，通过数据驱动运营决策优化。
          </p>
        </div>
        <div className="flex bg-white p-1 rounded-2xl shadow-sm border border-gray-100">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-xl text-xs font-bold shadow-lg shadow-blue-500/20">近30天</button>
          <button className="px-6 py-2 text-gray-400 hover:text-blue-600 rounded-xl text-xs font-bold transition-colors">近半年</button>
          <button className="px-6 py-2 text-gray-400 hover:text-blue-600 rounded-xl text-xs font-bold transition-colors">全年度</button>
        </div>
      </div>

      {/* 核心指标 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="用户总数" value="1,452" trend="+12%" icon={Users} color="blue" />
        <StatCard title="数据申请量" value="3,842" trend="+18%" icon={FileText} color="indigo" />
        <StatCard title="工具调用量" value="12,504" trend="+24%" icon={Wrench} color="emerald" />
        <StatCard title="累计访问量" value="85,621" trend="+5%" icon={MousePointer2} color="orange" />
      </div>

      {/* 主要图表展示区 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* 用户增长与活跃分析 */}
        <div className="lg:col-span-8 bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h4 className="text-lg font-black text-gray-900">用户生命周期分析</h4>
              <p className="text-xs text-gray-400 font-medium mt-1">注册用户总量与月活跃用户(MAU)对比趋势</p>
            </div>
            <div className="flex items-center space-x-6 text-[10px] font-bold uppercase tracking-widest">
              <div className="flex items-center text-blue-500">
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-2" /> 用户总量
              </div>
              <div className="flex items-center text-indigo-400">
                <div className="w-2 h-2 rounded-full bg-indigo-400 mr-2" /> 活跃用户
              </div>
            </div>
          </div>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={userTrendData}>
                <defs>
                  <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11, fontWeight: 'bold'}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11, fontWeight: 'bold'}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)', padding: '15px' }}
                />
                <Area type="monotone" dataKey="users" stroke="#3B82F6" strokeWidth={4} fillOpacity={1} fill="url(#colorUsers)" />
                <Area type="monotone" dataKey="active" stroke="#818CF8" strokeWidth={4} fill="transparent" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 用户30日留存率 */}
        <div className="lg:col-span-4 bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100 flex flex-col">
          <h4 className="text-lg font-black text-gray-900 mb-6 flex items-center">
            <History className="w-5 h-5 mr-2 text-blue-600" />
            用户30日留存率
          </h4>
          <div className="flex-1 min-h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={retentionData} layout="vertical" margin={{ left: -20, right: 30 }}>
                <XAxis type="number" hide />
                <YAxis 
                  dataKey="name" 
                  type="category" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#64748b', fontSize: 12, fontWeight: 'bold'}}
                />
                <Tooltip 
                  cursor={{fill: 'transparent'}}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  formatter={(value: any) => [`${value}%`, '留存率']}
                />
                <Bar dataKey="value" radius={[0, 10, 10, 0]} barSize={20}>
                  {retentionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* 数据与工具申请对比 */}
        <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h4 className="text-lg font-black text-gray-900">数据与工具申请对比</h4>
              <p className="text-xs text-gray-400 font-medium mt-1">主要业务类目的申请频次分布</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-xs font-bold text-gray-400">
                <div className="w-3 h-3 rounded bg-blue-500 mr-2" /> 数据
              </div>
              <div className="flex items-center text-xs font-bold text-gray-400">
                <div className="w-3 h-3 rounded bg-emerald-400 mr-2" /> 工具
              </div>
            </div>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={applicationData} barGap={8}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11, fontWeight: 'bold'}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11, fontWeight: 'bold'}} />
                <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{ borderRadius: '15px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                <Bar dataKey="data" fill="#3B82F6" radius={[4, 4, 0, 0]} barSize={24} />
                <Bar dataKey="tools" fill="#34D399" radius={[4, 4, 0, 0]} barSize={24} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 访问峰值时段监测 */}
        <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h4 className="text-lg font-black text-gray-900">访问流量时段监测</h4>
              <p className="text-xs text-gray-400 font-medium mt-1">24小时访问量(PV)实时波动情况</p>
            </div>
            <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-widest">
              实时同步中
            </span>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={accessData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11, fontWeight: 'bold'}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11, fontWeight: 'bold'}} />
                <Tooltip contentStyle={{ borderRadius: '15px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                <Line type="stepAfter" dataKey="visits" stroke="#F59E0B" strokeWidth={3} dot={{ r: 4, fill: '#F59E0B', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
};