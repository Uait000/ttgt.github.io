import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDropdownToggle = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const menuItems = [
    {
      label: 'Главная',
      href: '/',
      submenu: []
    },
    {
      label: 'Сведения об образовательной организации',
      href: 'https://www.rgups.ru/filiali/ttgt/',
      external: true,
      submenu: [
        { label: 'История', href: '/history' },
        { label: 'Администрация', href: '/administration' },
        { label: 'Наши отделения', href: '/departments' },
        { label: 'Наша гордость', href: '/pride' },
        { label: 'Аккредитация', href: '/accreditation' },
        { label: 'Лицензия', href: '/license' },
        { label: 'Воспитательная работа', href: '/educational-work' },
        { label: 'Библиотека', href: '/library' },
        { label: 'Электронная библиотека', href: '/e-library' },
        { label: 'Вакансии', href: '/vacancies' },
        { label: 'Электронная ИОС', href: '/ios' },
        { label: 'НОКО', href: '/noko' },
        { label: 'Общежитие', href: '/dormitory' },
        { label: 'Автошкола', href: '/driving-school' },
        { label: 'Столовая', href: '/cafeteria' },
        { label: 'Бассейн', href: '/swimming-pool' },
        { label: 'Мастерские', href: '/workshops' }
      ]
    },
    {
      label: 'Студентам',
      href: '#',
      submenu: [
        { label: 'Правила внутреннего распорядка', href: '/internal-rules' },
        { label: 'Расписание занятий', href: '/schedule' },
        { label: 'Расписание звонков', href: '/bell-schedule' },
        { label: 'Размещение учебных аудиторий', href: '/classroom-layout' },
        { label: 'Памятка', href: '/memo' },
        { label: 'Расписание экзаменов', href: '/exam-schedule' },
        { label: 'Квитанции об оплате', href: '/payment-receipts' },
        { label: 'Образовательный кредит', href: '/education-credit' },
        { label: 'ГИА', href: '/state-exam' }
      ]
    },
    {
      label: 'Поступающим',
      href: '#',
      submenu: [
        { label: 'Контрольные цифры приема', href: '/applicants/admission-numbers' },
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
      submenu: []
    },
    {
      label: 'Абитуриенту',
      href: 'https://rgups.ru/abitur',
      external: true,
      submenu: [
        { label: 'Онлайн-опрос', href: '/online-survey' }
      ]
    },
    {
      label: 'Форум',
      href: '#',
      submenu: []
    },
    {
      label: 'Дистанционное обучение',
      href: 'http://дистанционное24.рф',
      external: true,
      submenu: []
    }
  ];

  return (
    <header className="bg-white shadow-sm border-b border-border sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Logo and title */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&fit=crop" 
              alt="Логотип" 
              className="h-10 w-10 rounded-lg object-cover"
            />
            <div className="flex flex-col">
              <h1 className="text-sm font-bold text-foreground leading-tight">
                Тихорецкий техникум железнодорожного транспорта
              </h1>
              <h2 className="text-xs text-muted-foreground leading-tight">
                филиал ФГБОУ ВО РГУПС
              </h2>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.submenu.length > 0 ? (
                  <div className="relative">
                    <button
                      className="nav-item flex items-center space-x-1"
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="w-3 h-3" />
                    </button>
                    
                    {openDropdown === item.label && (
                      <div 
                        className="absolute top-full left-0 mt-1 w-80 bg-white border border-border rounded-lg shadow-lg z-50"
                              className="block px-4 py-2 text-sm text-foreground hover:bg-primary/5 hover:text-primary transition-colors text-center"
                        onMouseEnter={() => setOpenDropdown(item.label)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        <div className="py-2">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.label}
                              to={subItem.href}
                              className="block px-4 py-2 text-sm text-foreground hover:bg-primary/5 hover:text-primary transition-colors"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-item"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link to={item.href} className="nav-item">
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
          >
            {isMobileMenuOpen ? (
              <X className="block h-6 w-6" />
            ) : (
              <Menu className="block h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border">
            <div className="py-2 space-y-1">
              {menuItems.map((item) => (
                <div key={item.label}>
                  {item.submenu.length > 0 ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.label)}
                        className="w-full flex items-center justify-between px-4 py-2 text-sm text-foreground hover:bg-accent"
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {openDropdown === item.label && (
                        <div className="bg-accent/50">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.label}
                              to={subItem.href}
                              className="block px-8 py-2 text-sm text-muted-foreground hover:text-foreground"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-sm text-foreground hover:bg-accent"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-accent"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;