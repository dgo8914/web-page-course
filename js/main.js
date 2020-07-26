jQuery(documet).ready(function(){

	"use strict";
	$('#slider-carosel').carouFredsel({
		responsive:true,
		width:'100%',
		circular:true,
		scroll:{
			item:1,
			duration:500,
			pauseOnHover:true
		},
		auto:true,
		item:{
			visible:{
				min:1,
                max;1
			},
			height"variable"
		},
		pagination:{
			Container:".sliderpager",
			pageAnchorBuilder:false
		}

	});

})