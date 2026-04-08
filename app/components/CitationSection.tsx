export default function CitationSection() {
  return (
    <section className="bg-[#4141f5] px-6 py-14 text-white sm:px-8 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-[1280px]">
        <div className="mx-auto flex max-w-[1180px] items-start gap-6 lg:items-center lg:gap-8">
          <div className="mt-8 hidden h-px flex-1 bg-white/60 lg:block" />

          <blockquote className="mx-auto max-w-[430px] text-center text-[18px] font-bold leading-[1.45] text-white sm:text-[19px]">
            En moyenne, nos clients découvrent qu'ils ont payé bien plus que nécessaire :
            mauvais choix de statut, exonérations ignorées, options fiscales oubliées... Combien d'années d'exonération laissez-vous passer ?
          </blockquote>

          <div className="mt-8 hidden h-px flex-1 bg-white/60 lg:block" />
        </div>
      </div>
    </section>
  );
}
