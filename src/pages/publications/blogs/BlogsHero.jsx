import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import BlogsCard from './BlogsCard'
import halftone from '../../../assets/halfton.png'
import { useLanguage } from '../../../context/LanguageContext'
import translations from '../../../translations'

import blogheroimg from '../../../assets/gallery/gallery9.jpg'
// Add or swap images here. Any number works.
import gallery1 from '../../../assets/gallery/gallery11.JPG'
import gallery3 from '../../../assets/publication3.JPG'
import gallery4 from '../../../assets/gallery/gallery10.jpg'

const images = [blogheroimg, gallery1, gallery3, gallery4]

const BlogsHero = () => {
    const { lang } = useLanguage();
    const t = translations[lang].blogHero;

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="overflow-hidden relative pt-16 md:pt-20">
            <div className="bg-(--background)">

                <div className="relative">
                    {/* Colored V-shape: the point sits below the image so the image overlaps the edge */}
                    <div
                        className="absolute inset-0 bg-(--magenta-rose)
                       [clip-path:polygon(0_0,100%_0,100%_85%,50%_100%,0_85%)]
                       md:[clip-path:polygon(0_0,100%_0,100%_80%,50%_100%,0_80%)]"
                    />

                    <img
                        src={halftone}
                        alt=""
                        aria-hidden="true"
                        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
                        style={{ opacity: 0.03 }}
                    />

                    <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-12 md:pt-20 pb-10 md:pb-16">
                        <div className="flex flex-col gap-5 md:gap-8 items-center justify-between">
                            <h1 className="md:text-5xl text-3xl font-bold text-white uppercase">
                                {t.heading}
                            </h1>

                            <div className="w-full max-w-xs md:max-w-3xl">
                                {/* Image slideshow: same fade + zoom animation as the Anupam section */}
                                <div className="relative w-full aspect-video md:aspect-[16/8] border-4 md:border-8 border-white overflow-hidden">
                                    <AnimatePresence mode="sync">
                                        <motion.img
                                            key={images[index]}
                                            src={images[index]}
                                            alt="bloghero"
                                            initial={{ opacity: 0, scale: 1.05 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.98 }}
                                            transition={{ duration: 1, ease: "easeInOut" }}
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <BlogsCard />
            </div>
        </div>
    )
}

export default BlogsHero