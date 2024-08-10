const btnEl = document.getElementById("btn")
const bmiInputEl = document.getElementById("bmi-reult")

function calculateBMI(){
    const heightValue = document.getElementById("height").value / 100
    const weightValue = document.getElementById("weight").value

    const bmiValue = weiightValue / (heightValue * heightValue)

    console.log(bmiValue)
}

btnEl.addEventListener("click", calculateBMI)

