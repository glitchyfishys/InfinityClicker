
class Decimal{
    m=0;
    e=0;

    constructor(m=0, e=0,fix = true) {
        if(typeof m == "string") return this.prase(m);
        
        if(m instanceof Decimal || typeof(m) == "object") {
            this.m = m.m;
            this.e = m.e;
        }
        else if(m == Infinity || e == Infinity){
            this.m = 1.79;
            this.e = Math.max(308,e);
            if(e == Infinity) this.e = 1.79e308; 
        }
        else{
            this.m = m;
            this.e = e;
        }
        if(fix) this.fix();
    }

    prase(string){
        let m = string.split("e")
        if(m == "") {
            notify("no input",3,"#ff0000")
            return new Decimal()
        }
        if(this.isNaN(Number(m[0]))) {
            notify("tryed to add NaN: " + m[0],3,"#ff0000")
            return new Decimal()
        }
        if(this.isNaN(Number(m[1])) && m[1] != undefined) {
            notify("tryed to add NaN: " + m[1],3,"#ff0000")
            return new Decimal()
        }
        if(this.isNaN(Number(m[2])) && m[2] != undefined) {
            notify("tryed to add NaN: " + m[2],3,"#ff0000")
            return new Decimal()
        }
        let neg = string.at(0) == "-";
        let e = (typeof m[1] == "string" ? m[1]: "") + (typeof m[2] == "string" ? "e" + m[2]: "" );
        if(e == "") return(new Decimal(Number( (neg ? "-" : "") + m[0]),0));
        if(m[2] == "" || m[2] == undefined) return(new Decimal(Number(m[0]),Number(m[1])));
        return new Decimal(Number(m[0]), Number(e));
    }

    static prase(string){
        let m = string.split("e")
        if(m == "") {
            notify("no input",3,"#ff0000")
            return new Decimal()
        }
        if(this.isNaN(Number(m[0]))) {
            notify("tryed to add NaN: " + m[0],3,"#ff0000")
            return new Decimal()
        }
        if(this.isNaN(Number(m[1])) && m[1] != undefined) {
            notify("tryed to add NaN: " + m[1],3,"#ff0000")
            return new Decimal()
        }
        if(this.isNaN(Number(m[2])) && m[2] != undefined) {
            notify("tryed to add NaN: " + m[2],3,"#ff0000")
            return new Decimal()
        }
        let e = (typeof m[1] == "string" ? m[1]: "") + (typeof m[2] == "string" ? "e" + m[2]: "" );
        if(e == "") return(new Decimal(Number(m[0]),0));
        if(m[2] == "" || m[2] == undefined) return(new Decimal(Number(m[0]),Number(m[1])));
        return new Decimal(Number(m[0]), Number(e));
    }

	mul(bn) {
        if (!(bn instanceof Decimal)) bn = new Decimal(bn)
		let m = this.m * bn.m;
		let e = this.e + bn.e;
        return new Decimal(m,e).fix();
	}

    static mul(Bn, bn) {
        if (!(bn instanceof Decimal)) bn = new Decimal(bn);
        if (!(bn instanceof Decimal)) Bn = new Decimal(Bn);
        let bignum = {
            m: Bn.m,
            e: Bn.e
        }
        let bignum2 = {
            m: bn.m,
            e: bn.e
        }
		bignum.m = bignum.m * bignum2.m;
		bignum.e = bignum.e + bignum2.e;
        return new Decimal(bignum);
	};

    div(bn) {
        if (!(bn instanceof Decimal)) bn = new Decimal(bn);
        if(bn.eq(0)) return this;
		let m = this.m / bn.m;
		let e = this.e - bn.e;
        return new Decimal(m,e).fix();
	};

    static div(Bn, bn) {
        if (!(bn instanceof Decimal)) bn = new Decimal(bn)
        if (!(bn instanceof Decimal)) Bn = new Decimal(Bn)
        let bignum = {
            m: Bn.m,
            e: Bn.e
        }
        let bignum2 = {
            m: bn.m,
            e: bn.e
        }
		bignum.m = bignum.m / bignum2.m;
		bignum.e = bignum.e - bignum2.e;
        return new Decimal(bignum);
	};

    add(bn) {
        if (!(bn instanceof Decimal)) bn = new Decimal(bn)
        let dif = bn.e - this.e;
        if(bn.m == 0) return this;
        if(dif > 15) {
            return new Decimal(bn.m, bn.e);
        }
        if (dif < -15){
            return this;
        }
        let m = this.m;
        m = m + (bn.m * (10 ** dif));
        return new Decimal(m,this.e).fix();
    }

