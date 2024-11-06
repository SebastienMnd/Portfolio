export const Badge = ({ title = null, children }) => {
  return (
    <span className="bg-neutral-200 rounded px-1 hover:bg-neutral-300 transition" title={title}>
      {children}
    </span>
  );
};
