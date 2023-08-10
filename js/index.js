$(function(){
    $('.bestTeam .tab > li > a').on('click',function(e){
        e.preventDefault();
        let i = $(this).parent().index();
        console.log(i)
        $('.bestTeam .tab > li> .panel').hide(); /* 0,1,2,3 순서대로 z-index가 높기 때문에 전체 패널을 hide해줘야함 */
        $(this).next('.panel').show();
    })


    $('.bestTeam .tab > li').first().children('a').trigger('click');
});




/* $(function(){
    $('.tabMenu>li').on('click',function(e){
        e.preventDefault();
        let i = $(this).index();
        $('.tabPanel>li').hide().eq(i).show(); /* .tabPanel > li 전체를 hide 클릭한 요소만 show 
    })
}); */
