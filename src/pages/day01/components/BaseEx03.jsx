import React from "react";

export default function () {
  return (
    // <div>
    //   <h2>두개 이상의 태그는 반드시 부모 태그로 감싸줄것</h2>
    //   <div>태그 하나 더 제작</div>
    // </div>

    // <>
    //   <h2>빈 태그가 싫으면 fragmant를 사용할 수 있음</h2>
    //   <h2>비어있어서 클래스 사용 못함</h2>
    // </>
    // 엑스트라 태그

    <React.Fragment>
      <h2>빈 태그가 싫으면 이걸 사용한다</h2>
      <h2>엑스트라 태그이며 클래스 사용이 가능하다</h2>
    </React.Fragment>
  );
}
