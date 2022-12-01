//Dolphins scores
const dol_sc1 = 96;
const dol_sc2 = 108;
const dol_sc3 = 89;
//Koalas scores
const koal_sc1 = 88;
const koal_sc2 = 91;
const koal_sc3 = 110;

const dol_avg = (dol_sc1 + dol_sc2 + dol_sc3) / 3;
const koal_avg = (koal_sc1 + koal_sc2 + koal_sc3) / 3;

if (dol_avg > koal_avg) {
    console.log("DOLPHINS WINS!!!");
}
else if (dol_avg < koal_avg) {
    console.log("KOALAS WINS!!!");
}
else {
    console.log("MATCH DRAW!!!!");
}

//Bonus 1

min_score = 100;

if (dol_avg > koal_avg && dol_avg >= min_score) {
    console.log("DOLPHINS WINS!!!");
}
else if (dol_avg < koal_avg && koal_avg >= min_score) {
    console.log("KOALAS WINS!!!");
}
else if (dol_avg === koal_avg && koal_avg === min_score) {
    console.log("MATCH DRAW!!!!");
}//Bonus 2
else {
    console.log("NO TEAMS WINS!!!");
}


