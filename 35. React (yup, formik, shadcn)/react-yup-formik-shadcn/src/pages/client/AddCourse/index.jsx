import { useFormik } from "formik";
import { post } from "../../../services/requests/courses.request";
import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router";
import courseSchema from "../../../validations/course.validation";

const AddCourse = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      title: "",
      price: "",
      description: "",
      duration: "",
    },
    validationSchema: courseSchema,
    onSubmit: async (values, actions) => {
      console.log("touched: ", formik.touched);
      const newCourse = { ...values };
      await post(newCourse);
      enqueueSnackbar("new course posted successfully!", {
        duration: 3000,
        variant: "success",
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "right",
        },
      });
      navigate("/courses");
      actions.resetForm();
    },
  });

  return (
    <>
      <h1 className="text-center my-4 text-xl">Add Course</h1>
      <form
        onSubmit={formik.handleSubmit}
        className="w-[25%] mx-auto border border-gray-300 p-4 rounded-lg flex justify-center flex-col gap-3 items-center"
      >
        <div className="w-full">
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
            name="title"
            className="px-4 py-2 rounded border border-gray-200 w-full"
            type="text"
            placeholder="course title..."
          />
          {formik.touched.title && formik.errors.title && (
            <span className="text-red-500 text-sm text-left pl-2.5">
              {formik.errors.title}
            </span>
          )}
        </div>
        <div className="w-full">
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.price}
            name="price"
            className="px-4 py-2 rounded border border-gray-200 w-full"
            type="number"
            min={0}
            placeholder="course price..."
          />
          {formik.touched.price && formik.errors.price && (
            <span className="text-red-500 text-sm text-left pl-2.5">
              {formik.errors.price}
            </span>
          )}
        </div>
        <div className="w-full">
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.duration}
            name="duration"
            className="px-4 py-2 rounded border border-gray-200 w-full"
            type="text"
            placeholder="course duration..."
          />
          {formik.touched.duration && formik.errors.duration && (
            <span className="text-red-500 text-sm text-left pl-2.5">
              {formik.errors.duration}
            </span>
          )}
        </div>
        <div className="w-full">
          <textarea
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            name="description"
            className="px-4 py-2 rounded border border-gray-200 w-full"
            type="text"
            placeholder="course description..."
          />
          {formik.touched.description && formik.errors.description && (
            <span className="text-red-500 text-sm text-left pl-2.5">
              {formik.errors.description}
            </span>
          )}
        </div>
        <button
          type="submit"
          disabled={
            Object.entries(formik.errors).length > 0 ||
            formik.isSubmitting ||
            !formik.dirty
              ? true
              : false
          }
          className="text-white bg-blue-600 disabled:bg-blue-200 disabled:cursor-not-allowed px-4 py-2 rounded w-full hover:scale-95 transition cursor-pointer"
        >
          add
        </button>
      </form>
    </>
  );
};

export default AddCourse;
