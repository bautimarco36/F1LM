import React from 'react';
import F1ArticleCard from './F1ArticleCard';
import articles from '../mock/articles';

const F1ArticlesGrid = () => {
  const recentArticles = articles.slice(1);
  
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Últimos Contenidos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentArticles.map(article => (
            <F1ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default F1ArticlesGrid;