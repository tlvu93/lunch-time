interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  className?: string;
}

const Button = (props: ButtonProps) => {
  const { className, ...rest } = props;
  return (
    <button
      className={`hover:bg-slate-600 w-full max-w-3xl  py-2 px-4 bg-slate-700 text-white rounded-md font-semibold  ${className}`}
      {...rest}
    />
  );
};

export default Button;
