import { NavLink } from "react-router";
import "../assets/styles/header.css";
const Header = () => {
  return (
    <header
      style={{
        width: "100%",
        position: "fixed",
        top: 0,
        height: "90px",
        background: "#f8f9fa",
        zIndex: "1000",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* 로고 위치 */}
      <nav
        style={{
          display: "flex",
          height: "100%",
          margin: "0 auto",
          maxWidth: "1195px",
          alignItems: "center",
        }}
      >
        <img src="salad_658252.png" alt="Logo" style={{ width: "70px" }} />
        <ul className="nav-menu">
          <li style={{ marginLeft: "30px", fontSize: "20px" }}>홈</li>
          <li style={{ marginLeft: "30px", fontSize: "20px" }}>
            <NavLink
              to="/list"
              style={{ textDecoration: "none", color: "black" }}
            >
              카테고리
            </NavLink>
          </li>
          <li style={{ marginLeft: "30px", fontSize: "20px" }}>즐겨찾기</li>
        </ul>
        <input
          placeholder="원하는 레시피를 검색해요"
          style={{
            width: "300px",
            height: "40px",
            fontSize: "15px",
            border: "1px solid #EAEDEF",
            borderRadius: "5px",
            padding: "0 10px",
            background: "#f8f9fa",
          }}
        />
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            alignItems: "center",
          }}
        >
          <li style={{ padding: "0 10px" }}>로그인</li>
          <li
            style={{
              borderLeft: "1px solid #EAEDEF",
              padding: "0 10px",
            }}
          >
            주문하기
          </li>
          <li
            style={{
              borderLeft: "1px solid #EAEDEF",
              padding: "0 10px",
            }}
          >
            장바구니
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
