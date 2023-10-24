let skeleton = "off"
let skeletonStatic = document.getElementById("skeletonStatic")
let buttonAudio = new Audio ("./sound/danceAudio.mp3")
let audio = new Audio ("./sound/audio.mp3")

const dance=()=>{
    if (skeleton === "off") {
        skeleton = "on"
        skeletonStatic.classList.add("skeletonOn")
        skeletonStatic.addEventListener('click', ()=>{
            buttonAudio.play()
            audio.play()
        })
    } else{
        skeleton = "off"
        skeletonStatic.classList.remove("skeletonOn")
        skeletonStatic.addEventListener('click', ()=>{
            buttonAudio.pause()
            audio.pause()
        })
    }
}