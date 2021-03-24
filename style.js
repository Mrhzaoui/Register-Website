var x = document.getElementById("contact");
var y = document.getElementById("admin");
var z = document.getElementById("btn");

function customers(){
x.style.left = "30%";
y.style.left ="600px";
}

function admin(){
  x.style.left = "-60%";
  y.style.left ="30%";
  }
/////////////////////////////////

  function franphone() {
    document.getElementById("fra-te").innerHTML = "Nabil:1231351";
  }
  function franmail() {
    document.getElementById("fra-te").innerHTML = "Nabil:nabil@gmail.com";
  }

  function canaphone() {
    document.getElementById("cana-te").innerHTML = "Nabil:1231351";
  }
  function canamail() {
    document.getElementById("cana-te").innerHTML = "Nabil:nabil@gmail.com";
  }

  function marphone() {
    document.getElementById("mar-te").innerHTML = "Nabil:1231351";
  }
  function marmail() {
    document.getElementById("mar-te").innerHTML = "Nabil:nabil@gmail.com";
  }

///////////////////////////////////////jquery//////////////////////
$(document).ready(function(){
  $("#france").click(function(){
    $("#franinfo").slideToggle("slow");
  });
});

$(document).ready(function(){
  $("#maroc").click(function(){
    $("#maroinfo").slideToggle("slow");
  });
});

$(document).ready(function(){
  $("#canada").click(function(){
    $("#canainfo").slideToggle("slow");
  });
});


  