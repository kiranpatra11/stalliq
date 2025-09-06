export default function Footer() {
  return (
    <footer className="py-8 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-gray-600 dark:text-gray-400">
          © 2025 Stalliq. All rights reserved.
        </p>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <a href="#" className="hover:text-blue-500">GitHub</a>
          <a href="#" className="hover:text-blue-500">LinkedIn</a>
          <a href="#" className="hover:text-blue-500">Twitter</a>
        </div>
      </div>
    </footer>
  );
}