(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1880:function(e,t,i){Promise.resolve().then(i.bind(i,5720)),Promise.resolve().then(i.bind(i,3131)),Promise.resolve().then(i.bind(i,9342)),Promise.resolve().then(i.t.bind(i,8173,23)),Promise.resolve().then(i.t.bind(i,231,23)),Promise.resolve().then(i.bind(i,1932)),Promise.resolve().then(i.bind(i,8978)),Promise.resolve().then(i.bind(i,5967)),Promise.resolve().then(i.bind(i,5928)),Promise.resolve().then(i.bind(i,9917)),Promise.resolve().then(i.bind(i,4395)),Promise.resolve().then(i.bind(i,5426)),Promise.resolve().then(i.bind(i,361)),Promise.resolve().then(i.bind(i,3436)),Promise.resolve().then(i.bind(i,4422)),Promise.resolve().then(i.bind(i,8927)),Promise.resolve().then(i.bind(i,1319)),Promise.resolve().then(i.bind(i,9484)),Promise.resolve().then(i.bind(i,2857)),Promise.resolve().then(i.bind(i,6577)),Promise.resolve().then(i.bind(i,4285)),Promise.resolve().then(i.bind(i,6439)),Promise.resolve().then(i.bind(i,3103)),Promise.resolve().then(i.bind(i,5326)),Promise.resolve().then(i.bind(i,3913)),Promise.resolve().then(i.bind(i,7383)),Promise.resolve().then(i.bind(i,9550)),Promise.resolve().then(i.bind(i,4502)),Promise.resolve().then(i.bind(i,8977)),Promise.resolve().then(i.bind(i,9857)),Promise.resolve().then(i.bind(i,5234)),Promise.resolve().then(i.bind(i,9332)),Promise.resolve().then(i.bind(i,6698)),Promise.resolve().then(i.bind(i,8706)),Promise.resolve().then(i.bind(i,1544)),Promise.resolve().then(i.bind(i,714)),Promise.resolve().then(i.bind(i,5673)),Promise.resolve().then(i.bind(i,7385)),Promise.resolve().then(i.bind(i,9888)),Promise.resolve().then(i.bind(i,1746)),Promise.resolve().then(i.bind(i,9045)),Promise.resolve().then(i.bind(i,5646)),Promise.resolve().then(i.bind(i,3299)),Promise.resolve().then(i.bind(i,929)),Promise.resolve().then(i.bind(i,6572)),Promise.resolve().then(i.bind(i,5411)),Promise.resolve().then(i.bind(i,7102)),Promise.resolve().then(i.bind(i,3874)),Promise.resolve().then(i.bind(i,7475)),Promise.resolve().then(i.bind(i,2145)),Promise.resolve().then(i.bind(i,7677)),Promise.resolve().then(i.bind(i,1299)),Promise.resolve().then(i.bind(i,9997)),Promise.resolve().then(i.bind(i,8584)),Promise.resolve().then(i.bind(i,7971)),Promise.resolve().then(i.bind(i,2139)),Promise.resolve().then(i.bind(i,4037)),Promise.resolve().then(i.bind(i,8086)),Promise.resolve().then(i.bind(i,5342)),Promise.resolve().then(i.bind(i,1229)),Promise.resolve().then(i.bind(i,5518)),Promise.resolve().then(i.bind(i,2678)),Promise.resolve().then(i.bind(i,4660)),Promise.resolve().then(i.bind(i,6598)),Promise.resolve().then(i.bind(i,530)),Promise.resolve().then(i.bind(i,9279)),Promise.resolve().then(i.bind(i,2880)),Promise.resolve().then(i.bind(i,2250)),Promise.resolve().then(i.bind(i,5446)),Promise.resolve().then(i.bind(i,8346)),Promise.resolve().then(i.bind(i,9269)),Promise.resolve().then(i.bind(i,7775)),Promise.resolve().then(i.bind(i,5302)),Promise.resolve().then(i.bind(i,6584)),Promise.resolve().then(i.bind(i,4204)),Promise.resolve().then(i.bind(i,9776)),Promise.resolve().then(i.bind(i,4284)),Promise.resolve().then(i.bind(i,2910)),Promise.resolve().then(i.bind(i,9881)),Promise.resolve().then(i.bind(i,3419)),Promise.resolve().then(i.bind(i,14)),Promise.resolve().then(i.bind(i,1109)),Promise.resolve().then(i.bind(i,8750)),Promise.resolve().then(i.bind(i,1206))},5720:function(e,t,i){"use strict";i.r(t);var r=i(7437),s=i(3393),o=i.n(s);t.default=e=>{let{animationPath:t,width:i}=e;return(0,r.jsx)(o(),{loop:!0,autoplay:!0,animationData:t,style:{width:"95%"}})}},3131:function(e,t,i){"use strict";i.r(t);var r=i(7437),s=i(2265);t.default=e=>{let{children:t,identifier:i}=e;return(0,s.useEffect)(()=>{let e=document.querySelector(".glow-container-".concat(i)),t=document.querySelectorAll(".glow-card-".concat(i)),r={proximity:40,spread:80,blur:12,gap:32,vertical:!1,opacity:0},s=e=>{for(let i of t){let t=i.getBoundingClientRect();(null==e?void 0:e.x)>t.left-r.proximity&&(null==e?void 0:e.x)<t.left+t.width+r.proximity&&(null==e?void 0:e.y)>t.top-r.proximity&&(null==e?void 0:e.y)<t.top+t.height+r.proximity?i.style.setProperty("--active",1):i.style.setProperty("--active",r.opacity);let s=[t.left+.5*t.width,t.top+.5*t.height],o=180*Math.atan2((null==e?void 0:e.y)-s[1],(null==e?void 0:e.x)-s[0])/Math.PI;o=o<0?o+360:o,i.style.setProperty("--start",o+90)}};return document.body.addEventListener("pointermove",s),e.style.setProperty("--gap",r.gap),e.style.setProperty("--blur",r.blur),e.style.setProperty("--spread",r.spread),e.style.setProperty("--direction",r.vertical?"column":"row"),s(),()=>{document.body.removeEventListener("pointermove",s)}},[i]),(0,r.jsx)("div",{className:"glow-container-".concat(i," glow-container"),children:(0,r.jsxs)("article",{className:"glow-card glow-card-".concat(i," h-fit cursor-pointer border border-[#2a2e5a] transition-all duration-300 relative bg-[#101123] text-gray-200 rounded-xl hover:border-transparent w-full"),children:[(0,r.jsx)("div",{className:"glows"}),t]})})}},9342:function(e,t,i){"use strict";i.d(t,{default:function(){return n}});var r=i(7437),s=i(1572),o=i(2265),l=i(5847),d=i(3580),A=i(357),n=function(){let[e,t]=(0,o.useState)({email:!1,required:!1}),[i,n]=(0,o.useState)({name:"",email:"",message:""}),a=()=>{i.email&&i.message&&i.name&&t({...e,required:!1})},h=async r=>{if(r.preventDefault(),console.log("Submit button clicked"),i.email&&i.message&&i.name){if(e.email){console.log("Into return");return}console.log("Into return"),t({...e,required:!1})}else{console.log("Into return"),t({...e,required:!0});return}let o=A.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,l=A.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,a={publicKey:A.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY};try{console.log("Into id");let e=await s.ZP.send(o,l,i,a);200===e.status&&(d.Am.success("Message sent successfully!"),n({name:"",email:"",message:""}))}catch(e){d.Am.error((null==e?void 0:e.text)||e)}};return(0,r.jsxs)("div",{className:"",children:[(0,r.jsx)("p",{className:"font-medium mb-5 text-[#16f2b3] text-xl uppercase",children:"Contact with me"}),(0,r.jsxs)("div",{className:"max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5",children:[(0,r.jsx)("p",{className:"text-sm text-[#d3d8e8]",children:"If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests."}),(0,r.jsxs)("div",{className:"mt-6 flex flex-col gap-4",children:[(0,r.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,r.jsx)("label",{className:"text-base",children:"Your Name: "}),(0,r.jsx)("input",{className:"bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2",type:"text",maxLength:"100",required:!0,onChange:e=>n({...i,name:e.target.value}),onBlur:a,value:i.name})]}),(0,r.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,r.jsx)("label",{className:"text-base",children:"Your Email: "}),(0,r.jsx)("input",{className:"bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2",type:"email",maxLength:"100",required:!0,value:i.email,onChange:e=>n({...i,email:e.target.value}),onBlur:()=>{var r;a(),t({...e,email:(r=i.email,!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r))})}}),e.email&&(0,r.jsx)("p",{className:"text-sm text-red-400",children:"Please provide a valid email!"})]}),(0,r.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,r.jsx)("label",{className:"text-base",children:"Your Message: "}),(0,r.jsx)("textarea",{className:"bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2",maxLength:"500",name:"message",required:!0,onChange:e=>n({...i,message:e.target.value}),onBlur:a,rows:"4",value:i.message})]}),(0,r.jsxs)("div",{className:"flex flex-col items-center gap-2",children:[e.required&&(0,r.jsx)("p",{className:"text-sm text-red-400",children:"Email and Message are required!"}),(0,r.jsxs)("button",{className:"flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold",role:"button",onClick:h,children:[(0,r.jsx)("span",{children:"Send Message"}),(0,r.jsx)(l.hlH,{className:"mt-1",size:18})]})]})]})]})]})}},8978:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/ayla.19ea4d31.jpg",height:4501,width:4501,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAqYP/xAAdEAABAgcAAAAAAAAAAAAAAAACAQMABAURISIj/9oACAEBAAE/AGznEqTqGPC2mY//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==",blurWidth:8,blurHeight:8}},5967:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/crefin.7d465e7f.jpg",height:2e3,width:3e3,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAQP/2gAMAwEAAhADEAAAAKkCf//EABsQAAEEAwAAAAAAAAAAAAAAABMAAxJRIzFB/9oACAEBAAE/AMxJF25XKX//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAwEBPwCP/9k=",blurWidth:8,blurHeight:5}},5928:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/real-estate.aafb3b94.jpg",height:2e3,width:3e3,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAApIZ//8QAGxAAAQQDAAAAAAAAAAAAAAAAEgECFEEABBX/2gAIAQEAAT8ALZ6QyXBLaiNoErP/xAAWEQADAAAAAAAAAAAAAAAAAAAAAkH/2gAIAQIBAT8AeH//xAAVEQEBAAAAAAAAAAAAAAAAAAAAAv/aAAgBAwEBPwCX/9k=",blurWidth:8,blurHeight:5}},9917:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/travel.374bd821.jpg",height:4500,width:4500,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAqIP/xAAcEAABBAMBAAAAAAAAAAAAAAABAgMRIQASYZH/2gAIAQEAAT8AKni5YhB7ewPkZ//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z",blurWidth:8,blurHeight:8}},4395:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/adobe-xd.ea44eb0c.svg",height:50,width:50,blurWidth:0,blurHeight:0}},5426:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/adobeaudition.6ac54c6a.svg",height:256,width:256,blurWidth:0,blurHeight:0}},361:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/after-effects.a9c72355.svg",height:50,width:50,blurWidth:0,blurHeight:0}},3436:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/angular.4bea2a47.svg",height:272,width:256,blurWidth:0,blurHeight:0}},4422:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/aws.ac2256dd.svg",height:153,width:256,blurWidth:0,blurHeight:0}},8927:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/azure.56a922c9.svg",height:244,width:256,blurWidth:0,blurHeight:0}},1319:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/blender.b6202fd4.svg",height:219,width:256,blurWidth:0,blurHeight:0}},9484:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/bootstrap.c61c87af.svg",height:256,width:256,blurWidth:0,blurHeight:0}},2857:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/bulma.ce338197.svg",height:373,width:256,blurWidth:0,blurHeight:0}},6577:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/c.8cdb6389.svg",height:288,width:256,blurWidth:0,blurHeight:0}},4285:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/canva.85fed86e.svg",height:44,width:44,blurWidth:0,blurHeight:0}},6439:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/capacitorjs.cb203835.svg",height:256,width:256,blurWidth:0,blurHeight:0}},3103:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/coffeescript.22e2f988.svg",height:206,width:256,blurWidth:0,blurHeight:0}},5326:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/cplusplus.d8945732.svg",height:288,width:256,blurWidth:0,blurHeight:0}},3913:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/csharp.39ee24d6.svg",height:288,width:256,blurWidth:0,blurHeight:0}},7383:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/css.18a757c4.svg",height:290,width:256,blurWidth:0,blurHeight:0}},9550:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/dart.de9a7e9f.svg",height:256,width:256,blurWidth:0,blurHeight:0}},4502:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/deno.7465a370.svg",height:256,width:256,blurWidth:0,blurHeight:0}},8977:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/django.47c79307.svg",height:256,width:256,blurWidth:0,blurHeight:0}},9857:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/docker.1fd925da.svg",height:50,width:50,blurWidth:0,blurHeight:0}},5234:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/fastify.f1401f4e.svg",height:165,width:256,blurWidth:0,blurHeight:0}},9332:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/figma.1029bdd0.svg",height:384,width:256,blurWidth:0,blurHeight:0}},6698:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/firebase.00a078b9.svg",height:351,width:256,blurWidth:0,blurHeight:0}},8706:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/flutter.4975c7c9.svg",height:299,width:256,blurWidth:0,blurHeight:0}},1544:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/gcp.10375a69.svg",height:77,width:95,blurWidth:0,blurHeight:0}},714:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/gimp.7c585e39.svg",height:256,width:296,blurWidth:0,blurHeight:0}},5673:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/git.50ce77c0.svg",height:256,width:256,blurWidth:0,blurHeight:0}},7385:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/go.2398d0ba.svg",height:192,width:512,blurWidth:0,blurHeight:0}},9888:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/graphql.1445d48c.svg",height:288,width:256,blurWidth:0,blurHeight:0}},1746:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/haxe.193d4b30.svg",height:256,width:256,blurWidth:0,blurHeight:0}},9045:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/html.017306fd.svg",height:290,width:256,blurWidth:0,blurHeight:0}},5646:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/illustrator.82356208.svg",height:50,width:50,blurWidth:0,blurHeight:0}},3299:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/ionic.2515af68.svg",height:256,width:256,blurWidth:0,blurHeight:0}},929:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/java.28962703.svg",height:346,width:256,blurWidth:0,blurHeight:0}},6572:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/javascript.b181c09e.svg",height:256,width:256,blurWidth:0,blurHeight:0}},5411:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/julia.e82a371c.svg",height:330,width:512,blurWidth:0,blurHeight:0}},7102:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/kotlin.de8eaa2b.svg",height:256,width:256,blurWidth:0,blurHeight:0}},3874:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/lightroom.dbe8fbea.svg",height:256,width:256,blurWidth:0,blurHeight:0}},7475:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/markdown.d252a99f.svg",height:158,width:256,blurWidth:0,blurHeight:0}},2145:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/materialui.f63da241.svg",height:204,width:256,blurWidth:0,blurHeight:0}},7677:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/matlab.b345c227.svg",height:234,width:257,blurWidth:0,blurHeight:0}},1299:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/memsql.fe5acef9.svg",height:184,width:256,blurWidth:0,blurHeight:0}},9997:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/microsoftoffice.c275d93f.svg",height:326,width:256,blurWidth:0,blurHeight:0}},8584:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/mongoDB.bdbfe282.svg",height:249,width:112,blurWidth:0,blurHeight:0}},7971:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/mysql.f25ccd48.svg",height:252,width:256,blurWidth:0,blurHeight:0}},2139:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/nextJS.5d08e3a4.svg",height:256,width:256,blurWidth:0,blurHeight:0}},4037:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/nginx.a985ae7e.svg",height:291,width:256,blurWidth:0,blurHeight:0}},8086:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/numpy.3c09ea44.svg",height:274,width:256,blurWidth:0,blurHeight:0}},5342:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/nuxtJS.b3618890.svg",height:191,width:256,blurWidth:0,blurHeight:0}},1229:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/opencv.777de634.svg",height:238,width:256,blurWidth:0,blurHeight:0}},5518:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/photoshop.11ddf3ae.svg",height:50,width:50,blurWidth:0,blurHeight:0}},2678:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/php.92f5d4c3.svg",height:258,width:512,blurWidth:0,blurHeight:0}},4660:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/picsart.8fc4adf4.svg",height:256,width:256,blurWidth:0,blurHeight:0}},6598:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/postgresql.57f0feb0.svg",height:264,width:256,blurWidth:0,blurHeight:0}},530:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/premierepro.0450e213.svg",height:256,width:256,blurWidth:0,blurHeight:0}},9279:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/python.54da882d.svg",height:255,width:256,blurWidth:0,blurHeight:0}},2880:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/pytorch.e649f8fc.svg",height:310,width:256,blurWidth:0,blurHeight:0}},2250:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/react.63480b3c.svg",height:228,width:256,blurWidth:0,blurHeight:0}},5446:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/ruby.734ec281.svg",height:255,width:256,blurWidth:0,blurHeight:0}},8346:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/selenium.d21aeb58.svg",height:269,width:256,blurWidth:0,blurHeight:0}},9269:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/sketch.c9e20e22.svg",height:232,width:256,blurWidth:0,blurHeight:0}},7775:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/strapi.2c93db42.svg",height:252,width:256,blurWidth:0,blurHeight:0}},5302:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/svelte.6406f9ac.svg",height:308,width:256,blurWidth:0,blurHeight:0}},6584:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/swift.6006c4be.svg",height:256,width:256,blurWidth:0,blurHeight:0}},4204:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/tailwind.0327ce72.svg",height:154,width:256,blurWidth:0,blurHeight:0}},9776:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/tensorflow.65f6ca51.svg",height:287,width:256,blurWidth:0,blurHeight:0}},4284:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/typescript.e2083e1d.svg",height:256,width:256,blurWidth:0,blurHeight:0}},2910:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/unity.9841984c.svg",height:256,width:256,blurWidth:0,blurHeight:0}},9881:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/vitejs.5da26425.svg",height:257,width:256,blurWidth:0,blurHeight:0}},3419:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/vue.763d0be3.svg",height:221,width:256,blurWidth:0,blurHeight:0}},14:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/vuetifyjs.f11a1e4c.svg",height:293,width:256,blurWidth:0,blurHeight:0}},1109:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/webix.9113f93c.svg",height:213,width:256,blurWidth:0,blurHeight:0}},8750:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/wolframalpha.6aeeed81.svg",height:256,width:256,blurWidth:0,blurHeight:0}},1206:function(e,t,i){"use strict";i.r(t),t.default={src:"/developer-portfolio/_next/static/media/wordpress.d1453069.svg",height:255,width:256,blurWidth:0,blurHeight:0}}},function(e){e.O(0,[465,705,515,549,971,23,744],function(){return e(e.s=1880)}),_N_E=e.O()}]);