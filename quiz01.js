// 1. 빈칸 채우기 문제

// 아래 내용에서 빈 칸에 들어갈 항목들을 채워주시고 왜 그렇게 생각했는지
// 본인의 생각을 간단하게 1줄 정도 같이 적어주세요.

// javascript
1. let uninitialized;
console.log(uninitialized); // 결과값 < undefined >
// 변수 선언 후 어떤 값도 선언되지 않았기 때문이다.


2. < const > apple = "사과";
apple = "바나나"; // TypeError: Assignment to constant variable
// const는 재선언, 재할당이 되지 않기 때문이다.

3. let lotto = [3, 8, 13, 19, 21, 32];
console.log(lotto[3]); // 결과값 < 19 >
// lotto 배열 내 3 번째 값이 19이다.


4.
let mySchedule = "";
console.log(mySchedule || false); // < false >
// || 앞에 있는 값이 falsy하면 || 뒤의 값 반환
console.log(!!mySchedule); // < false >
// 데이터나 변수 앞에 !!을 붙여서 false가 나오면 false를 반환한다.