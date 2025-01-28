import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import HelloWorld from "../HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "Hello, World!";
    const wrapper = mount(HelloWorld, {
      props: { msg },
    });
    expect(wrapper.find("h1").text()).toBe(msg);
  });

  it("renders the correct HTML structure", () => {
    const msg = "Hello, World!";
    const wrapper = mount(HelloWorld, {
      props: { msg },
    });
    expect(wrapper.find('.greetings').exists()).toBe(true);
    expect(wrapper.find('.green').exists()).toBe(true);
    expect(wrapper.find('h3').exists()).toBe(true);
  });
});
