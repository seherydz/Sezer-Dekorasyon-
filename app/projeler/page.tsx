import Link from "next/link";
import { projects } from "../data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#f5f3ef] text-[#171614]">

      {/* HEADER */}
      <header className="border-b border-[#ded8ce] bg-[#f5f3ef]">
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">

          <Link
            href="/"
            className="text-[15px] font-semibold tracking-[0.24em]"
          >
             Sezer Dekorasyon
          </Link>

          <Link
            href="/"
            className="text-sm text-[#68645d] transition-colors hover:text-[#9c8150]"
          >
            ← Ana Sayfa
          </Link>

        </div>
      </header>


      {/* BAŞLIK */}
      <section className="bg-[#e9e5dd] py-24 md:py-32">

        <div className="mx-auto max-w-7xl px-6">

          <p className="text-xs uppercase tracking-[0.3em] text-[#9c8150]">
            Projelerimiz
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.04em] md:text-7xl">
            Gerçekleştirdiğimiz
            <br />
            <span className="text-[#a88a58]">
              çalışmalar.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#68645d]">
            Antalya başta olmak üzere farklı mekânlarda
            gerçekleştirdiğimiz dekorasyon ve yapı
            uygulamalarından seçilmiş projeler.
          </p>

        </div>

      </section>


      {/* PROJELER */}
      <section className="bg-[#f5f3ef] py-24 md:py-32">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

            {projects.map((project) => (

              <Link
                key={project.slug}
                href={`/projeler/${project.slug}`}
                className="group relative block aspect-4/3 overflow-hidden rounded-2xl bg-[#171614]"
              >

                {/* PROJE GÖRSELİ */}

                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />


                {/* KARARTMA */}

                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />


                {/* BİLGİ */}

                <div className="absolute inset-x-0 bottom-0 p-7">

                  <div className="flex items-end justify-between">

                    <div>

                      <p className="text-[10px] uppercase tracking-[0.25em] text-[#c9a96e]">
                        {project.location}
                      </p>

                      <h2 className="mt-2 text-2xl font-medium text-white">
                        {project.title}
                      </h2>

                      <p className="mt-3 max-w-md text-sm text-white/65">
                        {project.services.join(" • ")}
                      </p>

                    </div>


                    {/* OK */}

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 group-hover:border-[#c9a96e] group-hover:text-[#c9a96e]">
                      ↗
                    </span>

                  </div>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>


      {/* TEKLİF CTA */}
      <section className="bg-[#171614] py-24 text-white md:py-28">

        <div className="mx-auto max-w-7xl px-6">

          <p className="text-xs uppercase tracking-[0.3em] text-[#c9a96e]">
            Yeni Projeniz
          </p>

          <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.03em] md:text-6xl">
            Projenizi
            <br />
            birlikte planlayalım.
          </h2>

          <p className="mt-6 max-w-xl leading-relaxed text-white/50">
            Yapmak istediğiniz uygulama hakkında bilgi verin.
            Projenizi değerlendirelim ve size uygun çözümü
            birlikte belirleyelim.
          </p>

          <Link
            href="/#teklif"
            className="mt-8 inline-flex rounded-full bg-[#c9a96e] px-8 py-4 text-sm font-medium text-[#171614] transition-all duration-300 hover:bg-[#dcc18e]"
          >
            Teklif Al
          </Link>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="bg-[#0f0f0e] py-10 text-white">

        <div className="mx-auto max-w-7xl px-6">

          <div className="flex flex-col gap-4 text-sm text-white/35 md:flex-row md:items-center md:justify-between">

            <p>
              © {new Date().getFullYear()} Sezer Dekorasyon.
              Tüm hakları saklıdır.
            </p>

            <Link
              href="/"
              className="transition-colors hover:text-[#c9a96e]"
            >
              Ana Sayfaya Dön →
            </Link>

          </div>

        </div>

      </footer>

    </main>
  );
}