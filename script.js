const qrcode = new QRCode("qrcode");
const defaultText = "QR From Query!"

function makeCode(text) {
	qrcode.makeCode(text);
}

const urlParams = new URLSearchParams(window.location.search);
const text = urlParams.get('text');
if (text) {
	window.history.pushState(text, 'pageTitle', window.location.pathname + '?text=' + text);
	$("#text").val(text)
	makeCode(text);
} else {
	window.history.pushState(defaultText, 'pageTitle', window.location.pathname + '?text=' + defaultText);
	$("#text").val(defaultText)
	makeCode(defaultText);
}

$("#text").
	on("blur", function () {
		let text = $("#text").val()
		if (text == "") {
			$("#text").focus()
			$(".qrcode").css("opacity", 0)
		} else {
			$(".qrcode").css("opacity", 1)
			window.history.pushState(text, 'pageTitle', window.location.pathname + '?text=' + text);
			makeCode(text);
		}
	}).
	on("keydown", function (e) {
		if (e.keyCode == 13) {
			let text = $("#text").val()
			if (text == "") {
				$("#text").focus()
				$(".qrcode").css("opacity", 0)
			} else {
				$(".qrcode").css("opacity", 1)
				window.history.pushState(text, 'pageTitle', window.location.pathname + '?text=' + text);
				makeCode(text);
			}
		}
	});

window.onpopstate = function (e) {
	if (e.state) {
		$("#text").val(e.state)
		makeCode(e.state);
	}
};