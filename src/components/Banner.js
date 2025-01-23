import { useState, useEffect } from "react";
import "../styles/banner.css";
const bannerImg = [
  { title: "banner img 1", imgSrc: "banner1.jpg" },
  { title: "banner img 2", imgSrc: "banner2.jpg" },
  { title: "banner img 3", imgSrc: "banner3.jpg" },
];

const BannerImg = () => {
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const result = setInterval(() => {
      setImgIndex((prevIndex) =>
        prevIndex < bannerImg.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);
    return () => clearInterval(result);
  }, []);

  return (
    <div className="slideshow">
      {bannerImg.map((img, index) => (
        <img
          src={img.imgSrc}
          alt={img.title}
          key={index}
          className={index === imgIndex ? "active" : ""}
        />
      ))}
    </div>
  );
};
export default BannerImg;
