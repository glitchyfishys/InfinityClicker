
const immensityupgadedata = [
    {
        id: 0,
        effect: () => {
            return DC.D25;
        },
        decription: "gain one reality point every 25 minutes <br> also 25x RP gain",
        effectdisplay: value => "1/1500 RP sec and x" + value.toString(1) + " RP",
        cost: DC.D1,
        currencykey: "immensitypoints",
        mainele: "IMM-UG",
        reqirement: true,
        unlock: () => false, // not to auto update
        reqirementtext: "complete an immensity",
    },
    {
        id: 1,
        effect: () => {
            return DC.D1;
        },
        decription: "the first upgrade is faster (1 minute)",
        effectdisplay: value => "1/60 RP sec",
        cost: DC.D1,
        currencykey: "immensitypoints",
        mainele: "IMM-UG",
        reqirement: true,
        unlock: () => false, // not to auto update
        reqirementtext: "reality this immisinity",
    },
    {
        id: 2,
        effect: () => {
            return DC.De200;
        },
        decription: "immensity is done at 1e200 RP",
        effectdisplay: value => "1.8e108 lower RP requirement",
        cost: DC.D1,
        currencykey: "immensitypoints",
        mainele: "IMM-UG",
        reqirement: true,
        unlock: () => false, // not to auto update
        reqirementtext: "complete an immisinity without the last reality upgrade",
    },
    {
        id: 3,
        effect: () => {
            return DC.D10;
        },
        decription: "the first upgrade is faster (10 seconds)",
        effectdisplay: value => "1/10 RP sec",
        cost: DC.D1,
        currencykey: "immensitypoints",
        mainele: "IMM-UG",
        reqirement: true,
        unlock: () => false, // not to auto update
        reqirementtext: "complete your first eternity within 10 minutes",
    },
    {
        id: 4,
        effect: () => {
            return Time.totaltime.add(1).max(1);
        },
        decription: "IP EP RP and IM gain are multiplied by total time played",
        effectdisplay: value => `x${value.toString(1)} IP,EP,<br>RP/10 and IM ^0.2`,
        cost: DC.D1,
        currencykey: "immensitypoints",
        mainele: "IMM-UG",
        reqirement: true,
        unlock: () => false, // not to auto update
        reqirementtext: "complete your first reality in under one hour",
    },
    {
        id: 5,
        effect: () => {
            return DC.D1;
        },
        decription: "keep auto clicker speed an stays unlocked",
        effectdisplay: value => `max auto clicker speed and stays unlocked`,
        cost: DC.D1,
        currencykey: "immensitypoints",
        mainele: "IMM-UG",
        reqirement: true,
        unlock: () => false, // not to auto update
        reqirementtext: "eternity without the auto clicker",
    },
    {
        id: 6,
        effect: () => {
            return DC.D1;
        },
        decription: "pick one glyph type, get 6 on reality and improve level and power gain",
        effectdisplay: value => `pick one glyph type, 6 glyphs on reality, x25 level and power`,
        cost: DC.D1,
        currencykey: "immensitypoints",
        mainele: "IMM-UG",
        reqirement: true,
        unlock: () => {
            let yes = false;
            player.glyphs.forEach(x => GlyphEffects[Object.entries(GlyphType)[x.type][0]](x.level,x.power).gte(6) ? yes = true : yes = false);
            return yes;
        }, 
        reqirementtext: "have a glyphs effect over 6",
        onbuy: () => glyphselect.classList.remove("hidden"),
    },
    {
        id: 7,
        effect: () => {
            return DC.D1;
        },
        decription: "unlock a black hole",
        effectdisplay: value => `black hole`,
        cost: DC.D100,
        currencykey: "immensitypoints",
        mainele: "IMM-UG",
        reqirement: true,
        unlock: () => false, // not to auto update
        reqirementtext: "immensity with over 100 IM",
        onbuy: () => player.Blackhole[0] = new BlackHole(0,0,0,false),
    },
    {
        id: 8,
        effect: () => {
            return Currency.IMMs.pow(4).max(1);
        },
        decription: "immensity point gains a multiplier based on immensitys",
        effectdisplay: value => `x${value.toString(1)}`,
        cost: DC.D100,
        currencykey: "immensitypoints",
        mainele: "IMM-UG",
        reqirement: true,
        unlock: () => Time.totaltime.gt(8640000),
        reqirementtext: "play for one hundred days",
    },
]

// how to add black hole: onbuy: () => player.Blackhole[0] = new BlackHole(0,0,0,false);
const ImmensityUpgrades = [];

let BlackHoles = [];

