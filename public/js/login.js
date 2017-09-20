define(['jquery','cookie'],function ($) {
    $('#btn-login').click(function () {
        $.ajax({
            type: 'post',
            url: '/api/login',
            dataType: 'json',
            data: $('#loginform').serialize(),
            success: function (data) {
                //保存用户名以及头像 $.cookie(a,b)  设置a cookie 值为b b必须是string格式
                // path:'/' 是设置路径为根路径,方便其他页面也可以访问到
                $.cookie('loginInfo',JSON.stringify(data.result),{path:'/'});
                if (data.code == 200) {
                    location.href = '/main/index';
                } else {
                    alert('密码或者帐号错误,请重新输入');
                }
            }
        })
        //console.log($('#loginform').serialize());
        //阻止sunbmit 的默认提交
        return false;
    })
})