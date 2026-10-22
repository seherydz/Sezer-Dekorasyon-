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
    "Antalya'da gerçekleştirilen projede, iç mekâna modern ve bütünlüklü bir görünüm kazandırmak amacıyla kademeli alçıpan asma tavan uygulaması yapıldı. Tavan yüzeylerinde farklı kotlarda geometrik formlar oluşturularak mekânın mimari yapısına uygun bir tasarım elde edildi. Gizli LED aydınlatma kanalları ve çevresel ışık bantlarıyla sıcak, dengeli ve homojen bir aydınlatma etkisi sağlandı. Tavana entegre edilen gömme spot aydınlatmalarla ışık dağılımı desteklenirken, lineer havalandırma kanalları için gerekli boşluklar da tasarıma dâhil edildi. Uygulama sürecinde metal taşıyıcı tavan konstrüksiyonu oluşturuldu, alçıpan levhalar monte edildi ve yüzeyler son kat uygulamaya hazırlandı. Tamamlanan uygulamayla tavan tasarımı, aydınlatma detayları ve mekânın genel mimarisi arasında estetik bir uyum sağlandı.",

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
      
       "istanbul'da gerçekleştirilen ofis uygulamasında, çalışma alanının ihtiyaçlarına uygun bölme duvar ve tavan çözümleriyle işlevsel bir mekân oluşturuldu.",

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
    "Antalya'da gerçekleştirilen uygulamada, iç mekânın yeniden düzenlenmesi amacıyla galvanizli metal profillerden taşıyıcı karkas oluşturuldu. Bölme duvar sisteminde profiller arasına mineral yün yalıtım malzemesi yerleştirildi ve alçıpan levhaların montajı gerçekleştirildi. Duvar yüzeylerinde levha birleşim noktalarının derz işlemleri ve yüzey düzeltme çalışmaları yapılarak boya ve son kat uygulamalarına uygun bir zemin hazırlandı. Çalışma kapsamında mevcut duvar ve tavan yüzeylerinin düzenlenmesi, yeni bölme duvarın oluşturulması ve mekânın kullanıma hazır hâle getirilmesi hedeflendi.",

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
    "Bodrum'da gerçekleştirilen iç mekân dekorasyon projesinde, salonun mimari yapısına uygun modern bir TV ünitesi ve dekoratif duvar tasarımı uygulandı. TV ünitesinin arka bölümünde mermer görünümlü dekoratif yüzey kaplaması kullanılarak mekâna zarif ve bütünlüklü bir görünüm kazandırıldı. Duvarın iki yanında konumlandırılan ahşap görünümlü dikey dekoratif panellerle tasarıma derinlik ve doğal bir karakter eklendi. TV ünitesi altında uygulanan duvar boyunca uzanan sabit dolapla hem sade hem de işlevsel bir kullanım alanı oluşturuldu. Dekoratif yüzeylerin çevresinde ve mobilya detaylarında kullanılan gizli LED aydınlatmalar, duvar tasarımını ön plana çıkararak sıcak bir ambiyans sağladı. Tavan bölümünde kademeli alçıpan asma tavan, gizli LED ışık bantları ve gömme spot aydınlatmalar uygulandı. Böylece tavan ve duvar aydınlatmaları birbiriyle uyumlu hâle getirilerek salonun genel tasarımı bütünleştirildi. Uygulama sonucunda ahşap dokular, mermer görünümlü yüzeyler, sıcak ışık detayları ve modern mobilya çizgileri bir araya getirilerek estetik ve konforlu bir yaşam alanı oluşturuldu.",

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