import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

export function StatCard({ title, value, subtext, trend, icon: Icon, color }) {
    const isPositive = trend > 0;

    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
                <div>
                    <p className="text-sm font-medium text-slate-500 mb-1">{title}</p>
                    <h3 className="text-3xl font-bold text-slate-900 tracking-tight">{value}</h3>
                </div>
                <div className={`p-3 rounded-xl ${color}`}>
                    <Icon className="w-6 h-6 text-white" />
                </div>
            </div>

            <div className="flex items-center gap-2">
                <span className={`inline-flex items-center text-xs font-semibold px-2 py-1 rounded-full ${isPositive ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"
                    }`}>
                    {isPositive ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
                    {Math.abs(trend)}%
                </span>
                <span className="text-xs text-slate-400 font-medium">{subtext}</span>
            </div>
        </div>
    );
}
