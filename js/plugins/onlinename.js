  for (  var i = 0;  i < 1000;  i++  ) {
 
	var playersRef = firebase.database().ref("map"+i);

	playersRef.orderByChild("name").on("child_added", function(data) {
	   console.log(data.val().name);
	});
  
	if (i > 1000) {
		i = 0
		console.log("i=0");
	}
}