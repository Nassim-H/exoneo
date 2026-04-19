export default function CitationSection() {
  return (
    <section className="bg-[#4141f5] px-6 py-20 text-white sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1500px]">
        <div className="mx-auto flex max-w-[1400px] items-start gap-8 lg:items-center lg:gap-10">
          
          <div className="mt-10 hidden h-px flex-1 bg-white/60 lg:block" />

          <blockquote className="mx-auto max-w-[720px] text-center text-[24px]  leading-[1.45] tracking-[0.01em] text-white sm:text-[26px]">
            En moyenne, nos clients découvrent qu'ils ont payé bien plus que nécessaire :
            mauvais choix de statut, exonérations ignorées, options fiscales oubliées... 
            Combien d'années d'exonération laissez-vous passer ?
          </blockquote>

          <div className="mt-10 hidden h-px flex-1 bg-white/60 lg:block" />

        </div>
      </div>
    </section>
  );
}