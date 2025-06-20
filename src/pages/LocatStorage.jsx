const getLocalStorage = ()=>{
    const product = localStorage.getItem('products')
    if(product){
        return JSON.parse(product)
    }
    return []
}

const addProductToLocalStorage = (product) =>{
    const getProducts = getLocalStorage()

    const allProducts = [...getProducts, product]
    const stringfyProducts = JSON.stringify(allProducts)
    localStorage.setItem('products', stringfyProducts)
}


const localStorageProducts = ()=>{
    const products = getLocalStorage()
    return products
}

const removeAllProduct = ()=>{
    localStorage.removeItem('products')
}

 const removeSingleProuduct = (product) =>{
      const stored = JSON.parse(localStorage.getItem('products'))
      const updated = stored.filter((p) => p.id !== product.id)
      localStorage.setItem('products', JSON.stringify(updated))
  }

  
export {addProductToLocalStorage, localStorageProducts, removeAllProduct, removeSingleProuduct}