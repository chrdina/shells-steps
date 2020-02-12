import React, { useEffect, useState } from 'react';
import client from '../contentfulProvider';
import ReactMarkdown from 'react-markdown';

function Country(props) {

  // this is just a way of getting state inside functions which... don't have state (does not work on classes)
  const [isLoading, setIsLoading] = useState(true);
  const [countryDetails, setCountryDetails] = useState({});

  console.log("Country Props: ");
  console.log(props.location);

  // Think of this as kind of a component did mount...
  useEffect(() => {
    const handleDataFetch = async () => {
      const pageId = props.location.pathname.split('/')[2];
      // await pattern is the same as using then(), just makes it more streamline
      const response = await client.getEntry(pageId); // wait for this to resolve, returns response.
      setCountryDetails(response);
      setIsLoading(false)
    }

    if (props.location.data) {
      setCountryDetails(props.location.data);
      setIsLoading(false);
    } else {
      handleDataFetch();
    }

  }, [props.location]);

  // Haven't got the data yet, so hang tight
  if (isLoading) {
    return <>"Loading..."</>
  }

  return (
    <>
      <h1>{countryDetails.fields.countryName}</h1>
      {countryDetails.fields.tilePicCountry && <div class="country-hero-img">
        <img src={countryDetails.fields.tilePicCountry.fields.file.url} alt="" />
      </div>}
      <ReactMarkdown>{countryDetails.countryName}</ReactMarkdown>
      <ReactMarkdown>{countryDetails.countryDate}</ReactMarkdown>
      <ReactMarkdown>{countryDetails.countryLocations}</ReactMarkdown>
      <ReactMarkdown>{countryDetails.countryHighlights}</ReactMarkdown>
      <ReactMarkdown>{countryDetails.countryTips}</ReactMarkdown>
    </>
  );

}

export default Country;
