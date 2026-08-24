const services = [
  {
    number: "01",
    title: "Business Websites",
    description:
      "Professional websites that communicate your business, services and value proposition clearly.",
  },
  {
    number: "02",
    title: "Professional Services",
    description:
      "Credible online experiences for law firms, consultants, agencies and other professional practices.",
  },
  {
    number: "03",
    title: "Web Applications",
    description:
      "Interactive applications with APIs, authentication, databases and custom functionality.",
  },
  {
    number: "04",
    title: "Mobile Applications",
    description:
      "Cross-platform mobile applications built with React Native and Expo.",
  },
];

export default function Services() {
  return (
    <section className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            What I Build
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">
            Digital products built around your business.
          </h2>
        </div>

        <div className="mt-16 grid border-t border-neutral-200 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.number}
              className="border-b border-neutral-200 py-8 md:px-8 md:first:pl-0 md:nth-[3]:pl-0"
            >
              <span className="text-sm text-neutral-400">{service.number}</span>

              <h3 className="mt-4 text-2xl font-semibold text-neutral-950">
                {service.title}
              </h3>

              <p className="mt-3 max-w-md leading-7 text-neutral-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
