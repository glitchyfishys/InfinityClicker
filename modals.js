
const modal ={

    openid: 0,

    get open(){
        return gamemodel.classList.contains("hidden");
    },

    show() {
        gamemodel.classList.remove("hidden");
    },

    showtext(text = "hello") {
        gamemodel.innerHTML = "";
        
        let displaytext = "";
        Array.isArray(text) ? text.forEach(x => displaytext += x + "<br>" ) : displaytext = text;
        
        gamemodel.innerHTML += displaytext;
        
        const cl = gamemodel.appendChild(document.createElement("button"));
        cl.innerHTML = "X";
        cl.classList.add("closemodalbutton");
        cl.onclick = () => this.close();

        modal.show();
        this.openid = 1;
    },

    showsave(text = "import/export <br> importing can cause issues<br> if there is an error refresh before autosave happens") {
        gamemodel.innerHTML = "";
        
        let displaytext = "";
        Array.isArray(text) ? text.forEach(x => displaytext += x + "<br>" ) : displaytext = text;
        
        gamemodel.innerHTML += displaytext;
        
        const cl = gamemodel.appendChild(document.createElement("button"));
        cl.innerHTML = "X";
        cl.classList.add("closemodalbutton");
        cl.onclick = () => this.close();

        gamemodel.appendChild(document.createElement("br"));
        let bu = gamemodel.appendChild(document.createElement("button"));
        bu.onclick = () => expo();
        bu.innerHTML = "export save";
        bu.style.width = "100px";
        bu.style.height = "20px"
        gamemodel.appendChild(document.createElement("br"));

        bu = gamemodel.appendChild(document.createElement("input"));
        bu.id = "importer";
        bu.value = "save";
        bu.style.width = "200px";
        bu.style.height = "20px"
        gamemodel.appendChild(document.createElement("br"));

        bu = gamemodel.appendChild(document.createElement("button"));
        bu.onclick = () => {impo(); modal.close();};
        bu.innerHTML = "import save";
        bu.style.width = "100px";
        bu.style.height = "20px";

        modal.show();
        this.openid = 1;
    },

    showchoose(text = "hello", funct = [{text: "hi", onclick: () => "foot"}]) {
        gamemodel.innerHTML = "";
        
        let displaytext = "";
        Array.isArray(text) ? text.forEach(x => displaytext += x + "<br>" ) : displaytext = text;

        gamemodel.innerHTML += displaytext;
        
        const cl = gamemodel.appendChild(document.createElement("button"));
        cl.innerHTML = "X";
        cl.classList.add("closemodalbutton");
        cl.onclick = () => this.close();

        if(Array.isArray(funct)){
            funct.forEach(x => {
                gamemodel.appendChild(document.createElement("br"));
                const bu = gamemodel.appendChild(document.createElement("button"));
                bu.onclick = x.onclick;
                bu.innerHTML = x.text;
                bu.style.width = "100px";
                bu.style.height = "20px";
                
            });
        }

        modal.show();
        this.openid = 1;
    },

    // infinity Eternity Reality Immensity new layer
    showreset(layer = "infinity", text = "") {
        gamemodel.innerHTML = "";

        let displaytext = "";
        Array.isArray(text) ? text.forEach(x => displaytext += x + "<br>" ) : displaytext = text;

        gamemodel.innerHTML += `${layer}<br> ${this[layer + "resetstring"]} <br>${displaytext}`;

        let cl = gamemodel.appendChild(document.createElement("button"));
        cl.innerHTML = "x";
        cl.classList.add("closemodalbutton");
        cl.onclick = () => modal.close();

        cl = gamemodel.appendChild(document.createElement("button"));
        cl.innerHTML = layer;
        cl.classList.add("lowermodalbutton");
        cl.onclick = () => {eval(layer).reset(); this.close();}

        modal.show();
        this.openid = 2;
    },

    showsettings(text = "") {
        gamemodel.innerHTML = "settings<br>";

        if(game.progress == 1) gamemodel.innerHTML += "come back later";

        let cl = gamemodel.appendChild(document.createElement("button"));
        cl.innerHTML = "x";
        cl.classList.add("closemodalbutton");
        cl.onclick = () => modal.close();
        
        let al;

        if(game.progress > 1){
            al = gamemodel.appendChild(document.createElement("span"));
            al.innerHTML = "confirm infinity";
            al = gamemodel.appendChild(document.createElement("input"));
            al.type = "checkbox";
            al.onclick = () => {settings.confirm.infinity = !settings.confirm.infinity};
            al.checked = settings.confirm.infinity;

            al = gamemodel.appendChild(document.createElement("span"));
            al.innerHTML = "auto infinity";
            al = gamemodel.appendChild(document.createElement("input"));
            al.type = "checkbox";
            al.onclick = () => {settings.auto.infinity = !settings.auto.infinity};
            al.checked = settings.auto.infinity;
        }

        if(game.progress > 2){
            al = gamemodel.appendChild(document.createElement("span"));
            al.innerHTML = "<br>";

            al = gamemodel.appendChild(document.createElement("span"));
            al.innerHTML = "confirm eternity";
            al = gamemodel.appendChild(document.createElement("input"));
            al.type = "checkbox";
            al.onclick = () => {settings.confirm.eternity = !settings.confirm.eternity};
            al.checked = settings.confirm.eternity;

            al = gamemodel.appendChild(document.createElement("span"));
            al.innerHTML = "auto infinity";
            al = gamemodel.appendChild(document.createElement("input"));
            al.type = "checkbox";
            al.onclick = () => {settings.auto.eternity = !settings.auto.eternity};
            al.checked = settings.auto.eternity;
        }

        if(game.progress > 3){
            gamemodel.appendChild(document.createElement("br"));
            
            al = gamemodel.appendChild(document.createElement("span"));
            al.innerHTML = "confirm reality";
            al = gamemodel.appendChild(document.createElement("input"));
            al.type = "checkbox";
            al.onclick = () => {settings.confirm.reality = !settings.confirm.reality;};
            al.checked = settings.confirm.reality;

            gamemodel.appendChild(document.createElement("br"));

            al = gamemodel.appendChild(document.createElement("span"));
            al.innerHTML = "confirm glyph sorting";
            al = gamemodel.appendChild(document.createElement("input"));
            al.type = "checkbox";
            al.onclick = () => {settings.confirm.glyphsort = !settings.confirm.glyphsort;};
            al.checked = settings.confirm.glyphsort;
            
            gamemodel.appendChild(document.createElement("br"));

            al = gamemodel.appendChild(document.createElement("span"));
            al.innerHTML = "auto infinity";
            al = gamemodel.appendChild(document.createElement("input"));
            al.type = "checkbox";
            al.onclick = () => {settings.auto.reality = !settings.auto.reality};
            al.checked = settings.auto.reality;
        }

        if(game.progress > 4){
            al = gamemodel.appendChild(document.createElement("span"));
            al.innerHTML = "confirm immensity";
            al = gamemodel.appendChild(document.createElement("input"));
            al.type = "checkbox";
            al.checked = settings.confirm.immensity;
            al.onclick = () => {settings.confirm.immensity = !settings.confirm.immensity;};
        }

        modal.show();
        this.openid = 3;
    },

    showinfo(){
        gamemodel.innerHTML = "game info<br><br>";

        let al = gamemodel.appendChild(document.createElement("span"));
        al.innerHTML = `you highest number amount is ${format(Currency.highestnumber)}<br>you have played for ${Time.format(Time.totaltime)}<br><br>`;

        if(game.progress > 1){
            let al = gamemodel.appendChild(document.createElement("span"));
            al.innerHTML = `infinity<br>you have infinityed ${format(Currency.INFs)} times ${game.progress > 2 ? "this eternity" : ""}<br> you have been in this infinity for ${Time.format(Time.thisinfinity)} seconds and your best infinity time is ${Time.format(Time.bestinfinity)} seconds <br><br>`;
        }

        if(game.progress > 2){
            al = gamemodel.appendChild(document.createElement("span"));
            al.innerHTML = `eternity<br>you have eternityed ${format(Currency.ETRs)} times ${game.progress > 3 ? "this reality" : ""}<br> you have been in this eternity for ${Time.format(Time.thiseternity)} seconds and your best eternity time is ${Time.format(Time.besteternity)} seconds <br><br>`;
        }

        if(game.progress > 3){
            al = gamemodel.appendChild(document.createElement("span"));
            al.innerHTML = `reality<br>you have realityed ${format(Currency.REAs)} times ${game.progress > 4 ? "this immensity" : ""}<br> you have been in this reality for ${Time.format(Time.thisreality)} seconds and your best reality time is ${Time.format(Time.bestreality)} seconds <br><br>`;
        }

        if(game.progress > 4){
            al = gamemodel.appendChild(document.createElement("span"));
            al.innerHTML = `immensity<br>you have immensityed ${format(Currency.IMMs)} times <br> you have been in this immensity for ${Time.format(Time.thisimmensity)} seconds and your best immensity time is ${Time.format(Time.bestimmensity)} seconds`;
        }

        let cl = gamemodel.appendChild(document.createElement("button"));
        cl.innerHTML = "x";
        cl.classList.add("closemodalbutton");
        cl.onclick = () => modal.close();

        modal.show();
        this.openid = 4;
    },

    showhotkeys(){
        gamemodel.innerHTML = "hotkeys<br>";

        if(game.isMobile){
            let al = gamemodel.appendChild(document.createElement("span"));
            al.innerHTML = `<br> you are on mobile and can not use hotkeys<br>sorry`;
            let cl = gamemodel.appendChild(document.createElement("button"));
            cl.innerHTML = "x";
            cl.classList.add("closemodalbutton");
            cl.onclick = () => modal.close();

            modal.show();
            this.openid = 5;
            return;
        }

        if(game.progress == 1){
            let al = gamemodel.appendChild(document.createElement("span"));
            al.innerHTML = `<br> none yet`;
        }

        if(game.progress > 1){
            let al = gamemodel.appendChild(document.createElement("span"));
            al.innerHTML = `<br>infinity = "I" <br> buy max infinity upgrades = "M" <br><br>`;
        }

        if(game.progress > 2){
            al = gamemodel.appendChild(document.createElement("span"));
            al.innerHTML = `eternity = "E" <br> buy max eternity upgrades = "K" <br><br>`;
        }

        if(game.progress > 3){
            al = gamemodel.appendChild(document.createElement("span"));
            al.innerHTML = `reality = "Y" <br> buy max reality upgrades = "L" <br>`;
            al = gamemodel.appendChild(document.createElement("span"));
            al.innerHTML = `toggle auto buys with alt + A<br><br>`;
        }

        if(game.progress > 4){
            al = gamemodel.appendChild(document.createElement("span"));
            al.innerHTML = `immensity = "N" <br>`;
        }

        let cl = gamemodel.appendChild(document.createElement("button"));
        cl.innerHTML = "x";
        cl.classList.add("closemodalbutton");
        cl.onclick = () => modal.close();

        modal.show();
        this.openid = 5;
    },

    close(){
        this.openid = 0;
        gamemodel.classList.add("hidden");
    },

    get infinityresetstring(){
        return "when you infinity you gain IP for upgrades <br> on infinity your number resets<br>";
    },

    get Eternityresetstring(){
        return `when you eternity you gain EP for upgrades <br> on eternity IP, infinity upgrades and your number resets ${infinity.heighestKeepedUpgrade > 0 ? `but you keep ${infinity.heighestKeepedUpgrade} infinity upgrades` : ""}<br>`;
    },

    get Realityresetstring(){
        return `when you reality you gain RP for upgrades and ${Reality.gainedglyphs} ${Reality.gainedglyphs > 1 ? "glyphs" : "glyph"} <br> on reality EP, eternity upgrades, IP, infinity upgrades and your number resets ${Eternity.heighestKeepedUpgrade > 0 ? `but you keep ${Eternity.heighestKeepedUpgrade} eternity upgrades` : ""}<br>`;
    },

    get Immensityresetstring(){
        return "when you immensity you gain IM for upgrades with requirements<br> on immensity RP, reality upgrades, glyphs, EP, eternity upgrades, IP, infinity upgrades and your number resets<br>";
    },
}

// update info
setInterval(() => {
    if(modal.openid == 4){
        modal.showinfo();
    }
}, 250);