$(function () {

  //click to start the Scene
  $('#start').click(function () {
    $(this).css('z-index', '0');
    $('h1').addClass('animated rubberBand');
    $('#round1').addClass("animated bounce");
    startGame();
  });

  //changes the color of "start" button on hover
  $('#start').hover(function () {
    $(this).css('color', 'rgb(252, 131, 0, 1)');
  }, function () {
    $(this).css('color', '');
  });

  //Round 1
  let $round = $('<div>', {id: 'round', text: 'Round 1', height: '50px', width: '300px'});
  $('#start').after($round);
  $round.css({"position": "absolute",
              "z-index": "1",
              "font-size": "30px",
              "font-weight": "bold",
              "bottom": "450px",
              "left": "700px",
              "cursor": "url('https://cdn4.iconfinder.com/data/icons/miscellaneous-icons-3/200/pointer_cross_aim-32.png'), auto"});

  //creating bird1, bird2, and bird3
  let $bird1 = $('<img>', {id: 'bird1', src: 'img/birdFlying1.gif', height: '50px', width: '50px'});
  $('#start').after($bird1);
  $bird1.css({"position": "relative",
              "z-index": "1",
              "bottom": "350px",
              "left": "1150px",
              "cursor": "url('https://cdn4.iconfinder.com/data/icons/miscellaneous-icons-3/200/pointer_cross_aim-32.png'), auto"});

  let $bird2 = $('<img>', {id: 'bird2', src: 'img/birdFlying1.gif', height: '50px', width: '50px'});
  $bird2.css({"position": "relative",
              "z-index": "1",
              "bottom": "200px",
              "left": "1150px",
              "cursor": "url('https://cdn4.iconfinder.com/data/icons/miscellaneous-icons-3/200/pointer_cross_aim-32.png'), auto"});

  let $bird3 = $('<img>', {id: 'bird3', src: 'img/birdFlying1.gif', height: '50px', width: '50px'});
  $bird3.css({"position": "relative",
              "z-index": "1",
              "bottom": "400px",
              "left": "1150px",
              "cursor": "url('https://cdn4.iconfinder.com/data/icons/miscellaneous-icons-3/200/pointer_cross_aim-32.png'), auto"});


  var birdSound = new Audio("sound/birdChirp.mp3");
  var shotSound = new Audio("sound/gunShot.mp3");


  //create variables for score element, score point element, initial lives
  let $scoreText = $('<div>', {id: 'scoreText', text: 'Score:'});
  let $score = $('<div>', {id: 'score', text: '0'});
  let lives = 2;
  let keepScore = 0;
  let roundCount = 1;


  //create score display elements on html
  $('#start').after($scoreText);
  $scoreText.css({"position": "absolute", "z-index": "2", "top": "170px","left": "300px", "font-size": "2em"});

  $('#scoreText').after($score);
  $score.css({"position": "absolute", "z-index": "2", "top": "173px","left": "370px", "font-size": "2em"});


  //function that makes the bird move, detect missed bird, minus lives
  function birdAnimate(bird, speed) {
      bird.animate({"marginLeft": "-900px", "opacity": "0"}, speed, function () {
      //birdLeftEnd = $(this).css("marginLeft");
      lives--;
      alert("bird missed");
      if (lives < 1) {
        $('#round').text('You were too slow...Click Me To Try Again!');
        $('#round').css('left', '600px');
        $('#round').click(function () {
          window.location = 'https://git.generalassemb.ly/pages/yehw002/project1_browser_game/';
        })
      }
    });
  }

  //function when bird is clicked, changes img of the bird, and stops animation
  // add 100 points, update scoring on screen
  function clickAction (bird) {
    bird.click(function () {
      $(this).data('clicked', true);

      if ($(this).data('clicked')) {

        shotSound.src = "sound/gunShot.mp3";
        shotSound.play();
        $(this).attr('src', 'img/birdShot.png');
        $(this).css('transform', 'rotate(75deg)');
        $(this).stop().animate({"marginTop": "200px"}, 1000).fadeOut(); //and then disappear..
        keepScore+=100;
        $('#score').text(`${keepScore}`);
        $('#score').addClass('animated tada');
        $('#score').css('color', 'red');

        if ($(this).attr('id') === $bird1.attr('id')) {
          setTimeout (function () {
            alert('You Passed Round 1!');
              $('#round').text('Round 2');
              $('#round').addClass('animated tada'); startGame()}, 1000);
              roundCount++;
        };

        if ($(this).attr('id') === $bird2.attr('id')) {
          setTimeout (function () {
            alert('You Passed Round 2!');
              $('#round').text('Round 3');
              $('#round').addClass('animated tada'); startGame()}, 1000);
              roundCount++;
        };

        if ($(this).attr('id') === $bird3.attr('id')) {
          setTimeout (function () {
            alert('You Passed Round 3!');
              $('#round').text('You are really good at this!');
              $('#round').addClass('animated tada'); startGame()}, 1000);
              roundCount++;
        };
      };
    });
  };

//function to initiate game
  function startGame() {

      if (roundCount === 1) {
        birdSound.play();
        birdAnimate($bird1, 15000);
        clickAction($bird1);
        $bird1.data('clicked', false);
      }

      if (roundCount === 2) {
        birdSound.src = "sound/birdChirp.mp3";
        birdSound.play();
        $('#start').after($bird2);
        birdAnimate($bird2, 10000);
        clickAction($bird2);
      }

      if (roundCount === 3) {
        birdSound.src = "sound/birdChirp.mp3";
        birdSound.play();
        $('#start').after($bird3);
        birdAnimate($bird3, 5000);
        clickAction($bird3);
      }
  };
});
