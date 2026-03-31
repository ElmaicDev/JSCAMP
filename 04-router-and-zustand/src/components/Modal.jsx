export function Modal({ children, onClose }) 
{
    return (
        <div className="modal-overlay" onClick={onClose}>
            {/* stopPropagation hace que si se hace click dentro del modal, no se cierre la pestaña */}
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {children}  
            </div>
        </div>
    );
}