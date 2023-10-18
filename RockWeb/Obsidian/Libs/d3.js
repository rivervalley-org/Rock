System.register([],(function(t){"use strict";return{execute:function(){function n(t){if(t.__esModule)return t;var n=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(t).forEach((function(r){var e=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,e.get?e:{enumerable:!0,get:function(){return t[r]}})})),n}var r={value:function(){}};function e(){for(var t,n=0,r=arguments.length,e={};n<r;++n){if(!(t=arguments[n]+"")||t in e||/[\s.]/.test(t))throw new Error("illegal type: "+t);e[t]=[]}return new a(e)}function a(t){this._=t}function o(t,n){return t.trim().split(/^|\s+/).map((function(t){var r="",e=t.indexOf(".");if(e>=0&&(r=t.slice(e+1),t=t.slice(0,e)),t&&!n.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:r}}))}function i(t,n){for(var r,e=0,a=t.length;e<a;++e)if((r=t[e]).name===n)return r.value}function u(t,n,e){for(var a=0,o=t.length;a<o;++a)if(t[a].name===n){t[a]=r,t=t.slice(0,a).concat(t.slice(a+1));break}return null!=e&&t.push({name:n,value:e}),t}a.prototype=e.prototype={constructor:a,on:function(t,n){var r,e=this._,a=o(t+"",e),f=-1,l=a.length;if(!(arguments.length<2)){if(null!=n&&"function"!=typeof n)throw new Error("invalid callback: "+n);for(;++f<l;)if(r=(t=a[f]).type)e[r]=u(e[r],t.name,n);else if(null==n)for(r in e)e[r]=u(e[r],t.name,null);return this}for(;++f<l;)if((r=(t=a[f]).type)&&(r=i(e[r],t.name)))return r},copy:function(){var t={},n=this._;for(var r in n)t[r]=n[r].slice();return new a(t)},call:function(t,n){if((r=arguments.length-2)>0)for(var r,e,a=new Array(r),o=0;o<r;++o)a[o]=arguments[o+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=0,r=(e=this._[t]).length;o<r;++o)e[o].value.apply(n,a)},apply:function(t,n,r){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var e=this._[t],a=0,o=e.length;a<o;++a)e[a].value.apply(n,r)}};var f=n(Object.freeze({__proto__:null,dispatch:e})).dispatch,l=Math.PI/180,c=2048;t("cloud",(function(){var t=[256,256],n=h,r=s,e=x,a=y,o=y,i=v,u=p,l=m,k=[],O=1/0,z=f("word","end"),E=null,I=Math.random,P={},T=M;function j(n,r,e){t[0],t[1];for(var a,o,i,u,f,c=r.x,h=r.y,s=Math.sqrt(t[0]*t[0]+t[1]*t[1]),y=l(t),x=I()<.5?1:-1,v=-x;(a=y(v+=x))&&(o=~~a[0],i=~~a[1],!(Math.min(Math.abs(o),Math.abs(i))>=s));)if(r.x=c+o,r.y=h+i,!(r.x+r.x0<0||r.y+r.y0<0||r.x+r.x1>t[0]||r.y+r.y1>t[1]||e&&d(r,n,t[0])||e&&(f=e,!((u=r).x+u.x1>f[0].x&&u.x+u.x0<f[1].x&&u.y+u.y1>f[0].y&&u.y+u.y0<f[1].y)))){for(var p,g=r.sprite,w=r.width>>5,m=t[0]>>5,M=r.x-(w<<4),b=127&M,_=32-b,k=r.y1-r.y0,O=(r.y+r.y0)*m+(M>>5),z=0;z<k;z++){p=0;for(var E=0;E<=w;E++)n[O+E]|=p<<_|(E<w?(p=g[z*w+E])>>>b:0);O+=m}return delete r.sprite,!0}return!1}return P.canvas=function(t){return arguments.length?(T=b(t),P):T},P.start=function(){var f=function(t){t.width=t.height=1;var n=Math.sqrt(t.getContext("2d").getImageData(0,0,1,1).data.length>>2);t.width=2048/n,t.height=c/n;var r=t.getContext("2d");return r.fillStyle=r.strokeStyle="red",r.textAlign="center",{context:r,ratio:n}}(T()),l=function(t){var n=[],r=-1;for(;++r<t;)n[r]=0;return n}((t[0]>>5)*t[1]),h=null,s=k.length,y=-1,x=[],v=k.map((function(t,f){return t.text=n.call(this,t,f),t.font=r.call(this,t,f),t.style=a.call(this,t,f),t.weight=o.call(this,t,f),t.rotate=i.call(this,t,f),t.size=~~e.call(this,t,f),t.padding=u.call(this,t,f),t})).sort((function(t,n){return n.size-t.size}));return E&&clearInterval(E),E=setInterval(p,0),p(),P;function p(){for(var n=Date.now();Date.now()-n<O&&++y<s&&E;){var r=v[y];r.x=t[0]*(I()+.5)>>1,r.y=t[1]*(I()+.5)>>1,g(f,r,v,y),r.hasText&&j(l,r,h)&&(x.push(r),z.call("word",P,r),h?w(h,r):h=[{x:r.x+r.x0,y:r.y+r.y0},{x:r.x+r.x1,y:r.y+r.y1}],r.x-=t[0]>>1,r.y-=t[1]>>1)}y>=s&&(P.stop(),z.call("end",P,x,h))}},P.stop=function(){return E&&(clearInterval(E),E=null),P},P.timeInterval=function(t){return arguments.length?(O=null==t?1/0:t,P):O},P.words=function(t){return arguments.length?(k=t,P):k},P.size=function(n){return arguments.length?(t=[+n[0],+n[1]],P):t},P.font=function(t){return arguments.length?(r=b(t),P):r},P.fontStyle=function(t){return arguments.length?(a=b(t),P):a},P.fontWeight=function(t){return arguments.length?(o=b(t),P):o},P.rotate=function(t){return arguments.length?(i=b(t),P):i},P.text=function(t){return arguments.length?(n=b(t),P):n},P.spiral=function(t){return arguments.length?(l=_[t]||t,P):l},P.fontSize=function(t){return arguments.length?(e=b(t),P):e},P.padding=function(t){return arguments.length?(u=b(t),P):u},P.random=function(t){return arguments.length?(I=t,P):I},P.on=function(){var t=z.on.apply(z,arguments);return t===z?P:t},P}));function h(t){return t.text}function s(){return"serif"}function y(){return"normal"}function x(t){return Math.sqrt(t.value)}function v(){return 30*(~~(6*Math.random())-3)}function p(){return 1}function g(t,n,r,e){if(!n.sprite){var a=t.context,o=t.ratio;a.clearRect(0,0,2048/o,c/o);var i=0,u=0,f=0,h=r.length;for(--e;++e<h;){n=r[e],a.save(),a.font=n.style+" "+n.weight+" "+~~((n.size+1)/o)+"px "+n.font;var s=a.measureText(n.text+"m").width*o,y=n.size<<1;if(n.rotate){var x=Math.sin(n.rotate*l),v=Math.cos(n.rotate*l),p=s*v,g=s*x,d=y*v,w=y*x;s=Math.max(Math.abs(p+w),Math.abs(p-w))+31>>5<<5,y=~~Math.max(Math.abs(g+d),Math.abs(g-d))}else s=s+31>>5<<5;if(y>f&&(f=y),i+s>=2048&&(i=0,u+=f,f=0),u+y>=c)break;a.translate((i+(s>>1))/o,(u+(y>>1))/o),n.rotate&&a.rotate(n.rotate*l),a.fillText(n.text,0,0),n.padding&&(a.lineWidth=2*n.padding,a.strokeText(n.text,0,0)),a.restore(),n.width=s,n.height=y,n.xoff=i,n.yoff=u,n.x1=s>>1,n.y1=y>>1,n.x0=-n.x1,n.y0=-n.y1,n.hasText=!0,i+=s}for(var m=a.getImageData(0,0,2048/o,c/o).data,M=[];--e>=0;)if((n=r[e]).hasText){for(var b=(s=n.width)>>5,_=(y=n.y1-n.y0,0);_<y*b;_++)M[_]=0;if(null==(i=n.xoff))return;u=n.yoff;for(var k=0,O=-1,z=0;z<y;z++){for(_=0;_<s;_++){var E=b*z+(_>>5),I=m[2048*(u+z)+(i+_)<<2]?1<<31-_%32:0;M[E]|=I,k|=I}k?O=z:(n.y0++,y--,z--,u++)}n.y1=n.y0+O,n.sprite=M.slice(0,(n.y1-n.y0)*b)}}}function d(t,n,r){r>>=5;for(var e,a=t.sprite,o=t.width>>5,i=t.x-(o<<4),u=127&i,f=32-u,l=t.y1-t.y0,c=(t.y+t.y0)*r+(i>>5),h=0;h<l;h++){e=0;for(var s=0;s<=o;s++)if((e<<f|(s<o?(e=a[h*o+s])>>>u:0))&n[c+s])return!0;c+=r}return!1}function w(t,n){var r=t[0],e=t[1];n.x+n.x0<r.x&&(r.x=n.x+n.x0),n.y+n.y0<r.y&&(r.y=n.y+n.y0),n.x+n.x1>e.x&&(e.x=n.x+n.x1),n.y+n.y1>e.y&&(e.y=n.y+n.y1)}function m(t){var n=t[0]/t[1];return function(t){return[n*(t*=.1)*Math.cos(t),t*Math.sin(t)]}}function M(){return document.createElement("canvas")}function b(t){return"function"==typeof t?t:function(){return t}}var _={archimedean:m,rectangular:function(t){var n=4*t[0]/t[1],r=0,e=0;return function(t){var a=t<0?-1:1;switch(Math.sqrt(1+4*a*t)-a&3){case 0:r+=n;break;case 1:e+=4;break;case 2:r-=n;break;default:e-=4}return[r,e]}}}}}}));
//# sourceMappingURL=d3.js.map