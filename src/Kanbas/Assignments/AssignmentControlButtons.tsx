import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AssignmentControlButtons() {
  const { cid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const isFaculty = currentUser?.role === 'FACULTY';

  return (
    <div className="float-end">
      <span
        className="border border-black rounded-pill px-3 py-1 me-1">
        40% of Total
      </span>
      {isFaculty &&
        <a href={`#/Kanbas/Courses/${cid}/Assignments/AddAssignment`}>
          <BsPlus className="fs-1" style={{ color: 'black' }} />
        </a>}
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
