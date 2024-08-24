
const infinityupgadedata = [
    {
        id: 0,
        effect: () => {
            return DC.De7;
        },
        decription: "number multiplier is change from x1e5 to x1e7",
        effectdisplay: value => "1e3 => " + value.toString(1) + " number multiplier",
        cost: DC.D1,
        currencykey: "infinitypoints",
        mainele: "INF-UG",
        reqirement: true,
    },
    {
        id: 1,
        effect: () => {
            return DC.D1;
        },
        decription: "enable autoclicker",
        effectdisplay: value => "active",
        cost: DC.D2,
        currencykey: "infinitypoints",
        mainele: "INF-UG",
        reqirement: true,
    },
    {
        id: 2,
        effect: () => {
            return DC.D2;
        },
        decription: "double auto clicker speed",
        effectdisplay: value => "auto clicker interval /" + value.toString(1),
        cost: DC.D3,
        currencykey: "infinitypoints",
        mainele: "INF-UG",
        reqirement: true,
    },
    {
        id: 3,
        effect: () => {
            return DC.D5;
        },
        decription: "auto clicker is every 0.1 seconds",
        effectdisplay: value => "auto cliker interval /" + value.toString(1),
        cost: DC.D5,
        currencykey: "infinitypoints",
        mainele: "INF-UG",
        reqirement: true,
    },
    {
        id: 4,
        effect: () => {
            return DC.De15;
        },
        decription: "number multiplier is now x1e15",
        effectdisplay: value => "1e7 =>" + value.toString(1) + " number multiplier",
        cost: DC.D15,
        currencykey: "infinitypoints",
        mainele: "INF-UG",
        reqirement: true,
    },
    {
        id: 5,
        effect: () => {
            return DC.De30;
        },
        decription: "number multiplier is now x1e30",
        effectdisplay: value => "1e15 => " + value.toString(1) + " number multiplier",
        cost: DC.D50,
        currencykey: "infinitypoints",
        mainele: "INF-UG",
        reqirement: true,
    },
    {
        id: 6,
        effect: () => {
            return DC.De30;
        },
        decription: "number multiplier do x1e30 more",
        effectdisplay: value => "x" + value.toString(1) + " number multiplier",
        cost: DC.D100,
        currencykey: "infinitypoints",
        mainele: "INF-UG",
        reqirement: true,
    },
    {
        id: 7,
        effect: () => {
            return DC.D2;
        },
        decription: "square root the infinity req",
        effectdisplay: value => DC.infinity.root(2).toString() + " infinity requirement",
        cost: DC.D200,
        currencykey: "infinitypoints",
        mainele: "INF-UG",
        reqirement: true,
    },
    {
        id: 8,
        effect: () => {
            return DC.D2;
        },
        decription: "square root the infinity req again",
        effectdisplay: value => DC.infinity.root(4).toString(2) + " infinity requirement",
        cost: DC.D400,
        currencykey: "infinitypoints",
        mainele: "INF-UG",
        reqirement: true,
    },
    {
        id: 9,
        effect: () => {
            return DC.D10;
        },
        decription: "gain 10x more IP",
        effectdisplay: value => "x" + value.toString(1) + " IP",
        cost: DC.D800,
        currencykey: "infinitypoints",
        mainele: "INF-UG",
        reqirement: true,
    },
    {
        id: 10,
        effect: () => {
            return DC.De100;
        },
        decription: "mult is now a googol",
        effectdisplay: value => "1e60 => " + value.toString(1) + " number multiplier",
        cost: DC.De3,
        currencykey: "infinitypoints",
        mainele: "INF-UG",
        reqirement: true,
    },
    {
        id: 11,
        effect: () => {
            return DC.De1000;
        },
        decription: "mult gains a power of 10",
        effectdisplay: value => "1e100 => " + value.toString(1) + " number multiplier",
        cost: DC.D2e3,
        currencykey: "infinitypoints",
        mainele: "INF-UG",
        reqirement: true,
    },
    {
        id: 12,
        effect: () => {
            return DC.De40;
        },
        decription: "inf req is now 1e40",
        effectdisplay: value => value.toString(1)+ " infinity requirment",
        cost: DC.D5e3,
        currencykey: "infinitypoints",
        mainele: "INF-UG",
        reqirement: true,
    },
    {
        id: 13,
        effect: () => {
            return DC.D2;
        },
        decription: "break infinity",
        effectdisplay: value => "Infinity is broken",
        cost: DC.De4,
        currencykey: "infinitypoints",
        mainele: "INF-UG",
        reqirement: true,
    },
    {
        id: 14,
        effect: () => {
            return DC.D10;
        },
        decription: "IP gain 10x again",
        effectdisplay: value => "x" + value.toString(1) + " IP",
        cost: DC.De5,
        currencykey: "infinitypoints",
        mainele: "INF-UG",
        reqirement: true,
    },
    {
        id: 15,
        effect: () => {
            return DC.De10;
        },
        decription: "infinity req is 1e10",
        effectdisplay: value => "1e40 => " + value.toString(1) + " infinity requirement",
        cost: DC.De7,
        currencykey: "infinitypoints",
        mainele: "INF-UG",
        reqirement: true,
    },
    {
        id: 16,
        effect: () => {
            return DC.D5;
        },
        decription: "IP gain ^ 5",
        effectdisplay: value => "^" + value.toString(1) + " IP",
        cost: DC.De8,
        currencykey: "infinitypoints",
        mainele: "INF-UG",
        reqirement: true,
    },
    {
        id: 17,
        effect: () => {
            return DC.D3;
        },
        decription: "auto clicker is 3 times faster",
        effectdisplay: value => "auto clicker interval /" + value.toString(1),
        cost: DC.De15,
        currencykey: "infinitypoints",
        mainele: "INF-UG",
        reqirement: true,
    },
    {
        id: 18,
        effect: () => {
            return DC.D5;
        },
        decription: "IP gain ^ 5",
        effectdisplay: value => "^" + value.toString(1) + " IP",
        cost: DC.De16,
        currencykey: "infinitypoints",
        mainele: "INF-UG",
        reqirement: true,
    },
    {
        id: 19,
        effect: () => {
            return DC.D6;
        },
        decription: "IP gain ^ 6",
        effectdisplay: value => "^" + value.toString(1) + " IP",
        cost: DC.De56,
        currencykey: "infinitypoints",
        mainele: "INF-UG",
        reqirement: true,
    },
    {
        id: 20,
        effect: () => {
            return DC.D100;
        },
        decription: "IP gain x100",
        effectdisplay: value => "x" + value.toString(1) + " IP",
        cost: DC.De306,
        currencykey: "infinitypoints",
        mainele: "INF-UG",
        reqirement: true,
    },
    {
        id: 21,
        effect: () => {
            return new Decimal(1.2);
        },
        decription: "IP gain ^ 1.2",
        effectdisplay: value => "^" + value.toString(1) + " IP",
        cost: DC.De310,
        currencykey: "infinitypoints",
        mainele: "INF-UG",
        reqirement: () => Eternity.broken,
    },
    {
        id: 22,
        effect: () => {
            return new Decimal(1.5);
        },
        decription: "IP gain ^ 1.5",
        effectdisplay: value => "^" + value.toString(1) + " IP",
        cost: DC.De740,
        currencykey: "infinitypoints",
        mainele: "INF-UG",
        reqirement: () => Eternity.broken,
    },
]

