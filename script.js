		function createStory()
		{
			var a = document.getElementById("in1").value;
			var b = document.getElementById("in2").value;
			var c = document.getElementById("in3").value;
			var d = document.getElementById("in4").value;
			var e = document.getElementById("in5").value;
			var f = document.getElementById("in8").value;
			var j = document.getElementById("in10").value;
			var k = document.getElementById("in11").value;
			var l = document.getElementById("in12").value;

			document.getElementById("storyscript").style.display="block";
			document.getElementById("storyArea").style.display="none";

			for (i=0;i<8;i++)
			{
				document.getElementsByClassName("in1class")[i].innerHTML=a;
			}
			for (i=0;i<9;i++)
			{
				document.getElementsByClassName("in2class")[i].innerHTML=b;
			}
			// document.getElementById("in1a").innerHTML = x;
			document.getElementById("in3a").innerHTML=c;
			document.getElementById("in4a").innerHTML=d;
			document.getElementById("in4b").innerHTML=d;
			document.getElementById("in4c").innerHTML=d;
			document.getElementById("in5a").innerHTML=e;
			if (document.getElementById("in6").checked)			
			{
				document.getElementById("in67").innerHTML='Yes';
			}else{document.getElementById("in67").innerHTML='No';}
			if (document.getElementById("in7").checked)
			{
				document.getElementById("in67").innerHTML='No';
			}else{document.getElementById("in67").innerHTML='Yes';}
			
			document.getElementById("in89").innerHTML=f;
			// document.getElementById("in67").innerHTML=f;
			// document.getElementById("in67").innerHTML=g;
			document.getElementById("in10a").innerHTML=j;
			document.getElementById("in11a").innerHTML=k;
			document.getElementById("in12a").innerHTML=l;

		}
		function newStory()
		{
			document.getElementById("storyArea").style.display="block";
			document.getElementById("storyscript").style.display="none";
		}
		function oriStory()
		{
  			document.getElementById("storyscript").style.display="none";
  			document.getElementById("storyHere").innerHTML = localStorage.getItem("os");
		}
		// function oriStory()
		// 	{
		// 	var s =  document.getElementById("storyscript").innerHTML;
		// 	document.getElementById("storyHere").innerHTML = s;
		// 	}