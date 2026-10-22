"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { projects } from "./data/projects";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const WHATSAPP_NUMBER = "905521204714";


export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    if (menuOpen) {
      document.documentElement.classList.add("menu-open");
      document.body.classList.add("menu-open");
    } else {
      document.documentElement.classList.remove("menu-open");
      document.body.classList.remove("menu-open");
    }

    return () => {
      document.documentElement.classList.remove("menu-open");
      document.body.classList.remove("menu-open");
    };
  }, [menuOpen]);

  const newLocal = "flex h-dvh w-full flex-col overflow-hidden px-8 py-8";
  return (
    <main className="min-h-screen bg-[#f5f3ef] text-[#171614]">

      {/* =====================================================
          HEADER
      ===================================================== */}

   <header className="absolute left-0 top-0 z-50 w-full bg-[#171614]/35 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6">

          <div className="flex h-24 items-center justify-between border-b border-white/15">

            {/* LOGO */}

            <Link
              href="/"
              onClick={closeMenu}
              className="relative z-70 text-[15px] font-semibold tracking-[0.24em] text-white"
            >
              </Link>
              

               
<Link
  href="/"
  onClick={closeMenu}
  aria-label="Sezer Dekorasyon ana sayfa"
  className="relative z-70 flex shrink-0 items-center"
>
  <Image
    src="/icon.png"
    alt="Sezer Dekorasyon"
    width={84}
    height={84}
    priority
    className="h-17 w-17 object-contain md:h-20 md:w-20"
  />
</Link>





            {/* DESKTOP MENU */}

            <nav className="hidden items-center gap-8 text-[14px] text-white lg:flex">

              <a
                href="#hizmetler"
                className="transition-colors duration-300 hover:text-[#d1b27a]"
              >
                Hizmetler
              </a>

              <a
                href="#projeler"
                className="transition-colors duration-300 hover:text-[#d1b27a]"
              >
                Projeler
              </a>

              <a
                href="#hakkimizda"
                className="transition-colors duration-300 hover:text-[#d1b27a]"
              >
                Hakkımızda
              </a>

              <a
                href="#kariyer"
                className="transition-colors duration-300 hover:text-[#d1b27a]"
              >
                Kariyer
              </a>

              <a
                href="#iletisim"
                className="transition-colors duration-300 hover:text-[#d1b27a]"
              >
                İletişim
              </a>

              <a
                href="#teklif"
                className="rounded-full bg-[#c9a96e] px-6 py-3 font-medium text-[#171614] transition-all duration-300 hover:bg-[#dcc18e]"
              >
                Teklif Al
              </a>

            </nav>


            {/* MOBILE HAMBURGER */}

            <button
              type="button"
              aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((value) => !value)}
              className="relative z-9999 flex h-11 w-11 items-center justify-center lg:hidden"
            >

              <span
                className={`absolute block h-0.5 w-7 bg-white transition-all duration-300 ${
                  menuOpen
                    ? "rotate-45"
                    : "-translate-y-2"
                }`}
              />

              <span
                className={`absolute block h-0.5 w-7 bg-white transition-all duration-300 ${
                  menuOpen
                    ? "opacity-0"
                    : "opacity-100"
                }`}
              />

              <span
                className={`absolute block h-0.5 w-7 bg-white transition-all duration-300 ${
                  menuOpen
                    ? "-rotate-45"
                    : "translate-y-2"
                }`}
              />

            </button>

          </div>

        </div>


        {/* =====================================================
            MOBILE MENU
        ===================================================== */}

       
<div
  id="mobile-menu"
  aria-hidden={!menuOpen}
  className={`fixed left-0 top-0 z-99999 h-dvh w-screen overflow-y-auto overscroll-contain transition-opacity duration-300 lg:hidden ${
    menuOpen
      ? "pointer-events-auto visible opacity-100"
      : "pointer-events-none invisible opacity-0"
  }`}
  style={{
    backgroundColor: "#12110f",
    isolation: "isolate",
  }}
