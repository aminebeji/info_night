function DoctorsComponent(props) {
  return (
    <div className="doctor-item">
      <img src="#" />
      <div className="information">
        <h2>{props.name}</h2>
        <p>{props.number}</p>
      </div>
    </div>
  );
}

export default DoctorsComponent;
