(window.webpackJsonp=window.webpackJsonp||[]).push([[30,129,130,131,132],{1156:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),r=t(29);function l(){var e=Object(r.a)(["\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n"]);return l=function(){return e},e}var o=t(27).c.div(l());n.default=function(e){return i.a.createElement(o,Object.assign({className:null!=e.className?"".concat(e.className," isoLayoutContentWrapper"):"isoLayoutContentWrapper"},e),e.children)}},1157:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),r=t(29),l=t(27),o=t(6);function s(){var e=Object(r.a)(["\n  font-size: 13px;\n  font-weight: 400;\n  color: ",";\n  line-height: 24px;\n"]);return s=function(){return e},e}function c(){var e=Object(r.a)(["\n  font-size: 14px;\n  font-weight: 500;\n  color: ",";\n  margin: 0;\n  margin-bottom: 5px;\n"]);return c=function(){return e},e}var p=l.c.h3(c(),Object(o.palette)("text",0)),d=l.c.p(s(),Object(o.palette)("text",3)),m=function(e){return i.a.createElement("div",null,e.title?i.a.createElement(p,{className:"isoBoxTitle"}," ",e.title," "):"",e.subtitle?i.a.createElement(d,{className:"isoBoxSubTitle"}," ",e.subtitle," "):"")};function f(){var e=Object(r.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: #ffffff;\n  border: 1px solid ",";\n  margin: 0 0 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 20px;\n    ",";\n  }\n\n  &.half {\n    width: calc(50% - 34px);\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n"]);return f=function(){return e},e}var u=l.c.div(f(),Object(o.palette)("border",0),"");n.default=function(e){return i.a.createElement(u,{className:"".concat(e.className," isoBoxWrapper"),style:e.style},i.a.createElement(m,{title:e.title,subtitle:e.subtitle}),e.children)}},1158:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),r=t(29),l=t(27),o=t(6),s=t(47);function c(){var e=Object(r.a)(["\n  font-size: 19px;\n  font-weight: 500;\n  color: ",";\n  width: 100%;\n  margin-right: 17px;\n  margin-bottom: 30px;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n\n  @media only screen and (max-width: 767px) {\n    margin: 0 10px;\n    margin-bottom: 30px;\n  }\n\n  &:before {\n    content: '';\n    width: 5px;\n    height: 40px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n\n  &:after {\n    content: '';\n    width: 100%;\n    height: 1px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n"]);return c=function(){return e},e}var p=l.c.h1(c(),Object(o.palette)("secondary",2),Object(o.palette)("secondary",3),function(e){return"rtl"===e["data-rtl"]?"0 0 0 15px":"0 15px 0 0"},Object(o.palette)("secondary",3),function(e){return"rtl"===e["data-rtl"]?"0 15px 0 0":"0 0 0 15px"}),d=Object(s.a)(p);n.default=function(e){return i.a.createElement(d,{className:"isoComponentTitle"},e.children)}},1161:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),r=t(29),l=t(27),o=t(6),s=t(47);function c(){var e=Object(r.a)(["\n  margin-top: 30px;\n  -webkit-overflow-scrolling: touch;\n\n  .demoBtn {\n    margin-right: ",";\n    margin-left: ",";\n  }\n\n  .demoBtnsWrapper {\n    &:nth-child(1) {\n      margin-left: ",";\n      margin-right: ",";\n      white-space: nowrap;\n    }\n\n    &:nth-child(2) {\n      width: 70px;\n      float: ",";\n    }\n\n    &:nth-child(3) {\n      width: 70px;\n      margin-left: ",";\n      margin-right: ",";\n    }\n\n    &:nth-child(4) {\n      margin-left: ",";\n      margin-right: ",";\n      clear: both;\n      white-space: nowrap;\n    }\n\n    @media only screen and (max-width: 480px) {\n      margin-left: ",";\n      white-space: nowrap;\n      margin-right: ",";\n      float: none !important;\n    }\n\n    .demoPosBtn {\n      width: 70px;\n      margin-right: ",";\n      margin-left: ",";\n      margin-bottom: 8px;\n      padding: 0;\n\n      @media only screen and (max-width: 480px) {\n        width: 65px;\n      }\n    }\n  }\n\n  .ant-btn {\n    &:not(.demoPosBtn) {\n      &:last-child {\n        margin-right: 0;\n      }\n    }\n  }\n\n  .tooltipBtn {\n    display: inline-block;\n    line-height: 32px;\n    height: 32px;\n    width: 70px;\n    font-size: 14px;\n    text-align: center;\n    background: ",";\n    margin-right: ",";\n    margin-left: ",";\n    margin-bottom: 6px;\n    border-radius: 6px;\n  }\n\n  .ant-progress {\n    &.ant-progress-circle {\n      margin-right: ",";\n      margin-left: ",";\n\n      &:last-child {\n        margin-right: ",";\n        margin-left: ",";\n      }\n    }\n  }\n\n  strong {\n    font-weight: 700;\n    font-size: 14px;\n  }\n"]);return c=function(){return e},e}var p=l.c.div(c(),function(e){return"rtl"===e["data-rtl"]?"0":"10px"},function(e){return"rtl"===e["data-rtl"]?"10px":"0"},function(e){return"rtl"===e["data-rtl"]?"0":"70px"},function(e){return"rtl"===e["data-rtl"]?"70px":"0"},function(e){return"rtl"===e["data-rtl"]?"right":"left"},function(e){return"rtl"===e["data-rtl"]?"0":"295px"},function(e){return"rtl"===e["data-rtl"]?"295px":"0"},function(e){return"rtl"===e["data-rtl"]?"0":"70px"},function(e){return"rtl"===e["data-rtl"]?"70px":"0"},function(e){return"rtl"===e["data-rtl"]?"8px":"0 !important"},function(e){return"rtl"===e["data-rtl"]?"0 !important":"8px"},function(e){return"rtl"===e["data-rtl"]?"0":"8px"},function(e){return"rtl"===e["data-rtl"]?"8px":"0"},Object(o.palette)("secondary",1),function(e){return"rtl"===e["data-rtl"]?"auto":"6px"},function(e){return"rtl"===e["data-rtl"]?"6px":"0"},function(e){return"rtl"===e["data-rtl"]?"0":"15px"},function(e){return"rtl"===e["data-rtl"]?"15px":"0"},function(e){return e["data-rtl"],"0"},function(e){return e["data-rtl"],"0"}),d=Object(s.a)(p);n.default=function(e){return i.a.createElement(d,{className:"isoExampleWrapper",style:e.style},e.children)}},1163:function(e,n,t){"use strict";var a={rowStyle:{width:"100%",display:"flex",flexFlow:"row wrap"},colStyle:{marginBottom:"16px"},gutter:16};n.a=a},1248:function(e,n,t){e.exports=t.p+"static/media/image3.d032955c.jpg"},1249:function(e,n,t){e.exports=t.p+"static/media/image5.603427e6.jpg"},1291:function(e,n,t){e.exports=t.p+"static/media/image1.1c979949.jpg"},1292:function(e,n,t){e.exports=t.p+"static/media/image4.7db25367.jpg"},1321:function(e,n,t){e.exports=t.p+"static/media/NoAPIKey.efba4584.svg"},1343:function(e,n,t){"use strict";var a=t(0),i=t.n(a),r=t(29),l=t(27),o=t(6);function s(){var e=Object(r.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  img {\n    width: 150px;\n    height: auto;\n    margin-bottom: 30px;\n  }\n\n  h3 {\n    font-size: 18px;\n    font-weight: 500;\n    color: ",";\n    margin: 0;\n  }\n"]);return s=function(){return e},e}var c=l.c.div(s(),Object(o.palette)("text",2)),p=t(1321),d=t.n(p);n.a=function(e){var n=e.width,t=void 0===n?"100%":n,a=e.height,r=void 0===a?"40vh":a;return i.a.createElement(c,{className:"isoHelperText",style:{width:t,height:r}},i.a.createElement("img",{alt:"#",src:d.a}),i.a.createElement("h3",null,"Please Enter Your API Key in the `src/settings/index.js`"))}},2629:function(e,n,t){"use strict";t.r(n);var a=t(18),i=t(19),r=t(25),l=t(23),o=t(24),s=t(0),c=t.n(s),p=t(32),d=t(31),m=t(1156),f=t(1158),u=t(1161),y=t(1157),g=t(1163),h=t(12),b=t(1291),x=t.n(b),w=t(1248),v=t.n(w),T=t(1292),O=t.n(T),j=t(1249),k=t.n(j),E=(JSON.stringify([{featureType:"all",elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#000000"},{lightness:40}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#000000"},{lightness:16}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:17},{weight:1.2}]},{featureType:"administrative",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"administrative.country",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"administrative.country",elementType:"geometry",stylers:[{visibility:"simplified"}]},{featureType:"administrative.country",elementType:"labels.text",stylers:[{visibility:"simplified"}]},{featureType:"administrative.province",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"administrative.locality",elementType:"all",stylers:[{visibility:"simplified"},{saturation:"-100"},{lightness:"30"}]},{featureType:"administrative.neighborhood",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"administrative.land_parcel",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"landscape",elementType:"all",stylers:[{visibility:"simplified"},{gamma:"0.00"},{lightness:"74"}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#34334f"},{lightness:"-37"}]},{featureType:"landscape.man_made",elementType:"all",stylers:[{lightness:"3"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#000000"},{lightness:21}]},{featureType:"road",elementType:"geometry",stylers:[{visibility:"simplified"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#2d2c45"},{lightness:"0"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:29},{weight:.2}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#7d7c9b"},{lightness:"43"}]},{featureType:"road.highway",elementType:"labels.text.stroke",stylers:[{visibility:"off"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#2d2c45"},{lightness:"1"}]},{featureType:"road.arterial",elementType:"labels.text",stylers:[{visibility:"on"}]},{featureType:"road.arterial",elementType:"labels.text.fill",stylers:[{color:"#7d7c9b"}]},{featureType:"road.arterial",elementType:"labels.text.stroke",stylers:[{visibility:"off"}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#2d2c45"},{lightness:"-1"},{gamma:"1"}]},{featureType:"road.local",elementType:"labels.text",stylers:[{visibility:"on"},{hue:"#ff0000"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#7d7c9b"},{lightness:"-31"}]},{featureType:"road.local",elementType:"labels.text.stroke",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#2d2c45"},{lightness:"-36"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#2d2c45"},{lightness:"0"},{gamma:"1"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{visibility:"off"}]}]),[{ID:1,title:"Manhatan Lake Cafe",location:"Manhatan, NY",img:x.a,lat:40.78306,lng:-73.971249,marker:{borderStyle:"double",borderColor:"grey",fontFamily:"ionicons",iconClass:"ion-android-pin"}},{ID:2,title:"Ridgewood Moon Castle",location:"Ridgewood, NY",img:v.a,lat:40.779545,lng:-74.023751,marker:{borderStyle:"double",borderColor:"red",fontFamily:"ionicons",iconClass:"ion-paper-airplane"}},{ID:3,title:"Astoria Cafe",location:"Astoria Park, NY",img:O.a,lat:40.779668,lng:-73.921589,marker:{borderStyle:"double",borderColor:"green",fontFamily:"ionicons",iconClass:"ion-chatbubbles"}},{ID:4,title:"Malcom hill",location:"Malcom X, NY",img:k.a,lat:40.809657,lng:-73.944201,marker:{borderStyle:"double",borderColor:"yellow",fontFamily:"ionicons",iconClass:"ion-coffee"}}]),M=t(41),C=t(1723),I=t(29),W=t(27),N=t(6),z=t(10);function L(){var e=Object(I.a)(["\n  .isoGoogleMap {\n    display: flex;\n    background: #fdfdfd;\n    position: relative;\n    overflow: hidden;\n\n    .marker-icon {\n      width: 44px;\n      height: 44px;\n      margin-left: 0;\n      margin-bottom: -22px !important;\n      display: -webkit-inline-flex;\n      display: -ms-inline-flex;\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      background-color: #ffffff;\n      position: relative;\n      transform: scale(1);\n      transform-origin: center center;\n      ",";\n      ",";\n\n      &:hover {\n        transform: scale(1.15);\n      }\n\n      .marker-icon-wrapper {\n        width: 36px;\n        height: 36px;\n        display: -webkit-inline-flex;\n        display: -ms-inline-flex;\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        background-color: ",";\n        ",";\n\n        i {\n          color: #fff;\n          font-size: 19px;\n          line-height: 1;\n        }\n      }\n    }\n\n    .isoMarkerInfoWindow {\n      position: relative;\n    }\n\n    .isoInfoWindowWrapper {\n      position: relative;\n    }\n\n    .isoInfoWindow {\n      display: block;\n      overflow: hidden;\n      width: 280px;\n      background-color: #ffffff;\n      z-index: 100;\n\n      .isoInfoWindowImage {\n        width: 100%;\n        height: 180px;\n        overflow: hidden;\n        text-align: center;\n        position: relative;\n        display: inline-block;\n\n        img {\n          display: block;\n          max-width: 100%;\n          position: absolute;\n          top: 0;\n          bottom: 0;\n          left: 0;\n          right: 0;\n          margin: auto;\n        }\n      }\n\n      .isoInfoWindowDetails {\n        display: block;\n        padding: 15px 30px;\n\n        .isoHeading {\n          font-size: 16px;\n          font-weight: 500;\n          color: ",";\n          margin: 0 0 5px;\n        }\n\n        .isoLocation {\n          font-size: 12px;\n          font-weight: 400;\n          color: ",";\n          margin-bottom: 0px;\n        }\n      }\n    }\n\n    .gm-style-iw {\n      > div {\n        display: block;\n      }\n\n      + div {\n        display: none;\n      }\n    }\n  }\n"]);return L=function(){return e},e}var A=W.c.div(L(),Object(z.c)(),Object(z.a)("50%"),Object(N.palette)("primary",0),Object(z.a)("50%"),Object(N.palette)("text",1),Object(N.palette)("text",1)),S=function(e){function n(e){var t;return Object(a.a)(this,n),(t=Object(r.a)(this,Object(l.a)(n).call(this,e))).loadMap=t.loadMap.bind(Object(h.a)(Object(h.a)(t))),t.state={center:{lat:40.78306,lng:-73.971249},zoom:13,posts:E,infoWindow:null},t}return Object(o.a)(n,e),Object(i.a)(n,[{key:"loadMap",value:function(e){var n=this.props.google;e&&n&&new n.maps.Map(e,{zoom:this.state.zoom,center:this.state.center,scrollwheel:!1,mapTypeControlOptions:{style:n.maps.MapTypeControlStyle.HORIZONTAL_BAR,position:n.maps.ControlPosition.TOP_RIGHT}})}},{key:"render",value:function(){var e=this.props.loaded;return c.a.createElement("div",null,e?c.a.createElement(A,null,c.a.createElement("div",{className:"isoGoogleMap",style:{height:"650px",width:"100%"},ref:this.loadMap})):c.a.createElement("span",null,"API is Loading"))}}]),n}(s.Component),P=Object(C.GoogleApiWrapper)({apiKey:M.d.apiKey})(S),B=function(e){return'<div class="marker-icon map-marker">\n      <div class="marker-icon-wrapper">\n        <i class="'.concat(e.iconClass,'"></i>\n      </div>\n    </div>')},R=function(e){function n(e){var t;return Object(a.a)(this,n),(t=Object(r.a)(this,Object(l.a)(n).call(this,e))).loadMap=t.loadMap.bind(Object(h.a)(Object(h.a)(t))),t.state={center:{lat:40.78306,lng:-73.971249},zoom:13,posts:E,infoWindow:null},t}return Object(o.a)(n,e),Object(i.a)(n,[{key:"loadMap",value:function(e){var n=this.props.google;if(e&&n){var a=this,i=new n.maps.Map(e,{zoom:this.state.zoom,center:this.state.center,scrollwheel:!1,mapTypeControlOptions:{style:n.maps.MapTypeControlStyle.HORIZONTAL_BAR,position:n.maps.ControlPosition.TOP_RIGHT}}),r=t(2089),l=t(2090);E.map(function(e){var t,o=r?new r.RichMarker({map:i,animation:n.maps.Animation.DROP,flat:!0,content:B(e.marker),position:new n.maps.LatLng(e.lat,e.lng)}):new n.maps.Marker({position:new n.maps.LatLng(e.lat,e.lng),map:i,flat:!0,animation:n.maps.Animation.DROP,content:B(e.marker)}),s=new l({maxWidth:280,minWidth:280,maxHeight:255,minHeight:255,shadowStyle:0,padding:0,backgroundColor:"#ffffff",position:new n.maps.LatLng(e.lat,e.lng),borderRadius:0,arrowSize:10,borderWidth:0,disableAnimation:!0,autopanMargin:0,hideCloseButton:!1,arrowStyle:0,content:(t=e,'<div class="isoInfoWindowWrapper">\n      <div class="isoInfoWindow">\n      <div class="isoInfoWindowImage">\n        <img alt="#" src="'.concat(t.img,'" />\n      </div>\n      <div class="isoInfoWindowDetails">\n        <h3 class="isoHeading">').concat(t.title,'</h3>\n        <p class="isoLocation">').concat(t.location,"</p>\n      </div>\n    </div>\n  </div>"))});return o.addListener("click",function(){a.infowindow&&a.infowindow.close(),s.open(i,o),a.infowindow=s}),!0})}}},{key:"render",value:function(){var e=this.props.loaded;return c.a.createElement("div",null,e?c.a.createElement(A,null,c.a.createElement("div",{className:"isoGoogleMap",style:{height:"650px",width:"100%"},ref:this.loadMap})):c.a.createElement("span",null,"API is Loading"))}}]),n}(s.Component),H=Object(C.GoogleApiWrapper)({apiKey:M.d.apiKey})(R),D=t(42),G=t(1343);t.d(n,"default",function(){return K});var K=function(e){function n(){return Object(a.a)(this,n),Object(r.a)(this,Object(l.a)(n).apply(this,arguments))}return Object(o.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){var e=g.a.rowStyle,n=g.a.colStyle,t=g.a.gutter;return c.a.createElement(m.default,null,c.a.createElement(f.default,null,"Google Map"),M.d.apiKey?c.a.createElement(p.a,{style:e,gutter:t,justify:"start"},c.a.createElement(d.a,{md:12,sm:12,xs:24,style:n},c.a.createElement(y.default,{title:c.a.createElement(D.a,{id:"Map.leaflet.basicTitle"})},c.a.createElement(u.default,null,c.a.createElement(P,null)))),c.a.createElement(d.a,{md:12,sm:12,xs:24,style:n},c.a.createElement(y.default,{title:c.a.createElement(D.a,{id:"Map.leaflet.leafletCustomMarkerTitle"})},c.a.createElement(u.default,null,c.a.createElement(H,null))))):c.a.createElement(G.a,null))}}]),n}(s.Component)}}]);
//# sourceMappingURL=30.68974672.chunk.js.map