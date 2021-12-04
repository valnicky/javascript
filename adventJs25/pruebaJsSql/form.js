//const { LocalConvenienceStoreOutlined } = require("@material-ui/icons");

const oppoStatus = [{
        "K_OPPO_STATUS": 1,
        "STATUS": "1. Initial Contact",
        "SUCCESS": 0
    },
    {
        "K_OPPO_STATUS": 2,
        "STATUS": "2. Demonstration",
        "SUCCESS": 25
    },
    {
        "K_OPPO_STATUS": 3,
        "STATUS": "3. Proposal",
        "SUCCESS": 50
    },
    {
        "K_OPPO_STATUS": 4,
        "STATUS": "4. Negotiation",
        "SUCCESS": 75
    },
    {
        "K_OPPO_STATUS": 5,
        "STATUS": "5. Order",
        "SUCCESS": 100
    }
];

const Module = class {
    constructor() {

    }
    start() {
        // Start modifying the form elements here!
        // You are allowed to add extra methods and properties to this class

        let selec = document.querySelector("select");
        var inp = document.querySelector("input");
        let btn = document.querySelector("button");
        let opt;
        let output = document.querySelector(".output");

        for (let i = 0; i < oppoStatus.length; i++) {
            opt = document.createElement('option');
            opt.innerText = oppoStatus[i]["STATUS"];
            opt.value = oppoStatus[i]["STATUS"];
            selec.appendChild(opt);
            //  console.log(selec.value);
            selec.addEventListener('change', () => {
                // console.log(selec.value);
                // console.log(oppoStatus[i]["SUCCESS"]);
                let selecVal = selec.value;
                let subst = selecVal.substr(0, 1);
                //console.log(subst);
                if (subst == 1) {

                    inp.value = '0';
                    inp.innerText = '0';
                } else if (subst == 2) {
                    inp.value = '25';
                    inp.innerText = '25';
                } else if (subst == 3) {
                    inp.value = '50';
                    inp.innerText = '50';
                } else if (subst == 4) {
                    inp.value = '75';
                    inp.innerText = '75';
                } else if (subst == 5) {
                    inp.value = '100';
                    inp.innerText = '100';
                }

                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    //   console.log(subst, inp.value);
                    output.innerText = `{"status":${subst}, "success":${inp.value}}`;
                })
            })
        }


    }
}

const main = new Module();
main.start();