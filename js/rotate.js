
/**
 * Created by Administrator on 2017/2/20.
 */
$(function(){
    var on_click=$('#on_click');
    // var i=1;
    on_click.click(function(){
        var yinyue=$(".yinyue");
        var music=$("#music");
        var audio=$('.audio')[0];
        // i++;
        if(audio.paused){
            yinyue.css("opacity","1");
            yinyue.css("animation-play-state","running");
            music.attr("class","musics");
            audio.play();
        }
        else{
            yinyue.css("animation-play-state","paused");
            music.attr("class","off");
            yinyue.css("opacity","0");
            audio.pause();
        }

    })
    // music.click(function(){
    //     var audio=$('.audio');
    //     if(audio.paused){
    //         music.attr("class","icon-yinle-yishu");
    //         audio.pause();
    //
    //     }
    //     else{
    //         music.css("animation-play-state","running");
    //         audio.play();
    //     }
    //
    // })
})
// window.onload=function () {
//     var on_click=document.getElementById("on_click");
//     on_click.onclick=function(){
//         var audio=document.getElementById("audio");
//         if(audio.paused){
//             audio.play();
//         }
//         else {
//             audio.pause();
//         }
//     }
//
// }