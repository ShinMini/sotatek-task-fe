import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent} from '@ionic/react'
import {RouteComponentProps} from 'react-router'

interface MapDetailPageProps
	extends RouteComponentProps<{
		id: string
	}> {}

const MapDetailPage: React.FC<MapDetailPageProps> = ({match}) => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Map Detail</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>Direction {match.params.id}</IonContent>
		</IonPage>
	)
}

export default MapDetailPage
