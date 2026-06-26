export default function Footer() {
  return (
    <footer className="py-12 border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-6 text-center text-gray-light text-sm font-light">
        <div className="text-xl font-serif text-white mb-6">FUTURA</div>
        <p>&copy; {new Date().getFullYear()} Futura Groups. All rights reserved.</p>
      </div>
    </footer>
  );
}
