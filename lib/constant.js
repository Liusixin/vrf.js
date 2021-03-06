"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const elliptic = require("elliptic");
exports.EDDSA = new elliptic.eddsa('ed25519');
exports.N2 = 32;
exports.N = exports.N2 / 2;
exports.LIMIT = 100;
exports.CO_FACTOR = 8;
exports.G = exports.EDDSA.curve.g;
exports.Q = exports.EDDSA.curve.n;
