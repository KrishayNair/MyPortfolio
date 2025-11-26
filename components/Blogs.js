import React from "react";
import styles from "./Blogs.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

function Blogs() {
  const blogs = [
    {
      title: "Building Scalable Full-Stack Applications with Next.js",
      excerpt: "Learn how to architect and build production-ready full-stack applications using Next.js, TypeScript, and modern development practices.",
      category: "Development",
      date: "2024-12-15",
      readTime: "5 min read",
      slug: "building-scalable-fullstack-apps",
      tags: ["Next.js", "TypeScript", "Full Stack"],
      featured: true
    },
    {
      title: "AI Integration in Legal Tech: Lessons from LegAIly",
      excerpt: "Exploring how AI and blockchain technology can revolutionize the legal industry, based on real-world implementation experience.",
      category: "AI & Tech",
      date: "2024-12-10",
      readTime: "8 min read",
      slug: "ai-integration-legal-tech",
      tags: ["AI", "Blockchain", "Legal Tech"],
      featured: true
    },
    {
      title: "Web3 Development: Building on Aptos Blockchain",
      excerpt: "A comprehensive guide to developing decentralized applications on Aptos, including smart contracts and GameFi integration.",
      category: "Web3",
      date: "2024-12-05",
      readTime: "10 min read",
      slug: "web3-aptos-development",
      tags: ["Web3", "Blockchain", "Aptos"],
      featured: false
    },
    {
      title: "Design Systems: Creating Consistent UI Components",
      excerpt: "Best practices for building and maintaining design systems that scale across projects and teams.",
      category: "Design",
      date: "2024-11-28",
      readTime: "6 min read",
      slug: "design-systems-ui-components",
      tags: ["Design", "UI/UX", "Design Systems"],
      featured: false
    },
    {
      title: "Optimizing Performance in React Applications",
      excerpt: "Practical techniques and patterns for improving performance in React applications, from code splitting to memoization.",
      category: "Development",
      date: "2024-11-20",
      readTime: "7 min read",
      slug: "optimizing-react-performance",
      tags: ["React", "Performance", "Optimization"],
      featured: false
    },
    {
      title: "Open Source Contributions: A Developer's Journey",
      excerpt: "Reflecting on the impact of open source contributions and how they shape a developer's career and skills.",
      category: "Open Source",
      date: "2024-11-15",
      readTime: "5 min read",
      slug: "open-source-contributions",
      tags: ["Open Source", "Community", "Career"],
      featured: false
    }
  ];

  const featuredBlogs = blogs.filter(blog => blog.featured);
  const regularBlogs = blogs.filter(blog => !blog.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div id="blogs" className={styles.mainContainer}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className={styles.mainHeading}>Blog</h1>
        <p className={styles.subHeading}>Sharing knowledge and insights from my journey</p>
      </motion.div>

      {featuredBlogs.length > 0 && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={styles.featuredSection}
        >
          <h2 className={styles.sectionTitle}>Featured</h2>
          <div className={styles.featuredGrid}>
            {featuredBlogs.map((blog, index) => (
              <motion.article
                key={blog.slug}
                variants={itemVariants}
                className={styles.featuredCard}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className={styles.cardHeader}>
                  <span className={styles.category}>{blog.category}</span>
                  <span className={styles.date}>{new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <h3 className={styles.cardTitle}>{blog.title}</h3>
                <p className={styles.cardExcerpt}>{blog.excerpt}</p>
                <div className={styles.cardFooter}>
                  <div className={styles.tags}>
                    {blog.tags.map((tag, i) => (
                      <span key={i} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                  <div className={styles.meta}>
                    <span className={styles.readTime}>{blog.readTime}</span>
                    <Link href={`/blog/${blog.slug}`} className={styles.readMore}>
                      Read more →
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      )}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={styles.blogsSection}
      >
        <h2 className={styles.sectionTitle}>All Posts</h2>
        <div className={styles.blogsGrid}>
          {regularBlogs.map((blog, index) => (
            <motion.article
              key={blog.slug}
              variants={itemVariants}
              className={styles.blogCard}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className={styles.cardHeader}>
                <span className={styles.category}>{blog.category}</span>
                <span className={styles.date}>{new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
              </div>
              <h3 className={styles.cardTitle}>{blog.title}</h3>
              <p className={styles.cardExcerpt}>{blog.excerpt}</p>
              <div className={styles.cardFooter}>
                <span className={styles.readTime}>{blog.readTime}</span>
                <Link href={`/blog/${blog.slug}`} className={styles.readMore}>
                  Read more →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Blogs;

