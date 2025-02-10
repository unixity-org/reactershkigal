import { getBlogById } from './src/services/getBlogById.js';

(async () => {
  try {
    const id = 3; // شناسه‌ی بلاگ مورد نظر
    const blog = await getBlogById(id);
    console.log("✅ بلاگ دریافت شد:", blog);
  } catch (error) {
    console.error("🚨 خطا در تست:", error.message);
  }
})();