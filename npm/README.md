# RANDOM-TENDENTIOUS
Create a random function for a particular type of output. Receiving a function to transform the random and a limit too, return a ready function to use.

## A list of functions saved in the module
simply set the parameter f a string with your name. If you want to use a specific function, just set the function to f.
```javascript
E, PI, LN2, LN10, LOG2E, SQRT2, LOG10E, SQRT1_2, abs, acos, acosh,
asin, asinh, atan, atan2, atanh, cbrt, ceil, clz32, cos, cosh, exp,
expm1, floor, fround, hypot, imul, log, log10, log1p, log2, round,
sign, sin, sinh, sqrt, tan, tanh, trunc
```

## I will help if you have any difficulty =)
Contact me by [github:heyderpd](https://github.com/heyderpd). I'll be glad to help you.

## Thanks for [npm~lucasmreis](https://www.npmjs.com/~lucasmreis)

Example:
```javascript
tendentious = require('random-tendentious')

const randomCos = tendentious({f: 'cos'})

const limitsA = [1, 10]
const randomLimits = tendentious({l: limitsA})

const fx = x => 2 * x + 10
const limitsB = [21, 42]
const randomFx = tendentious({f: fx, l: limitsB})
```
