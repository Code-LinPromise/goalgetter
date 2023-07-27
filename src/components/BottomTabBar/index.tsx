import { defineComponent, reactive, ref } from "vue";
import s from "./style.module.scss";
import { BottomIcon } from "../BottomIcon";
import { RouterLink } from "vue-router";
import {useRoute} from "vue-router"

export const BottomTabBar = defineComponent({
  setup() {
    const thoseDot = reactive({
      advice: false,
      chat: true
    })
    const route=useRoute()
    const refActiveClass=ref<string>(route.path)
    return () => {
      return (
        <div class={s.wrapper}>
          <ul class={s.leftIcon}>

            <li>
              <RouterLink to='/home/find' >
                <BottomIcon iconName="newspaper-o" title="发现" color={refActiveClass.value==='/home/find'?s.active:"#000"} />
              </RouterLink>
            </li>
            <li>
              <RouterLink to='/search'>
                <BottomIcon iconName='search' title="搜索" />
              </RouterLink>

            </li>
          </ul>
          <div class={s.middleAdd}>
            <RouterLink to='/add'>
              <BottomIcon iconName='plus' color='#fff' />
            </RouterLink>

          </div>
          <ul class={s.rightIcon}>

            <li>
              <RouterLink to='/advice'>
                <BottomIcon iconName='volume-o' title="通知" isDot={thoseDot.advice} />
              </RouterLink>

            </li>

            <li>
              <RouterLink to='/chat'>
                <BottomIcon iconName='chat-o' title="私信" isDot={thoseDot.chat} />
              </RouterLink>

            </li>
          </ul>

        </div>
      );
    };
  },
});