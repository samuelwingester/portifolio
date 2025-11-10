function darkmode(mode){
    const input = document.getElementById("header-switch-input")
    const icon = document.getElementById("header-switch-element")
    const body = document.body

    if (mode){
        icon.innerHTML = "dark_mode"
        input.checked = true
        body.classList.add("dark")
        localStorage.setItem("darkmode", true);
    }else{
        icon.innerHTML = "sunny"
        input.checked = false
        body.classList.remove("dark")
        localStorage.setItem("darkmode", false);
    }   
}

async function type_intro(){
    async function typeText(element, text) {
        for (let i = 0; i < text.length; i++) {
            element.innerHTML += text[i];
            const time = Math.floor(Math.random() * 50 + basetime - 50);
            await new Promise(r => setTimeout(r, time));
        }
    }

    const INTRO_ELEMENT = document.getElementById("intro-span")
    const NAME_ELEMENT = document.getElementById("intro-name")

    const INTRO = "Olá, meu nome é"
    const FIRSTNAME = "Samuel"
    const LASTNAME = "Wingester"

    let basetime = 150

    await typeText(INTRO_ELEMENT, INTRO)
    await typeText(NAME_ELEMENT,FIRSTNAME)
    NAME_ELEMENT.appendChild(document.createElement("br"));
    await typeText(NAME_ELEMENT,LASTNAME)
}

// TROCA DE MODO E DE ICONE NO SWITCH 
document.getElementById("header-switch-input").addEventListener("click", ()=> {
    const mode = document.getElementById("header-switch-input").checked
    darkmode(mode)
})

//botao do menu no header
document.getElementById("header-state-menu").addEventListener("click", ()=> {
    document.getElementById("header-links").classList.toggle("menu-on")
})

if (document.title === "Samuel Wingester"){
    //modal
    document.getElementById("modal-icon").addEventListener("click", () => {
        document.getElementById("modal").classList.remove("show-modal")
        document.getElementById("block").classList.remove("show-modal")
        document.querySelectorAll("."+localStorage.getItem("skillmodal")).forEach(element => {
            element.classList.remove("show-modal")
        })
    })

    document.querySelectorAll(".skills-topics").forEach(element => {
        element.addEventListener("click", () => {
            document.getElementById("modal").classList.add("show-modal")
            document.getElementById("block").classList.add("show-modal")
            localStorage.setItem("skillmodal",element.id)
            document.querySelectorAll("."+element.id).forEach(ele => {
                ele.classList.add("show-modal")
            })
        })
    });

    document.addEventListener("DOMContentLoaded", () => {
        type_intro()
    })  
}

//carregamento do site
document.addEventListener("DOMContentLoaded", () => {
    darkmode(localStorage.getItem("darkmode") === "true")
})


