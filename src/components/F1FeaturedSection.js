import React from 'react';
import F1ArticleCard from './F1ArticleCard';
import articles from '../mock/articles';

const F1FeaturedSection = () => {
  const featuredArticle = articles[0];
  
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Artículo Destacado</h2>
        <div className="max-w-4xl mx-auto">
          <F1ArticleCard article={featuredArticle} />
        </div>
      </div>
    </section>
  );
};

export default F1FeaturedSection;