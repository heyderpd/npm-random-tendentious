'use strict';

/*!
 * random-tendentious
 * Copyright (c) 2016 heyderpd <heyderpd@gmail.com>
 * ISC Licensed
 */

var random = Math.random;

var preFunction = {
  E: Math.E,
  PI: Math.PI,
  LN2: Math.LN2,
  LN10: Math.LN10,
  LOG2E: Math.LOG2E,
  SQRT2: Math.SQRT2,
  LOG10E: Math.LOG10E,
  SQRT1_2: Math.SQRT1_2,
  abs: Math.abs,
  acos: Math.acos,
  acosh: Math.acosh,
  asin: Math.asin,
  asinh: Math.asinh,
  atan: Math.atan,
  atan2: Math.atan2,
  atanh: Math.atanh,
  cbrt: Math.cbrt,
  ceil: Math.ceil,
  clz32: Math.clz32,
  cos: Math.cos,
  cosh: Math.cosh,
  exp: Math.exp,
  expm1: Math.expm1,
  floor: Math.floor,
  fround: Math.fround,
  hypot: Math.hypot,
  imul: Math.imul,
  log: Math.log,
  log10: Math.log10,
  log1p: Math.log1p,
  log2: Math.log2,
  round: Math.round,
  sign: Math.sign,
  sin: Math.sin,
  sinh: Math.sinh,
  sqrt: Math.sqrt,
  tan: Math.tan,
  tanh: Math.tanh,
  trunc: Math.trunc
};

var getRandomLimits = function getRandomLimits(f, min, max) {
  return function () {
    return f(random()) * (max - min) + min;
  };
};

var process = function process(f, limits) {
  if (limits !== undefined) {
    var min = limits[0];
    var max = limits[1];
    return getRandomLimits(f, min, max);
  } else {
    return function () {
      return f(random());
    };
  }
};

var main = function main(config) {
  var fType = hasProp(config, 'f') ? type(config.f) === 'function' ? 'function' : type(config.f) === 'string' && hasProp(preFunction, config.f) ? 'string' : undefined : undefined;

  var limits = hasProp(config, 'l') && type(config.l) === 'array' && length(config.l) === 2 ? config.l : undefined;

  switch (fType) {
    case 'string':
      var preType = type(preFunction[f]) === 'function' ? preFunction[f] : function (x) {
        return preFunction[f] * x;
      };
      return process(preType, limits);
    case 'function':
      return process(f, limits);
    default:
      return process(function (x) {
        return x;
      }, limits);
  }
};

var _require = require('pytils'),
    type = _require.type,
    hasProp = _require.hasProp,
    length = _require.length;

module.exports = main;
