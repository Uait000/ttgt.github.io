import { useState } from 'react';
import { Eye, MessageCircle, Heart, X } from 'lucide-react';
import news1 from '@/assets/news1.jpg';
import news2 from '@/assets/news2.jpg';
import news3 from '@/assets/news3.jpg';
import news4 from '@/assets/news4.jpg';
import news5 from '@/assets/news5.jpg';
import news6 from '@/assets/news6.jpg';

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: 'education' | 'achievements' | 'news' | 'events';
  image: string;
  views: number;
  comments: number;
  likes: number;
}

const NewsSection = () => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [visibleNews, setVisibleNews] = useState(6);

  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: 'Новая программа дистанционного обучения',
      excerpt: 'Запущена инновационная программа онлайн-образования с использованием современных технологий...',
      content: 'Запущена инновационная программа онлайн-образования с использованием современных технологий. Программа включает интерактивные занятия, виртуальные лаборатории и персонализированный подход к обучению.',
      date: '15 января 2025 г.',
      author: 'Администрация',
      category: 'education',
      image: news1,
      views: 1245,
      comments: 18,
      likes: 89
    },
    {
      id: 2,
      title: 'Студенты завоевали первое место на региональной олимпиаде',
      excerpt: 'Команда наших студентов показала блестящие результаты на региональной олимпиаде...',
      content: 'Команда наших студентов показала блестящие результаты на региональной олимпиаде по информационным технологиям. Это важное достижение подтверждает высокий уровень подготовки в нашем образовательном центре.',
      date: '12 января 2025 г.',
      author: 'Пресс-служба',
      category: 'achievements',
      image: news2,
      views: 892,
      comments: 25,
      likes: 156
    },
    {
      id: 3,
      title: 'Открытие нового современного корпуса',
      excerpt: 'Состоялось торжественное открытие нового учебного корпуса, оснащенного по последнему слову техники...',
      content: 'Состоялось торжественное открытие нового учебного корпуса, оснащенного по последнему слову техники. В здании размещены современные аудитории, лаборатории и центр цифровых технологий.',
      date: '10 января 2025 г.',
      author: 'Ректорат',
      category: 'news',
      image: news3,
      views: 2156,
      comments: 42,
      likes: 234
    },
    {
      id: 4,
      title: 'Мастер-класс от ведущих специалистов',
      excerpt: 'В рамках профориентационной работы состоялся мастер-класс от ведущих специалистов отрасли...',
      content: 'В рамках профориентационной работы состоялся мастер-класс от ведущих специалистов отрасли. Студенты получили ценные знания и практические навыки от профессионалов.',
      date: '8 января 2025 г.',
      author: 'Учебная часть',
      category: 'education',
      image: news4,
      views: 743,
      comments: 15,
      likes: 67
    },
    {
      id: 5,
      title: 'Научная конференция студентов',
      excerpt: 'Прошла ежегодная научная конференция студентов с участием молодых исследователей...',
      content: 'Прошла ежегодная научная конференция студентов с участием молодых исследователей. Были представлены интересные проекты и инновационные решения в различных областях знаний.',
      date: '5 января 2025 г.',
      author: 'Научная часть',
      category: 'events',
      image: news5,
      views: 1089,
      comments: 33,
      likes: 145
    },
    {
      id: 6,
      title: 'Подписание договора о сотрудничестве',
      excerpt: 'Подписан важный договор о сотрудничестве с ведущими предприятиями региона...',
      content: 'Подписан важный договор о сотрудничестве с ведущими предприятиями региона. Это открывает новые возможности для практики и трудоустройства наших выпускников.',
      date: '3 января 2025 г.',
      author: 'Администрация',
      category: 'news',
      image: news6,
      views: 1456,
      comments: 28,
      likes: 178
    }
  ];

  const getCategoryBadge = (category: string) => {
    const badges = {
      education: 'badge-education',
      achievements: 'badge-achievements',
      news: 'badge-news',
      events: 'badge-events'
    };
    
    const labels = {
      education: 'Образование',
      achievements: 'Достижения',
      news: 'Новости',
      events: 'События'
    };

    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${badges[category as keyof typeof badges]}`}>
        {labels[category as keyof typeof labels]}
      </span>
    );
  };

  const openModal = (news: NewsItem) => {
    setSelectedNews(news);
  };

  const closeModal = () => {
    setSelectedNews(null);
  };

  const loadMore = () => {
    setVisibleNews(prev => prev + 3);
  };

  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-4">Новости и события</h2>
        <p className="text-muted-foreground text-lg">
          Следите за последними новостями нашего образовательного центра
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {newsItems.slice(0, visibleNews).map((news) => (
          <article key={news.id} className="news-card">
            <div className="relative">
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 left-4">
                {getCategoryBadge(news.category)}
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2">
                {news.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 line-clamp-3">
                {news.excerpt}
              </p>
              
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                <span>{news.date}</span>
                <span>{news.author}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <span className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>{news.views}</span>
                  </span>
                </div>
                
                <button
                  onClick={() => openModal(news)}
                  className="text-primary hover:text-primary-hover font-medium text-sm transition-colors"
                >
                  Читать →
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {visibleNews < newsItems.length && (
        <div className="text-center">
          <button
            onClick={loadMore}
            className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl hover:scale-105 duration-300"
          >
            Загрузить ещё новости
          </button>
        </div>
      )}

      {/* Modal */}
      {selectedNews && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img
                src={selectedNews.image}
                alt={selectedNews.title}
                className="w-full h-64 object-cover rounded-t-xl"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white/80 hover:bg-white p-2 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute top-4 left-4">
                {getCategoryBadge(selectedNews.category)}
              </div>
            </div>
            
            <div className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                {selectedNews.title}
              </h2>
              
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                <span>{selectedNews.date}</span>
                <span>{selectedNews.author}</span>
              </div>
              
              <div className="text-foreground leading-relaxed">
                {selectedNews.content}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default NewsSection;