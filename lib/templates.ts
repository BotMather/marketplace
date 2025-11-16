import {
  Calendar,
  ShoppingCart,
  Truck,
  MapPin,
  Car,
  GraduationCap,
  User,
  LucideIcon,
  Scissors,
  Heart,
  Stethoscope,
  Dumbbell,
  Wrench,
  Camera,
  Shirt,
  Laptop,
  Cake,
  Flower2,
  Baby,
  Hand,
  UtensilsCrossed,
  Pill,
  Store,
  Coffee,
  Package,
  Box,
  Bus,
  BookOpen,
  Video,
  Briefcase,
} from "lucide-react";

export interface Template {
  previuv: string;
  id: string;
  category: string;
  title: string;
  description: string;
  price: string;
  features: string[];
  icon: LucideIcon;
}

export const TEMPLATE_CATEGORIES = [
  "Hammasi",
  "Qabulga yozilish",
  "Katalog",
  "Yetkazib berish",
  "Logistika",
  "Transport",
  "Ta'lim",
  "Shaxsiy brend",
] as const;

export const TEMPLATES: Template[] = [
  // 1. Qabulga yozilish kategoriyasi
  {
    previuv:
      "https://i.ytimg.com/vi/RdXu45ceJrE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCTkEjT-QLhg6T8_ptkBX5F1ZhE8w",
    id: "beauty-salon",
    category: "Qabulga yozilish",
    title: "Go'zallik saloni boti",
    description:
      "Go'zallik salonlari uchun mijozlarni qabulga yozish va xizmatlarni boshqarish tizimi",
    price: "$99",
    features: [
      "Vaqt bron qilish va kalendar",
      "Xizmatlar va ustalar ro'yxati",
      "Avtomatik eslatmalar",
      "Mijozlar tarixi va statistika",
    ],
    icon: Calendar,
  },
  {
    previuv:
      "https://i.ytimg.com/vi/umEaH_Iu9uQ/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&amp;rs=AOn4CLDZHIzZOh1FCvPDD6M7Yip92Pb2Gw",
    id: "barbershop",
    category: "Qabulga yozilish",
    title: "Sartaroshxona / Barber boti",
    description:
      "Sartaroshxona va barberlar uchun mijozlarni bron qilish tizimi",
    price: "$79",
    features: [
      "Ustalar va xizmatlar katalogi",
      "Vaqt slotlari boshqaruvi",
      "Sadoqat dasturi",
      "Telegram orqali to'lov",
    ],
    icon: Scissors,
  },
  {
    previuv:
      "https://i.ytimg.com/vi/OIgCkPHB5BE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA-_k8q6SwrVvN7Ywn8pzF6-FC4GQ",

    id: "psychologist",
    category: "Qabulga yozilish",
    title: "Psixolog boti",
    description:
      "Psixologlar va terapevtlar uchun sessiyalarni rejalashtirish tizimi",
    price: "$89",
    features: [
      "Maxfiy qabulga yozilish",
      "Sessiya kalendari",
      "Online to'lov qabul qilish",
      "Eslatmalar va taklifnomalar",
    ],
    icon: Heart,
  },
  {
    previuv:
      "https://i.ytimg.com/vi/tDlSJcCMfRw/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAQUu9_wfMOu0tPE7RZ55IbDoC0Ew",

    id: "doctor-office",
    category: "Qabulga yozilish",
    title: "Shifokor / Stomatolog boti",
    description:
      "Klinika va shifokorlar uchun bemorlarni qabulga yozish va navbat boshqaruvi",
    price: "$119",
    features: [
      "Bemorlar bazasi va tarix",
      "Qabulga yozilish va navbat",
      "Xizmatlar narxlari",
      "SMS bildirishnomalar",
    ],
    icon: Stethoscope,
  },
  {
    previuv:
      "https://i.ytimg.com/vi/Y8zsDTXBCUM/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDbyYxV-OWjYK-vINjMVLMZ143Tzg",

    id: "fitness-trainer",
    category: "Qabulga yozilish",
    title: "Fitnes / Yoga trener boti",
    description:
      "Fitnes trenerlar va yoga murabbiylari uchun mashg'ulotlar jadvali va ro'yxatdan o'tish",
    price: "$89",
    features: [
      "Mashg'ulotlar jadvali",
      "Guruh va shaxsiy darslar",
      "Progress tracking",
      "To'lovlar va abonentlar",
    ],
    icon: Dumbbell,
  },
  {
    previuv:
      "https://i.ytimg.com/vi/u5DDbgZgB3c/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBkBJnwObMI7zxpZuFtw9u7YvE1gQ",

    id: "auto-service",
    category: "Qabulga yozilish",
    title: "Avto xizmat boti",
    description:
      "STO, detailing va moy almashtirish xizmatlari uchun buyurtma boshqaruvi",
    price: "$109",
    features: [
      "Xizmatlar katalogi",
      "Vaqt bron qilish",
      "Avtomobil ma'lumotlari",
      "Xizmat tarixi",
    ],
    icon: Wrench,
  },
  {
    previuv:
      "https://i.ytimg.com/vi/RdXu45ceJrE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCTkEjT-QLhg6T8_ptkBX5F1ZhE8w",

    id: "veterinary",
    category: "Qabulga yozilish",
    title: "Veterinariya klinika boti",
    description:
      "Veterinariya klinikalari uchun hayvonlarni qabulga yozish tizimi",
    price: "$99",
    features: [
      "Hayvonlar bazasi",
      "Qabulga yozilish",
      "Vaksinatsiya eslatmalar",
      "Xizmatlar narxlari",
    ],
    icon: Heart,
  },
  {
    previuv:
      "https://i.ytimg.com/vi/RdXu45ceJrE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCTkEjT-QLhg6T8_ptkBX5F1ZhE8w",

    id: "photo-video",
    category: "Qabulga yozilish",
    title: "Fotosessiya / Videograf boti",
    description:
      "Fotosessiya va videograf xizmatlari uchun sessiyalarni bron qilish",
    price: "$89",
    features: [
      "Sessiya kalendari",
      "Paketlar va narxlar",
      "Portfolio ko'rsatish",
      "To'lov va shartnomalar",
    ],
    icon: Camera,
  },

  // 2. Katalog kategoriyasi
  {
    previuv:
      "https://i.ytimg.com/vi/RdXu45ceJrE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCTkEjT-QLhg6T8_ptkBX5F1ZhE8w",

    id: "clothing-store",
    category: "Katalog",
    title: "Kiyim-kechak butik boti",
    description: "Fashion butiklar va kiyim do'konlari uchun mahsulot katalogi",
    price: "$129",
    features: [
      "Mahsulotlar katalogi va rasmlar",
      "O'lchamlar va ranglar filtri",
      "Savat va buyurtma berish",
      "Ombor boshqaruvi",
    ],
    icon: Shirt,
  },
  {
    previuv:
      "https://i.ytimg.com/vi/RdXu45ceJrE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCTkEjT-QLhg6T8_ptkBX5F1ZhE8w",

    id: "electronics-store",
    category: "Katalog",
    title: "Elektronika do'koni boti",
    description: "Telefon, kompyuter va aksessuarlar sotish uchun katalog",
    price: "$149",
    features: [
      "Mahsulotlar spetsifikatsiyasi",
      "Qidiruv va filtrlar",
      "Narxlarni solishtirish",
      "Nasiya hisob-kitob",
    ],
    icon: Laptop,
  },
  {
    previuv:
      "https://i.ytimg.com/vi/RdXu45ceJrE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCTkEjT-QLhg6T8_ptkBX5F1ZhE8w",

    id: "online-shop",
    category: "Katalog",
    title: "Onlayn do'kon boti",
    description:
      "Telegram va Instagram orqali savdo qiluvchilar uchun katalog tizimi",
    price: "$99",
    features: [
      "Mahsulotlar katalogi",
      "Rasmlar va tavsiflar",
      "Buyurtma berish",
      "To'lov integratsiyasi",
    ],
    icon: ShoppingCart,
  },
  {
    previuv:
      "https://i.ytimg.com/vi/RdXu45ceJrE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCTkEjT-QLhg6T8_ptkBX5F1ZhE8w",

    id: "cake-studio",
    category: "Katalog",
    title: "Tort studiya boti",
    description:
      "Shirinlik va tort studiyalari uchun model katalog va buyurtma tizimi",
    price: "$109",
    features: [
      "Tort modellari katalogi",
      "Rasmlar va narxlar",
      "Buyurtma berish",
      "Yetkazib berish integratsiyasi",
    ],
    icon: Cake,
  },
  {
    previuv:
      "https://i.ytimg.com/vi/RdXu45ceJrE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCTkEjT-QLhg6T8_ptkBX5F1ZhE8w",

    id: "flower-shop",
    category: "Katalog",
    title: "Gul do'koni boti",
    description: "Gul do'konlari va buket xizmatlari uchun katalog tizimi",
    price: "$99",
    features: [
      "Buketlar katalogi va rasmlar",
      "Bayramlar uchun maxsus takliflar",
      "Yetkazib berish integratsiyasi",
      "Onlayn to'lov",
    ],
    icon: Flower2,
  },
  {
    previuv:
      "https://i.ytimg.com/vi/RdXu45ceJrE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCTkEjT-QLhg6T8_ptkBX5F1ZhE8w",

    id: "kids-toys",
    category: "Katalog",
    title: "Bolalar tovarlari boti",
    description:
      "Bolalar tovarlari va o'yinchoqlar sotish uchun katalog tizimi",
    price: "$119",
    features: [
      "Mahsulotlar katalogi",
      "Yosh guruhlari bo'yicha filtrlash",
      "Buyurtma berish",
      "To'lov va yetkazib berish",
    ],
    icon: Baby,
  },
  {
    previuv:
      "https://i.ytimg.com/vi/RdXu45ceJrE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCTkEjT-QLhg6T8_ptkBX5F1ZhE8w",

    id: "handmade",
    category: "Katalog",
    title: "Qo'l mehnati mahsulotlar boti",
    description:
      "Bijou va handmade mahsulotlar uchun katalog va buyurtma tizimi",
    price: "$89",
    features: [
      "Mahsulotlar katalogi",
      "Rasmlar va tavsiflar",
      "Buyurtma berish",
      "To'lov integratsiyasi",
    ],
    icon: Hand,
  },

  // 3. Yetkazib berish kategoriyasi
  {
    previuv:
      "https://i.ytimg.com/vi/RdXu45ceJrE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCTkEjT-QLhg6T8_ptkBX5F1ZhE8w",

    id: "restaurant-delivery",
    category: "Yetkazib berish",
    title: "Restoran yetkazib berish boti",
    description: "Fast-food va restoranlar uchun ovqat yetkazib berish tizimi",
    price: "$149",
    features: [
      "Menu katalogi va rasmlar",
      "Real-time buyurtma kuzatish",
      "Geolokatsiya integratsiyasi",
      "Kurerlar bilan aloqa",
    ],
    icon: UtensilsCrossed,
  },
  {
    previuv:
      "https://i.ytimg.com/vi/RdXu45ceJrE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCTkEjT-QLhg6T8_ptkBX5F1ZhE8w",

    id: "pharmacy-delivery",
    category: "Yetkazib berish",
    title: "Dorixona yetkazib berish boti",
    description: "Dorixonalar uchun dori-darmonlarni yetkazib berish",
    price: "$139",
    features: [
      "Dorilar katalogi va qidiruv",
      "Retsept yuklash",
      "Tez yetkazish integratsiyasi",
      "To'lov va chegirmalar",
    ],
    icon: Pill,
  },
  {
    previuv:
      "https://i.ytimg.com/vi/RdXu45ceJrE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCTkEjT-QLhg6T8_ptkBX5F1ZhE8w",

    id: "supermarket",
    category: "Yetkazib berish",
    title: "Supermarket yetkazib berish boti",
    description:
      "Supermarket va minimarketlar uchun mahsulotlar yetkazib berish",
    price: "$159",
    features: [
      "Mahsulotlar katalogi",
      "Savat va buyurtma",
      "Real-time tracking",
      "To'lov integratsiyasi",
    ],
    icon: Store,
  },
  {
    previuv:
      "https://i.ytimg.com/vi/RdXu45ceJrE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCTkEjT-QLhg6T8_ptkBX5F1ZhE8w",

    id: "flower-delivery",
    category: "Yetkazib berish",
    title: "Gul yetkazib berish boti",
    description: "Gul yetkazib berish xizmatlari uchun buyurtma tizimi",
    price: "$99",
    features: [
      "Buketlar katalogi",
      "Buyurtma berish",
      "Yetkazib berish tracking",
      "To'lov integratsiyasi",
    ],
    icon: Flower2,
  },
  {
    previuv:
      "https://i.ytimg.com/vi/RdXu45ceJrE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCTkEjT-QLhg6T8_ptkBX5F1ZhE8w",

    id: "food-delivery",
    category: "Yetkazib berish",
    title: "Pitsa / Desert / Qahva boti",
    description: "Pitsa, desert va qahva yetkazib berish xizmatlari uchun bot",
    price: "$119",
    features: [
      "Menu katalogi",
      "Buyurtma berish",
      "Real-time tracking",
      "To'lov integratsiyasi",
    ],
    icon: Coffee,
  },

  // 4. Logistika kategoriyasi
  {
    previuv:
      "https://i.ytimg.com/vi/RdXu45ceJrE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCTkEjT-QLhg6T8_ptkBX5F1ZhE8w",

    id: "international-cargo",
    category: "Logistika",
    title: "Xalqaro kargo boti",
    description: "Turkiya/Xitoydan yuk olib keluvchilar uchun tracking tizimi",
    price: "$179",
    features: [
      "Jo'natma real-time tracking",
      "Xarajatlar kalkulyatori",
      "Bojxona ma'lumotlari",
      "Ko'p tilli interfeys",
    ],
    icon: Package,
  },
  {
    previuv:
      "https://i.ytimg.com/vi/RdXu45ceJrE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCTkEjT-QLhg6T8_ptkBX5F1ZhE8w",

    id: "local-courier",
    category: "Logistika",
    title: "Mahalliy courier boti",
    description: "Shahar ichida yuk va hujjat yetkazish xizmatlari uchun",
    price: "$129",
    features: [
      "Buyurtma qabul qilish",
      "Kurerlar boshqaruvi",
      "Marshrut optimizatsiyasi",
      "To'lov va hisobotlar",
    ],
    icon: Truck,
  },
  {
    previuv:
      "https://i.ytimg.com/vi/RdXu45ceJrE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCTkEjT-QLhg6T8_ptkBX5F1ZhE8w",

    id: "warehouse",
    category: "Logistika",
    title: "Ombor xizmatlari boti",
    description: "Ombor xizmatlari va cargo tracking uchun bot",
    price: "$149",
    features: [
      "Yuk tracking",
      "Ombor ma'lumotlari",
      "Xarajatlar hisobi",
      "Hisobotlar",
    ],
    icon: Box,
  },

  // 5. Transport kategoriyasi
  {
    previuv:
      "https://i.ytimg.com/vi/RdXu45ceJrE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCTkEjT-QLhg6T8_ptkBX5F1ZhE8w",

    id: "taxi-park",
    category: "Transport",
    title: "Taxi park boti",
    description: "Taxi parklar va haydovchilar uchun buyurtma boshqaruvi",
    price: "$159",
    features: [
      "Haydovchilar ro'yxati",
      "Buyurtmalar taqsimlash",
      "Narx kalkulyatori",
      "Hisobotlar va statistika",
    ],
    icon: Car,
  },
  {
    previuv:
      "https://i.ytimg.com/vi/RdXu45ceJrE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCTkEjT-QLhg6T8_ptkBX5F1ZhE8w",

    id: "minibus",
    category: "Transport",
    title: "Mikroavtobus / Yollanma mashina boti",
    description:
      "Mikroavtobus va yollanma mashina xizmatlari uchun buyurtma tizimi",
    price: "$139",
    features: [
      "Mashinalar ro'yxati",
      "Buyurtma berish",
      "Narx kalkulyatori",
      "To'lov integratsiyasi",
    ],
    icon: Bus,
  },
  {
    previuv:
      "https://i.ytimg.com/vi/RdXu45ceJrE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCTkEjT-QLhg6T8_ptkBX5F1ZhE8w",

    id: "company-transport",
    category: "Transport",
    title: "Kompaniya transport boti",
    description: "Kompaniya ichidagi xizmat mashinalari boshqaruvi uchun bot",
    price: "$119",
    features: [
      "Mashinalar ro'yxati",
      "Buyurtma berish",
      "Haydovchilar boshqaruvi",
      "Hisobotlar",
    ],
    icon: Car,
  },

  // 6. Ta'lim kategoriyasi
  {
    previuv:
      "https://i.ytimg.com/vi/RdXu45ceJrE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCTkEjT-QLhg6T8_ptkBX5F1ZhE8w",

    id: "language-courses",
    category: "Ta'lim",
    title: "Til kurslari boti",
    description:
      "Til o'rgatish markazlari uchun talabalar va darslar boshqaruvi",
    price: "$119",
    features: [
      "Kurslar va darajalar katalogi",
      "Darslarga yozilish",
      "Dars jadvali",
      "Talabalar davomat hisobi",
    ],
    icon: GraduationCap,
  },
  {
    previuv:
      "https://i.ytimg.com/vi/RdXu45ceJrE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCTkEjT-QLhg6T8_ptkBX5F1ZhE8w",

    id: "it-courses",
    category: "Ta'lim",
    title: "IT kurslari boti",
    description: "Dasturlash va IT o'quv markazlari uchun bot",
    price: "$129",
    features: [
      "Kurslar va yo'nalishlar",
      "Darslik materiallar yuklash",
      "Homework va testlar",
      "Sertifikatlar",
    ],
    icon: Laptop,
  },
  {
    previuv:
      "https://i.ytimg.com/vi/RdXu45ceJrE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCTkEjT-QLhg6T8_ptkBX5F1ZhE8w",

    id: "online-tutor",
    category: "Ta'lim",
    title: "Repetitor boti",
    description: "Shaxsiy dars beruvchilar va repetitorlar uchun",
    price: "$89",
    features: [
      "Shaxsiy darslar jadvali",
      "Video darslar integratsiyasi",
      "To'lovlar va abonentlar",
      "O'quvchilar natijasi",
    ],
    icon: BookOpen,
  },
  {
    previuv:
      "https://i.ytimg.com/vi/RdXu45ceJrE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCTkEjT-QLhg6T8_ptkBX5F1ZhE8w",

    id: "online-school",
    category: "Ta'lim",
    title: "Onlayn maktab boti",
    description: "Onlayn maktablar uchun dars jadvali va ro'yxatdan o'tish",
    price: "$149",
    features: [
      "Dars jadvali",
      "Talabalar ro'yxati",
      "Darslik materiallar",
      "Testlar va baholash",
    ],
    icon: GraduationCap,
  },
  {
    previuv:
      "https://i.ytimg.com/vi/RdXu45ceJrE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCTkEjT-QLhg6T8_ptkBX5F1ZhE8w",

    id: "workshop",
    category: "Ta'lim",
    title: "Workshop / Webinar boti",
    description:
      "Workshop va webinar tashkilotchilari uchun ro'yxatdan o'tish tizimi",
    price: "$99",
    features: [
      "Workshoplar katalogi",
      "Ro'yxatdan o'tish",
      "To'lov integratsiyasi",
      "Eslatmalar",
    ],
    icon: Video,
  },

  // 7. Shaxsiy brend kategoriyasi
  {
    previuv:
      "https://i.ytimg.com/vi/RdXu45ceJrE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCTkEjT-QLhg6T8_ptkBX5F1ZhE8w",

    id: "blogger",
    category: "Shaxsiy brend",
    title: "Bloger boti",
    description: "Blogerlar va kontent kreatorlar uchun auditoriya bilan aloqa",
    price: "$99",
    features: [
      "Kontent tarqatish kanali",
      "VIP obuna tizimi",
      "Reklama joylashtirish",
      "Statistika va analytics",
    ],
    icon: User,
  },
  {
    previuv:
      "https://i.ytimg.com/vi/RdXu45ceJrE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCTkEjT-QLhg6T8_ptkBX5F1ZhE8w",

    id: "trainer-motivator",
    category: "Shaxsiy brend",
    title: "Trener / Motivator boti",
    description: "Fitnes, life coach va motivatorlar uchun bot",
    price: "$89",
    features: [
      "Mashg'ulotlar jadvali",
      "Mashqlar va dasturlar",
      "Progress tracking",
      "Guruh va shaxsiy darslar",
    ],
    icon: Dumbbell,
  },
  {
    previuv:
      "https://i.ytimg.com/vi/RdXu45ceJrE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCTkEjT-QLhg6T8_ptkBX5F1ZhE8w",

    id: "consultant",
    category: "Shaxsiy brend",
    title: "Konsultant boti",
    description: "Biznes va shaxsiy rivojlanish konsultantlari uchun",
    price: "$109",
    features: [
      "Konsultatsiya bron qilish",
      "Xizmatlar paketlari",
      "To'lov va shartnomalar",
      "Mijozlar CRM tizimi",
    ],
    icon: Briefcase,
  },
  {
    previuv:
      "https://i.ytimg.com/vi/RdXu45ceJrE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCTkEjT-QLhg6T8_ptkBX5F1ZhE8w",

    id: "hr-trainer",
    category: "Shaxsiy brend",
    title: "HR / Biznes trener boti",
    description: "HR va biznes trenerlar uchun murojaat olish tizimi",
    price: "$119",
    features: [
      "Konsultatsiya bron qilish",
      "Xizmatlar paketlari",
      "To'lov integratsiyasi",
      "Mijozlar bazasi",
    ],
    icon: Briefcase,
  },
];

export function getTemplateById(id: string): Template | undefined {
  return TEMPLATES.find((template) => template.id === id);
}

export function getTemplatesByCategory(category: string): Template[] {
  if (category === "Hammasi") {
    return TEMPLATES;
  }
  return TEMPLATES.filter((template) => template.category === category);
}
