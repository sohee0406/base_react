export default function Contents2({ name, food, side }) {
  return (
    <div
      style={{
        backgroundColor: "lightgrey",
        border: 2,
      }}
    >
      <h2>자기소개</h2>
      <p>이름: {name}</p>
      <p>음식:{food} </p>
      <p>사이드메뉴: {side}</p>
      <hr />
    </div>
  );
}
