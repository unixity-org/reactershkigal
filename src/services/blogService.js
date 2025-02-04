const BASE_URL = "http://localhost:5299/api/Blogs/GetAllBlog";

const getAllBlogs = async () => {
  try {
    const response = await fetch(BASE_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`خطای HTTP! وضعیت: ${response.status}`);
    }

    const data = await response.json();
    console.log("✅ دریافت شد:", data);
    return data;
  } catch (error) {
    console.error("❌ خطا در دریافت مقالات:", error.message);
    return []; // جلوگیری از کرش کردن برنامه در صورت خطا
  }
};

export default getAllBlogs;
