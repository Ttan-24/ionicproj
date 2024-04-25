import { IonBackButton, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { heart, logoApple, settingsSharp, star } from 'ionicons/icons';

function OpenLearnMore() {
  window.open('https://weather.com/', '_system', 'location=yes');
}

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard className='ion-card-wrapper'>
          <IonCardHeader>
            <IonCardTitle><IonInput label="Good Afternoon, Tanvi"></IonInput></IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonButton size="small" fill="outline" color = "medium" disabled shape="round">
              <IonImg src = "/images/location.png"></IonImg>
              New York City
            </IonButton>
          </IonCardContent>
        </IonCard>
        <IonCard className='ion-card-weather-wrapper'>
          <IonCardHeader>
          <IonCardTitle>Weather Description</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Sunny skies and warm winds means you should not wear a coat today. However! The terrain of your journey has high elevations, so it is advised you wear a jacket for the coming journey.
          </IonCardContent>
          <IonCardContent>
            Enjoy your hike!
          </IonCardContent>
          <IonButton fill="clear" onClick={OpenLearnMore} color="primary">Learn More</IonButton>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
