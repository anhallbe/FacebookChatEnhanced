
loadImages = function() {
	console.log("asd");
	$reg = /\.(png|jpg|jpeg|gif)$/;
	$imgur = "imgur.com/";
	//$youtube = "http://(?:www\.)?youtu(?:be\.com/watch\?v=|\.be/)(\w*)(&(amp;)?[\w\?=]*)?";

	$("._553k").each(function () {
		$link = $(this).attr("href");

		if($link.match($imgur) && !$link.match($reg)) {
			$link += ".gif";
		};

		if ($link.match($reg)) {
			$(this).replaceWith("<img src=\"" + $link + "\" style=\"width:100%;height:auto;\">");
		};

		/*if ($link.match($youtube)) {
			console.log("Found youtube!   :  " + $link);
			$ytID = $link.split("?v=")[1];
			$(this).replaceWith("<iframe id=\"ytplayer\" type=\"text/html\" width=\"100\" height=\"100\" src=\"http://www.youtube.com/embed/" + $ytID + "\" frameborder=\"0\" />");
		};*/

		$ytID = youtube_parser($link);
		if($ytID != "no") {
			$(this).replaceWith("<iframe id=\"ytplayer\" type=\"text/html\" width=\"100%\" height=\"auto\" src=\"https://www.youtube.com/embed/" + $ytID + "\" frameborder=\"0\" />");
		}
	});

	$("._59go").remove();
	$("._sq").remove();
}

window.setInterval(loadImages, 5000);

function youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    console.log("match: " + match);
    if (match&&match[7].length==11){
        return match[7];
    }else{
    	return "no";
    }
}