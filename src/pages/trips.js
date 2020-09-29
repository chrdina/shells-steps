import React, { useEffect, useState } from "react";
import Tile from "../components/tile";
import client from "../contentfulProvider";
import AnchorNav from "../components/anchorNav";

const Trips = () => {

  const [selectedYear, setSelectedYear] = useState();
  const [filterActive, setFilterActive] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    const handleFetchData = async () => {
      const response = await client.getEntries({ content_type: "Trip", order: "-fields.tripDate" });
      console.log("Setting data");
      setData(response.items);
    }
    if (data == null) {
      handleFetchData();
    }
  }, [])

  const handleDateSelect = (year) => {
    if (year === selectedYear) {
      setSelectedYear("");
      setFilterActive(false);
    } else {
      setSelectedYear(year);
      setFilterActive(true);
    }
  }

  return (
    <>
      {data && (
        <AnchorNav
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
            data.map((trip) => (
              <Tile
                key={trip.sys.id}
                id={trip.sys.id}
                to={`/trips/${trip.sys.id}`}
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
            ))}
        </div>
      </div>

    </>
  );
}
export default Trips;
