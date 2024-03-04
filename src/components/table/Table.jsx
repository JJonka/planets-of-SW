import { Link } from "react-router-dom";

const Table = ({ columnTitles, data }) => {
  return (
    <table class={"highlight centered"}>
      <thead>
        <tr>
          {columnTitles.map((value) => (
            <th key={`${value}`}>{value}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((element, index) => (
          <tr key={index}>
            {Object.values(element).map((value) => (
              <td key={`${value}`}>
                {Object.values(element).indexOf(value) == 0 ? (
                  <Link to={`${document.URL}planets/${element["name"]}`}>
                    {value}
                  </Link>
                ) : (
                  value
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
