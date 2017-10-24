$( document ).ready(function() {
    $("#bouttonCreer").on('click',function(e){
        console.log("Click submit");
        if ($("#nom").val() == ''){
            console.log("Entrée dans if");
            $("#nom").addClass("is-invalid");
            $("#nom").val('');
        }
    });
});
