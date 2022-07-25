var  menuItemToClick = document.querySelectorAll('.e38')

function cars() {
    document.querySelectorAll('.e38').forEach(function(e) {
      e.onclick = function(evt) {
        console.log('clicked');
        document.getElementById("e38value").classList.toggle("e38hidden");
      }
    })
  }
  
  cars();