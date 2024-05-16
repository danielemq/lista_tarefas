$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        const novaTarefa = $('#nova-tarefa').val();
        const novoItem = $(`<li class="ativar">${novaTarefa}</li>`);
        $(novoItem).appendTo('ul');
        $('#nova-tarefa').val('');
    })
})

$(document).on('click', 'li', function (e) {
    if ($(this).hasClass('ativar')) {
        $(this).removeClass('ativar').addClass('desativar');
    }
    else {
        $(this).removeClass('desativar').addClass('ativar');
    }
});