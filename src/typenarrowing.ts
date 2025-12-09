function getCoffee(kind:string | number){
    if(typeof kind === 'string'){
        return `Making ${kind} Coffee....` // here when type string string suggestion give me 
    }
    return `Coffee Order ${kind} ` // here also give me . suggestion where is needed
} 


function serveCoffee(msg?:string){ // optional if msg ashe serving na hole  
    if(msg){
        return `Serving ${msg}` //msg 100% Ashe
    }

    return `Serving Normal Coffee` // msg use na kore 100% ashe na --> thats called type narrowing
}

// exhasuted check 

function orderCoffee(size:'Small'|'Medium'|'large'| number){
    if(size === 'Small'){
        return `Small Coffee get em please`
    }
    if(size === 'Medium' || size === 'large'){
        return `Make Extra Coffee`
    }

    return `Coffee Order #${size}`
}

// Type Guards
class KhuladChai{
    serve(){
        return  `Khulad Chai`
    }
}
class CuttingChai{
    serve(){
        return  `Srving Cutting Chai`
    }
}

function serve(chai:KhuladChai | CuttingChai){
    if(chai instanceof KhuladChai){
        return chai.serve()
    }
}

// Type Guards example 

type ChaiOrder ={
    type:string 
    sugar: number
}

function isChaiOrder(obj:any):obj is ChaiOrder{
        return(
            typeof obj === 'object' && 
            obj !== null && 
            typeof obj.type === 'string' && 
            typeof obj.type === 'number' 
        )
}

function serveOrder(item:ChaiOrder | string){
    if(isChaiOrder(item)){
        return `Serving ${item.type} chai with ${item.sugar} Sugar`
    }

    return `Serving Custom Chai: ${item}`
}


type MaslaChai = {type:'Masala'; spicelevel: number};
type GingerChai = {type:'Ginger'; amount: number};
type ElachiChai = {type:'Elachi'; aroma: number};


type chai = MaslaChai | GingerChai | ElachiChai

function MakeChai(order:chai ){
    switch (order.type) {
        case 'Masala':
            return `Masla Chai`
            break;
        case 'Elachi':
            return `Elachi Chai`
            break;
        case 'Ginger':
            return `Ginger Chai`
            break;
    
        
    }
}


function brew(order: MaslaChai | GingerChai) {
    if("spicelevel" in order){
        //
    }
}

    // array  unknown hole when is out its also string array
// function isStringArray(arr: unknown): arr is string[]{ 
    
// }
