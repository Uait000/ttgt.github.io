import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import SidebarCards from '@/components/SidebarCards';
import InfoBlocks from '@/components/InfoBlocks';

const Vacancies = () => {
  const vacancies = [
    {
      id: 1,
      title: 'Преподаватель информатики',
      department: 'Отделение информационных технологий',
      salary: 'От 30 000 руб.'
    },
    {
      id: 2,
      title: 'Мастер производственного обучения',
      department: 'Строительное отделение',
      salary: 'От 35 000 руб.'
    },
    {
      id: 3,
      title: 'Преподаватель специальных дисциплин',
      department: 'Отделение электромеханики',
      salary: 'От 32 000 руб.'
    },
    {
      id: 4,
      title: 'Заведующий лабораторией',
      department: 'Отделение автоматики и организации перевозок',
      salary: 'От 40 000 руб.'
    },
    {
      id: 5,
      title: 'Преподаватель экономических дисциплин',
      department: 'Отделение информационных технологий и экономики',
      salary: 'От 28 000 руб.'
    }
  ];

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
              <h1 className="text-3xl font-bold text-primary mb-8 text-center">Вакансии</h1>
              
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl border border-border/50 p-8">
                <div className="space-y-6">
                {vacancies.map((vacancy) => (
                  <div key={vacancy.id} className="bg-white rounded-lg p-6 border border-border hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-primary mb-2">{vacancy.title}</h3>
                        <p className="text-muted-foreground mb-2">{vacancy.department}</p>
                        <p className="text-foreground font-medium">{vacancy.salary}</p>
                      </div>
                      <div className="text-4xl">💼</div>
                    </div>
                  </div>
                ))}
                </div>
                
                <div className="mt-8 bg-white rounded-lg p-6 text-center">
                  <p className="text-muted-foreground">
                    По вопросам трудоустройства обращайтесь в отдел кадров техникума
                  </p>
                  <p className="text-primary font-semibold mt-2">
                    Телефон: 8 (86196) 6-20-03
                  </p>
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

export default Vacancies;