import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonImg, IonInput, IonItem, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard className='ion-card-wrapper'>
          <IonCardHeader>
            <IonCardTitle><IonInput label="Plan your hike!"></IonInput></IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonButton size="small" fill="outline" color = "medium" disabled shape="round">
              <IonImg src = "/images/location.png"></IonImg>
              New York City
            </IonButton>
          </IonCardContent>
          <IonCardContent>
            <IonItem>
              <IonInput label="Origin" labelPlacement="stacked" placeholder="One Pace Plaza, New York"></IonInput>
            </IonItem>
            <IonItem>
              <IonInput label="Destination" labelPlacement="stacked" placeholder="163 William Street, New York"></IonInput>
            </IonItem>
          </IonCardContent>
        </IonCard>
        <IonCard className='ion-card-journey-wrapper'>
          <IonCardHeader>
          <IonCardTitle>Journey Description</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            This is a steep hike! We have suggested the correct footwear below!
          </IonCardContent>
        </IonCard>
        <IonCard className='ion-card-elevation-wrapper'>
          <IonCardHeader>
          <IonCardTitle>Elevation Chart</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Sunny skies and warm winds means you should not wear a coat today. However! The terrain of your journey has high elevations, so it is advised you wear a jacket for the coming journey.
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
