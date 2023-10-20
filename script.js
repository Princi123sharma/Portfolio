var tl1=gsap.timeline();
tl1.from("#nav a",{
    y:"-100%",
    opacity:0,
    duration:1,
    stagger:0.25,
    scrub:3,
})
tl1.from("#center h1",{
    x:-100,
    duration:1,
    opacity:0,
    stagger:0.25,
    scrub:3,
})
tl1.from("#center h2",{
    x:-100,
    duration:1,
    opacity:0,
    stagger:0.25,
    scrub:3,
})

var elem=document.querySelectorAll(".elem3");
elem.forEach(function(e){

    e.addEventListener("mouseenter",function(){
       
        e.childNodes[3].style.opacity="1";
        e.childNodes[3].style.scale="3";
    })
    e.addEventListener("mouseleave",function(){
        e.childNodes[3].style.opacity="0";
        e.childNodes[3].style.scale="1";
    })
    e.addEventListener("mousemove",function(dets){
        e.childNodes[3].style.left=dets.y+"px";
        
    })
})

var page=document.querySelector("#page4");
var cursor=document.querySelector("#cursor")
page.addEventListener("mousemove",function(dets){
    cursor.style.left=`${dets.x+30}px`;
    cursor.style.top=`${dets.y}px`;
})

var name=document.getElementById("Name").value;
var email=document.getElementById("Email").value;
var subject=document.getElementById("subject").value;
var message=document.getElementById("message").value;
var body="Name:"+ name + " <br/> Email:" + email +"<br/> Subject:"+subject +" <br/> message:" +message;


function Send(){
    console.log("function call");
    
    Email.send({
       SecureToken:'f83574d2-c469-4f85-b81e-87cdc8795855',
        To : 'princisharma086@gmail.com',
        From : 'princisharma086@gmail.com',
        Subject : ' this is mee ',
        Body : body,
    }).then(
      message => alert(message)
    );
    
}