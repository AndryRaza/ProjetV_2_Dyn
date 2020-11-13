window.onload=function(){

    window.addEventListener('scroll', function () {

        if (window.scrollY >= ((document.getElementById('section_carousel').offsetTop-300))) {
            window.addEventListener('scroll', function(){
                document.getElementById('section_carousel').className += ' slide-in-bottom';
            })
        }

        if (window.scrollY >= ((document.getElementById('section_contact').offsetTop))) {
            window.addEventListener('scroll', function(){
                document.getElementById('section_contact').className += ' slide-in-left';
            })
        }
    });
}