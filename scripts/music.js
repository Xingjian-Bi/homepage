var music = document.getElementById("music");
var button = document.getElementById("musicbt");
button.onclick = function () {
	if (music.paused) {
		music.play();
		// button.classList.remove("fa-solid");
		button.classList.remove("fa-play");

		button.classList.add("fa-pause");
	} else {
		music.pause();
		button.classList.remove("fa-pause");
		button.classList.add("fa-play");
	}
};
