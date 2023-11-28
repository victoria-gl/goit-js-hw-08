
    const iframe = document.querySelector("#vimeo-player");
    // console.log(iframe);
    const player = new Vimeo.Player(iframe);
    // console.log(player);

   player.insertAdjacentHTML("beforeend", onPlay(iframe));
   player.addEventListener("click", handleClick);
   

    const onPlay = function(event) {
            duration: 61.857
            percent: 0.049
            seconds: 3.034
    };
    
    player.on('play', onPlay);