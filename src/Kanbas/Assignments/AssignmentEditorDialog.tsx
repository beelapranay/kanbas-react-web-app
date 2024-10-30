export default function AssignmentEditorDialog({ onConfirm, onCancel }:
    { onConfirm: (assignmentId : any) => void, onCancel: () => void }) {
    return (
        <div
            className="modal fade"
            id="delete-assignment-modal"
            aria-labelledby="deleteAssignmentLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="deleteAssignmentLabel">Delete Assignment</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Are you sure you want to delete this assignment?
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                            Cancel
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger"
                            data-bs-dismiss="modal"
                            onClick={onConfirm}
                        >
                            Yes, Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
