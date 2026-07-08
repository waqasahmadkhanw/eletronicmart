import BlogCard from "./BlogCard";

const blogs = [
  {
    id: 1,
    title: "Top 10 Smartphones To Buy In 2026",
    excerpt:
      "Discover the best flagship and budget smartphones with detailed buying recommendations.",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
    category: "Technology",
    author: "Admin",
    date: "July 05, 2026",
    readTime: "6 min read",
  },
  {
    id: 2,
    title: "Complete Laptop Buying Guide",
    excerpt:
      "Everything you need to know before purchasing your next laptop for work, study, or gaming.",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800",
    category: "Buying Guide",
    author: "Admin",
    date: "July 02, 2026",
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "Best Wireless Headphones Compared",
    excerpt:
      "Compare premium wireless headphones based on sound quality, battery life, and comfort.",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
    category: "Reviews",
    author: "Admin",
    date: "June 28, 2026",
    readTime: "5 min read",
  },
  {
    id: 4,
    title: "How To Build A Smart Home",
    excerpt:
      "A beginner-friendly guide to creating an efficient and connected smart home ecosystem.",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?w=800",
    category: "Smart Home",
    author: "Admin",
    date: "June 22, 2026",
    readTime: "7 min read",
  },
  {
    id: 5,
    title: "Gaming Setup Essentials",
    excerpt:
      "Create the ultimate gaming desk with monitors, keyboards, lighting, and accessories.",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800",
    category: "Gaming",
    author: "Admin",
    date: "June 18, 2026",
    readTime: "9 min read",
  },
  {
    id: 6,
    title: "Protect Your Online Privacy",
    excerpt:
      "Practical tips for securing your accounts, devices, and personal information while shopping online.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800",
    category: "Security",
    author: "Admin",
    date: "June 15, 2026",
    readTime: "4 min read",
  },
];

const BlogGrid = () => {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {blogs.map((blog) => (
        <BlogCard
          key={blog.id}
          blog={blog}
        />
      ))}
    </div>
  );
};

export default BlogGrid;