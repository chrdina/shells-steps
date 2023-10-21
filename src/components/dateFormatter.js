function getDate(input, monthLength) {
  // input will be 2020-02-28 format
  const inputArray = input.split("-");
  const date = new Date(inputArray[0], inputArray[1] - 1, inputArray[2]);

  const day = date.getDate().toString();
  const month = date.toLocaleString("default", { month: monthLength });
  const year = date.getFullYear().toString();

  const dateOut = day + " " + month + " " + year;

  return dateOut;
}

export default getDate;
