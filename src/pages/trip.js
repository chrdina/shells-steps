import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import client from "../contentfulProvider";
import ReactMarkdown from "react-markdown";
import CustomCarousel from "../components/customCarousel";
import {
  faPlayCircle,
  faMapMarkerAlt,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import getDate from "../components/dateFormatter";
import Tag from "../components/Tag";

function Trip(props) {
  // this is just a way of getting state inside functions which... don't have state (does not work on classes)
  const [isLoading, setIsLoading] = useState(true);
  const [tripDetails, setTripDetails] = useState({});

  // Think of this as kind of a component did mount...
  useEffect(() => {
    const handleDataFetch = async () => {
      const pageId = props.location.pathname.split("/")[2];
      // await pattern is the same as using then(), just makes it more streamline
      const response = await client.getEntry(pageId); // wait for this to resolve, returns response.
      setTripDetails(response);
      setIsLoading(false);
    };

    if (props.location.data) {
      setTripDetails(props.location.data);
      setIsLoading(false);
    } else {
      handleDataFetch();
    }
  }, [props.location]);

  // Haven't got the data yet, so hang tight
  if (isLoading) {
    return <></>;
  }

  return (
    <>
      <div className="trip-hero">
        <div className="hero-text-area">
          <div className="hero-title">
            <h1>{tripDetails.fields.tripName}</h1>
          </div>
          <hr className="style-1" />
          <div className="hero-tags">
            <Tag
              icon={faCalendarAlt}
              text={getDate(tripDetails.fields.tripDate, "long")}
            />
            <Tag
              icon={faMapMarkerAlt}
              text={tripDetails.fields.tripLocations}
            />
          </div>
          <ul className="no-style-light-blue">
            {tripDetails.fields.countriesVisitedInTrip.map((country, key) => (
              <li className="hero-inline-list_item" key={key}>
                <Link
                  to={`/countries/${country.sys.id}`}
                  className="country-link"
                >
                  {country.fields.countryName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {tripDetails.fields.tilePicTrip && (
          <div
            className="hero-image"
            style={{
              backgroundImage: `url(${tripDetails.fields.tilePicTrip.fields.file.url}?fm=jpg&fl=progressive&w=1600)`,
            }}
          ></div>
        )}
      </div>

      <div className="content-container">
        <CustomCarousel items={tripDetails.fields.tripPhotos} />

        <div className="content-section">
          <ReactMarkdown>{tripDetails.fields.highlights}</ReactMarkdown>
          <ReactMarkdown>{tripDetails.fields.tripItinirary}</ReactMarkdown>
        </div>

        <div className="content-section">
          <div className="blog">
            <ReactMarkdown>
              {tripDetails.fields.tripDetails.replace(
                /.JPG/gi,
                ".JPG?fl=progressive",
              )}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
}

export default Trip;
