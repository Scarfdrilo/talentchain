"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState<"student" | "company" | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-lg flex items-center justify-center">
              <span className="text-xl">⛓️</span>
            </div>
            <span className="text-2xl font-bold text-white">TalentChain</span>
          </div>
          <div className="hidden md:flex gap-8 text-gray-300">
            <a href="#como-funciona" className="hover:text-purple-400 transition">Cómo Funciona</a>
            <a href="#beneficios" className="hover:text-purple-400 transition">Beneficios</a>
            <a href="#tokenomics" className="hover:text-purple-400 transition">Tokenomics</a>
          </div>
          <button className="bg-gradient-to-r from-purple-600 to-cyan-500 px-6 py-2 rounded-full text-white font-semibold hover:opacity-90 transition">
            Únete al Waitlist
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-purple-500/20 rounded-full border border-purple-500/30">
            <span className="text-purple-300 text-sm">🚀 Construido en Monad</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Tu experiencia es tu
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text"> moneda</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Conectamos estudiantes y devs con empresas. Cada práctica, proyecto y logro 
            se convierte en credenciales verificables on-chain. Gana tokens por construir tu historial.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-gradient-to-r from-purple-600 to-cyan-500 px-8 py-4 rounded-full text-white font-bold text-lg hover:scale-105 transition transform">
              Soy Estudiante/Dev 🎓
            </button>
            <button className="bg-white/10 border border-white/20 px-8 py-4 rounded-full text-white font-bold text-lg hover:bg-white/20 transition">
              Soy Empresa 🏢
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "10K+", label: "Estudiantes" },
              { number: "500+", label: "Empresas" },
              { number: "25K+", label: "Credenciales" },
              { number: "$2M+", label: "En tokens" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            El problema que resolvemos
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎓",
                title: "Estudiantes sin experiencia",
                desc: "Necesitas prácticas para titularte, pero nadie te contrata sin experiencia. Ciclo infinito."
              },
              {
                icon: "💼",
                title: "CVs inflados",
                desc: "Las empresas no pueden verificar si realmente sabes lo que dices. LinkedIn es puro humo."
              },
              {
                icon: "🔗",
                title: "Desconexión total",
                desc: "Universidades, empresas y talento no están conectados de forma eficiente."
              }
            ].map((item, i) => (
              <div key={i} className="bg-slate-900/50 border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/50 transition">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="como-funciona" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            Cómo Funciona
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Un sistema simple que beneficia a todos los involucrados
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* For Students */}
            <div className="bg-gradient-to-br from-purple-900/50 to-slate-900 border border-purple-500/30 rounded-3xl p-10">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold text-white mb-6">Para Estudiantes / Devs</h3>
              <ul className="space-y-4">
                {[
                  "Crea tu perfil con skills y nivel",
                  "Completa retos y prácticas reales",
                  "Gana tokens por cada logro verificado",
                  "Construye historial on-chain inmutable",
                  "Conecta con empresas que buscan tu perfil"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <span className="text-cyan-400 mt-1">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* For Companies */}
            <div className="bg-gradient-to-br from-cyan-900/50 to-slate-900 border border-cyan-500/30 rounded-3xl p-10">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold text-white mb-6">Para Empresas</h3>
              <ul className="space-y-4">
                {[
                  "Publica oportunidades y retos",
                  "Verifica talento con evidencia real",
                  "Ahorra tiempo en reclutamiento",
                  "Construye reputación como empleador",
                  "Accede a talento pre-verificado"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <span className="text-purple-400 mt-1">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics */}
      <section id="tokenomics" className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            Tokenomics 💎
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Incentivos reales para todos los participantes del ecosistema
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🎯", title: "Gana Tokens", desc: "Completa prácticas, proyectos y retos" },
              { icon: "✅", title: "Valida", desc: "Verifica el trabajo de otros y gana" },
              { icon: "🔓", title: "Desbloquea", desc: "Usa tokens para features premium" },
              { icon: "📈", title: "Crece", desc: "Más reputación = más oportunidades" },
            ].map((item, i) => (
              <div key={i} className="bg-slate-900/80 border border-purple-500/20 rounded-2xl p-6 text-center hover:scale-105 transition transform">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 rounded-2xl p-8 text-center">
            <p className="text-lg text-gray-300 mb-2">Construido sobre</p>
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
              Monad Blockchain
            </div>
            <p className="text-gray-400 mt-2">EVM compatible • Alta velocidad • Bajo costo</p>
          </div>
        </div>
      </section>

      {/* Benefits Comparison */}
      <section id="beneficios" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            ¿Por qué TalentChain?
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-purple-500/30">
                  <th className="py-4 px-6 text-gray-400">Feature</th>
                  <th className="py-4 px-6 text-gray-400">LinkedIn</th>
                  <th className="py-4 px-6 text-gray-400">Credly</th>
                  <th className="py-4 px-6 text-purple-400 font-bold">TalentChain</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                {[
                  ["Verificación real", "❌", "✅", "✅"],
                  ["Blockchain", "❌", "❌", "✅"],
                  ["Experiencia informal", "⚠️", "❌", "✅"],
                  ["Reputación dinámica", "❌", "❌", "✅"],
                  ["Incentivos en tokens", "❌", "❌", "✅"],
                  ["Matching laboral", "⚠️", "❌", "✅"],
                ].map((row, i) => (
                  <tr key={i} className="border-b border-slate-700/50 hover:bg-slate-800/30">
                    <td className="py-4 px-6 font-medium">{row[0]}</td>
                    <td className="py-4 px-6">{row[1]}</td>
                    <td className="py-4 px-6">{row[2]}</td>
                    <td className="py-4 px-6 text-lg">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Únete al futuro del talento verificable
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Sé de los primeros en construir tu historial on-chain
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 rounded-full bg-slate-800 border border-purple-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
            />
            <button className="bg-gradient-to-r from-purple-600 to-cyan-500 px-8 py-4 rounded-full text-white font-bold hover:scale-105 transition transform">
              Unirme 🚀
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-lg flex items-center justify-center">
              <span>⛓️</span>
            </div>
            <span className="text-xl font-bold text-white">TalentChain</span>
          </div>
          <p className="text-gray-500">
            © 2024 TalentChain. Construido con 💜 para el hackathon de Monad
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-purple-400 transition">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition">Discord</a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
