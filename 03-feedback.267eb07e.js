function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,i=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,g=Math.min,m=function(){return c.Date.now()};function p(e,t,n){var r,o,a,i,u,f,l=0,c=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,a=o;return r=o=void 0,l=t,i=e.apply(a,n)}function S(e){return l=e,u=setTimeout(T,t),c?y(e):i}function O(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=a}function T(){var e=m();if(O(e))return h(e);u=setTimeout(T,function(e){var n=t-(e-f);return s?g(n,a-(e-l)):n}(e))}function h(e){return u=void 0,p&&r?y(e):(r=o=void 0,i)}function j(){var e=m(),n=O(e);if(r=arguments,o=this,f=e,n){if(void 0===u)return S(f);if(s)return u=setTimeout(T,t),y(f)}return void 0===u&&(u=setTimeout(T,t)),i}return t=b(t)||0,v(n)&&(c=!!n.leading,a=(s="maxWait"in n)?d(b(n.maxWait)||0,t):a,p="trailing"in n?!!n.trailing:p),j.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=f=o=u=void 0},j.flush=function(){return void 0===u?i:h(m())},j}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=a.test(e);return n||i.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:r,maxWait:t,trailing:o})};let y={};const S=document.querySelector(".feedback-form"),O=document.querySelector("input"),T=document.querySelector("textarea");JSON.parse(localStorage.getItem("feedback-form-state"))&&(getedData=JSON.parse(localStorage.getItem("feedback-form-state")),O.value=getedData.email||"",T.value=getedData.message||""),S.addEventListener("input",e(t)((function(e){e.preventDefault(),y[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(y))}),500)),S.addEventListener("submit",(function(e){e.preventDefault();const{elements:{email:t,message:n}}=e.currentTarget;""!==t.value&&""!==n.value||alert("Please fill in all the fields!");console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),localStorage.clear(),e.currentTarget.reset()}));
//# sourceMappingURL=03-feedback.267eb07e.js.map
