document.addEventListener('DOMContentLoaded', function () {
    var images = document.querySelectorAll('.gallery li');
    var body = document.querySelector('body');

    function viewFullScreen () {
        for (var i = 0; i <images.length; i++) {
            images[i].addEventListener('click', function (e) {
                var imgSource =  this.firstElementChild.getAttribute('src');

                var fullImage = document.createElement('div');
                var fullScreen = body.appendChild(fullImage);
                fullScreen.classList.add('fullScreen');

                var img = document.createElement('img');
                var fullImg = fullScreen.appendChild(img);
                fullImg.setAttribute("src", imgSource);

                var button = document.createElement('button');
                var closeButton = fullScreen.appendChild(button);
                closeButton.classList.add("close");
                closeButton.innerText = 'X';

                function closeFullScreen() {
                    closeButton.addEventListener('click', function (e) {
                        fullScreen.parentNode.removeChild(fullScreen);
                    })
                }
                closeFullScreen();
            })
        }
    }
    viewFullScreen();
});