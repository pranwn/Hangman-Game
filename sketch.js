var bg 
var ropeImg, headImg, arm1Img, arm2Img, leg1Img, leg2Img,shirtImg,spacesImg
var aImg, pImg,p2Img, lImg, eImg
var rope, head,arm1, arm2, leg1, leg2, shirt, spaces
var a,p,p2,l,e
var aButton,bButton,cButton,dButton,eButton,fButton,gButton,hButton,iButton
var jButton,kButton,lButton,mButton,nButton,oButton,pButton,qButton,rButton
var sButton,tButton,uButton,vButton,wButton,xButton,yButton,zButton
var chance = 0; 
var finalWin = 0;
var lose, letterWin,gameWin
var alphabetImg

var aWrong = false
var bWrong = false
var cWrong = false
var dWrong = false
var eWrong = false
var fWrong = false
var gWrong = false
var hWrong = false
var iWrong = false
var jWrong = false
var kWrong = false
var lWrong = false
var mWrong = false
var nWrong = false
var oWrong = false
var pWrong = false
var qWrong = false
var rWrong = false
var sWrong = false
var tWrong = false
var uWrong = false
var vWrong = false
var wWrong = false
var xWrong = false
var yWrong = false
var zWrong = false



// secret word: apple
// hints: at the top of screen using html button
//      - it is a fruit
//      - what keeps the doctor away if you eat one a day 
// create html buttons inplace of the letters 
//have all sprites in place and use if statements to make them apprear if guessed 
// wrong(1. rope, 2. head, 3. shirt, 4. arm1, 5. arm2, 6.leg1 , 7.leg2) 
//or correct word(show the letters that they guessed right(a,p,l,e))
//at the end show sweet alert saying whether you lost all 7 of your chances and lost
//or you found the word and won(create variable chances)
//maybe add music

function preload(){
    bg = loadImage("bg2.png")
    ropeImg = loadImage("rope.png")
    headImg = loadImage("head.png")
    arm1Img = loadImage("arm1.png")
    arm2Img = loadImage("arm2.png")
    leg1Img = loadImage("leg1.png")
    leg2Img = loadImage("leg2.png")
    shirtImg = loadImage("shirt.png")
    alphabetImg = loadImage("alphabet.png")
    spacesImg = loadImage("spaces.png")
    aImg = loadImage("a.png")
    pImg = loadImage("p.png")
    p2Img = loadImage("p2.png")
    lImg = loadImage("l.png")
    eImg = loadImage("e.png")
    lose = loadSound("lose.mp3")
    letterWin = loadSound("letterwin.mp3")
    gameWin = loadSound("finalwin.mp3")
    wrongImg = loadImage("wrong.png")
    bwrongImg = loadImage("wrong.png")
    cwrongImg = loadImage("wrong.png")
    dwrongImg = loadImage("wrong.png")
    ewrongImg = loadImage("wrong.png")
    fwrongImg = loadImage("wrong.png")
    gwrongImg = loadImage("wrong.png")
    hwrongImg = loadImage("wrong.png")
    iwrongImg = loadImage("wrong.png")
    jwrongImg = loadImage("wrong.png")
    kwrongImg = loadImage("wrong.png")
    lwrongImg = loadImage("wrong.png")
    mwrongImg = loadImage("wrong.png")
    nwrongImg = loadImage("wrong.png")
    owrongImg = loadImage("wrong.png")
    pwrongImg = loadImage("wrong.png")
    qwrongImg = loadImage("wrong.png")
    rwrongImg = loadImage("wrong.png")
    swrongImg = loadImage("wrong.png")
    twrongImg = loadImage("wrong.png")
    uwrongImg = loadImage("wrong.png")
    vwrongImg = loadImage("wrong.png")
    wwrongImg = loadImage("wrong.png")
    xwrongImg = loadImage("wrong.png")
    ywrongImg = loadImage("wrong.png")
    zwrongImg = loadImage("wrong.png")

}

