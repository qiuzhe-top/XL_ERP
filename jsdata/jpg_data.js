var JPGlist =new Array;

window.onload=function(){
    //数据初始化
    //》》》 JPG_DATA(1,2,3,4,5) 《《《    数据格式  图片地址 / 标题 / 标签（制作人） / 简介 / 跳转地址  》》 复制这段数据即可
    JPG_DATA('images/计算机社海报1.jpg','计算机社宣传海报','作者：小王 发布时间：2018-09-26','用时2天，PS作图，切成16张，彩印出来拼贴，效果非常棒','')
    JPG_DATA('images/计算机社招新表单.jpg','计算机社招新表单','作者：小王 发布时间：2018-09-26','用时2天，PS作图，切成16张，彩印出来拼贴，效果非常棒','')
    index_Initialize()
}
function JPG_DATA(t1,t2,t3,t4,t5){
    var JPG_DIC = new Object;
    var JPG_DIC ={
        img_url : t1,
        title  :  t2,
        name   :  t3,
        describe :t4,
        jump_url :t5
    }
    JPGlist.push(JPG_DIC)
}
function index_Initialize(){
// $('.row-bottom-padded-md').html('')
for(i in JPGlist){
    t1 = '<div class="col-md-3 col-sm-6 col-padding animate-box" data-animate-effect="fadeInLeft" style="opacity: 1; ">'
    t2 =   ' <div class="blog-entry">'
    t3 =       ' <a href="#" class="blog-img"><img src="' + JPGlist[i].img_url + '" class="img-responsive" alt="Free HTML5 Bootstrap Template by FreeHTML5.co"></a>'
    t4 =      ' <div class="desc">'
    t5 =           '<h3><a href="#">' +JPGlist[i].title + '</a></h3>'
    t6 =          ' <span>' +JPGlist[i].name + '</span>'
    t7 =           '<p>' +JPGlist[i].describe + '</p>'
    t8 =           '<a href="' +JPGlist[i].jump_url + '" class="lead" target="_blank">详细<i class="icon-arrow-right3"></i></a>'
    t9 =       '</div>'
    t10 =    '</div>'
    t11 = '</div>'
    data = t1+t2+t3+t4+t5+t6+t7+t8+t9+t10+t11
    $('.row-bottom-padded-md').append(data)
}
}



// https://www.parsevideo.com/