var vh = window.innerHeight, ip, sel, check = true, backTop, list, ele, vh, listBox, listP;
sel = $("#myNavbar");
backTop = document.getElementById("backTop");

backTop.addEventListener("click", function() {
	$('body,html').animate({
		scrollTop: -1,
	}, 600);
});

function toiDatPhong (e) {
	$("#navbarResponsive").collapse("hide");
	e.preventDefault();
	$test = $("#datPhong");
	$('body,html').animate({
		scrollTop:  $("#datPhong").position().top - (window.innerHeight - $test.outerHeight()) / 2,
	}, 800);
}

console.log($("#datPhong").position().top);

list = $(".my-box");
listBox = $("#hotelintroduction .my-box-img");
listP = $("#hotelintroduction p");
console.log(listP);
vh = $(window).height();

$(window).scroll(function() {
	ip = $(window).scrollTop();
	myInit(ip);
	if (ip >= 500) {	
		$("#backTop").fadeIn();
	} else {
		$("#backTop").fadeOut();
	}

	if (ip > 0 && check) {
		sel.addClass("myIn");
		sel.removeClass("myOut");
		check = false;
	}
	
	if (ip == 0 && !check) {
		sel.addClass("myOut");
		sel.removeClass("myIn");
		check = true;
	}
});

$(function () {
	$('[data-toggle="tooltip"]').tooltip();
});

$(function() {

});


$(".btn-updown").click(
	function() {
		let sel, fun;
		sel = $(this).attr("data-target");
		fun = $(this).attr("data-fun");
		if (fun == "up") {
			$("#" + sel).val(new Number($("#" + sel).val()) + 1);
		} else {
			if ($("#" + sel).val() > 1) {
				$("#" + sel).val(new Number($("#" + sel).val()) - 1);
			}
		}
	}
);


function myInit(ii) {
	console.log(ii);
	$.each(list, function(index, val) {
		if ($(val).offset().top < ii + vh) {
			$(val).css({
				"opacity" : "1",
				"bottom" : "0"
			});
		}
	});

	$.each(listBox, function(index, val) {
		if ($(val).offset().top < ii + vh) {
			$(val).css("opacity", "1")
			if (new Number($(val).css("right").match(/[^a-z]*/)[0]) < 0) {
				$(val).css("right", "0");
			} else {
				$(val).css("left", "0");
			}
		}
	});

	$.each(listP, function(index, val) {
		if ($(val).offset().top < ii + vh) {
			$(val).css("opacity", "1")
			if (new Number($(val).css("right").match(/[^a-z]*/)[0]) < 0) {
				$(val).css("right", "0");
			} else {
				$(val).css("left", "0");
			}
		}
	});
}