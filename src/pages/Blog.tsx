import { useState, useEffect } from "react";
import { BookOpen, Calendar, Tag, ChevronLeft, User, Search } from "lucide-react";
import NavBar from "../ui/NavBar";
import Footer from "../ui/Footer";
import Button from "../ui/Button";

const mockPosts = [
  {
    id: 1,
    title: "Mastering Tailwind CSS Utility-First Design",
    author: "Sanusi Olayinka Uthman",
    date: "Nov 15, 2025",
    summary:
      "A deep dive into why utility-first CSS is the future and how Tailwind simplifies modern web development workflows.",
    tags: ["TailwindCSS", "Frontend"],
    image: "https://images.unsplash.com/photo-1669023414166-a4cc7c0fe1f5?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    title: "Simplifying State with Redux Toolkit",
    author: "Sanusi Olayinka Uthman",
    date: "Oct 28, 2025",
    summary:
      "Simplifying complex state logic using Redux Toolkit's powerful abstractions and best practices for large-scale React apps.",
    tags: ["Redux", "React"],
    image: "https://plus.unsplash.com/premium_photo-1678564741870-d68a69925537?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    title: "Building Serverless Apps with Supabase",
    author: "Sanusi Olayinka Uthman",
    date: "Sep 10, 2025",
    summary:
      "Leveraging Supabase as a backend-as-a-service to quickly deploy full-stack applications without managing infrastructure.",
    tags: ["Next.js", "Supabase"],
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    title: "Vercel Deployment: Optimizing Build Times",
    author: "Sanusi Olayinka Uthman",
    date: "Aug 01, 2025",
    summary:
      "Practical strategies to cut down your build times and achieve instant deploys on the Vercel platform.",
    tags: ["Vercel", "DevOps"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 5,
    title: "The Power of Modern Async/Await in JavaScript",
    author: "Sanusi Olayinka Uthman",
    date: "Jul 22, 2025",
    summary:
      "Understanding how promises and async/await syntax drastically improve readability and error handling in asynchronous code.",
    tags: ["JavaScript", "Async"],
    image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 6,
    title: "React Hooks You Might Not Be Using",
    author: "Sanusi Olayinka Uthman",
    date: "Jul 05, 2025",
    summary:
      "Exploring less common but highly effective custom hooks and built-in React APIs for solving common component challenges.",
    tags: ["React", "Hooks"],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 7,
    title: "GraphQL vs. REST: Choosing the Right API Style",
    author: "Sanusi Olayinka Uthman",
    date: "Jun 10, 2025",
    summary:
      "A comparison of data fetching paradigms, focusing on the flexibility and efficiency of GraphQL versus traditional REST endpoints.",
    tags: ["API", "GraphQL"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 8,
    title: "Adopting TypeScript: The Benefits of Strict Typing",
    author: "Sanusi Olayinka Uthman",
    date: "May 25, 2025",
    summary:
      "How integrating TypeScript can lead to fewer runtime errors, better tooling, and easier maintenance in large JavaScript projects.",
    tags: ["TypeScript", "JavaScript"],
    image: "https://images.unsplash.com/photo-1612425506252-50b73402c822?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 9,
    title: "Component Testing with Jest and React Testing Library",
    author: "Sanusi Olayinka Uthman",
    date: "May 10, 2025",
    summary:
      "A practical guide to setting up and writing effective unit and integration tests for your React components to ensure reliability.",
    tags: ["Testing", "React"],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 10,
    title: "Web Performance Optimization: 5 Essential Steps",
    author: "Sanusi Olayinka Uthman",
    date: "Apr 18, 2025",
    summary:
      "Key techniques for improving page load times, reducing bundle sizes, and achieving perfect Lighthouse scores for better SEO.",
    tags: ["Performance", "DevOps"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=60",
  },
];

interface Post {
  id: number;
  title: string;
  author: string;
  date: string;
  summary: string;
  tags: string[];
  image: string;
}

const generateDetailedContent = (title: string) => {
  switch (title) {
    case "Mastering Tailwind CSS Utility-First Design":
      return [
        { type: "h2", text: "The Utility-First Philosophy" },
        {
          type: "p",
          text: `Traditional CSS development often leads to large, monolithic stylesheets where changes in one place can unintentionally affect another. This is the problem Tailwind CSS aims to solve. By providing low-level utility classes, it allows you to build completely custom designs directly in your markup without writing a single line of custom CSS.`,
        },
        { type: "h2", text: "The Magic of JIT and Configuration" },
        {
          type: "p",
          text: `With the modern Just-In-Time (JIT) engine, Tailwind compiles CSS on demand as you write it. This means lightning-fast build times and only generating the CSS you actually use, resulting in tiny production file sizes. The theme directives inside index.css act as your central configuration hub.`,
        },
      ];
    default:
      return [
        { type: "h2", text: "Detailed Analysis" },
        {
          type: "p",
          text: `This is a comprehensive, deep-dive article on ${title}. It focuses on modern paradigms, clean architecture, performance optimization, and developer workflow setups.`,
        },
      ];
  }
};

interface SinglePostViewProps {
  post: Post;
  onBack: () => void;
}

const SinglePostView = ({ post, onBack }: SinglePostViewProps) => {
  const content = generateDetailedContent(post.title);

  return (
    <div className="max-w-3xl mx-auto py-8">
      <Button
        onClick={onBack}
        variant="secondary-glass"
        size="small"
        className="mb-6 w-auto px-4 py-2 text-blue-600 hover:text-blue-700"
      >
        <ChevronLeft size={20} className="mr-1" /> Back to Blog List
      </Button>

      <article className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-xs">
        <header className="mb-6 border-b border-slate-100 pb-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.map((tag: string, index: number) => (
              <span
                key={index}
                className="flex items-center text-xs font-semibold px-2.5 py-1 bg-blue-50 text-blue-600 rounded-md"
              >
                <Tag size={12} className="mr-1" />
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 leading-tight mb-4">
            {post.title}
          </h1>
          <div className="flex items-center text-slate-500 text-sm gap-4">
            <span className="flex items-center">
              <Calendar size={16} className="mr-1 text-slate-400" />
              {post.date}
            </span>
            <span className="flex items-center">
              <User size={16} className="mr-1 text-slate-400" />
              By {post.author}
            </span>
          </div>
        </header>

        <figure className="mb-8 rounded-lg overflow-hidden border border-slate-200">
          <img
            src={post.image.replace("600x400", "800x450")}
            alt={post.title}
            className="w-full h-auto object-cover"
            onError={(e) => {
              const target = e.currentTarget as HTMLImageElement;
              target.onerror = null;
              target.src =
                "https://placehold.co/800x450/F1F5F9/0F172A?text=Featured+Image";
            }}
          />
        </figure>

        <div className="space-y-6 text-slate-600 leading-relaxed font-sans font-light">
          <p className="text-lg leading-relaxed font-medium text-slate-800">
            {post.summary.replace("...", "")}.
          </p>

          {content.map((item, index) => {
            if (item.type === "h2") {
              return (
                <h2
                  key={index}
                  className="text-xl font-bold text-slate-900 pt-4 pb-1 border-b border-slate-100"
                >
                  {item.text}
                </h2>
              );
            }
            return (
              <p key={index} className="leading-relaxed text-sm">
                {item.text}
              </p>
            );
          })}
        </div>
      </article>
    </div>
  );
};

interface BlogPostCardProps {
  post: Post;
  onReadMore: (id: number) => void;
}

const BlogPostCard = ({ post, onReadMore }: BlogPostCardProps) => (
  <div className="bg-white rounded-xl overflow-hidden border border-slate-200/80 hover:border-blue-500 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-blue-200/30 hover:scale-105">
    <div>
      <div className="h-72 md:h-80 overflow-hidden border-b border-slate-100 bg-slate-50 rounded-t-xl">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement;
            target.onerror = null;
            target.src =
              "https://placehold.co/600x400/F1F5F9/0F172A?text=Post+Image";
          }}
        />
      </div>
      <div className="p-5 space-y-3">
        <div className="flex flex-wrap gap-1.5">
          {post.tags.map((tag: string, index: number) => (
            <span key={index} className="flex items-center text-xs font-semibold px-2 py-0.5 bg-blue-50 text-blue-600 rounded">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-lg font-bold text-slate-900 leading-snug hover:text-blue-600 transition-colors cursor-pointer">
          {post.title}
        </h3>
        <p className="text-slate-600 text-xs font-light leading-relaxed line-clamp-3">
          {post.summary}
        </p>
      </div>
    </div>
    <div className="p-5 pt-0 flex items-center justify-between border-t border-slate-100 mt-2">
      <span className="flex items-center text-slate-400 text-xs font-light">
        <Calendar size={12} className="mr-1" />
        {post.date}
      </span>
      <Button
        variant="primary-glass"
        size="small"
        className="w-auto px-3.5 py-1.5 rounded-lg text-xs"
        onClick={() => onReadMore(post.id)}
      >
        Read Article <BookOpen size={14} className="ml-1" />
      </Button>
    </div>
  </div>
);

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

  useEffect(() => {
    const fetchPosts = () => {
      setLoading(true);
      setError(null);
      setTimeout(() => {
        try {
          setPosts(mockPosts);
        } catch {
          setError("Failed to load blog posts.");
        } finally {
          setLoading(false);
        }
      }, 800);
    };
    fetchPosts();
  }, []);

  const handleReadMore = (id: number) => {
    setSelectedPostId(id);
    window.scrollTo(0, 0);
  };

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  return (
    <div className="bg-white min-h-screen engineering-grid w-full flex flex-col justify-between items-center px-6 pt-28 pb-12 md:pt-36 gap-16 overflow-hidden">
      <NavBar position="relative" />

      <main className="max-w-4xl w-full">
        {selectedPostId === null ? (
          <div className="space-y-8">
            <header className="text-left space-y-4">
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 font-sans">
                Engineering Logs
              </h1>
              <p className="text-lg text-slate-600 font-sans font-light max-w-2xl">
                A collection of technical articles and logs documenting solutions
                across state orchestration, backend integrations, and rendering pipelines.
              </p>
            </header>

            <div className="relative w-full max-w-md">
              <Search
                size={18}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles by title or tag..."
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all text-sm"
              />
            </div>

            {loading ? (
              <div className="text-center py-20 text-slate-400">Loading articles...</div>
            ) : error ? (
              <div className="text-center py-20 text-red-500">{error}</div>
            ) : filteredPosts.length === 0 ? (
              <div className="text-center py-20 text-slate-400">No articles matched your search.</div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredPosts.map((post) => (
                  <BlogPostCard
                    key={post.id}
                    post={post}
                    onReadMore={handleReadMore}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          posts.find((p) => p.id === selectedPostId) && (
            <SinglePostView
              post={posts.find((p) => p.id === selectedPostId)!}
              onBack={() => setSelectedPostId(null)}
            />
          )
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
