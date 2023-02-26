import addImg from "../images/blog-header.svg";

const AddingField = (props) => {
  return (
    <div className="post__right-side">
      <button
        onClick={() =>
          props.activeAddBtn
            ? props.setActiveBtn(false)
            : props.setActiveBtn(true)
        }
        className="button-add"
      >
        Add
      </button>
      <img className="button-add__img" src={addImg} alt="header-img" />
    </div>
  );
};

export default AddingField;
