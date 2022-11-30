const mark_weight = 95;
const mark_height = 1.88;
const john_weight = 85;
const john_height = 1.76;

const BMI_mark = mark_weight / (mark_height ** 2);
const BMI_john = john_weight / (john_height ** 2);

const markHigherBMI = BMI_mark > BMI_john;

if (markHigherBMI) {
    console.log(`Mark has higher BMI than John: (Mark's BMI :${BMI_mark.toFixed(2)} > John's BMI: ${BMI_john.toFixed(2)})`);
}
else {
    console.log(`John has higher BMI than Mark: (Mark's BMI :${BMI_mark.toFixed(2)} < John's BMI: ${BMI_john.toFixed(2)})`);
}