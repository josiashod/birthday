(function(){
    const $headers = document.querySelectorAll('.side')
    const $slides = document.querySelectorAll('.slide')

    let clicked = false

    $headers.forEach((el, i) => {
        el.addEventListener('click', function(e){
            if ($headers[0].classList.contains('active')) {
                $headers[0].classList.remove('active')
            } else if ($headers[1].classList.contains('active')) {
                $headers[0].classList.remove('active')
            }

            if ($headers.item(0) === el) {
                if ($slides[0].classList.contains('active')) {
                    $slides[0].classList.remove('active')
                }

                if (!$slides[1].classList.contains('active')) {
                    $slides[1].classList.add('active')
                }
            }else{
                if ($slides[1].classList.contains('active')) {
                    $slides[1].classList.remove('active')
                }
                if (!$slides[0].classList.contains('active')) {
                    $slides[0].classList.add('active')
                }
            }

            el.classList.add('active')

            clicked = true
        })

        el.addEventListener('mouseover', function(e){
            if (!$headers[0].classList.contains('active') && !$headers[1].classList.contains('active')) {
                el.classList.add('hover')
            }
        })

        el.addEventListener('mouseleave', function(e){
            if (el.classList.contains('hover')) {
                el.classList.remove('hover')
            }
        })
    });

    window.onload = function () {
        show = document.getElementById('show')
        show.addEventListener('click', function(){
            document.querySelector('.content').classList.add('hide')
            document.querySelector('.message').classList.add('show')
            document.getElementById('second-help').style.display= "none"
        })

        closeMessage = document.getElementById('close')
        closeMessage.addEventListener('click', function(){
            document.querySelector('.content').classList.remove('hide')
            document.querySelector('.message').classList.remove('show')
            document.getElementById('second-help').style.display= "block"
        })
    }
   
})()