//Assignment 1
// INSTALLED: Node.js,TypeScript & VS code

//Assignment 2
let yourName = "William";
console.log(`Hey ${yourName}! lets learn typescript together.`);

//Assignment 3
let myName = "ammara ghaffar";
// UPPERCASE
console.log("Uppercase:",myName.toUpperCase());
// lowercase
console.log("lowercase:",myName.toLowerCase());
// Title Case
console.log("TitleCase:",myName.replace(/\b\w/g,c=>c.toUpperCase()));


//Assignment 4
console.log("I have not failed.I've just found that 10000 ways that won't work.\n\t\t\t\t\t\t\t~Thomas Edison");

//Assignment 5
let famous_person = "Thomas Edison";
let message = `I have not failed.I've just found that 10000 ways that won't work.\n\t\t\t\t\t\t\t~${famous_person}`;
console.log(message);

//Assignment 6
let name = "\n\tKane Williamson\n  ";
console.log(name);
console.log(name.trim());

//Assignment 7&8
console.log(`The sum is: ${6+2}.`);
console.log(`The difference is: ${10-2}.`);
console.log(`The product is: ${4*2}.`);
console.log(`The quotient is: ${16/2}.`); 

//Assignment 9
let favNumber = 10;
console.log(`My favourite number is ${favNumber}.`);

//Assignment 10 Adding comments
//Author: [Bismah Ghaffar]
//Date: [29 March,2024]

//Task 7&8: Performing arithmetical operations
console.log(`The sum is: ${6+2}.`);
console.log(`The difference is: ${10-2}.`);
console.log(`The product is: ${4*2}.`);
console.log(`The quotient is: ${16/2}.`);

//Task 9: Revealing my favourite number
let favNumber = 10;
console.log(`My favourite number is ${favNumber}.`);

// Assignment 11
let Names = ["Hamzah","Alina","Eman","Rohan"];
console.log(Names[0]);
console.log(Names[1]);
console.log(Names[2]);
console.log(Names[3]);

// //Assignment 12
let Names = ["Hamzah","Alina","Eman","Rohan"];
console.log(`Heyy ${Names[0]}!! Hope you are doing fine.`);
console.log(`Heyy ${Names[1]}!! Hope you are doing fine.`);
console.log(`Heyy ${Names[2]}!! Hope you are doing fine.`);
console.log(`Heyy ${Names[3]}!! Hope you are doing fine.`);

//Assignment 13
let transport = ["motorcycle","Honda City","bike"];

const statement = (value:string) => {
    return "I would like to own a "+value+".\n";
}
let myWish = transport.map(statement).join("");
console.log(myWish);

//Assignment 14
let guestList = ["Aliyan","Zubair","Saira","Umair"];

const Invitation = (names:string) => {
    return `Dear ${names}, you can join me for dinner tonight.\n`;
}
let guestInvite = guestList.map(Invitation).join("");
console.log(guestInvite);

////Assignment 15
let guestList = ["Aliyan","Zubair","Saira","Umair"];

console.log(`Unfortunately, ${guestList[1]} won't be able to join us for dinner tonight.So Sahar will be joining instead.\n`);

guestList.splice(1,1,"Sahar");

const Invitation = (names) => {
    return `Dear ${names}, you can join me for dinner tonight.\n`;
}
let guestInvite = guestList.map(Invitation).join('');
console.log(guestInvite);

// Assignment 16
let guestList = ["Aliyan","Sahar","Saira","Umair"];

console.log(`Hey everybody! We have found a bigger dinner table so we are inviting three more guests.\n`);

guestList.unshift("Haadi");
guestList.splice(3,0,"Bismah");
guestList.push("Sufiyan");

const Invitation = (names) => {
    return `Dear ${names}, you can join me for dinner tonight.\n`;
}
let guestInvite = guestList.map(Invitation).join('');
console.log(guestInvite);

//Assignment 17

let guestList = ["Haadi","Aliyan","Sahar","Bismah","Saira","Umair","Sufiyan"];
console.log("Hey Guys!! since the dinner table is not going to be in time, we can only invite two people.");
for(let idx=6 ; idx>=2  ; idx-- ){
    console.log(`Dear ${guestList[idx]}, You are no longer invited to the dinner.`),
    guestList.splice(idx,1)
};
console.log(`But ${guestList[0]} & ${guestList[1]} luckily you guys are still invited to the dinner.`);

guestList.splice(0,2);
console.log("Empty Guestlist:",guestList);

