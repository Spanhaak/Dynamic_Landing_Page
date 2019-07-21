//
// DOM Elements that will be used
//
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');

//
// Show the current time on the page
//
function showTime(){ 
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();
    
    //
    // Set AM or PM - Not used at the moment, maybe in next version   
    const amPm = hour >= 12 ? 'PM' : 'AM';

    //
    // 24 hour format, i'd like to use the 24 hour format and not the US 12 hour format
    hour =  hour % 24 || 24;

    //
    // output the time in the actual HTML document using the innerHTML
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

    setTimeout(showTime, 1000);
} 
//
// Add zeros to time if needed, this is needed because otherwise it will have a ugly
// effect on the display of the time. 
//
function addZero(n){
    return (parseInt(n, 10) < 10 ? '0' : '') +n;
}

//
// Set background and greeting to whatever is the part of the day
function setBgGreet() {
    let today = new Date(),
        hour = today.getHours();

    if (hour < 12 ){
        //morning
        document.body.style.backgroundImage = "url('../img/morning.jpg')";
        greeting.textContent = 'Good Morning';
    } else if(hour < 18) {
        //afternoon
        document.body.style.backgroundImage = "url('../img/afternoon.jpg')";
        greeting.textContent = 'Good Afternoon';
        document.body.style.color = 'black';
    } else {
        //evening
        document.body.style.backgroundImage = "url('../img/evening.jpg')";
        greeting.textContent = 'Good Evening';
        document.body.style.color = 'white';
    }
}
//
// Get Name that is filled in
function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }

}

//
// set name in localstorage so it can be retrieved
function setName(e) {
    if (e.type === 'keypress') {
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText); name.blur();
        }
    }  else { 
        localStorage.setItem('name', e.target.innerText);
    } 
}   

//
// Get focus and pass it on to set focus
function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }

}

//
// set focus in localstorage
function setFocus(e) {
    if (e.type === 'keypress') {
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText); focus.blur();
        }
    }  else { 
        localStorage.setItem('focus', e.target.innerText);
    } 
}   


//
// Add Eventlisteners to make sure it behaves accordingly
//
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

//
// Run the show :-)
//
showTime();
setBgGreet();
getFocus();
getName();