 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         document.title = 'Σ(っ °Д °;)っ 别走啊！';
         clearTimeout(titleTime);
     }
     else {
         document.title = 'ヾ(Ő∀Ő3)ノ 欢迎回来！' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });