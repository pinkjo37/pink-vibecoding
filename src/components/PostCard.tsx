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
        <div className="bg-white p-4 md:p-5 border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors group">
            <div className="flex justify-between items-start mb-2">
                <h3 className="text-base md:text-lg font-bold text-gray-900 leading-snug group-hover:text-brand-600 transition-colors">
                    {post.title}
                </h3>
                <button className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-colors">
                    <MoreHorizontal className="w-5 h-5" />
                </button>
            </div>

            <p className="text-sm text-gray-600 line-clamp-2 mb-3 leading-relaxed">
                {post.preview}
            </p>

            <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2 text-xs">
                    <span className="font-semibold text-brand-600 bg-brand-50 border border-brand-100 px-2 py-0.5 rounded text-[11px]">
                        {post.authorCenter}
                    </span>
                    <span className="text-gray-400">·</span>
                    <span className="text-gray-500 flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.authorRole}
                    </span>
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-500">{post.timestamp}</span>
                </div>

                <div className="flex items-center gap-3 text-xs text-gray-400 font-medium">
                    <span className="flex items-center gap-1 group-hover:text-gray-500 transition-colors"><Eye className="w-3.5 h-3.5" /> {post.views}</span>
                    <span className="flex items-center gap-1 text-red-500"><ThumbsUp className="w-3.5 h-3.5" /> {post.likes}</span>
                    <span className="flex items-center gap-1 text-blue-500"><MessageSquare className="w-3.5 h-3.5" /> {post.comments}</span>
                </div>
            </div>
        </div>
    );
}
