import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import SidebarCards from '@/components/SidebarCards';

const BellSchedule = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 min-h-screen">
          <div className="container mx-auto px-6 py-8">
            <div className="bg-white rounded-lg shadow-sm border border-border p-8">
              <h1 className="text-3xl font-bold text-primary mb-8 text-center">Расписание звонков</h1>
              
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl border border-border/50 p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h2 className="text-xl font-semibold text-primary mb-4 text-center">Расписание звонков - Вариант 1</h2>
                    <div className="aspect-[3/4] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg border-2 border-dashed border-border flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl mb-2">🔔</div>
                        <p className="text-muted-foreground">Изображение расписания звонков</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h2 className="text-xl font-semibold text-primary mb-4 text-center">Расписание звонков - Вариант 2</h2>
                    <div className="aspect-[3/4] bg-gradient-to-br from-secondary/10 to-accent/10 rounded-lg border-2 border-dashed border-border flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl mb-2">🔔</div>
                        <p className="text-muted-foreground">Изображение расписания звонков</p>
                      </div>
                    </div>
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

export default BellSchedule;