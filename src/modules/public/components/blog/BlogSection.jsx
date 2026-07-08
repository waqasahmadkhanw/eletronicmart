import {
  BlogHero,
  BlogGrid,
  BlogSidebar,
  BlogPagination,
  BlogCTA,
} from ".";

const BlogSection = () => {
  return (
    <main className="bg-white dark:bg-slate-950">
      <BlogHero />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-12">
            {/* Blog Posts */}
            <div className="lg:col-span-8">
              <BlogGrid />

              <div className="mt-12">
                <BlogPagination />
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <BlogSidebar />
            </aside>
          </div>
        </div>
      </section>

      <BlogCTA />
    </main>
  );
};

export default BlogSection;