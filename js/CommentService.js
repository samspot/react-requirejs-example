define(function(require){
  var str = 'hello comment service';
  return {
    sayHello: function(){
      alert(str);
    },
    load: function(){
      var rawComments = localStorage.getItem('comments');
      var data = [];
      if(rawComments){
        data = JSON.parse(localStorage.getItem('comments'));
      }
      return data;
    },
    save: function(comments){
      localStorage.setItem('comments', JSON.stringify(comments));
    }
  }
});