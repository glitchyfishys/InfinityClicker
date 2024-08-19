
var player = {
    vers: "3.1.1",
    heightestnumber: DC.D1,
    universalupgrades: [],
    infinityupgrades: [],
    eternityupgrades: [],
    realityupgrades: [],
    immensityupgrades: [],
    immensityupgradereqirements: [],
    uniopen: false,
    auto: false,
    glyphrespec: false,
    money: {
        number: DC.D1,
        highestnumber: DC.D1,
        infinitypoints: DC.D0,
        eternitypoints: DC.D0,
        realitypoints: DC.D0,
        immensitypoints: DC.D0,
    },
    reset: {
        infinitys: DC.D0,
        eternitys: DC.D0,
        realitys: DC.D0,
        immensitys: DC.D0,
    },
    time: {
        totaltime: DC.D0,
        thisinfinity: DC.D0,
        bestinfinity: DC.eternity,
        thiseternity: DC.D0,
        besteternity: DC.eternity,
        thisreality: DC.D0,
        bestreality: DC.eternity,
        thisimmensity: DC.D0,
        bestimmensity: DC.eternity,
    },
    scroll:{
        tab: -1,
        layer: 0,
        infinity: 0,
        eternity: 0,
        reality: 0,
        immensity: 0,
        universal: 0,
    },
    glyphs: [],
    Blackhole: [],
    lastonlinetick: 0,
}

var settings = {
    glyphkeepamount: 3,
    glyphselect: "none",
    confirm: {
        infinity: true,
        eternity: true,
        reality: true,
        immensity: true,
    },
}

// htanl add layer id and the name of it
const layers = ["number", "infinity", "eternity","reality","immensity"];
const layerids = ["INF-UG", "ETR-UG","REA-UG","IMM-UG"];


let lasttick = Date.now();
let Deltatime = 0; // this is in seconds

Math.clamp = (value, min = 0, max = 0) => Math.min(Math.max(value,min), max);
Math.randomBetween = (min = 0, max = 5) => Math.floor(Math.random() * (max + 1 - min) + min);

// scrolling
function scrollup(id = "infinity"){
    const shift = kd.SHIFT.isDown() ? 3 : 1;
    if(id == "infinity"){

        let l = 0;
        const i = setInterval(() => {
        player.scroll.infinity -= 5 * shift;
        player.scroll.infinity = Math.clamp(player.scroll.infinity, 0, document.getElementById("INF-UG").scrollHeight - 450);
        l++;
        document.getElementById("INF-UG").scrollTo(0, player.scroll.infinity);
        if(l >= 20) clearInterval(i);
        }, 0);
    }
    else if(id == "eternity"){

        let l = 0;
        const i = setInterval(() => {
        player.scroll.eternity -= 5 * shift;
        player.scroll.eternity = Math.clamp(player.scroll.eternity, 0, document.getElementById("ETR-UG").scrollHeight - 450);
        l++;
        document.getElementById("ETR-UG").scrollTo(0, player.scroll.eternity);
        if(l >= 20) clearInterval(i);
        }, 0);
    }
    else if(id == "reality"){

        let l = 0;
        const i = setInterval(() => {
        player.scroll.reality -= 5 * shift;
        player.scroll.reality = Math.clamp(player.scroll.reality, 0, document.getElementById("REA-UG").scrollHeight - 450);
        l++;
        document.getElementById("REA-UG").scrollTo(0, player.scroll.reality);
        if(l >= 20) clearInterval(i);
        }, 0);
    }
    else if(id == "immensity"){

        let l = 0;
        const i = setInterval(() => {
        player.scroll.immensity -= 5 * shift;
        player.scroll.immensity = Math.clamp(player.scroll.immensity, 0, document.getElementById("IMM-UG").scrollHeight - 450);
        l++;
        document.getElementById("IMM-UG").scrollTo(0, player.scroll.immensity);
        if(l >= 20) clearInterval(i);
        }, 0);
    }
    else if(id == "uni"){

        let l = 0;
        const i = setInterval(() => {
        player.scroll.universal -= 5 * shift;
        player.scroll.universal = Math.clamp(player.scroll.universal, 0, document.getElementById("UNI-UG").scrollHeight - 100);
        l++;
        document.getElementById("UNI-UG").scrollTo(0, player.scroll.universal);
        if(l >= 20) clearInterval(i);
        }, 0);
    }
}

