//Variables for body and navbar, set so that it can be hidden.
const body = document.body;
const Navbar = document.getElementById('navbar');
var height = Navbar.clientHeight;
var width = Navbar.clientWidth;

//Listen for mouse events, 
body.addEventListener('mousemove', e => showCoords(e)) 

//Function for showing/hiding the navbar on the multistream page.
function showCoords(event){
    var y = event.clientY;
    if( y <= 68){
            Navbar.style.visibility = 'visible';
            Navbar.style.opacity = '1';
            Navbar.style.height = height + 'px';
            Navbar.style.width = width + 'px';
            Navbar.style.padding = '.5em';
        
    }
    else{
        Navbar.style.visibility = 'hidden';
        Navbar.style.opacity = '0';
        Navbar.style.height = '0';
        Navbar.style.width = '0';
        Navbar.style.padding = '0';
    }
    
}


