"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[179],{85917:(e,n,t)=>{t.d(n,{k:()=>o});var a=t(67294),i=t.n(a),l=t(28248),r=t(42922),d=t(20657),s=t(76343);const c="nUpwbkL4Yaj31N0emCvb",o=({nrTracks:e,initialTracks:n,usePlayContextItem:t})=>{const[o,m]=(0,a.useState)(!1),u=(0,a.useCallback)((()=>{m(!o)}),[o]),k=(0,a.useCallback)((({uri:e,contextUri:n,totalMilliseconds:a,name:r,artists:d,contentRating:s,isPlayable:c,playcount:o,imageUrl:m,albumUri:u},k)=>i().createElement(l.l0,{key:e,index:k,uri:e,contextUri:n,totalMilliseconds:a,name:r,artists:d,isPlayable:c,contentRating:s,playcount:o||0,imageUrl:m,albumUri:u,usePlayContextItem:t})),[t]),S=(0,a.useCallback)((e=>e.uri),[]),v=(0,a.useMemo)((()=>[l.QD.INDEX,l.QD.TITLE,l.QD.PLAYS,l.QD.DURATION]),[]);return i().createElement(r.ZP,{value:"artist-popular-tracks-list"},i().createElement(l.Pv,{ariaLabel:d.ag.get("tracklist.popular-tracks"),renderRow:k,nrTracks:Math.min(e,o?10:5),tracks:n,resolveUri:S,columns:v}),e>5?i().createElement("button",{"aria-expanded":o,className:c,onClick:u},i().createElement(s.Dy,{as:"div",variant:s.Dy.minuetBold},o?d.ag.get("artist-page.tracks.showless"):d.ag.get("artist-page.tracks.seemore"))):null)}},34801:(e,n,t)=>{t.r(n),t.d(n,{Track:()=>yn,default:()=>hn});var a=t(59713),i=t.n(a),l=t(67294),r=t.n(l),d=t(61202),s=t(44137),c=t(1663),o=t(42273),m=t(59482);const u="NyTgQLBMbP0S3tKSRCs9",k="VWJ_ANuBGPIrx7XLKSl_",S="GKrQF4Y14e5YsTYK4Shj",v="dBS838bk0cna4pcQ9Q0I",p="iyOEFMEyp7ZcRdlxIZo5";var E=t(55120),N=t(55911),g=t(80322),y=t(84242),h=t(72907),b=t(32626),F=t(86213),I=t(20657),f=t(69518),_=t.n(f),L=t(30947),A=t(4383),w=t(56802),C=t(11414),O=t(4236),D=t(90110),Z=t(95661),T=t(94233),R=t(8247),P=t(18061),U=t(68569),x=t(42811),j=t(7073),B=t(98984);const V={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getRichTrack"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"uri"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"trackUnion"},arguments:[{kind:"Argument",name:{kind:"Name",value:"uri"},value:{kind:"Variable",name:{kind:"Name",value:"uri"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"richTrackFields"}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"richTrackFields"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Track"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"album"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"richTrackAlbum"}}]}},{kind:"Field",name:{kind:"Name",value:"artistsWithRoles"},arguments:[{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"1"}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"artist"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"profile"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}}]}},{kind:"Field",name:{kind:"Name",value:"discography"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"singles"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"trackItem"}}]}},{kind:"Field",name:{kind:"Name",value:"albums"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"trackItem"}}]}},{kind:"Field",name:{kind:"Name",value:"popularReleasesAlbums"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"albums"}}]}},{kind:"Field",name:{kind:"Name",value:"topTracks"},arguments:[{kind:"Argument",name:{kind:"Name",value:"offset"},value:{kind:"IntValue",value:"0"}},{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"10"}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"topTracks"}}]}}]}}]}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"richTrackAlbum"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Album"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"type"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"playability"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"playable"}}]}},{kind:"Field",name:{kind:"Name",value:"date"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"year"}}]}},{kind:"Field",name:{kind:"Name",value:"tracks"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"}},{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"track"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"trackNumber"}}]}}]}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"richTrackAlbumCoverArt"}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"richTrackAlbumCoverArt"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Album"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"coverArt"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"extractedColors"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"colorRaw"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"hex"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"sources"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"}},{kind:"Field",name:{kind:"Name",value:"width"}},{kind:"Field",name:{kind:"Name",value:"height"}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"trackItem"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"AlbumGroupPage"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"}},{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"releases"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"albums"}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"albums"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"AlbumPage"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"richTrackAlbum"}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"topTracks"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"TrackPage"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"track"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"topTrack"}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"topTrack"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Track"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"artists"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"profile"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"album"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"FragmentSpread",name:{kind:"Name",value:"richTrackAlbumCoverArt"}}]}},{kind:"Field",name:{kind:"Name",value:"playability"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"playable"}}]}},{kind:"Field",name:{kind:"Name",value:"playcount"}},{kind:"Field",name:{kind:"Name",value:"previews"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"audioPreviews"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"}}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"duration"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalMilliseconds"}}]}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"id"}}]}}]},M="JtmUDerSLCaN8LuQv9tM",Q="mQtVA857h95uvEmY9SPP",Y="bObO_7Z_b1atmqMnYiU2",z="vHqxBD3S0NJpGMsVRwHT",G="pxMz7QGxCF9LYKHJzOlY",$="PTVcqp5lumB25L7FY7ai",H="DqqPRJJPXjVNE52h_cPt";var J=t(78688),K=t(48528),q=t(76343),W=t(94184),X=t.n(W),ee=t(44887),ne=t(42781),te=t(7469);let ae;!function(e){e.SMALL="small",e.LARGE="large"}(ae||(ae={}));const ie=({art:e,disabled:n=!1,LinkComponent:t,name:a,size:i=ae.SMALL,type:l,uri:s})=>{const c=e?[e]:[],o=i===ae.SMALL?(0,K.R)(l):function(e){switch(e){case J.albumType.SINGLE:return I.ag.get("track-page.from-the-single");case J.albumType.EP:return I.ag.get("track-page.from-the-ep");case J.albumType.COMPILATION:return I.ag.get("track-page.from-the-compilation");case J.albumType.ALBUM:default:return I.ag.get("track-page.from-the-album")}}(l),m=(0,d.k6)();return r().createElement("div",{className:X()(M,{[Y]:i===ae.SMALL,[Q]:n})},r().createElement("div",{className:z},r().createElement(ee.O,{images:c,size:te.m$.SIZE_80,title:a,type:ne.p.ALBUM})),r().createElement("div",{className:G},r().createElement(q.Dy,{variant:i===ae.SMALL?q.Dy.minuetBold:q.Dy.finale},o),r().createElement(t,{to:s},r().createElement(q.Dy,{as:"div",className:$,variant:q.Dy.balladBold,dir:"auto"},a))),r().createElement("div",{onClick:()=>{m.push(_().from(s).toURLPath(!0))},className:H}))};var le=t(67892),re=t(85917),de=t(41734),se=t(36685),ce=t(75987);const oe=({richTrack:e})=>{var n;const t=(0,d.k6)(),a=(0,l.useCallback)((()=>new URLSearchParams(t.location.search.slice(1)).get("highlight")||""),[t.location.search])(),{tracklistRef:i}=(0,ce.W)(),s=e.album,c=(0,g.Y)(s.uri),{usePlayContextItem:o}=(0,y.n)({uri:c},{featureIdentifier:"album"}),m=(0,l.useMemo)((()=>({items:[],total_count:0})),[]);return s?r().createElement("div",{ref:i,className:de.Z.tracklist},r().createElement(se.L,{ariaLabel:s.name,nrTracks:null===(n=s.tracks)||void 0===n?void 0:n.totalCount,albumUri:s.uri,highlightUri:a,discs:m,usePlayContextItem:o,hasHeaderRow:!1})):null};var me=t(42922),ue=t(19480),ke=t(13768);const Se=({album:e,index:n,artistURI:t})=>r().createElement(me.JL,{value:"card",index:n,key:e.uri},r().createElement(ke.i,{index:n,latest:!1,showType:!0,entity:(0,x.B$)(e,t,e.name)})),ve=({richTrack:e})=>{var n;const t=e.artistsWithRoles.items[0].artist,a=_().artistURI(t.id).toURI(),i=null===(n=t.discography)||void 0===n?void 0:n.singles;return i?r().createElement(me.JL,{value:"shelf/singles-and-eps"},r().createElement(ue.P,{total:i.totalCount,title:I.ag.get("track-page.popular-singles-and-eps-by-artist",{artist:t.profile.name}),seeAllUri:`${(0,x.GJ)(t.id)}:discography:${j.VZ.Single.toLowerCase()}`,seeAllLabel:I.ag.get("artist-page.show-discography"),alwaysShowSeeAll:!0,className:U.Z.artistShelfSpacer},(0,x.Hr)(i.items).map(((e,n)=>r().createElement(Se,{album:e,index:n,artistURI:a}))))):null},pe=({richTrack:e})=>{var n;const t=e.artistsWithRoles.items[0].artist,a=_().artistURI(t.id).toURI(),i=null===(n=e.artistsWithRoles.items[0].artist.discography)||void 0===n?void 0:n.albums;return i?r().createElement(me.JL,{value:"shelf/albums"},r().createElement(ue.P,{total:i.totalCount,title:I.ag.get("track-page.popular-albums-by-artist",{artist:t.profile.name}),seeAllUri:`${(0,x.GJ)(t.id)}:discography:${j.VZ.Album.toLowerCase()}`,seeAllLabel:I.ag.get("artist-page.show-discography"),alwaysShowSeeAll:!0,className:U.Z.artistShelfSpacer},(0,x.Hr)(i.items).map(((e,n)=>r().createElement(Se,{album:e,index:n,artistURI:a}))))):null},Ee=({richTrack:e})=>{var n;const t=e.artistsWithRoles.items[0].artist,a=_().artistURI(t.id).toURI(),i=null===(n=t.discography)||void 0===n?void 0:n.popularReleasesAlbums;return i?r().createElement(me.JL,{value:"shelf/releases"},r().createElement(ue.P,{total:10,title:I.ag.get("track-page.popular-releases-by-artist",{artist:t.profile.name}),seeAllUri:`${(0,x.GJ)(t.id)}:discography:${j.VZ.Album.toLowerCase()}`,seeAllLabel:I.ag.get("artist-page.show-discography"),alwaysShowSeeAll:!0,className:U.Z.artistShelfSpacer},i.items.map(((e,n)=>r().createElement(Se,{album:e,index:n,artistURI:a}))))):null},Ne=({richTrack:e})=>{var n;const t=e.artistsWithRoles.items[0].artist,a=null===(n=t.discography)||void 0===n?void 0:n.topTracks,i=(0,l.useMemo)((()=>null==a?void 0:a.items.map((n=>(0,x.X7)(n,e.uri)))),[a,e]),{usePlayContextItem:d}=(0,y.n)({uri:t.uri},{featureIdentifier:"artist"});return i?r().createElement("div",{className:k},r().createElement("div",null,r().createElement(q.Dy,{variant:q.Dy.mesto},I.ag.get("track-page.popular-tracks")),r().createElement(q.Dy,{as:"h2",variant:q.Dy.canon,color:"var(--spice-text)",className:U.Z.heading},t.profile.name)),r().createElement(re.k,{nrTracks:i.length,initialTracks:i,usePlayContextItem:d})):null},ge=r().memo((()=>{var e,n;const{trackId:t}=(0,d.UO)(),a=_().trackURI(t).toURI(),i=(l={uri:a},(0,B.a)(V,l,s));var l,s;const o=(0,O.k)();if(i.loading||null===(e=i.data)||void 0===e||!e.trackUnion)return r().createElement(c.h,{errorMessage:I.ag.get("track-page.error")});const m=i.data.trackUnion,u=m.album,k=null==u||null===(n=u.playability)||void 0===n?void 0:n.playable;return r().createElement("div",{"data-testid":"rich-track"},r().createElement(Ne,{richTrack:m}),r().createElement(Ee,{richTrack:m}),r().createElement(pe,{richTrack:m}),r().createElement(ve,{richTrack:m}),r().createElement(ie,{art:u.coverArt?u.coverArt.sources[0]:void 0,disabled:!k||!o,LinkComponent:le.Z,name:u.name,type:u.type,size:ae.LARGE,uri:u.uri}),r().createElement(oe,{richTrack:m}))}));var ye=t(70369),he=t(18172);function be(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function Fe(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?be(Object(t),!0).forEach((function(n){i()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):be(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}let Ie;!function(e){e.LOADING="LOADING",e.LOADED="LOADED",e.UNAVAILABLE="UNAVAILABLE"}(Ie||(Ie={}));const fe=(0,he.ZP)(((e,n)=>{switch(n.type){case"LYRICS_LOADING":e[n.uri]={status:Ie.LOADING};break;case"LYRICS_LOADED":e[n.uri]={status:Ie.LOADED,data:{lyrics:Fe({},n.response.lyrics)}};break;case"LYRICS_ERROR":e[n.uri]={status:Ie.UNAVAILABLE};break;default:throw new Error(`Unhandled lyrics action with type: ${n.type}`)}}));var _e=t(80624),Le=t(25237);const Ae={status:Ie.LOADING},we={status:Ie.UNAVAILABLE},Ce=r().createContext(void 0),Oe=({children:e,initialState:n={}})=>{const t=r().useReducer(fe,n);return r().createElement(Ce.Provider,{value:t,children:e})},De=e=>{const n=r().useContext(Ce);if(void 0===n)throw new Error("useSEOLyrics must be used within a LyricsSEOProvider");if(!e||!_().isTrack(e))return we;const[t,a]=n,i=t[e];return i||(a({type:"LYRICS_LOADING",uri:e}),(async e=>{const n=_().from(e);return(await Le.Zz.getSEOTrackLyrics(_e.b.getInstance(),n.getBase62Id())).body})(e).then((n=>{a({type:"LYRICS_LOADED",uri:e,response:n})})).catch((()=>{a({type:"LYRICS_ERROR",uri:e})})),Ae)},Ze="_WZNTY8cs6JMVcAp9j8A",Te="br3AcUgf2WazXovcTr0L",Re=({padded:e})=>r().createElement(q.Dy,{as:"p",dir:"auto",variant:q.Dy.finale,className:`${Ze} ${e?Te:""}`},"Lyrics powered by Musixmatch."),Pe=({uri:e})=>{const{status:n}=De(e);return n!==Ie.LOADED?null:r().createElement(Re,null)};var Ue=t(6479),xe=t.n(Ue);const je="FTTfxsCa1sJIu1Y7utDO",Be="u15S0afPqL32dYwv0CLX",Ve="vrjrGtquvKnX8rzOuAaA",Me="HeVBalD_EHmtuqfIkkjo",Qe="GQqQDXMybjyriRQKH_ID",Ye="DX4i2V_0jaKraBkfcDnR",ze="zCVFaVQz6MUyNwqjGS4c",Ge="USV2e_90ZCdBCH9Dr5Vw",$e="PhpDpIcERAEMvFD0NvPk",He=["size","disabled"];let Je;!function(e){e.SMALL="small",e.LARGE="large"}(Je||(Je={}));const Ke=e=>{const{disabled:n,images:t,LinkComponent:a,name:i,size:l,uri:s}=e,c=l===Je.SMALL,o=(0,d.k6)();return r().createElement("div",{className:X()(Ve,{[Me]:n}),"data-testid":"track-artist-link-card"},r().createElement(ee.O,{shape:ee.K.CIRCLE,images:t,size:te.m$.SIZE_80,title:i,type:ne.p.ARTIST}),r().createElement("div",{className:X()(Ye,{[ze]:c})},r().createElement(q.Dy,{as:"span",variant:q.Dy.minuetBold,className:Qe},I.ag.get("card.tag.artist")),r().createElement(a,{to:s},r().createElement(q.Dy,{as:"div",dir:"ltr",className:Ge,variant:q.Dy.balladBold},i))),r().createElement("div",{onClick:()=>{o.push(_().from(s).toURLPath(!0))},className:$e}))},qe=e=>{let{size:n=Je.LARGE,disabled:t=!1}=e,a=xe()(e,He);return r().createElement("div",{className:X()(je,{[Be]:n===Je.SMALL})},a.artists.map((e=>r().createElement(Ke,{key:e.id,name:e.name,uri:e.uri,images:e.images,size:n,LinkComponent:a.LinkComponent,disabled:t}))))};var We=t(63926);const Xe=(e,n)=>e.map((e=>((e,n)=>{const t=n?new URLSearchParams(n.search):void 0;return"1"===(null==t?void 0:t.get(e))})(e,n)));let en;!function(e){e.Lyrics="lotw",e.RichTrackPages="rtp",e.UnauthLyrics="ulotw"}(en||(en={}));var nn=t(24872),tn=t(33607),an=t(82789),ln=t(17231),rn=t(29255),dn=t(65858);const sn=(0,t(20573).P1)((e=>e.seoExperiment),(e=>null==e?void 0:e.track));let cn;!function(e){e.RTP="track-rtp-1.0"}(cn||(cn={}));const on="o7c89JiqZPfyQtLPjgrK",mn="uzdLGhPskgWtE64HOVL8",un=({lines:e=[]})=>0===e.length?null:r().createElement("div",null,r().createElement(q.Dy,{as:"h2",variant:q.Dy.canon,color:"var(--spice-text)",className:on},I.ag.get("web-player.lyrics.title")),e.map((({words:e},n)=>r().createElement(q.Dy,{as:"p",dir:"auto",variant:q.Dy.ballad,key:`lyrics-seo-line-${n}`,className:mn},e)))),kn=({uri:e})=>{const{status:n,data:t}=De(e);return n!==Ie.LOADED?null:r().createElement(un,{lines:null==t?void 0:t.lyrics.lines})};var Sn=t(16229);const vn={container:"GzNxxgVho1_TKMnyLwFt",text:"H7RNasTmw6nB4hTPQMCS",buttonContainer:"u0P3NprkfoQAFK4cFGgS"},pn=({buttonText:e,onSecondaryButtonClick:n,onPrimaryButtonClick:t,secondaryButtonText:a,text:i})=>r().createElement("div",{className:vn.container},r().createElement(q.Dy,{className:vn.text,variant:q.Dy.cello,condensed:!0},i),r().createElement("div",{className:vn.buttonContainer},r().createElement(Sn.Y,{className:vn.secondaryButton,version:"tertiary",onClick:n},a),r().createElement(Sn.Y,{className:vn.primaryButton,version:"secondary",onClick:t},e)));var En=t(54675);function Nn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function gn(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Nn(Object(t),!0).forEach((function(n){i()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Nn(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}const yn=({uri:e,track:n})=>{var t,a;const i=(0,w.o)(),s=(0,O.k)(),c=(0,d.TH)(),[k,f]=(0,l.useState)(),[_,U,x]=Xe([en.Lyrics,en.RichTrackPages,en.UnauthLyrics],c),{isAnonymous:j}=(0,dn.v9)(rn.Gg),{artistsWithRoles:B,album:V,duration:M,name:Q}=n,Y=V.coverArt,z=V.copyright.items,G=V.courtesyLine,$=null===(t=V.date)||void 0===t?void 0:t.isoString,H=null==Y||null===(a=Y.extractedColors)||void 0===a?void 0:a.colorRaw.hex,J=((null==Y?void 0:Y.sources)||[]).map((e=>({url:e.url,width:e.width||void 0,height:e.height||void 0}))),K=B.items.map((e=>{var n;return{name:e.artist.profile.name,images:((null===(n=e.artist.visuals.avatarImage)||void 0===n?void 0:n.sources)||[]).map((e=>({url:e.url,width:e.width,height:e.height}))),uri:e.artist.uri,id:e.artist.uri}})),q=n.playability.playable,W=(0,g.Y)(e),{togglePlay:ee,isPlaying:ne}=(0,y.n)({uri:W},{featureIdentifier:"track"}),[te,ae]=(0,A.Z)(e),ie=(0,l.useCallback)((async()=>{i({targetUri:e,intent:te?"unsave":"save",type:"click"});try{await ae(!te)}catch{}}),[i,e,te,ae]),re=(0,ln.W6)(R.Ow),de=(0,ln.mX)(),se=(0,dn.v9)(rn.n5),ce=(0,nn.getEventSenderInstance)(),oe=(0,l.useCallback)((()=>{const n={category:"rtp_exposure_event",action:"render",label:"dwp-track-page",destination_url:e,os:(0,tn.y)(),variant:re.toString(),context:k?"assigned":"default"},t=(0,an.x)(n);ce.send(t)}),[ce,k,re,e]),me=((e,n)=>{if(e&&e[n]){const t=e[n];return t.experimentId===cn.RTP&&"1"===t.treatment}return!1})((0,dn.v9)(sn),n.id);(0,l.useEffect)((()=>{if(de.isActive){var e;const{configuration:n}=de;f(Boolean(null==n||null===(e=n.properties[R.Ow])||void 0===e?void 0:e.groupId))}}),[de]),(0,l.useEffect)((()=>{se&&"boolean"==typeof k&&oe()}),[se,oe,k]);return r().createElement("section",{"data-testid":"track-page"},r().createElement(ye.$,null,`${n.name} - song by ${K.map((e=>e.name)).join(", ")}`),r().createElement(o.gF,{backgroundColor:H},r().createElement(m.W,null,r().createElement(E.$,{size:N.qE.sm,onClick:()=>ee(),disabled:!q,isPlaying:ne,uri:e}),r().createElement(h.i,{text:Q,dragUri:e,dragLabel:Q})),r().createElement(b._P,{menu:r().createElement(F.$,{uri:e})},r().createElement(o.Oz,{dragUri:e,images:J,name:Q,placeholderType:"album"})),r().createElement(o.sP,null,r().createElement(o.dy,{small:!0,uppercase:!0},I.ag.get("song")),r().createElement(b._P,{menu:r().createElement(F.$,{uri:e})},r().createElement(o.xd,{dragUri:e,dragLabel:Q},Q)),r().createElement(o.QS,{creators:K,releaseDate:$,durationMilliseconds:M.totalMilliseconds,isTrack:!0}))),r().createElement(L.o,{backgroundColor:H},r().createElement(L.F,null,r().createElement(o.rn,null,r().createElement(E.$,{onClick:()=>ee(),isPlaying:ne,disabled:!q,size:N.qE.lg,uri:e})),r().createElement(o.rn,null,r().createElement(C.H,{isAdded:!!te,onClick:ie,disabled:!s,size:C.q.md})),s?r().createElement(D.o,{uri:e,isFollowing:!!te,onFollow:ie,size:D.q.md}):null,r().createElement(b.yj,{menu:r().createElement(F.$,{uri:e})},r().createElement(Z.z,{label:I.ag.get("more.label.context",Q)})))),r().createElement(Oe,null,r().createElement("div",{className:"contentSpacing"},r().createElement("div",null,r().createElement(We.T,{render:n=>{const t={"--column-count":n};return r().createElement(r().Fragment,null,r().createElement("div",{className:X()(S,{[v]:n>4}),style:gn({},t)},j?x&&r().createElement(pn,{buttonText:I.ag.get("sign_up"),secondaryButtonText:I.ag.get("login"),text:I.ag.get("track-page.sign-in-to-view-lyrics"),onPrimaryButtonClick:En.L6,onSecondaryButtonClick:En.h$}):r().createElement(P.F,{property:R.NX,forceNewExperience:_,renderNewExperience:()=>r().createElement(kn,{uri:e})})),me?r().createElement("div",{className:u},r().createElement(qe,{artists:K,LinkComponent:le.r,disabled:!s})):r().createElement(P.F,{property:R.Ow,forceNewExperience:U,renderNewExperience:()=>r().createElement("div",{className:u},r().createElement(qe,{artists:K,LinkComponent:le.r,disabled:!s}))}))},columnAware:!0})),me?r().createElement(ge,null):r().createElement(P.F,{property:R.Ow,forceNewExperience:U,renderNewExperience:()=>r().createElement(ge,null)})),r().createElement("div",{className:"contentSpacing"},r().createElement("div",{className:p},r().createElement(T.k,{copyrights:z,courtesyLine:G}),!j&&r().createElement(P.F,{property:R.NX,forceNewExperience:_,renderNewExperience:()=>r().createElement(Pe,{uri:e})})))))},hn=r().memo((()=>{var e,n,t;const{trackId:a}=(0,d.UO)(),i=_().trackURI(a).toURI(),l=(0,s.QN)({uri:i});if(l.loading||null===(e=l.data)||void 0===e||!e.trackUnion||"NotFound"===(null===(n=l.data)||void 0===n||null===(t=n.trackUnion)||void 0===t?void 0:t.__typename))return r().createElement(c.h,{errorMessage:I.ag.get("track-page.error")});const o=l.data.trackUnion;return r().createElement(yn,{uri:i,track:o})}))},44137:(e,n,t)=>{t.d(n,{QN:()=>l});var a=t(98984);const i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getTrack"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"uri"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"trackUnion"},arguments:[{kind:"Argument",name:{kind:"Name",value:"uri"},value:{kind:"Variable",name:{kind:"Name",value:"uri"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"trackFields"}},{kind:"FragmentSpread",name:{kind:"Name",value:"trackNotFound"}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"trackFields"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Track"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"contentRating"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"label"}}]}},{kind:"Field",name:{kind:"Name",value:"duration"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalMilliseconds"}}]}},{kind:"Field",name:{kind:"Name",value:"playability"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"playable"}},{kind:"Field",name:{kind:"Name",value:"reason"}}]}},{kind:"Field",name:{kind:"Name",value:"trackNumber"}},{kind:"Field",name:{kind:"Name",value:"playcount"}},{kind:"Field",name:{kind:"Name",value:"saved"}},{kind:"Field",name:{kind:"Name",value:"sharingInfo"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"shareUrl"}},{kind:"Field",name:{kind:"Name",value:"shareId"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"trackArtists"}},{kind:"FragmentSpread",name:{kind:"Name",value:"trackAlbum"}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"trackArtists"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Track"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"artistsWithRoles"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"}},{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"role"}},{kind:"Field",name:{kind:"Name",value:"artist"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"visuals"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"avatarImage"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sources"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"width"}},{kind:"Field",name:{kind:"Name",value:"height"}},{kind:"Field",name:{kind:"Name",value:"url"}}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"profile"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}}]}}]}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"trackAlbum"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Track"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"album"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"date"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"isoString"}},{kind:"Field",name:{kind:"Name",value:"precision"}}]}},{kind:"Field",name:{kind:"Name",value:"copyright"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"}},{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"text"}},{kind:"Field",name:{kind:"Name",value:"type"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"courtesyLine"}},{kind:"FragmentSpread",name:{kind:"Name",value:"trackAlbumCoverArt"}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"trackAlbumCoverArt"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Album"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"coverArt"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"extractedColors"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"colorRaw"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"hex"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"sources"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"}},{kind:"Field",name:{kind:"Name",value:"width"}},{kind:"Field",name:{kind:"Name",value:"height"}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"trackNotFound"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"NotFound"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"message"}}]}}]},l=(e,n)=>(0,a.a)(i,e,n)},75987:(e,n,t)=>{t.d(n,{W:()=>i});var a=t(70131);function i(){const{ref:e,inView:n}=(0,a.YD)({initialInView:!1}),{ref:t,inView:i}=(0,a.YD)({initialInView:!1});return{titleRef:e,tracklistRef:t,displayTopBar:!n&&i}}},44887:(e,n,t)=>{t.d(n,{O:()=>I,K:()=>F});var a=t(59713),i=t.n(a),l=t(67294),r=t.n(l),d=t(94184),s=t.n(d),c=t(80418),o=t(7469);const m={xsmall:"g3kBhX1E4EYEC2NFhhxG",small:"O5_0cReFdHe81E0xFAD1",medium:"H71KtIrytVayf_dFofu7",large:"SBpny8HrUTBzSjk7Vtk1",square:"CxurIfvXVb_TqGF4q8Yf",circle:"OadpZJiOaGfX6Qp4j6n5",image:"iJp40IxKg6emF6KYJ414",imageContainer:"vreceNX3ABcxyddeS83B",imagePlaceholder:"p6xU6jAgF1YQ43M1zZbV"},u="Ozitxbqs1vcOukDz3GDw",k="AeEoI6ueagbJtaHl2cRd";var S=t(42781),v=t(45322),p=t(68101),E=t(28151),N=t(79458),g=t(68251);const y=({title:e,type:n,className:t})=>{const a=(e=>{switch(e){case S.p.ALBUM:return r().createElement(v.c,{className:k});case S.p.ARTIST:return r().createElement(p.a,{className:k});case S.p.SHOW:case S.p.EPISODE:return r().createElement(E.J,{className:k});case S.p.USER:return r().createElement(N.f,{className:k});case S.p.PLAYLIST:default:return r().createElement(g.U,{className:k})}})(n);return r().createElement("div",{"aria-label":e,className:s()(u,t)},a)};function h(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?h(Object(t),!0).forEach((function(n){i()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}let F;!function(e){e[e.ROUNDED_CORNERS=0]="ROUNDED_CORNERS",e[e.CIRCLE=1]="CIRCLE",e[e.SQUARE=2]="SQUARE"}(F||(F={}));const I=r().memo((({type:e,title:n,images:t=[],shape:a=F.SQUARE,size:i=o.m$.SIZE_56,className:l,onContextMenu:d=(()=>{}),onTouchStart:u=(()=>{}),onTouchEnd:k=(()=>{})})=>{const S=function(e=[]){const n=e.filter((e=>Boolean(e.width))),t=n.filter((e=>e.url&&e.width&&e.width>=o.eM[o.m$.SIZE_56])).sort(((e,n)=>e.width-n.width));return t.length?t:n}(t),v=S.length>0?S[0].url:"",p=S.map((({url:e,width:n})=>`${e} ${n/2}w, ${e} ${n}w`)).join(", "),E=()=>({[m.xsmall]:o.pj.includes(i),[m.small]:o.wL.includes(i),[m.medium]:o.VZ.includes(i),[m.large]:o.B_.includes(i)});return r().createElement("div",{className:s()(m.imageContainer,l),onContextMenu:d,onTouchStart:u,onTouchEnd:k,style:{width:`${o.eM[i]}px`,height:`${o.eM[i]}px`}},r().createElement(c.E,{loading:"lazy",src:v,alt:n,ariaHidden:!0,className:s()(m.image,b({[m.roundedCorners]:a===F.ROUNDED_CORNERS,[m.circle]:a===F.CIRCLE,[m.square]:a===F.SQUARE},E())),srcSet:p||void 0,testid:"entity-image"},r().createElement(y,{title:n,type:e,className:s()(b({[m.roundedCorners]:a===F.ROUNDED_CORNERS,[m.circle]:a===F.CIRCLE,[m.square]:a===F.SQUARE},E()))})))}))},7469:(e,n,t)=>{let a;t.d(n,{m$:()=>a,eM:()=>i,pj:()=>l,wL:()=>r,VZ:()=>d,B_:()=>s}),function(e){e[e.SIZE_48=0]="SIZE_48",e[e.SIZE_56=1]="SIZE_56",e[e.SIZE_64=2]="SIZE_64",e[e.SIZE_72=3]="SIZE_72",e[e.SIZE_80=4]="SIZE_80",e[e.SIZE_96=5]="SIZE_96",e[e.SIZE_104=6]="SIZE_104",e[e.SIZE_112=7]="SIZE_112",e[e.SIZE_120=8]="SIZE_120",e[e.SIZE_128=9]="SIZE_128",e[e.SIZE_136=10]="SIZE_136",e[e.SIZE_144=11]="SIZE_144",e[e.SIZE_152=12]="SIZE_152",e[e.SIZE_160=13]="SIZE_160",e[e.SIZE_168=14]="SIZE_168",e[e.SIZE_176=15]="SIZE_176",e[e.SIZE_184=16]="SIZE_184",e[e.SIZE_200=17]="SIZE_200",e[e.SIZE_232=18]="SIZE_232"}(a||(a={}));const i={[a.SIZE_48]:48,[a.SIZE_56]:56,[a.SIZE_64]:64,[a.SIZE_72]:72,[a.SIZE_80]:80,[a.SIZE_96]:96,[a.SIZE_104]:104,[a.SIZE_112]:112,[a.SIZE_120]:120,[a.SIZE_128]:128,[a.SIZE_136]:136,[a.SIZE_144]:144,[a.SIZE_152]:152,[a.SIZE_160]:160,[a.SIZE_168]:168,[a.SIZE_176]:176,[a.SIZE_184]:184,[a.SIZE_200]:200,[a.SIZE_232]:232},l=[a.SIZE_48,a.SIZE_56,a.SIZE_64],r=[a.SIZE_72,a.SIZE_80,a.SIZE_96,a.SIZE_104,a.SIZE_112,a.SIZE_120,a.SIZE_128],d=[a.SIZE_136,a.SIZE_144,a.SIZE_152,a.SIZE_160,a.SIZE_168,a.SIZE_176],s=[a.SIZE_184,a.SIZE_200,a.SIZE_232]},41734:(e,n,t)=>{t.d(n,{Z:()=>a});const a={topBar:"M_Sdhr1fQomXfFpJhlAV",topBarScrolled:"y1_VPBbLK5eyOtpider1",artistName:"jy0edgg9sHX2n0pFa4vj",button:"dLvkpxjslIRQbk1CwUmA",active:"Q4Tjljkt3LIpk7eBBKgp",tracklist:"flODZ8OHLrIZdsmmorij",cardGrid:"cfLzS7jCKWI2Q04gBr1F",headerContainer:"Fz5_rAxpenrV3rKWvEE0",firstAlbum:"ZxsW3oR7Vn5LaJ7V01M9",headerImage:"ul3GJOil7Z8NKLlukZoK",headerMetadata:"xvvNq8f5m_OwRXAXfjGY",headerButtons:"zh6kn35ACwwkQDbuf9dk",headerTitle:"Fs4KnCRGI01L4kCcEQcS"}},68569:(e,n,t)=>{t.d(n,{Z:()=>a});const a={artistOverviewContent:"iB16LxoPzDeVZo8zPhPQ",artistOverviewContainer:"FWzKEQQ9PYhHWOqfnYJV",popularTracks:"uhUnBNQXv7eaTTjCiPnp",artistShelfSpacer:"gS5Yk2DVcvRFAuyG_4r4",sideBlock:"kySHiIHbAOOdeS_SiOKz",popularTracksBlock:"m2I9Af9uHAIhYwi4fyo2",about:"bwNHXCZFo6f46VJEQNEl",events:"N7W_r4ZH8LUdXhpDsQ8c",merch:"jnwkIthi9wxLu9UAyQ7P",merchSmall:"_5tLXPYx42wERUwuJIEcE",overview:"cikURTYDxmyv0HGq10TK",heading:"l6YAKmkzQj4WAyn82MP6"}}}]);
//# sourceMappingURL=xpui-routes-track-v2.js.map