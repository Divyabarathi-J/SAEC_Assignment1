
// // const employees = [
// //     { name: "John Doe", salary : 10000,  age: 30, department: "Sales" },
// //     { name: "Jane Smith", salary : 12000,  age: 25, department: "Marketing" },
// //     { name: "Mike Johnson", salary : 15000,  age: 35, department: "Finance" },
// //     { name: "Emily Davis", salary : 11000,  age: 28, department: "Human Resources" },
// //     { name: "David Wilson", salary : 13000,  age: 40, department: "IT" }
// // ];

// // const arr = employees.filter((s)=> s.salary<11000).map((s) => s.name);
// // console.log(employees.find((s)=>s.age <30));
// // //console.log(arr);

// const employees = 
//     { name: "John Doe", salary : 10000,  age: 30, department: "Sales" , 
//         senior() 
//     {
//         if(this.age>=30)
//         {
//             return this.age+=30;
//         }

//     } ,
//     greet()
//     {
//         return "hi "+this.name;
//     }
//     ,this.add
// }
// ;
// console.log(employees.greet());
// console.log(employees.senior());

// const prices = [120,60,899];
// console.log(prices.reduce((a, b) => a + b, 0));

// const students = [
//     {name : "kiran" , marks : 90},
//     {name : "kumar" , marks : 80},
//     {name : "karthik" , marks : 70},
// ];
// console.log(students.find((s)=>s.name == "kiran"));




// const employees = 
//     { name: "John Doe", salary : 10000,  age: 30, department: "Sales" , 
    
//         greet() 
//     {
//         const greeting = "hello";
//         return function() {
//             console.log(`${greeting} ${this.name}`);
//         }
//     } 
// };
// employees.greet()(); // Output: "hello John Doe"
// // const sayHello = employees.greet();
// // sayHello();



// async /await: readable async code
// async function loadUsers() {
// try{
// const res = await fetch(
// "https://jsonplaceholder.typicode.com/users"
// );
// const users = await res.json(;
// console.log(users[0].name);
// }catch (error){
// console.log("Could not load:",error);
// }
// }
// load users();


async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
 
  fetchData();