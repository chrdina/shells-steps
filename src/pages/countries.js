import React from 'react';
import Tile from '../components/tile';
import client from '../contentfulProvider';

// console.log(countriesArray);

function Countries() {

  var content = [];

  client.getEntries({content_type: 'country'}).then(entries => {
    entries.items.forEach(entry => {
      if(entry.fields) {
        content.push(entry.fields);
      }
    })
  })

  console.log(content)

  return (
    <div>
      <h1>Countries</h1>
      <ol>

      </ol>
    </div>
  );
}

export default Countries;
