export const Container = ({ className = "", children }) => {
  return (
    <div className={`${className} max-w-[900px] mx-auto py-12`}>{children}</div>
  );
};

export const Section = ({ id, className = "", children }) => {
  return (
    <section id={id} className={`${className}`}>
      {children}
    </section>
  );
};