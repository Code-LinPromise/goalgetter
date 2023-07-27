import { defineComponent} from "vue";
import s from "./style.module.scss";

export const Find= defineComponent({
   setup() {
    console.log("11111")
     return () => {
       return (
         <div>
            hi find
         </div>
       );
     };
   },
});