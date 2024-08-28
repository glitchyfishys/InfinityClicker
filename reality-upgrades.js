
const realityupgadedata = [
    {
        id: 0,
        effect: () => {
            return DC.D8;
        },
        decription: "gain one EP every 60 seconds, also 8x EP gain and autobuy infinity upgrades also keep EU 1",
        effectdisplay: value => "1/60 EP sec and x" + format(value,0) + " EP and keep eternity upgrade 1",
        cost: DC.DD1,
        currencykey: "realitypoints",
        mainele: "REA-UG",
        reqirement: true,
        onbuy: () => EternityUpgrades.filter(x => x.id < 1).forEach(x => {x.brought = true}),
    },
    {
        id: 1,
        effect: () => {
            return DC.D1;
        },
        decription: "half the EP interval and ^1.1 EP gain",
        effectdisplay: value => "auto EP interval /2 and ^1.1 EP",
        cost: DC.D2,
        currencykey: "realitypoints",
        mainele: "REA-UG",
        reqirement: true,
    },
    {
        id: 2,
        effect: () => {
            return DC.D2;
        },
        decription: "x2 auto EP and keep the 7 eternity upgrade",
        effectdisplay: value => "2x auto EP and keep 7 eternity upgrade",
        cost: new Decimal(2.5),
        currencykey: "realitypoints",
        mainele: "REA-UG",
        reqirement: true,
        onbuy: () => EternityUpgrades.filter(x => x.id < 7).forEach(x => {x.brought = true}),
    },
    {
        id: 3,
        effect: () => {
            return DC.D5;
        },
        decription: "half the time and keep the 10 eternity upgrade",
        effectdisplay: value => "auto EP interval /2 and keep 10 eternity upgrade",
        cost: DC.D5,
        currencykey: "realitypoints",
        mainele: "REA-UG",
        reqirement: true,
        onbuy: () => EternityUpgrades.filter(x => x.id < 10).forEach(x => {x.brought = true}),
    },
    {
        id: 4,
        effect: () => {
            return DC.D3;
        },
        decription: "auto EP is faster and is how huch you gain / 1e5",
        effectdisplay: value => "auto EP interval /3",
        cost: DC.D10,
        currencykey: "realitypoints",
        mainele: "REA-UG",
        reqirement: true,
    },
    {
        id: 5,
        effect: () => {
            return DC.De4;
        },
        decription: "start with 10000 IP and EP on reality",
        effectdisplay: value => `${format(value,0)} starting IP and EP`,
        cost: DC.D25,
        currencykey: "realitypoints",
        mainele: "REA-UG",
        reqirement: true,
        onbuy: () => {Currency.IP = Currency.IP.add(DC.De4); Currency.EP = Currency.EP.add(DC.De4); },
    },
    {
        id: 6,
        effect: () => {
            return DC.De38;
        },
        decription: "IP and EP reqirements for Eternitys and Realitys are 1e38x lower",
        effectdisplay: value => `x${format(value)} lower IP and EP requirement`,
        cost: DC.D30,
        currencykey: "realitypoints",
        mainele: "REA-UG",
        reqirement: true,
    },
    {
        id: 7,
        effect: () => {
            return DC.D3;
        },
        decription: "break Infinity EP and auto EP is 3 times faster",
        effectdisplay: value => `auto EP interval /${format(value,0)} and uncap EP`,
        cost: DC.D35,
        currencykey: "realitypoints",
        mainele: "REA-UG",
        reqirement: true,
    },
    {
        id: 8,
        effect: () => {
            return Currency.IP.log(10).pow(1/20).add(1).min(2.5);
        },
        decription: "5 times RP and glyph level is higher based on IP, caped at 2x",
        effectdisplay: value => `x5 RP and x${format(value)} glyph level`,
        cost: DC.D50,
        currencykey: "realitypoints",
        mainele: "REA-UG",
        reqirement: true,
    },
    {
        id: 9,
        effect: () => {
            return Currency.EP.log(10).pow(1/20).add(1).min(2.5);
        },
        decription: "5 times RP and glyph power is higher based on EP, caped at 2x",
        effectdisplay: value => `x5 RP and x${format(value)} glyph power`,
        cost: DC.D50,
        currencykey: "realitypoints",
        mainele: "REA-UG",
        reqirement: true,
    },
    {
        id: 10,
        effect: () => {
            return DC.D1;
        },
        decription: "gain two glyphs on reality instead of one",
        effectdisplay: value => `+${format(value,0)} glyph on reality`,
        cost: DC.D500,
        currencykey: "realitypoints",
        mainele: "REA-UG",
        reqirement: true,
    },
    {
        id: 11,
        effect: () => {
            return DC.D2;
        },
        decription: "glyph level and power is better",
        effectdisplay: value => `x${format(value,0)} glyph level and power`,
        cost: DC.De3,
        currencykey: "realitypoints",
        mainele: "REA-UG",
        reqirement: true,
    },
    {
        id: 12,
        effect: () => {
            return DC.D1;
        },
        decription: "gain an extra glyph on reality and one more glyph slot",
        effectdisplay: value => `+1 glyph on reality and +1 glyph slot`,
        cost: DC.De11,
        currencykey: "realitypoints",
        mainele: "REA-UG",
        reqirement: true,
        onbuy: () => Reality.RenderGlyphs(),
    },
    {
        id: 13,
        effect: () => {
            return DC.D25;
        },
        decription: "keep all eternity upgrades and Eternity time Upgrade start at 1 minute",
        effectdisplay: value => `keeped ${format(value,0)} eternity upgrades`,
        cost: DC.De11,
        currencykey: "realitypoints",
        mainele: "REA-UG",
        reqirement: true,
        onbuy: () => EternityUpgrades.forEach(x => x.brought = true),
    },
    {
        id: 14,
        effect: () => {
            return DC.D10;
        },
        decription: "auto EP is 10 times faster",
        effectdisplay: value => `auto EP interval /${format(value,0)}`,
        cost: DC.De11,
        currencykey: "realitypoints",
        mainele: "REA-UG",
        reqirement: true,
    },
    {
        id: 15,
        effect: () => {
            return DC.D1;
        },
        decription: "gain another glyph slot",
        effectdisplay: value => `+1 glyph slot`,
        cost: DC.De15,
        currencykey: "realitypoints",
        mainele: "REA-UG",
        reqirement: true,
        onbuy: () => Reality.RenderGlyphs(),
    },
    {
        id: 16,
        effect: () => {
            return DC.D10;
        },
        decription: "faster auto IP and EP",
        effectdisplay: value => `IP and EP interval /${format(value,0)}`,
        cost: DC.De25,
        currencykey: "realitypoints",
        mainele: "REA-UG",
        reqirement: true,
    },
    {
        id: 17,
        effect: () => {
            return DC.D2;
        },
        decription: "glyph level and power is higher",
        effectdisplay: value => `x${format(value,0)} glyph level and power`,
        cost: DC.De25,
        currencykey: "realitypoints",
        mainele: "REA-UG",
        reqirement: true,
    },
    {
        id: 18,
        effect: () => {
            return DC.D3;
        },
        decription: "gain 3 more glyphs on reality",
        effectdisplay: value => `+3 glyphs on reality`,
        cost: DC.De25,
        currencykey: "realitypoints",
        mainele: "REA-UG",
        reqirement: true,
    },
    {
        id: 19,
        effect: () => {
            return DC.D1;
        },
        decription: "you only need 1e50 IP to eternity and 1e100 to reality",
        effectdisplay: value => `1e50 IP and 1e100 EP reqirment`,
        cost: DC.De25,
        currencykey: "realitypoints",
        mainele: "REA-UG",
        reqirement: true,
    },
    {
        id: 20,
        effect: () => {
            return DC.D10;
        },
        decription: "10 time RP gain",
        effectdisplay: value => `x${format(value,0)} RP gain`,
        cost: DC.De28,
        currencykey: "realitypoints",
        mainele: "REA-UG",
        reqirement: true,
    },
    {
        id: 21,
        effect: () => {
            return DC.D10;
        },
        decription: "10 time RP gain again",
        effectdisplay: value => `x${format(value,0)} RP gain`,
        cost: DC.De45,
        currencykey: "realitypoints",
        mainele: "REA-UG",
        reqirement: true,
    },
    {
        id: 22,
        effect: () => {
            return DC.D10;
        },
        decription: "and 10 time RP gain again",
        effectdisplay: value => `x${format(value,0)} RP gain`,
        cost: DC.De65,
        currencykey: "realitypoints",
        mainele: "REA-UG",
        reqirement: true,
    },
    {
        id: 23,
        effect: () => {
            return DC.D10;
        },
        decription: "stronger glyphs",
        effectdisplay: value => `x${format(value,0)} glyph level and power`,
        cost: DC.De80,
        currencykey: "realitypoints",
        mainele: "REA-UG",
        reqirement: true,
    },
    {
        id: 24,
        effect: () => {
            return DC.D25;
        },
        decription: "even stronger glyphs",
        effectdisplay: value => `x${format(value,0)} glyph level and power`,
        cost: DC.De105,
        currencykey: "realitypoints",
        mainele: "REA-UG",
        reqirement: true,
    },
    {
        id: 25,
        effect: () => {
            return DC.D2;
        },
        decription: "RP gain is squared",
        effectdisplay: value => `^${format(value,0)} RP`,
        cost: DC.De140,
        currencykey: "realitypoints",
        mainele: "REA-UG",
        reqirement: true,
    },
    {
        id: 26,
        effect: () => {
            return DC.D10;
        },
        decription: "and 10 times RP gain again",
        effectdisplay: value => `x${format(value,0)} RP gain`,
        cost: DC.De275,
        currencykey: "realitypoints",
        mainele: "REA-UG",
        reqirement: true,
    },
]

