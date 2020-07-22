var c=["blue","green","yellow","red"];
  function changeColor(){
        var randomcolor = c[Math.floor(Math.random() * c.length)];
        document.body.style.backgroundColor = randomcolor;
            
        }
function start(){
             setInterval(changeColor, 5000);
  }
  
  


  let title=document.getElementById("title");
  const a= prompt("enter oyur name");
  document.write( `welcome ${a}`);

  let n=prompt("enter multiply tabel");
  for(let i=1;i<=10;i++){
      document.write(n*i + " <br> ");
  }
 
function clock(){
  let date= new Date();
  let time=date.toLocaleTimeString();
  document.write(time);

}
setInterval(clock,1000);
 
 
  function dark(){

document.body.setAttribute('style','backgroundColor:white');
document.body.classList.toggle('black');}
