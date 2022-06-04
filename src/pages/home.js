import Header from '../components/header/header';
import Main from '../components/main/main';
import InfoPills from '../components/infopills/infopills';
import Stats from '../components/stats/stats';
import Footer from '../components/footer/footer';
import WhatIs from '../components/whatis/whatis';
import TecIOT from '../components/tecIOT/tecIOT';
import NewProduct from '../components/product/NewProduct'

function Home() {
  return (
    <>
      <Header />
      <Main />
      <WhatIs />
      <TecIOT />
      <Footer />
    </>
  );
}

export default Home;
