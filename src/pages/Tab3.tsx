import { AccordionGroupCustomEvent, IonAccordion, IonAccordionGroup, IonAlert, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonModal, IonPage, IonTitle, IonToggle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { useState, useRef } from 'react';
import './Tab3.css';
import { OverlayEventDetail } from '@ionic/react/dist/types/components/react-component-lib/interfaces';


const Tab3: React.FC = () => {
  // let logs = LogManager.getLogs();
  // let log = LogManager.log;
  // // let logarr = LogManager.logs;
  // const modal = useRef<HTMLIonModalElement>(null);
  // const input = useRef<HTMLIonInputElement>(null);
  
  // const [applicationLog, setApplicationLog] = useState<any>("");
  // function log (stuffToLog: any) {
  //   console.log(stuffToLog);
  //   setApplicationLog(applicationLog + "<<" + stuffToLog);
  // }

  const [applicationLog, setApplicationLog] = useState<string>("");

  function log(stuffToLog: any) {
    console.log(stuffToLog);
    setApplicationLog((prevLog) => prevLog + "\n" + stuffToLog); // Add a newline
  }

  
  
  function onAbout() {
    log("onAbout clicked");
  }

  function onLog() {
    log("onLog clicked");
  }

  function onActivity() {
    log("onActivity clicked");
  }

  function onNotifications() {
    log("onNotifications clicked");
  }

  function onUserTimeSpent() {
    log("onUserTimeSpent clicked");
  }
  function onFavourites() {
    log("onFavourites clicked");
  }
  function onAccessibility() {
    log("onAccessibility clicked");
  }

  if (process.env.NODE_ENV === 'production') {
    console.log = () => {}; // Override console.log
    console.error = () => {}; // Override console.error
    console.debug = () => {}; // Override console.debug
  }

  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
        </IonHeader>
        <IonCard className='ion-card-wrapper'>
          <IonCardHeader>
            <IonCardTitle className='ion-card-title-wrapper'>Settings</IonCardTitle>
            
            <IonAccordionGroup className='accordian-list'>
          <IonAccordion value="first">
          <IonItem slot="header" color="secondary">
          <IonLabel className='settings-label' onClick={onAbout}>ABOUT</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
          An app that takes live geographical data (elevation/precipitation/etc.) from the surrounding area and suggests what clothing to wear when they go out today. For example, if the land is not steep it will recommend to wear heels or flats. But if it was steep then it will suggest hiking boots or sneakers
          </div>
          </IonAccordion>
          <IonAccordion value="second">
          <IonItem slot="header" color="secondary">
          <IonLabel className='settings-label' onClick={onLog}>LOGS</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content" style={{ whiteSpace: 'pre-wrap' }}>
          {applicationLog}
        </div>
          </IonAccordion>
          <IonAccordion value="third">
          <IonItem slot="header" color="secondary">
          <IonLabel className='settings-label' onClick={onActivity}>YOUR ACTIVITY</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
          You recent activity:
          Favourited route
          </div>
          </IonAccordion>
          <IonAccordion value="fourth">
          <IonItem slot="header" color="secondary">
          <IonLabel className='settings-label' onClick={onNotifications}>NOTIFICATIONS</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
          Checkout our recent update!
          </div>
          </IonAccordion>
          <IonAccordion value="fifth">
          <IonItem slot="header" color="secondary">
          <IonLabel className='settings-label' onClick={onUserTimeSpent}>TIME SPENT</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
          You have been using our app for : 1 hour 20 mins
          </div>
          </IonAccordion>
          <IonAccordion value="sixth">
          <IonItem slot="header" color="secondary">
          <IonLabel className='settings-label' onClick={onFavourites}>FAVOURITE</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
          Favourite routes
            <IonList>
              From One Pace Plaza to 160 William Street
            </IonList>
            <IonList>
              From WTC Station to 130 William Street
            </IonList>
          </div>
          </IonAccordion>
          <IonAccordion value="seventh">
          <IonItem slot="header" color="secondary">
          <IonLabel className='settings-label' onClick={onAccessibility}>ACCESSIBILITY</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
          <IonToggle>Dark Mode</IonToggle> 
          </div>
          </IonAccordion>
        </IonAccordionGroup>
            
            {/* <IonList>
            {logs.map((log, index) => (
              <IonItem key={index}>
              <IonLabel>{log}</IonLabel>
              </IonItem>
            ))}
            </IonList> */}
          </IonCardHeader>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