function scrolldown(id = "infinity"){
    const shift = kd.SHIFT.isDown() ? 3 : 1;
    if(id == "infinity"){

        let l = 0;
        const i = setInterval(() => {
        player.scroll.infinity += 5 * shift;
        player.scroll.infinity = Math.clamp(player.scroll.infinity, 0, document.getElementById("INF-UG").scrollHeight - 450);
        l++;
        document.getElementById("INF-UG").scrollTo(0, player.scroll.infinity);
        if(l >= 20) clearInterval(i);
        }, 0);
    }
    else if(id == "eternity"){

        let l = 0;
        const i = setInterval(() => {
        player.scroll.eternity += 5 * shift;
        player.scroll.eternity = Math.clamp(player.scroll.eternity, 0, document.getElementById("ETR-UG").scrollHeight - 450);
        l++;
        document.getElementById("ETR-UG").scrollTo(0, player.scroll.eternity);
        if(l >= 20) clearInterval(i);
        }, 0);
    }
    else if(id == "reality"){

        let l = 0;
        const i = setInterval(() => {
        player.scroll.reality += 5 * shift;
        player.scroll.reality = Math.clamp(player.scroll.reality, 0, document.getElementById("REA-UG").scrollHeight - 450);
        l++;
        document.getElementById("REA-UG").scrollTo(0, player.scroll.reality);
        if(l >= 20) clearInterval(i);
        }, 0);
    }
    else if(id == "immensity"){

        let l = 0;
        const i = setInterval(() => {
        player.scroll.immensity += 5 * shift;
        player.scroll.immensity = Math.clamp(player.scroll.immensity, 0, document.getElementById("IMM-UG").scrollHeight - 450);
        l++;
        document.getElementById("IMM-UG").scrollTo(0, player.scroll.immensity);
        if(l >= 20) clearInterval(i);
        }, 0);
    }
    else if(id == "uni"){

        let l = 0;
        const i = setInterval(() => {
        player.scroll.universal += 5 * shift;
        player.scroll.universal = Math.clamp(player.scroll.universal, 0, document.getElementById("UNI-UG").scrollHeight - 100);
        l++;
        document.getElementById("UNI-UG").scrollTo(0, player.scroll.universal);
        if(l >= 20) clearInterval(i);
        }, 0);
    }
}

function tab(left = true){
    player.scroll.tab += (left ? -1 : 1);
    player.scroll.tab = Math.clamp(player.scroll.tab, -1, Math.max(game.progress - 3, -1));
    tabchange();
}

function tabchange(){
    layers.forEach(x => document.getElementById("layer" + x).style.left = `calc( ${(50 * (layers.indexOf(x) - player.scroll.tab - 1)) + 25}% - 137.5px`);
    Reality.RenderGlyphs();
    Immensity.renderBHs();
}

function toggleuni(t=true){
    if(t) player.uniopen  = !player.uniopen;
    if(player.uniopen){
        document.getElementById("UNI-UG").classList.remove("hidden");
    }
    else{
        document.getElementById("UNI-UG").classList.add("hidden");
    }
}

function maxupgrades(id = "infinity"){
    if(id == "infinity") InfinityUpgrades.forEach(x => x.buy());
    else if(id == "eternity") EternityUpgrades.forEach(x => x.buy());
    else if(id == "reality") RealityUpgrades.forEach(x => x.buy());
    else if(id == "immensity"){}
    else if(id == "uni") UniversalUpgrades.forEach(x => x.buy());
}

