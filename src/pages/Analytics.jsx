import { LatencyChart, TokenUsageChart, ApiShareChart } from '../components/Charts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Mon', gpt: 4000, claude: 2400 },
    { name: 'Tue', gpt: 3000, claude: 1398 },
    { name: 'Wed', gpt: 2000, claude: 9800 },
    { name: 'Thu', gpt: 2780, claude: 3908 },
    { name: 'Fri', gpt: 1890, claude: 4800 },
    { name: 'Sat', gpt: 2390, claude: 3800 },
    { name: 'Sun', gpt: 3490, claude: 4300 },
];

export function Analytics() {
    return (
        <div className="p-6 lg:p-8 space-y-8 max-w-[1600px] mx-auto">
            <div>
                <h1 className="text-2xl font-bold text-slate-900">Analytics</h1>
                <p className="text-slate-500 mt-1">Deep dive into system performance and model metrics.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <LatencyChart />
                <TokenUsageChart />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col p-6 col-span-1 min-h-[360px]">
                    <h3 className="text-lg font-bold text-slate-900 mb-4">API Provider Share</h3>
                    <div className="flex-1 flex flex-col items-center justify-center min-h-0">
                        <ApiShareChart />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 col-span-2">
                    <h3 className="text-lg font-bold text-slate-900 mb-4">Weekly Traffic (Requests)</h3>
                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                                <Tooltip cursor={{ fill: '#f1f5f9' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                                <Bar dataKey="gpt" stackId="a" fill="#10b981" radius={[0, 0, 4, 4]} />
                                <Bar dataKey="claude" stackId="a" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
}
