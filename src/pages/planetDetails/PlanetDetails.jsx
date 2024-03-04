import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import DetailsTable from "../../components/detailsTable/DetailsTable";
import NavButton from "../../components/navButton/NavButton";
import Card from "../../components/card/Card";

const PlanetDetails = () => {
  const [data, setData] = useState();
  const [residentsNames, setResidentsNames] = useState();
  const [planetsNames, setPlanetsNames] = useState();

  let { planetName } = useParams();
  const rowsTitles = [
    "name",
    "diameter",
    "climate",
    "terrain",
    "gravity",
    "population",
    "orbital_period",
    "residents",
  ];

  const getData = async () => {
    const response = await fetch(`https://swapi.dev/api/planets/`);
    const { results } = await response.json();

    const filterOne = results.filter((planet) => planet["name"] == planetName);

    const filterData = filterOne.map((planet) => {
      const filterPlanet = {};
      rowsTitles.forEach((field) => {
        filterPlanet[field] = planet[field];
      });
      return filterPlanet;
    });

    const residentsSources = filterData[0]["residents"];

    if (residentsSources.length) {
      const residents = [];
      for (let i = 0; i < residentsSources.length; i++) {
        const response = await fetch(residentsSources[i]);
        const residentsData = await response.json();
        console.log(residentsData);
        residents.push(residentsData["name"]);
      }
      setResidentsNames(residents);
    }

    const planets = results.map((element) => element["name"]);
    setPlanetsNames(planets);

    setData(filterData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Card>
      <NavButton link={`/`} linkTitle={"Home"} data={planetsNames}></NavButton>
      <h1>{planetName}</h1>
      {data ? (
        <DetailsTable data={data} residents={residentsNames}></DetailsTable>
      ) : (
        <h2>Loading</h2>
      )}
    </Card>
  );
};

export default PlanetDetails;
