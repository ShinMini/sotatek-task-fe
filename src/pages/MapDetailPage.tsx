import {
	IonPage,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonContent,
	IonButton,
	IonImg,
	IonItem,
	IonLabel,
	IonList,
	IonGrid,
	IonCol,
	IonRow
} from '@ionic/react'
import {RouteComponentProps} from 'react-router'
import {IonIcon} from '@ionic/react'
import {chevronBackOutline, chevronForwardOutline, homeOutline} from 'ionicons/icons'

import img1 from '../assets/img/1.jpg'

interface MapDetailPageProps
	extends RouteComponentProps<{
		id: string
	}> {}

const MapDetailPage: React.FC<MapDetailPageProps> = ({match, history}) => {
	console.log(match)
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonGrid>
						<IonRow>
							<IonCol size='auto'>
								<IonIcon
									icon={homeOutline}
									size='large'
									color='white'
									onClick={() => history.push('/explore')}
								/>
							</IonCol>
							<IonCol>
								<IonTitle className='lg'>your position is {match.params.id}</IonTitle>
							</IonCol>
						</IonRow>
					</IonGrid>
				</IonToolbar>
			</IonHeader>

			<IonContent>
				<IonIcon icon={chevronBackOutline} className='absolute left-arrow' />
				<IonIcon icon={chevronForwardOutline} className='absolute right-arrow' />
				<IonImg className='img' src={img1} />
			</IonContent>
		</IonPage>
	)
}

export default MapDetailPage
