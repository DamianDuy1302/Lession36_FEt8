export const addtocart = (id) =>{
    return {
        type: "addtocart",
        id: id,  
    }
}
export const updateproductquantity = (id, number)=>{
    return{
        type: "updateproductquantity",
        id: id,
        number: number,
    }
}
export const clearcart = (id, number)=>{
    return{
        type: "clearcart",
    }
}

