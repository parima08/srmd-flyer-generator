var GOLD = "#DAAB02"
$(function(){
	console.log("hello");
	var canvas = $("#canvas")[0];
	console.log(canvas); 
	var context = canvas.getContext('2d');
	context.imageSmoothingEnabled = false;
	var img = new Image();
	img.onload = function(){
         drawImageScaled(img, context)
     };
     img.src = "img/london_flyer.jpg"; 

     $("#btn-download").on("click", function(){
     	console.log("The button is being clicked"); 
     	var dataURL = canvas.toDataURL('image/jpeg', 1.0);
    	z
    	$("#btn-download").attr("href", dataURL);
    	$("#btn-download").attr("download", "SSY");
     })

});

function drawImageScaled(img, ctx) {
   	var canvas = ctx.canvas ;
   	image_ratio = img.height/img.width; 
   	canvas_width_shld_be = 500; 
   	canvas_height_shld_be = image_ratio * canvas_width_shld_be; 
   	ctx.canvas.width = canvas_width_shld_be; 
   	ctx.canvas.height = canvas_height_shld_be; 
	ctx.imageSmoothingEnabled = false;
	ctx.drawImage(img, 0,0, canvas.width, canvas.height)

	//DATE
	ctx.font = "12pt Noto Serif";
	ctx.fillStyle = GOLD;
	ctx.textAlign = "right";
	ctx.fillText("7th November", canvas.width - 212, canvas.height - 212, 400);
  	
	//TIMINGS
	ctx.font = "12pt Noto Serif";
	ctx.fillStyle = "white"
	ctx.textAlign = "left";
	ctx.fillText("8:00pm to 10:00pm", canvas.width - 200, canvas.height - 212, 400);

	//LOCATION1
	ctx.font = "12pt Noto Serif";
	ctx.fillStyle = "white"
	ctx.textAlign = "right";
	ctx.fillText("BAPS Shri Swaminarayan Mandir", canvas.width - 50, canvas.height - 170, 400);
	//LOCATION2
	ctx.fillText("105-119 Brentfield Road", canvas.width - 50, canvas.height - 150, 400);

	//LOCATION3
	ctx.fillText("Neasden, London NW10 8LD", canvas.width - 50, canvas.height - 130, 400);

   // var vRatio =  canvas.height / img.height  ;
   // var ratio  = Math.min ( hRatio, vRatio );
   // var centerShift_x = ( canvas.width - img.width*ratio ) / 2;
   // var centerShift_y = ( canvas.height - img.height*ratio ) / 2;  
   // ctx.clearRect(0,0,canvas.width, canvas.height);
   // ctx.drawImage(img, 0,0, img.width, img.height,
   //                    centerShift_x,centerShift_y,img.width, img.height);  
}

function downloadCanvasAsImage(canvas){
	var dataURL = canvas.toDataURL('image/jpeg', 1.0);
    $("#btn-download").attr("href", dataURL);
    $("#btn-download").attr("download", "updatedflyer"); 
}