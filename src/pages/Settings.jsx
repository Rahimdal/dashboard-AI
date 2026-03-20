import { User, Bell, Shield, Database } from 'lucide-react';

export function Settings() {
    return (
        <div className="p-6 lg:p-8 space-y-8 max-w-[1000px] mx-auto">
            <div>
                <h1 className="text-2xl font-bold text-slate-900">Settings</h1>
                <p className="text-slate-500 mt-1">Manage your account preferences and system configuration.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="divide-y divide-slate-100">
                    <div className="p-6 flex items-start gap-4 hover:bg-slate-50 transition-colors cursor-pointer">
                        <div className="p-2 bg-slate-100 rounded-lg text-slate-600">
                            <User className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-semibold text-slate-900">Profile Information</h3>
                            <p className="text-sm text-slate-500 mt-1">Update your photo and personal details.</p>
                        </div>
                    </div>

                    <div className="p-6 flex items-start gap-4 hover:bg-slate-50 transition-colors cursor-pointer">
                        <div className="p-2 bg-slate-100 rounded-lg text-slate-600">
                            <Bell className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-semibold text-slate-900">Notifications</h3>
                            <p className="text-sm text-slate-500 mt-1">Configure how you receive alerts.</p>
                        </div>
                    </div>

                    <div className="p-6 flex items-start gap-4 hover:bg-slate-50 transition-colors cursor-pointer">
                        <div className="p-2 bg-slate-100 rounded-lg text-slate-600">
                            <Database className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-semibold text-slate-900">Data Sources</h3>
                            <p className="text-sm text-slate-500 mt-1">Manage connected datasets and APIs.</p>
                        </div>
                    </div>

                    <div className="p-6 flex items-start gap-4 hover:bg-slate-50 transition-colors cursor-pointer">
                        <div className="p-2 bg-slate-100 rounded-lg text-slate-600">
                            <Shield className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-semibold text-slate-900">Security</h3>
                            <p className="text-sm text-slate-500 mt-1">Change password and 2FA settings.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
