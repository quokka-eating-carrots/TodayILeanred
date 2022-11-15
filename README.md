# TodayILeanred

## 221115 <br>
[참고 사이트 1](https://velog.io/@sms8377/Javascript-require-%EA%B0%84%EB%8B%A8-%EB%8F%99%EC%9E%91-%EC%9B%90%EB%A6%AC-%EB%B0%8F-module.export-%EC%99%80-export%EC%9D%98-%EC%B0%A8%EC%9D%B4)

[참고 사이트 2](https://inpa.tistory.com/entry/NODE-%F0%9F%93%9A-require-%E2%9A%94%EF%B8%8F-import-CommonJs%EC%99%80-ES6-%EC%B0%A8%EC%9D%B4)

[참고 사이트 3](https://velog.io/@jangws/NodeJS%EC%97%90%EC%84%9C-%EC%9E%85%EB%A0%A5%EB%B0%9B%EA%B8%B0%EC%BD%98%EC%86%94%EC%B0%BD-%ED%8C%8C%EC%9D%BC)

`require()` Node.js에서 require 메서드를 통해 외부 모듈을 가지고 올 수 있다. node가 local object에 추가한 메서드로서 파라미터로 추가할 모듈의 파일 경로값을 받는다.
```javascript
const foo = require('파일경로')
```

1. 여러 개의 객체를 내보낼 경우, `exports` 변수의 속성으로 할당
2. 딱 하나의 객체를 내보낼 경우, `module.exports` 변수 자체에 할당, 단, 객체를 묶어서 여러 개 값을 export 할 수 있다.