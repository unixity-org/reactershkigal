const BASE_URL = "http://localhost:5299/api/Blogs/GetBlogById";

export const getBlogById = async (id) => {
  try {
    const url = `${BASE_URL}/${id}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`خطای HTTP! وضعیت: ${response.status}`);
    }

    const data = await response.json();

    // بررسی و تغییر کلید blogId به id برای هماهنگی
    if (data && data.blogId) {
      return {
        ...data,
        id: data.blogId, // اضافه کردن فیلد id برای یکپارچگی
      };
    }

    return null;
  } catch (error) {
    console.error("خطا در دریافت بلاگ:", error);
    return null;
  }
};
