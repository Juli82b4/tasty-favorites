import React from "react";
import useFetchByid from "../hooks/useFetchById";
import Favourite from "../components/favourites/Favourites";
import MyFavourite from "../components/myfavourites/MyFavourite";
import NewsLetter from "../components/newsletter/NewsLetter";
import SectionHeader from "../components/sectionheader/SectionHeader";
import PageHeader from "../components/pageheader/PageHeader";

const Home = () => {
  const { product } = useFetchByid(5);
  return (
    <section>
      <PageHeader
        title="PAENE PRODUKTER"
        subTitle="Her kan du se alle vores paene produkter"
        headerImg={product?.image}
      />

      <Favourite />
      <SectionHeader title="Brugernes Favouritter" />

      <MyFavourite />
      <SectionHeader title="MinFavouritter" />

      <NewsLetter />
      <SectionHeader title="Tilmeld dig vores nyhedsbrev" />
    </section>
  );
};

export default Home;