function startup(){
    immensityupgadedata.forEach(x => ImmensityUpgrades.push(new upgrade(x)));
    realityupgadedata.forEach(x => RealityUpgrades.push(new upgrade(x)));
    eternityupgadedata.forEach(x => EternityUpgrades.push(new upgrade(x)));
    infinityupgadedata.forEach(x => InfinityUpgrades.push(new upgrade(x)));
    universalupgadedata.forEach(x => UniversalUpgrades.push(new upgrade(x)));

    clicker.onclick = () => {
        Currency.number = Currency.number.mul(nummul());
    }
    [].slice.call(document.getElementsByTagName("input")).forEach(x => {x.onfocus = () => kd.stop(); x.onblur = () => kdstart();});

    loadgame();
    loadcatalog();
    tabchange();
    glyphkeepamount.onmouseenter = () => {mouse.classList.remove("hidden"); hoverUI(["how many glyphs of each type to keep", "active ones get pushed to the start"], "black");};
    glyphkeepamount.onmouseleave = () => {mouse.classList.add("hidden");};

    glyphselect.onmouseenter = () => {mouse.classList.remove("hidden"); hoverUI(["on reality witch glyphs to give"], "black");};
    glyphselect.onmouseleave = () => {mouse.classList.add("hidden");};

    glyphselect.onchange = () => glyphselect.blur();

    toggleuni(false);
    setInterval(gameloop, 25);
    setInterval(savegame, 30000);
    kdstart();
    TN.style.opacity = "0";
}

function startsong(skip = false){
    if(song.ended || song.played.length == 0 || skip){;
        const n = Math.floor(Math.random() * songs.length);
        notify("playing " + songs[n].split(".")[0] + " by " + songcreaters[n], 5, "#ff00ff");
        song.src = "./songs/" + songs[n];
        song.play();
    }
}

function gameloop(deltaticks = 0){
    if(deltaticks != 0){
        Deltatime = deltaticks;
        BlackHoles.forEach(x => x.tick());
        Currency.number = Currency.number.max(1);
        console.log()
        layers.filter(x => x != "number").forEach(x => Time["this" + x] = Time["this" + x].add(Decimal.mul(game.speed,Deltatime)) );
        Time.totaltime = Time.totaltime.add(Decimal.mul(game.speed,Deltatime));
    }
    else{
        Deltatime = (Date.now() - lasttick) /1000;
        lasttick = Date.now();
        BlackHoles.forEach(x => x.tick());
        autotick();
        Currency.number = Currency.number.max(1);
        layers.filter(x => x != "number").forEach(x => Time["this" + x] = Time["this" + x].add(Decimal.mul(game.speed,Deltatime)) );
        Time.totaltime = Time.totaltime.add(Decimal.mul(game.speed,Deltatime));

        game.frametick++;
        game.frametick = game.frametick % 4;
    
        if(game.frametick == 0) UIupdate();
    }
    player.money.highestnumber = player.money.highestnumber.max(player.money.number);
}