const RealityUpgrades = [];

const Reality = {
    get canreality() {
        return Currency.EP.gte(this.EPreq);
    },
    get EPreq(){
        if(RealityUpgrades[6].brought) return DC.De280;
        if(RealityUpgrades[19].brought) return DC.De100;
        return DC.infinity;
    },

    get limit(){
        let limit = DC.infinity;
    
        return limit;
    },

    get gainedrealitypoints(){
        let gain = DC.D1;

        if(RealityUpgrades[8].brought) gain = gain.mul(5);
        if(RealityUpgrades[9].brought) gain = gain.mul(5);
        
        if(RealityUpgrades[20].brought) gain = gain.mul(10);
        if(RealityUpgrades[21].brought) gain = gain.mul(10);
        if(RealityUpgrades[22].brought) gain = gain.mul(10);
        if(RealityUpgrades[25].brought) gain = gain.pow(2);
        if(RealityUpgrades[26].brought) gain = gain.mul(10);
        if(ImmensityUpgrades[0].brought) gain = gain.mul(25);
        
        gain = gain.mul(ImmensityUpgrades[4].effectordefault(1).div(10).max(1));

        gain = gain.pow(TotalGlyphEffects.Reality());
        if(!this.broken) return gain.mul(Universal.gainedbonus);
        
        const prestage = Currency.EP.div(this.EPreq).log(10);
        return gain.mul(prestage).mul(Universal.gainedbonus).min(this.limit);
    },

    get gainedrealitys(){
        return DC.D1;
    },

    get broken(){
        return RealityUpgrades[7].brought;
    },

    persecond(){
        let gain = DC.D1;
        let speed = DC.D1.div(1800);

        if(ImmensityUpgrades[1].brought) speed = DC.D1.div(60);
        if(ImmensityUpgrades[3].brought) speed = DC.D1.div(10);

        speed = speed.mul(game.speed);
        if(ImmensityUpgrades[0].brought) Currency.RP = Currency.RP.add(gain.mul(speed).mul(Deltatime)).min(this.limit);
    },

    reset(){
        if(!this.canreality) return false;
        if(Currency.REAs.eq(0) && game.progress == 3) {
            player.scroll.tab = 1;
            tabchange();
        }
        Currency.RP = Currency.RP.add(this.gainedrealitypoints).min(this.limit);
        if(Time.thisreality.lte(3600) && Currency.REAs.eq(0)) ImmensityUpgrades[4].HasMetUnlockRequirment = true;

        for(let a=0; a < this.gainedglyphs; a++){
            if(player.glyphs.length < 72) player.glyphs.push(this.giveGlyph());
            Currency.REAs = Currency.REAs.add(this.gainedrealitys);
        }


        Currency.number = DC.D1;
        Currency.IP = RealityUpgrades[5].brought ? DC.De4 : DC.D0;
        Currency.INFs = DC.D0;
        Currency.EP = RealityUpgrades[5].brought ? DC.De4 : DC.D0;
        Currency.ETRs = DC.D0;
        Time.bestreality = Time.bestreality.min(Time.thisreality);
        Time.thisreality = DC.D0;
        Time.thiseternity = DC.D0;
        Time.thisinfinity = DC.D0;
        Eternity.upgradereset();
        infinity.upgradereset();


        if(player.glyphrespec) this.UnequipAll();
        this.RenderGlyphs();
        if(Currency.IMMs.neq(0)) ImmensityUpgrades[1].HasMetUnlockRequirment = true;
        ImmensityUpgrades[6].tick();
    },

    giveGlyph(){
        let level = this.glyphlevel;
        let power = this.glyphpower;
    
        if(Currency.REAs.eq(0)) return new Glyph({level, power, type: GlyphType.Number});
        if(Currency.REAs.eq(1)) return new Glyph({level, power, type: GlyphType.Infinity});
        if(Currency.REAs.eq(2)) return new Glyph({level, power, type: GlyphType.Eternity});

        if(glyphselect.value != "none"){
            return new Glyph({level, power, type: GlyphType[glyphselect.value] });
        }

        let type = 4;
        for(let a=0; type == GlyphType.Immensity;a++) type = Math.randomBetween(0,6);
    
        return new Glyph({level, power, type});
    },

    upgradereset(){
        let keep = 0;

        RealityUpgrades.forEach(x => {x.brought = (x.id <= keep-1) ? true: false});
    },
    get heighestKeepedUpgrade(){
        return 0;
    },

    get gainedglyphs(){
        let gain = 1;
        if(RealityUpgrades[10].brought) gain = 2;
        if(RealityUpgrades[18].brought) gain = 5;
        return gain;
    },

    get maxGlyphs(){
        let amount = 3;
        if(RealityUpgrades[12].brought) amount++;
        if(RealityUpgrades[15].brought) amount++;
        return amount;
    },

    get AvalableGlyphsSlots(){
        let amount = this.maxGlyphs;
        player.glyphs.forEach(x => x.active ? amount-- : false);
        return amount;
    },

    get ActiveGlyphs(){
        return player.glyphs.filter(x => x.active);
    },

    sortglyphs(){
        let filt = [];
        
        const keys = Object.keys(GlyphType);
        keys.forEach( z => filt.push( player.glyphs.filter(x =>
            x.type == GlyphType[z]).sort((x,y) => GlyphEffects[Object.entries(GlyphType)[x.type][0]](x.level,x.power).lt(
            GlyphEffects[Object.entries(GlyphType)[y.type][0]](y.level,y.power)) - 1)));
        player.glyphs = filt.flat();
        

        if(glyphkeepamount.validity.valid && !Number.isNaN(glyphkeepamount.valueAsNumber)){
            const list = [];
            const v = glyphkeepamount.valueAsNumber;

            Object.keys(GlyphType).forEach(t => {
                let n = player.glyphs.filter(g => g.type == GlyphType[t] || (g.type == GlyphType[t] && g.active))

                const na = n.filter(x => !x.active);
                const ia = n.filter(x => x.active);
                ia.push(na);
                const sorted = ia.flat();

                let active = 0;
                ia.forEach(x => x.active ? active++ : false);
                list.push( sorted.slice(0,Math.max(v,active)));
                }
            );

            player.glyphs = list.flat();

        }else{
            notify("amount of glyphs to keep is out of range or NaN, try 1 - 72", 6, "red");
        }
        

        this.RenderGlyphs();
    },

    UnequipAll(){
        player.glyphs.forEach(x => x.active = false);
        player.glyphrespec = false;
    },

    RenderGlyphs(){

        if(player.scroll.tab == 1) {

            for (let gl = 0; gl < 72; gl++) {
                const ch = (glyphs.children.length > gl) ? glyphs.children[gl] : glyphs.appendChild(document.createElement("div"));
                const glyph = player.glyphs[gl];
                ch.innerHTML = GlyphIcon[glyph == undefined ? "undefined" : glyph.type];
                ch.style.backgroundColor = GlyphColor[glyph == undefined ? "undefined" : glyph.type];

                if(glyph == undefined ? false : glyph.active) ch.style.filter = "brightness(0.75)";
                else ch.style.filter = "brightness(1)";

                ch.innerHTML = GlyphIcon[glyph == undefined ? "undefined" : glyph.type];
                ch.style.backgroundColor = GlyphColor[glyph == undefined ? "undefined" : glyph.type];
                ch.classList.add("glyph");

                if(!game.isMobile){

                    if(glyph != undefined) ch.onmouseenter = () => {mouse.classList.remove("hidden"); hoverUI([ Object.entries(GlyphType)[glyph.type][0]  + " glyph",
                        "level: " + format(glyph.level), "power: " + format(glyph.power), "effect: +" + format(GlyphEffects[Object.entries(GlyphType)[glyph.type][0]](glyph.level,glyph.power)) + GlyphEffect[glyph.type] ], GlyphColor[glyph.type]);
                }
                else ch.onmouseenter = undefined;
                if(glyph != undefined) ch.onmouseleave = () => {mouse.classList.add("hidden");}
                else ch.onmouseleave = undefined;
                }


                if(game.isMobile){
                    if(glyph != undefined) ch.onclick = () => {
                        modal.showchoose( [Object.entries(GlyphType)[glyph.type][0]  + " glyph",
                        "level: " + format(glyph.level), "power: " + format(glyph.power),
                        "effect: +" + format(GlyphEffects[Object.entries(GlyphType)[glyph.type][0]](glyph.level,glyph.power)) + GlyphEffect[glyph.type] ],
                            [
                                {text: "remove glyph", onclick: () => {this.RemoveGlyph(player.glyphs.indexOf(glyph)); this.RenderGlyphs(); modal.close();}},
                                {text: "equip glyph", onclick: () => {glyph.activate(); this.RenderGlyphs(); modal.close();}}
                            ]
                        );
                    }
                }
                else{

                    if(glyph != undefined) ch.onclick = () => {
                        if(kd.SHIFT.isDown()) {
                            mouse.classList.add("hidden");
                            this.RemoveGlyph(player.glyphs.indexOf(glyph));
                            this.RenderGlyphs();
                        }
                        else {
                            glyph.activate();
                            this.RenderGlyphs();
                        }
                    }
                }
                
            }

            for (let a = 0; a < this.maxGlyphs; a++) {
                const glyph = this.ActiveGlyphs[a];
                const c =  (this.maxGlyphs > activeglyphs.children.length) ? activeglyphs.appendChild(document.createElement("div")) : activeglyphs.children[a];
                c.innerHTML = GlyphIcon[glyph == undefined ? "undefined" : glyph.type];
                c.style.backgroundColor = GlyphColor[glyph == undefined ? "undefined" : glyph.type];
                c.classList.add("glyph");

                if(glyph != undefined) c.onmouseenter = () => {mouse.classList.remove("hidden"); hoverUI([ Object.entries(GlyphType)[glyph.type][0] + " glyph",
                    "level: " + format(glyph.level), "power: " + format(glyph.power), "effect: +" + format(GlyphEffects[Object.entries(GlyphType)[glyph.type][0]](glyph.level,glyph.power)) + GlyphEffect[glyph.type] ], GlyphColor[glyph.type]);}
                if(glyph != undefined) c.onmouseleave = () => {mouse.classList.add("hidden");}
                    
            }

        }

        for(let z=0; this.maxGlyphs < activeglyphs.children.length; z++) activeglyphs.children[activeglyphs.children.length-1].remove();
        if(game.isMobile){

        }
        else{
            glyphs.style.left = `calc(${(50 * (2-player.scroll.tab))}% - 10%)`;
            activeglyphs.style.left = `calc(${(50 * (2-player.scroll.tab))}% - 10%)`;
            glyphbuttons.style.left = `calc(${(50 * (2-player.scroll.tab))}% - 10%)`;
        }
        if(player.scroll.tab == 1) {glyphs.classList.remove("hidden"); activeglyphs.classList.remove("hidden"); glyphbuttons.classList.remove("hidden");}
        else {glyphs.classList.add("hidden"); activeglyphs.classList.add("hidden"); glyphbuttons.classList.add("hidden");}
    },

    RemoveGlyph(id = 0){
        const glyph = player.glyphs[id];
        if(glyph != undefined){
            if(!glyph.active) {player.glyphs.splice(id,1); this.RenderGlyphs();}
        }
    },

    get glyphlevel(){
        let level = DC.D1;
        level = level.mul(RealityUpgrades[8].effectordefault(1));

        if(RealityUpgrades[11].brought) level = level.mul(10);
        if(RealityUpgrades[17].brought) level = level.mul(2);
        if(RealityUpgrades[23].brought) level = level.mul(10);
        if(RealityUpgrades[24].brought) level = level.mul(25);
        if(ImmensityUpgrades[6].brought) level = level.mul(25);

        return level.mul(Math.randomBetween(3,6)).mul(TotalGlyphEffects.Level());
    },

    get glyphpower(){
        let power = DC.D1;
        power = power.mul(RealityUpgrades[9].effectordefault(1));
        
        if(RealityUpgrades[11].brought) power = power.mul(10);
        if(RealityUpgrades[17].brought) power = power.mul(2);
        if(RealityUpgrades[23].brought) power = power.mul(10);
        if(RealityUpgrades[24].brought) power = power.mul(25);
        if(ImmensityUpgrades[6].brought) power = power.mul(25);

        return power.mul(Math.randomBetween(3,6)).mul(TotalGlyphEffects.Power());
    },

}

