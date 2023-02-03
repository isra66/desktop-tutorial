

let form = document.forms[0];


form.addEventListener("submit", function (event) {
    event.preventDefault();


    let result = "";

    for (let i = 0; i < form.elements.length; i++) {
        switch (form.elements[i].type) {
            case "text":
            case "password":
            case "email":
            case "month":
            case "week":
            case "time":
            case "url":
            case "color":
            case "datatime-local":
            case "textarea":
            case "tel":
            case "number":

                if (!form.elements[i].value) {
                    alert("complete el campo :  " + form.elements[i].name);
                    form.elements[i].focus();
                    return;
                }
                result += form.elements[i].name + ": " + form.elements[i].value + "<br>";
                break;
            case "file":
                result += form.elements[i].name + "<br>";
                break;
            case "radio":
            case "checkbox":
                if (form.elements[i].checked) {
                    result += form.elements[i].name + ": " + form.elements[i].value + "<br>";
                }
                break;
            case "select-one":
                result += form.elements[i].name + ": " + form.elements[i].value + "<br>";
                break;
            case "select-multiple":
                for (let j = 0; j < form.elements[i].options.length; j++) {
                    if (form.elements[i].options[j].selected) {
                        result += form.elements[i].name + ": " + form.elements[i].options[j].value + "<br>";
                    }
                }
                break;
        }
    }

    document.getElementById("valores").innerHTML = result;
});
