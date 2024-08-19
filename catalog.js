
const catalogdata = [
    {
        version: "1.0.0",
        who: "_--Daniel_2--_",
        what: `The start. You can't do anything with infinities yet.
        The graphics are fine though.`,
    },
    {
        version: "v1.0.1",
        who: "anUsername0101",
        what: `Added a multiplier when you get infinities.`,
    },
    {
        version: "v1.0.2",
        who: "KTTReloaded",
        what: `Changed the backdrop a little and a clicking sound.`,
    },
    {
        version: "v1.0.3",
        who: "_--Daniel_2--_",
        what: `Added an upgrade and it replaces the multiplier.`,
    },
    {
        version: "v1.1.0",
        who: "_--Daniel_2--_",
        what: `Some changes the the previous update as well as a 2nd upgrade and a better upgrade system.`,
    },
    {
        version: "v1.2.0",
        who: "@088123665",
        what: `2 new upgrades and fixed infinity upgrade bugs.`,
    },
    {
        version: "v1.3.0",
        who: "_--Daniel_2--_",
        what: `YOU MADE IT WORSE @088123665
            I HAD TO REVERT EVERYTHING BACK
            Also a new upgrade.`,
    },
    {
        version: "v1.3.1",
        who: "_--Daniel_2--_",
        what: `Fixed a bug with the upgrades.`,
    },
    {
        version: "v1.3.2",
        who: "_--Daniel_2--_",
        what: `Some other stuff changed because well @088123665.`,
    },
    {
        version: "v1.3.3",
        who: "Caden00",
        what: `Decoupled the background from the stage for when we get another layer.`,
    },
    {
        version: "v1.3.4",
        who: "Caden00",
        what: `Added another upgrade but it's nothing to write home about.`,
    },
    {
        version: "v1.3.5",
        who: "Caden00",
        what: `Prevented upgrading when the upgrade is already bought.`,
    },
    {
        version: "v1.4.0",
        who: "_--Daniel--2_",
        what: `No new upgrades, but the last upgrade was changed,
            and you can now scroll through upgrades.`,
    },
    {
        version: "v1.4.1",
        who: "Caden00",
        what: `Turned pages into arrows and made it scroll good.`,
    },
    {
        version: "v1.4.2",
        who: "_--Daniel_2--_",
        what: `Made it scroll even better.`,
    },
    {
        version: "v1.5.0",
        who: "Caden00",
        what: `Made it scroll the best, added 2 more upgrades,
            improved the initial loading and converted Multiply to log.`,
    },
    {
        version: "v1.6.0",
        who: "_--Daniel_2--_",
        what: `Improved the eternity background,
            made it scroll bester, abbreviated the multiply,
            deleted an upgrade, and replaced it with a new one.`,
    },
    {
        version: "v1.6.1",
        who: "_--Daniel_2--_",
        what: `Fixed a bug where you can't access the new upgrade.`,
    },
    {
        version: "v1.6.2",
        who: "Caden00",
        what: `Made it so the next layer can be scrolled too.`,
    },
    {
        version: "v1.6.3",
        who: "Caden00",
        what: `Yet another upgrade.`,
    },
    {
        version: "v1.7.0",
        who: "_--Daniel_2--_",
        what: `Deleted the previous upgrade (you can't do 60 fps!) but added 3 more.`,
    },
    {
        version: "v1.7.1",
        who: "Caden00",
        what: `Fixed a bug that prevented you from getting infinities. (pretty big one)`,
    },
    {
        version: "v1.7.2",
        who: "Caden00",
        what: `Improved handling of upgrades and stuff.`,
    },
    {
        version: "v1.7.3",
        who: "_--Daniel_2--_",
        what: `Some unimportant modifications.`,
    },
    {
        version: "v1.7.4",
        who: "Caden00",
        what: `Added a cool new upgrade.`,
    },
    {
        version: "v1.8.0",
        who: "_--Daniel_2--_",
        what: `Deleted that upgrade because it was bad, 
            but added 3 new epic upgrades! Also, the skip only triggers for me and @Caden00.
            Other peeps can enjoy the whole game`,
    },
    {
        version: "v1.9.0",
        who: "Caden00",
        what: `Added an upgrade that allows you to break infinity.`,
    },
    {
        version: "v2.0.0",
        who: "_--Daniel_2--_",
        what: `A bit too much to say. GO check it out yourself.`,
    },
    {
        version: "v2.0.1",
        who: "_--Daniel_2--_",
        what: `Fixed a scrolling issue.`,
    },
    {
        version: "v2.0.2",
        who: "_--Daniel_2--_",
        what: `Set eternities to 0 when start.`,
    },
    {
        version: "v2.0.3",
        who: "@088123665",
        what: `New eternity upgrade, and changed the thumbnail.`,
    },
    {
        version: "v2.0.4",
        who: "_--Daniel_2--_",
        what: `The update wasn't entirely bad,
            but I had to revert the thumbnail. I didn't have to delete the upgrade,
            I just fixed it. Also another bug fix with the scroll again.`,
    },
    {
        version: "v2.1.1 ",
        who: "hooney1006",
        what: `boosted early game(start with 10 infinity,
            upgrade cheaper, upgrade boost click power are better,
            12th upgrade make infinity.req e40 instead e50) and added 1 eternity upgrade.`,
    },
    {
         version: "v2.1.2",
         who: "anusername0101",
         what: `Removed the starter infinities because you know why.`,
    },
    {
        version: "v2.1.3",
        who: "hooney1006",
        what: `removed the start infinities again,
            increased the click upgrade cost and decreased the other upgrade cost,
            removed the music`,
    },
    {
        version: "v2.1.4",
        who: "anUsername0101",
        what: `Fixed everything boring/bad from the previous update
            and added an eternity upgrade`,
    },
    {
        version: "v2.1.5",
        who: "hooney1006",
        what: `added an eternity upgrade
            and 5th/6th eternity upgrade are better (5x > 10x/11x),
            6th upgrade cost increased
            endgame: 7 eternity upgrade`,
    },
    {
        version: "V2.1.6",
        who: "KTTReloaded",
        what: `added some stuff like the bounce thing, design update`,
    },
    {
        version: "v2.1.7",
        who: "hooney1006",
        what: `cheapened infinity upgrade and added 2 eternity upgrade
            (so there are 9 eternity upgrade)`,
    },
    {
        version: "v2.1.8",
        who: "hooney1006",
        what: `changed last eternity upgrade(sorry vincenti, but it has no effect (or I can't find))
            and added another eternity upgrade, readded start infinities`,
    },
    {
        version: "V2.1.9",
        who: "vincentl10",
        what: `New Page And New Upgrade`,
    },
    {
        version: "v2.2.0",
        who: "hooney1006(finally)",
        what: `added new layer(currently only 1 upgrade and very buggy)`,
    },
    {
        version: "v2.3.0",
        who: "BCMGF1137",
        what: `When you can get infinity infinities, the button changes to Eternity
            Added more songs!
            Renamed "Quantum" to "Reality" because that's how prestige layers work
            Added a required button to enter the Reality stage`,
    },
    {
        version: "v2.3.2",
        who: "Califf",
        what: `readded the starting 10 infinities and improved thumb a little`,
    },
    {
        version: "v3.0.0",
        who: "glitchyfishys",
        what: `only one upgrade sprite(per upgrade), more upgrades(reality), 
            reality is the longest(so far), less starting infinitys but the mult is higher
            and start with auto clicker at 1/s, small changes,
            universal upgrades(bottom button), new layer immensity and
            the immensity-est scrolling`,
    },
    {
        version: "v3.0.1",
        who: "hooney1006",
        what: `made reality multipliers work (due of this, i changed some upgrades effect)
            also if you missed time to buy universal upgrade, you wont miss it now
            (you can now buy universal upgrade even you gone too far and that
            currency disappeared)
            also new upgrades`,
    },
    {
        version: "v3.0.2",
        who: "randomnerdremixer",
        what: `added 2 new immensity upgrades`,
    },
    {
        version: "V3.1.0",
        who: "glitchyfishys",
        what: `changed infinity layer a bit and eternity and reality a lot, make it to infinity IP/EP/RP, glyphs,
            max button, reset upgrades instead of removing them, auto clicker is an upgrade,
            switch between tabs after infinitys, eternitys, realitys and immensity.
            infinity, eternity, reality and immensity aren't fully automatic anymore,
            break IP,EP. universal upgrades affect the number multiplier.
            universal upgrades are automatically brought on Eternities, Realites and immensities.
            fast scroll <hold space>, glyphs added to reality. instant start up. remove glyphs by <space+click>
            auto buy button (need auto buy upgrades to work)
            volume <space to decease>,
            a button to change the song.
            a blackhole that speeds up the game (best for auto production)
            immensity upgrades need to be unlocked to buy them,
            <hold space to see requirements>
            new songs!
            other small changes

            there is a very basic save system

            first eternity time: eta 25-30 minutes
            first reality time: eta 4.5 hours
            first immensity time: eta > 20 hours
            (don't completly know the times yet)`,
    },
    {
        version: "V3.1.1",
        who: "glitchyfishys",
        what: `added break infinity, it also fixed dome bugs
            auto points gain is incresed by gamespeed
            left and right arrows move tabs, up and down open the uni upgrades
            fixed turbo mode breaking auto clicker`,
    },
    {
        version: "V3.1.1 web",
        who: "glitchyfishys",
        what: `converted the game to web, with small changes `,
    },
]

