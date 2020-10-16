import React, { PureComponent } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "react-jss";
import Analytics from "react-router-ga";
import axios from "axios";
import file from "./list.txt";
import HomeRoute from "./components/HomeRoute";
import AboutRoute from "./components/AboutRoute";
import ListRoute from "./components/ListRoute";
import DetailsRoute from "./components/DetailsRoute";
import NotFoundRoute from "./components/NotFoundRoute";

const theme = {
  font: {
    regular: "OpenSans-Regular"
  },
  color: {
    dark: "#4A4A4A",
    gray: "#C8C8C8",
    light: "#FFFFFF",
    blueDark: "#001E31",
    blue: "#004573",
    blueLight: "#CDE8F8"
  },
  space: {
    minor: 5,
    small: 15,
    normal: 25,
    large: 35,
    input: 52,
    header: 70,
    maxWidth: 850,
    backButton: 75,
    logo: 200
  }
};

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      establishments: [],
      height: null
    };
  }

  componentDidMount() {
    this.setHeight();

    axios
      .get(file)
      .then(result => {
        this.setState({
          establishments: result.data
        });
      })
      .then(() => {
        this.setState({
          isLoaded: true
        });
      });

    window.addEventListener("resize", this.setHeight);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.setHeight);
  }

  setHeight = () => {
    const { height } = this.state;
    const innerHeight = window.innerHeight;

    if (height !== innerHeight) {
      this.setState({
        height: innerHeight
      });
    }
  };

  homeRoute = () => {
    const { establishments } = this.state;

    return <HomeRoute amount={establishments.length} />;
  };

  aboutRoute = () => <AboutRoute />;

  listRoute = () => {
    const { establishments } = this.state;

    return <ListRoute establishments={establishments} />;
  };

  detailsRoute = ({ match }) => {
    const { isLoaded, establishments } = this.state;
    const details = establishments.find(
      establishment => establishment.id === match.params.id
    );

    return isLoaded ? <DetailsRoute details={details} /> : null;
  };

  notFoundRoute = () => <NotFoundRoute />;

  render() {
    const { height } = this.state;

    return (
      <Router>
        <div className="wrapper" style={{ height }}>
          <ThemeProvider theme={theme}>
            <Analytics id="UA-135010099-1">
              <Switch>
                <Route exact path="/" component={this.homeRoute} />
                <Route exact path="/om" component={this.aboutRoute} />
                <Route exact path="/lista" component={this.listRoute} />
                <Route exact path="/SE/:id" component={this.detailsRoute} />
                <Route component={this.notFoundRoute} />
              </Switch>
            </Analytics>
          </ThemeProvider>
        </div>
      </Router>
    );
  }
}

export default App;
