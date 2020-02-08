import React from 'react';
import ReactMarkdown from 'react-markdown';

function Country(props) {

  const { params } = props.match;
  const data = props.location.data;
  console.log("Country Data: ");
  console.log(data);

  return (
    <>
      <h1>{params.id}</h1>
      <div class="trip-hero-img">
        <img src={`${data.tilePicCountry.fields.file.url}?fm=jpg&fl=progressive`} />
      </div>
      <ReactMarkdown>{data.countryName}</ReactMarkdown>
      <ReactMarkdown>{data.countryDate}</ReactMarkdown>
      <ReactMarkdown>{data.countryLocations}</ReactMarkdown>
      <ReactMarkdown>{data.countryHighlights}</ReactMarkdown>
      <ReactMarkdown>{data.countryTips}</ReactMarkdown>
    </>
  );

}

export default Country;
