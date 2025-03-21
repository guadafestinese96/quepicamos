import "./Banner.css";

export const Banner = () => {
  return (
    <div className="bannerContainer">
      <img
        src="images/deliveryApp.jpg"
        alt="deliveryApp"
        className="bannerImg"
      />
      <div className="pContainer">
        <p className="p1">Tus comidas preferidas</p>
        <p className="p2">¡En un CLICK!</p>
        <img src="images/check.png" alt="check" className="checkImg"/>
      </div>
    </div>
  );
};
