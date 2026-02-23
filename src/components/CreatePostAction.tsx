import { Pencil } from 'lucide-react';

export default function CreatePostAction() {
    return (
        <div className="bg-white p-4 border-b border-gray-200">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0 border border-brand-200">
                    <span className="text-brand-600 font-bold text-sm">익명</span>
                </div>
                <button className="flex-1 bg-gray-50 border border-gray-200 hover:bg-gray-100 hover:border-gray-300 transition-colors text-left px-4 py-2.5 rounded-full text-sm text-gray-500 flex items-center gap-2 shadow-sm">
                    <Pencil className="w-4 h-4 text-gray-400" />
                    트레이닝 고민이나 노하우를 자유롭게 공유해보세요!
                </button>
            </div>
        </div>
    );
}
