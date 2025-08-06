"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { Search, Shield, Zap, ArrowRight, Users, Globe, Star, Sparkles } from 'lucide-react'

export function Hero() {
  const { t } = useLanguage()

  const scrollToSearch = () => {
    document.getElementById("search-section")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-blue-100">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-indigo-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-purple-400/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-pink-400/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Modern Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-blue-200/50 text-primary text-sm font-semibold mb-8 animate-bounce-in shadow-lg">
            <Sparkles className="w-5 h-5 mr-2 text-yellow-500" />
            {t("hero.badge")}
            <Star className="w-4 h-4 ml-2 text-yellow-500" />
          </div>

          {/* Modern Title */}
          <h1 className="text-5xl lg:text-8xl font-bold tracking-tight mb-8 animate-fade-in">
            <span className="bg-gradient-to-r from-gray-900 via-primary to-gray-900 bg-clip-text text-transparent leading-tight">
              {t("hero.title")}
            </span>
          </h1>

          {/* Enhanced Subtitle */}
          <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in font-medium" style={{ animationDelay: '0.2s' }}>
            {t("hero.subtitle")}
          </p>

          {/* Modern CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              onClick={scrollToSearch} 
              className="bg-gradient-to-r from-primary to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-6 px-10 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0 text-xl h-auto group"
            >
              <Search className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
              {t("hero.cta")}
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white text-primary font-semibold py-6 px-10 rounded-xl shadow-lg hover:shadow-xl border-2 border-primary/30 hover:border-primary/50 hover:bg-primary/5 transform hover:scale-105 transition-all duration-300 text-xl h-auto group"
            >
              <Users className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
              {t("hero.learn_more")}
            </Button>
          </div>

          {/* Modern Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-center group">
              <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-blue-700 bg-clip-text text-transparent mb-3">1M+</div>
              <div className="text-gray-600 font-medium text-lg">{t("hero.stats.searches")}</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-600 to-primary bg-clip-text text-transparent mb-3">99.9%</div>
              <div className="text-gray-600 font-medium text-lg">{t("hero.stats.accuracy")}</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">24/7</div>
              <div className="text-gray-600 font-medium text-lg">{t("hero.stats.support")}</div>
            </div>
          </div>

          {/* Modern Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden p-8 hover:-translate-y-4">
              <div className="h-20 w-20 rounded-3xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <Zap className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-primary transition-colors duration-300">{t("features.fast.title")}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{t("features.fast.desc")}</p>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden p-8 hover:-translate-y-4">
              <div className="h-20 w-20 rounded-3xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-primary transition-colors duration-300">{t("features.secure.title")}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{t("features.secure.desc")}</p>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden p-8 hover:-translate-y-4">
              <div className="h-20 w-20 rounded-3xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <Globe className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-primary transition-colors duration-300">{t("features.accurate.title")}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{t("features.accurate.desc")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-24 fill-white">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  )
}
