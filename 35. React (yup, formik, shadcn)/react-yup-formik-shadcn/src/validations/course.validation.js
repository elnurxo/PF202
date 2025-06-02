import * as Yup from "yup";

const courseSchema = Yup.object().shape({
  title: Yup.string().min(3).required(),
  price: Yup.number().min(100).max(8000).required(),
  description: Yup.string().min(10).required(),
  duration: Yup.string()
    .test("duration-validation", function (value) {
      const [num, text] = value.split(" ");

      //validated
      if (!isNaN(Number(num)) && (text === "week" || text === "weeks")) {
        return true;
      } else {
        return this.createError({
          path: this.path,
          message: "duration format is invalid",
        });
      }
    })
    .required(),
});

export default courseSchema;
