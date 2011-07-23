LazyLoad=function(a){function m(){var a=d.css,b;if(a){b=g.length;while(--b>=0)if(g[b].href===a.urls[0]){i("css");break}e+=1,a&&(e<200?setTimeout(m,50):i("css"))}}function l(a){try{a.sheet.cssRules}catch(b){e+=1,e<200?setTimeout(function(){l(a)},50):i("css");return}i("css")}function k(e,g,k,n,o){var p=function(){i(e)},q=e==="css",r,s,t,u,v,w;j();if(g){g=typeof g=="string"?[g]:g.concat();if(q||b.async||b.gecko||b.opera)f[e].push({urls:g,callback:k,obj:n,context:o});else for(r=0,s=g.length;r<s;++r)f[e].push({urls:[g[r]],callback:r===s-1?k:null,obj:n,context:o})}if(!d[e]&&!!(u=d[e]=f[e].shift())){c||(c=a.head||a.getElementsByTagName("head")[0]),v=u.urls;for(r=0,s=v.length;r<s;++r)w=v[r],q?t=b.gecko?h("style"):h("link",{href:w,rel:"stylesheet"}):(t=h("script",{src:w}),t.async=!1),t.className="lazyload",t.setAttribute("charset","utf-8"),b.ie&&!q?t.onreadystatechange=function(){/loaded|complete/.test(t.readyState)&&(t.onreadystatechange=null,p())}:q&&(b.gecko||b.webkit)?b.webkit?(u.urls[r]=t.href,m()):(t.innerHTML='@import "'+w+'";',l(t)):t.onload=t.onerror=p,c.appendChild(t)}}function j(){if(!b){var c=navigator.userAgent;b={async:a.createElement("script").async===!0},(b.webkit=/AppleWebKit\//.test(c))||(b.ie=/MSIE/.test(c))||(b.opera=/Opera/.test(c))||(b.gecko=/Gecko\//.test(c))||(b.unknown=!0)}}function i(a){var b=d[a],c,g;b&&(c=b.callback,g=b.urls,g.shift(),e=0,g.length||(c&&c.call(b.context,b.obj),d[a]=null,f[a].length&&k(a)))}function h(b,c){var d=a.createElement(b),e;for(e in c)c.hasOwnProperty(e)&&d.setAttribute(e,c[e]);return d}var b,c,d={},e=0,f={css:[],js:[]},g=a.styleSheets;return{css:function(a,b,c,d){k("css",a,b,c,d)},js:function(a,b,c,d){k("js",a,b,c,d)}}}(this.document);(function(){var a={};this.lib=function(){var b=arguments,c=[],d=[],e=[];for(i in b){var f=b[i];typeof f=="string"?typeof a[f]=="undefined"&&(/\.css[^\.]*$/.test(f)?c.push(f):d.push(f)):e.push(f)}c.length>0&&(d.length===0&&e.length>0?LazyLoad.css(c,function(){for(i in c)a[c[i]]=!0;for(i in e)e[i]()}):LazyLoad.css(c)),d.length>0&&(e.length>0?LazyLoad.js(d,function(){for(i in d)a[d[i]]=!0;for(i in e)e[i]()}):LazyLoad.js(d));if(c.length===0&&d.length===0&&e.length>0){for(i in e)e[i]();return!0}return!1},this.lib.loaded=function(){var b=Array.prototype.slice.call(arguments);switch(b.shift()){case"add":for(i in b){var c=b[i];typeof a[c]=="undefined"&&(a[c]=!0)}break;case"del":for(i in b){var c=b[i];typeof a[c]!="undefined"&&delete a[c]}}return a}})();lib['lazyload']=function(callback){lib('src/example/javascripts/lazyload.js',function(){if(typeof callback!=='undefined'){callback();}});};lib['sizzle']=function(callback){lib('src/example/javascripts/sizzle.js',function(){if(typeof callback!=='undefined'){callback();}});};lib['jquery']=function(callback){lib('src/example/javascripts/jquery.js',function(){if(typeof callback!=='undefined'){callback();}});};lib['underscore']=function(callback){lib('src/example/javascripts/underscore.js',function(){if(typeof callback!=='undefined'){callback();}});};lib['localfile']=function(callback){lib('src/example/javascripts/localfile.js',function(){if(typeof callback!=='undefined'){callback();}});};lib['i18n']=function(callback){lib('src/example/javascripts/i18n.js',function(){if(typeof callback!=='undefined'){callback();}});};lib['import']=function(callback){lib('src/example/stylesheets/import.css',function(){if(typeof callback!=='undefined'){callback();}});};lib['sass']=function(callback){lib('src/example/stylesheets/sass.css',function(){if(typeof callback!=='undefined'){callback();}});};lib['coffee']=function(callback){lib('src/example/javascripts/coffee.js',function(){if(typeof callback!=='undefined'){callback();}});};lib['jquery-cookie']=function(callback){lib('src/example/javascripts/jquery-cookie.js',function(){if(typeof callback!=='undefined'){callback();}});};lib['jqueryui']=function(callback){lib('src/example/stylesheets/jqueryui.css','src/example/javascripts/jqueryui.js',function(){if(typeof callback!=='undefined'){callback();}});};lib['qunit']=function(callback){lib('src/example/stylesheets/qunit.css','src/example/javascripts/qunit.js',function(){if(typeof callback!=='undefined'){callback();}});};lib['colorbox']=function(callback){lib('src/example/stylesheets/colorbox.css','src/example/javascripts/colorbox.js',function(){if(typeof callback!=='undefined'){callback();}});};lib['cleditor']=function(callback){lib('src/example/stylesheets/cleditor.css','src/example/javascripts/cleditor.js',function(){if(typeof callback!=='undefined'){callback();}});};lib['jqGrid']=function(callback){lib('src/example/stylesheets/jqGrid.css','src/example/javascripts/jqGrid.js',function(){if(typeof callback!=='undefined'){callback();}});};lib['backbone']=function(callback){lib('src/example/javascripts/backbone.js',function(){if(typeof callback!=='undefined'){callback();}});};lib['homejs']=function(callback){lib('src/example/javascripts/homejs.js',function(){if(typeof callback!=='undefined'){callback();}});};lib['home']=function(callback){lib('src/example/javascripts/home.js',function(){if(typeof callback!=='undefined'){callback();}});};lib['qunit']();