    static add(Bn ,bn) {
        if (!(bn instanceof Decimal)) bn = new Decimal(bn)
        if (!(bn instanceof Decimal)) Bn = new Decimal(Bn)
        // so input doesn't get edited
        let bignum = {
            m: Bn.m,
            e: Bn.e
        }
        let bignum2 = {
            m: bn.m,
            e: bn.e
        }
        let dif = bignum2.e - bignum.e;
        if(dif > 15) {
            return new Decimal(bignum2);
        }
        if (dif < -15){
            return new Decimal(bignum);
        }
        bignum.m = bignum.m + (bignum2.m * (10 ** dif));
        return new Decimal(bignum);
    }
    
    sub(bn) {
        if (!(bn instanceof Decimal)) bn = new Decimal(bn)
        let dif = bn.e - this.e;
        if(dif > 15) {
            return new Decimal(-bn.m, bn.e);
        }
        if (dif < -15){
            return this.fix();
        }
        let m = this.m;
        m = m - (bn.m * (10 ** dif));
        return new Decimal(m,this.e).fix();
    }

    pow(bn = 1) {
        if(this.eq(0)) return this;
        if (!(bn instanceof Decimal)) bn = new Decimal(bn)

        let m = (bn.m * 10 ** bn.e)
        let e = (this.e + Math.log10(this.m)) * m;

        m = 10 ** (e % 1);
        e = Math.floor(e);
        return new Decimal(m,e).fix();
    }

    static pow(Bn, bn = 1) {
        if (!(bn instanceof Decimal)) Bn = new Decimal(Bn);
        if (!(bn instanceof Decimal)) bn = new Decimal(bn);
        // so input doesn't get edited
        let bignum = {
            m: Bn.m,
            e: Bn.e
        }
        let bignum2 = {
            m: bn.m,
            e: bn.e
        }
        let m = (bignum2.m * 10 ** bignum2.e)
        bignum.e = (bignum.e + Math.log10(bignum.m)) * m;

        bignum.m = 10 ** (bignum.e % 1);
        bignum.e = Math.floor(bignum.e);

        return new Decimal(bignum);
    }

    root(n = 2) {
        if (n instanceof Decimal) throw Error("use number not Decimal for root");

        return this.pow(1/n).fix();
    }
     
    static root(bn, n = 2) {
        if (n instanceof Decimal) throw Error("use number not Decimal for root");
        if(typeof bn == "number") bn = new Decimal(bn);
        let c = (bn.e + Math.log10(bn.m)) / n;
        return new Decimal(10 ** (c % 1),c);
    }

    log(n = 10) {
        if(this.lte(0)) return this;
        if (n instanceof Decimal) throw Error("use number not Decimal for log");
        if(n==0) console.warn("log used zero");
        if(this.e < 0) return new Decimal(0,0,false);
        let m = (this.e + Math.log10(this.m)) / Math.log10(n);
        return new Decimal(m, 0).fix();
    }

    static log(bn = new Decimal(1,1),n = 10) {
        if (n instanceof Decimal) throw Error("use number not Decimal for log");
        if(n==0) console.warn("log used zero");
        if(typeof bn == "number") bn = new Decimal(bn);
        // so input doesn't get edited
        let bignum = {
            m: bn.m,
            e: bn.e
        }
        if(bignum.e < 0) return new Decimal(0,0,false);

        bignum.m = (bignum.e + Math.log10(bignum.m)) / Math.log10(n);
        bignum.e = 0;

        return new Decimal (bignum);
    }

    neg(){
        return new Decimal(-this.m, this.e);
    }

    fix(){
        if(this.m == 0) return new Decimal(0,0,false);
        if ((Math.abs(this.m) >= 10 || (Math.abs(this.m) <= 1 && (Math.abs(this.m) != 0)) ) || this.e % 1 != 0) {
            this.e += Math.log10(Math.abs(this.m));
            this.m = 10 ** (this.e % 1);
            
            if (this.e < 0) this.e = Math.ceil(this.e);
            this.e = Math.floor(this.e);
        }

        if(this.gt(this.cap())) {
            this.m = this.cap().m;
            this.e = this.cap().e;
        }
        
        return this;
    }

    static fix(bn = new Decimal){

        if ( (Math.abs(bn.m) >= 10 || (Math.abs(bn.m) <= 1 && (Math.abs(bn.m) != 0))  ) || bn.e % 1 != 0) {
            bn.e += Math.log10(Math.abs(bn.m));
            bn.m = 10 ** (bn.e % 1);
            
            if (bn.e < 0) bn.e = Math.ceil(bn.e);
            bn.e = Math.floor(bn.e);
        }
        if(bn.e % 1 != 0){
            bn.e += Math.log10(Math.abs(bn.m));
            bn.m = 10 ** (bn.e % 1);
            
            if (bn.e < 0) bn.e = Math.ceil(bn.e);
            bn.e = Math.floor(bn.e);
        }

        return bn;
    }