//Assignment 18
let visitPlaces = ["Makkah","Skardu","Medina","Al-AqsaMosque","NaltarValley"];
//                      //without changing original list
//Alphabetical order:    
console.log("original:",visitPlaces);
console.log("Array In Alphabetical Order:",visitPlaces.toSorted());

//Reverse Alphabetical order:
console.log("original:",visitPlaces);
console.log("Array In Reverse Alphabetical Order:",visitPlaces.toSorted().toReversed());
//                      //with changing original list
//Reverse your List:
console.log("original:",visitPlaces);
console.log("Reverse order:",visitPlaces.reverse());
console.log("Reversed again to its original order:",visitPlaces.reverse());

//Sort to alphabetical order:
console.log("sort to alphabetical order:",visitPlaces.sort());

//sort to Reverse Alphabetical order:
console.log("Sort to Reverse Alphabetical order:",visitPlaces.sort((a,b) => b.localeCompare(a)));

//Assignment 19
let remainingGuests = ["Haadi","Aliyan"];
let message = `${remainingGuests.length} people are coming to the dinner.`
console.log(message);

//Assignment 20
let Rivers = ["Indus","Amazon","Nile","Mississippi","Volga","Mekong"];

console.log("This is a list of some famous Rivers of the world:");
let count = 0 ;
Rivers.forEach((val) => {
    count++;
    console.log(`${count}) ${val}`);
});

//Assignment 21

//student information
//Social media Profile
const studentInfo = {
    fullName : "Bismah",
    Group : "Commerce",
    class : 11,
    TotalMarks : 550,
    ObtainedMarks : 495
}
const Profile = {
    instaID : "@haleyBaylee",
    Followers : 1.6,   //Million
    Posts : 180,
    isFollow : true
}
console.log(studentInfo);
console.log(Profile);

//Assignment 22
let Name = ["Mustafa","Bismah","Iqra"];
console.log(Name{0});
console.log(Name[0]);

//Assignment 23

// test1
let year = 2024;
console.log("Is year == 2024 ? I predict True.");
console.log(year == 2024);

// test2
let oldAge = 17;
let newAge = oldAge+4;
console.log("Is newAge == 22? I predict False.");
console.log(newAge == 22);

// test3
let drink1 = "Hot Coffee";
let drink2 = "Cold Coffee";
let drink3 = "No Coffee";
let order = drink1 || (drink2 && drink3);
console.log(`What is the order going to be? I guess ${drink1} is True.`);
console.log(order == drink1);

// test4
let allowedDay = "Friday"; 
let cardDay = "Thursday";
console.log("Are you allowed to enter? I guess False.");
console.log(allowedDay == cardDay);

// test5
let car = "Audi";
console.log("Is car == 'subaru'? I predict False.");
console.log(car == "subaru");

// test6
console.log("Is car.length != 5? I predict True");
console.log(car.length != 5);

//test7
let age = 4;
++age;
console.log("Is age == 5? I predict True");
console.log(age == 5);

//test8
let EngMarks = 90;
console.log("Is typeof EngMarks == 'number'? I predict True");
console.log(typeof EngMarks == "number");

//test9
console.log("Is 67 >= 87 ? I guess False");
console.log(67 >= 87);

//test10
let isHappy = "true";
console.log("Is typeof isHappy == 'boolean'? I predict False");
console.log(typeof isHappy == "boolean");

//Assignment 24

// Test for equality and inequality with strings:
let NAME = "williamson";
console.log("Is NAME equal to williamson?");
console.log(NAME == "williamson");

console.log("\nIs NAME Not equal to williamson?");
console.log(NAME != "williamson");

//Tests using lowercase function:
let Fruit = "ORANGE";
console.log("\nIs ORANGE equal to orange after converting to lowercase?");
console.log(Fruit.toLowerCase() == "orange");

console.log("\nIs ORANGE NOT equal to orange after converting to lowercase?");
console.log(Fruit.toLowerCase() != "orange");

//Numerical test using ==, !=, >, <, >=, & <= :
console.log("Is 23 equal to 23?");
console.log(23 == 23);
console.log("Is 23 NOT equal to 23?");
console.log(23 != 23);

console.log("\nIs 46 greater than 36?");
console.log(46 > 36);
console.log("Is 46 less than 36?");
console.log(46 < 36);

console.log("\nIs 36 greater than or equal to 36?");
console.log(36 >= 36);
console.log("Is 46 less than or equal to 36?");
console.log(46 <= 36);

