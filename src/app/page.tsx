import Image from "next/image";
const services = [
  {
    number: "01",
    title: "Anxiety & Panic",
    description:
      "Understand anxious thoughts, navigate panic, and build a steadier relationship with everyday life.",
  },
  {
    number: "02",
    title: "Trauma & Healing",
    description:
      "A supportive space to work through difficult experiences at a pace that feels right for you.",
  },
  {
    number: "03",
    title: "Burnout & Perfectionism",
    description:
      "Make room for rest, soften self-criticism, and reconnect with what matters beyond achievement.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F6F0] text-[#29372F]">
      <header className="sticky top-0 z-50 border-b border-[#29372F]/10 bg-[#F8F6F0]/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
          <a href="#" className="text-lg font-semibold tracking-tight">
            Maya Reynolds<span className="text-[#A66D52]">, PsyD</span>
            <span className="mt-1 block text-[10px] uppercase tracking-[0.25em] text-[#657467]">
              Psychotherapy
            </span>
          </a>

          <div className="hidden items-center gap-8 text-sm md:flex">
            <a href="#about" className="hover:text-[#A66D52]">About</a>
            <a href="#services" className="hover:text-[#A66D52]">How I Help</a>
            <a href="#approach" className="hover:text-[#A66D52]">My Approach</a>
            <a href="#office" className="hover:text-[#A66D52]">Our Office</a>
          </div>

          <a
            href="#contact"
            className="rounded-full bg-[#536B5B] px-5 py-3 text-sm text-white transition hover:bg-[#3E5345]"
          >
            Get in Touch
          </a>
        </nav>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-2 lg:px-12">
        <div className="max-w-xl">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.28em] text-[#8A705C]">
            A space to feel understood
          </p>

          <h1 className="text-5xl leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
            Find your way back to <span className="font-serif italic text-[#657D69]">yourself.</span>
          </h1>

          <p className="mt-7 max-w-lg text-lg leading-8 text-[#626B61]">
            Therapy for anxiety, trauma, and burnout. A warm, collaborative
            space to slow down, make sense of what you are carrying, and move
            toward meaningful change.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-[#536B5B] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#3E5345]"
            >
              Begin Your Journey ↗
            </a>
            <a
              href="#about"
              className="rounded-full border border-[#536B5B]/30 px-7 py-4 text-sm font-medium transition hover:bg-white"
            >
              Get to Know Me
            </a>
          </div>

          <p className="mt-8 text-sm text-[#737B70]">
            In-person in Santa Monica · Secure California telehealth
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -right-3 -top-3 h-full w-full rounded-t-[48%] rounded-b-[2rem] border border-[#B7BDAA]" />
          
<div className="relative aspect-[4/5] overflow-hidden rounded-t-[48%] rounded-b-[2rem] bg-[#DDE3D6]">
  <Image
    src="/images/therapist.png"
    alt="Dr. Maya Reynolds, clinical psychologist"
    fill
    priority
    sizes="(max-width: 768px) 100vw, 50vw"
    className="object-cover object-center"
  />
</div>
        </div>
      </section>

      <section className="border-y border-[#29372F]/10 bg-[#EFEEE6] px-6 py-8">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-x-12 gap-y-4 text-center text-sm text-[#536B5B]">
          <span>Care for Adults</span>
          <span>Warm & Collaborative</span>
          <span>Evidence-Informed Therapy</span>
          <span>In-Person & Online</span>
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:py-28 lg:grid-cols-2 lg:px-12">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-[#8A705C]">A note from Dr. Reynolds</p>
          <h2 className="mt-5 max-w-lg text-4xl leading-tight sm:text-5xl">
            You do not have to figure everything out alone.
          </h2>
        </div>
        <div className="flex flex-col justify-center gap-5 text-base leading-8 text-[#626B61]">
          <p>
            Sometimes, even when life looks fine from the outside, anxiety,
            past experiences, or the pressure to get everything right can feel
            exhausting on the inside.
          </p>
          <p>
            Therapy offers a place to pause, feel heard, and explore what is
            happening without judgment. We will work together to understand
            your experiences and find a way forward that feels meaningful to you.
          </p>
          <p className="font-serif text-xl italic text-[#536B5B]">
            You deserve care that meets you where you are.
          </p>
        </div>
      </section>

      <section id="services" className="bg-[#E8EAE1] px-6 py-20 md:py-28 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-[#8A705C]">How I can help</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">Support for what you are carrying.</h2>
            <p className="mt-5 leading-7 text-[#626B61]">
              Your experiences are unique. Our work starts with understanding
              them, together.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="rounded-2xl border border-[#536B5B]/15 bg-[#F8F6F0] p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm text-[#A66D52]">{service.number}</span>
                <h3 className="mt-8 text-2xl font-medium">{service.title}</h3>
                <p className="mt-4 leading-7 text-[#626B61]">{service.description}</p>
                <a href="#contact" className="mt-8 inline-block text-sm font-medium text-[#536B5B]">
                  Learn more ↗
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-[#8A705C]">My approach</p>
          <h2 className="mt-4 text-4xl sm:text-5xl">Therapy that works with you, not against you.</h2>
          <p className="mt-6 leading-8 text-[#626B61]">
            Our work is guided by your goals, your experiences, and your pace.
            Depending on your needs, we may draw on cognitive behavioral
            therapy (CBT), EMDR, mindfulness, and body-oriented techniques.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {[
            ["01", "Collaborative", "We make sense of things together, with curiosity rather than judgment."],
            ["02", "Grounded", "We build practical ways to navigate difficult feelings and patterns."],
            ["03", "Individual", "Your history, strengths, and goals help shape our work."],
          ].map(([number, title, description]) => (
            <div key={number} className="border-t border-[#B7BDAA] py-6">
              <span className="text-sm text-[#A66D52]">{number}</span>
              <h3 className="mt-3 text-xl">{title}</h3>
              <p className="mt-3 leading-7 text-[#626B61]">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="office" className="bg-[#EFEEE6] px-6 py-20 md:py-28 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#8A705C]">Our office</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">A calm place to arrive as you are.</h2>
            <p className="mt-6 leading-8 text-[#626B61]">
              Our Santa Monica office is designed to feel quiet, private, and
              comfortable, with natural light and an uncluttered atmosphere.
              There is room to pause, settle in, and focus on you.
            </p>
            <p className="mt-5 text-sm leading-7 text-[#626B61]">
              Santa Monica, California 90401
            </p>
          </div>

          
<div className="grid grid-cols-2 gap-4">
  <div className="relative aspect-[3/4] overflow-hidden rounded-t-full">
    <Image
      src="/images/office-1.jpeg"
      alt="Calm and welcoming therapy office"
      fill
      sizes="(max-width: 768px) 50vw, 25vw"
      className="object-cover"
    />
  </div>

  <div className="relative mt-10 aspect-[3/4] overflow-hidden rounded-t-full">
    <Image
      src="/images/office-2.jpeg"
      alt="Comfortable therapy room interior"
      fill
      sizes="(max-width: 768px) 50vw, 25vw"
      className="object-cover"
    />
  </div>
</div>
        </div>
      </section>

      <section id="contact" className="px-6 py-20 text-center md:py-28">
        <p className="text-xs uppercase tracking-[0.25em] text-[#8A705C]">Take the next step</p>
        <h2 className="mx-auto mt-4 max-w-2xl text-4xl leading-tight sm:text-5xl">
          Change can begin with a conversation.
        </h2>
        <p className="mx-auto mt-5 max-w-xl leading-7 text-[#626B61]">
          If you are considering therapy, you are welcome to reach out to learn
          whether working together may be a good fit.
        </p>
        <a
          href="mailto:hello@example.com"
          className="mt-8 inline-block rounded-full bg-[#536B5B] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#3E5345]"
        >
          Get in Touch ↗
        </a>
        <p className="mt-4 text-xs text-[#737B70]">
          Replace the example email with the contact details provided for the assignment.
        </p>
      </section>

      <footer className="border-t border-[#29372F]/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-sm text-[#626B61] sm:flex-row">
          <p>© 2026 Dr. Maya Reynolds, PsyD</p>
          <p>Psychotherapy for adults · Santa Monica, California</p>
        </div>
      </footer>
    </main>
  );
}