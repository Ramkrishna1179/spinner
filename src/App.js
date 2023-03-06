import Date_Spinner from "./components/date_spinner/date_spinner";
import Month_Spinner from "./components/month_spinner/month_spinner";
import Year_Spinner from "./components/year_spinner/year_spinner";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
function App() {
  return (
    <div className="App container">
      <div className="row">
        <div className="col-4">
          <Date_Spinner />
        </div>
        <div className="col-4">
          <Month_Spinner />
        </div>
        <div className="col-4">
          <Year_Spinner />
        </div>
      </div>
    </div>
  );
}
export default App;
