import { useEffect } from "react";
import { useParams } from "react-router-dom";
const DetailPage = () => {
  const { id } = useParams(); // URL의 id 값 가져오기
  console.log(id);

  // 상세 데이터 요청
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://tasteful-68c61-default-rtdb.firebaseio.com/recipes/${id}.json`
      );
      const data = await response.json();
      console.log(data);
    };
    fetchData();
  }, [id]);

  return (
    <div style={{ marginTop: "100px" }}>
      <p>detailpage {id}</p>
    </div>
  );
};
export default DetailPage;
