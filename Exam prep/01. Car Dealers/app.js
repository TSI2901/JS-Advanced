window.addEventListener("load", solve);

function solve() {
    let make = document.getElementById('make');
    let model = document.getElementById('model');
    let productYear = document.getElementById('year');
    let fuelType = document.getElementById('fuel');
    let originalCost = document.getElementById('original-cost');
    let sellingPrice = document.getElementById('selling-price');
    let publishBtn = document.getElementById('publish');
    let tableBody = document.getElementById('table-body');
    let soldCarsEl = document.getElementById("cars-list");
    let totalProfit = document.getElementById("profit");
    let profit = 0;

    publishBtn.addEventListener('click', (e) =>{
        e.preventDefault();
        if(make.value !== "" &&
            model.value !== "" &&
            productYear.value !== "" &&
            fuelType.value !== "" &&
            originalCost.value !== "" &&
            sellingPrice.value){

            let tr = document.createElement('tr');
            tr.setAttribute('class', 'row');
            let makeTd = document.createElement('td');
            makeTd.textContent = make.value;
            let modelTd = document.createElement('td');
            modelTd.textContent = model.value;
            let yearTd = document.createElement('td');
            yearTd.textContent = productYear.value;
            let fuelTd = document.createElement('td');
            fuelTd.textContent = fuelType.value;
            let originalCostTd = document.createElement('td');
            originalCostTd.textContent = originalCost.value;
            let newPriceTd = document.createElement('td');
            newPriceTd.textContent = sellingPrice.value;

            tr.appendChild(makeTd);
            tr.appendChild(modelTd);
            tr.appendChild(yearTd);
            tr.appendChild(fuelTd);
            tr.appendChild(originalCostTd);
            tr.appendChild(newPriceTd);

            let actionCell = document.createElement('td');
            tr.appendChild(actionCell);

            let editBtn = document.createElement('button');
            editBtn.textContent = 'Edit';
            actionCell.appendChild(editBtn);
            editBtn.setAttribute("class", "action-btn");
            editBtn.setAttribute("id", "edit");

            let sellBtn = document.createElement('button');
            sellBtn.textContent = 'Sell';
            actionCell.appendChild(sellBtn);
            editBtn.setAttribute("class", "action-btn");
            editBtn.setAttribute("id", "sell");

            tableBody.appendChild(tr);

            editBtn.addEventListener('click', (ev)=>{
                make.value = makeTd.textContent;
                model.value = modelTd.textContent;
                productYear.value = yearTd.textContent;
                fuelType.value = fuelTd.textContent;
                originalCost.value = originalCostTd.textContent;
                sellingPrice.value = newPriceTd.textContent;
                ev.target.parentNode.parentNode.remove();
            });
            sellBtn.addEventListener('click', (ev) => {

                let profitForCurrentCar = Number(newPriceTd.textContent) - Number(originalCostTd.textContent);

                let li = document.createElement('li');
                li.setAttribute('class', 'each-list');
                const carName = document.createElement("span");
                carName.textContent = makeTd.textContent + " " + modelTd.textContent;
                const carYear = document.createElement("span");
                carYear.textContent = yearTd.textContent;
                const carProfit = document.createElement("span");
                carProfit.textContent = `${profitForCurrentCar}`;

                li.appendChild(carName);
                li.appendChild(carYear);
                li.appendChild(carProfit);

                soldCarsEl.appendChild(li);

                profit += profitForCurrentCar;

                totalProfit.textContent = profit;
                ev.target.parentNode.parentNode.remove();
            })
            make.value = "";
            model.value = "";
            productYear = "";
            fuelType.value = "";
            originalCost.value = "";
            sellingPrice.value = "";
        }
    });
}
