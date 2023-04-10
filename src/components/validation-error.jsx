import { useCallback } from "react";
import { useSelector } from "react-redux";

const ValidationError = () => {
  const { error } = useSelector((state) => state.auth);

  const errorMessage = useCallback(() => {
    return Object.keys(error).map((name) => {
      const message = error[name].join(", ");
      return `${name} ${message}`;
    });
  }, [error]);

  console.log(error !== null && errorMessage());

  return (
    error !== null &&
    errorMessage().map((item) => (
      <div
        className="alert alert-danger text-capitalize p-2"
        role="alert"
        key={item}
      >
        {item}
      </div>
    ))
  );
};

export default ValidationError;
