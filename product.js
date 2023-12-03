//Selecting Side Navbar, Menuicon

var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")

menuicon.addEventListener("click", function () {
    sidenav.style.right = 0
})

closenav.addEventListener("click", function () {
    sidenav.style.right = "-50%"
})

//Product searchbar
var productcontainer=document.getElementById("productcontainer")
var search=document.getElementById("search")
var productlist=productcontainer.querySelectorAll("div")
search.addEventListener("keyup",function(){
    // Get entered value and convert to uppercase
    var enteredvalue=this.value.toUpperCase()

    // Iterate through product list
    for(i=0;i<productlist.length;i++)
    {
        // Get product name and convert to uppercase
        var productname=productlist[i].querySelector("h1").textContent

        // Check if product name contains entered value
        if(productname.toUpperCase().indexOf(enteredvalue)<0)
        {
            // Hide product if not match found
            productlist[i].style.display="none"
        }
        else{
            // Show product if match found
            productlist[i].style.display="block"
        }
    }
})