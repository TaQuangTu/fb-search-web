import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Target, Users, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Giới Thiệu | About Us",
  description: "Tìm hiểu về Facebook Search Tool - công cụ tìm kiếm Facebook UUID và số điện thoại hàng đầu.",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Giới Thiệu Về Chúng Tôi</h1>
          <p className="text-xl text-muted-foreground">
            Facebook Search Tool - Công cụ tìm kiếm Facebook UUID và số điện thoại hàng đầu
          </p>
        </div>

        <div className="prose prose-lg max-w-none mb-12">
          <p>
            Facebook Search Tool là một nền tảng công nghệ tiên tiến, chuyên cung cấp dịch vụ tìm kiếm và tra cứu thông
            tin giữa Facebook UUID và số điện thoại. Chúng tôi cam kết mang đến cho người dùng một công cụ tìm kiếm
            nhanh chóng, chính xác và bảo mật.
          </p>

          <p>
            Với sứ mệnh kết nối thông tin một cách hiệu quả, chúng tôi đã phát triển một hệ thống tìm kiếm mạnh mẽ có
            khả năng xử lý hàng triệu truy vấn mỗi ngày. Dịch vụ của chúng tôi được thiết kế để phục vụ cả cá nhân và
            doanh nghiệp có nhu cầu tra cứu thông tin Facebook.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card>
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Sứ Mệnh</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Cung cấp công cụ tìm kiếm thông tin Facebook chính xác, nhanh chóng và bảo mật cho mọi người dùng trên
                toàn thế giới.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Tầm Nhìn</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Trở thành nền tảng tìm kiếm thông tin Facebook hàng đầu, được tin tưởng bởi hàng triệu người dùng trên
                toàn cầu.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Bảo Mật</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Chúng tôi cam kết bảo vệ quyền riêng tư của người dùng và không lưu trữ bất kỳ thông tin tìm kiếm nào.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Cộng Đồng</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Phục vụ cộng đồng với dịch vụ miễn phí, hỗ trợ đa ngôn ngữ và giao diện thân thiện với người dùng.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="bg-muted/50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Tại Sao Chọn Chúng Tôi?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">🚀 Tốc Độ Cao</h3>
              <p className="text-muted-foreground">Kết quả tìm kiếm được trả về trong vòng vài giây</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">🎯 Độ Chính Xác</h3>
              <p className="text-muted-foreground">Tỷ lệ chính xác cao với cơ sở dữ liệu được cập nhật thường xuyên</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">🔒 Bảo Mật</h3>
              <p className="text-muted-foreground">Mã hóa dữ liệu và không lưu trữ thông tin cá nhân</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">💰 Miễn Phí</h3>
              <p className="text-muted-foreground">Hoàn toàn miễn phí cho tất cả người dùng</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
