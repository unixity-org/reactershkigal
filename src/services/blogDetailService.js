export const getBlogById = async (id) => {
  try {
    const response = await fetch(`http://185.18.214.46:1234/api/Blogs/GetPostById?id=${id}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const text = await response.text();
    console.log('Raw API response:', text);

    try {
      const data = JSON.parse(text);
      return data;
    } catch (error) {
      throw new Error('Invalid JSON response: ' + text);
    }
  } catch (error) {
    console.error('Error fetching blog details:', error);
    throw error;
  }
};