"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    logo: "/logos/dazie.svg",
    savings: "8 000€ économisés",
    quote:
      "Dès le départ, l’équipe a surtout travaillé sur l’optimisation de ma rémunération. Ils ont ensuite structuré toute l’organisation fiscale autour de mon activité. J’ai surtout apprécié leur disponibilité et leur capacité à expliquer les choses simplement.",
    name: "Amélia P.",
    role: "Fondatrice de Dazie",
  },
  {
    logo: "/logos/AI.svg",
    savings: "15 000€ économisés",
    quote:
      "L’accompagnement a été très fluide du début à la fin avec les avocats en charge de ma situation. On sent qu’il y a une vraie expertise derrière avec un accompagnement très humain.",
    name: "Enzo K.",
    role: "Fondateur de Aparté",
  },
  {
    logo: "",
    savings: "27 000€ économisés",
    quote:
      "Le cabinet m’a proposé une stratégie de rémunération adaptée à ma situation. J’ai pu augmenter ma rémunération tout en réduisant mes charges sociales.",
    name: "Elies D.",
    role: "Edel Engineering",
  },
  {
    logo: "",
    savings: "6 000€ économisés",
    quote:
      "Les échanges ont toujours été simples, rapides et transparents. C’est rassurant d’être entouré par des personnes qui comprennent réellement les enjeux des indépendants et des petites structures.",
    name: "Kyle D.",
    role: "K. Consulting",
  },
  {
    logo: "/logos/awzel2.svg",
    savings: "3 000€ économisés",
    quote:
      "En tant que freelance, j’ai été accompagné dès la création de mon activité, et cela m’a permis de partir sur des bases solides. L’équipe m’a orienté vers une structure adaptée, en veillant à limiter les frais au lancement. Un accompagnement clair, efficace et rassurant pour démarrer.",
    name: "Hakim K.",
    role: "CEO de Azwel CS",
  },
  {
    logo: "/logos/MJ.svg",
    savings: "20 000€ économisés",
    quote:
      "En tant qu’ingénieur, j’ai fait appel au cabinet pour restructurer mon activité et l’implanter en ZFU. Leur accompagnement a été à la fois stratégique et très sécurisant sur le plan fiscal, me permettant de bénéficier d’une exonération d’impôt sur 5 ans. Je souligne le côté humain et remercie particulièrement l’équipe pour sa réactivité, ainsi que pour la mise en relation avec un expert-comptable qui assure aujourd’hui mon suivi. Je recommande vivement.",
    name: "Mohamed J.",
    role: "Fondateur de MJ Conseil",
  },
  {
    logo: "/logos/lamaisondunettoyage.svg",
    savings: "12 000€ économisés",
    quote:
      "Le cabinet m’a accompagné avec beaucoup de pertinence dans l’optimisation de ma fiscalité. Équipe professionnelle et à l'écoute.",
    name: "Lyonel C.",
    role: "Fondateur de La Maison du Nettoyage",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#f5fbff] py-24">
      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="mb-12 flex items-center justify-between">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={18}
                className="fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>

          <span className="rounded-full bg-[#F4E5A3] px-4 py-2 text-xs font-semibold text-[#040325]">
            {testimonials[active].savings}
          </span>
        </div>

        {/* Conteneur fixe */}
        <div className="mx-auto flex min-h-[500px] max-w-5xl flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="flex flex-1 flex-col items-center text-center"
            >
              {/* Logo */}
              <div className="mb-12 flex h-24 items-center justify-center">
                {testimonials[active].logo && (
                  <img
                    src={testimonials[active].logo}
                    alt={testimonials[active].role}
                    className="max-h-20 w-auto object-contain"
                    style={{ minWidth: "80px", minHeight: "40px" }}

                  />
                )}
              </div>

              {/* Témoignage */}
              <blockquote className="min-h-[220px] max-w-3xl text-lg font-semibold leading-relaxed text-[#040325] md:text-2xl">
                "{testimonials[active].quote}"
              </blockquote>

              {/* Auteur */}
              <div className="mt-auto pt-10">
                <p className="text-lg font-semibold text-[#040325]">
                  {testimonials[active].name}
                </p>

                <p className="mt-1 text-sm text-[#040325]/60">
                  {testimonials[active].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Pagination */}
          <div className="mt-12 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  active === index
                    ? "w-8 bg-blue-600"
                    : "w-2.5 bg-blue-200 hover:bg-blue-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}