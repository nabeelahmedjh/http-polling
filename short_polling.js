const app = require("express")();

const weathers = {
  Berlin: 15,
  Vienna: 17,
  Paris: 14,
  Madrid: 25,
};

const changes = {};

function getWeatherChangesFromThirdParty() {
  const berlinChanges = Math.ceil(Math.random() * 3 - 2);
  if (berlinChanges !== 0) {
    changes["Berlin"] = weathers["Berlin"] + berlinChanges;
    weathers["Berlin"] = changes["Berlin"];
  } else {
    delete changes["Berlin"];
  }

  const viennaChanges = Math.ceil(Math.random() * 3 - 2);
  if (viennaChanges !== 0) {
    changes["Vienna"] = weathers["Vienna"] + viennaChanges;
    weathers["Vienna"] = changes["Vienna"];
  } else {
    delete changes["Vienna"];
  }

  const parisChanges = Math.ceil(Math.random() * 3 - 2);
  if (parisChanges !== 0) {
    changes["Paris"] = weathers["Paris"] + parisChanges;
    weathers["Paris"] = changes["Paris"];
  } else {
    delete changes["Paris"];
  }

  const madridChanges = Math.ceil(Math.random() * 3 - 2);
  if (madridChanges !== 0) {
    changes["Madrid"] = weathers["Madrid"] + madridChanges;
    weathers["Madrid"] = changes["Madrid"];
  } else {
    delete changes["Madrid"];
  }

  return changes;
}

app.get("/weather", (req, res) => {
  res.json({
    weathers,
  });
});

setInterval(getWeatherChangesFromThirdParty, 5 * 1000); // 5 seconds

app.get("/weather/update", (req, res) => {
  res.json({
    changes,
  });
});

app.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});
