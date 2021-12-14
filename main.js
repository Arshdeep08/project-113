function preload()
{
}

function setup()
{
    canvas = createCanvas(650, 500);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw()
{
    image(video, 0, 0, 650, 500);
    tint(tint_color);

    fill(0, 150, 0);
    stroke(100, 0, 0);
    rect(50, 50, 550, 20);
    rect(600, 50, 20, 400);
    rect(50, 450, 550, 20)
    rect(50, 50, 20, 400)


    fill(150, 0, 0);
    stroke(0, 100, 0);
    circle(50, 50, 50);
    circle(600, 50, 50);
    circle(50, 450, 50);
    circle(600, 450, 50);
}

function take_snapshot()
{
    save('student_name.png');
}

function filter_tint()
{
    tint_color = document.getElementById('color_name').value;
}