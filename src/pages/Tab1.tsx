import {
  IonBackButton,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";
import "./global.css";
import { heart, logoApple, settingsSharp, star } from "ionicons/icons";
import Tab3 from "./Tab3";
import { useState } from "react";
import axios from "axios";
//import LogManager from './LogManager';

//let log = LogManager.log;
//let logarr = LogManager.logs;

function OpenLearnMore() {
  window.open("https://weather.com/", "_system", "location=yes");
  //log("clicked - opens the weather hyperlink");
  //logarr.push("Opens weather link");
}

const Tab1: React.FC = () => {
  //   let [myData, setData] = useState<any>(null);
  //   const [arrayId, setArrayId] = useState<string[]>([]);
  //   function onButtonClickAPI() {
  //     // run an axios request to go get some data from the internet
  //     const theUrl = "https://api.open-elevation.com/api/v1/lookup?locations=41.161758,-8.583933";
  //     axios.get(theUrl).then(
  //       (response) => {
  //         const getId = response.data.results;
  //         const allIds = getId.map((item: {results: string}) => item.results); // Extract titles
  //         console.log(allIds);
  //         setArrayId(allIds);
  //       }
  //     ).catch((error) => {
  //       console.error("Axios error: ", error);
  //     });
  // }
  const [elevationData, setElevationData] = useState<any[]>([]);
  const [anotherElevationData, anotherSetElevationData] = useState<any[]>([]);

  function onButtonClickAPI() {
    // Run an axios request to get data from the internet
    const theUrl =
      "https://api.open-elevation.com/api/v1/lookup?locations=41.161758,-7.583933";
    axios
      .get(theUrl)
      .then((response) => {
        // Assuming response.data.results is an array of objects
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
  }

  function onAnotherButtonClickAPI() {
    // Run an axios request to get data from the internet
    const theUrl =
      "https://api.open-elevation.com/api/v1/lookup?locations=41.161758,-8.583933";
    axios
      .get(theUrl)
      .then((response) => {
        // Assuming response.data.results is an array of objects
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

  return (
    <IonPage>
      <IonHeader></IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense"></IonHeader>
        <IonCard className="ion-card-wrapper">
          <IonCardHeader>
            <IonCardTitle className="ion-card-title-wrapper">
              Good Afternoon, Tanvi
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
        </IonCard>
        <IonCard className="ion-card-weather-wrapper">
          <IonCardHeader>
            <IonCardTitle className="weather-title">
              Weather Description
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent className="weather-description">
            Sunny skies and warm winds means you should not wear a coat today.
            However! The terrain of your journey has high elevations, so it is
            advised you wear a jacket for the coming journey.
          </IonCardContent>
          <IonCardContent className="weather-description">
            Enjoy your hike!
          </IonCardContent>
          <IonButton fill="clear" onClick={OpenLearnMore} color="primary">
            Learn More
          </IonButton>
        </IonCard>
        <IonCard>
          <IonButton onClick={onButtonClickAPI}>
            Click here for the API
          </IonButton>
          <IonCardContent>
            {elevationData.map((data, index) => (
              <IonItem key={index}>
                <IonLabel>
                  Latitude: {data.latitude}, Longitude: {data.longitude},
                  Elevation: {data.elevation} meters
                </IonLabel>
              </IonItem>
            ))}
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonButton onClick={onAnotherButtonClickAPI}>
            Click here for another API call
          </IonButton>
          <IonCardContent>
            {anotherElevationData.map((data, index) => (
              <IonItem key={index}>
                <IonLabel>
                  Latitude: {data.latitude}, Longitude: {data.longitude},
                  Elevation: {data.elevation} meters
                </IonLabel>
              </IonItem>
            ))}
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardContent>
            <IonList>
              {elevationData.map((data, index) => {
                // Ensure there is a corresponding element in anotherElevationData
                const anotherData = anotherElevationData[index];
                if (anotherData) {
                  
                  const elevationDifference = data.elevation - anotherData.elevation;
                    let result ="";
                    let imageResult = '';
                    switch (true) {
                      case (elevationDifference < 10):
                        console.log("high heels");
                        result = "hight heels";
                        break;
                      case (elevationDifference < 25):
                        console.log("dress/fancy shoes");
                        result = "dress/fancy shoes";
                        break;
                      case (elevationDifference < 50):
                        console.log("normal shoes");
                        result = "normal shoes";
                        imageResult = "images/shoe.png";
                        break;
                      case (elevationDifference < 100):
                        console.log("trainers");
                        result = "trainers";
                        imageResult = "images/trainers.png";
                        break;
                      case (elevationDifference > 100):
                        console.log("hiking boots");
                        result = "hiking boots";
                        break;
                      default:
                        console.log("No shoes found for this elevation.");
                        result = "No shoes found for this elevation.";
                    }
                  return (
                    <IonItem key={index}>
                      <IonLabel>
                        Elevation difference at index {index}:{" "}
                        {elevationDifference} meters
                        <IonCard>
                          <IonCardContent>{result}</IonCardContent>
                          <IonImg className='shoe-image' src={imageResult}></IonImg>
                        </IonCard>
                      </IonLabel>
                    </IonItem>
                  );
                }
                return null; // Return null if there is no corresponding element
              })}
            </IonList>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
