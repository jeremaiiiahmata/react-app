import { ReactNode } from "react";

interface Props {  // create an interface to determine the shape of the props
    children: ReactNode; // using children, we can pass the child of the Alert in App.tsx into a component using ReactNode.
    onClose: () => void;
}

const Alert = ({ children, onClose } : Props) => {
  return (
    <>
        <div className="alert alert-primary alert-dismissible fade show" role="alert">
            {children}
            <button type="button" className="btn-close" data-dismiss="alert" aria-label="Close" onClick={onClose}/>
        </div>  
    </>
    
  )
}

export default Alert