function swiper(selector,imgList){
	var swiperDiv = document.querySelector(selector)
	
	
	function createSwiperHtml(imgList){
		var imgListDiv = document.createElement("div")
		var circleListDiv = document.createElement("div")
		imgListDiv.className = "imgList";
		circleListDiv.className = "circleList";
		imgList.forEach(function(item,i){
			if(i==0){
				imgListDiv.innerHTML = imgListDiv.innerHTML + '<div class="imgItem active" style="background-image: url('+item+');"></div>'
				circleListDiv.innerHTML = circleListDiv.innerHTML + '<div id="c'+i+'" class="circleItem active"></div>'
						
			}else{
				imgListDiv.innerHTML = imgListDiv.innerHTML + '<div class="imgItem" style="background-image: url('+item+');"></div>'
				circleListDiv.innerHTML = circleListDiv.innerHTML + '<div id="c'+i+'" class="circleItem"></div>'
						
			}
			
		})
		
		swiperDiv.appendChild(imgListDiv)
		swiperDiv.appendChild(circleListDiv)
		swiperDiv.innerHTML += `<div class="btnList">
								<div class="btn pre"><</div>
								<div class="btn next">></div>
							</div>`;
	}
	
	createSwiperHtml(imgList)
	
	var preBtn = document.querySelector(selector+" .pre")
	var nextBtn = document.querySelector(selector+" .next")
	var imgListDivs = document.querySelectorAll(selector+" .imgItem") 
	var circleDivs = document.querySelectorAll(selector+" .circleItem")
	var currentImg = 0;
	
	console.log(imgListDivs)
	nextBtn.onclick = function(){
		currentImg  = currentImg + 1;
		if(currentImg>=imgListDivs.length){
			currentImg = 0;
		}
		renderNumImg()
		
	}
	
	preBtn.onclick = function(){
		currentImg  = currentImg - 1;
		if(currentImg<0){
			currentImg = imgListDivs.length-1;
		}
		renderNumImg()
	}
	
	
	function renderNumImg(){
		//初始化,将所有的img列表的active去掉
		imgListDivs.forEach(function(item,i){
			item.classList.remove("active")
		})
		circleDivs.forEach(function(item,i){
			item.classList.remove("active")
		})
		
		
		imgListDivs[currentImg].classList.add('active') 
		circleDivs[currentImg].classList.add('active')
	}
	
	circleDivs.forEach(function(item,i){
		item.onclick = function(){
			//var index =parseInt(item.id[1]) 
			//currentImg = index;
			currentImg = i;
			renderNumImg()
		}
	})
	
	
	
}