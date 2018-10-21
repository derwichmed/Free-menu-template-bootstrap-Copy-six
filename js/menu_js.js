$(function (){
    $('.sub_menu').hide();
    
    $('.menu_item').mouseover(function (){
        $('.sub_menu').hide();
       $(this).find('>.sub_menu').show();
    });
    $('.sub_menu_item').mouseover(function (){
        $('.sub_menu_item > .sub_menu').hide();
        $(this).find('>.sub_menu').show();
    });
    
    $('.sub_menu').mouseout(function (){
       $(this).hide(); 
    });
    var menu_mobile_hiden = true;
    $('.nav_bar_menu > img').click(function (){
            if(menu_mobile_hiden)
            {
                $('.menu').css('display','block');
                menu_mobile_hiden = false;
            }
            else{
                $('.menu').css('display','none');
                menu_mobile_hiden = true;
            }
    });
});