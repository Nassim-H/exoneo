"use client";

import Image from "next/image";

const logos = [
  { src: "/logos/AI.svg", alt: "Aparte" },
  { src: "/logos/Awzel2.svg", alt: "Awzel" },
  { src: "/logos/dazie.svg", alt: "Dazie" },
  { src: "/logos/MJ.svg", alt: "MJ Conseil" },
  { src: "/logos/renovalec.svg", alt: "Renovalec" },
  { src: "/logos/lamaisondunettoyage.svg", alt: "La Maison du Nettoyage" },
  { src: "/logos/SOLTEC.svg", alt: "Soltec Résine" },
];

export default function TrustedBySection() {
  const duplicated = [...logos, ...logos];

  return (
    <section className="overflow-hidden bg-[#f5fbff] py-10">
      <div className="mx-auto max-w-[1280px] px-6">
        {/* Header */}
        <div className="mb-10 flex items-center gap-6">
          <div className="h-px flex-1 bg-[#040325]/15" />
          <span className="whitespace-nowrap text-sm font-medium text-[#040325]/70">
            Plus de 300 chefs d&apos;entreprise nous ont fait confiance
          </span>
          <div className="h-px flex-1 bg-[#040325]/15" />
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          {/* Fade gauche */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#f5fbff] to-transparent" />
          {/* Fade droite */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#f5fbff] to-transparent" />

          <div className="flex w-max animate-marquee gap-24">
            {duplicated.map((logo, index) => (
              <div
                key={`${logo.alt}-${index}`}
                className="flex h-40 min-w-[220px] items-center justify-center"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={500}
                  height={350}
                  className="max-h-36 w-auto object-contain grayscale transition-all duration-300 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}