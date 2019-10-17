import Header from '../components/Header';

const layoutStyles = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const Layout = props => (
  <div style={layoutStyles}>
    <Header />
    { props.children }
  </div>
);

export default Layout;
