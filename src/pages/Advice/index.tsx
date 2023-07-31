import { defineComponent} from "vue";
import s from "./style.module.scss";

export const Advice= defineComponent({
   setup() {
     return () => {
       return (
         <div>
            hi advice
         </div>
       );
     };
   },
});