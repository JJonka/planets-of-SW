export const DetailsTable = ({ data, residents }) => {
  const getRows = (items) => {
    const content = [];
    const headers = Object.keys(items);
    const tableData = Object.values(items);
    for (let i = 1; i < headers.length - 1; i++) {
      content.push(
        <tr key={i}>
          <th>{headers[i]}</th>
          <td>{tableData[i]}</td>
        </tr>
      );
    }

    if (residents != undefined) {
      const residentsString = residents.toString();
      content.push(
        <tr key={"resident"}>
          <th>{headers[headers.length - 1]}</th>
          <td>{residentsString.replace(/,/g, ", ")}</td>
        </tr>
      );
    } else {
      content.push(
        <tr key={"resident"}>
          <th>{headers[headers.length - 1]}</th>
          <td>{""}</td>
        </tr>
      );
    }

    return content;
  };

  return (
    <table>
      <tbody>{getRows(data[0])}</tbody>
    </table>
  );
};
