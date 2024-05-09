import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonThumbnail,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab2.css";
import Chart from "chart.js/auto";
import { useRef, useEffect, useState } from "react";
import axios from "axios";
import { checkmark, heart } from "ionicons/icons";
//import LogManager from './LogManager';

const Tab2: React.FC = () => {
  const lineCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const [originLatitudeData, setOriginLatitudeData] = useState<any>();
  const [originLongitudeData, setOriginLongitudeData] = useState<any>();
  const [destinationLatitudeData, setDestinationLatitudeData] = useState<any>();
  const [destinationLongitudeData, setDestinationLongitudeData] =
    useState<any>();
  const [origin, setOrigin] = useState<string>("");
  const [destination, setDestination] = useState<string>("");
  const [elevationData, setElevationData] = useState<any[]>([]);
  const [anotherElevationData, anotherSetElevationData] = useState<any[]>([]);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    lineChartMethod();
    return () => {
      destroyChart();
    };
  }, []);

  //log("testing methods()");
  // logarr.push("testing methods()");

  const lineChartMethod = () => {
    if (!lineCanvasRef.current) {
      return;
      //log("lineChartMethod() called");
    }

    const labels = [
      "1 miles",
      "2 miles",
      "3 miles",
      "4 miles",
      "5 miles",
      "6 miles",
      "7 miles",
      "8 miles",
      "9 miles",
      "10 miles",
      "11 miles",
    ];
    const data = [65, 59, 80, 81, 56, 55, 40, 10, 5, 50, 10, 15];
    Chart.defaults.color = "#D9D9D9";
    Chart.defaults.borderColor = "#856464";
    var myChart = new Chart(lineCanvasRef.current, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: "Elevation Found",
            fill: false,
            backgroundColor: "#FFA133",
            borderColor: "#FFA133",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "FFA133",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "FFA133",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data,
            spanGaps: false,
          },
        ],
      },
    });
    return () => {
      myChart.destroy();
    };
  };

  const destroyChart = () => {
    if (lineCanvasRef.current) {
      const chartInstance = Chart.getChart(lineCanvasRef.current);
      if (chartInstance) {
        chartInstance.destroy();
        //log("destroychart() called");
        // logarr.push("destroychart() called");
      }
    }
  };

  function onGeocodeOriginAPI() {
    // Run an axios request to get data from the internet
    const baseURL = "https://geocode.maps.co/search?q=";
    const apiKey = "663d026c06821221122017uny22fd0f";

    const theOriginUrl = `${baseURL}${encodeURIComponent(
      origin
    )}&api_key=${apiKey}`;

    axios
      .get(theOriginUrl)
      .then((response) => {
        // Assuming response.data.results is an array of objects
        if (response.data && Array.isArray(response.data)) {
          console.log(theOriginUrl);
          console.log("The latitude is: ", response.data[0]?.lat);
          console.log("The longitude is: ", response.data[0]?.lon);
          setOriginLatitudeData(response.data[0]?.lat);
          setOriginLongitudeData(response.data[0]?.lon);
        } else {
          console.log("Unexpected response structure: ", response.data);
        }
      })
      .catch((error) => {
        console.error("Axios error: ", error);
      });
  }

  function onGeocodeDestinationAPI() {
    const baseURL = "https://geocode.maps.co/search?q=";
    const apiKey = "663d026c06821221122017uny22fd0f";
    const theDestinationUrl = `${baseURL}${encodeURIComponent(
      destination
    )}&api_key=${apiKey}`;

    axios
      .get(theDestinationUrl)
      .then((response) => {
        // Assuming response.data.results is an array of objects
        if (response.data && Array.isArray(response.data)) {
          console.log(theDestinationUrl);
          console.log("The latitude is: ", response.data[0]?.lat);
          console.log("The longitude is: ", response.data[0]?.lon);
          setDestinationLatitudeData(response.data[0]?.lat);
          setDestinationLongitudeData(response.data[0]?.lon);
        } else {
          console.log("Unexpected response structure: ", response.data);
        }
      })
      .catch((error) => {
        console.error("Axios error: ", error);
      });
  }

  function getElevationAPI() {
    const baseOriginElevationUrl =
      "https://api.open-elevation.com/api/v1/lookup?locations=";
    console.log("elevation latitude: " + originLatitudeData);
    console.log("elevation longitude: " + originLongitudeData);
    const theOriginElevationUrl = `${baseOriginElevationUrl}${originLatitudeData},${originLongitudeData}`;
    axios
      .get(theOriginElevationUrl)
      .then((response) => {
        // Assuming response.data.results is an array of objects
        console.log(theOriginElevationUrl);
        if (response.data && Array.isArray(response.data.results)) {
          console.log("The data is: ", response.data.results);
          setElevationData(response.data.results);
        } else {
          console.log("Unexpected response structure: ", response.data);
        }
      })
      .catch((error) => {
        console.error("Axios error: ", error);
      });

    const baseDestinationElevationUrl =
      "https://api.open-elevation.com/api/v1/lookup?locations=";
    console.log("elevation latitude: " + destinationLatitudeData);
    console.log("elevation longitude: " + destinationLongitudeData);
    const theDestinationElevationUrl = `${baseDestinationElevationUrl}${destinationLatitudeData},${destinationLongitudeData}`;
    axios
      .get(theDestinationElevationUrl)
      .then((response) => {
        // Assuming response.data.results is an array of objects
        console.log(theDestinationElevationUrl);
        if (response.data && Array.isArray(response.data.results)) {
          console.log("The data is: ", response.data.results);
          anotherSetElevationData(response.data.results);
        } else {
          console.log("Unexpected response structure: ", response.data);
        }
      })
      .catch((error) => {
        console.error("Axios error: ", error);
      });
  }

  function lerp(origin: number, destination: number, scalar: number) {
    let difference = destination - origin;
    return origin + difference * scalar;
  }
  function updateChart() {
    let steps = 5;
    let step_distance = 1 / steps;
    let scalar;
    let x, y, travel_points;
    const baseElevationUrl =
      "https://api.open-elevation.com/api/v1/lookup?locations=";
    for (let i = 0; i < steps; i++) {
      scalar = (1 / steps) * i;
      x = lerp(originLatitudeData, destinationLatitudeData, scalar);
      y = lerp(originLongitudeData, destinationLongitudeData, scalar);
      const theElevationUrl = `${baseElevationUrl}${x},${y}`;
      axios
        .get(theElevationUrl)
        .then((response) => {
          // Assuming response.data.results is an array of objects
          console.log(theElevationUrl);
          if (response.data && Array.isArray(response.data.results)) {
            console.log("The data is: ", response.data.results);
            setData(response.data.results);
          } else {
            console.log("Unexpected response structure: ", response.data);
          }
        })
        .catch((error) => {
          console.error("Axios error: ", error);
        });

      data.map((data, index) => {
        // Ensure there is a corresponding element in anotherElevationData
        // const anotherData = anotherElevationData[index];
        // if (anotherData) {
        //   const elevationDifference =
        //     data.elevation - anotherData.elevation;
        console.log("data elevation", data.elevation);
      });
      travel_points = theElevationUrl;
    }
  }

  return (
    <IonPage>
      <IonHeader></IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense"></IonHeader>
        <IonCard className="ion-card-wrapper">
          <IonCardHeader>
            <IonCardTitle className="ion-card-title-wrapper">
              Plan your hike!
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonButton
              size="small"
              fill="outline"
              color="light"
              disabled
              shape="round"
            >
              <IonImg src="/images/placeholder.svg"></IonImg>
              New York City
            </IonButton>
          </IonCardContent>
          <IonCardContent>
            <IonItem className="map-input-wrapper">
              <IonInput
                value={origin}
                onIonChange={(e) => {
                  const newOrigin = e.detail.value ?? ""; // Fallback to empty string if null
                  console.log("New origin:", newOrigin); // Log the new value for debugging
                  setOrigin(newOrigin);
                }}
                label="Origin"
                labelPlacement="stacked"
                placeholder="One Pace Plaza, New York"
                color="primary"
              >
                <IonButton slot="end" color={"secondary"} onClick={onGeocodeOriginAPI}>
                  <IonIcon
                    className="ion-icon-checkmark"
                    slot="icon-only"
                    size="small"
                    icon={checkmark}
                  ></IonIcon>
                </IonButton>
              </IonInput>
            </IonItem>
            <IonItem className="map-input-wrapper">
              <IonInput
                value={destination}
                onIonChange={(e) => {
                  const newDestination = e.detail.value ?? ""; // Fallback to empty string if null
                  console.log("New origin:", newDestination); // Log the new value for debugging
                  setDestination(newDestination);
                }}
                label="Destination"
                labelPlacement="stacked"
                placeholder="163 William Street, New York"
                color="primary"
              >
                <IonButton slot="end" color={"secondary"} onClick={onGeocodeDestinationAPI}>
                  <IonIcon
                    className="ion-icon-checkmark"
                    slot="icon-only"
                    size="small"
                    icon={checkmark}
                  ></IonIcon>
                </IonButton>
              </IonInput>
            </IonItem>
            <IonButton color={"secondary"} onClick={getElevationAPI} shape="round" expand="block">
              {" "}
              Get Elevation
            </IonButton>
          </IonCardContent>
        </IonCard>
        <IonCard className="ion-card-journey-wrapper">
          <IonCardHeader>
            <IonCardTitle>Journey Description</IonCardTitle>
          </IonCardHeader>
          <IonCardContent className="card-journey-description">
            {elevationData.map((data, index) => {
              // Ensure there is a corresponding element in anotherElevationData
              const anotherData = anotherElevationData[index];
              if (anotherData) {
                const elevationDifference =
                  Math.abs(data.elevation - anotherData.elevation);
                console.log("elevation difference", elevationDifference);
                let result = "";
                let imageResult = "";
                switch (true) {
                  case elevationDifference < 10:
                    console.log("high heels");
                    result = "high heels";
                    imageResult = "images/highheels.png";
                    break;
                  case elevationDifference < 25:
                    console.log("dress/fancy shoes");
                    result = "dress/fancy shoes";
                    imageResult = "images/fancy.png";
                    break;
                  case elevationDifference < 50:
                    console.log("normal shoes");
                    result = "normal shoes";
                    imageResult = "images/normalshoe.png";
                    break;
                  case elevationDifference < 100:
                    console.log("trainers");
                    result = "trainers";
                    imageResult = "images/trainers.png";
                    break;
                  case elevationDifference > 100:
                    console.log("hiking boots");
                    result = "hiking boots";
                    imageResult = "images/hikeshoe.png";
                    break;
                  default:
                    console.log("No shoes found for this elevation.");
                    result = "No shoes found for this elevation.";
                }
                return (
                  <IonLabel key={index}>
                    We suggest wearing {result}!
                    <IonImg className="shoe-image" src={imageResult}></IonImg>
                  </IonLabel>
                );
              }
              return null; // Return null if there is no corresponding element
            })}
          </IonCardContent>
        </IonCard>
        <IonCard className="ion-card-elevation-wrapper">
          <IonCardHeader>
            <IonCardTitle>Elevation Chart</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <canvas
              ref={lineCanvasRef}
              style={{
                position: "relative",
                height: "20vh",
                width: "40vw",
                color: "#FFA133",
              }}
            ></canvas>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
