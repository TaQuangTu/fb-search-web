"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useLanguage } from "@/components/language-provider"

export function FAQ() {
  const { t } = useLanguage()

  const faqs = [
    {
      question: t("faq.q1"),
      answer: t("faq.a1"),
    },
    {
      question: t("faq.q2"),
      answer: t("faq.a2"),
    },
    {
      question: t("faq.q3"),
      answer: t("faq.a3"),
    },
    {
      question: "Tôi có thể tìm kiếm bao nhiều lần?",
      answer: "Không có giới hạn số lần tìm kiếm. Bạn có thể sử dụng dịch vụ không giới hạn.",
    },
    {
      question: "Dữ liệu có được cập nhật thường xuyên không?",
      answer: "Cơ sở dữ liệu được cập nhật thường xuyên để đảm bảo tính chính xác của kết quả.",
    },
    {
      question: "Tôi có thể báo cáo thông tin sai lệch không?",
      answer: "Có, bạn có thể liên hệ với chúng tôi qua trang liên hệ để báo cáo bất kỳ thông tin sai lệch nào.",
    },
  ]

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t("faq.title")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tìm câu trả lời cho những câu hỏi thường gặp về dịch vụ của chúng tôi
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
