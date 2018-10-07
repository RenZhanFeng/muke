window.onload = function () {

    //页面加载
    // setInterval(function () {
    //     $(".loading").fadeOut();
    // },2000)

    //顶部搜索栏点击效果
    function sousuolan() {
        var searchbutton = document.getElementById("search-button");
        var qianduanrumen  = document.getElementById("qianduanrumen");
        var search = document.getElementById("search");
        var searcharea = document.getElementById("searcharea");
        searcharea.onclick = function () {
            search.style.borderBottom = "2px solid #F9A1A1";
            qianduanrumen.style.display = "none";
            searchbutton.style.background = "#F9A1A1";
            searchbutton.style.color = "#e4393c";
        }
        searcharea.onmouseout = function () {
            search.style.borderBottom = "1px solid #CCC";
            qianduanrumen.style.display = "block";
            searchbutton.style.background = "";
            searchbutton.style.color = "#93999F";
        }
    }
    sousuolan();

    //分类导航栏
    function daohang() {
        var ul = document.getElementById("Navigation");
        var lis = ul.getElementsByTagName("li");
        for(i=0;i<lis.length;i++) {
            lis[i].onmousemove = function () {
                this.className = "lihover";
            }
            lis[i].onmouseout = function () {
                this.className = "";
            }
        }
    }
    daohang();

    //轮播图底部

    function lunbofoot() {
        var aa = document.getElementById("lunbo-foot").getElementsByTagName("a");
        for(i=0;i<aa.length;i++){
            aa[i].onmousemove = function () {
                this.className = "ahover";
            }
            aa[i].onmouseout = function () {
                this.className = "";
            }
        }
    }
    lunbofoot();



    //回到顶部效果
    function fanhui() {
        var obtn = document.getElementById("fanhuitop");
        var timer = null;
        var istop = true;
        var clientHeight = document.documentElement.clientHeight;

        window.onscroll = function () {
            var ostop = document.documentElement.scrollTop || document.body.scrollTop;
            if(ostop >= clientHeight){
                obtn.style.display = "block";
            }else {
                obtn.style.display = "none";
            }
            if(!istop){
                clearInterval(timer);
            }
            istop = false
        }

        obtn .onclick = function () {
            timer = setInterval(function () {
                var ostop = document.documentElement.scrollTop || document.body.scrollTop;
                var ispeed = Math.floor(-ostop / 6);
                document.documentElement.scrollTop = document.body.scrollTop = ostop + ispeed;
                istop = true;
                if (ostop == 0){
                    clearInterval(timer);
                }
            },30)
        }
    }
    fanhui();



    //瀑布流效果

    function pubuliu() {
        var dd = document.getElementById("main-4-container-dl").getElementsByTagName("dd");
        var ddW = dd[0].offsetWidth;
        var conW = document.getElementById("main-4-container").offsetWidth;
        var cols = Math.floor(conW/ddW);
        var hArr = [];
        for(var i=0;i<dd.length;i++){
            if(i<cols){
                hArr.push(dd[i].offsetHeight);

            }else {
                var minH = Math.min.apply(null,hArr);
                var index = getminHindex(hArr,minH);
                dd[i].style.position = "absolute";
                dd[i].style.top = minH+18+"px";
                dd[i].style.left = dd[index].offsetLeft+"px";
                hArr[index]+=dd[i].offsetHeight+18;
            }
        }
        function getminHindex(arr,val) {
            for(var j=0;j<arr.length;j++){
                if(arr[j]==val){
                    return j;
                }
            }
        }
    }
    pubuliu();



//底部轮播图
    function dibulunbo() {
        var list = document.getElementById("main-5-container-main-list");
        var prev = document.getElementById("zuo");
        var next = document.getElementById("you");
        var buttons = document.getElementById("xia").getElementsByTagName("span");
        var index = 1;
        var timer;

        function showButton() {
            for(var i=0;i<buttons.length;i++){
                if(buttons[i].className == "activee"){
                    buttons[i].className = "";
                    break
                }
            }
            buttons[index-1].className = "activee"
        }

            function animate(offset) {
                var newLeft = parseInt(list.style.left) + offset;
                list.style.left =  parseInt(list.style.left) + offset +"px";
                if(newLeft > -1182){
                    list.style.left = -3546 + "px";
                }
                if(newLeft < -4724){
                    list.style.left = -1182 + "px";
                }
            }
            function play() {
                timer = setInterval(function () {
                    next.onclick();
                },2500)
            }
        play();
            function stop() {
                 clearInterval(timer);
          }

          list.onmouseover = stop;
          next.onmouseover = stop;
          prev.onmouseover = stop;
          list.onmouseout = play;



        next.onclick = function () {
            animate(-1182);
            if(index == 3){
                index = 1;
            }else {
                index += 1;
            }
            showButton();
        }
        prev.onclick = function () {
            animate(1182);
            if(index == 1){
                index = 3;
            }else {
                index -= 1;
            }
            showButton();
        }


        for(var i=0;i<buttons.length;i++){
            buttons[i].onclick = function () {
                if(this.className == "activee"){
                    return;
                }
                var myindex = parseInt(this.getAttribute("index"));
                var offset = -1182 *(myindex - index);
                animate(offset);
                index = myindex;
                showButton();
            }
        }
    }
    dibulunbo();



    //顶部轮播图
    function toplunbotu() {
        var main = document.getElementById("lunbo-top");
        var lunboimg = document.getElementById("lunbo-img").getElementsByTagName("a");
        var topimg = document.getElementById("main-top-img").getElementsByTagName("a");
        var pre = document.getElementById("pre");
        var nex =document.getElementById("nex");
        var dots =  document.getElementById("lunbo-dots").getElementsByTagName("span");
        var current = 1;
        var result;


        nex.onclick = function () {
            if(current==6){
                current=0;
            }
            for(var i=0;i<lunboimg.length;i++){
                if(lunboimg!=current){
                    lunboimg[i].style.display = "none";
                }
                lunboimg[current].style.display = "block";
            }
            for(var j=0;j<topimg.length;j++){
                if(topimg!=current){
                    topimg[j].style.display = "none";
                }
                topimg[current].style.display = "block";
            }
            for(var j=0;j<dots.length;j++){
                         dots[j].className = "";
                     }
                     dots[current].className = "active";
            current++;
            console.log(current);

        }
        pre.onclick = function () {
            if(current == 0){
                current = 5;
            }
            for(var i=0;i<lunboimg.length;i++){
                if(lunboimg!=current){
                    lunboimg[i].style.display = "none";
                }
                lunboimg[current].style.display = "block";
            }
            for(var j=0;j<topimg.length;j++){
                if(topimg!=current){
                    topimg[j].style.display = "none";
                }
                topimg[current].style.display = "block";
            }
            for(var j=0;j<dots.length;j++){
                dots[j].className = "";
            }
            dots[current].className = "active";
            current = current - 1 ;
            console.log(current);

        }








       //  function changeImg() {
       //      for(var i =0;i<lunboimg.length;i++){
       //          if(i!=current){
       //              lunboimg[i].style.display = "none";
       //          }
       //      }
       //      for(var i =0;i<topimg.length;i++){
       //          if(i!=current){
       //              topimg[i].style.display = "none";
       //          }
       //      }
       //      topimg[current].style.display = "block";
       //      lunboimg[current].style.display = "block";
       //
       //  }
       //
       //
       //  function changeDot() {
       //      for(var j=0;j<dots.length;j++){
       //          dots[j].className = "";
       //      }
       //      dots[current].className = "active";
       //  }
       //
       //  function lunbo() {
       //      result = setInterval(function () {
       //          if(current == 6 ){
       //              current = 0;
       //          }
       //          changeImg();
       //          changeDot(current);
       //          current++;
       //      },500);
       //  }
       //  lunbo();
       //
       // main.onmouseout = function () {
       //    lunbo();
       // }
       //
       //  main.onmouseover = function () {
       //      clearInterval(result);
       //  }





    }
    toplunbotu();



}