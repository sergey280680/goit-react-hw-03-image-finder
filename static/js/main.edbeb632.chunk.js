(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{33:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(13),o=n.n(i),c=(n(33),n(6)),s=n(7),l=n(9),u=n(8),p=n(17),d=n(10),h=n.n(d),g=n(12),b=n(16),m=n.n(b),x="22022827-e7833ac6793c04553f9ed3424";function f(){return j.apply(this,arguments)}function j(){return(j=Object(g.a)(h.a.mark((function e(){var t,n,a,r,i,o,c=arguments;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:{},n=t.page,a=void 0===n?1:n,r=t.query,i="?q=".concat(r,"&key=").concat(x,"&page=").concat(a,"&image_type=photo&orientation=horizontal&per_page=").concat(12),e.prev=2,e.next=5,m.a.get("".concat(i));case 5:return o=e.sent,e.abrupt("return",o);case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}m.a.defaults.baseURL="https://pixabay.com/api/";var y,O,v,w,k,S,q,C,I,z,F,D,L=n(11),U=n(3),M=n(4),H=M.a.button(y||(y=Object(U.a)(["\n  padding: 8px 16px;\n  margin: 12px auto;\n  border-radius: 2px;\n  background-color: #3f51b5;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 180px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n\n  :hover,\n  :focus {\n    background-color: #303f9f;\n  }\n"]))),Q=n(1),T=function(e){var t=e.handlePage;return Object(Q.jsx)(H,{type:"button",onClick:t,children:"Load More"})},E=M.a.div(O||(O=Object(U.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"]))),P=M.a.div(v||(v=Object(U.a)(["\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n"]))),R=document.querySelector("#modal-root"),B=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.closeModal()},e.handleBackDropClick=function(t){t.currentTarget===t.target&&e.props.closeModal()},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown),document.body.style.overflowY="hidden"}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown),document.body.style.overflowY="auto"}},{key:"render",value:function(){return Object(i.createPortal)(Object(Q.jsx)(E,{onClick:this.handleBackDropClick,children:Object(Q.jsx)(P,{children:Object(Q.jsx)("img",{src:this.props.selectedImage,alt:""})})}),R)}}]),n}(a.Component),A=M.a.ul(w||(w=Object(U.a)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),K=M.a.li(k||(k=Object(U.a)(["\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),N=M.a.img(S||(S=Object(U.a)(["\n  width: 100%;\n  height: 260px;\n  object-fit: cover;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  :hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"]))),J=function(e){var t=e.webformatURL,n=e.tags,a=e.onClick,r=e.largeImageUrl;return Object(Q.jsx)(K,{children:Object(Q.jsx)(N,{src:t,alt:n,onClick:function(){return a(r)},className:"ImageGalleryItem-image"})})},Y=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.images,n=e.handleSelectImage;return Object(Q.jsx)(Q.Fragment,{children:t&&Object(Q.jsx)(Q.Fragment,{children:Object(Q.jsx)(A,{children:t.map((function(e){var t=e.webformatURL,a=e.largeImageURL,r=e.tags,i=e.id;return Object(Q.jsx)(J,{webformatURL:t,largeImageUrl:a,tags:r,onClick:n},i)}))})})})}}]),n}(a.Component),_=M.a.header(q||(q=Object(U.a)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #3f51b5;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),G=M.a.form(C||(C=Object(U.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),W=M.a.button(I||(I=Object(U.a)(['\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url("https://image.flaticon.com/icons/svg/149/149852.svg");\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n']))),V=M.a.span(z||(z=Object(U.a)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),X=M.a.input(F||(F=Object(U.a)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  ::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),Z=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={imageQuery:""},e.handleNameChange=function(t){e.setState({imageQuery:t.currentTarget.value.toLowerCase()})},e.handlSubmit=function(t){if(t.preventDefault(),""===e.state.imageQuery.trim())return L.b.error("Fill in the search box",{duration:3e3,style:{backgroundColor:"orange",marginTop:50}});e.props.onSubmit(e.state.imageQuery),e.setState({imageQuery:""})},e}return Object(s.a)(n,[{key:"render",value:function(){return Object(Q.jsxs)(_,{children:[Object(Q.jsxs)(G,{onSubmit:this.handlSubmit,children:[Object(Q.jsx)(W,{type:"submit",children:Object(Q.jsx)(V,{children:"Search"})}),Object(Q.jsx)(X,{type:"text",autocomplete:"off",value:this.state.imageQuery,onChange:this.handleNameChange,placeholder:"Search images and photos"})]}),Object(Q.jsx)(L.a,{})]})}}]),n}(a.Component),$=M.a.div(D||(D=Object(U.a)(["\n  display: flex;\n  justify-content: center;\n"]))),ee=n(27),te=n.n(ee),ne=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(Q.jsx)($,{children:Object(Q.jsx)(te.a,{type:"ThreeDots",color:"#00BFFF",height:80,width:80,timeout:3e3})})}}]),n}(a.Component),ae=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={query:null,page:1,images:null,quantityImages:0,totalHits:0,selectedImage:null,status:null},e.handlePage=function(){e.setState((function(e){return{page:e.page+1}}))},e.handleSelectImage=function(t){e.setState({selectedImage:t})},e.closeModal=function(t){e.setState({selectedImage:null})},e.handleFormSubmit=function(t){e.setState({query:t})},e}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(){var e=Object(g.a)(h.a.mark((function e(t,n){var a,r,i,o=this;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=function(){var e=Object(g.a)(h.a.mark((function e(t,n){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o.setState({status:"panding"}),e.next=3,f({page:t,query:n});case 3:return a=e.sent,o.setState({totalHits:a.data.totalHits}),e.abrupt("return",a.data.hits);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),r=function(e){n.page!==o.state.page&&o.setState((function(t){return{images:[].concat(Object(p.a)(t.images),Object(p.a)(e))}})),n.query!==o.state.query&&o.setState({images:e})},n.query===this.state.query&&n.page===this.state.page){e.next=18;break}if(!(""===this.state.query.trim()||this.state.query.length<2)){e.next=5;break}return e.abrupt("return");case 5:if(!(n.query!==this.state.query&&this.state.page>1)){e.next=8;break}return this.setState({page:1,images:[]}),e.abrupt("return");case 8:return e.next=10,a(this.state.page,this.state.query);case 10:if(i=e.sent,r(i),this.setState({quantityImages:this.state.images.length}),0!==this.state.totalHits){e.next=16;break}return this.setState({status:"error"}),e.abrupt("return",L.b.error('search for the query "'.concat(this.state.query,'" gave nothing '),{duration:3e3,style:{backgroundColor:"red",marginTop:50,transition:"all 3s ease-out"}}));case 16:this.setState({status:"resolved"}),this.state.images.length>12&&window.scrollTo({top:document.documentElement.scrollHeight-1230,behavior:"smooth"});case 18:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.images,n=e.status,a=e.quantityImages,r=e.totalHits,i=e.selectedImage,o=this.handleFormSubmit,c=this.handleSelectImage,s=this.handlePage,l=this.closeModal;return Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)(Z,{onSubmit:o}),"panding"===n&&Object(Q.jsx)(ne,{}),"error"===n&&Object(Q.jsx)(L.a,{}),"resolved"===n&&Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)(Y,{images:t,handleSelectImage:c}),r!==a&&Object(Q.jsx)(T,{handlePage:s}),i&&Object(Q.jsx)(B,{selectedImage:i,closeModal:l})]})]})}}]),n}(a.Component),re=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(Q.jsx)(Q.Fragment,{children:Object(Q.jsx)(ae,{})})}}]),n}(a.Component);o.a.render(Object(Q.jsx)(r.a.StrictMode,{children:Object(Q.jsx)(re,{})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.edbeb632.chunk.js.map