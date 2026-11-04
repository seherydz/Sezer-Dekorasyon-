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
  slug: "antalya-asma-tavan-led-aydinlatma",

  title: "Asma Tavan ve LED Aydınlatma",

  description:

  "Antalya'da gerçekleştirilen asma tavan ve LED aydınlatma projesinde, iç mekânın mimari yapısına uygun modern bir tavan tasarımı oluşturuldu. Uygulama kapsamında farklı kotlarda geometrik formlara sahip kademeli alçıpan asma tavan sistemi hazırlandı. Tavan tasarımına entegre edilen gizli LED aydınlatma kanalları ve çevresel ışık bantlarıyla dengeli bir aydınlatma görünümü elde edildi. Gömme spot aydınlatmalarla desteklenen tasarımda, lineer havalandırma kanalları için gerekli boşluklar da dikkate alındı. Uygulama sürecinde metal taşıyıcı tavan konstrüksiyonu oluşturuldu, alçıpan levhaların montajı gerçekleştirildi ve yüzeyler son kat uygulamasına hazırlandı. Tamamlanan Antalya asma tavan uygulamasıyla tavan geometrisi, LED aydınlatma detayları ve mekânın mimarisi arasında bütünlüklü bir görünüm sağlandı.",
  location: "Antalya",

  services: [
    "Asma Tavan ve LED Aydınlatma",
  ],

  image:
    "/projects/proje-01/cover.jpg",

  gallery: [

  ],



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
    slug: "ofis-bolme-duvar-tavan-uygulamasi",

    title: "Ofis Bölme Duvar ve Tavan Uygulaması",

    description:

  "İstanbul'da gerçekleştirilen ofis bölme duvar ve tavan uygulamasında, çalışma alanının ihtiyaçlarına uygun işlevsel bir mekân düzenlemesi yapıldı. Ofis içerisinde farklı kullanım alanları oluşturmak amacıyla bölme duvar sistemleri uygulandı ve tavan düzenlemeleriyle mekânın genel görünümünün bütünlüğü hedeflendi. Uygulama kapsamında çalışma alanının kullanım ihtiyaçları dikkate alınarak daha düzenli ve verimli bir iç mekân oluşturulmasına yönelik çözümler geliştirildi.",
    location: "İstanbul",

    services: ["Bölme Duvar Sistemleri", "Tavan Uygulamaları"],

    image:
      "/projects/proje-02/coverbd.jpg",

gallery: [
  
],
    
beforeImages: [
  "/projects/proje-02/bölmeö duvar.jpeg",  
],
afterImages: [
  "/projects/proje-02/bölmeduvarS.JPG",
],

    featured: true,
  },


 
{
  slug: "antalya-bolme-duvar-alcipan-uygulamasi",

  title: "Alçıpan Bölme Duvar ve İç Mekân Düzenlemesi",

 description:
  "Antalya'da gerçekleştirilen alçıpan bölme duvar ve iç mekân düzenleme projesinde, mevcut alanın kullanım ihtiyaçlarına uygun şekilde yeniden düzenlenmesi hedeflendi. Uygulama kapsamında galvanizli metal profiller kullanılarak bölme duvar taşıyıcı karkası oluşturuldu. Metal profiller arasına mineral yün yalıtım malzemesi yerleştirildi ve alçıpan levhaların montajı gerçekleştirildi. Duvar yüzeylerinde levha birleşim noktalarına derz uygulaması yapıldı, yüzey düzeltme çalışmaları tamamlanarak boya ve son kat işlemlerine uygun bir zemin hazırlandı. Mevcut duvar ve tavan yüzeylerinin düzenlenmesiyle birlikte yeni bölme duvar sistemi mekânın genel yapısına entegre edildi. Tamamlanan Antalya alçıpan bölme duvar uygulamasıyla daha düzenli ve işlevsel bir iç mekân oluşturuldu.",

  location: "Antalya",

  services: [
    "Alçıpan Uygulamaları",
    "Metal Karkas Sistemleri",
    "Bölme Duvar Sistemleri",
    "Mineral Yün Yalıtım Uygulaması",
    "Derz ve Yüzey Düzeltme İşleri",
  ],

  image: "/projects/proje-03/alcıpananasayfa.jpg",

  gallery: [
    "/projects/proje-03/alcıpan2ö.jpg",
    "/projects/proje-03/alçıpan2s.jpg",
  ],

  beforeImages: [
    "/projects/proje-03/alcıpan2ö.jpg",
    "/projects/proje-03/alçıpanö1.jpg",
  ],

  afterImages: [
    "/projects/proje-03/alcıpan1s.jpg",
    "/projects/proje-03/alçıpan2s.jpg",
  ],

  featured: true,
},



 
{
  slug: "bodrum-tv-unitesi-duvar-dekorasyonu-tavan-aydinlatma",

  title: "TV Ünitesi ve Dekoratif Duvar Tasarımı",

 description:
  "Bodrum'da gerçekleştirilen TV ünitesi ve dekoratif duvar tasarımı projesinde, salonun mimari yapısına uygun modern ve bütünlüklü bir iç mekân tasarımı oluşturuldu. TV ünitesinin arka bölümünde mermer görünümlü dekoratif duvar kaplaması kullanılarak mekâna zarif bir görünüm kazandırıldı. Duvarın iki yanında konumlandırılan ahşap görünümlü dikey dekoratif panellerle tasarıma derinlik ve doğal bir karakter eklendi. TV ünitesinin alt bölümünde uygulanan sabit dolapla estetik ve işlevsellik bir araya getirildi. Dekoratif duvar yüzeylerinde ve mobilya detaylarında kullanılan gizli LED aydınlatmalarla sıcak bir ambiyans oluşturuldu. Tavan bölümünde ise kademeli alçıpan asma tavan, gizli LED ışık bantları ve gömme spot aydınlatma uygulamaları gerçekleştirildi. Böylece TV ünitesi, dekoratif duvar panelleri ve tavan aydınlatmaları arasında görsel bütünlük sağlanarak modern bir yaşam alanı ortaya çıkarıldı.", 

  location: "Bodrum",

  services: [
    "TV Ünitesi ve Duvar Dekorasyonu",
    "Dekoratif Duvar Paneli Uygulamaları",
    "Mermer Görünümlü Duvar Kaplaması",
    "Alçıpan Asma Tavan Sistemleri",
    "Gizli LED Aydınlatma",
    "Gömme Spot Aydınlatma",
    "Dekoratif İç Mekân Uygulamaları",
  ],

  // Ana sayfa proje kartı ve kapak görseli
  image: "/projects/proje-04/tvanasayfa.jpg",

  // Proje detay sayfası galeri görselleri
  gallery: [
    "/projects/proje-04/tv1ö.jpg",
    "/projects/proje-04/tv2ö.jpg",
    "/projects/proje-04/tvs1.jpg",
    "/projects/proje-04/tvs2s.jpg",
  ],

  // Uygulama öncesi görseller
  beforeImages: [
    "/projects/proje-04/tv1ö.jpg",
    "/projects/proje-04/tv2ö.jpg",
  ],

  // Uygulama sonrası görseller
  afterImages: [
    "/projects/proje-04/tvs1.jpg",
    "/projects/proje-04/tvs2s.jpg",
  ],

  featured: true,
},

];