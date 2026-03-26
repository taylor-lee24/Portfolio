export default function Footer() {
  return (
    <footer className="border-t border-zinc-200/50 dark:border-zinc-800/50 py-8">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-400 dark:text-zinc-600">
          &copy; {new Date().getFullYear()} Taylor Lee. Built with Next.js &
          Tailwind CSS.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="mailto:taylorlee.dev@proton.me"
            className="text-sm text-zinc-400 dark:text-zinc-600 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/taylor-lee00/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-400 dark:text-zinc-600 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="text-sm text-zinc-400 dark:text-zinc-600 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors"
          >
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
