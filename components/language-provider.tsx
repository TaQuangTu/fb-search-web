"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "vi" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  vi: {
    // Header
    "nav.home": "Trang Chủ",
    "nav.about": "Giới Thiệu",
    "nav.privacy": "Chính Sách Bảo Mật",
    "nav.terms": "Điều Khoản Sử Dụng",
    "nav.contact": "Liên Hệ",

    // Hero
    "hero.title": "Tìm Kiếm Facebook UUID & Số Điện Thoại",
    "hero.subtitle": "Công cụ tìm kiếm nhanh chóng và chính xác giữa Facebook UUID và số điện thoại",
    "hero.cta": "Bắt Đầu Tìm Kiếm",

    // Search Form
    "search.title": "Công Cụ Tìm Kiếm",
    "search.phone.title": "Tìm Facebook UUID từ Số Điện Thoại",
    "search.phone.placeholder": "Nhập số điện thoại (VD: 0965656565)",
    "search.uuid.title": "Tìm Số Điện Thoại từ Facebook UUID",
    "search.uuid.placeholder": "Nhập Facebook UUID (VD: 9783479743789)",
    "search.button": "Tìm Kiếm",
    "search.loading": "Đang tìm kiếm...",
    "search.results": "Kết Quả Tìm Kiếm",
    "search.no-results": "Không tìm thấy kết quả nào",

    // Features
    "features.title": "Tính Năng Nổi Bật",
    "features.fast.title": "Tìm Kiếm Nhanh",
    "features.fast.desc": "Kết quả tìm kiếm trong vài giây",
    "features.secure.title": "Bảo Mật Cao",
    "features.secure.desc": "Dữ liệu được xử lý an toàn và bảo mật",
    "features.accurate.title": "Chính Xác",
    "features.accurate.desc": "Kết quả tìm kiếm chính xác và đáng tin cậy",

    // How It Works
    "how.title": "Cách Thức Hoạt Động",
    "how.step1": "Nhập thông tin cần tìm",
    "how.step2": "Hệ thống xử lý và tìm kiếm",
    "how.step3": "Nhận kết quả chính xác",

    // FAQ
    "faq.title": "Câu Hỏi Thường Gặp",
    "faq.q1": "Dịch vụ này có miễn phí không?",
    "faq.a1": "Có, dịch vụ tìm kiếm của chúng tôi hoàn toàn miễn phí.",
    "faq.q2": "Dữ liệu có được bảo mật không?",
    "faq.a2": "Chúng tôi cam kết bảo mật thông tin người dùng và không lưu trữ dữ liệu tìm kiếm.",
    "faq.q3": "Tốc độ tìm kiếm như thế nào?",
    "faq.a3": "Hệ thống xử lý và trả về kết quả trong vòng vài giây.",

    // Footer
    "footer.about": "Về Chúng Tôi",
    "footer.about.desc":
      "Công cụ tìm kiếm Facebook UUID và số điện thoại hàng đầu, cung cấp dịch vụ nhanh chóng và chính xác.",
    "footer.links": "Liên Kết Hữu Ích",
    "footer.legal": "Pháp Lý",
    "footer.contact.title": "Liên Hệ",
    "footer.contact.email": "Email: support@example.com",
    "footer.rights": "© 2024 Facebook Search Tool. Tất cả quyền được bảo lưu.",
  },
  en: {
    // Header
    "nav.home": "Home",
    "nav.about": "About",
    "nav.privacy": "Privacy Policy",
    "nav.terms": "Terms of Service",
    "nav.contact": "Contact",

    // Hero
    "hero.title": "Facebook UUID & Phone Number Search",
    "hero.subtitle": "Fast and accurate search tool between Facebook UUID and phone numbers",
    "hero.cta": "Start Searching",

    // Search Form
    "search.title": "Search Tool",
    "search.phone.title": "Find Facebook UUID from Phone Number",
    "search.phone.placeholder": "Enter phone number (e.g., 0965656565)",
    "search.uuid.title": "Find Phone Number from Facebook UUID",
    "search.uuid.placeholder": "Enter Facebook UUID (e.g., 9783479743789)",
    "search.button": "Search",
    "search.loading": "Searching...",
    "search.results": "Search Results",
    "search.no-results": "No results found",

    // Features
    "features.title": "Key Features",
    "features.fast.title": "Fast Search",
    "features.fast.desc": "Get results in seconds",
    "features.secure.title": "Secure",
    "features.secure.desc": "Data processed safely and securely",
    "features.accurate.title": "Accurate",
    "features.accurate.desc": "Reliable and precise search results",

    // How It Works
    "how.title": "How It Works",
    "how.step1": "Enter search information",
    "how.step2": "System processes and searches",
    "how.step3": "Receive accurate results",

    // FAQ
    "faq.title": "Frequently Asked Questions",
    "faq.q1": "Is this service free?",
    "faq.a1": "Yes, our search service is completely free.",
    "faq.q2": "Is data secure?",
    "faq.a2": "We are committed to protecting user information and do not store search data.",
    "faq.q3": "How fast is the search?",
    "faq.a3": "The system processes and returns results within seconds.",

    // Footer
    "footer.about": "About Us",
    "footer.about.desc": "Leading Facebook UUID and phone number search tool, providing fast and accurate services.",
    "footer.links": "Useful Links",
    "footer.legal": "Legal",
    "footer.contact.title": "Contact",
    "footer.contact.email": "Email: support@example.com",
    "footer.rights": "© 2024 Facebook Search Tool. All rights reserved.",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("vi")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["vi"]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
