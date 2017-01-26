(function(){
    var msg =
    "<p>It don't make sense here. <br> Try again when <a href='http://archives.chicagotribune.com/1876/09/15/page/8/article/go-west-young-man'>you're out west</a>!</p>";
    let originalURL = window.location.origin;
    if (originalURL == 'http://archives.chicagotribune.com' ) {
    var originPATH = window.location.pathname.split('/');
    var targetPATH = originPATH.splice(originPATH.lastIndexOf('page')+2,2,'xxlarge.jpg');
    console.log(originPATH.join('/'));
    window.location.pxathname = originPATH.join('/'); 
    } else{
		alertify.alert(msg);
    }
    }());