function clock() {
  var hours = document.getElementById("hr");
  var mins = document.getElementById("min");
  var secs = document.getElementById("sec");
  var meridian = document.getElementById("am");

  var time = new Date();
  var a = time.getHours();
  var b = time.getMinutes();
  var c = time.getSeconds();
  hours.innerHTML = a;
  mins.innerHTML = b;
  secs.innerHTML = c;

  if (a >= 12) {
    var d = "PM";
  }
  if (a < 12) {
    var d = "AM";
  }
  meridian.innerHTML = d;
}
setInterval(clock, 1000);

function Makediv(){
    var container = document.createElement('div');
    container.className="grid-container";
    container.id = "dynamic-block";
    document.getElementById('grid-container1').appendChild(container);

    var invalue1 = document.getElementById("wakeUp");
    var invalue2 = document.getElementById("lunchTime");
    var invalue3 = document.getElementById("napTime");
    var value = invalue1.options[invalue1.selectedIndex].text;
    var value2 = invalue2.options[invalue2.selectedIndex].text;
    var value3 = invalue3.options[invalue3.selectedIndex].text;
    document.getElementById("dynamic-block").innerHTML= "Wake up time : " + value  + "<br/> Lunch time : " + value2 + "<br/> Nap time : " + value3 ;
}

function settime() {
  var i = document.getElementById("wakeUp").value;
  var j = document.getElementById("lunchTime").value;
  var k = document.getElementById("napTime").value;
  var hourr = new Date().getHours();
  if (i == hourr) {
    document.getElementById("greeting-image").style.backgroundImage =
      "url(./assets/morning.svg)";
    document.getElementById("greeting").innerHTML =
      "GRAB SOME HEALTHY BREAKFAST!!!";
  }
  if (j == hourr) {
    document.getElementById("greeting-image").style.backgroundImage =
      "url(./assets/lunch_image.png)";
    document.getElementById("greeting").innerHTML = "LET'S HAVE SOME LUNCH !!";
  }
  if (k == hourr) {
    document.getElementById("greeting-image").style.backgroundImage =
      "url(./assets/evening.svg)";
    document.getElementById("greeting").innerHTML =
      "CLOSE YOUR EYES AND GO TO SLEEP";
  }
  Makediv();
}
