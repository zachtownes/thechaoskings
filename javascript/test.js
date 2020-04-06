function onload(){
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        alert("mobile")
    } else {
        alert("Not Mobile")
    }
}