class Glyph {
    constructor(data = { level: DC.D1, power: DC.D1, type: 0, active: false, id: 0}){
        this.level = new Decimal(data.level);
        this.power =  new Decimal(data.power);
        this.type = data.type;
        if(data.active != undefined) this.active = data.active;
        this.id = player.glyphs.length;
    }

    level = DC.D1;
    power = DC.D1;
    type = 0;
    active = false;
    arrayid = 0;

    activate(){
        if(Reality.AvalableGlyphsSlots != 0 ) this.active = true;
    }

}

// add to end for new glyphs

const GlyphType = {
    Number: 0,
    Infinity: 1,
    Eternity: 2,
    Reality: 3,
    Immensity: 4,
    Power: 5,
    Level: 6,
    undefined: -1,
}

const GlyphEffect = {
    Number: "^ number gain",
    Infinity: "^ IP gain",
    Eternity: "^ EP gain",
    Reality: "^ RP gain",
    Immensity: "^ IM gain",
    Power: "x glyph power",
    Level: "x glyph level",
    0: "^ number gain",
    1: "^ IP gain",
    2: "^ EP gain",
    3: "^ RP gain",
    4: "^ IM gain",
    5: "x glyph power",
    6: "x glyph level",
    undefined: "",
}

const GlyphIcon = {
    Number: "Ω",
    Infinity: "∞",
    Eternity: "Δ",
    Reality: "∑",
    Immensity: "γ",
    Power: "ε",
    Level: "Θ",
    0: "Ω",
    1: "∞",
    2: "Δ",
    3: "∑",
    4: "γ",
    5: "ε",
    6: "Θ",
    undefined: ".",
}

