
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

type teaRecipe ={ 
        water: number;
        milk: number
}


class MasalaChai implements teaRecipe { 
        water = 100;
        milk = 50 ;
}

