const language = 'Tamil';
const population = 144;
const isIsland = true;
const country = 'India';
if (language === 'english' && population < 50 && !isIsland) {
    console.log(`You should live in ${country} :)`);
} else {
    console.log(`${country} does not meet your criteria :(`);
}