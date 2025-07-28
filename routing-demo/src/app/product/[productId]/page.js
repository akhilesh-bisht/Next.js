// app/product/[productId]/page.js

// Dynamic metadata generation function
export const generateMetadata = async ({ params }) => {
  const { productId } = params;
  
  // You can fetch data or do something with the productId to generate dynamic metadata
  const metadata = {
    title: `Product ${productId}`, 
    description: `Details about product ${productId}`,
  };

  return metadata;
};

export default function ProductDetails({ params }) {
  const { productId } = params;

  console.log(params); // Debugging - outputs the dynamic parameters
  
  return (
    <div>
      ProductDetails for product: {productId}
    </div>
  );
}
