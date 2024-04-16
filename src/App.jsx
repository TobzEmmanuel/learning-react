
import Card from './Card.jsx'
import product1 from './assets/acer17.png'
import product2 from './assets/leno.png'
import product3 from './assets/hp.png'
import product4 from './assets/dell.png'


function App() {

  return (
    <>
      <Card image={product1} 
            title="Acer Nitro 17 Gaming 1tb/16gb Ram RTX 4050 AMD RYZEN 7"
            discount="&#8358; 1,650,000"
            price="&#8358; 1,750,000"
            />
      <Card image={product2} 
            title="Lenovo IdeaPad 3 Gaming Laptop Ryzen 7-16GB RAM 512GB SSD + 1TB"
            discount="&#8358; 1,328,000"
            price="&#8358; 1,485,000"
            />
      <Card image={product3} 
            title="Hp Pavilion 15 X360 1Tera Byte 12th Gen Touchscreen Intel Core I7"
            discount="&#8358; 950,000"
            />
      <Card image={product4} 
            title="DELL Alienware M18 R1, RTX 4090, 4TB/64GB I9 13th Gen"
            discount="&#8358; 5,800,000"
            price="&#8358; 6,000,000"
            />
    </>
    
  
  );
}

export default App
