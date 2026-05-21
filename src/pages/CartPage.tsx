import { useCart } from "../hooks/useCart";

const CartPage = () => {
  const { cartItems, removeFromCart, addToCart } = useCart();

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-6 text-2xl font-bold text-slate-900 sm:text-3xl">
          Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-slate-200">
            <h2 className="text-lg font-semibold text-slate-800">
              Your cart is empty
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Add some products to see them here.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <section
                key={item.id}
                className="flex flex-col gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 sm:flex-row sm:items-center sm:justify-between sm:p-5"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <img
                    src={Array.isArray(item.images) ? item.images[0] : item.images}
                    alt={item.title}
                    className="h-40 w-full rounded-xl bg-slate-100 object-contain p-3 sm:h-28 sm:w-28"
                  />

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      Price: ${item.price}
                    </p>

                    <div className="mt-4 flex items-center gap-3">
                      <div className="flex items-center rounded-xl border border-slate-300">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="px-3 py-2 text-lg font-semibold text-slate-700 transition-all duration-200 ease-in-out hover:bg-slate-100 active:scale-95"
                        >
                          -
                        </button>

                        <span className="min-w-10 text-center text-sm font-medium text-slate-900">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => addToCart(item)}
                          className="px-3 py-2 text-lg font-semibold text-slate-700 transition-all duration-200 ease-in-out hover:bg-slate-100 active:scale-95"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="rounded-lg bg-red-50 px-4 py-2 text-sm font-medium text-red-600 transition-all duration-200 ease-in-out hover:bg-red-100 active:scale-95"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>

                <div className="text-left sm:text-right">
                  <p className="text-sm text-slate-500">Total</p>
                  <p className="text-lg font-bold text-slate-900">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </section>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;