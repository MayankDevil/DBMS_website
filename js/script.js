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
        let main = document.getElementById('main')
        let menu = document.getElementById('aside')

        
        var active = true;
        
        function menu_open(){
            menu.style.display = "block"
            main.style.gridTemplateColumns = "3fr 1fr"
            active = true
        }
        function menu_close(){
            menu.style.display = "none"
            main.style.gridTemplateColumns = "1fr"
            active = false
        }
        
        // menu button function
        document.getElementById('menu_button').onclick = () => (active)? menu_close() : menu_open()
        
        // menu anchor function
        document.querySelectorAll('#aside > a').forEach(i => { i.onclick = () => menu_close() })


    /*
        ----------------------
        [ SEARCHBAR FUNCTION ] ========================================
        ----------------------
    */
    let searchbar = document.getElementById('searchbar')

    let asidelinks = document.querySelectorAll('#aside  a')
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
    // [ Anchor Function ]----------------------------------------------

    asidelinks.forEach(index => index.onclick = () => nav_close());
    
    // [ Hide Function  ]-----------------------------------------------------------------
    
    let lead = document.querySelectorAll('#aside  .lead');

    searchbar.onfocus = () => lead.forEach(i => i.style.display = "none");
    
    searchbar.onblur = () => lead.forEach(i => i.style.display = "block");
}
catch(error)
{
    console.log(error);   
}
