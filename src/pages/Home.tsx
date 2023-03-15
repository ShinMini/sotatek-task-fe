import {
	IonPage,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonContent,
	IonList,
	IonItem,
	IonLabel,
	IonText,
	IonButton
} from '@ionic/react'

const Home: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle className='lg'>SotaTek Korea Onboarding Task</IonTitle>
					<IonText className='md darkGray'>[ FE / PM ]</IonText>
				</IonToolbar>
			</IonHeader>
			<IonContent className='ion-padding'>
				<IonText className='md gray'>
					Create a simple game where you are walking along a trail. {'\n'}
				</IonText>
				<div className='sp-1' />
				<IonText className='md gray'>
					You begin your adventure at the bottom of the trail and you hike your way up to
					the top.{'\n'}
				</IonText>
				<div className='sp-1' />
				<IonText className='md gray'>
					If you turn around you are facing the other direction. {'\n'}
				</IonText>
				<div className='sp-2' />
				<IonButton routerLink='/explore/map/1' className='md'>
					Explore!
				</IonButton>
			</IonContent>
		</IonPage>
	)
}

export default Home
