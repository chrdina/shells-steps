import React, { useEffect, useState } from 'react';
import client from '../contentfulProvider';
import ReactMarkdown from 'react-markdown';
import CustomCarousel from '../components/carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import getDate from '../dateFormatter';


function Trip(props) {
  // this is just a way of getting state inside functions which... don't have state (does not work on classes)
  const [isLoading, setIsLoading] = useState(true);
  const [tripDetails, setTripDetails] = useState({});

  console.log("Trip Props: ");
  console.log(props.location);

  // Think of this as kind of a component did mount...
  useEffect(() => {
    const handleDataFetch = async () => {
      const pageId = props.location.pathname.split('/')[2];
      // await pattern is the same as using then(), just makes it more streamline
      const response = await client.getEntry(pageId); // wait for this to resolve, returns response.
      setTripDetails(response);
      setIsLoading(false)
    }

    if (props.location.data) {
      setTripDetails(props.location.data);
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

      <div className="trip-hero">
        <div className="trip-hero-text">
          <h1>{tripDetails.fields.tripName}</h1>
          <p><FontAwesomeIcon icon={faCalendarAlt} className="icon"/>{getDate(tripDetails.fields.tripDate, "long")}</p>
          <p><FontAwesomeIcon icon={faMapMarkerAlt} className="icon"/>{tripDetails.fields.tripLocations}</p>
        </div>

        {tripDetails.fields.tilePicTrip && <div className="hero-image" style={{backgroundImage: `url(${tripDetails.fields.tilePicTrip.fields.file.url}?fm=jpg&fl=progressive)`}}>
        </div>}
      </div>
      <div className="content-container">
        <div className="content-section">
          <div className="content-grid">
            <div className="col-left">
              <ReactMarkdown>{tripDetails.fields.highlights}</ReactMarkdown>
              <ReactMarkdown>{tripDetails.fields.tripItinirary}</ReactMarkdown>
            </div>
            <div className="col-right">
              <CustomCarousel items={tripDetails.fields.tripPhotos} />
            </div>
          </div>
        </div>

        <div className="content-section">
          <div className="blog">
            <ReactMarkdown>{tripDetails.fields.tripDetails}</ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );

}

export default Trip;
