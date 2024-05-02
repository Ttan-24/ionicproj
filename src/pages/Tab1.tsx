import { IonBackButton, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import './global.css';
import { heart, logoApple, settingsSharp, star } from 'ionicons/icons';
import Tab3 from './Tab3';
import { useState } from 'react';
//import LogManager from './LogManager';

//let log = LogManager.log;
//let logarr = LogManager.logs;

function OpenLearnMore() {
  window.open('https://weather.com/', '_system', 'location=yes');
  //log("clicked - opens the weather hyperlink");
  //logarr.push("Opens weather link");
  
}

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
        </IonHeader>
        <IonCard className='ion-card-wrapper'>
          <IonCardHeader>
            <IonCardTitle className='ion-card-title-wrapper'>Good Afternoon, Tanvi</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonButton size="small" fill="outline" color = "light" disabled shape="round">
              <IonImg src = "/images/placeholder.svg"></IonImg>
              New York City
            </IonButton>
          </IonCardContent>
        </IonCard>
        <IonCard className='ion-card-weather-wrapper'>
          <IonCardHeader>
          <IonCardTitle className='weather-title'>Weather Description</IonCardTitle>
          </IonCardHeader>
          <IonCardContent className='weather-description'>
            Sunny skies and warm winds means you should not wear a coat today. However! The terrain of your journey has high elevations, so it is advised you wear a jacket for the coming journey.
          </IonCardContent>
          <IonCardContent className='weather-description'>
            Enjoy your hike!
          </IonCardContent>
          <IonButton fill="clear" onClick={OpenLearnMore} color="primary">Learn More</IonButton>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
