const stars = Array.from({ length: 5 }, (_, index) => index);
const dots = Array.from({ length: 5 }, (_, index) => index);

function Star() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.99999 1.5L11.1717 5.89621L16.0311 6.60379L12.5155 10.0313L13.3434 14.8809L8.99999 12.5938L4.65661 14.8809L5.48447 10.0313L1.96891 6.60379L6.82828 5.89621L8.99999 1.5Z"
        fill="#ec8dcf"
      />
    </svg>
  );
}

function AvatarPlaceholder() {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d9d9d9] text-[#b2b2b2]">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 11.5C3 10.1193 4.11929 9 5.5 9H10.5C11.8807 9 13 10.1193 13 11.5V12H3V11.5Z" fill="currentColor" />
        <circle cx="8" cy="6" r="2.25" fill="currentColor" />
        <path d="M4.75 5.25H11.25" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export default function TestimonialSection() {
  return (
    <section className="bg-white px-6 py-24 text-[#2e2e2e] sm:px-8 lg:px-10 lg:py-[112px]">
      <div className="mx-auto max-w-[1280px]">
        <div className="mx-auto max-w-[768px] text-center">
          <div className="flex items-start justify-between gap-6">
            <div className="flex items-center gap-1.5">
              {stars.map((star) => (
                <Star key={star} />
              ))}
            </div>


          </div>

          <div className="mt-10 flex justify-center">
            <div className="flex items-center gap-2 text-[#2e2e2e]">
              <div className="flex h-7 w-7 items-center justify-center text-[#2e2e2e]">
                <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 15.9216L4.92164 0H10.0164L5.09477 15.9216H0Z" fill="currentColor" />
                  <path d="M8.33105 15.9216L13.2527 0H18.3474L13.4258 15.9216H8.33105Z" fill="currentColor" />
                  <path d="M16.6621 15.9216L21.5838 0H26.6785L21.7568 15.9216H16.6621Z" fill="currentColor" />
                </svg>
              </div>
              <span className="text-[16px] font-semibold leading-none text-[#2e2e2e]">Webflow</span>
            </div>
          </div>

          <blockquote className="mx-auto mt-8 max-w-[760px] text-[18px] font-semibold leading-[1.45] text-[#2e2e2e] sm:text-[20px]">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
            tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae
            erat."
          </blockquote>

          <div className="mt-8 flex flex-col items-center gap-3">
            <AvatarPlaceholder />
            <div className="text-[14px] font-semibold leading-none text-[#2e2e2e]">Name Surname</div>
            <div className="text-[14px] font-normal leading-none text-[#2e2e2e]">Position, Company name</div>
          </div>

          {/* <div className="mt-16 flex items-center justify-center gap-2">
            {dots.map((dot) => (
              <span
                key={dot}
                className={`h-2 w-2 rounded-full ${dot === 0 ? "bg-[#4141f5]" : "bg-[#c8e9fd]"}`}
              />
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}
