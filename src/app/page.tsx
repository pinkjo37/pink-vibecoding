import CreatePostAction from '@/components/CreatePostAction';
import PostFeed from '@/components/PostFeed';
import { TrendingUp, Flame } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex w-full h-full">
      {/* Main Feed Area */}
      <div className="flex-1 max-w-2xl border-r border-gray-100 bg-white min-h-[calc(100vh-4rem)]">
        <div className="sticky top-16 z-10 bg-white/90 backdrop-blur-md border-b border-gray-100 px-5 py-4">
          <h1 className="text-[18px] font-bold text-[#191F28] flex items-center gap-2">
            <Flame className="w-5 h-5 text-orange-500" />
            실시간 인기 글
          </h1>
        </div>
        <CreatePostAction />
        <PostFeed />
      </div>

      {/* Right Sidebar Area (Desktop only) */}
      <div className="w-80 hidden lg:block p-6">
        <div className="bg-[#F9FAFB] rounded-2xl p-5 shadow-sm sticky top-24 border border-gray-100/50">
          <h2 className="text-[15px] font-bold text-[#191F28] mb-4 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-brand-500" />
            지금 뜨는 토픽
          </h2>
          <div className="space-y-4">
            <div className="flex flex-col gap-1 cursor-pointer group">
              <span className="text-[12px] text-brand-600 font-bold tracking-tight">1. 급여/처우</span>
              <p className="text-[14px] text-[#4E5968] font-medium group-hover:text-brand-500 transition-colors line-clamp-1">PT 단가 평균 어느정도 하시나요?</p>
            </div>
            <div className="flex flex-col gap-1 cursor-pointer group">
              <span className="text-[12px] text-brand-600 font-bold tracking-tight">2. 회원 관리</span>
              <p className="text-[14px] text-[#4E5968] font-medium group-hover:text-brand-500 transition-colors line-clamp-1">카톡으로 계속 피드백 요구하는 회원님</p>
            </div>
            <div className="flex flex-col gap-1 cursor-pointer group">
              <span className="text-[12px] text-brand-600 font-bold tracking-tight">3. 이직/취업</span>
              <p className="text-[14px] text-[#4E5968] font-medium group-hover:text-brand-500 transition-colors line-clamp-1">이력서 쓰는데 프로필 사진 필수일까요?</p>
            </div>
            <div className="flex flex-col gap-1 cursor-pointer group">
              <span className="text-[12px] text-brand-600 font-bold tracking-tight">4. 센터 운영</span>
              <p className="text-[14px] text-[#4E5968] font-medium group-hover:text-brand-500 transition-colors line-clamp-1">오픈 준비중인데 기구 추천 부탁드립니다</p>
            </div>
            <div className="flex flex-col gap-1 cursor-pointer group">
              <span className="text-[12px] text-brand-600 font-bold tracking-tight">5. 필라테스/요가</span>
              <p className="text-[14px] text-[#4E5968] font-medium group-hover:text-brand-500 transition-colors line-clamp-1">그룹 수업할 때 시퀀스 어떻게 짜시나요</p>
            </div>
          </div>
        </div>

        <div className="mt-6 text-[12px] text-[#8B95A1] font-medium text-center">
          <p>FitBlind © 2026</p>
          <div className="flex justify-center gap-2 mt-2">
            <a href="#" className="hover:text-gray-600 transition-colors">이용약관</a>
            <span>·</span>
            <a href="#" className="hover:text-gray-600 transition-colors">개인정보처리방침</a>
            <span>·</span>
            <a href="#" className="hover:text-gray-600 transition-colors">문의하기</a>
          </div>
        </div>
      </div>
    </div>
  );
}
