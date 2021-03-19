// const snorlaxData = {
//     stats: [
//       {
//         stat: {
//           url: "https://pokeapi.co/api/v2/stat/6/",
//           name: "speed",
//         },
//         effort: 5,
//         baseStat: 30,
//       },
//       {
//         stat: {
//           url: "https://pokeapi.co/api/v2/stat/5/",
//           name: "special-defense",
//         },
//         effort: 2,
//         baseStat: 110,
//       },
//       {
//         stat: {
//           url: "https://pokeapi.co/api/v2/stat/4/",
//           name: "special-attack",
//         },
//         effort: 9,
//         baseStat: 65,
//       },
//     ],
//     name: "snorlax",
//     weight: 4600,
//   };
  

//   const extractStat = (statName, arr) => {
//       if (statName===snorlaxData.) {
          
//       } else {
          
//       }
//   };


//   =====================
// 2
// const characters = [
//     {
//       name: "Eddard",
//       spouse: "Catelyn",
//       children: ["Robb", "Sansa", "Arya", "Bran", "Rickon"],
//       house: "Stark",
//     },
//     {
//       name: "Jon",
//       spouse: "Lysa",
//       children: ["Robin"],
//       house: "Arryn",
//     },
//     {
//       name: "Cersei",
//       spouse: "Robert",
//       children: ["Joffrey", "Myrcella", "Tommen"],
//       house: "Lannister",
//     },
//     {
//       name: "Daenarys",
//       spouse: "Khal Drogo",
//       children: ["Drogon", "Rhaegal", "Viserion"],
//       house: "Targaryen",
//     },
//     {
//       name: "Mace",
//       spouse: "Alerie",
//       children: ["Margaery", "Loras"],
//       house: "Tyrell",
//     },
//     {
//       name: "Sansa",
//       spouse: "Tyrion",
//       house: "Stark",
//     },
//     {
//       name: "Jon",
//       spouse: null,
//       house: "Snow",
//     },
//   ];


//   const countNumberOfChildren = function(arr){
// for(i=0, i<arr.length;i++) {
//     const element = arr[index];
//     let aa =element++

// }
// return aa
// };


// const extractChildren = function(arr){
// let a = characters[0]+1
// for (let index = 0; index < arr.length; index++) {
//     const element = array[index];
    
// }
//   };

// ===============================================


const gradeStudents = function(grade){
    let roundGrades = []    
    for (let i = 0; i < grade.length; i++) {
        let aa = oneOfFive(grades[i]);
        if ((aa<5)&&(aa>= 50)) {
            roundGrades.push(aa)
            
        } else {
return fail        }
    }
    return roundGrades
    
    }
    let roundGrades = []
    const oneOfFive = function(x){
        let counter =0
        while (x%5!=0) {
            x++
            counter++   }
            return counter
    }
