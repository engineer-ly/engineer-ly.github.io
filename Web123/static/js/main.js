$(function () {
    //判断滚动条位置
    mainMethods.listerScroll();
    //登录
    mainMethods.login();
    //注册
    mainMethods.register();
    //点击隐藏弹窗
    mainMethods.hideModel();
});

var mainMethods = {
    //监听滚动条
    listerScroll: () => {
        $(window).scroll(function () {
            let num = $(window).scrollTop();
            if (num > 80) {
                $(".header").addClass('nav-active');
            };
            if (num <= 80) {
                $(".header").removeClass('nav-active');
            };
        });
    },
    //点击登录
    login: () => {
        $('#login').on('click', () => {
            console.log('登录');
            $(".modal-box").show();
            $('.login-type').show();
            $('body').css({
                "overflow-x": "hidden",
                "overflow-y": "hidden"
            });
        });
        $('.login-tit').on('click', () => {
            $('.login-tit').addClass('active');
            $('.register-tit').removeClass('active');
            $('.register-type').hide();
            $('.login-type').show();
        });
        $('.register-tit').on('click', () => {
            $('.register-tit').addClass('active');
            $('.login-tit').removeClass('active');
            $('.register-type').show();
            $('.login-type').hide();
        });
        //点击忘记密码
        $('.forget-password').on('click', () => {
            $('.has-return').show();
            $('.no-return').hide();
            $('.form-body').hide();
            $('.password-type').show();
        });
        //点击返回
        $('.return-icon').on('click', () => {
            $('.has-return').hide();
            $('.no-return').show();
            $('.form-body').hide();
            $('.login-type').show();
        });
        // 输入用户密码，登录
        $('#loain-submit').on('click', function () {
            //验证成功后，登录成功
            $(".modal-box").hide();
            $('.login-type').hide();
            $('.register-type').hide();
            $('body').css({
                "overflow-x": "auto",
                "overflow-y": "auto"
            });
            
        })

    },
    //点击注册
    register: () => {
        $('#register').on('click', () => {
            console.log('注册')
            $(".modal-box").show();
            $('.form-body').hide();
            $('.register-type').show();
            $('.login-tit').removeClass('active');
            $('.register-tit').addClass('active');
        })
    },
    // 隐藏弹窗
    hideModel: () => {
        $('.layer').on('click', () => {
            $(".modal-box").hide();
            $('.login-type').hide();
            $('.register-type').hide();
            $('body').css({
                "overflow-x": "auto",
                "overflow-y": "auto"
            });
        });
        // 点击x隐藏弹窗
        $('.modal-box .default').on('click', () => {
            $(".modal-box").hide();
            $('.login-type').hide();
            $('.register-type').hide();
            $('body').css({
                "overflow-x": "auto",
                "overflow-y": "auto"
            });
        })
    }
}