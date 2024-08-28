
const mmm ={
    cost: new Decimal(1,1e308),
    effect: () => 1,
    id: 0,
    decription: "none",
}

class upgrade{
    constructor(data = mmm){
        this.cost = data.cost;
        this.effect = data.effect;
        this.id = data.id;
        this.decription = data.decription;
        this.effectdisplay = data.effectdisplay;
        this.currencykey = data.currencykey;
        this.unlock = data.unlock;
        this.reqirement = data.reqirement;
        this.effectdisplay = data.effectdisplay;
        if(data.onbuy != undefined) this.onbuy = data.onbuy;
        this.element = addnewupgrade(data.mainele);
        this.element.onclick = () => this.buy();
        if(data.unlock != undefined) {
            this.unlock = data.unlock;
            this.reqirementtext = data.reqirementtext;
            this.HasMetUnlockRequirment = false;
        }
        this.tick();
    }

    element = document.createElement("button");
    decription = "";
    effectdisplay = () => "uh oh";
    cost = DC.D0;
    brought = false;
    currencykey = "infinitypoints";
    effect = () => DC.D0;
    id = 0;
    unlock = () => true;
    HasMetUnlockRequirment = true;
    reqirement = () => true;
    reqirementtext = "";
    onbuy = () => false;

    buy(){
        if(this.brought || !this.HasMetUnlockRequirment) return false;

        if(player.money[this.currencykey].lt(((typeof this.cost != "object" ? this.cost() : this.cost)))) return false;
        player.money[this.currencykey] = player.money[this.currencykey].sub(((typeof this.cost != "object" ? this.cost() : this.cost)));
        this.brought = true;
        this.onbuy();
        this.tick();
        return true;
    }

    buyable(){

        this.ugtext();

        if(this.brought) {
            this.element.classList.add("brought");
            this.element.classList.remove("buyable");
            this.element.classList.remove("unbuyable");
            return false;
        }
        if(this.canbebrought && this.HasMetUnlockRequirment) {
            this.element.classList.add("buyable");
            this.element.classList.remove("unbuyable");
            this.element.classList.remove("brought");
            return true;
        }
        this.element.classList.add("unbuyable");
        this.element.classList.remove("buyable");
        this.element.classList.remove("brought");
        return false;
    }

    ugtext(){
        this.displayed();
        let text =  (typeof this.decription == "function") ? this.decription() : this.decription;
        if(this.cost.neq(0) || (this.cost.eq(0) && !this.brought)) text +=  "<br>cost: " + (this.cost.neq(0) ? format(this.cost) + " " + this.currencykey : `free${!this.brought ? ", click to buy" : ""}${(this.reqirementtext != "" && !this.brought) ? " after being unlocked" : ""}`);
        if(!this.HasMetUnlockRequirment || (this.reqirementtext != "" && kd.SHIFT.isDown())) text += "<br>requirement: " + this.reqirementtext;
        if((this.brought && this.reqirementtext == "" ) || (this.brought && this.reqirementtext != "" && !kd.SHIFT.isDown())) text +=  "<br>effect: " + this.effectdisplay(this.effectordefault(1));
        
        this.element.innerHTML = text;
        return text;
    }

    get canbebrought(){
        if(this.brought) return false;
        if(!this.HasMetUnlockRequirment) return false;
        if(player.money[this.currencykey].lt(((typeof this.cost != "object" ? this.cost() : this.cost)))) return false;
        return true;
    }

    effectordefault(def = 1){
        if(this.type == "unlock") return this.brought;
        let e = this.effect();
        if(e.lt(def) || e.isNan() || e.m == 0) return new Decimal(def);
        if(this.brought || this.type == "reset") return e;
        return new Decimal(def);
    }

    tick(){
        this.buyable();
        if(this.unlock != undefined ? this.unlock() : false){
            this.HasMetUnlockRequirment = true;
        }
    }

    displayed(){
        if( typeof this.reqirement == "function" ? this.reqirement() : this.reqirement){
            this.element.classList.remove("hidden")
        }
        else{
            this.element.classList.add("hidden")
        }
    }
}
