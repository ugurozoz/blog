import React from 'react';
import { shallow } from 'enzyme';
import { PostList } from "../../components/PostList";


test("should render Post List page", () => {
  const wrapper = shallow(<PostList />);
  expect(wrapper).toMatchSnapshot();
});
