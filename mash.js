let homes = ["Mansion", "Apartment", "Shack", "House", "McDonalds trashcan", "Bunch of Plastic Bags", "Paper Dollhouse"];
let cars = ["Jet", "Supercar", "Convertible", "Box with wheels", "Uncomfortably Large Skateboard", "Bag with friction-free Underside"];
let deaths = ["Eating a poisonous potato", "Getting struck by lightning", "Getting impaled by a rusted beam", "Getting eaten by a zombie", "Getting blown up by a creeper", "Getting headshot", "Meeting with the devil and selling your soul for something cheap. Ain't that a doozy?", "...actually you'll never die. Forget about this."];

function mash()
{
    console.log(""
    +"\nYou will live in a " + getHome() + ", and you will have " + getChildrenCount() + " kids!"
    +"\nYou’ll drive a " + getCar()
    +"\nYou'll die in " + getDeathAge()
    +"\nYou are a " + getJob()

    +"\n\nYour stats: "
    +"\nStrength: " + getStats("Strength")
    +"\nSpeed: " + getStats("Speed")
    +"\nCharisma: " + getStats("Charisma")
    +"\nIntelligence: " + getStats("Intelligence")
    +"\nDexterity: " + getStats("Dexterity")
    +"\nMorals: " + getStats("Morals")
    );

}

function randomizerArray(array)
{
    return Math.floor(Math.random() * array.length);
}
function getHome()
{
    // if(process.argv[2] != undefined)  //checks for if the user left the input empty also need to check the type
    // {
    //     arr.push(process.argv[2]);
    // }
    let index = randomizerArray(homes);
    return homes[index];
}
function getChildrenCount()
{
    let num = 0;
    if(process.argv[3] != undefined)
    {
        if(Math.random() > 0.5) // 50/50 chance of either 0-100 or user preference
        {
            num = Math.round(Math.random()*100);
        }
        else
        {
            num = process.argv[3];
        }
    }
    else
    {
        num = Math.round(Math.random()*100);
    }

    return num;
}
function getCar()
{
    // if(process.argv[3] != undefined)
    // {
    //     arr.push(process.argv[3]);
    // }
    let index = randomizerArray(cars);
    let str = cars[index];
    return str;
}
function getDeathAge()
{
    let deathAge = Math.round( (Math.random()*100) * ((Math.random()*10)) );
    let deathReason = deaths[randomizerArray(deaths)];
    return deathAge + " years" + " because you'll be " + deathReason;
}
function getJob()
{
    let job1 = ["Earth", "Paper", "Plastic", "Molecules", "Plant", "Fire", "Gas", "Fabric", "Nanotechnology", "Blood", "Life", "Apocalypse", "Waste", "Lego", "Poultry", "Questionable", "Universe", "Darkness", "Storm"];
    let job2 = ["Maker", "Builder", "Designer", "Eater", "Destroyer", "Moderator", "Stealer", "Manipulator", "Knight", "Healer", "Musician", "Commander", "Warrior", "Thaumaturgist", "Paladin"];

    return job2[ randomizerArray(job2) ] + " of " + job1[ randomizerArray(job1) ];
}
function getStats(stat) //this shoud be a string
{
    let statNum = Math.round( Math.random()*6 );
    let str = " ";
    if(stat == "Strength")
    {
        if(statNum > 5)
        {
            str = Math.random() > 0.5 ? "You have stronk" : "Your arms should legally be banned for being weapons";
        }
        else if(statNum > 2)
        {
            str = Math.random() > 0.5 ? "You are neither weak or strong" : "You think you can do better.";
        }
        else if(statNum > 0)
        {
            str = Math.random() > 0.5 ? "You are weak" : "Not impressive";
        }
        else
        {
            str = Math.random() > 0.5 ? "You have no strength, not even a tiny bit" : "You can barely even lift your own arm";
        }
    }
    if(stat == "Speed")
    {
        if(statNum > 5)
        {
            str = Math.random() > 0.5 ? "You are speed" : "S A N I C";
        }
        else if(statNum > 2)
        {
            str = Math.random() > 0.5 ? "Speed demon" : "You are quite fast";
        }
        else if(statNum > 0)
        {
            str = Math.random() > 0.5 ? "You are slow" : "Not that fast but okay-ish speed";
        }
        else
        {
            str = Math.random() > 0.5 ? "You are slower than a rock" : "Couch-potato, bet";
        }
    }
    if(stat == "Charisma")
    {
        if(statNum > 5)
        {
            str = Math.random() > 0.5 ? "You can talk people to walk over cliff" : "People have a good time around you, and you can have infinite allies!";
        }
        else if(statNum > 2)
        {
            str = Math.random() > 0.5 ? "Better make a business out of it!" : "You are quite talkative";
        }
        else if(statNum > 0)
        {
            str = Math.random() > 0.5 ? "You have no communication skills" : "Good talk. Bye";
        }
        else
        {
            str = Math.random() > 0.5 ? "What are you, a hermit?" : "Might as well be labelled as disabled";
        }
    }
    if(stat == "Intelligence")
    {
        if(statNum > 5)
        {
            str = Math.random() > 0.5 ? "You know everything! You have discovered all the secrets of the universe!" : "Your resolve is very high and can help you solve any problem!";
        }
        else if(statNum > 2)
        {
            str = Math.random() > 0.5 ? "You are quick witted" : "You are very smart!";
        }
        else if(statNum > 0)
        {
            str = Math.random() > 0.5 ? "You can't think of smart things, so you join the normies club and be part of the herd" : "Might take time to understand this for you.";
        }
        else
        {
            str = Math.random() > 0.5 ? "Jellyfish brain" : "blank";
        }
    }
    if(stat == "Dexterity")
    {
        if(statNum > 5)
        {
            str = Math.random() > 0.5 ? "Your skills will let you conquer the world!" : "You are skilled with every weapon and tool!";
        }
        else if(statNum > 2)
        {
            str = Math.random() > 0.5 ? "You are adept at many things!" : "You are very good at things you like.";
        }
        else if(statNum > 0)
        {
            str = Math.random() > 0.5 ? "Your motor skills are defective, and you need therapy." : "You ain't the sharpest tool in the shed...";
        }
        else
        {
            str = Math.random() > 0.5 ? "You shouldn't be able to type." : "You can't handle anything of the slightest of difficulty.";
        }
    }
    if(stat == "Morals")
    {
        if(statNum > 5)
        {
            str = Math.random() > 0.5 ? "Everyone likes you for your great character!" : "You can't be hated.";
        }
        else if(statNum > 2)
        {
            str = Math.random() > 0.5 ? "You always believe in yourself and others." : "You are good person.";
        }
        else if(statNum > 0)
        {
            str = Math.random() > 0.5 ? "You are not worthy." : "You are quite despicable but not evil.";
        }
        else
        {
            str = Math.random() > 0.5 ? "People abhor you, and you abhor them back." : "You are basically the devil incarnate.";
        }
    }
    
    return statNum + " - " + str;
}

// mash();

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What do you want to live in? (You can input only 1 names, anything other than strings will be ignored)", (answer) => {
    if(typeof answer == string)
    {
        homes.push(answer);
    }
    else console.log("You have failed to fulfill the criteria of answering this question. Your input will not be registered");

    rl.close(); 
});
rl.question("What do you want to live in? (You can input only 1 names, anything other than strings will be ignored)", (answer) => {
    if(typeof answer == string)
    {
        homes.push(answer);
    }
    else console.log("You have failed to fulfill the criteria of answering this question. Your input will not be registered");
    
    rl.close(); 
});