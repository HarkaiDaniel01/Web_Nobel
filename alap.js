fetch("https://api.nobelprize.org/v1/prize.json")
.then(x => x.json())
.then(y => megjelenit(y));

function megjelenit(y) {
    console.log(y)
}