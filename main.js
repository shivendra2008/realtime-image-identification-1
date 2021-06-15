function setup() {
    canvas = createCanvas(200, 200);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifiier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/gdfh99lFs/model.json',modelLoaded);
}

function modelLoaded() {
    console.log('Model Loaded!');
}

function draw(){
    image(video, 0, 0, 200, 200);
    classifiier.classify(video, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    }else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}