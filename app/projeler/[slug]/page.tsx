import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "../../data/projects";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};


/* =====================================================
   PROJEYİ BUL
===================================================== */

async function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}


/* =====================================================
   SEO
===================================================== */

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    return {
      title: "Proje Bulunamadı | Sezer Dekorasyon",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonicalUrl = `https://sezerdekorasyon.com.tr/projeler/${project.slug}`;

  const description =
    `${project.location} bölgesinde ${project.services.join(
      ", "
    )} uygulaması. ${project.description} Sezer Dekorasyon proje detaylarını inceleyin.`;

  return {
    title: `${project.title} | Sezer Dekorasyon`,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${project.title} | Sezer Dekorasyon`,
      description,
      url: canonicalUrl,
      siteName: "Sezer Dekorasyon",
      locale: "tr_TR",
      type: "article",
    },
  };
}


/* =====================================================
   PROJE DETAY
===================================================== */

export default async function ProjectDetailPage({
  params,
}: PageProps) {

  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    notFound();
  }


  /* =====================================================
     GÖRSEL DURUMLARI
  ===================================================== */

  const hasBeforeImages =
    !!project.beforeImages && project.beforeImages.length > 0;

  const hasAfterImages =
    !!project.afterImages && project.afterImages.length > 0;

  const hasGallery =
    !!project.gallery && project.gallery.length > 0;


  return (
    <main className="min-h-screen bg-[#f5f3ef] text-[#171614]">


      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="border-b border-[#ded8ce] bg-[#f5f3ef]">

        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">

          <Link
            href="/"
            className="text-[15px] font-semibold tracking-[0.24em]"
          >
          Sezer Dekorasyon       
             </Link>

          <Link
            href="/projeler"
            className="text-sm text-[#68645d] transition-colors hover:text-[#9c8150]"
          >
            ← Tüm Projeler
          </Link>

        </div>

      </header>


      {/* =====================================================
          PROJE BAŞLIK
      ===================================================== */}

      <section className="bg-[#e9e5dd] py-24 md:py-32">

        <div className="mx-auto max-w-7xl px-6">

          <p className="text-xs uppercase tracking-[0.3em] text-[#9c8150]">
            {project.location}
          </p>

          <h1 className="mt-5 max-w-5xl text-5xl font-semibold tracking-[-0.04em] md:text-7xl">
            {project.title}
          </h1>

          <p className="mt-5 text-lg font-medium text-[#a88a58]">
            {project.services.join(" • ")}
          </p>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#68645d]">
            {project.description}
          </p>

        </div>

      </section>


      {/* =====================================================
          ANA GÖRSEL
      ===================================================== */}

      <section className="bg-[#f5f3ef] py-16 md:py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="relative aspect-video overflow-hidden rounded-2xl bg-[#171614]">

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.image}
              alt={`${project.location} ${project.services.join(
                " "
              )} - ${project.title}`}
              className="h-full w-full object-cover"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          PROJE BİLGİLERİ
      ===================================================== */}

      <section className="bg-[#f5f3ef] pb-24 md:pb-32">

        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-3">

          {/* SOL */}

          <div>

            <p className="text-xs uppercase tracking-[0.3em] text-[#9c8150]">
              Proje Bilgileri
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em]">
              Uygulama detayları.
            </h2>

          </div>


          {/* SAĞ */}

          <div className="md:col-span-2">

            <div className="grid gap-px overflow-hidden rounded-2xl border border-[#ded8ce] bg-[#ded8ce] sm:grid-cols-2">

              {/* LOKASYON */}

              <div className="bg-[#f5f3ef] p-7">

                <p className="text-xs uppercase tracking-[0.2em] text-[#9c8150]">
                  Lokasyon
                </p>

                <p className="mt-3 text-lg font-medium">
                  {project.location}
                </p>

              </div>


              {/* UYGULAMALAR */}

              <div className="bg-[#f5f3ef] p-7">

                <p className="text-xs uppercase tracking-[0.2em] text-[#9c8150]">
                  Uygulamalar
                </p>

                <p className="mt-3 text-lg font-medium">
                  {project.services.join(" • ")}
                </p>

              </div>

            </div>


            {/* AÇIKLAMA */}

            <div className="mt-8 rounded-2xl border border-[#ded8ce] bg-[#f5f3ef] p-7 md:p-9">

              <p className="text-xs uppercase tracking-[0.2em] text-[#9c8150]">
                Proje Hakkında
              </p>

              <p className="mt-5 max-w-3xl leading-relaxed text-[#68645d]">
                {project.description}
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ÖNCESİ GÖRSELLERİ
          SADECE GÖRSEL VARSA GÖSTER
      ===================================================== */}

      {hasBeforeImages && (

        <section className="bg-[#e9e5dd] py-24 md:py-32">

          <div className="mx-auto max-w-7xl px-6">

            <div className="mb-12">

              <p className="text-xs uppercase tracking-[0.3em] text-[#9c8150]">
                Uygulama Öncesi
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
                Projenin
                <br />
                <span className="text-[#a88a58]">
                  başlangıç hali.
                </span>
              </h2>

            </div>


            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

              {project.beforeImages!.map((image, index) => (

                <div
                  key={image}
                  className="group overflow-hidden rounded-2xl bg-[#171614]"
                >

                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image}
                    alt={`${project.title} uygulama öncesi görsel ${
                      index + 1
                    }`}
                    className="aspect-4/3 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                </div>

              ))}

            </div>

          </div>

        </section>

      )}


      {/* =====================================================
          SONRASI GÖRSELLERİ
          SADECE GÖRSEL VARSA GÖSTER
      ===================================================== */}

      {hasAfterImages && (

        <section className="bg-[#f5f3ef] py-24 md:py-32">

          <div className="mx-auto max-w-7xl px-6">

            <div className="mb-12">

              <p className="text-xs uppercase tracking-[0.3em] text-[#9c8150]">
                Uygulama Sonrası
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
                Projenin
                <br />
                <span className="text-[#a88a58]">
                  tamamlanmış hali.
                </span>
              </h2>

            </div>


            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

              {project.afterImages!.map((image, index) => (

                <div
                  key={image}
                  className="group overflow-hidden rounded-2xl bg-[#171614]"
                >

                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image}
                    alt={`${project.title} uygulama sonrası görsel ${
                      index + 1
                    }`}
                    className="aspect-4/3 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                </div>

              ))}

            </div>

          </div>

        </section>

      )}


      {/* =====================================================
          GALERİ
          SADECE GÖRSEL VARSA GÖSTER
      ===================================================== */}

      {hasGallery && (

        <section className="bg-[#e9e5dd] py-24 md:py-32">

          <div className="mx-auto max-w-7xl px-6">

            <div className="mb-12">

              <p className="text-xs uppercase tracking-[0.3em] text-[#9c8150]">
                Proje Görselleri
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
                Uygulamadan
                <br />
                <span className="text-[#a88a58]">
                  görüntüler.
                </span>
              </h2>

            </div>


            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

              {project.gallery.map((image, index) => (

                <div
                  key={image}
                  className="group overflow-hidden rounded-2xl bg-[#171614]"
                >

                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image}
                    alt={`${project.title} uygulama görseli ${
                      index + 1
                    }`}
                    className="aspect-4/3 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                </div>

              ))}

            </div>

          </div>

        </section>

      )}


      {/* =====================================================
          TEKLİF CTA
      ===================================================== */}

      <section className="bg-[#171614] py-24 text-white md:py-32">

        <div className="mx-auto max-w-7xl px-6">

          <p className="text-xs uppercase tracking-[0.3em] text-[#c9a96e]">
            Yeni Projeniz
          </p>

          <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.03em] md:text-6xl">
            Benzer bir proje
            <br />
            mi planlıyorsunuz?
          </h2>

          <p className="mt-6 max-w-xl leading-relaxed text-white/50">
            Yapmak istediğiniz uygulama hakkında bilgi verin.
            Projenizi değerlendirelim ve size uygun çözümü
            birlikte belirleyelim.
          </p>

          <Link
            href="/#teklif"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#c9a96e] px-8 py-4 text-sm font-semibold text-[#171614] transition-all duration-300 hover:-translate-y-1 hover:bg-[#dcc18e]"
          >
            Teklif Al
            <span>→</span>
          </Link>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="bg-[#0f0f0e] py-10 text-white">

        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 text-sm text-white/35 md:flex-row md:items-center md:justify-between">

          <p>
            © {new Date().getFullYear()} Sezer Dekorasyon.
            Tüm hakları saklıdır.
          </p>

          <Link
            href="/projeler"
            className="transition-colors hover:text-[#c9a96e]"
          >
            Tüm Projelere Dön →
          </Link>

        </div>

      </footer>

    </main>
  );
}