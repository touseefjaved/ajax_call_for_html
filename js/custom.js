$(document).ready(function() {

    $('#content').load('content/index.php ');

    $('ul#nav li a').click(function()
    {

        var page = $(this).attr('href');
        
        console.log(page);
        $('#content').load('content/' + page + '.php');
       
        return false;



    });


}); 