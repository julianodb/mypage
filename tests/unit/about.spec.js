import { shallowMount } from "@vue/test-utils";
import About from "@/components/About.vue";

describe("About.vue", () => {
  it("has a title", () => {
    const wrapper = shallowMount(About);
    expect(wrapper.text()).toHave("title");
  });
});
