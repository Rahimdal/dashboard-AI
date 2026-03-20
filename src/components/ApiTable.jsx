import { MoreHorizontal } from 'lucide-react';

export function ApiTable({ models = [] }) {
    if (models.length === 0) {
        return (
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 text-center text-slate-500">
                No active API calls found.
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900">Recent API Calls</h3>
                <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700">View All</button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-slate-600">
                    <thead className="bg-slate-50 text-slate-900 font-semibold border-b border-slate-100">
                        <tr>
                            <th className="px-6 py-4">Model Name</th>
                            <th className="px-6 py-4">Provider</th>
                            <th className="px-6 py-4">Latency (ms)</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4">Tokens Used</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {models.map((model) => (
                            <tr key={model.id} className="hover:bg-slate-50/50 transition-colors group">
                                <td className="px-6 py-4 font-medium text-slate-900">{model.name}</td>
                                <td className="px-6 py-4">{model.provider}</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                            <div
                                                className={`h-full rounded-full ${model.latency < 500 ? 'bg-emerald-500' :
                                                    model.latency < 1000 ? 'bg-amber-500' : 'bg-rose-500'
                                                    }`}
                                                style={{ width: `${Math.min((model.latency / 2000) * 100, 100)}%` }}
                                            />
                                        </div>
                                        <span className="text-xs font-semibold">{model.latency}ms</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${model.status === 'Success' ? 'bg-emerald-50 text-emerald-700' :
                                        model.status === 'Processing' ? 'bg-indigo-50 text-indigo-700' :
                                            model.status === 'Failed' ? 'bg-rose-50 text-rose-700' :
                                                'bg-slate-50 text-slate-700'
                                        }`}>
                                        <span className={`w-1.5 h-1.5 rounded-full ${model.status === 'Success' ? 'bg-emerald-500' :
                                            model.status === 'Processing' ? 'bg-indigo-500 animate-pulse' :
                                                model.status === 'Failed' ? 'bg-rose-500' :
                                                    'bg-slate-500'
                                            }`} />
                                        {model.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 font-mono text-xs">{model.tokens}</td>
                                <td className="px-6 py-4 text-right">
                                    <button className="p-1 text-slate-400 hover:text-slate-600 rounded hover:bg-slate-100 transition-colors cursor-pointer">
                                        <MoreHorizontal className="w-5 h-5" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
