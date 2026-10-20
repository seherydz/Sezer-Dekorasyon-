export type Project = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
  slug: string;
  title: string;
  description: string;
  location: string;
  services: string[];

  /* Ana kapak görseli */
  image: string;

  /* Proje galeri görselleri */
  gallery: string[];

  /* Öncesi görselleri - opsiyonel */
  beforeImages?: string[];

  /* Sonrası görselleri - opsiyonel */
  afterImages?: string[];

  /* Ana sayfada öne çıkan proje */
  featured: boolean;
};


export const projects: Project[] = [

  {
    slug: "antalya-proje-01",

   title: "Asma Tavan ve LED Aydınlatma",

    description:
      "Antalya'da gerçekleştirilen alçıpan uygulaması kapsamında, mekânın mevcut yapısına uygun çözümler uygulanarak modern ve kullanışlı bir iç mekân oluşturuldu.",

    location: "Antalya",

    services: [
      "Alçıpan Uygulamaları",
    ],

    image:
      "/projects/proje-01/cover.jpg",

    gallery: [

    ],

    /*
      Öncesi / sonrası varsa buraya ekleyeceğiz.

      Şimdilik örnek olarak boş bırakıyoruz.
      Gerçek görselleri eklediğimizde yolları değiştireceğiz.
    */

    beforeImages: [
  "/projects/proje-01/before-1.jpg",
  "/projects/proje-01/before-2.jpg",
],

afterImages: [
  "/projects/proje-01/after-1.jpg",
  "/projects/proje-01/after-2.jpg",
],

    featured: true,
  },


  {
    slug: "antalya-proje-02",

    title: "Antalya Projesi 02",

    description:
      "Antalya'da gerçekleştirilen clip-in tavan sistemi uygulaması ile mekâna modern, düzenli ve işlevsel bir tavan çözümü kazandırıldı.",

    location: "Antalya",

    services: [
      "Clip-in Tavan Sistemleri",
    ],

    image:
      "/projects/proje-02/cover.jpg",

    gallery: [],

    /*
      Bu projede öncesi / sonrası olmak zorunda değil.
      Alanı kullanmayacağımız için kaldırabiliriz.
    */

    featured: true,
  },


  {
    slug: "antalya-proje-03",

    title: "Antalya Projesi 03",

    description:
      "Antalya'da gerçekleştirilen bölme duvar uygulaması ile farklı kullanım alanları için işlevsel ve estetik bir mekân düzenlemesi gerçekleştirildi.",

    location: "Antalya",

    services: [
      "Bölme Duvar Sistemleri",
    ],

    image:
      "/projects/proje-03/cover.jpg",

    gallery: [
      "/projects/proje-03/1.jpg",
      "/projects/proje-03/2.jpg",
      "/projects/proje-03/3.jpg",
    ],

    featured: true,
  },


  {
    slug: "antalya-proje-04",

    title: "Antalya Projesi 04",

    description:
      "Antalya'da gerçekleştirilen metal tavan sistemi uygulaması ile ticari ve profesyonel kullanıma uygun modern bir tavan çözümü uygulandı.",

    location: "Antalya",

    services: [
      "Metal Tavan Sistemleri",
    ],

    image:
      "/projects/proje-04/cover.jpg",

    gallery: [
      "/projects/proje-04/1.jpg",
      "/projects/proje-04/2.jpg",
      "/projects/proje-04/3.jpg",
    ],

    featured: true,
  },

];