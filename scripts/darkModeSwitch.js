const body = document.body
const anchor = document.querySelectorAll("a")
const paragraph = document.querySelectorAll("p")
const heading1 = document.querySelectorAll('h1')
const darkModeToggle = document.getElementById('darkModeToggle');

function getValue(){
if (darkModeToggle.checked) {
    console.log("checked")
    body.classList.remove("lightmode")
    anchor.forEach(a => a.classList.remove("lightmode"))
    heading1.forEach(h1 => h1.classList.remove("lightmode"))
    paragraph.forEach(p => p.classList.remove("lightmode"))    
} else{
    console.log("not checked")
    body.classList.add("lightmode")
    anchor.forEach(a => a.classList.add("lightmode"))
    heading1.forEach(h1 => h1.classList.add("lightmode"))
    paragraph.forEach(p => p.classList.add("lightmode"))    
}
};