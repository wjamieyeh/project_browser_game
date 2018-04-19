$(function () {

//click to start the Scene
  $('#start').click(function () {
    $(this).css('z-index', '0');
    startGame();
  });

//changes the color of "start" button on hover
  $('#start').hover(function () {
    $(this).css('color', 'rgb(252, 131, 0, 1)');
  }, function () {
    $(this).css('color', '');
  });

//creating bird1 and bird2 elements
  let $bird1 = $('<img>', {id: 'bird1', src: 'img/birdFlying1.gif', height: '50px', width: '50px'});
  let $bird2 = $('<img>', {id: 'bird2', src: 'img/birdFlying1.gif', height: '50px', width: '50px'});
  var birdSound = new Audio("birdChirp.mp3");
  const shotSound = new Audio("gunShot.mp3");

//create variables for score element, score point element, initial lives
  let $scoreText = $('<div>', {id: 'scoreText', text: 'Score:'});
  let $score = $('<div>', {id: 'score', text: '0'});
  let lives = 2;
  let keepScore;
  //let ifClicked;

  //create score display elements on html
  $('#start').after($scoreText);
  $scoreText.css({"position": "absolute", "z-index": "2", "top": "170px","left": "300px", "font-size": "2em"});

  $('#scoreText').after($score);
  $score.css({"position": "absolute", "z-index": "2", "top": "173px","left": "370px", "font-size": "2em"});

//function that makes the bird move, detect missed bird, minus lives
  function birdAnimate(speed) {
      $bird1.animate({"marginLeft": "-900px", "opacity": "0"}, speed, function () {
      birdLeftEnd = $(this).css("marginLeft");
      alert("bird missed");
      lives--;
      //console.log(lives);
    });
  }

//function when bird is clicked - create ifClick flag, changes img of the bird, and stops animation
// add 100 points, update scoring on screen
  function clickAction () {
    $bird1.click( function () {
      //ifClicked = true;
      $(this).data('clicked', true);

      if ($('#bird1').data('clicked')) {
        shotSound.play();
        $(this).attr('src', 'img/birdShot.png');
        $(this).css('transform', 'rotate(60deg)');
        $(this).stop().animate({"marginTop": "200px"}, 1000).fadeOut(); //and then disappear..
        keepScore+=100;
        $('#score').text(`${keepScore}`);
      } else {
        // $('#start').after($bird2);
        // $bird2.css({"position": "relative", "z-index": "2", "bottom": "300px", "left": "1150px", "cursor": "url('https://cdn4.iconfinder.com/data/icons/miscellaneous-icons-3/200/pointer_cross_aim-32.png'), auto"});
        // $bird2.animate(10000);
      }
    });
  };


//function to initiate game
  function startGame() {
    //console.log('startGame is working');
    keepScore = 0;

    //not looping bird sound
    birdSound.loop = true;
    birdSound.play();

    $('#start').after($bird1);
    $bird1.css({"position": "relative", "z-index": "2", "bottom": "300px", "left": "1150px", "cursor": "url('https://cdn4.iconfinder.com/data/icons/miscellaneous-icons-3/200/pointer_cross_aim-32.png'), auto"});
    // $bird1.css(`{"bottom": "${canvasHeight}"}`);


    birdAnimate(10000);
    clickAction();

  }

    // if (ifClick !== true && birdLeftEnd === "-1180px") {
    //   alert("bird missed");
    // }

    // setInterval(function () {
    //   console.log('interval2 is working');
    // $('#bird1').animate({"marginLeft": "500px", "marginBottom": "200px"}, 10000, "swing");
    //
    // }, 500);


//     setInterval(function () {
//   console.log('interval2 is working');
//   $('#bird1').animate({"marginLeft": "400px", "marginTop": "200px"}, 1000) function (){
//     $(this).delay(500).animate({"marginLeft": "0px", "marginTop": "0"}, 1000);
//
//   })
// }, 500);


  // let $backWidth = $('#background').width();
  // let $backHeight = $('#background').height();



  // let Bird = function(height, width) {
  //   this.height = height;
  //   this.width = width;
  // };
  //
  // let birdArray = [];

//for each iteration of the for loop, create a new instance of a bird with randomized height width (starting position)
  // for (let i = 0; i < 5; i++) {
  //     let $duck = $('<img>', {src: 'img/birdFlying1.gif', width: '50', height: '50'});
  //
  //     //how to get the width of the background
  //     //randomBottom = Math.random() * (max - min)
  //     $('#start').after($duck);
  //     $duck.css({"position": "relative", "z-index": "1", "bottom": "300px","left": "400px", "cursor": "url('https://cdn4.iconfinder.com/data/icons/miscellaneous-icons-3/200/pointer_cross_aim-32.png'), auto"});
  // }



    // function getRandomInt(min, max) {
    //   return Math.floor(Math.random() * (max - min + 1)) + min;
    // };

    // let canvasWidth = getRandomInt(250, 1150) + "px";
    // let canvasHeight = getRandomInt(0, 500) + "px";
    // console.log(`width is ${canvasWidth}`);

});
