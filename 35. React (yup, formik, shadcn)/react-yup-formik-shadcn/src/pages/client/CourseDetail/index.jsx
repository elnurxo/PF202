import { useNavigate, useParams } from "react-router";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { getOne } from "../../../services/requests/courses.request";

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState({});

  useEffect(() => {
    getOne(id).then((resp) => {
      setCourse({ ...resp });
    });
  }, [id]);

  return (
    <>
      <h2 className="text-center text-xl mt-4">
        Course Detail page of{" "}
        <span className="font-bold text-gray-500">{course.title}</span>
      </h2>
      <p className="text-center mt-2.5">{course.description}</p>
      <span className="block mx-auto py-3 mt-3.5 font-bold text-center w-[10%] border border-gray-400 border-dotted rounded-2xl">
        {course.price}$
      </span>
      <p className="text-center">
        this course's duration is{" "}
        <span className="text-red-500 font-bold">{course.duration}</span>
      </p>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="block mx-auto rounded mt-3.5 px-4 py-2 bg-blue-500 cursor-pointer hover:scale-90 transition text-white"
      >
        <span className="flex justify-center gap-3">
          <span>go back</span> <ArrowLeft />
        </span>
      </button>
    </>
  );
};

export default CourseDetail;
