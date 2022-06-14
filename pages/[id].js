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

useEffect(() => {
let n = id;
if(n == undefined) {
  router.push('/')
} else {
const docRef = doc(db, "posts", id);

onSnapshot(docRef, (doc) => {
  console.log(doc.data())
  setPost(doc.data())
})
}

}, [])

return (
    <>
    <Header />
    {post && 
    <div className='relative text-white left-[40%] top-[100px] w-[500px] mb-10'>
        <div className=''>{post.title} · {post.author} · Link:<a target="_blank" rel="noreferrer" className='text-blue-400' href={post.link}><i> {post.link}</i></a></div><br />
        <div className='' dangerouslySetInnerHTML={{__html: post.content}}></div>
    </div>
    
    }
    </>
)
}
export default Id;