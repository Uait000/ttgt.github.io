import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import InfoBlocks from '@/components/InfoBlocks';
import NewsSection from '@/components/NewsSection';
import SidebarCards from '@/components/SidebarCards';
import Carousel from '@/components/Carousel';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />
      
      <div className="flex">
        {/* Left Sidebar */}
        <Sidebar />
        
        {/* Main Content */}
        <main className="flex-1 min-h-screen">
          <div className="container mx-auto px-6 py-8">
            {/* Info Blocks */}
            <InfoBlocks />
            
            {/* News Section */}
            <NewsSection />
          </div>
          
          {/* Carousel at bottom */}
          <Carousel />
        </main>
        
        {/* Right Sidebar */}
        <aside className="w-80 bg-white border-l border-border p-6 sticky top-16 h-screen overflow-y-auto">
          <SidebarCards />
        </aside>
      </div>
    </div>
  );
};

export default Index;