let response:any = "42"

let numericLength:number =  (response as string).length // thats called Forceful Type assertion 

type Book ={
    name : string
}

// Type Assertion  as take which type are forcefully annonate the type thats cslled type assertion 
let bookString = '{"name":"Who Move My Cheese"}' ;
// value local storage theke ashe jai 
let bookObj = JSON.parse(bookString) as Book 

console.log(bookObj.name );


const InputElement = document.getElementById("username") as HTMLInputElement


// Unknowm and any 

let value:any 

value = "Jahid"
value =  [1,2,3]
value = 2.5 
value.toUpperCase() // any uses to any here is no problem 



let newValue:unknown 
newValue = "Jahid"
newValue =  [1,2,3]
newValue = 2.5 

// Type Cuard er sathe safety er sathe unknown ke check korte hocche 
if(typeof newValue === "string"){
    newValue.toUpperCase() // unknown er sathe toUppercase jai na tai take bole dite hoi je "string hbe then here is no problem "
}


try {
    
} catch (error) {
    if(error instanceof Error){
        console.log(error.message);
    }
    console.log("Error", error);
}


const data:unknown = "Coffee Aur Best"
const strData: string =  data as string 

// never type allow if check is noy its super admin just Role 
type Role = 'admin' | 'user' | 'SuperAdmin'

function redirectBaseRole(role:Role): void {
    if(role === 'admin'){
        console.log('Redirecting to Admin Dashboard');
        return 
    }
    if(role === 'user'){
        console.log('Redirecting to User  Dashboard');
        return

    }
    role;
}



function neverReturun():never {
    while(true){} //some infinjite loop wait kore then serve kore use case r maddome never use kore     
}