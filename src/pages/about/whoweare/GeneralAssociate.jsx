import { useEffect, useMemo, useRef, useState } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

// Replace with your full dataset (~3910 rows) – e.g. import from a JSON file or fetch from an API.
export const associates = [
  { district: "Ilam", name: "Thir Maya Basnet", organization: "Bhanjyang Mahila Samuha" },
  { district: "Ilam", name: "Dipa Acharya", organization: "Bhanjyang Mahila Samuha" },
  { district: "Ilam", name: "Sushila Devi Ghimire", organization: "Kriyashil Apangata Swabalamban Samuha" },
  { district: "Ilam", name: "Buddhi Maya Adhikari", organization: "Bhanjyang Mahila Samuha" },
  { district: "Ilam", name: "Uma Malla", organization: "Bhanjyang Mahila Samuha" },
  { district: "Ilam", name: "Bimala Rasaili", organization: "Bhanjyang Mahila Samuha" },
  { district: "Ilam", name: "Pramila Bhatrrai Rimal", organization: "Aakata organic agriculture group" },
  { district: "Ilam", name: "Hem kumari Shiwa", organization: "Sahayatri Nepal" },
  { district: "Ilam", name: "Masemi Thebe", organization: "Shree Bhanjyang Mahila Samuha" },
  { district: "Ilam", name: "Anuja Gajurel", organization: "Shree Bhanjyang Mahila Samuha" },
  { district: "Ilam", name: "Kamala Dahal", organization: "Shree Bhanjyang Mahila Samuha" },
  { district: "Ilam", name: "Sita Chauhan", organization: "Shree Bhanjyang Mahila Samuha" },
  { district: "Ilam", name: "Kumari Ale", organization: "Female Community Health Volunteers" },
  { district: "Ilam", name: "Muna Thapa", organization: "Bhanjyag Mahila Samuha" },
  { district: "Ilam", name: "Chitra Prasad Baral", organization: "Bar Association" },
  { district: "Ilam", name: "Roshni Rai", organization: "Bikash Ko Laagi Shanti Abhiyaan" },
  { district: "Ilam", name: "Indira Trikhatri", organization: "Sahayatra Nepal" },
  { district: "Ilam", name: "Kamala Gautam", organization: "Sahayatra Nepal" },
  { district: "Ilam", name: "Sabita Pandey", organization: "Sahayatra Nepal" },
  { district: "Ilam", name: "Mina Parajuli", organization: "Social Worker" },
  { district: "Ilam", name: "Sonu Mukhiya", organization: "Journalist" },
  { district: "Ilam", name: "Kamala Devi Adhikari", organization: "Social Worker" },
  { district: "Ilam", name: "Januka Acharya", organization: "Social Worker" },
  { district: "Ilam", name: "Bhawana Mangrati", organization: "Social Worker" },
  { district: "Ilam", name: "Kamala Khadka", organization: "Anjeliyaa Mahila Krishi Sahakari Sanstha" },
  { district: "Ilam", name: "Nirmaya Rai", organization: "Gumbadanda Samudiyak Ban Mahila Upabhoktta Samuha" },
  { district: "Ilam", name: "Tika Devi Regmi", organization: "Khareha Purosh Ban Samuha" },
  { district: "Ilam", name: "Hem Kumari Shrestha", organization: "Sunolo Behani Mahila Krishi Smuha" },
  { district: "Ilam", name: "Gyan Kumari Poudel", organization: "Nava Jaagriti Mahila Samuha" },
  { district: "Ilam", name: "Benita Khadka", organization: "Chhechhepi Simsar Sanksharan Mahila Samuha" },
  { district: "Ilam", name: "Darika Thebe", organization: "" },
  { district: "Ilam", name: "Pramila Rai", organization: "Mahila Janachetana Kendra" },
  { district: "Ilam", name: "Mina Gurung", organization: "Tewa" },
  { district: "Ilam", name: "Kritika Acharya", organization: "Student" },
  { district: "Ilam", name: "Kedar Sharma", organization: "Bhasa/Nepal Khanpan" },
  { district: "Ilam", name: "Kiran Sharma Koirala", organization: "Padkala/ Nepali Khanpaan" },
  { district: "Ilam", name: "Buharani Ghatani", organization: "Gaidedhara Krishi Tatha Pashupalan" },
  { district: "Ilam", name: "Balimaya Ghatani", organization: "Gaidedhara Krishi Tatha Pashupalan" },
  { district: "Ilam", name: "Prem Kumari Adhikari", organization: "Shree Utarepokhari Simsar Chhetra" },
  { district: "Ilam", name: "Manika Karki", organization: "Shree Utarepokhari Simsar Chhetra" },
  { district: "Ilam", name: "Manju Thami", organization: "Shree Simdhara Krishi Mahila Samuha" },
  { district: "Ilam", name: "Khom Kumari Khawas", organization: "Shree Simdhara Krishi Mahila Samuha" },
  { district: "Ilam", name: "Bijaya Subba", organization: "Tewa" },
  { district: "Ilam", name: "Rajen Dewan", organization: "NA" },
  { district: "Ilam", name: "Mina Kumari Dahal", organization: "NA" },
  { district: "Ilam", name: "Sarita Baraili", organization: "NA" },
  { district: "Ilam", name: "Puja Dahal", organization: "Rastriya Bahira Mahasang" },
  {district:"Taaplejung", name:"Tulsha B.K.", organization:"Nepal Mahila Uddhami Sangh" },
];

