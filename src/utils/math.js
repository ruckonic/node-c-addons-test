import {createRequire} from "node:module"
const require = createRequire(import.meta.url)

const mathModule = require("bindings")("math.node")

/**
* @typedef {Object} CMath
* @property {(a: number, b: number) => number} add
*/

/**
* @type {CMath}
*/
export const math = mathModule
