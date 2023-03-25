// 변수와 대입 연산자
x = 1; // x -> 변수 , = -> 대입 연산자 우항의 값을 좌항의 값에 대입한다.
//var vs let vs constant

// Number&연산자
let a = 6;
let b = 3;
let c = 4;
console.log(a+b) // 더하기 = 9
console.log(a-b) // 빼기 = 3
console.log(a*b) // 곱하기 = 18
console.log(a/b) // 나누기 = 2
console.log(a%c) // 나머지 값 = 2
console.log(a**b) // 제곱근 = 216 -> 6^3

//string
let s = "    hello word     "
console.log(s.length); // 문자열의 길이
console.log(s.toUpperCase()); //대분자 변환
console.log(s.indexOf('o')); // 문자 위치 찾기
console.log(s.trim()); // 공백 없애기

let str = "1"+"1"; // 문자열 끼리 더한 것으로 2가 아닌 '11'이 나온다.
console.log(str) 

// boolean(true/false)&비교 연산사(comparison operator)
// 1. ===
console.log(1===1); // 동등 비교 연산자: 좌항과 우항이 같은가? true
console.log(1===2); // false
console.log(1<2); // true
console.log(1>2); // false

// 조건문 if
let i = 2;
let e = 3

if(i<e) {
    console.log('true');
}else{
    console.log('false');
}

// 배열(Array) -> 많아지는 데이터를  관리하기 위해 사용, 연관 되어 있는 데이터를 묶음
var myName = ["jihwan", "jung"];
console.log(myName);
console.log(myName[0]); // index -> 0부터 시작 함
console.log(myName.length);
console.log(myName.push('juju', 'lee'));
console.log(myName);

// 반복문(loop) + 배열
var l = [3,5,7,8];
i = 0;
while(i<l.length){
    console.log(l[i]);
    i++
}

var coworkers = ["jihwan", 'jueun', 'jung', 'lee', 'mama'];
i = 0;
while(i<coworkers.length){
    console.log('나는 ' + coworkers[i] + ' 입니다')
    i++
}

// 함수(funtion) = 수납장
// 1. basic
function two(){
    return 1+1;
}
console.log(two());

// 2. 매개변수(parameter) & 인자(argument) -> 입력
function plus(a,b){ // (a,b) <- 매개변수 - 함수 안으로 매개 해주는 것
    return a+b;
}
console.log(plus(2,3)); // (...) <- 인자  / 함수의 입력갑(인자 -> 매개변수)

// 3. 리턴(return)  
function plus(a,b){ 
    return a+b; // 표현식 -> 값을 되돌려줌
}

// 객체(object) -> 이름이 있는 정리정돈 상자 / 순서가 없이 저장됨
// 1. 문법
var obs = { // {} -> object는 대괄호로 표시
    "programmer":"jihwan",
    "designer" : "jueun"
};

console.log(obs.programmer);
console.log(obs.designer);
obs["bookkeeper"] = "odajueun";
console.log(Object.values(obs)); // values 값을 배열로 출력
console.log(Object.keys(obs)); // key 값을 배열로 출력
console.log(Object.entries(obs)); // key : value 값을 배열로 출력

// 2. 객체&반복문
for(var key in obs){
    console.log(key+ ' : '+ obs[key]);
}

// 3. 객체 프로퍼티(property)와 메소드(method)

obs.showAll = function(){
        for(var key in this){
        console.log(key+ ' : '+ this[key]);
    }
}
obs.showAll(); // 객체에 소속된 함수 = 메소드 / 객체에 소속된 변수 = 프로퍼티