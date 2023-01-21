(function(){"use strict";var e={3848:function(e,n,r){var t=r(9963),i=r(6252);function o(e,n,r,t,o,a){var u=(0,i.up)("groupProject");return(0,i.wg)(),(0,i.j4)(u)}var a=function(e){return(0,i.dD)("data-v-755a600e"),e=e(),(0,i.Cn)(),e},u=a((function(){return(0,i._)("h3",null,"Software Engineering Group Project",-1)})),c=a((function(){return(0,i._)("canvas",null,null,-1)})),s=[u,c];function f(e,n,r,t,o,a){return(0,i.wg)(),(0,i.iD)("div",null,s)}var l=r(655),v=r(438),h=(r(8762),r(9626),function(){function e(e){var n=this;Object.defineProperty(this,"canvas",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"scene",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"engine",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.engine=new v.D4V(this.canvas,!0),this.scene=this.CreateScene();var r=new v.ezm("hemiLight",new v.Pa4(0,1,0),this.scene);r.intensity=.5;var t=1,i=v.VO7.CreateSphere("Sphere",{segments:16,diameter:t},this.scene);i.position.x=0,i.position.y=2*t,i.position.z=0;var o=new v.KuD("matR",this.scene);o.diffuseColor=new v.Wot(1,0,0),i.material=o;var a=new v.YfP("Camera",-Math.PI/4*3,Math.PI/4,10,new v.Pa4(0,0,0),this.scene);a.attachControl(!0),this.initXR(),this.engine.runRenderLoop((function(){n.scene.render()}))}return Object.defineProperty(e.prototype,"CreateScene",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=new v.xsS(this.engine);return e}}),Object.defineProperty(e.prototype,"initXR",{enumerable:!1,configurable:!0,writable:!0,value:function(){return(0,l.mG)(this,void 0,void 0,(function(){var e;return(0,l.Jh)(this,(function(n){switch(n.label){case 0:return e=new v.gZI({skyboxSize:30,groundColor:new v.Wot(.5,.5,.5)},this.scene),[4,v.BBM.CreateAsync(this.scene,{floorMeshes:[null===e||void 0===e?void 0:e.ground],optionalFeatures:!0})];case 1:return n.sent(),[2]}}))}))}}),e}()),p=(0,i.aZ)({name:"groupProject",mounted:function(){var e=document.querySelector("canvas");new h(e)}}),b=r(3744);const d=(0,b.Z)(p,[["render",f],["__scopeId","data-v-755a600e"]]);var g=d,w=(0,i.aZ)({name:"App",components:{groupProject:g}});const m=(0,b.Z)(w,[["render",o]]);var y=m;(0,t.ri)(y).mount("#app")}},n={};function r(t){var i=n[t];if(void 0!==i)return i.exports;var o=n[t]={exports:{}};return e[t](o,o.exports,r),o.exports}r.m=e,function(){var e=[];r.O=function(n,t,i,o){if(!t){var a=1/0;for(f=0;f<e.length;f++){t=e[f][0],i=e[f][1],o=e[f][2];for(var u=!0,c=0;c<t.length;c++)(!1&o||a>=o)&&Object.keys(r.O).every((function(e){return r.O[e](t[c])}))?t.splice(c--,1):(u=!1,o<a&&(a=o));if(u){e.splice(f--,1);var s=i();void 0!==s&&(n=s)}}return n}o=o||0;for(var f=e.length;f>0&&e[f-1][2]>o;f--)e[f]=e[f-1];e[f]=[t,i,o]}}(),function(){r.d=function(e,n){for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};r.O.j=function(n){return 0===e[n]};var n=function(n,t){var i,o,a=t[0],u=t[1],c=t[2],s=0;if(a.some((function(n){return 0!==e[n]}))){for(i in u)r.o(u,i)&&(r.m[i]=u[i]);if(c)var f=c(r)}for(n&&n(t);s<a.length;s++)o=a[s],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(f)},t=self["webpackChunkb101"]=self["webpackChunkb101"]||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var t=r.O(void 0,[998],(function(){return r(3848)}));t=r.O(t)})();
//# sourceMappingURL=app.47115ad8.js.map