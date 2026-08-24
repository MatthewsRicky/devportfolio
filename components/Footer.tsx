export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#041827] px-6 py-8 text-slate-300 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm sm:flex-row">
        <p>© {new Date().getFullYear()} Ricky Githinji</p>

        <p>Web Development · Web Applications · Mobile Applications</p>
      </div>
    </footer>
  );
}
