import {
	IonPage,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonContent,
	IonList,
	IonItem,
	IonLabel
} from '@ionic/react'

const MapsListPage: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Maps</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonList>
					<IonItem routerLink='/explore/map/1'>
						<IonLabel>Map 1</IonLabel>
					</IonItem>
					<IonItem routerLink='/explore/map/2'>
						<IonLabel>Map 2</IonLabel>
					</IonItem>
				</IonList>
			</IonContent>
		</IonPage>
	)
}

export default MapsListPage
