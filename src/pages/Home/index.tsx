import { defineComponent} from "vue";
import s from "./style.module.scss";

export const Home= defineComponent({
  setup() {
    return () => {
      return (
        <div>
          hi home
        </div>
      );
    };
  },
});