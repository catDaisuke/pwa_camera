webpackJsonp([0],[,,,function(e,t,a){"use strict";t.a={name:"app"}},function(e,t,a){"use strict";t.a={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js PWA"}}}},function(e,t,a){"use strict";t.a={name:"hello1",data:function(){return{video:{},canvas:{},captures:[]}},mounted:function(){var e=this;this.video=this.$refs.video,navigator.mediaDevices&&navigator.mediaDevices.getUserMedia&&navigator.mediaDevices.getUserMedia({video:!0}).then(function(t){e.video.src=window.URL.createObjectURL(t),e.video.play()})},methods:{capture:function(){this.canvas=this.$refs.canvas;var e=this.video.offsetWidth,t=this.video.offsetHeight;this.canvas.setAttribute("width",e),this.canvas.setAttribute("height",t),this.canvas.getContext("2d").drawImage(this.video,0,0,e,t),this.captures.push(this.canvas.toDataURL("image/png"))}}}},function(e,t,a){"use strict";t.a={name:"camera",data:function(){return{video:{},canvas:{},captures:[]}},mounted:function(){var e=this;this.video=this.$refs.video,navigator.mediaDevices&&navigator.mediaDevices.getUserMedia&&navigator.mediaDevices.getUserMedia({video:!0}).then(function(t){e.video.src=window.URL.createObjectURL(t),e.video.play()})}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(2),r=a(11),i=a(15);n.a.config.productionTip=!1,new n.a({el:"#app",router:i.a,template:"<App/>",components:{App:r.a}})},,,,function(e,t,a){"use strict";function n(e){a(12)}var r=a(3),i=a(14),s=a(0),o=n,c=s(r.a,i.a,!1,o,null,null);t.a=c.exports},function(e,t){},,function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[e._m(0),e._v(" "),a("main",[a("router-view")],1)])},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",[a("span",[e._v("Camera App")])])}],i={render:n,staticRenderFns:r};t.a=i},function(e,t,a){"use strict";var n=a(2),r=a(16),i=a(17),s=a(20),o=a(23);n.a.use(r.a),t.a=new r.a({routes:[{path:"/",name:"Hello",component:i.a},{path:"/1",name:"Hello1",component:s.a},{path:"/2",name:"Camera",compomemt:o.a}]})},,function(e,t,a){"use strict";function n(e){a(18)}var r=a(4),i=a(19),s=a(0),o=n,c=s(r.a,i.a,!1,o,null,null);t.a=c.exports},function(e,t){},function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hello"},[a("h1",[e._v(e._s(e.msg))]),e._v(" "),a("h2",[e._v("Essential Links")]),e._v(" "),e._m(0),e._v(" "),a("h2",[e._v("Ecosystem")]),e._v(" "),e._m(1)])},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),e._v(" "),a("li",[a("a",{attrs:{href:"http://chat.vuejs.org/",target:"_blank",rel:"noopener"}},[e._v("Vue Community Chat")])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),e._v(" "),a("li",[a("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank",rel:"noopener"}},[e._v("Docs for This Template")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),e._v(" "),a("li",[a("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),e._v(" "),a("li",[a("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],i={render:n,staticRenderFns:r};t.a=i},function(e,t,a){"use strict";function n(e){a(21)}var r=a(5),i=a(22),s=a(0),o=n,c=s(r.a,i.a,!1,o,null,null);t.a=c.exports},function(e,t){},function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hello"},[a("h2",[e._v("Essential Links")]),e._v(" "),a("video",{ref:"video",attrs:{width:"720px",autoplay:"",playsinline:""}}),e._v(" "),a("canvas",{ref:"canvas",attrs:{id:"canvas"}}),e._v(" "),a("img",{attrs:{id:"image"}}),e._v(" "),a("button",{attrs:{id:"snap"},on:{click:function(t){e.capture()}}},[e._v("Snap Photo")])])},r=[],i={render:n,staticRenderFns:r};t.a=i},function(e,t,a){"use strict";function n(e){a(24)}var r=a(6),i=a(25),s=a(0),o=n,c=s(r.a,i.a,!1,o,null,null);t.a=c.exports},function(e,t){},function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hello"},[a("h2",[e._v("Essential Links")]),e._v(" "),a("video",{ref:"video",attrs:{width:"720px",autoplay:"",playsinline:""}})])},r=[],i={render:n,staticRenderFns:r};t.a=i}],[7]);
//# sourceMappingURL=app.434cc8974a8b780b7879.js.map