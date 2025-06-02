import { useEffect, useState, Fragment } from "react";
import {
  deleteCourse,
  getAll,
} from "../../../services/requests/courses.request";
import { Link } from "react-router";
import { Dialog, Transition } from "@headlessui/react";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [deletingId, setDeletingId] = useState(null);
  const [searchCourses, setSearchedCourses] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getAll().then((resp) => {
      setCourses([...resp]);
      setSearchedCourses([...resp]);
    });
  }, []);

  useEffect(() => {
    setSearchedCourses(
      courses.filter((c) => c.title.toLowerCase().trim().includes(query))
    );
  }, [query, courses]);

  //modal
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <section className="py-16 text-gray-800">
        <div className="w-[90%] mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Our Courses</h2>
          <input
            onChange={(e) => {
              setQuery(e.target.value.trim().toLowerCase());
            }}
            className="px-4 w-[25%] py-2 rounded mb-4 border border-gray-400 outline-none"
            type="text"
            placeholder="search for your next course..."
          />
          <select
            className="border border-gray-400 py-2 px-4 ml-3 rounded"
            onChange={(e) => {
              switch (e.target.value) {
                case "desc":
                  setSearchedCourses(() => {
                    return courses.sort((a, b) => {
                      return a.price - b.price;
                    });
                  });
                  break;
                case "asc":
                  setSearchedCourses(() => {
                    return [
                      ...courses.sort((a, b) => {
                        return b.price - a.price;
                      }),
                    ];
                  });
                  break;
              }
            }}
            name="sort"
            id="sort"
          >
            <option value="" selected disabled>
              sort courses by price
            </option>
            <option value="desc">price low to high</option>
            <option value="asc">price high to low</option>
          </select>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {searchCourses &&
              searchCourses.map((course) => {
                return (
                  <div
                    key={course.id}
                    className="bg-gray-50 p-6 border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition"
                  >
                    <h3 className="text-xl font-semibold mb-2">
                      {course.title}{" "}
                      <i className="text-sm text-gray-400">({course.price}$)</i>
                    </h3>
                    <p>{course.description}</p>
                    <div className="flex gap-x-2 justify-center">
                      <button className="bg-blue-100 mt-4 px-3 py-2 cursor-pointer rounded ">
                        <Link to={`/courses/${course.id}`}>get details</Link>
                      </button>
                      <button
                        onClick={() => {
                          openModal();
                          setDeletingId(course.id);
                        }}
                        className="bg-red-100 mt-4 px-3 py-2 cursor-pointer rounded "
                      >
                        delete
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Course Delete
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Are you sure? This action cannot be undone.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                      onClick={() => {
                        closeModal();
                        deleteCourse(deletingId);
                        setSearchedCourses((prevCourse) => {
                          return prevCourse.filter((c) => c.id != deletingId);
                        });
                        setDeletingId(null);
                      }}
                    >
                      Yes, delete!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Courses;
