import { useEffect, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import { IoClose } from "react-icons/io5";

// React-Icon
import { FaNewspaper } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { HiViewGrid } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

function Blog({ posts }: { posts: any[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const [searchQuery, setSearchQuery] = useState("");
  const categories = [
    "جميع المقالات",
    "إضاءة",
    "بورتريه",
    "مناظر طبيعية",
    "تقنيات",
    "معدات",
  ];
  const [selectedCategory, setSelectedCategory] = useState("جميع المقالات");
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("category");
  useEffect(() => {
    setSelectedCategory(categoryFromUrl || "جميع المقالات");
    setCurrentPage(1);
  }, [categoryFromUrl]);
  // const filteredPosts = selectedCategory === "جميع المقالات" ? posts : posts.filter( (post: any) => post.category === selectedCategory );
  const filteredPosts = posts.filter((post: any) => {
    const matchesCategory =
      selectedCategory === "جميع المقالات" ||
      post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(
    startIndex,
    startIndex + postsPerPage,
  );
  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("جميع المقالات");
    setSearchParams({});
    setCurrentPage(1);
  };
  const isFiltered = searchQuery !== "" || selectedCategory !== "جميع المقالات";
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  return (
    <main>
      <div className="min-h-screen bg-[#0a0a0a]">
        <div className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[#0a0a0a]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-size:60px_60px" />
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="section-label inline-flex items-center gap-2 mb-6">
              <FaNewspaper className="w-4 h-4" />
              مدونتنا
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              استكشف <span className="gradient-text">مقالاتنا</span>
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
            </p>
          </div>
        </div>
        <div className="sticky top-20 z-40 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#262626]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="relative w-full md:w-80">
                <input
                  placeholder="ابحث في المقالات..."
                  className="input-dark w-full px-5 py-3 pr-12"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                />
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setCurrentPage(1);
                      if (category === "جميع المقالات") {
                        setSearchParams({});
                      } else {
                        setSearchParams({ category: category });
                      }
                    }}
                    className={
                      selectedCategory === category
                        ? "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 bg-linear-to-r from-orange-500 to-orange-600 text-white"
                        : "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"
                    }
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div
          id="article"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-36.5"
        >
          <div className="mb-8 flex items-center justify-between">
            <p className="text-neutral-400">
              {" "}
              عرض{" "}
              <span className="font-bold text-white">
                {filteredPosts.length}
              </span>{" "}
              مقالات
            </p>
            <div className="flex items-center gap-2">
              <div className="flex items-center bg-[#161616] border border-[#262626] rounded-xl p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition-all duration-300 ${viewMode === "grid" ? "bg-orange-500 text-white" : "text-neutral-400 hover:text-white"}`}
                  title="عرض شبكي"
                >
                  <HiViewGrid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg transition-all duration-300 ${viewMode === "list" ? "bg-orange-500 text-white" : "text-neutral-400 hover:text-white"}`}
                  title="عرض قائمة"
                >
                  <FaBars className="w-5 h-5" />
                </button>
              </div>
              {isFiltered && (
                <button
                  onClick={handleClearFilters}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#161616] text-neutral-400 border border-[#262626] hover:text-white hover:border-orange-500/50 transition-all"
                >
                  <IoClose className="w-4 h-4 text-orange-500" />
                  مسح الفلاتر
                </button>
              )}
            </div>
          </div>
          {/* article */}
          <div
            className={ viewMode === "grid" ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8" : "flex flex-col gap-6" } >
            {currentPosts.length > 0 ? (
              currentPosts.map((post: any) => (
                <article
                  key={post.id}
                  className="group card overflow-hidden bg-[#161616]/40 border border-[#262626] rounded-2xl hover:border-orange-500/50 transition-all duration-300"
                >
                  <NavLink
                    className={`block w-full ${viewMode === "list" ? "flex flex-col md:flex-row items-stretch" : "flex flex-col"}`}
                    to={`/blog/${post.slug}`}
                  >
                    {/* قسم الصورة */}
                    <div
                      className={`relative overflow-hidden shrink-0 ${viewMode === "list" ? "w-full md:w-72 lg:w-80 h-52 md:h-auto" : "w-full h-52"}`}
                    >
                      <img
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        src={post.image}
                      />
                      <div className="absolute inset-0 bg-gradient-to-l from-[#161616]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* التصنيف في وضع الشبكة فقط */}
                      {viewMode === "grid" && (
                        <span className="absolute top-4 right-4 px-3 py-1 bg-orange-500/10 text-orange-500 backdrop-blur-sm text-xs font-semibold rounded-full border border-orange-500/20">
                          {post.category}
                        </span>
                      )}
                    </div>

                    {/* قسم المحتوى */}
                    <div className="p-6 w-full flex flex-col justify-between flex-1">
                      <div>
                        {/* التصنيف في وضع القائمة فقط */}
                        {viewMode === "list" && (
                          <div className="mb-3">
                            <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full border border-orange-500/20">
                              {post.category}
                            </span>
                          </div>
                        )}

                        <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
                          <span className="flex items-center gap-1">
                            <FaRegClock className="w-4 h-4" />
                            {post.readTime}
                          </span>
                          <span className="w-1 h-1 bg-neutral-600 rounded-full" />
                          <span>{post.date}</span>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight">
                          {post.title}
                        </h3>

                        <p className="text-neutral-400 mb-5 line-clamp-2 text-sm leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-[#262626] mt-auto">
                        <div className="flex items-center gap-3">
                          <img
                            alt={post.author?.name}
                            className="w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]"
                            src={post.author?.avatar}
                          />
                          <div>
                            <p className="text-sm font-medium text-white">
                              {post.author?.name}
                            </p>
                            <p className="text-xs text-neutral-500">
                              {post.author?.role}
                            </p>
                          </div>
                        </div>

                        <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                          <FaChevronRight className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors duration-300 rotate-180" />
                        </div>
                      </div>
                    </div>
                  </NavLink>
                </article>
              ))
            ) : (
              <div className="col-span-full text-center py-16 text-neutral-500 bg-[#161616]/30 rounded-2xl border border-[#262626]">
                لا توجد مقالات مطابقة لبحثك أو اختيارك.
              </div>
            )}
          </div>

          {/* pages */}
          <div className="flex justify-center items-center gap-2 mt-12">
            <button
              onClick={() => setCurrentPage((prev) => prev - 1)}
              disabled={currentPage === 1}
              className="p-3 rounded-xl border transition-all duration-300 bg-[#161616] border-[#262626] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FaChevronLeft className="w-5 h-5 rotate-180" />
            </button>
            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={
                      currentPage === page
                        ? "min-w-11 h-11 rounded-xl text-sm font-medium transition-all duration-300 bg-linear-to-r from-orange-500 to-orange-600 text-white"
                        : "min-w-11 h-11 rounded-xl text-sm font-medium transition-all duration-300 bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white"
                    }
                  >
                    {page}
                  </button>
                ),
              )}
            </div>
            <button
              onClick={() => setCurrentPage((prev) => prev + 1)}
              disabled={currentPage === totalPages}
              className="p-3 rounded-xl border transition-all duration-300 bg-[#161616] border-[#262626] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FaChevronRight className="w-5 h-5 rotate-180" />
            </button>
          </div>

          <p className="text-center text-neutral-500 mt-4 text-sm">
            صفحة {currentPage} من {totalPages}
          </p>
        </div>
      </div>
    </main>
  );
}

export default Blog;
