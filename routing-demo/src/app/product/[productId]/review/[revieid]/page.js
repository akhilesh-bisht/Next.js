import { notFound } from "next/navigation";


function getRandome(count) {
    return Math.floor(Math.random() * count)
}
export default async function ProductReview ({ params }) {
    const { productId, revieid } =  await params;

    const random = getRandome(2)


    // if(random ===1){
    //      throw new Error('error laoding review how its work')
    // }
    if(parseInt(revieid) > 1000){
        notFound();

    }
    return (
        <h1>Review {revieid} for Product {productId}!</h1>
    );
} 