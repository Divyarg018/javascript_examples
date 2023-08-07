// let balajiBath = function() {
//     console.log(`\nBalji woke up`);
//     console.log(`Balji is Bathing`);
//     console.log(`Balji is Ready`);
// }

// let kishanBath = function() {
//     console.log(`\nKishan woke up`);
//     console.log(`Kishan is Bathing`);
//     console.log(`Kishan is Ready`);
// }

// balajiBath();
// kishanBath();

// kishanBath();
// balajiBath();


// let balajiBath = function () {
//     console.log(`\nBalji woke up`);
//     console.log(`Balji is Bathing`);
//     console.log(`Balji is Ready`);
// }

// let kishanBath = function () {
//     setTimeout(() => { console.log(`\nKishan woke up`) }, 2000);
//     setTimeout(() => { console.log(`Kishan is Bathing`) }, 3000);
//     setTimeout(() => { console.log(`Kishan is Ready`) }, 5000);
// }

// kishanBath();
// setTimeout(balajiBath, 7000);




// let balajiBath = function () {
//     console.log(`\nBalji woke up`);
//     console.log(`Balji is Bathing`);
//     console.log(`Balji is Ready`);
// }

// let kishanBath = function (signalHim) {
//     setTimeout(() => { console.log(`\nKishan woke up`) }, 2000);
//     setTimeout(() => { console.log(`Kishan is Bathing`) }, 3000);
//     setTimeout(() => { console.log(`Kishan is Ready`) }, 5000);
// }

// setTimeout(signalHim, 7000);

// kishanBath(balajiBath);// previously balaji taking bath was optional

/* why call back fucntion?

1.Js is an event driven language.
2.Instaed of waiting for a response from a pending event, before movong on,js will keep ececuting other events.
3.In the meantime js will keeo watch on previous pending events, and will ec=xecute the same at an appropriate time.

taht si why: call back functions are a way to make sure certain code doesnt execute until other has already finished execution.(programmers juagad)

In Ashynchronous programing language like js: callBack functions are absolute necessity*/


const profiles ={
    'balaji': {
        fullname: 'Balaji KR',
        age: 35,
        married: true,
        hobbies: ['Defence', 'Finance', 'Foreign Affairs']
    },

    'seema': {
        fullname: 'Seema H',
        age: 30,
        married: true,
        hobbies: ['Cooking', 'Painting', 'Art & Craft']
    },

    'kishan': {
        fullname: 'Kishan KB',
        age: 3,
        married: false,
        hobbies: ['football', 'video games']
    },

    'rajeev': {
        fullname: 'Rajeevalochana KV',
        age: 70,
        married: true,
        hobbies: ['watching Tv']
    }

}

/* Requirement:
1) Display keys of all profiles after 2 seconds.
2) Display profile of kishan agter 3 seconds(from one).
3) Display kishan's age after 2 seconds(from two).
4) Display kishan's hobbies after 4 seconds(from three). 
*/

function goToHell(pros) {
    setTimeout((objs) => {
        let keys = Object.keys(objs);
        console.log(keys);

        setTimeout((key,objs) => {
            console.log(objs[key]);
            setTimeout((sub) => {
                console.log(`Age of Kishan is: ${sub.age}`);
                setTimeout((sub)=> {
                    console.log(`Hobbies of Kishan are: ${sub.hobbies}`)
                }, 4000, sub);
            }, 2000, objs[`kishan`]);
        }, 3000, 'kishan', objs)
    }, 2000, pros);
}

goToHell(profiles);