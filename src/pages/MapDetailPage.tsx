import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent} from '@ionic/react'
import {RouteComponentProps} from 'react-router'
import {IonIcon} from '@ionic/react'
import {chevronBackOutline, chevronForwardOutline} from 'ionicons/icons'
interface MapDetailPageProps
	extends RouteComponentProps<{
		id: string
	}> {}

const MapDetailPage: React.FC<MapDetailPageProps> = ({match}) => {
	console.log(match)
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Direction {match.params.id}</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent>
				<IonIcon icon={chevronBackOutline} color='white' />
				Direction {match.params.id}
				<IonIcon icon={chevronForwardOutline} color='white' />
			</IonContent>
		</IonPage>
	)
}

export default MapDetailPage
