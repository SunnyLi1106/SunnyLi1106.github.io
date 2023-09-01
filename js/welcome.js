function welcome(){
    let welcome_text = '欢迎光顾本菜狗的博客小窝~'
    if(document.referrer!==''){
        let referrer=document.referrer.split("/")[2];
        welcome_text="欢迎你，来自"+referrer+"的用户！";
        if(referrer==document.domain)return;
    }
    swal({
        title: " 欢迎！",
        text: welcome_text,
        imageUrl: "/img/headimg.png",
        timer: 3000,
        showConfirmButton: false
    });
}
$(document).ready(()=>{
    welcome()
})