const responses = ["c", "a", "b", "a", "c"];
const emojis = ["✔️", "✨", "👀", "😭", "👎"];

const form = document.querySelector(".quiz-form")
form.addEventListener("submit", handleSubmit)

function handleSubmit(e){
    e.preventDefault()

    const results = [];

    const radioButtons = document.querySelectorAll("input [type='radio']:checked")

    radioButtons.forEach((radioButton, index) => {
        if(radioButton.value === responses[index]) {
            results.push(true)
        } else {
            results.push(false)
        }
    })

    // console.log(radioButtons);
    // console.log(results);
    showResults(results);
}

const titleResult = document.querySelector(".result h2");
const markResult = document.querySelector(".mark");
const helpResult = document.querySelector(".help");

function showResults(results){

    const errorsNumber = results.filter(el => el === false).length;
    console.log(errorsNumber);

}