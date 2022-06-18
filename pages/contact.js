import { useState } from "react";
import Header from "./Header";
import emailjs from '@emailjs/browser';

const Contact = () => {

const [error, setError] = useState(null);
const [success, setSuccess] = useState(null)
const [loading, setLoading] = useState(false);

    return (
        <>
            <Header/>
            <div>
            <div className="realative flex h-screen w-screen flex-col md:items-center md:justify-center md:bg-transparent">
                <form className="emailform relative mt-24 space-y-8 rounded text-white  py-10 px-6 md:mt-0 md:max-w-md md:px-14">
                <h1 className="text-4xl font-semibold text-[#38b4c8]">Contact</h1>
                <span className="text-[13px] font-semibold">I don&apos;t collect any of your data, its only used for sending the email.</span>
                <div className="space-y-4">
                    <label className="inline-block w-full">Your Name:</label><br />
                    <input className="text-black outline-none px-1 rounded-md" type="text" name="name"/><br />
                    <label className="inline-block w-full">Your Email:</label><br />
                    <input className="text-black outline-none px-1 rounded-md" type="text" name="email"/><br />
                    <label className="inline-block w-full">Subject:</label><br />
                    <input className="text-black outline-none px-1 rounded-md" type="text" name="subject"/><br />
                    <label className="inline-block w-full">Message:</label><br />
                    <textarea className="text-black outline-none px-1 rounded-md w-[300px] h-[150px]" type="text" name="message"/><br />
                </div>
                    <button type="submit" className="login w-[300px] h-[55px] rounded bg-[#38b4c8] outline-none py-3 font-semibold hover:opacity-80 pop-out" onClick={(e) => {
                        e.preventDefault()
                        setLoading(true)

                        const emailform = document.querySelector('.emailform');

/*                         var templateParams = {
                            email: emailform.email.value.trim(),
                            subject: emailform.subject.value.trim(),
                            message: emailform.message.value.trim(),
                        }; */
                        if(emailform.email.value == '' || emailform.subject.value == '' ||  emailform.message.value == '' || emailform.name.value == ''){
                            setTimeout(() => {
                                setError(null)
                                setLoading(false)
                            }, 2000)
                            setError("A field is left empty")
                        } else {
                            emailjs.sendForm('service_k1acx4w', 'template_shha0wm', '.emailform', 'EcaClbH17d-Q-Q3Uy')
                            .then(function(response) {
                            console.log('SUCCESS!', response.status, response.text);
                            setLoading(false)
                            setSuccess('Email successfully sent!')
                            setTimeout(() => {
                                setSuccess(null)
                            }, 2000)
                            }, function(error) {
                            console.log('FAILED...', error);
                            setLoading(false)
                            setError(error.message)
                            });
                        }
                        }}>
                        {
                        loading && 
                        <div>
                            <svg role="status" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                            </svg>
                        </div>
                        }                           
                        {
                        !loading && <div>Send</div>
                        }
                    </button>
                    {error && <div className="text-red-500 text-center">{error}</div>}
                    {success && <div className="text-green-500 text-center">{success}</div>}
                    <br />
                    </form>
            </div>
        </div>
        </>
    );
}
 
export default Contact;