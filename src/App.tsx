import {setupIonicReact} from '@ionic/react'

import AppRouter from './navigation/AppRouter'

setupIonicReact()

const App: React.FC = () => <AppRouter />

export default App
