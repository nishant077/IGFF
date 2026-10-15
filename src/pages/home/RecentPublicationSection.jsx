import { useMemo } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from '../../router'
import { useLanguage } from '../../context/LanguageContext'
import translations from '../../translations'
import { postMedia } from '../../pages/publications/blogs/blogMedia'

const NEWS_CATEGORY_KEY = 'News and Updates'
const MAX_POSTS = 3 // ← change to show more/fewer on the home page

const RecentPublicationSection = () => {
    const { lang } = useLanguage()
    const t = translations[lang].blog

    // 1. Filter blog posts by category key
    // 2. Join with media (image, gallery, etc.)
    // 3. Sort newest first (dates are strings like "23 April 2026")
    // 4. Slice to MAX_POSTS
    const posts = useMemo(() => {
        const categoryPosts = t.posts.filter((p) => p.category === NEWS_CATEGORY_KEY)

        const withMedia = categoryPosts.map((p) => ({
            ...postMedia[p.id],
            ...p,
        }))

        // Sort by parsed date (newest first)
        withMedia.sort((a, b) => {
            const da = new Date(a.date).getTime()
            const db = new Date(b.date).getTime()
            return (isNaN(db) ? 0 : db) - (isNaN(da) ? 0 : da)
        })

        return withMedia.slice(0, MAX_POSTS)
    }, [t])

    if (posts.length === 0) return null

    return (
        <section className="bg-[#f8efe5] py-10 md:py-14">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <h2 className="text-2xl md:text-3xl font-bold text-(--forest-green) uppercase mb-8">
                    {t.heading}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <Link
                            key={post.id}
                            to={`/publications/blog/${post.id}`}
                            className="bg-slate-50 p-2.5 shadow-md flex flex-col cursor-pointer group hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="overflow-hidden rounded-sm">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-52 object-cover rounded-sm group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            <div className="flex flex-col flex-1 px-2 pt-3 pb-2">
                                <div className="flex items-center justify-between gap-2">
                                    <span className="bg-gray-200 text-[#3d7a5c] text-[9px] font-semibold uppercase px-2.5 py-1 rounded-full">
                                        {t.filters.find((f) => f.key === post.category)?.label ?? post.category}
                                    </span>
                                    <span className="text-[10px] text-gray-700 shrink-0">{post.date}</span>
                                </div>

                                <h3 className="text-base font-bold text-black mt-4 mb-3 leading-snug break-words">
                                    {post.title}
                                </h3>

                                <span className="mt-auto inline-flex items-center gap-1 text-xs uppercase text-black group-hover:text-(--magenta-rose) transition-colors">
                                    {t.readMore} <ArrowUpRight size={14} />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default RecentPublicationSection