function cal() {
    let lib = document.getElementById("e1").value;
    let e = document.getElementById("e2").value;
    let or = document.getElementById("or").value;
    let out = document.getElementById("sld").value;
    let rp = document.getElementById("srt").value;
    let fin = document.getElementById("ascr").value;



    let grade = (parseFloat(lib) / 10 * 5) +
        (parseFloat(e) / 22 * 20) +
        (parseFloat(or) / 22 * 20) +
        (parseFloat(out) / 15 * 10) +
        (parseFloat(rp) / 23 * 30) +
        (parseFloat(fin) / 15 * 15)

    document.getElementById("demo").innerHTML = "Mark is =" + grade;
}

setInterval(() => {
    let lib = document.getElementById("e1").value;
    let e = document.getElementById("e2").value;
    let or = document.getElementById("or").value;
    let out = document.getElementById("sld").value;
    let rp = document.getElementById("srt").value;
    let fin = document.getElementById("ascr").value;



    let grade = (parseFloat(lib) / 10 * 5) +
        (parseFloat(e) / 22 * 20) +
        (parseFloat(or) / 22 * 20) +
        (parseFloat(out) / 15 * 10) +
        (parseFloat(rp) / 23 * 30) +
        (parseFloat(fin) / 15 * 15)

    if (!isNaN(grade)) {
        document.getElementById("demo").innerHTML = "Mark is =" + grade.toFixed(3);
    }


    if (grade >= 95) {
        document.getElementById("demo1").innerHTML = "A";
    } else if (grade >= 90) {
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
    } else if (grade >= 67) {
        document.getElementById("demo1").innerHTML = "D+";
    } else if (grade >= 63) {
        document.getElementById("demo1").innerHTML = "D";
    } else if (grade >= 59) {
        document.getElementById("demo1").innerHTML = "D-";
    } else {
        document.getElementById("demo1").innerHTML = "F";
    }
}, 10);