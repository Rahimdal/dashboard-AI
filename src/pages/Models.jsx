import { Cpu, CheckCircle, AlertCircle, Clock } from 'lucide-react';

const models = [
    { name: "GPT-4o", provider: "OpenAI", type: "LLM", status: "Active", context: "128k", latency: "450ms" },
    { name: "Claude 3.5 Sonnet", provider: "Anthropic", type: "LLM", status: "Active", context: "200k", latency: "380ms" },
    { name: "Gemini 1.5 Pro", provider: "Google", type: "Multimodal", status: "Active", context: "2M", latency: "520ms" },
    { name: "Llama 3 70B", provider: "Meta", type: "LLM", status: "Active", context: "8k", latency: "290ms" },
    { name: "Mixtral 8x7B", provider: "Mistral AI", type: "MoE", status: "Offline", context: "32k", latency: "-" },
    { name: "DALL-E 3", provider: "OpenAI", type: "Image Gen", status: "Active", context: "-", latency: "3.2s" }
];

export function Models() {
    return (
        <div className="p-6 lg:p-8 space-y-8 max-w-[1600px] mx-auto">
            <div>
                <h1 className="text-2xl font-bold text-slate-900">API Models Registry</h1>
                <p className="text-slate-500 mt-1">Manage external AI models and API connections.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {models.map((model, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-indigo-50 rounded-xl">
                                <Cpu className="w-6 h-6 text-indigo-600" />
                            </div>
                            <span className={`px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 ${model.status === 'Active' ? 'bg-emerald-50 text-emerald-700' :
                                model.status === 'Training' ? 'bg-amber-50 text-amber-700' :
                                    'bg-slate-100 text-slate-600'
                                }`}>
                                {model.status === 'Active' && <CheckCircle className="w-3 h-3" />}
                                {model.status === 'Training' && <Clock className="w-3 h-3" />}
                                {model.status === 'Offline' && <AlertCircle className="w-3 h-3" />}
                                {model.status}
                            </span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-1">{model.name}</h3>
                        <p className="text-slate-500 text-sm mb-4">{model.provider} • {model.type}</p>

                        <div className="flex items-center justify-between text-sm py-3 border-t border-slate-50">
                            <span className="text-slate-500">Context Window</span>
                            <span className="font-semibold text-slate-900">{model.context}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm py-3 border-t border-slate-50">
                            <span className="text-slate-500">Avg Latency</span>
                            <span className="font-semibold text-slate-900">{model.latency}</span>
                        </div>

                        <button className="w-full mt-2 py-2 text-indigo-600 font-medium text-sm hover:bg-indigo-50 rounded-lg transition-colors cursor-pointer">
                            View API Docs
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
