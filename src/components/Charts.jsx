import { useState, useCallback } from 'react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    BarChart, Bar,
    PieChart, Pie, Cell, Customized
} from 'recharts';

// Mock Data
const latencyData = [
    { name: '10:00', val: 450 },
    { name: '10:05', val: 420 },
    { name: '10:10', val: 480 },
    { name: '10:15', val: 510 },
    { name: '10:20', val: 460 },
    { name: '10:25', val: 410 },
    { name: '10:30', val: 430 },
];

const tokenData = [
    { name: 'GPT-4o', count: 4200 },
    { name: 'Claude', count: 3100 },
    { name: 'Gemini', count: 2800 },
    { name: 'Llama 3', count: 1500 },
];

const apiShareData = [
    { name: 'OpenAI', value: 45 },
    { name: 'Anthropic', value: 30 },
    { name: 'Google', value: 15 },
    { name: 'Meta', value: 10 },
];

const COLORS = ['#6366f1', '#10b981', '#f59e0b', '#ef4444'];

// Center label via Recharts Customized — receives real pixel cx/cy from the chart
const CenterLabel = ({ formattedGraphicalItems, activeIndex, data }) => {
    const pie = formattedGraphicalItems?.[0];
    if (!pie) return null;
    const { cx, cy } = pie.props;
    const entry = data[activeIndex];
    if (!entry) return null;
    return (
        <g>
            <text x={cx} y={cy - 10} textAnchor="middle" fill="#334155" fontSize={13} fontWeight={700}>
                {entry.name}
            </text>
            <text x={cx} y={cy + 13} textAnchor="middle" fill="#6366f1" fontSize={21} fontWeight={800}>
                {entry.value}%
            </text>
        </g>
    );
};

export const LatencyChart = () => (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-80">
        <h3 className="text-lg font-bold text-slate-900 mb-4">Average API Latency (ms)</h3>
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={latencyData}>
                <defs>
                    <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1} />
                        <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#64748b', fontSize: 12 }}
                    dy={10}
                />
                <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#64748b', fontSize: 12 }}
                />
                <Tooltip
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    cursor={{ stroke: '#6366f1', strokeWidth: 1 }}
                />
                <Area
                    type="monotone"
                    dataKey="val"
                    stroke="#6366f1"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorVal)"
                />
            </AreaChart>
        </ResponsiveContainer>
    </div>
);

export const TokenUsageChart = () => (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-80">
        <h3 className="text-lg font-bold text-slate-900 mb-4">Tokens Used by Model (k)</h3>
        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={tokenData} barSize={40}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#64748b', fontSize: 12 }}
                    dy={10}
                />
                <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#64748b', fontSize: 12 }}
                />
                <Tooltip
                    cursor={{ fill: '#f1f5f9' }}
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="count" fill="#3b82f6" radius={[6, 6, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
    </div>
);

export const ApiShareChart = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const onPieEnter = useCallback((_, index) => {
        setActiveIndex(index);
    }, []);

    return (
        <div className="flex flex-col items-center w-full h-full gap-4">
            {/* Donut chart */}
            <div className="w-full" style={{ height: 220 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={apiShareData}
                            cx="50%"
                            cy="50%"
                            innerRadius="45%"
                            outerRadius="65%"
                            dataKey="value"
                            paddingAngle={3}
                            onMouseEnter={onPieEnter}
                            stroke="none"
                        >
                            {apiShareData.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={COLORS[index % COLORS.length]}
                                    opacity={activeIndex === index ? 1 : 0.65}
                                    style={{ cursor: 'pointer', transition: 'opacity 0.2s' }}
                                />
                            ))}
                        </Pie>
                        <Customized
                            component={(props) => (
                                <CenterLabel
                                    {...props}
                                    activeIndex={activeIndex}
                                    data={apiShareData}
                                />
                            )}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>

            {/* Responsive legend grid */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 w-full px-2">
                {apiShareData.map((entry, index) => (
                    <button
                        key={entry.name}
                        className="flex items-center gap-2 text-left group"
                        onMouseEnter={() => setActiveIndex(index)}
                    >
                        <span
                            className="flex-shrink-0 w-2.5 h-2.5 rounded-full transition-transform group-hover:scale-125"
                            style={{ backgroundColor: COLORS[index % COLORS.length] }}
                        />
                        <span className="text-xs text-slate-600 font-medium truncate">{entry.name}</span>
                        <span className="ml-auto text-xs font-bold text-slate-800">{entry.value}%</span>
                    </button>
                ))}
            </div>
        </div>
    );
};
