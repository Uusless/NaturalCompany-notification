var sound = new Audio('src/js/sound/audio.mp3')

console.log('Natural [NOTIFICATION] | APP.JS | Starter')
window.addEventListener("message", function(event) {

    if (event.data.ac == 'notification') {
        sound.play();
        sound.volume = 0.65;
        sound.loop = false;
    $('.notification').append(`<div class="contnoti">
    <p class="titlenoti">${event.data.ti}
        <div class="linenoti">
            <div class="barnoti"></div>
        </p>
    </div>
    <i id="iconnoti" class="fas fa-bell"></i>
    <p class="infonoti">${event.data.inf}</p>
    </div>`)
    
    var pr = 0 
    const progressbar = setInterval(function(){
        pr += 10
    $('.barnoti').animate({
        width: pr + "%"
    }, 350)
    if (pr > 500) {
        clearInterval(progressbar);
        setTimeout(() => {
            $('.contnoti').fadeOut("slow", function () {
                $('.contnoti').remove()
                $('.barnoti').remove()
                sound.pause();
            })
        }, event.data.pr);
        }
    })
    }
})



   
