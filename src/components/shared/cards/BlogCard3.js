import ButtonPrimary from "../buttons/ButtonPrimary";
import Link from "next/link";
import Image from "next/image";

const BlogCard3 = ({ blog, blogsType, bg }) => {
  const { blogId, title, description, createdAt, imageAddress } = blog;

  const baseUrl = "http://185.18.214.46:1234";

  const getFullImageUrl = (imageAddress) => {
    return imageAddress ? `${baseUrl}${imageAddress}` : null;
  };

  const fullImageUrl = getFullImageUrl(imageAddress);

  const getContainerClass = () => {
    return bg === "pink"
      ? "col-xl-6 col-lg-6 col-md-12 col-sm-12"
      : "col-xl-4 col-lg-4 col-md-6 col-sm-6";
  };

  const getBlogClass = () => {
    return blogsType === 4 ? "" : "blog__3__single";
  };

  const getBackgroundClass = () => {
    return bg === "pink" ? "bg__pink" : "";
  };

  const getDateClass = () => {
    return bg === "pink" ? "bg__white" : "";
  };

  // کوتاه کردن عنوان اگر طولانی باشد
  const truncateTitle = (title, maxLength) => {
    return title?.length > maxLength ? title.slice(0, maxLength) + "..." : title;
  };

// محدود کردن توضیحات به ۴۰ کلمه
const truncateDescription = (text, wordLimit) => {
  if (!text) return "";
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return text;
};

  return (
    <div
      className={`${getContainerClass()} col-12`}
      data-aos="fade-up"
      data-aos-duration="500"
      style={{ display: "flex" }} 
    >
      <div
        className={`blog__4__single ${getBlogClass()} single__transform ${getBackgroundClass()}`}
        style={{ flex: 1, display: "flex", flexDirection: "column" }} 
      >
        {/* بخش تصویر */}
        {fullImageUrl && (
          <div className="blog__4__image" style={{ marginBottom: "10px" }}>
            <Image
              src={fullImageUrl}
              alt={title || "Blog Image"}
              width={500}
              height={300}
              layout="responsive"
              objectFit="cover"
              className="rounded-lg"
              priority
            />
          </div>
        )}

        {/* تاریخ ایجاد بلاگ */}
        <div className="blog__4__time">
          <p className={getDateClass()}>
            <span className="text__gradient">
              {new Date(createdAt).toLocaleDateString()}
            </span>
          </p>
        </div>

        {/* عنوان بلاگ */}
        <div className="blog__4__heading">
          <h6>
            <Link className="text-uppercase" href={`/blogs/${blogId}`}>
              {truncateTitle(title, 18)}
            </Link>
          </h6>
        </div>

        {/* توضیحات بلاگ */}
        <div className="blog__4__text">
          <p>{truncateDescription(description, 25)}</p>
        </div>

        {/* دکمه "خواندن بیشتر" */}
        <div className="blog__4__button" style={{ marginTop: "auto" }}> {/* دکمه در پایین باکس */}
          <ButtonPrimary
            text={"READ MORE"}
            path={`/blogs/${blogId}`}
            button={blogsType === 4 || bg === "pink" ? "" : "black"}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogCard3;