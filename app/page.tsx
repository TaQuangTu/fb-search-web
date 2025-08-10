import { SearchForm } from "@/components/search-form"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { FAQ } from "@/components/faq"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tìm Kiếm Facebook & Số Điện Thoại | Facebook Search Tool",
  description:
    "Công cụ tìm kiếm Facebook từ số điện thoại và ngược lại. Nhanh chóng, chính xác và bảo mật. Free Facebook search tool for UUID and phone numbers.",
  keywords: "facebook uuid, phone number search, facebook search, tìm kiếm facebook, facebook lookup",
  openGraph: {
    title: "Tìm Kiếm Facebook & Số Điện Thoại",
    description: "Công cụ tìm kiếm Facebook từ số điện thoại và ngược lại",
    type: "website",
  },
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <SearchForm />
      <Features />
      <HowItWorks />
      <FAQ />
    </div>
  )
}
