import React from 'react';
import F1Header from './components/F1Header';
import F1FeaturedSection from './components/F1FeaturedSection';
import F1ArticlesGrid from './components/F1ArticlesGrid';
import F1Footer from './components/F1Footer';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <F1Header />
      <main className="flex-grow">
        <F1FeaturedSection />
        <F1ArticlesGrid />
      </main>
      <F1Footer />
    </div>
  );
};

export default App;

// DONE