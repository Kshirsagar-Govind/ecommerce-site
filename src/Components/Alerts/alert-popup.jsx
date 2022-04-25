import "../CSS/master-css.scss";
function AlertPopup({ heading, message, type, ok }) {
  return (
    <div className="popup-window">
      <div className={"popup-label" + " " + type}>
        <h2>{heading}</h2>
      </div>
      <div className="popup-message">
        <p>{message}</p>
      </div>
      <div className="popup-btns">
        <button className={"ok" + " " + type} onClick={() => ok()}>
          OK
        </button>
        {/* <button className={"cancel" + " " + props.type}>Cancel</button> */}
      </div>
    </div>
  );
}
export default AlertPopup;
