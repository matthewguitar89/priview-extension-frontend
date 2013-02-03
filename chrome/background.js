chrome.webNavigation.onDOMContentLoaded.addListener(function(object details){
    ajax=new XMLHttpRequest();
    ajax.onreadystatechange=function(){
        if (ajax.readyState==4 && ajax.status==200){
            var r = ajax.responseText
            if(r.length <> 1){
                r = "error"
            }
            chrome.browserAction.setIcon({path:"icon_" + r + ".png"})
        }
    }
    ajax.open("GET", "http://preview.herokuapp.com/1/button-api/" + domain,true);
    ajax.send();
    }
});