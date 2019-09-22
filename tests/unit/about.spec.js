import { shallowMount } from "@vue/test-utils";
import About from "@/views/About.vue";

describe("About.vue", () => {
  it("has a title", () => {
    const wrapper = shallowMount(About);
    expect(wrapper.html()).toMatch(/title/);
  });
});
