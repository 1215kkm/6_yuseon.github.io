
        $(function () {
            $(".box").each(function () {
                // 개별적으로 Wheel 이벤트 적용
                $(this).on("mousewheel DOMMouseScroll", function (e) {
                    e.preventDefault();
                    var delta = 0;
                    delta = event.wheelDelta; //event.wheelDelta 는 마우스휠 값임.
                    /*mousewheel 이벤트 = 익스, 크롬, 사파리, 오페라
                    DOMMouseScroll 이벤트 =  파이어폭스
                    즉 파이어 폭스는 mousewheel 이라는 이벤트가 없기 때문에
                    mousewheel 과 DOMMouseScroll 이벤트 두개를 동시에 걸어주는 메서드인 .on() 를 사용*/



                    var moveTop;
                    // 마우스휠을 위에서 아래로
                    if (delta < 0) {
                        moveTop = $(this).next().offset().top;
                    // 마우스휠을 아래에서 위로
                    } else {
                        moveTop = $(this).prev().offset().top;
                    }
                    // 화면 이동 0.8초(800)
                    $("html,body").stop().animate({scrollTop: moveTop});
                    
                });
            });


            var textBox;

            function inito(){
                textBox = document.createElement('div')
                textBox.setAttribute('class','text_box')
                textBox.style.position = "fixed";
                textBox.style.top = "50px";
                textBox.style.right = "50px";
                textBox.style.backgroundColor = "black";
                textBox.style.fontSize = "20px";
                textBox.style.color = "#fff";
                textBox.style.zIndex = "7777"
                document.body.appendChild(textBox);   
                console.log('dd')             
            }
            inito()
            
                   
            
            
            //페이지 표시 연습
                /*
                $(window).scroll(function() {
                    var scroll = $(window).scrollTop();
                    console.log(scroll);
                    if (scroll >= 50) {
                        //console.log('a');
                        $(".page_circle").addClass("circle_action");
                        $(".circle_wrap > li").css({'right':'0'});
                        $(".menu_name").css({'opacity':'1'});
                    } else {
                        //console.log('a');
                        $(".page_circle").removeClass("circle_action");
                        $(".circle_wrap > li").css({'right':''});
                        $(".menu_name").css({'opacity':'0'});
                    }
                });
            */
            
            
            
            
            //우측 페이지 표시
            $(window).scroll(function() {
                    var scroll = $(window).scrollTop();
                    console.log(scroll);
                
                    //첫번째 리스트
                    if (scroll >= 0) {
                        //console.log('a');
                        $(".one").addClass("circle_action");
                        $(".first_li").css({'right':'0'});
                        $(".first_li .menu_name").css({'opacity':'1'});
                    } 
                
                    
                    //두번째 리스트
                    if (scroll >= 920) {
                        //console.log('a');
                        $(".two").addClass("circle_action");
                        $(".second_li").css({'right':'0'});
                        $(".second_li .menu_name").css({'opacity':'1'});
                        
                        //첫번째 리스트 사라지게 하기
                        $(".one").removeClass("circle_action");
                        $(".first_li").css({'right':''});
                        $(".first_li .menu_name").css({'opacity':'0'});

                    } else{
                        $(".two").removeClass("circle_action");
                        $(".second_li").css({'right':''});
                        $(".second_li .menu_name").css({'opacity':'0'});
                    }
                
                    
                    //세번째 리스트
                    if (scroll >= 1840) {
                        //console.log('a');
                        $(".three").addClass("circle_action");
                        $(".third_li").css({'right':'0'});
                        $(".third_li .menu_name").css({'opacity':'1'});
                        
                        //두번째 리스트 사라지게 하기
                        $(".two").removeClass("circle_action");
                        $(".second_li").css({'right':''});
                        $(".second_li .menu_name").css({'opacity':'0'});
                        
                    } else {
                        //console.log('a');
                        $(".three").removeClass("circle_action");
                        $(".third_li").css({'right':''});
                        $(".third_li .menu_name").css({'opacity':'0'});
                    }
                
                
                    
                    //네번째 리스트
                    if (scroll >= 2760) {
                        //console.log('a');
                        $(".four").addClass("circle_action");
                        $(".fourth_li").css({'right':'0'});
                        $(".fourth_li .menu_name").css({'opacity':'1'});
                        
                        //세번째 리스트 사라지게 하기
                        $(".three").removeClass("circle_action");
                        $(".third_li").css({'right':''});
                        $(".third_li .menu_name").css({'opacity':'0'});
                        
                    } else {
                        //console.log('a');
                        $(".four").removeClass("circle_action");
                        $(".fourth_li").css({'right':''});
                        $(".fourth_li .menu_name").css({'opacity':'0'});
                    }
                
                    
                    //다섯번째 리스트
                    if (scroll >= 3680) {
                        //console.log('a');
                        $(".five").addClass("circle_action");
                        $(".fifth_li").css({'right':'0'});
                        $(".fifth_li .menu_name").css({'opacity':'1'});
                        
                        //네번째 리스트 사라지게 하기
                        $(".four").removeClass("circle_action");
                        $(".fourth_li").css({'right':''});
                        $(".fourth_li .menu_name").css({'opacity':'0'});
                        
                    } else {
                        //console.log('a');
                        $(".five").removeClass("circle_action");
                        $(".fifth_li").css({'right':''});
                        $(".fifth_li .menu_name").css({'opacity':'0'});
                    }
                
                
                    
                    //여섯번째 리스트
                    if (scroll >= 4600) {
                        //console.log('a');
                        $(".six").addClass("circle_action");
                        $(".sixth_li").css({'right':'0'});
                        $(".sixth_li .menu_name").css({'opacity':'1'});
                        
                        //다섯번째 리스트 사라지게 하기
                        $(".five").removeClass("circle_action");
                        $(".fifth_li").css({'right':''});
                        $(".fifth_li .menu_name").css({'opacity':'0'});
                        
                    } else {
                        //console.log('a');
                        $(".six").removeClass("circle_action");
                        $(".sixth_li").css({'right':''});
                        $(".sixth_li .menu_name").css({'opacity':'0'});
                    }
                
                
                
                    //일곱번째 리스트
                    if (scroll >= 5520) {
                        //console.log('a');
                        $(".seven").addClass("circle_action");
                        $(".seventh_li").css({'right':'0'});
                        $(".seventh_li .menu_name").css({'opacity':'1'});
                        
                        //여섯번째 리스트 사라지게 하기
                        $(".six").removeClass("circle_action");
                        $(".sixth_li").css({'right':''});
                        $(".sixth_li .menu_name").css({'opacity':'0'});
                        
                    } else {
                        //console.log('a');
                        $(".seven").removeClass("circle_action");
                        $(".seventh_li").css({'right':''});
                        $(".seventh_li .menu_name").css({'opacity':'0'});
                    }
                
                
                    //여덟번째 리스트
                    if (scroll >= 6440) {
                        //console.log('a');
                        $(".eight").addClass("circle_action");
                        $(".eighth_li").css({'right':'0'});
                        $(".eighth_li .menu_name").css({'opacity':'1'});
                        
                        //일곱번째 리스트 사라지게 하기
                        $(".seven").removeClass("circle_action");
                        $(".seventh_li").css({'right':''});
                        $(".seventh_li .menu_name").css({'opacity':'0'});
                        
                    } else {
                        //console.log('a');
                        $(".eight").removeClass("circle_action");
                        $(".eighth_li").css({'right':''});
                        $(".eighth_li .menu_name").css({'opacity':'0'});
                    }
 
                });
            
            
            
            
            
            
                //연습1 (각 섹션의 위치.)
               /*
                var VPos = $( '.visual' ).offset()
                var sec1Pos = $( '.section1' ).offset()
                console.log(sec1Pos)


                $( '.one' ).addClass("circle_action");
               */

            
             
                //연습2
                /*
                $(window).scroll(function () { 
                    var nowPos = $(document).scrollTop(); 
                    console.log(nowPos);
                    
                    
                    //var VPos = $('.visual').offset(); 
                    //console.log(VPos);
                    

                    
                    if(nowPos=0) {
                        $( '.one' ).addClass("circle_action");
                    }
                    
                    
                    if(nowPos=920) {
                        $( '.two' ).addClass("circle_action");
                    }
                });
                */
            
            
            
     
            
            
            // 우측 페이지 버튼 누르면 이동
            $('.first_li').click(function(){
                var offset = $('.visual').offset(); 
                $('html,body').animate({scrollTop: offset.top},400)
            })
            
            $('.second_li').click(function(){
                var offset = $('.section1').offset(); 
                $('html,body').animate({scrollTop: offset.top},400)
            })
            
            $('.third_li').click(function(){
                var offset = $('.section2').offset(); 
                $('html,body').animate({scrollTop: offset.top},400)
            })
            
            $('.fourth_li').click(function(){
                var offset = $('.section3').offset(); 
                $('html,body').animate({scrollTop: offset.top},400)
            })
            
            $('.fifth_li').click(function(){
                var offset = $('.section4').offset(); 
                $('html,body').animate({scrollTop: offset.top},400)
            })
            
            $('.sixth_li').click(function(){
                var offset = $('.section5').offset(); 
                $('html,body').animate({scrollTop: offset.top},400)
            })
            
            $('.seventh_li').click(function(){
                var offset = $('.section6').offset(); 
                $('html,body').animate({scrollTop: offset.top},400)
            })
            
            $('.eighth_li').click(function(){
                var offset = $('.footer').offset(); 
                $('html,body').animate({scrollTop: offset.top},400)
            })
            
            
            
            //우측 페이지 표시 색깔 바꾸기
            $(window).scroll(function () { 
                var nowPos = $(document).scrollTop(); 
                console.log(nowPos);
                if(nowPos >= 1840){
                    $('.third_li').css({'color':'#fff'})
                    $('li').mouseenter().css({'color':'#fff'})
                }else{
                    $('.third_li').css({'color':''})
                    $('li').mouseenter().css({'color':''})
                }
                
                if(nowPos >= 2760){
                    $('li').mouseenter().css({'color':''})
                }
                
                
                if(nowPos >= 3680){
                    $('.fifth_li').css({'color':'#fff'})
                    $('li').mouseenter().css({'color':'#fff'})
                }
            });
                   

            
            
            
            
            
            //상단 메뉴 버튼 클릭시 위치 이동
            $('.intro').click(function(){
                var offset = $('.visual').offset(); 
                $('html,body').animate({scrollTop: offset.top},400)
            })
            
            $('.natural_mood').click(function(){
                var offset = $('.section1').offset(); 
                $('html,body').animate({scrollTop: offset.top},400)
            })
            
            $('.yong_in').click(function(){
                var offset = $('.section2').offset(); 
                $('html,body').animate({scrollTop: offset.top},400)
            })
            
            $('.raffine').click(function(){
                var offset = $('.section3').offset(); 
                $('html,body').animate({scrollTop: offset.top},400)
            })
            
            $('.agustd').click(function(){
                var offset = $('.section4').offset(); 
                $('html,body').animate({scrollTop: offset.top},400)
            })
            
            $('.banner').click(function(){
                var offset = $('.section5').offset(); 
                $('html,body').animate({scrollTop: offset.top},400)
            })
            
            $('.pop_pop').click(function(){
                var offset = $('.section6').offset(); 
                $('html,body').animate({scrollTop: offset.top},400)
            })
            
            $('.contact').click(function(){
                var offset = $('.footer').offset(); 
                $('html,body').animate({scrollTop: offset.top},400)
            })
            
            
            
            // 팝업 이미지 크게 띄우기
            $('.pop_one').click(function(){
                $('.big_popup').fadeIn();
                $('.pop_up_original').attr('src','images/popup_1.jpg').css({'display':'block','margin':'200px auto'})
            })
            
            $('.pop_two').click(function(){
                $('.big_popup').fadeIn();
                $('.pop_up_original').attr('src','images/popup_2.jpg').css({'display':'block','margin':'200px auto'})
            })
            
            $('.pop_three').click(function(){
                $('.big_popup').fadeIn();
                $('.pop_up_original').attr('src','images/popup_3.jpg').css({'display':'block','margin':'200px auto'})
            })
            
            $('.pop_four').click(function(){
                $('.big_popup').fadeIn();
                $('.pop_up_original').attr('src','images/popup_4.jpg').css({'display':'block','margin':'200px auto'})
            })
            
            $('.pop_five').click(function(){
                $('.big_popup').fadeIn();
                $('.pop_up_original').attr('src','images/popup_5.jpg').css({'display':'block','margin':'200px auto'})
            })
            
            $('.pop_six').click(function(){
                $('.big_popup').fadeIn();
                $('.pop_up_original').attr('src','images/popup_6.jpg').css({'display':'block','margin':'200px auto'})
            })
            
            $('.pop_seven').click(function(){
                $('.big_popup').fadeIn();
                $('.pop_up_original').attr('src','images/popup_7.jpg').css({'display':'block','margin':'200px auto'})
            })
            
            $('.pop_eight').click(function(){
                $('.big_popup').fadeIn();
                $('.pop_up_original').attr('src','images/popup_8.jpg').css({'display':'block','margin':'200px auto'})
            })
            
            // 큰 팝업 닫기버튼
            $('.close_btn').click(function(){
                $('.big_popup').fadeOut();
            })
            
            
            

            //intro페이지 view버튼누르면 아래페이지로 이동
            $('.btn').click(function(){
                var offset = $('.section1').offset(); 
                $('html,body').animate({scrollTop: offset.top},400) 
            })
   

            
            
            
            
            //section2 효과 연습
            /*
            $('.sec2_wrap .photo_wrap').mouseenter(function(){
                $('.small_img').animate({'right':'1010px','top':'200px'}).animate({'z-index':-1})
                $('.small_img').animate({'right':50})  
            });
    
            
            
            $('.sec2_wrap .photo_wrap').mouseleave(function(){
                $('.small_img').animate({'right':'1000px','top':'0px'}).animate({'z-index':1})
                $('.small_img').animate({'right':0, 'top':'320px'})  
            });
            */


            
            /*contact 효과*/
/*            const black = document.querySelector('.black');
            window.onmousemove = function(e){
                const x = e.clientX;
                black.style.left = x+'px';
            }*/
        })






