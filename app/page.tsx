"use client"

import Link from "next/link"
import Particles from "@/components/particles"
import { Card } from "@/components/card"
import { motion } from "framer-motion"

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
        <motion.h1 
          className="py-3.5 px-0.5 text-3xl text-transparent bg-gradient-to-br from-white via-yellow-400 to-pink-400 cursor-default font-serif sm:text-5xl md:text-7xl lg:text-8xl whitespace-nowrap bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1,
            delay: 0.3,
            ease: "easeOut"
          }}
          whileHover={{ 
            scale: 1.05,
            textShadow: "0 0 20px rgba(251, 191, 36, 0.5)"
          }}
        >
          Luzmai
        </motion.h1>
        <motion.div 
          className="mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <span className="text-sm md:text-lg text-yellow-400/90 font-light tracking-wide">AI Assistant</span>
        </motion.div>
      </motion.div>

      {/* Bottom divider */}
      <div className="hidden w-screen h-px mt-3 animate-glow md:block animate-fade-right bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />

      {/* Description */}
      <div className="my-16 text-center animate-fade-in max-w-2xl px-6">
        <h2 className="font-light text-sm md:text-base text-gray-300 leading-relaxed text-balance">
          Inspirado en la sabiduría, perseverancia y amor de{" "}
          <span className="text-yellow-400 font-medium">Luz María</span>
          .
          <br />
          Un asistente de IA que combina tecnología avanzada con calidez humana.
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

      {/* Footer */}
      <div className="mt-20 mb-8 px-3 text-center animate-fade-in">
        <p className="text-xs text-gray-400">Hecho con amor y tecnología • Inspirado en Luz María</p>
      </div>
    </div>
  )
}
