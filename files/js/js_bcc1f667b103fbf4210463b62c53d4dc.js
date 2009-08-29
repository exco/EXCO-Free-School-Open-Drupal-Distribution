// $Id: jquery.js,v 1.12.2.3 2008/06/25 09:38:39 goba Exp $ 

/*
 * jQuery 1.2.6 - New Wave Javascript
 *
 * Copyright (c) 2008 John Resig (jquery.com)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * Date: 2008-05-24 14:22:17 -0400 (Sat, 24 May 2008)
 * Rev: 5685
 */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(H(){J w=1b.4M,3m$=1b.$;J D=1b.4M=1b.$=H(a,b){I 2B D.17.5j(a,b)};J u=/^[^<]*(<(.|\\s)+>)[^>]*$|^#(\\w+)$/,62=/^.[^:#\\[\\.]*$/,12;D.17=D.44={5j:H(d,b){d=d||S;G(d.16){7[0]=d;7.K=1;I 7}G(1j d=="23"){J c=u.2D(d);G(c&&(c[1]||!b)){G(c[1])d=D.4h([c[1]],b);N{J a=S.61(c[3]);G(a){G(a.2v!=c[3])I D().2q(d);I D(a)}d=[]}}N I D(b).2q(d)}N G(D.1D(d))I D(S)[D.17.27?"27":"43"](d);I 7.6Y(D.2d(d))},5w:"1.2.6",8G:H(){I 7.K},K:0,3p:H(a){I a==12?D.2d(7):7[a]},2I:H(b){J a=D(b);a.5n=7;I a},6Y:H(a){7.K=0;2p.44.1p.1w(7,a);I 7},P:H(a,b){I D.P(7,a,b)},5i:H(b){J a=-1;I D.2L(b&&b.5w?b[0]:b,7)},1K:H(c,a,b){J d=c;G(c.1q==56)G(a===12)I 7[0]&&D[b||"1K"](7[0],c);N{d={};d[c]=a}I 7.P(H(i){R(c 1n d)D.1K(b?7.V:7,c,D.1i(7,d[c],b,i,c))})},1g:H(b,a){G((b==\'2h\'||b==\'1Z\')&&3d(a)<0)a=12;I 7.1K(b,a,"2a")},1r:H(b){G(1j b!="49"&&b!=U)I 7.4E().3v((7[0]&&7[0].2z||S).5F(b));J a="";D.P(b||7,H(){D.P(7.3t,H(){G(7.16!=8)a+=7.16!=1?7.76:D.17.1r([7])})});I a},5z:H(b){G(7[0])D(b,7[0].2z).5y().39(7[0]).2l(H(){J a=7;1B(a.1x)a=a.1x;I a}).3v(7);I 7},8Y:H(a){I 7.P(H(){D(7).6Q().5z(a)})},8R:H(a){I 7.P(H(){D(7).5z(a)})},3v:H(){I 7.3W(19,M,Q,H(a){G(7.16==1)7.3U(a)})},6F:H(){I 7.3W(19,M,M,H(a){G(7.16==1)7.39(a,7.1x)})},6E:H(){I 7.3W(19,Q,Q,H(a){7.1d.39(a,7)})},5q:H(){I 7.3W(19,Q,M,H(a){7.1d.39(a,7.2H)})},3l:H(){I 7.5n||D([])},2q:H(b){J c=D.2l(7,H(a){I D.2q(b,a)});I 7.2I(/[^+>] [^+>]/.11(b)||b.1h("..")>-1?D.4r(c):c)},5y:H(e){J f=7.2l(H(){G(D.14.1f&&!D.4n(7)){J a=7.6o(M),5h=S.3h("1v");5h.3U(a);I D.4h([5h.4H])[0]}N I 7.6o(M)});J d=f.2q("*").5c().P(H(){G(7[E]!=12)7[E]=U});G(e===M)7.2q("*").5c().P(H(i){G(7.16==3)I;J c=D.L(7,"3w");R(J a 1n c)R(J b 1n c[a])D.W.1e(d[i],a,c[a][b],c[a][b].L)});I f},1E:H(b){I 7.2I(D.1D(b)&&D.3C(7,H(a,i){I b.1k(a,i)})||D.3g(b,7))},4Y:H(b){G(b.1q==56)G(62.11(b))I 7.2I(D.3g(b,7,M));N b=D.3g(b,7);J a=b.K&&b[b.K-1]!==12&&!b.16;I 7.1E(H(){I a?D.2L(7,b)<0:7!=b})},1e:H(a){I 7.2I(D.4r(D.2R(7.3p(),1j a==\'23\'?D(a):D.2d(a))))},3F:H(a){I!!a&&D.3g(a,7).K>0},7T:H(a){I 7.3F("."+a)},6e:H(b){G(b==12){G(7.K){J c=7[0];G(D.Y(c,"2A")){J e=c.64,63=[],15=c.15,2V=c.O=="2A-2V";G(e<0)I U;R(J i=2V?e:0,2f=2V?e+1:15.K;i<2f;i++){J d=15[i];G(d.2W){b=D.14.1f&&!d.at.2x.an?d.1r:d.2x;G(2V)I b;63.1p(b)}}I 63}N I(7[0].2x||"").1o(/\\r/g,"")}I 12}G(b.1q==4L)b+=\'\';I 7.P(H(){G(7.16!=1)I;G(b.1q==2p&&/5O|5L/.11(7.O))7.4J=(D.2L(7.2x,b)>=0||D.2L(7.34,b)>=0);N G(D.Y(7,"2A")){J a=D.2d(b);D("9R",7).P(H(){7.2W=(D.2L(7.2x,a)>=0||D.2L(7.1r,a)>=0)});G(!a.K)7.64=-1}N 7.2x=b})},2K:H(a){I a==12?(7[0]?7[0].4H:U):7.4E().3v(a)},7b:H(a){I 7.5q(a).21()},79:H(i){I 7.3s(i,i+1)},3s:H(){I 7.2I(2p.44.3s.1w(7,19))},2l:H(b){I 7.2I(D.2l(7,H(a,i){I b.1k(a,i,a)}))},5c:H(){I 7.1e(7.5n)},L:H(d,b){J a=d.1R(".");a[1]=a[1]?"."+a[1]:"";G(b===12){J c=7.5C("9z"+a[1]+"!",[a[0]]);G(c===12&&7.K)c=D.L(7[0],d);I c===12&&a[1]?7.L(a[0]):c}N I 7.1P("9u"+a[1]+"!",[a[0],b]).P(H(){D.L(7,d,b)})},3b:H(a){I 7.P(H(){D.3b(7,a)})},3W:H(g,f,h,d){J e=7.K>1,3x;I 7.P(H(){G(!3x){3x=D.4h(g,7.2z);G(h)3x.9o()}J b=7;G(f&&D.Y(7,"1T")&&D.Y(3x[0],"4F"))b=7.3H("22")[0]||7.3U(7.2z.3h("22"));J c=D([]);D.P(3x,H(){J a=e?D(7).5y(M)[0]:7;G(D.Y(a,"1m"))c=c.1e(a);N{G(a.16==1)c=c.1e(D("1m",a).21());d.1k(b,a)}});c.P(6T)})}};D.17.5j.44=D.17;H 6T(i,a){G(a.4d)D.3Y({1a:a.4d,31:Q,1O:"1m"});N D.5u(a.1r||a.6O||a.4H||"");G(a.1d)a.1d.37(a)}H 1z(){I+2B 8J}D.1l=D.17.1l=H(){J b=19[0]||{},i=1,K=19.K,4x=Q,15;G(b.1q==8I){4x=b;b=19[1]||{};i=2}G(1j b!="49"&&1j b!="H")b={};G(K==i){b=7;--i}R(;i<K;i++)G((15=19[i])!=U)R(J c 1n 15){J a=b[c],2w=15[c];G(b===2w)6M;G(4x&&2w&&1j 2w=="49"&&!2w.16)b[c]=D.1l(4x,a||(2w.K!=U?[]:{}),2w);N G(2w!==12)b[c]=2w}I b};J E="4M"+1z(),6K=0,5r={},6G=/z-?5i|8B-?8A|1y|6B|8v-?1Z/i,3P=S.3P||{};D.1l({8u:H(a){1b.$=3m$;G(a)1b.4M=w;I D},1D:H(a){I!!a&&1j a!="23"&&!a.Y&&a.1q!=2p&&/^[\\s[]?H/.11(a+"")},4n:H(a){I a.1C&&!a.1c||a.2j&&a.2z&&!a.2z.1c},5u:H(a){a=D.3k(a);G(a){J b=S.3H("6w")[0]||S.1C,1m=S.3h("1m");1m.O="1r/4t";G(D.14.1f)1m.1r=a;N 1m.3U(S.5F(a));b.39(1m,b.1x);b.37(1m)}},Y:H(b,a){I b.Y&&b.Y.2r()==a.2r()},1Y:{},L:H(c,d,b){c=c==1b?5r:c;J a=c[E];G(!a)a=c[E]=++6K;G(d&&!D.1Y[a])D.1Y[a]={};G(b!==12)D.1Y[a][d]=b;I d?D.1Y[a][d]:a},3b:H(c,b){c=c==1b?5r:c;J a=c[E];G(b){G(D.1Y[a]){2U D.1Y[a][b];b="";R(b 1n D.1Y[a])1X;G(!b)D.3b(c)}}N{1U{2U c[E]}1V(e){G(c.5l)c.5l(E)}2U D.1Y[a]}},P:H(d,a,c){J e,i=0,K=d.K;G(c){G(K==12){R(e 1n d)G(a.1w(d[e],c)===Q)1X}N R(;i<K;)G(a.1w(d[i++],c)===Q)1X}N{G(K==12){R(e 1n d)G(a.1k(d[e],e,d[e])===Q)1X}N R(J b=d[0];i<K&&a.1k(b,i,b)!==Q;b=d[++i]){}}I d},1i:H(b,a,c,i,d){G(D.1D(a))a=a.1k(b,i);I a&&a.1q==4L&&c=="2a"&&!6G.11(d)?a+"2X":a},1F:{1e:H(c,b){D.P((b||"").1R(/\\s+/),H(i,a){G(c.16==1&&!D.1F.3T(c.1F,a))c.1F+=(c.1F?" ":"")+a})},21:H(c,b){G(c.16==1)c.1F=b!=12?D.3C(c.1F.1R(/\\s+/),H(a){I!D.1F.3T(b,a)}).6s(" "):""},3T:H(b,a){I D.2L(a,(b.1F||b).6r().1R(/\\s+/))>-1}},6q:H(b,c,a){J e={};R(J d 1n c){e[d]=b.V[d];b.V[d]=c[d]}a.1k(b);R(J d 1n c)b.V[d]=e[d]},1g:H(d,e,c){G(e=="2h"||e=="1Z"){J b,3X={30:"5x",5g:"1G",18:"3I"},35=e=="2h"?["5e","6k"]:["5G","6i"];H 5b(){b=e=="2h"?d.8f:d.8c;J a=0,2C=0;D.P(35,H(){a+=3d(D.2a(d,"57"+7,M))||0;2C+=3d(D.2a(d,"2C"+7+"4b",M))||0});b-=29.83(a+2C)}G(D(d).3F(":4j"))5b();N D.6q(d,3X,5b);I 29.2f(0,b)}I D.2a(d,e,c)},2a:H(f,l,k){J e,V=f.V;H 3E(b){G(!D.14.2k)I Q;J a=3P.54(b,U);I!a||a.52("3E")==""}G(l=="1y"&&D.14.1f){e=D.1K(V,"1y");I e==""?"1":e}G(D.14.2G&&l=="18"){J d=V.50;V.50="0 7Y 7W";V.50=d}G(l.1I(/4i/i))l=y;G(!k&&V&&V[l])e=V[l];N G(3P.54){G(l.1I(/4i/i))l="4i";l=l.1o(/([A-Z])/g,"-$1").3y();J c=3P.54(f,U);G(c&&!3E(f))e=c.52(l);N{J g=[],2E=[],a=f,i=0;R(;a&&3E(a);a=a.1d)2E.6h(a);R(;i<2E.K;i++)G(3E(2E[i])){g[i]=2E[i].V.18;2E[i].V.18="3I"}e=l=="18"&&g[2E.K-1]!=U?"2F":(c&&c.52(l))||"";R(i=0;i<g.K;i++)G(g[i]!=U)2E[i].V.18=g[i]}G(l=="1y"&&e=="")e="1"}N G(f.4g){J h=l.1o(/\\-(\\w)/g,H(a,b){I b.2r()});e=f.4g[l]||f.4g[h];G(!/^\\d+(2X)?$/i.11(e)&&/^\\d/.11(e)){J j=V.1A,66=f.65.1A;f.65.1A=f.4g.1A;V.1A=e||0;e=V.aM+"2X";V.1A=j;f.65.1A=66}}I e},4h:H(l,h){J k=[];h=h||S;G(1j h.3h==\'12\')h=h.2z||h[0]&&h[0].2z||S;D.P(l,H(i,d){G(!d)I;G(d.1q==4L)d+=\'\';G(1j d=="23"){d=d.1o(/(<(\\w+)[^>]*?)\\/>/g,H(b,a,c){I c.1I(/^(aK|4f|7E|aG|4T|7A|aB|3n|az|ay|av)$/i)?b:a+"></"+c+">"});J f=D.3k(d).3y(),1v=h.3h("1v");J e=!f.1h("<au")&&[1,"<2A 7w=\'7w\'>","</2A>"]||!f.1h("<ar")&&[1,"<7v>","</7v>"]||f.1I(/^<(aq|22|am|ak|ai)/)&&[1,"<1T>","</1T>"]||!f.1h("<4F")&&[2,"<1T><22>","</22></1T>"]||(!f.1h("<af")||!f.1h("<ad"))&&[3,"<1T><22><4F>","</4F></22></1T>"]||!f.1h("<7E")&&[2,"<1T><22></22><7q>","</7q></1T>"]||D.14.1f&&[1,"1v<1v>","</1v>"]||[0,"",""];1v.4H=e[1]+d+e[2];1B(e[0]--)1v=1v.5T;G(D.14.1f){J g=!f.1h("<1T")&&f.1h("<22")<0?1v.1x&&1v.1x.3t:e[1]=="<1T>"&&f.1h("<22")<0?1v.3t:[];R(J j=g.K-1;j>=0;--j)G(D.Y(g[j],"22")&&!g[j].3t.K)g[j].1d.37(g[j]);G(/^\\s/.11(d))1v.39(h.5F(d.1I(/^\\s*/)[0]),1v.1x)}d=D.2d(1v.3t)}G(d.K===0&&(!D.Y(d,"3V")&&!D.Y(d,"2A")))I;G(d[0]==12||D.Y(d,"3V")||d.15)k.1p(d);N k=D.2R(k,d)});I k},1K:H(d,f,c){G(!d||d.16==3||d.16==8)I 12;J e=!D.4n(d),40=c!==12,1f=D.14.1f;f=e&&D.3X[f]||f;G(d.2j){J g=/5Q|4d|V/.11(f);G(f=="2W"&&D.14.2k)d.1d.64;G(f 1n d&&e&&!g){G(40){G(f=="O"&&D.Y(d,"4T")&&d.1d)7p"O a3 a1\'t 9V 9U";d[f]=c}G(D.Y(d,"3V")&&d.7i(f))I d.7i(f).76;I d[f]}G(1f&&e&&f=="V")I D.1K(d.V,"9T",c);G(40)d.9Q(f,""+c);J h=1f&&e&&g?d.4G(f,2):d.4G(f);I h===U?12:h}G(1f&&f=="1y"){G(40){d.6B=1;d.1E=(d.1E||"").1o(/7f\\([^)]*\\)/,"")+(3r(c)+\'\'=="9L"?"":"7f(1y="+c*7a+")")}I d.1E&&d.1E.1h("1y=")>=0?(3d(d.1E.1I(/1y=([^)]*)/)[1])/7a)+\'\':""}f=f.1o(/-([a-z])/9H,H(a,b){I b.2r()});G(40)d[f]=c;I d[f]},3k:H(a){I(a||"").1o(/^\\s+|\\s+$/g,"")},2d:H(b){J a=[];G(b!=U){J i=b.K;G(i==U||b.1R||b.4I||b.1k)a[0]=b;N 1B(i)a[--i]=b[i]}I a},2L:H(b,a){R(J i=0,K=a.K;i<K;i++)G(a[i]===b)I i;I-1},2R:H(a,b){J i=0,T,2S=a.K;G(D.14.1f){1B(T=b[i++])G(T.16!=8)a[2S++]=T}N 1B(T=b[i++])a[2S++]=T;I a},4r:H(a){J c=[],2o={};1U{R(J i=0,K=a.K;i<K;i++){J b=D.L(a[i]);G(!2o[b]){2o[b]=M;c.1p(a[i])}}}1V(e){c=a}I c},3C:H(c,a,d){J b=[];R(J i=0,K=c.K;i<K;i++)G(!d!=!a(c[i],i))b.1p(c[i]);I b},2l:H(d,a){J c=[];R(J i=0,K=d.K;i<K;i++){J b=a(d[i],i);G(b!=U)c[c.K]=b}I c.7d.1w([],c)}});J v=9B.9A.3y();D.14={5B:(v.1I(/.+(?:9y|9x|9w|9v)[\\/: ]([\\d.]+)/)||[])[1],2k:/75/.11(v),2G:/2G/.11(v),1f:/1f/.11(v)&&!/2G/.11(v),42:/42/.11(v)&&!/(9s|75)/.11(v)};J y=D.14.1f?"7o":"72";D.1l({71:!D.14.1f||S.70=="6Z",3X:{"R":"9n","9k":"1F","4i":y,72:y,7o:y,9h:"9f",9e:"9d",9b:"99"}});D.P({6W:H(a){I a.1d},97:H(a){I D.4S(a,"1d")},95:H(a){I D.3a(a,2,"2H")},91:H(a){I D.3a(a,2,"4l")},8Z:H(a){I D.4S(a,"2H")},8X:H(a){I D.4S(a,"4l")},8W:H(a){I D.5v(a.1d.1x,a)},8V:H(a){I D.5v(a.1x)},6Q:H(a){I D.Y(a,"8U")?a.8T||a.8S.S:D.2d(a.3t)}},H(c,d){D.17[c]=H(b){J a=D.2l(7,d);G(b&&1j b=="23")a=D.3g(b,a);I 7.2I(D.4r(a))}});D.P({6P:"3v",8Q:"6F",39:"6E",8P:"5q",8O:"7b"},H(c,b){D.17[c]=H(){J a=19;I 7.P(H(){R(J i=0,K=a.K;i<K;i++)D(a[i])[b](7)})}});D.P({8N:H(a){D.1K(7,a,"");G(7.16==1)7.5l(a)},8M:H(a){D.1F.1e(7,a)},8L:H(a){D.1F.21(7,a)},8K:H(a){D.1F[D.1F.3T(7,a)?"21":"1e"](7,a)},21:H(a){G(!a||D.1E(a,[7]).r.K){D("*",7).1e(7).P(H(){D.W.21(7);D.3b(7)});G(7.1d)7.1d.37(7)}},4E:H(){D(">*",7).21();1B(7.1x)7.37(7.1x)}},H(a,b){D.17[a]=H(){I 7.P(b,19)}});D.P(["6N","4b"],H(i,c){J b=c.3y();D.17[b]=H(a){I 7[0]==1b?D.14.2G&&S.1c["5t"+c]||D.14.2k&&1b["5s"+c]||S.70=="6Z"&&S.1C["5t"+c]||S.1c["5t"+c]:7[0]==S?29.2f(29.2f(S.1c["4y"+c],S.1C["4y"+c]),29.2f(S.1c["2i"+c],S.1C["2i"+c])):a==12?(7.K?D.1g(7[0],b):U):7.1g(b,a.1q==56?a:a+"2X")}});H 25(a,b){I a[0]&&3r(D.2a(a[0],b,M),10)||0}J C=D.14.2k&&3r(D.14.5B)<8H?"(?:[\\\\w*3m-]|\\\\\\\\.)":"(?:[\\\\w\\8F-\\8E*3m-]|\\\\\\\\.)",6L=2B 4v("^>\\\\s*("+C+"+)"),6J=2B 4v("^("+C+"+)(#)("+C+"+)"),6I=2B 4v("^([#.]?)("+C+"*)");D.1l({6H:{"":H(a,i,m){I m[2]=="*"||D.Y(a,m[2])},"#":H(a,i,m){I a.4G("2v")==m[2]},":":{8D:H(a,i,m){I i<m[3]-0},8C:H(a,i,m){I i>m[3]-0},3a:H(a,i,m){I m[3]-0==i},79:H(a,i,m){I m[3]-0==i},3o:H(a,i){I i==0},3S:H(a,i,m,r){I i==r.K-1},6D:H(a,i){I i%2==0},6C:H(a,i){I i%2},"3o-4u":H(a){I a.1d.3H("*")[0]==a},"3S-4u":H(a){I D.3a(a.1d.5T,1,"4l")==a},"8z-4u":H(a){I!D.3a(a.1d.5T,2,"4l")},6W:H(a){I a.1x},4E:H(a){I!a.1x},8y:H(a,i,m){I(a.6O||a.8x||D(a).1r()||"").1h(m[3])>=0},4j:H(a){I"1G"!=a.O&&D.1g(a,"18")!="2F"&&D.1g(a,"5g")!="1G"},1G:H(a){I"1G"==a.O||D.1g(a,"18")=="2F"||D.1g(a,"5g")=="1G"},8w:H(a){I!a.3R},3R:H(a){I a.3R},4J:H(a){I a.4J},2W:H(a){I a.2W||D.1K(a,"2W")},1r:H(a){I"1r"==a.O},5O:H(a){I"5O"==a.O},5L:H(a){I"5L"==a.O},5p:H(a){I"5p"==a.O},3Q:H(a){I"3Q"==a.O},5o:H(a){I"5o"==a.O},6A:H(a){I"6A"==a.O},6z:H(a){I"6z"==a.O},2s:H(a){I"2s"==a.O||D.Y(a,"2s")},4T:H(a){I/4T|2A|6y|2s/i.11(a.Y)},3T:H(a,i,m){I D.2q(m[3],a).K},8t:H(a){I/h\\d/i.11(a.Y)},8s:H(a){I D.3C(D.3O,H(b){I a==b.T}).K}}},6x:[/^(\\[) *@?([\\w-]+) *([!*$^~=]*) *(\'?"?)(.*?)\\4 *\\]/,/^(:)([\\w-]+)\\("?\'?(.*?(\\(.*?\\))?[^(]*?)"?\'?\\)/,2B 4v("^([:.#]*)("+C+"+)")],3g:H(a,c,b){J d,1t=[];1B(a&&a!=d){d=a;J f=D.1E(a,c,b);a=f.t.1o(/^\\s*,\\s*/,"");1t=b?c=f.r:D.2R(1t,f.r)}I 1t},2q:H(t,o){G(1j t!="23")I[t];G(o&&o.16!=1&&o.16!=9)I[];o=o||S;J d=[o],2o=[],3S,Y;1B(t&&3S!=t){J r=[];3S=t;t=D.3k(t);J l=Q,3j=6L,m=3j.2D(t);G(m){Y=m[1].2r();R(J i=0;d[i];i++)R(J c=d[i].1x;c;c=c.2H)G(c.16==1&&(Y=="*"||c.Y.2r()==Y))r.1p(c);d=r;t=t.1o(3j,"");G(t.1h(" ")==0)6M;l=M}N{3j=/^([>+~])\\s*(\\w*)/i;G((m=3j.2D(t))!=U){r=[];J k={};Y=m[2].2r();m=m[1];R(J j=0,3i=d.K;j<3i;j++){J n=m=="~"||m=="+"?d[j].2H:d[j].1x;R(;n;n=n.2H)G(n.16==1){J g=D.L(n);G(m=="~"&&k[g])1X;G(!Y||n.Y.2r()==Y){G(m=="~")k[g]=M;r.1p(n)}G(m=="+")1X}}d=r;t=D.3k(t.1o(3j,""));l=M}}G(t&&!l){G(!t.1h(",")){G(o==d[0])d.4s();2o=D.2R(2o,d);r=d=[o];t=" "+t.6v(1,t.K)}N{J h=6J;J m=h.2D(t);G(m){m=[0,m[2],m[3],m[1]]}N{h=6I;m=h.2D(t)}m[2]=m[2].1o(/\\\\/g,"");J f=d[d.K-1];G(m[1]=="#"&&f&&f.61&&!D.4n(f)){J p=f.61(m[2]);G((D.14.1f||D.14.2G)&&p&&1j p.2v=="23"&&p.2v!=m[2])p=D(\'[@2v="\'+m[2]+\'"]\',f)[0];d=r=p&&(!m[3]||D.Y(p,m[3]))?[p]:[]}N{R(J i=0;d[i];i++){J a=m[1]=="#"&&m[3]?m[3]:m[1]!=""||m[0]==""?"*":m[2];G(a=="*"&&d[i].Y.3y()=="49")a="3n";r=D.2R(r,d[i].3H(a))}G(m[1]==".")r=D.5m(r,m[2]);G(m[1]=="#"){J e=[];R(J i=0;r[i];i++)G(r[i].4G("2v")==m[2]){e=[r[i]];1X}r=e}d=r}t=t.1o(h,"")}}G(t){J b=D.1E(t,r);d=r=b.r;t=D.3k(b.t)}}G(t)d=[];G(d&&o==d[0])d.4s();2o=D.2R(2o,d);I 2o},5m:H(r,m,a){m=" "+m+" ";J c=[];R(J i=0;r[i];i++){J b=(" "+r[i].1F+" ").1h(m)>=0;G(!a&&b||a&&!b)c.1p(r[i])}I c},1E:H(t,r,h){J d;1B(t&&t!=d){d=t;J p=D.6x,m;R(J i=0;p[i];i++){m=p[i].2D(t);G(m){t=t.8r(m[0].K);m[2]=m[2].1o(/\\\\/g,"");1X}}G(!m)1X;G(m[1]==":"&&m[2]=="4Y")r=62.11(m[3])?D.1E(m[3],r,M).r:D(r).4Y(m[3]);N G(m[1]==".")r=D.5m(r,m[2],h);N G(m[1]=="["){J g=[],O=m[3];R(J i=0,3i=r.K;i<3i;i++){J a=r[i],z=a[D.3X[m[2]]||m[2]];G(z==U||/5Q|4d|2W/.11(m[2]))z=D.1K(a,m[2])||\'\';G((O==""&&!!z||O=="="&&z==m[5]||O=="!="&&z!=m[5]||O=="^="&&z&&!z.1h(m[5])||O=="$="&&z.6v(z.K-m[5].K)==m[5]||(O=="*="||O=="~=")&&z.1h(m[5])>=0)^h)g.1p(a)}r=g}N G(m[1]==":"&&m[2]=="3a-4u"){J e={},g=[],11=/(-?)(\\d*)n((?:\\+|-)?\\d*)/.2D(m[3]=="6D"&&"2n"||m[3]=="6C"&&"2n+1"||!/\\D/.11(m[3])&&"8q+"+m[3]||m[3]),3o=(11[1]+(11[2]||1))-0,d=11[3]-0;R(J i=0,3i=r.K;i<3i;i++){J j=r[i],1d=j.1d,2v=D.L(1d);G(!e[2v]){J c=1;R(J n=1d.1x;n;n=n.2H)G(n.16==1)n.4q=c++;e[2v]=M}J b=Q;G(3o==0){G(j.4q==d)b=M}N G((j.4q-d)%3o==0&&(j.4q-d)/3o>=0)b=M;G(b^h)g.1p(j)}r=g}N{J f=D.6H[m[1]];G(1j f=="49")f=f[m[2]];G(1j f=="23")f=6u("Q||H(a,i){I "+f+";}");r=D.3C(r,H(a,i){I f(a,i,m,r)},h)}}I{r:r,t:t}},4S:H(b,c){J a=[],1t=b[c];1B(1t&&1t!=S){G(1t.16==1)a.1p(1t);1t=1t[c]}I a},3a:H(a,e,c,b){e=e||1;J d=0;R(;a;a=a[c])G(a.16==1&&++d==e)1X;I a},5v:H(n,a){J r=[];R(;n;n=n.2H){G(n.16==1&&n!=a)r.1p(n)}I r}});D.W={1e:H(f,i,g,e){G(f.16==3||f.16==8)I;G(D.14.1f&&f.4I)f=1b;G(!g.24)g.24=7.24++;G(e!=12){J h=g;g=7.3M(h,H(){I h.1w(7,19)});g.L=e}J j=D.L(f,"3w")||D.L(f,"3w",{}),1H=D.L(f,"1H")||D.L(f,"1H",H(){G(1j D!="12"&&!D.W.5k)I D.W.1H.1w(19.3L.T,19)});1H.T=f;D.P(i.1R(/\\s+/),H(c,b){J a=b.1R(".");b=a[0];g.O=a[1];J d=j[b];G(!d){d=j[b]={};G(!D.W.2t[b]||D.W.2t[b].4p.1k(f)===Q){G(f.3K)f.3K(b,1H,Q);N G(f.6t)f.6t("4o"+b,1H)}}d[g.24]=g;D.W.26[b]=M});f=U},24:1,26:{},21:H(e,h,f){G(e.16==3||e.16==8)I;J i=D.L(e,"3w"),1L,5i;G(i){G(h==12||(1j h=="23"&&h.8p(0)=="."))R(J g 1n i)7.21(e,g+(h||""));N{G(h.O){f=h.2y;h=h.O}D.P(h.1R(/\\s+/),H(b,a){J c=a.1R(".");a=c[0];G(i[a]){G(f)2U i[a][f.24];N R(f 1n i[a])G(!c[1]||i[a][f].O==c[1])2U i[a][f];R(1L 1n i[a])1X;G(!1L){G(!D.W.2t[a]||D.W.2t[a].4A.1k(e)===Q){G(e.6p)e.6p(a,D.L(e,"1H"),Q);N G(e.6n)e.6n("4o"+a,D.L(e,"1H"))}1L=U;2U i[a]}}})}R(1L 1n i)1X;G(!1L){J d=D.L(e,"1H");G(d)d.T=U;D.3b(e,"3w");D.3b(e,"1H")}}},1P:H(h,c,f,g,i){c=D.2d(c);G(h.1h("!")>=0){h=h.3s(0,-1);J a=M}G(!f){G(7.26[h])D("*").1e([1b,S]).1P(h,c)}N{G(f.16==3||f.16==8)I 12;J b,1L,17=D.1D(f[h]||U),W=!c[0]||!c[0].32;G(W){c.6h({O:h,2J:f,32:H(){},3J:H(){},4C:1z()});c[0][E]=M}c[0].O=h;G(a)c[0].6m=M;J d=D.L(f,"1H");G(d)b=d.1w(f,c);G((!17||(D.Y(f,\'a\')&&h=="4V"))&&f["4o"+h]&&f["4o"+h].1w(f,c)===Q)b=Q;G(W)c.4s();G(i&&D.1D(i)){1L=i.1w(f,b==U?c:c.7d(b));G(1L!==12)b=1L}G(17&&g!==Q&&b!==Q&&!(D.Y(f,\'a\')&&h=="4V")){7.5k=M;1U{f[h]()}1V(e){}}7.5k=Q}I b},1H:H(b){J a,1L,38,5f,4m;b=19[0]=D.W.6l(b||1b.W);38=b.O.1R(".");b.O=38[0];38=38[1];5f=!38&&!b.6m;4m=(D.L(7,"3w")||{})[b.O];R(J j 1n 4m){J c=4m[j];G(5f||c.O==38){b.2y=c;b.L=c.L;1L=c.1w(7,19);G(a!==Q)a=1L;G(1L===Q){b.32();b.3J()}}}I a},6l:H(b){G(b[E]==M)I b;J d=b;b={8o:d};J c="8n 8m 8l 8k 2s 8j 47 5d 6j 5E 8i L 8h 8g 4K 2y 5a 59 8e 8b 58 6f 8a 88 4k 87 86 84 6d 2J 4C 6c O 82 81 35".1R(" ");R(J i=c.K;i;i--)b[c[i]]=d[c[i]];b[E]=M;b.32=H(){G(d.32)d.32();d.80=Q};b.3J=H(){G(d.3J)d.3J();d.7Z=M};b.4C=b.4C||1z();G(!b.2J)b.2J=b.6d||S;G(b.2J.16==3)b.2J=b.2J.1d;G(!b.4k&&b.4K)b.4k=b.4K==b.2J?b.6c:b.4K;G(b.58==U&&b.5d!=U){J a=S.1C,1c=S.1c;b.58=b.5d+(a&&a.2e||1c&&1c.2e||0)-(a.6b||0);b.6f=b.6j+(a&&a.2c||1c&&1c.2c||0)-(a.6a||0)}G(!b.35&&((b.47||b.47===0)?b.47:b.5a))b.35=b.47||b.5a;G(!b.59&&b.5E)b.59=b.5E;G(!b.35&&b.2s)b.35=(b.2s&1?1:(b.2s&2?3:(b.2s&4?2:0)));I b},3M:H(a,b){b.24=a.24=a.24||b.24||7.24++;I b},2t:{27:{4p:H(){55();I},4A:H(){I}},3D:{4p:H(){G(D.14.1f)I Q;D(7).2O("53",D.W.2t.3D.2y);I M},4A:H(){G(D.14.1f)I Q;D(7).4e("53",D.W.2t.3D.2y);I M},2y:H(a){G(F(a,7))I M;a.O="3D";I D.W.1H.1w(7,19)}},3N:{4p:H(){G(D.14.1f)I Q;D(7).2O("51",D.W.2t.3N.2y);I M},4A:H(){G(D.14.1f)I Q;D(7).4e("51",D.W.2t.3N.2y);I M},2y:H(a){G(F(a,7))I M;a.O="3N";I D.W.1H.1w(7,19)}}}};D.17.1l({2O:H(c,a,b){I c=="4X"?7.2V(c,a,b):7.P(H(){D.W.1e(7,c,b||a,b&&a)})},2V:H(d,b,c){J e=D.W.3M(c||b,H(a){D(7).4e(a,e);I(c||b).1w(7,19)});I 7.P(H(){D.W.1e(7,d,e,c&&b)})},4e:H(a,b){I 7.P(H(){D.W.21(7,a,b)})},1P:H(c,a,b){I 7.P(H(){D.W.1P(c,a,7,M,b)})},5C:H(c,a,b){I 7[0]&&D.W.1P(c,a,7[0],Q,b)},2m:H(b){J c=19,i=1;1B(i<c.K)D.W.3M(b,c[i++]);I 7.4V(D.W.3M(b,H(a){7.4Z=(7.4Z||0)%i;a.32();I c[7.4Z++].1w(7,19)||Q}))},7X:H(a,b){I 7.2O(\'3D\',a).2O(\'3N\',b)},27:H(a){55();G(D.2Q)a.1k(S,D);N D.3A.1p(H(){I a.1k(7,D)});I 7}});D.1l({2Q:Q,3A:[],27:H(){G(!D.2Q){D.2Q=M;G(D.3A){D.P(D.3A,H(){7.1k(S)});D.3A=U}D(S).5C("27")}}});J x=Q;H 55(){G(x)I;x=M;G(S.3K&&!D.14.2G)S.3K("69",D.27,Q);G(D.14.1f&&1b==1S)(H(){G(D.2Q)I;1U{S.1C.7V("1A")}1V(3e){3B(19.3L,0);I}D.27()})();G(D.14.2G)S.3K("69",H(){G(D.2Q)I;R(J i=0;i<S.4W.K;i++)G(S.4W[i].3R){3B(19.3L,0);I}D.27()},Q);G(D.14.2k){J a;(H(){G(D.2Q)I;G(S.3f!="68"&&S.3f!="1J"){3B(19.3L,0);I}G(a===12)a=D("V, 7A[7U=7S]").K;G(S.4W.K!=a){3B(19.3L,0);I}D.27()})()}D.W.1e(1b,"43",D.27)}D.P(("7R,7Q,43,85,4y,4X,4V,7P,"+"7O,7N,89,53,51,7M,2A,"+"5o,7L,7K,8d,3e").1R(","),H(i,b){D.17[b]=H(a){I a?7.2O(b,a):7.1P(b)}});J F=H(a,c){J b=a.4k;1B(b&&b!=c)1U{b=b.1d}1V(3e){b=c}I b==c};D(1b).2O("4X",H(){D("*").1e(S).4e()});D.17.1l({67:D.17.43,43:H(g,d,c){G(1j g!=\'23\')I 7.67(g);J e=g.1h(" ");G(e>=0){J i=g.3s(e,g.K);g=g.3s(0,e)}c=c||H(){};J f="2P";G(d)G(D.1D(d)){c=d;d=U}N{d=D.3n(d);f="6g"}J h=7;D.3Y({1a:g,O:f,1O:"2K",L:d,1J:H(a,b){G(b=="1W"||b=="7J")h.2K(i?D("<1v/>").3v(a.4U.1o(/<1m(.|\\s)*?\\/1m>/g,"")).2q(i):a.4U);h.P(c,[a.4U,b,a])}});I 7},aL:H(){I D.3n(7.7I())},7I:H(){I 7.2l(H(){I D.Y(7,"3V")?D.2d(7.aH):7}).1E(H(){I 7.34&&!7.3R&&(7.4J||/2A|6y/i.11(7.Y)||/1r|1G|3Q/i.11(7.O))}).2l(H(i,c){J b=D(7).6e();I b==U?U:b.1q==2p?D.2l(b,H(a,i){I{34:c.34,2x:a}}):{34:c.34,2x:b}}).3p()}});D.P("7H,7G,7F,7D,7C,7B".1R(","),H(i,o){D.17[o]=H(f){I 7.2O(o,f)}});J B=1z();D.1l({3p:H(d,b,a,c){G(D.1D(b)){a=b;b=U}I D.3Y({O:"2P",1a:d,L:b,1W:a,1O:c})},aE:H(b,a){I D.3p(b,U,a,"1m")},aD:H(c,b,a){I D.3p(c,b,a,"3z")},aC:H(d,b,a,c){G(D.1D(b)){a=b;b={}}I D.3Y({O:"6g",1a:d,L:b,1W:a,1O:c})},aA:H(a){D.1l(D.60,a)},60:{1a:5Z.5Q,26:M,O:"2P",2T:0,7z:"4R/x-ax-3V-aw",7x:M,31:M,L:U,5Y:U,3Q:U,4Q:{2N:"4R/2N, 1r/2N",2K:"1r/2K",1m:"1r/4t, 4R/4t",3z:"4R/3z, 1r/4t",1r:"1r/as",4w:"*/*"}},4z:{},3Y:H(s){s=D.1l(M,s,D.1l(M,{},D.60,s));J g,2Z=/=\\?(&|$)/g,1u,L,O=s.O.2r();G(s.L&&s.7x&&1j s.L!="23")s.L=D.3n(s.L);G(s.1O=="4P"){G(O=="2P"){G(!s.1a.1I(2Z))s.1a+=(s.1a.1I(/\\?/)?"&":"?")+(s.4P||"7u")+"=?"}N G(!s.L||!s.L.1I(2Z))s.L=(s.L?s.L+"&":"")+(s.4P||"7u")+"=?";s.1O="3z"}G(s.1O=="3z"&&(s.L&&s.L.1I(2Z)||s.1a.1I(2Z))){g="4P"+B++;G(s.L)s.L=(s.L+"").1o(2Z,"="+g+"$1");s.1a=s.1a.1o(2Z,"="+g+"$1");s.1O="1m";1b[g]=H(a){L=a;1W();1J();1b[g]=12;1U{2U 1b[g]}1V(e){}G(i)i.37(h)}}G(s.1O=="1m"&&s.1Y==U)s.1Y=Q;G(s.1Y===Q&&O=="2P"){J j=1z();J k=s.1a.1o(/(\\?|&)3m=.*?(&|$)/,"$ap="+j+"$2");s.1a=k+((k==s.1a)?(s.1a.1I(/\\?/)?"&":"?")+"3m="+j:"")}G(s.L&&O=="2P"){s.1a+=(s.1a.1I(/\\?/)?"&":"?")+s.L;s.L=U}G(s.26&&!D.4O++)D.W.1P("7H");J n=/^(?:\\w+:)?\\/\\/([^\\/?#]+)/;G(s.1O=="1m"&&O=="2P"&&n.11(s.1a)&&n.2D(s.1a)[1]!=5Z.al){J i=S.3H("6w")[0];J h=S.3h("1m");h.4d=s.1a;G(s.7t)h.aj=s.7t;G(!g){J l=Q;h.ah=h.ag=H(){G(!l&&(!7.3f||7.3f=="68"||7.3f=="1J")){l=M;1W();1J();i.37(h)}}}i.3U(h);I 12}J m=Q;J c=1b.7s?2B 7s("ae.ac"):2B 7r();G(s.5Y)c.6R(O,s.1a,s.31,s.5Y,s.3Q);N c.6R(O,s.1a,s.31);1U{G(s.L)c.4B("ab-aa",s.7z);G(s.5S)c.4B("a9-5R-a8",D.4z[s.1a]||"a7, a6 a5 a4 5N:5N:5N a2");c.4B("X-9Z-9Y","7r");c.4B("9W",s.1O&&s.4Q[s.1O]?s.4Q[s.1O]+", */*":s.4Q.4w)}1V(e){}G(s.7m&&s.7m(c,s)===Q){s.26&&D.4O--;c.7l();I Q}G(s.26)D.W.1P("7B",[c,s]);J d=H(a){G(!m&&c&&(c.3f==4||a=="2T")){m=M;G(f){7k(f);f=U}1u=a=="2T"&&"2T"||!D.7j(c)&&"3e"||s.5S&&D.7h(c,s.1a)&&"7J"||"1W";G(1u=="1W"){1U{L=D.6X(c,s.1O,s.9S)}1V(e){1u="5J"}}G(1u=="1W"){J b;1U{b=c.5I("7g-5R")}1V(e){}G(s.5S&&b)D.4z[s.1a]=b;G(!g)1W()}N D.5H(s,c,1u);1J();G(s.31)c=U}};G(s.31){J f=4I(d,13);G(s.2T>0)3B(H(){G(c){c.7l();G(!m)d("2T")}},s.2T)}1U{c.9P(s.L)}1V(e){D.5H(s,c,U,e)}G(!s.31)d();H 1W(){G(s.1W)s.1W(L,1u);G(s.26)D.W.1P("7C",[c,s])}H 1J(){G(s.1J)s.1J(c,1u);G(s.26)D.W.1P("7F",[c,s]);G(s.26&&!--D.4O)D.W.1P("7G")}I c},5H:H(s,a,b,e){G(s.3e)s.3e(a,b,e);G(s.26)D.W.1P("7D",[a,s,e])},4O:0,7j:H(a){1U{I!a.1u&&5Z.9O=="5p:"||(a.1u>=7e&&a.1u<9N)||a.1u==7c||a.1u==9K||D.14.2k&&a.1u==12}1V(e){}I Q},7h:H(a,c){1U{J b=a.5I("7g-5R");I a.1u==7c||b==D.4z[c]||D.14.2k&&a.1u==12}1V(e){}I Q},6X:H(a,c,b){J d=a.5I("9J-O"),2N=c=="2N"||!c&&d&&d.1h("2N")>=0,L=2N?a.9I:a.4U;G(2N&&L.1C.2j=="5J")7p"5J";G(b)L=b(L,c);G(c=="1m")D.5u(L);G(c=="3z")L=6u("("+L+")");I L},3n:H(a){J s=[];G(a.1q==2p||a.5w)D.P(a,H(){s.1p(3u(7.34)+"="+3u(7.2x))});N R(J j 1n a)G(a[j]&&a[j].1q==2p)D.P(a[j],H(){s.1p(3u(j)+"="+3u(7))});N s.1p(3u(j)+"="+3u(D.1D(a[j])?a[j]():a[j]));I s.6s("&").1o(/%20/g,"+")}});D.17.1l({1N:H(c,b){I c?7.2g({1Z:"1N",2h:"1N",1y:"1N"},c,b):7.1E(":1G").P(H(){7.V.18=7.5D||"";G(D.1g(7,"18")=="2F"){J a=D("<"+7.2j+" />").6P("1c");7.V.18=a.1g("18");G(7.V.18=="2F")7.V.18="3I";a.21()}}).3l()},1M:H(b,a){I b?7.2g({1Z:"1M",2h:"1M",1y:"1M"},b,a):7.1E(":4j").P(H(){7.5D=7.5D||D.1g(7,"18");7.V.18="2F"}).3l()},78:D.17.2m,2m:H(a,b){I D.1D(a)&&D.1D(b)?7.78.1w(7,19):a?7.2g({1Z:"2m",2h:"2m",1y:"2m"},a,b):7.P(H(){D(7)[D(7).3F(":1G")?"1N":"1M"]()})},9G:H(b,a){I 7.2g({1Z:"1N"},b,a)},9F:H(b,a){I 7.2g({1Z:"1M"},b,a)},9E:H(b,a){I 7.2g({1Z:"2m"},b,a)},9D:H(b,a){I 7.2g({1y:"1N"},b,a)},9M:H(b,a){I 7.2g({1y:"1M"},b,a)},9C:H(c,a,b){I 7.2g({1y:a},c,b)},2g:H(k,j,i,g){J h=D.77(j,i,g);I 7[h.36===Q?"P":"36"](H(){G(7.16!=1)I Q;J f=D.1l({},h),p,1G=D(7).3F(":1G"),46=7;R(p 1n k){G(k[p]=="1M"&&1G||k[p]=="1N"&&!1G)I f.1J.1k(7);G(p=="1Z"||p=="2h"){f.18=D.1g(7,"18");f.33=7.V.33}}G(f.33!=U)7.V.33="1G";f.45=D.1l({},k);D.P(k,H(c,a){J e=2B D.28(46,f,c);G(/2m|1N|1M/.11(a))e[a=="2m"?1G?"1N":"1M":a](k);N{J b=a.6r().1I(/^([+-]=)?([\\d+-.]+)(.*)$/),2b=e.1t(M)||0;G(b){J d=3d(b[2]),2M=b[3]||"2X";G(2M!="2X"){46.V[c]=(d||1)+2M;2b=((d||1)/e.1t(M))*2b;46.V[c]=2b+2M}G(b[1])d=((b[1]=="-="?-1:1)*d)+2b;e.3G(2b,d,2M)}N e.3G(2b,a,"")}});I M})},36:H(a,b){G(D.1D(a)||(a&&a.1q==2p)){b=a;a="28"}G(!a||(1j a=="23"&&!b))I A(7[0],a);I 7.P(H(){G(b.1q==2p)A(7,a,b);N{A(7,a).1p(b);G(A(7,a).K==1)b.1k(7)}})},9X:H(b,c){J a=D.3O;G(b)7.36([]);7.P(H(){R(J i=a.K-1;i>=0;i--)G(a[i].T==7){G(c)a[i](M);a.7n(i,1)}});G(!c)7.5A();I 7}});J A=H(b,c,a){G(b){c=c||"28";J q=D.L(b,c+"36");G(!q||a)q=D.L(b,c+"36",D.2d(a))}I q};D.17.5A=H(a){a=a||"28";I 7.P(H(){J q=A(7,a);q.4s();G(q.K)q[0].1k(7)})};D.1l({77:H(b,a,c){J d=b&&b.1q==a0?b:{1J:c||!c&&a||D.1D(b)&&b,2u:b,41:c&&a||a&&a.1q!=9t&&a};d.2u=(d.2u&&d.2u.1q==4L?d.2u:D.28.5K[d.2u])||D.28.5K.74;d.5M=d.1J;d.1J=H(){G(d.36!==Q)D(7).5A();G(D.1D(d.5M))d.5M.1k(7)};I d},41:{73:H(p,n,b,a){I b+a*p},5P:H(p,n,b,a){I((-29.9r(p*29.9q)/2)+0.5)*a+b}},3O:[],48:U,28:H(b,c,a){7.15=c;7.T=b;7.1i=a;G(!c.3Z)c.3Z={}}});D.28.44={4D:H(){G(7.15.2Y)7.15.2Y.1k(7.T,7.1z,7);(D.28.2Y[7.1i]||D.28.2Y.4w)(7);G(7.1i=="1Z"||7.1i=="2h")7.T.V.18="3I"},1t:H(a){G(7.T[7.1i]!=U&&7.T.V[7.1i]==U)I 7.T[7.1i];J r=3d(D.1g(7.T,7.1i,a));I r&&r>-9p?r:3d(D.2a(7.T,7.1i))||0},3G:H(c,b,d){7.5V=1z();7.2b=c;7.3l=b;7.2M=d||7.2M||"2X";7.1z=7.2b;7.2S=7.4N=0;7.4D();J e=7;H t(a){I e.2Y(a)}t.T=7.T;D.3O.1p(t);G(D.48==U){D.48=4I(H(){J a=D.3O;R(J i=0;i<a.K;i++)G(!a[i]())a.7n(i--,1);G(!a.K){7k(D.48);D.48=U}},13)}},1N:H(){7.15.3Z[7.1i]=D.1K(7.T.V,7.1i);7.15.1N=M;7.3G(0,7.1t());G(7.1i=="2h"||7.1i=="1Z")7.T.V[7.1i]="9m";D(7.T).1N()},1M:H(){7.15.3Z[7.1i]=D.1K(7.T.V,7.1i);7.15.1M=M;7.3G(7.1t(),0)},2Y:H(a){J t=1z();G(a||t>7.15.2u+7.5V){7.1z=7.3l;7.2S=7.4N=1;7.4D();7.15.45[7.1i]=M;J b=M;R(J i 1n 7.15.45)G(7.15.45[i]!==M)b=Q;G(b){G(7.15.18!=U){7.T.V.33=7.15.33;7.T.V.18=7.15.18;G(D.1g(7.T,"18")=="2F")7.T.V.18="3I"}G(7.15.1M)7.T.V.18="2F";G(7.15.1M||7.15.1N)R(J p 1n 7.15.45)D.1K(7.T.V,p,7.15.3Z[p])}G(b)7.15.1J.1k(7.T);I Q}N{J n=t-7.5V;7.4N=n/7.15.2u;7.2S=D.41[7.15.41||(D.41.5P?"5P":"73")](7.4N,n,0,1,7.15.2u);7.1z=7.2b+((7.3l-7.2b)*7.2S);7.4D()}I M}};D.1l(D.28,{5K:{9l:9j,9i:7e,74:9g},2Y:{2e:H(a){a.T.2e=a.1z},2c:H(a){a.T.2c=a.1z},1y:H(a){D.1K(a.T.V,"1y",a.1z)},4w:H(a){a.T.V[a.1i]=a.1z+a.2M}}});D.17.2i=H(){J b=0,1S=0,T=7[0],3q;G(T)ao(D.14){J d=T.1d,4a=T,1s=T.1s,1Q=T.2z,5U=2k&&3r(5B)<9c&&!/9a/i.11(v),1g=D.2a,3c=1g(T,"30")=="3c";G(T.7y){J c=T.7y();1e(c.1A+29.2f(1Q.1C.2e,1Q.1c.2e),c.1S+29.2f(1Q.1C.2c,1Q.1c.2c));1e(-1Q.1C.6b,-1Q.1C.6a)}N{1e(T.5X,T.5W);1B(1s){1e(1s.5X,1s.5W);G(42&&!/^t(98|d|h)$/i.11(1s.2j)||2k&&!5U)2C(1s);G(!3c&&1g(1s,"30")=="3c")3c=M;4a=/^1c$/i.11(1s.2j)?4a:1s;1s=1s.1s}1B(d&&d.2j&&!/^1c|2K$/i.11(d.2j)){G(!/^96|1T.*$/i.11(1g(d,"18")))1e(-d.2e,-d.2c);G(42&&1g(d,"33")!="4j")2C(d);d=d.1d}G((5U&&(3c||1g(4a,"30")=="5x"))||(42&&1g(4a,"30")!="5x"))1e(-1Q.1c.5X,-1Q.1c.5W);G(3c)1e(29.2f(1Q.1C.2e,1Q.1c.2e),29.2f(1Q.1C.2c,1Q.1c.2c))}3q={1S:1S,1A:b}}H 2C(a){1e(D.2a(a,"6V",M),D.2a(a,"6U",M))}H 1e(l,t){b+=3r(l,10)||0;1S+=3r(t,10)||0}I 3q};D.17.1l({30:H(){J a=0,1S=0,3q;G(7[0]){J b=7.1s(),2i=7.2i(),4c=/^1c|2K$/i.11(b[0].2j)?{1S:0,1A:0}:b.2i();2i.1S-=25(7,\'94\');2i.1A-=25(7,\'aF\');4c.1S+=25(b,\'6U\');4c.1A+=25(b,\'6V\');3q={1S:2i.1S-4c.1S,1A:2i.1A-4c.1A}}I 3q},1s:H(){J a=7[0].1s;1B(a&&(!/^1c|2K$/i.11(a.2j)&&D.1g(a,\'30\')==\'93\'))a=a.1s;I D(a)}});D.P([\'5e\',\'5G\'],H(i,b){J c=\'4y\'+b;D.17[c]=H(a){G(!7[0])I;I a!=12?7.P(H(){7==1b||7==S?1b.92(!i?a:D(1b).2e(),i?a:D(1b).2c()):7[c]=a}):7[0]==1b||7[0]==S?46[i?\'aI\':\'aJ\']||D.71&&S.1C[c]||S.1c[c]:7[0][c]}});D.P(["6N","4b"],H(i,b){J c=i?"5e":"5G",4f=i?"6k":"6i";D.17["5s"+b]=H(){I 7[b.3y()]()+25(7,"57"+c)+25(7,"57"+4f)};D.17["90"+b]=H(a){I 7["5s"+b]()+25(7,"2C"+c+"4b")+25(7,"2C"+4f+"4b")+(a?25(7,"6S"+c)+25(7,"6S"+4f):0)}})})();',62,669,'|||||||this|||||||||||||||||||||||||||||||||||if|function|return|var|length|data|true|else|type|each|false|for|document|elem|null|style|event||nodeName|||test|undefined||browser|options|nodeType|fn|display|arguments|url|window|body|parentNode|add|msie|css|indexOf|prop|typeof|call|extend|script|in|replace|push|constructor|text|offsetParent|cur|status|div|apply|firstChild|opacity|now|left|while|documentElement|isFunction|filter|className|hidden|handle|match|complete|attr|ret|hide|show|dataType|trigger|doc|split|top|table|try|catch|success|break|cache|height||remove|tbody|string|guid|num|global|ready|fx|Math|curCSS|start|scrollTop|makeArray|scrollLeft|max|animate|width|offset|tagName|safari|map|toggle||done|Array|find|toUpperCase|button|special|duration|id|copy|value|handler|ownerDocument|select|new|border|exec|stack|none|opera|nextSibling|pushStack|target|html|inArray|unit|xml|bind|GET|isReady|merge|pos|timeout|delete|one|selected|px|step|jsre|position|async|preventDefault|overflow|name|which|queue|removeChild|namespace|insertBefore|nth|removeData|fixed|parseFloat|error|readyState|multiFilter|createElement|rl|re|trim|end|_|param|first|get|results|parseInt|slice|childNodes|encodeURIComponent|append|events|elems|toLowerCase|json|readyList|setTimeout|grep|mouseenter|color|is|custom|getElementsByTagName|block|stopPropagation|addEventListener|callee|proxy|mouseleave|timers|defaultView|password|disabled|last|has|appendChild|form|domManip|props|ajax|orig|set|easing|mozilla|load|prototype|curAnim|self|charCode|timerId|object|offsetChild|Width|parentOffset|src|unbind|br|currentStyle|clean|float|visible|relatedTarget|previousSibling|handlers|isXMLDoc|on|setup|nodeIndex|unique|shift|javascript|child|RegExp|_default|deep|scroll|lastModified|teardown|setRequestHeader|timeStamp|update|empty|tr|getAttribute|innerHTML|setInterval|checked|fromElement|Number|jQuery|state|active|jsonp|accepts|application|dir|input|responseText|click|styleSheets|unload|not|lastToggle|outline|mouseout|getPropertyValue|mouseover|getComputedStyle|bindReady|String|padding|pageX|metaKey|keyCode|getWH|andSelf|clientX|Left|all|visibility|container|index|init|triggered|removeAttribute|classFilter|prevObject|submit|file|after|windowData|inner|client|globalEval|sibling|jquery|absolute|clone|wrapAll|dequeue|version|triggerHandler|oldblock|ctrlKey|createTextNode|Top|handleError|getResponseHeader|parsererror|speeds|checkbox|old|00|radio|swing|href|Modified|ifModified|lastChild|safari2|startTime|offsetTop|offsetLeft|username|location|ajaxSettings|getElementById|isSimple|values|selectedIndex|runtimeStyle|rsLeft|_load|loaded|DOMContentLoaded|clientTop|clientLeft|toElement|srcElement|val|pageY|POST|unshift|Bottom|clientY|Right|fix|exclusive|detachEvent|cloneNode|removeEventListener|swap|toString|join|attachEvent|eval|substr|head|parse|textarea|reset|image|zoom|odd|even|before|prepend|exclude|expr|quickClass|quickID|uuid|quickChild|continue|Height|textContent|appendTo|contents|open|margin|evalScript|borderTopWidth|borderLeftWidth|parent|httpData|setArray|CSS1Compat|compatMode|boxModel|cssFloat|linear|def|webkit|nodeValue|speed|_toggle|eq|100|replaceWith|304|concat|200|alpha|Last|httpNotModified|getAttributeNode|httpSuccess|clearInterval|abort|beforeSend|splice|styleFloat|throw|colgroup|XMLHttpRequest|ActiveXObject|scriptCharset|callback|fieldset|multiple|processData|getBoundingClientRect|contentType|link|ajaxSend|ajaxSuccess|ajaxError|col|ajaxComplete|ajaxStop|ajaxStart|serializeArray|notmodified|keypress|keydown|change|mouseup|mousedown|dblclick|focus|blur|stylesheet|hasClass|rel|doScroll|black|hover|solid|cancelBubble|returnValue|wheelDelta|view|round|shiftKey|resize|screenY|screenX|relatedNode|mousemove|prevValue|originalTarget|offsetHeight|keyup|newValue|offsetWidth|eventPhase|detail|currentTarget|cancelable|bubbles|attrName|attrChange|altKey|originalEvent|charAt|0n|substring|animated|header|noConflict|line|enabled|innerText|contains|only|weight|font|gt|lt|uFFFF|u0128|size|417|Boolean|Date|toggleClass|removeClass|addClass|removeAttr|replaceAll|insertAfter|prependTo|wrap|contentWindow|contentDocument|iframe|children|siblings|prevAll|wrapInner|nextAll|outer|prev|scrollTo|static|marginTop|next|inline|parents|able|cellSpacing|adobeair|cellspacing|522|maxLength|maxlength|readOnly|400|readonly|fast|600|class|slow|1px|htmlFor|reverse|10000|PI|cos|compatible|Function|setData|ie|ra|it|rv|getData|userAgent|navigator|fadeTo|fadeIn|slideToggle|slideUp|slideDown|ig|responseXML|content|1223|NaN|fadeOut|300|protocol|send|setAttribute|option|dataFilter|cssText|changed|be|Accept|stop|With|Requested|Object|can|GMT|property|1970|Jan|01|Thu|Since|If|Type|Content|XMLHTTP|th|Microsoft|td|onreadystatechange|onload|cap|charset|colg|host|tfoot|specified|with|1_|thead|leg|plain|attributes|opt|embed|urlencoded|www|area|hr|ajaxSetup|meta|post|getJSON|getScript|marginLeft|img|elements|pageYOffset|pageXOffset|abbr|serialize|pixelLeft'.split('|'),0,{}));// $Id: drupal.js,v 1.41.2.3 2008/06/25 09:06:57 goba Exp $

var Drupal = Drupal || { 'settings': {}, 'behaviors': {}, 'themes': {}, 'locale': {} };

/**
 * Set the variable that indicates if JavaScript behaviors should be applied
 */
Drupal.jsEnabled = document.getElementsByTagName && document.createElement && document.createTextNode && document.documentElement && document.getElementById;

/**
 * Attach all registered behaviors to a page element.
 *
 * Behaviors are event-triggered actions that attach to page elements, enhancing
 * default non-Javascript UIs. Behaviors are registered in the Drupal.behaviors
 * object as follows:
 * @code
 *    Drupal.behaviors.behaviorName = function () {
 *      ...
 *    };
 * @endcode
 *
 * Drupal.attachBehaviors is added below to the jQuery ready event and so
 * runs on initial page load. Developers implementing AHAH/AJAX in their
 * solutions should also call this function after new page content has been
 * loaded, feeding in an element to be processed, in order to attach all
 * behaviors to the new content.
 *
 * Behaviors should use a class in the form behaviorName-processed to ensure
 * the behavior is attached only once to a given element. (Doing so enables
 * the reprocessing of given elements, which may be needed on occasion despite
 * the ability to limit behavior attachment to a particular element.)
 *
 * @param context
 *   An element to attach behaviors to. If none is given, the document element
 *   is used.
 */
Drupal.attachBehaviors = function(context) {
  context = context || document;
  if (Drupal.jsEnabled) {
    // Execute all of them.
    jQuery.each(Drupal.behaviors, function() {
      this(context);
    });
  }
};

/**
 * Encode special characters in a plain-text string for display as HTML.
 */
Drupal.checkPlain = function(str) {
  str = String(str);
  var replace = { '&': '&amp;', '"': '&quot;', '<': '&lt;', '>': '&gt;' };
  for (var character in replace) {
    var regex = new RegExp(character, 'g');
    str = str.replace(regex, replace[character]);
  }
  return str;
};

/**
 * Translate strings to the page language or a given language.
 *
 * See the documentation of the server-side t() function for further details.
 *
 * @param str
 *   A string containing the English string to translate.
 * @param args
 *   An object of replacements pairs to make after translation. Incidences
 *   of any key in this array are replaced with the corresponding value.
 *   Based on the first character of the key, the value is escaped and/or themed:
 *    - !variable: inserted as is
 *    - @variable: escape plain text to HTML (Drupal.checkPlain)
 *    - %variable: escape text and theme as a placeholder for user-submitted
 *      content (checkPlain + Drupal.theme('placeholder'))
 * @return
 *   The translated string.
 */
Drupal.t = function(str, args) {
  // Fetch the localized version of the string.
  if (Drupal.locale.strings && Drupal.locale.strings[str]) {
    str = Drupal.locale.strings[str];
  }

  if (args) {
    // Transform arguments before inserting them
    for (var key in args) {
      switch (key.charAt(0)) {
        // Escaped only
        case '@':
          args[key] = Drupal.checkPlain(args[key]);
        break;
        // Pass-through
        case '!':
          break;
        // Escaped and placeholder
        case '%':
        default:
          args[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
      str = str.replace(key, args[key]);
    }
  }
  return str;
};

/**
 * Format a string containing a count of items.
 *
 * This function ensures that the string is pluralized correctly. Since Drupal.t() is
 * called by this function, make sure not to pass already-localized strings to it.
 *
 * See the documentation of the server-side format_plural() function for further details.
 *
 * @param count
 *   The item count to display.
 * @param singular
 *   The string for the singular case. Please make sure it is clear this is
 *   singular, to ease translation (e.g. use "1 new comment" instead of "1 new").
 *   Do not use @count in the singular string.
 * @param plural
 *   The string for the plural case. Please make sure it is clear this is plural,
 *   to ease translation. Use @count in place of the item count, as in "@count
 *   new comments".
 * @param args
 *   An object of replacements pairs to make after translation. Incidences
 *   of any key in this array are replaced with the corresponding value.
 *   Based on the first character of the key, the value is escaped and/or themed:
 *    - !variable: inserted as is
 *    - @variable: escape plain text to HTML (Drupal.checkPlain)
 *    - %variable: escape text and theme as a placeholder for user-submitted
 *      content (checkPlain + Drupal.theme('placeholder'))
 *   Note that you do not need to include @count in this array.
 *   This replacement is done automatically for the plural case.
 * @return
 *   A translated string.
 */
Drupal.formatPlural = function(count, singular, plural, args) {
  var args = args || {};
  args['@count'] = count;
  // Determine the index of the plural form.
  var index = Drupal.locale.pluralFormula ? Drupal.locale.pluralFormula(args['@count']) : ((args['@count'] == 1) ? 0 : 1);

  if (index == 0) {
    return Drupal.t(singular, args);
  }
  else if (index == 1) {
    return Drupal.t(plural, args);
  }
  else {
    args['@count['+ index +']'] = args['@count'];
    delete args['@count'];
    return Drupal.t(plural.replace('@count', '@count['+ index +']'));
  }
};

/**
 * Generate the themed representation of a Drupal object.
 *
 * All requests for themed output must go through this function. It examines
 * the request and routes it to the appropriate theme function. If the current
 * theme does not provide an override function, the generic theme function is
 * called.
 *
 * For example, to retrieve the HTML that is output by theme_placeholder(text),
 * call Drupal.theme('placeholder', text).
 *
 * @param func
 *   The name of the theme function to call.
 * @param ...
 *   Additional arguments to pass along to the theme function.
 * @return
 *   Any data the theme function returns. This could be a plain HTML string,
 *   but also a complex object.
 */
Drupal.theme = function(func) {
  for (var i = 1, args = []; i < arguments.length; i++) {
    args.push(arguments[i]);
  }

  return (Drupal.theme[func] || Drupal.theme.prototype[func]).apply(this, args);
};

/**
 * Parse a JSON response.
 *
 * The result is either the JSON object, or an object with 'status' 0 and 'data' an error message.
 */
Drupal.parseJson = function (data) {
  if ((data.substring(0, 1) != '{') && (data.substring(0, 1) != '[')) {
    return { status: 0, data: data.length ? data : Drupal.t('Unspecified error') };
  }
  return eval('(' + data + ');');
};

/**
 * Freeze the current body height (as minimum height). Used to prevent
 * unnecessary upwards scrolling when doing DOM manipulations.
 */
Drupal.freezeHeight = function () {
  Drupal.unfreezeHeight();
  var div = document.createElement('div');
  $(div).css({
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '1px',
    height: $('body').css('height')
  }).attr('id', 'freeze-height');
  $('body').append(div);
};

/**
 * Unfreeze the body height
 */
Drupal.unfreezeHeight = function () {
  $('#freeze-height').remove();
};

/**
 * Wrapper to address the mod_rewrite url encoding bug
 * (equivalent of drupal_urlencode() in PHP).
 */
Drupal.encodeURIComponent = function (item, uri) {
  uri = uri || location.href;
  item = encodeURIComponent(item).replace(/%2F/g, '/');
  return (uri.indexOf('?q=') != -1) ? item : item.replace(/%26/g, '%2526').replace(/%23/g, '%2523').replace(/\/\//g, '/%252F');
};

/**
 * Get the text selection in a textarea.
 */
Drupal.getSelection = function (element) {
  if (typeof(element.selectionStart) != 'number' && document.selection) {
    // The current selection
    var range1 = document.selection.createRange();
    var range2 = range1.duplicate();
    // Select all text.
    range2.moveToElementText(element);
    // Now move 'dummy' end point to end point of original range.
    range2.setEndPoint('EndToEnd', range1);
    // Now we can calculate start and end points.
    var start = range2.text.length - range1.text.length;
    var end = start + range1.text.length;
    return { 'start': start, 'end': end };
  }
  return { 'start': element.selectionStart, 'end': element.selectionEnd };
};

/**
 * Build an error message from ahah response.
 */
Drupal.ahahError = function(xmlhttp, uri) {
  if (xmlhttp.status == 200) {
    if (jQuery.trim($(xmlhttp.responseText).text())) {
      var message = Drupal.t("An error occurred. \n@uri\n@text", {'@uri': uri, '@text': xmlhttp.responseText });
    }
    else {
      var message = Drupal.t("An error occurred. \n@uri\n(no information available).", {'@uri': uri, '@text': xmlhttp.responseText });
    }
  }
  else {
    var message = Drupal.t("An HTTP error @status occurred. \n@uri", {'@uri': uri, '@status': xmlhttp.status });
  }
  return message;
}

// Global Killswitch on the <html> element
if (Drupal.jsEnabled) {
  // Global Killswitch on the <html> element
  $(document.documentElement).addClass('js');
  // 'js enabled' cookie
  document.cookie = 'has_js=1; path=/';
  // Attach all behaviors.
  $(document).ready(function() {
    Drupal.attachBehaviors(this);
  });
}

/**
 * The default themes.
 */
Drupal.theme.prototype = {

  /**
   * Formats text for emphasized display in a placeholder inside a sentence.
   *
   * @param str
   *   The text to format (plain-text).
   * @return
   *   The formatted text (html).
   */
  placeholder: function(str) {
    return '<em>' + Drupal.checkPlain(str) + '</em>';
  }
};
;// $Id: tabledrag.js,v 1.13.2.5 2009/06/18 12:24:24 goba Exp $

/**
 * Drag and drop table rows with field manipulation.
 *
 * Using the drupal_add_tabledrag() function, any table with weights or parent
 * relationships may be made into draggable tables. Columns containing a field
 * may optionally be hidden, providing a better user experience.
 *
 * Created tableDrag instances may be modified with custom behaviors by
 * overriding the .onDrag, .onDrop, .row.onSwap, and .row.onIndent methods.
 * See blocks.js for an example of adding additional functionality to tableDrag.
 */
Drupal.behaviors.tableDrag = function(context) {
  for (var base in Drupal.settings.tableDrag) {
    if (!$('#' + base + '.tabledrag-processed', context).size()) {
      var tableSettings = Drupal.settings.tableDrag[base];

      $('#' + base).filter(':not(.tabledrag-processed)').each(function() {
        // Create the new tableDrag instance. Save in the Drupal variable
        // to allow other scripts access to the object.
        Drupal.tableDrag[base] = new Drupal.tableDrag(this, tableSettings);
      });

      $('#' + base).addClass('tabledrag-processed');
    }
  }
};

/**
 * Constructor for the tableDrag object. Provides table and field manipulation.
 *
 * @param table
 *   DOM object for the table to be made draggable.
 * @param tableSettings
 *   Settings for the table added via drupal_add_dragtable().
 */
Drupal.tableDrag = function(table, tableSettings) {
  var self = this;

  // Required object variables.
  this.table = table;
  this.tableSettings = tableSettings;
  this.dragObject = null; // Used to hold information about a current drag operation.
  this.rowObject = null; // Provides operations for row manipulation.
  this.oldRowElement = null; // Remember the previous element.
  this.oldY = 0; // Used to determine up or down direction from last mouse move.
  this.changed = false; // Whether anything in the entire table has changed.
  this.maxDepth = 0; // Maximum amount of allowed parenting.
  this.rtl = $(this.table).css('direction') == 'rtl' ? -1 : 1; // Direction of the table.

  // Configure the scroll settings.
  this.scrollSettings = { amount: 4, interval: 50, trigger: 70 };
  this.scrollInterval = null;
  this.scrollY = 0;
  this.windowHeight = 0;

  // Check this table's settings to see if there are parent relationships in
  // this table. For efficiency, large sections of code can be skipped if we
  // don't need to track horizontal movement and indentations.
  this.indentEnabled = false;
  for (group in tableSettings) {
    for (n in tableSettings[group]) {
      if (tableSettings[group][n]['relationship'] == 'parent') {
        this.indentEnabled = true;
      }
      if (tableSettings[group][n]['limit'] > 0) {
        this.maxDepth = tableSettings[group][n]['limit'];
      }
    }
  }
  if (this.indentEnabled) {
    this.indentCount = 1; // Total width of indents, set in makeDraggable.
    // Find the width of indentations to measure mouse movements against.
    // Because the table doesn't need to start with any indentations, we
    // manually append 2 indentations in the first draggable row, measure
    // the offset, then remove.
    var indent = Drupal.theme('tableDragIndentation');
    // Match immediate children of the parent element to allow nesting.
    var testCell = $('> tbody > tr.draggable:first td:first, > tr.draggable:first td:first', table).prepend(indent).prepend(indent);
    this.indentAmount = $('.indentation', testCell).get(1).offsetLeft - $('.indentation', testCell).get(0).offsetLeft;
    $('.indentation', testCell).slice(0, 2).remove();
  }

  // Make each applicable row draggable.
  // Match immediate children of the parent element to allow nesting.
  $('> tr.draggable, > tbody > tr.draggable', table).each(function() { self.makeDraggable(this); });

  // Hide columns containing affected form elements.
  this.hideColumns();

  // Add mouse bindings to the document. The self variable is passed along
  // as event handlers do not have direct access to the tableDrag object.
  $(document).bind('mousemove', function(event) { return self.dragRow(event, self); });
  $(document).bind('mouseup', function(event) { return self.dropRow(event, self); });
};

/**
 * Hide the columns containing form elements according to the settings for
 * this tableDrag instance.
 */
Drupal.tableDrag.prototype.hideColumns = function(){
  for (var group in this.tableSettings) {
    // Find the first field in this group.
    for (var d in this.tableSettings[group]) {
      var field = $('.' + this.tableSettings[group][d]['target'] + ':first', this.table);
      if (field.size() && this.tableSettings[group][d]['hidden']) {
        var hidden = this.tableSettings[group][d]['hidden'];
        var cell = field.parents('td:first');
        break;
      }
    }

    // Hide the column containing this field.
    if (hidden && cell[0] && cell.css('display') != 'none') {
      // Add 1 to our indexes. The nth-child selector is 1 based, not 0 based.
      // Match immediate children of the parent element to allow nesting.
      var columnIndex = $('> td', cell.parent()).index(cell.get(0)) + 1;
      var headerIndex = $('> td:not(:hidden)', cell.parent()).index(cell.get(0)) + 1;
      $('> thead > tr, > tbody > tr, > tr', this.table).each(function(){
        var row = $(this);
        var parentTag = row.parent().get(0).tagName.toLowerCase();
        var index = (parentTag == 'thead') ? headerIndex : columnIndex;

        // Adjust the index to take into account colspans.
        row.children().each(function(n) {
          if (n < index) {
            index -= (this.colSpan && this.colSpan > 1) ? this.colSpan - 1 : 0;
          }
        });
        if (index > 0) {
          cell = row.children(':nth-child(' + index + ')');
          if (cell[0].colSpan > 1) {
            // If this cell has a colspan, simply reduce it.
            cell[0].colSpan = cell[0].colSpan - 1;
          }
          else {
            // Hide table body cells, but remove table header cells entirely
            // (Safari doesn't hide properly).
            parentTag == 'thead' ? cell.remove() : cell.css('display', 'none');
          }
        }
      });
    }
  }
};

/**
 * Find the target used within a particular row and group.
 */
Drupal.tableDrag.prototype.rowSettings = function(group, row) {
  var field = $('.' + group, row);
  for (delta in this.tableSettings[group]) {
    var targetClass = this.tableSettings[group][delta]['target'];
    if (field.is('.' + targetClass)) {
      // Return a copy of the row settings.
      var rowSettings = new Object();
      for (var n in this.tableSettings[group][delta]) {
        rowSettings[n] = this.tableSettings[group][delta][n];
      }
      return rowSettings;
    }
  }
};

/**
 * Take an item and add event handlers to make it become draggable.
 */
Drupal.tableDrag.prototype.makeDraggable = function(item) {
  var self = this;

  // Create the handle.
  var handle = $('<a href="#" class="tabledrag-handle"><div class="handle">&nbsp;</div></a>').attr('title', Drupal.t('Drag to re-order'));
  // Insert the handle after indentations (if any).
  if ($('td:first .indentation:last', item).after(handle).size()) {
    // Update the total width of indentation in this entire table.
    self.indentCount = Math.max($('.indentation', item).size(), self.indentCount);
  }
  else {
    $('td:first', item).prepend(handle);
  }

  // Add hover action for the handle.
  handle.hover(function() {
    self.dragObject == null ? $(this).addClass('tabledrag-handle-hover') : null;
  }, function() {
    self.dragObject == null ? $(this).removeClass('tabledrag-handle-hover') : null;
  });

  // Add the mousedown action for the handle.
  handle.mousedown(function(event) {
    // Create a new dragObject recording the event information.
    self.dragObject = new Object();
    self.dragObject.initMouseOffset = self.getMouseOffset(item, event);
    self.dragObject.initMouseCoords = self.mouseCoords(event);
    if (self.indentEnabled) {
      self.dragObject.indentMousePos = self.dragObject.initMouseCoords;
    }

    // If there's a lingering row object from the keyboard, remove its focus.
    if (self.rowObject) {
      $('a.tabledrag-handle', self.rowObject.element).blur();
    }

    // Create a new rowObject for manipulation of this row.
    self.rowObject = new self.row(item, 'mouse', self.indentEnabled, self.maxDepth, true);

    // Save the position of the table.
    self.table.topY = self.getPosition(self.table).y;
    self.table.bottomY = self.table.topY + self.table.offsetHeight;

    // Add classes to the handle and row.
    $(this).addClass('tabledrag-handle-hover');
    $(item).addClass('drag');

    // Set the document to use the move cursor during drag.
    $('body').addClass('drag');
    if (self.oldRowElement) {
      $(self.oldRowElement).removeClass('drag-previous');
    }

    // Hack for IE6 that flickers uncontrollably if select lists are moved.
    if (navigator.userAgent.indexOf('MSIE 6.') != -1) {
      $('select', this.table).css('display', 'none');
    }

    // Hack for Konqueror, prevent the blur handler from firing.
    // Konqueror always gives links focus, even after returning false on mousedown.
    self.safeBlur = false;

    // Call optional placeholder function.
    self.onDrag();
    return false;
  });

  // Prevent the anchor tag from jumping us to the top of the page.
  handle.click(function() {
    return false;
  });

  // Similar to the hover event, add a class when the handle is focused.
  handle.focus(function() {
    $(this).addClass('tabledrag-handle-hover');
    self.safeBlur = true;
  });

  // Remove the handle class on blur and fire the same function as a mouseup.
  handle.blur(function(event) {
    $(this).removeClass('tabledrag-handle-hover');
    if (self.rowObject && self.safeBlur) {
      self.dropRow(event, self);
    }
  });

  // Add arrow-key support to the handle.
  handle.keydown(function(event) {
    // If a rowObject doesn't yet exist and this isn't the tab key.
    if (event.keyCode != 9 && !self.rowObject) {
      self.rowObject = new self.row(item, 'keyboard', self.indentEnabled, self.maxDepth, true);
    }

    var keyChange = false;
    switch (event.keyCode) {
      case 37: // Left arrow.
      case 63234: // Safari left arrow.
        keyChange = true;
        self.rowObject.indent(-1 * self.rtl);
        break;
      case 38: // Up arrow.
      case 63232: // Safari up arrow.
        var previousRow = $(self.rowObject.element).prev('tr').get(0);
        while (previousRow && $(previousRow).is(':hidden')) {
          previousRow = $(previousRow).prev('tr').get(0);
        }
        if (previousRow) {
          self.safeBlur = false; // Do not allow the onBlur cleanup.
          self.rowObject.direction = 'up';
          keyChange = true;

          if ($(item).is('.tabledrag-root')) {
            // Swap with the previous top-level row..
            var groupHeight = 0;
            while (previousRow && $('.indentation', previousRow).size()) {
              previousRow = $(previousRow).prev('tr').get(0);
              groupHeight += $(previousRow).is(':hidden') ? 0 : previousRow.offsetHeight;
            }
            if (previousRow) {
              self.rowObject.swap('before', previousRow);
              // No need to check for indentation, 0 is the only valid one.
              window.scrollBy(0, -groupHeight);
            }
          }
          else if (self.table.tBodies[0].rows[0] != previousRow || $(previousRow).is('.draggable')) {
            // Swap with the previous row (unless previous row is the first one
            // and undraggable).
            self.rowObject.swap('before', previousRow);
            self.rowObject.interval = null;
            self.rowObject.indent(0);
            window.scrollBy(0, -parseInt(item.offsetHeight));
          }
          handle.get(0).focus(); // Regain focus after the DOM manipulation.
        }
        break;
      case 39: // Right arrow.
      case 63235: // Safari right arrow.
        keyChange = true;
        self.rowObject.indent(1 * self.rtl);
        break;
      case 40: // Down arrow.
      case 63233: // Safari down arrow.
        var nextRow = $(self.rowObject.group).filter(':last').next('tr').get(0);
        while (nextRow && $(nextRow).is(':hidden')) {
          nextRow = $(nextRow).next('tr').get(0);
        }
        if (nextRow) {
          self.safeBlur = false; // Do not allow the onBlur cleanup.
          self.rowObject.direction = 'down';
          keyChange = true;

          if ($(item).is('.tabledrag-root')) {
            // Swap with the next group (necessarily a top-level one).
            var groupHeight = 0;
            nextGroup = new self.row(nextRow, 'keyboard', self.indentEnabled, self.maxDepth, false);
            if (nextGroup) {
              $(nextGroup.group).each(function () {groupHeight += $(this).is(':hidden') ? 0 : this.offsetHeight});
              nextGroupRow = $(nextGroup.group).filter(':last').get(0);
              self.rowObject.swap('after', nextGroupRow);
              // No need to check for indentation, 0 is the only valid one.
              window.scrollBy(0, parseInt(groupHeight));
            }
          }
          else {
            // Swap with the next row.
            self.rowObject.swap('after', nextRow);
            self.rowObject.interval = null;
            self.rowObject.indent(0);
            window.scrollBy(0, parseInt(item.offsetHeight));
          }
          handle.get(0).focus(); // Regain focus after the DOM manipulation.
        }
        break;
    }

    if (self.rowObject && self.rowObject.changed == true) {
      $(item).addClass('drag');
      if (self.oldRowElement) {
        $(self.oldRowElement).removeClass('drag-previous');
      }
      self.oldRowElement = item;
      self.restripeTable();
      self.onDrag();
    }

    // Returning false if we have an arrow key to prevent scrolling.
    if (keyChange) {
      return false;
    }
  });

  // Compatibility addition, return false on keypress to prevent unwanted scrolling.
  // IE and Safari will supress scrolling on keydown, but all other browsers
  // need to return false on keypress. http://www.quirksmode.org/js/keys.html
  handle.keypress(function(event) {
    switch (event.keyCode) {
      case 37: // Left arrow.
      case 38: // Up arrow.
      case 39: // Right arrow.
      case 40: // Down arrow.
        return false;
    }
  });
};

/**
 * Mousemove event handler, bound to document.
 */
Drupal.tableDrag.prototype.dragRow = function(event, self) {
  if (self.dragObject) {
    self.currentMouseCoords = self.mouseCoords(event);

    var y = self.currentMouseCoords.y - self.dragObject.initMouseOffset.y;
    var x = self.currentMouseCoords.x - self.dragObject.initMouseOffset.x;

    // Check for row swapping and vertical scrolling.
    if (y != self.oldY) {
      self.rowObject.direction = y > self.oldY ? 'down' : 'up';
      self.oldY = y; // Update the old value.

      // Check if the window should be scrolled (and how fast).
      var scrollAmount = self.checkScroll(self.currentMouseCoords.y);
      // Stop any current scrolling.
      clearInterval(self.scrollInterval);
      // Continue scrolling if the mouse has moved in the scroll direction.
      if (scrollAmount > 0 && self.rowObject.direction == 'down' || scrollAmount < 0 && self.rowObject.direction == 'up') {
        self.setScroll(scrollAmount);
      }

      // If we have a valid target, perform the swap and restripe the table.
      var currentRow = self.findDropTargetRow(x, y);
      if (currentRow) {
        if (self.rowObject.direction == 'down') {
          self.rowObject.swap('after', currentRow, self);
        }
        else {
          self.rowObject.swap('before', currentRow, self);
        }
        self.restripeTable();
      }
    }

    // Similar to row swapping, handle indentations.
    if (self.indentEnabled) {
      var xDiff = self.currentMouseCoords.x - self.dragObject.indentMousePos.x;
      // Set the number of indentations the mouse has been moved left or right.
      var indentDiff = Math.round(xDiff / self.indentAmount * self.rtl);
      // Indent the row with our estimated diff, which may be further
      // restricted according to the rows around this row.
      var indentChange = self.rowObject.indent(indentDiff);
      // Update table and mouse indentations.
      self.dragObject.indentMousePos.x += self.indentAmount * indentChange * self.rtl;
      self.indentCount = Math.max(self.indentCount, self.rowObject.indents);
    }

    return false;
  }
};

/**
 * Mouseup event handler, bound to document.
 * Blur event handler, bound to drag handle for keyboard support.
 */
Drupal.tableDrag.prototype.dropRow = function(event, self) {
  // Drop row functionality shared between mouseup and blur events.
  if (self.rowObject != null) {
    var droppedRow = self.rowObject.element;
    // The row is already in the right place so we just release it.
    if (self.rowObject.changed == true) {
      // Update the fields in the dropped row.
      self.updateFields(droppedRow);

      // If a setting exists for affecting the entire group, update all the
      // fields in the entire dragged group.
      for (var group in self.tableSettings) {
        var rowSettings = self.rowSettings(group, droppedRow);
        if (rowSettings.relationship == 'group') {
          for (n in self.rowObject.children) {
            self.updateField(self.rowObject.children[n], group);
          }
        }
      }

      self.rowObject.markChanged();
      if (self.changed == false) {
        $(Drupal.theme('tableDragChangedWarning')).insertAfter(self.table).hide().fadeIn('slow');
        self.changed = true;
      }
    }

    if (self.indentEnabled) {
      self.rowObject.removeIndentClasses();
    }
    if (self.oldRowElement) {
      $(self.oldRowElement).removeClass('drag-previous');
    }
    $(droppedRow).removeClass('drag').addClass('drag-previous');
    self.oldRowElement = droppedRow;
    self.onDrop();
    self.rowObject = null;
  }

  // Functionality specific only to mouseup event.
  if (self.dragObject != null) {
    $('.tabledrag-handle', droppedRow).removeClass('tabledrag-handle-hover');

    self.dragObject = null;
    $('body').removeClass('drag');
    clearInterval(self.scrollInterval);

    // Hack for IE6 that flickers uncontrollably if select lists are moved.
    if (navigator.userAgent.indexOf('MSIE 6.') != -1) {
      $('select', this.table).css('display', 'block');
    }
  }
};

/**
 * Get the position of an element by adding up parent offsets in the DOM tree.
 */
Drupal.tableDrag.prototype.getPosition = function(element){
  var left = 0;
  var top  = 0;
  // Because Safari doesn't report offsetHeight on table rows, but does on table
  // cells, grab the firstChild of the row and use that instead.
  // http://jacob.peargrove.com/blog/2006/technical/table-row-offsettop-bug-in-safari
  if (element.offsetHeight == 0) {
    element = element.firstChild; // a table cell
  }

  while (element.offsetParent){
    left   += element.offsetLeft;
    top    += element.offsetTop;
    element = element.offsetParent;
  }

  left += element.offsetLeft;
  top  += element.offsetTop;

  return {x:left, y:top};
};

/**
 * Get the mouse coordinates from the event (allowing for browser differences).
 */
Drupal.tableDrag.prototype.mouseCoords = function(event){
  if (event.pageX || event.pageY) {
    return {x:event.pageX, y:event.pageY};
  }
  return {
    x:event.clientX + document.body.scrollLeft - document.body.clientLeft,
    y:event.clientY + document.body.scrollTop  - document.body.clientTop
  };
};

/**
 * Given a target element and a mouse event, get the mouse offset from that
 * element. To do this we need the element's position and the mouse position.
 */
Drupal.tableDrag.prototype.getMouseOffset = function(target, event) {
  var docPos   = this.getPosition(target);
  var mousePos = this.mouseCoords(event);
  return {x:mousePos.x - docPos.x, y:mousePos.y - docPos.y};
};

/**
 * Find the row the mouse is currently over. This row is then taken and swapped
 * with the one being dragged.
 *
 * @param x
 *   The x coordinate of the mouse on the page (not the screen).
 * @param y
 *   The y coordinate of the mouse on the page (not the screen).
 */
Drupal.tableDrag.prototype.findDropTargetRow = function(x, y) {
  var rows = this.table.tBodies[0].rows;
  for (var n=0; n<rows.length; n++) {
    var row = rows[n];
    var indentDiff = 0;
    // Safari fix see Drupal.tableDrag.prototype.getPosition()
    if (row.offsetHeight == 0) {
      var rowY = this.getPosition(row.firstChild).y;
      var rowHeight = parseInt(row.firstChild.offsetHeight)/2;
    }
    // Other browsers.
    else {
      var rowY = this.getPosition(row).y;
      var rowHeight = parseInt(row.offsetHeight)/2;
    }

    // Because we always insert before, we need to offset the height a bit.
    if ((y > (rowY - rowHeight)) && (y < (rowY + rowHeight))) {
      if (this.indentEnabled) {
        // Check that this row is not a child of the row being dragged.
        for (n in this.rowObject.group) {
          if (this.rowObject.group[n] == row) {
            return null;
          }
        }
      }
      // Check that swapping with this row is allowed.
      if (!this.rowObject.isValidSwap(row)) {
        return null;
      }

      // We may have found the row the mouse just passed over, but it doesn't
      // take into account hidden rows. Skip backwards until we find a draggable
      // row.
      while ($(row).is(':hidden') && $(row).prev('tr').is(':hidden')) {
        row = $(row).prev('tr').get(0);
      }
      return row;
    }
  }
  return null;
};

/**
 * After the row is dropped, update the table fields according to the settings
 * set for this table.
 *
 * @param changedRow
 *   DOM object for the row that was just dropped.
 */
Drupal.tableDrag.prototype.updateFields = function(changedRow) {
  for (var group in this.tableSettings) {
    // Each group may have a different setting for relationship, so we find
    // the source rows for each seperately.
    this.updateField(changedRow, group);
  }
};

/**
 * After the row is dropped, update a single table field according to specific
 * settings.
 *
 * @param changedRow
 *   DOM object for the row that was just dropped.
 * @param group
 *   The settings group on which field updates will occur.
 */
Drupal.tableDrag.prototype.updateField = function(changedRow, group) {
  var rowSettings = this.rowSettings(group, changedRow);

  // Set the row as it's own target.
  if (rowSettings.relationship == 'self' || rowSettings.relationship == 'group') {
    var sourceRow = changedRow;
  }
  // Siblings are easy, check previous and next rows.
  else if (rowSettings.relationship == 'sibling') {
    var previousRow = $(changedRow).prev('tr').get(0);
    var nextRow = $(changedRow).next('tr').get(0);
    var sourceRow = changedRow;
    if ($(previousRow).is('.draggable') && $('.' + group, previousRow).length) {
      if (this.indentEnabled) {
        if ($('.indentations', previousRow).size() == $('.indentations', changedRow)) {
          sourceRow = previousRow;
        }
      }
      else {
        sourceRow = previousRow;
      }
    }
    else if ($(nextRow).is('.draggable') && $('.' + group, nextRow).length) {
      if (this.indentEnabled) {
        if ($('.indentations', nextRow).size() == $('.indentations', changedRow)) {
          sourceRow = nextRow;
        }
      }
      else {
        sourceRow = nextRow;
      }
    }
  }
  // Parents, look up the tree until we find a field not in this group.
  // Go up as many parents as indentations in the changed row.
  else if (rowSettings.relationship == 'parent') {
    var previousRow = $(changedRow).prev('tr');
    while (previousRow.length && $('.indentation', previousRow).length >= this.rowObject.indents) {
      previousRow = previousRow.prev('tr');
    }
    // If we found a row.
    if (previousRow.length) {
      sourceRow = previousRow[0];
    }
    // Otherwise we went all the way to the left of the table without finding
    // a parent, meaning this item has been placed at the root level.
    else {
      // Use the first row in the table as source, because it's garanteed to
      // be at the root level. Find the first item, then compare this row
      // against it as a sibling.
      sourceRow = $('tr.draggable:first').get(0);
      if (sourceRow == this.rowObject.element) {
        sourceRow = $(this.rowObject.group[this.rowObject.group.length - 1]).next('tr.draggable').get(0);
      }
      var useSibling = true;
    }
  }

  // Because we may have moved the row from one category to another,
  // take a look at our sibling and borrow its sources and targets.
  this.copyDragClasses(sourceRow, changedRow, group);
  rowSettings = this.rowSettings(group, changedRow);

  // In the case that we're looking for a parent, but the row is at the top
  // of the tree, copy our sibling's values.
  if (useSibling) {
    rowSettings.relationship = 'sibling';
    rowSettings.source = rowSettings.target;
  }

  var targetClass = '.' + rowSettings.target;
  var targetElement = $(targetClass, changedRow).get(0);

  // Check if a target element exists in this row.
  if (targetElement) {
    var sourceClass = '.' + rowSettings.source;
    var sourceElement = $(sourceClass, sourceRow).get(0);
    switch (rowSettings.action) {
      case 'depth':
        // Get the depth of the target row.
        targetElement.value = $('.indentation', $(sourceElement).parents('tr:first')).size();
        break;
      case 'match':
        // Update the value.
        targetElement.value = sourceElement.value;
        break;
      case 'order':
        var siblings = this.rowObject.findSiblings(rowSettings);
        if ($(targetElement).is('select')) {
          // Get a list of acceptable values.
          var values = new Array();
          $('option', targetElement).each(function() {
            values.push(this.value);
          });
          var maxVal = values[values.length - 1];
          // Populate the values in the siblings.
          $(targetClass, siblings).each(function() {
            // If there are more items than possible values, assign the maximum value to the row. 
            if (values.length > 0) {
              this.value = values.shift();
            }
            else {
              this.value = maxVal;
            }
          });
        }
        else {
          // Assume a numeric input field.
          var weight = parseInt($(targetClass, siblings[0]).val()) || 0;
          $(targetClass, siblings).each(function() {
            this.value = weight;
            weight++;
          });
        }
        break;
    }
  }
};

/**
 * Copy all special tableDrag classes from one row's form elements to a
 * different one, removing any special classes that the destination row
 * may have had.
 */
Drupal.tableDrag.prototype.copyDragClasses = function(sourceRow, targetRow, group) {
  var sourceElement = $('.' + group, sourceRow);
  var targetElement = $('.' + group, targetRow);
  if (sourceElement.length && targetElement.length) {
    targetElement[0].className = sourceElement[0].className;
  }
};

Drupal.tableDrag.prototype.checkScroll = function(cursorY) {
  var de  = document.documentElement;
  var b  = document.body;

  var windowHeight = this.windowHeight = window.innerHeight || (de.clientHeight && de.clientWidth != 0 ? de.clientHeight : b.offsetHeight);
  var scrollY = this.scrollY = (document.all ? (!de.scrollTop ? b.scrollTop : de.scrollTop) : (window.pageYOffset ? window.pageYOffset : window.scrollY));
  var trigger = this.scrollSettings.trigger;
  var delta = 0;

  // Return a scroll speed relative to the edge of the screen.
  if (cursorY - scrollY > windowHeight - trigger) {
    delta = trigger / (windowHeight + scrollY - cursorY);
    delta = (delta > 0 && delta < trigger) ? delta : trigger;
    return delta * this.scrollSettings.amount;
  }
  else if (cursorY - scrollY < trigger) {
    delta = trigger / (cursorY - scrollY);
    delta = (delta > 0 && delta < trigger) ? delta : trigger;
    return -delta * this.scrollSettings.amount;
  }
};

Drupal.tableDrag.prototype.setScroll = function(scrollAmount) {
  var self = this;

  this.scrollInterval = setInterval(function() {
    // Update the scroll values stored in the object.
    self.checkScroll(self.currentMouseCoords.y);
    var aboveTable = self.scrollY > self.table.topY;
    var belowTable = self.scrollY + self.windowHeight < self.table.bottomY;
    if (scrollAmount > 0 && belowTable || scrollAmount < 0 && aboveTable) {
      window.scrollBy(0, scrollAmount);
    }
  }, this.scrollSettings.interval);
};

Drupal.tableDrag.prototype.restripeTable = function() {
  // :even and :odd are reversed because jquery counts from 0 and
  // we count from 1, so we're out of sync.
  // Match immediate children of the parent element to allow nesting.
  $('> tbody > tr.draggable, > tr.draggable', this.table)
    .filter(':odd').filter('.odd')
      .removeClass('odd').addClass('even')
    .end().end()
    .filter(':even').filter('.even')
      .removeClass('even').addClass('odd');
};

/**
 * Stub function. Allows a custom handler when a row begins dragging.
 */
Drupal.tableDrag.prototype.onDrag = function() {
  return null;
};

/**
 * Stub function. Allows a custom handler when a row is dropped.
 */
Drupal.tableDrag.prototype.onDrop = function() {
  return null;
};

/**
 * Constructor to make a new object to manipulate a table row.
 *
 * @param tableRow
 *   The DOM element for the table row we will be manipulating.
 * @param method
 *   The method in which this row is being moved. Either 'keyboard' or 'mouse'.
 * @param indentEnabled
 *   Whether the containing table uses indentations. Used for optimizations.
 * @param maxDepth
 *   The maximum amount of indentations this row may contain.
 * @param addClasses
 *   Whether we want to add classes to this row to indicate child relationships.
 */
Drupal.tableDrag.prototype.row = function(tableRow, method, indentEnabled, maxDepth, addClasses) {
  this.element = tableRow;
  this.method = method;
  this.group = new Array(tableRow);
  this.groupDepth = $('.indentation', tableRow).size();
  this.changed = false;
  this.table = $(tableRow).parents('table:first').get(0);
  this.indentEnabled = indentEnabled;
  this.maxDepth = maxDepth;
  this.direction = ''; // Direction the row is being moved.

  if (this.indentEnabled) {
    this.indents = $('.indentation', tableRow).size();
    this.children = this.findChildren(addClasses);
    this.group = $.merge(this.group, this.children);
    // Find the depth of this entire group.
    for (var n = 0; n < this.group.length; n++) {
      this.groupDepth = Math.max($('.indentation', this.group[n]).size(), this.groupDepth);
    }
  }
};

/**
 * Find all children of rowObject by indentation.
 *
 * @param addClasses
 *   Whether we want to add classes to this row to indicate child relationships.
 */
Drupal.tableDrag.prototype.row.prototype.findChildren = function(addClasses) {
  var parentIndentation = this.indents;
  var currentRow = $(this.element, this.table).next('tr.draggable');
  var rows = new Array();
  var child = 0;
  while (currentRow.length) {
    var rowIndentation = $('.indentation', currentRow).length;
    // A greater indentation indicates this is a child.
    if (rowIndentation > parentIndentation) {
      child++;
      rows.push(currentRow[0]);
      if (addClasses) {
        $('.indentation', currentRow).each(function(indentNum) {
          if (child == 1 && (indentNum == parentIndentation)) {
            $(this).addClass('tree-child-first');
          }
          if (indentNum == parentIndentation) {
            $(this).addClass('tree-child');
          }
          else if (indentNum > parentIndentation) {
            $(this).addClass('tree-child-horizontal');
          }
        });
      }
    }
    else {
      break;
    }
    currentRow = currentRow.next('tr.draggable');
  }
  if (addClasses && rows.length) {
    $('.indentation:nth-child(' + (parentIndentation + 1) + ')', rows[rows.length - 1]).addClass('tree-child-last');
  }
  return rows;
};

/**
 * Ensure that two rows are allowed to be swapped.
 *
 * @param row
 *   DOM object for the row being considered for swapping.
 */
Drupal.tableDrag.prototype.row.prototype.isValidSwap = function(row) {
  if (this.indentEnabled) {
    var prevRow, nextRow;
    if (this.direction == 'down') {
      prevRow = row;
      nextRow = $(row).next('tr').get(0);
    }
    else {
      prevRow = $(row).prev('tr').get(0);
      nextRow = row;
    }
    this.interval = this.validIndentInterval(prevRow, nextRow);

    // We have an invalid swap if the valid indentations interval is empty.
    if (this.interval.min > this.interval.max) {
      return false;
    }
  }

  // Do not let an un-draggable first row have anything put before it.
  if (this.table.tBodies[0].rows[0] == row && $(row).is(':not(.draggable)')) {
    return false;
  }

  return true;
};

/**
 * Perform the swap between two rows.
 *
 * @param position
 *   Whether the swap will occur 'before' or 'after' the given row.
 * @param row
 *   DOM element what will be swapped with the row group.
 */
Drupal.tableDrag.prototype.row.prototype.swap = function(position, row) {
  $(row)[position](this.group);
  this.changed = true;
  this.onSwap(row);
};

/**
 * Determine the valid indentations interval for the row at a given position
 * in the table.
 *
 * @param prevRow
 *   DOM object for the row before the tested position
 *   (or null for first position in the table).
 * @param nextRow
 *   DOM object for the row after the tested position
 *   (or null for last position in the table).
 */
Drupal.tableDrag.prototype.row.prototype.validIndentInterval = function (prevRow, nextRow) {
  var minIndent, maxIndent;

  // Minimum indentation:
  // Do not orphan the next row.
  minIndent = nextRow ? $('.indentation', nextRow).size() : 0;

  // Maximum indentation:
  if (!prevRow || $(this.element).is('.tabledrag-root')) {
    // Do not indent the first row in the table or 'root' rows..
    maxIndent = 0;
  }
  else {
    // Do not go deeper than as a child of the previous row.
    maxIndent = $('.indentation', prevRow).size() + ($(prevRow).is('.tabledrag-leaf') ? 0 : 1);
    // Limit by the maximum allowed depth for the table.
    if (this.maxDepth) {
      maxIndent = Math.min(maxIndent, this.maxDepth - (this.groupDepth - this.indents));
    }
  }

  return {'min':minIndent, 'max':maxIndent};
}

/**
 * Indent a row within the legal bounds of the table.
 *
 * @param indentDiff
 *   The number of additional indentations proposed for the row (can be
 *   positive or negative). This number will be adjusted to nearest valid
 *   indentation level for the row.
 */
Drupal.tableDrag.prototype.row.prototype.indent = function(indentDiff) {
  // Determine the valid indentations interval if not available yet.
  if (!this.interval) {
    prevRow = $(this.element).prev('tr').get(0);
    nextRow = $(this.group).filter(':last').next('tr').get(0);
    this.interval = this.validIndentInterval(prevRow, nextRow);
  }

  // Adjust to the nearest valid indentation.
  var indent = this.indents + indentDiff;
  indent = Math.max(indent, this.interval.min);
  indent = Math.min(indent, this.interval.max);
  indentDiff = indent - this.indents;

  for (var n = 1; n <= Math.abs(indentDiff); n++) {
    // Add or remove indentations.
    if (indentDiff < 0) {
      $('.indentation:first', this.group).remove();
      this.indents--;
    }
    else {
      $('td:first', this.group).prepend(Drupal.theme('tableDragIndentation'));
      this.indents++;
    }
  }
  if (indentDiff) {
    // Update indentation for this row.
    this.changed = true;
    this.groupDepth += indentDiff;
    this.onIndent();
  }

  return indentDiff;
};

/**
 * Find all siblings for a row, either according to its subgroup or indentation.
 * Note that the passed in row is included in the list of siblings.
 *
 * @param settings
 *   The field settings we're using to identify what constitutes a sibling.
 */
Drupal.tableDrag.prototype.row.prototype.findSiblings = function(rowSettings) {
  var siblings = new Array();
  var directions = new Array('prev', 'next');
  var rowIndentation = this.indents;
  for (var d in directions) {
    var checkRow = $(this.element)[directions[d]]();
    while (checkRow.length) {
      // Check that the sibling contains a similar target field.
      if ($('.' + rowSettings.target, checkRow)) {
        // Either add immediately if this is a flat table, or check to ensure
        // that this row has the same level of indentaiton.
        if (this.indentEnabled) {
          var checkRowIndentation = $('.indentation', checkRow).length
        }

        if (!(this.indentEnabled) || (checkRowIndentation == rowIndentation)) {
          siblings.push(checkRow[0]);
        }
        else if (checkRowIndentation < rowIndentation) {
          // No need to keep looking for siblings when we get to a parent.
          break;
        }
      }
      else {
        break;
      }
      checkRow = $(checkRow)[directions[d]]();
    }
    // Since siblings are added in reverse order for previous, reverse the
    // completed list of previous siblings. Add the current row and continue.
    if (directions[d] == 'prev') {
      siblings.reverse();
      siblings.push(this.element);
    }
  }
  return siblings;
};

/**
 * Remove indentation helper classes from the current row group.
 */
Drupal.tableDrag.prototype.row.prototype.removeIndentClasses = function() {
  for (n in this.children) {
    $('.indentation', this.children[n])
      .removeClass('tree-child')
      .removeClass('tree-child-first')
      .removeClass('tree-child-last')
      .removeClass('tree-child-horizontal');
  }
};

/**
 * Add an asterisk or other marker to the changed row.
 */
Drupal.tableDrag.prototype.row.prototype.markChanged = function() {
  var marker = Drupal.theme('tableDragChangedMarker');
  var cell = $('td:first', this.element);
  if ($('span.tabledrag-changed', cell).length == 0) {
    cell.append(marker);
  }
};

/**
 * Stub function. Allows a custom handler when a row is indented.
 */
Drupal.tableDrag.prototype.row.prototype.onIndent = function() {
  return null;
};

/**
 * Stub function. Allows a custom handler when a row is swapped.
 */
Drupal.tableDrag.prototype.row.prototype.onSwap = function(swappedRow) {
  return null;
};

Drupal.theme.prototype.tableDragChangedMarker = function () {
  return '<span class="warning tabledrag-changed">*</span>';
};

Drupal.theme.prototype.tableDragIndentation = function () {
  return '<div class="indentation">&nbsp;</div>';
};

Drupal.theme.prototype.tableDragChangedWarning = function () {
  return '<div class="warning">' + Drupal.theme('tableDragChangedMarker') + ' ' + Drupal.t("Changes made in this table will not be saved until the form is submitted.") + '</div>';
};
;// $Id: dhtml_menu.js,v 1.18.2.10 2009/01/12 10:13:30 arancaytar Exp $

/**
 * @file dhtml_menu.js
 * The Javascript code for DHTML Menu
 */
 
Drupal.dhtmlMenu = {};

/**
 * Initialize the module's JS functions
 */
Drupal.behaviors.dhtmlMenu = function() {
  // Do not run this function more than once.
  if (Drupal.dhtmlMenu.init) {
    return;
  }
  else {
    Drupal.dhtmlMenu.init = true;
  }

  // Get the settings.
  var effects = Drupal.settings.dhtmlMenu;

  $('.collapsed').removeClass('expanded');

  // Get cookie
  if (!effects.siblings) {
    var cookie = Drupal.dhtmlMenu.cookieGet();
    for (var i in cookie) {
      // If the cookie was not applied to the HTML code yet, do so now.
      var li = $('#dhtml_menu-' + cookie[i]).parents('li:first');
      if ($(li).hasClass('collapsed')) {
        Drupal.dhtmlMenu.toggleMenu(li);
      }
    }
  }

  /* Add jQuery effects and listeners to all menu items.
   * The ~ (sibling) selector is unidirectional and selects 
   * only the latter element, so we must use siblings() to get 
   * back to the link element.
   */
   $('ul.menu li.dhtml-menu:not(.leaf,.no-dhtml)').each(function() {
    var li = this;
    if (effects.clone) {
      var ul = $(li).find('ul:first');
      if (ul.length) {
        $(li).find('a:first').clone().prependTo(ul).wrap('<li class="leaf fake-leaf"></li>');
      }
    }

    if (effects.doubleclick) {
      $(li).find('a:first').dblclick(function(e) {
        window.location = this.href;
      });
    }

    $(li).find('a:first').click(function(e) {
      Drupal.dhtmlMenu.toggleMenu($(li));
      return false;
    });
  });
}

/**
 * Toggles the menu's state between open and closed.
 *
 * @param li
 *   Object. The <li> element that will be expanded or collapsed.
 */
Drupal.dhtmlMenu.toggleMenu = function(li) {
  var effects = Drupal.settings.dhtmlMenu;

  // If the menu is expanded, collapse it.
  if($(li).hasClass('expanded')) {
    if (effects.slide) {
      $(li).find('ul:first').animate({height: 'hide', opacity: 'hide'}, '1000');
    }
    else $(li).find('ul:first').css('display', 'none');

    // If children are closed automatically, find and close them now.
    if (effects.children) {
      if (effects.slide) {
        $(li).find('li.expanded').find('ul:first').animate({height: 'hide', opacity: 'hide'}, '1000');
      }
      else $(li).find('li.expanded').find('ul:first').css('display', 'none');

      $(li).find('li.expanded').removeClass('expanded').addClass('collapsed')
    }

    $(li).removeClass('expanded').addClass('collapsed');
  }

  // Otherwise, expand it.
  else {
    if (effects.slide) {
      $(li).find('ul:first').animate({height: 'show', opacity: 'show'}, '1000');
    }
    else $(li).find('ul:first').css('display', 'block');
    $(li).removeClass('collapsed').addClass('expanded');

    // If the siblings effect is on, close all sibling menus.
    if (effects.siblings) {
      var id = $(li).find('a:first').attr('id');

      // Siblings are all open menus that are neither parents nor children of this menu.
      $(li).find('li').addClass('own-children-temp');
	  
      // If the relativity option is on, select only the siblings that have the same parent
      if (effects.relativity) {
        var siblings = $(li).parent().find('li.expanded').not('.own-children-temp').not(':has(#' + id + ')');
      }
      // Otherwise, select all menus of the same level
      else {
        var siblings = $('ul.menu li.expanded').not('.own-children-temp').not(':has(#' + id + ')');
      }

      // If children should not get closed automatically...
      if (!effects.children) {
        // Remove items that are currently hidden from view (do not close these).
        $('li.collapsed li.expanded').addClass('sibling-children-temp');
        // Only close the top-most open sibling, not its children.
        $(siblings).find('li.expanded').addClass('sibling-children-temp');
        siblings = $(siblings).not('.sibling-children-temp');
      }

      $('.own-children-temp, .sibling-children-temp').removeClass('own-children-temp').removeClass('sibling-children-temp');

      if (effects.slide) {
        $(siblings).find('ul:first').animate({height: 'hide', opacity: 'hide'}, '1000');
      }
      else $(siblings).find('ul:first').css('display', 'none');

      $(siblings).removeClass('expanded').addClass('collapsed');
    }
  }

  // Save the current state of the menus in the cookie.
  Drupal.dhtmlMenu.cookieSet();
}

/**
 * Reads the dhtml_menu cookie.
 */
Drupal.dhtmlMenu.cookieGet = function() {
  var c = /dhtml_menu=(.*?)(;|$)/.exec(document.cookie);
  if (c) {
    return c[1];
  }
  else return '';
}

/**
 * Saves the dhtml_menu cooki.
 */
Drupal.dhtmlMenu.cookieSet = function() {
  var expanded = new Array();
  $('li.expanded').each(function() {
    expanded.push($(this).find('a:first').attr('id').substr(5));
  });
  document.cookie = 'dhtml_menu=' + expanded.join(',') + ';path=/';
}

;// $Id: panels.js,v 1.2 2008/07/16 00:09:04 merlinofchaos Exp $

Drupal.Panels = {};

Drupal.Panels.autoAttach = function() {
  if ($.browser.msie) {
    // If IE, attach a hover event so we can see our admin links.
    $("div.panel-pane").hover(
      function() {
        $('div.panel-hide', this).addClass("panel-hide-hover"); return true;
      },
      function() {
        $('div.panel-hide', this).removeClass("panel-hide-hover"); return true;
      }
    );
    $("div.admin-links").hover(
      function() {
        $(this).addClass("admin-links-hover"); return true;
      },
      function(){
        $(this).removeClass("admin-links-hover"); return true;
      }
    );
  }
};

$(Drupal.Panels.autoAttach);
;// Javascript for user_relationships_ui.module

// Creating our own namespace for the module
Drupal.user_relationships_ui = {};

if (Drupal.jsEnabled) {
  $(document).ready(function() {
    // Any links that we have created in the ui module are
    // Given a click handler so you can display the popup correctly
    $('a.user_relationships_popup_link').click(function(e) {
      var buttoncode = e.which ? e.which : e.button; // msie specific checks does not support e.which
      // If position is fixed, allow for %'s.
      position = Drupal.settings.user_relationships_ui.position.position;
      left = Drupal.settings.user_relationships_ui.position.left;
      xtop = Drupal.settings.user_relationships_ui.position.top;
      
      if(position == "fixed") {
        // If left is defined in a % (.5) calculate left requirement
        if(left <= 1) {
          // Window width * desired - UI width
          left = Math.round(($(window).width()*left) - ($("#user_relationships_popup_form").width()/2));
        }
        // If top is define in a % (.33) calculate top requirement
        if(xtop <= 1) {
          // Window height * desired - UI height (which is an unknown)
          xtop = Math.round(($(window).height()*xtop));// - ($("#user_relationships_popup_form").height()/2));
        }
      } else {
      left = (e.pageX ? e.pageX : e.clientX) + Number(left); // msie specific checks does not support e.page
      if (left + $("#user_relationships_popup_form").width() > $(window).width()) {
        left = (e.pageX ? e.pageX : e.clientX) - $("#user_relationships_popup_form").width();
      }
        xtop = (e.pageY ? e.pageY : e.clientY) + Number(xtop); // msie specific checks does not support e.page
      }
      var href = $(this).attr('href'); // Where we send the ajax request.
      Drupal.user_relationships_ui.showForm(href, position, left, xtop);
      return false;
    });
  });
}

/**
 * Function to display the pertinent form for the user
 *
 * @param href
 *      Ajax url where we will retrieve the form
 * @param pageX
 *      Left value for the event
 * @param pageY
 *      Top value for the event
 */
Drupal.user_relationships_ui.showForm = function(href, position, left, top) {
  // Making sure that any currently open popups will be hidden.
  Drupal.user_relationships_ui.hidePopup();
  // Putting the animation into this

  $('#user_relationships_popup_form')
    .css({top: top + 'px', left: left + 'px', position: position})
    .html(Drupal.user_relationships_ui.loadingAnimation())
    .slideDown();
  // Adding ajax to the href because we need to determine between ajax and regular
  if (href.indexOf('?') == -1) {
    href += '?';
  };
  href += '&ajax=1';
  // Making the ajax request to the server to retrieve the form.
  $.get(href, function(result) {
    $('#user_relationships_popup_form').html(result).slideDown();
    // Making sure the cancel link on each form in the popup closes the popup.
    $('#user_relationships_popup_form a').click(function() {
      Drupal.user_relationships_ui.hidePopup();
      return false;
    });
    //Prevent users from clicking submit button twice
    Drupal.user_relationships_ui.formCheck();
  });
};

/**
 * Function used to return the html that is used to build the.
 * Loading animation when a form is requested by the user.
 */
Drupal.user_relationships_ui.loadingAnimation = function() {
  var html = '<div>';
  html += '<div style="text-align: center; font-weight: bold;">';
  html += Drupal.t('Form Loading');
  html += '</div>';
  html += '<img src="' + Drupal.settings.user_relationships_ui['loadingimage'] + '" border="0" height="20" width="200" />';
  html += '</div>';
  return html;
}

/**
 * Helper function to hide the popup form
 */
Drupal.user_relationships_ui.hidePopup = function() {
  $('#user_relationships_popup_form').slideUp();
}

/**
 * Prevent users from clicking a submit button twice - borrowed from http://drupal.org/project/newswire - thanks, fellows :)
 */
Drupal.user_relationships_ui.formCheck = function() {
  // only apply this to node and comment and new user registration forms
  var forms = $("#user_relationships_popup_form #edit-submit");
  // insert the saving div now to cache it for better performance and to show the loading image
  $('<div id="user_relationships_popup_form_saving"><p class="user_relationships_popup_form_saving">' + Drupal.t('Saving...') + '</p></div>').insertAfter(forms);
  forms.click(function() {
    $(this).siblings("input[type=submit]").hide();
    $(this).hide();
    $("#user_relationships_popup_form_saving").show();
    var notice = function() {
      $('<p id="user_relationships_popup_form_saving_notice">' + Drupal.t('Not saving? Please wait a few seconds, reload this page, and try again.') + '</p>').appendTo("#user_relationships_popup_form_saving").fadeIn();
    };
    // append notice if form saving isn't work, perhaps a timeout issue
    setTimeout(notice, 60000);
  });
};
;// $Id: yui_editor.js,v 1.1.4.18.2.7 2008/11/21 22:54:27 jeffcd Exp $

YAHOO.namespace('Drupal');
YAHOO.Drupal.editors = [];
YAHOO.Drupal.yui_editor_load = new YAHOO.util.CustomEvent('load', YAHOO.Drupal.editors);

YAHOO.Drupal.yui_editor = function (id, config) {
  var Dom = YAHOO.util.Dom, Event = YAHOO.util.Event;

  if (Dom.get(id) != null) {
    var newToolbar = new yui_editor_toolbar;
    var myConfig = {
      height: config.height,
      width: config.width,
      dompath: parseInt(config.dom),
      animate: true,
      handleSubmit: true,
      markup: config.markup,
      toolbar: newToolbar.toolbar,
      ptags: parseInt(config.ptags)
    };
    myConfig.toolbar.titlebar = config.title;
    myConfig.toolbar.collapse = parseInt(config.collapse);
    myConfig.toolbar.draggable = parseInt(config.draggable);
    myConfig.toolbar.buttonType = config.buttonType;

    $(document).ready(function() {
      $(".grippie").hide();
      $(".teaser-checkbox").hide();
      YAHOO.util.Dom.setStyle('toggleEditor-' + id, 'margin-top', '1.7em');
    });

    var myEditor = new YAHOO.widget.Editor(id, myConfig);
    if (! config.titlebar) {
      myEditor._defaultToolbar.titlebar = config.titlebar;
    }

    myEditor.render();

    this.editor = myEditor;
    this.config = config;
    this.id = id;
  }
};;// $Id: yui_editor_toolbar_default.js,v 1.1.2.3.2.2 2008/11/21 22:54:28 jeffcd Exp $

function yui_editor_toolbar () {
  this.toolbar = {
    collapse: false,
    titlebar: '',
    draggable: true,
    buttonType: 'advanced',
    buttons: [
      { group: 'fontstyle', label: 'Font Name and Size',
          buttons: [
              { type: 'select', label: 'Arial', value: 'fontname', disabled: true,
                  menu: [
                      { text: 'Arial', checked: true },
                      { text: 'Arial Black' },
                      { text: 'Comic Sans MS' },
                      { text: 'Courier New' },
                      { text: 'Lucida Console' },
                      { text: 'Tahoma' },
                      { text: 'Times New Roman' },
                      { text: 'Trebuchet MS' },
                      { text: 'Verdana' }
                  ]
              },
              { type: 'spin', label: '13', value: 'fontsize', range: [ 9, 75 ], disabled: true }
          ]
      },
      { type: 'separator' },
      { group: 'textstyle', label: 'Font Style',
          buttons: [
              { type: 'push', label: 'Bold CTRL + SHIFT + B', value: 'bold' },
              { type: 'push', label: 'Italic CTRL + SHIFT + I', value: 'italic' },
              { type: 'push', label: 'Underline CTRL + SHIFT + U', value: 'underline' },
              { type: 'separator' },
              { type: 'push', label: 'Subscript', value: 'subscript', disabled: true },
              { type: 'push', label: 'Superscript', value: 'superscript', disabled: true },
              { type: 'separator' },
              { type: 'color', label: 'Font Color', value: 'forecolor', disabled: true },
              { type: 'color', label: 'Background Color', value: 'backcolor', disabled: true },
              { type: 'separator' },
              { type: 'push', label: 'Remove Formatting', value: 'removeformat', disabled: true },
              { type: 'push', label: 'Show/Hide Hidden Elements', value: 'hiddenelements' }
          ]
      },
      { type: 'separator' },
      { group: 'alignment', label: 'Alignment',
          buttons: [
              { type: 'push', label: 'Align Left CTRL + SHIFT + [', value: 'justifyleft' },
              { type: 'push', label: 'Align Center CTRL + SHIFT + |', value: 'justifycenter' },
              { type: 'push', label: 'Align Right CTRL + SHIFT + ]', value: 'justifyright' },
              { type: 'push', label: 'Justify', value: 'justifyfull' }
          ]
      },
      { type: 'separator' },
      { group: 'parastyle', label: 'Paragraph Style',
          buttons: [
          { type: 'select', label: 'Normal', value: 'heading', disabled: true,
              menu: [
                  { text: 'Normal', value: 'none', checked: true },
                  { text: 'Header 1', value: 'h1' },
                  { text: 'Header 2', value: 'h2' },
                  { text: 'Header 3', value: 'h3' },
                  { text: 'Header 4', value: 'h4' },
                  { text: 'Header 5', value: 'h5' },
                  { text: 'Header 6', value: 'h6' }
              ]
          }
          ]
      },
      { type: 'separator' },
      { group: 'indentlist', label: 'Indenting and Lists',
          buttons: [
              { type: 'push', label: 'Indent', value: 'indent', disabled: true },
              { type: 'push', label: 'Outdent', value: 'outdent', disabled: true },
              { type: 'push', label: 'Create an Unordered List', value: 'insertunorderedlist' },
              { type: 'push', label: 'Create an Ordered List', value: 'insertorderedlist' }
          ]
      },
      { type: 'separator' },
      { group: 'insertitem', label: 'Insert Item',
          buttons: [
              { type: 'push', label: 'HTML Link CTRL + SHIFT + L', value: 'createlink', disabled: true },
              { type: 'push', label: 'Insert Image', value: 'insertimage' }
          ]
      },
      { type: 'separator' },
      { group: 'plugins', label: 'Plugins', buttons: [] }
    ]
  };
}
;// $Id: imce_set_inline.js,v 1.3.2.4 2009/02/20 21:17:58 ufku Exp $

var imceInline = {};

imceInline.initiate = function() {
  $('div.imce-inline-wrapper').show().find('a').click(function() {
    var i = this.name.indexOf('-IMCE-');
    imceInline.activeTextarea = $('#'+ this.name.substr(0, i)).get(0);
    imceInline.activeType = this.name.substr(i+6);
 
    if (typeof imceInline.pop == 'undefined' || imceInline.pop.closed) {
      imceInline.pop = window.open(this.href + (this.href.indexOf('?') < 0 ? '?' : '&') +'app=nomatter|onload@imceInlineImceLoad', '', 'width='+ 760 +',height='+ 560 +',resizable=1');
    }

    imceInline.pop.focus();
    return false;
  });
};

//function to be executed when imce loads.
function imceInlineImceLoad(win) {
  win.imce.setSendTo(Drupal.t('Send to @app', {'@app': Drupal.t('textarea')}), imceInline.insert);
  $(window).unload(function() {
    if (imceInline.pop && !imceInline.pop.closed) imceInline.pop.close();
  });
};

//insert html at cursor position
imceInline.insertAtCursor = function (field, txt, type) {
  field.focus();
  if ('undefined' != typeof(field.selectionStart)) {
    if (type == 'link' && (field.selectionEnd-field.selectionStart)) {
      txt = txt.split('">')[0] +'">'+ field.value.substring(field.selectionStart, field.selectionEnd) +'</a>';
    }
    field.value = field.value.substring(0, field.selectionStart) + txt + field.value.substring(field.selectionEnd, field.value.length);
  }
  else if (document.selection) {
    if (type == 'link' && document.selection.createRange().text.length) {
      txt = txt.split('">')[0] +'">'+ document.selection.createRange().text +'</a>';
    }
    document.selection.createRange().text = txt;
  }
  else {
    field.value += txt;
  }
};

//sendTo function
imceInline.insert = function (file, win) {
  var type = imceInline.activeType == 'link' ? 'link' : (file.width ? 'image' : 'link');
  var html = type == 'image' ? ('<img src="'+ file.url +'" width="'+ file.width +'" height="'+ file.height +'" alt="'+ file.name +'" />') : ('<a href="'+ file.url +'">'+ file.name +' ('+ file.size +')</a>');
  imceInline.activeType = null;
  win.blur();
  imceInline.insertAtCursor(imceInline.activeTextarea, html, type);
};

$(document).ready(imceInline.initiate);
;// $Id: jquery.form.js,v 1.2 2007/11/19 10:05:48 goba Exp $

/*
 * jQuery Form Plugin
 * version: 2.01 (10/31/2007)
 * @requires jQuery v1.1 or later
 *
 * Examples at: http://malsup.com/jquery/form/
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(5($){$.7.1j=5(o){2(P o==\'5\')o={L:o};o=$.2h({1h:4.X(\'2i\')||1E.2u.3D(),I:4.X(\'2g\')||\'29\'},o||{});3 p={};$.M.N(\'R.2P.2L\',[4,o,p]);2(p.1Q)6 4;3 a=4.1z(o.2r);2(o.V){H(3 n 3u o.V)a.C({z:n,A:o.V[n]})}2(o.28&&o.28(a,4,o)===E)6 4;$.M.N(\'R.K.36\',[a,4,o,p]);2(p.1Q)6 4;3 q=$.1x(a);2(o.I.31()==\'29\'){o.1h+=(o.1h.2Z(\'?\')>=0?\'&\':\'?\')+q;o.V=B}8 o.V=q;3 r=4,U=[];2(o.1r)U.C(5(){r.1r()});2(o.1o)U.C(5(){r.1o()});2(!o.18&&o.14){3 u=o.L||5(){};U.C(5(a){2(4.1N)$(o.14).X("1M",a).1N().D(u,1L);8 $(o.14).2t(a).D(u,1L)})}8 2(o.L)U.C(o.L);o.L=5(a,b){H(3 i=0,F=U.G;i<F;i++)U[i](a,b,r)};3 v=$(\'19:3v\',4).15();3 w=E;H(3 j=0;j<v.G;j++)2(v[j])w=T;2(o.2f||w){2($.1i.3o&&o.2a)$.3l(o.2a,1l);8 1l()}8 $.3h(o);$.M.N(\'R.K.3f\',[4,o]);6 4;5 1l(){3 d=r[0];3 f=$.2h({},$.39,o);3 h=\'35\'+$.7.1j.1a++;3 i=$(\'<2f 33="\'+h+\'" z="\'+h+\'" />\');3 j=i[0];3 k=$.1i.20&&1E.20.30()<9;2($.1i.1X||k)j.2Y=\'2W:E;1w.2U("");\';i.2S({2R:\'2Q\',23:\'-24\',1R:\'-24\'});3 l={Z:B,1b:B,2K:0,2J:\'n/a\',2H:5(){},2F:5(){},2E:5(){}};3 g=f.2B;2(g&&!$.1O++)$.M.N("2x");2(g)$.M.N("2w",[l,f]);3 m=0;3 n=0;1f(5(){i.2v(\'1n\');j.1K?j.1K(\'1J\',12):j.2s(\'1I\',12,E);3 a=d.1H?\'1H\':\'2q\';3 t=r.X(\'14\');r.X({14:h,2g:\'3C\',2i:f.1h});d[a]=\'3B/R-V\';2(f.1G)1f(5(){n=T;12()},f.1G);d.K();r.X(\'14\',t)},10);5 12(){2(m++)6;j.2o?j.2o(\'1J\',12):j.3A(\'1I\',12,E);3 a=T;3z{2(n)3x\'1G\';3 b,O;O=j.2n?j.2n.1w:j.2l?j.2l:j.1w;l.Z=O.1n?O.1n.1M:B;l.1b=O.2k?O.2k:O;2(f.18==\'2j\'||f.18==\'3s\'){3 c=O.1D(\'1C\')[0];b=c?c.A:l.Z;2(f.18==\'2j\')3r("V = "+b);8 $.3q(b)}8 2(f.18==\'2m\'){b=l.1b;2(!b&&l.Z!=B)b=2d(l.Z)}8{b=l.Z}}3p(e){a=E;$.3n(f,l,\'2b\',e)}2(a){f.L(b,\'L\');2(g)$.M.N("3m",[l,f])}2(g)$.M.N("3k",[l,f]);2(g&&!--$.1O)$.M.N("3j");2(f.27)f.27(l,a?\'L\':\'2b\');1f(5(){i.3i();l.1b=B},3g)};5 2d(s,a){2(1E.26){a=25 26(\'3d.3c\');a.3b=\'E\';a.3a(s)}8 a=(25 38()).37(s,\'1A/2m\');6(a&&a.22&&a.22.1e!=\'34\')?a:B}}};$.7.1j.1a=0;$.7.W=5(a){6 4.21().K(1m).D(5(){4.1u=$.7.W.1a++;$.7.W.1t[4.1u]=a;$(":K,19:Y",4).1Z(1s)})};$.7.W.1a=1;$.7.W.1t={};5 1s(e){3 a=4.R;a.Q=4;2(4.I==\'Y\'){2(e.1Y!=S){a.11=e.1Y;a.16=e.2X}8 2(P $.7.1U==\'5\'){3 b=$(4).1U();a.11=e.1V-b.1R;a.16=e.1W-b.23}8{a.11=e.1V-4.2V;a.16=e.1W-4.32}}1f(5(){a.Q=a.11=a.16=B},10)};5 1m(){3 a=4.1u;3 b=$.7.W.1t[a];$(4).1j(b);6 E};$.7.21=5(){4.1T(\'K\',1m);6 4.D(5(){$(":K,19:Y",4).1T(\'1Z\',1s)})};$.7.1z=5(b){3 a=[];2(4.G==0)6 a;3 c=4[0];3 d=b?c.1D(\'*\'):c.2T;2(!d)6 a;H(3 i=0,F=d.G;i<F;i++){3 e=d[i];3 n=e.z;2(!n)1v;2(b&&c.Q&&e.I=="Y"){2(!e.1d&&c.Q==e)a.C({z:n+\'.x\',A:c.11},{z:n+\'.y\',A:c.16});1v}3 v=$.15(e,T);2(v&&v.1c==1g){H(3 j=0,1S=v.G;j<1S;j++)a.C({z:n,A:v[j]})}8 2(v!==B&&P v!=\'S\')a.C({z:n,A:v})}2(!b&&c.Q){3 f=c.1D("19");H(3 i=0,F=f.G;i<F;i++){3 g=f[i];3 n=g.z;2(n&&!g.1d&&g.I=="Y"&&c.Q==g)a.C({z:n+\'.x\',A:c.11},{z:n+\'.y\',A:c.16})}}6 a};$.7.2O=5(a){6 $.1x(4.1z(a))};$.7.2N=5(b){3 a=[];4.D(5(){3 n=4.z;2(!n)6;3 v=$.15(4,b);2(v&&v.1c==1g){H(3 i=0,F=v.G;i<F;i++)a.C({z:n,A:v[i]})}8 2(v!==B&&P v!=\'S\')a.C({z:4.z,A:v})});6 $.1x(a)};$.7.15=5(a){H(3 b=[],i=0,F=4.G;i<F;i++){3 c=4[i];3 v=$.15(c,a);2(v===B||P v==\'S\'||(v.1c==1g&&!v.G))1v;v.1c==1g?$.3e(b,v):b.C(v)}6 b};$.15=5(b,c){3 n=b.z,t=b.I,13=b.1e.1F();2(P c==\'S\')c=T;2(c&&(!n||b.1d||t==\'17\'||t==\'2M\'||(t==\'1q\'||t==\'1B\')&&!b.1p||(t==\'K\'||t==\'Y\')&&b.R&&b.R.Q!=b||13==\'J\'&&b.1y==-1))6 B;2(13==\'J\'){3 d=b.1y;2(d<0)6 B;3 a=[],1k=b.2I;3 e=(t==\'J-2e\');3 f=(e?d+1:1k.G);H(3 i=(e?d:0);i<f;i++){3 g=1k[i];2(g.2c){3 v=$.1i.1X&&!(g.2G[\'A\'].3t)?g.1A:g.A;2(e)6 v;a.C(v)}}6 a}6 b.A};$.7.1o=5(){6 4.D(5(){$(\'19,J,1C\',4).2p()})};$.7.2p=$.7.2D=5(){6 4.D(5(){3 t=4.I,13=4.1e.1F();2(t==\'1A\'||t==\'3w\'||13==\'1C\')4.A=\'\';8 2(t==\'1q\'||t==\'1B\')4.1p=E;8 2(13==\'J\')4.1y=-1})};$.7.1r=5(){6 4.D(5(){2(P 4.17==\'5\'||(P 4.17==\'2C\'&&!4.17.3y))4.17()})};$.7.2A=5(b){2(b==S)b=T;6 4.D(5(){4.1d=!b})};$.7.J=5(b){2(b==S)b=T;6 4.D(5(){3 t=4.I;2(t==\'1q\'||t==\'1B\')4.1p=b;8 2(4.1e.1F()==\'1P\'){3 a=$(4).2z(\'J\');2(b&&a[0]&&a[0].I==\'J-2e\'){a.2y(\'1P\').J(E)}4.2c=b}})}})(3E);',62,227,'||if|var|this|function|return|fn|else|||||||||||||||||||||||||||name|value|null|push|each|false|max|length|for|type|select|submit|success|event|trigger|doc|typeof|clk|form|undefined|true|callbacks|data|ajaxForm|attr|image|responseText||clk_x|cb|tag|target|fieldValue|clk_y|reset|dataType|input|counter|responseXML|constructor|disabled|tagName|setTimeout|Array|url|browser|ajaxSubmit|ops|fileUpload|submitHandler|body|clearForm|checked|checkbox|resetForm|clickHandler|optionHash|formPluginId|continue|document|param|selectedIndex|formToArray|text|radio|textarea|getElementsByTagName|window|toLowerCase|timeout|encoding|load|onload|attachEvent|arguments|innerHTML|evalScripts|active|option|veto|left|jmax|unbind|offset|pageX|pageY|msie|offsetX|click|opera|ajaxFormUnbind|documentElement|top|1000px|new|ActiveXObject|complete|beforeSubmit|GET|closeKeepAlive|error|selected|toXml|one|iframe|method|extend|action|json|XMLDocument|contentDocument|xml|contentWindow|detachEvent|clearFields|enctype|semantic|addEventListener|html|location|appendTo|ajaxSend|ajaxStart|find|parent|enable|global|object|clearInputs|setRequestHeader|getResponseHeader|attributes|getAllResponseHeaders|options|statusText|status|serialize|button|fieldSerialize|formSerialize|pre|absolute|position|css|elements|write|offsetLeft|javascript|offsetY|src|indexOf|version|toUpperCase|offsetTop|id|parsererror|jqFormIO|validate|parseFromString|DOMParser|ajaxSettings|loadXML|async|XMLDOM|Microsoft|merge|notify|100|ajax|remove|ajaxStop|ajaxComplete|get|ajaxSuccess|handleError|safari|catch|globalEval|eval|script|specified|in|file|password|throw|nodeType|try|removeEventListener|multipart|POST|toString|jQuery'.split('|'),0,{}))
;// $Id: ahah.js,v 1.7.2.1 2008/02/11 14:46:27 goba Exp $

/**
 * Provides AJAX-like page updating via AHAH (Asynchronous HTML and HTTP).
 *
 * AHAH is a method of making a request via Javascript while viewing an HTML
 * page. The request returns a small chunk of HTML, which is then directly
 * injected into the page.
 *
 * Drupal uses this file to enhance form elements with #ahah[path] and
 * #ahah[wrapper] properties. If set, this file will automatically be included
 * to provide AHAH capabilities.
 */

/**
 * Attaches the ahah behavior to each ahah form element.
 */
Drupal.behaviors.ahah = function(context) {
  for (var base in Drupal.settings.ahah) {
    if (!$('#'+ base + '.ahah-processed').size()) {
      var element_settings = Drupal.settings.ahah[base];

      $(element_settings.selector).each(function() {
        element_settings.element = this;
        var ahah = new Drupal.ahah(base, element_settings);
      });

      $('#'+ base).addClass('ahah-processed');
    }
  }
};

/**
 * AHAH object.
 */
Drupal.ahah = function(base, element_settings) {
  // Set the properties for this object.
  this.element = element_settings.element;
  this.selector = element_settings.selector;
  this.event = element_settings.event;
  this.keypress = element_settings.keypress;
  this.url = element_settings.url;
  this.wrapper = '#'+ element_settings.wrapper;
  this.effect = element_settings.effect;
  this.method = element_settings.method;
  this.progress = element_settings.progress;
  this.button = element_settings.button || { };

  if (this.effect == 'none') {
    this.showEffect = 'show';
    this.hideEffect = 'hide';
    this.showSpeed = '';
  }
  else if (this.effect == 'fade') {
    this.showEffect = 'fadeIn';
    this.hideEffect = 'fadeOut';
    this.showSpeed = 'slow';
  }
  else {
    this.showEffect = this.effect + 'Toggle';
    this.hideEffect = this.effect + 'Toggle';
    this.showSpeed = 'slow';
  }

  // Record the form action and target, needed for iFrame file uploads.
  var form = $(this.element).parents('form');
  this.form_action = form.attr('action');
  this.form_target = form.attr('target');
  this.form_encattr = form.attr('encattr');

  // Set the options for the ajaxSubmit function.
  // The 'this' variable will not persist inside of the options object.
  var ahah = this;
  var options = {
    url: ahah.url,
    data: ahah.button,
    beforeSubmit: function(form_values, element_settings, options) {
      return ahah.beforeSubmit(form_values, element_settings, options);
    },
    success: function(response, status) {
      // Sanity check for browser support (object expected).
      // When using iFrame uploads, responses must be returned as a string.
      if (typeof(response) == 'string') {
        response = Drupal.parseJson(response);
      }
      return ahah.success(response, status);
    },
    complete: function(response, status) {
      if (status == 'error' || status == 'parsererror') {
        return ahah.error(response, ahah.url);
      }
    },
    dataType: 'json',
    type: 'POST'
  };

  // Bind the ajaxSubmit function to the element event.
  $(element_settings.element).bind(element_settings.event, function() {
    $(element_settings.element).parents('form').ajaxSubmit(options);
    return false;
  });
  // If necessary, enable keyboard submission so that AHAH behaviors
  // can be triggered through keyboard input as well as e.g. a mousedown
  // action.
  if (element_settings.keypress) {
    $(element_settings.element).keypress(function(event) {
      // Detect enter key.
      if (event.keyCode == 13) {
        $(element_settings.element).trigger(element_settings.event);
        return false;
      }
    });
  }
};

/**
 * Handler for the form redirection submission.
 */
Drupal.ahah.prototype.beforeSubmit = function (form_values, element, options) {
  // Disable the element that received the change.
  $(this.element).addClass('progress-disabled').attr('disabled', true);

  // Insert progressbar or throbber.
  if (this.progress.type == 'bar') {
    var progressBar = new Drupal.progressBar('ahah-progress-' + this.element.id, eval(this.progress.update_callback), this.progress.method, eval(this.progress.error_callback));
    if (this.progress.message) {
      progressBar.setProgress(-1, this.progress.message);
    }
    if (this.progress.url) {
      progressBar.startMonitoring(this.progress.url, this.progress.interval || 1500);
    }
    this.progress.element = $(progressBar.element).addClass('ahah-progress ahah-progress-bar');
    this.progress.object = progressBar;
    $(this.element).after(this.progress.element);
  }
  else if (this.progress.type == 'throbber') {
    this.progress.element = $('<div class="ahah-progress ahah-progress-throbber"><div class="throbber">&nbsp;</div></div>');
    if (this.progress.message) {
      $('.throbber', this.progress.element).after('<div class="message">' + this.progress.message + '</div>')
    }
    $(this.element).after(this.progress.element);
  }
};

/**
 * Handler for the form redirection completion.
 */
Drupal.ahah.prototype.success = function (response, status) {
  var wrapper = $(this.wrapper);
  var form = $(this.element).parents('form');
  // Manually insert HTML into the jQuery object, using $() directly crashes
  // Safari with long string lengths. http://dev.jquery.com/ticket/1152
  var new_content = $('<div></div>').html(response.data);

  // Restore the previous action and target to the form.
  form.attr('action', this.form_action);
  this.form_target ? form.attr('target', this.form_target) : form.removeAttr('target');
  this.form_encattr ? form.attr('target', this.form_encattr) : form.removeAttr('encattr');

  // Remove the progress element.
  if (this.progress.element) {
    $(this.progress.element).remove();
  }
  if (this.progress.object) {
    this.progress.object.stopMonitoring();
  }
  $(this.element).removeClass('progress-disabled').attr('disabled', false);

  // Add the new content to the page.
  Drupal.freezeHeight();
  if (this.method == 'replace') {
    wrapper.empty().append(new_content);
  }
  else {
    wrapper[this.method](new_content);
  }

  // Immediately hide the new content if we're using any effects.
  if (this.showEffect != 'show') {
    new_content.hide();
  }

  // Determine what effect use and what content will receive the effect, then
  // show the new content. For browser compatibility, Safari is excluded from
  // using effects on table rows.
  if (($.browser.safari && $("tr.ahah-new-content", new_content).size() > 0)) {
    new_content.show();
  }
  else if ($('.ahah-new-content', new_content).size() > 0) {
    $('.ahah-new-content', new_content).hide();
    new_content.show();
    $(".ahah-new-content", new_content)[this.showEffect](this.showSpeed);
  }
  else if (this.showEffect != 'show') {
    new_content[this.showEffect](this.showSpeed);
  }

  // Attach all javascript behaviors to the new content, if it was successfully
  // added to the page, this if statement allows #ahah[wrapper] to be optional.
  if (new_content.parents('html').length > 0) {
    Drupal.attachBehaviors(new_content);
  }

  Drupal.unfreezeHeight();
};

/**
 * Handler for the form redirection error.
 */
Drupal.ahah.prototype.error = function (response, uri) {
  alert(Drupal.ahahError(response, uri));
  // Resore the previous action and target to the form.
  $(this.element).parent('form').attr( { action: this.form_action, target: this.form_target} );
  // Remove the progress element.
  if (this.progress.element) {
    $(this.progress.element).remove();
  }
  if (this.progress.object) {
    this.progress.object.stopMonitoring();
  }
  // Undo hide.
  $(this.wrapper).show();
  // Re-enable the element.
  $(this.element).removeClass('progess-disabled').attr('disabled', false);
};
;
(function($){var PROP_NAME='datepicker';function Datepicker(){this.debug=false;this._curInst=null;this._disabledInputs=[];this._datepickerShowing=false;this._inDialog=false;this._mainDivId='ui-datepicker-div';this._inlineClass='ui-datepicker-inline';this._appendClass='ui-datepicker-append';this._triggerClass='ui-datepicker-trigger';this._dialogClass='ui-datepicker-dialog';this._promptClass='ui-datepicker-prompt';this._disableClass='ui-datepicker-disabled';this._unselectableClass='ui-datepicker-unselectable';this._currentClass='ui-datepicker-current-day';this.regional=[];this.regional['']={clearText:'Clear',clearStatus:'Erase the current date',closeText:'Close',closeStatus:'Close without change',prevText:'&#x3c;Prev',prevStatus:'Show the previous month',prevBigText:'&#x3c;&#x3c;',prevBigStatus:'Show the previous year',nextText:'Next&#x3e;',nextStatus:'Show the next month',nextBigText:'&#x3e;&#x3e;',nextBigStatus:'Show the next year',currentText:'Today',currentStatus:'Show the current month',monthNames:['January','February','March','April','May','June','July','August','September','October','November','December'],monthNamesShort:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],monthStatus:'Show a different month',yearStatus:'Show a different year',weekHeader:'Wk',weekStatus:'Week of the year',dayNames:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],dayNamesShort:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],dayNamesMin:['Su','Mo','Tu','We','Th','Fr','Sa'],dayStatus:'Set DD as first week day',dateStatus:'Select DD, M d',dateFormat:'mm/dd/yy',firstDay:0,initStatus:'Select a date',isRTL:false};this._defaults={showOn:'focus',showAnim:'show',showOptions:{},defaultDate:null,appendText:'',buttonText:'...',buttonImage:'',buttonImageOnly:false,closeAtTop:true,mandatory:false,hideIfNoPrevNext:false,navigationAsDateFormat:false,showBigPrevNext:false,gotoCurrent:false,changeMonth:true,changeYear:true,showMonthAfterYear:false,yearRange:'-10:+10',changeFirstDay:true,highlightWeek:false,showOtherMonths:false,showWeeks:false,calculateWeek:this.iso8601Week,shortYearCutoff:'+10',showStatus:false,statusForDate:this.dateStatus,minDate:null,maxDate:null,duration:'normal',beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,rangeSelect:false,rangeSeparator:' - ',altField:'',altFormat:''};$.extend(this._defaults,this.regional['']);this.dpDiv=$('<div id="'+this._mainDivId+'" style="display: none;"></div>');}
$.extend(Datepicker.prototype,{markerClassName:'hasDatepicker',log:function(){if(this.debug)
console.log.apply('',arguments);},setDefaults:function(settings){extendRemove(this._defaults,settings||{});return this;},_attachDatepicker:function(target,settings){var inlineSettings=null;for(attrName in this._defaults){var attrValue=target.getAttribute('date:'+attrName);if(attrValue){inlineSettings=inlineSettings||{};try{inlineSettings[attrName]=eval(attrValue);}catch(err){inlineSettings[attrName]=attrValue;}}}
var nodeName=target.nodeName.toLowerCase();var inline=(nodeName=='div'||nodeName=='span');if(!target.id)
target.id='dp'+(++this.uuid);var inst=this._newInst($(target),inline);inst.settings=$.extend({},settings||{},inlineSettings||{});if(nodeName=='input'){this._connectDatepicker(target,inst);}else if(inline){this._inlineDatepicker(target,inst);}},_newInst:function(target,inline){var id=target[0].id.replace(/([:\[\]\.])/g,'\\\\$1');return{id:id,input:target,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:inline,dpDiv:(!inline?this.dpDiv:$('<div class="'+this._inlineClass+'"></div>'))};},_connectDatepicker:function(target,inst){var input=$(target);if(input.hasClass(this.markerClassName))
return;var appendText=this._get(inst,'appendText');var isRTL=this._get(inst,'isRTL');if(appendText)
input[isRTL?'before':'after']('<span class="'+this._appendClass+'">'+appendText+'</span>');var showOn=this._get(inst,'showOn');if(showOn=='focus'||showOn=='both')
input.focus(this._showDatepicker);if(showOn=='button'||showOn=='both'){var buttonText=this._get(inst,'buttonText');var buttonImage=this._get(inst,'buttonImage');var trigger=$(this._get(inst,'buttonImageOnly')?$('<img/>').addClass(this._triggerClass).attr({src:buttonImage,alt:buttonText,title:buttonText}):$('<button type="button"></button>').addClass(this._triggerClass).html(buttonImage==''?buttonText:$('<img/>').attr({src:buttonImage,alt:buttonText,title:buttonText})));input[isRTL?'before':'after'](trigger);trigger.click(function(){if($.datepicker._datepickerShowing&&$.datepicker._lastInput==target)
$.datepicker._hideDatepicker();else
$.datepicker._showDatepicker(target);return false;});}
input.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).bind("setData.datepicker",function(event,key,value){inst.settings[key]=value;}).bind("getData.datepicker",function(event,key){return this._get(inst,key);});$.data(target,PROP_NAME,inst);},_inlineDatepicker:function(target,inst){var divSpan=$(target);if(divSpan.hasClass(this.markerClassName))
return;divSpan.addClass(this.markerClassName).append(inst.dpDiv).bind("setData.datepicker",function(event,key,value){inst.settings[key]=value;}).bind("getData.datepicker",function(event,key){return this._get(inst,key);});$.data(target,PROP_NAME,inst);this._setDate(inst,this._getDefaultDate(inst));this._updateDatepicker(inst);},_inlineShow:function(inst){var numMonths=this._getNumberOfMonths(inst);inst.dpDiv.width(numMonths[1]*$('.ui-datepicker',inst.dpDiv[0]).width());},_dialogDatepicker:function(input,dateText,onSelect,settings,pos){var inst=this._dialogInst;if(!inst){var id='dp'+(++this.uuid);this._dialogInput=$('<input type="text" id="'+id+'" size="1" style="position: absolute; top: -100px;"/>');this._dialogInput.keydown(this._doKeyDown);$('body').append(this._dialogInput);inst=this._dialogInst=this._newInst(this._dialogInput,false);inst.settings={};$.data(this._dialogInput[0],PROP_NAME,inst);}
extendRemove(inst.settings,settings||{});this._dialogInput.val(dateText);this._pos=(pos?(pos.length?pos:[pos.pageX,pos.pageY]):null);if(!this._pos){var browserWidth=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;var browserHeight=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;var scrollX=document.documentElement.scrollLeft||document.body.scrollLeft;var scrollY=document.documentElement.scrollTop||document.body.scrollTop;this._pos=[(browserWidth/2)-100+scrollX,(browserHeight/2)-150+scrollY];}
this._dialogInput.css('left',this._pos[0]+'px').css('top',this._pos[1]+'px');inst.settings.onSelect=onSelect;this._inDialog=true;this.dpDiv.addClass(this._dialogClass);this._showDatepicker(this._dialogInput[0]);if($.blockUI)
$.blockUI(this.dpDiv);$.data(this._dialogInput[0],PROP_NAME,inst);return this;},_destroyDatepicker:function(target){var $target=$(target);if(!$target.hasClass(this.markerClassName)){return;}
var nodeName=target.nodeName.toLowerCase();$.removeData(target,PROP_NAME);if(nodeName=='input'){$target.siblings('.'+this._appendClass).remove().end().siblings('.'+this._triggerClass).remove().end().removeClass(this.markerClassName).unbind('focus',this._showDatepicker).unbind('keydown',this._doKeyDown).unbind('keypress',this._doKeyPress);}else if(nodeName=='div'||nodeName=='span')
$target.removeClass(this.markerClassName).empty();},_enableDatepicker:function(target){var $target=$(target);if(!$target.hasClass(this.markerClassName)){return;}
var nodeName=target.nodeName.toLowerCase();if(nodeName=='input'){target.disabled=false;$target.siblings('button.'+this._triggerClass).each(function(){this.disabled=false;}).end().siblings('img.'+this._triggerClass).css({opacity:'1.0',cursor:''});}
else if(nodeName=='div'||nodeName=='span'){$target.children('.'+this._disableClass).remove();}
this._disabledInputs=$.map(this._disabledInputs,function(value){return(value==target?null:value);});},_disableDatepicker:function(target){var $target=$(target);if(!$target.hasClass(this.markerClassName)){return;}
var nodeName=target.nodeName.toLowerCase();if(nodeName=='input'){target.disabled=true;$target.siblings('button.'+this._triggerClass).each(function(){this.disabled=true;}).end().siblings('img.'+this._triggerClass).css({opacity:'0.5',cursor:'default'});}
else if(nodeName=='div'||nodeName=='span'){var inline=$target.children('.'+this._inlineClass);var offset=inline.offset();var relOffset={left:0,top:0};inline.parents().each(function(){if($(this).css('position')=='relative'){relOffset=$(this).offset();return false;}});$target.prepend('<div class="'+this._disableClass+'" style="'+
($.browser.msie?'background-color: transparent; ':'')+'width: '+inline.width()+'px; height: '+inline.height()+'px; left: '+(offset.left-relOffset.left)+'px; top: '+(offset.top-relOffset.top)+'px;"></div>');}
this._disabledInputs=$.map(this._disabledInputs,function(value){return(value==target?null:value);});this._disabledInputs[this._disabledInputs.length]=target;},_isDisabledDatepicker:function(target){if(!target)
return false;for(var i=0;i<this._disabledInputs.length;i++){if(this._disabledInputs[i]==target)
return true;}
return false;},_getInst:function(target){try{return $.data(target,PROP_NAME);}
catch(err){throw'Missing instance data for this datepicker';}},_changeDatepicker:function(target,name,value){var settings=name||{};if(typeof name=='string'){settings={};settings[name]=value;}
var inst=this._getInst(target);if(inst){if(this._curInst==inst){this._hideDatepicker(null);}
extendRemove(inst.settings,settings);var date=new Date();extendRemove(inst,{rangeStart:null,endDay:null,endMonth:null,endYear:null,selectedDay:date.getDate(),selectedMonth:date.getMonth(),selectedYear:date.getFullYear(),currentDay:date.getDate(),currentMonth:date.getMonth(),currentYear:date.getFullYear(),drawMonth:date.getMonth(),drawYear:date.getFullYear()});this._updateDatepicker(inst);}},_refreshDatepicker:function(target){var inst=this._getInst(target);if(inst){this._updateDatepicker(inst);}},_setDateDatepicker:function(target,date,endDate){var inst=this._getInst(target);if(inst){this._setDate(inst,date,endDate);this._updateDatepicker(inst);this._updateAlternate(inst);}},_getDateDatepicker:function(target){var inst=this._getInst(target);if(inst&&!inst.inline)
this._setDateFromField(inst);return(inst?this._getDate(inst):null);},_doKeyDown:function(e){var inst=$.datepicker._getInst(e.target);var handled=true;if($.datepicker._datepickerShowing)
switch(e.keyCode){case 9:$.datepicker._hideDatepicker(null,'');break;case 13:$.datepicker._selectDay(e.target,inst.selectedMonth,inst.selectedYear,$('td.ui-datepicker-days-cell-over',inst.dpDiv)[0]);return false;break;case 27:$.datepicker._hideDatepicker(null,$.datepicker._get(inst,'duration'));break;case 33:$.datepicker._adjustDate(e.target,(e.ctrlKey?-$.datepicker._get(inst,'stepBigMonths'):-$.datepicker._get(inst,'stepMonths')),'M');break;case 34:$.datepicker._adjustDate(e.target,(e.ctrlKey?+$.datepicker._get(inst,'stepBigMonths'):+$.datepicker._get(inst,'stepMonths')),'M');break;case 35:if(e.ctrlKey)$.datepicker._clearDate(e.target);handled=e.ctrlKey;break;case 36:if(e.ctrlKey)$.datepicker._gotoToday(e.target);handled=e.ctrlKey;break;case 37:if(e.ctrlKey)$.datepicker._adjustDate(e.target,-1,'D');handled=e.ctrlKey;break;case 38:if(e.ctrlKey)$.datepicker._adjustDate(e.target,-7,'D');handled=e.ctrlKey;break;case 39:if(e.ctrlKey)$.datepicker._adjustDate(e.target,+1,'D');handled=e.ctrlKey;break;case 40:if(e.ctrlKey)$.datepicker._adjustDate(e.target,+7,'D');handled=e.ctrlKey;break;default:handled=false;}
else if(e.keyCode==36&&e.ctrlKey)
$.datepicker._showDatepicker(this);else
handled=false;if(handled){e.preventDefault();e.stopPropagation();}},_doKeyPress:function(e){var inst=$.datepicker._getInst(e.target);var chars=$.datepicker._possibleChars($.datepicker._get(inst,'dateFormat'));var chr=String.fromCharCode(e.charCode==undefined?e.keyCode:e.charCode);return e.ctrlKey||(chr<' '||!chars||chars.indexOf(chr)>-1);},_showDatepicker:function(input){input=input.target||input;if(input.nodeName.toLowerCase()!='input')
input=$('input',input.parentNode)[0];if($.datepicker._isDisabledDatepicker(input)||$.datepicker._lastInput==input)
return;var inst=$.datepicker._getInst(input);var beforeShow=$.datepicker._get(inst,'beforeShow');extendRemove(inst.settings,(beforeShow?beforeShow.apply(input,[input,inst]):{}));$.datepicker._hideDatepicker(null,'');$.datepicker._lastInput=input;$.datepicker._setDateFromField(inst);if($.datepicker._inDialog)
input.value='';if(!$.datepicker._pos){$.datepicker._pos=$.datepicker._findPos(input);$.datepicker._pos[1]+=input.offsetHeight;}
var isFixed=false;$(input).parents().each(function(){isFixed|=$(this).css('position')=='fixed';return!isFixed;});if(isFixed&&$.browser.opera){$.datepicker._pos[0]-=document.documentElement.scrollLeft;$.datepicker._pos[1]-=document.documentElement.scrollTop;}
var offset={left:$.datepicker._pos[0],top:$.datepicker._pos[1]};$.datepicker._pos=null;inst.rangeStart=null;inst.dpDiv.css({position:'absolute',display:'block',top:'-1000px'});$.datepicker._updateDatepicker(inst);inst.dpDiv.width($.datepicker._getNumberOfMonths(inst)[1]*$('.ui-datepicker',inst.dpDiv[0])[0].offsetWidth);offset=$.datepicker._checkOffset(inst,offset,isFixed);inst.dpDiv.css({position:($.datepicker._inDialog&&$.blockUI?'static':(isFixed?'fixed':'absolute')),display:'none',left:offset.left+'px',top:offset.top+'px'});if(!inst.inline){var showAnim=$.datepicker._get(inst,'showAnim')||'show';var duration=$.datepicker._get(inst,'duration');var postProcess=function(){$.datepicker._datepickerShowing=true;if($.browser.msie&&parseInt($.browser.version,10)<7)
$('iframe.ui-datepicker-cover').css({width:inst.dpDiv.width()+4,height:inst.dpDiv.height()+4});};if($.effects&&$.effects[showAnim])
inst.dpDiv.show(showAnim,$.datepicker._get(inst,'showOptions'),duration,postProcess);else
inst.dpDiv[showAnim](duration,postProcess);if(duration=='')
postProcess();if(inst.input[0].type!='hidden')
inst.input[0].focus();$.datepicker._curInst=inst;}},_updateDatepicker:function(inst){var dims={width:inst.dpDiv.width()+4,height:inst.dpDiv.height()+4};inst.dpDiv.empty().append(this._generateHTML(inst)).find('iframe.ui-datepicker-cover').css({width:dims.width,height:dims.height});var numMonths=this._getNumberOfMonths(inst);inst.dpDiv[(numMonths[0]!=1||numMonths[1]!=1?'add':'remove')+'Class']('ui-datepicker-multi');inst.dpDiv[(this._get(inst,'isRTL')?'add':'remove')+'Class']('ui-datepicker-rtl');if(inst.input&&inst.input[0].type!='hidden')
$(inst.input[0]).focus();},_checkOffset:function(inst,offset,isFixed){var pos=inst.input?this._findPos(inst.input[0]):null;var browserWidth=window.innerWidth||document.documentElement.clientWidth;var browserHeight=window.innerHeight||document.documentElement.clientHeight;var scrollX=document.documentElement.scrollLeft||document.body.scrollLeft;var scrollY=document.documentElement.scrollTop||document.body.scrollTop;if(this._get(inst,'isRTL')||(offset.left+inst.dpDiv.width()-scrollX)>browserWidth)
offset.left=Math.max((isFixed?0:scrollX),pos[0]+(inst.input?inst.input.width():0)-(isFixed?scrollX:0)-inst.dpDiv.width()-
(isFixed&&$.browser.opera?document.documentElement.scrollLeft:0));else
offset.left-=(isFixed?scrollX:0);if((offset.top+inst.dpDiv.height()-scrollY)>browserHeight)
offset.top=Math.max((isFixed?0:scrollY),pos[1]-(isFixed?scrollY:0)-(this._inDialog?0:inst.dpDiv.height())-
(isFixed&&$.browser.opera?document.documentElement.scrollTop:0));else
offset.top-=(isFixed?scrollY:0);return offset;},_findPos:function(obj){while(obj&&(obj.type=='hidden'||obj.nodeType!=1)){obj=obj.nextSibling;}
var position=$(obj).offset();return[position.left,position.top];},_hideDatepicker:function(input,duration){var inst=this._curInst;if(!inst||(input&&inst!=$.data(input,PROP_NAME)))
return;var rangeSelect=this._get(inst,'rangeSelect');if(rangeSelect&&inst.stayOpen)
this._selectDate('#'+inst.id,this._formatDate(inst,inst.currentDay,inst.currentMonth,inst.currentYear));inst.stayOpen=false;if(this._datepickerShowing){duration=(duration!=null?duration:this._get(inst,'duration'));var showAnim=this._get(inst,'showAnim');var postProcess=function(){$.datepicker._tidyDialog(inst);};if(duration!=''&&$.effects&&$.effects[showAnim])
inst.dpDiv.hide(showAnim,$.datepicker._get(inst,'showOptions'),duration,postProcess);else
inst.dpDiv[(duration==''?'hide':(showAnim=='slideDown'?'slideUp':(showAnim=='fadeIn'?'fadeOut':'hide')))](duration,postProcess);if(duration=='')
this._tidyDialog(inst);var onClose=this._get(inst,'onClose');if(onClose)
onClose.apply((inst.input?inst.input[0]:null),[(inst.input?inst.input.val():''),inst]);this._datepickerShowing=false;this._lastInput=null;inst.settings.prompt=null;if(this._inDialog){this._dialogInput.css({position:'absolute',left:'0',top:'-100px'});if($.blockUI){$.unblockUI();$('body').append(this.dpDiv);}}
this._inDialog=false;}
this._curInst=null;},_tidyDialog:function(inst){inst.dpDiv.removeClass(this._dialogClass).unbind('.ui-datepicker');$('.'+this._promptClass,inst.dpDiv).remove();},_checkExternalClick:function(event){if(!$.datepicker._curInst)
return;var $target=$(event.target);if(($target.parents('#'+$.datepicker._mainDivId).length==0)&&!$target.hasClass($.datepicker.markerClassName)&&!$target.hasClass($.datepicker._triggerClass)&&$.datepicker._datepickerShowing&&!($.datepicker._inDialog&&$.blockUI))
$.datepicker._hideDatepicker(null,'');},_adjustDate:function(id,offset,period){var target=$(id);var inst=this._getInst(target[0]);this._adjustInstDate(inst,offset,period);this._updateDatepicker(inst);},_gotoToday:function(id){var target=$(id);var inst=this._getInst(target[0]);if(this._get(inst,'gotoCurrent')&&inst.currentDay){inst.selectedDay=inst.currentDay;inst.drawMonth=inst.selectedMonth=inst.currentMonth;inst.drawYear=inst.selectedYear=inst.currentYear;}
else{var date=new Date();inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear();}
this._notifyChange(inst);this._adjustDate(target);},_selectMonthYear:function(id,select,period){var target=$(id);var inst=this._getInst(target[0]);inst._selectingMonthYear=false;inst['selected'+(period=='M'?'Month':'Year')]=inst['draw'+(period=='M'?'Month':'Year')]=parseInt(select.options[select.selectedIndex].value,10);this._notifyChange(inst);this._adjustDate(target);},_clickMonthYear:function(id){var target=$(id);var inst=this._getInst(target[0]);if(inst.input&&inst._selectingMonthYear&&!$.browser.msie)
inst.input[0].focus();inst._selectingMonthYear=!inst._selectingMonthYear;},_changeFirstDay:function(id,day){var target=$(id);var inst=this._getInst(target[0]);inst.settings.firstDay=day;this._updateDatepicker(inst);},_selectDay:function(id,month,year,td){if($(td).hasClass(this._unselectableClass))
return;var target=$(id);var inst=this._getInst(target[0]);var rangeSelect=this._get(inst,'rangeSelect');if(rangeSelect){inst.stayOpen=!inst.stayOpen;if(inst.stayOpen){$('.ui-datepicker td',inst.dpDiv).removeClass(this._currentClass);$(td).addClass(this._currentClass);}}
inst.selectedDay=inst.currentDay=$('a',td).html();inst.selectedMonth=inst.currentMonth=month;inst.selectedYear=inst.currentYear=year;if(inst.stayOpen){inst.endDay=inst.endMonth=inst.endYear=null;}
else if(rangeSelect){inst.endDay=inst.currentDay;inst.endMonth=inst.currentMonth;inst.endYear=inst.currentYear;}
this._selectDate(id,this._formatDate(inst,inst.currentDay,inst.currentMonth,inst.currentYear));if(inst.stayOpen){inst.rangeStart=new Date(inst.currentYear,inst.currentMonth,inst.currentDay);this._updateDatepicker(inst);}
else if(rangeSelect){inst.selectedDay=inst.currentDay=inst.rangeStart.getDate();inst.selectedMonth=inst.currentMonth=inst.rangeStart.getMonth();inst.selectedYear=inst.currentYear=inst.rangeStart.getFullYear();inst.rangeStart=null;if(inst.inline)
this._updateDatepicker(inst);}},_clearDate:function(id){var target=$(id);var inst=this._getInst(target[0]);if(this._get(inst,'mandatory'))
return;inst.stayOpen=false;inst.endDay=inst.endMonth=inst.endYear=inst.rangeStart=null;this._selectDate(target,'');},_selectDate:function(id,dateStr){var target=$(id);var inst=this._getInst(target[0]);dateStr=(dateStr!=null?dateStr:this._formatDate(inst));if(this._get(inst,'rangeSelect')&&dateStr)
dateStr=(inst.rangeStart?this._formatDate(inst,inst.rangeStart):dateStr)+this._get(inst,'rangeSeparator')+dateStr;if(inst.input)
inst.input.val(dateStr);this._updateAlternate(inst);var onSelect=this._get(inst,'onSelect');if(onSelect)
onSelect.apply((inst.input?inst.input[0]:null),[dateStr,inst]);else if(inst.input)
inst.input.trigger('change');if(inst.inline)
this._updateDatepicker(inst);else if(!inst.stayOpen){this._hideDatepicker(null,this._get(inst,'duration'));this._lastInput=inst.input[0];if(typeof(inst.input[0])!='object')
inst.input[0].focus();this._lastInput=null;}},_updateAlternate:function(inst){var altField=this._get(inst,'altField');if(altField){var altFormat=this._get(inst,'altFormat');var date=this._getDate(inst);dateStr=(isArray(date)?(!date[0]&&!date[1]?'':this.formatDate(altFormat,date[0],this._getFormatConfig(inst))+
this._get(inst,'rangeSeparator')+this.formatDate(altFormat,date[1]||date[0],this._getFormatConfig(inst))):this.formatDate(altFormat,date,this._getFormatConfig(inst)));$(altField).each(function(){$(this).val(dateStr);});}},noWeekends:function(date){var day=date.getDay();return[(day>0&&day<6),''];},iso8601Week:function(date){var checkDate=new Date(date.getFullYear(),date.getMonth(),date.getDate(),(date.getTimezoneOffset()/-60));var firstMon=new Date(checkDate.getFullYear(),1-1,4);var firstDay=firstMon.getDay()||7;firstMon.setDate(firstMon.getDate()+1-firstDay);if(firstDay<4&&checkDate<firstMon){checkDate.setDate(checkDate.getDate()-3);return $.datepicker.iso8601Week(checkDate);}else if(checkDate>new Date(checkDate.getFullYear(),12-1,28)){firstDay=new Date(checkDate.getFullYear()+1,1-1,4).getDay()||7;if(firstDay>4&&(checkDate.getDay()||7)<firstDay-3){return 1;}}
return Math.floor(((checkDate-firstMon)/86400000)/7)+1;},dateStatus:function(date,inst){return $.datepicker.formatDate($.datepicker._get(inst,'dateStatus'),date,$.datepicker._getFormatConfig(inst));},parseDate:function(format,value,settings){if(format==null||value==null)
throw'Invalid arguments';value=(typeof value=='object'?value.toString():value+'');if(value=='')
return null;var shortYearCutoff=(settings?settings.shortYearCutoff:null)||this._defaults.shortYearCutoff;var dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort;var dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames;var monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort;var monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames;var year=-1;var month=-1;var day=-1;var doy=-1;var literal=false;var lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);if(matches)
iFormat++;return matches;};var getNumber=function(match){lookAhead(match);var origSize=(match=='@'?14:(match=='y'?4:(match=='o'?3:2)));var size=origSize;var num=0;while(size>0&&iValue<value.length&&value.charAt(iValue)>='0'&&value.charAt(iValue)<='9'){num=num*10+parseInt(value.charAt(iValue++),10);size--;}
if(size==origSize)
throw'Missing number at position '+iValue;return num;};var getName=function(match,shortNames,longNames){var names=(lookAhead(match)?longNames:shortNames);var size=0;for(var j=0;j<names.length;j++)
size=Math.max(size,names[j].length);var name='';var iInit=iValue;while(size>0&&iValue<value.length){name+=value.charAt(iValue++);for(var i=0;i<names.length;i++)
if(name==names[i])
return i+1;size--;}
throw'Unknown name at position '+iInit;};var checkLiteral=function(){if(value.charAt(iValue)!=format.charAt(iFormat))
throw'Unexpected literal at position '+iValue;iValue++;};var iValue=0;for(var iFormat=0;iFormat<format.length;iFormat++){if(literal)
if(format.charAt(iFormat)=="'"&&!lookAhead("'"))
literal=false;else
checkLiteral();else
switch(format.charAt(iFormat)){case'd':day=getNumber('d');break;case'D':getName('D',dayNamesShort,dayNames);break;case'o':doy=getNumber('o');break;case'm':month=getNumber('m');break;case'M':month=getName('M',monthNamesShort,monthNames);break;case'y':year=getNumber('y');break;case'@':var date=new Date(getNumber('@'));year=date.getFullYear();month=date.getMonth()+1;day=date.getDate();break;case"'":if(lookAhead("'"))
checkLiteral();else
literal=true;break;default:checkLiteral();}}
if(year<100)
year+=new Date().getFullYear()-new Date().getFullYear()%100+
(year<=shortYearCutoff?0:-100);if(doy>-1){month=1;day=doy;do{var dim=this._getDaysInMonth(year,month-1);if(day<=dim)
break;month++;day-=dim;}while(true);}
var date=new Date(year,month-1,day);if(date.getFullYear()!=year||date.getMonth()+1!=month||date.getDate()!=day)
throw'Invalid date';return date;},ATOM:'yy-mm-dd',COOKIE:'D, dd M yy',ISO_8601:'yy-mm-dd',RFC_822:'D, d M y',RFC_850:'DD, dd-M-y',RFC_1036:'D, d M y',RFC_1123:'D, d M yy',RFC_2822:'D, d M yy',RSS:'D, d M y',TIMESTAMP:'@',W3C:'yy-mm-dd',formatDate:function(format,date,settings){if(!date)
return'';var dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort;var dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames;var monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort;var monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames;var lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);if(matches)
iFormat++;return matches;};var formatNumber=function(match,value,len){var num=''+value;if(lookAhead(match))
while(num.length<len)
num='0'+num;return num;};var formatName=function(match,value,shortNames,longNames){return(lookAhead(match)?longNames[value]:shortNames[value]);};var output='';var literal=false;if(date)
for(var iFormat=0;iFormat<format.length;iFormat++){if(literal)
if(format.charAt(iFormat)=="'"&&!lookAhead("'"))
literal=false;else
output+=format.charAt(iFormat);else
switch(format.charAt(iFormat)){case'd':output+=formatNumber('d',date.getDate(),2);break;case'D':output+=formatName('D',date.getDay(),dayNamesShort,dayNames);break;case'o':var doy=date.getDate();for(var m=date.getMonth()-1;m>=0;m--)
doy+=this._getDaysInMonth(date.getFullYear(),m);output+=formatNumber('o',doy,3);break;case'm':output+=formatNumber('m',date.getMonth()+1,2);break;case'M':output+=formatName('M',date.getMonth(),monthNamesShort,monthNames);break;case'y':output+=(lookAhead('y')?date.getFullYear():(date.getYear()%100<10?'0':'')+date.getYear()%100);break;case'@':output+=date.getTime();break;case"'":if(lookAhead("'"))
output+="'";else
literal=true;break;default:output+=format.charAt(iFormat);}}
return output;},_possibleChars:function(format){var chars='';var literal=false;for(var iFormat=0;iFormat<format.length;iFormat++)
if(literal)
if(format.charAt(iFormat)=="'"&&!lookAhead("'"))
literal=false;else
chars+=format.charAt(iFormat);else
switch(format.charAt(iFormat)){case'd':case'm':case'y':case'@':chars+='0123456789';break;case'D':case'M':return null;case"'":if(lookAhead("'"))
chars+="'";else
literal=true;break;default:chars+=format.charAt(iFormat);}
return chars;},_get:function(inst,name){return inst.settings[name]!==undefined?inst.settings[name]:this._defaults[name];},_setDateFromField:function(inst){var dateFormat=this._get(inst,'dateFormat');var dates=inst.input?inst.input.val().split(this._get(inst,'rangeSeparator')):null;inst.endDay=inst.endMonth=inst.endYear=null;var date=defaultDate=this._getDefaultDate(inst);if(dates.length>0){var settings=this._getFormatConfig(inst);if(dates.length>1){date=this.parseDate(dateFormat,dates[1],settings)||defaultDate;inst.endDay=date.getDate();inst.endMonth=date.getMonth();inst.endYear=date.getFullYear();}
try{date=this.parseDate(dateFormat,dates[0],settings)||defaultDate;}catch(e){this.log(e);date=defaultDate;}}
inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear();inst.currentDay=(dates[0]?date.getDate():0);inst.currentMonth=(dates[0]?date.getMonth():0);inst.currentYear=(dates[0]?date.getFullYear():0);this._adjustInstDate(inst);},_getDefaultDate:function(inst){var date=this._determineDate(this._get(inst,'defaultDate'),new Date());var minDate=this._getMinMaxDate(inst,'min',true);var maxDate=this._getMinMaxDate(inst,'max');date=(minDate&&date<minDate?minDate:date);date=(maxDate&&date>maxDate?maxDate:date);return date;},_determineDate:function(date,defaultDate){var offsetNumeric=function(offset){var date=new Date();date.setUTCDate(date.getUTCDate()+offset);return date;};var offsetString=function(offset,getDaysInMonth){var date=new Date();var year=date.getFullYear();var month=date.getMonth();var day=date.getDate();var pattern=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g;var matches=pattern.exec(offset);while(matches){switch(matches[2]||'d'){case'd':case'D':day+=parseInt(matches[1],10);break;case'w':case'W':day+=parseInt(matches[1],10)*7;break;case'm':case'M':month+=parseInt(matches[1],10);day=Math.min(day,getDaysInMonth(year,month));break;case'y':case'Y':year+=parseInt(matches[1],10);day=Math.min(day,getDaysInMonth(year,month));break;}
matches=pattern.exec(offset);}
return new Date(year,month,day);};date=(date==null?defaultDate:(typeof date=='string'?offsetString(date,this._getDaysInMonth):(typeof date=='number'?(isNaN(date)?defaultDate:offsetNumeric(date)):date)));return(date&&date.toString()=='Invalid Date'?defaultDate:date);},_setDate:function(inst,date,endDate){var clear=!(date);var origMonth=inst.selectedMonth;var origYear=inst.selectedYear;date=this._determineDate(date,new Date());inst.selectedDay=inst.currentDay=date.getDate();inst.drawMonth=inst.selectedMonth=inst.currentMonth=date.getMonth();inst.drawYear=inst.selectedYear=inst.currentYear=date.getFullYear();if(this._get(inst,'rangeSelect')){if(endDate){endDate=this._determineDate(endDate,null);inst.endDay=endDate.getDate();inst.endMonth=endDate.getMonth();inst.endYear=endDate.getFullYear();}else{inst.endDay=inst.currentDay;inst.endMonth=inst.currentMonth;inst.endYear=inst.currentYear;}}
if(origMonth!=inst.selectedMonth||origYear!=inst.selectedYear)
this._notifyChange(inst);this._adjustInstDate(inst);if(inst.input)
inst.input.val(clear?'':this._formatDate(inst)+
(!this._get(inst,'rangeSelect')?'':this._get(inst,'rangeSeparator')+
this._formatDate(inst,inst.endDay,inst.endMonth,inst.endYear)));},_getDate:function(inst){var startDate=(!inst.currentYear||(inst.input&&inst.input.val()=='')?null:new Date(inst.currentYear,inst.currentMonth,inst.currentDay));if(this._get(inst,'rangeSelect')){return[inst.rangeStart||startDate,(!inst.endYear?inst.rangeStart||startDate:new Date(inst.endYear,inst.endMonth,inst.endDay))];}else
return startDate;},_generateHTML:function(inst){var today=new Date();today=new Date(today.getFullYear(),today.getMonth(),today.getDate());var showStatus=this._get(inst,'showStatus');var initStatus=this._get(inst,'initStatus')||'&#xa0;';var isRTL=this._get(inst,'isRTL');var clear=(this._get(inst,'mandatory')?'':'<div class="ui-datepicker-clear"><a onclick="jQuery.datepicker._clearDate(\'#'+inst.id+'\');"'+
this._addStatus(showStatus,inst.id,this._get(inst,'clearStatus'),initStatus)+'>'+
this._get(inst,'clearText')+'</a></div>');var controls='<div class="ui-datepicker-control">'+(isRTL?'':clear)+'<div class="ui-datepicker-close"><a onclick="jQuery.datepicker._hideDatepicker();"'+
this._addStatus(showStatus,inst.id,this._get(inst,'closeStatus'),initStatus)+'>'+
this._get(inst,'closeText')+'</a></div>'+(isRTL?clear:'')+'</div>';var prompt=this._get(inst,'prompt');var closeAtTop=this._get(inst,'closeAtTop');var hideIfNoPrevNext=this._get(inst,'hideIfNoPrevNext');var navigationAsDateFormat=this._get(inst,'navigationAsDateFormat');var showBigPrevNext=this._get(inst,'showBigPrevNext');var numMonths=this._getNumberOfMonths(inst);var showCurrentAtPos=this._get(inst,'showCurrentAtPos');var stepMonths=this._get(inst,'stepMonths');var stepBigMonths=this._get(inst,'stepBigMonths');var isMultiMonth=(numMonths[0]!=1||numMonths[1]!=1);var currentDate=(!inst.currentDay?new Date(9999,9,9):new Date(inst.currentYear,inst.currentMonth,inst.currentDay));var minDate=this._getMinMaxDate(inst,'min',true);var maxDate=this._getMinMaxDate(inst,'max');var drawMonth=inst.drawMonth-showCurrentAtPos;var drawYear=inst.drawYear;if(drawMonth<0){drawMonth+=12;drawYear--;}
if(maxDate){var maxDraw=new Date(maxDate.getFullYear(),maxDate.getMonth()-numMonths[1]+1,maxDate.getDate());maxDraw=(minDate&&maxDraw<minDate?minDate:maxDraw);while(new Date(drawYear,drawMonth,1)>maxDraw){drawMonth--;if(drawMonth<0){drawMonth=11;drawYear--;}}}
var prevText=this._get(inst,'prevText');prevText=(!navigationAsDateFormat?prevText:this.formatDate(prevText,new Date(drawYear,drawMonth-stepMonths,1),this._getFormatConfig(inst)));var prevBigText=(showBigPrevNext?this._get(inst,'prevBigText'):'');prevBigText=(!navigationAsDateFormat?prevBigText:this.formatDate(prevBigText,new Date(drawYear,drawMonth-stepBigMonths,1),this._getFormatConfig(inst)));var prev='<div class="ui-datepicker-prev">'+(this._canAdjustMonth(inst,-1,drawYear,drawMonth)?(showBigPrevNext?'<a onclick="jQuery.datepicker._adjustDate(\'#'+inst.id+'\', -'+stepBigMonths+', \'M\');"'+
this._addStatus(showStatus,inst.id,this._get(inst,'prevBigStatus'),initStatus)+'>'+prevBigText+'</a>':'')+'<a onclick="jQuery.datepicker._adjustDate(\'#'+inst.id+'\', -'+stepMonths+', \'M\');"'+
this._addStatus(showStatus,inst.id,this._get(inst,'prevStatus'),initStatus)+'>'+prevText+'</a>':(hideIfNoPrevNext?'':'<label>'+prevBigText+'</label><label>'+prevText+'</label>'))+'</div>';var nextText=this._get(inst,'nextText');nextText=(!navigationAsDateFormat?nextText:this.formatDate(nextText,new Date(drawYear,drawMonth+stepMonths,1),this._getFormatConfig(inst)));var nextBigText=(showBigPrevNext?this._get(inst,'nextBigText'):'');nextBigText=(!navigationAsDateFormat?nextBigText:this.formatDate(nextBigText,new Date(drawYear,drawMonth+stepBigMonths,1),this._getFormatConfig(inst)));var next='<div class="ui-datepicker-next">'+(this._canAdjustMonth(inst,+1,drawYear,drawMonth)?'<a onclick="jQuery.datepicker._adjustDate(\'#'+inst.id+'\', +'+stepMonths+', \'M\');"'+
this._addStatus(showStatus,inst.id,this._get(inst,'nextStatus'),initStatus)+'>'+nextText+'</a>'+
(showBigPrevNext?'<a onclick="jQuery.datepicker._adjustDate(\'#'+inst.id+'\', +'+stepBigMonths+', \'M\');"'+
this._addStatus(showStatus,inst.id,this._get(inst,'nextBigStatus'),initStatus)+'>'+nextBigText+'</a>':''):(hideIfNoPrevNext?'':'<label>'+nextText+'</label><label>'+nextBigText+'</label>'))+'</div>';var currentText=this._get(inst,'currentText');var gotoDate=(this._get(inst,'gotoCurrent')&&inst.currentDay?currentDate:today);currentText=(!navigationAsDateFormat?currentText:this.formatDate(currentText,gotoDate,this._getFormatConfig(inst)));var html=(prompt?'<div class="'+this._promptClass+'">'+prompt+'</div>':'')+
(closeAtTop&&!inst.inline?controls:'')+'<div class="ui-datepicker-links">'+(isRTL?next:prev)+
(this._isInRange(inst,gotoDate)?'<div class="ui-datepicker-current">'+'<a onclick="jQuery.datepicker._gotoToday(\'#'+inst.id+'\');"'+
this._addStatus(showStatus,inst.id,this._get(inst,'currentStatus'),initStatus)+'>'+
currentText+'</a></div>':'')+(isRTL?prev:next)+'</div>';var firstDay=this._get(inst,'firstDay');var changeFirstDay=this._get(inst,'changeFirstDay');var dayNames=this._get(inst,'dayNames');var dayNamesShort=this._get(inst,'dayNamesShort');var dayNamesMin=this._get(inst,'dayNamesMin');var monthNames=this._get(inst,'monthNames');var beforeShowDay=this._get(inst,'beforeShowDay');var highlightWeek=this._get(inst,'highlightWeek');var showOtherMonths=this._get(inst,'showOtherMonths');var showWeeks=this._get(inst,'showWeeks');var calculateWeek=this._get(inst,'calculateWeek')||this.iso8601Week;var weekStatus=this._get(inst,'weekStatus');var status=(showStatus?this._get(inst,'dayStatus')||initStatus:'');var dateStatus=this._get(inst,'statusForDate')||this.dateStatus;var endDate=inst.endDay?new Date(inst.endYear,inst.endMonth,inst.endDay):currentDate;for(var row=0;row<numMonths[0];row++)
for(var col=0;col<numMonths[1];col++){var selectedDate=new Date(drawYear,drawMonth,inst.selectedDay);html+='<div class="ui-datepicker-one-month'+(col==0?' ui-datepicker-new-row':'')+'">'+
this._generateMonthYearHeader(inst,drawMonth,drawYear,minDate,maxDate,selectedDate,row>0||col>0,showStatus,initStatus,monthNames)+'<table class="ui-datepicker" cellpadding="0" cellspacing="0"><thead>'+'<tr class="ui-datepicker-title-row">'+
(showWeeks?'<td'+this._addStatus(showStatus,inst.id,weekStatus,initStatus)+'>'+
this._get(inst,'weekHeader')+'</td>':'');for(var dow=0;dow<7;dow++){var day=(dow+firstDay)%7;var dayStatus=(status.indexOf('DD')>-1?status.replace(/DD/,dayNames[day]):status.replace(/D/,dayNamesShort[day]));html+='<td'+((dow+firstDay+6)%7>=5?' class="ui-datepicker-week-end-cell"':'')+'>'+
(!changeFirstDay?'<span':'<a onclick="jQuery.datepicker._changeFirstDay(\'#'+inst.id+'\', '+day+');"')+
this._addStatus(showStatus,inst.id,dayStatus,initStatus)+' title="'+dayNames[day]+'">'+
dayNamesMin[day]+(changeFirstDay?'</a>':'</span>')+'</td>';}
html+='</tr></thead><tbody>';var daysInMonth=this._getDaysInMonth(drawYear,drawMonth);if(drawYear==inst.selectedYear&&drawMonth==inst.selectedMonth)
inst.selectedDay=Math.min(inst.selectedDay,daysInMonth);var leadDays=(this._getFirstDayOfMonth(drawYear,drawMonth)-firstDay+7)%7;var tzDate=new Date(drawYear,drawMonth,1-leadDays);var utcDate=new Date(drawYear,drawMonth,1-leadDays);var printDate=utcDate;var numRows=(isMultiMonth?6:Math.ceil((leadDays+daysInMonth)/7));for(var dRow=0;dRow<numRows;dRow++){html+='<tr class="ui-datepicker-days-row">'+
(showWeeks?'<td class="ui-datepicker-week-col"'+
this._addStatus(showStatus,inst.id,weekStatus,initStatus)+'>'+
calculateWeek(printDate)+'</td>':'');for(var dow=0;dow<7;dow++){var daySettings=(beforeShowDay?beforeShowDay.apply((inst.input?inst.input[0]:null),[printDate]):[true,'']);var otherMonth=(printDate.getMonth()!=drawMonth);var unselectable=otherMonth||!daySettings[0]||(minDate&&printDate<minDate)||(maxDate&&printDate>maxDate);html+='<td class="ui-datepicker-days-cell'+
((dow+firstDay+6)%7>=5?' ui-datepicker-week-end-cell':'')+
(otherMonth?' ui-datepicker-other-month':'')+
(printDate.getTime()==selectedDate.getTime()&&drawMonth==inst.selectedMonth?' ui-datepicker-days-cell-over':'')+
(unselectable?' '+this._unselectableClass:'')+
(otherMonth&&!showOtherMonths?'':' '+daySettings[1]+
(printDate.getTime()>=currentDate.getTime()&&printDate.getTime()<=endDate.getTime()?' '+this._currentClass:'')+
(printDate.getTime()==today.getTime()?' ui-datepicker-today':''))+'"'+
((!otherMonth||showOtherMonths)&&daySettings[2]?' title="'+daySettings[2]+'"':'')+
(unselectable?(highlightWeek?' onmouseover="jQuery(this).parent().addClass(\'ui-datepicker-week-over\');"'+' onmouseout="jQuery(this).parent().removeClass(\'ui-datepicker-week-over\');"':''):' onmouseover="jQuery(this).addClass(\'ui-datepicker-days-cell-over\')'+
(highlightWeek?'.parent().addClass(\'ui-datepicker-week-over\')':'')+';'+
(!showStatus||(otherMonth&&!showOtherMonths)?'':'jQuery(\'#ui-datepicker-status-'+
inst.id+'\').html(\''+(dateStatus.apply((inst.input?inst.input[0]:null),[printDate,inst])||initStatus)+'\');')+'"'+' onmouseout="jQuery(this).removeClass(\'ui-datepicker-days-cell-over\')'+
(highlightWeek?'.parent().removeClass(\'ui-datepicker-week-over\')':'')+';'+
(!showStatus||(otherMonth&&!showOtherMonths)?'':'jQuery(\'#ui-datepicker-status-'+
inst.id+'\').html(\''+initStatus+'\');')+'" onclick="jQuery.datepicker._selectDay(\'#'+
inst.id+'\','+drawMonth+','+drawYear+', this);"')+'>'+
(otherMonth?(showOtherMonths?printDate.getDate():'&#xa0;'):(unselectable?printDate.getDate():'<a>'+printDate.getDate()+'</a>'))+'</td>';tzDate.setDate(tzDate.getDate()+1);utcDate.setUTCDate(utcDate.getUTCDate()+1);printDate=(tzDate>utcDate?tzDate:utcDate);}
html+='</tr>';}
drawMonth++;if(drawMonth>11){drawMonth=0;drawYear++;}
html+='</tbody></table></div>';}
html+=(showStatus?'<div style="clear: both;"></div><div id="ui-datepicker-status-'+inst.id+'" class="ui-datepicker-status">'+initStatus+'</div>':'')+
(!closeAtTop&&!inst.inline?controls:'')+'<div style="clear: both;"></div>'+
($.browser.msie&&parseInt($.browser.version,10)<7&&!inst.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover"></iframe>':'');return html;},_generateMonthYearHeader:function(inst,drawMonth,drawYear,minDate,maxDate,selectedDate,secondary,showStatus,initStatus,monthNames){minDate=(inst.rangeStart&&minDate&&selectedDate<minDate?selectedDate:minDate);var showMonthAfterYear=this._get(inst,'showMonthAfterYear');var html='<div class="ui-datepicker-header">';var monthHtml='';if(secondary||!this._get(inst,'changeMonth'))
monthHtml+=monthNames[drawMonth]+'&#xa0;';else{var inMinYear=(minDate&&minDate.getFullYear()==drawYear);var inMaxYear=(maxDate&&maxDate.getFullYear()==drawYear);monthHtml+='<select class="ui-datepicker-new-month" '+'onchange="jQuery.datepicker._selectMonthYear(\'#'+inst.id+'\', this, \'M\');" '+'onclick="jQuery.datepicker._clickMonthYear(\'#'+inst.id+'\');"'+
this._addStatus(showStatus,inst.id,this._get(inst,'monthStatus'),initStatus)+'>';for(var month=0;month<12;month++){if((!inMinYear||month>=minDate.getMonth())&&(!inMaxYear||month<=maxDate.getMonth()))
monthHtml+='<option value="'+month+'"'+
(month==drawMonth?' selected="selected"':'')+'>'+monthNames[month]+'</option>';}
monthHtml+='</select>';}
if(!showMonthAfterYear)
html+=monthHtml;if(secondary||!this._get(inst,'changeYear'))
html+=drawYear;else{var years=this._get(inst,'yearRange').split(':');var year=0;var endYear=0;if(years.length!=2){year=drawYear-10;endYear=drawYear+10;}else if(years[0].charAt(0)=='+'||years[0].charAt(0)=='-'){year=endYear=new Date().getFullYear();year+=parseInt(years[0],10);endYear+=parseInt(years[1],10);}else{year=parseInt(years[0],10);endYear=parseInt(years[1],10);}
year=(minDate?Math.max(year,minDate.getFullYear()):year);endYear=(maxDate?Math.min(endYear,maxDate.getFullYear()):endYear);html+='<select class="ui-datepicker-new-year" '+'onchange="jQuery.datepicker._selectMonthYear(\'#'+inst.id+'\', this, \'Y\');" '+'onclick="jQuery.datepicker._clickMonthYear(\'#'+inst.id+'\');"'+
this._addStatus(showStatus,inst.id,this._get(inst,'yearStatus'),initStatus)+'>';for(;year<=endYear;year++){html+='<option value="'+year+'"'+
(year==drawYear?' selected="selected"':'')+'>'+year+'</option>';}
html+='</select>';}
if(showMonthAfterYear)
html+=monthHtml;html+='</div>';return html;},_addStatus:function(showStatus,id,text,initStatus){return(showStatus?' onmouseover="jQuery(\'#ui-datepicker-status-'+id+'\').html(\''+(text||initStatus)+'\');" '+'onmouseout="jQuery(\'#ui-datepicker-status-'+id+'\').html(\''+initStatus+'\');"':'');},_adjustInstDate:function(inst,offset,period){var year=inst.drawYear+(period=='Y'?offset:0);var month=inst.drawMonth+(period=='M'?offset:0);var day=Math.min(inst.selectedDay,this._getDaysInMonth(year,month))+
(period=='D'?offset:0);var date=new Date(year,month,day);var minDate=this._getMinMaxDate(inst,'min',true);var maxDate=this._getMinMaxDate(inst,'max');date=(minDate&&date<minDate?minDate:date);date=(maxDate&&date>maxDate?maxDate:date);inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear();if(period=='M'||period=='Y')
this._notifyChange(inst);},_notifyChange:function(inst){var onChange=this._get(inst,'onChangeMonthYear');if(onChange)
onChange.apply((inst.input?inst.input[0]:null),[inst.selectedYear,inst.selectedMonth+1,inst]);},_getNumberOfMonths:function(inst){var numMonths=this._get(inst,'numberOfMonths');return(numMonths==null?[1,1]:(typeof numMonths=='number'?[1,numMonths]:numMonths));},_getMinMaxDate:function(inst,minMax,checkRange){var date=this._determineDate(this._get(inst,minMax+'Date'),null);if(date){date.setHours(0);date.setMinutes(0);date.setSeconds(0);date.setMilliseconds(0);}
return(!checkRange||!inst.rangeStart?date:(!date||inst.rangeStart>date?inst.rangeStart:date));},_getDaysInMonth:function(year,month){return 32-new Date(year,month,32).getDate();},_getFirstDayOfMonth:function(year,month){return new Date(year,month,1).getDay();},_canAdjustMonth:function(inst,offset,curYear,curMonth){var numMonths=this._getNumberOfMonths(inst);var date=new Date(curYear,curMonth+(offset<0?offset:numMonths[1]),1);if(offset<0)
date.setDate(this._getDaysInMonth(date.getFullYear(),date.getMonth()));return this._isInRange(inst,date);},_isInRange:function(inst,date){var newMinDate=(!inst.rangeStart?null:new Date(inst.selectedYear,inst.selectedMonth,inst.selectedDay));newMinDate=(newMinDate&&inst.rangeStart<newMinDate?inst.rangeStart:newMinDate);var minDate=newMinDate||this._getMinMaxDate(inst,'min');var maxDate=this._getMinMaxDate(inst,'max');return((!minDate||date>=minDate)&&(!maxDate||date<=maxDate));},_getFormatConfig:function(inst){var shortYearCutoff=this._get(inst,'shortYearCutoff');shortYearCutoff=(typeof shortYearCutoff!='string'?shortYearCutoff:new Date().getFullYear()%100+parseInt(shortYearCutoff,10));return{shortYearCutoff:shortYearCutoff,dayNamesShort:this._get(inst,'dayNamesShort'),dayNames:this._get(inst,'dayNames'),monthNamesShort:this._get(inst,'monthNamesShort'),monthNames:this._get(inst,'monthNames')};},_formatDate:function(inst,day,month,year){if(!day){inst.currentDay=inst.selectedDay;inst.currentMonth=inst.selectedMonth;inst.currentYear=inst.selectedYear;}
var date=(day?(typeof day=='object'?day:new Date(year,month,day)):new Date(inst.currentYear,inst.currentMonth,inst.currentDay));return this.formatDate(this._get(inst,'dateFormat'),date,this._getFormatConfig(inst));}});function extendRemove(target,props){$.extend(target,props);for(var name in props)
if(props[name]==null||props[name]==undefined)
target[name]=props[name];return target;};function isArray(a){return(a&&(($.browser.safari&&typeof a=='object'&&a.length)||(a.constructor&&a.constructor.toString().match(/\Array\(\)/))));};$.fn.datepicker=function(options){if(!$.datepicker.initialized){$(document.body).append($.datepicker.dpDiv).mousedown($.datepicker._checkExternalClick);$.datepicker.initialized=true;}
var otherArgs=Array.prototype.slice.call(arguments,1);if(typeof options=='string'&&(options=='isDisabled'||options=='getDate'))
return $.datepicker['_'+options+'Datepicker'].apply($.datepicker,[this[0]].concat(otherArgs));return this.each(function(){typeof options=='string'?$.datepicker['_'+options+'Datepicker'].apply($.datepicker,[this].concat(otherArgs)):$.datepicker._attachDatepicker(this,options);});};$.datepicker=new Datepicker();$.datepicker.initialized=false;$.datepicker.uuid=new Date().getTime();})(jQuery);;/* http://keith-wood.name/timeEntry.html
   Time entry for jQuery v1.4.0.
   Written by Keith Wood (kbwood@virginbroadband.com.au) June 2007.
   Dual licensed under the GPL (http://dev.jquery.com/browser/trunk/jquery/GPL-LICENSE.txt) and 
   MIT (http://dev.jquery.com/browser/trunk/jquery/MIT-LICENSE.txt) licenses. 
   Please attribute the author if you use it. */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(q($){q 1n(){n.L=[];n.22=[];n.22[\'\']={1a:A,17:\':\',1m:\'\',T:[\'3T\',\'3L\'],2A:[\'3A\',\'4T 3m\',\'4y 3m\',\'4o\',\'4f\']};n.1k={2X:\'\',1x:A,25:[1,1,1],2K:0,2E:J,2s:w,3r:w,3p:w,3l:\'o.4x\',1C:[20,20,8],3a:A,2g:[47,43],2Z:w,2W:w};$.1h(n.1k,n.22[\'\'])}7 m=\'o\';$.1h(1n.2R,{1p:\'3P\',3K:q(a){1s(n.1k,a||{})},2H:q(b,c){7 d=$(b);p(d.2q(\'.\'+n.1p)){t}7 e={};e.1f=$.1h({},c);e.I=0;e.V=0;e.Z=0;e.u=0;e.v=$(b);$.x(b,m,e);7 f=n.r(e,\'3l\');7 g=n.r(e,\'4v\');7 h=n.r(e,\'1C\');7 i=n.r(e,\'2X\');7 j=(!f?w:$(\'<Y 2j="4i" 4e="\'+e.4c+\'" 4a="49: 45-44; 31: 42(\\\'\'+f+\'\\\') 0 0 41-3Z; \'+\'3Y: \'+h[0]+\'1j; 3W: \'+h[1]+\'1j;\'+($.D.27&&$.D.3U.3S(0,3)!=\'1.9\'?\' 2Q-1u: \'+h[0]+\'1j; 2Q-3Q: \'+(h[1]-18)+\'1j;\':\'\')+\'"></Y>\'));d.3N(\'<Y 2j="3J"></Y>\').2I(i?\'<Y 2j="3H">\'+i+\'</Y>\':\'\').2I(j||\'\');d.3F(n.1p).Q(\'1U.o\',n.1X).Q(\'2F.o\',n.2D).Q(\'2B.o\',n.2z).Q(\'2y.o\',n.2x).Q(\'2w.o\',n.2u);p($.D.27){d.Q(\'v.o\',q(a){$.2t.1v(e)})}p($.D.1i){d.Q(\'2V.o\',q(a){1Q(q(){$.2t.1v(e)},1)})}p(n.r(e,\'2E\')&&$.1P.1O){d.1O(n.2o)}p(j){j.3w(n.3t).3s(n.2n).3q(n.2n).4Q(n.3b)}},4N:q(a){n.2m(a,A)},4G:q(a){n.2m(a,J)},2m:q(b,c){7 d=$.x(b,m);p(!d){t}b.3k=c;p(b.2k&&b.2k.1E.1o()==\'Y\'){$.o.1D(d,b.2k,(c?5:-1))}$.o.L=$.3f($.o.L,q(a){t(a==b?w:a)});p(c){$.o.L[$.o.L.C]=b}},1F:q(a){16(7 i=0;i<n.L.C;i++){p(n.L[i]==a){t J}}t A},4t:q(a,b){7 c=$.x(a,m);p(c){7 d=n.1B(c);1s(c.1f,b||{});p(d){n.R(c,E G(0,0,0,d[0],d[1],d[2]))}}$.x(a,m,c)},4l:q(b){$v=$(b);p(!$v.2q(\'.\'+n.1p)){t}$v.4k(n.1p).X(\'1U.o\').X(\'2F.o\').X(\'2B.o\').X(\'2y.o\').X(\'2w.o\');p($.D.27){$v.X(\'v.o\')}p($.D.1i){$v.X(\'2V.o\')}p($.1P.1O){$v.4j()}n.L=$.3f(n.L,q(a){t(a==b?w:a)});b.1A.1A.4h(b,b.1A);$.4g(b,m)},4d:q(a,b){7 c=$.x(a,m);p(c){n.R(c,b?(1l b==\'4b\'?E G(b.2h()):b):w)}},34:q(a){7 b=$.x(a,m);7 c=(b?n.1B(b):w);t(!c?w:E G(0,0,0,c[0],c[1],c[2]))},1X:q(a){7 b=(a.1E&&a.1E.1o()==\'v\'?a:n);p($.o.P==b){t}p($.o.1F(b)){t}7 c=$.x(b,m);$.o.2f=J;$.o.P=b;$.o.13=w;7 d=$.o.r(c,\'2Z\');1s(c.1f,(d?d.1z(b,[b]):{}));$.x(b,m,c);$.o.1v(c)},2D:q(a){$.o.13=$.o.P;$.o.P=w},2z:q(a){7 b=a.1b;7 c=$.x(b,m);p(!$.o.2f){7 d=$.o.r(c,\'17\').C+2;c.u=0;p($.D.1i){7 e=b.2e;7 f=a.32+2d.2c.1y-$(a.30).2Y().1u;16(7 g=0;g<=F.14(1,c.O,c.B);g++){7 h=(g!=c.B?(g*d)+2:(c.B*d)+$.o.r(c,\'1m\').C+$.o.r(c,\'T\')[0].C);b.2e=e.15(0,h);7 i=b.29();p(f<i.3X){c.u=g;z}}b.2e=e}K{16(7 g=0;g<=F.14(1,c.O,c.B);g++){7 j=(g!=c.B?(g*d)+2:(c.B*d)+$.o.r(c,\'1m\').C+$.o.r(c,\'T\')[0].C);p(b.3V<j){c.u=g;z}}}}$.x(b,m,c);$.o.W(c);$.o.2f=A},2x:q(a){p(a.28>=48){t J}7 b=$.x(a.1b,m);26(a.28){y 9:t(a.3R?$.o.1w(b,J):$.o.1c(b,J));y 35:p(a.2S){$.o.1G(b,\'\')}K{b.u=F.14(1,b.O,b.B);$.o.N(b,0)}z;y 36:p(a.2S){$.o.R(b)}K{b.u=0;$.o.N(b,0)}z;y 37:$.o.1w(b,A);z;y 38:$.o.N(b,+1);z;y 39:$.o.1c(b,A);z;y 40:$.o.N(b,-1);z;y 46:$.o.1G(b,\'\');z}t A},2u:q(a){7 b=3O.3M(a.3u==3I?a.28:a.3u);p(b<\' \'){t J}7 c=$.x(a.1b,m);$.o.2J(c,b);t A},2o:q(a,b){b=($.D.1R?-b/F.1N(b):b);7 c=$.x(a.1b,m);$.o.N(c,b);a.3G()},3b:q(a){7 b=$.o.1e(a);7 c=$.x(b.1S,m);b.3E=$.o.r(c,\'2A\')[$.o.1V(c,a)]},3t:q(a){7 b=$.o.1e(a);7 c=b.1S;p($.o.1F(c)){t}p(c==$.o.13){$.o.P=c;$.o.13=w}$.o.1d=A;7 d=$.x(c,m);$.o.1X(c);7 e=$.o.1V(d,a);$.o.1D(d,b,e);$.o.21(d,e);7 f=$.o.r(d,\'2g\');p(!$.o.1d&&e>=3&&f[0]){$.o.1Y=1Q(q(){$.o.1T(d,e)},f[0]);$(b).2G(\'3q\',$.o.1W).2G(\'3s\',$.o.1W)}},21:q(a,b){26(b){y 0:n.R(a);z;y 1:n.1w(a,A);z;y 2:n.1c(a,A);z;y 3:n.N(a,+1);z;y 4:n.N(a,-1);z}},1T:q(a,b){p($.o.1d){t}$.o.P=$.o.13;n.21(a,b);n.1Y=1Q(q(){$.o.1T(a,b)},n.r(a,\'2g\')[1])},1W:q(a){$.o.1d=J;3D($.o.1Y)},2n:q(a){$.o.1d=J;7 b=$.o.1e(a);7 c=b.1S;7 d=$.x(c,m);p(!$.o.1F(c)){$.o.1D(d,b,-1)}p(!$.D.1R){$.o.P=$.o.13}p($.o.P){$.o.W(d)}},1e:q(a){t(a.1b?a.1b:a.30)},1V:q(a,b){7 c=n.1e(b);7 d=($.D.1R||$.D.2C?$.o.2L(c):$(c).2Y());7 e=($.D.2C?$.o.2U(c):[2d.2c.1y,2d.2c.1Z]);7 f=n.r(a,\'3a\');7 g=(f?2O:b.32+e[0]-d.1u-($.D.1i?1:0));7 h=b.3C+e[1]-d.2M-($.D.1i?1:0);7 i=n.r(a,\'1C\');7 j=(f?2O:i[0]-g);7 k=i[1]-h;p(i[2]>0&&F.1N(g-j)<=i[2]&&F.1N(h-k)<=i[2]){t 0}7 l=F.2N(g,h,j,k);t(l==g?1:(l==j?2:(l==h?3:4)))},1D:q(a,b,c){$(b).2P(\'31-2v\',\'-\'+((c+1)*n.r(a,\'1C\')[0])+\'1j 3B\')},2L:q(a){7 b=1t=0;p(a.2T){b=a.2r;1t=a.3v;2i(a=a.2T){7 c=b;b+=a.2r;p(b<0){b=c}1t+=a.3v}}t{1u:b,2M:1t}},2U:q(a){7 b=A;$(a).3z().2p(q(){b|=$(n).2P(\'2v\')==\'3y\'});p(b){t[0,0]}7 c=a.1y;7 d=a.1Z;2i(a=a.1A){c+=a.1y||0;d+=a.1Z||0}t[c,d]},r:q(a,b){t(a.1f[b]!=w?a.1f[b]:$.o.1k[b])},1v:q(a){7 b=n.1B(a);7 c=n.r(a,\'1x\');p(b){a.I=b[0];a.V=b[1];a.Z=b[2]}K{7 d=n.1q(a);a.I=d[0];a.V=d[1];a.Z=(c?d[2]:0)}a.O=(c?2:-1);a.B=(n.r(a,\'1a\')?-1:(c?3:2));a.1g=\'\';a.u=F.14(0,F.2N(F.14(1,a.O,a.B),n.r(a,\'2K\')));p(a.v.U()!=\'\'){n.2a(a)}},1B:q(a){7 b=a.v.U();7 c=n.r(a,\'17\');7 d=b.3x(c);p(c==\'\'&&b!=\'\'){d[0]=b.15(0,2);d[1]=b.15(2,4);d[2]=b.15(4,6)}7 e=n.r(a,\'T\');7 f=n.r(a,\'1a\');p(d.C>=2){7 g=!f&&(b.33(e[0])>-1);7 h=!f&&(b.33(e[1])>-1);7 i=19(d[0],10);i=(2b(i)?0:i);i=((g||h)&&i==12?0:i)+(h?12:0);7 j=19(d[1],10);j=(2b(j)?0:j);7 k=(d.C>=3?19(d[2],10):0);k=(2b(k)||!n.r(a,\'1x\')?0:k);t n.1q(a,[i,j,k])}t w},1q:q(a,b){7 c=(b!=w);p(!c){7 d=n.1r(n.r(a,\'2s\'))||E G();b=[d.1M(),d.1L(),d.1K()]}7 e=A;7 f=n.r(a,\'25\');16(7 i=0;i<f.C;i++){p(e){b[i]=0}K p(f[i]>1){b[i]=F.4S(b[i]/f[i])*f[i];e=J}}t b},2a:q(a){7 b=n.r(a,\'1a\');7 c=n.r(a,\'17\');7 d=(n.1J(b?a.I:((a.I+11)%12)+1)+c+n.1J(a.V)+(n.r(a,\'1x\')?c+n.1J(a.Z):\'\')+(b?\'\':n.r(a,\'1m\')+n.r(a,\'T\')[(a.I<12?0:1)]));n.1G(a,d);n.W(a)},W:q(a){7 b=a.v[0];7 c=n.r(a,\'17\');7 d=c.C+2;7 e=(a.u!=a.B?(a.u*d):(a.B*d)-c.C+n.r(a,\'1m\').C);7 f=e+(a.u!=a.B?2:n.r(a,\'T\')[0].C);p(b.3o){b.3o(e,f)}K p(b.29){7 g=b.29();g.4P(\'3n\',e);g.4O(\'3n\',f-a.v.U().C);g.4M()}p(!b.3k){b.1U()}},1J:q(a){t(a<10?\'0\':\'\')+a},1G:q(a,b){a.v.U(b).4L(\'4K\')},1w:q(a,b){7 c=(a.v.U()==\'\'||a.u==0);p(!c){a.u--}n.W(a);a.1g=\'\';$.x(a.v[0],m,a);t(c&&b)},1c:q(a,b){7 c=(a.v.U()==\'\'||a.u==F.14(1,a.O,a.B));p(!c){a.u++}n.W(a);a.1g=\'\';$.x(a.v[0],m,a);t(c&&b)},N:q(a,b){p(a.v.U()==\'\'){b=0}7 c=n.r(a,\'25\');n.R(a,E G(0,0,0,a.I+(a.u==0?b*c[0]:0)+(a.u==a.B?b*12:0),a.V+(a.u==1?b*c[1]:0),a.Z+(a.u==a.O?b*c[2]:0)))},R:q(a,b){b=n.1r(b);7 c=n.1q(a,b?[b.1M(),b.1L(),b.1K()]:w);b=E G(0,0,0,c[0],c[1],c[2]);7 b=n.1H(b);7 d=n.1H(n.1r(n.r(a,\'3r\')));7 e=n.1H(n.1r(n.r(a,\'3p\')));b=(d&&b<d?d:(e&&b>e?e:b));7 f=n.r(a,\'2W\');p(f){b=f.1z(a.v[0],[n.34(a.v[0]),b,d,e])}a.I=b.1M();a.V=b.1L();a.Z=b.1K();n.2a(a);$.x(a.v[0],m,a)},1r:q(h){7 i=q(a){7 b=E G();b.4F(b.2h()+a*4E);t b};7 j=q(a){7 b=E G();7 c=b.1M();7 d=b.1L();7 e=b.1K();7 f=/([+-]?[0-9]+)\\s*(s|S|m|M|h|H)?/g;7 g=f.3j(a);2i(g){26(g[2]||\'s\'){y\'s\':y\'S\':e+=19(g[1]);z;y\'m\':y\'M\':d+=19(g[1]);z;y\'h\':y\'H\':c+=19(g[1]);z}g=f.3j(a)}b=E G(0,0,10,c,d,e,0);p(/^!/.4D(a)){p(b.3i()>10){b=E G(0,0,10,23,3h,3h)}K p(b.3i()<10){b=E G(0,0,10,0,0,0)}}t b};t(h?(1l h==\'2l\'?j(h):(1l h==\'4C\'?i(h):h)):w)},1H:q(a){p(!a){t w}a.4B(4A);a.4z(0);a.4w(0);t a},2J:q(a,b){p(b==n.r(a,\'17\')){n.1c(a,A)}K p(b>=\'0\'&&b<=\'9\'){7 c=(a.1g+b)*1;7 d=n.r(a,\'1a\');7 e=(a.u==0&&((d&&c<24)||(c>=1&&c<=12))?c+(!d&&a.I>=12?12:0):a.I);7 f=(a.u==1&&c<3e?c:a.V);7 g=(a.u==a.O&&c<3e?c:a.Z);7 h=n.1q(a,[e,f,g]);n.R(a,E G(0,0,0,h[0],h[1],h[2]));a.1g=b}K p(!n.r(a,\'1a\')){7 i=n.r(a,\'T\');p((b==i[0].15(0,1).1o()&&a.I>=12)||(b==i[1].15(0,1).1o()&&a.I<12)){7 j=a.u;a.u=a.B;n.N(a,+1);a.u=j;n.W(a)}}}});q 1s(a,b){$.1h(a,b);16(7 c 3g b){p(b[c]==w){a[c]=w}}t a}$.1P.o=q(d){7 e=4u.2R.4H.4I(4J,1);p(1l d==\'2l\'&&(d==\'4s\'||d==\'2h\')){t $.o[\'3d\'+d+\'1n\'].1z($.o,[n[0]].3c(e))}t n.2p(q(){7 a=n.1E.1o();p(a==\'v\'){p(1l d==\'2l\'){$.o[\'3d\'+d+\'1n\'].1z($.o,[n].3c(e))}K{7 b={};16(1I 3g $.o.1k){7 c=n.4r(\'4q:\'+1I);p(c){b=b||{};4p{b[1I]=4R(c)}4n(4m){b[1I]=c}}}$.o.2H(n,$.1h(b,d))}}})};$.o=E 1n()})(4U);',62,305,'|||||||var||||||||||||||||this|timeEntry|if|function|_get||return|_field|input|null|data|case|break|false|_ampmField|length|browser|new|Math|Date||_selectedHour|true|else|_disabledInputs||_adjustField|_secondField|_lastInput|bind|_setTime||ampmNames|val|_selectedMinute|_showField|unbind|span|_selectedSecond||||_blurredInput|max|substring|for|separator||parseInt|show24Hours|target|_nextField|_cancelled|_getSpinnerTarget|options|_lastChr|extend|msie|px|_defaults|typeof|ampmPrefix|TimeEntry|toLowerCase|markerClassName|_constrainTime|_determineTime|extendRemove|curTop|left|_parseTime|_previousField|showSeconds|scrollLeft|apply|parentNode|_extractTime|spinnerSize|_changeSpinner|nodeName|_isDisabledTimeEntry|_setValue|_normaliseTime|attrName|_formatNumber|getSeconds|getMinutes|getHours|abs|mousewheel|fn|setTimeout|opera|previousSibling|_repeatSpinner|focus|_getSpinnerRegion|_releaseSpinner|_doFocus|_timer|scrollTop||_actionSpinner|regional|||timeSteps|switch|mozilla|keyCode|createTextRange|_showTime|isNaN|documentElement|document|value|_focussed|spinnerRepeat|getTime|while|class|nextSibling|string|_enableDisable|_endSpinner|_doMouseWheel|each|is|offsetLeft|defaultTime|timeentry|_doKeyPress|position|keypress|_doKeyDown|keydown|_doClick|spinnerTexts|click|safari|_doBlur|useMouseWheel|blur|one|_connectTimeEntry|after|_handleKeyPress|initialField|_findPos|top|min|99|css|padding|prototype|ctrlKey|offsetParent|_findScroll|paste|beforeSetTime|appendText|offset|beforeShow|srcElement|background|clientX|indexOf|_getTimeTimeEntry||||||spinnerIncDecOnly|_describeSpinner|concat|_|60|map|in|59|getDate|exec|disabled|spinnerImage|field|character|setSelectionRange|maxTime|mouseout|minTime|mouseup|_handleSpinner|charCode|offsetTop|mousedown|split|fixed|parents|Now|0px|clientY|clearTimeout|title|addClass|preventDefault|timeEntry_append|undefined|timeEntry_wrap|setDefaults|PM|fromCharCode|wrap|String|hasTimeEntry|bottom|shiftKey|substr|AM|version|selectionStart|height|boundingWidth|width|repeat||no|url|250|block|inline||500||display|style|object|_id|_setTimeTimeEntry|_timeid|Decrement|removeData|replaceChild|timeEntry_control|unmousewheel|removeClass|_destroyTimeEntry|err|catch|Increment|try|time|getAttribute|isDisabled|_changeTimeEntry|Array|spinnerText|setDate|png|Next|setMonth|1900|setFullYear|number|test|1000|setTime|_disableTimeEntry|slice|call|arguments|change|trigger|select|_enableTimeEntry|moveEnd|moveStart|mousemove|eval|round|Previous|jQuery'.split('|'),0,{}));// $Id: date_popup.js,v 1.1.2.3 2009/01/12 17:23:25 karens Exp $

/**
 * Attaches the calendar behavior to all required fields
 */
Drupal.behaviors.date_popup = function (context) {
  for (var id in Drupal.settings.datePopup) {
    $('#'+ id).bind('focus', Drupal.settings.datePopup[id], function(e) {
      if (!$(this).hasClass('date-popup-init')) {
        var datePopup = e.data;
        // Explicitely filter the methods we accept.
        switch (datePopup.func) {
          case 'datepicker':
            $(this)
              .datepicker(datePopup.settings)
              .addClass('date-popup-init')
              .focus();
            break;

          case 'timeEntry':
            $(this)
              .timeEntry(datePopup.settings)
              .addClass('date-popup-init')
              .focus();
            break;
        }
      }
    });
  }
};
;// $Id: location_autocomplete.js,v 1.3 2008/12/02 22:50:21 bdragon Exp $

/**
 * Twiddle the province autocomplete whenever the user changes the country.
 */
Drupal.behaviors.location = function(context) {
  $('select.location_auto_country:not(.location-processed)', context).change(function(e) {
    var obj = this;
    var input = null;
    var result = this.className.match(/(location_auto_join_[^ ]*)/);
    if (result) {
      input = $('.location_auto_province.' + result)
    }
    else {
      // No joining class found, fallback to searching the immediate area.
      input = $('.location_auto_province', $(this).parents('fieldset:first, .views-exposed-form:first'))
    }

    if (input && input.length) {
      //Unbind events on province field and empty its value
      input.unbind().val('');
      input.each(function(i) {
        //Get the (hidden) *-autocomplete input element
        var input_autocomplete = $('#' + this.id + '-autocomplete');
        // Update autocomplete url
        input_autocomplete.val(input_autocomplete.val().substr(0, input_autocomplete.val().lastIndexOf('/') + 1) + $(obj).val());
        // Mark as not processed.
        input_autocomplete.removeClass('autocomplete-processed');
      });
      // Reprocess.
      Drupal.behaviors.autocomplete(document);
    }
  }).addClass('location-processed');
};
;// $Id: progress.js,v 1.20 2008/01/04 11:53:21 goba Exp $

/**
 * A progressbar object. Initialized with the given id. Must be inserted into
 * the DOM afterwards through progressBar.element.
 *
 * method is the function which will perform the HTTP request to get the
 * progress bar state. Either "GET" or "POST".
 *
 * e.g. pb = new progressBar('myProgressBar');
 *      some_element.appendChild(pb.element);
 */
Drupal.progressBar = function (id, updateCallback, method, errorCallback) {
  var pb = this;
  this.id = id;
  this.method = method || "GET";
  this.updateCallback = updateCallback;
  this.errorCallback = errorCallback;

  this.element = document.createElement('div');
  this.element.id = id;
  this.element.className = 'progress';
  $(this.element).html('<div class="bar"><div class="filled"></div></div>'+
                       '<div class="percentage"></div>'+
                       '<div class="message">&nbsp;</div>');
};

/**
 * Set the percentage and status message for the progressbar.
 */
Drupal.progressBar.prototype.setProgress = function (percentage, message) {
  if (percentage >= 0 && percentage <= 100) {
    $('div.filled', this.element).css('width', percentage +'%');
    $('div.percentage', this.element).html(percentage +'%');
  }
  $('div.message', this.element).html(message);
  if (this.updateCallback) {
    this.updateCallback(percentage, message, this);
  }
};

/**
 * Start monitoring progress via Ajax.
 */
Drupal.progressBar.prototype.startMonitoring = function (uri, delay) {
  this.delay = delay;
  this.uri = uri;
  this.sendPing();
};

/**
 * Stop monitoring progress via Ajax.
 */
Drupal.progressBar.prototype.stopMonitoring = function () {
  clearTimeout(this.timer);
  // This allows monitoring to be stopped from within the callback
  this.uri = null;
};

/**
 * Request progress data from server.
 */
Drupal.progressBar.prototype.sendPing = function () {
  if (this.timer) {
    clearTimeout(this.timer);
  }
  if (this.uri) {
    var pb = this;
    // When doing a post request, you need non-null data. Otherwise a
    // HTTP 411 or HTTP 406 (with Apache mod_security) error may result.
    $.ajax({
      type: this.method,
      url: this.uri,
      data: '',
      dataType: 'json',
      success: function (progress) {
        // Display errors
        if (progress.status == 0) {
          pb.displayError(progress.data);
          return;
        }
        // Update display
        pb.setProgress(progress.percentage, progress.message);
        // Schedule next timer
        pb.timer = setTimeout(function() { pb.sendPing(); }, pb.delay);
      },
      error: function (xmlhttp) {
        pb.displayError(Drupal.ahahError(xmlhttp, pb.uri));
      }
    });
  }
};

/**
 * Display errors on the page.
 */
Drupal.progressBar.prototype.displayError = function (string) {
  var error = document.createElement('div');
  error.className = 'error';
  error.innerHTML = string;

  $(this.element).before(error).hide();

  if (this.errorCallback) {
    this.errorCallback(this);
  }
};
;/* $Id: webfm.js,v 1.30 2009/07/21 17:49:17 robmilne Exp $ */

/* namespace */
function Webfm() {}

/*
** Global variables
*/
//Translation possible by changing the array values (DO NOT ALTER KEYS!)
Webfm.js_msg = [];
Webfm.js_msg["mkdir"] = Drupal.t("Create New Dir");
Webfm.js_msg["file"] = Drupal.t("file");
Webfm.js_msg["dir"] = Drupal.t("directory");
Webfm.js_msg["u_file"] = Drupal.t("File");
Webfm.js_msg["u_dir"] = Drupal.t("Directory");
Webfm.js_msg["tree"] = Drupal.t("");
Webfm.js_msg["work"] = Drupal.t("Working... please wait");
Webfm.js_msg["refresh"] = Drupal.t("refresh");
Webfm.js_msg["sort"] = Drupal.t("sort by this column");
Webfm.js_msg["new-dir"] = Drupal.t("Create New Folder");
Webfm.js_msg["add-2-db"] = Drupal.t("Add files in this folder to database");
Webfm.js_msg["r-add-2-db"] = Drupal.t("Recursive add files to database");
Webfm.js_msg["column1"] = Drupal.t("Name");
Webfm.js_msg["column2"] = Drupal.t("Modified");
Webfm.js_msg["column3"] = Drupal.t("Size");
Webfm.js_msg["column4"] = Drupal.t("Owner");
Webfm.js_msg["attach-title"] = Drupal.t("Attached Files");
Webfm.js_msg["meta-title"] = Drupal.t("File Meta Data");
Webfm.js_msg["search-title"] = Drupal.t("File Search");
Webfm.js_msg["debug-title"] = Drupal.t("WebFM Debug");
Webfm.js_msg["cache-title"] = Drupal.t("Directory Cache");
Webfm.js_msg["search-cur"] = Drupal.t("Search current directory (see listing breadcrumb trail)");
Webfm.js_msg["no-match"] = Drupal.t("No match found");
Webfm.js_msg["search"] = Drupal.t("Search");
Webfm.js_msg["submit"] = Drupal.t("Submit");
Webfm.js_msg["reset"] = Drupal.t("Reset");
Webfm.js_msg["clear"] = Drupal.t("Clear");
Webfm.js_msg["cancel"] = Drupal.t("Cancel");
Webfm.js_msg["close"] = Drupal.t("Close");
Webfm.js_msg["resize"] = Drupal.t("Resize");
Webfm.js_msg["replace"] = Drupal.t("Replace and Version original copy of ");
Webfm.js_msg["replace-del"] = Drupal.t("Replace and Delete original copy of ");
Webfm.js_msg["no-replace"] = Drupal.t("Version new copy of ");
Webfm.js_msg["cache"] = Drupal.t("Cache Content");
Webfm.js_msg["curdir-undef"] = Drupal.t("current directory undefined");
Webfm.js_msg["ajax-err"] = Drupal.t("server is unreachable");
Webfm.js_msg["move-err"] = Drupal.t("move operation fail");
Webfm.js_msg["len-err"] = Drupal.t("Too long");
Webfm.js_msg["confirm-del0"] = Drupal.t("Do you want to delete the ");
Webfm.js_msg["confirm-del1"] = Drupal.t(" and all its contents");
Webfm.js_msg["confirm-det"] = Drupal.t("Do you want to detach ");
Webfm.js_msg["confirm-dbrem0"] = Drupal.t("Do you want to remove ");
Webfm.js_msg["confirm-dbrem1"] = Drupal.t(" from the database?\n     All metadata and attachments for this file will be lost");
Webfm.js_msg["enum_local"] = Drupal.t("Do you want to add all files of this directory into the database?");
Webfm.js_msg["enum_recur"] = Drupal.t("Do you want to add all files of this directory and sub-directories into the database?");
Webfm.js_msg["file-dwld"] = Drupal.t("download file");
Webfm.js_msg["no-file-dwld"] = Drupal.t("file not in database");
Webfm.js_msg["inserted"] = Drupal.t(" files inserted into db");
Webfm.js_msg["not-inserted"] = Drupal.t(" files failed to insert into db");
Webfm.js_msg["metadata"] = Drupal.t("Metadata");
Webfm.js_msg["fix_input"] = Drupal.t("correct input");
Webfm.js_msg["perm"] = Drupal.t("File Permissions");

Webfm.meta_msg = [];
Webfm.meta_msg["fid"] = Drupal.t("fid");
Webfm.meta_msg["uid"] = Drupal.t("uid");
Webfm.meta_msg["uname"] = Drupal.t("file owner");
Webfm.meta_msg["name"] = Drupal.t("name");
Webfm.meta_msg["title"] = Drupal.t("title");
Webfm.meta_msg["desc"] = Drupal.t("description");
Webfm.meta_msg["lang"] = Drupal.t("language");
Webfm.meta_msg["pub"] = Drupal.t("publisher");
Webfm.meta_msg["format"] = Drupal.t("format");
Webfm.meta_msg["ver"] = Drupal.t("version");
Webfm.meta_msg["type"] = Drupal.t("image type");
Webfm.meta_msg["width"] = Drupal.t("width");
Webfm.meta_msg["height"] = Drupal.t("height");
Webfm.meta_msg["dl_cnt"] = Drupal.t("downloads");
Webfm.meta_msg["link"] = Drupal.t("link");

Webfm.perm_msg = [];
Webfm.perm_msg["pub_view"] = Drupal.t("Public download");
Webfm.perm_msg["rol_view"] = Drupal.t("Role View/Download");
Webfm.perm_msg["rol_att"] = Drupal.t("Role Attach");
Webfm.perm_msg["rol_full"] = Drupal.t("Role Full Access");

Webfm.menu_msg = [];
Webfm.menu_msg["mkdir"] = Drupal.t("Create Subdirectory");
Webfm.menu_msg["rmdir"] = Drupal.t("Delete Directory");
Webfm.menu_msg["rm"] = Drupal.t("Delete File");
Webfm.menu_msg["rendir"] = Drupal.t("Rename Directory");
Webfm.menu_msg["search"] = Drupal.t("Search Directory");
Webfm.menu_msg["ren"] = Drupal.t("Rename File");
Webfm.menu_msg["meta"] = Drupal.t("File meta data");
Webfm.menu_msg["att"] = Drupal.t("Attach to Node");
Webfm.menu_msg["det"] = Drupal.t("Detach from Node");
Webfm.menu_msg["dwnld"] = Drupal.t("Download as file");
Webfm.menu_msg["view"] = Drupal.t("View file");
Webfm.menu_msg["enum"] = Drupal.t("Add file to database");
Webfm.menu_msg["denum"] = Drupal.t("Remove file from database");
Webfm.menu_msg["perm"] = Drupal.t("File permissions");
Webfm.menu_msg["clip"] = Drupal.t("Copy link to clipboard");
Webfm.menu_msg["paste"] = Drupal.t("Paste link in editor window");
//Do not translate any code below this line

Webfm.current = null;

Webfm.dragCont = null;
Webfm.metaCont = null;
Webfm.contextCont = null;
Webfm.searchCont = null;
Webfm.debugCont = null
Webfm.viewCont = null;

Webfm.dragStart = null;
Webfm.dragging = false;
Webfm.oldOnContextMenu = null;

Webfm.activeDropCont = null;
Webfm.dropContainers = [];
Webfm.attachContainer = null;

Webfm.browser = null;
Webfm.menuHT = null;
Webfm.metadataHT = null;
Webfm.dirTreeObj = null;
Webfm.dirListObj = null;
Webfm.attachObj = null;
Webfm.alrtObj = null;
Webfm.contextMenuObj = null;
Webfm.progressObj = null;
Webfm.dbgObj = null;
Webfm.metaObj = null;
Webfm.searchObj = null;
Webfm.permObj = null;
Webfm.permKey = null;
Webfm.permHT = null;
Webfm.permInfoHT = null;

Webfm.renameActive = null;
Webfm.admin = false;

Webfm.zindex = 1000;
Webfm.scrollVal = null; // freeze scroll

Webfm.eventListeners = [];

//Name of node edit form hidden field where attached node list is populated by js
Webfm.attachFormInput = "edit-attachlist";

Webfm.icons = {
   epdf:"pdf", ephp:"php", ephps:"php", ephp4:"php", ephp5:"php", eswf:"swf",
   esfa:"swf", exls:"xls", edoc:"doc", ertf:"doc", ezip:"zip", erar:"zip",
   egz:"zip", e7z:"zip", etxt:"doc", echm:"hlp", ehlp:"hlp", enfo:"nfo",
   expi:"xpi", ec:"c", eh:"h", emp3:"mp3", ewav:"mp3", esnd:"mp3", einc:"cod",
   esql:"sql", edbf:"sql", ediz:"nfo", eion:"nfo", emod:"mp3", es3m:"mp3",
   eavi:"avi", empg:"avi", empeg:"avi", ewma:"mp3", ewmv:"avi", edwg:"dwg",
   ejpg:"i", ejpeg:"i", egif:"i", epng:"i", etiff:"i", ebmp:"i", eico:"i",
   eai:"ai", eskp:"skp", emov:"qt", epps:"pps", eppt:"pps"
};

Webfm.lastarea = null;

/*
** Functions
*/
if (Drupal.jsEnabled) {
  $(window).load(webfmLayout);
}

 /**
 * Remember last used textarea for inserting file hrefs.
 */
function webfmSetlast(){
  Webfm.lastarea = this;
}

/**
 * Determine browser
 */
Webfm.browserDetect = function() {
  this.isIE = false;
  this.isOP = false;
  var b = navigator.userAgent.toLowerCase();
  if (b.indexOf("msie") >= 0) {
    this.isIE = true;
  }
  if (b.indexOf("opera") >= 0) {
    this.isOP = true;
  }
}

/**
 * Hashtable (used by directory listing cache and metadata)
 */
Webfm.ht = function() {
  this.flush();
}

Webfm.ht.prototype.put = function(key, value) {
	if((key == null) || (value == null))
		throw "NullPointerException {" + key + "},{" + value + "}";

	this.hash[key] = value;
}

Webfm.ht.prototype.get = function(key) {
	return this.hash[key];
}

Webfm.ht.prototype.containsKey = function(key) {
  for(var i in this.hash) {
    if (i == key && this.hash[i] != null) {
      return true;
    }
  }
  return false;
}

Webfm.ht.prototype.remove = function(key) {
	if(this.hash[key]) {
	  this.hash[key] = null;
	  return true;
	}
	return false;
}

Webfm.ht.prototype.dump = function() {
  var values = new Array();
  for (var i in this.hash) {
    if (this.hash[i] != null)
      values.push(this.hash[i]);
    }
  return values;
}

Webfm.ht.prototype.flush = function() {
  this.hash = new Array();
}

/**
 * Hashable Hashtable (used by menus)
 */
Webfm.hht = function() {
  this.flush();
}

Webfm.hht.prototype.put = function(key, obj) {
	if((key == null) || (obj == null))
		throw "NullPointerException {" + key + "},{" + obj + "}";

	if(this.hash[key] == null) {
		this.keys[this.keys.length] = key;
		this.hash[key] = new Array();
  }

	// append new object to array
	this.hash[key].push(obj);
}

Webfm.hht.prototype.get = function(key) {
	return this.hash[key];
}

Webfm.hht.prototype.remove = function(key) {
	if(this.hash[key]) {
	  this.hash[key] = null;
	  return true;
	}
	return false;
}

Webfm.hht.prototype.removeSub = function(key, subkey) {
	if(this.hash[key][subkey]) {
	  this.hash[key][subkey] = null;
	  return true;
	}
	return false;
}

Webfm.hht.prototype.flush = function() {
  this.hash = new Array();
  this.keys = new Array();
}

//Webfm.metaElement objects have description/edit/max_size params
Webfm.metaElement = function(desc, edit, size) {
  this.desc = desc;
  this.edit = edit;
  this.size = size;
}

/**
 * Create Web File Manager at 'webfm' id anchor
 * ..or at node-edit 'webfm-inline' id anchor
 */
function webfmLayout() {
  // Initialize textarea for pasting file hrefs with the most often used
  // in case we try to paste before a textarea or -field was focussed.
  Webfm.lastarea = document.getElementById('edit-body');
  if (!Webfm.lastarea) {
  Webfm.lastarea = document.getElementById('edit-comment');
  }
  // Tell textareas and text fields to remember which one was last focussed.
  textareas = document.getElementsByTagName('textarea');
  i = textareas.length;
  while( i-- ) {
    textareas[i].onfocus = webfmSetlast;
  }
  textfields = document.getElementsByTagName('input');
  i = textfields.length;
  while( i-- ) {
    if (textfields[i].type=='text') {
      textfields[i].onfocus = webfmSetlast;
    }
  }

  var layoutDiv = '';
  layoutDiv = Webfm.$('webfm');

  if(layoutDiv) {
    Webfm.commonInterface(layoutDiv);

    //first param forces trees refresh
    //second param forces list refresh
    Webfm.dirTreeObj.fetch(true, true);
  } else {
    layoutDiv = Webfm.$('webfm-inline');

    if(layoutDiv) {
      Webfm.commonInterface(layoutDiv);

      //Add attach-list menu and attach option to listing menu
      try {
        Webfm.menuHT.put('file', new Webfm.menuElement(Webfm.menu_msg["att"], Webfm.menuAttach, Webfm.menuFidVal));
        Webfm.menuHT.put('det', new Webfm.menuElement(Webfm.menu_msg["meta"], Webfm.menuGetMeta, ''));
        Webfm.menuHT.put('det', new Webfm.menuElement(Webfm.menu_msg["det"], Webfm.menuDetach, ''));
        Webfm.menuHT.put('det', new Webfm.menuElement(Webfm.menu_msg["paste"], Webfm.menuPasteHref, ''));
      } catch(err) {
        alert("Menu Create err\n" + err);
      }

      // attach-list anchored to 'webfm-attach' div in webfm_form_alter()
      Webfm.attachObj = new Webfm.attach('webfm-attach');
      Webfm.attachObj.fetch();

      Webfm.dirTreeObj.fetch(true, true);
    }
  }
}

Webfm.commonInterface = function(parent) {
  Webfm.browser = new Webfm.browserDetect();

  //create the popup container for file/dir object draggables
  Webfm.dragCont = new Webfm.popup("webfm-dragCont");

  //create the popup container for image view
  Webfm.viewCont = new Webfm.popup("webfm-viewCont");

  //create context menu popup
  Webfm.oldOnContextMenu = document.body.oncontextmenu;
  Webfm.contextCont = new Webfm.popup("webfm-cxtCont");
  Webfm.contextMenuObj = new Webfm.context(Webfm.contextCont);

  //create metadata popup
  Webfm.metaCont = new Webfm.popup("webfm-paneCont");
  Webfm.metaObj = new Webfm.metadata(Webfm.metaCont, 440, 420);

  //create file permissions popup
  Webfm.permCont = new Webfm.popup("webfm-permCont");
  Webfm.permObj = new Webfm.perm(Webfm.permCont, 300, 200);

  //create search popup
  Webfm.searchCont = new Webfm.popup("webfm-searchCont");
  Webfm.searchObj = new Webfm.search(Webfm.searchCont, 280, 200);

  //create debug popup
  Webfm.debugCont = new Webfm.popup("webfm-debugCont");
  Webfm.dbgObj = new Webfm.debug(Webfm.debugCont, 800, 400);

  //build menu hashtable
  //global to allow external functions to push new menu elements into the menu array
  Webfm.menuHT = new Webfm.hht();
  try {
    Webfm.menuHT.put('root', new Webfm.menuElement(Webfm.menu_msg["mkdir"], Webfm.menuMkdir, Webfm.menuAdmin));
    Webfm.menuHT.put('root', new Webfm.menuElement(Webfm.menu_msg["search"], Webfm.menuSearch, ''));

    Webfm.menuHT.put('dir', new Webfm.menuElement(Webfm.menu_msg["mkdir"], Webfm.menuMkdir, Webfm.menuAdmin));
    Webfm.menuHT.put('dir', new Webfm.menuElement(Webfm.menu_msg["rmdir"], Webfm.menuRemove, Webfm.menuAdmin));
    Webfm.menuHT.put('dir', new Webfm.menuElement(Webfm.menu_msg["rendir"], Webfm.menuRename, Webfm.menuAdmin));
    Webfm.menuHT.put('dir', new Webfm.menuElement(Webfm.menu_msg["search"], Webfm.menuSearch, ''));

    Webfm.menuHT.put('file', new Webfm.menuElement(Webfm.menu_msg["rm"], Webfm.menuRemove, Webfm.menuFileUid));
    Webfm.menuHT.put('file', new Webfm.menuElement(Webfm.menu_msg["ren"], Webfm.menuRename, Webfm.menuRenFileUid));
    Webfm.menuHT.put('file', new Webfm.menuElement(Webfm.menu_msg["meta"], Webfm.menuGetMeta, Webfm.menuFidVal));
    Webfm.menuHT.put('file', new Webfm.menuElement(Webfm.menu_msg["view"], Webfm.menuView, ''));
    Webfm.menuHT.put('file', new Webfm.menuElement(Webfm.menu_msg["dwnld"], Webfm.menuDownload, Webfm.menuFidVal));
    Webfm.menuHT.put('file', new Webfm.menuElement(Webfm.menu_msg["enum"], Webfm.menuInsert, Webfm.menuAdminNoFidVal));
    Webfm.menuHT.put('file', new Webfm.menuElement(Webfm.menu_msg["denum"], Webfm.menuDbRem, Webfm.menuAdminFidVal));
    Webfm.menuHT.put('file', new Webfm.menuElement(Webfm.menu_msg["perm"], Webfm.menuGetPerm, Webfm.menuFilePerm));
    Webfm.menuHT.put('file', new Webfm.menuElement(Webfm.menu_msg["paste"], Webfm.menuPasteHref, ''));
    Webfm.menuHT.put('file', new Webfm.menuElement(Webfm.menu_msg["clip"], Webfm.menuPutLinkInClipboard, ''))
  } catch(err) {
    alert("Menu Create err\n" + err);
  }

  //build metadata hashtable
  //Webfm.metaElement objects have description/edit/max_size properties
  Webfm.metadataHT = new Webfm.ht();
  Webfm.metadataHT.put('id',new Webfm.metaElement(Webfm.meta_msg["fid"],   false,0  ));
  Webfm.metadataHT.put('u', new Webfm.metaElement(Webfm.meta_msg["uid"],   true, 10 ));
  Webfm.metadataHT.put('un',new Webfm.metaElement(Webfm.meta_msg["uname"], false,0  ));
  Webfm.metadataHT.put('n', new Webfm.metaElement(Webfm.meta_msg["name"],  false,0  ));
  Webfm.metadataHT.put('t', new Webfm.metaElement(Webfm.meta_msg["title"], true, 255));
  Webfm.metadataHT.put('d', new Webfm.metaElement(Webfm.meta_msg["desc"],  true, 256));
  Webfm.metadataHT.put('l', new Webfm.metaElement(Webfm.meta_msg["lang"],  true, 16 ));
  Webfm.metadataHT.put('p', new Webfm.metaElement(Webfm.meta_msg["pub"],   true, 255));
  Webfm.metadataHT.put('f', new Webfm.metaElement(Webfm.meta_msg["format"],true, 255));
  Webfm.metadataHT.put('v', new Webfm.metaElement(Webfm.meta_msg["ver"],   false,0  ));
  Webfm.metadataHT.put('i', new Webfm.metaElement(Webfm.meta_msg["type"],  false,0  ));
  Webfm.metadataHT.put('w', new Webfm.metaElement(Webfm.meta_msg["width"], false,0  ));
  Webfm.metadataHT.put('h', new Webfm.metaElement(Webfm.meta_msg["height"],false,0  ));
  Webfm.metadataHT.put('c', new Webfm.metaElement(Webfm.meta_msg["dl_cnt"],false,0  ));
  Webfm.metadataHT.put('lk', new Webfm.metaElement(Webfm.meta_msg["link"], false,0  ));

  //build permissions hashtable
  //key is permission bit, value is string
  Webfm.permInfoHT = new Webfm.ht();
  Webfm.permInfoHT.put("id", Webfm.meta_msg["fid"]);
  Webfm.permInfoHT.put("u", Webfm.meta_msg["uid"]);
  Webfm.permInfoHT.put("n", Webfm.meta_msg["name"]);
  Webfm.permKey = new Array('1', '2', '4', '8');
  Webfm.permHT = new Webfm.ht();
  Webfm.permHT.put('1', Webfm.perm_msg["pub_view"]);
  Webfm.permHT.put('2', Webfm.perm_msg["rol_view"]);
  Webfm.permHT.put('4', Webfm.perm_msg["rol_att"] );
  Webfm.permHT.put('8', Webfm.perm_msg["rol_full"]);

  var layout_cont = Webfm.ce('div');
  Webfm.alrtObj = new Webfm.alert(layout_cont, 'webfm-alert');

  //Container for tree(s)
  var elTreeDiv = Webfm.ce('div');
  elTreeDiv.setAttribute('id', 'tree'); //css id
  layout_cont.appendChild(elTreeDiv);
  Webfm.dirTreeObj = new Webfm.treeBuilder(elTreeDiv, Webfm.menuHT.get('root'), Webfm.menuHT.get('dir'));

  //progress indicator
  Webfm.progressObj = new Webfm.progress(layout_cont, 'webfm-progress');

  //Directory Listing
  Webfm.dirListObj = new Webfm.list(layout_cont, 'dirlist', 'file', 'narrow', true, Webfm.menuHT.get('dir'), Webfm.menuHT.get('file'));

  //insert trees, listing, search, metadata, progress and alert divs before upload fset built in php
  parent.insertBefore(layout_cont, parent.firstChild);
//  parent.appendChild(layout_cont); //If upload desired to be placed above browser

  webfmUploadAutoAttach();
}

//Attaches the upload behaviour to the upload form (borrowed jquery).
function webfmUploadAutoAttach(){
  $('input.webfmupload').each(function () {
    var uri = this.value;
    var button = 'wfmatt-button';
    var wrapper = 'wfmatt-wrapper';
    var hide = 'wfmatt-hide';
    var upload = new Webfm.jsUpload(uri, button, wrapper, hide);
  });
}

/**
 * Webfm.jsUpload constructor
 * 1st param is upload iframe url
 * 2nd param is id of redirected button object)
 * 3rd param is id of container of html repainted by ajax
 * 4th param is id of upload input field
 * TODO: fix progress throbber
 */
Webfm.jsUpload = function(uri, button, wrapper, hide) {
  // Note: these elements are replaced after an upload, so we re-select them
  // everytime they are needed.
  this.button = '#'+ button;
  this.wrapper = '#'+ wrapper;
  this.hide = '#'+ hide;
  Drupal.redirectFormButton(uri, $(this.button).get(0), this);
}

//Handler for the form redirection submission.
Webfm.jsUpload.prototype.onsubmit = function () {
  Webfm.progressObj.show(Webfm.js_msg["work"],  "blue");
  var hide = this.hide;
  $(hide).fadeOut('slow');
}

//Handler for the form redirection completion.
Webfm.jsUpload.prototype.oncomplete = function (data) {
  // Remove old form
  Drupal.freezeHeight(); // Avoid unnecessary scrolling
  $(this.wrapper).html('');

  // Place HTML into temporary div
  var div = document.createElement('div');
  $(div).html(data['html']);
  $(this.wrapper).append(div);

  //div with id='replace-options' present only in case of file overwrite
  this.confirm = Webfm.$('replace-options');
  if(this.confirm) {
    var hide = this.hide;
    $(hide).fadeOut('slow');
    var cp = this;
    this.confirm.id = 'replace-options';
    var replaceButton = Webfm.ce('input');
    replaceButton.setAttribute('type', 'button');
    replaceButton.setAttribute('value', Webfm.js_msg["submit"]);
    var listener = Webfm.eventListenerAdd(Webfm.eventListeners, replaceButton, "click", function(e) { cp.submit(); Webfm.stopEvent(e); });
    this.confirm.appendChild(replaceButton);
    this.confirm.file = data['file'];
  } else {
    $(this.hide, div).fadeIn('slow');
    webfmUploadAutoAttach();
  }

  Drupal.unfreezeHeight();
  Webfm.progressObj.hide();

  Webfm.dirListObj.refresh();
  if(typeof Webfm.$('webfm-inline') != 'undefined') {
    // attach file to node if inside node-edit
    if(typeof data['fid'] != 'undefined') {
      Webfm.menuAttach(null, data['fid']);
    }
  }
}

//Handler for the form redirection error.
Webfm.jsUpload.prototype.onerror = function (error) {
  alert('An error occurred:\n\n'+ error);
  Webfm.progressObj.hide();
  if(this.confirm)
    Webfm.clearNodeById('replace-options');
  // Undo hide
  $(this.hide).css({
    position: 'static',
    left: '0px'
  });
}

Webfm.jsUpload.prototype.submit = function () {
  var inputs = [];
  inputs = this.confirm.getElementsByTagName('input');
  var selection = '';
  for(var i = 0; i < inputs.length; i++) {
    if(inputs[i].checked == true) {
      selection = i;
      break;
    }
  }
  if(typeof selection != 'undefined') {
    var url = Webfm.ajaxUrl();
    Webfm.progressObj.show(Webfm.js_msg["work"],  "blue");
    var postObj = { action:encodeURIComponent("version"), param0:encodeURIComponent(selection), param1:encodeURIComponent(this.confirm.file)};
    Webfm.HTTPPost(url, this.callback, this, postObj);
  }
}

Webfm.jsUpload.prototype.callback = function(string, xmlhttp, cp) {
  Webfm.progressObj.hide();
  // Remove overwrite radios
  var parent = cp.confirm.parentNode;
  parent.removeChild(parent.firstChild);
  var hide = cp.hide;
  if (xmlhttp.status == 200) {
    var result = Drupal.parseJson(string);

    if(result.status) {
      Webfm.dirListObj.refresh();
    }
    cp.confirm.style.display = 'none';
    // Insert ajax feedback before upload form
    var elDiv = Webfm.ce('div');
    if(result.status) {
    elDiv.className = 'upload-msg';
    } else {
      elDiv.className = 'upload-msg-err';
    }
    elDiv.appendChild(Webfm.ctn(result.data['msg']));
    $(hide).before($(elDiv));

    // Undo hide
    Webfm.dbgObj.dbg("hide:", Webfm.dump(hide));
    $(hide).css({ display: 'block' });
    webfmUploadAutoAttach();

    if(typeof Webfm.$('webfm-inline') != 'undefined') {
      // attach file to node if inside node-edit
      if(typeof result.data['fid'] != 'undefined') {
        Webfm.menuAttach(null, result.data['fid']);
      }
    }
  } else {
    Webfm.alrtObj.msg(Webfm.js_msg["ajax-err"]);
  }
}

/**
 * Webfm.list constructor
 * 1st param is object to append this list object to
 * 2nd param is base id of listing (multiple listing objects must have unique ids)
 * 3rd param is base id of file rows of table
 * 4th param sets styling for listing
 * 5th param enables drag and drop
 * 6th param is directory menu array
 * 7th param is file menu array
 */
Webfm.list = function(parent, id, type, class_name, dd_enable, dir_menu, file_menu) {
  var wl = this;
  this.id = id;
  this.type = type;
  this.dd_enable = dd_enable;
  this.url = Webfm.ajaxUrl();
  this.sc_n = 0;
  this.sc_m = 0;
  this.sc_s = 0;
  this.content = '';
  this.iconDir = getWebfmIconDir();
  this.dir_menu = dir_menu;
  this.file_menu = file_menu;
  //directory cache hashtable (key= directory path, val= directory contents)
  this.cache = new Webfm.ht();
  this.eventListeners = []

  var node = Webfm.ce("div");
  node.setAttribute('id', this.id);
  node.className = class_name;
  this.obj = node;

  var elTable = Webfm.ce('table');
  var elTableBody = Webfm.ce('tbody');
//  elTableBody.setAttribute('id', this.id + 'body');
  this.body = elTableBody;

  // First Row
  var elTr = Webfm.ce('tr');
  elTr.setAttribute('id','webfm-top-tr');

  // Refresh Icon
  var elTd = Webfm.ce('td');
  elTd.className = 'navi';
  var elA = Webfm.ce('a');
  elA.setAttribute('href', '#');
  elA.setAttribute('title', Webfm.js_msg["refresh"]);
  var elImg = Webfm.ce('img');
  elImg.setAttribute('src', this.iconDir+ '/r.gif');
  elImg.setAttribute('alt', Webfm.js_msg["refresh"]);
  elA.appendChild(elImg);
  elTd.appendChild(elA);
  elTr.appendChild(elTd);
  var listener = Webfm.eventListenerAdd(Webfm.eventListeners, elA, "click", function(e) { wl.refresh(Webfm.current);Webfm.stopEvent(e); });

  // Breadcrumb trail
  var elTd = Webfm.ce('td');
  elTd.colSpan = 4;
  elTd.setAttribute('id','webfm-bcrumb-td');
  elTd.setAttribute('class','navi');
  // Build breadcrumb trail inside span
  var elSpan = Webfm.ce('span');
  elSpan.setAttribute('id', this.id + 'bcrumb');
  elTd.appendChild(elSpan);
  elTr.appendChild(elTd);

  elTableBody.appendChild(elTr);

  // Second Row
  var elTr = Webfm.ce('tr');
  this.secondRow = elTr;

  // icon column
  var elTd = Webfm.ce('td');
  elTd.className = 'head';
  elTr.appendChild(elTd);

  // Sort dir/files column
  var elTd = Webfm.ce('td');
  elTd.className = 'head';
  var elA = Webfm.ce('a');
  elA.setAttribute('href', '#');
  elA.setAttribute('title', Webfm.js_msg["sort"]);
  var listener = Webfm.eventListenerAdd(Webfm.eventListeners, elA, "click", function(e) { wl.sc_n^=1;wl.loadList("n");wl.sortIcon(e,wl.sc_n);Webfm.stopEvent(e); });

  var elImg = Webfm.ce('img');
  elImg.setAttribute('alt', Webfm.js_msg["sort"]);
  elImg.setAttribute('src', this.iconDir + '/down.gif');
  elA.appendChild(elImg);
  elA.appendChild(Webfm.ctn(Webfm.js_msg["column1"]));
  elTd.appendChild(elA);
  elTr.appendChild(elTd);

  // date/time column
  var elTd = Webfm.ce('td');
  elTd.className = 'head';
  var elA = Webfm.ce('a');
  elA.setAttribute('href', '#');
  var listener = Webfm.eventListenerAdd(Webfm.eventListeners, elA, "click", function(e) { wl.sc_m^=1;wl.loadList("m");wl.sortIcon(e,wl.sc_m);Webfm.stopEvent(e); });

  var elImg = Webfm.ce('img');
  elImg.setAttribute('alt', Webfm.js_msg["sort"]);
  elImg.setAttribute('src', this.iconDir + '/down.gif');
  elA.appendChild(elImg);
  elA.appendChild(Webfm.ctn(Webfm.js_msg["column2"]));
  elTd.appendChild(elA);
  elTr.appendChild(elTd);

  // size column
  var elTd = Webfm.ce('td');
  elTd.className = 'head';
  var elA = Webfm.ce('a');
  elA.setAttribute('href', '#');
  var listener = Webfm.eventListenerAdd(Webfm.eventListeners, elA, "click", function(e) { wl.sc_s^=1;wl.loadList("s");wl.sortIcon(e,wl.sc_s);Webfm.stopEvent(e); });

  var elImg = Webfm.ce('img');
  elImg.setAttribute('alt', Webfm.js_msg["sort"]);
  elImg.setAttribute('src', this.iconDir + '/down.gif');
  elA.appendChild(elImg);
  elA.appendChild(Webfm.ctn(Webfm.js_msg["column3"]));
  elTd.appendChild(elA);
  elTr.appendChild(elTd);

  // owner column
  var elTd = Webfm.ce('td');
  elTd.className = 'head';
  var elA = Webfm.ce('a');
  elA.setAttribute('href', '#');
  var listener = Webfm.eventListenerAdd(Webfm.eventListeners, elA, "click", function(e) { wl.sc_o^=1;wl.loadList("o");wl.sortIcon(e,wl.sc_o);Webfm.stopEvent(e); });

  var elImg = Webfm.ce('img');
  elImg.setAttribute('alt', Webfm.js_msg["sort"]);
  elImg.setAttribute('src', this.iconDir + '/down.gif');
  elA.appendChild(elImg);
  elA.appendChild(Webfm.ctn(Webfm.js_msg["column4"]));
  elTd.appendChild(elA);
  elTr.appendChild(elTd);

  elTableBody.appendChild(elTr);

  elTable.appendChild(elTableBody);
  node.appendChild(elTable);
  parent.appendChild(node);
}

Webfm.list.prototype.bcrumb = function() {
  var cp = this;
  Webfm.clearNodeById(this.id + 'bcrumb');
  elSpan = Webfm.$(this.id + 'bcrumb');
  var pth = [];
  for(var i = 0; i < this.content.bcrumb.length - 1; i++) {
    pth.push(this.content.bcrumb[i]);
    elSpan.appendChild(Webfm.ctn(" / "));
    // No breadcrumb link necessary for current directory
    var elA = Webfm.ce('a');
    elA.setAttribute('href', '#');
    // join previous loop iterations to create path for title
    elA.setAttribute('title', "/" + pth.join("/"));
    elA.appendChild(Webfm.ctn(this.content.bcrumb[i]));
    //IE fix
    var listener = Webfm.eventListenerAdd(Webfm.eventListeners, elA, "click", function(e) { cp.selectBC(e);Webfm.stopEvent(e); });
    elSpan.appendChild(elA);
  }
  elSpan.appendChild(Webfm.ctn(" / "));
  elSpan.appendChild(Webfm.ctn(this.content.bcrumb[i]));
}

Webfm.list.prototype.selectBC = function(event) {
  var el = event.target||window.event.srcElement;
  Webfm.selectDir(el.title);
}

Webfm.list.prototype.sortIcon = function(event, up_down) {
  var el = event.target||window.event.srcElement;
  if(el.firstChild) {
    el.firstChild.src = this.iconDir + '/' + (up_down?"up":"down") + '.gif';
  }
}

Webfm.list.prototype.refresh = function(path, rename_dir) {
  if(path == null)
    path = Webfm.current;
  this.cache.remove(path);
  if(typeof rename_dir != 'undefined') {
    this.rename_dir = rename_dir;
  }
  this.fetch(path);
}

Webfm.list.prototype.fetch = function(curr_dir) {
  Webfm.alrtObj.msg();
  if(curr_dir || (curr_dir = Webfm.current)) {
    Webfm.progressObj.show(Webfm.js_msg["work"],  "blue");
    //update current dir if specific dir selected
    Webfm.current = curr_dir;
    Webfm.dbgObj.dbg('fetch: ', curr_dir);

    if(this.cache.containsKey(Webfm.current)) {
      Webfm.dbgObj.dbg('cache hit: ', Webfm.current);
      this.content = this.cache.get(Webfm.current);
      this.bcrumb();
      this.loadList();
      var uploadpath = Webfm.$('edit-webfmuploadpath');
      if(uploadpath) {
        uploadpath.value = Webfm.current;
      }
      Webfm.progressObj.hide();
    } else {
      Webfm.admin = false;
      var postObj = { action:encodeURIComponent("read"), param0:encodeURIComponent(curr_dir) };
      Webfm.HTTPPost(this.url, this.callback, this, postObj);
    }
  } else {
    Webfm.dbgObj.dbg(Webfm.js_msg["curdir-undef"]);
  }
}

Webfm.list.prototype.callback = function(string, xmlhttp, cp) {
  Webfm.progressObj.hide();
  if (xmlhttp.status == 200) {
    cp.content = Drupal.parseJson(string);
    if(cp.content.status) {
      cp.cache.put(cp.content.current, cp.content);
      //Sets client permissions - server will always validate any action
      Webfm.admin = cp.content.admin;

      cp.bcrumb();
      cp.loadList("n");

      // Insert current directory path into upload form
      var uploadpath = Webfm.$('edit-webfmuploadpath');
      if(uploadpath) {
        uploadpath.value = cp.content.current;
        Webfm.dbgObj.dbg('uploadpath: ', uploadpath.value);
      }
      Webfm.current = cp.content.current;
      cp.adminCtl(Webfm.admin);

      if(cp.rename_dir) {
        var found = false;
        for(var i = 0; i < Webfm.dirListObj.dirrows.length; i++) {
          if(cp.dirrows[i].clickObj.title == "/" + cp.rename_dir) {
            found = true;
            break;
          }
        }
        if(found)
          Webfm.menuRename(cp.dirrows[i]);
      }
    } else {
      Webfm.alrtObj.str_arr(cp.content.data);
    }
  } else {
    Webfm.alrtObj.msg(Webfm.js_msg["ajax-err"]);
  }
}

//build admin icons for create dir and file db insertion
//maintain 4 column table
Webfm.list.prototype.adminCtl = function(admin) {
  if(admin) {
    if(Webfm.$('webfm-bcrumb-td').colSpan == 4) {
      var wl = this;
      Webfm.$('webfm-bcrumb-td').colSpan = 3;
      // Create New Directory and allow db insertions
      var elTd = Webfm.ce('td');
      var elSpan = Webfm.ce('span');
      elSpan.id = this.id + "-ctls";

      var elA = Webfm.ce('a');
      elA.title = Webfm.js_msg["new-dir"];
      var elImg = Webfm.ce('img');
      elImg.setAttribute('alt', Webfm.js_msg["new-dir"]);
      elImg.setAttribute('src', this.iconDir + '/dn.gif');
      elA.appendChild(elImg);
      var listener = Webfm.eventListenerAdd(Webfm.eventListeners, elA, "click", function(e) { Webfm.stopEvent(e);wl.mkdir(); });
      var listener = Webfm.eventListenerAdd(Webfm.eventListeners, elA, "mouseover", function(e) { wl.hover(e, true, 0); });
      var listener = Webfm.eventListenerAdd(Webfm.eventListeners, elA, "mouseout", function(e) { wl.hover(e, false, 0); });
      elSpan.appendChild(elA);

      var elA = Webfm.ce('a');
      elA.title = Webfm.js_msg["add-2-db"];
      var elImg = Webfm.ce('img');
      elImg.setAttribute('alt', Webfm.js_msg["add-2-db"]);
      elImg.setAttribute('src', this.iconDir + '/add_loc.gif');
      elA.appendChild(elImg);
      var listener = Webfm.eventListenerAdd(Webfm.eventListeners, elA, "click", function(e) { Webfm.stopEvent(e);wl.enumLocal(); });
      var listener = Webfm.eventListenerAdd(Webfm.eventListeners, elA, "mouseover", function(e) { wl.hover(e, true); });
      var listener = Webfm.eventListenerAdd(Webfm.eventListeners, elA, "mouseout", function(e) { wl.hover(e, false); });
      elSpan.appendChild(elA);

      var elA = Webfm.ce('a');
      elA.title = Webfm.js_msg["r-add-2-db"];
      var elImg = Webfm.ce('img');
      elImg.setAttribute('alt', Webfm.js_msg["r-add-2-db"]);
      elImg.setAttribute('src', this.iconDir + '/add_recur.gif');
      elA.appendChild(elImg);
      var listener = Webfm.eventListenerAdd(Webfm.eventListeners, elA, "click", function(e) { Webfm.stopEvent(e);wl.enumRecur(); });
      var listener = Webfm.eventListenerAdd(Webfm.eventListeners, elA, "mouseover", function(e) { wl.hover(e, true); });
      var listener = Webfm.eventListenerAdd(Webfm.eventListeners, elA, "mouseout", function(e) { wl.hover(e, false); });
      elSpan.appendChild(elA);

      elTd.appendChild(elSpan);

      Webfm.$('webfm-top-tr').appendChild(elTd);
    } else {
      Webfm.$('webfm-bcrumb-td').colSpan = 3;
    }
  } else {
    Webfm.$('webfm-bcrumb-td').colSpan = 4;
  }
}

// IE does not understand 'this' inside event listener func
Webfm.list.prototype.hover = function(event, state) {
  var el = event.target||window.event.srcElement;
  el.className = state ? 'selected' : '';
}

// Function to create a new directory
Webfm.list.prototype.mkdir = function() {
  Webfm.alrtObj.msg();
  Webfm.progressObj.show(Webfm.js_msg["work"],  "blue");
  var postObj = { action:encodeURIComponent("mkdir"), param0:encodeURIComponent(this.content.current) };
  Webfm.HTTPPost(this.url, this.mkdir_callback, this, postObj);
}

Webfm.list.prototype.enumLocal = function() {
  if(Webfm.confirm(Webfm.js_msg["enum_local"])) {
    Webfm.insert(this.content.current, "dir");
  }
}

Webfm.list.prototype.enumRecur = function() {
  if(Webfm.confirm(Webfm.js_msg["enum_recur"])) {
    Webfm.insert(this.content.current, "recur");
  }
}

Webfm.list.prototype.mkdir_callback = function(string, xmlhttp, cp) {
  Webfm.progressObj.hide();
  if (xmlhttp.status == 200) {
    var result = Drupal.parseJson(string);
    Webfm.dbgObj.dbg("mkdir data:", result.data);
    if(result.status) {
      cp.refresh(cp.content.current, result.data);
      if(Webfm.dirTreeObj) {
        //we just updated the listing - 2nd var must be false
        Webfm.dirTreeObj.fetch(true, false);
      }
    } else {
      Webfm.alrtObj.str_arr(result.data);
    }
  } else {
    Webfm.alrtObj.msg(Webfm.js_msg["ajax-err"]);
  }
}

Webfm.list.prototype.loadList = function(sortcol) {
  this.c_dir = 0;
  this.c_fil = 0;

  //remove all rows beneath second row of listing table body
  while(this.secondRow.nextSibling)
    this.body.removeChild(this.secondRow.nextSibling);
  //clear event listeners for old listing
  Webfm.eventUnregister(this.eventListeners);

  // Build directory rows and append to table
  if(this.content.dirs.length) {
    this.dirrows = [];
    //IE hack since dirs have no size and no owner
    if(!(Webfm.browser.isIE && (sortcol == "s")) && !(sortcol == "o"))
      this.sortTable(this.content.dirs, sortcol);
    for(var i = 0; i < this.content.dirs.length; i++) {
      this.dirrows[i] = new Webfm.dirrow(this.body, this.content.dirs[i], i, this.dd_enable, this.dir_menu, this.eventListeners);
    }
  }
  // Build file rows and append to table
  // type determines file context menu
  if(this.content.files.length) {
    this.sortTable(this.content.files, sortcol);
    for(var i = 0; i < this.content.files.length; i++) {
      var filerow = new Webfm.filerow(this.body, this.content.files[i], this.type, i, this.dd_enable, this.file_menu, this.eventListeners);
    }
  }
}

Webfm.list.prototype.sortTable = function(arr, key) {
  switch (key) {
    case "o":
      arr.sort(Webfm.sortByOwner);
      if(this.sc_o)
        arr.reverse();
      break;
    case "s":
      arr.sort(Webfm.sortBySize);
      if(this.sc_s)
        arr.reverse();
      break;
    case "m":
      arr.sort(Webfm.sortByModified);
      if(this.sc_m)
        arr.reverse();
      break;
    case "n":
      arr.sort(Webfm.sortByName);
      if(this.sc_n)
        arr.reverse();
      break;
  }
}

/**
 * Webfm.dirrow constructor
 * 1st param is parent obj
 * 2nd param is dir object
 * 3rd param is unique number to append to id
 * 4th param enables drag and drop
 * 5th param is directory menu array
 * 6th param is event listener array for closure cleanup
 */
Webfm.dirrow = function(parent, dir, index, dd_enable, menu, eventListenerArr) {
  var dr = this;
  this.draggable = dd_enable;
  this.iconDir = getWebfmIconDir();
  //id used for drop container
  var _id = 'dirlist' + index;
  var elTr = Webfm.ce('tr');
  this.element = elTr;
  this.element.className = 'dirrow';

  elTr.setAttribute('id', _id);
  elTr.setAttribute('title', dir.p);
  if(dd_enable && Webfm.admin) {
    //Webfm.draggable must be created after title assigned to set current path
    this.dd = new Webfm.draggable(Webfm.dragCont, elTr, this.element.className);
  } else {
    this.draggable = false;
  }

  var elTd = Webfm.ce('td');
  var elImg = Webfm.ce('img');
  elImg.setAttribute('src', this.iconDir + '/d.gif');
  elImg.setAttribute('id', _id + 'dd');
  elImg.setAttribute('alt', Webfm.js_msg["u_dir"]);
  this.menu = menu;
  elTd.appendChild(elImg);
  elTr.appendChild(elTd);

  var elTd = Webfm.ce('td');
  // Title of link = path
  this.clickObj = Webfm.ce('a');
  this.clickObj.setAttribute('href', '#');
  //title is path
  this.clickObj.setAttribute('title', dir.p);
  this.clickObj.appendChild(Webfm.ctn(dir.n));
  elTd.appendChild(this.clickObj);
  elTr.appendChild(elTd);

  var elTd = Webfm.ce('td');
  elTd.className = 'txt';
  elTd.appendChild(Webfm.ctn(Webfm.convertunixtime(parseInt(dir.m))));
  elTr.appendChild(elTd);

  var elTd = Webfm.ce('td');
  elTd.className = 'txt';
  if(dir.s) {
    var size = Webfm.size(dir.s);
    elTd.appendChild(Webfm.ctn(size));
  }
  elTr.appendChild(elTd);

  var elTd = Webfm.ce('td');
  elTd.className = 'txt';
  if(dir.o) {
    var owner = Webfm.ce(dir.o);
    elTd.appendChild(Webfm.ctn(owner));
  }
  elTr.appendChild(elTd);

  //mouse event listeners
  if(dd_enable) {
    var listener = Webfm.eventListenerAdd(eventListenerArr, this.element, "mousedown", function(e) { Webfm.contextMenuObj.hideContextMenu(e); dr.select(e); });
  } else {
    var listener = Webfm.eventListenerAdd(eventListenerArr, this.element, "click", function(e) { Webfm.contextMenuObj.hideContextMenu(e); if(Webfm.renameActive == false)Webfm.selectDir(dr.element.title); });
  }
  if(this.draggable) {
    var listener = Webfm.eventListenerAdd(eventListenerArr, this.element, "mouseover", function() { dr.hover(dr.element, true); });
    var listener = Webfm.eventListenerAdd(eventListenerArr, this.element, "mouseout", function() { dr.hover(dr.element, false); });
  }
  if(Webfm.browser.isOP) {
    var listener = Webfm.eventListenerAdd(eventListenerArr, this.element, "mouseup", function(e) { if( e && e.button == 0 && e.altKey == true ) { if(Webfm.renameActive == false)Webfm.contextMenuObj.showContextMenu(e, dr);Webfm.stopEvent(e); }; });
  } else {
    var listener = Webfm.eventListenerAdd(eventListenerArr, this.element, "contextmenu", function(e) { if(Webfm.renameActive == false)Webfm.contextMenuObj.showContextMenu(e, dr);Webfm.stopEvent(e); });
  }

  parent.appendChild(elTr);
  this.c_dir ++;
}

Webfm.dirrow.prototype.hover = function(el, state) {
  if(state)
    el.className += ' selected';
  else
    el.className = el.className.split(' ', 1);
}
Webfm.dirrow.prototype.select = function(event) {
  var cp = this;
  if(Webfm.renameActive == true)
    return false;
  event = event || window.event;
  switch(event.target||event.srcElement) {
    case this.clickObj:
      // Determine mouse button
      var rightclick = Webfm.rclick(event);
      if(rightclick)
        break;
      setTimeout(function(){
        //if click then no dragging...
        if(Webfm.dragging==false) {
          Webfm.selectDir(cp.element.title);
        }
      },200);
      //passthrough
    default:
      if(typeof this.dd != "undefined")
        this.dd.mouseButton(event);
      break;
  }
  return false;
}

/**
 * Webfm.filerow constructor
 * 1st param is parent obj
 * 2nd param is fileobject (see desc below)
 * 3rd param is base id name of file row
 * 4th param is unique number to append to id
 * 5th param enables drag and drop
 * 6th param is file menu array
 * 7th param is event listener array for closure cleanup
 *
 * fileobject elements:
 * id -> fid
 * n -> file name
 * p -> path (includes name)
 * s -> file size
 * m -> modified date
 * e -> mimetype extension
 * i -> image file.
 * w -> image width
 * h -> image height
 * un -> file owner user name
 */
Webfm.filerow = function(parent, fileObj, idtype, index, dd_enable, file_menu, eventListenerArr) {
  var fr = this;
  this.draggable = dd_enable;
  this.iconDir = getWebfmIconDir();
  this.ext = fileObj.e;
  this.filepath = fileObj.p + '/' + fileObj.n;
  this.uid = fileObj.u;
  this.ftitle = null;
  this.funame = fileObj.un;
  if(typeof fileObj.ftitle != "undefined")
    this.ftitle = fileObj.ftitle;
  var elTr = Webfm.ce('tr');
  this.element = elTr;
  elTr.className = idtype + 'row';
  //drag object id used for download type
  if(typeof fileObj.id == "undefined") {
    this.row_id  = 'nodb' + index;
  } else {
    if(fileObj.id == 0)
      this.row_id = idtype + index;
    else
      //TODO: fix - this causes repeat ids for attach rows!
      this.row_id = 'fid' + fileObj.id;
  }
  elTr.setAttribute('id', this.row_id);

  //title of drag object is path for move
  elTr.setAttribute('title', this.filepath);
  if(dd_enable) {
    //Only admins or owner of file can move it
    if(Webfm.admin || fileObj.u == getWebfmUid()) {
      this.dd = new Webfm.draggable(Webfm.dragCont, elTr, elTr.className);
    } else {
      this.draggable = false;
    }
  }

  var elTd = Webfm.ce('td');
  var elImg = Webfm.ce('img');
  if(fileObj.i)
    elImg.setAttribute('src', this.iconDir + '/i.gif');
  else
    elImg.setAttribute('src', fr.getIconByExt());
  if((typeof fileObj.id == "undefined") || fileObj.id == 0) {
    // Make icon transparent if file not in db - TODO: fix for IE
    elImg.style.opacity = 0.25;
    elImg.style.filter = "alpha(opacity=25)";
  }
  elImg.setAttribute('alt', Webfm.js_msg["u_file"]);
  this.menu = file_menu;
  elTd.appendChild(elImg);
  elTr.appendChild(elTd);

  var elTd = Webfm.ce('td');
  this.clickObj = Webfm.ce('a');
  this.clickObj.setAttribute('href', '#');
  if((typeof fileObj.id == "undefined") || fileObj.id == 0) {
    this.clickObj.setAttribute('title', this.filepath);
  } else {
    if(Webfm.browser.isOP)
      this.clickObj.setAttribute('href', getBaseUrl() + "\/webfm_send\/" + fileObj.id);
    this.clickObj.setAttribute('title', fileObj.id);
  }
  if(this.ftitle)
    this.clickObj.appendChild(Webfm.ctn(fileObj.ftitle));
  else
    this.clickObj.appendChild(Webfm.ctn(fileObj.n));
  elTd.appendChild(this.clickObj);
  elTr.appendChild(elTd);

  var elTd = Webfm.ce('td');
  elTd.className = 'txt';
  elTd.appendChild(Webfm.ctn(Webfm.convertunixtime(parseInt(fileObj.m))));
  elTr.appendChild(elTd);

  var elTd = Webfm.ce('td');
  elTd.className = 'txt';
  var size = Webfm.size(fileObj.s);
  elTd.appendChild(Webfm.ctn(size));
  elTr.appendChild(elTd);

  //owner field to row
  var elTd = Webfm.ce('td');
  elTd.className = 'txt';
  elTd.appendChild(Webfm.ctn(fileObj.un));
  elTr.appendChild(elTd);

  //mouse event listeners
  if(dd_enable)
    var listener = Webfm.eventListenerAdd(eventListenerArr, this.element, "mousedown", function(e) { Webfm.contextMenuObj.hideContextMenu(e); fr.select(e); });
  else
    var listener = Webfm.eventListenerAdd(eventListenerArr, this.element, "click", function(e) { Webfm.contextMenuObj.hideContextMenu(e); if(Webfm.renameActive == false)Webfm.selectFile(fr.clickObj.title, fr.element); });
  if(this.draggable) {
    var listener = Webfm.eventListenerAdd(eventListenerArr, this.element, "mouseover", function() { fr.hover(fr.element, true); });
    var listener = Webfm.eventListenerAdd(eventListenerArr, this.element, "mouseout", function() { fr.hover(fr.element, false); });
  }
  if(Webfm.browser.isOP) {
    var listener = Webfm.eventListenerAdd(eventListenerArr, this.element, "mouseup", function(e) { if( e && e.button == 0 && e.altKey == true ) { if(Webfm.renameActive == false)Webfm.contextMenuObj.showContextMenu(e, fr);Webfm.stopEvent(e); }; });
  } else {
    var listener = Webfm.eventListenerAdd(eventListenerArr, this.element, "contextmenu", function(e) { if(Webfm.renameActive == false)Webfm.contextMenuObj.showContextMenu(e, fr);Webfm.stopEvent(e); });
  }


  parent.appendChild(elTr);
  this.c_fil++;
}

Webfm.filerow.prototype.hover = function(el, state) {
  if(state)
    el.className += ' selected';
  else
    el.className = el.className.split(' ', 1);
}

Webfm.filerow.prototype.select = function(event) {
  var cp = this;
  if(Webfm.renameActive == true)
    return false;
  event = event || window.event;
  switch(event.target||event.srcElement) {
    case this.clickObj:
      // Determine mouse button
      var rightclick = Webfm.rclick(event);
      if(rightclick)
        break;
      setTimeout(function(){
        //if click then no dragging...
        if(Webfm.dragging == false) {
          //element id used for download method (webfm_send||direct http access)
          Webfm.selectFile(cp.clickObj.title, cp.element);
        }
      },200);
      //passthrough
    default:
      if(typeof this.dd != "undefined")
        this.dd.mouseButton(event);
      break;
  }
  return false;
}

Webfm.filerow.prototype.getIconByExt = function() {
  // extension stored in file record of db fails - use pathname
  var ext = new String(this.ext);
  if(ext) {
    ext = ext.replace(/\//g, "_");
  } else {
    ext = new String(this.filepath);
    var last = ext.lastIndexOf(".");
    if(last != -1)
      // "." found
      ext = ext.slice(last + 1);
    else
      ext = "";
  }
  var icon = this.iconDir + '/' + ((Webfm.icons["e" + ext]) ? Webfm.icons["e" + ext] : "f") + '.gif';
  return icon;
}

/*
 * Webfm.treeBuilder constructor
 */
Webfm.treeBuilder = function(parent, root_menu, dir_menu) {
  this.parent = parent;
  this.root_menu = root_menu;
  this.dir_menu = dir_menu;
  this.trees = [];
}
Webfm.treeBuilder.prototype.fetch = function(tree_refresh, list_refresh) {
  this.tree_refresh = tree_refresh;
  this.list_refresh = list_refresh
  var url = Webfm.ajaxUrl();
  Webfm.alrtObj.msg();
  Webfm.progressObj.show(Webfm.js_msg["work"],  "blue");
  var postObj = { action:encodeURIComponent("readtrees") };
  if(tree_refresh)
    postObj.param0 = encodeURIComponent(true);
  Webfm.admin = false;
  Webfm.HTTPPost(url, this.callback, this, postObj);
}
Webfm.treeBuilder.prototype.callback = function(string, xmlhttp, cp) {
  Webfm.progressObj.hide();
  if (xmlhttp.status == 200) {
    result = Drupal.parseJson(string);
//    Webfm.dbgObj.dbg("trees fetch:", Webfm.dump(result));

    if(result.status) {
      if(result.err) {
        Webfm.alrtObj.msg(result.err);
      }
      Webfm.admin = result.admin;
      // build directory trees from php associative array
      // first var used to fetch listing of first tree
      var first = true;
      for(var i in result.tree) {
//        Webfm.dbgObj.dbg("tree" + i, Webfm.dump(result.tree[i]));
        if(!cp.trees[i]) {
          cp.trees[i] = new Webfm.tree(cp.parent, i, cp.root_menu, cp.dir_menu);
        }
        if(first) {
          cp.trees[i].fetch(cp.tree_refresh, cp.list_refresh);
        } else {
          cp.trees[i].fetch(cp.tree_refresh, false);
        }
        first = false;
      }
    } else {
      Webfm.alrtObj.msg(result.err);
    }
  } else {
    Webfm.alrtObj.msg(Webfm.js_msg["ajax-err"]);
  }
}

/**
 * Webfm.tree constructor
 * 1st param is parent node to append this Webfm.tree object
 * 2nd param is index to append to base id of Webfm.tree object
 * 3rd param is root directory menu array
 * 4th param is non-root directory menu array
 */
Webfm.tree = function(parent, treeIdx, root_menu, dir_menu) {
  var wt = this;
  this.id = 'dirtree' + treeIdx;
  this.treeIdx = treeIdx;
  this.icondir = getWebfmIconDir();
  this.content = '';
  this.expAllData = [['collapse', 'minus', 'block'], ['expand', 'plus', 'none']];
  // Set tree exp/collapse behaviour on load (0 = expanded, 1 = collapsed)
  this.expAllIndex = 1;
  this.root_menu = root_menu;
  this.dir_menu = dir_menu;
  this.eventListeners = []

  var node = Webfm.ce("div");
  node.setAttribute('id', this.id);
  node.className = 'dirtree';

  //build tree and display
  var elA = Webfm.ce('a');
  elA.setAttribute('href', '#');
  elA.setAttribute('title', Webfm.js_msg["refresh"]);
  var listener = Webfm.eventListenerAdd(Webfm.eventListeners, elA, "click", function(e) { wt.fetch(true, '');Webfm.stopEvent(e); });

  var elImg = Webfm.ce('img');
  elImg.setAttribute('src', this.icondir + '/r.gif');
  elImg.setAttribute('alt', Webfm.js_msg["refresh"]);
  elA.appendChild(elImg);
  node.appendChild(elA);
  var elSpan = Webfm.ce("span");
  elSpan.appendChild(Webfm.ctn('   '));
  elSpan.setAttribute('id', this.id + 'Name');
  node.appendChild(elSpan);

  // Expand/Collapse all folders buttons
  var elSpan = Webfm.ce("span");
  elSpan.setAttribute('id', this.id + 'exp');
  for(var i = 0; i < 2; i++) {
    var elA = Webfm.ce('a');
    elA.setAttribute('href', '#');
    if (i) {
      elA.setAttribute('title', 'expand tree');
      var listener = Webfm.eventListenerAdd(Webfm.eventListeners, elA, "click", function(e) { wt.exp(0);Webfm.stopEvent(e); });
    } else {
      elA.setAttribute('title', 'collapse tree');
      var listener = Webfm.eventListenerAdd(Webfm.eventListeners, elA, "click", function(e) { wt.exp(1);Webfm.stopEvent(e); });
    }
    var elImg = Webfm.ce('img');
    elImg.setAttribute('alt', this.expAllData[i][0]);
    elImg.setAttribute('src', this.icondir + '/' + this.expAllData[i][1] + '.gif');
    elA.appendChild(elImg);
    elSpan.appendChild(elA);
  }
  node.appendChild(elSpan);

  //container div for tree
  var elDiv = Webfm.ce("div");
  this.treeCont = elDiv;
  node.appendChild(elDiv);

  parent.appendChild(node);
}

Webfm.tree.prototype.fetch = function(tree_refresh, list_refresh) {
  // Reset ul count (0=root)
  this.treeUlCounter = 0;
  this.treeNodeCounter = 0;
  this.list_refresh = list_refresh;

  var url = Webfm.ajaxUrl();
  Webfm.alrtObj.msg();
  Webfm.progressObj.show(Webfm.js_msg["work"],  "blue");
  Webfm.dbgObj.dbg("tree fetch path:", this.treeIdx);
  var postObj = { action:encodeURIComponent("readtree"), param0:encodeURIComponent(this.treeIdx) };
  if(tree_refresh)
    postObj.param1 = encodeURIComponent(true);
  Webfm.HTTPPost(url, this.callback, this, postObj);
}

Webfm.tree.prototype.callback = function(string, xmlhttp, cp) {
  Webfm.progressObj.hide();
  if (xmlhttp.status == 200) {
    cp.content = Drupal.parseJson(string);
//    Webfm.dbgObj.dbg("tree fetch:", Webfm.dump(cp.content));

    //clear tree content
    while (cp.treeCont.hasChildNodes())
      cp.treeCont.removeChild(cp.treeCont.firstChild);
    //clear event listeners for old tree content
    Webfm.eventUnregister(cp.eventListeners);
    //clear drop container array;
    Webfm.dropContainers = [];

    //update tree name
    var treeName = Webfm.$(cp.id + 'Name');
    treeName.removeChild(treeName.firstChild);
    for(var j in cp.content.tree) {
      //textnode = last directory of root path
      treeName.appendChild(Webfm.ctn(' ' + j.substring(j.lastIndexOf("/") + 1) + ' ' + Webfm.js_msg["tree"]));
      break;
    }

    // Recursively build directory tree from php associative array
    cp.buildTreeRecur(cp.content.tree, cp.treeCont, '');
    cp.init();
    if(cp.list_refresh) {
      Webfm.dirListObj.refresh(cp.content.current);
    }
  } else {
    Webfm.alrtObj.msg(Webfm.js_msg["ajax-err"]);
  }
}

Webfm.tree.prototype.getpath = function() {
  return this.content.current;
}

Webfm.tree.prototype.showHideNode = function (event) {
  event = event || window.event;
  var collapseIcon = event.target||event.srcElement;
  if(collapseIcon.style.visibility == 'hidden')
    return;
  var ul = collapseIcon.parentNode.parentNode.getElementsByTagName('ul')[0];
  if(collapseIcon.title == this.expAllData[0][0]) {
    collapseIcon.src = this.icondir + '/' + this.expAllData[1][1] + '.gif';
    collapseIcon.alt = this.expAllData[1][0];
    collapseIcon.title = this.expAllData[1][0];
    ul.style.display = this.expAllData[1][2];
  }else{
    collapseIcon.src = this.icondir + '/' + this.expAllData[0][1] + '.gif';
    collapseIcon.alt = this.expAllData[0][0];
    collapseIcon.title = this.expAllData[0][0];
    ul.style.display = this.expAllData[0][2];
  }
}

Webfm.tree.prototype.buildTreeRecur = function(content, parent, input_path) {
  var cp = this;
  //php associative array is always a single member array with nested objects
  if(Webfm.isArray(content)) {
    this.buildTreeRecur(content[0], parent, '');
  } else if (Webfm.isObject(content)) {
    if(input_path)
      input_path += "/";
    var elUl = Webfm.ce('ul');
    if(!(this.treeUlCounter++))
      elUl.className = 'root-list';
    // sort object here since php does not have a case-sensitive ksort
    var sortDir = [];
    for(var i in content) {
      sortDir.push(i);
    }
    if(sortDir.length) {
      sortDir.sort(Webfm.sortByKey);
      for(var j = 0; j < sortDir.length; j++) {
        var newpath = input_path + sortDir[j];
        var elLi = Webfm.ce('li');
        var _id = this.id + 'node' + this.treeNodeCounter;
        elLi.setAttribute('id', _id);
        elLi.setAttribute('title', newpath);
        elLi.className = "treenode";

        var elDiv = Webfm.ce('div');
        var elImg = Webfm.ce('img');
        elImg.setAttribute('src', this.icondir + '/' + this.expAllData[this.expAllIndex][1] + '.gif');
        elImg.setAttribute('alt', this.expAllData[this.expAllIndex][0]);
        elImg.setAttribute('title', this.expAllData[this.expAllIndex][0]);
        elDiv.appendChild(elImg);
        elLi.appendChild(elDiv);
        var listener = Webfm.eventListenerAdd(this.eventListeners, elImg, "click", function(e) { cp.showHideNode(e);Webfm.stopEvent(e); });
        var treeNode = new Webfm.treeNode(elDiv, newpath, _id, elImg, this.treeNodeCounter ? this.dir_menu : this.root_menu, this.eventListeners);
        var listener = Webfm.eventListenerAdd(this.eventListeners, elDiv, "mouseover", function(e) { cp.hover(e, true); });
        var listener = Webfm.eventListenerAdd(this.eventListeners, elDiv, "mouseout", function(e) { cp.hover(e, false); });

        this.treeNodeCounter++;
        this.buildTreeRecur(content[sortDir[j]], elLi, newpath);
        elUl.appendChild(elLi);
      }
    }

    // Always show root
    if(elUl.className == 'root-list')
      elUl.style.display = 'block';
    else
      elUl.style.display = this.expAllData[this.expAllIndex][2];

    parent.appendChild(elUl);
  }
}

// IE does not understand 'this' inside event listener func
Webfm.tree.prototype.hover = function(event, state) {
  var el = event.target||window.event.srcElement;
  if(state) {
    el.className = 'selected';
    el.parentNode.className = 'selected';
//    el.parentNode.className += ' selected';
  } else {
//    var class_names = [];
//    class_names = el.parentNode.className.split(' ');
//    el.parentNode.className = class_names[0];
    el.className = '';
    el.parentNode.className = '';
  }
}

Webfm.tree.prototype.init = function() {
  // Determine if expand/collapse icon is present
  // Create event objects for each element
  var dirItems = this.treeCont.getElementsByTagName('li');
  if (dirItems.length) {
    for(var i = 0; i < dirItems.length; i++) {
      var subItems = dirItems[i].getElementsByTagName('ul');
      if(!subItems.length)
        // Hide collapse icon if no sub-directories
        dirItems[i].getElementsByTagName('img')[0].style.visibility='hidden';
    }
  }
}

Webfm.tree.prototype.exp = function(expcol) {
  //clear tree
  while(this.treeCont.hasChildNodes())
    this.treeCont.removeChild(this.treeCont.firstChild);

  // Rebuild dirtree ul/li objects from dirtree object
  this.expAllIndex = expcol;
  this.treeUlCounter = 0;
  this.treeNodeCounter = 0;

  this.buildTreeRecur(this.content.tree, this.treeCont, '');
  this.init();
}

Webfm.treeNode = function(parent, path, id, expImg, menu, eventListenerArr) {
  var tn = this;
  this.parent = parent;
  this.element = parent.parentNode;
  var icondir = getWebfmIconDir();
  this.expClickObj = expImg;
  var elImg = Webfm.ce('img');
  elImg.setAttribute('id', id + 'dd');
  elImg.setAttribute('src', icondir + '/d.gif');
  parent.appendChild(elImg);
  this.clickObj = Webfm.ce('a');
  this.clickObj.href = '#';
  //anchor title is path
  this.clickObj.setAttribute('title', path);
  var nodeNumPos = this.element.id.indexOf("node") + 4;
  if((this.element.id.substring(nodeNumPos) != "0") && (Webfm.admin))
    // root treenode isn't draggable
    this.dd = new Webfm.draggable(Webfm.dragCont, this.element, this.element.className);
  var root = [];
  root = path.split('/');
  //textNode is last directory name of path string (used for root path)
  this.clickObj.appendChild(Webfm.ctn(root[root.length - 1]));
  parent.appendChild(this.clickObj);

  //mouse event listeners
  this.menu = menu;
  if(typeof this.dd != "undefined") {
    var listener = Webfm.eventListenerAdd(eventListenerArr, parent, "mousedown", function(e) { Webfm.contextMenuObj.hideContextMenu(e); tn.select(e); });
  } else {
    var listener = Webfm.eventListenerAdd(eventListenerArr, parent, "click", function(e) { Webfm.selectDir(tn.clickObj.title); Webfm.stopEvent(e); });
  }
  if(Webfm.browser.isOP) {
    var listener = Webfm.eventListenerAdd(eventListenerArr, parent, "mouseup", function(e) { if( e && e.button == 0 && e.altKey == true ) { if(Webfm.renameActive == false)Webfm.contextMenuObj.showContextMenu(e, tn);Webfm.stopEvent(e); }; });
  } else {
    var listener = Webfm.eventListenerAdd(eventListenerArr, parent, "contextmenu", function(e) { if(Webfm.renameActive == false)Webfm.contextMenuObj.showContextMenu(e, tn);Webfm.stopEvent(e); });
  }
}

Webfm.treeNode.prototype.select = function(event) {
  var cp = this;
  // disable during rename
  if(Webfm.renameActive == true)
    return false;
  event = event|| window.event;
  switch(event.target||event.srcElement) {
    case this.expClickObj:
      break;
    case this.clickObj:
      // Determine mouse button
      var rightclick = Webfm.rclick(event);
      if(rightclick)
        // oncontextmenu will handle this
        break;
      setTimeout(function(){
        //if click then no dragging...
        if(Webfm.dragging==false) {
          Webfm.selectDir(cp.clickObj.title);
        }
      },200);
      //passthrough
    default:
      if(typeof this.dd != "undefined")
        this.dd.mouseButton(event);
      break;
  }
  return false;
}

Webfm.selectDir = function(path) {
  Webfm.dirListObj.fetch(path);
}

// File download
Webfm.selectFile = function(path, el, as_file) {
  //files not in db use file path in tr title for download
  //files inside webfm have 'fidxxx' as title
  var fid = null;
  var sent = false;
  var pths = [];
  pths = el.title.split('/');
  if(el.id.substring(0,3) == 'fid') {
    fid = el.id.substring(3);
    var fullpath = 'webfm_send/' + path;
    if(as_file)
      fullpath += '/1';
  } else {
    //replace / with ~ since server uses / as param delimiter
    var pluspath = pths.join('~');
    var fullpath = 'webfm_send/' + encodeURIComponent(pluspath);
  }
  if(getWebfmCleanUrl()) {
    var url = getBaseUrl() + '/' + fullpath;
  } else {
    var url = '?q=' + fullpath;
  }
  if(as_file) {
    // Send download/open dialog
    window.location = url;
  } else {
    var cache = Webfm.dirListObj.cache.get(Webfm.current);
    for(var i in cache.files) {
      // Display downloaded image in iframe
      // check cache files[] array for path match and image type
      if (((cache.files[i].id == fid) ||
          ((cache.files[i].p + '/' + cache.files[i].n) == path))
          && cache.files[i].i) {
        // FF needs unique name per iframe - Webfm.zindex guaranteed unique
        // since incremented with each new pane
        var iframeName = "dwnld" + Webfm.zindex;
        var pane = new Webfm.pane(Webfm.viewCont, pths[pths.length - 1], "view-file", null, 200, 200);
        // I hate using innerHTML but IE iframe requires this method:
        pane.content.innerHTML='<iframe src="" style="margin:0;padding:0;width:100%;height:100%" name="'+iframeName+'"></iframe>';
        if(fid)
          pane.headerMsg("fid:" + path);
        pane.show();
        window.frames[iframeName].location.replace(url);
        sent = true;
        break;
      }
    }
    // Not an image - launch file in new browser instance
    if(!sent) {
//      window.open(url);
      window.location = url;
    }
  }
}

/**
 * Webfm.context constructor
 */
Webfm.context = function(container) {
  Webfm.renameActive = false;
  this.container = container;
  this.eventListeners = this.container.eventListenerArr;
}

Webfm.context.prototype.hideContextMenu = function(event) {
  // Hide context menu and restore document oncontextmenu handler
  this.container.obj.style.visibility = "hidden";
  document.body.oncontextmenu = Webfm.oldOnContextMenu;
}

//obj is treenode|filerow|dirrow
Webfm.context.prototype.showContextMenu = function(event, obj) {
  var cp = this;
  this.element = obj.element;
  this.clickObj = obj.clickObj;
//Webfm.dbgObj.dbg('this.element.title:', this.element.title);
  document.body.oncontextmenu = new Function ("return false");
  event = event || window.event;
  var pos = Drupal.mousePosition(event);

  // Remove any existing list in our contextMenu.
  this.container.destroy();

  // Build menu ul and append to this.container
  if(obj.menu != null) {
    var elUl = Webfm.ce('ul');
    for(var j = 0; j < obj.menu.length; j++) {
      var elLi = Webfm.ce('li');
      //Run prepare function and return true if menuElement to appear in menu
      if(typeof obj.menu[j].prepFunc == 'function' && !obj.menu[j].prepFunc(obj)) {
        continue;
      }
      elLi.appendChild(Webfm.ctn(obj.menu[j].desc));
      //menu selection is title of event
      elLi.id = 'cxtMenu' + j;
      var listener = Webfm.eventListenerAdd(Webfm.eventListeners, elLi, "mousedown", function(e) { cp.selectMenu(e, obj); cp.hideContextMenu(e); Webfm.stopEvent(e); });
      var listener = Webfm.eventListenerAdd(Webfm.eventListeners, elLi, "mouseover", function(e) { cp.hover(e, true); });
      var listener = Webfm.eventListenerAdd(Webfm.eventListeners, elLi, "mouseout", function(e) { cp.hover(e, false); });
      elUl.appendChild(elLi);
    }
    this.container.obj.appendChild(elUl);
    this.container.obj.style.visibility = "visible";

    if(pos.x + this.container.obj.offsetWidth > (document.documentElement.offsetWidth-20)){
      pos.x = pos.x + (document.documentElement.offsetWidth - (pos.x + this.container.obj.offsetWidth)) - 20;
    }

    this.container.obj.style.left = pos.x + 'px';
    this.container.obj.style.top = pos.y + 'px';

    this.container.obj.style.display ='block';
    this.container.obj.style.zIndex = ++Webfm.zindex;
  }
  var listener = Webfm.eventListenerAdd(Webfm.eventListeners, document, "mousedown", function(e) { cp.hideContextMenu(e); });
  return false;
}

// IE does not understand 'this' inside event listener func
Webfm.context.prototype.hover = function(event, state) {
  var el = event.target||window.event.srcElement;
  el.className = state ? 'selected' : '';
}

// Call Webfm.menuElement execute function
Webfm.context.prototype.selectMenu = function(event, obj) {
  event = event || window.event;
  obj.menu[(event.target||event.srcElement).id.substring(7)].execFunc(obj);
  return false;
}

Webfm.menuElement = function(desc, execFunc, prepFunc) {
  this.desc = desc;
  this.execFunc = execFunc;
  this.prepFunc = prepFunc;
}

//obj is treenode|filerow|dirrow
Webfm.menuElement.prototype.exec = function(obj) {
  this.execFunc(obj);
}

Webfm.menuRemove = function(obj) {
  var url = Webfm.ajaxUrl();
  if(typeof obj.ext != "undefined")
    //directories don't have extension properties
    obj.is_file = true;
  var path = obj.element.title;
  obj.parentPath = path.substring(0, path.lastIndexOf("/"));
  if(Webfm.confirm(Webfm.js_msg["confirm-del0"] + (obj.is_file ? Webfm.js_msg["file"] : Webfm.js_msg["dir"]) + " " + path + (obj.is_file ? "" : Webfm.js_msg["confirm-del1"]) + "?")) {
    Webfm.progressObj.show(Webfm.js_msg["work"],  "blue");
    var postObj = { action:encodeURIComponent("delete"), param0:encodeURIComponent(path) };
    Webfm.HTTPPost(url, Webfm.ctxMenuCallback, obj, postObj);
    return false;
  }
}

Webfm.menuMkdir = function(obj) {
  var url = Webfm.ajaxUrl();
  obj.is_file = false;
  var path = obj.element.title;
  obj.parentPath = path;
  Webfm.progressObj.show(Webfm.js_msg["work"],  "blue");
  var postObj = { action:encodeURIComponent("mkdir"), param0:encodeURIComponent(path) };
  Webfm.HTTPPost(url, Webfm.ctxMenuMkdirCallback, obj, postObj);
}

Webfm.menuRename = function(obj) {
  if(typeof obj.ext != "undefined")
    //directories don't have extension properties
    obj.is_file = true;
  obj.renInput = Webfm.ce('input');
  obj.renInput.setAttribute('type', 'textfield');
  obj.renInput.value = obj.clickObj.firstChild.nodeValue;
  //clone input element since Webfm.contextMenuObj isn't destroyed on DOM
  obj.tempInput = obj.renInput.cloneNode(true);
  obj.tempInput.setAttribute('autocomplete','off'); //FF focus bug
  obj.clickparent = obj.clickObj.parentNode;
  obj.clickparent.replaceChild(obj.tempInput, obj.clickObj);
  //no change (blur) - restore original textNode
  var listener = Webfm.eventListenerAdd(Webfm.eventListeners, obj.tempInput, "blur", function (e) { Webfm.renameActive = false; obj.clickparent.replaceChild(obj.clickObj, obj.tempInput);Webfm.stopEvent(e);  });
  //listen for enter key up - swap names (illegal names are ignored on server and next list
  //refresh will restore the proper filename)
  var listener = Webfm.eventListenerAdd(Webfm.eventListeners, obj.tempInput, "keydown", function(e) { if(Webfm.enter(e) && Webfm.renameActive == true){ Webfm.renameActive = false; Webfm.menuSwapname(obj); this.blur(); Webfm.stopEvent(e);} });
  setTimeout(function(){ obj.tempInput.focus();Webfm.renameActive = true; },10);
}

Webfm.menuSearch = function(obj) {
  Webfm.searchObj.createForm(obj.element.title);
}

Webfm.menuSwapname = function(obj) {
  var url = Webfm.ajaxUrl();
  var oldpath = obj.element.title;
  obj.parentPath = oldpath.substring(0, oldpath.lastIndexOf("/"));
  var newpath = obj.parentPath + '/' + obj.tempInput.value;
  var postObj = { action:encodeURIComponent("rename"), param0:encodeURIComponent(oldpath), param1:encodeURIComponent(newpath) };
  Webfm.HTTPPost(url, Webfm.ctxMenuCallback, obj, postObj);
  return true;
}

Webfm.menuGetMeta = function(obj) {
  var url = Webfm.ajaxUrl();
//  Webfm.dbgObj.dbg("obj.clickObj.title:", obj.clickObj.title);
  Webfm.progressObj.show(Webfm.js_msg["work"],  "blue");
  var postObj = { action:encodeURIComponent("getmeta"), param0:encodeURIComponent(obj.clickObj.title) };
  Webfm.HTTPPost(url, Webfm.ctxMenuMetaCallback, '', postObj);
}

Webfm.menuAttach = function(obj, _fid) {
  var url = Webfm.ajaxUrl();
  if(obj == null)
    var fid = _fid;
  else
    fid = obj.clickObj.title;
  //check that this file is not already attached
  var attach_arr = [];
  attach_arr = Webfm.$(Webfm.attachFormInput).value.split(',');
  for(var i = 0; i < attach_arr.length; i++) {
     if(fid == attach_arr[i])
        break;
  }
  if(i == attach_arr.length) {
    Webfm.progressObj.show(Webfm.js_msg["work"],  "blue");
    var postObj = { action:encodeURIComponent("attachfile"), param0:encodeURIComponent(fid) };
    Webfm.HTTPPost(url, Webfm.ctxMenuAttachCallback, '', postObj);
  }
}

Webfm.menuDetach = function(obj) {
  Webfm.alrtObj.msg();
  var path = obj.element.title;
  if(Webfm.confirm(Webfm.js_msg["confirm-det"] + path + "?")) {
    // update table
    obj.element.parentNode.removeChild(obj.element);
    // update form input
    var attach_arr = [];
    attach_arr = Webfm.$(Webfm.attachFormInput).value.split(',');
    var new_attach_arr = [];
    var j = 0;
    // tr elements use 'fid#' in 'title' field
    var fid = obj.element.id.substring(3);
    for(var i = 0; i < attach_arr.length; i++) {
      if(attach_arr[i] != fid) {
        new_attach_arr[j++] = attach_arr[i];
      }
    }
    Webfm.$(Webfm.attachFormInput).value = new_attach_arr.join(',');
  }
}

Webfm.menuView = function(obj) {
  Webfm.selectFile(obj.clickObj.title, obj.element, false);
}

Webfm.menuDownload = function(obj) {
  Webfm.selectFile(obj.clickObj.title, obj.element, true);
}

Webfm.menuDbRem = function(obj) {
  var path = obj.element.title;
  //strip 'fid' from front of id
  var fid = obj.element.id.substring(3);
  if(Webfm.confirm(Webfm.js_msg["confirm-dbrem0"] + path + Webfm.js_msg["confirm-dbrem1"])) {
    var url = Webfm.ajaxUrl();
    Webfm.progressObj.show(Webfm.js_msg["work"],  "blue");
    var postObj = { action:encodeURIComponent("dbrem"), param0:encodeURIComponent(fid) };
    // path for callback must be a directory - not a file
    path = path.substring(0, path.lastIndexOf("/"));
    Webfm.HTTPPost(url, Webfm.dbrem_callback, path, postObj);
  }
  return false;
}

Webfm.menuGetPerm = function(obj) {
  var url = Webfm.ajaxUrl();
  Webfm.progressObj.show(Webfm.js_msg["work"],  "blue");
  var postObj = { action:encodeURIComponent("getperm"), param0:encodeURIComponent(obj.clickObj.title) };
  Webfm.HTTPPost(url, Webfm.ctxMenuPermCallback, '', postObj);
}

Webfm.dbrem_callback = function(string, xmlhttp, path) {
  Webfm.alrtObj.msg();
  Webfm.progressObj.hide();
  if (xmlhttp.status == 200) {
    var result = Drupal.parseJson(string);
    Webfm.dbgObj.dbg("dbrem:", Webfm.dump(result));
    if (result.status) {
      Webfm.dirListObj.refresh(path);
    } else {
      if(result.data) {
        Webfm.alrtObj.str_arr(result.data);
      } else {
        Webfm.alrtObj.msg("operation fail");
      }
    }
  } else {
    Webfm.alrtObj.msg(Webfm.js_msg["ajax-err"]);
  }
}

Webfm.menuInsert = function(obj) {
  Webfm.insert(obj.element.title, "file");
}
Webfm.insert = function(path, type) {
  var url = Webfm.ajaxUrl();
  Webfm.progressObj.show(Webfm.js_msg["work"],  "blue");
  var postObj = { action:encodeURIComponent("insert"), param0:encodeURIComponent(path), param1:encodeURIComponent(type) };
  if(type == "file") {
    // path for callback must be a directory - not a file
    path = path.substring(0, path.lastIndexOf("/"));
  }
  Webfm.HTTPPost(url, Webfm.insert_callback, path, postObj);
  return false;
}
Webfm.insert_callback = function(string, xmlhttp, path) {
  Webfm.alrtObj.msg();
  Webfm.progressObj.hide();
  if (xmlhttp.status == 200) {
    var result = Drupal.parseJson(string);
    Webfm.dbgObj.dbg("insert:", Webfm.dump(result));
    if (result.status) {
      //if success, update fetch
      if(result.data.cnt) {
        Webfm.dirListObj.refresh(path);
        Webfm.alrtObj.msg(result.data.cnt + Webfm.js_msg["inserted"]);
      }
      if(result.data.errcnt) {
        Webfm.alrtObj.msg(result.data.errcnt + Webfm.js_msg["not-inserted"]);
        Webfm.alrtObj.str_arr(result.data.err);
      }
    } else if(result.data.err) {
        Webfm.alrtObj.str_arr(result.data.err);
    } else {
      Webfm.alrtObj.msg(result.data);
    }
  } else {
    Webfm.alrtObj.msg(Webfm.js_msg["ajax-err"]);
  }
}

Webfm.generateFileHref  = function(obj, url) {
  if(typeof url == 'undefined') {
    url = getBaseUrl();
  }
  var title = '';
  if(typeof obj.ftitle != "undefined" && obj.ftitle != null && obj.ftitle.length)
    title = obj.ftitle;
  else
    title = obj.element.title.substring(obj.element.title.lastIndexOf("/") + 1);

  if(getWebfmCleanUrl()) {
    string = "<a href=\"" + url + "\/webfm_send\/" + obj.element.id.substring(3) + "\">" + title + "</a>";
  } else {
    string = "<a href=\"" + url + "\/?q=webfm_send\/" + obj.element.id.substring(3) + "\">" + title + "</a>";
  }

  return string;
}

Webfm.menuPutLinkInClipboard = function(obj) {
  Webfm.copyToClipboard(Webfm.generateFileHref(obj));
}

Webfm.menuPasteHref = function(obj) {
  var fileHref = Webfm.generateFileHref(obj, getBasePath().replace(/\/$/,''));
  var myField = Webfm.lastarea;

  //IE support
  if(document.selection) {
    myField.focus();
    sel = document.selection.createRange();
    sel.text = fileHref;
  }
  //other browsers
  else if(myField.selectionStart || myField.selectionStart == '0') {
    var startPos = myField.selectionStart;
    var endPos = myField.selectionEnd;
    myField.value = myField.value.substring(0, startPos)+ fileHref + myField.value.substring(endPos, myField.value.length);
  } else {
    myField.value += fileHref;
  }
}

Webfm.menuAdmin = function() {
  return(Webfm.admin);
}

Webfm.menuFileUid = function(obj) {
  //determine if we are the owner of this file
  return((Webfm.admin || obj.uid == getWebfmUid()) ? true : false);
}
Webfm.menuRenFileUid =function(obj) {
  if(Webfm.menuFileUid(obj))
    // Determine if name is a metadata title
    return(obj.ftitle == null);
  return false;
}
Webfm.menuFilePerm = function(obj) {
  // object must be file in db with user access
  if(Webfm.menuFidVal(obj)) {
    return(Webfm.menuFileUid(obj));
  }
  return false;
}
Webfm.menuAdminFidVal = function(obj) {
  if(Webfm.admin)
    return(Webfm.menuFidVal(obj));
  return false;
}

Webfm.menuAdminNoFidVal = function(obj) {
  if(Webfm.admin)
    return(Webfm.menuNoFidVal(obj));
  return false;
}

//menu prepFunc to determine if filerow has 'fid' as first 3 letters of id
Webfm.menuFidVal = function(obj) {
  if(obj.element.id.substring(0,3) == 'fid')
    return true;
  return false;
}

Webfm.menuNoFidVal = function(obj) {
  if(obj.element.id.substring(0,3) != 'fid')
    return true;
  return false;
}

Webfm.confirm = function(text) {
  var agree = confirm(text);
  return agree ? true : false;
}

/**
 * Context menu callbacks
 */
Webfm.ctxMenuAttachCallback = function(string, xmlhttp, cp) {
  Webfm.progressObj.hide();
  if (xmlhttp.status == 200) {
    var result = Drupal.parseJson(string);
//    Webfm.dbgObj.dbg("attach:", Webfm.dump(result));
    if (result.status) {
      Webfm.admin = result.admin;
      var filerow = new Webfm.filerow(Webfm.attachObj.body, result.data, 'attach', '', true, Webfm.menuHT.get('det'), Webfm.attachObj.eventListeners);
      var elInput = Webfm.$(Webfm.attachFormInput);
      elInput.setAttribute('value', (elInput.getAttribute('value')?elInput.getAttribute('value')+',':'') + result.data.id);
    } else
      Webfm.alrtObj.msg(result.data);
  } else {
    Webfm.alrtObj.msg(Webfm.js_msg["ajax-err"]);
  }
}

Webfm.ctxMenuCallback = function(string, xmlhttp, obj, mkdir_flag) {
  Webfm.progressObj.hide();
  Webfm.alrtObj.msg();
  if (xmlhttp.status == 200) {
    var result = Drupal.parseJson(string);
//    Webfm.dbgObj.dbg("context:", Webfm.dump(result));
//    Webfm.dbgObj.dbg("obj:", obj.droppath);
    if (result.status) {
      if(!obj.is_file && Webfm.dirTreeObj) {
        Webfm.dirTreeObj.fetch(true, false);
      }
      //if success, flush cache for updated fetch
      if(typeof mkdir_flag != "undefined") {
        Webfm.dirListObj.refresh(obj.parentPath, result.data);
      } else {
        Webfm.dirListObj.refresh(obj.parentPath);
      }
    } else if(result.data) {
      Webfm.alrtObj.str_arr(result.data);
    } else {
      Webfm.alrtObj.msg("operation fail");
    }
  } else {
    Webfm.alrtObj.msg(Webfm.js_msg["ajax-err"]);
  }
}

Webfm.ctxMenuMkdirCallback = function(string, xmlhttp, obj) {
  var mkdir_flag = true;
  // fourth var to signal the listing to rename the new directory
  Webfm.ctxMenuCallback(string, xmlhttp, obj, mkdir_flag)
}

Webfm.ctxMenuMetaCallback = function(string, xmlhttp, obj) {
  Webfm.progressObj.hide();
  if(xmlhttp.status == 200) {
    var result = Drupal.parseJson(string);
//    Webfm.dbgObj.dbg("meta result:", Webfm.dump(result));
    if(result.status) {
      Webfm.metaObj.createForm(result.data);
    } else
      Webfm.alrtObj.msg(result.data);
  } else {
    Webfm.alrtObj.msg(Webfm.js_msg["ajax-err"]);
  }
}

Webfm.ctxMenuPermCallback = function(string, xmlhttp, obj) {
  Webfm.progressObj.hide();
  if(xmlhttp.status == 200) {
    var result = Drupal.parseJson(string);
//    Webfm.dbgObj.dbg("perm result:", Webfm.dump(result));
    if(result.status) {
      Webfm.permObj.createForm(result.data);
    } else
      Webfm.alrtObj.msg(result.data);
  } else {
    Webfm.alrtObj.msg(Webfm.js_msg["ajax-err"]);
  }
}

/**
 * Webfm.perm constructor
 * 1st param is popup container obj
 * 2nd param is default startup width
 * 2nd param is default startup height
 */
Webfm.perm = function(container, width, height) {
  var elDiv = Webfm.ce('div');
  elDiv.setAttribute('id', 'webfm-perm-form');

  var elForm = Webfm.ce('form');
  elDiv.appendChild(elForm);

  var elTable = Webfm.ce('table');
  elForm.appendChild(elTable);

  var elTBody = Webfm.ce('tbody');
  elTable.appendChild(elTBody);

  var elControls = Webfm.ce('div');
  elForm.appendChild(elControls);

  this.obj = elDiv;
  this.container = container;
  this.form = elForm;
  this.tbody = elTBody;
  this.controls = elControls;
  this.width = width;
  this.height = height;
  this.eventListeners = this.container.eventListenerArr;
}

Webfm.perm.prototype.createForm = function(data) {
  cp = this;
  this.data = data;
  this.permit = (Webfm.admin || this.data["u"] == getWebfmUid()) ? true : false;
  //clear any permissions info
  this.resetForm();
  //create new pane to house this perm object
  this.pane = new Webfm.pane(this.container, Webfm.js_msg["perm"], "perm-pane", this.obj, this.width, this.height);
  //create permissions checkboxes
  this.fillFormData();
  //create controls if owner has rights to file
  if(this.permit) {
    this.buildFormControls();
  } else {
    //put read-only indicator in pane header
    pane.headerMsg("read-only");
  }
}

Webfm.perm.prototype.resetForm = function() {
  var tbody = this.tbody;
  while(tbody.hasChildNodes()) {
    tbody.removeChild(tbody.firstChild);
  }
  var controls = this.controls;
  while(controls.hasChildNodes()) {
    controls.removeChild(controls.firstChild);
  }
}

Webfm.perm.prototype.fillFormData = function() {
  for(var j in this.data) {
    if (j != "p") {
      var elTr = Webfm.ce('tr');

      // label td
      var elTd = Webfm.ce('td');
      elTd.appendChild(Webfm.ctn(Webfm.permInfoHT.get(j) + ': '));
      elTr.appendChild(elTd);

      // info td
      var elTd = Webfm.ce('td');
      elTd.appendChild(Webfm.ctn(this.data[j]));
      elTr.appendChild(elTd);

      this.tbody.appendChild(elTr);
    }
  }
  // Webfm.permKey keys correspond to permission bitfields
  for(var i in Webfm.permKey) {
    var elTr = Webfm.ce('tr');

    // label td
    var elTd = Webfm.ce('td');
    elTd.appendChild(Webfm.ctn(Webfm.permHT.get(Webfm.permKey[i]) + ': '));
    elTr.appendChild(elTd);

    // checkbox td
    var elTd = Webfm.ce('td');
    // use bitwise operator to determine permission bits
    var check = (parseInt(Webfm.permKey[i]) & parseInt(this.data["p"])) > 0;
    if(this.permit) {
      var elInput = Webfm.ce('input');
      elInput.setAttribute('type', 'checkbox');
      // checkbox name is used to build the new permission value
      elInput.setAttribute('name', Webfm.permKey[i]);
      if(check)
        elInput.setAttribute('checked', check);
      elTd.appendChild(elInput);
    } else {
      elTd.appendChild(Webfm.ctn(check ? "True" : "False"));
    }
    elTr.appendChild(elTd);

    this.tbody.appendChild(elTr);
  }
}

//build perm control buttons
Webfm.perm.prototype.buildFormControls = function() {
  var cp = this;

  var submitButton = Webfm.ce('input');
  submitButton.setAttribute('type', 'button');
  submitButton.setAttribute('value', Webfm.js_msg["submit"]);
  submitButton.className = "perm-button";
  var listener = Webfm.eventListenerAdd(cp.eventListeners, submitButton, "click", function(e) { if(cp.submitPerm()){cp.container.destroy();}Webfm.stopEvent(e); });
  this.controls.appendChild(submitButton);

  var resetButton = Webfm.ce('input');
  resetButton.setAttribute('type', 'button');
  resetButton.setAttribute('value', Webfm.js_msg["reset"]);
  resetButton.className = "perm-button";
  var listener = Webfm.eventListenerAdd(cp.eventListeners, resetButton, "click", function(e) { cp.createForm(cp.data); Webfm.stopEvent(e); });
  this.controls.appendChild(resetButton);
}

Webfm.perm.prototype.submitPerm = function() {
  var url = Webfm.ajaxUrl();
  var inputs = [];
  inputs = this.tbody.getElementsByTagName('input');

  var output = 0;
  for(var i in inputs) {
    // Build permission val from checkbox name
    if(inputs[i].checked)
      output += parseInt(inputs[i].name);
  }

  Webfm.progressObj.show(Webfm.js_msg["work"],  "blue");
  var postObj = { action:encodeURIComponent("putperm"), param0:encodeURIComponent(this.data["id"]), param1:encodeURIComponent(output)};
  Webfm.HTTPPost(url, this.submitPermcallback, this, postObj);
}

Webfm.perm.prototype.submitPermcallback = function(string, xmlhttp, obj) {
  Webfm.progressObj.hide();
  if (xmlhttp.status == 200) {
    var result = Drupal.parseJson(string);
    if (result.status) {
      //put confirmed result back into this.data for proper 'reset'
      obj.data["p"] = result.data["perm"];
//      Webfm.dbgObj.dbg('new perm :', obj.data["p"]);
    }
    obj.pane.headerMsg(result.msg);
  } else {
    Webfm.alrtObj.msg(Webfm.js_msg["ajax-err"]);
  }
}

/**
 * Webfm.metadata constructor
 * 1st param is popup container obj
 * 2nd param is default startup width
 * 2nd param is default startup height
 */
Webfm.metadata = function(container, width, height) {
  var elDiv = Webfm.ce('div');
  elDiv.setAttribute('id', 'webfm-meta-form');

  var elForm = Webfm.ce('form');
  elDiv.appendChild(elForm);

  var elTable = Webfm.ce('table');
  elForm.appendChild(elTable);

  var elTBody = Webfm.ce('tbody');
  elTable.appendChild(elTBody);

  var elControls = Webfm.ce('div');
  elForm.appendChild(elControls);

  this.obj = elDiv;
  this.container = container;
  this.form = elForm;
  this.tbody = elTBody;
  this.controls = elControls;
  this.fid = null;
  this.width = width;
  this.height = height;
  this.eventListeners = this.container.eventListenerArr;
}

Webfm.metadata.prototype.createForm = function(data) {
  cp = this;
  this.data = data;
  //clear any metadata info
  this.resetForm();
  //create new pane to house this metadata object
  this.pane = new Webfm.pane(this.container, Webfm.js_msg["metadata"], "meta-pane", this.obj, this.width, this.height);
  //create metadata fields
  this.fillFormData();
  //create controls if owner has rights to file
  if(this.fid) {
    this.buildFormControls();
  } else {
    //put read-only indicator in pane header
    this.pane.headerMsg("read-only");
  }
}

Webfm.metadata.prototype.resetForm = function() {
  var tbody = this.tbody;
  while(tbody.hasChildNodes()) {
    tbody.removeChild(tbody.firstChild);
  }
  var controls = this.controls;
  while(controls.hasChildNodes()) {
    controls.removeChild(controls.firstChild);
  }
  this.fid = null;
}

Webfm.metadata.prototype.fillFormData = function() {
  if(typeof this.data["id"] != "undefined") {
    this.fid = this.data["id"];
  }
  for(var i in this.data) {
    var meta = Webfm.metadataHT.get(i);
    var elTr = Webfm.ce('tr');

    // label td
    var elTd = Webfm.ce('td');
    elTd.appendChild(Webfm.ctn(meta.desc + ': '));
    elTr.appendChild(elTd);

    // info td
    var elTd = Webfm.ce('td');
    if(this.fid && meta.edit) {
      switch(meta.size) {
        case 256:
          // textarea
          var elTextArea = Webfm.ce('textarea');
          elTextArea.setAttribute('name', i);
          elTextArea.cols = "40";
          elTextArea.rows = "4";
          elTextArea.value = decodeURI(this.data[i]);
          elTd.appendChild(elTextArea);
          break;
        default:
          // textfield
          var elInput = Webfm.ce('input');
          elInput.setAttribute('type', 'textfield');
          elInput.setAttribute('name', i);
          elInput.setAttribute('size', '40');
          elInput.setAttribute('value', decodeURI(this.data[i]));
          elTd.appendChild(elInput);
          break;
      }
    } else {
      elTd.appendChild(Webfm.ctn(decodeURI(this.data[i])));
    }
    elTr.appendChild(elTd);

    // validation td
    var elTd = Webfm.ce('td');
    elTd.appendChild(Webfm.ctn(String.fromCharCode(160))); //&nbsp;
    elTr.appendChild(elTd);

    this.tbody.appendChild(elTr);
  }
}

//build metadata control buttons
Webfm.metadata.prototype.buildFormControls = function() {
  var cp = this;

  var submitButton = Webfm.ce('input');
  submitButton.setAttribute('type', 'button');
  submitButton.setAttribute('value', Webfm.js_msg["submit"]);
  submitButton.className = "meta-button";
  var listener = Webfm.eventListenerAdd(cp.eventListeners, submitButton, "click", function(e) { if(cp.submitMeta()){cp.container.destroy();}Webfm.stopEvent(e); });
  this.controls.appendChild(submitButton);

  var resetButton = Webfm.ce('input');
  resetButton.setAttribute('type', 'button');
  resetButton.setAttribute('value', Webfm.js_msg["reset"]);
  resetButton.className = "meta-button";
  var listener = Webfm.eventListenerAdd(cp.eventListeners, resetButton, "click", function(e) { cp.createForm(cp.data); Webfm.stopEvent(e); });
  this.controls.appendChild(resetButton);
}

// Validate the length of input
Webfm.metadata.prototype.validateMetaInput = function(elInput) {
  var len = Webfm.metadataHT.get(elInput.name).size;
//  Webfm.dbgObj.dbg("validateMetaInput", elInput.name);
  if(len < 256) {
    var data = Webfm.trim(elInput.value);
    if(data.length > len) {
      // Append error msg to validation td
      var err_msg = Webfm.ctn(Webfm.js_msg["len-err"]);
      elInput.parentNode.nextSibling.style.color = 'red';
      elInput.parentNode.nextSibling.appendChild(err_msg);
      setTimeout(function(){elInput.focus();},10);
      return false;
    } else {
      // Remove any contents of validation td
      while (elInput.parentNode.nextSibling.hasChildNodes())
        elInput.parentNode.nextSibling.removeChild(elInput.parentNode.nextSibling.firstChild);
    }
  }
  return true;
}

Webfm.metadata.prototype.submitMeta = function() {
  var url = Webfm.ajaxUrl();
  var inputs = [];
  var arr = [];
  var textareas = [];
  inputs = this.tbody.getElementsByTagName('input');
  textareas = this.tbody.getElementsByTagName('textarea');

  var input_num = inputs.length;
  for(var i = 0; i < input_num; i++) {
    if(!(this.validateMetaInput(inputs[i])))
      break;
  }

  // All fields validated
  // TODO: Data format needs to be reworked (json?)
  if(i == input_num) {
    this.output = "";
    for(var i = 0; i < input_num; i++) {
      this.output += encodeURIComponent(inputs[i].name) + ":" + encodeURIComponent(Webfm.trim(inputs[i].value)) + ",";
    }
    for(i = 0; i < textareas.length; i++) {
      this.output += encodeURIComponent(textareas[i].name) + ":" + encodeURIComponent(Webfm.trim(textareas[i].value)) + ",";
    }
    if(this.output.length) {
      Webfm.progressObj.show(Webfm.js_msg["work"],  "blue");
      //strip off final comma
      this.output = this.output.substring(0, this.output.length - 1);
      var postObj = { action:encodeURIComponent("putmeta"), param0:encodeURIComponent(this.fid), param1:encodeURIComponent(this.output)};
      Webfm.HTTPPost(url, this.submitMetacallback, this, postObj);
    }
  } else {
    alert(Webfm.js_msg["fix_input"]);
  }
  return false;
}

Webfm.metadata.prototype.submitMetacallback = function(string, xmlhttp, obj) {
  Webfm.progressObj.hide();
  if (xmlhttp.status == 200) {
    var result = Drupal.parseJson(string);
//    Webfm.dbgObj.dbg('submitMetacallback: ', Webfm.dump(result));
    if (result.status) {
      //update data for reset button
      var params = [];
      params = obj.output.split(',');
      for(var i = 0; i < params.length; i++) {
        var key = params[i].substring(0, params[i].indexOf(":"));
        var val = params[i].substring(params[i].indexOf(":") + 1);
        obj.data[key] = val;
      }
    }
    obj.pane.headerMsg(result.data);
  } else {
    Webfm.alrtObj.msg(Webfm.js_msg["ajax-err"]);
  }
}

// Trim leading/trailing whitespace off string
Webfm.trim = function(str) {
  return str.replace(/^\s+|\s+$/g, '');
}

/*
 * Webfm.attach constructor
 * param is parentId from hook_form_alter
 */
Webfm.attach = function(parentId) {
  var wa = this;
  this.id = parentId
  this.attached = '';
  this.eventListeners = [];

  var elTable = Webfm.ce('table');
  var elTableBody = Webfm.ce('tbody');
  //attached file rows are appended to this div
  this.body = elTableBody;

  //Header
  var elTr = Webfm.ce('tr');

  // icon column
  var elTd = Webfm.ce('td');
  elTd.className = 'head';
  elTr.appendChild(elTd);

  // Sort dir/files column
  var elTd = Webfm.ce('td');
  elTd.className = 'head';
  elTd.appendChild(Webfm.ctn(Webfm.js_msg["attach-title"]));
  elTr.appendChild(elTd);

  // date/time column
  var elTd = Webfm.ce('td');
  elTd.className = 'head';
  elTd.appendChild(Webfm.ctn(Webfm.js_msg["column2"]));
  elTr.appendChild(elTd);

  // file size column
  var elTd = Webfm.ce('td');
  elTd.className = 'head';
  elTd.appendChild(Webfm.ctn(Webfm.js_msg["column3"]));
  elTr.appendChild(elTd);

  // owner column
  var elTd = Webfm.ce('td');
  elTd.className = 'head';
  elTd.appendChild(Webfm.ctn(Webfm.js_msg["column4"]));
  elTr.appendChild(elTd);

  elTableBody.appendChild(elTr);
  elTable.appendChild(elTableBody);
  Webfm.$(parentId).appendChild(elTable);
}

Webfm.attach.prototype.fetch = function() {
  var url = Webfm.ajaxUrl();
  // action attribute of node-edit form contains the node number
  var node_url;
  if(Webfm.$('node-form')) {
    node_url = Webfm.$('node-form').action;
  }
  if(Webfm.$('comment-form')) {
    node_url = Webfm.$('comment-form').action;
  }
  Webfm.progressObj.show(Webfm.js_msg["work"],  "blue");
  var postObj = { action:encodeURIComponent("attach"), param0:encodeURIComponent(node_url) };
  // If we are in a preview/validate, the fids are still stored in the form.
  // Pass them to webfm_ajax to reload them.
  var fids = Webfm.$(Webfm.attachFormInput).value;
  if (fids.length != 0) {
    postObj.param1 = encodeURIComponent(fids);
  }
  Webfm.HTTPPost(url, this.callback, this, postObj);
}

Webfm.attach.prototype.callback = function(string, xmlhttp, obj) {
  Webfm.progressObj.hide();
  if (xmlhttp.status == 200) {
    result = Drupal.parseJson(string);
 //   Webfm.dbgObj.dbg("attach.fetch:", Webfm.dump(result));
    if(result.status) {
      if(result.data.length) {
        Webfm.admin = result.admin;
        var elInput = Webfm.$(Webfm.attachFormInput);

        var attach_arr = [];
        attach_arr = Webfm.$(Webfm.attachFormInput).value.split(',');
        for(var i = 0; i < result.data.length; i++) {
          var filerow = new Webfm.filerow(obj.body, result.data[i], 'attach', '', true, Webfm.menuHT.get('det'), obj.eventListeners);
          // Don't add if it already exists.
          // Note that values are kept in the form for preview/failed validate.
          for (var j = 0; j < attach_arr.length; j++) {
            if (result.data[i].id == attach_arr[j])
              break;
          }
          if (j == attach_arr.length) {
            elInput.setAttribute('value', (elInput.getAttribute('value')?elInput.getAttribute('value')+',':'') + result.data[i].id);
          }
        }
      }
    } else
      Webfm.alrtObj.msg(result.data);
  } else {
    Webfm.alrtObj.msg(Webfm.js_msg["ajax-err"]);
  }
}

/**
 * Webfm.search constructor
 * 1st param is popup container obj
 * 2nd param is default startup width
 * 2nd param is default startup height
 */
Webfm.search = function(container, width, height) {
  var elDiv = Webfm.ce('div');
  elDiv.setAttribute('id', 'webfm-search');

  var elForm = Webfm.ce('form');
  elDiv.appendChild(elForm);

  var elResults = Webfm.ce('div');
  elDiv.appendChild(elResults);

  this.obj = elDiv;
  this.container = container;
  this.form = elForm;
  this.results = elResults;
  this.width = width;
  this.height = height;
  this.iconDir = getWebfmIconDir();
  this.eventListeners = this.container.eventListenerArr;
}

Webfm.search.prototype.resetForm = function() {
  var form = this.form;
  while(form.hasChildNodes()) {
    form.removeChild(form.firstChild);
  }
}
Webfm.search.prototype.resetResults = function() {
  var results = this.results;
  while(results.hasChildNodes()) {
    results.removeChild(results.firstChild);
  }
}

Webfm.search.prototype.createForm = function(source) {
  cp = this;
  this.source = source;
  //clear any metadata info
  this.resetForm();
  cp.resetResults();
  //create new pane to house this metadata object
  var pane = new Webfm.pane(this.container, Webfm.js_msg["search-title"], "search-pane", this.obj, this.width, this.height);
  //put search path in header
  pane.headerMsg(source);
  //create search fields
  var elInput = Webfm.ce('input');
  elInput.setAttribute('type', 'textfield');
  elInput.setAttribute('size', '30');
  setTimeout(function(){elInput.focus();},10);
  var listener = Webfm.eventListenerAdd(this.eventListeners, elInput, "keydown", function(e) { if(Webfm.enter(e)){ cp.submit(elInput.value); elInput.blur(); Webfm.stopEvent(e);} });
  this.form.appendChild(elInput);

  var searchButton = Webfm.ce('input');
  searchButton.setAttribute('type', 'button');
  searchButton.setAttribute('value', Webfm.js_msg["search"]);
  var listener = Webfm.eventListenerAdd(this.eventListeners, searchButton, "click", function(e) { cp.submit(elInput.value);Webfm.stopEvent(e); });
  this.form.appendChild(searchButton);
  pane.show();
}

Webfm.search.prototype.submit = function(value) {
  var url = Webfm.ajaxUrl();
  Webfm.progressObj.show(Webfm.js_msg["work"],  "blue");
  var postObj = { action:encodeURIComponent("search"), param0:encodeURIComponent(this.source), param1:encodeURIComponent(value) };
  Webfm.HTTPPost(url, this.callback, this, postObj);
}

Webfm.search.prototype.callback = function(string, xmlhttp, cp) {
  Webfm.progressObj.hide();
  if (xmlhttp.status == 200) {
    cp.resetResults();

    //build ul of search results
    var result = Drupal.parseJson(string);
    if(result.files.length) {
      var searchList = Webfm.ce('ul');
      for(var i = (result.files.length - 1); i >= 0; i--) {
        var elLi = Webfm.ce('li');

        var elImg = Webfm.ce('img');
        elImg.setAttribute('src', cp.iconDir + '/d.gif');
        elImg.setAttribute('alt', Webfm.js_msg["u_dir"]);
        //title is path to directory
        elImg.setAttribute('title', result.files[i].p);
        var listener = Webfm.eventListenerAdd(cp.eventListeners, elImg, "click", function(e) { cp.selectDir(e); Webfm.stopEvent(e); });
        var listener = Webfm.eventListenerAdd(cp.eventListeners, elImg, "mouseover", function(e) { cp.hoverDir(e, true); });
        var listener = Webfm.eventListenerAdd(cp.eventListeners, elImg, "mouseout", function(e) { cp.hoverDir(e, false); });
        elLi.appendChild(elImg);

        elLi.appendChild(Webfm.ctn('  '));

        var elA = Webfm.ce('a');
        elA.setAttribute('href', '#');
        if(result.files[i].id) {
          //first three letters of id must be 'fid' for selectFile
          //tooltip indicates if file is downloadable
          elA.setAttribute('id', 'fidsrch' + result.files[i].id);
          elA.setAttribute('title', Webfm.js_msg["file-dwld"]);
          var listener = Webfm.eventListenerAdd(cp.eventListeners, elA, "click", function(e) { cp.selectFile(e); Webfm.stopEvent(e); });
        } else {
          elA.setAttribute('title', Webfm.js_msg["no-file-dwld"]);
        }
        elA.appendChild(Webfm.ctn(result.files[i].n));
        elLi.appendChild(elA);

        searchList.appendChild(elLi);
      }
      cp.results.appendChild(searchList);
    } else {
      var no_match = Webfm.ctn(Webfm.js_msg["no-match"]);
      cp.results.style.color = 'red';
      cp.results.appendChild(no_match);
    }
  } else {
    Webfm.alrtObj.msg(Webfm.js_msg["ajax-err"]);
  }
}

// IE does not understand 'this' inside event listener func
Webfm.search.prototype.hoverDir = function(event, state) {
  var el = event.target||window.event.srcElement;
  el.src = this.iconDir + (state ? '/open.gif' : '/d.gif');
}

Webfm.search.prototype.selectDir = function(event) {
  var el = event.target||window.event.srcElement;
  Webfm.selectDir(el.title);
}
Webfm.search.prototype.selectFile = function(event) {
  var el = event.target||window.event.srcElement;
  Webfm.selectFile(el.id.substring(7), el, true);
}

/*
 * debug constructor
 * 1st param is popup container obj
 * 2nd param is default startup width
 * 2nd param is default startup height
 */
Webfm.debug = function(container, width, height) {
  var dbgButton = '';
  //id from webfm_main()
  dbgButton = Webfm.$("webfm-debug-link");
  this.enable = dbgButton;
  if(dbgButton) {
    this.container = container;
    this.eventListeners = this.container.eventListenerArr;
    this.width = width;
    this.height = height;
    var cp = this;

    //create cache popup
    var cacheCont = new Webfm.popup("webfm-cacheCont");
    this.cacheCont = cacheCont;

    var report = Webfm.ce('div');
    this.report = report;

    //attach popup creation to [debug] link
    var listener = Webfm.eventListenerAdd(Webfm.eventListeners, dbgButton, "click", function() { cp.show(); });
  }
}

Webfm.debug.prototype.dbg = function(title, msg) {
  if(this.enable) {
    //put latest msg at top (less scrolling)
    elBr = Webfm.ce('br');
    this.report.insertBefore(elBr, this.report.firstChild);
    if(msg) {
      this.report.insertBefore(Webfm.ctn(msg), this.report.firstChild);
    }
    if(title) {
      var elSpan = Webfm.ce('span');
      elSpan.className = 'g';
      elSpan.appendChild(Webfm.ctn(title));
      this.report.insertBefore(elSpan, this.report.firstChild);
    }
  }
}

Webfm.debug.prototype.clear = function() {
  if(this.enable) {
    Webfm.alrtObj.msg();
    while(this.report.hasChildNodes()) {
      this.report.removeChild(this.report.firstChild);
    }
    this.cacheCont.destroy();
  }
}

Webfm.debug.prototype.show = function() {
  if(this.enable) {
    var elDiv = Webfm.ce('div');
    elDiv.setAttribute('id', 'webfm-debug');
    this.obj = elDiv;

    //create new pane to house this metadata object
    var pane = new Webfm.pane(this.container, Webfm.js_msg["debug-title"], "debug-pane", this.obj, this.width, this.height);

    var cp = this;
    var elControls = Webfm.ce('div');
    this.controls = elControls;
    var elClear = Webfm.ce('input');
    elClear.setAttribute('type', 'button');
    elClear.setAttribute('value', Webfm.js_msg["clear"]);
    elClear.className = "dbg-button";
    var listener = Webfm.eventListenerAdd(this.eventListeners, elClear, "click", function() { cp.clear(); });
    this.controls.appendChild(elClear);
    var elCache = Webfm.ce('input');
    elCache.setAttribute('type', 'button');
    elCache.setAttribute('value', Webfm.js_msg["cache"]);
    elCache.className = "dbg-button";
    var listener = Webfm.eventListenerAdd(this.eventListeners, elCache, "click", function(e) { cp.showCache();Webfm.stopEvent(e); });
    this.controls.appendChild(elCache);
    this.obj.appendChild(elControls);

    var report = this.report;
    this.obj.appendChild(report);
  }
}

Webfm.debug.prototype.showCache = function() {
  if(this.enable) {
    //create new pane to house this metadata object
    var dump = Webfm.ctn(Webfm.dump(Webfm.dirListObj.cache.dump()));
    var pane = new Webfm.pane(this.cacheCont, Webfm.js_msg["cache-title"], "cache-pane", dump, this.width, this.height);
    pane.show();
  }
}

/**
 * Progress indicator
 */
Webfm.progress = function(parent, id) {
  this.id = id;
  this.flag = false;
  var elSpan = Webfm.ce('span');
  elSpan.setAttribute('id', this.id);
  parent.appendChild(elSpan);
}

Webfm.progress.prototype.hide = function() {
  if(this.flag) {
    this.flag = false;
    Webfm.clearNodeById(this.id);
  }
}

Webfm.progress.prototype.show = function(x, y) {
  if(!this.flag) {
    this.flag = true;
    var prog = Webfm.$(this.id);
    var elSpan = Webfm.ce('span');
    elSpan.style.backgroundColor = y;
    elSpan.appendChild(Webfm.ctn(x));
    prog.appendChild(elSpan);
    prog.style.visibility = 'visible';
  }
}

/**
 * Alert indicator
 */
Webfm.alert = function(parent, id) {
  this.id = id;
  var elDiv = Webfm.ce('div');
  this.node = elDiv;
  elDiv.setAttribute('id', id);
  parent.appendChild(elDiv);
}

Webfm.alert.prototype.msg = function(msg) {
  if(!msg) {
    Webfm.clearNodeById(this.id);
  } else {
    var elSpan = Webfm.ce('span');
    elSpan.className = 'alertspan';
    elSpan.appendChild(Webfm.ctn(msg));
    this.node.appendChild(elSpan);
    this.lf();
  }
}

Webfm.alert.prototype.lf = function() {
  var elBr = Webfm.ce('br');
  this.node.appendChild(elBr);
}

/*
 * Display an array of strings alert
 */
Webfm.alert.prototype.str_arr = function(arr) {
  if(typeof arr == 'function')
    return;
  else if(Webfm.isArray(arr)) {
    for(var i = 0; i < arr.length; i++) {
      this.str_arr(arr[i]);
    }
  }
  if(typeof arr == 'string') {
    this.msg(arr);
  }
}

/**
 * Webfm.popup constructor
 */
Webfm.popup = function(Id) {
  this.id = Id;
  var elDiv = Webfm.ce('div');
  elDiv.id = Id; //id for css
  elDiv.style.cssText = 'position:absolute;display:none;';
  document.body.appendChild(elDiv);
  this.obj = elDiv;

  //vars used for storing position info for contained object (pane)
  this.width = null;
  this.content_height = null;
  this.top = null;
  this.left = null;
  this.eventListenerArr = [];
}
Webfm.popup.prototype.getScrollY = function () {
  var scrY = 0;
  if(typeof window.pageYOffset == 'number') {
    scrY = window.pageYOffset;
  } else if(document.body && document.body.scrollTop) {
    scrY = document.body.scrollTop;
  } else if(document.documentElement && document.documentElement.scrollTop) {
    scrY = document.documentElement.scrollTop;
  }
  return scrY;
}
Webfm.popup.prototype.getObjectOffset = function(event, element, comp) {
  var objPos = this.objPosition(element, comp);
  var mousePos = Drupal.mousePosition(event);
  return {x:mousePos.x - objPos.x, y:mousePos.y - objPos.y};
}
Webfm.popup.prototype.objPosition = function(element, comp) {
  var curleft = curtop = 0;
  if(element.offsetParent) {
    curleft = element.offsetLeft;
    curtop = element.offsetTop;
    while(element = element.offsetParent) {
      curleft += element.offsetLeft;
      curtop += element.offsetTop;
    }
  }
  // IE must compensate for relative positioning in css
  if(Webfm.browser.isIE && comp) {
    curleft += parseInt(getWebfmIEListOffset());
    if(comp == 'tree') {
      curleft += parseInt(getWebfmIETreeOffset());
    }
  }
  return { x:curleft, y:curtop };
}
Webfm.popup.prototype.destroy = function () {
  //cleanup event closures for this popup
  Webfm.eventUnregister(this.eventListenerArr);

  while(this.obj.hasChildNodes())
    this.obj.removeChild(this.obj.firstChild);
	document.onmousemove = null;
	document.onmouseup = null;
	this.obj.style.display = 'none';
}
Webfm.popup.prototype.isEmpty = function () {
  return (!this.obj.hasChildNodes());
}

/**
 * Webfm.pane constructor
 * 1st param is popup container obj
 * 2nd param is title displayed in pane header
 * 3rd param is this obj id
 * 4th param is content appended to this obj content div
 * 5th param is default startup width
 * 6th param is default startup height
 */
Webfm.pane = function(popupCont, title, paneId, content, paneWidth, contentHeight) {
  this.popupCont = popupCont;
  var cp = this;
  var body_scroll_top = this.popupCont.getScrollY();
  var body_height = (Webfm.browser.isIE)? document.documentElement.clientHeight : window.innerHeight;
  // locate pane in centre of screen only if drag container not already in use
  if((!popupCont.width) ||
     (!popupCont.content_height) ||
     (!popupCont.top) ||
     (!popupCont.left)) {
    var body_scroll_left = (Webfm.browser.isIE)? document.documentElement.scrollLeft : window.pageXOffset;
    var body_width = (Webfm.browser.isIE)? document.documentElement.clientWidth : window.innerWidth;

    this.popupCont.width = paneWidth;
    this.popupCont.content_height = contentHeight;
    this.popupCont.top = body_scroll_top + (body_height - contentHeight)/2;
    this.popupCont.left = body_scroll_left + (body_width - paneWidth)/2;
  }

  //Compensate pane position for vertical scroll that places it out of view
  if((body_scroll_top + body_height) < this.popupCont.top) {
    this.popupCont.top = body_scroll_top + (body_height - contentHeight)/2;
  }
  if((body_scroll_top) > this.popupCont.top + this.popupCont.content_height) {
    this.popupCont.top = body_scroll_top + (body_height - contentHeight)/2;
  }

  // Set top of drag popup and empty any contents
  this.popupCont.obj.style.top  = this.popupCont.top + "px";
  this.popupCont.obj.style.left = this.popupCont.left + "px";
  this.popupCont.destroy();

  // Pane container div
  var iconDir = getWebfmIconDir();
  var pane = Webfm.ce('div');
  this.pane = pane;
  pane.id = paneId;
  pane.className = "pane";
	pane.style.width = this.popupCont.width + "px";
  this.popupCont.obj.appendChild(this.pane);

  // pane header
  var header = Webfm.ce('div');
  this.header = header;
  header.id = pane.id + '-header';
  header.className = "pane-header";
  var elTitle = Webfm.ce('div');
  elTitle.appendChild(Webfm.ctn(title));
  elTitle.className = "pane-title";
  header.appendChild(elTitle);
  var elMsg = Webfm.ce('div');
  this.msg = elMsg;
  elMsg.className = "pane-msg";
  header.appendChild(elMsg);
  var cp = this;
  var listener = Webfm.eventListenerAdd(Webfm.eventListeners, header, "mousedown", function(e) { cp.dragStart(e, 1); });
  var elA = Webfm.ce('a');
  elA.setAttribute('href', '#');
  elA.setAttribute('title', Webfm.js_msg["close"]);
  elA.className = "pane-close";
  var elImg = Webfm.ce('img');
  elImg.setAttribute('src', iconDir+ '/x.gif');
  elImg.setAttribute('alt', Webfm.js_msg["close"]);
  elA.appendChild(elImg);
  header.appendChild(elA);
  var listener = Webfm.eventListenerAdd(Webfm.eventListeners, elA, "click", function(e) { cp.popupCont.destroy();Webfm.stopEvent(e); });
  pane.appendChild(header);

  // pane content
  var contentContainer = Webfm.ce('div');
  this.content = contentContainer;
  contentContainer.id = pane.id + '-content';
  contentContainer.className = "pane-content";
  contentContainer.style.height = this.popupCont.content_height + "px";
  pane.appendChild(contentContainer);

  // pane footer
  var footer = Webfm.ce('div');
  this.footer = footer;
  footer.className = "pane-footer";
  var elResize = Webfm.ce('a');
  elResize.setAttribute('href', '#');
  elResize.setAttribute('title', Webfm.js_msg["resize"]);
  elResize.className = "pane-resize";
  var elImg = Webfm.ce('img');
  elImg.setAttribute('src', iconDir+ '/resize.gif');
  elImg.setAttribute('alt', Webfm.js_msg["resize"]);
  elResize.appendChild(elImg);
  footer.appendChild(elResize);
  var listener = Webfm.eventListenerAdd(Webfm.eventListeners, elResize, "mousedown", function(e) { cp.dragStart(e, 0); });
  pane.appendChild(footer);

  if(content)
    this.fill(content);
}
Webfm.pane.prototype.dragStart = function(event, move) {
  Webfm.dragging = true;
  var cp = this;
  event = event || window.event;

  // Hide content - mousing over visible iframe can cause problems
  this.content.style.visibility = "hidden";
  this.popupCont.obj.style.zIndex = ++Webfm.zindex;
  if(move == 1) {
    //Offset of cursor position form top/left corner of drag object on mousedown
    this.offset = this.popupCont.getObjectOffset(event, this.header);
    document.onmousemove = function(e) { cp.drag(e); };
    document.onmouseup = function(e) { cp.dragEnd(e); };
    this.drag(event);
  } else {
    //Start position of cursor on mousedown
    this.initPos = Drupal.mousePosition(event);
    //Start width and height of pane content on mousedown
    this.width = parseInt(this.pane.offsetWidth);
    this.height = parseInt(this.content.offsetHeight);
    document.onmousemove = function(e) { cp.resize(e); };
    document.onmouseup = function(e) { cp.resizeEnd(e);  };
    Webfm.scrollVal = this.popupCont.getScrollY();
    this.resize(event);
  }
}
Webfm.pane.prototype.drag = function(event) {
  event = event || window.event;

  var pos = Drupal.mousePosition(event);
  var x = pos.x - this.offset.x;
  var y = pos.y - this.offset.y;

  //Scroll page if near top or bottom edge.  Hardcoded values
  var scroll = this.popupCont.getScrollY();
  if(typeof window.innerHeight == 'number') {
    if(pos.y > (window.innerHeight + scroll - 35)) {
      window.scrollBy(0,20);
    } else if(pos.y  - scroll < (25)) {
      window.scrollBy(0,-20);
    }
  } else if(document.documentElement && document.documentElement.clientHeight) {
    if(pos.y > (document.documentElement.clientHeight + scroll - 35)) {
      window.scrollBy(0,20);
    } else if(pos.y  - scroll < (25)) {
      window.scrollBy(0,-20);
    }
  }

  // Move our drag container to wherever the mouse is (adjusted by mouseOffset)
  this.popupCont.obj.style.top  = y + 'px';
  this.popupCont.obj.style.left = x + 'px';

  // Prevent selection of textnodes
  Webfm.stopEvent(event);
}
Webfm.pane.prototype.resize = function(event) {
  event = event || window.event;

  // Calculate distance from start position
  var pos = Drupal.mousePosition(event);
  var x = this.width + (pos.x - this.initPos.x);
  var y = this.height + (pos.y - this.initPos.y);

  // Adjust pane width and height css with min size constraint
	this.pane.style.width = Math.max(x, 100) + "px";
	this.content.style.height = Math.max(y, 100) + "px";

  // Prevent selection of textnodes
  Webfm.stopEvent(event);
}
Webfm.pane.prototype.dragEnd = function (event) {
  // Store popup container top/left position global vars
  this.popupCont.top  = parseInt(this.popupCont.obj.style.top);
  this.popupCont.left = parseInt(this.popupCont.obj.style.left);
  this.end(event);
}
Webfm.pane.prototype.resizeEnd = function (event) {
  // Store popup container width/height size global vars
  this.popupCont.width = parseInt(this.pane.style.width);
  this.popupCont.content_height = parseInt(this.content.style.height);
  this.end(event);
  // counter browser scrolling
  setTimeout(function(){window.scrollTo(0, Webfm.scrollVal);}, 1);
}
Webfm.pane.prototype.end = function (event) {
  this.content.style.visibility = "visible";
  Webfm.dragging = false;
	document.onmousemove = null;
	document.onmouseup = null;
  Webfm.stopEvent(event);
}
Webfm.pane.prototype.headerMsg = function (string) {
  while(this.msg.hasChildNodes())
    this.msg.removeChild(this.msg.firstChild);
  this.msg.appendChild(Webfm.ctn(string));
}
Webfm.pane.prototype.fill = function (content) {
  if(content)
    this.content.appendChild(content);
  this.show();
}
Webfm.pane.prototype.clear = function () {
  while(this.content.hasChildNodes())
    this.content.removeChild(this.content.firstChild);
  while(this.msg.hasChildNodes())
    this.msg.removeChild(this.content.firstChild);
}
Webfm.pane.prototype.hide = function () {
  this.popupCont.obj.style.display = 'none'
}
Webfm.pane.prototype.show = function () {
  this.popupCont.obj.style.zIndex = ++Webfm.zindex;
  this.popupCont.obj.style.display = 'block'
}

/**
 * Webfm.draggable constructor
 */
Webfm.draggable = function(popupCont, element, _class) {
  this.dragCont = popupCont;
  this.element = element;
  this.curpath = element.title;
  this.isTree = _class.substring(0,4) == 'tree';
  this.isDir = (_class == 'dirrow') || this.isTree;
  this.isAttach = _class == 'attachrow';
  this.icondir = getWebfmIconDir();
  this.comp = this.isTree ? 'tree' : 'list';
}

Webfm.draggable.prototype.mouseButton = function(event) {
  event = event || window.event;

  // Determine mouse button
  var rightclick = Webfm.rclick(event);
  if(!rightclick && event.altKey == false)
    this.dragStart(event);
}

Webfm.draggable.prototype.dragStart = function (event) {
  Webfm.dragging = true;

  // Destroy all contents in popup container.
  this.dragCont.destroy();

  var cp = this;
  document.onmousemove = function(e) { cp.drag(e); };
  document.onmouseup = function(e) { cp.dragEnd(e); };

  // Make transparent
  this.element.style.opacity = 0.5;

  // Process
  this.drag(event);
}

Webfm.draggable.prototype.drag = function (event) {
  var cp = this;
  event = event || window.event;

  //Build Webfm.dropContainers array
  //The dragStart flag ensures that the following executes once only at the
  //beginning of a drag-drop
  if (!(Webfm.dragStart)) {
    Webfm.dragStart = true;

    //copy dragged element into drag container and make visible
    this.offset = this.dragCont.getObjectOffset(event, this.element, this.comp);
    if(Webfm.browser.isIE && !this.isTree) {
      /* IE cannot clone table rows */
      var elDiv = Webfm.ce('div');
      elDiv.setAttribute('id', 'webfm-ieDD');
      elDiv.appendChild(this.element.getElementsByTagName('img')[0].cloneNode(false));
      elDiv.appendChild(this.element.getElementsByTagName('a')[0].firstChild.cloneNode(false));
      this.dragCont.obj.appendChild(elDiv);
    } else {
      this.dragCont.obj.appendChild(this.element.cloneNode(true));
    }
    this.dragCont.obj.style.display = 'block'
    this.dragCont.obj.style.zIndex = ++Webfm.zindex;

    Webfm.dropContainers = [];

    // Build list drop container array
    if(!this.isAttach) {
      var dirListRows = Webfm.dirListObj.obj.getElementsByTagName('tr');
      var dirListCont = [];
      for(var k = 0; k < dirListRows.length; k++) {
        if (dirListRows[k].className == 'dirrow') {
          dirListCont.push(dirListRows[k]);
        }
      }
      if (dirListCont.length) {
        for(var i = 0; i < dirListCont.length; i++) {
          // DragDrop element is folder icon
          var droptarget = dirListCont[i];
          var cont_pos = this.dragCont.objPosition(droptarget, this.comp);
          var skip = false;
          var droppath = dirListCont[i].title;
          if(this.curpath == droppath)
            continue;
          if(this.isTree) {
            var curtemp = [];
            curtemp = this.curpath.split('/');
            var droptemp = [];
            droptemp = droppath.split('/');
            // Test if drop path is beneath the drag path
            for(var j = 0; j < curtemp.length; j++) {
              if(curtemp[j] != droptemp[j])
                break;
            }
            if(j == curtemp.length) {
              skip = true;
            } else {
              // Test if drop path is directly above drag path (already a subdir)
              for(var j = 0; j < droptemp.length; j++) {
                if(curtemp[j] != droptemp[j])
                 break;
              }
              if((j == droptemp.length) && (curtemp.length == j + 1))
                skip = true;
            }
          }
          if(skip == false) {
            // Valid drop container
            var container = { id: dirListCont[i].id, x: cont_pos.x, y: cont_pos.y, w: droptarget.offsetWidth, h: droptarget.offsetHeight };
            Webfm.dropContainers.push(container);
          }
        }
      }

      var dirTreeCont = '';
      dirTreeCont = Webfm.$("tree")
      if(dirTreeCont) {
          //reuse var for container list
          dirTreeCont = Webfm.$("tree").getElementsByTagName('li');
        if (dirTreeCont.length) {
          // Build tree drop container array
          for(var i = 0; i < dirTreeCont.length; i++) {
            // DragDrop element is folder icon
            var droptarget = dirTreeCont[i].getElementsByTagName('div')[0];
            var cont_pos = this.dragCont.objPosition(droptarget, this.comp);
            var skip = false;

            if(this.isTree) {
              // Prevent a directory drop onto itself or its direct parent li (already a sub-directory)
              if((dirTreeCont[i] != this.element) && (dirTreeCont[i] != this.element.parentNode.parentNode)) {
                var children = this.element.getElementsByTagName('li');
                // Prevent a directory drop into a sub-directory
                for(var j = 0; j < children.length; j++) {
                  if(children[j] == dirTreeCont[i])
                    skip = true;
                }
              } else {
                skip = true;
              }
            } else {
              var droppath = dirTreeCont[i].title;
              // A regex would be preferable here
              if(this.curpath != droppath){
                var curtemp = [];
                curtemp = this.curpath.split('/');
                var droptemp = [];
                droptemp = droppath.split('/');
                // Test if drop path is beneath the drag path
                for(var j = 0; j < curtemp.length; j++) {
                  if(curtemp[j] != droptemp[j])
                    break;
                }
                if(j == curtemp.length) {
                  skip = true;
                } else {
                  // Test if drop path is directly above drag path (already a subdir)
                  for(var j = 0; j < droptemp.length; j++) {
                    if(curtemp[j] != droptemp[j])
                      break;
                  }
                  if((j == droptemp.length) && (curtemp.length == j + 1))
                    skip = true;
                }
              } else {
                skip = true;
              }
            }

            if(skip == false) {
              // Valid drop container - add to array of drop containers
              var container = { id: dirTreeCont[i].id, x: cont_pos.x, y: cont_pos.y, w: droptarget.offsetWidth, h: droptarget.offsetHeight };
              Webfm.dropContainers.push(container);
            }
          }
        }
      }
    } else {
      // attachment container is attach table body
      var droptarget = Webfm.attachObj.body;
      var cont_pos = this.dragCont.objPosition(droptarget, this.comp);
      Webfm.attachContainer = { x: cont_pos.x, y: cont_pos.y, w: droptarget.offsetWidth, h: droptarget.offsetHeight };
    }
  }

  var pos = Drupal.mousePosition(event);
  var x = pos.x - this.offset.x;
  var y = pos.y - this.offset.y;

  //Scroll page if near top or bottom edge.  Hardcoded values
  var scroll = this.dragCont.getScrollY();
  if(typeof window.innerHeight == 'number') {
    if(pos.y > (window.innerHeight + scroll - 35)) {
      window.scrollBy(0,20);
    } else if(pos.y  - scroll < (25)) {
      window.scrollBy(0,-20);
    }
  } else if(document.documentElement && document.documentElement.clientHeight) {
    if(pos.y > (document.documentElement.clientHeight + scroll - 35)) {
      window.scrollBy(0,20);
    } else if(pos.y  - scroll < (25)) {
      window.scrollBy(0,-20);
    }
  }

  // move our drag container to wherever the mouse is (adjusted by mouseOffset)
  this.dragCont.obj.style.top  = y + 'px';
  this.dragCont.obj.style.left = x + 'px';

  if(!this.isAttach) {
    Webfm.activeDropCont = null;
    if(Webfm.dropContainers.length) {
      // Compare mouse position to every drop container
      for(var i = 0; i < Webfm.dropContainers.length; i++) {
        if((Webfm.dropContainers[i].x < pos.x) &&
           (Webfm.dropContainers[i].y < pos.y) &&
           ((Webfm.dropContainers[i].w + Webfm.dropContainers[i].x) > pos.x) &&
           ((Webfm.dropContainers[i].h + Webfm.dropContainers[i].y) > pos.y)) {
          // Found a valid drop container - Highlight selection
          Webfm.activeDropCont = Webfm.$(Webfm.dropContainers[i].id);
          Webfm.$(Webfm.dropContainers[i].id + 'dd').src = this.icondir + '/open.gif';
          Webfm.$(Webfm.dropContainers[i].id).className += ' selected';
        } else {
          // De-highlight container
          Webfm.$(Webfm.dropContainers[i].id + 'dd').src = this.icondir + '/d.gif';
          var class_names = [];
          class_names = Webfm.$(Webfm.dropContainers[i].id).className.split(' ');
          Webfm.$(Webfm.dropContainers[i].id).className = class_names[0];
        }
      }
    }
  } else {
    // Ignore all movement outside of the attach table
    if((Webfm.attachContainer.x < pos.x) &&
       (Webfm.attachContainer.y < pos.y) &&
       ((Webfm.attachContainer.w + Webfm.attachContainer.x) > pos.x) &&
       ((Webfm.attachContainer.h + Webfm.attachContainer.y) > pos.y)) {

      // In attach container
      var att_table_body = Webfm.attachObj.body;
      var attachRows = att_table_body.getElementsByTagName('TR');
      var prevNode = '';
      var nextNode = '';
      var curr = false;
      // Start at 1 since first row is header
      for(var i = 1; i < attachRows.length; i++) {
        if(this.element.id != attachRows[i].id) {
          var att_pos = this.dragCont.objPosition(attachRows[i], this.comp);
          if((att_pos.y + (attachRows[i].offsetHeight / 2)) < pos.y) {
            if(curr == true)
              prevNode = attachRows[i];
          }
          else if((att_pos.y + (attachRows[i].offsetHeight / 2)) > pos.y) {
            if(curr == false)
              nextNode = attachRows[i];
          }
        }
        else curr = true;
      }
      if(prevNode)
        att_table_body.insertBefore(prevNode, this.element);
      else if (nextNode)
        att_table_body.insertBefore(this.element, nextNode);
    }
  }

  //prevent selection of textnodes
  Webfm.stopEvent(event);
}

Webfm.draggable.prototype.dragEnd = function (event) {
  event = event || window.event;

  // Restore opacity
  this.element.style.opacity = 1.0;
  Webfm.dragging = false;
  Webfm.dragStart = false;
  this.dragCont.obj.style.display = 'none';
  Webfm.stopEvent(event);

  if(!this.isAttach) {
    // Move dragged object if a valid drop container
    if(Webfm.activeDropCont) {
      this.droppath = Webfm.activeDropCont.title;
      // De-highlight container
      Webfm.$(Webfm.activeDropCont.id + 'dd').src = this.icondir + '/d.gif';
      var class_names = [];
      class_names = Webfm.activeDropCont.className.split(' ');
      Webfm.activeDropCont.className = class_names[0];
      var url = Webfm.ajaxUrl();
      Webfm.progressObj.show(Webfm.js_msg["work"],  "blue");
      var postObj = { action:encodeURIComponent("move"), param0:encodeURIComponent(this.curpath), param1:encodeURIComponent(this.droppath) };
      Webfm.HTTPPost(url, this.callback, this, postObj);
      Webfm.activeDropCont = null;
    }
  } else {
    // Put the current order of attachments into the form in preparation for submit
    var elInput = Webfm.$('edit-attachlist');
    var attachRows = Webfm.attachObj.body.getElementsByTagName('tr');
    elInput.setAttribute('value', '');
    // Ignore 1st row (header)
    for(var i = 1; i < attachRows.length; i++) {
      var fid = attachRows[i].id.substring(3);
      elInput.setAttribute('value', (elInput.getAttribute('value')?elInput.getAttribute('value')+',':'') + fid);
    }
  }

  // Empty drag container + uncapture mouse.
  document.onmousemove = null;
	document.onmouseup = null;
  this.dragCont.destroy();
}

Webfm.draggable.prototype.callback = function(string, xmlhttp, cp) {
  Webfm.progressObj.hide();
  Webfm.alrtObj.msg();
  if(xmlhttp.status == 200) {
    var result = Drupal.parseJson(string);
    Webfm.dbgObj.dbg("move result:", Webfm.dump(result));
    if(result.status) {
      //flush cache for target dir and source dir of object
      Webfm.dirListObj.cache.remove(cp.droppath);
      Webfm.dirListObj.cache.remove(cp.curpath.substring(0, cp.curpath.lastIndexOf("/")));
      //update tree if directory is moved
      if(cp.isDir)
        Webfm.dirTreeObj.fetch(true);
      if(!cp.isTree)
        //listing draggable - update current listing by removing dropped item
        cp.element.parentNode.removeChild(cp.element);
      else
        //tree draggable - update target directory
        Webfm.dirListObj.fetch(cp.droppath);
    }
    if(result.data)
      Webfm.alrtObj.str_arr(result.data);
    else
      Webfm.alrtObj.msg(Webfm.js_msg["move-err"]);
  } else {
    Webfm.alrtObj.msg(Webfm.js_msg["ajax-err"]);
  }
}

/**
 * Event Handler adapted from http://ajaxcookbook.org (Creative Commons Attribution 2.5)
 */
Webfm.eventListenerAdd = function(listener_arr, instance, eventName, listener) {
    var listenerFn = listener;
    if (instance.addEventListener) {
        instance.addEventListener(eventName, listenerFn, false);
    } else if (instance.attachEvent) {
        listenerFn = function() {
            listener(window.event);
        }
        instance.attachEvent("on" + eventName, listenerFn);
    } else {
        throw new Error("Event registration not supported");
    }
    var event = {
        instance: instance,
        name: eventName,
        listener: listenerFn
    };
    listener_arr.push(event);
    return event;
}

Webfm.eventListenerRemove = function(event, listener_arr) {
    var instance = event.instance;
    if (instance.removeEventListener) {
        instance.removeEventListener(event.name, event.listener, false);
    } else if (instance.detachEvent) {
        instance.detachEvent("on" + event.name, event.listener);
    }
    for (var i = 0; i < listener_arr.length; i++) {
        if (listener_arr[i] == event) {
            listener_arr.splice(i, 1);
            break;
        }
    }
}

//remove local event listeners
Webfm.eventUnregister = function(listener_arr) {
    while (listener_arr.length > 0) {
        Webfm.eventListenerRemove(listener_arr[0], listener_arr);
    }
    listener_arr = [];
}

//remove global events at window.onunload
Webfm.eventUnregisterWebfm = function() {
    while (Webfm.eventListeners.length > 0) {
        Webfm.eventListenerRemove(Webfm.eventListeners[0], Webfm.eventListeners);
    }
    Webfm.eventListeners = [];
}

/**
 * Helper Functions
 */
Webfm.$ = function(id) { return document.getElementById(id); }
Webfm.ctn = function(textNodeContents) { var textNode = document.createTextNode(textNodeContents); return textNode; }
Webfm.ce = function(elementName) { elementName = elementName.toLowerCase(); var element = document.createElement(elementName); return element; }

/**
 * Creates an HTTP POST request and sends the response to the callback function
 *
 * Note: passing null or undefined for 'object' makes the request fail in Opera 8.
 *       Pass an empty string instead.
 */
Webfm.HTTPPost = function(uri, callbackFunction, callbackParameter, object) {
  if(window.XMLHttpRequest){
    // If IE7, Mozilla, Safari, etc: Use native object
    var xmlHttp = new XMLHttpRequest()
  } else {
    if(window.ActiveXObject){
      // ...otherwise, use the ActiveX control for IE5.x and IE6
      var xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
  }
  var bAsync = true;
  if (!callbackFunction) {
    bAsync = false;
  }
  xmlHttp.open('POST', uri, bAsync);

  var toSend = '';
  if (typeof object == 'object') {
    xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xmlHttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    for (var i in object) {
      toSend += (toSend ? '&' : '') + i + '=' + encodeURIComponent(object[i]);
    }
  }
  else {
    toSend = object;
  }
  xmlHttp.send(toSend);

  if (bAsync) {
    xmlHttp.onreadystatechange = function() {
      if (xmlHttp.readyState == 4) {
        callbackFunction(xmlHttp.responseText, xmlHttp, callbackParameter);
      }
    }
    return xmlHttp;
  }
  else {
    return xmlHttp.responseText;
  }
}

/**
 * Prevents an event from propagating.
 */
Webfm.stopEvent = function(event) {
  event = event || window.event;
  if (event.preventDefault) {
    event.preventDefault();
    event.stopPropagation();
  } else {
    event.returnValue = false;
    event.cancelBubble = true;
  }
}

//the getModUrl() is used by contrib modules for custom ajax
Webfm.ajaxUrl = function() {
  var path = getBaseUrl() + "/?q=";
  return path += (typeof getModUrl == "undefined") ? "webfm_js" : getModUrl();
}

// Empty all child nodes
Webfm.clearNodeById = function(elementId) {
  var node = Webfm.$(elementId);
  while (node.hasChildNodes())
    node.removeChild(node.firstChild);
}

// Sort methods
Webfm.sortByName = function(a, b) {
  if(typeof a.ftitle != "undefined") {
    var x = a.ftitle.toLowerCase();
  } else {
    var x = a.n.toLowerCase();
  }
  if(typeof b.ftitle != "undefined") {
    var y = b.ftitle.toLowerCase();
  } else {
    var y = b.n.toLowerCase();
  }
  return ((x < y) ? -1 : ((x > y) ? 1 : 0));
}
Webfm.sortBySize = function(a, b) {
  var x = parseInt(parseFloat(a.s));
  var y = parseInt(parseFloat(b.s));
  return x - y;
}
Webfm.sortByModified = function(a, b) {
  var x = a.m;
  var y = b.m;
  return ((x < y) ? -1 : ((x > y) ? 1 : 0));
}
Webfm.sortByOwner = function(a, b) {
  if(typeof a.funame != "undefined") {
    var x = a.funame.toLowerCase();
  } else {
    var x = a.un.toLowerCase();
  }
  if(typeof b.funame != "undefined") {
    var y = b.funame.toLowerCase();
  } else {
    var y = b.un.toLowerCase();
  }
  return ((x < y) ? -1 : ((x > y) ? 1 : 0));
}
Webfm.sortByKey = function(a, b) {
  var x = a.toLowerCase();
  var y = b.toLowerCase();
  return ((x < y) ? -1 : ((x > y) ? 1 : 0));
}

// Build date stamp
Webfm.convertunixtime = function(unixtime) {
  // unix date format doesn't have millisec component
  var _date = new Date(unixtime * 1000);

  var _min = _date.getMinutes();
  var _hours = _date.getHours();
  var _day = _date.getDate();
  var _mon = _date.getMonth() + 1;
  var _year = _date.getFullYear();

  _min = Webfm.doubleDigit(_min);
  _hours = Webfm.doubleDigit(_hours);
  _day = Webfm.doubleDigit(_day);
  _mon = Webfm.doubleDigit(_mon);
  if(_year > 1999)
    _year -= 2000;
  else
    _year -= 1900;
  _year = Webfm.doubleDigit(_year);

  // Get day/month order from db variable
  var format = getWebfmDateFormat();
  if(format == 1)
    return _day + "/" + _mon + "/" + _year + " " + _hours + ":" + _min;
  else
    return _mon + "/" + _day + "/" + _year + " " + _hours + ":" + _min;
}
Webfm.doubleDigit = function(num) {
  return(num < 10) ? "0" + num : num;
}

Webfm.size = function(sz) {
  var size = sz;
  var units;
  if(size < 1024) units = " B";
  else {
    size = parseInt(size >> 10);
    if(size < 1024) units = " KB";
    else {
      size = parseInt(size >> 10);
      if(size < 1024) units = " MB";
      else {
        size = parseInt(size >> 10);
        if(size < 1024) units = " GB";
        else {
          size = parseInt(size >> 10);
          suffix = " TB";
        }
      }
    }
  }
  return size + units;
}

Webfm.enter = function(event) {
  event = event || window.event;
  var code;
  if (event.keyCode)
    code = event.keyCode;
  else if (e.which)
    code = e.which;
  return(code == 13) ? true : false;
}

Webfm.rclick= function(event) {
  if (event.which) {
    var rightclick = (event.which == 3);
  } else {
    if (event.button)
      var rightclick = (event.button == 2);
  }
  return rightclick;
}

Webfm.copyToClipboard = function(s)
{
  if(window.clipboardData && clipboardData.setData) {
  	clipboardData.setData("Text", s);
  } else if(Webfm.browser.isOP) {
    alert("Clipboard function not supported in Opera. Copy link address from context menu.");
  } else if(window.netscape) {
  	// You have to sign the code to enable this or allow the action in about:config by changing
    // user_pref("signed.applets.codebase_principal_support", true);
    try {
      netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
    } catch(e) {
      alert("This feature requires 'signed.applets.codebase_principal_support=true' at about:config");
      return false;
    }

  	var clip = Components.classes['@mozilla.org/widget/clipboard;1'].createInstance(Components.interfaces.nsIClipboard);
  	if(!clip) return;

  	// create a transferable
  	var trans = Components.classes['@mozilla.org/widget/transferable;1'].createInstance(Components.interfaces.nsITransferable);
  	if(!trans) return;

  	// specify the data we wish to handle. Plaintext in this case.
  	trans.addDataFlavor('text/unicode');

  	// To get the data from the transferable we need two new objects
  	var str = new Object();
  	var len = new Object();
    var str = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);
  	var copytext = s;
  	str.data = copytext;
  	trans.setTransferData("text/unicode", str, copytext.length * 2);
  	var clipid = Components.interfaces.nsIClipboard;
  	if(!clip) return false;
  	clip.setData(trans, null, clipid.kGlobalClipboard);
  }
}

// Dump debug function
// return a string version of a thing, without name.
// calls recursive function to actually traverse content.
Webfm.dump = function(content, txt_arr) {
  if(txt_arr == 'undefined')
    txt_arr = false;
  return Webfm.dumpRecur(content, 0, true, txt_arr) + "\n";
}

// recursive function traverses content, returns string version of thing
// content: what to dump.
// indent: how far to indent.
// neednl: true if need newline, false if not
Webfm.dumpRecur = function(content,indent,neednl,txt_arr) {
  var out = "";
  if (typeof content == 'function')
    return 'function';
  else if (Webfm.isArray(content)) {  // handle real arrays in brackets
    if (neednl) out += "\n"+Webfm.dumpSpaces(indent);
    if(!txt_arr) out+="[ ";
    var inside = false;
    for (var i=0; i<content.length; i++) {
      if (inside)
        out+=" \n"+Webfm.dumpSpaces(indent+1);
      else
        inside=true;
      out+=Webfm.dumpRecur(content[i],indent+1,false,txt_arr);
    }
    out+="\n"+Webfm.dumpSpaces(indent);
    if(!txt_arr) out+="]";
  } else if (Webfm.isObject(content)) {   // handle objects by association
    if (neednl) out+="\n"+Webfm.dumpSpaces(indent);
    if(!txt_arr) out+="{ ";
    var inside = false;
    for (var i in content) {
      if (inside)
        out+=" \n"+Webfm.dumpSpaces(indent+1);
      else
        inside = true;
      out+="'" + i + "':" + Webfm.dumpRecur(content[i],indent+1,true,txt_arr);
    }
    out+="\n"+Webfm.dumpSpaces(indent);
    if(!txt_arr) out+="}";
  } else if (typeof content == 'string') {
    out+="'" + content + "'";
  } else {
    out+=content;
  }
  return out;
}

// print n groups of two spaces for indent
Webfm.dumpSpaces = function(n) {
  var out = '';
  for (var i=0; i<n; i++) out += '  ';
  return out;
}

Webfm.isArray = function(array) {
  return(array && array.constructor == Array);
}
Webfm.isObject = function(object) {
  return(object && object.constructor == Object);
}

// Unregister all global listener events
window.onunload = Webfm.eventUnregisterWebfm;

///////////////////////////////////////////////////////ADD IN LEGACY DRUPAL JS FUNCTIONS USED BY WEBFM////////////////////////////////////////////////
/**
 * Redirects a button's form submission to a hidden iframe and displays the result
 * in a given wrapper. The iframe should contain a call to
 * window.parent.iframeHandler() after submission.
 */
Drupal.redirectFormButton = function (uri, button, handler) {
  // Trap the button
  button.onmouseover = button.onfocus = function() {
    button.onclick = function() {
      // Create target iframe
      Drupal.createIframe();

      // Prepare variables for use in anonymous function.
      var button = this;
      var action = button.form.action;
      var target = button.form.target;

      // Redirect form submission to iframe
      this.form.action = uri;
      this.form.target = 'redirect-target';

      handler.onsubmit();

      // Set iframe handler for later
      window.iframeHandler = function () {
        var iframe = $('#redirect-target').get(0);
        // Restore form submission
        button.form.action = action;
        button.form.target = target;

        // Get response from iframe body
        try {
          response = (iframe.contentWindow || iframe.contentDocument || iframe).document.body.innerHTML;
          // Firefox 1.0.x hack: Remove (corrupted) control characters
          response = response.replace(/[\f\n\r\t]/g, ' ');
          if (window.opera) {
            // Opera-hack: it returns innerHTML sanitized.
            response = response.replace(/&quot;/g, '"');
          }
        }
        catch (e) {
          response = null;
        }

        response = Drupal.parseJson(response);
        // Check response code
        if (response.status == 0) {
          handler.onerror(response.data);
          return;
        }
        handler.oncomplete(response.data);

        return true;
      }

      return true;
    }
  }
  button.onmouseout = button.onblur = function() {
    button.onclick = null;
  }
};

/**
 * Create an invisible iframe for form submissions.
 */
Drupal.createIframe = function () {
  if ($('#redirect-holder').size()) {
    return;
  }
  // Note: some browsers require the literal name/id attributes on the tag,
  // some want them set through JS. We do both.
  window.iframeHandler = function () {};
  var div = document.createElement('div');
  div.id = 'redirect-holder';
  $(div).html('<iframe name="redirect-target" id="redirect-target" class="redirect" onload="window.iframeHandler();"></iframe>');
  var iframe = div.firstChild;
  $(iframe)
    .attr({
      name: 'redirect-target',
      id: 'redirect-target'
    })
    .css({
      position: 'absolute',
      height: '1px',
      width: '1px',
      visibility: 'hidden'
    });
  $('body').append(div);
};

/**
 * Delete the invisible iframe
 */
Drupal.deleteIframe = function () {
  $('#redirect-holder').remove();
};

/**
 *  Returns the position of the mouse cursor based on the event object passed
 */
Drupal.mousePosition = function(e) {
  return { x: e.clientX + document.documentElement.scrollLeft, y: e.clientY + document.documentElement.scrollTop };
};
;// $Id: tableheader.js,v 1.16.2.2 2009/03/30 12:48:09 goba Exp $

Drupal.tableHeaderDoScroll = function() {
  if (typeof(Drupal.tableHeaderOnScroll)=='function') {
    Drupal.tableHeaderOnScroll();
  }
};

Drupal.behaviors.tableHeader = function (context) {
  // This breaks in anything less than IE 7. Prevent it from running.
  if (jQuery.browser.msie && parseInt(jQuery.browser.version, 10) < 7) {
    return;
  }

  // Keep track of all cloned table headers.
  var headers = [];

  $('table.sticky-enabled thead:not(.tableHeader-processed)', context).each(function () {
    // Clone thead so it inherits original jQuery properties.
    var headerClone = $(this).clone(true).insertBefore(this.parentNode).wrap('<table class="sticky-header"></table>').parent().css({
      position: 'fixed',
      top: '0px'
    });

    headerClone = $(headerClone)[0];
    headers.push(headerClone);

    // Store parent table.
    var table = $(this).parent('table')[0];
    headerClone.table = table;
    // Finish initialzing header positioning.
    tracker(headerClone);

    $(table).addClass('sticky-table');
    $(this).addClass('tableHeader-processed');
  });

  // Define the anchor holding var.
  var prevAnchor = '';

  // Track positioning and visibility.
  function tracker(e) {
    // Save positioning data.
    var viewHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    if (e.viewHeight != viewHeight) {
      e.viewHeight = viewHeight;
      e.vPosition = $(e.table).offset().top - 4;
      e.hPosition = $(e.table).offset().left;
      e.vLength = e.table.clientHeight - 100;
      // Resize header and its cell widths.
      var parentCell = $('th', e.table);
      $('th', e).each(function(index) {
        var cellWidth = parentCell.eq(index).css('width');
        // Exception for IE7.
        if (cellWidth == 'auto') {
          cellWidth = parentCell.get(index).clientWidth +'px';
        }
        $(this).css('width', cellWidth);
      });
      $(e).css('width', $(e.table).css('width'));
    }

    // Track horizontal positioning relative to the viewport and set visibility.
    var hScroll = document.documentElement.scrollLeft || document.body.scrollLeft;
    var vOffset = (document.documentElement.scrollTop || document.body.scrollTop) - e.vPosition;
    var visState = (vOffset > 0 && vOffset < e.vLength) ? 'visible' : 'hidden';
    $(e).css({left: -hScroll + e.hPosition +'px', visibility: visState});

    // Check the previous anchor to see if we need to scroll to make room for the header.
    // Get the height of the header table and scroll up that amount.
    if (prevAnchor != location.hash) {
      if (location.hash != '') {
        var offset = $('td' + location.hash).offset();
        if (offset) {
          var top = offset.top;
          var scrollLocation = top - $(e).height();
          $('body, html').scrollTop(scrollLocation);
        }
      }
      prevAnchor = location.hash;
    }
  }

  // Only attach to scrollbars once, even if Drupal.attachBehaviors is called
  //  multiple times.
  if (!$('body').hasClass('tableHeader-processed')) {
    $('body').addClass('tableHeader-processed');
    $(window).scroll(Drupal.tableHeaderDoScroll);
    $(document.documentElement).scroll(Drupal.tableHeaderDoScroll);
  }

  // Track scrolling.
  Drupal.tableHeaderOnScroll = function() {
    $(headers).each(function () {
      tracker(this);
    });
  };

  // Track resizing.
  var time = null;
  var resize = function () {
    // Ensure minimum time between adjustments.
    if (time) {
      return;
    }
    time = setTimeout(function () {
      $('table.sticky-header').each(function () {
        // Force cell width calculation.
        this.viewHeight = 0;
        tracker(this);
      });
      // Reset timer
      time = null;
    }, 250);
  };
  $(window).resize(resize);
};
;// $Id: autocomplete.js,v 1.23 2008/01/04 11:53:21 goba Exp $

/**
 * Attaches the autocomplete behavior to all required fields
 */
Drupal.behaviors.autocomplete = function (context) {
  var acdb = [];
  $('input.autocomplete:not(.autocomplete-processed)', context).each(function () {
    var uri = this.value;
    if (!acdb[uri]) {
      acdb[uri] = new Drupal.ACDB(uri);
    }
    var input = $('#' + this.id.substr(0, this.id.length - 13))
      .attr('autocomplete', 'OFF')[0];
    $(input.form).submit(Drupal.autocompleteSubmit);
    new Drupal.jsAC(input, acdb[uri]);
    $(this).addClass('autocomplete-processed');
  });
};

/**
 * Prevents the form from submitting if the suggestions popup is open
 * and closes the suggestions popup when doing so.
 */
Drupal.autocompleteSubmit = function () {
  return $('#autocomplete').each(function () {
    this.owner.hidePopup();
  }).size() == 0;
};

/**
 * An AutoComplete object
 */
Drupal.jsAC = function (input, db) {
  var ac = this;
  this.input = input;
  this.db = db;

  $(this.input)
    .keydown(function (event) { return ac.onkeydown(this, event); })
    .keyup(function (event) { ac.onkeyup(this, event); })
    .blur(function () { ac.hidePopup(); ac.db.cancel(); });

};

/**
 * Handler for the "keydown" event
 */
Drupal.jsAC.prototype.onkeydown = function (input, e) {
  if (!e) {
    e = window.event;
  }
  switch (e.keyCode) {
    case 40: // down arrow
      this.selectDown();
      return false;
    case 38: // up arrow
      this.selectUp();
      return false;
    default: // all other keys
      return true;
  }
};

/**
 * Handler for the "keyup" event
 */
Drupal.jsAC.prototype.onkeyup = function (input, e) {
  if (!e) {
    e = window.event;
  }
  switch (e.keyCode) {
    case 16: // shift
    case 17: // ctrl
    case 18: // alt
    case 20: // caps lock
    case 33: // page up
    case 34: // page down
    case 35: // end
    case 36: // home
    case 37: // left arrow
    case 38: // up arrow
    case 39: // right arrow
    case 40: // down arrow
      return true;

    case 9:  // tab
    case 13: // enter
    case 27: // esc
      this.hidePopup(e.keyCode);
      return true;

    default: // all other keys
      if (input.value.length > 0)
        this.populatePopup();
      else
        this.hidePopup(e.keyCode);
      return true;
  }
};

/**
 * Puts the currently highlighted suggestion into the autocomplete field
 */
Drupal.jsAC.prototype.select = function (node) {
  this.input.value = node.autocompleteValue;
};

/**
 * Highlights the next suggestion
 */
Drupal.jsAC.prototype.selectDown = function () {
  if (this.selected && this.selected.nextSibling) {
    this.highlight(this.selected.nextSibling);
  }
  else {
    var lis = $('li', this.popup);
    if (lis.size() > 0) {
      this.highlight(lis.get(0));
    }
  }
};

/**
 * Highlights the previous suggestion
 */
Drupal.jsAC.prototype.selectUp = function () {
  if (this.selected && this.selected.previousSibling) {
    this.highlight(this.selected.previousSibling);
  }
};

/**
 * Highlights a suggestion
 */
Drupal.jsAC.prototype.highlight = function (node) {
  if (this.selected) {
    $(this.selected).removeClass('selected');
  }
  $(node).addClass('selected');
  this.selected = node;
};

/**
 * Unhighlights a suggestion
 */
Drupal.jsAC.prototype.unhighlight = function (node) {
  $(node).removeClass('selected');
  this.selected = false;
};

/**
 * Hides the autocomplete suggestions
 */
Drupal.jsAC.prototype.hidePopup = function (keycode) {
  // Select item if the right key or mousebutton was pressed
  if (this.selected && ((keycode && keycode != 46 && keycode != 8 && keycode != 27) || !keycode)) {
    this.input.value = this.selected.autocompleteValue;
  }
  // Hide popup
  var popup = this.popup;
  if (popup) {
    this.popup = null;
    $(popup).fadeOut('fast', function() { $(popup).remove(); });
  }
  this.selected = false;
};

/**
 * Positions the suggestions popup and starts a search
 */
Drupal.jsAC.prototype.populatePopup = function () {
  // Show popup
  if (this.popup) {
    $(this.popup).remove();
  }
  this.selected = false;
  this.popup = document.createElement('div');
  this.popup.id = 'autocomplete';
  this.popup.owner = this;
  $(this.popup).css({
    marginTop: this.input.offsetHeight +'px',
    width: (this.input.offsetWidth - 4) +'px',
    display: 'none'
  });
  $(this.input).before(this.popup);

  // Do search
  this.db.owner = this;
  this.db.search(this.input.value);
};

/**
 * Fills the suggestion popup with any matches received
 */
Drupal.jsAC.prototype.found = function (matches) {
  // If no value in the textfield, do not show the popup.
  if (!this.input.value.length) {
    return false;
  }

  // Prepare matches
  var ul = document.createElement('ul');
  var ac = this;
  for (key in matches) {
    var li = document.createElement('li');
    $(li)
      .html('<div>'+ matches[key] +'</div>')
      .mousedown(function () { ac.select(this); })
      .mouseover(function () { ac.highlight(this); })
      .mouseout(function () { ac.unhighlight(this); });
    li.autocompleteValue = key;
    $(ul).append(li);
  }

  // Show popup with matches, if any
  if (this.popup) {
    if (ul.childNodes.length > 0) {
      $(this.popup).empty().append(ul).show();
    }
    else {
      $(this.popup).css({visibility: 'hidden'});
      this.hidePopup();
    }
  }
};

Drupal.jsAC.prototype.setStatus = function (status) {
  switch (status) {
    case 'begin':
      $(this.input).addClass('throbbing');
      break;
    case 'cancel':
    case 'error':
    case 'found':
      $(this.input).removeClass('throbbing');
      break;
  }
};

/**
 * An AutoComplete DataBase object
 */
Drupal.ACDB = function (uri) {
  this.uri = uri;
  this.delay = 300;
  this.cache = {};
};

/**
 * Performs a cached and delayed search
 */
Drupal.ACDB.prototype.search = function (searchString) {
  var db = this;
  this.searchString = searchString;

  // See if this key has been searched for before
  if (this.cache[searchString]) {
    return this.owner.found(this.cache[searchString]);
  }

  // Initiate delayed search
  if (this.timer) {
    clearTimeout(this.timer);
  }
  this.timer = setTimeout(function() {
    db.owner.setStatus('begin');

    // Ajax GET request for autocompletion
    $.ajax({
      type: "GET",
      url: db.uri +'/'+ Drupal.encodeURIComponent(searchString),
      dataType: 'json',
      success: function (matches) {
        if (typeof matches['status'] == 'undefined' || matches['status'] != 0) {
          db.cache[searchString] = matches;
          // Verify if these are still the matches the user wants to see
          if (db.searchString == searchString) {
            db.owner.found(matches);
          }
          db.owner.setStatus('found');
        }
      },
      error: function (xmlhttp) {
        alert(Drupal.ahahError(xmlhttp, db.uri));
      }
    });
  }, this.delay);
};

/**
 * Cancels the current autocomplete request
 */
Drupal.ACDB.prototype.cancel = function() {
  if (this.owner) this.owner.setStatus('cancel');
  if (this.timer) clearTimeout(this.timer);
  this.searchString = '';
};
;// $Id: teaser.js,v 1.12.2.1 2009/05/20 11:50:54 goba Exp $

/**
 * Auto-attach for teaser behavior.
 *
 * Note: depends on resizable textareas.
 */
Drupal.behaviors.teaser = function(context) {
  // This breaks in Konqueror. Prevent it from running.
  if (/KDE/.test(navigator.vendor)) {
    return;
  }

  $('textarea.teaser:not(.teaser-processed)', context).each(function() {
    var teaser = $(this).addClass('teaser-processed');

    // Move teaser textarea before body, and remove its form-item wrapper.
    var body = $('#'+ Drupal.settings.teaser[this.id]);
    var checkbox = $('#'+ Drupal.settings.teaserCheckbox[this.id]).parent();
    var checked = $(checkbox).children('input').attr('checked') ? true : false;
    var parent = teaser[0].parentNode;
    $(body).before(teaser);
    $(parent).remove();

    function trim(text) {
      return text.replace(/^\s+/g, '').replace(/\s+$/g, '');
    }

    // Join the teaser back to the body.
    function join_teaser() {
      if (teaser.val()) {
        body.val(trim(teaser.val()) +'\r\n\r\n'+ trim(body.val()));
      }
      // Empty, hide and disable teaser.
      teaser[0].value = '';
      $(teaser).attr('disabled', 'disabled');
      $(teaser).parent().slideUp('fast');
      // Change label.
      $(this).val(Drupal.t('Split summary at cursor'));
      // Hide separate teaser checkbox.
      $(checkbox).hide();
      // Force a hidden checkbox to be checked (to ensure that the body is
      // correctly processed on form submit when teaser/body are in joined
      // state), and remember the current checked status.
      checked = $(checkbox).children('input').attr('checked') ? true : false;
      $(checkbox).children('input').attr('checked', true);
    }

    // Split the teaser from the body.
    function split_teaser() {
      body[0].focus();
      var selection = Drupal.getSelection(body[0]);
      var split = selection.start;
      var text = body.val();

      // Note: using val() fails sometimes. jQuery bug?
      teaser[0].value = trim(text.slice(0, split));
      body[0].value = trim(text.slice(split));
      // Reveal and enable teaser
      $(teaser).attr('disabled', '');
      $(teaser).parent().slideDown('fast');
      // Change label
      $(this).val(Drupal.t('Join summary'));
      // Show separate teaser checkbox, restore checked value.
      $(checkbox).show().children('input').attr('checked', checked);
    }

    // Add split/join button.
    var button = $('<div class="teaser-button-wrapper"><input type="button" class="teaser-button" /></div>');
    var include = $('#'+ this.id.substring(0, this.id.length - 2) +'include');
    $(include).parent().parent().before(button);

    // Extract the teaser from the body, if set. Otherwise, stay in joined mode.
    var text = body.val().split('<!--break-->');
    if (text.length >= 2) {
      teaser[0].value = trim(text.shift());
      body[0].value = trim(text.join('<!--break-->'));
      $(teaser).attr('disabled', '');
      $('input', button).val(Drupal.t('Join summary')).toggle(join_teaser, split_teaser);
    }
    else {
      $('input', button).val(Drupal.t('Split summary at cursor')).toggle(split_teaser, join_teaser);
      $(checkbox).hide().children('input').attr('checked', true);
    }

    // Make sure that textarea.js has done its magic to ensure proper visibility state.
    if (Drupal.behaviors.textarea && teaser.is(('.form-textarea:not(.textarea-processed)'))) {
      Drupal.behaviors.textarea(teaser.parentNode);
    }
    // Set initial visibility
    if ($(teaser).is('[@disabled]')) {
      $(teaser).parent().hide();
    }

  });
};
;// $Id: textarea.js,v 1.22 2008/01/17 19:31:56 goba Exp $

Drupal.behaviors.textarea = function(context) {
  $('textarea.resizable:not(.textarea-processed)', context).each(function() {
    // Avoid non-processed teasers.
    if ($(this).is(('textarea.teaser:not(.teaser-processed)'))) {
      return false;  
    }
    var textarea = $(this).addClass('textarea-processed'), staticOffset = null;

    // When wrapping the text area, work around an IE margin bug.  See:
    // http://jaspan.com/ie-inherited-margin-bug-form-elements-and-haslayout
    $(this).wrap('<div class="resizable-textarea"><span></span></div>')
      .parent().append($('<div class="grippie"></div>').mousedown(startDrag));

    var grippie = $('div.grippie', $(this).parent())[0];
    grippie.style.marginRight = (grippie.offsetWidth - $(this)[0].offsetWidth) +'px';

    function startDrag(e) {
      staticOffset = textarea.height() - e.pageY;
      textarea.css('opacity', 0.25);
      $(document).mousemove(performDrag).mouseup(endDrag);
      return false;
    }

    function performDrag(e) {
      textarea.height(Math.max(32, staticOffset + e.pageY) + 'px');
      return false;
    }

    function endDrag(e) {
      $(document).unbind("mousemove", performDrag).unbind("mouseup", endDrag);
      textarea.css('opacity', 1);
    }
  });
};
;// $Id: collapse.js,v 1.17 2008/01/29 10:58:25 goba Exp $

/**
 * Toggle the visibility of a fieldset using smooth animations
 */
Drupal.toggleFieldset = function(fieldset) {
  if ($(fieldset).is('.collapsed')) {
    // Action div containers are processed separately because of a IE bug
    // that alters the default submit button behavior.
    var content = $('> div:not(.action)', fieldset);
    $(fieldset).removeClass('collapsed');
    content.hide();
    content.slideDown( {
      duration: 'fast',
      easing: 'linear',
      complete: function() {
        Drupal.collapseScrollIntoView(this.parentNode);
        this.parentNode.animating = false;
        $('div.action', fieldset).show();
      },
      step: function() {
        // Scroll the fieldset into view
        Drupal.collapseScrollIntoView(this.parentNode);
      }
    });
  }
  else {
    $('div.action', fieldset).hide();
    var content = $('> div:not(.action)', fieldset).slideUp('fast', function() {
      $(this.parentNode).addClass('collapsed');
      this.parentNode.animating = false;
    });
  }
};

/**
 * Scroll a given fieldset into view as much as possible.
 */
Drupal.collapseScrollIntoView = function (node) {
  var h = self.innerHeight || document.documentElement.clientHeight || $('body')[0].clientHeight || 0;
  var offset = self.pageYOffset || document.documentElement.scrollTop || $('body')[0].scrollTop || 0;
  var posY = $(node).offset().top;
  var fudge = 55;
  if (posY + node.offsetHeight + fudge > h + offset) {
    if (node.offsetHeight > h) {
      window.scrollTo(0, posY);
    } else {
      window.scrollTo(0, posY + node.offsetHeight - h + fudge);
    }
  }
};

Drupal.behaviors.collapse = function (context) {
  $('fieldset.collapsible > legend:not(.collapse-processed)', context).each(function() {
    var fieldset = $(this.parentNode);
    // Expand if there are errors inside
    if ($('input.error, textarea.error, select.error', fieldset).size() > 0) {
      fieldset.removeClass('collapsed');
    }

    // Turn the legend into a clickable link and wrap the contents of the fieldset
    // in a div for easier animation
    var text = this.innerHTML;
      $(this).empty().append($('<a href="#">'+ text +'</a>').click(function() {
        var fieldset = $(this).parents('fieldset:first')[0];
        // Don't animate multiple times
        if (!fieldset.animating) {
          fieldset.animating = true;
          Drupal.toggleFieldset(fieldset);
        }
        return false;
      }))
      .after($('<div class="fieldset-wrapper"></div>')
      .append(fieldset.children(':not(legend):not(.action)')))
      .addClass('collapse-processed');
  });
};
;if (Drupal.jsEnabled) {
  $(document).ready(function() {
    // I am assuming that all of the links are refering to an internal node
    
    // add the attribute rel=facebox to all of the links I want to have a popup
    $('div.view-field > a').attr('class', 'popup');
   
    // on click of a link
    $('a.popup').click(function(a) {
    
      // Make sure that other stuff is closed. This seems to cause a problem in Fx2 and IE7.
      $('div#calpopup').fadeOut();
      $('div#calpopup').remove();
      
      // create div to hold data and add it to the end of the body
      var div = $('<div id="calpopup"><div id="popup-close"><img id="popup-close-img" src="' + var_path + '/images/cross.png" /></div><div id="calpopup-body"><img src="' + var_path + '/images/throbber.gif" id="popthrobber" /></div></div>').attr('style','display: none');
      div.appendTo(document.body);
      
      // Locate Popup
      var offset = $(this).offset();
      // Check position with window width.
      var offset_left = offset.left + 5;
      if ($(window).width() < $('#calpopup').width() + offset.left) {
        offset_left -= $('#calpopup').width() + 5;
        if (offset_left < 0) {
          offset_left = 0;
        }
      }
      var offset_top = offset.top + 25;
      if ($(window).height() < $('#calpopup').height() + offset_top) {
        offset_top -= $('#calpopup').height() + 25;
	      if (offset_top < 0) {
          offset_top = 0;
        }
      }
      $('#calpopup').css('left', offset_left);
      $('#calpopup').css('top', offset_top);
      
      // Show Popup
      $('#calpopup').fadeIn('slow');
      
      // If sucessful call this
      function domCallback(msg) {
        $('#calpopup-body').html(msg);
      }
      
      // Get NodeID and ItemID
      var ids = $(this).parent().parent().attr('id');
      var arr = ids.split(":");
      var nid = arr[1];
      var id = arr[4];
            
      // fill the div with data
      $.ajax({
        type: "GET",
        url: var_base_path + "?q=jcalendar/getnode/"+nid+"/"+ids,
        success: function(msg){
          domCallback(msg);
        }
      });
      
      // On click of the close image
      $('img#popup-close-img').click(function(x) {
        $('div#calpopup').fadeOut();
        $('div#calpopup').remove();
      });
      
      $(document).click(function(y) {
        var $tgt = $(y.target);
        if (!$tgt.parents().is('div#calpopup')) {
          $('div#calpopup').fadeOut();
          $('div#calpopup').remove();
          $(document).unbind("click");
        }
      });
      
      // Don't Follow the real link
      return false;
    });
  });
};// $Id: script.js,v 1.1 2008/10/01 03:26:19 jwolf Exp $ 

Drupal.behaviors.tntIEFixes = function (context) {
  // IE6 & less-specific functions
  // Add hover class to primary menu li elements on hover
  if ($.browser.msie && ($.browser.version < 7)) {
    $('#primary-menu li').hover(function() {
      $(this).addClass('hover');
      }, function() {
        $(this).removeClass('hover');
    });
  };
};
;