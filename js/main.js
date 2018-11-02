document.getElementById('sub').addEventListener('click',
function(){
	document.querySelector('.bg-modal').style.display = 'flex'

});

document.getElementById('close').addEventListener('click',
function(){
	document.querySelector('.bg-modal').style.display = 'none'

});




// Get the menu


// window.addEventListener('scroll',function(){
//   document.querySelector('.input').style.display = 'none';
// });




window.addEventListener('scroll', function() {
  console.log(pageYOffset + 'px');
   if(pageYOffset > 98)
  	{
  		document.querySelector(".menu-container").style.top = '-86px';
  		document.querySelector(".menu-container").style.background = '#eeee';
  		document.querySelector(".menu-container").style.boxShadow ='0px 5px 4px 0 rgba(0, 0, 0, 0.2)';

  	}else if(pageYOffset < 98){
  			document.querySelector(".menu-container").style.top = '19px';
  			document.querySelector(".menu-container").style.background = '#eee3';
  			document.querySelector(".menu-container").style.boxShadow ='0px 0px px 0px rgba(0, 0, 0, 0)';

  	}
});

function myFunction(x) {
        if (x.matches) { // If media query matches
window.addEventListener('scroll', function() {
  console.log(pageYOffset + 'px');
   if(pageYOffset > 98)
    {
      document.querySelector(".menu-container").style.top = '-150px';
      document.querySelector(".menu-container").style.background = '#eeee';
      document.querySelector(".menu-container").style.boxShadow ='0px 5px 4px 0 rgba(0, 0, 0, 0.2)';



    }else if(pageYOffset < 98){
        document.querySelector(".menu-container").style.top = '19px';
        document.querySelector(".menu-container").style.background = '#eee3';
        document.querySelector(".menu-container").style.boxShadow ='0px 0px px 0px rgba(0, 0, 0, 0)';


    }
});
}
}

var x = window.matchMedia("(min-width:1280px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

//Select Dom Items

const menubtn = document.querySelector('.menu-btn');
const menu= document.querySelector('.menu-container');


//Set Initial State

let showMenu = false;

menubtn.addEventListener('click',toggleMenu);


function toggleMenu(){
  if(window.matchMedia("max-width:550px"))
    {
  if(!showMenu){
    menubtn.classList.add('close');
    menu.classList.add('show');
    document.querySelector(".menu-container").style.display = "flex";
   window.addEventListener('scroll', function() {
    console.log(pageYOffset + 'px');
     if(pageYOffset > 98)
      {
        document.querySelector(".menu-container").style.top = '-80px';
        document.querySelector(".menu-container").style.boxShadow ='0px 5px 4px 0 rgba(0, 0, 0, 0.2)';
        document.querySelector(".menu-container").style.background = '#eee';
        menubtn.style.top = '2px';

      }else if(pageYOffset < 98){
          document.querySelector(".menu-container").style.top = '10px';
          document.querySelector(".menu-container").style.background = '#eee3';
          document.querySelector(".menu-container").style.boxShadow ='0px 0px px 0px rgba(0, 0, 0, 0)';
           menubtn.style.top = '35px';
      }
  });

    //Set MenuSate
    showMenu = true;
  }else{
    menubtn.classList.remove('close');
    menu.classList.remove('show');
    document.querySelector(".menu-container").style.display = "none";

    //Set MenuSate
    showMenu = false;
  }
}
}
