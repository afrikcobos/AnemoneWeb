document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('anemone-video');
    const btnPlay = document.getElementById('btn-play');
    const btnPause = document.getElementById('btn-pause');
    const btnMute = document.getElementById('btn-mute');     // Icono con sonido (down.png)
    const btnUnmute = document.getElementById('act-btn');   // Icono sin sonido (up.png)

    if (video) {
        btnPlay?.addEventListener('click', () => {
            video.muted = false;
            video.volume = 1.0;
            video.play();
            
            btnUnmute?.classList.add('isHidden');
            btnMute?.classList.remove('isHidden');
        });


        btnPause?.addEventListener('click', () => {
            video.pause();
        });

        btnMute?.addEventListener('click', () => {
            video.muted = true;
            btnMute.classList.add('isHidden');
            btnUnmute?.classList.remove('isHidden');
        });


        btnUnmute?.addEventListener('click', () => {
            video.muted = false;
            video.volume = 1.0;
            btnUnmute.classList.add('isHidden');
            btnMute?.classList.remove('isHidden');
        });
    }
});