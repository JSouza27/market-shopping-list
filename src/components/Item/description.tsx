type DescriptionType = {
  children: string | React.ReactNode;
};

export default function Description({ children }: DescriptionType) {
  return (
    <span className="text-grey_darker text-xs font-normal leading-[0.975rem]">
      {children}
    </span>
  );
}
