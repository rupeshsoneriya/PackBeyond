import BlogPostForm from "@/components/admin/BlogPostForm";

export default function NewBlogPostPage() {
  return (
    <div>
      <h1 className="font-montserrat text-[28px] font-bold text-[#1e1e24]">
        New Blog Post
      </h1>
      <BlogPostForm />
    </div>
  );
}
