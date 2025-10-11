import { timeline } from "@/lib/data";

export function Journey() {
  return (
    <section id="journey" className="w-full py-12">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">My Journey as a Developer</h2>
        <p className="mt-4 text-muted-foreground lg:text-xl">From pixels to databases, here&apos;s a brief look at my evolution.</p>
      </div>
      <div className="relative mt-12">
        <div className="lg:absolute left-1/2 top-4 h-full w-0.5 -translate-x-1/2 bg-border" />
        {timeline.map((item, index) => (
          <div
            key={item.title}
            className="group p-3 lg:p-0 relative mb-8 flex items-center lg:mb-12"
          >
            <div className="lg:absolute left-1/2 top-3 -translate-x-1/2 rounded-full bg-background p-2 ring-8 ring-background">
              <item.icon className="h-6 w-6 text-accent" />
            </div>
            <div
              className={`w-full rounded-lg border bg-card/50 p-6 shadow-md transition-transform duration-300 ease-in-out hover:scale-105 lg:w-5/12 ${
                index % 2 === 0 ? "lg:ml-auto lg:mr-12" : "lg:mr-auto lg:ml-12"
              }`}
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-muted-foreground">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
