import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

import { useParams } from "react-router-dom";

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

function Trip() {
  const [isLoading, setIsLoading] = useState(true);
  const [tripDetails, setTripDetails] = useState({});

  const urlParams = useParams();

  useEffect(() => {
    const handleDataFetch = async () => {
      const pageId = urlParams.id;

      const response = await client.getEntry(pageId);
      setTripDetails(response);
      setIsLoading(false);
    };

    handleDataFetch();
  }, [urlParams.id]);

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
