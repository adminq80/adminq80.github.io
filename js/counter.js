var myInterval = setInterval(tick, 400);
var d=0;
var joined = new Date(Date.UTC(2013, 10, 26, 5));

function tick() {
	var now = Date.now();
        var dt = Math.floor((now - joined.getTime()) / 1000);
	d = dt;
    document.getElementById("seconds").innerHTML = dt;
}
