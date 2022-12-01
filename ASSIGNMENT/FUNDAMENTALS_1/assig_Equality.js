const numNeighbours = (prompt("How many neighbour countries does your country have?", 1));

if (numNeighbours === 1) {
    console.log('Only 1 border!');
}
else if (numNeighbours > 1) {
    console.log("More than 1 border");
}
else {
    console.log("No borders");
}


