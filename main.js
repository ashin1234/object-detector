img = "";
status = "";
object = [];
function preload() {
    img = loadImage('dog_cat.jpg');

}
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}
function draw() {
    image(img, 0, 0, 640, 420);
    if (status != "") {
        for (i = 0; i < object.length; i++) {
            document.getElementById("status").innerHTML = "Status : Object Detected";
            fill("#FA3232");
            percent = floor(object[i].confidence * 100);
            text(object[i].label + " " + percent + "%", object[i].x + 15, object[i].y + 15);
            noFill();
            stroke("#d61d1d");
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
        }
    }

}
function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results) {
    if (error) {
        console.log(errore);
    }
    console.log(results);
    object = results;
}