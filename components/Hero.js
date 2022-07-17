import tw from "twin.macro";

const Wrapper = tw.div`max-w-3xl md:py-16 py-10 px-6 mx-auto text-center space-y-8`;
const SubTitle = tw.h2`md:text-2xl text-xl dark:text-gray-100 `;
const Title = tw.h1`md:text-6xl text-4xl font-extrabold inline-block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-blue-500 to-green-500 pb-4 `;
export default function Hero({ subtitle, title, children }) {
  return (
    <Wrapper>
      <SubTitle>{subtitle}</SubTitle>
      <Title>{title}</Title>
      <div>{children}</div>
    </Wrapper>
  );
}
