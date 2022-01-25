// Make a getData function and print the data in the console
async function getData(date) {
  const response = await fetch(
    `https://coronavirusapifr.herokuapp.com/data/france-by-date/${date}` // recup donnée API : reponse recup donée
  );
  const data = await response.json(); // la variable data attend et =>json les données
  return data[0];
}

//------------------------ GRAPH ----------------------------
const graph = document.getElementById("graph").getContext("2d"); // recup id du canvas

Chart.defaults.global.defaultFontSize = 13; // taille fonts

// Create the graph
let massPopChart = new Chart(graph, {
  type: "line", // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data: {
    labels: [],
    datasets: [
      {
        label: "Morts covid ", //titre de la légende
        data: [], //
        backgroundColor: "rgba(40,40,255,0.4)", // couleur fond
        borderColor: "rgba(40,40,255,1)", // couleur bordure
      },
    ],
  },
  options: {
    title: {
      display: true, // oui tu  affiches
      text: "Morts COVID-19", // choix titre texte
      fontSize: 24, // taille
    },
    legend: {
      display: false,
    },
    layout: {
      padding: {
        left: 50,
        right: 50,
        top: 50,
      },
    },
  },
});

let dates = [
  //liste de jour à afficher
  "01-12-2021",
  "02-12-2021",
  "03-12-2021",
  "04-12-2021",
  "05-12-2021",
  "06-12-2021",
  "07-12-2021",
  "08-12-2021",
  "09-12-2021",
  "10-12-2021",
  "11-12-2021",
  "12-12-2021",
  "13-12-2021",
  "14-12-2021",
  "15-12-2021",
  "16-12-2021",
  "17-12-2021",
  "18-12-2021",
  "19-12-2021",
  "20-12-2021",
  "21-12-2021",
  "22-12-2021",
  "23-12-2021",
  "24-12-2021",
  "25-12-2021",
  "26-12-2021",
  "27-12-2021",
  "28-12-2021",
  "29-12-2021",
  "30-12-2021",
  "31-12-2021",
  "01-01-2022",
  "02-01-2022",
  "03-01-2022",
  "04-01-2022",
  "05-01-2022",
  "06-01-2022",
  "07-01-2022",
  "08-01-2022",
  "09-01-2022",
  "10-01-2022",
  "11-01-2022",
  "12-01-2022",
  "13-01-2022",
  "14-01-2022",
  "15-01-2022",
  "16-01-2022",
  "17-01-2022",
  "18-01-2022",
  "19-01-2022",
  "20-01-2022",
  "21-01-2022",
  "22-01-2022",
  "23-01-2022",
  "24-01-2022",
];
massPopChart.data.labels = dates; // rempli les labels

let morts = [];
dates.forEach((day) => {
  // Call the getData function
  getData(day).then((res) => {
    massPopChart.data.datasets[0].data.push(res.incid_dchosp); // rajoute dans le tableau les morts journaliers
    massPopChart.update(); // update graph
  });
});
