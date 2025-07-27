 async function  ProductDetails({params}) {
  const { productId } = params;
  console.log(params);
  

  return (
    <div>ProductDetails... {productId}</div>
  )
}

export default ProductDetails;