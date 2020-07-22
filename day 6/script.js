var c=["blue","green","yellow","red"];
  function changeColor(){
        var randomcolor = c[Math.floor(Math.random() * c.length)];
        document.body.style.backgroundColor = randomcolor;
            
        }
function start(){
             setInterval(changeColor, 5000);
  }
  
  start()



  let n=prompt("enter multiply tabel");
  for(let i=1;i<=10;i++){
      document.write(n*i + " <br> ");
  }

  var a= prompt("enter oyur name");
  document.write(` welcome ${a}`);"<br>";
 function dark(){
var p=document.getElementById("p");
p.setAttribute('style','backgroundColor:white');
p.classList.toggle('black');}