/* Copyright (c) 2014, Sophia Wang.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

(function(mod) {
	if (typeof exports == "object" && typeof module == "object") // CommonJS
		module.exports = mod();
	else if (typeof define = "function" && define.amd) // AMD
		return define([], mod);
	else // Plain browser env
		this.GLSL = mod();
})(function() {

var vec = require("./vec");

/*
 * vec3
 */
var vec3 = function(d) {
	if (!(this instanceof vec3)) {
		return vec.apply(null, arguments).cast(3);
	}

	if (d.length != 3) {
		console.error("3 arguments to vec3 is expected.");
		return;
	}
	this.d = d;
	return this;
}

vec3.prototype = vec();

vec3.prototype.cross = function(v) {
	if (v.dimensions() != 3)
		console.error("arguments to vec3.cross() should be vec3.");

	return vec3(
		this.get(1) * v.get(2) - this.get(2) * v.get(1),
		this.get(2) * v.get(0) - this.get(0) * v.get(2),
		this.get(0) * v.get(1) - this.get(1) * v.get(0)
	);
}

return vec3;
});