import { shallowMount } from "@vue/test-utils";
import Navbar from "@/components/Navbar.vue";

describe("Navbar.vue", () => {
  it("has a menu burger", () => {
    const wrapper = shallowMount(Navbar);
    expect(wrapper.html()).toMatch(/burger/);
  });
  it("toggles the menu when burger it's clicked", () => {
    const wrapper = shallowMount(Navbar);
    const burger = wrapper.find(".burger");
    burger.trigger("click");
    expect(burger.classes()).toContain("is-active");
    expect(wrapper.find(".navbar-menu").classes()).toContain("is-active");
    burger.trigger("click");
    expect(burger.classes()).not.toContain("is-active");
    expect(wrapper.find(".navbar-menu").classes()).not.toContain("is-active");
  });
});
