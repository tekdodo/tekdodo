document.addEventListener("keydown"),(Event)=>{
    if(Event.key=="arrowup"){
        direction="up"
    }
    if(Event.key=="arrowdown"){
        direction="down"
    }
    if(Event.key=="arrowright"){
        direction="right"
    }
    if(Event.key=="arrowleft"){
        direction="left"
         }
        }
    //antes da função loop e do codigo anterior
let direction
const novesnack=()=>{
    if(!direction)return;
    const head=snack[snack.lenght-1]
    if(direction=="right"){
        snake.push({x:head.x-size,y:head.y})
    }
    if(direction=="up"){
        snake.push({x:head.x,y:head.y+size})
    }
    if(direction=="down"){
        snake.push({x:head.x,y:head.y-size})
    }
    snake.shift();
}