//Tests using:
//AND
let ten = 10;
let twenty = 20;
console.log("twenty is greater than ten and twenty is not equal to ten.");
console.log( twenty>ten && twenty!=ten );

console.log("\ntwenty is not greater than ten and twenty is not equal to ten.");
console.log( twenty<ten && twenty!=ten );

//OR
console.log("twenty is greater than ten and twenty is equal to ten.");
console.log( twenty>ten || twenty==ten );

console.log("\ntwenty is not greater than ten and twenty is equal to ten.");
console.log( twenty<ten || twenty==ten );

//Test if an item is in an array:
let cities = ["Karachi","Lahore","Islamabad","Multan"];
console.log("Is a city named Karachi present in cities array?");
console.log(cities.includes("Karachi"));

//Test if an item is NOT in an array:
console.log("\nIs a city named Karachi NOT present in cities array?");
console.log(!cities.includes("Karachi"));

//Assignment 25
let alien_color = "Green";

if( alien_color == "Green") {
    console.log("Player just earned 5 points.")
};
if( alien_color != "Green") {
    console.log("No Output")
};

//Assignment 26
let alien_color = "Green";

// First Version
if( alien_color == "Green") {
    console.log("Player just earned 5 points.")
} else {
    console.log("Player just earned 10 points.")
};

//Second Version

if( alien_color == "Blue") {
    console.log("Alien is blue")
} else {
    console.log("Alien is of other color.")
};

//Assignment 27

//Version1:
let alien_color = "Green";
if(alien_color == "Green") {
    console.log("Player earned 5 points.")
} else if (alien_color == "Yellow") {
    console.log("Player earned 10 points.")
} else if (alien_color == "Red"){
    console.log("Player earned 15 points.")
};

// //Version2:
let alienColor = "Yellow";
if(alienColor == "Green") {
    console.log("Player earned 5 points.")
} else if (alienColor == "Yellow") {
    console.log("Player earned 10 points.")
} else if (alienColor == "Red"){
    console.log("Player earned 15 points.")
};

// //Version3:
let AlienColor = "Red";
if(AlienColor== "Green") {
    console.log("Player earned 5 points.")
} else if (AlienColor == "Yellow") {
    console.log("Player earned 10 points.")
} else if (AlienColor == "Red"){
    console.log("Player earned 15 points.")
};

//Assignment 28
let personAge = 23;

if (personAge<2) {
    console.log("the person is a baby.")
} 
else if(personAge>=2 && personAge<4) {
    console.log("the person is a toddler.")
} 
else if(personAge>=4 && personAge<13) {
    console.log("the person is a kid.")
} 
else if(personAge>=13 && personAge<20) {
    console.log("the person is a teenager.")
}
else if(personAge>=20 && personAge<65) {
    console.log("the person is an adult.")
}
else if(personAge>=65) {
    console.log("the person is an elder.")
};

//Assignment 29
let favFruits = ["apple","orange","mango"];

if(favFruits.includes("orange")) {
    console.log("I really like Oranges!")
};
if(favFruits.includes("strawberry")) {
    console.log("I really like strawberries!")
};
if(favFruits.includes("apple")) {
    console.log("I really like Apples!")
};
if(favFruits.includes("mango")) {
    console.log("I really like Mangos!")
};
if(favFruits.includes("blue-berry")) {
    console.log("I really like blue-berries!")
};

//Assignment 30
let userName = ["its.Bismah","XxIqrzxX","Admin","Mrs.L","Shan_hassan"];

userName.forEach((value) => {
    if(value === "Admin"){
        console.log(`Hello ${value}, would you like to see a status report?`)
    }else{
        console.log(`Hello ${value}, thank you for logging in again.`)
    }
});

//Assignment 31
let username = [];
if(username.length == 0) {
    console.log("We need to find some users!")
};

//Assignment 32
let current_users = ["Bismah","_.WILLIAM._","XxNoorxX","haleybaylee","Mrs.L","ShanMasood"];
let new_users = ["XxNoorxX","aliAkbar","SHANMASOOD","Riddah","_.William._","SaimAyyub"];

new_users.forEach((newuser) =>{
    let ourCondition = current_users.some(oldUser => oldUser.toLowerCase() === newuser.toLowerCase())
    if(ourCondition){
        console.log(`Username ${newuser} already exists. You will need to enter a new username.`)
    }else{
        console.log(`Username ${newuser} is available.`)
    }
});

//Assignment 33
let ordinalNumbers = [1,2,3,4,5,6,7,8,9];

