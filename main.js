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

  let $bird1 = $('<img>', {id: 'bird1', src: 'img/birdFlying1.gif'});



  function startGame() {
    console.log('startGame is working');

    // let $bird1 = $('<img>', {id: 'bird1', src: 'img/birdFlying1.gif'});

    $('#start').after($bird1);
    $bird1.css({"position": "relative", "z-index": "2", "bottom": "300px","left": "900px", "width": "50px", "height": "50px", "cursor": "url('https://cdn4.iconfinder.com/data/icons/miscellaneous-icons-3/200/pointer_cross_aim-32.png'), auto"});


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



  setInterval(function () {
    $bird1.animate({
      "marginLeft": "400px",
      "marginTop": "200px"
    }, 5000)
  }, 500)


      $bird1.click( function () {
        // $(this).attr('src', 'img/birdShot.png');
        $bird1.explode();
        // console.log($(this));
        //$(this).css({"bottom": "100px"});
        //need to add something to pause
        //$(this).css('display', 'none');
      });

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


  // setInterval(function () {
  //   console.log('interval1 is working');
  // }, 5000)


});
