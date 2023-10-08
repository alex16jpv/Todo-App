interface Props {
  _id: string
  description: string
  completed: boolean
  deleteTodoHandler: (id: string) => Promise<void>
}

const TodoItem: React.FC<Props> = ({
  _id,
  description,
  completed,
  deleteTodoHandler,
}: Props) => (
  <li className="flex items-center justify-start px-4 py-6 mb-3 bg-white rounded-lg shadow">
    <div className="flex items-center w-full">
      <input
        type="checkbox"
        className="w-4 h-4 mr-2"
        checked={completed}
        readOnly
      />
      <span className="mx-4 line-clamp-none lg:line-clamp-1">
        {description}
      </span>
    </div>
    <div className="flex items-center ">
      <button
        className="p-2 bg-red-500 rounded-xl"
        onClick={() => {
          deleteTodoHandler(_id)
            .then(() => {})
            .catch(() => {})
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path
            d="M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16zm-9.489 5.14a1 1 0 0 0 -1.218 1.567l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.497 1.32l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -1.497l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-1.293 1.292l-1.293 -1.292l-.094 -.083z"
            strokeWidth="0"
            fill="currentColor"
          ></path>
          <path
            d="M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z"
            strokeWidth="0"
            fill="currentColor"
          ></path>
        </svg>
      </button>
    </div>
  </li>
)

export default TodoItem