// https://loading.io/css/
import "./Loading.css";
export default function Loading() {
  return (
    <div className="text-center">
      <div className="lds-facebook">
        <div className=""></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