/* 
    {
         version: "",
         who: "",
         what: ``,
     },
*/ 
function loadcatalog(){
    catalogdata.reverse().forEach(log => addtocatalog(log));
    
    // redactify, dont do any twice capitalisation is important
    catalog.innerHTML = catalog.innerHTML.replaceAll("eternity", "<span id='redact' class='redact'>eternity</span>");
    catalog.innerHTML = catalog.innerHTML.replaceAll("Eternity", "<span id='redact' class='redact'>Eternity</span>");
    catalog.innerHTML = catalog.innerHTML.replaceAll("reality", "<span id='redact' class='redact'>reality</span>");
    catalog.innerHTML = catalog.innerHTML.replaceAll("Reality", "<span id='redact' class='redact'>Reality</span>");
    catalog.innerHTML = catalog.innerHTML.replaceAll("Quantum", "<span id='redact' class='redact'>Quantum</span>");
    catalog.innerHTML = catalog.innerHTML.replaceAll("immensity", "<span id='redact' class='redact'>immensity</span>");
    catalog.innerHTML = catalog.innerHTML.replaceAll("Immensity", "<span id='redact' class='redact'>Immensity</span>");

    catalog.innerHTML = catalog.innerHTML.replaceAll("IP", "<span id='redact' class='redact'>IP</span>");
    catalog.innerHTML = catalog.innerHTML.replaceAll("EP", "<span id='redact' class='redact'>EP</span>");
    catalog.innerHTML = catalog.innerHTML.replaceAll("RP", "<span id='redact' class='redact'>RP</span>");
    catalog.innerHTML = catalog.innerHTML.replaceAll("IM", "<span id='redact' class='redact'>IM</span>");

    catalog.innerHTML = catalog.innerHTML.replaceAll("glyphs", "<span id='redact' class='redact'>glyphs</span>");
    catalog.innerHTML = catalog.innerHTML.replaceAll("Glyphs", "<span id='redact' class='redact'>Glyphs</span>");


}

function addtocatalog(data){
    catalog.innerHTML += data.version + " by " + data.who + "<br>" + data.what.replaceAll("\n", "<br>") + "<br><br>";
}

