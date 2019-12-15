const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/christianhrdina/development/wheres-shell/.cache/dev-404-page.js"))),
  "component---src-pages-countries-js": hot(preferDefault(require("/Users/christianhrdina/development/wheres-shell/src/pages/countries.js"))),
  "component---src-pages-country-js": hot(preferDefault(require("/Users/christianhrdina/development/wheres-shell/src/pages/country.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/christianhrdina/development/wheres-shell/src/pages/index.js"))),
  "component---src-pages-trip-js": hot(preferDefault(require("/Users/christianhrdina/development/wheres-shell/src/pages/trip.js"))),
  "component---src-pages-trips-js": hot(preferDefault(require("/Users/christianhrdina/development/wheres-shell/src/pages/trips.js")))
}

