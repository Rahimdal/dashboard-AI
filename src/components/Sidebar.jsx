import { LayoutDashboard, BarChart2, Cpu } from 'lucide-react';
import { cn } from '../lib/utils';

const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'Analytics', icon: BarChart2 },
    { name: 'Models', icon: Cpu },
];

export function Sidebar({ active, setActive, className }) {
    return (
        <aside className={cn("bg-white border-r border-slate-200 h-screen flex flex-col transition-all duration-300 shadow-sm", className)}>
            <div className="p-6 flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                    <Cpu className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-slate-800 tracking-tight">AI Nexus</span>
            </div>

            <nav className="flex-1 px-4 space-y-1">
                {menuItems.map((item) => (
                    <button
                        key={item.name}
                        onClick={() => setActive(item.name)}
                        className={cn(
                            "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 group",
                            active === item.name
                                ? "bg-indigo-50 text-indigo-700 shadow-sm"
                                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                        )}
                    >
                        <item.icon className={cn(
                            "w-5 h-5 transition-colors",
                            active === item.name ? "text-indigo-600" : "text-slate-400 group-hover:text-slate-600"
                        )} />
                        {item.name}
                    </button>
                ))}
            </nav>

        </aside>
    );
}
