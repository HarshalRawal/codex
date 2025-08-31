import Link from "next/link"
import { ArrowRight, Code2, Zap, Shield, Users, Star, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-950 dark:via-blue-950/30 dark:to-purple-950/30">
      {/* Hero Section */}
      <section className="relative px-4 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl text-center">
          {/* Hero Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 px-4 py-2 text-sm font-medium text-emerald-700 dark:text-emerald-300 ring-1 ring-emerald-200 dark:ring-emerald-700/50">
            <Star className="h-4 w-4 text-yellow-500" />
            <span>Trusted by 10,000+ developers</span>
          </div>

          {/* Hero Title */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-6xl lg:text-7xl">
            <span className="text-balance">Build faster with</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              modern tools
            </span>
          </h1>

          {/* Hero Description */}
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-600 dark:text-slate-400 text-balance">
            Accelerate your development workflow with our comprehensive suite of tools, components, and APIs designed
            for modern web applications.
          </p>

          {/* Hero CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <Link href="/dashboard">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-purple-300 hover:bg-purple-50 hover:border-purple-400 dark:border-purple-600 dark:hover:bg-purple-900/20 dark:hover:border-purple-500 bg-transparent text-purple-700 dark:text-purple-300"
              asChild
            >
              <Link href="/docs">View Documentation</Link>
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-400/30 to-purple-400/30 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-64 w-64 rounded-full bg-gradient-to-r from-indigo-400/25 to-cyan-400/25 blur-2xl" />
          <div className="absolute bottom-1/4 left-1/4 h-48 w-48 rounded-full bg-gradient-to-r from-purple-400/25 to-pink-400/25 blur-2xl" />
          <div className="absolute top-1/3 right-1/3 h-32 w-32 rounded-full bg-gradient-to-r from-emerald-400/20 to-teal-400/20 blur-xl" />
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-slate-100 sm:text-4xl">
              Everything you need to build
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
              Powerful features and tools to help you create amazing applications faster than ever before.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Code2,
                title: "Modern Components",
                description:
                  "Pre-built, customizable components that follow the latest design patterns and accessibility standards.",
                color: "from-blue-500 to-cyan-500",
                bgColor: "bg-blue-50 dark:bg-blue-900/20",
                iconBg: "bg-blue-100 dark:bg-blue-800/50",
                iconColor: "text-blue-600 dark:text-blue-400",
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description:
                  "Optimized for performance with minimal bundle size and maximum efficiency in your applications.",
                color: "from-yellow-500 to-orange-500",
                bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
                iconBg: "bg-yellow-100 dark:bg-yellow-800/50",
                iconColor: "text-yellow-600 dark:text-yellow-400",
              },
              {
                icon: Shield,
                title: "Secure by Default",
                description: "Built-in security features and best practices to keep your applications and users safe.",
                color: "from-green-500 to-emerald-500",
                bgColor: "bg-green-50 dark:bg-green-900/20",
                iconBg: "bg-green-100 dark:bg-green-800/50",
                iconColor: "text-green-600 dark:text-green-400",
              },
              {
                icon: Users,
                title: "Team Collaboration",
                description:
                  "Tools and features designed to help teams work together effectively on projects of any size.",
                color: "from-purple-500 to-pink-500",
                bgColor: "bg-purple-50 dark:bg-purple-900/20",
                iconBg: "bg-purple-100 dark:bg-purple-800/50",
                iconColor: "text-purple-600 dark:text-purple-400",
              },
              {
                icon: Github,
                title: "Open Source",
                description: "Fully open source with an active community contributing to continuous improvement.",
                color: "from-gray-500 to-slate-500",
                bgColor: "bg-gray-50 dark:bg-gray-900/20",
                iconBg: "bg-gray-100 dark:bg-gray-800/50",
                iconColor: "text-gray-600 dark:text-gray-400",
              },
              {
                icon: Star,
                title: "Premium Support",
                description: "Get help when you need it with our comprehensive documentation and support channels.",
                color: "from-indigo-500 to-blue-500",
                bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
                iconBg: "bg-indigo-100 dark:bg-indigo-800/50",
                iconColor: "text-indigo-600 dark:text-indigo-400",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className={`group border-slate-200 ${feature.bgColor} backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg dark:border-slate-700`}
              >
                <CardHeader>
                  <div
                    className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${feature.iconBg}`}
                  >
                    <feature.icon className={`h-6 w-6 ${feature.iconColor}`} />
                  </div>
                  <CardTitle className="text-slate-900 dark:text-slate-100">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 dark:text-slate-400">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="rounded-2xl bg-gradient-to-r from-blue-100 via-purple-50 to-pink-100 dark:from-blue-900/30 dark:via-purple-900/30 dark:to-pink-900/30 p-8 border border-blue-200 dark:border-blue-800/50 sm:p-12">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-slate-100 sm:text-4xl">
              Ready to get started?
            </h2>
            <p className="mb-8 text-lg text-slate-600 dark:text-slate-400">
              Join thousands of developers who are already building amazing applications with our tools.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <Link href="/sign-in">
                  Start Building Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-purple-300 hover:bg-purple-50 hover:border-purple-400 dark:border-purple-600 dark:hover:bg-purple-900/20 dark:hover:border-purple-500 bg-transparent text-purple-700 dark:text-purple-300"
                asChild
              >
                <Link href="/docs">Explore Documentation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
