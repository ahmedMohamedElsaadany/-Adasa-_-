import { NavLink } from "react-router-dom";
// Icon
import { FaSearch } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa'; 
import { FaUsers } from 'react-icons/fa';
import { FaNewspaper } from "react-icons/fa6";
import { FaPenNib } from 'react-icons/fa';
import { BiSolidBookOpen } from "react-icons/bi";
import { FaBullseye } from 'react-icons/fa';
import { FaBolt } from 'react-icons/fa';
import { FaHandshake } from 'react-icons/fa';
import { FaArrowsRotate } from 'react-icons/fa6';



function About({ posts }: any) {
  return (
    <>
      <main className="grow">
        <div className="bg-[#0a0a0a]">
          <section className="relative py-24 overflow-hidden">
            <div className="absolute inset-0 bg-[#0a0a0a]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]" />
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/20 rounded-full blur-[100px]" />
              <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px]" />
            </div>
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="inline-flex items-center gap-2 mb-8 section-label">
                <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-400"></span>
                </span>

                <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-500 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500"></span>
                </span>

                <span className="text-sm font-medium text-neutral-300">
                   من نحن
                </span>

            </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                مهمتنا هي{" "}
                <span className="gradient-text">الإعلام والإلهام</span>
              </h1>
              <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed mb-12">
                مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار
                المحترفين ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة
                المعرفة ومساعدة المصورين على تنمية مهاراتهم من خلال محتوى عالي
                الجودة.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                <div className="glass-card p-6 flex flex-col items-center text-center">
                  <FaUsers className="text-2xl text-orange-500 mb-2 block" />
                  <div className="text-3xl font-bold gradient-text mb-1">
                    +2مليون
                  </div>
                  <div className="text-sm text-neutral-500">قارئ شهرياً</div>
                </div>
                <div className="glass-card p-6 flex flex-col items-center text-center">
                  <FaNewspaper className="text-2xl text-orange-500 mb-2 block" />
                  <div className="text-3xl font-bold gradient-text mb-1">
                    +500
                  </div>
                  <div className="text-sm text-neutral-500">مقالة منشورة</div>
                </div>
                <div className="glass-card p-6 flex flex-col items-center text-center">
                  <FaPenNib className="text-2xl text-orange-500 mb-2 block" />
                  <div className="text-3xl font-bold gradient-text mb-1">
                    +50
                  </div>
                  <div className="text-sm text-neutral-500">كاتب خبير</div>
                </div>
                <div className="glass-card p-6 flex flex-col items-center text-center">
                  <BiSolidBookOpen className="text-2xl text-orange-500 mb-2 block"/>

                  <div className="text-3xl font-bold gradient-text mb-1">
                    +15
                  </div>
                  <div className="text-sm text-neutral-500">تصنيف</div>
                </div>
              </div>
            </div>
          </section>
          <section className="py-20 bg-[#111111] border-y border-[#262626]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                  <span className="w-1.5 h-8 bg-linear-to-b from-orange-500 to-yellow-500 rounded-full" />
                  قيمنا
                  <span className="w-1.5 h-8 bg-linear-to-b from-yellow-500 to-orange-500 rounded-full" />
                </h2>
                <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                  المبادئ التي توجه كل ما نقوم بإنشائه
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="group p-6 bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-300 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  <div className="relative">
                    <FaBullseye className="text-4xl text-orange-500 mb-4 block mx-auto" />
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                      الجودة أولاً
                    </h3>
                    <p className="text-neutral-400 text-sm">
                      محتوى مدروس ومكتوب بخبرة
                    </p>
                  </div>
                </div>
                <div className="group p-6 bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-300 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-br from-orange-600 to-orange-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  <div className="relative">
                    <FaBolt className="text-4xl text-orange-500 mb-4 block mx-auto" />
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                      تركيز عملي
                    </h3>
                    <p className="text-neutral-400 text-sm">
                      أمثلة واقعية يمكنك تطبيقها اليوم
                    </p>
                  </div>
                </div>
                <div className="group p-6 bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-300 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  <div className="relative">
                    <FaHandshake className="text-4xl text-orange-500 mb-4 block mx-auto" />
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                      المجتمع
                    </h3>
                    <p className="text-neutral-400 text-sm">
                      تعلم مع آلاف المصورين
                    </p>
                  </div>
                </div>
                <div className="group p-6 bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-300 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-br from-orange-600 to-orange-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  <div className="relative">
                    <FaArrowsRotate className="text-4xl text-orange-500 mb-4 block mx-auto" />
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                      دائماً محدث
                    </h3>
                    <p className="text-neutral-400 text-sm">
                      أحدث الاتجاهات وأفضل الممارسات
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="py-20 bg-[#0a0a0a]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <span className="section-label mb-4">فريقنا</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  تعرف على كتابنا
                </h2>
                <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                  فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم
                  مع المجتمع.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post : any) => (
                  <div className="group bg-[#161616] rounded-2xl p-6 text-center border border-[#262626] hover:border-orange-500/30 transition-all duration-300">
                    <div className="relative inline-block mb-4">
                      <img
                        alt={post.author.name}
                        className="w-24 h-24 rounded-full object-cover ring-4 ring-[#262626] group-hover:ring-orange-500/30 transition-all"
                        src={post.author.avatar}
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-orange-500 rounded-full border-2 border-[#161616] flex items-center justify-center">
                        <FaCheck className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <h3 className="font-bold text-white text-lg">
                      {post.author.name}
                    </h3>
                    <p className="text-orange-500 text-sm font-medium mb-4">
                      {post.author.role}
                    </p>
                    <div className="flex justify-center gap-3">
                      <NavLink
                        to="#"
                        className="w-9 h-9 bg-[#262626] rounded-lg flex items-center justify-center text-neutral-500 hover:bg-orange-500 hover:text-white transition-colors"
                      >
                        <FaXTwitter className="w-4 h-4" />
                      </NavLink>
                      <NavLink
                        to="#"
                        className="w-9 h-9 bg-[#262626] rounded-lg flex items-center justify-center text-neutral-500 hover:bg-neutral-700 hover:text-white transition-colors"
                      >
                       <FaGithub className="w-4 h-4" />
                      </NavLink>
                      <NavLink
                        to="#"
                        className="w-9 h-9 bg-[#262626] rounded-lg flex items-center justify-center text-neutral-500 hover:bg-blue-600 hover:text-white transition-colors"
                      >
                        <FaLinkedinIn className="w-4 h-4" />
                      </NavLink>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="py-20 bg-linear-to-br from-orange-600 via-orange-500 to-yellow-500 relative overflow-hidden">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-10 right-10 w-64 h-64 bg-white/20 rounded-full blur-[100px]" />
              <div className="absolute bottom-10 left-10 w-48 h-48 bg-white/20 rounded-full blur-[80px]" />
            </div>
            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                لديك أسئلة؟ دعنا نتحدث!
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد
                المساهمة، أو تريد فقط إلقاء التحية، لا تتردد في التواصل.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <NavLink
                  to="mailto:hello@adasah.com"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0a0a0a] text-white font-semibold rounded-xl hover:bg-neutral-900 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <FaSearch className="w-5 h-5" />
                  تواصل معنا
                </NavLink>
                <NavLink
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white hover:text-[#0a0a0a] transition-all duration-300"
                  to="/blog"
                  data-discover="true"
                >
                  تصفح المقالات
                </NavLink>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
export default About;
