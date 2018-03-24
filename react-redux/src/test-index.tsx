/* Enzyme test setup START */
import { configure } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import { JSDOM } from "jsdom";

const jsdom = new JSDOM("<!doctype html><html><body></body></html>");
const { window } = jsdom;

function copyProps(src: any, target: any) {
  const props = Object.getOwnPropertyNames(src)
    .filter((prop: any) => typeof target[prop] === "undefined")
    .reduce((result, prop) => ({
      ...result,
      [prop]: Object.getOwnPropertyDescriptor(src, prop),
    }), {});
  Object.defineProperties(target, props);
}

(global as any).window = window;
(global as any).document = window.document;
(global as any).navigator = {
  userAgent: "node.js",
};
copyProps(window, global);
configure({ adapter: new Adapter() });
/* Enzyme test setup END */

import "./components/autocomplete.test";
