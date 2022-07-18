import React from "react";
import tw from "twin.macro";

const Backdrop = tw.div`bg-black bg-opacity-20 w-96 h-96 rounded-3xl skew-y-6`;
const Card = tw.div`bg-white border rounded-3xl  h-full -skew-y-6`;

export default function Skills() {
  return (
    <Backdrop>
      <Card>Skills</Card>
    </Backdrop>
  );
}
