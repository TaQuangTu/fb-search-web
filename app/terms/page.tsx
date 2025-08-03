import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Điều Khoản Sử Dụng | Terms of Service",
  description: "Điều khoản sử dụng dịch vụ Facebook Search Tool - quy định và hướng dẫn sử dụng.",
}

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Điều Khoản Sử Dụng</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-8">Cập nhật lần cuối: {new Date().toLocaleDateString("vi-VN")}</p>

          <h2>1. Chấp Nhận Điều Khoản</h2>
          <p>
            Bằng việc truy cập và sử dụng Facebook Search Tool, bạn đồng ý tuân thủ các điều khoản và điều kiện được nêu
            trong tài liệu này. Nếu bạn không đồng ý với bất kỳ điều khoản nào, vui lòng không sử dụng dịch vụ của chúng
            tôi.
          </p>

          <h2>2. Mô Tả Dịch Vụ</h2>
          <p>
            Facebook Search Tool cung cấp dịch vụ tìm kiếm thông tin giữa Facebook UUID và số điện thoại. Dịch vụ được
            cung cấp "như hiện tại" và chúng tôi có quyền thay đổi, tạm ngừng hoặc chấm dứt dịch vụ bất kỳ lúc nào.
          </p>

          <h2>3. Sử Dụng Hợp Pháp</h2>
          <p>Bạn đồng ý sử dụng dịch vụ chỉ cho các mục đích hợp pháp và không:</p>
          <ul>
            <li>Vi phạm bất kỳ luật pháp nào</li>
            <li>Xâm phạm quyền riêng tư của người khác</li>
            <li>Sử dụng để quấy rối, đe dọa hoặc làm hại người khác</li>
            <li>Tấn công hoặc làm gián đoạn hệ thống</li>
            <li>Sử dụng robot, bot hoặc công cụ tự động</li>
          </ul>

          <h2>4. Giới Hạn Trách Nhiệm</h2>
          <p>
            Chúng tôi không đảm bảo tính chính xác 100% của kết quả tìm kiếm và không chịu trách nhiệm về bất kỳ thiệt
            hại nào phát sinh từ việc sử dụng dịch vụ, bao gồm nhưng không giới hạn:
          </p>
          <ul>
            <li>Thiệt hại trực tiếp hoặc gián tiếp</li>
            <li>Mất mát dữ liệu hoặc lợi nhuận</li>
            <li>Gián đoạn kinh doanh</li>
            <li>Thiệt hại do thông tin không chính xác</li>
          </ul>

          <h2>5. Quyền Sở Hữu Trí Tuệ</h2>
          <p>
            Tất cả nội dung, thiết kế, logo, và công nghệ của Facebook Search Tool đều thuộc quyền sở hữu của chúng tôi
            và được bảo vệ bởi luật sở hữu trí tuệ.
          </p>

          <h2>6. Chính Sách Bảo Mật</h2>
          <p>
            Việc thu thập và sử dụng thông tin được điều chỉnh bởi Chính Sách Bảo Mật của chúng tôi, là một phần không
            tách rời của các điều khoản này.
          </p>

          <h2>7. Chấm Dứt Dịch Vụ</h2>
          <p>
            Chúng tôi có quyền chấm dứt hoặc tạm ngừng quyền truy cập của bạn vào dịch vụ nếu bạn vi phạm các điều khoản
            này.
          </p>

          <h2>8. Thay Đổi Điều Khoản</h2>
          <p>
            Chúng tôi có thể cập nhật các điều khoản này theo thời gian. Mọi thay đổi sẽ có hiệu lực ngay khi được đăng
            tải trên website. Việc tiếp tục sử dụng dịch vụ sau khi có thay đổi được coi là bạn chấp nhận các điều khoản
            mới.
          </p>

          <h2>9. Luật Áp Dụng</h2>
          <p>
            Các điều khoản này được điều chỉnh bởi pháp luật Việt Nam. Mọi tranh chấp sẽ được giải quyết tại tòa án có
            thẩm quyền tại Việt Nam.
          </p>

          <h2>10. Liên Hệ</h2>
          <p>Nếu bạn có câu hỏi về các điều khoản này, vui lòng liên hệ:</p>
          <ul>
            <li>Email: legal@example.com</li>
            <li>Điện thoại: +84 123 456 789</li>
            <li>Địa chỉ: 123 Đường ABC, Quận 1, TP.HCM</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
