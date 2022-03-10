/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  PrismicRichText,
  JSXFunctionSerializer,
  JSXMapSerializer,
} from "@prismicio/react";
import Highlight from "react-highlight";

const renderHelpers: JSXMapSerializer | JSXFunctionSerializer = {
  preformatted: ({ children }) => <Highlight>{children}</Highlight>,
};

export function RenderBody({ render }: { render: any }): JSX.Element {
  return <PrismicRichText field={render} components={renderHelpers} />;
}
