import '@/styles/globals.css'
import { Provider } from 'react-redux'
import store from '@/ReduxToolkit/store'
import NavBar from '@/components/NavBar/NavBar'

export default function App({ Component, pageProps }) {
  return (
    //envolvemos toda la app con la etiqueta provider para acceder al redux
    <Provider store={store}>
      <NavBar/>
      <Component {...pageProps} />
    </Provider>
  )
}
