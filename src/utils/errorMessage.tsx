export default function errorMessage(message: string | undefined) {
  if (message === undefined) {
    return (
      <span className="text-sm font-normal text-red_dark">
        Ocorreu um erro nesse campo
      </span>
    );
  }

  return <span className="text-sm font-normal text-red_dark">{message}</span>;
}
