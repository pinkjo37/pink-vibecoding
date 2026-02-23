import Link from 'next/link';
import { Search, Bell, Menu } from 'lucide-react';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 h-16 flex items-center justify-between px-4 md:px-6">
            <div className="flex items-center gap-4">
                <button className="md:hidden text-gray-500 hover:text-gray-900">
                    <Menu className="w-6 h-6" />
                </button>
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-lg">F</span>
                    </div>
                    <span className="text-xl font-bold text-gray-900 hidden sm:block">FitBlind</span>
                </Link>
            </div>

            <div className="flex-1 max-w-md mx-4 hidden md:block">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="관심있는 센터, 직무, 키워드 검색"
                        className="w-full bg-gray-100 border-none rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                </div>
            </div>

            <div className="flex items-center gap-3 md:gap-4">
                <button className="text-gray-500 hover:text-gray-900 md:hidden">
                    <Search className="w-6 h-6" />
                </button>
                <button className="text-gray-500 hover:text-gray-900 relative">
                    <Bell className="w-6 h-6" />
                    <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                </button>
                <button className="px-4 py-1.5 text-sm font-medium text-white bg-brand-500 rounded-full hover:bg-brand-600 transition-colors shadow-sm">
                    글쓰기
                </button>
            </div>
        </header>
    );
}