function UIupdate(){
    clicker.innerHTML = "muliply your number by " + nummul();
    number.innerHTML = "your number is " + `<span style="color: skyblue;">${Currency.number}<span/>`;
    if(game.progress > 1) number.innerHTML += "<br>you have " + `<span style="color: orange;">${Currency.IP} infinity points<span/>`;
    if(game.progress > 2) number.innerHTML += "<br>you have " + `<span style="color: purple;">${Currency.EP} eternity points<span/>`;
    if(game.progress > 3) number.innerHTML += "<br>you have " + `<span style="color: lime;">${Currency.RP} reality points<span/>`;
    if(game.progress > 4) number.innerHTML += "<br>you have " + `<span style="color: red;">${Currency.IM} immensity points<span/>`;
    
    (infinity.caninfinity && InfinityUpgrades[13].brought) ? infinityreset.classList.remove("hidden") : infinityreset.classList.add("hidden");
    Eternity.caneternity ? eternityreset.classList.remove("hidden") : eternityreset.classList.add("hidden");
    Reality.canreality ? realityreset.classList.remove("hidden") : realityreset.classList.add("hidden");
    Immensity.canimmensity ? immensityreset.classList.remove("hidden") : immensityreset.classList.add("hidden");
    infinityreset.innerHTML = "infinity for " + infinity.gainedinfinitypoints.toString(2) + " IP";
    eternityreset.innerHTML = "eternity for " + Eternity.gainedeternitypoints.toString(2) + " EP";
    realityreset.innerHTML = "reality for " + Reality.gainedrealitypoints.toString(2) + " RP";
    immensityreset.innerHTML = "immensity for " + Immensity.gainedimmensitypoints.toString(2) + " IM";
    
    if(infinity.caninfinity && !InfinityUpgrades[13].brought) infinity.reset();

    glyphrespec.style.borderColor = player.glyphrespec ? "lime" : "red";
    Immensity.renderBHs();
    hoverUIupdatepos();
    FPS.innerHTML = "fps: " + (6 / Deltatime).toFixed(2) + "<br>tps: " + (1 / Deltatime).toFixed(2);
    if(BlackHoles.length > 0){
        BH1.innerHTML = "upgrade black hole interval<br> cost: " + BlackHoles[0].intervalcost + " IM";
        BH2.innerHTML = "upgrade black hole power<br> cost: " + BlackHoles[0].powercost + " IM";
        BH3.innerHTML = "upgrade black hole length<br> cost: " + BlackHoles[0].lengthcost + " IM";

        BlackHoles[0].intervalcost.lte(Currency.IM) ? BH1.classList.add("buyable") : BH1.classList.remove("buyable");
        BlackHoles[0].powercost.lte(Currency.IM) ? BH2.classList.add("buyable") : BH2.classList.remove("buyable");
        BlackHoles[0].lengthcost.lte(Currency.IM) ? BH3.classList.add("buyable") : BH3.classList.remove("buyable");
        
        if(BlackHoles[0].ispermenant){
            BHinfo.innerHTML = `the black hole is mulipling game speed by ${BlackHoles[0].power.toString(2)}`
            BH1.classList.add("hidden");
            BH3.classList.add("hidden");
        }
        else{
            BH1.classList.remove("hidden");
            BH3.classList.remove("hidden");
            BlackHoles[0].isactive ? 
            BHinfo.innerHTML = `the black hole is active for ${BlackHoles[0].activetime.toFixed(2).toString()} seconds<br> mulipling game speed by ${BlackHoles[0].power.toString(2)}`
            : BHinfo.innerHTML = `the black hole will activate in ${(BlackHoles[0].interval - BlackHoles[0].timer).toFixed(2).toString()} seconds <br> while active mulipliys game speed by ${BlackHoles[0].power.toString(2)}`
        }
    }
}

function autotick(){
    infinity.persecond();
    Eternity.persecond();
    Reality.persecond();

    if(player.auto){
        if(RealityUpgrades[0].brought) InfinityUpgrades.forEach(u => u.buy());
    }

    if(!InfinityUpgrades[1].brought && !ImmensityUpgrades[5].brought) return false;
    let autospeed = DC.D1;

    if(ImmensityUpgrades[5].brought) {
        autospeed = new Decimal(1500);
        autospeed = autospeed.mul(game.speed);
    }else{
        if(InfinityUpgrades[2].brought) autospeed = autospeed.mul(2);
        if(InfinityUpgrades[3].brought) autospeed = autospeed.mul(5);
        if(InfinityUpgrades[17]) autospeed = autospeed.mul(3);
        if(EternityUpgrades[14].brought) autospeed = autospeed.mul(10);
        autospeed = autospeed.mul(game.speed);
    }
    
    Currency.number = Currency.number.mul(nummul().pow(autospeed.mul(Deltatime / 10)));
}


//save and load
function savegame(){
    for(let i=0; i < ImmensityUpgrades.length; i++) {
        player.immensityupgrades[i] = ImmensityUpgrades[i].brought;
        player.immensityupgradereqirements[i] = ImmensityUpgrades[i].HasMetUnlockRequirment;
    }
    for(let i=0; i < RealityUpgrades.length; i++) player.realityupgrades[i] = RealityUpgrades[i].brought;
    for(let i=0; i < InfinityUpgrades.length; i++) player.infinityupgrades[i] = InfinityUpgrades[i].brought;
    for(let i=0; i < EternityUpgrades.length; i++) player.eternityupgrades[i] = EternityUpgrades[i].brought;
    for(let i=0; i < UniversalUpgrades.length; i++) player.universalupgrades[i] = UniversalUpgrades[i].brought;

    player.Blackhole = BlackHoles;
    player.lastonlinetick = Date.now();

    localStorage.setItem("InfinityClickerSave", JSON.stringify(player));

    settings.glyphselect = glyphselect.value;
    settings.glyphkeepamount = glyphkeepamount.value;

    localStorage.setItem("InfinityClickerSettings", JSON.stringify(settings));
    notify("game saved", 3, "#00aaff")
}

