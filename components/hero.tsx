"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { Search, Shield, Zap } from "lucide-react"

export function Hero() {
  const { t } = useLanguage()

  const scrollToSearch = () => {
    document.getElementById("search-section")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">{t("hero.title")}</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">{t("hero.subtitle")}</p>
          <Button size="lg" onClick={scrollToSearch} className="mb-12">
            <Search className="mr-2 h-5 w-5" />
            {t("hero.cta")}
          </Button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{t("features.fast.title")}</h3>
              <p className="text-sm text-muted-foreground">{t("features.fast.desc")}</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{t("features.secure.title")}</h3>
              <p className="text-sm text-muted-foreground">{t("features.secure.desc")}</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Search className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{t("features.accurate.title")}</h3>
              <p className="text-sm text-muted-foreground">{t("features.accurate.desc")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
