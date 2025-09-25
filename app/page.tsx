"use client"

import Link from "next/link"
import Particles from "@/components/particles"
import { Card } from "@/components/card"
import { motion } from "framer-motion"
import { LuzmaiLogo } from "@/components/logo"

// const navigation = [
//   { name: "Acerca de", href: "#about" },
//   { name: "Contacto", href: "#contact" },
// ]

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen overflow-hidden">
      {/* Navigation */}
      {/* <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-gray-300 hover:text-yellow-400 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav> */}

      {/* Top divider */}

      {/* Particles background */}
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={80} />

      {/* Main title */}
      <motion.div 
        className="z-10 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
      >
        <LuzmaiLogo className="w-48 sm:w-64 md:w-72 lg:w-80 h-auto" />
        <motion.div 
          className="mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          {/* <span className="text-sm md:text-lg text-yellow-400/90 font-light tracking-wide">AI Assistant</span> */}
        </motion.div>
      </motion.div>

      {/* Bottom divider */}
      <div className="hidden w-full max-w-4xl h-px mt-10 animate-glow md:block animate-fade-right bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />

      {/* Description */}
      <div className="my-16 text-center animate-fade-in max-w-2xl px-6">
        <h2 className="font-light text-sm md:text-base text-gray-300 leading-relaxed text-balance">
        Asistente de IA que combina tecnología avanzada con calidez humana.
          <br />
          Inspirado en la sabiduría, perseverancia y amor de{" "}
          <span className="text-yellow-400 font-medium">Luz María</span>
          .
          
        </h2>
      </div>

      {/* Feature cards */}
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto px-6 animate-fade-in">
        <Card>
          <div className="relative p-6 text-center">
            <div className="mb-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-yellow-400/20 flex items-center justify-center">
                <span className="text-2xl">🤖</span>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Inteligencia Avanzada</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Tecnología de IA de última generación para asistencia inteligente y personalizada.
            </p>
          </div>
        </Card>

        <Card>
          <div className="relative p-6 text-center">
            <div className="mb-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-pink-400/20 flex items-center justify-center">
                <span className="text-2xl">❤️</span>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Calidez Humana</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Inspirado en valores humanos de solidaridad, creatividad y amor por los demás.
            </p>
          </div>
        </Card>

        <Card>
          <div className="relative p-6 text-center">
            <div className="mb-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-purple-400/20 flex items-center justify-center">
                <span className="text-2xl">✨</span>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Perseverancia</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Diseñado para ser constante, confiable y siempre dispuesto a ayudar.
            </p>
          </div>
        </Card>
      </div> */}

      {/* WhatsApp Contact */}
      <div className="mt-0 mb-8 flex justify-center animate-fade-in">
        <a
          href="https://wa.me/50663271371?text=Hola!"
          target="_blank"
          rel="noopener noreferrer"
          className="group transition-all duration-300 hover:scale-110"
        >
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300 group-hover:bg-green-400">
            <svg
              className="w-8 h-8 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
          </div>
        </a>
      </div>

      {/* Footer */}
      <div className="mt-8 mb-8 px-3 text-center animate-fade-in">
        <p className="text-xs text-gray-400">Hecho con amor y tecnología • Inspirado en Luz María</p>
      </div>
    </div>
  )
}
