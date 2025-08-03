"use client"

import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { Facebook, Twitter, Mail, Phone } from "lucide-react"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">{t("footer.about")}</h3>
            <p className="text-sm text-muted-foreground">{t("footer.about.desc")}</p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Mail className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">{t("footer.links")}</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-sm text-muted-foreground hover:text-primary">
                {t("nav.home")}
              </Link>
              <Link href="/about" className="block text-sm text-muted-foreground hover:text-primary">
                {t("nav.about")}
              </Link>
              <Link href="/contact" className="block text-sm text-muted-foreground hover:text-primary">
                {t("nav.contact")}
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">{t("footer.legal")}</h3>
            <div className="space-y-2">
              <Link href="/privacy" className="block text-sm text-muted-foreground hover:text-primary">
                {t("nav.privacy")}
              </Link>
              <Link href="/terms" className="block text-sm text-muted-foreground hover:text-primary">
                {t("nav.terms")}
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">{t("footer.contact.title")}</h3>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                support@example.com
              </p>
              <p className="text-sm text-muted-foreground flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                +84 123 456 789
              </p>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">{t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  )
}
