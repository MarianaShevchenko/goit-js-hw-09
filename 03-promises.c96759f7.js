!function(){var e=document.querySelector(".form");function n(e,n){return new Promise((function(t,o){Math.random()>.3?setTimeout((function(){t({position:e,delay:n})}),n):setTimeout((function(){o({position:e,delay:n})}),n)}))}e.addEventListener("submit",(function(t){t.preventDefault();for(var o=e.querySelector('input[name="delay"]'),i=e.querySelector('input[name="step"]'),a=e.querySelector('input[name="amount"]'),c=parseInt(o.value),r=parseInt(i.value),u=parseInt(a.value),l=0;l<u;l++){n(l+1,c+l*r).then((function(e){var n=e.position,t=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}))}e.reset()}))}();
//# sourceMappingURL=03-promises.c96759f7.js.map