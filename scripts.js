// first idea

function rpsGame(yourChoice) {
    console.log(yourChoice);
    let humanChoice = yourChoice.id;
    console.log("human choice:", humanChoice);
    let computerChoice = Math.floor(Math.random() * 3);
    console.log("computer choice:", computerChoice);


    // this is if-else statement for showing message
    let msg;
    if (humanChoice == computerChoice) {
        msg = "This is Tie";
        console.log(msg);
    }
    else if (humanChoice == 0 && computerChoice == 1) {
        msg = "You lost";
        console.log(msg);
    }
    else if (humanChoice == 1 && computerChoice == 0) {
        msg = "You won!";
        console.log(msg);

    }
    else if (humanChoice == 0 && computerChoice == 2) {
        msg = "You won!";
        console.log(msg);

    }
    else if (humanChoice == 2 && computerChoice == 0) {
        msg = "You lost";
        console.log(msg);

    }
    else if (humanChoice == 1 && computerChoice == 2) {
        msg = "You lost";
        console.log(msg);

    }
    else if (humanChoice == 2 && computerChoice == 1) {
        msg = "You won!"
        console.log(msg);

    }
    // // else {

    // //     document.getElementById('newone1').remove();
    // //     let imge= document.createElement('img');
    // //     imge.src="stone.png";
    // //     document.getElementById('schnge0').appendChild(imge);
    // //     imge.style.height="150px";
    // //     imge.style.width="150px";
    // //     imge.setAttribute('class','image1');
    // //     imge.setAttribute('id','0');
    // //     imge.addEventListener('click',function(){
    // //         rpsGame(this);
    // //     });
    // //     // document.getElementById('newone1').src = "http://127.0.0.1:5500/stone.png";
    // //     // document.getElementById('newone1').setAttribute('class','image1');
    // //     // document.getElementById('newone1').setAttribute('id','0');

    // //     document.getElementById('chnge').remove();
    // //     let imge2= document.createElement('img');
    // //     imge2.src="http://127.0.0.1:5500/paper.png";
    // //     document.getElementById('schnge').appendChild(imge2);
    // //     imge2.style.height="150px";
    // //     imge2.style.width="150px";
    // //     imge2.setAttribute('class','image1');
    // //     imge2.setAttribute('id','1');
    // //     imge2.addEventListener('click',function(){
    // //         rpsGame(this);
    // //     });
    // //     // document.getElementById('newtwo2').src = "http://127.0.0.1:5500/scissors.png";
    // //     // document.getElementById('newtwo2').setAttribute('class','image1');
    // //     // document.getElementById('newtwo2').setAttribute('id','2');
    // //     document.getElementById('newtwo2').remove();
    // //     let imge3= document.createElement('img');
    // //     imge3.src="http://127.0.0.1:5500/scissors.png";
    // //     document.getElementById('schnge2').appendChild(imge3);
    // //     imge3.style.height="150px";
    // //     imge3.style.width="150px";
    // //     imge3.setAttribute('class','image1');
    // //     imge3.setAttribute('id','2');
    // //     imge3.addEventListener('click',function(){
    // //         rpsGame(this);
    // //     });

    //     console.log("u clicked");
    // }


    // setup for human choice
    let h = document.getElementById(humanChoice);
    let ran = document.getElementById('0'); //i hv taken this for set attribute coz i hv to put human choice here
    document.getElementById('0').src = h.src;
    document.getElementById('0').style.boxShadow = "10px 10px 40px blue";
    ran.setAttribute('id', 'newone1');
    ran.setAttribute('class', 'newone');
    console.log(h.src);


    // setup for computer choice
    let co = document.getElementById(computerChoice);
    let ran2 = document.getElementById('2');

    // IF computerChoice is 0 then it was print paper image at computer side ...so i hv to take this action
    if (computerChoice == 0) {
        document.getElementById('2').src = "http://127.0.0.1:5500/stone.png";
        document.getElementById('2').style.boxShadow = "10px 10px 40px red";
        ran2.setAttribute('id', 'newtwo2');
        ran2.setAttribute('class', 'newtwo');
    }
    else {
        document.getElementById('2').src = co.src;
        document.getElementById('2').style.boxShadow = "10px 10px 40px red";
        ran2.setAttribute('id', 'newtwo2');
        ran2.setAttribute('class', 'newtwo');

    }

    // this is for Middle text u won lost etc
    document.getElementById('1').remove();
    document.getElementById('chnge').innerText = msg;
    document.getElementById('chnge').style.fontSize = "40px";

    if (humanChoice == 1 && computerChoice == 0 || humanChoice == 0 && computerChoice == 2 || humanChoice == 2 && computerChoice == 1) {
        document.getElementById('chnge').style.color = "green";
    }
    else if (humanChoice == 0 && computerChoice == 1 || humanChoice == 2 && computerChoice == 0 || humanChoice == 1 && computerChoice == 2) {
        document.getElementById('chnge').style.color = "red";
    }

    document.getElementById('cmsg').innerText = "Kindly Reload this page before Playing it again";

}


// newone1.addEventListener('click',function(){
//     console.log("u clicked");
// })
