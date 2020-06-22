function getAjax(httpUrl,callbackFn){
	//1创建xhr对象
	var xhr = new XMLHttpRequest()
	//2设置请求的方法和路径,"GET","POST"
	//"GET",表单提交的数据会拼接到请求的路径里,效率高
	//"POST",会将表单的数据放置到请求的body里,数据大,安全
	xhr.open("GET",httpUrl)
	//xhr.open("POST","http://127.0.0.1:8848/1ajax/abc.txt")
	//xhr.open("GET","http://127.0.0.1:8848/1ajax/abc.txt?username=admin&password=123456")xhr.open("GET","http://127.0.0.1:8848/1ajax/abc.txt?username=admin&password=123456")
	//3发送数据
	xhr.send()
	//xhr.send("username=admin&password=123456")
	//4监听后台是否返回数据
	xhr.onreadystatechange = function(){
		if(xhr.status==200&&xhr.readyState==4){
			/* console.log("成功获取数据")
			console.log(xhr)
			console.log(xhr.status)
			console.log(xhr.readyState) */
			//5处理数据
			callbackFn(xhr)
			
			//status
		    //readyState
		}
		
		
	}
}