    toString(min = 2, umin = 2) {
        if(this.e > 1e6){
            let m = this.m.toFixed(1).toString();
            let e = Math.log10(this.e);
            return "e" + (10 ** (e % 1) ).toFixed(umin).toString() + "E" + Math.floor(e).toString();
        }
        if (Math.abs(this.e) <= 6) return (this.m * 10 ** this.e).toFixed(min).toString()
        return this.round(2).toString() + "e" + this.e.toString();
    }

    round(r = 2){
        if (this.e > 5) return this.m.toFixed(r);
        if(this.m % 1 != 0) return Math.floor(this.m);
        return this.m.toFixed(this.e + r);
    }
    
    toFixed(r = 2){
        if (this.e > 5) return this.m.toFixed(r);
        if(this.m % 1 != 0) return Math.floor(this.m);
        return this.m.toFixed(this.e + r);
    }

    gt( bn = new Decimal){
        if (!(bn instanceof Decimal)) bn = new Decimal(bn)
        if(isNaN(this.m) || isNaN(this.e)) return false;
        if(this.e > bn.e) return true;
        if(this.e == bn.e){
            if(this.m > bn.m) return true;
        }
        return false;
    }

    static gt( be = new Decimal,  bn = new Decimal){
        if (!(bn instanceof Decimal)) bn = new Decimal(bn);
        if (!(be instanceof Decimal)) be = new Decimal(be);
        if(isNaN(be.m) || isNaN(be.e)) return false;
        if(be.e > bn.e) return true;
        if(be.e == bn.e){
            if(be.m > bn.m) return true;
        }
        return false;
    }

    lt( bn = new Decimal){
        if (!(bn instanceof Decimal)) bn = new Decimal(bn)
        if(isNaN(this.m) || isNaN(this.e)) return false;
        if(this.e < bn.e) return true;
        if(this.e == bn.e){
            if(this.m < bn.m) return true;
        }
        return false;
    }

    static lt( be = new Decimal,  bn = new Decimal){
        if (!(bn instanceof Decimal)) bn = new Decimal(bn);
        if (!(be instanceof Decimal)) be = new Decimal(be);
        if(isNaN(be.m) || isNaN(be.e)) return false;
        if(be.e < bn.e) return true;
        if(be.e == bn.e){
            if(be.m < bn.m) return true;
        }
        return false;
    }

    eq( bn = new Decimal){
        if (!(bn instanceof Decimal)) bn = new Decimal(bn)
        if(isNaN(this.m) || isNaN(this.e)) return false;
        if(this.e == bn.e && this.m == bn.m) return true;
        return false;
    }

    gte( bn = new Decimal){
        if (!(bn instanceof Decimal)) bn = new Decimal(bn)
        if(isNaN(this.m) || isNaN(this.e)) return false;
        if(this.e > bn.e) return true;
        if(this.e == bn.e){
            if(this.m > bn.m) return true;
        }
        if(this.e == bn.e && this.m == bn.m) return true;
        return false;
    }

    lte( bn = new Decimal){
        if (!(bn instanceof Decimal)) bn = new Decimal(bn)
        if(isNaN(this.m) || isNaN(this.e)) return false;
        if(this.e < bn.e) return true;
        if(this.e == bn.e){
            if(this.m < bn.m) return true;
        }
        if(this.e == bn.e && this.m == bn.m) return true;
        return false;
    }

    isNaN(){
        if(isNaN(this.m) || isNaN(this.e)) return true;
        return false;
    }

    static isNaN( bn = new Decimal){
        if (!(bn instanceof Decimal)) bn = new Decimal(bn);
        if(isNaN(bn.m) || isNaN(bn.e)) return true;
        return false;
    }

    isInfinity(){
        if(this.e = Infinity) return true;
        return false;
    }

    static min(l,r){
        if (typeof l === "number") l = new Decimal(l);
        if (typeof r === "number") r = new Decimal(r);
        if(l.gt(r)) return r;
        return l;
    }

    min(min){
        if (typeof min === "number") min = new Decimal(min);
        if(this.gt(min)) return min;
        return this;
    }

    static max(l,r){
        if (typeof l === "number") l = new Decimal(l);
        if (typeof r === "number") r = new Decimal(r);
        if(l.lt(r)) return r;
        return l;
    }

    max(max){
        if (typeof max === "number") max = new Decimal(max);
        if(this.lt(max)) return max;
        return this;
    }

    clamp(min = 1, max = 1){
        return new Decimal(this).max(max).min(min);
    }

    cap(){
        return new Decimal(1,1.79e308,false);
    }

    static cap(){
        return new Decimal(1,1.79e308,false);
    }

    get asNumber(){
        return Number(this.m.toString() + "e" + this.e.toString());
    }

    toNumber(){
        return Number(this.m.toString() + "e" + this.e.toString());
    }

    get MAX_VALUE(){
        return new Decimal(1,Number.MAX_VALUE);
    }
}
