import './App.css';
import ContactList from './contact-list/contact-list';
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import ContactPage from './contact/contact-page';

const mapStateToProps = (state) => {

  return {}
};

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/:phone" render={() => <ContactPage />} />
          <Route path='/' render={() => <ContactList />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
