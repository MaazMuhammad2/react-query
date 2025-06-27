import express from "express";
  
const app = express();

app.get("/api/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "Wooden Table",
      price: 90,
      image:
        "https://images.pexels.com/photos/15888837/pexels-photo-15888837/free-photo-of-young-woman-sitting-in-a-lobby.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      name: "Table glass",
      price: 20,
      image:
        "https://images.pexels.com/photos/32487718/pexels-photo-32487718/free-photo-of-modern-coffee-shop-espresso-bar-setup.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 3,
      name: "Table retail",
      price: 940,
      image:
        "https://images.pexels.com/photos/32252363/pexels-photo-32252363/free-photo-of-highland-cow-resting-in-green-pasture.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 4,
      name: "Table metal",
      price: 560,
      image:
        "https://images.pexels.com/photos/18970164/pexels-photo-18970164/free-photo-of-colorful-flowers-on-a-bike.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 5,
      name: "Chair Table",
      price: 900,
      image:
        "https://images.pexels.com/photos/31478482/pexels-photo-31478482/free-photo-of-hawthorn-flowers-in-spring-nouvel-aquitaine.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 6,
      name: "Trimmer",
      price: 30,
      image:
        "https://images.pexels.com/photos/32108586/pexels-photo-32108586/free-photo-of-cozy-cafe-interior-with-matcha-theme-decor.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
  ];

  if (req.query.search) {
   const filteredProducts = products.filter((product) =>
  product.name.toLowerCase().includes(req.query.search.toLowerCase())
);


    res.send(filteredProducts);
    return;
  }

  setTimeout(() => {
    res.send(products);
  }, 3000);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`your app is runnin on ${port}`);
});
