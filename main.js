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

  //have the flying object show up and start flying
  // setInterval(function () {
  //   console.log('interval1 is working');
  // }, 5000)



  function startGame() {
    console.log('startGame is working');

    //create an img tag with flying bird object and insert after clicking start.
    let $bird1 = $('<img>', {id: 'bird1', src: 'img/birdFlying1.gif'});
    $('#start').after($bird1);
    $bird1.css({"position": "relative", "z-index": "2", "bottom": "300px","left": "400px", "width": "50px", "height": "50px", "cursor": "url('https://cdn4.iconfinder.com/data/icons/miscellaneous-icons-3/200/pointer_cross_aim-32.png'), auto"});

    // $('#bird1').click(function () {
    //   $(this).animate({marginLeft: "500px"});
    // })

    setInterval(function () {
      //console.log('interval2 is working');
      $('#bird1').animate({"marginLeft": "400px"}, 1000, "swing", function (){
        $(this).delay(500).animate({"marginLeft": "0px"}, 1000, "swing");

      })
    }, 500);


  }










 //set interval
 //create bird
 //
  // for (let i = 0; i < 5; i++) {
  //     let $bird = $('<img>', {src: 'img/birdFlying1.gif', width: '50', height: '50'});
  //     $('#start').after($bird);
  //     $bird.css({"position": "relative", "z-index": "1", "bottom": "300px","left": "400px", "cursor": "url('https://cdn4.iconfinder.com/data/icons/miscellaneous-icons-3/200/pointer_cross_aim-32.png'), auto"});
  // }




  // function createBird () {
  //   console.log('createBird is working');
  //   let
  // }
  //add event listener to click





});
