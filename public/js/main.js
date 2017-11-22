$(document).ready(function () {

	$("#sidebar").mCustomScrollbar({
        theme: "minimal"
	});
	
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
    
    $("ul.boss_list li a").click(function(e){ 
    	alert("Interception");
        e.preventDefault();
        var url = $(this).attr('href'); //get the link you want to load data from
        $.ajax({ 
         type: 'GET',
         url: url,
         success: function(data) { 
            $("#content").html(data); 
        } 
       }); 
     });

});
