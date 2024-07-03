
const Container = ({color}) => {
  const containerStyle = {
    width: '100%',
    height: '200px',
    backgroundColor: color,
  };

  return <div style={containerStyle}></div>;
};

export default Container;
