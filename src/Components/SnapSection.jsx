const SnapSection = ({ children, classProps, props, noTopSpace }) => {
  return (
    <section
      {...props}
      class={`w-screen h-screen snap-center shrink-0 ${classProps} ${
        noTopSpace ? "" : "pt-40"
      }`}
    >
      {children}
    </section>
  );
};

export default SnapSection;
