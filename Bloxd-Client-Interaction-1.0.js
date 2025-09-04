// ==UserScript==
// @name         Easy Bloxd Client Interaction
// @namespace    http://tampermonkey.net/
// @version      2025-09-01
// @description  try to take over the world!
// @author       You
// @match        https://bloxd.io/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bloxd.io
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.interaction={
    Click: function (btn=0){ //btn - button variable, 0 = LMB, 1 = Wheel Click, 2 = RMB
        ["mousedown", "mouseup"].forEach(type => {
            const event = new MouseEvent(type, {
                bubbles: true,
                cancelable: true,
                button: btn
            });
            this.bloxdCanvas.dispatchEvent(event);
        }) //closing forEach
     },
    pressKeyForTime: function pressKeyForTime(key,timeMs){
    let event = new KeyboardEvent("keydown", {
        code: key,
        bubbles: true,
        cancelable: true
    });
    window.dispatchEvent(event)
    setTimeout(()=>{let event = new KeyboardEvent("keyup", {
        code: key,
        bubbles: true,
        cancelable: true
    });
    window.dispatchEvent(event)
    },timeMs)

    },
    CactiCode(){
    console.log("Your code goes here!")
    window.interaction.Click()
    window.interaction.pressKeyForTime('KeyW',5000)


    }

} //closing the interaction thing

    window.addEventListener("keydown", e => {if (e.code=="KeyL") {window.interaction.CactiCode()} else if (e.key=="_"){window.interaction.bloxdCanvas=document.getElementById("noa-canvas")}})


    
})();