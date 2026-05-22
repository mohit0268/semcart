import { useCallback, useMemo, useRef, useState } from "react";
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";
import useProducts from "../hooks/useProducts";
import type { Product } from "../types/product.types";

const PRODUCTS_PER_BATCH = 20;

type SortOption =
  | "default"
  | "price-low-high"
  | "price-high-low"
  | "title-a-z"
  | "title-z-a";

const HomePage = () => {
  const { data = [], isLoading, error } = useProducts();

  const [visibleCount, setVisibleCount] = useState(
    PRODUCTS_PER_BATCH
  );

  const [selectedCategory, setSelectedCategory] =
    useState<string>("all");

  const [sortBy, setSortBy] =
    useState<SortOption>("default");

  const observerRef =
    useRef<IntersectionObserver | null>(null);

  // Unique Categories
  const categories = useMemo(() => {
    const uniqueCategories = new Set<string>(
      data.map((product:Product) => product.category.name)
    );

    return ["all", ...Array.from(uniqueCategories)];
  }, [data]);

  // Filter + Sort Products
  const filteredProducts = useMemo(() => {
    let updatedProducts = [...data];

    // Filter
    if (selectedCategory !== "all") {
      updatedProducts = updatedProducts.filter(
        (product) =>
          product.category.name === selectedCategory
      );
    }

    // Sort
    switch (sortBy) {
      case "price-low-high":
        updatedProducts.sort(
          (a, b) => a.price - b.price
        );
        break;

      case "price-high-low":
        updatedProducts.sort(
          (a, b) => b.price - a.price
        );
        break;

      case "title-a-z":
        updatedProducts.sort((a, b) =>
          a.title.localeCompare(b.title)
        );
        break;

      case "title-z-a":
        updatedProducts.sort((a, b) =>
          b.title.localeCompare(a.title)
        );
        break;

      default:
        break;
    }

    return updatedProducts;
  }, [data, selectedCategory, sortBy]);

  const visibleProducts = filteredProducts.slice(
    0,
    visibleCount
  );

  // Infinite Scroll
  const lastProductRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (isLoading) return;

      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      observerRef.current = new IntersectionObserver(
        (entries) => {
          if (
            entries[0].isIntersecting &&
            visibleCount < filteredProducts.length
          ) {
            setVisibleCount((prev) =>
              Math.min(
                prev + PRODUCTS_PER_BATCH,
                filteredProducts.length
              )
            );
          }
        },
        {
          rootMargin: "200px",
        }
      );

      if (node) {
        observerRef.current.observe(node);
      }
    },
    [
      isLoading,
      visibleCount,
      filteredProducts.length,
    ]
  );

  // Reset visible products when filter/sort changes
  const handleCategoryChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(e.target.value);
    setVisibleCount(PRODUCTS_PER_BATCH);
  };

  const handleSortChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSortBy(e.target.value as SortOption);
    setVisibleCount(PRODUCTS_PER_BATCH);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <p className="mt-10 text-center text-red-500">
        Error loading products.
      </p>
    );
  }

  return (
    <div className="px-4 py-6">
      {/* Filters */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Category Filter */}
        <select
  value={selectedCategory}
  onChange={handleCategoryChange}
  className="rounded-md border px-4 py-2 outline-none"
>
  {categories.map((category:string) => (
    <option
      key={category}
      value={category}
    >
      {category}
    </option>
  ))}
</select>

        {/* Sorting */}
        <select
          value={sortBy}
          onChange={handleSortChange}
          className="rounded-md border px-4 py-2 outline-none"
        >
          <option value="default">
            Default Sorting
          </option>

          <option value="price-low-high">
            Price: Low to High
          </option>

          <option value="price-high-low">
            Price: High to Low
          </option>

          <option value="title-a-z">
            Name: A to Z
          </option>

          <option value="title-z-a">
            Name: Z to A
          </option>
        </select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {visibleProducts.map(
          (product: Product, index: number) => {
            const isLastProduct =
              index === visibleProducts.length - 1;

            return (
              <div
                key={product.id}
                ref={isLastProduct ? lastProductRef : null}
              >
                <ProductCard product={product} />
              </div>
            );
          }
        )}
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <p className="mt-10 text-center text-gray-500">
          No products found.
        </p>
      )}

      {/* End Message */}
      {visibleCount >= filteredProducts.length &&
        filteredProducts.length > 0 && (
          <p className="mt-8 text-center text-sm text-gray-400">
            No more products to load
          </p>
        )}
    </div>
  );
};

export default HomePage;