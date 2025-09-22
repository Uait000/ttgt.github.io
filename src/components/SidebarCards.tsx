import { Star, TrendingUp, Trophy, Microscope } from 'lucide-react';

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
    }
  ];

  return (
    <div className="space-y-4">
      <div className="bg-primary text-white rounded-xl p-4 text-center">
        <h3 className="text-lg font-bold mb-2">Ресурсы</h3>
      </div>
      
      {cards.map((card) => (
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
      ))}
    </div>
  );
};

export default SidebarCards;