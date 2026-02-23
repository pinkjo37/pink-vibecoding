import { Pencil } from 'lucide-react';

export default function CreatePostAction() {
    return (
        <div className="bg-white p-5 border-b border-gray-100">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#E8F3FF] flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-600 font-bold text-[13px]">익명</span>
                </div>
                <button className="flex-1 bg-[#F2F4F6] hover:bg-[#E5E8EB] transition-colors text-left px-5 py-3 rounded-2xl text-[14px] font-medium text-gray-500 flex items-center gap-2">
                    <Pencil className="w-4 h-4 text-gray-400" />
                    트레이닝 고민이나 노하우를 자유롭게 공유해보세요!
                </button>
            </div>
        </div>
    );
}
