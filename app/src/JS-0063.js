A: while (true) {
  /*comment*/ break A
}

X: switch (a) {
  case 0:
    A: while (b) break A
}

A: while (a) break A

A: while (true) {
  break /**/ A
}
