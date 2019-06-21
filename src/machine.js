import React from 'react';
import './App.css';


function playing(url){
    let audio = new Audio(url);
    audio.play();
    document.getElementById("display").innerHTML = heaters[audios.indexOf(url)];
}

window.addEventListener('keypress', function (e) {
    if (e.key == "q" || e.key == "Q") {
        playing("https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3");
    }else if (e.key == "w" || e.key == "W") {
        playing("https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3");
    }else if (e.key == "e" || e.key == "E") {
        playing("https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3");
    }else if (e.key == "a" || e.key == "A") {
        playing("https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3");
    }else if (e.key == "s" || e.key == "S") {
        playing("https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3");
    }else if (e.key == "d" || e.key == "D") {
        playing("https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3");
    }else if (e.key == "z" || e.key == "Z") {
        playing("https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3");
    }else if (e.key == "x" || e.key == "X") {
        playing("https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3");
    }else {
        playing("https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3");
    }   
}, false);



let vals = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
let audios = ["https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"];

let heaters = ["Heater 1","Heater 2","Heater 3","Heater 4", "Clap",
"Open HH", "Kick n' Hat","Kick","Closed HH"];

let keys = vals.map(x => <button id={`Heater-${vals.indexOf(x)}`} class="drum-pad" onClick={() => playing(audios[vals.indexOf(x)])}><audio id={x} className="clip" src={audios[vals.indexOf(x)]}></audio>{x}</button>);

const Machine = () => {


    return (
        <div id="drum-machine">
            <div id="display">
                Heater Kit
            </div>
            {keys}
        </div>
    );
}

export default Machine;