function kereses() {
    let beEv = document.getElementById("beEv").value

    fetch("https://api.nobelprize.org/v1/prize.json")
    .then(x => x.json())
    .then(y => {

        let sz = ``;

        y.prizes.forEach(elem => {
            //console.log(elem);
            if (elem.year == beEv) {
                {
                    sz += `
                        <p style="font-size: 20px; text-decoration: underline; color: blue;">
                            ${elem.year} ${elem.category}
                        </p>
                    `

                    for (const elemEmber of elem.laureates) {
                        sz += `
                            <p style="font-size: 15px;font-style: italic;">
                                ${elemEmber.surname} ${elemEmber.firstname} 
                            </p>
                            <p style="font-size: 10px;font-style: italic">
                                ${elemEmber.motivation}
                            </p>
                        `
                    }

                    sz += `<hr>`
                }
            }
        });

        if (sz == ``) {
            sz = `Nincs találat.`
        }

        document.getElementById("kiAdat").innerHTML = sz;

    });



}