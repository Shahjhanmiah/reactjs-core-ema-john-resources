// import { getStoredCard } from "../../utilities/fakedb";

import { getStoredCard } from "../../utilities/fakedb";

// export const productAndCartLoader = async ()=>{
//     // get products
//     const productsData =await fetch('products.json');
//     const products  = await productsData.json();
//     // get cart 
//     const savedCart = getStoredCard();
//     //পরে অ্যাড করা হয়চে 
//     const previousCart = []

//     console.log()
    
//     // console.log('saveCart',savedCart);
//     for(const id in savedCart){
//     const proudcts  = await productsData.json();
//         const adddeProduct = proudcts.find(products=>products.id === id);
//         if(adddeProduct){
//             const qunatity  = savedCart[id];
//             // console.log(id,qunatity);
//             adddeProduct.qunatity = qunatity;
//             previousCart.push(adddeProduct)

//         }

        
//     }
//     return {products,previousCart};
// }

export const productAndCartLoader = async()=>{
    const productsData = await fetch('products.json');
    const products = await  productsData.json();
    const savedCart = getStoredCard();
    const initialCart = []
    // console.log(products);
   console.log('savedCart',savedCart) 
   for(const id in savedCart){
    const addedProduct = products.find(products=>products.id ===id)
        // console.log(addedProduct);
        if(addedProduct){
            const qunatity = savedCart[id];
            // console.log(id,qunatity)
            addedProduct.qunatity = qunatity;
            initialCart.push(addedProduct);
            
        }
    
   }
   return {products:products, initialCart:initialCart};


}

