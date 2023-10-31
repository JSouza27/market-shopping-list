type LabelType = {
  children: string | React.ReactNode;
  checked?: boolean;
};

export default function Label({ checked = false, children }: LabelType) {
  const spanModiffiers = {
    checked: 'line-through'
  };

  return (
    <span
      className={`text-grey_dark text-sm font-bold leading-[1.1375rem] capitalize ${
        checked && spanModiffiers.checked
      }`}
    >
      {children}
    </span>
  );
}
