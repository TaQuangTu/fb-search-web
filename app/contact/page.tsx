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
          <h1 className="text-4xl font-bold mb-4">Liên Hệ Với Chúng Tôi</h1>
          <p className="text-xl text-muted-foreground">
            Chúng tôi luôn sẵn sàng hỗ trợ và giải đáp mọi thắc mắc của bạn
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Gửi Tin Nhắn</CardTitle>
              <CardDescription>Điền thông tin bên dưới và chúng tôi sẽ phản hồi trong vòng 24 giờ</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Họ và Tên</label>
                  <Input placeholder="Nhập họ và tên của bạn" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Số Điện Thoại</label>
                <Input placeholder="Nhập số điện thoại của bạn" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Chủ Đề</label>
                <Input placeholder="Chủ đề tin nhắn" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Nội Dung</label>
                <Textarea placeholder="Nhập nội dung tin nhắn của bạn..." className="min-h-[120px]" />
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
                <CardTitle className="flex items-center">
                  <Mail className="mr-2 h-5 w-5" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">Hỗ trợ chung:</p>
                <p className="font-medium">support@example.com</p>
                <p className="text-muted-foreground mb-2 mt-4">Hỗ trợ kỹ thuật:</p>
                <p className="font-medium">tech@example.com</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Điện Thoại
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">Hotline:</p>
                <p className="font-medium">+84
