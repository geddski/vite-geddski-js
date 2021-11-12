import { useRef } from "react";
import { test } from "uvu";
import * as assert from "uvu/assert";
import { render, screen, fireEvent } from "@testing-library/react";
// can import components to test
// import App from "./App";

const Example = () => {
  const yolo = useRef();
  return (
    <div className="App">
      <div ref={yolo} onClick={() => {
        yolo.current.innerHTML = "merf";
      }}>yolo</div>
    </div>
  )
}
  
test("Example", async () => {
  render(<Example />);
  const div = screen.getByText('yolo');
  await fireEvent.click(div);
  assert.is(div.textContent, "merf");
});

test.run();