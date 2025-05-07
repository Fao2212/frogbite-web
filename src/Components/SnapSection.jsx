const SnapSection = ({ children, classProps, props }) => {
  return (
    <section
      {...props}
      class={`w-screen h-screen snap-center shrink-0 ${classProps}`}
    >
      {children}
    </section>
  );
};

export default SnapSection;
