import "./App.css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useDebounce } from "use-debounce";

const fetchedProducts = async (search) => {
  const res = await axios.get(`/api/products?search=${search}`);
  return res.data;
};

function App() {
  const [search, setSearch] = useState("");
  const [debounceSearch] = useDebounce(search, 1000)

  const {
    data = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetchedProducts(""),  // fetchedProducts("debounceSearch"),
  });
  console.log(data);

  const filteredProducts = data
    .filter((obj) => obj.name.toLowerCase().includes(search))
    .slice(0, 3);




  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className="p-4 bg-black">
      
          <input
            type="text"
            placeholder="Search..."
            className="border border-white bg-amber-50 rounded-xl outline-black p-2 mb-4 w-full max-w-md mx-auto block"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
       

        {search && filteredProducts.length === 0 && (
          <div>
            <h1>No Products Found.</h1>
          </div>
        )}

        <div className="grid grid-cols-2 gap-4 mt-4 text-white">
          {(search ? filteredProducts : data).map((product) => (
            <div key={product.id}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover"
              />
              <div className="flex justify-center">
                <h3 className="font-bold mr-2">{product.name}</h3>
                <p>${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
