import React from 'react';

const F1ArticleCard = ({ article }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="h-48 bg-gray-200 overflow-hidden">
        <img 
          src={`/images/${article.image}`} 
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <span className="inline-block px-2 py-1 bg-red-100 text-red-800 text-xs font-semibold rounded-full mb-2">
          {article.category}
        </span>
        <h3 className="text-xl font-bold mb-2">{article.title}</h3>
        <p className="text-gray-600 text-sm mb-3">{article.date}</p>
        <p className="text-gray-700 mb-4">{article.content.substring(0, 100)}...</p>
        <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors">
          Leer más
        </button>
      </div>
    </div>
  );
};

export default F1ArticleCard;