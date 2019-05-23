$(function () {
    //点击显示更多；
    indexMethods.showMore();
})
let indexMethods = {
    //显示更多  
    showMore: () => {
        $('#show-more').on('click', function () {
            //向后台发请求数据渲染dom
            console.log('显示更多')
        })
    }
}