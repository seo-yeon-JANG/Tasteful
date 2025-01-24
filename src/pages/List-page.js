import { useEffect, useState } from "react";
const ListPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://openapi.foodsafetykorea.go.kr/api/ede8b624297d44fd9558/COOKRCP01/json/1/10"
      );
      const json = await response.json();
      setData(json.COOKRCP01.row);
      console.log(json.COOKRCP01.row);
    };
    fetchData();
  }, [data]);
  return (
    <>
      <div>
        <div>데이터 목록 페이지 입니다.</div>
        {data.map((item) => (
          <div key={item.RCP_SEQ}>
            {item.RCP_NM}
            <img src={item.ATT_FILE_NO_MAIN} alt={item.RCP_NM} />
          </div>
        ))}
      </div>
    </>
  );
};
export default ListPage;
