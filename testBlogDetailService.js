import { getBlogById } from './src/services/blogDetailService.js';

const testGetBlogById = async () => {
  try {
    const blogId = 3;
    const blog = await getBlogById(blogId);
    console.log('Blog details:', blog);
  } catch (error) {
    console.error('Test failed:', error);
  }
};

testGetBlogById();