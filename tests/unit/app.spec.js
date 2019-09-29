import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App.vue", () => {
  it("has a menu burger", () => {
    const wrapper = shallowMount(App);
    expect(wrapper.html()).toMatch(/burger/);
  });
  it("toggles the menu when burger it's clicked", () => {
    const wrapper = shallowMount(App);
    const burger = wrapper.find(".burger");
    burger.trigger("click");
    expect(burger.classes()).toContain("is-active");
    expect(wrapper.find(".navbar-menu").classes()).toContain("is-active");
    burger.trigger("click");
    expect(burger.classes()).not.toContain("is-active");
    expect(wrapper.find(".navbar-menu").classes()).not.toContain("is-active");
  });
});
