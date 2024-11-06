export const ProjectBox = ({ children }) => {
    return (
      <div className="h-40 flex gap-4 border overflow-hidden group rounded">
        {children}
      </div>
    );
  };