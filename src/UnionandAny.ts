let subs:number | string = '1M' ;  // Number or union its done also 10000 or 1M


let apiRequestStatus : 'pending' | 'Success' | 'error' = 'pending' 
// its not be detatype , anothe datatype can be happen while we using union

let airLineSeat : 'Aile' | 'Window' | 'Middle' = 'Middle' //Its also union Type in Typescript

airLineSeat = 'Middle' 


const orders = ['12','20', '28', '44']


// Note: its specal case where i want to 'any' datatype avoid
let currentOrder: string  | undefined;  // Its undifeined can be happen so its annonating undefined where i only using in any  ex: let currentOrder: string  (here is problem loop  in inside have no guarantee where loop run or not run)

for(let order of orders){
        if(order === '28'){
            currentOrder = order;
            break
        }
        currentOrder = '11'
}


console.log(currentOrder); 