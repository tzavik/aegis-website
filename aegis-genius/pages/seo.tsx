import React from 'react';
import ArticleCard from '../components/ArticleCard';

const articles = [
  {
    title: 'Understanding Insurance Policies',
    date: '2023-01-15',
    excerpt: 'A comprehensive guide to understanding different types of insurance policies and their benefits.',
    link: '/articles/understanding-insurance-policies',
  },
  {
    title: 'How to Choose the Right Insurance',
    date: '2023-02-10',
    excerpt: 'Tips and tricks for selecting the best insurance policy that fits your needs.',
    link: '/articles/choosing-right-insurance',
  },
  {
    title: 'The Future of Insurance: AI and Automation',
    date: '2023-03-05',
    excerpt: 'Exploring how AI and automation are transforming the insurance industry.',
    link: '/articles/future-of-insurance',
  },
];

const SeoPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">SEO Articles</h1>
      <div className="grid grid-cols-1 gap-4">
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            title={article.title}
            date={article.date}
            excerpt={article.excerpt}
            link={article.link}
          />
        ))}
      </div>
    </div>
  );
};

export default SeoPage;