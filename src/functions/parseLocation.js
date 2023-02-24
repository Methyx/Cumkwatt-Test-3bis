const parseLocation = (location) => {
  const result = {
    number: "",
    street: "",
    zip: "",
    city: "",
    dpt: "",
    lat: "",
    long: "",
  };
  result.number = location.properties.housenumber;
  result.street = location.properties.street;
  result.zip = location.properties.postcode;
  result.city = location.properties.city;
  result.dpt = location.properties.context.split(",")[1];
  result.long = location.geometry.coordinates[0];
  result.lat = location.geometry.coordinates[1];
  return result;
};

export default parseLocation;
