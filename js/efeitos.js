$(document).ready(function(){
			$("#input-search").on("focus", function(){
				$("li.search").addClass("ativo");
			}).on("blur",function(){
				$("li.search").removeClass("ativo");
			});
			$('.thumbnails').owlCarousel({
				    loop:true,
				    margin:10,
				    responsiveClass:true,
				    responsive:{
				        0:{
				            items:1,
				            nav:true
				        },
				        480:{
				            items:3,
				            nav:false
				        },
				        768:{
				            items:4,
				            nav:true,
				            loop:false
				        },
				        1200:{
				            items:6,
				            nav:true,
				            loop:false
				        }
				    }
				})	
		});