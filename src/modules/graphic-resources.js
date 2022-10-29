function importAll(r) {
  const obj = {};
  const regex = /\w+/;

  r.keys().forEach((key) => {
    const result = key.match(regex);
    return (obj[result] = r(key));
  });

  return obj;
}

const icons = importAll(
  require.context("../images/weather-icons", true, /\.svg$/)
);
const images = importAll(
  require.context("../images/weather-images", true, /\.png$/)
);

export { icons, images };
