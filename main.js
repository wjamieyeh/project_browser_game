$(function () {

  //console.log('page is ready');

  $('#start').click(function () {
    $(this).css('z-index', '0');
    startGame();
  });

  $('#start').hover(function () {
    $(this).css('color', 'rgb(252, 131, 0, 1)');
  }, function () {
    $(this).css('color', '');
  });

  // function getRandomInt(min, max) {
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // };

  // let canvasWidth = getRandomInt(250, 1150) + "px";
  // let canvasHeight = getRandomInt(0, 500) + "px";
  // console.log(`width is ${canvasWidth}`);

  let $bird1 = $('<img>', {id: 'bird1', src: 'img/birdFlying1.gif', height: '50px', width: '50px'});
  let $bird2 = $('<img>', {id: 'bird1', src: 'img/birdFlying1.gif', height: '50px', width: '50px'});

  let $scoreText = $('<div>', {id: 'scoreText', text: 'Score:'});
  let $score = $('<div>', {id: 'score', text: '0'});


  function startGame() {
    //console.log('startGame is working');
    let lives = 2;
    let keepScore = 0;
    // let x = Math.floor( Math.random() * 900 );
    // console.log(x);

    $('#start').after($bird1);
    $bird1.css({"position": "relative", "z-index": "2", "bottom": "300px", "left": "1150px", "cursor": "url('https://cdn4.iconfinder.com/data/icons/miscellaneous-icons-3/200/pointer_cross_aim-32.png'), auto"});
    // $bird1.css(`{"bottom": "${canvasHeight}"}`);

    $('#start').after($scoreText);
    $scoreText.css({"position": "absolute", "z-index": "2", "top": "170px","left": "300px", "font-size": "2em"});

    $('#scoreText').after($score);
    $score.css({"position": "absolute", "z-index": "2", "top": "173px","left": "370px", "font-size": "2em"});


    $bird1.animate({"marginLeft": "-1180px", "opacity": "0"}, 10000, function () {
      birdLeftEnd = $(this).css("marginLeft");

            // alert("bird missed");
            lives = lives - 1;
            console.log(lives);
    });



    $bird1.click( function () {
      ifClick = true;
      $(this).attr('src', 'img/birdShot.png');
      $(this).stop().animate({"marginTop": "200px"});
      keepScore+=100;
      $('#score').text(`${keepScore}`);

    });

      let ifClick;

      // if (ifClick !== true && birdLeftEnd === "-1180px") {
      //   alert("bird missed");
      // }

  }


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


});