function loadgame(){
    let sav = JSON.parse(localStorage.InfinityClickerSave);
    if(sav == undefined) return;

    if(sav.universalupgrades != undefined) for(let i=0; i < sav.universalupgrades.length; i++) UniversalUpgrades[i].brought = sav.universalupgrades[i];
    if(sav.infinityupgrades != undefined) for(let i=0; i < sav.infinityupgrades.length; i++) InfinityUpgrades[i].brought = sav.infinityupgrades[i];
    if(sav.eternityupgrades != undefined) for(let i=0; i < sav.eternityupgrades.length; i++) EternityUpgrades[i].brought = sav.eternityupgrades[i];
    if(sav.realityupgrades != undefined) for(let i=0; i < sav.realityupgrades.length; i++) RealityUpgrades[i].brought = sav.realityupgrades[i];
    if(sav.immensityupgrades != undefined) for(let i=0; i < sav.immensityupgrades.length; i++) {
        ImmensityUpgrades[i].brought = sav.immensityupgrades[i];
        ImmensityUpgrades[i].HasMetUnlockRequirment = sav.immensityupgradereqirements[i];
    }
    if(sav.money.highestnumber != undefined) player.money.highestnumber = sav.money.highestnumber;
    if(sav.glyphs != undefined) sav.glyphs.forEach(x => player.glyphs.push(new Glyph(x)));

    const mkeys = Object.keys(player.money);
    mkeys.forEach(key => player.money[key] = new Decimal(sav.money[key]));

    const rkeys = Object.keys(player.reset);
    rkeys.forEach(key => player.reset[key] = new Decimal(sav.reset[key]));

    const tkeys = Object.keys(sav.time);
    tkeys.forEach(k => player.time[k] = new Decimal(sav.time[k]));

    const skeys = Object.keys(sav.scroll);
    skeys.forEach(k => player.scroll[k] = sav.scroll[k]);

    if(sav.uniopen != undefined) player.uniopen = sav.uniopen;
    if(sav.auto != undefined) player.auto = sav.auto;

    if(sav.glyphrespec != undefined) player.glyphrespec = sav.glyphrespec;

    UniversalUpgrades.forEach(x => x.tick());
    InfinityUpgrades.forEach(x => x.tick());
    EternityUpgrades.forEach(x => x.tick());
    RealityUpgrades.forEach(x => x.tick());

    document.getElementById("INF-UG").scrollTo(0, player.scroll.infinity);
    document.getElementById("ETR-UG").scrollTo(0, player.scroll.eternity);
    document.getElementById("REA-UG").scrollTo(0, player.scroll.reality);
    document.getElementById("IMM-UG").scrollTo(0, player.scroll.immensity);
    document.getElementById("UNI-UG").scrollTo(0, player.scroll.universal);

    if(sav.Blackhole != undefined) for(let i=0; i < sav.Blackhole.length; i++) BlackHoles[i] = new BlackHole(sav.Blackhole[i]);

    let set = JSON.parse(localStorage.InfinityClickerSettings == undefined ? "{}" : localStorage.InfinityClickerSettings);

    const skey = Object.keys(set);
    skey.forEach(k => settings[k] = set[k]);

    glyphselect.value = settings.glyphselect;
    glyphkeepamount.value = settings.glyphkeepamount;
    const ck = Object.keys(set.confirm);
    ck.forEach(x => settings.confirm[x] = set.confirm[x]);

    if(ImmensityUpgrades[6].brought) glyphselect.classList.remove("hidden");
    
    const ticklength = (Date.now() - sav.lastonlinetick) / 1000;
    for(let t=0; t < 100; t++) gameloop(ticklength / 100);
    notify(ticklength + " seconds of offline time used over 100 ticks", 3, "lightgreen")
}


