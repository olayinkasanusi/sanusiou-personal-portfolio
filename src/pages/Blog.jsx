import { useState, useEffect } from "react";
import { BookOpen, Calendar, Tag, ChevronLeft, User } from "lucide-react";
import NavBar from "../ui/NavBar";

const mockPosts = [
  {
    id: 1,
    title: "Mastering Tailwind CSS Utility-First Design",
    author: "Sanusi Olayinka",
    date: "Nov 15, 2025",
    summary:
      "A deep dive into why utility-first CSS is the future and how Tailwind simplifies modern web development workflows.",
    tags: ["TailwindCSS", "Frontend"],
    image: "https://placehold.co/600x400/0F172A/A5B4FC?text=Tailwind+Focus",
  },
  {
    id: 2,
    title: "Simplifying State with Redux Toolkit",
    author: "Sanusi Olayinka",
    date: "Oct 28, 2025",
    summary:
      "Simplifying complex state logic using Redux Toolkit's powerful abstractions and best practices for large-scale React apps.",
    tags: ["Redux", "React"],
    image: "https://placehold.co/600x400/0F172A/A5B4FC?text=Redux+State",
  },
  {
    id: 3,
    title: "Building Serverless Apps with Supabase",
    author: "Sanusi Olayinka",
    date: "Sep 10, 2025",
    summary:
      "Leveraging Supabase as a backend-as-a-service to quickly deploy full-stack applications without managing infrastructure.",
    tags: ["Next.js", "Supabase"],
    image: "https://placehold.co/600x400/0F172A/A5B4FC?text=Supabase+Backend",
  },
  {
    id: 4,
    title: "Vercel Deployment: Optimizing Build Times",
    author: "Sanusi Olayinka",
    date: "Aug 01, 2025",
    summary:
      "Practical strategies to cut down your build times and achieve instant deploys on the Vercel platform.",
    tags: ["Vercel", "DevOps"],
    image: "https://placehold.co/600x400/0F172A/A5B4FC?text=Vercel+CI",
  },
  {
    id: 5,
    title: "The Power of Modern Async/Await in JavaScript",
    author: "Sanusi Olayinka",
    date: "Jul 22, 2025",
    summary:
      "Understanding how promises and async/await syntax drastically improve readability and error handling in asynchronous code.",
    tags: ["JavaScript", "Async"],
    image: "https://placehold.co/600x400/0F172A/A5B4FC?text=JS+Promises",
  },
  {
    id: 6,
    title: "React Hooks You Might Not Be Using",
    author: "Sanusi Olayinka",
    date: "Jul 05, 2025",
    summary:
      "Exploring less common but highly effective custom hooks and built-in React APIs for solving common component challenges.",
    tags: ["React", "Hooks"],
    image: "https://placehold.co/600x400/0F172A/A5B4FC?text=React+Hooks",
  },
  {
    id: 7,
    title: "GraphQL vs. REST: Choosing the Right API Style",
    author: "Sanusi Olayinka",
    date: "Jun 10, 2025",
    summary:
      "A comparison of data fetching paradigms, focusing on the flexibility and efficiency of GraphQL versus traditional REST endpoints.",
    tags: ["API", "GraphQL"],
    image: "https://placehold.co/600x400/0F172A/A5B4FC?text=GraphQL+API",
  },
  {
    id: 8,
    title: "Adopting TypeScript: The Benefits of Strict Typing",
    author: "Sanusi Olayinka",
    date: "May 25, 2025",
    summary:
      "How integrating TypeScript can lead to fewer runtime errors, better tooling, and easier maintenance in large JavaScript projects.",
    tags: ["TypeScript", "JavaScript"],
    image: "https://placehold.co/600x400/0F172A/A5B4FC?text=TypeScript+Code",
  },
  {
    id: 9,
    title: "Component Testing with Jest and React Testing Library",
    author: "Sanusi Olayinka",
    date: "May 10, 2025",
    summary:
      "A practical guide to setting up and writing effective unit and integration tests for your React components to ensure reliability.",
    tags: ["Testing", "React"],
    image: "https://placehold.co/600x400/0F172A/A5B4FC?text=Jest+RTL",
  },
  {
    id: 10,
    title: "Web Performance Optimization: 5 Essential Steps",
    author: "Sanusi Olayinka",
    date: "Apr 18, 2025",
    summary:
      "Key techniques for improving page load times, reducing bundle sizes, and achieving perfect Lighthouse scores for better SEO.",
    tags: ["Performance", "DevOps"],
    image: "https://placehold.co/600x400/0F172A/A5B4FC?text=Web+Speed",
  },
];

