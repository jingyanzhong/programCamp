$(document).ready(function () {
    /*top效果 */  
    $('.topBtn a').click(function (e) { 
      e.preventDefault();
      $('html,body').animate({
          scrollTop:0
      }, 700);
    });

    /*輪播圖 */
    $(".owl-carousel").owlCarousel({
      loop: true, // 循環播放
      margin: 16,
      nav: false, // 顯示點點
      responsive: {
        0: {
          items: 1 // 螢幕大小為 0~600 顯示 1 個項目
        },
        600: {
          items: 3 // 螢幕大小為 600~1000 顯示 3 個項目
        },
      }
    });

    /*方案選擇*/
    $('.choiceNum li a').click(function (e) { 
        e.preventDefault();
        $(this).addClass('active');
        $(this).parent().siblings().find('a').removeClass('active');
    });

    /*fqa*/
    $('.fqaList li').click(function (e) { 
        e.preventDefault();
        $(this).find('p').slideToggle();
        $(this).siblings().find('p').slideUp();
        $(this).find('.fqaTitle h4').toggleClass('color-56C4C5-b');
        $(this).siblings().find('.fqaTitle h4').removeClass('color-56C4C5-b');
        $(this).find('.fqaTitle img').toggleClass('hide-img');
        $(this).siblings().find('.slidUp').addClass('hide-img');
        $(this).siblings().find('.slidDown').removeClass('hide-img');
      });
});

const choice= document.querySelector('.choiceNum');
const planNum= document.querySelectorAll('.planNum');
const planNumLen=planNum.length;
const planPrice= document.querySelector('.planPrice');
const planPricePro= document.querySelector('.planPrice-pro');
choice.addEventListener('click',choiceNum,false);
function choiceNum(e){
    e.preventDefault();
    let select=e.target.textContent;
    switch(select){
        case '10000位':
            for(var i=0;i<planNumLen;i++){
                planNum[i].textContent='10000';
            };
            planPrice.textContent='600';
            planPricePro.textContent='1600';
            break;
        case '15000位':
            for(var i=0;i<planNumLen;i++){
                planNum[i].textContent='15000';
            };
            planPrice.textContent='900';
            planPricePro.textContent='1900';
            break;
        case '20000位':
            for(var i=0;i<planNumLen;i++){
                planNum[i].textContent='20000';
            };
            planPrice.textContent='1200';
            planPricePro.textContent='2200';
            break;
        case '25000位':
            for(var i=0;i<planNumLen;i++){
                planNum[i].textContent='25000';
            };
            planPrice.textContent='1500';
            planPricePro.textContent='2500';
            break;
        default:
            for(var i=0;i<planNumLen;i++){
                planNum[i].textContent='>25000';
            };
            planPrice.textContent='>1500';
            planPricePro.textContent='>2500';
    };
};
