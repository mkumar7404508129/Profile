
var last = 'home';

function clicked(id) {
  var ellast = document.getElementById(last);
  var elnow = document.getElementById(id);
  var slide=document.getElementById("slideMenu");
  slide.style.display="none"
  
  if (last != id) {
    ellast.style.animation = last + "last 1s";
    ellast.style.transform = "rotateX(90deg)";

  }
  elnow.style.transform = "rotateX(0deg)";
  elnow.style.animation = id + " 2s";
  last = id;

  if (id != 'home')
    pagelode(id);
  if (id == 'contect') {
    myMap()
    onloadCallback()
  }
  if (id == 'portfolio') {
    portfolio("all")

  }
}
pagelode = (id) => {

  var href = "/html/" + id + ".html"
  var slide = document.getElementById(id)
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", href, false);
  xmlhttp.send();
  slide.innerHTML = xmlhttp.responseText;
  
}
myMap = () => {
  var mapProp = {
    center: new google.maps.LatLng(28.6914, 76.9314),

    zoom: 15,
  };

  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(28.6914, 76.9314),
    animation: google.maps.Animation.BOUNCE
  });

  marker.setMap(map);


}
var onloadCallback = () => {
  grecaptcha.render('html_element', {
    'sitekey': '6Le8hCQbAAAAAIj2tfUMii-HsvMlc-6X7BiY5dvn'
  });
}

function phone_btn(){
  var slide=document.getElementById("slideMenu");
  console.log("before"+slide.style.display)
  slide.style.display="block"
  console.log(slide.style.display)

  slide_show(slide)

}

function slide_show(slide){
  
   
    var data=' <a href="#" onclick="cut_btn()"id="cut_btn">&#4030;</a>'+
    '<img src="/image/nk.jpeg" alt="pic" width="160px" width="160px">'+
    '<h2 id="slide_h1" style="font-size: 30px;">Nripender Kumar</h2>'+
    '<p style="font-size: 20px;">Web Developer</p>'+
    '<nav>'+
        '<a class="link" href="#home" onclick="clicked(\'home\')"> Home</a>'+
        '<a href="#about" onclick="clicked(\'about\')" class="link">  About</a>'+
        '<a href="#education" onclick="clicked(\'education\')" class="link"> Resume </a>'+
        '<a href="#protfolio" onclick="clicked(\'portfolio\')" class="link">Portfolio</a>'+
        '<a href="#contect" onclick="clicked(\'contect\')" class="link"> Contact</a>'+

        '<a href=""><img class="social" src="/image/face.png" alt="git"></a>'+
        '<a href=""><img class="social" src="/image/Twitter.png" alt="facebook"></a>'+
       ' <a href=""><img class="social" src="/image/linkedin-logo.png" alt="tut"></a>'+

   ' </nav>'+
   '<a class="button" href="">Downlode CV</a>'+
    '<h3>Good Day</h3>'

    slide.innerHTML=data;
    console.log("slide is called succed")
}
function cut_btn(){
  var slide=document.getElementById("slideMenu");
  slide.style.display="none"  
}

