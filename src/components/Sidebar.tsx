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
        <aside className="w-64 flex-shrink-0 hidden md:flex flex-col border-r border-gray-100 bg-white h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto">
            <div className="p-4 flex-1 mt-2">
                <div className="mb-6">
                    <h2 className="text-[13px] font-bold text-gray-400 mb-3 px-3">커뮤니티</h2>
                    <nav className="space-y-1">
                        {BOARDS.map((board) => {
                            const Icon = board.icon;
                            return (
                                <Link
                                    key={board.id}
                                    href={`/board/${board.id}`}
                                    className="flex items-center justify-between px-3 py-2.5 text-[15px] font-medium rounded-xl text-gray-700 hover:bg-[#F2F4F6] hover:text-gray-900 transition-colors group"
                                >
                                    <div className="flex items-center gap-3">
                                        <Icon className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                                        {board.name}
                                    </div>
                                    {board.count && (
                                        <span className="bg-[#F2F4F6] text-gray-500 py-0.5 px-2.5 rounded-full text-xs font-semibold group-hover:bg-white group-hover:shadow-sm transition-all">
                                            {board.count}
                                        </span>
                                    )}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </div>

            <div className="p-5 border-t border-gray-100">
                <div className="bg-[#E8F3FF] rounded-2xl p-5 border border-transparent hover:border-brand-100 transition-colors overflow-hidden">
                    <h3 className="text-[15px] text-brand-600 font-bold mb-1.5 leading-snug">내 소속 인증하고<br />리얼한 토크 참여하기</h3>
                    <p className="text-[13px] text-brand-600/80 mb-4 leading-relaxed tracking-tight">현재 재직 중인 센터를 인증하면 모든 게시판을 이용할 수 있어요.</p>
                    <button className="w-full py-2.5 bg-brand-500 text-white rounded-xl text-[14px] font-semibold hover:bg-brand-600 transition-colors shadow-sm">
                        소속 인증하기
                    </button>
                </div>
            </div>
        </aside>
    );
}