>


          {/* CLOSE BUTTON */}

          <button
            type="button"
            onClick={closeMenu}
            aria-label="Menüyü kapat"
            className="fixed right-6 top-6 z-10000 flex h-12 w-12 items-center justify-center text-white"
          >

            <span className="absolute h-0.5 w-8 rotate-45 bg-white" />

            <span className="absolute h-0.5 w-8 -rotate-45 bg-white" />

          </button>


          {/* MENU CONTENT */}

          <div className={newLocal}>

            {/* MOBILE LOGO */}

            <div className="pr-16">

              <Link
                href="/"
                onClick={closeMenu}
                className="text-[14px] font-semibold tracking-[0.25em] text-white"
              >
               Sezer Dekorasyon
              </Link>

            </div>


            {/* MENU LINKS */}

            <nav className="flex flex-1 flex-col justify-center gap-6">

              <a
                href="#hizmetler"
                onClick={closeMenu}
                className="text-[32px] font-medium tracking-tight text-white transition-colors duration-300 hover:text-[#c9a96e]"
              >
                Hizmetler
              </a>

              <a
                href="#projeler"
                onClick={closeMenu}
                className="text-[32px] font-medium tracking-tight text-white transition-colors duration-300 hover:text-[#c9a96e]"
              >
                Projeler
              </a>

              <a
                href="#hakkimizda"
                onClick={closeMenu}
                className="text-[32px] font-medium tracking-tight text-white transition-colors duration-300 hover:text-[#c9a96e]"
              >
                Hakkımızda
              </a>

              <a
                href="#kariyer"
                onClick={closeMenu}
                className="text-[32px] font-medium tracking-tight text-white transition-colors duration-300 hover:text-[#c9a96e]"
              >
                Kariyer
              </a>

              <a
                href="#iletisim"
                onClick={closeMenu}
                className="text-[32px] font-medium tracking-tight text-white transition-colors duration-300 hover:text-[#c9a96e]"
              >
                İletişim
              </a>

              <a
                href="#teklif"
                onClick={closeMenu}
                className="mt-3 inline-flex w-fit rounded-full bg-[#c9a96e] px-7 py-4 text-[15px] font-medium text-[#171614] transition-all duration-300 hover:bg-[#dcc18e]"
              >
                Teklif Al
              </a>

            </nav>


            {/* MOBILE FOOTER */}

            <div className="border-t border-white/10 pt-6">

              <p className="text-[10px] uppercase tracking-[0.28em] text-[#c9a96e]">
                Antalya • Türkiye
              </p>

              <p className="mt-3 max-w-xs text-xs leading-relaxed text-white/35">
                Profesyonel dekorasyon ve yapı uygulamaları.
              </p>

            </div>

          </div>

        </div>

      </header>


  
      {/* =====================================================
          HERO — SEZER DEKORASYON
      ===================================================== */}

      <section
        id="anasayfa"
        className="relative isolate min-h-screen overflow-hidden bg-[#e9dfd0] text-white"
      >
        {/* GÖKYÜZÜ TAVANLI İÇ MEKÂN GÖRSELİ */}
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/sezer-hero.jpg')",
          }}
          aria-hidden="true"
        />

        {/* SOL TARAFTA METİN OKUNURLUĞU */}
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(90deg, rgba(37,29,22,0.58) 0%, rgba(37,29,22,0.38) 32%, rgba(37,29,22,0.08) 65%, rgba(37,29,22,0.02) 100%), linear-gradient(0deg, rgba(37,29,22,0.22) 0%, transparent 38%)",
          }}
          aria-hidden="true"
        />

        {/* HERO METİNLERİ */}
        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-end px-6 pb-24 pt-36 md:pb-28">
          <div className="max-w-3xl">

            {/* KONUM */}
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-10 bg-[#c9a96e]" />

              <p className="text-xs uppercase tracking-[0.35em] text-[#f0d5a2]">
                Antalya • Türkiye
              </p>
            </div>

            {/* ANA BAŞLIK */}
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-8xl">
              Tavanı 
              <br />
               {" "}
              <span className="text-[#e4c58d]">
                Gökyüzüyle
              </span>
              <br />
              Buluşturuyoruz
            </h1>

            {/* AÇIKLAMA */}
            <p className="mt-8 max-w-xl text-base leading-relaxed text-white/95 md:text-xl">
              Hayalinizle başlar, ışığınızla şekillenir.
              Yaşam alanlarınızı estetik, işlevsellik ve size özel
              çözümlerle yeniden yorumluyoruz.
            </p>

            {/* MARKA SLOGANI */}
            <p className="mt-5 max-w-xl text-xs font-medium uppercase leading-7 tracking-[0.16em] text-[#f0d5a2] sm:text-sm sm:tracking-[0.2em]">
              Sizin hayaliniz. Sizin ışığınız. Sizin gökyüzünüz.
            </p>

            {/* BUTONLAR */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#projeler"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#c9a96e] px-8 py-4 text-sm font-semibold text-[#171614] shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#dcc18e]"
              >
                Projelerimizi İncele
                <span aria-hidden="true">→</span>
              </a>

              <a
                href="#teklif"
                className="inline-flex items-center justify-center rounded-full border border-white/70 bg-black/10 px-8 py-4 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-[#e4c58d] hover:bg-white/10"
              >
                Teklif Al
              </a>
            </div>

            {/* MOBİL ALT ETİKET */}
            <div className="mt-12 flex items-center gap-3 md:hidden">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e4c58d]/70 bg-black/20 text-[10px] font-semibold tracking-[-0.08em] text-[#f0d5a2]">
                SD
              </div>

              <span className="text-[10px] uppercase tracking-[0.28em] text-white/85">
                Sezer Dekorasyon
              </span>
            </div>

          </div>
        </div>

        {/* MASAÜSTÜ ALT ETİKET */}
        <div className="absolute bottom-8 left-6 z-10 hidden items-center gap-3 md:flex">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c9a96e]/70 bg-black/20 text-[10px] font-semibold tracking-[-0.08em] text-[#f0d5a2]">
            SD
          </div>

          <span className="text-[10px] uppercase tracking-[0.28em] text-white/85">
            Sezer Dekorasyon
          </span>
        </div>
      </section>







      {/* =====================================================
          HİZMETLER
      ===================================================== */}

      <section
        id="hizmetler"
        className="bg-[#f5f3ef] py-24 md:py-32"
      >

        <div className="mx-auto max-w-7xl px-6">

          <p className="text-xs uppercase tracking-[0.3em] text-[#9c8150]">
            Hizmetlerimiz
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] text-[#171614] md:text-6xl">
            Projeniz için
            <br />
            <span className="text-[#a88a58]">
              doğru çözüm.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#68645d] md:text-lg">
            İhtiyacınıza göre planlanan, profesyonel ekip tarafından
            uygulanan dekorasyon ve yapı çözümleri.
          </p>


          <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[#dcd7ce] bg-[#dcd7ce] md:grid-cols-2 lg:grid-cols-3">

            {[
              [
                "01",
                "Alçıpan Uygulamaları",
                "İç mekânlarda estetik ve fonksiyonel alçıpan çözümleri.",
              ],
              [
                "02",
                "Clip-in Tavan",
                "Modern ve kullanışlı tavan sistemleri.",
              ],
              [
                "03",
                "Metal Tavan",
                "Ticari ve profesyonel alanlar için metal tavan uygulamaları.",
              ],
              [
                "04",
                "Bölme Duvar",
                "Ofis, mağaza ve farklı kullanım alanları için bölme duvar çözümleri.",
              ],
              [
                "05",
                "Kaynak & Metal İşleri",
                "Projeye özel metal imalat ve uygulama çözümleri.",
              ],
              [
                "06",
                "Dekorasyon Uygulamaları",
                "Mekânın ihtiyaçlarına göre özel dekorasyon uygulamaları.",
              ],
            ].map(([number, title, text]) => (

              <div
                key={number}
                className="group flex min-h-64 flex-col justify-between bg-[#faf9f6] p-8 transition-all duration-300 hover:bg-[#ebe5da] md:p-10"
              >

                <span className="text-xs tracking-[0.25em] text-[#a58a5a]">
                  {number}
                </span>

                <div>

                  <h3 className="text-2xl font-medium tracking-tight text-[#201e1a]">
                    {title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-[#777169]">
                    {text}
                  </p>

                  <div className="mt-6 h-px w-10 bg-[#c9a96e] transition-all duration-300 group-hover:w-20" />

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      
      {/* =====================================================
    PROJELER
===================================================== */}

<section
  id="projeler"
  className="bg-[#e9e5dd] py-24 md:py-32"
>

  <div className="mx-auto max-w-7xl px-6">

    {/* BAŞLIK */}

    <p className="text-xs uppercase tracking-[0.3em] text-[#9c8150]">
      Projelerimiz
    </p>

    <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] text-[#171614] md:text-6xl">
      Gerçekleştirdiğimiz
      <br />
      <span className="text-[#a88a58]">
        işler.
      </span>
    </h2>

    <p className="mt-6 max-w-2xl leading-relaxed text-[#68645d]">
      Antalya başta olmak üzere farklı mekânlarda gerçekleştirdiğimiz
      dekorasyon ve yapı uygulamalarından seçilmiş projeleri inceleyin.
    </p>


    {/* =====================================================
        ÖNE ÇIKAN PROJELER
    ===================================================== */}

    <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2">

      {projects.map((project) => (

        <Link
          key={project.slug}
          href={`/projeler/${project.slug}`}
          className="
            group
            relative
            block
            aspect-4/3
            overflow-hidden
            rounded-2xl
            bg-[#171614]
          "
        >

          {/* PROJE GÖRSELİ */}

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={`${project.location} ${project.category} - ${project.title}`}
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              transition-transform
              duration-700
              group-hover:scale-105
            "
          />


          {/* KARARTMA */}

          <div
            className="
              absolute
              inset-0
              bg-linear-to-t
              from-black/80
              via-black/20
              to-transparent
            "
          />


          {/* PROJE BİLGİSİ */}

          <div className="absolute inset-x-0 bottom-0 p-7">

            <div className="flex items-end justify-between">

              <div>

                {/* LOKASYON */}

                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.25em]
                    text-[#c9a96e]
                  "
                >
                  {project.location}
                </p>


                {/* PROJE BAŞLIĞI */}

                <h3
                  className="
                    mt-2
                    text-2xl
                    font-medium
                    tracking-tight
                    text-white
                  "
                >
                  {project.title}
                </h3>


                {/* HİZMET */}

                <p className="mt-2 text-sm text-white/60">
                  {project.category}
                </p>

              </div>


              {/* PROJE DETAY OKU */}

              <span
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  text-white
                  transition-all
                  duration-300
                  group-hover:border-[#c9a96e]
                  group-hover:bg-[#c9a96e]
                  group-hover:text-[#171614]
                "
              >
                ↗
              </span>

            </div>

          </div>

        </Link>

      ))}

    </div>


    {/* =====================================================
        TÜM PROJELER BUTONU
    ===================================================== */}

    <div className="mt-12 flex justify-center">

      <Link
        href="/projeler"
        className="
          group
          inline-flex
          items-center
          gap-4
          rounded-full
          border-2
          border-[#a88a58]
          bg-[#a88a58]
          px-8
          py-4
          text-sm
          font-semibold
          text-white
          shadow-[0_8px_25px_rgba(168,138,88,0.30)]
          transition-all
          duration-300
          ease-out
          hover:-translate-y-1
          hover:scale-[1.03]
          hover:border-[#c9a96e]
          hover:bg-[#171614]
          hover:text-[#c9a96e]
          hover:shadow-[0_14px_35px_rgba(201,169,110,0.45)]
        "
      >

        <span>
          Tüm Projeleri Gör
        </span>

        <span
          className="
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            bg-white/15
            text-lg
            text-white
            transition-all
            duration-300
            group-hover:translate-x-1
            group-hover:bg-[#c9a96e]
            group-hover:text-[#171614]
          "
        >
          →
        </span>

      </Link>

    </div>

  </div>

</section>



      {/* =====================================================
          HAKKIMIZDA
      ===================================================== */}

      <section
        id="hakkimizda"
        className="bg-[#faf9f6] py-20 md:py-28"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 md:grid-cols-2 md:gap-14 lg:gap-20">

          {/* SOL: FOTOĞRAF VE İSİM */}
<div className="mx-auto w-full max-w-xs md:mx-0 md:max-w-[320px]">     
         <div className="overflow-hidden rounded-2xl border border-[#c9a96e]/30 bg-[#e9e5dd]">
              <Image
                src="/images/sezer-hakkimizda.jpg"
                alt="Sezer Özveren - Sezer Dekorasyon"
                width={1024}
                height={1536}
                sizes="(max-width: 768px) 100vw, 40vw"
                className="h-auto max-h-105 w-full object-contain object-top"
              />
            </div>

            <div className="mt-5 border-l-2 border-[#c9a96e] pl-4">
              <h3 className="text-2xl font-semibold tracking-[0.12em] text-[#171614] md:text-3xl">
                SEZER ÖZVEREN
              </h3>
              <p className="mt-2 text-xs uppercase tracking-[0.25em] text-[#9c8150]">
                SEZER DEKORASYON
              </p>
            </div>
          </div>

          {/* SAĞ: HAKKIMIZDA METİNLERİ */}
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#9c8150]">
              HAKKIMIZDA
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] text-[#171614] md:text-5xl lg:text-6xl">
              Tecrübe,
              <br />
              <span className="text-[#a88a58]">
                ekip ve güven.
              </span>
            </h2>

            <p className="mt-7 text-base leading-8 text-[#68645d] md:text-lg">
              Sezer Dekorasyon; Antalya Bodrum Aydın İzmir başta olmak üzere Türkiye genelinde dekorasyon ve yapı uygulamalarında uzmanlaşmış profesyonel bir uygulama ekibidir.

             13 yılı aşkın saha deneyimimizi, ustalık ve titizlikle birleştirerek sıradan mekânları değer katan yaşam alanlarına dönüştürüyoruz. Her projeyi keşiften uygulamaya, son dokunuşlardan teslimata kadar özenle yönetiyor; estetik, işlevsellik ve kaliteli işçiliği bir araya getiriyoruz.   <p></p>
            <strong>Profesyonel Uygulama. Güçlü Detaylar. Kalıcı Değer.</strong>

            </p>

            <p className="mt-5 text-base leading-8 text-[#68645d] md:text-lg">
             Her projeyi stratejik planlama, kusursuz işçilik ve titiz uygulama anlayışıyla keşiften teslimata kadar yönetiyor; estetik, işlevsellik ve kaliteyi bir araya getirerek mekânlara değer katan, beklentilerin ötesine geçen sonuçlar ortaya koyuyoruz.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <span className="h-px w-12 bg-[#c9a96e]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9c8150]">
                Profesyonel Uygulama
              </span>
            </div>
          </div>

        </div>
      </section>



        
<div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
  {[
    {
      title: "Profesyonel Ekip",
      text: "Projeye uygun çözümler üreten deneyimli uygulama ekibi.",
      image: "/images/1.jpg",
      alt: "Sezer Dekorasyon profesyonel uygulama ekibi",
    },
    {
      title: "Planlı Süreç",
      text: "Keşiften teslimata kadar tüm aşamaları kontrollü şekilde yönetiyoruz.",
      image: "/images/2.jpg",
      alt: "Keşif, lazer ölçümü ve proje planlaması",
    },
    {
      title: "Şeffaf Teklif",
      text: "Projenin kapsamına göre ihtiyaçları değerlendiriyor, net ve anlaşılır teklif sunuyoruz.",
      image: "/images/3.jpg",
      alt: "Dekorasyon projesi ve teklif hazırlığı",
    },
    {
      title: "Tahmini Teslimat",
      text: "Projenin kapsamına göre yaklaşık uygulama süresini önceden planlıyoruz.",
      image: "/images/4.jpg",
      alt: "Tamamlanmış dekorasyon uygulamasından memnun aile",
    },
  ].map((item) => (
    <div
      key={item.title}
      className="group flex flex-col bg-[#171614] p-6 transition-colors duration-300 hover:bg-[#201e1a] md:p-7"
    >
      <div className="flex items-start justify-end">
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-xs text-white/40 transition-colors duration-300 group-hover:border-[#c9a96e] group-hover:text-[#c9a96e]">
          ↗
        </span>
      </div>

      <div className="mt-5">
        <h3 className="text-xl font-medium text-white">
          {item.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-white/55">
          {item.text}
        </p>
      </div>

      <div className="mt-6 overflow-hidden rounded-xl border border-white/10">
       
<Image
  src={item.image}
  alt={item.alt}
  width={600}
  height={360}
  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
  className="aspect-5/3 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
/>

      </div>

      <div className="mt-5 h-px w-8 bg-[#c9a96e] transition-all duration-300 group-hover:w-16" />
    </div>
  ))}
</div>
    



    

      {/* =====================================================
          KARİYER
      ===================================================== */}

      <section
        id="kariyer"
        className="bg-[#f5f3ef] py-24 md:py-32"
      >

        <div className="mx-auto max-w-7xl px-6">

          <div className="relative overflow-hidden rounded-3xl bg-[#e5dfd3] p-10 md:p-16">

<div
  className="
    pointer-events-none
    absolute
    right-[-5%]
    top-[-10%]
    h-[120%]
    w-[40%]
    bg-[#b59a6a]/4.5
    blur-[65px]
  "
/>            <div className="relative">

              <p className="text-xs uppercase tracking-[0.3em] text-[#9c8150]">
                Kariyer
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] text-[#171614] md:text-6xl">
                Ekibimize katılmak
                <br />
                ister misiniz?
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#68645d]">
                Antalya ve Türkiye genelindeki projelerimizde bizimle
                çalışmak isteyen profesyonelleri ekibimize bekliyoruz.
              </p>

              <a
                href="#iletisim"
                className="mt-8 inline-flex rounded-full bg-[#171614] px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-[#2c2a26]"
              >
                Ekibimize Katıl
              </a>

            </div>

          </div>

        </div>

      </section>



     {/* ================================
    TEKLİF
================================ */}

<section
  id="teklif"
  className="relative overflow-hidden bg-[#f4f1eb] py-24 md:py-32"
>
  {/* Premium dekoratif ışık */}
  <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#c9a96e]/10 blur-[100px]" />

  <div className="relative z-10 mx-auto max-w-7xl px-6">

    {/* ÜST BAŞLIK */}

    <div className="max-w-3xl">

      <p className="text-sm uppercase tracking-[0.3em] text-[#9b8050]">
        Teklif
      </p>

      <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#25231f] md:text-6xl">
        Projenizi
        <br />
        birlikte planlayalım.
      </h2>

      <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#706a60]">
        Yapmak istediğiniz uygulama hakkında birkaç bilgi
        paylaşın. Projenizi değerlendirelim ve size uygun
        çözümü birlikte belirleyelim.
      </p>

    </div>


    {/* FORM + BİLGİ ALANI */}

    <div className="mt-16 grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">


      {/* ================================
          FORM
      ================================= */}

      <div className="rounded-3xl border border-[#ded8ce] bg-[#faf8f4] p-7 shadow-[0_20px_60px_rgba(40,35,25,0.06)] md:p-10">

        <div className="mb-10">

          <p className="text-xs uppercase tracking-[0.25em] text-[#9b8050]">
            Proje Bilgileri
          </p>

          <h3 className="mt-3 text-2xl font-medium text-[#25231f]">
            Projeniz hakkında bize bilgi verin.
          </h3>

        </div>


        <form
 

 onSubmit={(e) => {
  e.preventDefault();

  const form = e.currentTarget;

  const hizmet = (
    form.elements.namedItem("hizmet") as HTMLSelectElement
  ).value;

  const lokasyon = (
    form.elements.namedItem("lokasyon") as HTMLInputElement
  ).value.trim();

  const alan = (
    form.elements.namedItem("alan") as HTMLInputElement
  ).value.trim();

  const baslangic = (
    form.elements.namedItem("baslangic") as HTMLSelectElement
  ).value;

  const aciklama = (
    form.elements.namedItem("aciklama") as HTMLTextAreaElement
  ).value.trim();

  if (!hizmet || !lokasyon || !aciklama) {
    alert(
      "Lütfen hizmet, proje lokasyonu ve proje detaylarını doldurun."
    );
    return;
  }

  const mesaj = `Merhaba Sezer Dekorasyon,

Teklif almak istiyorum.

Hizmet: ${hizmet}
Proje Lokasyonu: ${lokasyon}
Yaklaşık Alan: ${alan ? `${alan} m²` : "Belirtilmedi"}
Başlangıç Zamanı: ${baslangic || "Belirtilmedi"}

Proje Detayı:
${aciklama}

Projem hakkında bilgi almak ve teklif oluşturmak istiyorum.`;

  const whatsappUrl =
    `https://wa.me/905350826748?text=` +
    encodeURIComponent(mesaj);

  window.open(whatsappUrl, "_blank");
}}
 
  className="space-y-7"
>

          {/* HİZMET */}

          <div>

            <label
              htmlFor="hizmet"
              className="mb-3 block text-sm font-medium text-[#25231f]"
            >
              Hizmet Türü
            </label>

            <select
              id="hizmet"
              name="hizmet"
              defaultValue=""
              className="h-14 w-full appearance-none rounded-xl border border-[#ded8ce] bg-white px-4 text-sm text-[#25231f] outline-none transition focus:border-[#b59a6a] focus:ring-1 focus:ring-[#b59a6a]"
            >

              <option value="" disabled>
                Hizmet seçiniz
              </option>

              <option value="Alçıpan Uygulamaları">
                Alçıpan Uygulamaları
              </option>

              <option value="Clip-in Tavan">
          Clip-in Tavan        
      </option>

              <option value="Metal Tavan">
                Metal Tavan
              </option>

              <option value="Bölme Duvar">
                Bölme Duvar
              </option>

              <option value="Kaynak & Metal İşleri">
                Kaynak & Metal İşleri
              </option>

              <option value="Dekorasyon Uygulamaları">
                Dekorasyon Uygulamaları
              </option>

              <option value="Birden Fazla Hizmet">
                Birden Fazla Hizmet
              </option>

            </select>

          </div>


          {/* LOKASYON + ALAN */}

          <div className="grid gap-7 md:grid-cols-2">

            <div>

              <label
                htmlFor="lokasyon"
                className="mb-3 block text-sm font-medium text-[#25231f]"
              >
                Proje Lokasyonu
              </label>

              <input
                id="lokasyon"
                name="lokasyon"
                type="text"
                placeholder="Örn. Antalya / Muratpaşa"
                className="h-14 w-full rounded-xl border border-[#ded8ce] bg-white px-4 text-sm text-[#25231f] placeholder:text-[#aaa49a] outline-none transition focus:border-[#b59a6a] focus:ring-1 focus:ring-[#b59a6a]"
              />

            </div>


            <div>

              <label
                htmlFor="alan"
                className="mb-3 block text-sm font-medium text-[#25231f]"
              >
                Yaklaşık Alan
              </label>

              <div className="relative">

                <input
                  id="alan"
                  name="alan"
                  type="number"
                  min="0"
                  placeholder="Örn. 150"
                  className="h-14 w-full rounded-xl border border-[#ded8ce] bg-white px-4 pr-14 text-sm text-[#25231f] placeholder:text-[#aaa49a] outline-none transition focus:border-[#b59a6a] focus:ring-1 focus:ring-[#b59a6a]"
                />

                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm text-[#9b9489]">
                  m²
                </span>

              </div>

            </div>

          </div>


          {/* BAŞLANGIÇ */}

          <div>

            <label
              htmlFor="baslangic"
              className="mb-3 block text-sm font-medium text-[#25231f]"
            >
              Projeye Ne Zaman Başlamak İstiyorsunuz?
            </label>

            <select
              id="baslangic"
              name="baslangic"
              defaultValue=""
              className="h-14 w-full appearance-none rounded-xl border border-[#ded8ce] bg-white px-4 text-sm text-[#25231f] outline-none transition focus:border-[#b59a6a] focus:ring-1 focus:ring-[#b59a6a]"
            >

              <option value="" disabled>
                Başlangıç zamanı seçiniz
              </option>

              <option value="En kısa sürede">
                En kısa sürede
              </option>

              <option value="1-2 hafta içinde">
                1-2 hafta içinde
              </option>

              <option value="1 ay içinde">
                1 ay içinde
              </option>

              <option value="Daha sonra">
                Daha sonra
              </option>

            </select>

          </div>


          {/* AÇIKLAMA */}

          <div>

            <label
              htmlFor="aciklama"
              className="mb-3 block text-sm font-medium text-[#25231f]"
            >
              Projeniz Hakkında
            </label>

            <textarea
              id="aciklama"
              name="aciklama"
              rows={5}
              placeholder="Yapılacak uygulamayı, mekânı veya özel isteklerinizi kısaca anlatabilirsiniz."
              className="w-full resize-none rounded-xl border border-[#ded8ce] bg-white px-4 py-4 text-sm leading-7 text-[#25231f] placeholder:text-[#aaa49a] outline-none transition focus:border-[#b59a6a] focus:ring-1 focus:ring-[#b59a6a]"
            />

          </div>


          {/* GÖNDER */}

          <button
            type="submit"
            className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#171614] px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-[#292721] md:w-auto"
          >

            Teklif Talep Et

            <span className="text-[#c9a96e] transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>

          </button>

        </form>

      </div>


      {/* ================================
          SAĞ BİLGİ PANELİ
      ================================= */}

      <div className="flex flex-col gap-5">


        {/* TAHMİNİ FİYAT */}

        <div className="rounded-3xl bg-[#171614] p-8 text-white md:p-10">

          <p className="text-xs uppercase tracking-[0.25em] text-[#c9a96e]">
            Tahmini Fiyat
          </p>

          <h3 className="mt-6 text-3xl font-medium tracking-tight md:text-4xl">
            Keşif sonrası
            <br />
            belirlenir.
          </h3>

          <p className="mt-5 text-sm leading-7 text-white/45">
            Projenin kapsamı, alanı, kullanılacak malzemeler
            ve uygulama detayları değerlendirildikten sonra
            size uygun teklif hazırlanır.
          </p>

          <div className="mt-8 h-px w-full bg-white/10" />

          <p className="mt-5 text-xs uppercase tracking-[0.2em] text-white/35">
            Şeffaf teklif
          </p>

        </div>


        {/* TESLİMAT */}

        <div className="rounded-3xl border border-[#ded8ce] bg-[#faf8f4] p-8 md:p-10">

          <p className="text-xs uppercase tracking-[0.25em] text-[#9b8050]">
            Tahmini Teslimat
          </p>

          <h3 className="mt-6 text-3xl font-medium tracking-tight text-[#25231f] md:text-4xl">
            Projeye göre
            <br />
            planlanır.
          </h3>

          <p className="mt-5 text-sm leading-7 text-[#706a60]">
            Uygulamanın büyüklüğüne ve kapsamına göre
            tahmini çalışma süresini belirliyor ve süreç
            başlamadan önce sizinle paylaşıyoruz.
          </p>

          <div className="mt-8 flex items-center gap-3">

            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ded8ce] text-[#9b8050]">
              ✓
            </span>

            <span className="text-sm text-[#706a60]">
              Planlı çalışma süreci
            </span>

          </div>

        </div>


        {/* KISA GÜVEN ALANI */}

        <div className="rounded-3xl border border-[#ded8ce] bg-white p-8">

          <div className="flex items-start gap-4">

            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f4f1eb] text-[#9b8050]">
              ✓
            </span>

            <div>

              <h4 className="font-medium text-[#25231f]">
                Önce keşif, sonra teklif.
              </h4>

              <p className="mt-2 text-sm leading-6 text-[#706a60]">
                Projenizi doğru anlayarak ihtiyacınıza
                uygun çözüm sunuyoruz.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer
        id="iletisim"
        className="bg-[#0f0f0e] py-16 text-white"
      >

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-12 md:grid-cols-2">

            <div>

              <h2 className="text-xl font-semibold tracking-[0.2em]">
Sezer Dekorasyon
</h2>
              <p className="mt-5 max-w-md leading-relaxed text-white/40">
                Antalya başta olmak üzere Türkiye genelinde
                profesyonel dekorasyon ve yapı uygulamaları.
              </p>

            </div>


            <div className="md:text-right">

              <p className="text-xs uppercase tracking-[0.25em] text-[#c9a96e]">
                İletişim
              </p>

              <p className="mt-4 text-white/50">
                Antalya • Türkiye
              </p>

              <a
                href="#teklif"
                className="mt-5 inline-block text-sm text-white transition-colors hover:text-[#c9a96e]"
              >
                Teklif almak için iletişime geçin →
              </a>

            </div>

          </div>


          <div className="mt-14 border-t border-white/10 pt-8 text-xs text-white/25">

            © {new Date().getFullYear()} Sezer Dekorasyon.

            Tüm hakları saklıdır.

          </div>

        </div>

      </footer>

    </main>
  );
}