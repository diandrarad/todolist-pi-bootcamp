import { Provider } from 'react-redux';
import store from '../redux/store';
import Header from './Header'
import Form from './Form'
import ToDoList from './ToDoList'
import Footer from './Footer'

export default function App() {

  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <Form />
        <ToDoList />
        <Footer />
      </div>
    </Provider>
  )
}

