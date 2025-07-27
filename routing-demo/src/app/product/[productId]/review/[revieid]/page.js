import { notFound } from "next/navigation";

export default function ProductReview({ params }) {
    const { productId, revieid } = params;
    if(parseInt(revieid) > 1000){
        notFound();

    }
    return (
        <h1>Review {revieid} for Product {productId}!</h1>
    );
} 