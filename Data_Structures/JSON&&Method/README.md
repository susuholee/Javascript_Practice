## 중요!!

### JSON가 무엇인가?
> 본래 자바스크립트에서 사용할 목적으로 만들어진 포맷
> 데이터를 저장하거나 서버와 주고 받을때 사용하는 문자열 형식의 데이터 구조를 뜻함
> 데이터 포맷용이라고 생각하면 편함


### JSON 관련 메서드

## JSON.stringify()
> 객체를 JSON 형태로 바꿔주는 메서드
> 객체뿐만 아니라 원시값에도 적용할 수 있음
> 중첩 객체도 알아서 문자열로 바꿔준다
> 하지만 순환 참조가 있으면 객체를 문자열로 원하는 대로 변경할 수 없다.

```js
let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null
};

let json = JSON.stringify(student);

console.log(json);
/* JSON으로 인코딩된 객체:
{
  "name": "John",
  "age": 30,
  "isAdmin": false,
  "courses": ["html", "css", "js"],
  "wife": null
}
*/
```
## JSON.parse()
> 서버에서 받은 데이터는 보통 JSON 형태
> 이를 객체로 변환하기 위해 사용되는 메서드

