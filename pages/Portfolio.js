import { ArrowRightIcon } from "@heroicons/react/outline";
import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    getDocs,
    addDoc,
    deleteDoc,
    doc,
    onSnapshot,
    query, where,
    orderBy, serverTimestamp, getDoc,
    updateDoc,
} from 'firebase/firestore';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {app, user, auth, db} from "./fbconfig"

let userPost = null;
const createdAtYear = null;
const createdAtMonth = null;
const createdAtDate = null;
const createdAtHours = null;
const createdAtMinutes = null;
const Portfolio = () => {

    const colRef = collection(db, "posts");
    const [posts, setPosts] = useState([]);
    const router = useRouter()
      
    useEffect(() => {
      const q = query(colRef, orderBy("created_at", "desc"));
  
      onSnapshot(q, (snapshot) => {
        setPosts(
          snapshot.docs.map((x) => ({
            id: x.id,
            ...x.data(),
          }))
        );
      });
    }, []);

  
    if(!posts.length>0){
      return (
          <>
              <div className="text-center text-[30px] text-white mt-10 mb-10  lg:mt-[300px]">
                 <font className="text-[#38b4c8]">&frasl; &frasl; </font> Portfolio
              </div>
              <div className="flex justify-center">
                <svg role="status" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
              </div>
          </>
      );}
   else{
    return (
      <> 
          <div id="portfolio" className="text-center text-[30px] text-white mt-10 lg:mt-[300px] mb-10">
              <font className="text-[#38b4c8]">&frasl; &frasl; </font> Portfolio
          </div>
          <div className="flex justify-center">
            <div className="mt-10 flex flex-wrap flex-col bottom-20 md:gap-5 lg:gap-5 md:flex-col">
                {posts.map(post=>(

                 createdAtYear = new Date(post.created_at.seconds*1000).getFullYear(),
                  createdAtMonth = new Date(post.created_at.seconds*1000).getMonth(),
                  createdAtDate = new Date(post.created_at.seconds*1000).getDate(),
                  createdAtHours = new Date(post.created_at.seconds*1000).getHours(),
                  createdAtMinutes = new Date(post.created_at.seconds*1000).getMinutes(),

                  <div key={post.id} onClick={() => {
                    userPost = post;
                    router.push(post.id);
                    }} className='pop-out h-[auto] w-[300px] text-white mb-5 md:mb-5 lg:mb-5 md:w-[400px] lg:w-[600px] border-2 cursor-pointer rounded-md'>
                  <h2 className='text-[30px] ml-5 mt-10 mb-3 hover:text-[gray]'>{post.title}</h2>
                  <p className='text-[15px] ml-5  mr-5 max-w-[auto] text-justify descText'>{post.desc}</p>
                  <div className="relative border-0 border-t-2 border-t-[#38b4c8] top-[20px] h-[50px]">
                    <div className='ml-2 text-[#38b4c8]'>by {post.author}</div>
                    <div className='relative top-[-23px] md:left-[280px] lg:left-[480px] text-[#38b4c8] hidden md:block lg:block'>{createdAtYear}.{createdAtMonth +1}.{createdAtDate} {createdAtHours}:{createdAtMinutes}</div>
                    </div>
                  </div>
              ))}
           </div>
        </div>
       </>
    )
  }
};

export const post = userPost;
export default Portfolio;