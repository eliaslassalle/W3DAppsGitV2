var spinning = false;

function spin()
{
	spinning = !spinning;
	document.getElementById('can__RotationTimer').setAttribute('enabled', spinning.toString());
        document.getElementById('bottle__RotationTimer').setAttribute('enabled', spinning.toString());
        document.getElementById('cup__RotationTimer').setAttribute('enabled', spinning.toString());
        document.getElementById('glass__RotationTimer').setAttribute('enabled', spinning.toString());
}


function stopRotation()
{
	spinning = false;
	document.getElementById('can__RotationTimer').setAttribute('enabled', spinning.toString());
        document.getElementById('bottle__RotationTimer').setAttribute('enabled', spinning.toString());
        document.getElementById('cup__RotationTimer').setAttribute('enabled', spinning.toString());
        document.getElementById('glass__RotationTimer').setAttribute('enabled', spinning.toString());
}

function playSound() {
        var audio = document.getElementById("openCan");
        audio.play();
      }

function setModelSize(){
    x3d_element = document.getElementById('x3d_elementCan');
    x3d_element.style.width = "100%";
    x3d_element.style.height = "300px";
    x3d_element = document.getElementById('x3d_elementBottle');
    x3d_element.style.width = "100%";
    x3d_element.style.height = "300px";
    x3d_element = document.getElementById('x3d_elementCup');
    x3d_element.style.width = "100%";
    x3d_element.style.height = "300px";
    x3d_element = document.getElementById('x3d_elementGlass');
    x3d_element.style.width = "100%";
    x3d_element.style.height = "300px";





}

var zoomed = false;
function toggleZoom(button) {

        var new_width;
        var new_height;
        var x3d_element1;
        var x3d_element2;
        var x3d_element3;
        var x3d_element4;

        x3d_element1 = document.getElementById('x3d_elementCan');
        x3d_element2 = document.getElementById('x3d_elementBottle');
        x3d_element3 = document.getElementById('x3d_elementCup');
        x3d_element4 = document.getElementById('x3d_elementGlass');

        if (zoomed) {
                new_width = "100%";
                new_height = "300px";
                button.innerHTML = "Zoom";
        } else {
                new_width = "100%";
                new_height = "700px";
                button.innerHTML = "Unzoom";
        }

        zoomed = !zoomed;

        x3d_element1.style.width = new_width;
        x3d_element1.style.height = new_height;
        x3d_element2.style.width = new_width;
        x3d_element2.style.height = new_height;
        x3d_element3.style.width = new_width;
        x3d_element3.style.height = new_height;
        x3d_element4.style.width = new_width;
        x3d_element4.style.height = new_height;
}

var lightOn = true;

function headLight()
{
	lightOn = !lightOn;
	document.getElementById('can__headLight').setAttribute('headlight', lightOn.toString());
        document.getElementById('bottle__headLight').setAttribute('headlight', lightOn.toString());
        document.getElementById('cup__headLight').setAttribute('headlight', lightOn.toString());
        document.getElementById('glass__headLight').setAttribute('headlight', lightOn.toString());

	console.log(lightOn);
}

function wireFrame()
{
	var e = document.getElementById('x3d_elementCan');
	e.runtime.togglePoints(true);
	e.runtime.togglePoints(true);

        var e = document.getElementById('x3d_elementBottle');
	e.runtime.togglePoints(true);
	e.runtime.togglePoints(true);

        var e = document.getElementById('x3d_elementCup');
	e.runtime.togglePoints(true);
	e.runtime.togglePoints(true);

        var e = document.getElementById('x3d_elementGlass');
	e.runtime.togglePoints(true);
	e.runtime.togglePoints(true);
}
