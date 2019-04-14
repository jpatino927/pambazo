$(document).ready(function(){

    $(".devour-form").on("submit", function(event){
        event.preventDefault();
        
        var pambazo_id = $(this).children(".pambazo_id").val();
        console.log(pambazo_id);
        $.ajax({
            method: "PUT",
            url:"/pambazos/" + pambazo_id
        }).then(function(data) {
            location.reload();
        });
    });
});