import { CoverflowCarousel } from "./CoverflowCarousel";

import gallery1 from '../../assets/gallery/gallery1.jpg'
import gallery2 from '../../assets/gallery/gallery2.jpg'
import gallery3 from '../../assets/gallery/gallery3.jpg'
import gallery4 from '../../assets/gallery/gallery4.jpg'
import gallery5 from '../../assets/gallery/gallery5.jpg'
import gallery6 from '../../assets/gallery/gallery6.JPG'
import gallery7 from '../../assets/gallery/gallery7.JPG'
import gallery8 from '../../assets/gallery/gallery8.JPG'
import gallery9 from '../../assets/gallery/gallery9.jpg'
import gallery10 from '../../assets/gallery/gallery10.jpg'

const SLIDES = [
  {
    src: gallery1,
    alt: "Gallery photo 1",
    title: "Tidewater",
    subtitle: "Long Player",
  },
  {
    src: gallery2,
    alt: "Gallery photo 2",
    title: "Nightshift",
    subtitle: "Long Player",
  },
  {
    src: gallery3,
    alt: "Gallery photo 3",
    title: "Overexposed",
    subtitle: "Single",
  },
  {
    src: gallery4,
    alt: "Gallery photo 4",
    title: "Slow Bloom",
    subtitle: "EP",
  },
  {
    src: gallery5,
    alt: "Gallery photo 5",
    title: "Open Palm",
    subtitle: "Single",
  },
  {
    src: gallery6,
    alt: "Gallery photo 6",
    title: "Low Country",
    subtitle: "Long Player",
  },
  {
    src: gallery7,
    alt: "Gallery photo 7",
    title: "Dry Season",
    subtitle: "EP",
  },
  {
    src: gallery8,
    alt: "Gallery photo 8",
    title: "Understory",
    subtitle: "Single",
  },
  {
    src: gallery9,
    alt: "Gallery photo 9",
    title: "Paper Lantern",
    subtitle: "Single",
  },
  {
    src: gallery10,
    alt: "Gallery photo 10",
    title: "Still Water",
    subtitle: "Long Player",
  },
];

// Gallery section: drop this into any page/layout.
export default function GallerySection() {
  return (
    <section className="w-full overflow-hidden bg-(--background) py-16">
      <div className="mx-auto mb-10 max-w-7xl px-6 md:px-10 justify-start flex flex-col gap-2">
        <h2 className="text-2xl font-bold text-(--forest-green) tracking-tight text-foreground sm:text-3xl">
          Gallery
        </h2>
        <span style={{fontFamily: "Inter"}} className="mt-2 font-medium text-2xl text-(--royal-purple) text-muted-foreground sm:text-3xl">
          VOICES. STORIES. MOMENTS. CHANGE.
        </span>
      </div>
      <CoverflowCarousel
        slides={SLIDES}
        showNavigation
        showPagination
        label="Album cover gallery"
      />
    </section>
  );
}