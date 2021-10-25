import { BrowserRouter , Switch,Route,exact} from 'react-router-dom';
// components
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Cart from './components/header/cart/Cart';
import { TemplateProvider } from './templet/TemplateProvider';

function App() {
  return (
    <TemplateProvider>
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/cart" component={Cart}/>
        </Switch>
      </BrowserRouter>
    </TemplateProvider>
    
  );
}

export default App;
