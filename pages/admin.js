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
const body = document.body
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


const db = getFirestore();
const colRef = collection(db, 'posts');

if(screenLoading == true){
    body.style.overflowY = "hidden";
} else {
    body.style.overflowY = "scroll";
}


    useEffect(() => {
        auth.onAuthStateChanged(function(user) {
        if (!user) {
            router.push('/login')
          } else {
            const userplace = document.querySelector('.user')

            if(userplace == null){
                setscreenLoading(true)
            }else if(userplace !== null){
                userplace.innerHTML = `Welcome, ${user.displayName || user.email}`
            } 
          }
        },[]);
    })
    
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

                
                <button onClick={() => {setuserOpt(!userOpt); console.log(user)}} className='absolute px-2 top-4 right-4 border-b-2 py-1 border-red-500 text-white hover:opacity-70 outline-none pop-out'>
                        <div>
                            <a className='user ml-2 mt-1 mb-1 mr-2'></a>
                        </div>
                </button>


                {userOpt &&
                <div className="absolute right-2 top-[60px] bg-transparent border-2 border-red-500 rounded-md w-[400px">
                <div className="ml-5 mr-5">
                    <h1 className="text-center mt-2 mb-3">User Info</h1>
                    <p className="mb-1">Username: {user.displayName}</p>
                    <p className="mb-1">Email: {user.email}</p>
                    <p className="mb-1">Profile picture: {user.photoURL}</p>
                    <p className="mb-1">User created: {user.metadata.creationTime}</p>
                    <p className="mb-1">Last login: {user.metadata.lastSignInTime}</p>
                    <p className="mb-1">Provider: {user.providerId}</p>
                    <p className="mb-1">User ID: {user.uid}</p>
                </div>
                <h1 className="text-center mt-2 mb-3">Update user</h1>
                <form className="userOptForm text-center">
                    <label>Display name:</label><br />
                    <input className="mt-5 text-black" type="text" name="username"/><br />
                    {usernameError && usernameError}

                    <label>Profile picture (link):</label><br />
                    <input className="mt-5 text-black" type="text" name="photo"/><br />
                    {photoError && photoError}

                    <label>Email:</label><br />
                    <input className="mt-5 text-black" type="text" name="email"/><br />
                    {emailError && emailError}

                    <label>Password:</label><br />
                    <input className="mt-5 mb-5 text-black" type="password" name="password"/><br />
                    {passwordError && passwordError}

                    <button className="mb-5 bg-red-500 outline-none pop-out rounded-md p-2" onClick={(e) => 
                    {
                        const userOptform = document.querySelector('.userOptForm')
                        e.preventDefault();
                        if(userOptform.username.value != ""){
                            updateProfile(auth.currentUser, {
                                displayName: userOptform.username.value,
                            })
                            .then(() => {
                                userOptform.reset()
                                setSuccess(true)
                                setTimeout(() => {
                                    setSuccess(false)
                                }, 2000)
                              }).catch((err) => {
                                setUsernameError(err)
                              });
                        }
                        if(userOptform.photo.value != ""){
                            updateProfile(auth.currentUser, {
                                photoURL: userOptform.photo.value,
                            })
                            .then(() => {
                                userOptform.reset()
                                setSuccess(true)
                                setTimeout(() => {
                                    setSuccess(false)
                                }, 2000)
                              }).catch((err) => {
                                setPhotoError(err)
                              });
                        }
                        if(userOptform.email.value != ""){
                            updateEmail(auth.currentUser, userOptform.email.value)
                            .then(() => {
                                userOptform.reset()
                                setSuccess(true)
                                setTimeout(() => {
                                    setSuccess(false)
                                }, 2000)
                              }).catch((err) => {
                                setPasswordError(err)
                              });
                        }
                        if(userOptform.password.value != ""){
                            updatePassword(auth.currentUser, userOptform.password.value)
                            .then(() => {
                                userOptform.reset()
                                setSuccess(true)
                                setTimeout(() => {
                                    setSuccess(false)
                                }, 2000)
                              }).catch((err) => {
                                setEmailError(err)
                              });
                        }

                    }}>Update</button>
                    {success && <div className="text-green-500 mb-5">Updated!</div>}
                </form>
                </div>
                }


                <button className='absolute right-[400px] top-4 border-b-2 border-red-500 py-1 text-white  hover:opacity-70 pop-out outline-none'
                onClick={() => {
                    signOut(auth)
                    .then(() => {
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
                                    const createdAtMonth = new Date(post.created_at.seconds*1000).getMonth()
                                    const createdAtDate = new Date(post.created_at.seconds*1000).getDate()
                                    const createdAtHours = new Date(post.created_at.seconds*1000).getHours()
                                    const createdAtMinutes = new Date(post.created_at.seconds*1000).getMinutes()
                                        setScreenLoading(true)

                                        postList.insertAdjacentHTML("beforeend",
                                        `
                                        <tr className="border-b-2 border-red-500 text-white">
                                        <td className="">${post.title}</td>
                                        <td className="">${post.author}</td>
                                        <td className="">${post.id}</td>
                                        <td className="">${createdAtYear}.${createdAtMonth +1}.${createdAtDate} ${createdAtHours}:${createdAtMinutes}</td>
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
                        const createdAtMonth = new Date(post.created_at.seconds*1000).getMonth()
                        const createdAtDate = new Date(post.created_at.seconds*1000).getDate()
                        const createdAtHours = new Date(post.created_at.seconds*1000).getHours()
                        const createdAtMinutes = new Date(post.created_at.seconds*1000).getMinutes()

                            postList.insertAdjacentHTML("beforeend",
                             `
                             <tr className="border-b-2 border-red-500 text-white">
                             <td className="">${post.title}</td>
                             <td className="">${post.author}</td>
                             <td className="">${post.id}</td>
                             <td className="">${createdAtYear}.${createdAtMonth +1}.${createdAtDate} ${createdAtHours}:${createdAtMinutes}</td>
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
                            setDeletePost(false), setOptions(!options),setEditPost(false), setError(null)
                            }
                        }>
                        Options
                    </button>
                </ul>
            </nav>
            <div>


                {newPost &&

                // NEW POST
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
                        <button type="submit" className="newPostSubmit w-full rounded bg-red-500 py-3 font-semibold hover:opacity-80 pop-out outline-none" onClick={(e) => 
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

                //DELETE POST
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
                        <button type="submit" className="deletePostBtn w-[150px] h-[50px] rounded bg-red-500 py-3 font-semibold pop-out outline-none"  onClick={(e) => 
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
                            const createdAtMonth = new Date(post.created_at.seconds*1000).getMonth()
                            const createdAtDate = new Date(post.created_at.seconds*1000).getDate()
                            const createdAtHours = new Date(post.created_at.seconds*1000).getHours()
                            const createdAtMinutes = new Date(post.created_at.seconds*1000).getMinutes()
                            setScreenLoading(true)

                                postList.insertAdjacentHTML("beforeend",
                                 `
                                 <tr className="border-b-2 border-red-500 text-white">
                                 <td className="">${post.title}</td>
                                 <td className="">${post.author}</td>
                                 <td className="">${post.id}</td>
                                 <td className="">${createdAtYear}.${createdAtMonth +1}.${createdAtDate} ${createdAtHours}:${createdAtMinutes}</td>
                                </tr>
                                `)
                            setScreenLoading(false)
                        })
                        }}>Refresh</button>
                    </form>
                    {error && <div className="text-red-500">{error}</div>}                 
                    </div>
                </>
                 }



                 {editPost &&
                 // EDIT POST
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
                        <textarea className="mr-3 mt-5 h-[23px]" type="text" name="content"/>

                        <label className="mr-3 text-white">Link:</label>
                        <input className="mr-0" type="text" name="link"/>

                        <button className="w-[105px] rounded bg-red-500 text-white outline-none py-3 font-semibold hover:opacity-80 mt-3 ml-2 pop-out" onClick={()=> {
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
                                    link: editPostForm.link.value
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
                            const createdAtMonth = new Date(post.created_at.seconds*1000).getMonth()
                            const createdAtDate = new Date(post.created_at.seconds*1000).getDate()
                            const createdAtHours = new Date(post.created_at.seconds*1000).getHours()
                            const createdAtMinutes = new Date(post.created_at.seconds*1000).getMinutes()
                            setScreenLoading(true)

                                postList.insertAdjacentHTML("beforeend",
                                 `
                                 <tr className="border-b-2 border-red-500 text-white">
                                 <td className="">${post.title}</td>
                                 <td className="">${post.author}</td>
                                 <td className="">${post.id}</td>
                                 <td className="">${createdAtYear}.${createdAtMonth +1}.${createdAtDate} ${createdAtHours}:${createdAtMinutes}</td>
                                </tr>
                                `)
                            setScreenLoading(false)
                        })
                        }}>Refresh</button>
                        </form>
                        {error && <div className="text-red-500">{error}</div>}
                    </div>
                </>
                }

                {options &&
                //OPTIONS
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
                {screenLoading && 
                <div className="flex mt-[-60px] h-screen w-screen bg-black/60 z-50">
                    <div className="sticky ml-[50%]">
                        <svg role="status" className="absolute top-[50%] w-[50px] h-[50px] mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-red-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                    </div>    
                </div>}
                </div>
            </div>
    );
}
 
export default Admin;