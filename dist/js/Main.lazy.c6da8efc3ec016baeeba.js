(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{588:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l,a,o,u=C(n(84)),i=C(n(5)),r=C(n(8)),d=C(n(4)),f=C(n(6)),c=C(n(591));n(592);var s=n(1),h=C(s),p=n(86),v=C(n(599)),m=C(n(600)),y=C(n(0));function C(e){return e&&e.__esModule?e:{default:e}}var k=c.default.Option,_=(0,s.createContext)(),g=_.Provider,E=_.Consumer,x=(0,p.inject)("Channel")(l=(0,p.observer)((o=a=function(e){function t(e){(0,i.default)(this,t);var n=(0,d.default)(this,(t.__proto__||(0,u.default)(t)).call(this,e));return console.info(e,"fffffff"),n.ss={age:"xiao",name:"dddsfsf"},n.Dom=null,n}return(0,f.default)(t,e),(0,r.default)(t,[{key:"getChildContext",value:function(){return{name:"xiaoshulin"}}},{key:"UNSAFE_componentWillMount",value:function(){this.props.Channel.setFoundationData()}},{key:"componentDidMount",value:function(){console.info(this.Dom,"DomDomDomDomDomDomDom"),this.Dom.eat()}},{key:"handleClick",value:function(e,t){console.info(this),console.info(e),console.info(e.target),console.info(t)}},{key:"sing",value:function(){console.info(this)}},{key:"render",value:function(){var e=this;return h.default.createElement(g,{value:this.ss},h.default.createElement("div",{style:{padding:"20px"}},h.default.createElement(c.default,{style:{width:200},showSearch:!0,optionFilterProp:"children",filterOption:function(e,t){return t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0}},this.props.Channel.getFoundationData.map(function(e){return h.default.createElement(k,{key:e.id,value:e.id},e.name)})),h.default.createElement("div",{style:{backgroundColor:"#fff",marginTop:"20px"}},this.props.Channel.getFoundationData.map(function(e){return h.default.createElement("span",{key:e.id,style:{padding:"20px",margin:"10px"}},e.name)})),h.default.createElement("div",{onClick:function(t){e.handleClick(t,55)}},"dian")),h.default.createElement(v.default,null,h.default.createElement(E,null,function(e){return h.default.createElement("div",null,h.default.createElement("div",null,e.name),h.default.createElement("div",null,e.age))})),h.default.createElement(m.default,{ref:function(t){e.Dom=t}}),h.default.createElement("div",null,this.props.Channel.getState),h.default.createElement("span",{onClick:function(){return e.props.Channel.addStage()}},"点击"))}}]),t}(s.Component),a.contextTypes={router:y.default.object.isRequired},a.childContextTypes={name:y.default.string},l=o))||l)||l;t.default=x},589:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l,a=h(n(84)),o=h(n(5)),u=h(n(8)),i=h(n(4)),r=h(n(6)),d=h(n(591));n(592);var f=n(1),c=h(f),s=n(86);function h(e){return e&&e.__esModule?e:{default:e}}var p=d.default.Option,v=(0,s.inject)("Setting")(l=(0,s.observer)(l=function(e){function t(e){(0,o.default)(this,t);var n=(0,i.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e));return console.info(e,"hhhhhhhhhhhhhhh"),n.handleClick=n.handleClick.bind(n),n.state={arr:[{id:1,value:"xiao"},{id:2,value:"shu"},{id:3,value:"lin"}]},n}return(0,r.default)(t,e),(0,u.default)(t,[{key:"handleClick",value:function(){this.props.history.push("/channel_main")}},{key:"handleChange",value:function(e){console.log("selected "+e)}},{key:"handleBlur",value:function(){console.log("blur")}},{key:"handleFocus",value:function(){console.log("focus")}},{key:"render",value:function(){return c.default.createElement("div",{style:{width:"100%",top:"60px",position:"absolute",bottom:"0px",overflow:"auto"},onClick:this.handleClick},"主retetetertr",c.default.createElement("div",{style:{height:300}}),c.default.createElement("div",{style:{height:300}}),c.default.createElement(d.default,{showSearch:!0,style:{width:200},placeholder:"Select a person",optionFilterProp:"children",onChange:this.handleChange,onFocus:this.handleFocus,onBlur:this.handleBlur,filterOption:function(e,t){return t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0}},this.state.arr.map(function(e){return c.default.createElement(p,{key:e.id,value:e.id},e.value)})),c.default.createElement("div",{onClick:this.handleClick},"dianji"))}}]),t}(f.Component))||l)||l;t.default=v},599:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=function(e){return e&&e.__esModule?e:{default:e}}(n(1));t.default=function(e){return"function"==typeof e.children?e.children({name:"xiaoshulin",age:34}):l.default.createElement("div",{name:"xiao"},"xiao",e.children)}},600:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(n(84)),a=r(n(5)),o=r(n(4)),u=r(n(8)),i=r(n(6));function r(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(){(0,a.default)(this,t);var e=(0,o.default)(this,(t.__proto__||(0,l.default)(t)).call(this));return e.name="xiao",e.age="xiao",e}return(0,i.default)(t,e),(0,u.default)(t,null,[{key:"fly",value:function(){console.info("I can fly")}}]),(0,u.default)(t,[{key:"eat",value:function(){console.info("eateat")}},{key:"render",value:function(){return 22342423}}]),t}(n(1).Component);t.default=d}}]);
//# sourceMappingURL=Main.lazy.c6da8efc3ec016baeeba.js.map