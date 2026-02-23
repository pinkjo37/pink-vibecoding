import Link from 'next/link';
import { Search, Bell, Menu } from 'lucide-react';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 h-16 flex items-center justify-between px-4 md:px-6 shadow-sm shadow-gray-100/50">
            <div className="flex items-center gap-4">
                <button className="md:hidden text-gray-500 hover:text-gray-900 transition-colors">
                    <Menu className="w-6 h-6" />
                </button>
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-brand-500 rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold text-lg">F</span>
                    </div>
                    <span className="text-[20px] font-bold text-gray-900 hidden sm:block tracking-tight">FitBlind</span>
                </Link>
            </div>

            <div className="flex-1 max-w-md mx-4 hidden md:block">
                <div className="relative">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="관심있는 센터, 직무, 키워드 검색"
                        className="w-full bg-[#F2F4F6] border-none rounded-2xl py-2.5 pl-10 pr-4 text-[15px] font-medium text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-0 focus:bg-gray-200 transition-colors"
                    />
                </div>
            </div>

            <div className="flex items-center gap-2 md:gap-3">
                <button className="text-gray-400 hover:text-gray-800 md:hidden p-2 rounded-full hover:bg-gray-50 transition-colors">
                    <Search className="w-6 h-6" />
                </button>
                <button className="text-gray-400 hover:text-gray-800 relative p-2 rounded-full hover:bg-gray-50 transition-colors">
                    <Bell className="w-6 h-6" />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                </button>
                <button className="px-5 py-2 text-[15px] font-semibold text-white bg-brand-500 rounded-xl hover:bg-brand-600 active:bg-brand-700 transition-all ml-1">
                    글쓰기
                </button>
            </div>
        </header>
    );
}
