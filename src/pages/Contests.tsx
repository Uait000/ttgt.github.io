import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import SidebarCards from '@/components/SidebarCards';
import { FileText } from 'lucide-react';

const Contests = () => {
  const contests = [
    {
      title: 'III Педагогическая конференция "Нестандартные решения стандартных педагогических проблем"',
      url: '#'
    },
    {
      title: 'Студенческий конкурс, посвященный Юбилею ТТЖТ - филиалу РГУПС "Я железнодорожник..."',
      url: '#'
    },
    {
      title: 'Студенческая конференция "Охрана окружающей среды на железнодорожном транспорте"',
      url: '#'
    },
    {
      title: 'Конкурс "Мы за здоровые краски жизни"',
      url: '#'
    },
    {
      title: 'Студенческий конкурс, посвященный Дню учителя, Дню среднего профессионального образования и 95-летнему Юбилею Тихорецкого техникума железнодорожного транспорта - филиала РГУПС "Уроки Ваши не были напрасны..."',
      url: '#'
    },
    {
      title: 'Губернаторский конкурс молодежных инновационных проектов "Премия IQ года"',
      url: '#'
    },
    {
      title: 'XVII Международная научно-практическая конференция "Профессиональное образование: опыт и перспективы"',
      url: '#'
    },
    {
      title: 'Всероссийский конкурс "Наставничество" в 2025 году',
      url: '#'
    },
    {
      title: 'Всероссийский конкурс лучших педагогических практик "Лидеры транспортного образования"',
      url: '#',
      hasSubdocuments: true,
      subdocuments: [
        { title: 'Положение', url: '#' },
        { title: 'Регламент', url: '#' }
      ]
    },
    {
      title: 'Смотр-конкурс методических разработок педагогических работников ТТЖТ - филиала РГУПС',
      url: '#',
      hasSubdocuments: true,
      subdocuments: [
        { title: 'Приказ ТТЖТ - филиала РГУПС "Об итогах смотра-конкурса методических разработок педагогических работников"', url: '#' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 min-h-screen">
          <div className="container mx-auto px-6 py-8">
            <div className="bg-white rounded-lg shadow-sm border border-border p-8">
              <h1 className="text-3xl font-bold text-primary mb-8 text-center">Конкурсы</h1>
              
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl border border-border/50 p-8">
                {/* Hero image */}
                <div className="w-full aspect-[16/6] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg overflow-hidden shadow-lg mb-8">
                  <img
                    src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg"
                    alt="Конкурсы и соревнования"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h2 className="text-2xl font-semibold text-primary mb-6 text-center">Актуальные конкурсы и мероприятия</h2>
                  
                  <div className="space-y-6">
                    {contests.map((contest, index) => (
                      <div key={index} className="border-b border-border/30 pb-6 last:border-b-0 last:pb-0">
                        <a
                          href={contest.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-start space-x-4 p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border border-border/50 hover:shadow-lg hover:scale-105 transition-all duration-300 group mb-4"
                        >
                          <FileText className="w-6 h-6 text-primary group-hover:text-primary-hover transition-colors flex-shrink-0 mt-1" />
                          <span className="text-foreground font-medium group-hover:text-primary transition-colors leading-relaxed">
                            {contest.title}
                          </span>
                        </a>
                        
                        {contest.hasSubdocuments && contest.subdocuments && (
                          <div className="ml-10 space-y-2">
                            {contest.subdocuments.map((subdoc, subIndex) => (
                              <a
                                key={subIndex}
                                href={subdoc.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-3 p-3 bg-gradient-to-r from-secondary/5 to-accent/5 rounded-lg border border-border/30 hover:shadow-md hover:scale-105 transition-all duration-300 group"
                              >
                                <FileText className="w-4 h-4 text-secondary group-hover:text-primary transition-colors flex-shrink-0" />
                                <span className="text-foreground text-sm group-hover:text-primary transition-colors">
                                  {subdoc.title}
                                </span>
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
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

export default Contests;