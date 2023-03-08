// import kaboom lib
import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

kaboom();

loadSprite("kartka","kartka_swiateczna.png")
loadSprite("gwiazda","gwiazda.png")

loadSound("muzyka","cichanoc.mp3")


add([
    sprite("kartka")
])

const gwiazda = add([
    sprite("gwiazda"),
    pos(50,100)
])

onKeyRelease("space",()=>play("muzyka"))

onUpdate(()=>{

    if(gwiazda.pos.x<620)

    gwiazda.pos.x +=1
})