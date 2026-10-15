import { useEffect, useRef } from 'react'
import { ArrowUpRight, ArrowLeft, Calendar, Tag } from 'lucide-react'
import { Link } from '../../../router'
import { useLanguage } from '../../../context/LanguageContext'
import translations from '../../../translations'
import { postMedia } from './blogMedia'

const BlogDetail = ({ postId }) => {
    const { lang } = useLanguage()
    const t = translations[lang].blog
    const contentRef = useRef(null)

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' })
    }, [postId])

    // Text (current language) + media (image, gallery, category key) joined by id
    const text = t.posts.find((p) => p.id === postId)
    const media = postMedia[postId]

    if (!text || !media) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#f8efe5] px-6">
                <div className="text-center">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-700 mb-4">{t.postNotFound}</h2>
                    <Link to="/publications" className="text-(--magenta-rose) underline">
                        ← {t.backToPublications}
                    </Link>
                </div>
            </div>
        )
    }

    const post = { ...media, ...text }
    const categoryLabel = t.filters.find((f) => f.key === post.category)?.label ?? post.category

    return (
        <div className="bg-[#f8efe5] min-h-screen overflow-x-clip">
            {/* ── Hero Header with V-shape clip ── */}
            <div
                className="relative w-full bg-(--magenta-rose) text-white flex items-center justify-center text-center pt-24 pb-16 sm:pb-20 px-5 sm:px-6"
                style={{
                    clipPath: 'polygon(0 0, 100% 0, 100% 78%, 50% 100%, 0 78%)',
                }}
            >
                {/* subtle halftone overlay */}
                <div
                    className="absolute inset-0 opacity-[0.07] pointer-events-none"
                    style={{
                        backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                        backgroundSize: '18px 18px',
                    }}
                />
                <div className="relative z-10 max-w-3xl mx-auto w-full">
                    {/* Category pill */}
                    <span className="inline-block max-w-full bg-white/20 text-white text-[10px] font-semibold uppercase tracking-wider sm:tracking-widest px-3 sm:px-4 py-1.5 rounded-full mb-4 sm:mb-5 backdrop-blur-sm border border-white/30">
                        {categoryLabel}
                    </span>
                    <h1 className="text-xl sm:text-3xl md:text-4xl font-black uppercase leading-tight tracking-normal sm:tracking-wide drop-shadow-md break-words">
                        {post.title}
                    </h1>
                    <div className="mt-3 sm:mt-4 flex items-center justify-center gap-2 sm:gap-3 text-white/80 text-xs font-medium">
                        <Calendar size={13} className="opacity-70" />
                        <span>{post.date}</span>
                    </div>
                </div>
            </div>

            {/* ── Back link ── */}
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 pt-4 pb-0">
                <Link
                    to="/publications"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase text-gray-600 hover:text-(--magenta-rose) transition-colors group py-2"
                >
                    <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                    {t.backToPublications}
                </Link>
            </div>

            {/* ── Body: image on top (mobile) / sticky left (desktop) + content ── */}
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-8 sm:py-10 lg:py-12">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 items-start">

                    {/* LEFT: image (sticky only on lg+) */}
                    <div className="w-full lg:w-[38%] lg:flex-shrink-0 lg:self-start">
                        <div className="lg:sticky" style={{ top: '100px' }}>
                            <div className="relative overflow-hidden rounded-sm shadow-xl">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full object-cover max-h-72 sm:max-h-96 lg:max-h-[520px]"
                                />
                                {/* decorative bottom accent */}
                                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-(--magenta-rose)" />
                            </div>

                            {/* Tag below image */}
                            <div className="mt-4 flex flex-wrap gap-2">
                                <span className="inline-flex items-center gap-1.5 bg-white text-[#3d7a5c] text-[10px] font-semibold uppercase px-3 py-1.5 rounded-full shadow-sm border border-gray-200">
                                    <Tag size={10} />
                                    {categoryLabel}
                                </span>
                                <span className="inline-flex items-center gap-1.5 bg-white text-gray-600 text-[10px] font-medium px-3 py-1.5 rounded-full shadow-sm border border-gray-200">
                                    <Calendar size={10} />
                                    {post.date}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: content */}
                    <div ref={contentRef} className="w-full flex-1 min-w-0">

                        {/* Description (HTML from blog.en.js / blog.ne.js) */}
                        <div
                            className="mb-10 text-gray-700 text-[15px] sm:text-base leading-relaxed break-words
        [&_p]:mb-4 sm:[&_p]:mb-5 [&_p]:text-left md:[&_p]:text-justify
        [&_h3]:text-lg sm:[&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-(--forest-green) [&_h3]:mt-7 sm:[&_h3]:mt-8 [&_h3]:mb-3
        [&_h4]:text-base [&_h4]:font-bold [&_h4]:text-gray-800 [&_h4]:mt-5 sm:[&_h4]:mt-6 [&_h4]:mb-2
        [&_ul]:list-disc [&_ul]:pl-5 sm:[&_ul]:pl-6 [&_ul]:mb-4 sm:[&_ul]:mb-5 [&_li]:mb-2 [&_li]:text-left
        [&_strong]:font-semibold
        [&_img]:max-w-full [&_img]:h-auto
        [&_a]:text-(--magenta-rose) [&_a]:underline [&_a]:break-words"
                            dangerouslySetInnerHTML={{ __html: post.description }}
                        />

                        {/* Image Gallery 2×2 */}
                        <div>
                            <h3 className="text-base sm:text-lg font-bold text-(--forest-green) uppercase tracking-wide mb-4 sm:mb-5 flex items-center gap-3">
                                <span className="h-px flex-1 bg-gray-300" />
                                {t.gallery}
                                <span className="h-px flex-1 bg-gray-300" />
                            </h3>

                            <div className="grid grid-cols-2 gap-2 sm:gap-3">
                                {post.gallery.map((img, idx) => (
                                    <div
                                        key={idx}
                                        className="relative overflow-hidden rounded-sm group cursor-pointer aspect-[4/3]"
                                    >
                                        <img
                                            src={img}
                                            alt={`${t.galleryAlt} ${idx + 1}`}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        {/* --background overlay on hover */}
                                        <div
                                            className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-300"
                                            style={{ backgroundColor: 'var(--background, #f8efe5)' }}
                                        />
                                        {/* overlay icon */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 border border-white/40">
                                                <ArrowUpRight size={18} className="text-white drop-shadow" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogDetail