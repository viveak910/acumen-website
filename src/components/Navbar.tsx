import { Globe, Search, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="fixed left-0 top-0 right-0 z-50 flex items-center justify-between px-9 py-5 font-medium bg-black/20 backdrop-blur-sm">
      <div className="inline-flex items-center gap-2.5 uppercase text-sm">
        <div className="w-5 h-5">
          <Globe className="w-5 h-5" />
        </div>
        <div>Globe Express</div>
      </div>
      <div className="inline-flex items-center gap-6 uppercase text-sm">
        <Link
          to="/"
          className="relative hover:text-[#ecad29] transition-colors"
        >
          Home
        </Link>
        <Link to="/events" className="hover:text-[#ecad29] transition-colors">
          Events
        </Link>
        <Link to="/team" className="hover:text-[#ecad29] transition-colors">
          Team
        </Link>
      </div>
    </nav>
  );
}
