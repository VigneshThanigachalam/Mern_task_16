document.body.classList.add("bg-info");
var div_1= document.createElement("div");
div_1.classList.add("w-100")
var h_1= document.createElement("h1");
h_1.id="display";
h_1.classList.add("text-center");
div_1.appendChild(h_1);
document.body.appendChild(div_1);
let second = 10;
let second_display = document.getElementById('display');
setTimeout(() => {
    second_display.innerHTML = second--;
    setTimeout(() => {
        second_display.innerHTML = second--;
        setTimeout(() => {
            second_display.innerHTML = second--;
            setTimeout(() => {
                second_display.innerHTML = second--;
                setTimeout(() => {
                    second_display.innerHTML = second--;
                    setTimeout(() => {
                        second_display.innerHTML = second--;
                        setTimeout(() => {
                            second_display.innerHTML = second--;
                            setTimeout(() => {
                                second_display.innerHTML = second--;
                                setTimeout(() => {
                                    second_display.innerHTML = second--;
                                    setTimeout(() => {
                                        second_display.innerHTML = second--;
                                        setTimeout(() => {
                                            second_display.innerHTML = "Happy Independence Day";
                                        }, 1000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000);
