import attractionApi from 'api/attractionApi';
import cityApi from 'api/cityApi';
import { Attraction, City, ListResponse } from 'models';
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [cityList, setCityList] = useState([] as City[]);
  const [attractionList, setAttractionList] = useState([] as Attraction[]);

  useEffect(() => {
    (async () => {
      const { data: cityResponse }: ListResponse<City> = await cityApi.getAll();
      setCityList(cityResponse);

      const { data: attractionResponse }: ListResponse<Attraction> = await attractionApi.getAll();
      setAttractionList(attractionResponse);
    })();
  }, []);

  console.log(cityList);

  return (
    <div className="App">
      <ul>
        {cityList?.map((city) => (
          <img key={city.id} src={city.thumbnail} alt="aa" style={{ maxWidth: '50px' }} />
        ))}
      </ul>

      <ul>
        {attractionList?.map((attraction) => (
          <li key={attraction.id}>{attraction.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
