function LcSwiper(selector,imgList){
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
	
	//原本全局需要用到的数据，需要放置到对象的属性上
	this.preBtn = document.querySelector(selector+" .pre")
	this.nextBtn = document.querySelector(selector+" .next")
	this.imgListDivs = document.querySelectorAll(selector+" .imgItem") 
	this.circleDivs = document.querySelectorAll(selector+" .circleItem")
	this.currentImg = 0;
	var that = this;
	//console.log(imgListDivs)
	this.nextBtn.onclick = function(){
		that.forword();
	}
	
	this.preBtn.onclick = function(){
		that.back()
	}
	this.circleDivs.forEach(function(item,i){
		item.onclick = function(){
			that.go(i)
		}
	})
	
}


LcSwiper.prototype.renderNumImg = function(){
		//初始化,将所有的img列表的active去掉
		this.imgListDivs.forEach(function(item,i){
			item.classList.remove("active")
		})
		this.circleDivs.forEach(function(item,i){
			item.classList.remove("active")
		})
		
		
		this.imgListDivs[this.currentImg].classList.add('active') 
		this.circleDivs[this.currentImg].classList.add('active')
}
LcSwiper.prototype.go = function(i){
	this.currentImg = i;
	this.renderNumImg()
}
LcSwiper.prototype.forword = function(){
	this.currentImg  = this.currentImg + 1;
	if(this.currentImg>=this.imgListDivs.length){
		this.currentImg = 0;
	}
	this.renderNumImg()
}
LcSwiper.prototype.back = function(){
	this.currentImg  = this.currentImg - 1;
	if(this.currentImg<0){
		this.currentImg = this.imgListDivs.length-1;
	}
	this.renderNumImg()
}