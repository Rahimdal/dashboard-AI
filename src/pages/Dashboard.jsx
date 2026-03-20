import { useState, useEffect } from 'react';
import { StatCard } from '../components/StatCard';
import { LatencyChart, TokenUsageChart, ApiShareChart } from '../components/Charts';
import { ApiTable } from '../components/ApiTable';
import {
    Database, Activity, Target, Layers, User
} from 'lucide-react';

const initialStats = [
    { title: "Total API Requests", value: "0", subtext: "This month", trend: 0, icon: Layers, color: "bg-indigo-500" },
    { title: "Active Models", value: "0", subtext: "Deployed endpoints", trend: 0, icon: Activity, color: "bg-emerald-500" },
    { title: "Average Latency", value: "0ms", subtext: "Across all calls", trend: 0, icon: Target, color: "bg-violet-500" },
    { title: "Tokens Processed", value: "0M", subtext: "Input + Output", trend: 0, icon: Database, color: "bg-amber-500" },
];

export function Dashboard() {
    const [stats, setStats] = useState(initialStats);
    const [recentProjects, setRecentProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
              
                await new Promise(resolve => setTimeout(resolve, 800));

                const mockCalls = [
                    { id: 1, name: 'GPT-4o', provider: 'OpenAI', latency: 450, status: 'Success', tokens: 1240 },
                    { id: 2, name: 'Claude 3.5 Sonnet', provider: 'Anthropic', latency: 380, status: 'Success', tokens: 856 },
                    { id: 3, name: 'Gemini 1.5 Pro', provider: 'Google', latency: 520, status: 'Processing', tokens: 2100 },
                    { id: 4, name: 'Llama 3 70B', provider: 'Meta', latency: 290, status: 'Success', tokens: 412 },
                    { id: 5, name: 'Mixtral 8x7B', provider: 'Mistral AI', latency: 1200, status: 'Failed', tokens: 0 },
                ];
                setRecentProjects(mockCalls);

  
                setStats([
                    { title: "Total API Requests", value: "1.2M", subtext: "This month", trend: 15, icon: Layers, color: "bg-indigo-500" },
                    { title: "Active Models", value: "8", subtext: "Deployed endpoints", trend: 2, icon: Activity, color: "bg-emerald-500" },
                    { title: "Average Latency", value: "480ms", subtext: "Across all calls", trend: -12, icon: Target, color: "bg-violet-500" },
                    { title: "Tokens Processed", value: "845M", subtext: "Input + Output", trend: 24, icon: Database, color: "bg-amber-500" },
                ]);
            } catch (error) {
                console.error("Failed to load dashboard data");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="p-6 lg:p-8 space-y-8 max-w-[1600px] mx-auto">
    
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">API Gateway Overview</h1>
                    <p className="text-slate-500 mt-1">Monitor real-time performance and usage of AI models.</p>
                </div>
                <button className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium shadow-lg shadow-slate-200">
                    <User className="w-4 h-4" />
                    Manage Team
                </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <StatCard key={i} {...stat} />
                ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                <div className="xl:col-span-2">
                    <LatencyChart />
                </div>
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col p-6 min-h-[360px]">
                    <h3 className="text-lg font-bold text-slate-900 mb-4">API Share</h3>
                    <div className="flex-1 flex flex-col items-center justify-center min-h-0">
                        <ApiShareChart />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <ApiTable models={recentProjects} />
                </div>
                <div>
                    <TokenUsageChart />
                </div>
            </div>
        </div>
    );
}
