function getData(name, serial, ip){
		//http://51.141.125.202/service.php?prefix=p
				
				var xhttp = new XMLHttpRequest();
				xhttp.onreadystatechange = function(){
					if(this.readyState == 4 && this.status == 200)
					{
						
						var DataObj = JSON.parse(this.responseText);
						document.getElementById("data").innerHTML = DataObj.value.data;
					}				
				
				};
				
				xhttp.open("GET", "[http://%3cip]http://<ip address>/service.php?prefix=p" + Name + "&name_data" + Serial + "$serial_data" + IP + "$ip_data");
				xhttp.send();		
			
			}