const generateDetailedContent = (title) => {
  switch (title) {
    case "Mastering Tailwind CSS Utility-First Design":
      return [
        { type: "h2", text: "Section 1: The Utility-First Philosophy" },
        {
          type: "p",
          text: `Traditional CSS development often leads to large, monolithic stylesheets where changes in one place can unintentionally affect another. This is the problem Tailwind CSS aims to solve. By providing low-level utility classes, it allows you to build completely custom designs directly in your markup without writing a single line of custom CSS.`,
        },
        { type: "h2", text: "Section 2: The Magic of JIT and Configuration" },
        {
          type: "p",
          text: `With the modern Just-In-Time (JIT) engine, Tailwind compiles CSS on demand as you write it. This means lightning-fast build times and only generating the CSS you actually use, resulting in tiny production file sizes. The 'tailwind.config.js' file is your central hub for customization, allowing you to extend color palettes, fonts, spacing, and more.`,
        },
        {
          type: "h2",
          text: "Section 3: Building Complex Components Efficiently",
        },
        {
          type: "p",
          text: `Take a complex component, like a user profile card. Instead of defining a custom class like '.profile-card', you assemble it with utilities: 'bg-slate-800 p-6 rounded-xl shadow-lg flex items-center space-x-4'. This makes components reusable, predictable, and their styling instantly readable.`,
        },
        {
          type: "h2",
          text: "Section 4: Seamless Responsiveness and Dark Mode",
        },
        {
          type: "p",
          text: `Tailwind's responsive prefixes (like 'sm:', 'md:', 'lg:') allow for fluid layout adjustments across all screen sizes. Similarly, the 'dark:' prefix provides a clean, class-based way to implement the dark theme, which integrates perfectly with React state and parent class toggling.`,
        },
      ];
    case "Simplifying State with Redux Toolkit":
      return [
        { type: "h2", text: "Goodbye Boilerplate" },
        {
          type: "p",
          text: `Redux Toolkit (RTK) was introduced to simplify the common challenges associated with Redux, namely excessive boilerplate and complex setup. It provides powerful utilities like configureStore, createSlice, and createAsyncThunk, which drastically reduce the amount of code you need to write.`,
        },
        { type: "h2", text: "The Power of createSlice" },
        {
          type: "p",
          text: `The createSlice function combines the reducer logic, actions, and initial state into a single function call. This promotes maintainability and makes it much easier to manage feature-specific state logic.`,
        },
        { type: "h2", text: "Async Logic with createAsyncThunk" },
        {
          type: "p",
          text: `Handling asynchronous data fetching is seamless with createAsyncThunk. It automatically generates action types for the pending, fulfilled, and rejected states, allowing you to focus on the data logic rather than managing the thunk middleware manually.`,
        },
      ];
    case "Building Serverless Apps with Supabase":
      return [
        { type: "h2", text: "The PostgreSQL Advantage" },
        {
          type: "p",
          text: `Supabase gives you a full, powerful PostgreSQL database backend, not a restricted NoSQL layer. This means you get full relational power, complex queries, and ACID compliance, which is often essential for business logic.`,
        },
        { type: "h2", text: "Instant APIs and Realtime" },
        {
          type: "p",
          text: `Every table you create in Supabase automatically gets a RESTful API. Furthermore, you can subscribe to database changes in real-time, making it perfect for building interactive features like live chat or collaborative documents with minimal effort.`,
        },
        { type: "h2", text: "Authentication out of the Box" },
        {
          type: "p",
          text: `Supabase provides secure, user-friendly authentication with email/password, social logins (Google, GitHub), and secure token handling, abstracting away the complexities of user management and security rules.`,
        },
      ];
    default:
      return [
        { type: "h2", text: "Detailed Analysis of the Topic" },
        {
          type: "p",
          text: `This is a comprehensive, deep-dive article on the subject of ${title}. The key takeaway is the modern approach to solving classic engineering challenges using the latest tools and best practices. We explore both the theoretical foundations and the practical implementation steps necessary to achieve a high-quality, scalable result.`,
        },
        {
          type: "p",
          text: `Specifically, this topic touches upon aspects of architecture, performance tuning, and developer workflow. Adopting these techniques ensures your projects are future-proof and your team maintains a high velocity of delivery. Consistency in tooling and methodology is paramount for long-term project health.`,
        },
        { type: "h2", text: "Implementation Strategies" },
        {
          type: "p",
          text: `Successful implementation requires careful planning. Start small by integrating the core concepts into a single component or module. Measure the impact on performance and developer experience before scaling across the entire application. Continuous feedback and iterative refinement are the hallmarks of a successful adoption process.`,
        },
      ];
  }
};

