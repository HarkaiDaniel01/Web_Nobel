function keresesNev() {
    let beNev = document.getElementById("beNev").value

    fetch("https://api.nobelprize.org/v1/prize.json")
    .then(x => x.json())
    .then(y => nevMegjelenit(y, beNev))

}

function nevMegjelenit(y, beNev) {




    for (const elem of y.prizes) {

        if (elem.laureates != undefined)
            for (const alElem of elem.laureates) {
                
                
                if (alElem.firstname == beNev) {
                    console.log(alElem.firstname);
                }
            }

        else {
            console.log(elem.year + " " + elem.category)
        }
    }
}