import {IonPage, IonRouterOutlet} from '@ionic/react'
import {RouteComponentProps, Route, Redirect} from 'react-router'
import MapsListPage from './MapsListPage'
import MapDetailPage from './MapDetailPage'

const ExploreMap: React.FC<RouteComponentProps> = ({match}) => {
	return (
		<IonPage>
			<IonRouterOutlet>
				<Route exact path={match.url} component={MapsListPage} />
				<Route path={`${match.url}/map/:id`} component={MapDetailPage} />
				<Route render={() => <Redirect to={match.url} />} />
			</IonRouterOutlet>
		</IonPage>
	)
}

export default ExploreMap
