import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = [
    { id: 1, title: 'Getting Started with React', date: 'Mar 15, 2024', excerpt: 'Learn the basics of React in this comprehensive guide' },
    { id: 2, title: 'Web Design Trends 2024', date: 'Mar 10, 2024', excerpt: 'Discover the latest trends in web design' },
    { id: 3, title: 'SEO Best Practices', date: 'Mar 5, 2024', excerpt: 'Improve your search engine rankings' },
  ];

  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">Our Blog</h1>
        <p className="text-lg text-gray-600 text-center mb-12">Latest news and articles</p>
        
        <div className="space-y-8">
          {posts.map(post => (
            <div key={post.id} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">{post.title}</h2>
              <p className="text-gray-500 text-sm mb-3">{post.date}</p>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link to={`/blog/${post.id}`} className="text-blue-600 hover:underline">
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;