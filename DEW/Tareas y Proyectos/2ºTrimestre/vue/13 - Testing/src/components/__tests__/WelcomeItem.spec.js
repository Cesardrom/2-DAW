import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import WelcomeItem from "../WelcomeItem.vue";

describe("WelcomeItem.vue", () => {
  it("renders slot content correctly", () => {
    const wrapper = mount(WelcomeItem, {
      slots: {
        icon: '<i class="test-icon"></i>',
        heading: 'Test Heading',
        default: 'Test Content',
      },
    });
    expect(wrapper.find('.item').exists()).toBe(true);
    expect(wrapper.find('.test-icon').exists()).toBe(true);
    expect(wrapper.find('h3').text()).toBe('Test Heading');
    expect(wrapper.text()).toContain('Test Content');
  });
});
