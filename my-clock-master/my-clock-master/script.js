clock=()=>{
    let date=new Date();
    let hrs=date.getHours();
    let min=date.getMinutes();
    let sec=date.getSeconds();

    let time=(hrs+' : '+min+' : '+sec)
    console.log(time);
    document.body.innerHTML=time;
}

setInterval(clock,1000)