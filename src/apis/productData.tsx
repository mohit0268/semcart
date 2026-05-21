const BASE_URL = "https://api.escuelajs.co/api/v1/products";

export const getProducts = async () => {
  try {
    const res = await fetch(BASE_URL);
    if (!res.ok) {
      throw new Error("Network Issue: Unable to fetch the data");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error({ error });
    throw error;
  }
};

export const getProductById = async (id: string) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    if (!response.ok) {
      throw new Error(`Network issue: Unable to fetch ${id}`);
    }
    const data = response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
