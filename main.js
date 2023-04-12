let inputs = document.querySelectorAll(".custom-in");
let gobtn = document.querySelector(".btn");
let valueShowers = document.querySelectorAll(".value-shower");
let messages = document.querySelectorAll(".message");


function getAgeInDaysMonthsYears(birthdate) {
    var today = new Date();
    var birthDate = new Date(birthdate);

    var years = today.getFullYear() - birthDate.getFullYear();
    var months = today.getMonth() - birthDate.getMonth();
    var days = today.getDate() - birthDate.getDate();

    if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
        years--;
        months += 12;
    }
    if (days < 0) {
        months--;
        var lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
        days += lastMonth.getDate();
    }

    var age = {
        years: years,
        months: months,
        days: days
    };

    return age;
}
checkvalues = () => {
    inputs.forEach((y) => {
        if (y.value == "") {
            messages.forEach((m) => {
                m.classList.add("message-show");
            })
        }
        else {
            messages.forEach((m) => {
                m.classList.remove("message-show");
            })
        }
    })

}
gobtn.onclick = () => {
    checkvalues()
    let day = 0;
    let month = 0;
    let year = 0;

    inputs.forEach((e) => {
        if (e.id == "dd") {
            day = e.value;
        }
        else if (e.id == "mm") {
            month = e.value;
        }
        else if (e.id == "yy") {
            year = e.value;
        }
    })
    let data = getAgeInDaysMonthsYears(`${year}-${month}-${day}`);
    if (isNaN(data.days) || isNaN(data.months) || isNaN(data.years)) {
        valueShowers[0].innerHTML = "--"
        valueShowers[1].innerHTML = "--"
        valueShowers[2].innerHTML = "--"
    } else {
        valueShowers[0].innerHTML = data.years
        valueShowers[1].innerHTML = data.months
        valueShowers[2].innerHTML = data.days

    }




}
