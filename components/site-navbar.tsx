"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, MessageCircle } from "lucide-react"

type Sections = {
  home: string
  about: string
  services: string
  merch: string
  gallery: string
  contact: string
}

const defaultSections: Sections = {
  home: "home",
  about: "about",
  services: "services",
  merch: "merch",
  gallery: "gallery",
  contact: "contact",
}

export function SiteNavbar({ sections = defaultSections }: { sections?: Sections }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollToId = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const openWhatsApp = () => {
    const phone = "27727171274"
    const text = encodeURIComponent("Hi! I’d like to place an order with Packaged Dynamite.")
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank", "noopener,noreferrer")
  }

  const NavLink = ({ id, label }: { id: string; label: string }) => (
    <button
      onClick={() => scrollToId(id)}
      className="px-3 py-2 text-sm font-medium text-gray-200 hover:text-white hover:opacity-100 opacity-90 transition"
      aria-label={`Go to ${label}`}
    >
      {label}
    </button>
  )

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "bg-black/70 backdrop-blur-md border-b border-emerald-500/20" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Left: Logo */}
        <button
          onClick={() => scrollToId(sections.home)}
          className="flex items-center gap-2 focus:outline-none"
          aria-label="Go to top"
        >
          <div className="h-9 w-9 overflow-hidden rounded-full ring-1 ring-white/10">
            <Image
              src="/images/packaged-dynamite-logo.jpg"
              alt="Packaged Dynamite logo"
              width={64}
              height={64}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <span className="hidden text-sm font-semibold tracking-wide text-white/90 sm:inline">Packaged Dynamite</span>
        </button>

        {/* Center: Links (desktop) */}
        <div className="hidden items-center gap-1 md:flex">
          <NavLink id={sections.about} label="About" />
          <NavLink id={sections.services} label="Services" />
          <NavLink id={sections.merch} label="Merch" />
          <NavLink id={sections.gallery} label="Gallery" />
          <NavLink id={sections.contact} label="Contact" />
        </div>

        {/* Right: CTA */}
        <div className="hidden md:block">
          <Button
            onClick={openWhatsApp}
            className="rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 px-5 py-5 text-sm font-semibold hover:from-green-700 hover:to-emerald-700 shadow-[0_6px_16px_rgba(16,185,129,0.35)]"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            WhatsApp Order
          </Button>
        </div>

        {/* Mobile: Menu toggle */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile overlay menu */}
      {open && (
        <div className="md:hidden">
          <div className="border-t border-emerald-500/20 bg-black/90 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl flex-col px-4 py-3">
              <button
                className="rounded-lg px-3 py-3 text-left text-base font-medium text-gray-200 hover:bg-white/5"
                onClick={() => scrollToId(sections.about)}
              >
                About
              </button>
              <button
                className="rounded-lg px-3 py-3 text-left text-base font-medium text-gray-200 hover:bg-white/5"
                onClick={() => scrollToId(sections.services)}
              >
                Services
              </button>
              <button
                className="rounded-lg px-3 py-3 text-left text-base font-medium text-gray-200 hover:bg-white/5"
                onClick={() => scrollToId(sections.merch)}
              >
                Merch
              </button>
              <button
                className="rounded-lg px-3 py-3 text-left text-base font-medium text-gray-200 hover:bg-white/5"
                onClick={() => scrollToId(sections.gallery)}
              >
                Gallery
              </button>
              <button
                className="rounded-lg px-3 py-3 text-left text-base font-medium text-gray-200 hover:bg-white/5"
                onClick={() => scrollToId(sections.contact)}
              >
                Contact
              </button>
              <div className="mt-2">
                <Button
                  onClick={openWhatsApp}
                  className="w-full rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 py-6 text-base font-semibold hover:from-green-700 hover:to-emerald-700"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Order
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default SiteNavbar
