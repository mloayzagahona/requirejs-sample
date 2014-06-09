define(['app/hello', '../foo', '../ext/bar'], function(hello, foo, bar) {
  hello.print();
  foo.bar();
  bar.baz();
});
