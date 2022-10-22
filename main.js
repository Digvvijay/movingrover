cv=document.getElementById("cv");
ctx=cv.getContext("2d");
nmbi=["1000ML0044630220405119E01_DXXX.jpg","1.jpg","2.jpg","3.jpg"];
rn=Math.floor(Math.random()*4);
rover_width=100;
rover_height=100;
rover_x=10;
rover_y=10;
background_img=nmbi[rn];
rover_img="rover.png";



function add()
{
    bg=new Image();
    bg.onload=upload_background;
    bg.src=background_img;

    r=new Image();
    r.onload=upload_rover;
    r.src=rover_img;
}

function upload_background()
{
    ctx.drawImage(bg,0,0,cv.width,cv.height);
}

function upload_rover()
{
    ctx.drawImage(r,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
    keypressed=e.keyCode;
    console.log(keypressed);
    if (keypressed=="37")
    {
        Left();
        console.log("Left");
    }

    if (keypressed=="38")
    {
        Up();
        console.log("Up");
    }

    if (keypressed=="39")
    {
        Right();
        console.log("Right");
    }

    if (keypressed=="40")
    {
        Down();
        console.log("Down");
    }


}

function Up()
{
    if (rover_y>=0)
    {
        rover_y=rover_y-10;

        console.log("when up arrow key pressed,x="+rover_x+",y="+rover_y);

        upload_background();
        upload_rover();
    }
}

function Down()
{
    if(rover_y<=500)
    {
        rover_y=rover_y+10;

        console.log("when up arrow key pressed,x="+rover_x+",y="+rover_y);

        upload_background();
        upload_rover();
    }
}

function Left()
{
    if(rover_x>=0)
    {
        rover_x=rover_x-10;
        console.log("when up arrow key pressed,x="+rover_x+",y="+rover_y);

        upload_background();
        upload_rover();
    }
}

function Right()
{
    if(rover_x<=700)
    {
        rover_x=rover_x+10;
        console.log("when up arrow key pressed,x="+rover_x+",y="+rover_y);

        upload_background();
        upload_rover();
    }
}
