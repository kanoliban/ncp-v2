import React from 'react';
import { Clock, Share2 } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import Header from '../components/layout/Header';

const categories = ["All Stories", "Success Stories", "Care Education", "Caregiver Corner"];

const featuredPost = {
  category: "Featured",
  title: "Transforming Lives Through Professional Care",
  excerpt: "Discover how NailCare Pro is revolutionizing at-home medical nail care",
  author: "Lisa Chen",
  role: "Director of Care",
  readTime: "10 min read"
};

const blogPosts = [
  {
    category: "Success Stories",
    title: "Living Better with Diabetes: A Client's Journey",
    excerpt: "How professional nail care transformed my diabetes management journey",
    author: "Sarah Johnson",
    role: "Client",
    readTime: "5 min read"
  },
  {
    category: "Care Education",
    title: "Essential Senior Foot Care Guide",
    excerpt: "Professional tips for maintaining healthy feet as you age",
    author: "Dr. Emily Chen",
    role: "Healthcare Provider",
    readTime: "8 min read"
  },
  {
    category: "Caregiver Corner",
    title: "Supporting Family Health Journey",
    excerpt: "A daughter's story of helping her mother maintain independence",
    author: "Michael Thompson",
    role: "Family Caregiver",
    readTime: "6 min read"
  },
  {
    category: "Success Stories",
    title: "Mobility and Independence Restored",
    excerpt: "How professional care helped me regain confidence",
    author: "Robert Wilson",
    role: "Client",
    readTime: "7 min read"
  },
  {
    category: "Care Education",
    title: "Understanding Diabetic Foot Care",
    excerpt: "Key insights for managing diabetic foot health",
    author: "Dr. James Miller",
    role: "Diabetes Specialist",
    readTime: "5 min read"
  },
  {
    category: "Caregiver Corner",
    title: "Professional Support for Caregivers",
    excerpt: "Resources and tips for family care providers",
    author: "Lisa Chen",
    role: "Care Coordinator",
    readTime: "4 min read"
  }
];

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-24 max-w-7xl mx-auto px-6">
        {/* Featured Banner */}
        <div className="relative h-[400px] rounded-xl overflow-hidden mb-8">
          <img 
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80" 
            alt="Featured story" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <Button
                size="sm"
                className="mb-4 bg-gradient-to-r from-[#0A5C99] to-[#1E88E5] hover:from-[#1565C0] hover:to-[#1976D2] text-white shadow-sm hover:shadow-md"
              >
                {featuredPost.category}
              </Button>
              <h1 className="text-4xl font-bold text-white mb-4">
                {featuredPost.title}
              </h1>
              <p className="text-xl text-gray-200 mb-4">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center space-x-4 text-gray-200">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {featuredPost.readTime}
                </div>
                <span>By {featuredPost.author} • {featuredPost.role}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              size="sm"
              className="bg-gradient-to-r from-[#0A5C99] to-[#1E88E5] hover:from-[#1565C0] hover:to-[#1976D2] text-white shadow-sm hover:shadow-md"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <div key={index} className="rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow">
              <img 
                src={`https://images.unsplash.com/photo-${1576091160550 + index}?auto=format&fit=crop&q=80`}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <Button
                  size="sm"
                  className="mb-4 bg-gradient-to-r from-[#0A5C99] to-[#1E88E5] hover:from-[#1565C0] hover:to-[#1976D2] text-white shadow-sm hover:shadow-md"
                >
                  {post.category}
                </Button>
                <h2 className="text-xl font-bold mb-2 text-gray-900">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    By {post.author} • {post.role}
                  </div>
                  <Share2 className="w-4 h-4 text-gray-500 hover:text-blue-600 cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <Card className="bg-blue-50 border-blue-100 mb-16">
          <CardHeader>
            <CardTitle className="text-center text-blue-700">
              Stay Connected with NailCare Pro
            </CardTitle>
            <CardDescription className="text-center">
              Get the latest stories, tips, and insights delivered to your inbox
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-9 px-4 rounded-md border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              <Button className="bg-gradient-to-r from-[#0A5C99] to-[#1E88E5] hover:from-[#1565C0] hover:to-[#1976D2] text-white shadow-sm hover:shadow-md">
                Subscribe
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default BlogPage;