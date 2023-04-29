var canvas=document.getElementById("myCanvas")

var ctx=canvas.getContext("2d")

var larguradatela=screen.width

var larguradocanvas=larguradatela-100

var alturadocanvas=screen.height-300

if(larguradatela<992){
    canvas.width=larguradocanvas
    canvas.height=alturadocanvas
    document.body.style.overflow="hidden"
}
var x,y

var paintloko="não desenhar" 

canvas.addEventListener("mousedown",funçãofeia)

canvas.addEventListener("mousemove",timeline)

function funçãofeia(){paintloko="desenhar"}

function timeline(m){

    x1=m.clientX-canvas.offsetLeft

    y1=m.clientY-canvas.offsetTop

    if(paintloko=="desenhar"){

        ctx.beginPath()

        ctx.arc(x1,y1,10,0,2*Math.PI)

        ctx.stroke()


    }
x=x1
y=y1

}

canvas.addEventListener("mouseup",stop)

canvas.addEventListener("touchmove",cliquelogo)

canvas.addEventListener("touchstart",cliquedevagar)

function cliquedevagar(R){

    x=R.touches[0].clientX-canvas.offsetLeft
    y=R.touches[0].clientY-canvas.offsetTop




    
}
function cliquelogo(R){

    x1=R.touches[0].clientX-canvas.offsetLeft
    y1=R.touches[0].clientY-canvas.offsetTop

    ctx.beginPath()
    ctx.moveTo(x,y)
    ctx.lineTo(x1,y1)
    ctx.stroke()


x=x1
y=y1

}


function stop(){paintloko="não desenhar"}






