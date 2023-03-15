import {FC} from 'react'
import {IonApp, IonRouterOutlet} from '@ionic/react'
import {IonReactRouter} from '@ionic/react-router'
import {Route, Redirect} from 'react-router'

/* route screens */
import ExploreMap from '../pages/ExploreMap'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
import '../theme/variables.css'
import MapDetailPage from '../pages/MapDetailPage'

/* custom css */
import '../theme/custom.css'

const AppRouter: FC = () => {
	return (
		<IonApp>
			<IonReactRouter>
				<IonRouterOutlet>
					<Route exact path='/explore' component={ExploreMap} />
					<Route exact path='/explore/map/:id' component={MapDetailPage} />
					<Redirect exact from='/' to='/explore' />
				</IonRouterOutlet>
			</IonReactRouter>
		</IonApp>
	)
}

export default AppRouter
