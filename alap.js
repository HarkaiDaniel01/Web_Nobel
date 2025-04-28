let tomb = [];

fetch("https://api.nobelprize.org/v1/prize.json")
.then(x => x.json())
.then(y => megjelenit(y));

function megjelenit(y) {
    console.log(y)
    tomb = y;

    let sz = "";
    let sorSzam = 0;

    for (const elem of y.prizes) {
        sz += `
        <div class="col-sm-3">
            <div class="szegely" data-bs-toggle="modal" data-bs-target="#myModal" onclick = "reszletKiir(${sorSzam})">
                <p>${elem.year}</p>
                <p>${elem.category}</p>

            </div>
        </div>
        `

        sorSzam++;
    }

    document.getElementById("keret").innerHTML = sz;  
}

function reszletKiir(sorSzam) {
    console.log(sorSzam);
    //console.log(tomb);
    //alert(JSON.stringify(tomb));

    document.getElementById("modalFej").innerHTML = tomb.prizes[sorSzam].year + " " + tomb.prizes[sorSzam].category;
    
}

