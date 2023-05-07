const toggleBtn = document.getElementById("#tg_btn")
const bodyEle = document.getElementById("#switch")
const icon = document.getElementById("#ic")
const auth_img = document.getElementById("#auth")

console.log(bodyEle)
// listner
toggleBtn.addEventListener("click" , switchMode)

// function 
function switchMode(e) {

    let classes = bodyEle.className
    console.log(classes)
    if (classes == "dark"){
        bodyEle.className = ""
        icon.className = "fa-solid fa-sun"
    }
    else{
        bodyEle.className = "dark"
        icon.className = "fa-solid fa-moon"

    }
}

//disable right click
auth_img.bind("contextmenu" , () => {
    return false
})