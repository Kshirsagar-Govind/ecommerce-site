function ConfirmationPopup(props) {
  return (
    <div className="popup-window">
      <div className={"popup-label " + props.type}>
        <h2>{props.heading}</h2>
      </div>
      <div className="popup-message">
        <p>{props.message}</p>
      </div>
      <div className="popup-btns">
        <button className={"ok " + props.type} onClick={() => props.ok()}>
          OK
        </button>
        <button className={"cancel t_" + props.type}>Cancel</button>
      </div>
    </div>
  );
}
export default ConfirmationPopup;
