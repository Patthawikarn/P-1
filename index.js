setInterval(function() {
    $('.carousel').carousel('next');
  }, 5000);
  
  
  function showPopup() {
    document.getElementById("popup").style.display = "block";
  }
  
  function hidePopup() {
    document.getElementById("popup").style.display = "none";
  }
  
  
  //   function initMap() {
  //     var center = { lat: -34.397, lng: 150.644 };
  //     var map = new google.maps.Map(
  //         document.getElementById('map'), { zoom: 8, center: center });
  //     var marker = new google.maps.Marker({ position: center, map: map });
  // }
  
  
  var coll = document.getElementsByClassName("collapsible-text");
  var i;
  
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
  
  function changeColor(button) {
    var buttons = document.querySelectorAll('.collapsible-text');
    buttons.forEach(function(btn) {
        btn.style.backgroundColor = ''; // เคลียร์สีทุกปุ่มก่อน
    });
    button.style.backgroundColor = 'orange'; // กำหนดสีส้มให้กับปุ่มที่ถูกคลิก
  }
  
  