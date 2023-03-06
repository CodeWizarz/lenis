import{createNanoEvents as t}from"nanoevents";var e=0;function i(t){return"__private_"+e+++"_"+t}function o(t,e){if(!Object.prototype.hasOwnProperty.call(t,e))throw new TypeError("attempted to use private field on non-instance");return t}var n="1.0.0-dev.8";function r(t,e,i){return Math.max(t,Math.min(e,i))}var s=/*#__PURE__*/function(){function t(){}var e=t.prototype;return e.advance=function(t){var e;if(this.isRunning){var i,o=!1;if(this.lerp)this.value=(1-(i=this.lerp))*this.value+i*this.to,Math.round(this.value)===this.to&&(this.value=this.to,o=!0);else{this.currentTime+=t;var n=r(0,this.currentTime/this.duration,1),s=(o=n>=1)?1:this.easing(n);this.value=this.from+(this.to-this.from)*s}null==(e=this.onUpdate)||e.call(this,this.value,{completed:o}),o&&this.stop()}},e.stop=function(){this.isRunning=!1},e.fromTo=function(t,e,i){var o=i.lerp,n=void 0===o?.1:o,r=i.duration,s=void 0===r?1:r,l=i.easing,h=void 0===l?function(t){return t}:l,a=i.onUpdate;this.from=this.value=t,this.to=e,this.lerp=n,this.duration=s,this.easing=h,this.currentTime=0,this.isRunning=!0,this.onUpdate=a},t}(),l=/*#__PURE__*/i("resizeObserver"),h=/*#__PURE__*/i("onResize"),a=/*#__PURE__*/i("onWindowResize"),c=/*#__PURE__*/function(){function t(t){var e=this;Object.defineProperty(this,l,{writable:!0,value:void 0}),Object.defineProperty(this,h,{writable:!0,value:function(t){var i=t[0];if(i){var o=i.contentRect,n=o.height;e.width=o.width,e.height=n}}}),Object.defineProperty(this,a,{writable:!0,value:function(){e.width=window.innerWidth,e.height=window.innerHeight}}),this.element=t,t===window?(window.addEventListener("resize",o(this,a)[a]),o(this,a)[a]()):(this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,o(this,l)[l]=new ResizeObserver(o(this,h)[h]),o(this,l)[l].observe(this.element))}return t.prototype.destroy=function(){window.removeEventListener("resize",this.onWindowResize),o(this,l)[l].disconnect()},t}(),u=/*#__PURE__*/i("wheelMultiplier"),d=/*#__PURE__*/i("touchMultiplier"),p=/*#__PURE__*/i("normalizeWheel"),v=/*#__PURE__*/i("touchStart"),m=/*#__PURE__*/i("emitter"),f=/*#__PURE__*/i("onTouchStart"),g=/*#__PURE__*/i("onTouchMove"),w=/*#__PURE__*/i("onWheel"),S=/*#__PURE__*/function(){function e(e,i){var n=this,s=i.wheelMultiplier,l=void 0===s?1:s,h=i.touchMultiplier,a=void 0===h?2:h,c=i.normalizeWheel,S=void 0!==c&&c;Object.defineProperty(this,u,{writable:!0,value:void 0}),Object.defineProperty(this,d,{writable:!0,value:void 0}),Object.defineProperty(this,p,{writable:!0,value:void 0}),Object.defineProperty(this,v,{writable:!0,value:void 0}),Object.defineProperty(this,m,{writable:!0,value:void 0}),Object.defineProperty(this,f,{writable:!0,value:function(t){var e=t.targetTouches?t.targetTouches[0]:t,i=e.pageX,r=e.pageY;o(n,v)[v].x=i,o(n,v)[v].y=r}}),Object.defineProperty(this,g,{writable:!0,value:function(t){var e=t.targetTouches?t.targetTouches[0]:t,i=e.pageX,r=e.pageY,s=-(i-o(n,v)[v].x)*o(n,d)[d],l=-(r-o(n,v)[v].y)*o(n,d)[d];o(n,v)[v].x=i,o(n,v)[v].y=r,o(n,m)[m].emit("scroll",{type:"touch",deltaX:s,deltaY:l,event:t})}}),Object.defineProperty(this,w,{writable:!0,value:function(t){var e=t.deltaX,i=t.deltaY;o(n,p)[p]&&(e=r(-100,e,100),i=r(-100,i,100)),e*=o(n,u)[u],i*=o(n,u)[u],o(n,m)[m].emit("scroll",{type:"wheel",deltaX:e,deltaY:i,event:t})}}),this.element=e,o(this,u)[u]=l,o(this,d)[d]=a,o(this,p)[p]=S,o(this,v)[v]={x:null,y:null},o(this,m)[m]=t(),this.element.addEventListener("wheel",o(this,w)[w],{passive:!1}),this.element.addEventListener("touchstart",o(this,f)[f],{passive:!1}),this.element.addEventListener("touchmove",o(this,g)[g],{passive:!1})}var i=e.prototype;return i.on=function(t,e){return o(this,m)[m].on(t,e)},i.destroy=function(){o(this,m)[m].events={},this.element.removeEventListener("wheel",o(this,w)[w],{passive:!1}),this.element.removeEventListener("touchstart",o(this,f)[f],{passive:!1}),this.element.removeEventListener("touchmove",o(this,g)[g],{passive:!1})},e}(),y=/*#__PURE__*/function(){function e(e){var i=this,o=void 0===e?{}:e,r=o.direction,l=o.gestureDirection,h=o.mouseMultiplier,a=o.smooth,u=o.wrapper,d=void 0===u?window:u,p=o.content,v=void 0===p?document.documentElement:p,m=o.smoothWheel,f=void 0===m?null==a||a:m,g=o.smoothTouch,w=void 0!==g&&g,y=o.duration,b=o.easing,M=void 0===b?function(t){return Math.min(1,1.001-Math.pow(2,-10*t))}:b,L=o.lerp,O=void 0===L?y?null:.1:L,E=o.infinite,_=void 0!==E&&E,z=o.orientation,T=void 0===z?null!=r?r:"vertical":z,P=o.gestureOrientation,j=void 0===P?null!=l?l:"vertical":P,k=o.touchMultiplier,W=void 0===k?2:k,R=o.wheelMultiplier,H=void 0===R?null!=h?h:1:R,x=o.normalizeWheel,X=void 0===x||x;this.onVirtualScroll=function(t){var e=t.type,o=t.deltaX,n=t.deltaY,r=t.event;if(!r.ctrlKey&&!("vertical"===i.options.gestureOrientation&&0===n||"horizontal"===i.options.gestureOrientation&&0===o||r.composedPath().find(function(t){return null==t||null==t.hasAttribute?void 0:t.hasAttribute("data-lenis-prevent")})))if(i.isStopped||i.isLocked)r.preventDefault();else{if(i.isSmooth=i.options.smoothTouch&&"touch"===e||i.options.smoothWheel&&"wheel"===e,!i.isSmooth)return i.isScrolling=!1,void i.animate.stop();r.preventDefault();var s=n;"both"===i.options.gestureOrientation?s=Math.abs(n)>Math.abs(o)?n:o:"horizontal"===i.options.gestureOrientation&&(s=o),i.scrollTo(i.targetScroll+s,{programmatic:!1})}},this.onScroll=function(){if(!i.isScrolling){var t=i.animatedScroll;i.animatedScroll=i.targetScroll=i.actualScroll,i.velocity=0,i.direction=Math.sign(i.animatedScroll-t),i.emit()}},r&&console.warn("Lenis: `direction` option is deprecated, use `orientation` instead"),l&&console.warn("Lenis: `gestureDirection` option is deprecated, use `gestureOrientation` instead"),h&&console.warn("Lenis: `mouseMultiplier` option is deprecated, use `wheelMultiplier` instead"),a&&console.warn("Lenis: `smooth` option is deprecated, use `smoothWheel` instead"),window.lenisVersion=n,d!==document.documentElement&&d!==document.body||(d=window),this.options={wrapper:d,content:v,smoothWheel:f,smoothTouch:w,duration:y,easing:M,lerp:O,infinite:_,gestureOrientation:j,orientation:T,touchMultiplier:W,wheelMultiplier:H,normalizeWheel:X},this.wrapper=new c(d),this.content=new c(v),this.rootElement.classList.add("lenis"),this.velocity=0,this.isStopped=!1,this.isSmooth=f||w,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.animate=new s,this.emitter=t(),this.wrapper.element.addEventListener("scroll",this.onScroll,{passive:!1}),this.virtualScroll=new S(d,{touchMultiplier:W,wheelMultiplier:H,normalizeWheel:X}),this.virtualScroll.on("scroll",this.onVirtualScroll)}var i,o,l=e.prototype;return l.destroy=function(){this.emitter.events={},this.wrapper.element.removeEventListener("scroll",this.onScroll,{passive:!1}),this.virtualScroll.destroy()},l.on=function(t,e){return this.emitter.on(t,e)},l.off=function(t,e){var i;this.emitter.events[t]=null==(i=this.emitter.events[t])?void 0:i.filter(function(t){return e!==t})},l.setScroll=function(t){this.isHorizontal?this.rootElement.scrollLeft=t:this.rootElement.scrollTop=t},l.emit=function(){this.emitter.emit("scroll",this)},l.reset=function(){this.isLocked=!1,this.isScrolling=!1,this.velocity=0},l.start=function(){this.isStopped=!1,this.reset()},l.stop=function(){this.isStopped=!0,this.animate.stop(),this.reset()},l.raf=function(t){var e=t-(this.time||t);this.time=t,this.animate.advance(.001*e)},l.scrollTo=function(t,e){var i=this,o=void 0===e?{}:e,n=o.offset,s=void 0===n?0:n,l=o.immediate,h=void 0!==l&&l,a=o.lock,c=void 0!==a&&a,u=o.duration,d=void 0===u?this.options.duration:u,p=o.easing,v=void 0===p?this.options.easing:p,m=o.lerp,f=void 0===m?!d&&this.options.lerp:m,g=o.onComplete,w=o.force,S=o.programmatic,y=void 0===S||S;if(!this.isStopped||void 0!==w&&w){if(["top","left","start"].includes(t))t=0;else if(["bottom","right","end"].includes(t))t=this.limit;else{var b,M;if("string"==typeof t?M=document.querySelector(t):null!=(b=t)&&b.nodeType&&(M=t),M){if(this.wrapper.element!==window){var L=this.wrapper.element.getBoundingClientRect();s-=this.isHorizontal?L.left:L.top}var O=M.getBoundingClientRect();t=(this.isHorizontal?O.left:O.top)+this.animatedScroll}}if("number"==typeof t){if(t+=s,t=Math.round(t),this.options.infinite?y&&(this.targetScroll=this.animatedScroll=this.scroll):t=r(0,t,this.limit),h)return this.animatedScroll=this.targetScroll=t,this.setScroll(this.scroll),this.animate.stop(),this.reset(),this.emit(),void(null==g||g());y||(this.targetScroll=t),this.animate.fromTo(this.animatedScroll,t,{duration:d,easing:v,lerp:f,onUpdate:function(t,e){var o=e.completed;c&&(i.isLocked=!0),i.isScrolling=!0,i.velocity=t-i.animatedScroll,i.direction=Math.sign(i.velocity),i.animatedScroll=t,i.setScroll(i.scroll),y&&(i.targetScroll=t),o&&(c&&(i.isLocked=!1),requestAnimationFrame(function(){i.isScrolling=!1}),i.velocity=0,null==g||g()),i.emit()}})}}},i=e,(o=[{key:"rootElement",get:function(){return this.wrapper.element===window?this.content.element:this.wrapper.element}},{key:"limit",get:function(){return Math.round(this.isHorizontal?this.content.width-this.wrapper.width:this.content.height-this.wrapper.height)}},{key:"isHorizontal",get:function(){return"horizontal"===this.options.orientation}},{key:"actualScroll",get:function(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}},{key:"scroll",get:function(){return this.options.infinite?(e=this.animatedScroll%(t=this.limit),(t>0&&e<0||t<0&&e>0)&&(e+=t),e):this.animatedScroll;var t,e}},{key:"progress",get:function(){return this.scroll/this.limit}},{key:"isSmooth",get:function(){return this.__isSmooth},set:function(t){this.__isSmooth!==t&&(this.rootElement.classList.toggle("lenis-smooth",t),this.__isSmooth=t)}},{key:"isScrolling",get:function(){return this.__isScrolling},set:function(t){this.__isScrolling!==t&&(this.rootElement.classList.toggle("lenis-scrolling",t),this.__isScrolling=t)}},{key:"isStopped",get:function(){return this.__isStopped},set:function(t){this.__isStopped!==t&&(this.rootElement.classList.toggle("lenis-stopped",t),this.__isStopped=t)}}])&&function(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,"symbol"==typeof(n=function(t,e){if("object"!=typeof t||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var o=i.call(t,"string");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key))?n:String(n),o)}var n}(i.prototype,o),Object.defineProperty(i,"prototype",{writable:!1}),e}();export{y as default};
//# sourceMappingURL=lenis.mjs.map
