import { defineComponent} from "vue";
import s from "./style.module.scss";
import { BottomTabBar } from "../../components/BottomTabBar";
import { RouterView } from "vue-router";

export const Home= defineComponent({
  setup() {
    return () => {
      return (
        <div>
          <RouterView/>
          <BottomTabBar></BottomTabBar> 
        </div>
      );
    };
  },
});