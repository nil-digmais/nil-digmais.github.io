(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(["./rtcomm/EndpointProvider","./rtcomm/connection","./rtcomm/util"], function (EndpointProvider, connection, util) {
      return (root.returnExportsGlobal = factory(EndpointProvider, connection, util));
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like enviroments that support module.exports,
    // like Node.
    module.exports = factory(require("./rtcomm/EndpointProvider"),require("./rtcomm/connection"),require("./rtcomm/util"));
  } else {
        root['rtcomm'] = root['rtcomm']  || {};
        root['rtcomm'] = factory(rtcomm.EndpointProvider,rtcomm.connection,rtcomm.util);
  }
}(this, function (EndpointProvider, connection, util) {

/*
 * Copyright 2014 IBM Corp.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @module rtcomm
 * @requires {@link mqttws31.js}
 *
 */
/*global l:false*/
var rtcomm= (function rtcomm() {

   var Rtcomm = function Rtcomm() {
     this.EndpointProvider= EndpointProvider;
     this.connection= connection;
     this.util= util;
   };
   Rtcomm.prototype = util.RtcommBaseObject.extend({});
   return new Rtcomm();
 })();




 return rtcomm;

}));
