$('.todo-list').on('click','li',function(){
    $(this).toggleClass('todo_done');
}); 

$('.todo-list').on('click','li span',function(e){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    })
    e.stopPropagation();
})


$('.todo-form input').keypress(function (e) { 
    if(e.which === 13){
        var todoText = $(this).val();
        $(this).val('');
        $('.todo-list ul').append('<li><span class="delete-btn"><i class="fas fa-trash-alt"></i></span>'+ todoText +'</li>');
    }
});

$('.form-toggle-icon').click(function(){
    $('.todo-form').fadeToggle();
    if($('.form-toggle-icon i').hasClass('fa-plus')){
        $('.form-toggle-icon i').removeClass('fa-plus');
        $('.form-toggle-icon i').addClass('fa-minus');
    }else{
        $('.form-toggle-icon i').addClass('fa-plus');
        $('.form-toggle-icon i').removeClass('fa-minus');
    }
});
