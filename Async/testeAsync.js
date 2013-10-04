	function teste()
	{
		for (var i=0;i<1000;i++) 
		{
			var elemento = document.getElementById('contador');
			elemento.innerHTML = "ola" + elemento.innerHTML + "</br>";
			
		}
	}