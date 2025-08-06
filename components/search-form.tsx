"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "@/components/language-provider"
import { Search, Phone, User, Calendar, Loader2, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react'
import { useToast } from "@/hooks/use-toast"
import { searchByPhone, searchByUUID } from "@/lib/api"

interface SearchResult {
  id: string
  phone: string
  fbuid: string
  created_at: string
}

export function SearchForm() {
  const { t } = useLanguage()
  const { toast } = useToast()
  const [phoneQuery, setPhoneQuery] = useState("")
  const [uuidQuery, setUuidQuery] = useState("")
  const [phoneResults, setPhoneResults] = useState<SearchResult[]>([])
  const [uuidResults, setUuidResults] = useState<SearchResult[]>([])
  const [isPhoneLoading, setIsPhoneLoading] = useState(false)
  const [isUuidLoading, setIsUuidLoading] = useState(false)

  const handlePhoneSearch = async () => {
    if (!phoneQuery.trim()) {
      toast({
        title: "⚠️ " + t("search.error.empty_phone"),
        description: t("search.error.empty_phone"),
        variant: "destructive",
      })
      return
    }

    setIsPhoneLoading(true)
    try {
      const results = await searchByPhone(phoneQuery)
      setPhoneResults(results)
      if (results.length === 0) {
        toast({
          title: "🔍 " + t("search.no_results"),
          description: t("search.error.not_found"),
        })
      } else {
        toast({
          title: "✅ " + t("search.success"),
          description: t("search.success_desc").replace("{count}", results.length.toString()),
        })
      }
    } catch (error) {
      toast({
        title: "❌ Error",
        description: t("search.error.general"),
        variant: "destructive",
      })
    } finally {
      setIsPhoneLoading(false)
    }
  }

  const handleUuidSearch = async () => {
    if (!uuidQuery.trim()) {
      toast({
        title: "⚠️ " + t("search.error.empty_uuid"),
        description: t("search.error.empty_uuid"),
        variant: "destructive",
      })
      return
    }

    setIsUuidLoading(true)
    try {
      const results = await searchByUUID(uuidQuery)
      setUuidResults(results)
      if (results.length === 0) {
        toast({
          title: "🔍 " + t("search.no_results"),
          description: t("search.error.not_found"),
        })
      } else {
        toast({
          title: "✅ " + t("search.success"),
          description: t("search.success_desc").replace("{count}", results.length.toString()),
        })
      }
    } catch (error) {
      toast({
        title: "❌ Error",
        description: t("search.error.general"),
        variant: "destructive",
      })
    } finally {
      setIsUuidLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString("vi-VN")
  }

  return (
    <section id="search-section" className="py-24 bg-gradient-to-b from-white via-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Search className="w-4 h-4 mr-2" />
            {t("search.badge")}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
            {t("search.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t("search.subtitle")}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="phone" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-white shadow-lg p-2 h-auto">
              <TabsTrigger 
                value="phone" 
                className="flex items-center gap-3 py-4 px-8 text-lg font-semibold data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:text-blue-600 transition-all duration-300 rounded-xl"
              >
                <Phone className="h-5 w-5" />
                <span className="hidden sm:inline">Phone → UUID</span>
                <span className="sm:hidden">Phone</span>
              </TabsTrigger>
              <TabsTrigger 
                value="uuid" 
                className="flex items-center gap-3 py-4 px-8 text-lg font-semibold data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:text-blue-600 transition-all duration-300 rounded-xl"
              >
                <User className="h-5 w-5" />
                <span className="hidden sm:inline">UUID → Phone</span>
                <span className="sm:hidden">UUID</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="phone" className="space-y-8 animate-fade-in">
              <Card className="bg-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 border-0 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-1">
                  <div className="bg-white rounded-t-lg">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-2xl flex items-center gap-3">
                        <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                        {t("search.phone.title")}
                      </CardTitle>
                      <CardDescription className="text-lg">
                        {t("search.phone.description")}
                      </CardDescription>
                    </CardHeader>
                  </div>
                </div>
                <CardContent className="p-8 space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-1 relative">
                      <Input
                        placeholder={t("search.phone.placeholder")}
                        value={phoneQuery}
                        onChange={(e) => setPhoneQuery(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && handlePhoneSearch()}
                        className="h-16 text-lg pl-12 border-2 border-gray-200 focus:border-primary transition-colors duration-300 rounded-xl"
                      />
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                    <Button 
                      onClick={handlePhoneSearch} 
                      disabled={isPhoneLoading}
                      className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-10 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0 text-lg h-16"
                    >
                      {isPhoneLoading ? (
                        <Loader2 className="h-5 w-5 animate-spin mr-2" />
                      ) : (
                        <Search className="h-5 w-5 mr-2" />
                      )}
                      {isPhoneLoading ? t("search.loading") : t("search.button")}
                      {!isPhoneLoading && <ArrowRight className="h-5 w-5 ml-2" />}
                    </Button>
                  </div>

                  {phoneResults.length > 0 && (
                    <div className="space-y-6 animate-fade-in">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-6 w-6 text-green-500" />
                        <h3 className="text-xl font-semibold">{t("search.results")} ({phoneResults.length})</h3>
                      </div>
                      <div className="grid gap-4">
                        {phoneResults.map((result, index) => (
                          <Card key={result.id} className="p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                              <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                                  <Phone className="h-5 w-5 text-green-600" />
                                </div>
                                <div>
                                  <div className="text-sm text-gray-500 mb-1">{t("search.labels.phone")}</div>
                                  <div className="font-mono text-lg font-semibold">{result.phone}</div>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                                  <User className="h-5 w-5 text-blue-600" />
                                </div>
                                <div>
                                  <div className="text-sm text-gray-500 mb-1">{t("search.labels.uuid")}</div>
                                  <div className="font-mono text-lg font-semibold">{result.fbuid}</div>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                                  <Calendar className="h-5 w-5 text-purple-600" />
                                </div>
                                <div>
                                  <div className="text-sm text-gray-500 mb-1">{t("search.labels.time")}</div>
                                  <div className="text-sm font-medium">{formatDate(result.created_at)}</div>
                                </div>
                              </div>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>
                  )}

                  {phoneResults.length === 0 && phoneQuery && !isPhoneLoading && (
                    <div className="text-center py-12 animate-fade-in">
                      <AlertCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-600 mb-2">{t("search.no_results")}</h3>
                      <p className="text-gray-500">{t("search.no_results_desc")}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="uuid" className="space-y-8 animate-fade-in">
              <Card className="bg-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 border-0 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-1">
                  <div className="bg-white rounded-t-lg">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-2xl flex items-center gap-3">
                        <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                          <User className="h-5 w-5 text-primary" />
                        </div>
                        {t("search.uuid.title")}
                      </CardTitle>
                      <CardDescription className="text-lg">
                        {t("search.uuid.description")}
                      </CardDescription>
                    </CardHeader>
                  </div>
                </div>
                <CardContent className="p-8 space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-1 relative">
                      <Input
                        placeholder={t("search.uuid.placeholder")}
                        value={uuidQuery}
                        onChange={(e) => setUuidQuery(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && handleUuidSearch()}
                        className="h-16 text-lg pl-12 border-2 border-gray-200 focus:border-primary transition-colors duration-300 rounded-xl"
                      />
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                    <Button 
                      onClick={handleUuidSearch} 
                      disabled={isUuidLoading}
                      className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-10 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0 text-lg h-16"
                    >
                      {isUuidLoading ? (
                        <Loader2 className="h-5 w-5 animate-spin mr-2" />
                      ) : (
                        <Search className="h-5 w-5 mr-2" />
                      )}
                      {isUuidLoading ? t("search.loading") : t("search.button")}
                      {!isUuidLoading && <ArrowRight className="h-5 w-5 ml-2" />}
                    </Button>
                  </div>

                  {uuidResults.length > 0 && (
                    <div className="space-y-6 animate-fade-in">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-6 w-6 text-green-500" />
                        <h3 className="text-xl font-semibold">{t("search.results")} ({uuidResults.length})</h3>
                      </div>
                      <div className="grid gap-4">
                        {uuidResults.map((result, index) => (
                          <Card key={result.id} className="p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                              <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                                  <User className="h-5 w-5 text-blue-600" />
                                </div>
                                <div>
                                  <div className="text-sm text-gray-500 mb-1">{t("search.labels.uuid")}</div>
                                  <div className="font-mono text-lg font-semibold">{result.fbuid}</div>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                                  <Phone className="h-5 w-5 text-green-600" />
                                </div>
                                <div>
                                  <div className="text-sm text-gray-500 mb-1">{t("search.labels.phone")}</div>
                                  <div className="font-mono text-lg font-semibold">{result.phone}</div>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                                  <Calendar className="h-5 w-5 text-purple-600" />
                                </div>
                                <div>
                                  <div className="text-sm text-gray-500 mb-1">{t("search.labels.time")}</div>
                                  <div className="text-sm font-medium">{formatDate(result.created_at)}</div>
                                </div>
                              </div>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>
                  )}

                  {uuidResults.length === 0 && uuidQuery && !isUuidLoading && (
                    <div className="text-center py-12 animate-fade-in">
                      <AlertCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-600 mb-2">{t("search.no_results")}</h3>
                      <p className="text-gray-500">{t("search.no_results_desc")}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
