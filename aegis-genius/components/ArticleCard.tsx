import React from 'react';

interface ArticleCardProps {
  title: string;
  publishDate: string;
  excerpt: string;
  link: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ title, publishDate, excerpt, link }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-500 text-sm">{publishDate}</p>
      <p className="mt-2">{excerpt}</p>
      <a href={link} className="text-blue-500 hover:underline mt-2 inline-block">
        Read more
      </a>
    </div>
  );
};

export default ArticleCard;