function nummul(){
    let def = DC.De5;
    if(InfinityUpgrades[0].brought) def = DC.De7;
    if(InfinityUpgrades[4].brought) def = DC.De15;
    if(InfinityUpgrades[5].brought) def = DC.De30;
    if(InfinityUpgrades[6].brought) def = DC.De60;
    if(InfinityUpgrades[10].brought) def = DC.De100;
    if(InfinityUpgrades[11].brought) def = def.pow(10);
    if(EternityUpgrades[15].brought) def = def.pow(5);
    
    return def.pow(TotalGlyphEffects.Number()).mul(Universal.gainedbonus);
}

const Mouse = {x:0,y:0}

onmousemove = function(e) {
    Mouse.x = e.pageX;
    Mouse.y = e.pageY;
}

function hoverUI(text, color = "#FFFF00") {
    // make text an array for lines

    const child = mouse;
    if(text == "") {
        child.style.left = "-50px";
        child.innerHTML = "";
        return;
    }
    child.style.left = document.pointer
    let displaytext = "";
    text.forEach(x => displaytext += x + "<br>" )
    child.innerHTML = displaytext;
    child.classList.add("hoverUI");

    child.style.left = Mouse.x - child.clientWidth / 2 + "px";
    child.style.top = Mouse.y - child.clientHeight - 10 + "px";
    
    child.style.borderColor = color;
}

function hoverUIupdatepos() {
    mouse.style.left = Mouse.x - mouse.clientWidth / 2 + "px";
    mouse.style.top = Mouse.y - mouse.clientHeight - 10 + "px";
}

const addele = document.getElementById("core");

let Elements = [];

game = {
    get progress(){
        if(Currency.IMMs.gt(0)) return 5;
        if(Currency.REAs.gt(0)) return 4;
        if(Currency.ETRs.gt(0)) return 3;
        if(Currency.INFs.gt(0)) return 2;
        return 1;
    },
    frametick: 0,
    get speed(){
        if(BlackHoles.length == 0) return DC.D0;
        return BlackHoles[0].effect;
    },
}

// this run ticks fast
kdstart = () => {kd.run( () => {kd.tick(); });}

// add key inputs

kd.S.press( evt => {
    if(!evt.altKey && !evt.shiftKey && evt.ctrlKey) {
        evt.preventDefault();
        savegame();
    }
});
  
kd.SHIFT.down( evt => {
    evt.preventDefault();
});

kd.M.down( evt => {
    if(!evt.altKey && !evt.shiftKey && !evt.ctrlKey) maxupgrades("infinity");
});

kd.K.down( evt => {
    if(!evt.altKey && !evt.shiftKey && !evt.ctrlKey) maxupgrades("eternity");
});

kd.L.down( evt => {
    if(!evt.altKey && !evt.shiftKey && !evt.ctrlKey) maxupgrades("reality");
});

kd.I.down( evt => {
    if(!evt.altKey && !evt.shiftKey && !evt.ctrlKey) settings.confirm.infinity ? modal.showreset('infinity') : infinity.reset();
});

kd.E.down( evt => {
    if(!evt.altKey && !evt.shiftKey && !evt.ctrlKey) settings.confirm.eternity ? modal.showreset('Eternity') : Eternity.reset();
});

kd.R.down( evt => {
    if(!evt.altKey && !evt.shiftKey && !evt.ctrlKey) settings.confirm.reality ? modal.showreset('Reality') : Reality.reset();
});

kd.N.down( evt => {
    if(!evt.altKey && !evt.shiftKey && !evt.ctrlKey) settings.confirm.immensity ? modal.showreset('Immensity') : Immensity.reset();
});

kd.A.press( evt => {
    if(evt.altKey && !evt.shiftKey && !evt.ctrlKey){
        evt.preventDefault();
        player.auto = !player.auto;
        player.auto ? notify("auto buyers have been enabled", 5, "green") : notify("auto buyers have been disabled", 5, "red");
    }
});

kd.LEFT.press( evt => {
    if(!evt.altKey && !evt.shiftKey && !evt.ctrlKey) tab(true);
});

kd.RIGHT.press( evt => {
    if(!evt.altKey && !evt.shiftKey && !evt.ctrlKey) tab(false);
});


