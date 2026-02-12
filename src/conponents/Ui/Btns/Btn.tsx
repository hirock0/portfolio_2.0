const Btn = ({ type, btn, value, className, aria_label }: any) => {
  return (
    <button className={className} aria-label={aria_label}>
      {btn}
    </button>
  );
};

export default Btn;
