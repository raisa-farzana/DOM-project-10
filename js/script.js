const resultDiv = document.getElementById('result');
const calculateBMI = () => {
    const age = document.getElementById('age').value;
    const height = parseFloat(document.getElementById('height').value/100);
    const weight = parseFloat(document.getElementById('weight').value);

    if(isNaN(age) || age <= 0){
        resultDiv.innerText = 'Please enter a valid age';
        return;
    }

    if(isNaN(height) || height=== 0 || isNaN(weight) || weight <= 0){
        resultDiv.innerText = 'Please enter a valid height and weight';
        return;
    }

    const bmi = weight / (height * height);
    const bmiCategory = getBMICategory(bmi);

    resultDiv.innerHTML = `
        <p> Your age is: ${age} </p>
        <p> Your BMI is: ${bmi.toFixed(2)} </p>
        <p> Your are: ${bmiCategory} </p>
    `;
}

const getBMICategory = (bmi) => {
    if(bmi < 18.5){
        return 'Underweight';
    }
    else if(bmi >= 18.5 && bmi < 25) {
        return 'Normal weight';
    }
    else if(bmi >= 25 && bmi < 30){
        return 'Overweight';
    }
    else{
        return 'Obesity';
    }
}