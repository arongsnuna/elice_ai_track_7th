import { useEffect, useState } from 'react'
import Link from 'next/link'
export default function Home({children}){
    const [topics, setTopics] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:9999/topics')
          .then(resp=>resp.json())
          .then(result=>{
            console.log(result);
            setTopics(result);
          })
      },[])
      //서버에서 가져온 state로 topics를 바꿈
      const lis = topics.map((t)=>{
        return <li key={t.id}><Link href={"/read/"+t.id}>{t.title}</Link></li>

      });
      //링크가 동적으로 만들어짐
      //key값은 페이지 안에서 unique하면 됨
    return(<>
        <h1><Link href="/">WEB</Link></h1>
        <input type="text" placeholder="search"></input>
        <ol>
          {lis}
        </ol>
        <article>
            {children}
        </article>
        <ul>
          <li><Link href="/create">Create</Link></li>
          <li><Link href="/update">Update</Link></li>
          <li><Link href="/delete">Delete</Link></li>
        </ul>
       </>)
}