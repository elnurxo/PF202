import { useFormik } from "formik";
import contactFormValidation from "../../validations/contact.validation";
import controller from "../../services/requests/commonRequest";
import { endpoints } from "../../services/api";
import { enqueueSnackbar } from "notistack";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: contactFormValidation,
    onSubmit: async (values, actions) => {
      await controller.post(endpoints.messages, {
        fullName: values.fullName,
        email: values.email,
        subject: values.subject,
        message: values.message,
      });
      //toaster
      enqueueSnackbar("your message has been sent to Bazaar", {
        autoHideDuration: 2000,
        variant: "success",
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "right",
        },
      });
      actions.resetForm();
    },
  });
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
        Contact Us
      </h1>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Contact Form */}
        <form
          className="flex-1 bg-white p-6 rounded-md shadow-sm"
          onSubmit={formik.handleSubmit}
        >
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block mb-1 font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.fullName}
              placeholder="Your full name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              required
            />
            {formik.errors.fullName && formik.touched.fullName && (
              <span className="text-red-600 text-sm">
                {formik.errors.fullName}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-1 font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              required
            />
            {formik.errors.email && formik.touched.email && (
              <span className="text-red-600 text-sm">
                {formik.errors.email}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="subject"
              className="block mb-1 font-medium text-gray-700"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.subject}
              placeholder="Subject"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              required
            />
            {formik.errors.subject && formik.touched.subject && (
              <span className="text-red-600 text-sm">
                {formik.errors.subject}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block mb-1 font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.message}
              rows={4}
              placeholder="Write your message here..."
              className="w-full border border-gray-300 rounded-md px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              required
            ></textarea>
            {formik.errors.message && formik.touched.message && (
              <span className="text-red-600 text-sm">
                {formik.errors.message}
              </span>
            )}
          </div>
          <button
            type="submit"
            disabled={
              formik.isSubmitting ||
              Object.entries(formik.errors).length > 0 ||
              !formik.dirty
            }
            className="bg-indigo-600 disabled:bg-indigo-300 disabled:cursor-not-allowed cursor-pointer text-white font-semibold px-5 py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Map Section */}
        <div className="flex-1 rounded-md overflow-hidden shadow-sm min-h-[280px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1519.7164368596384!2d49.850413838807725!3d40.37709779286155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scode%20academy!5e0!3m2!1sen!2saz!4v1751539113140!5m2!1sen!2saz"
            width="600"
            height="450"
            className="w-full h-full"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
