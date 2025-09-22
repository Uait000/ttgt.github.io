import { Star, TrendingUp, Trophy, Microscope } from 'lucide-react';
import { Link } from 'react-router-dom';

const SidebarCards = () => {
  const cards = [
    {
      id: 1,
      title: '95',
      subtitle: 'лет',
      description: '1930 - 2025',
      className: 'sidebar-card sidebar-card-95',
      icon: <TrendingUp className="w-8 h-8 mb-2" />
    },
    {
      id: 2,
      title: '85 лет',
      subtitle: 'СПО',
      description: 'Среднее профессиональное образование',
      className: 'sidebar-card sidebar-card-85',
      icon: <Trophy className="w-8 h-8 mb-2" />
    },
    {
      id: 3,
      title: '80',
      subtitle: 'ЛЕТ ПОБЕДА!',
      description: '1945 - 2025',
      className: 'sidebar-card sidebar-card-victory',
      icon: <Star className="w-8 h-8 mb-2" />
    },
    {
      id: 4,
      title: 'СТАРТ В НАУКУ',
      subtitle: 'Научные исследования',
      description: '',
      className: 'sidebar-card sidebar-card-science',
      icon: <Microscope className="w-8 h-8 mb-2" />
    },
    {
      id: 5,
      title: 'РОССИЯ БЕЛАРУСЬ',
      subtitle: 'Конференция',
      description: 'Вехи общей истории',
      className: 'sidebar-card sidebar-card-conference',
      icon: <Star className="w-8 h-8 mb-2" />,
      link: '/russia-belarus-conference'
    },
    {
      id: 6,
      title: 'СФЕРУМ',
      subtitle: 'МОЯ ШКОЛА',
      description: 'Цифровые платформы',
      className: 'sidebar-card sidebar-card-digital',
      icon: <Microscope className="w-8 h-8 mb-2" />,
      link: '/sferum-myschool'
    },
    {
      id: 7,
      title: 'СВЕДЕНИЯ ОБ ОО',
      subtitle: 'Информация',
      description: 'Образовательная организация',
      className: 'sidebar-card sidebar-card-info',
      icon: <Trophy className="w-8 h-8 mb-2" />,
      link: 'https://www.rgups.ru/filiali/ttgt/',
      external: true
    },
    {
      id: 8,
      title: 'МИНОБРНАУКИ',
      subtitle: 'Министерство',
      description: 'Науки и высшего образования',
      className: 'sidebar-card sidebar-card-ministry',
      icon: <TrendingUp className="w-8 h-8 mb-2" />,
      link: 'https://minobrnauki.gov.ru/',
      external: true
    },
    {
      id: 9,
      title: 'МИНПРОСВЕЩЕНИЯ',
      subtitle: 'Министерство',
      description: 'Просвещения РФ',
      className: 'sidebar-card sidebar-card-education',
      icon: <Star className="w-8 h-8 mb-2" />,
      link: 'https://edu.gov.ru/',
      external: true
    },
    {
      id: 10,
      title: 'РАБОТОДАТЕЛИ',
      subtitle: 'Партнерство',
      description: 'Железнодорожный транспорт',
      className: 'sidebar-card sidebar-card-employers',
      icon: <Microscope className="w-8 h-8 mb-2" />,
      link: '/railway-employers'
    }
  ];

  return (
    <div className="space-y-4">
      <div className="bg-primary text-white rounded-xl p-4 text-center">
        <h3 className="text-lg font-bold mb-2">Ресурсы</h3>
      </div>
      
      {cards.map((card) => (
        card.external ? (
          <a
            key={card.id}
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            className={card.className}
          >
            {card.icon}
            <div className="text-2xl font-bold mb-1">{card.title}</div>
            <div className="text-lg font-medium mb-1">{card.subtitle}</div>
            {card.description && (
              <div className="text-sm opacity-90">{card.description}</div>
            )}
          </a>
        ) : card.link ? (
          <Link
            key={card.id}
            to={card.link}
            className={card.className}
          >
            {card.icon}
            <div className="text-2xl font-bold mb-1">{card.title}</div>
            <div className="text-lg font-medium mb-1">{card.subtitle}</div>
            {card.description && (
              <div className="text-sm opacity-90">{card.description}</div>
            )}
          </Link>
        ) : (
          <div
          key={card.id}
          className={card.className}
        >
          {card.icon}
          <div className="text-2xl font-bold mb-1">{card.title}</div>
          <div className="text-lg font-medium mb-1">{card.subtitle}</div>
          {card.description && (
            <div className="text-sm opacity-90">{card.description}</div>
          )}
        </div>
        )
      ))}
    </div>
  );
};

export default SidebarCards;