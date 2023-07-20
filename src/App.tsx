import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const msg = ref("tsx component");
    const isShow = ref(false);

    function onClick() {
      isShow.value = !isShow.value;
    }

    return () => {
      return (
        <div>
          <div>{msg.value}</div>
          {isShow.value && <div>{isShow.value ? "show" : "hide"}</div>}
          <el-button onClick={onClick}>onClick</el-button>
        </div>
      );
    };
  },
});