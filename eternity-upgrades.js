
const eternityupgadedata = [
    {
        id: 0,
        effect: () => {
            return DC.D5;
        },
        decription: "gain one infinity point every 10 seconds <br> also triples IP gain",
        effectdisplay: value => "1/10 IP sec and x" + format(value) + " IP",
        cost: DC.DD1,
        currencykey: "eternitypoints",
        mainele: "ETR-UG",
        reqirement: true,
    },
    {
        id: 1,
        effect: () => {
            return DC.D2;
        },
        decription: "half the time of the first eternity upgrade",
        effectdisplay: value => "auto IP interval /" + format(value),
        cost: new Decimal(1.5),
        currencykey: "eternitypoints",
        mainele: "ETR-UG",
        reqirement: true,
    },
    {
        id: 2,
        effect: () => {
            return DC.D2;
        },
        decription: "double the auto gain of the first eternity upgrade",
        effectdisplay: value => "x" + format(value) + " auto IP",
        cost: new Decimal(1.5),
        currencykey: "eternitypoints",
        mainele: "ETR-UG",
        reqirement: true,
    },
    {
        id: 3,
        effect: () => {
            return DC.D10;
        },
        decription: "10x EP gain",
        effectdisplay: value =>"x" + format(value) + " EP",
        cost: DC.D3,
        currencykey: "eternitypoints",
        mainele: "ETR-UG",
        reqirement: true,
    },
    {
        id: 4,
        effect: () => {
            return DC.D7;
        },
        decription: "start with the first 7 infinity upgrades",
        effectdisplay: value => "keeped " + format(value) + " infinity upgrades",
        cost: DC.D15,
        currencykey: "eternitypoints",
        mainele: "ETR-UG",
        reqirement: true,
        onbuy: () => InfinityUpgrades.filter(x => x.id < 7).forEach(x => {x.brought = true}),
    },
    {
        id: 5,
        effect: () => {
            return Currency.ETRs.sqrt().max(1).min(50);
        },
        decription: "gain an IP muliplyer based on eternitys",
        effectdisplay: value => `x${format(value)} IP`,
        cost: DC.D25,
        currencykey: "eternitypoints",
        mainele: "ETR-UG",
        reqirement: true,
        onbuy: () => InfinityUpgrades.filter(x => x.id < 10).forEach(x => {x.brought = true}),
    },
    {
        id: 6,
        effect: () => {
            return DC.D5;
        },
        decription: "gain 5x more IP and 50x auto IP",
        effectdisplay: value => "x" + format(value) + " IP, x50 Auto IP",
        cost: DC.D25,
        currencykey: "eternitypoints",
        mainele: "ETR-UG",
        reqirement: true,
    },
    {
        id: 7,
        effect: () => {
            return infinity.gainedinfinitypoints;
        },
        decription: "auto IP is the amount you would gain / 10",
        effectdisplay: value => format(value.div(10)) + " IP/s<br>(not displayed with speed or later effects)" ,
        cost: DC.D75,
        currencykey: "eternitypoints",
        mainele: "ETR-UG",
        reqirement: true,
    },
    {
        id: 8,
        effect: () => {
            return DC.D14;
        },
        decription: "start with infinity broken and statically double EP gain",
        effectdisplay: value => "keeped " + format(value) + " infinity upgrades and Static 2x EP",
        cost: DC.D150,
        currencykey: "eternitypoints",
        mainele: "ETR-UG",
        reqirement: true,
        onbuy: () => InfinityUpgrades.filter(x => x.id < 14).forEach(x => {x.brought = true}),
    },
    {
        id: 9,
        effect: () => {
            return DC.D5;
        },
        decription: "gain 5 times more EP",
        effectdisplay: value => "x" + format(value)  + " EP",
        cost: DC.D250,
        currencykey: "eternitypoints",
        mainele: "ETR-UG",
        reqirement: true,
    },
    {
        id: 10,
        effect: () => {
            return DC.D4;
        },
        decription: "gain 4 times more EP, auto IP is 5 times faster and gain 100 times more",
        effectdisplay: value => "x" + format(value) + " EP, auto IP interval /5, auto IP gain x100",
        cost: DC.De3,
        currencykey: "eternitypoints",
        mainele: "ETR-UG",
        reqirement: true,
    },
    {
        id: 11,
        effect: () => {
            return DC.D18;
        },
        decription: "keep all but the last 3 infinity upgrades",
        effectdisplay: value => "keep " + format(value) + " infinity upgrades",
        cost: DC.D2e3,
        currencykey: "eternitypoints",
        mainele: "ETR-UG",
        reqirement: true,
        onbuy: () => InfinityUpgrades.filter(x => x.id < 18).forEach(x => {x.brought = true}),
    },
    {
        id: 12,
        effect: () => {
            return DC.D21;
        },
        decription: "keep all infinity upgrades and break infinity IP",
        effectdisplay: value => "keep " + format(value) + " infinity upgrades and uncaped IP",
        cost: DC.D5e3,
        currencykey: "eternitypoints",
        mainele: "ETR-UG",
        reqirement: true,
        onbuy: () => InfinityUpgrades.filter(x => x.id < 21).forEach(x => {x.brought = true}),
    },
    {
        id: 13,
        effect: () => {
            return DC.D2;
        },
        decription: "IP gain is ^2",
        effectdisplay: value => "^" + format(value) + " IP",
        cost: DC.De5,
        currencykey: "eternitypoints",
        mainele: "ETR-UG",
        reqirement: true,
    },
    {
        id: 14,
        effect: () => {
            return DC.D10;
        },
        decription: "auto clicker is instant and auto IP is 10x faster",
        effectdisplay: value => "auto clicker interval / 10, 10x auto IP gain",
        cost: DC.De7,
        currencykey: "eternitypoints",
        mainele: "ETR-UG",
        reqirement: true,
    },
    {
        id: 15,
        effect: () => {
            return DC.D5;
        },
        decription: "number mulitplier ^5",
        effectdisplay: value => `^${format(value)} number mulitplier`,
        cost: new Decimal(2.5e7),
        currencykey: "eternitypoints",
        mainele: "ETR-UG",
        reqirement: true,
    },
    {
        id: 16,
        effect: () => {
            return Currency.IP.log10().pow(2).mul(100);
        },
        decription: "gain more IP based on IP",
        effectdisplay: value => `x${format(value)} IP`,
        cost:new Decimal(7.5e7),
        currencykey: "eternitypoints",
        mainele: "ETR-UG",
        reqirement: true,
    },
    {
        id: 17,
        effect: () => {
            return Currency.EP.log(10).pow(0.5).min(5);
        },
        decription: "gain more EP based on EP up to 5 times also square EP gain",
        effectdisplay: value => `x${format(value)} and ^2 EP`,
        cost: new Decimal(2e8),
        currencykey: "eternitypoints",
        mainele: "ETR-UG",
        reqirement: true,
    },
    {
        id: 18,
        effect: () => {
            if(RealityUpgrades[13].brought) return Time.thiseternity.add(61).max(61);
            return Time.thiseternity.add(1).max(1);
        },
        decription: "gain more EP based on time in this eternity",
        effectdisplay: value => `x${format(value)} EP`,
        cost: DC.D2e11,
        currencykey: "eternitypoints",
        mainele: "ETR-UG",
        reqirement: true,
    },
    {
        id: 19,
        effect: () => {
            return DC.D2;
        },
        decription: "EP gain ^ 2",
        effectdisplay: value => `^${format(value)} EP`,
        cost: DC.De12,
        currencykey: "eternitypoints",
        mainele: "ETR-UG",
        reqirement: true,
    },
    {
        id: 20,
        effect: () => {
            return DC.D3;
        },
        decription: "EP gain ^ 3",
        effectdisplay: value => `^${format(value)} EP`,
        cost: DC.De19,
        currencykey: "eternitypoints",
        mainele: "ETR-UG",
        reqirement: true,
    },
    {
        id: 21,
        effect: () => {
            return DC.D3;
        },
        decription: "EP gain ^ 3 again",
        effectdisplay: value => `^${format(value)} EP`,
        cost: DC.De48,
        currencykey: "eternitypoints",
        mainele: "ETR-UG",
        reqirement: true,
    },
    {
        id: 22,
        effect: () => {
            return DC.D2;
        },
        decription: "IP and EP gain is changed to a log2 instead of log10",
        effectdisplay: value => `log10 => log2`,
        cost: DC.De120,
        currencykey: "eternitypoints",
        mainele: "ETR-UG",
        reqirement: true,
    },
    {
        id: 23,
        effect: () => {
            return DC.D2;
        },
        decription: "EP gain ^2 again",
        effectdisplay: value => `^${format(value)} EP`,
        cost: DC.De140,
        currencykey: "eternitypoints",
        mainele: "ETR-UG",
        reqirement: true,
    },
    {
        id: 24,
        effect: () => {
            return DC.D100;
        },
        decription: "IP gain ^100",
        effectdisplay: value => `^${format(value)} IP`,
        cost: DC.De280,
        currencykey: "eternitypoints",
        mainele: "ETR-UG",
        reqirement: true,
    },
]

