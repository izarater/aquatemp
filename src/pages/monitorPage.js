import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import MonitorDashboard from '../context/monitorDashboard';

function Monitor() {
  return (
    <>
      <Header />
      <MonitorDashboard />
      <Footer />
    </>
  );
}

export default Monitor;
