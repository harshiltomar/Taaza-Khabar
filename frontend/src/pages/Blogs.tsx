import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { useBlogs } from "../hooks";
import { ShimmerBlog } from "../components/ShimmerBlog";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return (
      <div>
        <Appbar />
        <div className="flex justify-center">
          <div>
            <ShimmerBlog />
            <ShimmerBlog />
            <ShimmerBlog />
            <ShimmerBlog />
            <ShimmerBlog />
            <ShimmerBlog />
            <ShimmerBlog />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="-ml-48 max-w-xl">
          <BlogCard
            authorName="harshil"
            title="Beyond Cursed Energy: Analyzing Gojo Satoru as a Dark Horse in Jujutsu Kaisen Season 2"
            content="In the world of modern anime, Jujutsu Kaisen has emerged as a cultural phenomenon, captivating audiences around the world with its supernatural battle and intricate character development. Among this cast of characters, none stand out quite like Gojo Satoru, a sorcerer of unparalleled power and RIZZ. He has become a fan-favorite, admired for his strength, wit, and inexplicable persona. Yet what sets Gojo apart from many of his anime counterparts is a very distinctive and thought-provoking detail: his identity as a Black man."
            publishedDate="9th March 2024"
            id="123"
          />
          {blogs.map((blog) => (
            <BlogCard
              id={blog.id}
              authorName={blog.author.name || "Anonymous"}
              title={blog.title}
              content={blog.content}
              publishedDate={"2nd Feb 2024"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
