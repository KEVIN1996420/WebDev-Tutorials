$(document).ready(function(){

    // check if window loads the dom content
    // window.addEventListener('DOMContentLoaded', (event) => {
    //    alert("Hello. Enjoy browsing this site.")
    // })
    

    // Step 1 is show the roster
    $('.hide-roster-1').on("click",function(){
        $(".container-1").toggle()
        $(this).toggleClass('grd1')
    })

    // Step 2 is highlight the days schedule
    // Monday-friday - school/work week
    $('.btn-mon').click(function(){
        $('.normal-1').toggleClass('zoomed');
        $('.normal-1').toggleClass('btn-day-click')
    })

    $('.btn-tues').click(function(){
        $('.normal-2').toggleClass('zoomed');
        $('.normal-2').toggleClass('btn-day-click')
    })

    $('.btn-wed').click(function(){
        $('.normal-3').toggleClass('zoomed');
        $('.normal-3').toggleClass('btn-day-click')
    })

    $('.btn-thu').click(function(){
        $('.normal-4').toggleClass('zoomed');
        $('.normal-4').toggleClass('btn-day-click')
    })

    $('.btn-fri').click(function(){
        $('.normal-5').toggleClass('zoomed');
        $('.normal-5').toggleClass('btn-day-click')
    })

    // Step three is to enlarge td on hover
    // Done by using css

    // example of using the find method first, find doesnt rely on queryselector all, best use is with an id to make it fast.
    // $("button").hover(function(){
    //     $("#hover-btn").find(".grd-btn").first().toggle(); //change the css display to none
    // })
    
    // step 4
    //fix the tabledata popup to keep the background absolute
    // it should have a smooth fade in and out and blurred background
    









/////////////////////////////////////////////////////

    $('.hide-roster-2').on("click",function(){
        $(".container-2").toggle()
        $(this).toggleClass('grd2')
    })
    $('.btn-gr2').click(function(){
        $('.normal-2').toggleClass('zoomed')
    });


    $('.hide-roster-3').on("click",function(){
        $(".container-3").toggle()
        $(this).toggleClass('grd3')
    })
    $('.btn-gr1').click(function(){
        $('.normal').toggleClass('zoomed')
        
    });

    $('.hide-roster-4').on("click",function(){
        $(".container-4").toggle()
        $(this).toggleClass('grd4')
    })

    $('.hide-roster-5').on("click",function(){
        $(".container-5").toggle()
        $(this).toggleClass('grd5')
    })

    $('.hide-roster-6').on("click",function(){
        $(".container-6").toggle()
        $(this).toggleClass('grd6')
    })

    $('.hide-roster-7').on("click",function(){
        $(".container-7").toggle()
        $(this).toggleClass('grd7')
    })

    $('.hide-roster-8').on("click",function(){
        $(".container-8").toggle()
        $(this).toggleClass('grd8')
    })

    $('.hide-roster-9').on("click",function(){
        $(".container-9").toggle()
        $(this).toggleClass('grd9')
    })

    $('.hide-roster-10').on("click",function(){
        $(".container-10").toggle()
        $(this).toggleClass('grd10')
    })

    $('.hide-roster-11').on("click",function(){
        $(".container-8").toggle()
        $(this).toggleClass('grd11')
    })

    $('.hide-roster-12').on("click",function(){
        $(".container-12").toggle()
        $(this).toggleClass('grd12')
    })
    
    

    
        
    
});