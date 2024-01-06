const init = [];
export const cartReducer = (state=init, action)=>{
    var newState = [...state];
    switch(action.type){
        
        case("addtocart"): 
            const existItem =  newState.findIndex(item => item.id === action.id);
            if(existItem != -1){
                newState[existItem].quantity+=1;
                return newState
            }
            else{
                newState = [
                    {
                        id: action.id,
                        quantity: 1,
                    },
                    ...state
                ]
                console.log(newState)
                return newState
            }

        case("updateproductquantity"):
        // console.log(action.number)
            const existItem2 = newState.findIndex(item => item.id === action.id);
            if(existItem2 != -1 && action.number!=0){
                newState[existItem2].quantity += action.number;
                if(newState[existItem2].quantity < 0){
                    newState[existItem2].quantity = 0
                }
                return newState
            }
            if(existItem2 != -1 && action.number==0){
                newState = newState.filter(item => item.id !== action.id)
                return newState
            }
        case("clearcart"):
            return init
            
    }
    return state
}