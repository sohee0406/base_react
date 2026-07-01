export default function Intro({ name, food, side }) {
  // 점점 단순화 됨 상단에 주석 안 건게 제일 단순한 버전
  // console.log(props.name)
  // console.log(props.age)

  //   const name = props.name;
  //   const age = props.age;

  //   const { name, age, hobby } = props;
  //   =>객체 비구조화 할당

  return (
    <div
      style={{
        backgroundColor: "lightgrey",
      }}
    >
      {/* <h2>자기소개</h2>
      <p>이름: {name}</p>
      <p>나이:{age} </p>
      <p>취미: {hobby}</p>
      <hr /> */}

      <h2>자기소개</h2>
      <p>이름: {name}</p>
      <p>음식:{food} </p>
      <p>사이드메뉴: {side}</p>
      <hr />
    </div>
  );
}
