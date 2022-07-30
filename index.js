let batteryLevel;
let container = document.querySelector(".container");
let unlock = document.querySelector(".unlock");
let pass = document.getElementById("pass");
let mainPage = document.querySelector('.mainPage');
let mainPage2 = document.querySelector('.mainPage2');
let btn = document.querySelector(".btn");
unlock.addEventListener('click',function(){
    navigator.getBattery().then(function(battery) {
        if(pass.value == battery.level*100){
            mainPage.classList.remove('hide');
            container.classList.add('hide');
            btn.classList.remove("hide")
            btn.innerText = "Lock"
            pass.value="";
        }
        else{
            mainPage2.classList.remove('hide')
            container.classList.add('hide');
            btn.classList.remove("hide")
            btn.innerText = "Try Again"
            pass.value="";
        }
    })
});
btn.addEventListener('click',function(){
    container.classList.remove('hide');
    mainPage2.classList.add('hide')
    btn.classList.add('hide')
    mainPage.classList.add('hide');
})
