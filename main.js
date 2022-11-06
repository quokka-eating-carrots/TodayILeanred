// const x = 1;

// function outerFunc() {
//   const x = 10;

//   function innerFunc() {
//     console.log(x);
//   }

//   innerFunc()
// }

// outerFunc();

// ---

// function foo() {
//   const x = 10;
//   bar();
// }

// function bar() {
//   console.log(x)
// }

// foo();
// bar();

// ---

// const x = 1

// function outer() {
//   const x = 10
//   const inner = function () {
//     console.log(x)
//   }
//   return inner
// }

// const innerFunc = outer()
// innerFunc();

// const State = (function () {
//   let answer = '';

//   function State() {
//     this.answer = '';
//   }
//   State.prototype.study = function () {
//     answer = '공부 중'
//     return answer
//   }
//   State.prototype.play = function () {
//     answer = '게임 중'
//     return answer
//   }
//   return State;
// }());

// const state = new State();
// console.log(state.study())
// console.log(state.play())

// function studyState(per) {
//   let persent = `공부할 마음 `;

//   return function () {
//     persent = per(persent)
//     return persent
//   }
// }

// function increase(n) {
//   return n += 10
// }

// function decrease(n) {
//   return n += '-10'
// }

// const increaser = studyState(increase)
// console.log(increaser());
// console.log(increaser());
// console.log(increaser());

// const decreaser = studyState(decrease)
// console.log(decreaser());
// console.log(decreaser());
// console.log(decreaser());


const studyState = (function () {
  let persent = `공부할 마음 `;

  return function (per) {
    persent = per(persent)
    return persent
  }
}());


function increase(n) {
  return n += 10
}

function decrease(n) {
  return n += '-10'
}


console.log(studyState(increase))
console.log(studyState(increase))

console.log(studyState(decrease))
console.log(studyState(decrease))
