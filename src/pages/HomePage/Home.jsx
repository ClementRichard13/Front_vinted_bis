import { useEffect, useState } from "react";

import axios from "axios";

import { Link } from "react-router-dom";

import "./Home.css";

const Home = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        setData(response.data.offers);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>en cours de chargement...</p>
  ) : (
    <main className="homePage">
      <div>
        {data.map((offer) => {
          return (
            // <div key={offer._id} className="offerCard">
            <Link
              to={`/offer/${offer._id}`}
              key={offer.id}
              className="offerCard"
            >
              <div>
                {offer.owner.account.avatar && (
                  <img
                    className="avatarImage"
                    src={offer.owner.account.avatar.secure_url}
                    alt=""
                  />
                )}
                <span>{offer.owner.account.username}</span>
              </div>

              <img
                className="productImage"
                src={offer.product_image.secure_url}
                alt=""
              />

              <p>
                {/* -- Le prix (variable de type Number) est transformé avec deux chiffre après la virgule, puis transformé en String (car 'replace' ne s'applique pas aux nombres), puis le point est transformé en virgule */}
                {offer.product_price.toFixed(2).toString().replace(".", ",")} €
              </p>
            </Link>
          );
          // </div>
        })}
      </div>
    </main>
  );
};

export default Home;
