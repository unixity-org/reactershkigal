import BlogDetailsMain from "@/components/layout/main/BlogDetailsMain";

import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import getAllBlogs from "@/libs/getAllBlogs";
import { notFound } from "next/navigation";
import { getBlogById } from "@/services/blogDetailService";
export const dynamic = 'force-dynamic';
export const metadata = {
  title: "Blogs Details | Bastun- Business Consulting Next Js Template",
  description: "Blogs Details | Bastun- Business Consulting Next Js Template",
};
const blogs = getAllBlogs();
export default async function BlogsDetails({ params }) {
  const { id } = params;
  console.log('Blog Title:', id);  
  // const isExistBlog = blogs?.find(({ id: id1 }) => id1 === parseInt(id));
  const blogPost = await getBlogById(id);
  console.log('Blog Post', blogPost);
  if (!blogPost || blogPost === null) {
    notFound();
  }
  // if (!isExistBlog) {
  //   notFound();
  // }
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg={"black"}
      footerBg={"black"}
    >
      <ThemeController />
      <BlogDetailsMain post={blogPost} />
    </PageWrapper>
  );
}
export async function generateStaticParams() {
  return blogs?.map(({ id }) => ({ id: id.toString() }));
}
