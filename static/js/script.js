//var instance = M.Tabs.init(el, options);

  // Or with jQuery

  $(document).ready(function(){
    $('.tabs').tabs();
  });


var starClicked = false;

$(function() {

    $('.star').click(function() {

            $(this).children('.selected').addClass('is-animated');
            $(this).children('.selected').addClass('pulse');

            var target = this;

        setTimeout(function() {
                  $(target).children('.selected').removeClass('is-animated');
                  $(target).children('.selected').removeClass('pulse');
                
        }, 1000);

            starClicked = true;
          
    })

    $('.half').click(function() {
        if (starClicked == true) {
                  setHalfStarState(this)
                
        }
            $(this).closest('.rating').find('.js-score').text($(this).data('value'));

            $(this).closest('.rating').data('vote', $(this).data('value'));
            calculateAverage()
            console.log(parseInt($(this).data('value')));

          
    })

    $('.full').click(function() {
        if (starClicked == true) {
                  setFullStarState(this)
                
        }
            $(this).closest('.rating').find('.js-score').text($(this).data('value'));

            $(this).find('js-average').text(parseInt($(this).data('value')));

            $(this).closest('.rating').data('vote', $(this).data('value'));
            calculateAverage()

            console.log(parseInt($(this).data('value')));
          
    })

    $('.half').hover(function() {
        if (starClicked == false) {
                  setHalfStarState(this)
                
        }

          
    })

    $('.full').hover(function() {
        if (starClicked == false) {
                  setFullStarState(this)
                
        }
          
    })


})

function updateStarState(target) {
      $(target).parent().prevAll().addClass('animate');
      $(target).parent().prevAll().children().addClass('star-colour');

      $(target).parent().nextAll().removeClass('animate');
      $(target).parent().nextAll().children().removeClass('star-colour');

}

function setHalfStarState(target) {
      $(target).addClass('star-colour');
      $(target).siblings('.full').removeClass('star-colour');
      updateStarState(target)

}

function setFullStarState(target) {
      $(target).addClass('star-colour');
      $(target).parent().addClass('animate');
      $(target).siblings('.half').addClass('star-colour');

      updateStarState(target)

}

var sum = 0;
var count = 0;
function calculateAverage() {
  var average = 0

    $('.rating').each(function() {
        average += $(this).data('vote')
    });


    sum += average
    count += 1

    $('#ratingTxt').html('('+(average/ $('.rating').length).toFixed(1)+')')
}
var x = document.getElementById('thumb-down-dislike').innerHTML;
var i = document.getElementById('thumb-up-like').innerHTML;
var likeClicked = false;
var dislikeClicked = false;
// function likeClick() {
//     i++;
//     $('#thumb-up-like').html(i);
//     $('#target-like-icons').toggleClass('targeted-icons');
// }


// function unlikeClick() {
//     x++;
//     $('#thumb-down-dislike').html(x);
//     $('#target-dislike-icons').toggleClass('targeted-icons')
// }

function likeClick() {
    if(likeClicked===false && dislikeClicked===false){
        i++;
        $('#thumb-up-like').html(i);
        $('#target-like-icons').addClass('targeted-icons');
        likeClicked=true;
    }else if(likeClicked===true && dislikeClicked===false){
        i--;
        $('#thumb-up-like').html(i);
        $('#target-like-icons').removeClass('targeted-icons');
        likeClicked=false;
    }else if(likeClicked===false && dislikeClicked===true){
        i++;
        x--;
        
        $('#thumb-up-like').html(i);
        $('#thumb-down-dislike').html(x);
        
        $('#target-like-icons').addClass('targeted-icons');
        $('#target-dislike-icons').removeClass('targeted-icons');
        likeClicked=true;
        dislikeClicked=false;
    }   
}


function unlikeClick() {
    if(dislikeClicked===false && likeClicked===false){
        x++;
        $('#thumb-down-dislike').html(x);
        $('#target-dislike-icons').addClass('targeted-icons');
        dislikeClicked=true;
    }else if(dislikeClicked===true && likeClicked===false){
        x--;
        $('#thumb-down-dislike').html(x);
        $('#target-dislike-icons').removeClass('targeted-icons');
        dislikeClicked=false;
    }else if(dislikeClicked===false && likeClicked===true){
        i--;
        x++;
        
        $('#thumb-up-like').html(i);
        $('#thumb-down-dislike').html(x);
        
        $('#target-like-icons').removeClass('targeted-icons');
        $('#target-dislike-icons').addClass('targeted-icons');
        likeClicked=false;
        dislikeClicked=true;
    }  
}