function setup(){
    createCanvas(1430,700)
    rope = createSprite(160,210)
    rope.addImage("rope", ropeImg)
    rope.scale = 0.3

    head = createSprite(160,240)
    head.addImage("head", headImg)
    head.scale = 0.2
    head.visible = false;

    arm1 = createSprite(85,350)
    arm1.addImage("arm1", arm1Img)
    arm1.scale = 0.15
    arm1.visible = false;

    shirt = createSprite(160,340)
    shirt.addImage("shirt", shirtImg)
    shirt.scale = 0.25
    shirt.visible = false;

    arm2 = createSprite(210,355)
    arm2.addImage("arm2", arm2Img)
    arm2.scale = 0.2
    arm2.visible = false;

    leg1 = createSprite(130,450)
    leg1.addImage("leg1", leg1Img)
    leg1.scale = 0.09
    leg1.visible = false;

    leg2 = createSprite(210,450)
    leg2.addImage("leg2", leg2Img)
    leg2.scale = 0.09
    leg2.visible = false;

    spaces = createSprite(800,300)
    spaces.addImage("spaces", spacesImg)
    spaces.scale = 0.4

    a = createSprite(670,275)
    a.addImage("a", aImg)
    a.scale = 0.04
    a.visible = false;

    p = createSprite(735,275)
    p.addImage("p", pImg)
    p.scale = 0.019
    p.visible = false;

    p2 = createSprite(800,275)
    p2.addImage("p2", p2Img)
    p2.scale = 0.019
    p2.visible = false;

    l = createSprite(865,275)
    l.addImage("l", lImg)
    l.scale = 0.018
    l.visible = false;

    e = createSprite(930,275)
    e.addImage("e", eImg)
    e.scale = 0.0185
    e.visible = false;

    //buttons
    aButton = createButton('A')
    aButton.position(600,310)
    aButton.class("button")

    bButton = createButton('B')
    bButton.position(660,310)
    bButton.class("button")

    cButton = createButton('C')
    cButton.position(720,310)
    cButton.class("button")

    dButton = createButton('D')
    dButton.position(780,310)
    dButton.class("button")

    eButton = createButton('E')
    eButton.position(840,310)
    eButton.class("button")

    fButton = createButton('F')
    fButton.position(900,310)
    fButton.class("button")

    gButton = createButton('G')
    gButton.position(960,310)
    gButton.class("button")

    hButton = createButton('H')
    hButton.position(540,360)
    hButton.class("button")

    iButton = createButton('I')
    iButton.position(590,360)
    iButton.class("button")

    jButton = createButton('J')
    jButton.position(650,360)
    jButton.class("button")

    kButton = createButton('K')
    kButton.position(710,360)
    kButton.class("button")

    lButton = createButton('L')
    lButton.position(770,360)
    lButton.class("button")

    mButton = createButton('M')
    mButton.position(830,360)
    mButton.class("button")

    nButton = createButton('N')
    nButton.position(890,360)
    nButton.class("button")

    oButton = createButton('O')
    oButton.position(950,360)
    oButton.class("button")

    pButton = createButton('P')
    pButton.position(1010,360)
    pButton.class("button")

    qButton = createButton('Q')
    qButton.position(600,420)
    qButton.class("button")

    rButton = createButton('R')
    rButton.position(660,420)
    rButton.class("button")

    sButton = createButton('S')
    sButton.position(720,420)
    sButton.class("button")

    tButton = createButton('T')
    tButton.position(780,420)
    tButton.class("button")

    uButton = createButton('U')
    uButton.position(840,420)
    uButton.class("button")

    vButton = createButton('V')
    vButton.position(900,420)
    vButton.class("button")

    wButton = createButton('W')
    wButton.position(960,420)
    wButton.class("button")

    xButton = createButton('X')
    xButton.position(720,480)
    xButton.class("button")

    yButton = createButton('Y')
    yButton.position(780,480)
    yButton.class("button")

    zButton = createButton('Z')
    zButton.position(840,480)
    zButton.class("button")

    //hint buttons
    hint = createElement("h3")
    hint.position(1250,50)
    hint.class("hintText")

    hint1 = createButton("HINT!")
    hint1.position(1100,60)
    hint1.class("hintbutton")

    hint_2 = createElement("h3")
    hint_2.position(1250,105)
    hint_2.class("hintText")

    hint2 = createButton("HINT!")
    hint2.position(1100,115)
    hint2.class("hintbutton")

}