const EternityUpgrades = [];

const Eternity = {
    get caneternity() {
        return Currency.IP.gte(this.IPreq);
    },
    get IPreq(){
        if(RealityUpgrades[6].brought) return DC.De280;
        if(RealityUpgrades[19].brought) return DC.De50;
        return DC.infinity;
    },
    get limit(){
        return RealityUpgrades[7].brought ? DC.eternity : DC.infinity;
    },

    get gainedeternitypoints(){
        let gain = DC.D1;
        gain = gain.mul(EternityUpgrades[3].effectordefault(1));
        gain = gain.mul(EternityUpgrades[9].effectordefault(1));
        gain = gain.mul(EternityUpgrades[10].effectordefault(1));
        gain = gain.mul(EternityUpgrades[17].effectordefault(1));
        if(EternityUpgrades[17].brought) gain = gain.pow(2);
        gain = gain.mul(EternityUpgrades[18].effectordefault(1));
        gain = gain.pow(EternityUpgrades[19].effectordefault(1));
        gain = gain.pow(EternityUpgrades[20].effectordefault(1));
        gain = gain.pow(EternityUpgrades[21].effectordefault(1));
        gain = gain.pow(EternityUpgrades[23].effectordefault(1));
        gain = gain.mul(RealityUpgrades[0].effectordefault(1));
        
        gain = gain.mul(ImmensityUpgrades[4].effectordefault(1));
        
        gain = gain.pow(TotalGlyphEffects.Eternity());

        if(EternityUpgrades[8].brought) gain = gain.mul(2);
        if(!this.broken) return gain.mul(Universal.gainedbonus);
        const prestage = (EternityUpgrades[22].brought) ? Currency.IP.div(this.IPreq).log(2) : Currency.IP.div(this.IPreq).log(10);

        return gain.mul(prestage).mul(Universal.gainedbonus).min(this.limit);
    },

    get gainedeternitys(){
        return DC.D1;
    },

    get broken(){
        return EternityUpgrades[12].brought;
    },

    persecond(){
        let gain = DC.D1;
        let speed = DC.D1.div(60);
        
        if(RealityUpgrades[1].brought) speed = speed.mul(2);
        if(RealityUpgrades[2].brought) gain = gain.mul(2);
        if(RealityUpgrades[3].brought) speed = speed.mul(2);
        if(RealityUpgrades[7].brought) speed = speed.mul(3);
        if(RealityUpgrades[14].brought) speed = speed.mul(10);
        if(RealityUpgrades[16].brought) speed = speed.mul(10);
        
        if(RealityUpgrades[4].brought && this.gainedeternitypoints.gt(0)) gain = this.gainedeternitypoints;
        speed = speed.mul(game.speed);

        if(RealityUpgrades[0].brought) Currency.EP = Currency.EP.add(gain.mul(speed).mul(Deltatime)).min(this.limit);
    },

    reset(){
        if(!this.caneternity) return false;
        if(Currency.ETRs.eq(0) && game.progress == 2) {
            player.scroll.tab = 0;
            tabchange();
        }
        if(Time.thiseternity.lte(600) && Currency.ETRs.eq(0) && Currency.REAs.eq(0)) ImmensityUpgrades[3].HasMetUnlockRequirment = true;
        if(!InfinityUpgrades[1].brought && Currency.ETRs.eq(0) && Currency.REAs.eq(0)) ImmensityUpgrades[5].HasMetUnlockRequirment = true;

        Currency.EP = Currency.EP.add(this.gainedeternitypoints).min(this.limit);
        Currency.ETRs = Currency.ETRs.add(this.gainedeternitys);
        Currency.number = DC.D1;
        Currency.IP = RealityUpgrades[5].brought ? DC.De4 : DC.D0;
        Currency.INFs = DC.D0;
        Time.besteternity = Time.besteternity.min(Time.thiseternity);
        Time.thiseternity = DC.D0;
        Time.thisinfinity = DC.D0;
        infinity.upgradereset();
    },

    upgradereset(){
        let keep = 0;
        if(RealityUpgrades[0].brought) keep = 1;
        if(RealityUpgrades[1].brought) keep = 3;
        if(RealityUpgrades[2].brought) keep = 5;
        if(RealityUpgrades[3].brought) keep = 10;
        if(RealityUpgrades[13].brought) keep = 25;

        EternityUpgrades.forEach(x => {x.brought = (x.id < keep) ? true: false})
    },
    get heighestKeepedUpgrade(){
        let keep = 0;
        if(RealityUpgrades[0].brought) keep = 1;
        if(RealityUpgrades[1].brought) keep = 3;
        if(RealityUpgrades[2].brought) keep = 7;
        if(RealityUpgrades[3].brought) keep = 10;
        if(RealityUpgrades[13].brought) keep = 25;
        return keep;
    },
}