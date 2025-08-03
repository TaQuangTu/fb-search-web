import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Chính Sách Bảo Mật | Privacy Policy",
  description: "Chính sách bảo mật của Facebook Search Tool - cam kết bảo vệ thông tin người dùng.",
}

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Chính Sách Bảo Mật</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-8">Cập nhật lần cuối: {new Date().toLocaleDateString("vi-VN")}</p>

          <h2>1. Thông Tin Chúng Tôi Thu Thập</h2>
          <p>Chúng tôi chỉ thu thập thông tin tối thiểu cần thiết để cung cấp dịch vụ tìm kiếm:</p>
          <ul>
            <li>Thông tin tìm kiếm (số điện thoại hoặc Facebook UUID) - chỉ được xử lý tạm thời</li>
            <li>Thông tin kỹ thuật cơ bản (địa chỉ IP, trình duyệt) để đảm bảo bảo mật</li>
            <li>Cookies cần thiết cho hoạt động của website</li>
          </ul>

          <h2>2. Cách Chúng Tôi Sử Dụng Thông Tin</h2>
          <p>Thông tin được sử dụng để:</p>
          <ul>
            <li>Thực hiện tìm kiếm và trả về kết quả</li>
            <li>Đảm bảo bảo mật và ngăn chặn lạm dụng</li>
            <li>Cải thiện chất lượng dịch vụ</li>
            <li>Tuân thủ các yêu cầu pháp lý</li>
          </ul>

          <h2>3. Bảo Mật Thông Tin</h2>
          <p>Chúng tôi cam kết bảo vệ thông tin của bạn thông qua:</p>
          <ul>
            <li>Mã hóa SSL/TLS cho tất cả dữ liệu truyền tải</li>
            <li>Không lưu trữ thông tin tìm kiếm sau khi xử lý</li>
            <li>Hệ thống bảo mật nhiều lớp</li>
            <li>Kiểm tra bảo mật định kỳ</li>
          </ul>

          <h2>4. Chia Sẻ Thông Tin</h2>
          <p>Chúng tôi KHÔNG chia sẻ, bán hoặc cho thuê thông tin cá nhân của bạn cho bên thứ ba, trừ khi:</p>
          <ul>
            <li>Có sự đồng ý rõ ràng từ bạn</li>
            <li>Được yêu cầu bởi pháp luật</li>
            <li>Cần thiết để bảo vệ quyền lợi hợp pháp của chúng tôi</li>
          </ul>

          <h2>5. Cookies và Công Nghệ Theo Dõi</h2>
          <p>Chúng tôi sử dụng cookies để:</p>
          <ul>
            <li>Ghi nhớ tùy chọn ngôn ngữ</li>
            <li>Đảm bảo bảo mật phiên làm việc</li>
            <li>Phân tích lưu lượng truy cập (Google Analytics)</li>
          </ul>

          <h2>6. Quyền Của Người Dùng</h2>
          <p>Bạn có quyền:</p>
          <ul>
            <li>Yêu cầu xóa thông tin cá nhân</li>
            <li>Từ chối cookies không cần thiết</li>
            <li>Yêu cầu giải thích về việc xử lý dữ liệu</li>
            <li>Khiếu nại về việc xử lý dữ liệu</li>
          </ul>

          <h2>7. Thay Đổi Chính Sách</h2>
          <p>
            Chúng tôi có thể cập nhật chính sách này theo thời gian. Mọi thay đổi quan trọng sẽ được thông báo trên
            website.
          </p>

          <h2>8. Liên Hệ</h2>
          <p>Nếu bạn có câu hỏi về chính sách bảo mật, vui lòng liên hệ:</p>
          <ul>
            <li>Email: privacy@example.com</li>
            <li>Điện thoại: +84 123 456 789</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
