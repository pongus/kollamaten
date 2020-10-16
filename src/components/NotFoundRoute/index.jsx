import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Header from "../Header";
import Content from "../Content";
import Title from "../Title";

const NotFoundRoute = () => (
  <>
    <Helmet title="Kolla maten | 404" />

    <Header />

    <Content>
      <Title text="404" />

      <p>
        Vi kunde tyvärr inte hitta sidan du försökte nå, gå{" "}
        <Link to="/">tillbaka</Link> och försök igen.
      </p>
    </Content>
  </>
);

export default NotFoundRoute;
