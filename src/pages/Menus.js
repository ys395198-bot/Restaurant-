 
import "../styles/Menus.css";

function Menu() {

  const foods = [
    {
      name: "Pizza",
      price: "₹200",
      img: "https://images.unsplash.com/photo-1550547660-d9450f859349"
    },
    {
      name: "Burger",
      price: "₹120",
      img: "https://images.unsplash.com/photo-1550547660-d9450f859349"
    },
    {
      name: "Pasta",
      price: "₹180",
      img: "https://images.unsplash.com/photo-1525755662778-989d0524087e"
    },
    {
      name: "Fries",
      price: "₹100",
      img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877"
    }
  ];

  return (
    <div className="menu-page">

      <h1>Our Delicious Menu 🍽️</h1>

      <div className="menu-grid">

        {foods.map((food,index)=>(
          <div className="food-card" key={index}>

            <img src={food.img} alt={food.name} />

            <h3>{food.name}</h3>

            <p>{food.price}</p>

            <button>Order Now</button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Menu;