export default function MapEx() {
  const arrs = [1, 2, 3, 4, 5];

  arrs.map((num) => console.log(`숫자: ${num}❤`));
  //   => map은 배열을 순회하면서 각 요소를 반환하여 새로운 배열을 반환함]

  return (
    <div>
      {arrs.map((num) => (
        <h2 key={num}>숫자:{num}</h2>
        // =>jsx에서 map을 사용할때 반드시 key를 써야되며 값으론 고유값이 지정되어야함
      ))}
    </div>
  );
}
