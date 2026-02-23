import PostCard, { PostProps } from './PostCard';

const MOCK_POSTS: PostProps[] = [
    {
        id: '1',
        title: '요즘 스포애니 기본급 얼마부터 시작하나요?',
        preview: '이제 막 1년차 트레이너입니다. 이번에 스포애니 이직 고려중인데, 보통 기본급 + 수업료 비율이 어떻게 형성되어 있는지 궁금합니다. 지역은 서울/경기권 기준입니다.',
        authorCenter: '스포애니',
        authorRole: '1년차 트레이너',
        likes: 42,
        comments: 18,
        views: 342,
        timestamp: '10분 전',
    },
    {
        id: '2',
        title: '회원님들 단백질 식단 관리 어떻게 시키시나요',
        preview: '닭가슴살 질린다고 하시는 회원님들이 너무 많은데, 추천해주실만한 대체 단백질 식품이나 맛있는 닭가슴살 브랜드 공유 좀 부탁드립니다 ㅠㅠ 식단 짜드리기가 점점 힘들어지네요.',
        authorCenter: '에이블짐',
        authorRole: '시니어 트레이너',
        likes: 15,
        comments: 24,
        views: 189,
        timestamp: '1시간 전',
    },
    {
        id: '3',
        title: '당일 노쇼 3번 연속.. 멘탈 나가네요',
        preview: '진짜 너무 스트레스 받습니다. 당일 1시간 전에 못온다고 통보하는 회원님들 어떻게 대처하시나요? 페널티 규정 적용하기도 눈치보이고 미치겠네요.',
        authorCenter: '개인 PT샵',
        authorRole: '대표',
        likes: 89,
        comments: 56,
        views: 890,
        timestamp: '3시간 전',
    },
    {
        id: '4',
        title: '필라테스 강사 구인합니다 (시급 3.5+)',
        preview: '강남구 소재 기구필라테스 스튜디오에서 오전/오후 파트타임 강사님 구합니다. 성과에 따른 인센티브 별도 지급이며 초보자도 지원 가능합니다. 많은 관심 부탁드립니다.',
        authorCenter: '필라테스OOO',
        authorRole: '매니저',
        likes: 5,
        comments: 2,
        views: 120,
        timestamp: '5시간 전',
    },
    {
        id: '5',
        title: '스포츠지도사 2급 실기/구술 팁 좀 주세요',
        preview: '이번에 스지 2급 보디빌딩 준비 중인데 실기 포징이나 구술 관련해서 핵심으로 외워야 할 부분 있을까요? 작년에 한 번 떨어져서 이번엔 꼭 붙고 싶습니다.',
        authorCenter: '새마을휘트니스',
        authorRole: '트레이너 지망생',
        likes: 27,
        comments: 11,
        views: 215,
        timestamp: '어제',
    },
];

export default function PostFeed() {
    return (
        <div className="bg-white min-h-screen">
            <div className="border-b border-gray-200">
                {MOCK_POSTS.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
            <div className="p-8 text-center text-gray-500 text-sm">
                <button className="px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full font-medium transition-colors shadow-sm">
                    게시물 더보기
                </button>
            </div>
        </div>
    );
}
