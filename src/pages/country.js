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
    return <>Loading...</>
  }

  return (
    <>
      <div className="hero-containter">
        <div className="hero-text">
          <ReactMarkdown>{countryDetails.fields.countryName}</ReactMarkdown>
          <ReactMarkdown>{countryDetails.fields.countryDate}</ReactMarkdown>
          <ReactMarkdown>{countryDetails.fields.countryLocations}</ReactMarkdown>
        </div>
        {countryDetails.fields.tilePicCountry && <div className="hero-image" style={{backgroundImage: `url(${countryDetails.fields.tilePicCountry.fields.file.url}?fm=jpg&fl=progressive&w=600&h=500)`}}>
        </div>}
      </div>

      <ReactMarkdown>{countryDetails.fields.countryHighlights}</ReactMarkdown>
      <ReactMarkdown>{countryDetails.fields.countryTips}</ReactMarkdown>
    </>
  );

}

export default Country;
