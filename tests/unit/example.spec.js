import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
  it("can handle strange characters", () => {
    const msg = "!#$%&/()=?¡¿ñÑ^}`~°|¬¬";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.find("h1").text()).toBe(msg);
  });
});
