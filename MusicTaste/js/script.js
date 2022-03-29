function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


  // contact us
  const nextStep = document.querySelector('#nextStep').addEventListener('click', function (e) {
      e.preventDefault();
      // Hide first view
      document.getElementById('my_form').style.display = 'none';
  
      // Show thank you message element
      document.getElementById('thank_you').style.display = 'block';
    });

    
