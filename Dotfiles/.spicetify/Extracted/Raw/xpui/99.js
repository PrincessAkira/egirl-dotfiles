"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[99],{21127:(e,t,a)=>{a.d(t,{X:()=>j});var n=a(67294),i=a.n(n),s=a(40160),r=a(61202),l=a(69518),o=a.n(l),c=a(94184),E=a.n(c);const m={episodeBlock:"TT1tIewS2iI8Uz8kLuQB",isActive:"Mn93NeoqnZzVnPIP83_9",title:"bG5fSAAS6rRL8xxU5iyG",titleLink:"g5gZaZVzR0tGT4pK6iEU",selected:"u9GYp1CdMSk8BG9i2o1n",topActions:"Xga3T31ofx1oxxRVrMdW",actions:"DbMYFmOEEz9PH1h1zK9n",titleContainer:"HLixBI5DbVZNC6lrUbAB",musicAndTalkArtistContainer:"YhOAZFuFU1oI_YQSof4z",musicAndTalkArtists:"DKIjGP8CcZyjr2O2HNST",playlistIcon:"A7qeQBIk3sqr7bYadWA8",noHover:"_IJaGA3ZdVU0NiTxbGsI",imageContainer:"ij5_Bi2LfqgWwHzQBXJS",showImage:"o_TP9z7A8LQvMXujJC7N",description:"LbePDApGej12_NyRphHu",metadata:"y9kEPjDek0J80YRf8JJw",badges:"hFCGY5gjCjN10WzV2VQ4",medium:"gk0rZwqBxJjSeiWV5lgV",large:"te8hrsPnSvx9SUkzV0ME",header:"V0pEigrddg3VxP_sTdAJ",descriptionContainer:"upo8sAflD1byxWObSkgn",playerActions:"DyuLxip2Kl8P7H8fW62u"};var d=a(20657),u=a(46245),S=a(76343),I=a(92408),p=a(42781),_=a(44887),Z=a(7469),h=a(37630),g=a(54280);var y=a(28342),w=a(34325),f=a(82772);const C="pvGZ831aNzHTQMZ8CA_u";var N=a(60417),b=a(8716),v=a(22819);const x=i().memo((({onClick:e=(()=>{}),size:t,className:a,uri:s,sharingInfo:r,interactionData:l})=>{const{onCopyLink:o}=(0,v.y)({sharingInfo:r,uri:s,interactionData:l}),c=(0,n.useCallback)((()=>{o(),e()}),[e,o]);return i().createElement(b.E,{ariaLabel:d.ag.get("mwp.list.item.share"),size:t,onClick:c,className:E()(C,a),icon:N.M})}));var D=a(51871),O=a(37483),k=a(24656),A=a(69010),U=a(11414);const P={intent:"share",type:"click",itemIdSuffix:"contextmenu/episode/share"},R=i().memo((({episodeUri:e,showUri:t,sharingInfo:a,canDownload:s})=>{const{useDownloading:r}=(0,n.useContext)(k.I),{currentAvailability:l}=r(e),o=[A.V8.YES,A.V8.DOWNLOADING,A.V8.WAITING].includes(l),c=(0,n.useMemo)((()=>i().createElement(O.p,{uri:e,size:O.q.sm,showUri:t,className:E()({[f.Z.visibleDownloadButton]:o})})),[e,t,o]),m=(0,n.useMemo)((()=>i().createElement(x,{uri:e,sharingInfo:a,interactionData:P})),[e,a]),d=(0,n.useMemo)((()=>i().createElement(D.w,{uri:e,size:U.q.sm,className:f.Z.saveButton})),[e]);return i().createElement(i().Fragment,null,m,s&&c,d)}));var L=a(32626),M=a(25988),T=a(95661);const j=i().memo((({uri:e,name:t,showName:a,showUri:l,size:c,description:f,durationMs:C,images:N,badges:b,fullyPlayed:v,releaseDate:x,resumePositionMs:D,isCurrentlyPlaying:O,isPlaying:k,onContextMenu:A,onTouchStart:U,onTouchEnd:P,handlePlaybackClick:j,handleDragStart:B,handleClick:z,position:V,index:G,isPlayable:W,isPaywalled:q,isUserSubscribed:H,episodeSharingInfo:Q,playButtonWrapper:Y=null,highlightText:F=(e=>e),onMarkAsPlayed:J})=>{var K;const X=(0,r.k6)(),$=O&&k,ee=o().from(e).toURLPath(!0),te=null===(K=o().from(l))||void 0===K?void 0:K.toURLPath(!0),ae=function({episodeUri:e}){const[t,a]=(0,n.useState)([]),i=(0,g.G)();return(0,n.useEffect)((()=>{let t=!0;return async function(){const n=await i.getArtists(e);t&&a(n)}(),()=>{t=!1}}),[e,i]),t}({episodeUri:e}),ne=(0,w.G3)(e,x,D,v),ie=(0,n.useCallback)((e=>{e.stopPropagation(),e.preventDefault(),X.push(ee),z&&z(e)}),[ee,X,z]),se=(0,n.useCallback)((e=>{e.stopPropagation(),e.preventDefault(),te&&X.push(te)}),[te,X]),re=q&&!H,le=(0,n.useCallback)((e=>{e.stopPropagation(),re||j(e)}),[j,re]),oe=e=>{e.stopPropagation()},ce=re||W,Ee=d.ag.get("tracklist.a11y.play",t,a),me=d.ag.get("tracklist.a11y.pause",t,a),de=i().createElement(u.fh,{size:"sm",version:u.ul.secondary,onClick:le,isPlaying:$,disabled:!ce,locked:re,ariaPlayLabel:Ee,ariaPauseLabel:me}),ue=Y?Y(de):de;return i().createElement("div",{className:E()(m.episodeBlock,{[m.isActive]:O,[m.medium]:c===h.Uo.MEDIUM,[m.large]:c===h.Uo.LARGE,[m.noHover]:c===h.Uo.XSMALL}),"data-testid":`episode-${G}`,draggable:!!B,onDragStart:B,onClick:ie,onContextMenu:A,onTouchStart:U,onTouchEnd:P},i().createElement("div",{className:m.imageContainer},i().createElement(_.O,{className:E()(m.entityImage,m.showImage),type:p.p.EPISODE,size:(e=>{switch(e){case h.Uo.LARGE:return Z.m$.SIZE_112;case h.Uo.MEDIUM:return Z.m$.SIZE_64;default:return Z.m$.SIZE_48}})(c),title:t,shape:_.K.ROUNDED_CORNERS,images:N})),i().createElement("div",{className:m.header},i().createElement("div",{className:m.titleContainer},i().createElement(s.rU,{className:m.titleLink,to:ee,onClick:ie},i().createElement(S.Dy.h4,{variant:S.Dy.balladBold,className:m.title,"data-testid":"episodeTitle"},ne&&i().createElement(w.Rd,null),F(t))),ae.length>0&&i().createElement("div",{className:m.musicAndTalkArtistContainer},i().createElement(y.e,{iconSize:16,className:m.playlistIcon}),i().createElement(S.Dy.p,{variant:S.Dy.mesto,className:m.musicAndTalkArtists},F(ae.join(", "))))),a&&te&&i().createElement(s.rU,{className:m.titleLink,to:te,onClick:se},i().createElement(S.Dy.h4,{variant:S.Dy.mestoBold,className:m.title},F(a)))),i().createElement("div",{className:m.descriptionContainer},i().createElement(S.Dy.p,{variant:S.Dy.mesto,className:m.description},F(null!=f?f:""))),i().createElement("div",{className:m.metadata},i().createElement("div",{className:m.badges},b),i().createElement(I.E,{isPlaying:$,fullyPlayed:v,durationMs:C,releaseDate:x,resumePositionMs:D,position:O?V:void 0})),i().createElement("div",{onClick:oe,className:m.topActions,"data-testid":"action-buttons"},i().createElement(L.yj,{menu:i().createElement(M.k,{uri:e,showUri:l,isPlayed:v,onMarkAsPlayed:J})},i().createElement(T.z,{size:T.q.sm,label:d.ag.get("more.label.context",t)}))),i().createElement("div",{onClick:oe,className:m.actions},i().createElement(R,{episodeUri:e,showUri:null!=l?l:"",sharingInfo:Q,canDownload:!q||q&&H})),i().createElement("div",{className:m.playerActions},ue))}))},44887:(e,t,a)=>{a.d(t,{O:()=>C,K:()=>f});var n=a(59713),i=a.n(n),s=a(67294),r=a.n(s),l=a(94184),o=a.n(l),c=a(80418),E=a(7469);const m={xsmall:"g3kBhX1E4EYEC2NFhhxG",small:"O5_0cReFdHe81E0xFAD1",medium:"H71KtIrytVayf_dFofu7",large:"SBpny8HrUTBzSjk7Vtk1",square:"CxurIfvXVb_TqGF4q8Yf",circle:"OadpZJiOaGfX6Qp4j6n5",image:"iJp40IxKg6emF6KYJ414",imageContainer:"vreceNX3ABcxyddeS83B",imagePlaceholder:"p6xU6jAgF1YQ43M1zZbV"},d="Ozitxbqs1vcOukDz3GDw",u="AeEoI6ueagbJtaHl2cRd";var S=a(42781),I=a(45322),p=a(68101),_=a(28151),Z=a(79458),h=a(68251);const g=({title:e,type:t,className:a})=>{const n=(e=>{switch(e){case S.p.ALBUM:return r().createElement(I.c,{className:u});case S.p.ARTIST:return r().createElement(p.a,{className:u});case S.p.SHOW:case S.p.EPISODE:return r().createElement(_.J,{className:u});case S.p.USER:return r().createElement(Z.f,{className:u});case S.p.PLAYLIST:default:return r().createElement(h.U,{className:u})}})(t);return r().createElement("div",{"aria-label":e,className:o()(d,a)},n)};function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function w(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(Object(a),!0).forEach((function(t){i()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}let f;!function(e){e[e.ROUNDED_CORNERS=0]="ROUNDED_CORNERS",e[e.CIRCLE=1]="CIRCLE",e[e.SQUARE=2]="SQUARE"}(f||(f={}));const C=r().memo((({type:e,title:t,images:a=[],shape:n=f.SQUARE,size:i=E.m$.SIZE_56,className:s,onContextMenu:l=(()=>{}),onTouchStart:d=(()=>{}),onTouchEnd:u=(()=>{})})=>{const S=function(e=[]){const t=e.filter((e=>Boolean(e.width))),a=t.filter((e=>e.url&&e.width&&e.width>=E.eM[E.m$.SIZE_56])).sort(((e,t)=>e.width-t.width));return a.length?a:t}(a),I=S.length>0?S[0].url:"",p=S.map((({url:e,width:t})=>`${e} ${t/2}w, ${e} ${t}w`)).join(", "),_=()=>({[m.xsmall]:E.pj.includes(i),[m.small]:E.wL.includes(i),[m.medium]:E.VZ.includes(i),[m.large]:E.B_.includes(i)});return r().createElement("div",{className:o()(m.imageContainer,s),onContextMenu:l,onTouchStart:d,onTouchEnd:u,style:{width:`${E.eM[i]}px`,height:`${E.eM[i]}px`}},r().createElement(c.E,{loading:"lazy",src:I,alt:t,ariaHidden:!0,className:o()(m.image,w({[m.roundedCorners]:n===f.ROUNDED_CORNERS,[m.circle]:n===f.CIRCLE,[m.square]:n===f.SQUARE},_())),srcSet:p||void 0,testid:"entity-image"},r().createElement(g,{title:t,type:e,className:o()(w({[m.roundedCorners]:n===f.ROUNDED_CORNERS,[m.circle]:n===f.CIRCLE,[m.square]:n===f.SQUARE},_()))})))}))},7469:(e,t,a)=>{let n;a.d(t,{m$:()=>n,eM:()=>i,pj:()=>s,wL:()=>r,VZ:()=>l,B_:()=>o}),function(e){e[e.SIZE_48=0]="SIZE_48",e[e.SIZE_56=1]="SIZE_56",e[e.SIZE_64=2]="SIZE_64",e[e.SIZE_72=3]="SIZE_72",e[e.SIZE_80=4]="SIZE_80",e[e.SIZE_96=5]="SIZE_96",e[e.SIZE_104=6]="SIZE_104",e[e.SIZE_112=7]="SIZE_112",e[e.SIZE_120=8]="SIZE_120",e[e.SIZE_128=9]="SIZE_128",e[e.SIZE_136=10]="SIZE_136",e[e.SIZE_144=11]="SIZE_144",e[e.SIZE_152=12]="SIZE_152",e[e.SIZE_160=13]="SIZE_160",e[e.SIZE_168=14]="SIZE_168",e[e.SIZE_176=15]="SIZE_176",e[e.SIZE_184=16]="SIZE_184",e[e.SIZE_200=17]="SIZE_200",e[e.SIZE_232=18]="SIZE_232"}(n||(n={}));const i={[n.SIZE_48]:48,[n.SIZE_56]:56,[n.SIZE_64]:64,[n.SIZE_72]:72,[n.SIZE_80]:80,[n.SIZE_96]:96,[n.SIZE_104]:104,[n.SIZE_112]:112,[n.SIZE_120]:120,[n.SIZE_128]:128,[n.SIZE_136]:136,[n.SIZE_144]:144,[n.SIZE_152]:152,[n.SIZE_160]:160,[n.SIZE_168]:168,[n.SIZE_176]:176,[n.SIZE_184]:184,[n.SIZE_200]:200,[n.SIZE_232]:232},s=[n.SIZE_48,n.SIZE_56,n.SIZE_64],r=[n.SIZE_72,n.SIZE_80,n.SIZE_96,n.SIZE_104,n.SIZE_112,n.SIZE_120,n.SIZE_128],l=[n.SIZE_136,n.SIZE_144,n.SIZE_152,n.SIZE_160,n.SIZE_168,n.SIZE_176],o=[n.SIZE_184,n.SIZE_200,n.SIZE_232]},33241:(e,t,a)=>{a.d(t,{C:()=>E});var n=a(67294),i=a.n(n),s=a(70131),r=a(94184),l=a.n(r);const o="eqw9lvuoZHrkWMTdyTpY",c="lb08f71wES9AQnKx6e0R",E=i().memo((e=>{const{triggerOnInitialLoad:t=!1,onReachBottom:a,showScrollbar:r=!0,horizontalScroll:E=!1}=e,{ref:m,inView:d}=(0,s.YD)({initialInView:t});return(0,n.useEffect)((()=>{d&&a&&a()}),[d,a]),i().createElement("div",{className:l()({[c]:!r,[o]:E}),"data-testid":"infinite-scroll-list"},e.children,i().createElement("div",{ref:m}))}))},82772:(e,t,a)=>{a.d(t,{Z:()=>n});const n={xs:"(min-width: 0px)",xsOnly:"(min-width: 0px) and (max-width: 767px)",sm:"(min-width: 768px)",smOnly:"(min-width: 768px) and (max-width: 1023px)",md:"(min-width: 1024px)",mdOnly:"(min-width: 1024px) and (max-width: 1279px)",lg:"(min-width: 1280px)",lgOnly:"(min-width: 1280px) and (max-width: 1919px)",xl:"(min-width: 1920px)",ShowPage:"WqWFt0mTksL5L4pUOWTS",ShowContent:"d7DdhdSX1B_lzF6FLcT9",metadata:"uqOauyB7i5l_aA1Ct5eM",imageContainer:"mKVHiOws_N3sLMMHZq0Z",episodes:"aRegzSN92VRBnOaKWcoy",episodesHeader:"Q3wDjXPNY4lACLUxARrd",episodesSort:"bVv9NxcVuCEckfjjhS_g",episodesFilter:"hnwOA4WIO0QtXV868bO5",subtitle:"DvU6cwnEIZKsddh3VNjI",sectionTitle:"Eo3ux1gW87Uo72mONLUD",trailer:"_qWdC55CmfELMEV2YhuO",visibleDownloadButton:"zl5f8pJKfv0nfWMdN9rR",moreButton:"wKp6QJCIuhU4GEBCk9NY",saveButton:"Aw84eLe9FlAD8xXL2ehv"}}}]);
//# sourceMappingURL=99.js.map