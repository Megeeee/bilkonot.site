function cal() {
    let e1 = document.getElementById("e1").value;
    let e2 = document.getElementById("e2").value;
    let or = document.getElementById("or").value;
    let sld = document.getElementById("sld").value;
    let srt = document.getElementById("srt").value;
    let ascr = document.getElementById("ascr").value;
    let f = document.getElementById("f").value;



    let grade = (parseFloat(e1) / 22 * 20) +
        (parseFloat(e2) / 22 * 25) +
        (parseFloat(ascr) / 36 * 10) +
        (parseFloat(or) / 30 * 8) +
        (parseFloat(sld) / 21 * 7) +
        (parseFloat(srt) / 4 * 5) +
        (parseFloat(f) / 22 * 25)

    document.getElementById("demo").innerHTML = "Mark is =" + grade;
}

setInterval(() => {
    let e1 = document.getElementById("e1").value;
    let e2 = document.getElementById("e2").value;
    let or = document.getElementById("or").value;
    let sld = document.getElementById("sld").value;
    let srt = document.getElementById("srt").value;
    let ascr = document.getElementById("ascr").value;
    let f = document.getElementById("f").value;



    let grade = (parseFloat(e1) / 22 * 20) +
        (parseFloat(e2) / 22 * 25) +
        (parseFloat(ascr) / 36 * 10) +
        (parseFloat(or) / 30 * 8) +
        (parseFloat(sld) / 21 * 7) +
        (parseFloat(srt) / 4 * 5) +
        (parseFloat(f) / 22 * 25)

    if (!isNaN(grade)) {
        document.getElementById("demo").innerHTML = "Mark is =" + grade.toFixed(3);
    }


    if (grade >= 95) {
        document.getElementById("demo1").innerHTML = "A";
    } else if (grade >= 94) {
        document.getElementById("demo1").innerHTML = "A-";
    } else if (grade >= 86) {
        document.getElementById("demo1").innerHTML = "B+";
    } else if (grade >= 82) {
        document.getElementById("demo1").innerHTML = "B";
    } else if (grade >= 78) {
        document.getElementById("demo1").innerHTML = "B-";
    } else if (grade >= 74) {
        document.getElementById("demo1").innerHTML = "C+";
    } else if (grade >= 70) {
        document.getElementById("demo1").innerHTML = "C-";
    } else {
        document.getElementById("demo1").innerHTML = "F";
    }
}, 10);