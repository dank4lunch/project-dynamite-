"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, ShoppingBag, Utensils } from "lucide-react"
import SiteNavbar from "@/components/site-navbar"

export default function Page() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  // Section ids
  const sections = {
    home: "home",
    about: "about",
    services: "services",
    merch: "merch",
    gallery: "gallery",
    contact: "contact",
  }

  const openWhatsApp = (message: string) => {
    const phone = "27727171274"
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer")
  }

  const services = [
    {
      title: "Healthy Lifestyle Starter",
      description: "Balanced, nutritious meals to kickstart your routine.",
      price: "From R280",
    },
    {
      title: "Weight Gain Focus",
      description: "Calorie-dense, protein-forward meals for lean gains.",
      price: "From R320",
    },
    {
      title: "Fat Loss Meals",
      description: "Lean, high-protein meals to cut while feeling fueled.",
      price: "From R300",
    },
  ]

  const gallery = [
    { src: "/images/gallery/trays-1.jpg", alt: "Meal prep trays with chicken and vegetables" },
    { src: "/images/gallery/trays-2.jpg", alt: "Meal prep trays with corn, rice and chicken" },
    { src: "/images/gallery/melowfit-1.jpg", alt: "Fitness trainer smiling on outdoor gym turf" },
    { src: "/images/gallery/melowfit-2.jpg", alt: "Fitness trainer playful pose on outdoor gym turf" },
    { src: "/images/merch/platter.jpg", alt: "Savory snack platter" },
  ]

  const merch = [
    {
      title: "Packaged Dynamite Hoodie",
      image: "/images/merch/hoodies.jpg",
      description: "Soft fleece, black with premium front print. Sizes S–XXL.",
      price: "From R499",
      cta: () => openWhatsApp("Hi! I want to order the Packaged Dynamite Hoodie (size __, qty __)."),
    },
    {
      title: "Packaged Dynamite Cap",
      image: "/images/merch/caps.jpg",
      description: "Crisp white cap with embroidered logo. One size fits most.",
      price: "From R199",
      cta: () => openWhatsApp("Hi! I want to order a Packaged Dynamite Cap (qty __)."),
    },
    {
      title: "Branded Gift / Shopper Bag",
      image: "/images/merch/bags.jpg",
      description: "Black/White gift bags for collections, events & gifting.",
      price: "From R49",
      cta: () => openWhatsApp("Hi! I want to order Branded Gift/Shopper Bags (color __, qty __)."),
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      <SiteNavbar sections={sections} />

      {/* Short Hero */}
      <section
        id={sections.home}
        className="scroll-mt-24 relative flex min-h-[68vh] items-center justify-center bg-gradient-to-br from-emerald-900 via-black to-green-900 px-4 pt-16"
      >
        <div
          className={`relative z-10 mx-auto max-w-4xl text-center transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <div className="mx-auto mb-6 h-24 w-24 rounded-full bg-white/5 p-2 ring-1 ring-white/10 sm:h-28 sm:w-28">
            <Image
              src="/images/packaged-dynamite-logo.jpg"
              alt="Packaged Dynamite emblem logo"
              width={256}
              height={256}
              className="h-full w-full rounded-full object-contain"
              priority
            />
          </div>
          <h1 className="text-balance bg-gradient-to-r from-green-400 via-emerald-400 to-lime-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl">
            Packaged Dynamite
          </h1>
          <p className="mt-3 text-lg text-gray-300 sm:text-xl">
            Refining your fitness level. Premium meal prep, empowering results.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              onClick={() => document.getElementById(sections.services)?.scrollIntoView({ behavior: "smooth" })}
              className="rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-5 text-base font-semibold hover:from-green-700 hover:to-emerald-700"
            >
              <Utensils className="mr-2 h-5 w-5" />
              Order Meals
            </Button>
            <Button
              variant="outline"
              onClick={() => document.getElementById(sections.merch)?.scrollIntoView({ behavior: "smooth" })}
              className="rounded-xl border-emerald-400/50 bg-white/5 px-6 py-5 text-base font-semibold text-emerald-300 hover:bg-white/10 hover:text-white"
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              Shop Merch
            </Button>
          </div>
        </div>

        {/* Subtle orbs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 -left-10 h-48 w-48 rounded-full bg-emerald-500/20 blur-2xl" />
          <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-lime-400/20 blur-2xl" />
        </div>
      </section>

      {/* About (compact) */}
      <section id={sections.about} className="scroll-mt-24 bg-gradient-to-b from-black to-gray-900 px-4 py-12">
        <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">About</h2>
            <p className="mt-3 text-gray-300">
              Melow_fit is a former ballroom & Latin American dancer, gymnast, athlete, and swimmer — a true fit
              dynamite. Now building a premium meal prep and fitness brand:{" "}
              <span className="text-emerald-400 font-semibold">Packaged Dynamite</span>.
            </p>
            <p className="mt-3 text-gray-300">
              Outside of fitness, she’s a car enthusiast who enjoys unwinding at Wheels & Smokes events.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10">
            <Image
              src="/images/merch/studio.jpg"
              alt="In-studio training with Packaged Dynamite energy"
              width={1000}
              height={800}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services (compact cards) */}
      <section id={sections.services} className="scroll-mt-24 bg-gradient-to-b from-gray-900 to-black px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold">Meal Prep</h2>
            <p className="mt-2 text-gray-300">Tailored plans delivered to your door.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Card
                key={s.title}
                className="bg-gradient-to-br from-gray-800 to-gray-900 border-emerald-500/20 transition-all hover:border-emerald-500/50 hover:shadow-[0_16px_48px_-12px_rgba(16,185,129,0.45)]"
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-white">{s.title}</CardTitle>
                  <CardDescription className="text-gray-300">{s.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-between">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-2xl font-bold text-transparent">
                    {s.price}
                  </span>
                  <Button
                    className="rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                    onClick={() => openWhatsApp(`Hi! I'd like to order: ${s.title} (${s.price}).`)}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Merch section (products + quick banner) */}
      <section id={sections.merch} className="scroll-mt-24 bg-gradient-to-b from-black to-gray-900 px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold">Merch Drop</h2>
            <p className="mt-2 text-gray-300">Limited runs. Premium feel. Wear the energy.</p>
          </div>
          <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {merch.map((m) => (
              <Card
                key={m.title}
                className="overflow-hidden border-emerald-500/20 bg-gradient-to-b from-gray-900 to-gray-950 transition hover:border-emerald-500/50"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={m.image || "/placeholder.svg"}
                    alt={m.title}
                    width={1200}
                    height={800}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-white">{m.title}</CardTitle>
                  <CardDescription className="text-gray-300">{m.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-between">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-xl font-bold text-transparent">
                    {m.price}
                  </span>
                  <Button
                    className="rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                    onClick={m.cta}
                  >
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Order
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Merch banner */}
          <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10">
            <Image
              src="/images/merch/gym-hoodies.jpg"
              alt="Hoodies being worn in the gym"
              width={1600}
              height={1000}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
            <div className="absolute left-6 top-6 max-w-xl">
              <h3 className="text-2xl font-semibold">Community Built. Performance Ready.</h3>
              <p className="mt-2 text-gray-200">
                Hoodies, caps and shopper bags to power your sessions and rep the brand.
              </p>
              <div className="mt-4">
                <Button
                  className="rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                  onClick={() => openWhatsApp("Hi! Please send me the current Packaged Dynamite merch catalogue.")}
                >
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  Request Catalogue
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id={sections.gallery} className="scroll-mt-24 bg-gradient-to-b from-gray-900 to-black px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold">Gallery</h2>
            <p className="mt-2 text-gray-300">From prep to performance.</p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {gallery.map((g) => (
              <div key={g.src} className="group relative overflow-hidden rounded-xl">
                <Image
                  src={g.src || "/placeholder.svg"}
                  alt={g.alt}
                  width={900}
                  height={900}
                  className="aspect-square h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section id={sections.contact} className="scroll-mt-24 bg-gradient-to-b from-black to-emerald-900 px-4 py-12">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div>
            <h3 className="text-xl font-semibold text-white">Ready to get started?</h3>
            <p className="text-gray-300">Order meals or merch via WhatsApp and we’ll confirm details and delivery.</p>
          </div>
          <div className="flex gap-3">
            <Button
              className="rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
              onClick={() => openWhatsApp("Hi! I’d like to place a meal prep order.")}
            >
              <Utensils className="mr-2 h-4 w-4" />
              Order Meals
            </Button>
            <Button
              variant="outline"
              className="rounded-xl border-emerald-400/50 bg-white/5 text-emerald-300 hover:bg-white/10 hover:text-white"
              onClick={() => openWhatsApp("Hi! I’d like to order Packaged Dynamite merch.")}
            >
              <ShoppingBag className="mr-2 h-4 w-4" />
              Order Merch
            </Button>
          </div>
        </div>
        <p className="mt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Packaged Dynamite. All rights reserved.
        </p>
      </section>
    </main>
  )
}
