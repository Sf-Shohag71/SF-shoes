import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

export default function CustomerReviews() {
  return (
    <>
      <section className="max-container">
        <h3 className="text-center font-palanquin font-bold text-4xl">
          What Our <span className="text-coral-red"> Customers </span> Say?
        </h3>
        <p className="font-montserrat mt-4 max-w-lg text-center m-auto text-slate-gray">
          Hear genuine stories from our customers about their expectational
          experience with us.
        </p>
        <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              imgURL={review.imgURL}
              customerName={review.customerName}
              rating={review.rating}
              feedback={review.feedback}
            />
          ))}
        </div>
      </section>
    </>
  );
}
