import styled from "styled-components";

const CtagoryBlock = styled.li`
  display: flex;
  border-radius: 20px;
  margin-left: 30px;
  border: 1px solid #ccc;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  font-size: 1.5rem;
`;

const CtgBtn = ({ id, imgSrc, title }) => {
  return (
    <CtagoryBlock key={id}>
      <img
        src={imgSrc}
        alt={id}
        style={{ width: "100px", marginBottom: "10px" }}
      ></img>
      {title}
    </CtagoryBlock>
  );
};
export default CtgBtn;
