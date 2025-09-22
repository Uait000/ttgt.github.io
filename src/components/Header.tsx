import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building2, User, GraduationCap, BookOpen, MessageSquare, Monitor, User2 } from 'lucide-react';
import logo from '@/assets/educenter-logo.png';

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  dropdown?: DropdownItem[];
}

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems: NavItem[] = [
    {
      label: 'Сведения об образовательной организации',
      href: 'https://www.rgups.ru/filiali/ttgt/',
      icon: <Building2 className="w-3 h-3" />
    },
    {
      label: 'Студентам',
      href: '/students',
      icon: <User className="w-3 h-3" />,
      dropdown: [
        { label: 'Правила внутреннего распорядка', href: '/internal-rules' },
        { label: 'Замены', href: '#' },
        { label: 'Расписание занятий', href: '/schedule' },
        { label: 'Расписание звонков', href: '/bell-schedule' },
        { label: 'Размещение учебных аудиторий', href: '/classroom-layout' },
        { label: 'Памятка', href: '/memo' },
        { label: 'Расписание экзаменов', href: '/exam-schedule' },
        { label: 'Квитанции об оплате', href: '/payment-receipts' },
        { label: 'Обркредит в СПО', href: '/education-credit' },
        { label: 'ГИА', href: '/state-exam' }
      ]
    },
    {
      label: 'Поступающим',
      href: '/applicants',
      icon: <GraduationCap className="w-3 h-3" />,
      dropdown: [
        { label: 'Личный кабинет', href: '/applicants/personal-cabinet' },
        { label: 'Инструкция к ЛК', href: 'https://ttgt.org/images/files/Postup/Instr_LK_Abiturienta.pdf' },
        { label: 'Контрольные цифры приема', href: '/applicants/admission-numbers' },
        { label: 'Центры притяжения', href: 'https://ttgt.org/images/files/Postup/Centry_Prit_2022-2023.pdf' },
        { label: 'Список лиц, подавших документы', href: 'https://rgups.ru/abitur/informirovanie/filial-rgups-v-tikhoretcke/' },
        { label: 'Отборочная комиссия', href: '/applicants/selection-committee' },
        { label: 'День открытых дверей', href: '/applicants/open-day' },
        { label: 'Специальности обучения', href: '/applicants/specialties' },
        { label: 'Правила приема', href: '/applicants/admission-rules' },
        { label: 'Карьерные карты', href: '/applicants/career-maps' }
      ]
    },
    {
      label: 'Курсы',
      href: '/courses',
      icon: <BookOpen className="w-3 h-3" />
    },
    {
      label: 'Форумы',
      href: 'https://11klassniki.ru/spo/ttzht',
      icon: <MessageSquare className="w-3 h-3" />
    },
    {
      label: 'Дистанционное обучение',
      href: 'http://дистанционное24.рф/',
      icon: <Monitor className="w-3 h-3" />
    },
    {
      label: 'Абитуриенту',
      href: '#',
      icon: <User2 className="w-3 h-3" />
    }
  ];

  const handleMouseEnter = (label: string) => {
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    setTimeout(() => setActiveDropdown(null), 200);
  };

  return (
    <header className="bg-white border-b border-border shadow-sm sticky top-0 z-50 py-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center justify-start w-full">
            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-3 bg-primary/10 rounded-lg px-6 py-3 shadow-sm border border-primary/20 mr-6">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.dropdown && handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.href.startsWith('http') ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav-item flex items-center space-x-1 text-xs px-3 py-2 whitespace-nowrap hover:bg-primary hover:text-white rounded-md transition-all duration-200"
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className={`nav-item flex items-center space-x-1 text-xs px-3 py-2 whitespace-nowrap hover:bg-primary hover:text-white rounded-md transition-all duration-200 ${
                        item.label === 'Студентам' ? 'pointer-events-none cursor-default' : ''
                      }`}
                      onClick={item.label === 'Студентам' ? (e) => e.preventDefault() : undefined}
                    >
                    {item.icon}
                    <span>{item.label}</span>
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-1 w-72 bg-white/95 backdrop-blur-sm border border-border rounded-lg shadow-xl z-50">
                      <div className="py-2">
                        {item.dropdown.map((dropdownItem) => (
                          dropdownItem.href.startsWith('http') || dropdownItem.href === '#' || dropdownItem.label === 'Личный кабинет' ? (
                            <a
                              key={dropdownItem.label}
                              href={dropdownItem.label === 'Личный кабинет' ? 'https://abitura.ttgt.org/abitur/profile/#/' : 
                                    dropdownItem.label === 'Инструкция к ЛК' ? 'https://ttgt.org/images/files/Postup/Instr_LK_Abiturienta.pdf' :
                                    dropdownItem.label === 'Центры притяжения' ? 'https://ttgt.org/images/files/Postup/Centry_Prit_2022-2023.pdf' :
                                    dropdownItem.label === 'Список лиц, подавших документы' ? 'https://rgups.ru/abitur/informirovanie/filial-rgups-v-tikhoretcke/' :
                                    dropdownItem.href}
                              target={dropdownItem.href.startsWith('http') || dropdownItem.label === 'Личный кабинет' ? "_blank" : undefined}
                              rel={dropdownItem.href.startsWith('http') || dropdownItem.label === 'Личный кабинет' ? "noopener noreferrer" : undefined}
                              className="block px-4 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                            >
                              {dropdownItem.label}
                            </a>
                          ) : (
                            <Link
                              key={dropdownItem.label}
                              to={dropdownItem.href}
                              className="block px-4 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                            >
                              {dropdownItem.label}
                            </Link>
                          )
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Logo and title */}
            <Link to="/" className="flex items-center space-x-4 hover:opacity-80 transition-opacity">
              <img src={logo} alt="ТТЖТ-филиал РГУПС" className="h-14 w-14" />
              <span className="text-sm font-bold text-primary max-w-xs leading-tight">
                Тихорецкий техникум железнодорожного<br />транспорта – филиал РГУПС
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="lg:hidden p-2">
            <div className="w-5 h-5 flex flex-col justify-center space-y-1">
              <div className="w-full h-0.5 bg-foreground"></div>
              <div className="w-full h-0.5 bg-foreground"></div>
              <div className="w-full h-0.5 bg-foreground"></div>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;