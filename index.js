const btnEl = document.getElementById("btn")
const bmiInputEl = document.getElementById("bmi-reult")
const weightconditiobEl = document.getElementById("weight-conditon")
function calculateBMI(){
    const heightValue = document.getElementById("height").value / 100
    const weightValue = document.getElementById("weight").value

    const bmiValue = weiightValue / (heightValue * heightValue)

    
    bmiInputEl.value = bmiValue;

    if(bmiValue < 18.5){
      weightConditionEl.innerText = "Under weight"
    }
}

btnEl.addEventListener("click", calculateBMI)

