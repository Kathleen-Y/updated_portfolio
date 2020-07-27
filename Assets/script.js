 // Sidenav
 const sideNav = document.querySelector('.sidenav');
 M.Sidenav.init(sideNav, {});

 // Slider
 const slider = document.querySelector('.slider');
 M.Slider.init(slider, {
   indicators: false,
   height: 400,
   transition: 400,
   interval: 6000
 });

 // ScrollSpy
 const ss = document.querySelectorAll('.scrollspy');
 M.ScrollSpy.init(ss, {});

 var elems = document.querySelectorAll('.modal');
 M.Modal.init(elems, {

 });
 
/* creating object of Date class */
function currentTime() {
  var date = new Date(); /* creating object of Date class */
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  var midday = "AM";
  midday = (hour >= 12) ? "PM" : "AM"; /* assigning AM/PM */
  hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour); /* assigning hour in 12-hour format */
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  document.getElementById("clock").innerText = hour + " : " + min + " : " + sec + " " + midday; /* adding time to the div */
    var t = setTimeout(currentTime, 1000); /* setting timer */
}

function updateTime(k) { /* appending 0 before time elements if less than 10 */
  if (k < 10) {
    return "0" + k;
  }
  else {
    return k;
  }
}

currentTime();

/* setInterval(function () {
  var a = moment().toString();
  $('#clock').text(a)
}, 1000); */


let today = new Date().toLocaleDateString()

console.log(today)

toLocaleDateString();