const SinglePostView = ({ post, onBack }) => {
  const content = generateDetailedContent(post.title);

  return (
    <div className="max-w-4xl mx-auto py-16 animate-fade-in">
      <button
        onClick={onBack}
        className="flex items-center text-indigo-400 hover:text-white font-semibold transition-colors mb-8 p-3 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700/50"
      >
        <ChevronLeft size={20} className="mr-2" /> Back to Blog List
      </button>

      <article className="bg-slate-900 rounded-2xl p-6 sm:p-10 shadow-2xl border border-slate-800">
        <header className="mb-8 border-b border-slate-700 pb-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="flex items-center text-xs font-medium px-3 py-1 bg-indigo-900/40 text-indigo-400 rounded-full"
              >
                <Tag size={12} className="mr-1" />
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl font-extrabold text-white leading-tight mb-4">
            {post.title}
          </h1>
          <div className="flex items-center text-slate-500 text-sm">
            <Calendar size={16} className="mr-2 text-indigo-400" />
            <span className="mr-4">{post.date}</span>
            <User size={16} className="mr-2 text-indigo-400" />
            <span>By {post.author}</span>
          </div>
        </header>

        <figure className="mb-10 rounded-xl overflow-hidden shadow-lg border border-slate-700">
          <img
            src={post.image.replace("600x400", "800x450")}
            alt={post.title}
            className="w-full h-auto object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/800x450/1F2937/FFFFFF?text=Featured+Image";
            }}
          />
          <figcaption className="text-slate-500 text-sm p-3 bg-slate-800 text-center">
            An illustration of the core concept discussed in the article.
          </figcaption>
        </figure>

        <div className="space-y-6 text-slate-400 article-body">
          <p className="text-lg leading-relaxed font-medium text-white/90">
            {post.summary.replace("...", "")}.
          </p>

          {content.map((item, index) => {
            if (item.type === "h2") {
              return (
                <h2
                  key={index}
                  className="text-2xl font-bold text-white pt-6 pb-2 border-b border-indigo-700/50"
                >
                  {item.text}
                </h2>
              );
            }
            return (
              <p key={index} className="leading-relaxed">
                {item.text}
              </p>
            );
          })}

          <blockquote className="border-l-4 border-indigo-500 pl-4 py-3 italic text-indigo-300 bg-slate-800/50 rounded-r-lg mt-8">
            "Modern development is about reducing complexity and increasing
            efficiency. Choosing the right tools is half the battle."
          </blockquote>
        </div>

        <footer className="mt-10 pt-6 border-t border-slate-700/50">
          <p className="text-center text-slate-500 text-sm">
            Thank you for reading. Connect with the author, Sanusi Olayinka, for
            more insights on {post.tags.join(", ")}.
          </p>
        </footer>
      </article>
    </div>
  );
};

