import { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import Table from "../../components/table/Table";

const Home = () => {
  const [data, setData] = useState();
  const titles = ["name", "diameter", "climate", "terrain"];

  const getData = async () => {
    const response = await fetch(`https://swapi.dev/api/planets/`);
    const { results } = await response.json();

    const filterPlanets = results.map((planet) => {
      const filterPlanet = {};
      titles.forEach((field) => {
        filterPlanet[field] = planet[field];
      });
      return filterPlanet;
    });

    setData(filterPlanets);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Card>
      <h1>STAR WARS PLANETS</h1>

      {data ? (
        <Table data={data} columnTitles={titles}></Table>
      ) : (
        <h2>Loading</h2>
      )}
    </Card>
  );
};

export default Home;
