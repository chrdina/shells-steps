import React, { useEffect, useState } from "react";
import Tile from "../components/tile";
import client from "../contentfulProvider";
import { TimelineNavAnchor } from "../components/TimelineNav/TimlineNavAnchor";
import { TimelineNav } from "../components/TimelineNav/TimelineNav";

const Trips = () => {
  const [selectedYear, setSelectedYear] = useState();
  const [filterActive, setFilterActive] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    const handleFetchData = async () => {
      const response = await client.getEntries({
        content_type: "Trip",
        order: "-fields.tripDate",
      });
      console.log("Setting data");
      setData(response.items);
    };
    if (data == null) {
      handleFetchData();
    }
  }, []);

  const handleDateSelect = (year) => {
    if (year === selectedYear) {
      setSelectedYear("");
      setFilterActive(false);
    } else {
      setSelectedYear(year);
      setFilterActive(true);
    }
  };

  return (
    <>
      {data && (
        <TimelineNav
          data={data}
          selectedYear={selectedYear}
          onDateSelect={handleDateSelect}
        />
      )}

      <div className="content-container">
        <div className="page-header">
          <h1>Trips</h1>
        </div>
        <div className="tiles">
          {data &&
            data.map((trip) => {
              const tripId = trip.sys.id;
              return (
                <div key={tripId}>
                  <TimelineNavAnchor id={tripId} />
                  <Tile
                    key={tripId}
                    id={tripId}
                    to={`/trips/${tripId}`}
                    text={trip.fields.tripName}
                    imgSrc={
                      trip.fields.tilePicTrip &&
                      trip.fields.tilePicTrip.fields !== null
                        ? trip.fields.tilePicTrip.fields.file.url
                        : undefined
                    }
                    filteredOut={
                      filterActive &&
                      selectedYear !== trip.fields.tripDate.split("-")[0]
                    }
                  />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
export default Trips;
