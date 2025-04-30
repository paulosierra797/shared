import React from 'react';
import { Container, Button, Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ProductList from './components/ProductList'; // Import ProductList component


const products = [
  {
      id: 1,
      name: "Wireless Headphones",
      price: "$59.99",
      description: "Noise-canceling with 40-hour battery life.",
      image:
        "https://sony.scene7.com/is/image/sonyglobalsolutions/wh-ch720_Primary_image?$categorypdpnav$&fmt=png-alpha",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "$129.99",
      description: "Fitness tracking and message notifications.",
      image:
        "https://img01.huaweifile.com/sg/ms/ph/pms/uomcdn/PH_HW_B2B2C/pms/202409/gbom/6942103131752/800_800_62C3C092925FBA8171FC57D62B7B53B9mp.png",
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: "$39.99",
      description: "Portable speaker with deep bass.",
      image:
        "https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/speakers/s1_pro_system/product_silo_images/Chibi-silo1-1200x1022-17-BOSE-064-121417.psd/jcr:content/renditions/cq5dam.web.1920.1920.png",
    },
    {
      id: 4,
      name: "Gaming Mouse",
      price: "$24.99",
      description: "RGB lights and ultra-fast tracking.",
      image:
        "https://nookyyy.com/wp-content/uploads/razer_viper_mini_signature_edition_black_1.png",
    },
    {
      id: 5,
      name: "Laptop Stand",
      price: "$19.99",
      description: "Ergonomic aluminum laptop holder.",
      image:
        "https://ventiontech.com/cdn/shop/files/3034a1133efe01daba919094b70c6310_66d81094-4d76-4561-ab30-40b3669d88c4.jpg?v=1714465479",
    },
    {
      id: 6,
      name: "Webcam HD",
      price: "$49.99",
      description: "1080p video with built-in mic.",
      image:
        "https://resource.logitech.com/w_800,c_lpad,ar_16:9,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/video-conferencing/c505/gallery/c505-gallery-1.png?v=1",
    },
    {
      id: 7,
      name: "Mechanical Keyboard",
      price: "$89.99",
      description: "Tactile switches and customizable keys.",
      image:
        "https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-keyboard/pro-clicky-gallery-1.png?v=1",
    },
    {
      id: 8,
      name: "Smart LED Bulb",
      price: "$12.99",
      description: "Color changing bulb with app control.",
      image:
        "https://www.assets.signify.com/is/image/Signify/PHI_WFB_60W_A60_E27_822_65_RGB_1PF_6-SPP?wid=896&hei=504&qlt=82",
    },
    {
      id: 9,
      name: "USB-C Hub",
      price: "$34.99",
      description: "Expand your ports with this 6-in-1 hub.",
      image:
        "https://www.belkin.com/dw/image/v2/BGBH_PRD/on/demandware.static/-/Sites-master-product-catalog-blk/default/dwfc6843c4/images/hi-res/4/4b0aa17099f033c3_AVC009xxSGY-v2-7-in-1-multiport-hub-gallery-shot-01.jpg?sw=700&sh=700&sm=fit&sfrm=png",
    },
    {
      id: 10,
      name: "Portable SSD",
      price: "$99.99",
      description: "1TB of blazing-fast storage.",
      image:
        "https://image-us.samsung.com/SamsungUS/home/computing/memory-storage/pdp/mupg1t0bam/MU-PG1TOB-AM_02.jpg?$product-details-jpg$",
    },
    {
      id: 11,
      name: "Action Camera",
      price: "$199.99",
      description: "Waterproof 4K camera with accessories.",
      image:
        "https://static.sjcam.com/shop/uploads/2023/08/C200-pro-Black-SJCAM-Action-Camera-2.jpg",
    },
    {
      id: 12,
      name: "Drone Mini",
      price: "$249.99",
      description: "Compact drone with HD video and GPS.",
      image: "https://dronesph.b-cdn.net/wp-content/uploads/2023/07/04-3.jpg",
    },
];
const HomePage = () => {
  const navigate = useNavigate();
  const userRole = localStorage.getItem("userRole");

  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to right,rgb(245, 245, 245),rgb(0, 0, 0))",
        minHeight: "100vh",
        margin: 0,
        padding: 0,
        paddingBottom: "30px",
      }}
    >
      <Container style={{ padding: '0 15px', paddingBottom: '30px' }}>
        {/* Carousel (featured products) */}
        <Carousel className="mb-5">
          {/* Use the products to populate carousel items */}
          {products.slice(0, 3).map((product) => (
            <Carousel.Item key={product.id}>
              <img
                className="d-block w-100"
                src={product.image}
                alt={product.name}
                style={{ objectFit: "cover" }}
              />
              <Carousel.Caption>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <h4>{product.price}</h4>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>

        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Our Products</h2>
          <div className="d-flex gap-2">
            <Button variant="outline-success" onClick={() => navigate("/cart")}>
              🛒 Go to Cart
            </Button>
            {userRole === "Seller" && (
              <Button variant="outline-primary" onClick={() => navigate("/add-product")}>
                ➕ Add Product
              </Button>
            )}
          </div>
        </div>

        {/* Product List Component */}
        <ProductList products={products} />
      </Container>
    </div>
  );
};

export default HomePage;