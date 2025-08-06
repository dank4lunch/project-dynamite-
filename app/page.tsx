'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Instagram, MessageCircle, Mail, Phone, Star, Dumbbell, Utensils, Car, Youtube, Music, Award, Zap, Heart, ChefHat, Leaf } from 'lucide-react'
import Image from "next/image"

export default function PackagedDynamiteWebsite() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = {
    mealPrep: [
      {
        title: "Healthy Lifestyle Starter",
        description: "Perfect for beginners looking to kickstart their wellness journey with balanced, nutritious meals.",
        price: "From R280",
        icon: <Heart className="w-6 h-6" />
      },
      {
        title: "Weight Gain Focus",
        description: "Calorie-dense, protein-rich meals designed to support healthy weight gain and muscle building.",
        price: "From R320",
        icon: <Dumbbell className="w-6 h-6" />
      },
      {
        title: "Fat Loss Meals",
        description: "Lean, high-protein meals optimized for fat loss while maintaining muscle mass and energy.",
        price: "From R300",
        icon: <Zap className="w-6 h-6" />
      }
    ],
    platters: [
      {
        title: "Meat Platter",
        description: "Premium selection of grilled and seasoned meats, perfect for protein lovers.",
        price: "From R250",
        icon: <ChefHat className="w-6 h-6" />
      },
      {
        title: "Vegetarian Platter",
        description: "Fresh, vibrant plant-based options that don't compromise on flavor or nutrition.",
        price: "From R220",
        icon: <Leaf className="w-6 h-6" />
      },
      {
        title: "Savoury Platter",
        description: "A delicious mix of savory bites and appetizers for any occasion.",
        price: "From R200",
        icon: <Utensils className="w-6 h-6" />
      },
      {
        title: "Assorted Platter",
        description: "The best of everything - a variety platter with something for everyone.",
        price: "From R280",
        icon: <Star className="w-6 h-6" />
      },
      {
        title: "Fruit Platter",
        description: "Fresh, seasonal fruits beautifully arranged for a healthy, refreshing treat.",
        price: "From R180",
        icon: <Heart className="w-6 h-6" />
      }
    ]
  }

  const testimonials = [
    {
      name: "Sarah M.",
      text: "Boitumelo's meal prep has completely transformed my lifestyle. The weight gain meals helped me reach my fitness goals!",
      rating: 5
    },
    {
      name: "Mike T.",
      text: "The fat loss meals are incredible - tasty, filling, and they actually work. Down 8kg in 3 months!",
      rating: 5
    },
    {
      name: "Lisa K.",
      text: "The platters are perfect for our family gatherings. Always fresh, beautifully presented, and delicious!",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-black to-pink-900">
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse" 
               style={{ animationDelay: '0s', transform: 'translateZ(0)' }} />
          <div className="absolute bottom-40 right-20 w-24 h-24 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full opacity-20 animate-bounce" 
               style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 animate-ping" 
               style={{ animationDelay: '2s' }} />
        </div>

        <div className={`relative z-10 text-center px-4 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="mb-8 relative">
            <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-2xl bg-white/10 backdrop-blur-sm p-6 flex items-center justify-center">
              <Image
                src="/images/dynamite-prep-logo.png"
                alt="Dynamite Prep Logo"
                width={280}
                height={280}
                className="object-contain"
              />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4 bg-gradient-to-r from-green-400 via-emerald-400 to-lime-400 bg-clip-text text-transparent animate-pulse">
            DYNAMITE
          </h1>
          <h2 className="text-3xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-lime-400 via-green-400 to-emerald-400 bg-clip-text text-transparent">
            PREP
          </h2>
          
          <p className="text-lg md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Healthy meals prepared for you by <span className="text-green-400 font-semibold">Boitumelo Lefifi</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold px-8 py-4 text-base md:text-lg transform hover:scale-105 transition-all duration-300">
              <Utensils className="mr-2 h-5 w-5" />
              Order Now
            </Button>
            <Button size="lg" variant="outline" className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-semibold px-8 py-4 text-base md:text-lg transform hover:scale-105 transition-all duration-300">
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-green-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-green-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-green-500/20 md:hidden">
        <div className="flex justify-center py-4">
          <div className="flex gap-4 overflow-x-auto px-4">
            <Button size="sm" variant="ghost" className="text-green-400 whitespace-nowrap">About</Button>
            <Button size="sm" variant="ghost" className="text-green-400 whitespace-nowrap">Services</Button>
            <Button size="sm" variant="ghost" className="text-green-400 whitespace-nowrap">Gallery</Button>
            <Button size="sm" variant="ghost" className="text-green-400 whitespace-nowrap">Contact</Button>
          </div>
        </div>
      </nav>

      {/* About Section */}
      <section className="py-20 px-6 md:px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Meet Melow_fit
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-8" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <Badge variant="secondary" className="bg-green-900 text-green-200 px-4 py-2">
                  <Award className="w-4 h-4 mr-2" />
                  Fit Dynamite
                </Badge>
              </div>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Former <span className="text-green-400 font-semibold">ballroom & Latin American dancer</span>, 
                <span className="text-green-400 font-semibold"> gymnast</span>, 
                <span className="text-yellow-400 font-semibold"> athlete</span>, and 
                <span className="text-blue-400 font-semibold"> swimmer</span> — a true fit dynamite.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Currently the <span className="text-green-400 font-semibold">Exercise Experience Manager at Virgin Active</span>, 
                Boitumelo is now building a premium meal prep and fitness brand called 
                <span className="text-gradient bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent font-bold"> Packaged Dynamite</span>.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Outside of fitness, she's a <span className="text-orange-400 font-semibold">car enthusiast</span> who enjoys 
                unwinding at <span className="text-red-400 font-semibold">Wheels & Smokes events</span>.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                <Badge className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                  <Music className="w-4 h-4 mr-2" />
                  Dancer
                </Badge>
                <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <Dumbbell className="w-4 h-4 mr-2" />
                  Athlete
                </Badge>
                <Badge className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
                  <Car className="w-4 h-4 mr-2" />
                  Car Enthusiast
                </Badge>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 transform hover:scale-105 transition-all duration-500">
                <Image
                  src="/placeholder.svg?height=500&width=400"
                  alt="Boitumelo Lefifi in action"
                  width={400}
                  height={500}
                  className="rounded-2xl object-cover shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur-xl opacity-30 transform scale-105" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 md:px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto mb-8" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Premium meal prep and platters delivered to your door, tailored to your fitness goals
            </p>
          </div>

          {/* Meal Prep Services */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                💥 Meal Prep
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.mealPrep.map((service, index) => (
                <Card key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 border-green-500/20 hover:border-green-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg">
                        {service.icon}
                      </div>
                      <CardTitle className="text-white">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="text-gray-300">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-gradient bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                        {service.price}
                      </span>
                      <Button size="sm" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                        Order
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Platters */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                💥 Platters
              </span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              {services.platters.map((platter, index) => (
                <Card key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 border-green-500/20 hover:border-green-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                  <CardHeader className="pb-3">
                    <div className="flex flex-col items-center text-center">
                      <div className="p-3 bg-gradient-to-r from-green-600 to-blue-600 rounded-full mb-3">
                        {platter.icon}
                      </div>
                      <CardTitle className="text-white text-lg">{platter.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-gray-300 text-sm mb-4 text-center">
                      {platter.description}
                    </CardDescription>
                    <div className="text-center">
                      <span className="text-xl font-bold text-gradient bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent block mb-3">
                        {platter.price}
                      </span>
                      <Button size="sm" className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                        Order
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-6 md:px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Gallery
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-8" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="relative group overflow-hidden rounded-xl">
                <Image
                  src={`/placeholder.svg?height=300&width=300&query=gym training fitness meal prep food platter ${item}`}
                  alt={`Gallery image ${item}`}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 md:px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">
              What Clients Say
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-red-500 mx-auto mb-8" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 border-yellow-500/20 hover:border-yellow-500/50 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                  <p className="text-white font-semibold">— {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 md:px-4 bg-gradient-to-b from-black to-purple-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-8" />
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to transform your lifestyle? Let's connect and start your journey with Packaged Dynamite!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-green-500/20">
              <CardContent className="p-8 text-center">
                <Mail className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-green-300">dynamite.info@gmail.com</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-green-500/20">
              <CardContent className="p-8 text-center">
                <Phone className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">WhatsApp</h3>
                <p className="text-green-300">072 717 1274</p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">Follow the Journey</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-6">
              <Button size="sm" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-sm md:text-base">
                <Instagram className="mr-2 h-4 w-4" />
                @boitumelodark
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-black to-gray-800 hover:from-gray-800 hover:to-black text-sm md:text-base">
                <Music className="mr-2 h-4 w-4" />
                @melowfit
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-green-600 to-lime-600 hover:from-green-700 hover:to-lime-700 text-sm md:text-base">
                <Youtube className="mr-2 h-4 w-4" />
                @melowfit
              </Button>
            </div>
          </div>

          <Separator className="bg-gradient-to-r from-transparent via-green-500 to-transparent mb-8" />
          
          <p className="text-gray-400">
            © 2024 Packaged Dynamite by Boitumelo Lefifi. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  )
}
