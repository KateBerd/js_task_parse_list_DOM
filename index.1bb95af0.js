function t(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=Array(r);e<r;e++)n[e]=t[e];return n}var r,e,n=function(r){if(Array.isArray(r))return t(r)}(r=document.querySelectorAll("li"))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(r)||function(r,e){if(r){if("string"==typeof r)return t(r,void 0);var n=Object.prototype.toString.call(r).slice(8,-1);if("Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(r,void 0)}}(r)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();e=n.sort(function(t,r){return Number(r.getAttribute("data-salary").replace("$","").replace(",",""))-Number(t.getAttribute("data-salary").replace("$","").replace(",",""))}),document.querySelector("ul").innerHTML="",e.forEach(function(t){return document.querySelector("ul").appendChild(t)}),n.map(function(t){return{name:t.textContent,position:t.getAttribute("data-position"),salary:Number(t.getAttribute("data-salary")),age:Number(t.getAttribute("data-age"))}});
//# sourceMappingURL=index.1bb95af0.js.map
