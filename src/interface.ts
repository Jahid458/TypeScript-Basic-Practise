
type ChaiOrder = {
        type: string; 
        sugar:number;
        strong:boolean
}


function makeChai(order: ChaiOrder ){
        console.log(order);
}


function serverChai(order:ChaiOrder){
                console.log(order);
}

type teaRecipe = { 
        water: number;
        milk: number
}


class MasalaChai implements teaRecipe { 
        water = 100;
        milk = 50 ;
}

interface CupSize  {
   size:  'small' | 'large';
} 


class chai implements CupSize {
        size: "small" | "large" = "large"
}

// when we use in class we decide to no needed type this needed to interface  

// type respose = {ok: true} | {ok: false}

// class myRes implements respose {
//         ok: boolean = true;
// }


type TeaType = "masla" | 'ginger' | 'lemon' // thats called literal type 


function orderChai(t: TeaType){
        console.log(t);
}


type BaseChai = {teaLeaves:  number};
type Extra = {masla: number}
type MasalaaChai = BaseChai & Extra

const cup : MasalaaChai = { 
        teaLeaves : 2 ,
        masla :1   
}

type User = { 
        userName : string , 
        bio?:string 
}


const u1: User = {userName: 'Jahid'} 
const u2: User = {userName: 'Ananto', bio: 'abantor.ai'}



type Config = {
        readonly appName : string,
        version : number
}


const cfg : Config ={
        appName : 'MasterJi',
        version: 1
}

// c1.appName = 'Mnsa'  --> Its its readonluy so when you set up one name it not contain naother 
