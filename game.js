const audio = new Audio("song.mp3")

let startTime
let spawned=[]
let combo=0
let score=0

const keys=["a","s","d","f"]

function startGame(){

audio.currentTime=0
audio.play()

startTime=performance.now()

requestAnimationFrame(gameLoop)

}

function gameLoop(){

let currentTime=performance.now()-startTime

chart.forEach((note,i)=>{

if(currentTime>note.time-2000 && !spawned[i]){

spawnNote(note.lane)

spawned[i]=true

}

})

moveNotes()

requestAnimationFrame(gameLoop)

}

function spawnNote(laneIndex){

const lane=document.getElementById("lane"+laneIndex)

const note=document.createElement("div")

note.classList.add("note")

note.dataset.lane=laneIndex

note.style.top="0px"

lane.appendChild(note)

}

function moveNotes(){

document.querySelectorAll(".note").forEach(note=>{

let top=parseFloat(note.style.top)

top+=3

note.style.top=top+"px"

if(top>470){

note.remove()

combo=0
updateUI()

}

})

}

document.addEventListener("keydown",e=>{

let lane=keys.indexOf(e.key)

if(lane==-1)return

checkHit(lane)

})

function checkHit(lane){

const notes=document.querySelectorAll(".note")

notes.forEach(note=>{

if(parseInt(note.dataset.lane)==lane){

let top=parseFloat(note.style.top)

if(top>420 && top<500){

note.remove()

combo++

score+=100*combo

updateUI()

}

}

})

}

function updateUI(){

document.getElementById("combo").innerText="Combo: "+combo

document.getElementById("score").innerText="Score: "+score

}
