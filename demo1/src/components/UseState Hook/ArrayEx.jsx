import ArrayEx_Child from "./ArrayEx_Child";

function ArrayEx() {
  const IPL = ["CSK", "MI", "RCB", "MI"];
  const students = [
    {
      id: 101,
      name: "Onkar",
      city: "Pune",
    },
    {
      id: 102,
      name: "Rohit",
      city: "Shrirampur", 
    },
    {
      id: 103,
      name: "Rutuja",
      city: "Pune", 
    },
    {
      id: 104,
      name: "Rohit",
      city: "Nagpur",
    },
  ];
  const movies = [
    { id: 111, title: "Shawshank Redemption", rating: 9 },
    { id: 112, title: "Matrix", rating: 8 },
    { id: 113, title: "Titanic", rating: 7 },
    { id: 114, title: "Interstellar", rating: 9 },
    { id: 117, title: "Shutter Island", rating: 5 },
  ];

  const products = [
    { id: 101, name: "Samsung S25", isAvailable: true, price: 50000 },
    { id: 102, name: "i phone 17", isAvailable: false, price: 150000 },
    { id: 103, name: "i phone 14", isAvailable: true, price: 40000 },
    { id: 104, name: "Google Pixel 5", isAvailable: true, price: 180000 },
    { id: 105, name: "Black berry b3", isAvailable: false, price: 3000 },
    { id: 106, name: "Xiaomi Note 111", isAvailable: false, price: 15000 },
    { id: 107, name: "Oppo Reno 7", isAvailable: true, price: 45000 },
    { id: 108, name: "Vivo T4 pro", isAvailable: false, price: 53000 },
    { id: 109, name: "Iqoo 15 pro", isAvailable: true, price: 70000 },
    { id: 110, name: "Redmi 11", isAvailable: true, price: 22000 },
  ];
  return (
    <>
      {/* <ul>
        {IPL.map((i, index) => {
          return <li key={index}>{i}</li>;
        })}
      </ul> */}
      {/* <ul>
        {students.map((x) => {
          return <li key={x.id}>id: {x.id}, Name: {x.name}, city: {x.city}</li>
        })}
      </ul> */}
      {/* <h2>Movies having 7+ rating</h2>
      <ul>
        {movies.map((movie) => {
          return (
            <div key={movie.id}>
              {movie.rating > 7 ? <li>{movie.title}</li> : <></>}
            </div>
          );
        })}
      </ul> */}
      {/* <ol>
        {products.map((product) => {
          return (
            <li key={product.id}>
              {product.name}, &#8377;:{product.price}{" "}
              {product.isAvailable == true ? "✔" : "❌"}
            </li>
          );
        })}
      </ol> */}
      <ul>
        {products.map((product) => {
          return (<ArrayEx_Child
            key={product.id}
            name={product.name}
            price={product.price}
            isAvailable={product.isAvailable}
          />);
        })}
      </ul>
    </>
  );
}

export default ArrayEx;
