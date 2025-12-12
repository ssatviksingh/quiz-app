export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-xl bg-brand flex items-center justify-center text-white font-bold text-lg shadow-sm select-none">F</div>
        <h1 className="text-lg font-medium">Frontend Assignment</h1>
      </div>

      <nav aria-label="Main Navigation">
        <ul className="flex items-center gap-6">
          <li><a href="#" className="text-sm text-gray-600 hover:underline focus:outline-none">Overview</a></li>
          <li><a href="#" className="text-sm text-gray-600 hover:underline focus:outline-none">Docs</a></li>
          <li>
            <button className="px-6 py-3 bg-gradient-to-b from-brand to-brand-600 text-white rounded-xl focus:outline-none shadow transition-smooth hover:-translate-y-0.5">
              Get Started
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
