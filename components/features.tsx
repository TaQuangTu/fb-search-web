"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"
import { Zap, Shield, Target, Clock, Globe, Users } from "lucide-react"

export function Features() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Zap,
      title: t("features.fast.title"),
      description: t("features.fast.desc"),
    },
    {
      icon: Shield,
      title: t("features.secure.title"),
      description: t("features.secure.desc"),
    },
    {
      icon: Target,
      title: t("features.accurate.title"),
      description: t("features.accurate.desc"),
    },
    {
      icon: Clock,
      title: "Hoạt Động 24/7",
      description: "Dịch vụ luôn sẵn sàng phục vụ bạn mọi lúc",
    },
    {
      icon: Globe,
      title: "Đa Ngôn Ngữ",
      description: "Hỗ trợ tiếng Việt và tiếng Anh",
    },
    {
      icon: Users,
      title: "Miễn Phí",
      description: "Hoàn toàn miễn phí cho tất cả người dùng",
    },
  ]

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t("features.title")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Khám phá những tính năng mạnh mẽ của công cụ tìm kiếm Facebook UUID và số điện thoại
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
