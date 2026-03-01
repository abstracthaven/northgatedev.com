import { Globe, ShieldCheck, Code, Mail, ArrowUpRight } from "lucide-react"

export default function LandingPage() {
  const features = [
    {
      icon: <Globe className="h-6 w-6 text-brand-accent" />,
      title: "Public Presence",
      description:
        "Confirms our identity and operational status for current and prospective partners.",
      delay: "0.4s",
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-brand-accent" />,
      title: "Vendor Verification",
      description:
        "A registered U.S. business entity, verified and ready for secure partnerships.",
      delay: "0.6s",
    },
    {
      icon: <Code className="h-6 w-6 text-brand-accent" />,
      title: "Our Mission",
      description:
        "To build reliable, efficient, and user-friendly software that drives real results.",
      delay: "0.8s",
    },
  ]

  return (
    <div className="animated-gradient text-brand-text font-sans antialiased">
      <div className="relative min-h-screen min-h-dvh flex flex-col overflow-hidden">
        {/* Background glow */}
        <div className="hero-glow animate-glow-pulse" aria-hidden="true" />

        {/* Header */}
        <header className="relative z-10 w-full">
          <div className="w-full max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
              <div
                className="flex items-center gap-2.5 animate-fade-in opacity-0"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-accent/10 border border-brand-accent/20">
                  <Code className="h-4 w-4 text-brand-accent" />
                </div>
                <span className="text-base sm:text-lg font-semibold text-white tracking-tight">
                  Northgate Solutions
                </span>
              </div>
              <a
                href="mailto:contact@northgatedev.com"
                className="animate-fade-in opacity-0 flex items-center gap-1.5 text-sm text-brand-muted hover:text-brand-accent transition-colors duration-200"
                style={{ animationDelay: "0.15s" }}
              >
                <Mail className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">contact@northgatedev.com</span>
                <span className="sm:hidden">Contact</span>
              </a>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="relative z-10 flex-grow flex flex-col items-center justify-center px-5 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="w-full max-w-4xl">
            {/* Hero */}
            <div className="text-center">
              <div
                className="animate-fade-in opacity-0"
                style={{ animationDelay: "0.2s" }}
              >
                <p className="inline-block text-xs sm:text-sm font-medium tracking-widest uppercase text-brand-accent/80 mb-4 sm:mb-5">
                  Software &amp; Digital Services
                </p>
              </div>
              <h1
                className="animate-fade-in opacity-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight text-balance"
                style={{ animationDelay: "0.25s" }}
              >
                Your Trusted Partner
                <br className="hidden sm:block" />{" "}
                in Technology.
              </h1>
              <p
                className="animate-fade-in opacity-0 mt-4 sm:mt-5 max-w-xl mx-auto text-base sm:text-lg text-brand-muted leading-relaxed"
                style={{ animationDelay: "0.35s" }}
              >
                Providing cutting-edge software solutions and digital services
                to businesses that demand reliability.
              </p>
            </div>

            {/* Divider */}
            <div
              className="divider-line my-10 sm:my-14 md:my-16 mx-auto w-full max-w-md animate-fade-in opacity-0"
              style={{ animationDelay: "0.4s" }}
              aria-hidden="true"
            />

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="glass-card rounded-xl p-5 sm:p-6 animate-fade-in opacity-0"
                  style={{ animationDelay: feature.delay }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-brand-accent/10">
                      {feature.icon}
                    </div>
                    <h2 className="text-sm sm:text-base font-semibold text-white">
                      {feature.title}
                    </h2>
                  </div>
                  <p className="text-sm leading-relaxed text-brand-muted">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="relative z-10 w-full">
          <div className="divider-line mx-auto w-full max-w-6xl" aria-hidden="true" />
          <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-5 sm:py-6">
            <div
              className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-brand-muted animate-fade-in opacity-0"
              style={{ animationDelay: "1s" }}
            >
              <p>&copy; {new Date().getFullYear()} Northgate Solutions, LLC</p>
              <a
                href="mailto:contact@northgatedev.com"
                className="group flex items-center gap-1.5 transition-colors duration-200 hover:text-brand-accent"
              >
                <span>contact@northgatedev.com</span>
                <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
