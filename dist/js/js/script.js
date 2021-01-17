
    // $(function(){
    //     $("#datepicker").datepicker();
    // });

$(document).ready(function(){
    $( function() {
        $( "#datepicker" ).datepicker({
            changeMonth: true,
            changeYear: true,
            firstDay: 1,
            showAnim: 'slideDown',
            currentText: "Now"
        });
        $("#datepicker").datepicker("setDate", new Date());
    });
});