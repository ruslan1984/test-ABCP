import React from "react";
import { shallow, configure } from "enzyme";
import UserTable from "./UserTable";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("UserTable", () => {
  test("no data", () => {
    const wrapper = shallow(<UserTable />);
    expect(wrapper.contains("No Name")).toEqual(true);
    expect(wrapper.contains("No Phone")).toEqual(true);
  });
  test("with data", () => {
    const wrapper = shallow(<UserTable name="user" phone="1111" />);
    expect(wrapper.contains("user")).toEqual(true);
    expect(wrapper.contains("1111")).toEqual(true);
  });
});
