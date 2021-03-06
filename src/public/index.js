$(document).ready(function(){
  var questions = [];
  var asked = [];
  var audio = new Audio('/public/ex.mp3');
  $.ajax({
    url: '/public/questions.json'
  })
  .done(function(data){
    questions = data;
  })

  $('#button').on('click', function(){
    if(questions.length !== asked.length){
      do {
        var q = getRand();
      } while ($.inArray(q.q, asked) !== -1);

      audio.play();
      asked.push(q.q);
      $('#main').text(q.q);
      $('#to').text(q.to + ':');
    }
  });

  function getRand(){
    return questions[Math.floor(Math.random()*questions.length)];
  }
});