const BlogPostCard = ({ post, onReadMore }) => (
  <div className="bg-slate-800 rounded-xl overflow-hidden shadow-2xl border border-slate-700/50 hover:border-indigo-400 transition-all duration-300 transform hover:-translate-y-1">
    <div className="h-48 overflow-hidden">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://placehold.co/600x400/1F2937/FFFFFF?text=Post+Image";
        }}
      />
    </div>
    <div className="p-6 space-y-4">
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag, index) => (
          <span
            key={index}
            className="flex items-center text-xs font-medium px-3 py-1 bg-indigo-900/40 text-indigo-400 rounded-full"
          >
            <Tag size={12} className="mr-1" />
            {tag}
          </span>
        ))}
      </div>
      <h3
        className="text-2xl font-bold text-white leading-snug hover:text-indigo-400 transition-colors cursor-pointer"
        onClick={() => onReadMore(post.id)}
      >
        {post.title}
      </h3>
      <p className="text-slate-400 text-sm">{post.summary}</p>
      <div className="flex items-center justify-between pt-3 border-t border-slate-700">
        <span className="flex items-center text-slate-500 text-xs font-medium">
          <Calendar size={14} className="mr-2 text-indigo-400" />
          {post.date}
        </span>
        <button
          className="flex items-center text-indigo-400 hover:text-white font-semibold transition-colors"
          onClick={() => onReadMore(post.id)}
        >
          Read More <BookOpen size={16} className="ml-2" />
        </button>
      </div>
    </div>
  </div>
);

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPostId, setSelectedPostId] = useState(null);

  useEffect(() => {
    const fetchPosts = () => {
      setLoading(true);
      setError(null);

      setTimeout(() => {
        try {
          setPosts(mockPosts);
        } catch {
          setError(
            "Failed to load blog posts. Please check your network connection."
          );
        } finally {
          setLoading(false);
        }
      }, 1500);
    };

    fetchPosts();
  }, []);

  const handleReadMore = (id) => {
    setSelectedPostId(id);
    window.scrollTo(0, 0);
  };

  const BlogHeader = () => (
    <header className="text-center mb-16 pt-10">
      <BookOpen size={36} className="text-indigo-400 mx-auto mb-4" />
      <h1 className="text-5xl md:text-6xl font-extrabold font-montserrat text-white mb-4 tracking-tight">
        The <span className="text-indigo-400">Developer</span> Blog
      </h1>
      <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
        Sharing insights on React, Next.js, and modern Frontend engineering.
        Stay ahead of the curve with deep-dive tutorials.
      </p>
      <div className="w-1/4 h-1 bg-indigo-500 mx-auto mt-8 rounded-full"></div>
    </header>
  );

  const BlogContent = () => {
    if (loading) {
      return (
        <div className="text-center py-32">
          <svg
            className="animate-spin h-10 w-10 text-indigo-400 mx-auto mb-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <p className="text-lg text-slate-400">
            Loading the latest articles...
          </p>
        </div>
      );
    }

    if (error) {
      return (
        <div className="text-center py-32 text-red-400">
          <p className="text-xl font-medium">{error}</p>
          <p className="text-slate-500 mt-2">
            Could not retrieve data from the source API.
          </p>
        </div>
      );
    }

    return (
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogPostCard key={post.id} post={post} onReadMore={handleReadMore} />
        ))}
      </div>
    );
  };

  const currentPost = posts.find((p) => p.id === selectedPostId);

  return (
    <div className="min-h-screen bg-slate-950 font-raleway flex flex-col justify-between items-center">
      <NavBar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {selectedPostId === null ? (
          <>
            <BlogHeader />
            <BlogContent />
          </>
        ) : currentPost ? (
          <SinglePostView
            post={currentPost}
            onBack={() => setSelectedPostId(null)}
          />
        ) : (
          <div className="text-center py-32 text-red-400">
            <p className="text-xl font-medium">Post Not Found</p>
            <button
              onClick={() => setSelectedPostId(null)}
              className="mt-4 text-indigo-400 hover:text-white"
            >
              Go Back
            </button>
          </div>
        )}
      </main>

      <footer className="py-10 text-center border-t border-slate-800 bg-slate-900 w-full">
        <p className="text-slate-500 text-sm">
          © 2025 Sanusi Olayinka Blog. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Blog;
