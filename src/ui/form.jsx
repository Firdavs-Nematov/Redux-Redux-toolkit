import { useSelector } from "react-redux";
import { Input, TeaxtArea } from "./";

const Form = (props) => {
  const {
    title,
    setTitle,
    description,
    setDescription,
    body,
    setBody,
    formSubmit,
  } = props;
  const { isLoading } = useSelector((state) => state.articles);

  return (
    <div>
      <form onSubmit={formSubmit}>
        <Input label={"Title"} state={title} setState={setTitle} />
        <TeaxtArea
          label={"Description"}
          state={description}
          setState={setDescription}
          height={"60px"}
        />
        <TeaxtArea label={"Body"} state={body} setState={setBody} />
        <button
          type="submit"
          className="btn btn-success w-75"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Create"}
        </button>
      </form>
    </div>
  );
};

export default Form;
