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

var pic = class {
    constructor(path) {
        this.path = game.path(path);
    }
};

var color = class {
    // let 多点信息 = [
    //     "autojs/446/506",
    //     "#ff8523",
    //     [[170,1,"#ff8624"],[79,9,"#ff8625"],[85,19,"#f1eadd"],[85,34,"#ff892a"],[10,39,"#ff892a"],[172,41,"#ff892a"],[201,25,"#ff8828"]],
    //     {
    //         region:[445,511,644,547],
    //         threshold:[26]}
    //     ]
    constructor(color_arr) {
        game.logger(color_arr);
        this.color_array = color_arr;
        [this.name, this.img, this.firstColor, this.colors, this.options] = this.color_array;
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


game.exec_init = function (package_str) {
    game.launch(package_str);
    game.logger("启动完成， 开始请求截屏权限");
    var r = images.requestScreenCapture();
    game.logger("截屏权限请求完成")
    if (!r) {
        logger("获取截屏权限失败");
        exit();
    }
    game.logger("获取屏幕信息");
    let capt = images.captureScreen();
    console.log(capt.getWidth() + 'x' + capt.getHeight());
    console.log(device.width + '×' + device.height);
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
game.launch = function (package_str) {
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
            game.logger("图片obj:  + " + obj.path + " 找到了在: " + p.x + ", " + p.y);
            //将找到的元素放入已查找数组
            game.refind_before_list.push(obj);
            game.refind_times = 0;
            return p;
        } else {
            game.logger("当前第" + game.refind_times + "次查找, 没有找到图片obj: " + obj + ", 重新等待配置的次数：" + game.re_find_nums);
            game.refind_times += 1;
            return game.wait(obj, timeout);
        }
    } else if (obj instanceof color) {
        //循环查找
        game.logger("对象是color类, 查找颜色组名字为: " + obj.name);
        while (Date.parse(new Date()) - start_wait < timeout) {
            var p = images.findMultiColors(images.captureScreen(), obj.firstColor, obj.colors, obj.options);
            if (p) {
                break;
            }
            sleep(200);
        }

        // 对象是颜色
        if (p) {
            game.logger("颜色obj:  + " + obj.name + "找到了在: " + p.x + ", " + p.y + ", 等待1秒返回");
            game.refind_before_list.push(obj);
            game.refind_times = 0;
            return p;
        } else {
            game.logger("当前第" + game.refind_times + "次查找, 没有找到颜色组obj: " + obj.name);
            game.refind_times += 1;
            return game.wait(obj, timeout);
        }
    } else {
        //等待对象传递错误
        game.logger("等待函数wait传递对象错误, 请传入图片或颜色组，请检查参数: " + "typeof: " + typeof obj);
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
    }
}

// 通过颜色查找
game.find_by_color = function (color_arr, timeout = game.find_timeout) {
    // 传递颜色数组
    var color_obj = new color(color_arr);
    game.logger("调用等待方法");
    var r = game.wait(color_obj, timeout = timeout);
    if (r) {
        game.logger("成功找到颜色组，执行点击操作, 连续点击三次");
        click(r.x, r.y);
        sleep(200);
        click(r.x, r.y);
        sleep(200);
        click(r.x, r.y);
    } else {
        game.logger("查找颜色组超时, 在" + timeout + "毫秒内没有找到");
    }
}

//滑动操作
game.swipe = function (pos1, pos2, duration) {
    game.logger("进行滑动操作：(" + pos1.x + ", " + pos1.y + ")" + "==>" + "(" + pos2.x + ", " + pos2.y + "), 持续时间(毫秒)为：" + duration + "滑动前后会等待2秒");
    sleep(2000);
    swipe(pos1.x, pos1.y, pos2.x, pos2.y, duration);
    sleep(2000);
}

// 清理游戏存储操作
game.clear_game_data = function (path_arr) {
    game.logger("执行清理游戏文件");
    var sh = new Shell(true);
    for (var i = 0; i < path_arr.length; i++) {
        game.logger("执行命令【rm -R "+ path_arr[i] + "】");
        sh.exec("rm -R "+ path_arr[i]);
    }

}

// 获取远端游戏数据
game.get_remote_game_data = function(){

}














module.exports = game