import { useRouter } from 'next/router'
import {post} from './Portfolio'
import { doc, getDoc, getFirestore, onSnapshot } from "firebase/firestore";
import {db} from './fbconfig'
import { useEffect, useState } from 'react';
import Header from './Header';

const Id = () => {
const router = useRouter()
const { id } = router.query
const [post, setPost] = useState(null)
const db = getFirestore()
const docRef = doc(db, "posts", id);
useEffect(() => {

onSnapshot(docRef, (doc) => {
  console.log(doc.data())
  setPost(doc.data())
})
}, [])

return (
    <>
    <Header />
    {post && 
    <div className='relative text-white left-[40%] top-[100px] w-[500px] mb-10'>
        <div className=''>{post.title} · {post.author}</div><br />
        <div className='' dangerouslySetInnerHTML={{__html: post.content}}></div>
    </div>
    
    }
    </>
)
}
export default Id;