var count = 0;
function globalCallbackName(e){
    count++;
    console.log(count)
    if(count<2){
        //做一些页面动效，或者转场
        e.stop();//阻止默认事件，就不会跳转
    }
}