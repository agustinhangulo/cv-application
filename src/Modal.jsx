
function Modal({isOpen, onClose, children}) {

  // Only return content if actually open
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {children}
        <button className="modal-close" onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default Modal;
