import { useMemo, useState } from 'react'
import { Search, ArrowUpRight } from 'lucide-react'
import { useRouter } from '../../../router'
import { useLanguage } from '../../../context/LanguageContext'
import translations from '../../../translations'
import { postMedia } from './blogMedia'

const BlogsCard = () => {
    const { navigate } = useRouter()
    const { lang } = useLanguage()
    const t = translations[lang].blog

    const [activeFilter, setActiveFilter] = useState('All')
    const [search, setSearch] = useState('')

    // Text (current language) + media (images, category key) joined by id
    const posts = useMemo(
        () => t.posts.map((p) => ({ ...postMedia[p.id], ...p })),
        [t]
    )

    const categoryLabel = (key) => t.filters.find((f) => f.key === key)?.label ?? key

    const filteredPosts = useMemo(() => {
        const query = search.trim().toLowerCase()
        return posts.filter((post) => {
            // `category` is the English key, so filtering works in both languages
            const matchesFilter = activeFilter === 'All' || post.category === activeFilter
            const matchesSearch = post.title.toLowerCase().includes(query)
            return matchesFilter && matchesSearch
        })
    }, [posts, activeFilter, search])

    return (
        <section className="bg-[#f8efe5] py-10 md:py-14">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <h2 className="text-2xl md:text-3xl font-bold text-(--forest-green) uppercase mb-5">
                    {t.heading}
                </h2>

                {/* Filter bar */}
                <div className="bg-(--magenta-rose) px-5 md:px-7 py-5 md:py-6">
                    <p className="text-white text-sm md:text-base font-medium uppercase mb-4">
                        {t.filterLabel}
                    </p>

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex flex-wrap gap-3">
                            {t.filters.map((filter) => (
                                <button
                                    key={filter.key}
                                    onClick={() => setActiveFilter(filter.key)}
                                    className={`px-4 py-2 text-xs font-semibold border border-gray-200 rounded-sm shadow-sm cursor-pointer transition-colors ${
                                        activeFilter === filter.key
                                            ? 'bg-(--amber-gold) text-black'
                                            : 'bg-white text-black hover:bg-gray-100'
                                    }`}
                                >
                                    {filter.label}
                                </button>
                            ))}
                        </div>

                        <div className="flex w-full md:w-72">
                            <input
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder={t.searchPlaceholder}
                                className="flex-1 min-w-0 bg-white/60 text-sm text-black placeholder:text-gray-600 px-3 py-2 rounded-l-sm outline-none focus:bg-white"
                            />
                            <button
                                aria-label={t.searchAria}
                                className="bg-(--amber-gold) px-3 flex items-center justify-center rounded-r-sm cursor-pointer"
                            >
                                <Search size={16} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Cards */}
                {filteredPosts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                        {filteredPosts.map((post) => (
                            <article
                                key={post.id}
                                onClick={() => navigate(`/publications/blog/${post.id}`)}
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
                                            {categoryLabel(post.category)}
                                        </span>
                                        <span className="text-[10px] text-gray-700 shrink-0">{post.date}</span>
                                    </div>

                                    <h3 className="text-base font-bold text-black mt-4 mb-3 leading-snug break-words">
                                        {post.title}
                                    </h3>

                                    <button
                                        className="mt-auto inline-flex items-center gap-1 text-xs uppercase text-black hover:text-(--magenta-rose) transition-colors"
                                    >
                                        {t.readMore} <ArrowUpRight size={14} />
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-600 mt-12">
                        {t.noPosts}
                    </p>
                )}
            </div>
        </section>
    )
}

export default BlogsCard