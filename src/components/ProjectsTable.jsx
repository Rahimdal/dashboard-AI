import { MoreHorizontal } from 'lucide-react';

export function ProjectsTable({ projects = [] }) {
    if (projects.length === 0) {
        return (
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 text-center text-slate-500">
                No projects found.
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900">Recent Projects</h3>
                <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700">View All</button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-slate-600">
                    <thead className="bg-slate-50 text-slate-900 font-semibold border-b border-slate-100">
                        <tr>
                            <th className="px-6 py-4">Project Name</th>
                            <th className="px-6 py-4">Model Type</th>
                            <th className="px-6 py-4">Accuracy</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4">Last Updated</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {projects.map((project) => (
                            <tr key={project.id} className="hover:bg-slate-50/50 transition-colors group">
                                <td className="px-6 py-4 font-medium text-slate-900">{project.name}</td>
                                <td className="px-6 py-4">{project.type}</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                            <div
                                                className={`h-full rounded-full ${project.accuracy > 90 ? 'bg-emerald-500' :
                                                    project.accuracy > 80 ? 'bg-indigo-500' : 'bg-amber-500'
                                                    }`}
                                                style={{ width: `${project.accuracy}%` }}
                                            />
                                        </div>
                                        <span className="text-xs font-semibold">{project.accuracy}%</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${project.status === 'Active' ? 'bg-emerald-50 text-emerald-700' :
                                        project.status === 'Training' ? 'bg-indigo-50 text-indigo-700' :
                                            project.status === 'Completed' ? 'bg-blue-50 text-blue-700' :
                                                'bg-rose-50 text-rose-700'
                                        }`}>
                                        <span className={`w-1.5 h-1.5 rounded-full ${project.status === 'Active' ? 'bg-emerald-500 animate-pulse' :
                                            project.status === 'Training' ? 'bg-indigo-500 animate-pulse' :
                                                project.status === 'Completed' ? 'bg-blue-500' :
                                                    'bg-rose-500'
                                            }`} />
                                        {project.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 font-mono text-xs">{project.updated}</td>
                                <td className="px-6 py-4 text-right">
                                    <button className="p-1 text-slate-400 hover:text-slate-600 rounded hover:bg-slate-100 transition-colors">
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
