import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonImg, IonInput, IonItem, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import Chart from 'chart.js/auto';
import { useRef, useEffect } from 'react';



const Tab2: React.FC = () => {
  
  const lineCanvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    lineChartMethod();
    return () => {
      destroyChart();
    };
  }, []);

    
  
  const lineChartMethod = () => {
    if (!lineCanvasRef.current) {
      return;
    }

    const labels = ['1 miles', '2 miles', '3 miles', '4 miles', '5 miles', '6 miles', '7 miles', '8 miles', '9 miles', '10 miles', '11 miles'];
    const data = [65, 59, 80, 81, 56, 55, 40, 10, 5, 50, 10, 15];

    var myChart = new Chart(lineCanvasRef.current, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: 'Elevation Found',
            fill: false,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
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
      myChart.destroy()
    }
    
  };
  
  const destroyChart = () => {
    if (lineCanvasRef.current) {
      const chartInstance = Chart.getChart(lineCanvasRef.current);
      if (chartInstance) {
        chartInstance.destroy();
      }
    }
  };

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
            <canvas ref={lineCanvasRef} style={{ position: 'relative', height: '20vh', width: '40vw' }}></canvas>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
