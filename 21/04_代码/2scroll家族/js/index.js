window.onscroll = function(e){
	//console.log(e)
	//console.log(window)
	//console.log(window.scrollY)
	console.log(window.pageYOffset)
	var navDiv = document.querySelector("#nav")
	if(window.pageYOffset>300){
		navDiv.style.position = "fixed"
		navDiv.style.top = 0;
		navDiv.style.left = 0;
	}else{
		navDiv.style.position = "static"
		navDiv.style.top = 0;
		navDiv.style.left = 0;
	}
}

window.onload = function(){
	var huojianDiv = document.querySelector("#huojian")
	huojianDiv.onclick = function(){
		var y = window.pageYOffset;
		var step = 100;
		var interId = setInterval(function(){
			step = step + 10;
			y = y - step
			if(y<=0){
				y = 0
				clearInterval(interId)
			}
			scrollTo(0,y)
		},10)
		
	}
}
