import React from 'react';
import Navbar from './Navbar'; // You may need to replace this with the actual Navbar component import
import './Blog.css'; // Path to your CSS file
import { Link } from 'react-router-dom';

function Blog() {
  // Define an array of states with Wikipedia URLs
  const blogs = [
    {
      id: 1,
      title: 'Andhra Pradesh',
      image: 'and.jpeg',
      shape: 'square',
      wikipediaURL: 'https://en.wikipedia.org/wiki/Andhra_Pradesh',
    },
    {
      id: 2,
      title: 'Arunachal Pradesh',
      image: 'aru.jpeg',
      shape: 'square',
      wikipediaURL: 'https://en.wikipedia.org/wiki/Arunachal_Pradesh',
    },
    {
      id: 4,
      title: 'Goa',
      image: 'goa.jpeg',
      shape: 'square',
      wikipediaURL: 'https://en.wikipedia.org/wiki/Goa',
    },
    {
      id: 5,
      title: 'Assam',
      image: 'assam.jpg',
      shape: 'square',
      wikipediaURL: 'https://en.wikipedia.org/wiki/Assam',
    },
    {
      id: 3,
      title: 'Haryana',
      image: 'har.jpg',
      shape: 'square',
      wikipediaURL: 'https://en.wikipedia.org/wiki/Haryana',
    },
    {
      id: 6,
      title: 'Gujarat',
      image: 'gujarat.jpeg',
      shape: 'square',
      wikipediaURL: 'https://en.wikipedia.org/wiki/Gujarat',
    },
    // Add other states with their respective Wikipedia URLs
  ];

  return (
    <div>
      <Navbar />
      <div className="blog-container">
        {blogs.map((blog) => (
          <div key={blog.id} className={`blog ${blog.shape}`}>
            <h2>
              {/* Use the Wikipedia URL for the state in the anchor tag */}
              <a href={blog.wikipediaURL} target="_blank" rel="noopener noreferrer">
                {blog.title}
              </a>
            </h2>
            <div className="image-container">
              <img src={blog.image} alt={blog.title} />
            </div>
            {/* You can add more content here if needed */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
