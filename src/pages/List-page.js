import { useEffect, useState } from "react";
import ItemBox from "../components/ItemBox";

const ListPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://tasteful-68c61-default-rtdb.firebaseio.com/recipes.json"
      );
      const json = await response.json();
      const events = [];
      for (const key in json) {
        events.push({
          id: key,
          ...json[key],
        });
      }
      console.log(events);
      setData(events);
    };
    fetchData();
  }, []);

  if (data === undefined && data.length === 0) {
    return <p>This is no data</p>;
  }

  return (
    <>
      <div
        style={{
          marginTop: "100px",
        }}
      >
        {data.map((item) => (
          <ItemBox key={item.id} data={item} />
        ))}
      </div>
    </>
  );
};
export default ListPage;
