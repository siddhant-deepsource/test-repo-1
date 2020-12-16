function foo10() {
  if (foo) return bar
  else foo.bar()
}

function foo1() {
  if (true) {
    return x
  } else {
    return y
  }
}

function foo11() {
  if (foo) return bar
  else {
    ;[1, 2, 3].map(foo)
  }
}

function foo15() {
  if (foo) return bar
  else {
    baz()
  }
  qaz()
}
