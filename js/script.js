/*
-	Project 2 'dbms tutorial'
-	All Right Rerserved
-	Designed by Mayank
-	index.html
*/
try
{
    /*
        -------------------
        [ NAVBAR FUNCTION ] ===========================================
        -------------------
    */ 
    let navbtn = document.getElementById('nav-btn');

    let aside = document.getElementById('aside');
    
    var active = true; // navbar activation key
    
    // nav open function
    function nav_open()
    {
        aside.style.display = "block";
        navbtn.innerHTML = "&#10096;";
        active = true;
    }
    // nav close function
    function nav_close()
    {
        aside.style.display = "none";
        navbtn.innerHTML = "&#9776;";
        active = false;
    }
    /*
        NavBar Button function : onclick if active so close else open
    */ 
    navbtn.onclick = () => (active)? nav_close() : nav_open();
    /*
        ----------------------
        [ SEARCHBAR FUNCTION ] ========================================
        ----------------------
    */
    let searchbar = document.getElementById('searchbar');

    let asidelinks = document.querySelectorAll('#aside  a');
    // search function : on key press loop to match value to anchor
    searchbar.onkeyup = () => {
        
        let search = searchbar.value.toUpperCase();

        for(let i = 0; i < asidelinks.length; i++)
        {
            let a = asidelinks[i];

            let data = a.textContent || a.innerHTML;

            if(data.toUpperCase().indexOf(search) > -1)
            {
                asidelinks[i].style.display = "block";
            }
            else
            {
                asidelinks[i].style.display = "none";
            }
        }
    }
    // -----------------------------------------------------------------
    let lead = document.querySelectorAll('#aside  .lead');

    searchbar.onfocus = () => lead.forEach(i => i.style.display = "none");
    
    searchbar.onblur = () => lead.forEach(i => i.style.display = "block");
}
catch(error)
{
    console.log(error);   
}