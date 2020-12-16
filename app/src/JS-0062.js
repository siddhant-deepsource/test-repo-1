var a = function() {}[/**/'bind'](b)

var a = function() {}/**/.bind(b)

var a = (() => { return 1; }).bind(b)

var x = function () {
    foo();
}.bind(bar);

var x = (() => {
    foo();
}).bind(bar);

var x = (() => {
    this.foo();
}).bind(bar);

var x = function () {
    (function () {
      this.foo();
    }());
}.bind(bar);
