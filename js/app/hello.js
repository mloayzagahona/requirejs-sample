define(function() {
  return {
    print: function() {
      var elem = document.createElement('h1');
      elem.innerHTML = 'Hello, World!';

      var body = document.querySelector('body');
      body.appendChild(elem);
    }
  };
});
