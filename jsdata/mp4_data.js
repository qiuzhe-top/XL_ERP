var MP4list =new Array;

window.onload=function(){
    //数据初始化
    //》》》 JPG_DATA(1,2,3,4,5) 《《《    数据格式  图片地址 / 标题 / 标签（制作人） / 简介 / 跳转地址  》》 复制这段数据即可
    JPG_DATA('http://www.huimengya.com/uploads/allimg/160810/1-160Q02210530-L.jpg','1','作者：佳慧发布时间：2016-08-13','转手绘（又名：转鼠绘，转手绘,仿鼠绘）是利用图片处理工具，将人物或风景照片转变成类似手绘效果的一种图片处理转手绘（又名：转鼠绘，转手绘,仿鼠绘）是利用图片处理工具，将人物或风景照片转变成类似手绘效果的一种图片处理方法。全名，照片转手绘效果转手绘（又名：转鼠绘，转手绘,仿鼠绘）是利用图片处理工具，将人物或风景照片转变成类似手绘效果的一种图片处理方法。全名，照片转手绘效果转手绘（又名：转鼠绘，转手绘,仿鼠绘）是利用图片处理工具，将人物或风景照片转变成类似手绘效果的一种图片处理方法。全名，照片转手绘效果转手绘（又名：转鼠绘，转手绘,仿鼠绘）是利用图片处理工具，将人物或风景照片转变成类似手绘效果的一种图片处理方法。全名，照片转手绘效果方法。全名，照片转手绘效果','http://www.huimengya.com/p/406.html')
    JPG_DATA('http://www.huimengya.com/uploads/allimg/160810/1-160Q02210530-L.jpg','2','作者：佳慧发布时间：2016-08-13','转手绘（又名：转鼠绘，转手绘,仿鼠绘）是利用图片处理工具，将人物或风景照片转变成类似手绘效果的一种图片处理方法。全名，照片转手绘效果','http://www.huimengya.com/p/406.html')
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
    MP4list.push(JPG_DIC)
}
function index_Initialize(){
// $('.row-bottom-padded-md').html('')
for(i in MP4list){
    t1 = '<div class="col-md-3 col-sm-6 col-padding animate-box" data-animate-effect="fadeInLeft" style="opacity: 1;">'
    t2 =   ' <div class="blog-entry">'
    t3 =       ' <a href="#" class="blog-img"><img src="' + MP4list[i].img_url + '" class="img-responsive" alt="Free HTML5 Bootstrap Template by FreeHTML5.co"></a>'
    t4 =      ' <div class="desc">'
    t5 =           '<h3><a href="#">' +MP4list[i].title + '</a></h3>'
    t6 =          ' <span>' +MP4list[i].name + '</span>'
    t7 =           '<p>' +MP4list[i].describe + '</p>'
    t8 =           '<a href="' +MP4list[i].jump_url + '" class="lead" target="_blank">Read More <i class="icon-arrow-right3"></i></a>'
    t9 =       '</div>'
    t10 =    '</div>'
    t11 = '</div>'
    data = t1+t2+t3+t4+t5+t6+t7+t8+t9+t10+t11
    $('.row-bottom-padded-md').append(data)
}
}
