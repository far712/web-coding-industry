dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));

function dragElement(terrariumElement) {
    //set 4 positions for positioning on the screen
    let pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    terrariumElement.onpointerdown = pointerDrag;

    function pointerDrag(e) {
        e.preventDefault();
        console.log(e);
        // gets initial mouse cursor position for pos3 and pos4
        pos3 = e.clientX;
        pos4 = e.clientY;
        // starts drag once mouse moved
        document.onpointermove = elementDrag;
        // stops drag, once mouse lifted
        document.onpointerup = stopElementDrag;
    }

    function elementDrag(e) {
        // calculate new cursor position
        // pos1 = where the Xmouse WAS - where it IS
        pos1 = pos3 - e.clientX;
        // pos2 = where the Ymouse WAS - where it IS
        pos2 = pos4 - e.clientY;
        //reset pos3 to current location of Xmouse
        pos3 = e.clientX;
        //reset pos4 to current location of Ymouse
        pos4 = e.clientY;
        console.log(pos1, pos2, pos3, pos4);
        // sets element new position:
        terrariumElement.style.top = terrariumElement.offsetTop - pos2 + 'px';
        terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + 'px';
    }

    function stopElementDrag() {
        // stops calculating once mouse is released
        document.onpointerup = null;
        document.onpointermove = null;
    }
}
