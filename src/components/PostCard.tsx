import { MessageSquare, ThumbsUp, Eye, MoreHorizontal, User } from 'lucide-react';

export interface PostProps {
    id: string;
    title: string;
    preview: string;
    authorCenter: string;
    authorRole: string;
    likes: number;
    comments: number;
    views: number;
    timestamp: string;
}

export default function PostCard({ post }: { post: PostProps }) {
    return (
        <div className="bg-white p-5 md:p-6 border-b border-gray-100 cursor-pointer hover:bg-[#F9FAFB] transition-colors group">
            <div className="flex justify-between items-start mb-2.5">
                <h3 className="text-[17px] font-bold text-[#191F28] leading-snug group-hover:text-brand-500 transition-colors">
                    {post.title}
                </h3>
                <button className="text-gray-400 hover:text-gray-600 p-1.5 rounded-full hover:bg-gray-100 transition-colors -mt-1 -mr-1">
                    <MoreHorizontal className="w-5 h-5" />
                </button>
            </div>

            <p className="text-[15px] text-[#4E5968] line-clamp-2 mb-4 leading-relaxed font-medium">
                {post.preview}
            </p>

            <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2 text-[13px] font-medium">
                    <span className="text-brand-600 bg-[#E8F3FF] px-2.5 py-1 rounded-md">
                        {post.authorCenter}
                    </span>
                    <span className="text-gray-300">·</span>
                    <span className="text-[#8B95A1] flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5" />
                        {post.authorRole}
                    </span>
                    <span className="text-gray-300">·</span>
                    <span className="text-[#8B95A1]">{post.timestamp}</span>
                </div>

                <div className="flex items-center gap-3.5 text-[13px] text-[#8B95A1] font-medium">
                    <span className="flex items-center gap-1.5 group-hover:text-gray-500 transition-colors"><Eye className="w-4 h-4" /> {post.views}</span>
                    <span className="flex items-center gap-1.5 hover:text-red-500 transition-colors"><ThumbsUp className="w-4 h-4" /> {post.likes}</span>
                    <span className="flex items-center gap-1.5 hover:text-brand-500 transition-colors"><MessageSquare className="w-4 h-4" /> {post.comments}</span>
                </div>
            </div>
        </div>
    );
}
