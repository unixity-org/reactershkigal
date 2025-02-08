import ButtonPrimary from "../buttons/ButtonPrimary";
import Link from "next/link";
import Image from "next/image";

const BlogCard3 = ({ blog, blogsType, bg }) => {
  const { blogId, title, description, createdAt } = blog;

  return (
    <div
      className={` ${
        bg === "pink"
          ? "col-xl-6 col-lg-6 col-md-12 col-sm-12"
          : "col-xl-4 col-lg-4 col-md-6 col-sm-6"
      }  col-12`}
      data-aos="fade-up"
      data-aos-duration="500"
    >
      <div
        className={`blog__4__single ${
          blogsType === 4 ? "" : " blog__3__single"
        } single__transform ${bg === "pink" ? "bg__pink" : ""}`}
      >
        <div className="blog__4__time">
          <p className={bg === "pink" ? "bg__white" : ""}>
            <span className="text__gradient ">{new Date(createdAt).toLocaleDateString()}</span>
          </p>
        </div>
        <div className="blog__4__heading">
          <h6>
            <Link className="text-uppercase" href={`/blogs/${blogId}`}>
              {title?.length > 18 ? title?.slice(0, 18) + "..." : title}
            </Link>
          </h6>
        </div>
        <div className="blog__4__text">
          <p>{description}</p>
        </div>
        <div className="blog__4__button">
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
