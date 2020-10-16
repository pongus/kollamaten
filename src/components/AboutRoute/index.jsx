import React from "react";
import { Helmet } from "react-helmet";
import Header from "../Header";
import BackButton from "../BackButton";
import Content from "../Content";
import Title from "../Title";

const AboutRoute = () => (
  <>
    <Helmet title="Kolla maten | Om" />

    <Header>
      <BackButton />
    </Header>

    <Content>
      <Title text="Om Kolla maten" />

      <p>
        Kolla maten skapades för att underlätta för konsumenter att se var maten
        kommer ifrån. En anonym anläggningskod gör det onödigt svårt för
        konsumenter som värnar om det närodlade och lokalproducerade.
      </p>
      <p>
        Viktigt att poängtera är dock att anläggningskoden som finns angiven på
        matvaror inte nödvändigtvis visar var produkten är tillverkad.
        Anläggningskoden visar vilken anläggning som matvaran passerade senast,
        innan den nådde dig som konsument. Ibland kan den ha passerat flera
        olika anläggningar innan den nådde fram till den anläggning som anges på
        förpackningen.
      </p>
      <p>
        Vi hämtar uppgifter om anläggningar från{" "}
        <a href="https://www.livsmedelsverket.se/">Livsmedelsverket</a>.
      </p>
      <p>
        Om du skulle hitta några felaktigheter eller har några
        förbättringsförslag kan du kontakta oss på{" "}
        <a href="mailto:hej@kollamaten.se">hej@kollamaten.se</a>.
      </p>
    </Content>
  </>
);

export default AboutRoute;
