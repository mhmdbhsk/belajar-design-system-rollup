import { useScroller } from ".";

test("Should scrollTo a position", () => {
  const spy = jest.spyOn(window, "scrollTo").mockImplementation();

  const scroller = useScroller({ x: 20, y: 0 });
  if (!scroller) {
    throw "Invalid Window Object";
  }

  scroller();

  expect(spy).toBeCalledWith({
    left: 20,
    top: 0,
    behavior: "auto",
  });

  spy.mockRestore();
});
