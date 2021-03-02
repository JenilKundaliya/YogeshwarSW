let prev = document.getElementById('prev')
let next = document.getElementById('next')
let navbar = document.getElementById('navcontainer');
let i=1;
let teaminfo = document.getElementById('teaminfo')
console.log('Ashitbhai')
// console.log('Ashitbhai')
next.addEventListener('click',()=>{
  i++;
  if(i>4)
  i = i%4;
  console.log(i);
if(i==1 )
{
  teaminfo.innerHTML= 
    `
   <h1 id="Name"><span>Mr.</span> Ashit Kundaliya</h1>
       <span id="role">Founder</span>
       <p id="description">He is the <span id="role">Founder</span> of <span id="officesp">Yogeshwar Sanitary Wares</span>and handles the business of products like Cement,Roof Sheets and Pidhiya.</p>
       <a href=""><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
         <a href=""><i class="fa fa-envelope" aria-hidden="true"></i></a>
         <a href=""><i class="fa fa-instagram" aria-hidden="true"></i></a>
       `
}
if(i==2)
{
  teaminfo.innerHTML = `
  
   <h1 id="Name"><span>Mr.</span> Dipak Thobhani</h1>
       <span id="role">Co-Founder</span>
       <p id="description">He is the <span id="role">Co-Founder</span> of <span id="officesp">Yogeshwar Sanitary Wares</span> and deals with the customer by sharing his excellent knowledge of the products to the customers </p>
       <a href=""><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
       <a href=""><i class="fa fa-envelope" aria-hidden="true"></i></a>
       <a href=""><i class="fa fa-instagram" aria-hidden="true"></i></a>`

}

else if(i==3)
{
  teaminfo.innerHTML =
 `  <h1 id="Name"><span>Mr.</span> Hiren Kundaliya</h1>
       <span id="role">Founder</span>
       <p id="description">He is the <span id="role">Founder</span> of <span id="officesp">Jalaram Tiles and Sanitary</span>and has expertise in explaining the customer the best combinations of the Tiles and also takes care of the Finance and the transactions with the companies.</p>
       <a href=""><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
       <a href=""><i class="fa fa-envelope" aria-hidden="true"></i></a>
       <a href=""><i class="fa fa-instagram" aria-hidden="true"></i></a>`

}
else if(i==4)
{
  teaminfo.innerHTML =
 
   `<h1 id="Name"><span>Mr.</span> Savan Thobhani</h1>
       <span id="role">Co-Founder</span>
       <p id="description">He is the Youngest person in our team, the <span id="role">Co-Founder</span> of <span id="officesp">Jalaram Tiles and Sanitary</span>and handles the business of products like Tiles,doors,etc.</p>
       <a href=""><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
         <a href=""><i class="fa fa-envelope" aria-hidden="true"></i></a>
         <a href=""><i class="fa fa-instagram" aria-hidden="true"></i></a>`
}


})
prev.addEventListener('click',()=>{
 
    if(i==1){
      i = 4;
    }
    else{
      i--;
    }
    if(i>4)
    i = i%4;
    console.log(i);
  if(i==1 )
  {
    teaminfo.innerHTML= 
      `
     <h1 id="Name"><span>Mr.</span> Ashit Kundaliya</h1>
         <span id="role">Founder</span>
         <p id="description">He is the <span id="role">Founder</span> of <span id="officesp">Yogeshwar Sanitary Wares</span>and handles the business of products like Cement,Roof Sheets and Pidhiya.</p>
         <a href=""><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
         <a href=""><i class="fa fa-envelope" aria-hidden="true"></i></a>
         <a href=""><i class="fa fa-instagram" aria-hidden="true"></i></a>
         `
  }
  if(i==2)
  {
    teaminfo.innerHTML = `
    
     <h1 id="Name"><span>Mr.</span> Dipak Thobhani</h1>
         <span id="role">Co-Founder</span>
         <p id="description">He is the <span id="role">Co-Founder</span> of <span id="officesp">Yogeshwar Sanitary Wares</span> and deals with the customer by sharing his excellent knowledge of the products to the customers </p>
         <a href=""><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
         <a href=""><i class="fa fa-envelope" aria-hidden="true"></i></a>
         <a href=""><i class="fa fa-instagram" aria-hidden="true"></i></a>`
  }
  
  else if(i==3)
  {
    teaminfo.innerHTML =
   `  <h1 id="Name"><span>Mr.</span> Hiren Kundaliya</h1>
         <span id="role">Founder</span>
         <p id="description">He is the <span id="role">Founder</span> of <span id="officesp">Jalaram Tiles and Sanitary</span>and has expertise in explaining the customer the best combinations of the Tiles and also takes care of the Finance and the transactions with the companies.</p>
         <a href=""><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
         <a href=""><i class="fa fa-envelope" aria-hidden="true"></i></a>
         <a href=""><i class="fa fa-instagram" aria-hidden="true"></i></a>`
  }
  else if(i==4)
  {
    teaminfo.innerHTML =
   
     `<h1 id="Name"><span>Mr.</span> Savan Thobhani</h1>
         <span id="role">Co-Founder</span>
         <p id="description">He is the Youngest person in our team, the <span id="role">Co-Founder</span> of <span id="officesp">Jalaram Tiles and Sanitary</span>and handles the business of products like Tiles,doors,etc.</p>
         <a href=""><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
         <a href="mailto:ashit.kundaliya@gmail.com"><i class="fa fa-envelope" aria-hidden="true"></i></a>
         <a href=""><i class="fa fa-instagram" aria-hidden="true"></i></a>`
  }
  
  
  
})


window.onscroll = ()=>{
  if(window.scrollY > 200){
    // navbar.style.position = "fixed"
  }
  else{
    navbar.style.position = "intial"
  }
}
