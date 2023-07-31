import { defineComponent} from "vue";
import s from "./style.module.scss";

export const Chat= defineComponent({
   setup() {
     return () => {
       return (
         <div>
            hi chat
         </div>
       );
     };
   },
});