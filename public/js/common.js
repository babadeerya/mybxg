define(['jquery', 'template', 'cookie'], function ($, template) {
    //NProgress.start();

    //NProgress.done();

    $('.navs ul').prev('a').on('click', function () {
        $(this).next().slideToggle();
    });



    $('#logout').on('click', function () {
        $.ajax({
            type: 'post',
            url: '/api/logout',
            dataType: 'json',
            success: function (data) {
                if (data.code == 200) {
                    location.href = '/main/login';
                }
            }
        })
    })

    //判断用户是否登录  如果没有登录 默认打开页面为login
    if(!$.cookie('PHPSESSID') && location.pathname != '/main/login'){
        // 如果cookie不存在，跳转到登录页
        location.href = '/main/login';
    }


    //获取存储的cookie信息
    var loginInfo = JSON.parse($.cookie('loginInfo'));
    //设置头像图片
    $('.aside .profile img').attr('src', loginInfo.tc_avatar);
    $('.aside .profile h4').html(loginInfo.tc_name);

})
