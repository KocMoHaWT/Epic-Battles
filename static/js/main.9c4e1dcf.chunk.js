(window["webpackJsonpepic-battles"]=window["webpackJsonpepic-battles"]||[]).push([[0],{11:function(e,t,a){e.exports=a.p+"static/media/background.46e2bb89.png"},13:function(e,t,a){e.exports=a(26)},18:function(e,t,a){},25:function(e,t,a){e.exports=a.p+"static/media/mobileBro.befba4d5.jpg"},26:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),l=a.n(o),i=(a(18),a(10)),c=a(1),s=a(2),d=a(4),u=a(3),p=a(5),h=function(e){var t=e.borderSize,a=e.color,n={textShadow:"".concat(t," ").concat(t," 0 ").concat(a,",\n                  -").concat(t," -").concat(t," 0 ").concat(a,",\n                  ").concat(t," -").concat(t," 0 ").concat(a,",\n                  -").concat(t," ").concat(t," 0 ").concat(a)};return r.a.createElement("div",{id:e.id,style:n},e.children)},m=function(e){var t={backgroundColor:e.color};return r.a.createElement("div",{className:"healthTable"},r.a.createElement("div",{className:"bigHealth"},r.a.createElement("div",{className:"points"},"25"),r.a.createElement("div",{className:"points"},"24"),r.a.createElement("div",{className:"points"},"23"),r.a.createElement("div",{className:"points"},"22"),r.a.createElement("div",{className:"points"},"21"),r.a.createElement("div",{className:"points special"},r.a.createElement(h,{borderSize:"1px",color:e.color},"20")),r.a.createElement("div",{className:"points"},"19"),r.a.createElement("div",{className:"points"},"18"),r.a.createElement("div",{className:"points"},"17"),r.a.createElement("div",{className:"points"},"16"),r.a.createElement("div",{className:"points"},"15"),r.a.createElement("div",{className:"points"},"14"),r.a.createElement("div",{className:"points"},"13"),r.a.createElement("div",{className:"points"},"12"),r.a.createElement("div",{className:"points"},"11"),r.a.createElement("div",{className:"points"},"10"),r.a.createElement("div",{className:"points"},"9"),r.a.createElement("div",{className:"points"},"8"),r.a.createElement("div",{className:"points"},"7"),r.a.createElement("div",{className:"points"},"6")),r.a.createElement("div",{className:"smallHealth"},r.a.createElement("div",{className:"points",style:t},r.a.createElement(h,{borderSize:"1px",color:e.shadowColor},"5")),r.a.createElement("div",{className:"points",style:t},r.a.createElement(h,{borderSize:"1px",color:e.shadowColor},"4")),r.a.createElement("div",{className:"points",style:t},r.a.createElement(h,{borderSize:"1px",color:e.shadowColor},"3")),r.a.createElement("div",{className:"points",style:t},r.a.createElement(h,{borderSize:"1px",color:e.shadowColor},"2")),r.a.createElement("div",{className:"points",style:t},r.a.createElement(h,{borderSize:"1px",color:e.shadowColor},"1"))))},b=a(12),v=function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card__img"},this.props.photo?r.a.createElement(b.a,{fit:"cover",loader:r.a.createElement("div",null,"Loading"),onLoad:function(){var e;return(e=console).log.apply(e,arguments)},onError:function(){var e;return(e=console).log.apply(e,arguments)},src:this.props.photo}):null,r.a.createElement("button",{className:this.props.photo?"inputFile":"inputFile static",onClick:this.props.handleButtonClick},r.a.createElement("div",{className:"loadButton"},r.a.createElement("span",null,"Select Image"))),r.a.createElement("input",{type:"file",onChange:this.props.handleUploadPhoto,className:"hidden",id:"inputFile",ref:this.props.refInputFile}),this.props.photo&&r.a.createElement("div",{className:"player"},r.a.createElement("div",{className:"player__info"},r.a.createElement("span",{className:"title"},this.props.title),r.a.createElement("span",{className:"subTitle"},this.props.subTitle)))),r.a.createElement("div",{className:"card__health"},r.a.createElement(m,{color:this.props.currentVariant.backgroundColor,shadowColor:this.props.currentVariant.shadowColor})))}}]),t}(n.Component),f=function(e){return r.a.createElement("div",{className:"playerInput"},r.a.createElement("label",{htmlFor:"title"},"\u041f\u043e\u0437\u0438\u0432\u043d\u0438\u0439"),r.a.createElement("input",{type:"text",name:"title",onChange:e.handleTitle,value:e.title}),r.a.createElement("label",{htmlFor:"subTitle"},"\u0427\u0438\u043c \u0432i\u0434\u043e\u043c\u0438\u0439?"),r.a.createElement("input",{type:"text",name:"subTitle",onChange:e.handleSubTitle,value:e.subTitle}))};var g=function(e){var t=e.shadowColor,a=e.backgroundColor,n=e.handleClick,o=e.index,l={shadowColor:t,backgroundColor:a};return r.a.createElement("div",{className:"previewBlock",onClick:n,key:o},r.a.createElement("div",{className:"previewBlock__big"},r.a.createElement("div",{className:"points special"},r.a.createElement(h,{borderSize:"1px",color:t},"20"))),r.a.createElement("div",{className:"previewBlock__small"},r.a.createElement("div",{className:"points",style:l},r.a.createElement(h,{borderSize:"1px",color:t,id:o},"5"))))},E=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={backgroundColor:"#0074D9"},a.renderColorVariants=function(){return a.props.colorVariants.map((function(e,t){return r.a.createElement(g,{index:t,handleClick:function(){return a.props.handleClick(t)},backgroundColor:e.backgroundColor,shadowColor:e.shadowColor})}))},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"changeBlock"},r.a.createElement("h1",null,"\u041e\u0431\u0435\u0440\u0438 \u043a\u043e\u043bi\u0440 hp \u043e\u0447\u043e\u043a"),r.a.createElement("div",{className:"colorGroup"},this.renderColorVariants()),this.props.photo&&r.a.createElement(f,{handleTitle:this.props.handleTitle,handleSubTitle:this.props.handleSubTitle,title:this.props.title,subTitle:this.props.subTitle}))}}]),t}(r.a.Component),C=a(6),k=(a(25),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).handleClick=function(e){console.log(e);var t=a.state.colorVariants[+e];a.setState({currentVariant:{backgroundColor:t.backgroundColor,shadowColor:t.shadowColor}})},a.handleButtonClick=function(){document.getElementById("inputFile").click()},a.handleTitle=function(e){a.setState({title:e.target.value})},a.handleSubTitle=function(e){a.setState({subTitle:e.target.value})},a.handleUploadPhoto=function(e){e.target.files[0]&&a.setState({photo:URL.createObjectURL(e.target.files[0])})},a.refInputFile=r.a.createRef(),a.state={colorVariants:[],backgroundUrl:"",currentVariant:{backgroundColor:"#745fa4",shadowColor:"#db5965"},title:"\u0412\u0430\u0441\u044f",subTitle:"\u0420\u0443\u0431\u0438\u0441\u0442 \u043d\u0430 \u0440\u0435\u0439\u043a\u0430\u0445",photo:null},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){console.log(C[0].backgroundImage),this.setState({colorVariants:C[0].colors,backgroundImage:C[0].backgroundImage})}},{key:"render",value:function(){var e={backgroundImage:"url( ".concat(this.state.backgroundImage,")"),backgroundSize:"cover"};return r.a.createElement("div",{className:"wrapper",style:e},r.a.createElement(E,{colorVariants:this.state.colorVariants,handleClick:this.handleClick,handleTitle:this.handleTitle,handleSubTitle:this.handleSubTitle,photo:this.state.photo,title:this.state.title,subTitle:this.state.subTitle}),r.a.createElement(v,{photo:this.state.photo,handleUploadPhoto:this.handleUploadPhoto,backgroundColor:this.state.backgroundColor,currentVariant:this.state.currentVariant,title:this.state.title,subTitle:this.state.subTitle,handleButtonClick:this.handleButtonClick,refInputFile:this.refInputFile}))}}]),t}(n.Component));function w(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?w(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):w(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var N={width:"100vw",height:"100vh",overflow:"hidden",position:"relative"},S={top:0,left:0,position:"absolute"},_=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).bounds=null,a.viewportSize=null,a.state={viewport_x:675,viewport_y:643,last_client_x:0,last_client_y:0,dragging:!1},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"createSpaceStyle",value:function(){var e={top:"-".concat(this.state.viewport_y,"px"),left:"-".concat(this.state.viewport_x,"px")};return y({},S,{},e)}},{key:"createViewportStyle",value:function(){var e=this.props.style||{};return y({},N,{},e)}},{key:"handleDragOver",value:function(e){if(this.state.dragging&&this.bounds&&this.viewportSize){var t=e.clientX,a=e.clientY,n=t-this.state.last_client_x,r=a-this.state.last_client_y,o=this.bounds.x-this.viewportSize.w,l=this.bounds.y-this.viewportSize.h,i=Math.max(0,Math.min(o,this.state.viewport_x-n)),c=Math.max(0,Math.min(l,this.state.viewport_y-r));return this.setState((function(e){return y({},e,{viewport_x:i,viewport_y:c,last_client_x:t,last_client_y:a})}))}}},{key:"handleDragStart",value:function(e){var t=e.clientX,a=e.clientY;return this.setState((function(e){return y({},e,{dragging:!0,last_client_x:t,last_client_y:a})}))}},{key:"handleDragEnd",value:function(){return this.setState((function(e){return y({},e,{dragging:!1,last_client_x:0,last_client_y:0})}))}},{key:"preserveBounds",value:function(e){if(e){var t=e.getBoundingClientRect();this.bounds={x:t.width,y:t.height}}}},{key:"preserveViewportSize",value:function(e){if(e){var t=e.getBoundingClientRect();this.viewportSize={w:t.width,h:t.height}}}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"desktop"},r.a.createElement("div",{className:"desktop__viewport",ref:function(t){return e.preserveViewportSize(t)},style:this.createViewportStyle()},r.a.createElement("div",{className:"desktop__space",ref:function(t){return e.preserveBounds(t)},style:this.createSpaceStyle(),onDragStart:function(t){return e.handleDragStart(t)},onDragOver:function(t){return e.handleDragOver(t)},onDragEnd:function(t){return e.handleDragEnd(t)}},this.props.children),r.a.createElement(k,null)))}}]),t}(r.a.Component),O=a(11),j=a.n(O);var x=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(_,null,r.a.createElement("img",{src:j.a,alt:"this back"})),r.a.createElement("div",{className:"mobileBro"}))};l.a.render(r.a.createElement(x,null),document.getElementById("root"))},6:function(e){e.exports=JSON.parse('[{"colors":[{"backgroundColor":"#745fa4","shadowColor":"#db5965"},{"backgroundColor":"#f55a5e","shadowColor":"#ffe79d"},{"backgroundColor":"#fff99e","shadowColor":"#c16a25"},{"backgroundColor":"#37967e","shadowColor":"#bdbc6c"},{"backgroundColor":"#fa510c","shadowColor":"#ffb337"},{"backgroundColor":"#1b88b3","shadowColor":"#ed6a78"},{"backgroundColor":"#ed0e13","shadowColor":"#ffd13d"},{"backgroundColor":"#f05887","shadowColor":"#ffd16b"},{"backgroundColor":"#f53c44","shadowColor":"#f9ae77"},{"backgroundColor":"#ba3919","shadowColor":"#9e973d"}],"backgroundImage":""}]')}},[[13,1,2]]]);
//# sourceMappingURL=main.9c4e1dcf.chunk.js.map