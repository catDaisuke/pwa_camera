webpackJsonp([0],[,,,function(t,e,a){"use strict";e.a={name:"app"}},function(t,e,a){"use strict";e.a={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js PWA"}}}},function(t,e,a){"use strict";e.a={name:"hello1",data:function(){return{video:{},canvas:{},captures:[]}},mounted:function(){var t=this;this.video=this.$refs.video,navigator.mediaDevices.getUserMedia({audio:!1,video:!0}).then(function(e){t.video.src=window.URL.createObjectURL(e),t.video.play()})},methods:{capture:function(){this.canvas=this.$refs.canvas;var t=this.video.offsetWidth,e=this.video.offsetHeight;this.canvas.setAttribute("width",t),this.canvas.setAttribute("height",e),this.canvas.getContext("2d").drawImage(this.video,0,0,t,e),this.captures.push(this.canvas.toDataURL("image/png"))}}}},function(t,e,a){"use strict";e.a={name:"camera",data:function(){return{video:{},canvas:{},captures:[]}},mounted:function(){var t=this;this.video=this.$refs.video,navigator.mediaDevices&&navigator.mediaDevices.getUserMedia&&navigator.mediaDevices.getUserMedia({video:!0}).then(function(e){t.video.src=window.URL.createObjectURL(e),t.video.play()})},methods:{capture:function(){alert(navigator.platform),this.canvas=this.$refs.canvas;var t=this.video.offsetWidth,e=this.video.offsetHeight;this.canvas.getContext("2d").drawImage(this.video,0,0,t,e),this.captures.push(this.canvas.toDataURL("image/png"))}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(2),r=a(11),i=a(15);n.a.config.productionTip=!1,new n.a({el:"#app",router:i.a,template:"<App/>",components:{App:r.a}})},,,,function(t,e,a){"use strict";function n(t){a(12)}var r=a(3),i=a(14),s=a(0),o=n,c=s(r.a,i.a,!1,o,null,null);e.a=c.exports},function(t,e){},,function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t._m(0),t._v(" "),a("main",[a("router-view")],1)])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("span",[t._v("Camera App")])])}],i={render:n,staticRenderFns:r};e.a=i},function(t,e,a){"use strict";var n=a(2),r=a(16),i=a(17),s=a(20),o=a(23);n.a.use(r.a),e.a=new r.a({routes:[{path:"/",name:"Hello",component:i.a},{path:"/1",name:"Hello1",component:s.a},{path:"/2",name:"Camera",compomemt:o.a}]})},,function(t,e,a){"use strict";function n(t){a(18)}var r=a(4),i=a(19),s=a(0),o=n,c=s(r.a,i.a,!1,o,null,null);e.a=c.exports},function(t,e){},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://chat.vuejs.org/",target:"_blank",rel:"noopener"}},[t._v("Vue Community Chat")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank",rel:"noopener"}},[t._v("Docs for This Template")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],i={render:n,staticRenderFns:r};e.a=i},function(t,e,a){"use strict";function n(t){a(21)}var r=a(5),i=a(22),s=a(0),o=n,c=s(r.a,i.a,!1,o,null,null);e.a=c.exports},function(t,e){},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h2",[t._v("Essential Links")]),t._v(" "),a("video",{ref:"video",attrs:{width:"720px",autoplay:"",playsinline:""}}),t._v(" "),a("canvas",{ref:"canvas",attrs:{id:"canvas"}}),t._v(" "),a("img",{attrs:{id:"image"}}),t._v(" "),a("button",{attrs:{id:"snap"},on:{click:function(e){t.capture()}}},[t._v("Snap Photo")])])},r=[],i={render:n,staticRenderFns:r};e.a=i},function(t,e,a){"use strict";function n(t){a(24)}var r=a(6),i=a(25),s=a(0),o=n,c=s(r.a,i.a,!1,o,null,null);e.a=c.exports},function(t,e){},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h2",[t._v("Essential Links")]),t._v(" "),a("video",{ref:"video",attrs:{width:"720px",autoplay:"",playsinline:""}})])},r=[],i={render:n,staticRenderFns:r};e.a=i}],[7]);
//# sourceMappingURL=app.a416a5153ab2cb9b298a.js.map