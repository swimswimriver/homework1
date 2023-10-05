follower=document.getElementById('follower');
mouseX=(event)=>{
    return event.clientX;
}
mouseY=(event)=>{
    return event.clientY;
}

mouseY1=(event)=>{
    return event.clientY+event.delta;
}
positionElement=function(event){
    mousex=mouseX(event)+10;
    mousey=mouseY(event)+10;
    positionx=mousex+'px';
    positiony=mousey+'px';
    follower.style.top=positiony;
    follower.style.left=positionx;
}

timer=false;
window.onmousemove=init=(event)=>{
    event1=event
timer=setTimeout(()=>{
    positionElement(event1)
},1);

}