const PAGE_SIZE = 25; // 5 columns x 5 rows on desktop

// Builds [1, "...", 4, 5, 6, "...", 157]
const getPageItems = (current, total) => {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const items = [1];
  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  if (start > 2) items.push("…");
  for (let p = start; p <= end; p++) items.push(p);
  if (end < total - 1) items.push("…");
  items.push(total);
  return items;
};

const GeneralAssociates = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const topRef = useRef(null);
  const prevPage = useRef(null);

  // Search by district only
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return associates;
    return associates.filter((a) => a.district.toLowerCase().includes(q));
  }, [query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const visible = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  // Scroll back to the top of the list when the user changes pages (not on mount)
  useEffect(() => {
    if (prevPage.current !== null && prevPage.current !== currentPage) {
      topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    prevPage.current = currentPage;
  }, [currentPage]);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    setPage(1);
  };

  const hasFilters = query.trim() !== "";

  const clearFilters = () => {
    setQuery("");
    setPage(1);
  };

  const pageBtn =
    "min-w-9 h-9 px-2 inline-flex items-center justify-center rounded-md text-sm font-semibold border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--royal-purple)";

  return (
    <section ref={topRef} className="bg-(--background) py-12 md:py-16 scroll-mt-4">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col gap-8 md:gap-10">
        {/* Header + search */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="md:text-3xl text-2xl font-bold uppercase text-(--royal-purple)">
            General Associates
          </h2>

          <form
            role="search"
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full sm:w-80"
          >
            <input
              type="search"
              value={query}
              onChange={handleSearch}
              placeholder="Search by district..."
              aria-label="Search associates by district"
              className="flex-1 min-w-0 rounded-l-md border border-r-0 border-(--royal-purple)/30 bg-white/60 px-3 py-2 text-sm outline-none focus:border-(--royal-purple)"
            />
            <button
              type="submit"
              aria-label="Search"
              className="flex items-center justify-center rounded-r-md bg-(--royal-purple) px-3 text-white hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--royal-purple)"
            >
              <Search size={16} />
            </button>
          </form>
        </div>

        {/* Active search summary */}
        {hasFilters && (
          <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-800">
            <span>
              {filtered.length} result{filtered.length === 1 ? "" : "s"} for{" "}
              <strong>“{query.trim()}”</strong>
            </span>
            <button
              type="button"
              onClick={clearFilters}
              className="font-semibold text-(--royal-purple) underline underline-offset-2 hover:opacity-80 cursor-pointer"
            >
              Clear search
            </button>
          </div>
        )}

        {/* List */}
        {visible.length > 0 ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-8">
            {visible.map((a, i) => (
              <li
                key={`${a.name}-${i}`}
                className="flex flex-col gap-1 border-b border-neutral-700 pb-3"
              >
                <h3 className="text-base font-bold text-neutral-900">{a.name}</h3>
                <p className="text-sm text-neutral-900">
                  {a.district}, {a.organization}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="py-10 text-center text-neutral-700">
            No associates found for district “{query}”. Try a different district.
          </p>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <nav
            aria-label="Pagination"
            className="flex flex-col items-center gap-3"
          >
            <ul className="flex flex-wrap items-center justify-center gap-1.5">
              <li>
                <button
                  type="button"
                  onClick={() => setPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  aria-label="Previous page"
                  className={`${pageBtn} border-(--royal-purple)/30 text-(--royal-purple) hover:bg-(--royal-purple)/10 disabled:opacity-40 disabled:pointer-events-none`}
                >
                  <ChevronLeft size={16} />
                </button>
              </li>

              {getPageItems(currentPage, totalPages).map((item, i) =>
                item === "…" ? (
                  <li key={`gap-${i}`} className="px-1 text-neutral-600" aria-hidden="true">
                    …
                  </li>
                ) : (
                  <li key={item}>
                    <button
                      type="button"
                      onClick={() => setPage(item)}
                      aria-current={item === currentPage ? "page" : undefined}
                      className={`${pageBtn} ${item === currentPage
                        ? "bg-(--royal-purple) border-(--royal-purple) text-white"
                        : "border-(--royal-purple)/30 text-(--royal-purple) hover:bg-(--royal-purple)/10"
                        }`}
                    >
                      {item}
                    </button>
                  </li>
                )
              )}

              <li>
                <button
                  type="button"
                  onClick={() => setPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  aria-label="Next page"
                  className={`${pageBtn} border-(--royal-purple)/30 text-(--royal-purple) hover:bg-(--royal-purple)/10 disabled:opacity-40 disabled:pointer-events-none`}
                >
                  <ChevronRight size={16} />
                </button>
              </li>
            </ul>

            <p className="text-xs text-neutral-700">
              Showing {(currentPage - 1) * PAGE_SIZE + 1}–
              {Math.min(currentPage * PAGE_SIZE, filtered.length)} of{" "}
              {filtered.length}
            </p>
          </nav>
        )}
      </div>
    </section>
  );
};

export default GeneralAssociates;