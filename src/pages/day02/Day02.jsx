import Footer from "./components/Footer";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Section_1 from "./components/Section_1";
import Section_2 from "./components/Section_2";
import Contents2 from "./components/Contents2";
export default function Day02() {
  return (
    // <div>
    //   <Header />

    //   <hr />
    //   <Section_1 />
    //   <Section_2 />
    //   <hr />

    //   <Footer />
    // </div>

    // ----------------------------------------------------
    <div>
      {/* <Intro name="박소희" age="22" hobby="잠자기" />
      <Intro name="전소희" age="23" hobby="술" />
      <Intro name="정윤아" age="23" hobby="누워있기" /> */}
      {/* => 컴포넌트에 넘겨주는 변수들 props 라고함
      => props 는 객체로 반환함 [] 배열 {} 객체 () 함수 */}

      {/* *문제
      =>컨텐츠 컴포넌트 제작
      =>컨텐츠 내부엔 이름,음식명, 사이드메뉴 */}

      <Intro name="박소희" food="라면" side="김치" />
      <Intro name="전소희" food="초밥" side="사케" />
      <Intro name="정윤아" food="치킨" side="소주" />
    </div>
  );
}
