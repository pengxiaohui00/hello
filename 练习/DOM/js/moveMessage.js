/**
 * Created by С�� on 2017/5/31.
 */
function moveMessage() {
    var elem = document.getElementById("message");
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    if(xpos == 200 && ypos == 100){
        return true;
    }
    if (xpos < 200){
        xpos++;
    }
    if(xpos >200){
        xpos--;
    }
    if(ypos <100){
        ypos++;
    }
    if(ypos >100){
        ypos--;
    }
    elem.style.left = xpos+"px";
    elem.style.top = ypos +"px";
    movement = setTimeout("moveMessage()",10);

}
