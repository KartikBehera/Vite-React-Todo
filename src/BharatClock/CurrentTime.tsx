let CurrentTime = () => {
  let datetime = new Date();
  return (
    <div>
      {datetime.toLocaleDateString()} - {datetime.toLocaleTimeString()} 
    </div>
  );
};

export default CurrentTime;
