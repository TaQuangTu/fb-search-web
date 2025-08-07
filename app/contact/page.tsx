import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: "Liên Hệ | Contact Us",
  description: "Liên hệ với Facebook Search Tool - chúng tôi luôn sẵn sàng hỗ trợ bạn.",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Liên Hệ Với Chúng Tôi</h1>
          <p className="text-lg text-muted-foreground">
            Chúng tôi luôn sẵn sàng hỗ trợ và giải đáp mọi thắc mắc của bạn
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Gửi Tin Nhắn</CardTitle>
              <CardDescription className="text-base">Điền thông tin bên dưới và chúng tôi sẽ phản hồi trong vòng 24 giờ</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Họ và Tên</label>
                  <Input placeholder="Nhập họ và tên của bạn" className="text-base" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="your@email.com" className="text-base" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Số Điện Thoại</label>
                <Input placeholder="Nhập số điện thoại của bạn" className="text-base" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Chủ Đề</label>
                <Input placeholder="Chủ đề tin nhắn" className="text-base" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Nội Dung</label>
                <Textarea placeholder="Nhập nội dung tin nhắn của bạn..." className="min-h-[120px] text-base" />
              </div>
              <Button className="w-full">
                <Mail className="mr-2 h-4 w-4" />
                Gửi Tin Nhắn
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Mail className="mr-2 h-5 w-5" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">Hỗ trợ chung:</p>
                <p className="font-medium text-base">support@example.com</p>
                <p className="text-sm text-muted-foreground mb-2 mt-4">Hỗ trợ kỹ thuật:</p>
                <p className="font-medium text-base">tech@example.com</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Phone className="mr-2 h-5 w-5" />
                  Điện Thoại
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">Hotline:</p>
                <p className="font-medium text-base">+84 123 456 789</p>
                <p className="text-sm text-muted-foreground mb-2 mt-4">Hỗ trợ kỹ thuật:</p>
                <p className="font-medium text-base">+84 987 654 321</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <MapPin className="mr-2 h-5 w-5" />
                  Địa Chỉ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium text-base">Facebook Search Tool</p>
                <p className="text-sm text-muted-foreground">
                  123 Đường Nguyễn Huệ
                  <br />
                  Quận 1, TP. Hồ Chí Minh
                  <br />
                  Việt Nam
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Clock className="mr-2 h-5 w-5" />
                  Giờ Làm Việc
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-base">
                    <span>Thứ 2 - Thứ 6:</span>
                    <span className="font-medium">8:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between text-base">
                    <span>Thứ 7:</span>
                    <span className="font-medium">9:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between text-base">
                    <span>Chủ Nhật:</span>
                    <span className="font-medium">Nghỉ</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-xl font-bold text-center mb-8">Câu Hỏi Thường Gặp</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Làm thế nào để báo cáo lỗi?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Bạn có thể gửi email đến tech@example.com với mô tả chi tiết về lỗi và chúng tôi sẽ khắc phục trong
                  thời gian sớm nhất.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Thời gian phản hồi là bao lâu?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Chúng tôi cam kết phản hồi trong vòng 24 giờ cho email và ngay lập tức cho các cuộc gọi trong giờ làm
                  việc.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Có hỗ trợ tiếng Anh không?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Có, chúng tôi hỗ trợ cả tiếng Việt và tiếng Anh. Bạn có thể liên hệ bằng ngôn ngữ mà bạn cảm thấy
                  thoải mái.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Có thể đặt lịch hẹn không?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Đối với các vấn đề phức tạp, bạn có thể đặt lịch hẹn tư vấn qua email hoặc điện thoại.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
