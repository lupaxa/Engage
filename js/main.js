(function ($, root, undefined) {

    $(function () {

        // ------------order ccontent hide function----------------------
        $('.order-item-header').on('click',function(){
            var parrent = $(this).closest('.js-order-item');
            parrent.find('.js-order-content').slideToggle("slow");
            parrent.find('.order-item-header').css("background" , "none");
            if(parrent.find('.hide-arrow-btn').hasClass('rotate')){
                parrent.find('.hide-arrow-btn').removeClass('rotate').css("transform" , "rotate(0deg)");
                parrent.find('.order-item-header').removeAttr("style");
            }else{
                parrent.find('.hide-arrow-btn').addClass('rotate').css("transform" , "rotate(90deg)");
            }
        });


        // ------------change active tab order status----------------------

        $('.order-status-item').on('click', function(){
            $('.order-status-item').removeClass('active')
            $(this).addClass('active');
            var orderStatus = $(this).attr('data-status');
            if(orderStatus!="all"){
                $('.js-order-item').css({height : '0' , display : "none"});
                $(".js-order-item[data-status='" + orderStatus+ "']").css({height : 'auto' , display : "block"});
            }else{
                $('.js-order-item').css({height : 'auto' , display : "block"});
            }





        })

    });


})(jQuery, this);