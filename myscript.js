/*
 * @Author: Akko
 * @Date: 2020-10-29 16:44:37
 * @LastEditTime: 2020-10-30 00:13:26
 * @LastEditors: Akko
 * @Description: 
 * @FilePath: /WebCalculator/myscript.js
 * @ Copyright ©️ 2020 Akko All rights reserved.
 */
/*随机数函数*/
function rand(m, n) {
    return Math.ceil(Math.random() * (n - m + 1)) + m - 1;
}

/*背景光线部分*/
let num = 40; //光线总数
for (let i = 0; i < num; i++) {
    /*创建i标签*/
    const i = document.createElement('i');
    /*设置样式*/
    i.style.height = rand(30, 100) + 'px';
    i.style.left = rand(1, 99) + 'vw';
    /*随机动画周期*/
    i.style.animationDuration = rand(5, 30) / 10 + 's';
    /*将i插入到container元素中*/
    document.querySelector('.container').appendChild(i);
}