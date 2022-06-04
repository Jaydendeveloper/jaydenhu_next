import { initializeApp } from "firebase/app";
import {
    getAuth,
    signOut,
    onAuthStateChanged
  } from 'firebase/auth'
import { useEffect } from "react";
import { useRouter } from 'next/router'
import Link from 'next/link'
import { HomeIcon, UserCircleIcon } from "@heroicons/react/outline";
import { useState } from "react";
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

const Admin = () => {

const firebaseConfig = {
  apiKey: "AIzaSyClBmYjWTD4D-a5GR9tKEVnkzpqAM3H3Ps",
  authDomain: "jaydenhu-33683.firebaseapp.com",
  projectId: "jaydenhu-33683",
  storageBucket: "jaydenhu-33683.appspot.com",
  messagingSenderId: "807526322828",
  appId: "1:807526322828:web:e9f192f995f8cd9dede1a9"
};

const app = initializeApp(firebaseConfig);  
const auth = getAuth();
const router = useRouter()
const user = auth.currentUser;
const [logout, setLogout] = useState(false)
const [newPost, setNewPost] = useState(false)
const [deletePost, setDeletePost] = useState(false)
const [editPost, setEditPost] = useState(false)
const [currentPosts, setCurrentPosts] = useState(null)
const [showPostsBtn, setShowPostsBtn] = useState(true)
const [error, setError] = useState(null)
const [registration, setRegistration] = useState(false)
const [options, setOptions] = useState(false)


const db = getFirestore();
const colRef = collection(db, 'posts');


auth.onAuthStateChanged(function(user) {
    if (!user) {
      router.push('/login')
    } else {
        setTimeout(() => {
            const userplace = document.querySelector('.user')
            userplace.innerHTML = `Welcome, ${user.email}`
        }, 20)
    }
  });
  useEffect(() => {
    const q = query(colRef, orderBy('created_at'))

    onSnapshot(q, (snapshot) => {
        let posts = []
        snapshot.docs.forEach((doc) => {
            posts.push({ ...doc.data(), id: doc.id})
        })
        setCurrentPosts(posts);
    });
  }, [])


    return (
        <div>
            <div className='header h-14 bg-transparent border-none text-white'>
                <Link href={'/'}>
                        <HomeIcon className='text-red-500 absolute cursor-pointer h-10 left-[55px] top-5'/>
                    </Link>
                
                <button className='absolute px-2 top-4 right-4 border-b-2 py-1 border-red-500 text-white hover:opacity-70'>
                        <div>
                            <a onClick={() => console.log(user)} className='user ml-2 mt-1 mb-1 mr-2'></a>
                        </div>
                </button>
                <button className='absolute px-2 top-4 border-b-2 border-red-500 py-1 text-white right-[280px] hover:opacity-70 pop-out'
                onClick={() => {
                    signOut(auth)
                    .then(() => {
                        console.log('user signed out')
                        setLogout(false)
                        router.push('/login')
                    })
                        .catch(err => {
                        console.log(err.message)
                    })
                }
                }>Logout</button>
            </div>
            <nav className="absolute mt-0 text-white text-xl">
                <ul className="ml-0 mt-10 h-[100vh] w-[150px]">
                    <button className="px-4 py-3 text-center hover:bg-[black] cursor-pointer pop-out" onClick={() =>
                            {
                            setDeletePost(false), setNewPost(!newPost),setEditPost(false), setError(null), setOptions(false)
                            }
                        }>
                        New post
                    </button>
                    <button className="px-4 py-3 text-center hover:bg-[black] cursor-pointer pop-out" onClick={() =>
                            {
                            setNewPost(false), setDeletePost(!deletePost), setEditPost(false), setError(null), setOptions(false)
                            if(!deletePost){
                                setTimeout(() => {
                                const postList = document.querySelector('.posts')
                                 currentPosts.forEach(post => {
                                    const createdAt = post.created_at.seconds*1000

                                    postList.insertAdjacentHTML("beforeend",
                                     `
                                     <tr className="border-b-2 border-red-500 text-white">
                                     <td className="">${post.title}</td>
                                     <td className="">${post.author}</td>
                                     <td className="">${post.id}</td>
                                     <td className="">${createdAt}.</td>
                                    </tr>
                                    `)
                            })
                            }, 10)} else{
                                setEditPost(!deletePost)
                            }  
                            }
                        }>
                        Delete post
                    </button>
                    <button className="px-4 py-3 text-center hover:bg-[black] cursor-pointer pop-out" onClick={() => {
                        setNewPost(false), setDeletePost(false), setEditPost(!editPost), setError(null),setOptions(false)
                        if(!editPost){
                        setTimeout(() => {
                        const postList = document.querySelector('.posts')
                        setShowPostsBtn(false)
                        currentPosts.forEach(post => {
                        const createdAt = post.created_at.seconds*1000

                        postList.insertAdjacentHTML("beforeend",
                         `
                         <tr className="border-b-2 border-gray-600 text-white">
                         <td className="">${post.title}</td>
                         <td className="">${post.author}</td>
                         <td className="">${post.id}</td>
                         <td className="">${createdAt}.</td>
                        </tr>
                        `)
                    })
                    }, 10)} else{
                        setEditPost(!editPost)
                    }  
                    }}>
                        Edit posts
                    </button>
                    <button className="px-4 py-3 text-center hover:bg-[black] cursor-pointer pop-out" onClick={() =>
                            {
                            setDeletePost(false), setOptions(!options),setEditPost(false), setError(null)
                            }
                        }>
                        Options
                    </button>
                </ul>
            </nav>
            <div>


                {newPost &&
                <div className="flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
                    <form className="newPostForm relative mt-24 rounded text-white py-10 px-6 md:mt-0 md:max-w-md md:px-14">
                    <h2 className="text-4xl font-semibold text-red-500 mb-5">New post</h2>
                        <label className="inline-block w-full mb-1">Title:</label><br />
                        <input className="text-black outline-none px-1 rounded-md mb-4" type="text" name="title"/><br />
                        <label className="inline-block w-full mb-1">Author:</label><br />
                        <input className="text-black outline-none px-1 rounded-md mb-4" type="text" name="author"/><br />
                        <label className="inline-block w-full mb-1">Content:</label><br />
                        <textarea className="text-black outline-none px-1 rounded-md mb-4" type="text" name="content"/><br />
                        <label className="inline-block w-full mb-1">Link:</label><br />
                        <input className="text-black outline-none px-1 rounded-md mb-4" type="text" name="link"/><br />
                        <button type="submit" className="newPostSubmit w-full rounded bg-red-500 outline-none py-3 font-semibold hover:opacity-80 pop-out" onClick={(e) => 
                        {
                            e.preventDefault();

                            const newPostForm = document.querySelector('.newPostForm')
                            const newPostSubmitBtn = document.querySelector('.newPostSubmit')
                            
                        if(newPostForm.title.value == "" || newPostForm.content.value == "" || newPostForm.link.value == "" || newPostForm.author.value == ""){
                            setError("A field is left empty")
                            console.log("A field is left empty")
                        }  else {
                            console.log(newPostForm.title.value)
                            console.log('submitted')
                            e.preventDefault()

                            addDoc(colRef, {
                                title: newPostForm.title.value,
                                author: newPostForm.author.value,
                                content: newPostForm.content.value,
                                link: newPostForm.link.value,
                                created_at: serverTimestamp()
                            })
                            .then(() => {
                                newPostForm.reset()
                            })
                            .catch((err) => {
                                setError(err.message)
                            }) 
                        }
                            
                        }}>Post</button>
                    </form>
                {error && <div className="text-red-500">{error}</div>}
                </div>  
                }


                {deletePost &&
                <>
                 <center>
                 <h2 className="text-4xl font-semibold text-red-500 mb-5">Delete post</h2>
                <table className="table-auto text-white">
                    <thead>
                        <tr className="border-b-2 border-red-500 text-white">
                            <th className="px-10">Topic name</th>
                            <th className="px-10">Topic author</th>
                            <th className="px-10">Topic ID</th>
                            <th className="px-10">Created at</th>
                        </tr>
                    </thead>
                    <tbody className="posts text-center">

                    </tbody>
                </table>
                </center>
                    <div className="flex h-screen w-screen flex-col bg-black md:items-center mt-[70px] md:bg-transparent">

                    <form className="deletePostForm text-white">
                        <label className="inline-block w-full">Post id:</label><br />
                        <input className="text-black outline-none h-[30px] px-1 mr-4" type="text" name="id"/>
                        <button type="submit" className="deletePostBtn w-[150px] h-[50px] rounded bg-red-500 outline-none py-3 font-semibold pop-out"  onClick={(e) => 
                        {
                            e.preventDefault()
                            const deletePostForm = document.querySelector('.deletePostForm');

                            const postRef = doc(db, 'posts', deletePostForm.id.value.trim())

                            deleteDoc(postRef)
                            .then(() => {
                                deletePostForm.reset();                               
                            })
                            .catch((err) => {
                                setError(err.message)
                            })
                        }}>Delete</button>
                        <button className="refresh pop-up w-[150px] h-[50px] rounded bg-blue-500 outline-none py-3 font-semibold pop-out ml-2" 
                        onClick={(e) => {
                            e.preventDefault()
                            const postList = document.querySelector('.posts')
                            postList.innerHTML = ""

                            currentPosts.forEach(post => {

                            const createdAt = post.created_at.seconds*1000

                                postList.insertAdjacentHTML("beforeend",
                                 `
                                 <tr className="border-b-2 border-red-500 text-white">
                                 <td className="">${post.title}</td>
                                 <td className="">${post.author}</td>
                                 <td className="">${post.id}</td>
                                 <td className="">${createdAt}.</td>
                                </tr>
                                `)
                        })
                        }}>Refresh</button>
                    </form>
                    {error && <div className="text-red-500">{error}</div>}                 
                    </div>
                </>
                 }
                 {editPost &&
                 <>
                 <center>
                 <h2 className="text-4xl font-semibold text-red-500 mb-5">Edit post</h2>
                    <table className="table-auto text-white">
                    <thead>
                    <tr className="border-b-2 border-red-500 text-white">
                        <th className="px-10">Topic name</th>
                        <th className="px-10">Topic author</th>
                        <th className="px-10">Topic ID</th>
                        <th className="px-10">Created at</th>
                    </tr>
                </thead>
                <tbody className="posts text-center">

                </tbody>
                    </table>
                </center>
                    <div className="flex justify-center mt-10">
                        <form className="editPostForm text-black">
                        <label className="mr-3 text-white">ID:</label>
                        <input className="mr-3" type="text" name="id"/>

                        <label className="mr-3 text-white">Title:</label>
                        <input className="mr-3" type="text" name="title"/>

                        <label className="mr-3 text-white">Author:</label>
                        <input className="" type="text" name="author"/><br />

                        <label className="mr-3 text-white">Content:</label>
                        <input className="mr-3" type="text" name="content"/>

                        <label className="mr-3 text-white">Link:</label>
                        <input className="mr-3" type="text" name="link"/>

                        <button className="w-[200px] rounded bg-red-500 text-white outline-none py-3 font-semibold hover:opacity-80 mt-3 ml-10 pop-out" onClick={()=> {
                            const editPostForm = document.querySelector('.editPostForm')
                            editPostForm.addEventListener('submit', (e) => {
                            e.preventDefault()

                            if(editPostForm.id.value == "" || editPostForm.title.value == "" || editPostForm.content.value == "" || editPostForm.link.value == "" || editPostForm.author.value == ""){
                                setError("A field is left empty")
                            } else{

                            const docRef = doc(db, 'posts', editPostForm.id.value)
                            
                            updateDoc(docRef, {
                                title: editPostForm.title.value,
                                content: editPostForm.author.value,
                                content: editPostForm.content.value,
                                link: editPostForm.link.value,
                            })
                            .then(() => {
                                editPostForm.reset()
                            })
                            .catch((err) => {
                                setError(err.message)
                            })
                            }

                            })
                            
                        }}>Edit</button>
                        <button className="refresh pop-up w-[150px] h-[50px] rounded bg-blue-500 text-white outline-none py-3 font-semibold pop-out ml-2" 
                        onClick={(e) => {
                            e.preventDefault()
                            const postList = document.querySelector('.posts')
                            postList.innerHTML = ""

                            currentPosts.forEach(post => {

                            const createdAt = post.created_at.seconds*1000

                                postList.insertAdjacentHTML("beforeend",
                                 `
                                 <tr className="border-b-2 border-red-500 text-white">
                                 <td className="">${post.title}</td>
                                 <td className="">${post.author}</td>
                                 <td className="">${post.id}</td>
                                 <td className="">${createdAt}.</td>
                                </tr>
                                `)
                        })
                        }}>Refresh</button>
                        </form>
                        {error && <div className="text-red-500">{error}</div>}
                    </div>
                </>
                }
                {options &&
                    <>
                    <form>
                    <label className="text-white" htmlFor="switch"> Toggle Registration</label>
                    <label className="switch">
                        <input name="register" type="checkbox"/>
                        <span className="slider round"></span>
                    </label> 
                    <button onClick={() => {
                    setRegistration(true)
                    }}>Toggle registration</button>
                    </form>       
                    </>
                }
                </div>
            </div>
    );
}
 
export default Admin;