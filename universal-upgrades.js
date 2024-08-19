
const universalupgadedata = [
    {
        id: 0,
        effect: () => {
            return DC.DD1;
        },
        decription: "gain +10% more resources",
        effectdisplay: value => `+${value.mul(10).toString(1)}% gain to everything`,
        cost: DC.D100,
        currencykey: "infinitypoints",
        mainele: "UNI-UG",
        reqirement: true,
    },
    {
        id: 1,
        effect: () => {
            return DC.DD1;
        },
        decription: "gain +10% more resources",
        effectdisplay: value => `+${value.mul(10).toString(1)}% gain to everything`,
        cost: DC.De10,
        currencykey: "infinitypoints",
        mainele: "UNI-UG",
        reqirement: true,
    },
    {
        id: 2,
        effect: () => {
            return DC.DD1;
        },
        decription: "gain +10% more resources",
        effectdisplay: value => `+${value.mul(10).toString(1)}% gain to everything`,
        cost: DC.De100,
        currencykey: "infinitypoints",
        mainele: "UNI-UG",
        reqirement: true,
    },
    {
        id: 3,
        effect: () => {
            return DC.DD1;
        },
        decription: "gain +10% more resources",
        effectdisplay: value => `+${value.mul(10).toString(1)}% gain to everything`,
        cost: DC.D10,
        currencykey: "eternitypoints",
        mainele: "UNI-UG",
        reqirement: () => (game.progress > 2),
    },
    {
        id: 4,
        effect: () => {
            return DC.DD1;
        },
        decription: "gain +10% more resources",
        effectdisplay: value => `+${value.mul(10).toString(1)}% gain to everything`,
        cost: DC.De10,
        currencykey: "eternitypoints",
        mainele: "UNI-UG",
        reqirement: () => (game.progress > 2),
    },
    {
        id: 5,
        effect: () => {
            return DC.DD1;
        },
        decription: "gain +10% more resources",
        effectdisplay: value => `+${value.mul(10).toString(1)}% gain to everything`,
        cost: DC.De100,
        currencykey: "eternitypoints",
        mainele: "UNI-UG",
        reqirement: () => (game.progress > 2),
    },
    {
        id: 6,
        effect: () => {
            return DC.DD1;
        },
        decription: "gain +10% more resources",
        effectdisplay: value => `+${value.mul(10).toString(1)}% gain to everything`,
        cost: DC.D25,
        currencykey: "realitypoints",
        mainele: "UNI-UG",
        reqirement: () => (game.progress > 3),
    },
    {
        id: 7,
        effect: () => {
            return new Decimal(1.5);
        },
        decription: "gain 1.5x more resources",
        effectdisplay: value => `x${value.toString(1)} gain to everything`,
        cost: DC.De20,
        currencykey: "realitypoints",
        mainele: "UNI-UG",
        reqirement: () => (game.progress > 3),
    },
    {
        id: 8,
        effect: () => {
            return new Decimal(1.5);
        },
        decription: "gain 1.5x more resources",
        effectdisplay: value => `x${value.toString(1)} gain to everything`,
        cost: DC.De50,
        currencykey: "realitypoints",
        mainele: "UNI-UG",
        reqirement: () => (game.progress > 3),
    },
    {
        id: 9,
        effect: () => {
            return new Decimal(1.5);
        },
        decription: "gain 1.5x more resources",
        effectdisplay: value => `x${value.toString(1)} gain to everything`,
        cost: DC.De200,
        currencykey: "realitypoints",
        mainele: "UNI-UG",
        reqirement: () => (game.progress > 3),
    },
]

let UniversalUpgrades = [];

const Universal = {

    get gainedbonus(){
        let gain = DC.D1;
        if(UniversalUpgrades[0].brought) gain = gain.add(0.1);
        if(UniversalUpgrades[1].brought) gain = gain.add(0.1);
        if(UniversalUpgrades[2].brought) gain = gain.add(0.1);
        if(UniversalUpgrades[3].brought) gain = gain.add(0.1);
        if(UniversalUpgrades[4].brought) gain = gain.add(0.1);
        if(UniversalUpgrades[5].brought) gain = gain.add(0.1);
        if(UniversalUpgrades[6].brought) gain = gain.add(0.1);
        if(UniversalUpgrades[7].brought) gain = gain.mul(1.5);
        if(UniversalUpgrades[8].brought) gain = gain.mul(1.5);
        if(UniversalUpgrades[9].brought) gain = gain.mul(1.5);

        return gain;
    },

}