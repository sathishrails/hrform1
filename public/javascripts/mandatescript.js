$(document).ready(function(){
  $('.add_interview').click(function(){
	    $.ajax({
		   type:"POST",
		   url:'/mandates/add_interviews',
		   data:"",
		   success: function(data){
			$(data).appendTo('#result_interview');
		         $('.sample').click(function(){			 										   					$('#mandate_new_interview_attributes__conducting_date').datepicker(); 
			});
			$('.add_applicant_class').click(function(){
			//alert('hai');
				$.ajax({
					  url: "/mandates/add_applicants",
					  method: 'POST',
		  			  data: '',
			 		 success: function(data){
       						   $(data).appendTo('#result_interview');
						   //alert('I am present');
						}
					
				 });
			});
			
		 }
 	});
   });
});

