var MP4list =new Array;

window.onload=function(){
    //数据初始化
    //》》》 JPG_DATA(1,2,3,4,5) 《《《    数据格式  图片地址 / 标题 / 标签（制作人） / 简介 / 跳转地址  》》 复制这段数据即可
    MP4_DATA('//player.bilibili.com/player.html?aid=23920182&cid=40020512&page=1','谁的青春不迷茫','团队：小王 发布时间：2016-08-13','运用所学PR加AE制作','http://www.huimengya.com/p/406.html')
    index_Initialize()
    // alert(2)
}
function MP4_DATA(t1,t2,t3,t4,t5){
    var MP4_DATA = new Object;
    var MP4_DATA ={
        img_url : t1,
        title  :  t2,
        name   :  t3,
        describe :t4,
        jump_url :t5
    }
    MP4list.push(MP4_DATA)
}
function index_Initialize(){
// $('.row-bottom-padded-md').html('')
for(i in MP4list){
    t1 = '<div class="col-md-4 col-sm-6 col-padding animate-box" data-animate-effect="fadeInLeft" style="opacity: 1;"> '
    t2 = '<div class="blog-entry"> '
    t3 =    '<a href="#" class="blog-img">' 
    t4 = '<iframe src="' + MP4list[i].img_url + '" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="box-shadow: 0 0 1px 1px rgb(199, 199, 199); width:100%;height: 250px;"> </iframe>'
    t5 =    '</a> '
    t6 =    '<div class="desc"><h3>'
    t7 =        '<a href="#">' +MP4list[i].title +'</a></h3> <span>' +MP4list[i].name + '</span>'
    t8 =        '<p>' +MP4list[i].describe + '</p>'
    t9 =        '<a href="' +MP4list[i].jump_url +'" class="lead" target="_blank">Read More <i class="icon-arrow-right3"></i></a></div>'
    t10 = '</div>'
    t11 = '</div>'
    data = t1+t2+t3+t4+t5+t6+t7+t8+t9+t10+t11
    $('.row-bottom-padded-md').append(data)
}
}