const InfinityUpgrades = [];

const infinity = {
    get caninfinity() {
        return Currency.number.gte(this.numberlimit);
    },
    
    get numberlimit(){
        let limit = DC.infinity;
        if(InfinityUpgrades[7].brought) limit = limit.root(2);
        if(InfinityUpgrades[8].brought) limit = limit.root(2);
        if(InfinityUpgrades[12].brought) limit = DC.De40;
        if(InfinityUpgrades[15].brought) limit = DC.De10;
    
        return limit;
    },

    get limit(){
        if(EternityUpgrades[12].brought) return DC.eternity;
        return DC.infinity;
    },

    get gainedinfinitypoints(){
        let gain = DC.D1;
        gain = gain.mul(InfinityUpgrades[9].effectordefault(1)).mul(InfinityUpgrades[14].effectordefault(1));
        gain = gain.pow(InfinityUpgrades[16].effectordefault(1));
        gain = gain.pow(InfinityUpgrades[18].effectordefault(1));
        gain = gain.pow(InfinityUpgrades[19].effectordefault(1));
        gain = gain.mul(InfinityUpgrades[20].effectordefault(1));
        gain = gain.pow(InfinityUpgrades[21].effectordefault(1));
        gain = gain.pow(InfinityUpgrades[22].effectordefault(1));
        gain = gain.mul(EternityUpgrades[0].effectordefault(1));
        gain = gain.mul(EternityUpgrades[6].effectordefault(1));
        gain = gain.pow(EternityUpgrades[13].effectordefault(1));
        gain = gain.mul(EternityUpgrades[16].effectordefault(1));
        gain = gain.pow(EternityUpgrades[24].effectordefault(1));

        gain = gain.mul(ImmensityUpgrades[4].effectordefault(1));


        gain = gain.pow(TotalGlyphEffects.Infinity());
        if(!this.broken) return gain.mul(Universal.gainedbonus);
        const prestage = (EternityUpgrades[22].brought) ? Currency.number.div(this.numberlimit).log(2) : Currency.number.div(this.numberlimit).log(10);

        return prestage.mul(gain).mul(Universal.gainedbonus).min(this.limit);
    },

    get gainedinfinitys(){
        return DC.D1;
    },

    get broken(){
        return InfinityUpgrades[13].brought;
    },

    persecond(){
        let speed = DC.DD1;
        let gain = DC.D1;
        if(EternityUpgrades[1].brought) speed = speed.mul(2);
        if(EternityUpgrades[2].brought) gain = gain.mul(2);
        gain = gain.mul(EternityUpgrades[6].effectordefault(1));

        if(EternityUpgrades[7].brought) gain = this.gainedinfinitypoints.div(1e4);
        if(EternityUpgrades[10].brought) {gain = gain.mul(100); speed = speed.mul(5);}
        if(EternityUpgrades[14].brought) speed = speed.mul(10);
        if(RealityUpgrades[16].brought) speed = speed.mul(10);
        speed = speed.mul(game.speed);
        
        if(EternityUpgrades[0].brought) Currency.IP = Currency.IP.add(gain.mul(speed.mul(Deltatime))).min(this.limit);
    },

    reset(){
        if(!this.caninfinity) return false;
        Currency.IP = Currency.IP.add(this.gainedinfinitypoints).min(this.limit);
        Currency.INFs = Currency.INFs.add(this.gainedinfinitys);
        Currency.number = DC.D1;
        Time.bestinfinity = Time.bestinfinity.min(Time.thisinfinity);
        Time.thisinfinity = DC.D0;
    },

    upgradereset(){
        let keep = 0;
        if(EternityUpgrades[4].brought) keep = 7;
        if(EternityUpgrades[5].brought) keep = 9;
        if(EternityUpgrades[8].brought) keep = 14;
        if(EternityUpgrades[11].brought) keep = 18;
        if(EternityUpgrades[12].brought) keep = 21;

        InfinityUpgrades.forEach(x => {x.brought = (x.id < keep) ? true: false})
    },
    
    get heighestKeepedUpgrade(){
        let keep = 0;
        if(EternityUpgrades[4].brought) keep = 7;
        if(EternityUpgrades[5].brought) keep = 9;
        if(EternityUpgrades[8].brought) keep = 14;
        if(EternityUpgrades[11].brought) keep = 18;
        if(EternityUpgrades[12].brought) keep = 21;
        return keep;
    },
}
