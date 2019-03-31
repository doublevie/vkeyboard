var vk = {
  elements : '[vkey]',
  current : null,
  keyboard : '.vkeyboard',
  key: function(el) {

  },
  keys : [['1','2','3','4','5','6','7','8','9','-','=','<-'] ,
['tab','a','z','e','r','t','y','u','i','o','p','$'] ,
['Lock','q','s','d','f','g','h','j','k','l','m','ù'] ,
['UP','w','x','c','v','b','n',',',';',':','!',''] ,
['.com','alt','space','Options'] ],
  init : function(){
var els = document.querySelectorAll(vk.elements) ,inht ='' ,subht;
for (var i = 0; i < els.length; i++) {
  els[i].addEventListener('click',function(){
    vk.current = this;
  });
}
for (var i = 0; i < vk.keys.length; i++) {
 inht+= '<ul>';
 subht = vk.keys[i];
 console.log(subht);
 inht+= '<li class="c1'+i+'">'+subht[0]+'</li>';
  for (var j = 1; j < subht.length; j++) {
inht+= '<li onclick="vk.key(this)">'+subht[j]+'</li>';
console.log(subht[j]);
  }
  inht+= '</ul>';
}
document.querySelector('.vkeyboard').innerHTML = inht;
console.log(inht);


  }
}



vk.init()
