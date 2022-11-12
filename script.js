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