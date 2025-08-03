"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "@/components/language-provider"
import { Search, Phone, User, Calendar, Loader2 } from "lucide-react"
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
        title: "Lỗi",
        description: "Vui lòng nhập số điện thoại",
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
          title: "Không tìm thấy",
          description: "Không có kết quả nào cho số điện thoại này",
        })
      }
    } catch (error) {
      toast({
        title: "Lỗi",
        description: "Có lỗi xảy ra khi tìm kiếm",
        variant: "destructive",
      })
    } finally {
      setIsPhoneLoading(false)
    }
  }

  const handleUuidSearch = async () => {
    if (!uuidQuery.trim()) {
      toast({
        title: "Lỗi",
        description: "Vui lòng nhập Facebook UUID",
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
          title: "Không tìm thấy",
          description: "Không có kết quả nào cho Facebook UUID này",
        })
      }
    } catch (error) {
      toast({
        title: "Lỗi",
        description: "Có lỗi xảy ra khi tìm kiếm",
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
    <section id="search-section" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t("search.title")}</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="phone" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="phone" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Phone → UUID
              </TabsTrigger>
              <TabsTrigger value="uuid" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                UUID → Phone
              </TabsTrigger>
            </TabsList>

            <TabsContent value="phone" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>{t("search.phone.title")}</CardTitle>
                  <CardDescription>Nhập số điện thoại để tìm Facebook UUID tương ứng</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-2">
                    <Input
                      placeholder={t("search.phone.placeholder")}
                      value={phoneQuery}
                      onChange={(e) => setPhoneQuery(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handlePhoneSearch()}
                    />
                    <Button onClick={handlePhoneSearch} disabled={isPhoneLoading}>
                      {isPhoneLoading ? (
                        <Loader2 className="h-4 w-4 animate-spin mr-2" />
                      ) : (
                        <Search className="h-4 w-4 mr-2" />
                      )}
                      {isPhoneLoading ? t("search.loading") : t("search.button")}
                    </Button>
                  </div>

                  {phoneResults.length > 0 && (
                    <div className="space-y-4">
                      <h3 className="font-semibold">{t("search.results")}</h3>
                      {phoneResults.map((result) => (
                        <Card key={result.id} className="p-4">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="flex items-center gap-2">
                              <Phone className="h-4 w-4 text-muted-foreground" />
                              <span className="font-mono">{result.phone}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <User className="h-4 w-4 text-muted-foreground" />
                              <span className="font-mono">{result.fbuid}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground">{formatDate(result.created_at)}</span>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="uuid" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>{t("search.uuid.title")}</CardTitle>
                  <CardDescription>Nhập Facebook UUID để tìm số điện thoại tương ứng</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-2">
                    <Input
                      placeholder={t("search.uuid.placeholder")}
                      value={uuidQuery}
                      onChange={(e) => setUuidQuery(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleUuidSearch()}
                    />
                    <Button onClick={handleUuidSearch} disabled={isUuidLoading}>
                      {isUuidLoading ? (
                        <Loader2 className="h-4 w-4 animate-spin mr-2" />
                      ) : (
                        <Search className="h-4 w-4 mr-2" />
                      )}
                      {isUuidLoading ? t("search.loading") : t("search.button")}
                    </Button>
                  </div>

                  {uuidResults.length > 0 && (
                    <div className="space-y-4">
                      <h3 className="font-semibold">{t("search.results")}</h3>
                      {uuidResults.map((result) => (
                        <Card key={result.id} className="p-4">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="flex items-center gap-2">
                              <User className="h-4 w-4 text-muted-foreground" />
                              <span className="font-mono">{result.fbuid}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Phone className="h-4 w-4 text-muted-foreground" />
                              <span className="font-mono">{result.phone}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground">{formatDate(result.created_at)}</span>
                            </div>
                          </div>
                        </Card>
                      ))}
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
