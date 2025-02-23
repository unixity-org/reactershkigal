
const BASE_URL = "http://185.18.214.46:1234/api/Blogs/GetAllBlog";


export const getAllBlogs = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error(`خطای HTTP! وضعیت: ${response.status}`);
    }
    const data = await response.json();
    console.log(data); 
    return data; 
  } catch (error) {
    console.error("❌ خطا در دریافت مقالات:", error.message);
    return []; 
  }
};
