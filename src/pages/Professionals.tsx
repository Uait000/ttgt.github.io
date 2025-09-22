import React, { useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import SidebarCards from '@/components/SidebarCards';
import { Eye, MessageCircle, Heart, X, ChevronLeft, ChevronRight } from 'lucide-react';
import InfoBlocks from '@/components/InfoBlocks';

interface ProfessionalPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: 'achievement' | 'award' | 'recognition' | 'success';
  images: string[];
  views: number;
  comments: number;
  likes: number;
}

const Professionals = () => {
  const [selectedPost, setSelectedPost] = useState<ProfessionalPost | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const posts: ProfessionalPost[] = [
    {
      id: 1,
      title: 'Выпускник техникума стал лауреатом премии "Лучший железнодорожник года"',
      excerpt: 'Алексей Петров, выпускник 2018 года, получил высшую награду в области железнодорожного транспорта...',
      content: 'Алексей Петров, выпускник нашего техникума 2018 года по специальности "Техническая эксплуатация подвижного состава железных дорог", стал лауреатом престижной премии "Лучший железнодорожник года". За пять лет работы в локомотивном депо он показал выдающиеся результаты в области безопасности движения и инновационных решений. Его разработки по оптимизации технического обслуживания локомотивов внедрены на всей Северо-Кавказской железной дороге.',
      date: '15 января 2025 г.',
      author: 'Пресс-служба',
      category: 'achievement',
      images: [
        'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg',
        'https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg',
        'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg'
      ],
      views: 1245,
      comments: 18,
      likes: 89
    },
    {
      id: 2,
      title: 'Преподаватель техникума получил звание "Почетный работник образования"',
      excerpt: 'Ольга Борисовна Ярцева удостоена высокого звания за многолетний труд в образовании...',
      content: 'Заведующая отделением технической эксплуатации подвижного состава Ольга Борисовна Ярцева получила звание "Почетный работник образования Российской Федерации". За 25 лет работы в техникуме она подготовила более 2000 специалистов, многие из которых занимают руководящие должности на предприятиях железнодорожного транспорта.',
      date: '12 января 2025 г.',
      author: 'Администрация',
      category: 'award',
      images: [
        'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg',
        'https://images.pexels.com/photos/1181678/pexels-photo-1181678.jpeg',
        'https://images.pexels.com/photos/1181679/pexels-photo-1181679.jpeg'
      ],
      views: 892,
      comments: 25,
      likes: 156
    },
    {
      id: 3,
      title: 'Студенты техникума заняли призовые места в чемпионате "Профессионалы"',
      excerpt: 'Команда студентов показала отличные результаты на региональном этапе чемпионата...',
      content: 'Студенты нашего техникума завоевали три призовых места на региональном этапе чемпионата по профессиональному мастерству "Профессионалы". Кирилл Кузнецов стал победителем в компетенции "Строительство железных дорог", Каролина Чернышева заняла второе место в компетенции "Сварочные технологии", а Михаил Дымченко получил третье место в компетенции "Электроснабжение".',
      date: '10 января 2025 г.',
      author: 'Учебная часть',
      category: 'success',
      images: [
        'https://images.pexels.com/photos/1181680/pexels-photo-1181680.jpeg',
        'https://images.pexels.com/photos/1181681/pexels-photo-1181681.jpeg',
        'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg'
      ],
      views: 2156,
      comments: 42,
      likes: 234
    },
    {
      id: 4,
      title: 'Выпускник техникума назначен начальником железнодорожной станции',
      excerpt: 'Иван Сидоров, выпускник 2015 года, возглавил крупную железнодорожную станцию...',
      content: 'Иван Сидоров, выпускник техникума 2015 года по специальности "Организация перевозок и управление на транспорте", назначен начальником железнодорожной станции Краснодар-Сортировочный. В свои 28 лет он стал одним из самых молодых руководителей такого уровня на Северо-Кавказской железной дороге.',
      date: '8 января 2025 г.',
      author: 'Отдел связей с выпускниками',
      category: 'recognition',
      images: [
        'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg',
        'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg',
        'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg'
      ],
      views: 743,
      comments: 15,
      likes: 67
    }
  ];

  const getCategoryBadge = (category: string) => {
    const badges = {
      achievement: 'bg-blue-500 text-white',
      award: 'bg-green-500 text-white',
      recognition: 'bg-purple-600 text-white',
      success: 'bg-orange-500 text-white'
    };
    
    const labels = {
      achievement: 'Достижение',
      award: 'Награда',
      recognition: 'Признание',
      success: 'Успех'
    };

    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${badges[category as keyof typeof badges]}`}>
        {labels[category as keyof typeof labels]}
      </span>
    );
  };

  const openModal = (post: ProfessionalPost) => {
    setSelectedPost(post);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedPost(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedPost) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedPost.images.length);
    }
  };

  const prevImage = () => {
    if (selectedPost) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedPost.images.length) % selectedPost.images.length);
    }
  };

  // Auto-scroll carousel in modal
  React.useEffect(() => {
    if (selectedPost && selectedPost.images.length > 1) {
      const interval = setInterval(() => {
        nextImage();
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [selectedPost, currentImageIndex]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 min-h-screen">
          <div className="container mx-auto px-6 py-8">
            {/* Info Blocks */}
            <InfoBlocks />
            
            <div className="bg-white rounded-lg shadow-sm border border-border p-8">
              <h1 className="text-3xl font-bold text-primary mb-8 text-center">Профессионалы</h1>
              <p className="text-center text-muted-foreground mb-8 text-lg">
                Наши выпускники и преподаватели - гордость техникума
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {posts.map((post) => (
                  <article key={post.id} className="bg-gradient-to-br from-white to-gray-50/50 rounded-xl shadow-md border border-border/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
                    <div className="relative">
                      <img
                        src={post.images[0]}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        {getCategoryBadge(post.category)}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <span>{post.date}</span>
                        <span>{post.author}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span>{post.views}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <MessageCircle className="w-4 h-4" />
                            <span>{post.comments}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Heart className="w-4 h-4" />
                            <span>{post.likes}</span>
                          </span>
                        </div>
                        
                        <button
                          onClick={() => openModal(post)}
                          className="text-primary hover:text-primary-hover font-medium text-sm transition-colors"
                        >
                          Читать →
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Modal */}
              {selectedPost && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={closeModal}>
                  <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                    <div className="relative">
                      {/* Image carousel */}
                      <div className="relative h-64 overflow-hidden rounded-t-xl">
                        <img
                          src={selectedPost.images[currentImageIndex]}
                          alt={selectedPost.title}
                          className="w-full h-full object-cover"
                        />
                        
                        {selectedPost.images.length > 1 && (
                          <>
                            <button
                              onClick={prevImage}
                              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-colors"
                            >
                              <ChevronLeft className="w-5 h-5" />
                            </button>
                            
                            <button
                              onClick={nextImage}
                              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-colors"
                            >
                              <ChevronRight className="w-5 h-5" />
                            </button>

                            {/* Image indicators */}
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                              {selectedPost.images.map((_, index) => (
                                <button
                                  key={index}
                                  onClick={() => setCurrentImageIndex(index)}
                                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                                    index === currentImageIndex
                                      ? 'bg-white scale-125'
                                      : 'bg-white/60 hover:bg-white/80'
                                  }`}
                                />
                              ))}
                            </div>
                          </>
                        )}
                      </div>

                      <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 bg-white/80 hover:bg-white p-2 rounded-full transition-colors z-10"
                      >
                        <X className="w-5 h-5" />
                      </button>
                      
                      <div className="absolute top-4 left-4 z-10">
                        {getCategoryBadge(selectedPost.category)}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h2 className="text-2xl font-bold text-foreground mb-4">
                        {selectedPost.title}
                      </h2>
                      
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                        <span>{selectedPost.date}</span>
                        <span>{selectedPost.author}</span>
                      </div>
                      
                      <div className="text-foreground leading-relaxed mb-6">
                        {selectedPost.content}
                      </div>

                      <div className="flex items-center space-x-6 text-sm text-muted-foreground border-t border-border pt-4">
                        <span className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{selectedPost.views}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <MessageCircle className="w-4 h-4" />
                          <span>{selectedPost.comments}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span>{selectedPost.likes}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
        
        <aside className="w-80 bg-white border-l border-border p-6 sticky top-16 h-screen overflow-y-auto">
          <SidebarCards />
        </aside>
      </div>
    </div>
  );
};

export default Professionals;