ordinalNumbers.forEach((value) => {
    if( value===1 ){
        console.log(`${value}st`);
    } else if( value===2 ){
        console.log(`${value}nd`);
    } else if( value===3 ){
        console.log(`${value}rd`);
    } else if( value>3 ){
        console.log(`${value}th`);
    } 
});

//Assignment 34
let fav_pizza = ["pepperoni pizza","chicken tikka pizza","hawaiian pizza","fajita pizza"]

for(let onePizza of fav_pizza){
    console.log(`I like ${onePizza}`);
};
console.log(`These are some of my favourite flavours of pizzas which I can eat almost everyday.Because I really like pizzas!`);

//Assignment 35
let animals = ["cat","rabbit","dog"];
for(let animal of animals){
    console.log(`A ${animal} is a loving animal.`)
}
console.log("Any of these animals would make a great pet!")

//Assignment 36
function make_Shirt(size : string , printedText : string) {
    console.log(`The size you selected is ${size} & the T-shirt says '${printedText}'`);
};
make_Shirt("medium(6)","Not a MORNING person!");

//Assignment 37
function make_Shirts(size : string = "Large", printedText:string = "I love Typescript") {
    console.log(`Creating a ${size} size shirt & it says '${printedText}'`);
};
//Calling a function with by default values.
make_Shirts();
//Calling a function with medium size & default message.
make_Shirts("Medium");
//Calling a function with small size & a different  message.
make_Shirts("Small","Smile its sunnah :)");

//Assignment 38
function describe_city(city:string , country:string = "Pakistan") {
    console.log(`${city} is in ${country}.`)
};
//Calling function for cities in the default country.
describe_city("Karachi");
describe_city("Islamabad");

//Calling function for a city not in the default country.
describe_city("Tokyo","Japan");

//Assignment 39
function city_country(city:string, country:string){
    return `"${city},${country}"`;
}
console.log(city_country("Lahore","Pakistan"));
console.log(city_country("Rome","Italy"));
console.log(city_country("Berlin","Germany"));

//Assignment 40
function music_album(Name:string, Title:string, No_ofTracks?:number) {
    const Album : {Artist_Name:string, Album_Title:string, Tracks?:number} = {
        Artist_Name : Name,
        Album_Title : Title
    };
    if(No_ofTracks !== undefined){
        Album.Tracks = No_ofTracks;
    };
    return Album;
};
console.log(music_album("Lana Del Rey","Blue banisters"));
console.log(music_album("Lana Del Rey","Lust for life"));
console.log(music_album("Lana Del Rey","Born to die",12));

//Assignment 41
let magicians = ["Harry Houdini","David Copperfield","David Blaine"]
function show_magicians(magicians:string[]) {
        magicians.forEach((val) => {
            console.log(val)
        });
    };
show_magicians(magicians);

//Assignment 42
let magicians = ["Harry Houdini","David Copperfield","David Blaine"]; //original array

// function that modifies the array of magicians:
function make_Great(magic:string[]){
   return magic.map((val) => {
    return `The Great ${val}`;
   });
};
let Great = make_Great(magicians);

show_magicians(Great);

//Assignment 43

let magicians = ["Harry Houdini","David Copperfield","David Blaine"];
//copy of magician array
let copy_magicians = magicians.slice();

// // // Call make_great() with copy of magician array:
let CopyGreatmagician = make_Great(copy_magicians);   

show_magicians(magicians);
show_magicians(CopyGreatmagician); 

//Assignment 44

function sandwichOrder (...itemsInSandwich:string[]) {
    console.log(`\nMaking you a delicious sandwich with the following items:\n`);
    itemsInSandwich.forEach((singleItem) => {console.log(`* ${singleItem}`)});
    console.log(`\nHere you go! your sandwich is ready.`);
};
sandwichOrder("Chicken","salad leaf","cucumber","tomato","mayonnaise");
sandwichOrder("Bread","Cheese","Dijon mustard");
sandwichOrder("Bread","Mint chutney","Kebab");

//Assignment 45

interface carobj {
    [index:string]:string,
}

function Car(manufacturer:string, model:string, ...options:string[]){
    const carInfo : carobj = {
        Manufacturer : manufacturer,
        Model : model,
    };
    options.forEach((singleOption) => {
        let [key,value] = singleOption.split(":");
        carInfo[key.trim()]= value.trim();
    });
    return carInfo;
}
console.log(Car("Toyota","Corrolla","Color:Grey","EngineCapacity:1500cc","Sunroof:True"));