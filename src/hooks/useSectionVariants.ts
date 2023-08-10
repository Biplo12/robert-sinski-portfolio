const useSectionVariants = () => {
  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  return { sectionVariants };
};

export default useSectionVariants;
