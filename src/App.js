import { ThemeProvider, BaseStyles } from "@primer/components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageHeader from "./components/PageHeader";

import Index from "./views/Index";
import Developers from "./views/Developers";

import "./index.scss";

function App() {
  return (
    <Router>
      <ThemeProvider colorMode="night">
        <BaseStyles>
          <PageHeader
            title="Trending"
            subTitle="See what the GitHub community is most excited about today."
          />
          <Switch>
            <Route path="/" exact>
              <Index />
            </Route>
            <Route path="/developers">
              <Developers />
            </Route>
          </Switch>
        </BaseStyles>
      </ThemeProvider>
    </Router>
  );
}

document.body.style.backgroundColor = "#0d1117";

export default App;
