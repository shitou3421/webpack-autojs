var game = {};


// 是否开启失败重新查找
game.refind = false;
// 使用过的元素
game.refind_before_list = new Array();
// 失败重新查找次数
game.re_find_nums = 3;
// 失败重新查找也失败后，查找最近出现过的元素个数
game.click_history_find_nums = 6;

// 查找超时时间设置
game.find_timeout = 20 * 1000;

// 执行中的重新查找次数
game.refind_times = 0;

var pic = class{
    constructor(path){
        this.path = game.path(path);
    }
};

var color = class{
    // let 多点信息 = [
    //     "autojs/446/506",
    //     "#ff8523",
    //     [[170,1,"#ff8624"],[79,9,"#ff8625"],[85,19,"#f1eadd"],[85,34,"#ff892a"],[10,39,"#ff892a"],[172,41,"#ff892a"],[201,25,"#ff8828"]],
    //     {
    //         region:[445,511,644,547],
    //         threshold:[26]}
    //     ]
    constructor(color_arr){
        game.logger(color_arr);
        this.color_array = color_arr;
        [this.img, this.firstColor, this.colors, this.options] = this.color_array;
        game.logger("【\n" + "img: " + this.img + "\n" + "firstColor: " + this.firstColor + "\n" + "colors: " + this.colors + "\n" + "options: " + this.options + "\n】");
    }
};


class WaitResultType {
    static success = new WaitResultType();
    static fail = new WaitResultType();
    static refind_fail = new WaitResultType();
}

// 传递给后台的消息
game.transfer = function (str) {
    // 建立后台服务器连接
    // 发送消息到后台
}




// 统一日志记录
game.logger = function (str) {
    console.log(str);
    // toastLog(str);
    game.transfer(str);
}

// 处理手机路径与项目路径不一致的问题
game.path = function (path_str) {
    // var cwd_path = files.cwd();
    abs_path = files.path(path_str)
    return abs_path;
}



// 启动app
game.launch = function(package_str){
    game.logger("开始启动app: " + package_str);
    app.launch(package_str);
}


// 等待对象显示
game.wait = function (obj, timeout) {
    // 重试次数退出逻辑
    if (game.re_find_nums < game.refind_times) {
        game.logger("重新查找超过了重试次数，请检查！！");
        return WaitResultType.refind_fail;
    }
    var p = false;
    var start_wait = Date.parse(new Date());


    if (obj instanceof pic) {
        // 对象是图片
        game.logger("对象是pic类");
        var img = images.read(obj.path);
        //循环查找
        while (Date.parse(new Date()) - start_wait < timeout) {
            var p = images.findImage(images.captureScreen(), img);
            if (p) {
                break;
            }
            sleep(200);
        }

        if (p) {
            game.logger("图片obj:  + " + obj + "找到了在: " + p.x + ", " + p.y);
            //将找到的元素放入已查找数组
            game.refind_before_list.push(obj);
            game.refind_times = 0;
            return WaitResultType.success;
        } else {
            game.logger("没有找到图片obj: " + obj + ", 重新等待配置的次数：" + game.re_find_nums);
            game.refind_times += 1;
            return game.wait(obj, timeout);
        }
    } else if (obj instanceof color) {
        //循环查找
        game.logger("对象是color类");
        while (Date.parse(new Date()) - start_wait < timeout) {
            game.logger("查找目标颜色中");
            var p = images.findMultiColors(images.captureScreen(), obj.firstColor, obj.colors, obj.options);
            if (p) {
                break;
            }
            sleep(200);
        }

        // 对象是颜色
        if (p) {
            game.logger("颜色obj:  + " + obj + "找到了在: " + p.x + ", " + p.y);
            game.refind_before_list.push(obj);
            game.refind_times = 0;
            return WaitResultType.success;
        } else {
            game.logger("没有找到颜色obj: " + obj);
            game.refind_times += 1;
            return game.wait(obj, timeout);
        }
    } else {
        //等待对象传递错误
        game.logger("等待函数wait传递对象错误, 请传入图片或颜色组，请检查参数: " + "typeof: "+ typeof obj);
        return WaitResultType.fail;
    }
}


// 通过图片查找
game.find_by_pic_click = function (path, timeout = game.find_timeout) {
    // 传递图片路径
    var p = new pic(path);
    var r = game.wait(p, timeout = timeout);
    if (r) {
        game.logger("成功找到图片【" + path + "】，执行点击操作");
        click(r);
    } else {
        game.logger("查找图片【" + path + "】超时, 在" + timeout + "毫秒内没有找到");

        // return game.find_by_pic_click();
    }
}

// 通过颜色查找
game.find_by_color = function (color_arr, timeout = game.find_timeout) {
    // 传递颜色数组
    game.logger("实例化颜色类");
    var color_obj = new color(color_arr);
    game.logger("调用等待方法");
    var r = game.wait(color_obj, timeout = timeout);
    if (r) {
        game.logger("成功找到颜色组，执行点击操作");
        click(r);
    } else {
        game.logger("查找颜色组超时, 在" + timeout + "毫秒内没有找到");
    }
}


module.exports = game