window.addEventListener('load',()=> {

    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    let painting = false;

    function startPosition(e) {
        painting =true;

        draw(e);

        //fadeOut();//

        //window.clearTimeout(myvar);//
        
    }

    function endPosition() {
        painting =false;
        //var myvar = window.setTimeout(function(){ alert("Hello"); },1000);//
        ctx.beginPath();
    }

    function draw(e) {
        if(!painting) return;
        
        ctx.lineWidth = 5;
        ctx.lineCap = 'round';
        ctx.strokeStyle = 'whilte';

        ctx.lineTo(e.clientX,e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX,e.clientY);

        

    }

    var timeoutInMiliseconds = 3000;
    var timeoutId; 
  
    function startTimer() { 
        // window.setTimeout returns an Id that can be used to start and stop a timer
        timeoutId = window.setTimeout(doInactive, timeoutInMiliseconds)
    }

    function resetTimer() { 
        window.clearTimeout(timeoutId)
        startTimer();
    }
  
    function doInactive(e) {
        // does whatever you need it to actually do - probably signs them out or stops polling the server for info
        alert("timeout");
                
        
        /*console.log(canvas.toDataURL());
        var link = document.createElement('a');
        link.download = 'download.png';
        link.href = canvas.toDataURL();
        link.click();
        link.delete;*/
          
                         

        //ctx.clearRect(0,0,canvas.width,canvas.height);//
    }
 
    function setupTimers () {
        //document.addEventListener("mousemove", resetTimer, false);//
        document.addEventListener("mousedown", resetTimer, false);
        //document.addEventListener("keypress", resetTimer, false);//
        //document.addEventListener("touchmove", resetTimer, false);//
     
        startTimer();
    }

    function fadeOut() {
        ctx.fillStyle = "rgba(255,255,255,0.1)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        setTimeout(fadeOut,200);
    }



    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", endPosition);
    canvas.addEventListener("mousemove", draw);

    setupTimers();
    //canvas.addEventListener("mouseup", setupTimers);//

});