function addnewupgrade(mainname = "INF-UG"){
    let ele = document.getElementById(mainname);
    child = ele.appendChild(document.createElement("button"));
    child.classList.add("upgrade");
    return child;
}

const Currency = {
    get number(){
        return player.money.number;
    },
    set number(value){
        player.money.number = value;
    },
    get highestnumber(){
        return player.money.highestnumber;
    },
    set highestnumber(value){
        player.money.highestnumber = value;
    },

    get IP(){
        return player.money.infinitypoints;
    },
    set IP(value){
        player.money.infinitypoints = value;
    },
    get INFs(){
        return player.reset.infinitys;
    },
    set INFs(value){
        player.reset.infinitys = value;
    },

    get EP(){
        return player.money.eternitypoints;
    },
    set EP(value){
        player.money.eternitypoints = value;
    },
    get ETRs(){
        return player.reset.eternitys;
    },
    set ETRs(value){
        player.reset.eternitys = value;
    },

    get RP(){
        return player.money.realitypoints;
    },
    set RP(value){
        player.money.realitypoints = value;
    },
    get REAs(){
        return player.reset.realitys;
    },
    set REAs(value){
        player.reset.realitys = value;
    },

    get IM(){
        return player.money.immensitypoints;
    },
    set IM(value){
        player.money.immensitypoints = value;
    },
    get IMMs(){
        return player.reset.immensitys;
    },
    set IMMs(value){
        player.reset.immensitys = value;
    },
}

const Time = {
    get totaltime() {
        return player.time.totaltime;
    },
    set totaltime(value) {
        player.time.totaltime = value;
    },

    get thisinfinity() {
        return player.time.thisinfinity;
    },
    get bestinfinity() {
        return player.time.bestinfinity;
    },

    set thisinfinity(value) {
        player.time.thisinfinity = value;
    },
    set bestinfinity(value) {
        player.time.bestinfinity = value;
    },

    get thiseternity() {
        return player.time.thiseternity;
    },
    get besteternity() {
        return player.time.besteternity;
    },

    set thiseternity(value) {
        player.time.thiseternity = value;
    },
    set besteternity(value) {
        player.time.besteternity = value;
    },

    get thisreality() {
        return player.time.thisreality;
    },
    get bestreality() {
        return player.time.bestreality;
    },
    
    set thisreality(value) {
        player.time.thisreality = value;
    },
    set bestreality(value) {
        player.time.bestreality = value;
    },

    get thisimmensity() {
        return player.time.thisimmensity;
    },
    get bestimmensity() {
        return player.time.bestimmensity;
    },
    
    set thisimmensity(value) {
        player.time.thisimmensity = value;
    },
    set bestimmensity(value) {
        player.time.bestimmensity = value;
    },

    format(time = DC.D1){
        if(time.lt(1)) return Decimal.div(time, this.timechanges.milliseconds).toString(0,2) + this.times.milliseconds;
        if(time.gte(3600 * 24 * 365)) return Decimal.div(time, this.timechanges.years).toString(2,2) + this.times.years;
        if(time.gte(3600 * 24)) return Decimal.div(time, this.timechanges.days).toString(2,2) + this.times.days;
        if(time.gte(3600)) return Decimal.div(time, this.timechanges.hours).toString(2,2) + this.times.hours;
        if(time.gte(60)) return Decimal.div(time, this.timechanges.minutes).toString(2,2) + this.times.minutes;
        if(time.gte(1)) return Decimal.div(time, this.timechanges.seconds).toString(2,2) + this.times.seconds;
        
    },

    times: {
        milliseconds: " milliseconds",
        shortmillseconds: " ms",
        seconds: " seconds",
        shortseconds: " s",
        minutes: " minutes",
        shortminutes: " mins",
        hours: " hours",
        shortshours: " hrs",
        days: " days",
        shortdays: " dys",
        years: " years",
        shortyears: " yrs",
    },

    timechanges: {// note time is done in seconds
        milliseconds: 0.0001,
        seconds: 1,
        minutes: 60,
        hours: 3600,
        days: (3600 * 24),
        years: (3600 * 24 * 365),

    },
}
