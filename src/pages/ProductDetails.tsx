import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import useProductById from "../hooks/useProductById";
import { useCart } from "../hooks/useCart";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const productId = Number(id);

  const { data, isLoading, error } = useProductById(productId);
  const { addToCart } = useCart();

  if (isLoading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <Loader />
      </div>
    );
  }
  if (error) {
    return (
      <div className="mx-auto flex min-h-[60vh] max-w-3xl items-center justify-center px-4">
        <h1 className="rounded-xl bg-red-50 px-6 py-4 text-lg font-semibold text-red-600 shadow-sm">
          Something went wrong
        </h1>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-slate-200 lg:grid-cols-2">
          <div className="flex items-center justify-center bg-slate-100 p-6 sm:p-8">
            <img
              src={data?.images?.[0] || data?.thumbnail || data?.images}
              alt={data?.title}
              className="h-70 w-full max-w-md rounded-2xl object-contain sm:h-95 lg:h-115"
            />
          </div>

          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
            <span className="mb-3 w-fit rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-700">
              Product Details
            </span>

            <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              {data?.title}
            </h1>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              {data?.description}
            </p>

            <div className="mt-6 flex items-center gap-3">
              <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                ${data?.price}
              </h2>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button onClick={() => {
                  if (data) {
                    addToCart(data);
                  }
                }} className="rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2">
                <Link to="/cart">Add To Cart</Link>
              </button>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-slate-200 pt-6 text-sm text-slate-600">
              <div className="rounded-xl bg-slate-50 p-4">
                <p className="font-medium text-slate-900">Fast Delivery</p>
                <p className="mt-1 text-xs sm:text-sm">Expected in 3-5 days</p>
              </div>
              <div className="rounded-xl bg-slate-50 p-4">
                <p className="font-medium text-slate-900">Secure Payment</p>
                <p className="mt-1 text-xs sm:text-sm">
                  100% protected checkout
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
