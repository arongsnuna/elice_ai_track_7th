import { useRouter } from "next/router"

//import Layout from '../../components/layout'
export default function Read(){
    const router = useRouter(); // const로 router를 가져옴
    //동적으로 바뀌는 아이디 값을 가져올 수 있음
    return(<>
        <h2>Hello, read {router.query.id}</h2> 
       </>
    )
}