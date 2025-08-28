import Link from "next/link"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const socialLinks = [
    {
      href: "https://github.com",
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
    },
    {
      href: "https://twitter.com",
      icon: <Twitter className="w-5 h-5" />,
      label: "Twitter",
    },
    {
      href: "https://linkedin.com",
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
    },
    {
      href: "mailto:contact@codex.com",
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
    },
  ]

  const footerLinks = [
    {
      title: "Product",
      links: [
        { href: "/docs", label: "Documentation" },
        { href: "/api", label: "API Reference" },
        { href: "/examples", label: "Examples" },
        { href: "/changelog", label: "Changelog" },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "/about", label: "About" },
        { href: "/blog", label: "Blog" },
        { href: "/careers", label: "Careers" },
        { href: "/contact", label: "Contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { href: "/community", label: "Community" },
        { href: "/support", label: "Support" },
        { href: "/status", label: "Status" },
        { href: "/privacy", label: "Privacy" },
      ],
    },
  ]

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-slate-900 to-slate-600 dark:from-slate-100 dark:to-slate-400" />
              <span className="font-bold text-lg text-slate-900 dark:text-slate-100">CodeX</span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xs">
              Building the future of web development with modern tools and components.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition-colors hover:bg-slate-200 hover:text-slate-900 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-slate-100"
                  aria-label={link.label}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-semibold text-slate-900 dark:text-slate-100">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            &copy; {new Date().getFullYear()} CodeX. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              href="/terms"
              className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/cookies"
              className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
