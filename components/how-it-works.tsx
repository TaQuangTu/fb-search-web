"use client"
import { useLanguage } from "@/components/language-provider"
import { Search, Cog, CheckCircle } from "lucide-react"

export function HowItWorks() {
  const { t } = useLanguage()

  const steps = [
    {
      icon: Search,
      title: t("how.step1"),
      description: "Nhập số điện thoại hoặc Facebook UUID vào ô tìm kiếm",
    },
    {
      icon: Cog,
      title: t("how.step2"),
      description: "Hệ thống xử lý thông tin và tìm kiếm trong cơ sở dữ liệu",
    },
    {
      icon: CheckCircle,
      title: t("how.step3"),
      description: "Nhận kết quả tìm kiếm chi tiết và chính xác",
    },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t("how.title")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Quy trình tìm kiếm đơn giản và hiệu quả chỉ với 3 bước
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
