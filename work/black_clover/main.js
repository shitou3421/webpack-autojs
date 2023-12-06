import game from '../../common/game'

function main() {
    game.launch("com.garena.game.bc");
    game.logger("启动完成， 开始请求截屏权限");
    var r = images.requestScreenCapture();
    game.logger("截屏权限请求完成")
    if (!r){
        logger("获取截屏权限失败");
        exit();
    }
    game.logger("获取屏幕信息");
    let capt = images.captureScreen();
    console.log(capt.getWidth() + 'x' + capt.getHeight());
    console.log(device.width + '×' + device.height);
    agree();

}


function agree() {
    let agree = [
        "autojs/443/511",
        "#ff8624",
        [
            [19, 12, "#eefdff"],
            [167, 10, "#eefdff"],
            [193, -6, "#ff8523"], 
            [184, 23, "#fe8c30"], 
            [90, 37, "#ff892a"], 
            [55, 38, "#ff892a"], 
            [39, 22, "#fd9642"], 
            [11, 39, "#ff8a2b"], 
            [171, 36, "#ff892a"], 
            [122, 0, "#ff8624"], 
            [64, 4, "#ff8625"]], 
            { 
                region: [393, 455, 686, 600], 
                threshold: [26] }
            ]
    game.logger("调用查找color方法");    
    game.find_by_color(agree);
}


main();