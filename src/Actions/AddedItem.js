export const addedItem = (state, product) => {
  return {
    type: "ADDED",
    payload: [...state.addedItem, product],
  };
};

export const addedFilter=(value)=>{
  //Form: item => item.price > min && item.price < max 
  //50-100 as string
  
  let arr = value.split("-");
  let min = arr[0];
  let max = arr[1];

  return {
    type:'FILTER' ,
    payload: [item => (item.price > min && item.price < max) ],
  };

}

/**
 * Creation de context
 * creation de reducer, 
 * creation de actions
 * dipatch(actionName(state,value))
 * dans actions ==> ecrire la logique
 * 
 * priceFiler: item=>item.price > min && item.price < max
 * state.productList.filer(state.priceFilter).map(<>)
 * 
 */