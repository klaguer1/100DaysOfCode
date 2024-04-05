//TOOD: Refactor data entry and handle state with Formik?

export default function StartNewProject({ showNoProjects }) {
  return (
    <div className="mx-4 my-4">
      {!showNoProjects && (
        <>
          <div class="btn-container mb-4">
            <button class="btn bg-red-500 text-white px-4 py-2 rounded-md mr-2">
              Cancel
            </button>
            <button class="btn bg-green-500 text-white px-4 py-2 rounded-md">
              Save
            </button>
          </div>
          <div className="mb-4">
            <label for="title" class="custom-label">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="block w-full bg-gray-200 rounded-md px-4 py-2"
            />
          </div>
          <div className="mb-4">
            <label for="description" class="custom-label">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="block w-full bg-gray-200 rounded-md px-4 py-2"
              rows="4"
            ></textarea>
          </div>

          <div className="mb-4">
            <label for="due-date" class="custom-label">
              Due Date
            </label>
            <input
              type="date"
              id="due-date"
              name="due-date"
              className="block w-full bg-gray-200 rounded-md px-4 py-2"
            />
          </div>
        </>
      )}
    </div>
  );
}
