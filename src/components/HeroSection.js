import CtgBtn from "./CtgBtn";

const CtagoryData = [
  { id: 1, imgSrc: "salad.png", title: "반찬" },
  { id: 2, imgSrc: "cake.png", title: "간식" },
  { id: 3, imgSrc: "cooking.png", title: "국/찌개" },
  { id: 4, imgSrc: "noodle.png", title: "면" },
];

const HeroSection = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ marginTop: "100px" }}>
        <h1 style={{ fontSize: "40px", margin: "0" }}>내가 찾는 카테고리는?</h1>
        <p style={{ marginTop: 0 }}>
          모든 요리는 사랑에서 시작됩니다. 당신만의 특별한 요리를 찾아보세요.
        </p>
      </div>
      <ul
        style={{
          margin: "0",
          padding: "0",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {CtagoryData.map((item) => (
          <CtgBtn
            key={item.id}
            id={item.id}
            imgSrc={item.imgSrc}
            title={item.title}
          />
        ))}
      </ul>
    </div>
  );
};
export default HeroSection;
