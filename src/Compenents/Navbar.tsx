import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Search, ShoppingCart, ChevronDown, ChevronRight, Menu, X } from 'lucide-react';

interface NavItem {
  label: string;
  to?: string;
  isMedia?: boolean;
  children?: NavItem[];
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', to: '/' },
  {
    label: 'About', to: '/about/simple-vedas',
    children: [
      { label: 'Simple Vedas', to: '/about/simple-vedas' },
      { label: 'Srila Prabhupada', to: '/about/srila-prabhupada' },
      { label: 'Our Inspiration', to: '/about/our-inspiration' },
      { label: 'Madhusudana Visnu Das', to: '/about/madhusudan-visnu-dev' },
    ]
  },
  { label: 'Courses', to: '/course' },
  {
    label: 'Media', to: '/media', isMedia: true,
    children: [
      {
        label: 'Audio',
        children: [
          { label: 'Lectures', children: [
            { label: 'Audio', to: '/media/audio/lectures/audio' },
            { label: 'Video', to: '/media/audio/lectures/video' },
          ]},
          { label: 'Podcast', to: '/media/audio/podcast' },
        ]
      },
      {
        label: 'Video',
        children: [
          { label: 'English', to: '/media/video/english' },
          { label: 'Hindi', to: '/media/video/hindi' },
        ]
      },
    ]
  },
  { label: 'Quotes', to: '/quotes' },
  { label: 'Shop', to: '/shop' },
  { label: 'Contact', to: '/contact' },
];

interface DesktopDropdownProps {
  items: NavItem[];
  nested?: boolean;
  isMedia?: boolean;
}

// Desktop dropdown component
const DesktopDropdown: React.FC<DesktopDropdownProps> = ({ items, nested = false, isMedia = false }) => (
  <div className={`absolute ${nested ? 'left-full top-0' : 'left-0 top-full'} ${isMedia ? 'min-w-[110px]' : 'min-w-[180px]'} bg-black shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 border border-gray-700`}>
    {items.map((item, i) => (
      item.children ? (
        <div key={i} className="relative group/sub">
          <div className="flex items-center justify-between px-4 py-3 text-xs font-semibold text-white hover:text-yellow-500 border-b border-gray-700 cursor-pointer">
            {item.label} <ChevronRight size={12} />
          </div>
          <div className={`absolute left-full top-0 -mt-[1px] ${isMedia ? 'min-w-[110px]' : 'min-w-[180px]'} bg-black shadow-lg opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all border border-gray-700`}>
            {item.children.map((sub, j) => (
              sub.children ? (
                <div key={j} className="relative group/deep">
                  <div className="flex items-center justify-between px-4 py-3 text-xs font-semibold text-white hover:text-yellow-500 border-b border-gray-700 cursor-pointer">
                    {sub.label} <ChevronRight size={12} />
                  </div>
                  <div className={`absolute left-full top-0 -mt-[1px] ${isMedia ? 'min-w-[110px]' : 'min-w-[180px]'} bg-black shadow-lg opacity-0 invisible group-hover/deep:opacity-100 group-hover/deep:visible transition-all border border-gray-700`}>
                    {sub.children.map((deep, k) => (
                      <Link key={k} to={deep.to || '#'} className="block px-4 py-3 text-xs font-semibold text-white hover:text-yellow-500 border-b border-gray-700 last:border-0">
                        {deep.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={j} to={sub.to || '#'} className="block px-4 py-3 text-xs font-semibold text-white hover:text-yellow-500 border-b border-gray-700 last:border-0">
                  {sub.label}
                </Link>
              )
            ))}
          </div>
        </div>
      ) : (
        <Link key={i} to={item.to || '#'} className="block px-4 py-3 text-xs font-semibold text-white hover:text-yellow-500 border-b border-gray-700 last:border-0">
          {item.label}
        </Link>
      )
    ))}
  </div>
);

interface MobileAccordionProps {
  items: NavItem[];
  onClose: () => void;
  depth?: number;
}

// Mobile accordion component
const MobileAccordion: React.FC<MobileAccordionProps> = ({ items, onClose, depth = 0 }) => {
  const [open, setOpen] = useState<Record<number, boolean>>({});
  const toggle = (i: number) => setOpen(prev => ({ ...prev, [i]: !prev[i] }));

  return (
    <div className={depth > 0 ? 'pl-4 pt-1' : ''}>
      {items.map((item, i) => (
        <div key={i}>
          {item.children ? (
            <>
              <button onClick={() => toggle(i)} className="w-full flex items-center justify-between py-2 px-3 text-white hover:text-yellow-500">
                {item.label}
                <ChevronDown size={16} className={`transition-transform ${open[i] ? 'rotate-180' : ''}`} />
              </button>
              {open[i] && <MobileAccordion items={item.children} onClose={onClose} depth={depth + 1} />}
            </>
          ) : (
            <Link to={item.to || '#'} onClick={onClose} className="block py-2 px-3 text-white hover:text-yellow-500">
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path?: string): boolean => {
    if (!path) return false;
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };
  const logo = "https://i0.wp.com/simplevedas.com/wp-content/uploads/2022/02/logo-of-simple-vedas.png?w=562&ssl=1";

  return (
    <nav className="bg-white shadow-none relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/"><img src={logo} alt="Simple Vedas" className="h-14" /></Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item, i) => (
              <div key={i} className="relative group">
                <Link to={item.to || '#'} className={`px-3 py-2 text-sm font-medium inline-flex items-center gap-1 ${isActive(item.to) ? 'text-red-800' : 'text-gray-700 hover:text-yellow-500'}`}>
                  {item.label}
                  {item.children && <ChevronDown size={14} />}
                </Link>
                {item.children && <DesktopDropdown items={item.children} isMedia={item.isMedia} />}
              </div>
            ))}
            <Link to="#" className="p-2 text-gray-700 hover:text-yellow-500"><Search size={20} /></Link>
            <Link to="#" className="p-2 text-gray-700 hover:text-yellow-500"><ShoppingCart size={20} /></Link>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden absolute left-0 right-0 top-full bg-black z-50 border-b border-gray-700 shadow-lg">
          <div className="px-2 py-4">
            <MobileAccordion items={NAV_ITEMS} onClose={() => setMenuOpen(false)} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;