const GlyphColor = {
    Number: "skyblue",
    Infinity: "orange",
    Eternity: "purple",
    Reality: "lime",
    Immensity: "red",
    Power: "#eedd00",
    Level: "#f527c6",
    0: "skyblue",
    1: "orange",
    2: "purple",
    3: "lime",
    4: "red",
    5: "#eedd00",
    6: "#f527c6",
    undefined: "white",
}

const GlyphEffects = {
    Number: (level, power) => level.sqrt(2).mul(power.sqrt(2)).log(10),
    Infinity: (level, power) => level.sqrt(2).mul(power.sqrt(2)).log(10),
    Eternity: (level, power) => level.sqrt(2).mul(power.sqrt(2)).log(10),
    Reality: (level, power) => level.sqrt(2).mul(power.sqrt(2)).log(10),
    Immensity: (level, power) => level.sqrt(2).mul(power.sqrt(2)).log(10),
    Power: (level, power) => level.sqrt(2).mul(power.sqrt(2)).log(10),
    Level: (level, power) => level.sqrt(2).mul(power.sqrt(2)).log(10),
}

const TotalGlyphEffects = {
    Number: () => {
        let effect = DC.D1;
        player.glyphs.filter(x => x.type == GlyphType.Number && x.active).forEach(x => effect = effect.add(GlyphEffects.Number(x.level,x.power)));
        return effect;
    },
    Infinity: () => {
        let effect = DC.D1;
        player.glyphs.filter(x => x.type == GlyphType.Infinity && x.active).forEach(x => effect = effect.add(GlyphEffects.Infinity(x.level,x.power)));
        return effect;
    },
    Eternity: () => {
        let effect = DC.D1;
        player.glyphs.filter(x => x.type == GlyphType.Eternity && x.active).forEach(x => effect = effect.add(GlyphEffects.Eternity(x.level,x.power)));
        return effect;
    },
    Reality: () => {
        let effect = DC.D1;
        player.glyphs.filter(x => x.type == GlyphType.Reality && x.active).forEach(x => effect = effect.add(GlyphEffects.Reality(x.level,x.power)));
        return effect;
    },
    Immensity: () => {
        let effect = DC.D1;
        player.glyphs.filter(x => x.type == GlyphType.Immensity && x.active).forEach(x => effect = effect.add(GlyphEffects.Immensity(x.level,x.power)));
        return effect;
    },
    Power: () => {
        let effect = DC.D1;
        player.glyphs.filter(x => x.type == GlyphType.Power && x.active).forEach(x => effect = effect.add(GlyphEffects.Power(x.level,x.power)));
        return effect;
    },
    Level: () => {
        let effect = DC.D1;
        player.glyphs.filter(x => x.type == GlyphType.Level && x.active).forEach(x => effect = effect.add(GlyphEffects.Level(x.level,x.power)));
        return effect;
    },
}