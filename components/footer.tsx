"use client"

import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { Facebook, Twitter, Mail, Phone, MapPin, Heart } from 'lucide-react'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">FB</span>
              </div>
              <span className="font-bold text-2xl">Facebook Search</span>
            </div>
            <p className="text-gray-300 leading-relaxed">{t("footer.about.desc")}</p>
            <div className="flex space-x-4">
              <div className="h-10 w-10 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center cursor-pointer transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </div>
              <div className="h-10 w-10 rounded-full bg-blue-400 hover:bg-blue-500 flex items-center justify-center cursor-pointer transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </div>
              <div className="h-10 w-10 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center cursor-pointer transition-colors duration-300">
                <Mail className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-6">
            <h3 className="font-bold text-xl text-white">{t("footer.links")}</h3>
            <div className="space-y-3">
              {[
                { name: t("nav.home"), href: "/" },
                { name: t("nav.about"), href: "/about" },
                { name: t("nav.contact"), href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-6">
            <h3 className="font-bold text-xl text-white">{t("footer.legal")}</h3>
            <div className="space-y-3">
              {[
                { name: t("nav.privacy"), href: "/privacy" },
                { name: t("nav.terms"), href: "/terms" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="font-bold text-xl text-white">{t("footer.contact.title")}</h3>
            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 mr-3 text-primary" />
                <span>support@example.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 mr-3 text-primary" />
                <span>+84 123 456 789</span>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="h-5 w-5 mr-3 text-primary mt-1" />
                <span>123 Đường Nguyễn Huệ<br />Quận 1, TP.HCM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              {t("footer.rights")}
            </p>
            <p className="text-gray-400 flex items-center">
              {t("footer.made_with_love")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
