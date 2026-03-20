import { useState, useEffect } from 'react';
import { ProjectsTable } from '../components/ProjectsTable';
import { Plus, Filter, Loader2 } from 'lucide-react';

export function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulating fetching AI projects from an API
        // We'll use dummyjson posts and map them to look like AI projects
        const fetchProjects = async () => {
            try {
                const res = await fetch('https://dummyjson.com/posts?limit=8');
                const data = await res.json();

                const mappedProjects = data.posts.map(post => ({
                    id: post.id,
                    name: post.title.split(' ').slice(0, 3).join(' ') + ' Model',
                    type: post.tags[0] ? post.tags[0].charAt(0).toUpperCase() + post.tags[0].slice(1) : 'General',
                    accuracy: Math.floor(Math.random() * (99 - 70 + 1) + 70), // Random accuracy 70-99
                    status: Math.random() > 0.7 ? 'Training' : Math.random() > 0.4 ? 'Active' : 'Completed',
                    updated: `${Math.floor(Math.random() * 23) + 1}h ago`
                }));

                setProjects(mappedProjects);
            } catch (error) {
                console.error("Failed to fetch projects", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div className="p-6 lg:p-8 space-y-8 max-w-[1600px] mx-auto">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Projects</h1>
                    <p className="text-slate-500 mt-1">Manage all your AI/ML projects in one place.</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors font-medium cursor-pointer">
                        <Filter className="w-4 h-4" />
                        Filter
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium shadow-lg shadow-indigo-200 cursor-pointer">
                        <Plus className="w-4 h-4" />
                        New Project
                    </button>
                </div>
            </div>

            {loading ? (
                <div className="flex items-center justify-center h-64">
                    <Loader2 className="w-8 h-8 text-indigo-600 animate-spin" />
                </div>
            ) : (
                <ProjectsTable projects={projects} />
            )}
        </div>
    );
}
