import cityApi from 'api/cityApi';
import { City, ListResponse } from 'models';
import React, { useEffect, useState } from 'react';

const HomePage = () => {
  const [cityList, setCityList] = useState([] as City[]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    (async () => {
      const { data }: ListResponse<City> = await cityApi.getAll();
      setCityList(data);
    })();
  }, []);

  const handleActiveClick = (id: number) => {
    setActiveIndex(id);
  };

  return (
    <>
      <header>
        <a href="/" className="brand">
          GoLens
        </a>
        <div className="navigation">
          <div className="navigation-items">
            <a href="/">News</a>
            <a href="/">Blog</a>
            <a href="/">Destination</a>
            <a href="/">Contact</a>
          </div>
        </div>
      </header>

      <section className="home">
        {cityList.map((city, idx) => (
          <img
            key={city.id}
            src={city.image}
            alt="image_city"
            className={`image-slide ${idx === activeIndex ? 'active' : ''}`}
          />
        ))}

        {cityList.map((city, idx) => (
          <div key={city.id} className={`content ${idx === activeIndex ? 'active' : ''}`}>
            <h1>{city.name}</h1>
            <p>{city.description}</p>
            <a href="/">
              Explore <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        ))}

        <div className="media-icons">
          <a href="https://www.facebook.com/chamomile.yuk/" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/chinh-huynh-2b4015168/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/hchinh?tab=repositories" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </div>
        <div className="slider-navigation">
          {Array.from({ length: cityList.length }, (x, i) => (
            <div
              className={`nav-btn ${i === activeIndex ? 'active' : ''}`}
              onClick={() => handleActiveClick(i)}
            ></div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;
