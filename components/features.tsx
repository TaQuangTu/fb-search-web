"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"
import { Zap, Shield, Target, Clock, Globe, Users, Star, TrendingUp, Award } from 'lucide-react'

export function Features() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Zap,
      title: t("features.fast.title"),
      description: t("features.fast.desc"),
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-600",
    },
    {
      icon: Shield,
      title: t("features.secure.title"),
      description: t("features.secure.desc"),
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      icon: Target,
      title: t("features.accurate.title"),
      description: t("features.accurate.desc"),
      color: "from-blue-500 to-blue-600", // Changed to explicit blue colors
      bgColor: "bg-blue-50", // Using a light blue shade
      iconColor: "text-blue-600", // Changed to explicit blue color
    },
    {
      icon: Clock,
      title: t("features.available.title"),
      description: t("features.available.desc"),
      color: "from-purple-400 to-pink-500",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      icon: Globe,
      title: t("features.multilang.title"),
      description: t("features.multilang.desc"),
      color: "from-blue-400 to-blue-600", // Changed to explicit blue colors
      bgColor: "bg-blue-50", // Using a light blue shade
      iconColor: "text-blue-600", // Changed to explicit blue color
    },
    {
      icon: Users,
      title: t("features.free.title"),
      description: t("features.free.desc"),
      color: "from-red-400 to-pink-500",
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            {t("features.badge")}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
            {t("features.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("features.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group h-full bg-white shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border-0 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`h-2 bg-gradient-to-r ${feature.color}`}></div>
              <CardHeader className="pb-4">
                <div className={`h-16 w-16 rounded-2xl ${feature.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`h-8 w-8 ${feature.iconColor}`} />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-12 animate-fade-in">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-gray-800">{t("features.stats.title")}</h3>
            <p className="text-gray-600 text-lg">{t("features.stats.subtitle")}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">1M+</div>
              <div className="text-gray-600 font-medium">{t("features.stats.searches")}</div>
            </div>
            
            <div className="text-center group">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-green-600 mb-2">99.9%</div>
              <div className="text-gray-600 font-medium">{t("features.stats.accuracy")}</div>
            </div>
            
            <div className="text-center group">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-purple-600 mb-2">500K+</div>
              <div className="text-gray-600 font-medium">{t("features.stats.users")}</div>
            </div>
            
            <div className="text-center group">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">{t("features.stats.support")}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