function draw(){
    background(bg)
    textSize(16)
    fill("black")
    text("LETTERS USED: ", 1050,500)
    
    image(alphabetImg,1180,470,200,180)

    aButton.mousePressed(()=>{
    aWrong = true
    finalWin +=1
    a.visible = true
    letterWin.play()})

    if(aWrong == true){
        image(wrongImg, 1180,480,35,35)
    }

    bButton.mousePressed(()=>{chance += 1
    bWrong = true
    lose.play()})

    if(bWrong == true){
        image(bwrongImg, 1200,480,35,35)
    }

    cButton.mousePressed(()=>{chance += 1
    cWrong = true
    lose.play()})

    if(cWrong == true){
        image(cwrongImg, 1235,480,35,35)
    }

    dButton.mousePressed(()=>{chance += 1
    dWrong = true
    lose.play()})

    if(dWrong == true){
        image(dwrongImg, 1265,480,35,35)
    }

    eButton.mousePressed(()=>{finalWin +=1
    e.visible = true
    eWrong = true
    letterWin.play()})

    if(eWrong == true){
        image(ewrongImg, 1295,480,35,35)
    }

    fButton.mousePressed(()=>{chance += 1
    fWrong = true
    lose.play()})

    if(fWrong == true){
        image(fwrongImg, 1320,480,35,35)
    }

    gButton.mousePressed(()=>{chance += 1
    gWrong = true
    lose.play()})

    if(gWrong == true){
        image(gwrongImg, 1355,480,35,35)
    }

    hButton.mousePressed(()=>{chance += 1
    hWrong = true
    lose.play()})

    if(hWrong == true){
        image(hwrongImg, 1175,525,35,35)
    }

    iButton.mousePressed(()=>{chance += 1
    iWrong = true
    lose.play()})

    if(iWrong == true){
        image(iwrongImg, 1205,525,35,35)
    }
    
    jButton.mousePressed(()=>{chance += 1
    jWrong = true
    lose.play()})

    if(jWrong == true){
        image(jwrongImg, 1235,525,35,35)
    }

    kButton.mousePressed(()=>{chance += 1
    kWrong = true
    lose.play()})

    if(kWrong == true){
        image(kwrongImg, 1265,525,35,35)
    }

    lButton.mousePressed(()=>{finalWin +=1
    lWrong = true
    l.visible = true
    letterWin.play()})

    if(lWrong == true){
        image(lwrongImg, 1290,525,35,35)
    }

    mButton.mousePressed(()=>{chance += 1
    mWrong = true
    lose.play()})

    if(mWrong == true){
        image(mwrongImg, 1325,525,35,35)
    }

    nButton.mousePressed(()=>{chance += 1
    nWrong = true
    lose.play()})

    if(nWrong == true){
        image(nwrongImg, 1355,525,35,35)
    }

    oButton.mousePressed(()=>{chance += 1
    oWrong = true
    lose.play()})

    if(oWrong == true){
        image(owrongImg, 1175,570,35,35)
    }

    pButton.mousePressed(()=>{finalWin +=1
    pWrong = true
    p.visible = true
    p2.visible = true
    letterWin.play()})

    if(pWrong == true){
        image(pwrongImg, 1205,570,35,35)
    }

    qButton.mousePressed(()=>{chance += 1
    qWrong = true
    lose.play()})

    if(qWrong == true){
        image(qwrongImg, 1235,570,35,35)
    }

    rButton.mousePressed(()=>{chance += 1
    rWrong = true
    lose.play()})
    
    if(rWrong == true){
        image(rwrongImg, 1265,570,35,35)
    }

    sButton.mousePressed(()=>{chance += 1
    sWrong = true
    lose.play()})

    if(sWrong == true){
        image(swrongImg, 1295,570,35,35)
    }

    tButton.mousePressed(()=>{chance += 1
    tWrong = true
    lose.play()})

    if(tWrong == true){
        image(twrongImg, 1325,570,35,35)
    }

    uButton.mousePressed(()=>{chance += 1
    uWrong = true
    lose.play()})

    if(uWrong == true){
        image(uwrongImg, 1350,570,35,35)
    }

    vButton.mousePressed(()=>{chance += 1
    vWrong = true
    lose.play()})

    if(vWrong == true){
        image(vwrongImg, 1205,613,35,35)
    }

    wButton.mousePressed(()=>{chance += 1
    wWrong = true
    lose.play()})

    if(wWrong == true){
        image(wwrongImg, 1235,613,35,35)
    }

    xButton.mousePressed(()=>{chance += 1
    xWrong = true
    lose.play()})

    if(xWrong == true){
        image(xwrongImg, 1265,613,35,35)
    }

    yButton.mousePressed(()=>{chance += 1
    yWrong = true
    lose.play()})

    if(yWrong == true){
        image(ywrongImg, 1293,613,35,35)
    }    

    zButton.mousePressed(()=>{chance += 1
    zWrong = true
    lose.play()})

    if(zWrong == true){
        image(zwrongImg, 1323,613,35,35)
    } 

    hint1.mousePressed(()=>{hint.html("It is a fruit.")})
    hint2.mousePressed(()=>{hint_2.html("What keeps the doctor away if you eat one a day?")})
    if(chance == 1){
        head.visible = true;
    }
    if(chance == 2){
        shirt.visible = true;
    }
    if(chance == 3){
        arm1.visible = true;
    }
    if(chance == 4){
        arm2.visible = true;
    }
    if(chance == 5){
        leg1.visible = true;
    }
    if(chance == 6){
        leg2.visible = true;
        gameOver();
    }
    if(finalWin == 4){
        win()
    }

    

    drawSprites()
}

function gameOver() {
    swal(
      {
        title: `Game Over!!!`,
        text: "You lost all your chances!",
        confirmButtonText: "Play Again"
      },
      function(isConfirm) {
        if (isConfirm) {
          location.reload();
        }
      }
    );
}

function win() {
    swal(
      {
        title: `You found the word!`,
        text: "Now you know what keeps the doctor away :)",
        imageUrl:"https://media.istockphoto.com/id/537597129/vector/clapping-cheerful-emoticon.jpg?s=612x612&w=0&k=20&c=-nhAfApPFAckT0BkOKT1jsF1PYDSholNt_0EOSJAUrU=",
        imageSize: "100x100"
      },
    );
}
