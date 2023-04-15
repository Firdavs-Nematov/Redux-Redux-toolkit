const TeaxtArea = ({ label, state, setState, height = "150px" }) => {
  return (
    <div className="form-floating my-2">
      <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
        rows="10"
        placeholder={label}
        value={state}
        onChange={(e) => setState(e.target.value)}
        style={{ height: height, resize: "none" }}
      ></textarea>
      <label htmlFor="exampleFormControlTextarea1">{label}</label>
    </div>
  );
};

export default TeaxtArea;
