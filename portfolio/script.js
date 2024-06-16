


let input = document.getElementsByTagName("input");
let text = document.getElementsByTagName("textarea");
document.forms[0].addEventListener("submit",(event)=>{
    event.preventDefault();

    if( input[0].value!=="" && input[0].value!=="" && text[0].value!=="") {
        console.log(input[0].value);
        alert(`Thankyou ${input[0].value}`);
        window.open("index.html");
    }
})