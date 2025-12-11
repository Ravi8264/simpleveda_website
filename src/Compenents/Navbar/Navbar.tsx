import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Search, ShoppingCart, ChevronDown, ChevronRight, Menu, X } from 'lucide-react';
import './Navbar.css';

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
  <div className={`dropdown ${nested ? 'dropdown-nested' : 'dropdown-main'} ${isMedia ? 'dropdown-media' : 'dropdown-regular'}`}>
    {items.map((item, i) => (
      item.children ? (
        <div key={i} className="dropdown-item-with-sub">
          <div className="dropdown-item-label">
            {item.label} <ChevronRight size={12} />
          </div>
          <div className={`dropdown-submenu ${isMedia ? 'dropdown-media' : 'dropdown-regular'}`}>
            {item.children.map((sub, j) => (
              sub.children ? (
                <div key={j} className="dropdown-item-with-sub">
                  <div className="dropdown-item-label">
                    {sub.label} <ChevronRight size={12} />
                  </div>
                  <div className={`dropdown-deep ${isMedia ? 'dropdown-media' : 'dropdown-regular'}`}>
                    {sub.children.map((deep, k) => (
                      <Link key={k} to={deep.to || '#'} className="dropdown-link">
                        {deep.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={j} to={sub.to || '#'} className="dropdown-link">
                  {sub.label}
                </Link>
              )
            ))}
          </div>
        </div>
      ) : (
        <Link key={i} to={item.to || '#'} className="dropdown-link">
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
    <div className={depth > 0 ? 'accordion-nested' : ''}>
      {items.map((item, i) => (
        <div key={i}>
          {item.children ? (
            <>
              <button onClick={() => toggle(i)} className="accordion-button">
                {item.label}
                <ChevronDown size={16} className={open[i] ? 'chevron-rotated' : 'chevron-normal'} />
              </button>
              {open[i] && <MobileAccordion items={item.children} onClose={onClose} depth={depth + 1} />}
            </>
          ) : (
            <Link to={item.to || '#'} onClick={onClose} className="accordion-link">
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
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <Link to="/">
            <img src={logo} alt="Simple Vedas" className="navbar-logo" />
          </Link>

          {/* Desktop */}
          <div className="navbar-desktop">
            {NAV_ITEMS.map((item, i) => (
              <div key={i} className="nav-item-wrapper">
                <Link to={item.to || '#'} className={`nav-link ${isActive(item.to) ? 'nav-link-active' : ''}`}>
                  {item.label}
                  {item.children && <ChevronDown size={14} />}
                </Link>
                {item.children && <DesktopDropdown items={item.children} isMedia={item.isMedia} />}
              </div>
            ))}
            <Link to="#" className="nav-icon">
              <Search size={20} />
            </Link>
            <Link to="#" className="nav-icon">
              <ShoppingCart size={20} />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="mobile-menu-button">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-content">
            <MobileAccordion items={NAV_ITEMS} onClose={() => setMenuOpen(false)} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;