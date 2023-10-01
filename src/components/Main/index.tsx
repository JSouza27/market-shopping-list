import Image from 'next/image';

export default function Main({
  title = 'React Avançado',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}) {
  return (
    <main className="items-center bg-gray-900 flex flex-col justify-center h-full p-12 text-white w-full">
      <h1 className="text-center">Boilerplate React Avançado</h1>
      <Image
        className="mb-8 w-[25rem]"
        src="/img/logo.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado."
        height={400}
        width={400}
      />
      <h1 className="text-center text-4xl">{title}</h1>
      <h2 className="text-center font-normal text-3xl">{description}</h2>
      <Image
        className="mt-12 w-[min(30rem,_100%)]"
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor de frente para uma tela com código."
        height={480}
        width={480}
      />
    </main>
  );
}
