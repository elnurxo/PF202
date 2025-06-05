import { useFormik } from "formik";
import * as Yup from "yup";

const AddTodo = ({dispatch}) => {
  const formik = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema: Yup.object().shape({
      title: Yup.string().min(2).max(20).required(),
    }),
    onSubmit: (values, action) => {
      const { title } = values;
      dispatch({type:'ADD_TODO',payload: title});
      action.resetForm();
    },
  });

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="flex justify-center items-center gap-3.5"
      >
        <div className="flex flex-col">
          <input
            name="title"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
            className="border border-gray-300 rounded px-4 py-2"
            type="text"
            placeholder="todo title..."
          />
        </div>
        <button
          disabled={
            formik.isSubmitting ||
            !formik.dirty ||
            Object.entries(formik.errors).length > 0
          }
          type="submit"
          className="rounded disabled:bg-blue-200 disabled:cursor-not-allowed bg-blue-600 text-lg text-white cursor-pointer hover:bg-blue-500 transition px-4 py-2"
        >
          add
        </button>
      </form>
      <span className="flex items-center justify-center text-md pl-3 text-red-500">
        {formik.errors.title}
      </span>
    </>
  );
};

export default AddTodo;
