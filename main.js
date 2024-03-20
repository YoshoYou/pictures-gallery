let up = document.querySelector(".up" );
// console.log( up );
let heightValue = document.documentElement.scrollHeight - document.documentElement.clientHeight;
let line = document.querySelector( ".line" );
document.onscroll = function ()
{
    let h = document.documentElement.scrollTop;
    // console.log( h );
    if ( h > 400 )
    {
        up.style.right = "30px";
    }
    else
    {
        up.style.right = "-100px";
    }
    
    line.style.width = `${ ( h / heightValue ) * 100 }%`;
}
up.onclick = function ()
{
    window.scrollTo( {
        top: "0",
        behavior: "smooth",
    } );
}

// couloring //

let number = document.querySelectorAll( ".s" );
let color = document.querySelectorAll( ".col" );
color.forEach( c =>
{
    c.onclick = () =>
    {
        let eleColor = c.dataset.color;
        localStorage.setItem( "background-color", eleColor );
        up.style.backgroundColor = localStorage.getItem( "background-color" );
        line.style.backgroundColor = localStorage.getItem( "background-color" );
        number.forEach( num =>
        {
            num.style.backgroundColor = `${ eleColor }`;
        })
        
    };
} );




// choose the background image //

let image = [ "image/4.jpg", "image/1.jpg", "image/3.webp", "image/5.jpg", "image/images.jpg" ];
let im = document.querySelectorAll( "img" );
// console.log( im );

let backImage = document.querySelector( ".landing .images" );
let  theNUm = -1;

number.forEach( ( num ) =>
{
    
    num.onclick = () =>
    {
        
        theNUm = num.dataset.id;
        console.log( theNUm );
        im.forEach( ( m ) =>
        {
            if ( m.dataset.id === theNUm )
            {
                m.style.display = "block";
                localStorage.setItem( "image-back", image[ theNUm - 1 ] );
            }
            else
            {
                m.style.display = "none";
            }
          
       

        } );
      
        
    };
} );

window.onload = () =>
{
    if ( localStorage.getItem( "background-color" ) !== "" )
{
        up.style.backgroundColor = localStorage.getItem( "background-color" );
        line.style.backgroundColor = localStorage.getItem( "background-color" );
        number.forEach( num =>
        {
        num.style.backgroundColor = localStorage.getItem( "background-color" );
        })

    }
    
    if ( localStorage.getItem( "image-back" ) !== "" )
    {
        im.forEach( ( m ) =>
        {
            if ( m.dataset.name === localStorage.getItem( "image-back" ) )
            {
                m.classList.add( 'block' );
            }
            else 
            {
                m.classList.add( 'none' );
                }
        } );
    }
}
