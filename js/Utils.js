
define([
  'showdown'
], function(
  Showdown
){
  return {
    converter: new Showdown.converter(),
    guid: function(){
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
          return v.toString(16);
      });
    },
    logObj: function(obj){            
      console.log("==log obj== : " + obj);
      for(key in obj){
        if(obj.hasOwnProperty(key)){
          console.log("logObj() " + key + ": " + obj[key]);
        }
      }
    },
    sayHello: function(){
      alert("Utils.js Hello");
    },
  }
});
