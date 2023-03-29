import { useState, useEffect } from "react";
import counterstyle from './Counter.module.css';

export function Counter({ title, initValue }) {
  const [count, setCount] = useState(initValue);

  //데이터를 가져오는건 생애주기에서 처음에 한번만 가져오면 됨
  //근데 저렇게 두면 매번 불필요하게 가져오게 됨
  //다른 component 코드와 다르게 불안정함. 왜냐하면 인터넷이 끊겼다, 서버가 불안정하다(네트워크환경) 하면 값의 결과가 달라지기 때문.
  //이런 불안정한 코드를 따로 격리해야함 -> use effect
  useEffect(() => {
    fetch('http://localhost:9999/counter').then(function (resp) {
      return resp.json();
    }).then(function (result) {
      setCount(result.value);
    });

  }, []); //side effect라고 함. side effect는 use effect의 첫번째 함수의 내용으로 주면 됨




  //fetch api는 딱 한번만 실행됨
  function up() {
    fetch('http://localhost:9999/counter', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ value: count + 1 })
    })
      .then(response => response.json())
      .then(data => setCount(data.value))
      .catch(error => console.error(error));
    setCount(count + 1);
  }
  return (
    <div>
      <h1 className="title">{title}</h1>
      <button onClick={up} className={counterstyle.rightSpace}>+</button> 👉🏻 {count}
    </div> //onClick 뒤에는 함수가 와야함
  );
}
