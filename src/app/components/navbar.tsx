export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-600">Stalliq</div>

        {/* Links */}
        <div className="flex gap-6 text-gray-700">
          <a href="#" className="hover:text-indigo-600">Home</a>
          <a href="#" className="hover:text-indigo-600">Features</a>
          <a href="#" className="hover:text-indigo-600">Pricing</a>
          <a href="#" className="hover:text-indigo-600">Contact</a>
        </div>
      </div>
    </nav>
  );
}
