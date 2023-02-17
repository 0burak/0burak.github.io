(function(){"use strict";var e={7106:function(e,n,t){var s=t(9963),i=t(6252);const o={class:"section"},a={class:"container"};function r(e,n,t,s,r,l){const c=(0,i.up)("mainComp"),d=(0,i.up)("simple-upload");return(0,i.wg)(),(0,i.iD)("div",o,[(0,i._)("div",a,[(0,i.Wm)(c),(0,i.Wm)(d)])])}const l=e=>((0,i.dD)("data-v-715dd1ce"),e=e(),(0,i.Cn)(),e),c=l((()=>(0,i._)("h3",null,"Software Engineering Group Project",-1))),d=l((()=>(0,i._)("canvas",null,null,-1))),u=[c,d];function h(e,n,t,s,o,a){return(0,i.wg)(),(0,i.iD)("div",null,u)}var p=t(7327),f=t(2760),m=(t(8762),t(9626),t(6941),document.getElementById("loadFile"));m||(m=document.createElement("INPUT"),m.setAttribute("id","loadFile"),m.setAttribute("type","file"),m.style.position="absolute",m.style.top="80px",m.style.width="200px",m.style.height="100px",m.style.right="40px",document.body.children[0].appendChild(m));class g{constructor(e){(0,p.Z)(this,"scene",void 0),(0,p.Z)(this,"engine",void 0),this.canvas=e,this.engine=new f.D4V(this.canvas,!0),this.scene=this.CreateScene();const n=new f.ezm("hemiLight",new f.Pa4(0,1,0),this.scene);n.intensity=.5;const t=new f.YfP("Camera",-Math.PI/4*3,Math.PI/4,10,new f.Pa4(0,0,0),this.scene);t.attachControl(!0),this.initXR(),this.engine.runRenderLoop((()=>{this.scene.render()}))}CreateScene(){const e=new f.xsS(this.engine);return e}async initXR(){const e=new f.gZI({groundOpacity:3},this.scene);e.skybox?.dispose(),e.ground.position.y=-1.1,e.ground.isPickable=!1;const n=1,t=f.VO7.CreateSphere("Sphere",{segments:16,diameter:n},this.scene);t.position.x=0,t.position.y=2*n,t.position.z=0,t.isPickable=!0;const s=new f.KuD("matR",this.scene);s.diffuseColor=new f.Wot(1,0,0),t.material=s,this.scene.environmentIntensity=.5;const i=await f.BBM.CreateAsync(this.scene,{floorMeshes:[e.ground],optionalFeatures:!0}),o=f.n0n.ImportMeshAsync("","./models/","item.glb").then((e=>{e.meshes[0].position.x=5,e.meshes[1].isPickable=!0})),a=o.meshes;console.log("meshes",a);const r=new f.zHn(new f.Pa4,new f.Pa4,3),l=new f.zHn(new f.Pa4,new f.Pa4,3),c=new f.zHn(new f.Pa4,new f.Pa4,3),d=new f.lSG(r);d.show(this.scene);const u=new f.lSG(l);u.show(this.scene);const h=new f.lSG(c);let p;h.show(this.scene),i.input.onControllerAddedObservable.add((e=>{e.onMotionControllerInitObservable.add((n=>{if("right"===n.handness){const t=n.getComponentIds(),s=n.getComponent(t[0]);s.onButtonStateChangedObservable.add((()=>{if(s.value>.5){e.getWorldPointerRayToRef(r,!1);const t=this.scene.pickWithRay(r);t&&void 0!==t.pickedMesh&&t.pickedMesh&&(p=t.pickedMesh,console.log("name:"+t.pickedMesh.name),p.setParent(n.rootMesh))}else s.value<.5&&void 0!=p&&p.setParent(null)}));const i=n.getComponent(t[3]);i.onButtonStateChangedObservable.add((()=>{if(i.pressed){e.getWorldPointerRayToRef(l,!1);const n=this.scene.pickWithRay(l);n&&n.pickedMesh&&(n.pickedMesh.scaling.x*=.9,n.pickedMesh.scaling.y*=.9,n.pickedMesh.scaling.z*=.9)}}));const o=n.getComponent(t[4]);o.onButtonStateChangedObservable.add((()=>{if(o.pressed){e.getWorldPointerRayToRef(c,!1);const n=this.scene.pickWithRay(c);n&&n.pickedMesh&&(n.pickedMesh.scaling.x*=1.1,n.pickedMesh.scaling.y*=1.1,n.pickedMesh.scaling.z*=1.1)}}))}}))}))}}var v={name:"mainComp",mounted(){const e=document.querySelector("canvas");new g(e)}},w=t(3744);const y=(0,w.Z)(v,[["render",h],["__scopeId","data-v-715dd1ce"]]);var b=y,k=t(3577);const C={class:"message-body"},P={class:"field"},M={class:"file is-boxed is-primary"},_={class:"file-label"},F=(0,i._)("span",{class:"file-cta"},[(0,i._)("span",{class:"file-icon"},[(0,i._)("i",{class:"fas fa-upload"})])],-1),O=(0,i._)("div",null,"Enter object name: ",-1),S={class:"field"},x=(0,i._)("button",null,"Add To Scene",-1);function R(e,n,t,o,a,r){return(0,i.wg)(),(0,i.iD)("form",{onSubmit:n[3]||(n[3]=(0,s.iM)(((...e)=>r.sendFile&&r.sendFile(...e)),["prevent"])),enctype:"multipart/form-data"},[a.message?((0,i.wg)(),(0,i.iD)("div",{key:0,class:(0,k.C_)("message "+(a.error?"is-danger":"is-success"))},[(0,i._)("div",C,(0,k.zw)(a.message),1)],2)):(0,i.kq)("",!0),(0,i._)("div",P,[(0,i._)("div",M,[(0,i._)("label",_,[(0,i._)("input",{type:"file",ref:"file",onChange:n[0]||(n[0]=(...e)=>r.selectFile&&r.selectFile(...e)),class:"file-input"},null,544),F])])]),O,(0,i.wy)((0,i._)("input",{type:"text","onUpdate:modelValue":n[1]||(n[1]=e=>a.fileName=e)},null,512),[[s.nr,a.fileName]]),(0,i._)("div",S,[(0,i._)("button",{class:"button is-info",onClick:n[2]||(n[2]=(...e)=>r.addFileToList&&r.addFileToList(...e))}," Send ")]),(0,i._)("ul",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.uploadedFiles,(e=>((0,i.wg)(),(0,i.iD)("li",{key:e},[(0,i.Uk)((0,k.zw)(e)+" ",1),x])))),128))])],32)}t(7658);var D=t(8945),I={name:"SimpleUpload",data(){return{file:"",message:"",error:!1,fileName:"",uploadedFiles:[]}},methods:{selectFile(){this.file=this.$refs.file.files[0],this.error=!1,this.message=""},addFileToList(){this.uploadedFiles.push(this.fileName),this.fileName=""},async sendFile(){const e=new FormData;e.append("file",this.file);try{await D.Z.post("/api/upload",e),this.message="File has been uploaded",this.file="",this.error=!1}catch(n){console.log(n),this.message=n.response.data.error,this.error=!0}}}};const T=(0,w.Z)(I,[["render",R]]);var z=T,W={name:"App",components:{mainComp:b,SimpleUpload:z}};const j=(0,w.Z)(W,[["render",r]]);var A=j;(0,s.ri)(A).mount("#app")}},n={};function t(s){var i=n[s];if(void 0!==i)return i.exports;var o=n[s]={exports:{}};return e[s](o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(n,s,i,o){if(!s){var a=1/0;for(d=0;d<e.length;d++){s=e[d][0],i=e[d][1],o=e[d][2];for(var r=!0,l=0;l<s.length;l++)(!1&o||a>=o)&&Object.keys(t.O).every((function(e){return t.O[e](s[l])}))?s.splice(l--,1):(r=!1,o<a&&(a=o));if(r){e.splice(d--,1);var c=i();void 0!==c&&(n=c)}}return n}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[s,i,o]}}(),function(){t.d=function(e,n){for(var s in n)t.o(n,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,s){var i,o,a=s[0],r=s[1],l=s[2],c=0;if(a.some((function(n){return 0!==e[n]}))){for(i in r)t.o(r,i)&&(t.m[i]=r[i]);if(l)var d=l(t)}for(n&&n(s);c<a.length;c++)o=a[c],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(d)},s=self["webpackChunkclient"]=self["webpackChunkclient"]||[];s.forEach(n.bind(null,0)),s.push=n.bind(null,s.push.bind(s))}();var s=t.O(void 0,[998],(function(){return t(7106)}));s=t.O(s)})();
//# sourceMappingURL=app.d360f929.js.map