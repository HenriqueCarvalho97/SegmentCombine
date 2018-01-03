var current = 0,
	last = 0;

function changeSlide(x) {
	var slideList = document.getElementsByClassName("item-li");
	var imageList = document.getElementsByClassName("image-item");
	for (var i = 0; i < slideList.length; i++) {
		if (slideList[i].classList.contains("active-slider")) {
			slideList[i].classList.toggle("active-slider");
			imageList[i].classList.toggle("active");
		}
	}
	slideList[x].setAttribute("class", "item-li active-slider");
	imageList[x].classList.toggle("active");
	current = x;
}

function goPrevNext(x) {
	var imageList = document.getElementsByClassName("image-item");
	var slideList = document.getElementsByClassName("item-li");
	imageList[current].classList.toggle("active");
	slideList[current].classList.toggle("active-slider");
	if (x == "next") {
		if (current < imageList.length - 1) {
			imageList[current + 1].classList.toggle("active");
			slideList[current + 1].classList.toggle("active-slider");
			current++;
		} else {
			imageList[0].classList.toggle("active");
			slideList[0].classList.toggle("active-slider");
			current = 0;
		}
	} else {
		if (current > 0) {
			imageList[current - 1].classList.toggle("active");
			slideList[current - 1].classList.toggle("active-slider");
			current--;
		} else {
			imageList[imageList.length - 1].classList.toggle("active");
			slideList[imageList.length - 1].classList.toggle("active-slider");
			current = imageList.length - 1;
		}
	}
}
