/* eslint-disable no-unused-vars, no-console */
import React from "react";
import { shape, string } from "prop-types";
import { Helmet } from "react-helmet";
import Header from "../Header";
import BackButton from "../BackButton";
import Content from "../Content";
import Title from "../Title";
import NotFoundRoute from "../NotFoundRoute";

const categoryMapping = {
  AH: "Fiskauktion",
  BV: "Integrerad butiksverksamhet",
  CC: "Uppsamlingscentral",
  "CC(g)": "Uppsamlingscentral för gelatin",
  "CC(k)": "Uppsamlingscentral för kollagen",
  CP: "Styckningsanläggning",
  CS: "Kyl- och fryshus",
  "CS(f)": "Fryshus",
  "CS(k)": "Kylhus",
  "CS(i)": "Infrysning",
  "CS(kf)": "Kyl- och fryshus",
  DC: "Leveransanläggning",
  EPC: "Äggpackeri",
  FFPP: "Anläggning för färska fiskeriprodukter",
  FV: "Fabriksfartyg",
  GHE: "Vilthanteringsanläggning",
  LEP: "Äggproduktanläggning (flytande äggprodukter)",
  MM: "Produktionsanläggning för malet kött",
  MP: "Produktionsanläggning för köttberedningar",
  "MP(sam)":
    "Sammansättning av livsmedel av vegetabiliskt ursprung med obearbetade livsmedel av animaliskt ursprung utan ytterligare bearbetning",
  MSM: "Produktionsanläggning för maskinurbenat kött",
  PC: "Reningsanläggning",
  PP: "Produktionsanläggning",
  "PP(f)": "Produktionsanläggningar för utsmält djurfett och fettgrevar",
  "PP(g)": "Produktionsanläggningar för gelatin",
  "PP(k)": "Produktionsanläggningar för kollagen",
  "PP(p)": "Produktionsanläggningar för mjölkbaserade pulverprodukter",
  "PP(bl)": "Produktionsanläggning för blodprodukter",
  "PP(mp)": "Produktionsanläggning för köttprodukter",
  "PP(pap)":
    "Produktionsanläggning för köttextrakt och varje form av mjölprodukt från kött",
  "PP(sam)":
    "Sammansättning av livsmedel av vegetabiliskt ursprung med obearbetade livsmedel av animaliskt ursprung med ytterligare bearbetning",
  "PP(st)": "Behandlade magsäckar, urinblåsor och tarmar",
  RW: "Omförpackningsanläggning",
  SH: "Slakteri",
  WM: "Grossistmarknad",
  ZV: "Frysfartyg",
  TL: "Torrvarulager",
  TR: "Integrerad transport"
};

const speciesMapping = {
  A: "Fjäderfä",
  B: "Nötkreatur",
  C: "Get",
  L: "Hardjur",
  O: "Får",
  P: "Svin",
  S: "Hästdjur",
  R: "Strutsfåglar",
  fG: "Hägnade landlevande däggdjur inklusive ren (ej tama hov- och klövdjur)",
  wA: "Frilevande vilda fåglar",
  wL: "Frilevande vilda hardjur",
  wU: "Frilevande vilda hov- och klövdjur",
  wG:
    "Frilevande vilda landlevande däggdjur (ej frilevande vilda hov- och klövdjur respektive frilevande vilda hardjur)"
};

const getMappedText = codes => (
  <ul>
    {codes.split(" ").map(code => (
      <li key={code}>
        {categoryMapping[code] || speciesMapping[code] || code}
      </li>
    ))}
  </ul>
);

const getAddressLines = address => (
  <ul>
    {address.split(",").map(line => (
      <li key={line.replace(/[^A-Z0-9]/gi, "-")}>{line.trim()}</li>
    ))}
  </ul>
);

const DetailsRoute = ({ details }) => {
  if (!details) {
    return <NotFoundRoute />;
  }

  const {
    id,
    name,
    address,
    city,
    state,
    category,
    species,
    competentAuthority
  } = details;

  return (
    <>
      <Helmet title={`Kolla maten | ${name && name}`} />

      <Header>
        <BackButton to="/lista" />
      </Header>

      <Content>
        {name && <Title text={name} />}

        <dl>
          {id && (
            <>
              <dt>Anläggningsnummer</dt>
              <dd>{id}</dd>
            </>
          )}

          {address && (
            <>
              <dt>Postadress</dt>
              <dd>{getAddressLines(address)}</dd>
            </>
          )}

          {city && (
            <>
              <dt>Kommun</dt>
              <dd>{city}</dd>
            </>
          )}

          {state && (
            <>
              <dt>Län</dt>
              <dd>{state}</dd>
            </>
          )}

          {category && (
            <>
              <dt>Kategori</dt>
              <dd>{getMappedText(category)}</dd>
            </>
          )}

          {species && (
            <>
              <dt>Djurslag</dt>
              <dd>{getMappedText(species)}</dd>
            </>
          )}

          {competentAuthority && (
            <>
              <dt>Kontrollerande myndighet</dt>
              <dd>{competentAuthority}</dd>
            </>
          )}
        </dl>
      </Content>
    </>
  );
};

DetailsRoute.propTypes = {
  details: shape({
    address: string,
    associatedActivities: string,
    category: string,
    city: string,
    competentAuthority: string,
    id: string,
    name: string,
    species: string,
    state: string
  })
};

DetailsRoute.defaulsProps = {
  details: null
};

export default DetailsRoute;
