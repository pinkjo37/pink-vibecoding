import Link from 'next/link';
import { Home, Briefcase, DollarSign, Users, Building, Activity, Info } from 'lucide-react';

const BOARDS = [
    { id: 'all', name: '전체 게시판', icon: Home, count: null },
    { id: 'jobs', name: '이직/취업', icon: Briefcase, count: 24 },
    { id: 'salary', name: '급여/처우', icon: DollarSign, count: 12 },
    { id: 'members', name: '회원 관리', icon: Users, count: 56 },
    { id: 'center', name: '센터 운영', icon: Building, count: 8 },
    { id: 'pilates', name: '필라테스/요가', icon: Activity, count: 31 },
    { id: 'cert', name: '자격증/교육', icon: Info, count: 19 },
];

export default function Sidebar() {
    return (
        <aside className="w-64 flex-shrink-0 hidden md:flex flex-col border-r border-gray-200 bg-white h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto">
            <div className="p-4 flex-1">
                <div className="mb-6">
                    <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3">토픽</h2>
                    <nav className="space-y-1">
                        {BOARDS.map((board) => {
                            const Icon = board.icon;
                            return (
                                <Link
                                    key={board.id}
                                    href={`/board/${board.id}`}
                                    className="flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                                >
                                    <div className="flex items-center gap-3">
                                        <Icon className="w-4 h-4 text-gray-400" />
                                        {board.name}
                                    </div>
                                    {board.count && (
                                        <span className="bg-gray-100 text-gray-500 py-0.5 px-2 rounded-full text-xs font-semibold">
                                            {board.count}
                                        </span>
                                    )}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </div>

            <div className="p-4 border-t border-gray-200 bg-gray-50/50">
                <div className="bg-white rounded-lg p-4 border border-brand-100 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-brand-500"></div>
                    <p className="text-sm text-gray-900 font-bold mb-1">내 소속 인증하기</p>
                    <p className="text-xs text-gray-500 mb-3">현재 재직 중인 센터를 인증하고 더 깊고 솔직한 대화를 나눠보세요.</p>
                    <button className="w-full py-2 bg-brand-50 text-brand-600 border border-brand-200 rounded-md text-xs font-bold hover:bg-brand-100 transition-colors">
                        인증 시도 🚀
                    </button>
                </div>
            </div>
        </aside>
    );
}
