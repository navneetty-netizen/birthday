import { Hero } from './components/Hero';
import { Gallery } from './components/Gallery';
import { VideoSection } from './components/VideoSection';

function App() {
  return (
    <div className="min-h-screen bg-navy-950 text-gold-50 selection:bg-gold-500/30">
      <main className="relative">
        <Hero />
        <Gallery />
        <VideoSection />

        <footer className="py-12 text-center text-navy-400 text-sm">
          <p>© 2026 Crafted with ❤️</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