const Immensity = {
    get canimmensity() {
        return Currency.RP.gte(this.RPreq);
    },
    get RPreq(){
        if(ImmensityUpgrades[2].brought) return DC.De200;
        return DC.infinity;
    },

    get limit(){
        let limit = DC.infinity;
    
        return limit;
    },

    get gainedimmensitypoints(){
        let gain = DC.D1;


        gain = gain.mul(ImmensityUpgrades[4].effectordefault(1).root(5).max(1));
        

        if(!this.broken) return gain;
        const prestage = Currency.RP.div(this.RPreq).log(10);
        
        gain = gain.pow(TotalGlyphEffects.Immensity());
        return gain.mul(prestage).mul(Universal.gainedbonus).min(this.limit);
    },

    get gainedimmensitys(){
        return DC.D1;
    },

    get broken(){
        return false;
        return ImmensityUpgrades[7].brought;
    },

    persecond(){
        
    },

    reset(){
        if(!this.canimmensity) return false;
        Currency.IM = Currency.IM.add(this.gainedimmensitypoints).min(this.limit);
        Currency.IMMs = Currency.IMMs.add(this.gainedimmensitys);

        ImmensityUpgrades[0].HasMetUnlockRequirment = true;
        if(!RealityUpgrades[26].brought) ImmensityUpgrades[2].HasMetUnlockRequirment = true;
        if(Currency.IM.gte(100)) ImmensityUpgrades[7].HasMetUnlockRequirment = true;
        
        Currency.number = DC.D1;
        Currency.IP = DC.D0;
        Currency.INFs = DC.D0;
        Currency.EP = DC.D0;
        Currency.ETRs = DC.D0;
        Currency.RP = DC.D0;
        Currency.REAs = DC.D0;

        Time.bestimmensity = Time.bestimmensity.min(Time.thisimmensity);
        Time.thisimmensity = DC.D0;
        Time.thisreality = DC.D0;
        Time.thiseternity = DC.D0;
        Time.thisinfinity = DC.D0;

        Reality.upgradereset();
        Eternity.upgradereset();
        infinity.upgradereset();
        
        player.glyphs = [];
        Reality.RenderGlyphs();
    },

    renderBHs(){

        if(BlackHoles.length == 0) return;

        Blackhole.style.width = BlackHoles[0].size + "px";
        Blackhole.style.height = BlackHoles[0].size + "px";

        BHbuttons.style.left = `calc(${(50 * (3-player.scroll.tab))}% - 10%)`;

        Blackhole.style.left = `calc(${(50 * (3-player.scroll.tab))}%)`;

        if(player.scroll.tab == 2) {BHbuttons.classList.remove("hidden");}
        else {BHbuttons.classList.add("hidden");}
    }
}

class BlackHole {
    constructor(data = { powerUGs: 1, intervalUGs: 1, lengthUGs: 1, active: false, timer}){
        this.powerUGs =  data.powerUGs;
        this.intervalUGs = data.intervalUGs;
        this.lengthUGs = data.lengthUGs;
        this.timer = data.timer;
        if(data.active != undefined) this.active = data.active;
    }

    baseinterval = 1800;
    baselength = 10;
    active = false;
    timer = 0;

    powerUGs = 0;
    intervalUGs = 0;
    lengthUGs = 0;

    get effect(){
        if(this.active) return this.power;
        return DC.D1;
    }

    get isactive(){
        if(this.timer > this.interval) return true;
        return false;
    }

    get activetime(){
        return Math.abs(this.timer - (this.interval + this.length));
    }

    get interval(){
        return this.baseinterval / Math.min(1.3 ** this.intervalUGs, Number.MAX_VALUE);
    }

    get length(){
        return this.baselength * Math.min(1.2 ** this.lengthUGs, Number.MAX_VALUE);
    }

    get power(){
        return Decimal.pow(1.25, this.powerUGs).mul(60);
    }

    get size(){
        return  Math.max((this.length / this.interval) * this.power.pow(0.5),5);
    }

    get ispermenant(){
        return this.length > this.interval*100;
    }

    tryactiveate(){
        if(this.timer > this.interval) {
            this.active = true;
        }
        this.active = false;
    }

    tick(){
        if(this.ispermenant) {
            this.active = true;
            this.timer = 0;
            return;
        }
        this.timer += Deltatime;

        if(this.timer > this.interval) this.active = true;
        if(this.timer > (this.interval + this.length)) {
            this.active = false;
            this.timer -= (this.interval + this.length);
        }
        
    }

    get powercost(){
        return DC.D10.mul(Decimal.pow(2,this.powerUGs));
    }

    buypower(){
        if(Currency.IM.gt(this.powercost)){
            Currency.IM = Currency.IM.sub(this.powercost);
            this.powerUGs++;
        }
    }

    get intervalcost(){
        return DC.D10.mul(Decimal.pow(2,this.intervalUGs));
    }

    buyinterval(){
        if(Currency.IM.gt(this.intervalcost)){
            Currency.IM = Currency.IM.sub(this.intervalcost);
            this.intervalUGs++;
        }
    }

    get lengthcost(){
        return DC.D10.mul(Decimal.pow(2,this.lengthUGs));
    }

    buylength(){
        if(Currency.IM.gt(this.lengthcost)){
            Currency.IM = Currency.IM.sub(this.lengthcost);
            this.lengthUGs++;
        }
    }
}

const BLACKHOLE = {
    buypower(){
        BlackHoles[0].buypower();
    },
    buyinterval(){
        BlackHoles[0].buyinterval();
    },
    buylength(){
        BlackHoles[0].buylength();
    },

}
