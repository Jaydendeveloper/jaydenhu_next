import { initializeApp } from "firebase/app";
import {
    getAuth,
    signOut,
    onAuthStateChanged,
    updateProfile,
    updateEmail,
    updatePassword
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
import UserPanel from "./UserPanel";
import Editor from 'react-simple-code-editor';
import { highlight, languages } from "prismjs/components/prism-core";
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-dark.css';
import {app, user, auth, db} from "./fbconfig"

const Admin = () => {
const auth = getAuth();
const user = auth.currentUser;


const router = useRouter()
const [logout, setLogout] = useState(false)
const [newPost, setNewPost] = useState(false)
const [deletePost, setDeletePost] = useState(false)
const [editPost, setEditPost] = useState(false)
const [currentPosts, setCurrentPosts] = useState(null)
const [showPostsBtn, setShowPostsBtn] = useState(true)
const [error, setError] = useState(null)
const [registration, setRegistration] = useState(false)
const [options, setOptions] = useState(false)
const [userOpt, setuserOpt] = useState(false)
const [usernameError, setUsernameError] = useState(null)
const [photoError, setPhotoError] = useState(null)
const [emailError, setEmailError] = useState(null)
const [passwordError, setPasswordError] = useState(null)
const [success, setSuccess] = useState(false)
const [screenLoading, setScreenLoading] = useState(false)
const [content, setContent] = useState("")
const [desc, setDesc] = useState("")
const [theme, setTheme] = useState("duotone-space")


const db = getFirestore();
const colRef = collection(db, 'posts');

    useEffect(() => {
        auth.onAuthStateChanged(function(user) {
        if (!user) {
            router.push('/login')
          } else {
            const userplace = document.querySelector('.user')

            if(userplace == null){
                setScreenLoading(true)
            }else if(userplace !== null){
                setScreenLoading(false)
                userplace.innerHTML = `Welcome, ${user.displayName || user.email}`
            } 
          }
        },[]);
    })
    useEffect(() => {
       const currentTheme = localStorage.getItem('themes')
       setTheme(currentTheme)
    }, [])
    
    useEffect(() =>{
        if(screenLoading == true){
            const body = document.body
            body.style.overflowY = "hidden";
        } else {
            const body = document.body
            body.style.overflowY = "scroll";
        }
    },[])



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
  

useEffect(() => {
    if(theme == 'duotone-space'){
        localStorage.setItem('theme', theme)
    } else if(theme == 'dark'){
        localStorage.setItem('theme', theme)
    }
  },[theme])

if(user){
    return (
        <div>
            <div className='header h-14 bg-transparent border-none text-white'>

            <h4 className='absolute py-4 left-4 text-xl outline-none'>
                        <Link href={'/'}>
                            <a className='outline-none'>
                                <font className="text-[#38b4c8]">&lt;</font> Jayden.hu - Admin /<font className="text-[#38b4c8]">&gt;</font>
                            </a>
                        </Link>
            </h4>

                
                <button onClick={() => {setuserOpt(!userOpt);}} className='absolute px-2 top-3 right-6 border-b-2 py-1 border-[#38b4c8] text-white hover:opacity-70 outline-none pop-out'>
                        <div>
                            <a className='user mt-1 mb-1'></a>
                        </div>
                </button>


                {userOpt &&
                <UserPanel />
                }
            </div>
            <nav className="absolute mt-0 text-white text-xl">
                <ul className="ml-0 mt-10 h-[100vh] w-[150px]">
                    <button className="px-4 py-3 text-center hover:bg-[black] cursor-pointer pop-out outline-none" onClick={() =>

                        // NEW POST BTN
                            {
                            setDeletePost(false), setNewPost(!newPost),setEditPost(false), setError(null), setOptions(false)
                            }
                        }>
                        New post
                    </button>
                    <button className="px-4 py-3 text-center hover:bg-[black] cursor-pointer pop-out outline-none" onClick={() =>

                        //DELETE POST BTN
                            {
                            setNewPost(false), setDeletePost(!deletePost), setEditPost(false), setError(null), setOptions(false)
                            if(!deletePost){
                                setTimeout(() => {
                                const postList = document.querySelector('.posts')
                                 currentPosts.forEach(post => {
                                    const createdAtYear = new Date(post.created_at.seconds*1000).getFullYear()
                                    const createdAtMonth = new Date(post.created_at.seconds*1000).getMonth() +1
                                    const createdAtMonths = ('0'+ createdAtMonth).slice(-2)
                                    const createdAtDate = new Date(post.created_at.seconds*1000).getDate()
                                    const createdAtDates = ('0'+ createdAtDate).slice(-2)
                                    const createdAtHour = new Date(post.created_at.seconds*1000).getHours()
                                    const createdAtHours = ('0'+ createdAtHour).slice(-2)
                                    const createdAtMinute = new Date(post.created_at.seconds*1000).getMinutes()
                                    const createdAtMinutes = ('0'+ createdAtMinute).slice(-2)
                                        setScreenLoading(true)

                                        postList.insertAdjacentHTML("beforeend",
                                        `
                                        <tr className="border-b-2 border-[#38b4c8] text-white">
                                        <td className="py-5">${post.title}</td>
                                        <td className="py-5">${post.author}</td>
                                        <td className="py-5">${post.id}</td>
                                        <td className="py-5">${createdAtYear}.${createdAtMonths}.${createdAtDates} ${createdAtHours}:${createdAtMinutes}</td>
                                        </tr>
                                        `)
                                        setScreenLoading(false)
                            })
                            }, 10)} else{
                                setEditPost(!deletePost)
                            }  
                            }
                        }>
                        Delete post
                    </button>
                    <button className="px-4 py-3 text-center hover:bg-[black] cursor-pointer pop-out outline-none" onClick={() => {


                        // EDIT POST BTN

                        setNewPost(false), setDeletePost(false), setEditPost(!editPost), setError(null),setOptions(false)
                        if(!editPost){
                        setTimeout(() => {
                        const postList = document.querySelector('.posts')
                        setShowPostsBtn(false)
                        currentPosts.forEach(post => {

                            const createdAtYear = new Date(post.created_at.seconds*1000).getFullYear()
                            const createdAtMonth = new Date(post.created_at.seconds*1000).getMonth() +1
                            const createdAtMonths = ('0'+ createdAtMonth).slice(-2)
                            const createdAtDate = new Date(post.created_at.seconds*1000).getDate()
                            const createdAtDates = ('0'+ createdAtDate).slice(-2)
                            const createdAtHour = new Date(post.created_at.seconds*1000).getHours()
                            const createdAtHours = ('0'+ createdAtHour).slice(-2)
                            const createdAtMinute = new Date(post.created_at.seconds*1000).getMinutes()
                            const createdAtMinutes = ('0'+ createdAtMinute).slice(-2)


                            postList.insertAdjacentHTML("beforeend",
                             `
                             <tr className="border-b-2 border-[#38b4c8] text-white">
                             <td className="py-5">${post.title}</td>
                             <td className="py-5">${post.author}</td>
                             <td className="py-5">${post.id}</td>
                             <td className="py-5">${createdAtYear}.${createdAtMonths}.${createdAtDates} ${createdAtHours}:${createdAtMinutes}</td>
                            </tr>
                            `)
                    })
                    }, 10)} else{
                        setEditPost(!editPost)
                    }  
                    }}>
                        Edit posts
                    </button>
                    <button className="px-4 py-3 text-center hover:bg-[black] cursor-pointer pop-out outline-none" onClick={() =>

                            // OPTIONS BTN
                            {
                            setDeletePost(false),setEditPost(false), setError(null), setNewPost(false), setOptions(!options)
                            }
                        }>
                        Options
                    </button>
                </ul>
            </nav>
            <div>


                {newPost &&

                // NEW POST
                <div className="flex h-screen w-screen bg-black md:bg-transparent">
                    <form className="newPostForm relative left-[30%] top-[15%] mt-24 rounded text-white">
                    <h2 className="text-4xl font-semibold text-[#38b4c8] mb-5">New post</h2>
                        <label className="w-full mr-5">Title:</label>
                        <input className="outline-none rounded-md mb-5 text-black" type="text" name="title"/>
                        <label className="w-full mr-5 ml-2">Author:</label>
                        <input className="outline-none rounded-md mb-5 text-black" type="text" name="author"/>
                        <label className="w-full mr-5 ml-2">Link (optional):</label>
                        <input className="outline-none rounded-md mb-5 text-black" type="text" name="link"/><br />
                        <label className="w-full">Description:</label>
                        <Editor
                        value={desc}
                        onValueChange={code => setDesc(code)}
                        highlight={code => highlight(code, languages.js)}
                        padding={10}
                        className="border-2 border-[gray] rounded-md bg-black/50 text-white w-[800px] mt-5"
                        name="desc"
                        /><br />
                        <label className="w-full">Content:</label>
                        <Editor
                        value={content}
                        onValueChange={code => setContent(code)}
                        highlight={code => highlight(code, languages.js)}
                        padding={10}
                        className="border-2 border-[gray] rounded-md bg-black/50 text-white w-[800px] mt-5"
                        name="content"
                        /><br />
                        <button type="submit" className="newPostSubmit w-full rounded bg-[#38b4c8] py-3 font-semibold hover:opacity-80 pop-out outline-none" onClick={(e) => 
                        {
                            e.preventDefault();

                            const newPostForm = document.querySelector('.newPostForm')
                            const newPostSubmitBtn = document.querySelector('.newPostSubmit')
                            const content = document.querySelector('.textarea-content')
                            
                        if(newPostForm.title.value == "" || newPostForm.content.value == "" || newPostForm.author.value == "" || newPostForm.desc.value == ""){
                            setError("A field is left empty")
                        }  else {
                            e.preventDefault()

                            addDoc(colRef, {
                                title: newPostForm.title.value,
                                author: newPostForm.author.value,
                                desc: newPostForm.desc.value,
                                content: newPostForm.content.value,
                                link: newPostForm.link.value,
                                created_at: serverTimestamp()
                            })
                            .then(() => {
                                newPostForm.reset()
                                setContent("")
                                setDesc("")
                            })
                            .catch((err) => {
                                setError(err.message)
                            }) 
                        }
                            
                        }}>Post</button>
                        {error && <div className="text-[#38b4c8] text-center mt-5 mb-[250px]">{error}</div>}
                    </form>

                </div>  
                }


                {deletePost &&

                //DELETE POST
                <>
                 <center>
                 <h2 className="text-4xl font-semibold text-[#38b4c8] mb-5">Delete post</h2>
                <table className="table-auto text-white">
                    <thead>
                        <tr className="border-b-2 border-[#38b4c8] text-white">
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
                        <button type="submit" className="deletePostBtn w-[150px] h-[50px] rounded bg-[#38b4c8] py-3 font-semibold pop-out outline-none"  onClick={(e) => 
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

                                const createdAtYear = new Date(post.created_at.seconds*1000).getFullYear()
                                const createdAtMonth = new Date(post.created_at.seconds*1000).getMonth() +1
                                const createdAtMonths = ('0'+ createdAtMonth).slice(-2)
                                const createdAtDate = new Date(post.created_at.seconds*1000).getDate()
                                const createdAtDates = ('0'+ createdAtDate).slice(-2)
                                const createdAtHour = new Date(post.created_at.seconds*1000).getHours()
                                const createdAtHours = ('0'+ createdAtHour).slice(-2)
                                const createdAtMinute = new Date(post.created_at.seconds*1000).getMinutes()
                                const createdAtMinutes = ('0'+ createdAtMinute).slice(-2)

                            setScreenLoading(true)

                                postList.insertAdjacentHTML("beforeend",
                                 `
                                 <tr className="border-b-2 border-[#38b4c8] text-white">
                                 <td className="py-5">${post.title}</td>
                                 <td className="py-5">${post.author}</td>
                                 <td className="py-5">${post.id}</td>
                                 <td className="py-5">${createdAtYear}.${createdAtMonths}.${createdAtDates} ${createdAtHours}:${createdAtMinutes}</td>
                                </tr>
                                `)
                            setScreenLoading(false)
                        })
                        }}>Refresh</button>
                        {error && <div className="text-[#38b4c8]">{error}</div>}   
                    </form>
              
                    </div>
                </>
                 }



                 {editPost &&
                 // EDIT POST
                 <>
                 <center>
                 <h2 className="text-4xl font-semibold text-[#38b4c8] mb-5">Edit post</h2>
                    <table className="table-auto text-white">
                    <thead>
                    <tr className="border-b-2 border-[#38b4c8] text-white">
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
                        <form className="editPostForm relative text-black">
                        <label className="mr-3 text-white ml-[100px]">ID:</label>
                        <input className="mr-3" type="text" name="id"/>

                        <label className="mr-3 text-white ml-[100px]">Title:</label>
                        <input className="mr-3 " type="text" name="title"/><br />

                        <label className="mr-3 text-white ml-[100px]">Author:</label>
                        <input className="" type="text" name="author"/>

                        
                        <label className="mr-3 text-white ml-[100px]">Link:</label>
                        <input className="mt-4" type="text" name="link"/><br />

                        <label className="mr-3 text-white">Content:</label>
                        <Editor
                        value={content}
                        onValueChange={code => setContent(code)}
                        highlight={code => highlight(code, languages.js)}
                        padding={10}
                        className="border-2 border-[gray] rounded-md bg-black/50 text-white w-[800px] mt-5"
                        name="content"
                        /><br />

                        <button className="w-[105px] rounded bg-[#38b4c8] text-white outline-none py-3 font-semibold hover:opacity-80 mt-3 ml-2 pop-out" onClick={()=> {
                            const editPostForm = document.querySelector('.editPostForm')
                            editPostForm.addEventListener('submit', (e) => {
                            e.preventDefault()

                            const docRef = doc(db, 'posts', editPostForm.id.value)

                            if(editPostForm.title.value != ""){
                                updateDoc(docRef, {
                                    title: editPostForm.title.value
                                })
                                .then(() => {
                                    editPostForm.reset()
                                })
                                .catch((err) => {
                                    setError(err.message)
                                })
                            }
                            if(editPostForm.author.value != ""){
                                updateDoc(docRef, {
                                    author: editPostForm.author.value
                                })
                                .then(() => {
                                    editPostForm.reset()
                                })
                                .catch((err) => {
                                    setError(err.message)
                                })
                            }
                            if(editPostForm.content.value != ""){
                                updateDoc(docRef, {
                                    content: editPostForm.content.value
                                })
                                .then(() => {
                                    editPostForm.reset()
                                    setContent("")
                                })
                                .catch((err) => {
                                    setError(err.message)
                                })
                            }
                            if(editPostForm.link.value != ""){
                                updateDoc(docRef, {
                                    link: editPostForm.link.value
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
                        <button className="refresh pop-up w-[105px] rounded bg-blue-500 text-white outline-none py-3 font-semibold pop-out ml-2" 
                        onClick={(e) => {
                            e.preventDefault()
                            const postList = document.querySelector('.posts')
                            postList.innerHTML = ""

                            currentPosts.forEach(post => {

                                const createdAtYear = new Date(post.created_at.seconds*1000).getFullYear()
                                const createdAtMonth = new Date(post.created_at.seconds*1000).getMonth() +1
                                const createdAtMonths = ('0'+ createdAtMonth).slice(-2)
                                const createdAtDate = new Date(post.created_at.seconds*1000).getDate()
                                const createdAtDates = ('0'+ createdAtDate).slice(-2)
                                const createdAtHour = new Date(post.created_at.seconds*1000).getHours()
                                const createdAtHours = ('0'+ createdAtHour).slice(-2)
                                const createdAtMinute = new Date(post.created_at.seconds*1000).getMinutes()
                                const createdAtMinutes = ('0'+ createdAtMinute).slice(-2)

                            
                            setScreenLoading(true)

                                postList.insertAdjacentHTML("beforeend",
                                 `
                                 <tr className="border-b-2 border-[#38b4c8] text-white">
                                 <td className="">${post.title}</td>
                                 <td className="">${post.author}</td>
                                 <td className="">${post.id}</td>
                                 <td className="">${createdAtYear}.${createdAtMonths}.${createdAtDates} ${createdAtHours}:${createdAtMinutes}</td>
                                </tr>
                                `)
                            setScreenLoading(false)
                        })
                        }}>Refresh</button>
                        {error && <div className="text-[#38b4c8]">{error}</div>}
                        </form>
                    </div>
                </>
                }
                {options &&
                //OPTIONS
                    <>

                    <form className="themeform flex text-white justify-center">                       
                    <h1>Code theme (not working)</h1>
                    <input type="radio" name="theme" value={"duotone-space"} onClick={(radio) => {setTheme(radio.target.defaultValue)}}/>Duotone-space (default) <br />
                    <input type="radio" name="theme" value={"dark"} onClick={(radio) => {setTheme(radio.target.defaultValue)}}/>Dark <br />
                    <input type="radio" name="theme" value={"dark2"} onClick={(radio) => {setTheme(radio.target.defaultValue)}}/>dark <br />
                    <input type="radio" name="theme" value={"dark3"} onClick={(radio) => {setTheme(radio.target.defaultValue)}}/>dark <br />
                    <input type="radio" name="theme" value={"dark4"} onClick={(radio) => {setTheme(radio.target.defaultValue)}}/>dark <br />
                    </form>       
                    </>
                }
                {screenLoading && 
                <div className="flex mt-[-60px] h-screen w-screen bg-black/60 z-50">
                    <div className="sticky ml-[50%]">
                        <svg role="status" className="absolute top-[50%] w-[50px] h-[50px] mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-[#38b4c8]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                    </div>    
                </div>}
                </div>
            </div>
    );

}
}
 
export default Admin;