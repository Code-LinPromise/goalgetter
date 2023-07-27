import { defineComponent} from "vue";
import s from "./style.module.scss";
import {Icon} from "vant"

export const BottomIcon= defineComponent({
    props:{
        iconName:{
            type:String
        },
        isDot:{
            type:Boolean,
            default:false
        },
        size:{
            type:String,
            default:'25'
        },
        title:{
            type:String,
            require:false
        },
        color:{
            type:String,
            require:false,
            default:'#000'
        }

    },
    setup(props) {
        return () => {
        return (
            <div class={s.wrapper}>
                <Icon name={props.iconName} dot={props.isDot} size={props.size} color={props.color}></Icon>
                <span>{props?.title}</span>
            </div>
        );
        };
    },
});