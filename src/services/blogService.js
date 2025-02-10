const BASE_URL = "http://localhost:5299/api/Blogs/GetAllBlog";

export const getAllBlogs = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error(`خطای HTTP! وضعیت: ${response.status}`);
    }
    const data = await response.json();

    if (!Array.isArray(data)) {
      return [];
    }

    return data;
  } catch (error) {
    return [];
  }
};
