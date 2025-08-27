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
    "hero.title": "Tìm Kiếm Facebook & Số Điện Thoại",
    "hero.subtitle": "Công cụ tìm kiếm nhanh chóng và chính xác giữa Facebook và số điện thoại",
    "hero.cta": "Bắt Đầu Tìm Kiếm",
    "hero.badge": "Công cụ tìm kiếm #1 Việt Nam",
    "hero.learn_more": "Tìm hiểu thêm",
    "hero.stats.searches": "Lượt tìm kiếm thành công",
    "hero.stats.accuracy": "Độ chính xác cao",
    "hero.stats.support": "Hỗ trợ không ngừng",

    // Search Form
    "search.title": "Công Cụ Tìm Kiếm",
    "search.subtitle": "Tìm kiếm thông tin Facebook một cách nhanh chóng và chính xác",
    "search.badge": "Công cụ tìm kiếm chuyên nghiệp",
    "search.phone.title": "Tìm Facebook từ Số Điện Thoại",
    "search.phone.description": "Nhập số điện thoại để tìm Facebook tương ứng",
    "search.phone.placeholder": "Nhập số điện thoại (VD: 0965656565)",
    "search.uuid.title": "Tìm Số Điện Thoại từ Facebook UUID",
    "search.uuid.description": "Nhập Facebook UUID để tìm số điện thoại tương ứng",
    "search.uuid.placeholder": "Nhập Facebook UUID (VD: 9783479743789)",
    "search.button": "Tìm Kiếm",
    "search.loading": "Đang tìm kiếm...",
    "search.results": "Kết Quả Tìm Kiếm",
    "search.no_results": "Không tìm thấy kết quả",
    "search.no_results_desc": "Thử lại với thông tin khác",
    "search.error.empty_phone": "Vui lòng nhập số điện thoại",
    "search.error.empty_uuid": "Vui lòng nhập Facebook UUID",
    "search.error.not_found": "Không có kết quả nào cho thông tin này",
    "search.error.verify": "Yêu cầu xác minh",
    "search.error.verify_desc": "Vui lòng hoàn thành xác minh trước khi tìm kiếm",
    "search.error.general": "Có lỗi xảy ra khi tìm kiếm",
    "search.success": "Thành công",
    "search.success_desc": "Tìm thấy {count} kết quả",
    "search.labels.phone": "Số điện thoại",
    "search.labels.uuid": "Facebook UUID",
    "search.labels.profile": "Facebook URL",
    "search.labels.time": "Thời gian",
    

    // Features
    "features.title": "Tính Năng Nổi Bật",
    "features.subtitle": "Khám phá những tính năng mạnh mẽ của công cụ tìm kiếm Facebook UUID và số điện thoại hàng đầu Việt Nam",
    "features.badge": "Tính năng vượt trội",
    "features.fast.title": "Tìm Kiếm Nhanh",
    "features.fast.desc": "Kết quả tìm kiếm trong vài giây",
    "features.secure.title": "Bảo Mật Cao",
    "features.secure.desc": "Dữ liệu được xử lý an toàn và bảo mật",
    "features.accurate.title": "Chính Xác",
    "features.accurate.desc": "Kết quả tìm kiếm chính xác và đáng tin cậy",
    "features.available.title": "Hoạt Động 24/7",
    "features.available.desc": "Dịch vụ luôn sẵn sàng phục vụ bạn mọi lúc",
    "features.multilang.title": "Đa Ngôn Ngữ",
    "features.multilang.desc": "Hỗ trợ tiếng Việt và tiếng Anh",
    "features.free.title": "Miễn Phí",
    "features.free.desc": "Hoàn toàn miễn phí cho tất cả người dùng",
    "features.stats.title": "Được Tin Tưởng Bởi Hàng Triệu Người Dùng",
    "features.stats.subtitle": "Những con số ấn tượng về dịch vụ của chúng tôi",
    "features.stats.searches": "Lượt tìm kiếm thành công",
    "features.stats.accuracy": "Độ chính xác",
    "features.stats.users": "Người dùng hài lòng",
    "features.stats.support": "Hỗ trợ không ngừng",

    // How It Works
    "how.title": "Cách Thức Hoạt Động",
    "how.subtitle": "Quy trình tìm kiếm đơn giản và hiệu quả chỉ với 3 bước",
    "how.step1": "Nhập thông tin cần tìm",
    "how.step1.desc": "Nhập số điện thoại hoặc Facebook UUID vào ô tìm kiếm",
    "how.step2": "Hệ thống xử lý và tìm kiếm",
    "how.step2.desc": "Hệ thống xử lý thông tin và tìm kiếm trong cơ sở dữ liệu",
    "how.step3": "Nhận kết quả chính xác",
    "how.step3.desc": "Nhận kết quả tìm kiếm chi tiết và chính xác",

    // FAQ
    "faq.title": "Câu Hỏi Thường Gặp",
    "faq.subtitle": "Tìm câu trả lời cho những câu hỏi thường gặp về dịch vụ của chúng tôi",
    "faq.q1": "Dịch vụ này có miễn phí không?",
    "faq.a1": "Có, dịch vụ tìm kiếm của chúng tôi hoàn toàn miễn phí.",
    "faq.q2": "Dữ liệu có được bảo mật không?",
    "faq.a2": "Chúng tôi cam kết bảo mật thông tin người dùng và không lưu trữ dữ liệu tìm kiếm.",
    "faq.q3": "Tốc độ tìm kiếm như thế nào?",
    "faq.a3": "Hệ thống xử lý và trả về kết quả trong vòng vài giây.",
    "faq.q4": "Tôi có thể tìm kiếm bao nhiều lần?",
    "faq.a4": "Không có giới hạn số lần tìm kiếm. Bạn có thể sử dụng dịch vụ không giới hạn.",
    "faq.q5": "Dữ liệu có được cập nhật thường xuyên không?",
    "faq.a5": "Cơ sở dữ liệu được cập nhật thường xuyên để đảm bảo tính chính xác của kết quả.",
    "faq.q6": "Tôi có thể báo cáo thông tin sai lệch không?",
    "faq.a6": "Có, bạn có thể liên hệ với chúng tôi qua trang liên hệ để báo cáo bất kỳ thông tin sai lệch nào.",

    // Footer
    "footer.about": "Về Chúng Tôi",
    "footer.about.desc": "Công cụ tìm kiếm Facebook UUID và số điện thoại hàng đầu, cung cấp dịch vụ nhanh chóng và chính xác.",
    "footer.links": "Liên Kết Hữu Ích",
    "footer.legal": "Pháp Lý",
    "footer.contact.title": "Liên Hệ",
    "footer.contact.email": "Email: support@fbsearch.net",
    "footer.rights": "© 2024 Facebook Search Tool. Tất cả quyền được bảo lưu.",
    "footer.made_with_love": "Được tạo với ❤️ tại Việt Nam",
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
    "hero.badge": "#1 Search Tool in Vietnam",
    "hero.learn_more": "Learn More",
    "hero.stats.searches": "Successful searches",
    "hero.stats.accuracy": "High accuracy",
    "hero.stats.support": "24/7 Support",

    // Search Form
    "search.title": "Search Tool",
    "search.subtitle": "Search Facebook information quickly and accurately",
    "search.badge": "Professional search tool",
    "search.phone.title": "Find Facebook UUID from Phone Number",
    "search.phone.description": "Enter phone number to find corresponding Facebook UUID",
    "search.phone.placeholder": "Enter phone number (e.g., 0965656565)",
    "search.uuid.title": "Find Phone Number from Facebook UUID",
    "search.uuid.description": "Enter Facebook UUID to find corresponding phone number",
    "search.uuid.placeholder": "Enter Facebook UUID (e.g., 9783479743789)",
    "search.button": "Search",
    "search.loading": "Searching...",
    "search.results": "Search Results",
    "search.no_results": "No results found",
    "search.no_results_desc": "Try again with different information",
    "search.error.empty_phone": "Please enter phone number",
    "search.error.empty_uuid": "Please enter Facebook UUID",
    "search.error.not_found": "No results found for this information",
    "search.error.general": "An error occurred while searching",
    "search.error.verify": "Verification Required",
    "search.error.verify_desc": "Please complete the verification challenge before searching",
    "search.success": "Success",
    "search.success_desc": "Found {count} results",
    "search.labels.phone": "Phone Number",
    "search.labels.uuid": "Facebook UUID",
    "search.labels.time": "Time",

    // Features
    "features.title": "Key Features",
    "features.subtitle": "Discover the powerful features of Vietnam's leading Facebook and phone number search tool",
    "features.badge": "Outstanding features",
    "features.fast.title": "Fast Search",
    "features.fast.desc": "Get results in seconds",
    "features.secure.title": "Secure",
    "features.secure.desc": "Data processed safely and securely",
    "features.accurate.title": "Accurate",
    "features.accurate.desc": "Reliable and precise search results",
    "features.available.title": "24/7 Available",
    "features.available.desc": "Service always ready to serve you anytime",
    "features.multilang.title": "Multi-language",
    "features.multilang.desc": "Support Vietnamese and English",
    "features.free.title": "Free",
    "features.free.desc": "Completely free for all users",
    "features.stats.title": "Trusted by Millions of Users",
    "features.stats.subtitle": "Impressive numbers about our service",
    "features.stats.searches": "Successful searches",
    "features.stats.accuracy": "Accuracy",
    "features.stats.users": "Satisfied users",
    "features.stats.support": "Non-stop support",

    // How It Works
    "how.title": "How It Works",
    "how.subtitle": "Simple and effective search process in just 3 steps",
    "how.step1": "Enter search information",
    "how.step1.desc": "Enter phone number or Facebook UUID in the search box",
    "how.step2": "System processes and searches",
    "how.step2.desc": "System processes information and searches in the database",
    "how.step3": "Receive accurate results",
    "how.step3.desc": "Get detailed and accurate search results",

    // FAQ
    "faq.title": "Frequently Asked Questions",
    "faq.subtitle": "Find answers to frequently asked questions about our service",
    "faq.q1": "Is this service free?",
    "faq.a1": "Yes, our search service is completely free.",
    "faq.q2": "Is data secure?",
    "faq.a2": "We are committed to protecting user information and do not store search data.",
    "faq.q3": "How fast is the search?",
    "faq.a3": "The system processes and returns results within seconds.",
    "faq.q4": "How many times can I search?",
    "faq.a4": "There is no limit to the number of searches. You can use the service unlimited.",
    "faq.q5": "Is data updated regularly?",
    "faq.a5": "The database is updated regularly to ensure accuracy of results.",
    "faq.q6": "Can I report incorrect information?",
    "faq.a6": "Yes, you can contact us through the contact page to report any incorrect information.",

    // Footer
    "footer.about": "About Us",
    "footer.about.desc": "Leading Facebook and phone number search tool, providing fast and accurate services.",
    "footer.links": "Useful Links",
    "footer.legal": "Legal",
    "footer.contact.title": "Contact",
    "footer.contact.email": "Email: support@fbsearch.net",
    "footer.rights": "© 2024 Facebook Search Tool. All rights reserved.",
    "footer.made_with_love": "Made with ❤️ in Vietnam",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("vi")

  const t = (key: string): string => {
    const translation = translations[language][key as keyof (typeof translations)["vi"]]
    if (!translation) {
      console.warn(`Missing translation for key: ${key}`)
      return key
    }
    return translation
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
