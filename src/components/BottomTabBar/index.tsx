import { defineComponent, reactive, ref } from "vue";
import s from "./style.module.scss";
import { BottomIcon } from "../BottomIcon";
import { RouterLink } from "vue-router";

export const BottomTabBar = defineComponent({
  setup() {
    const thoseDot = reactive({
      find:false,
      search:false,
      advice: false,
      chat: true
    })
    const refActiveClass=ref<string>('/home/find') 
    return () => {
      const buttonMap=[
        {
          to:'/home/find',
          iconName:'newspaper-o',
          title:'发现',
          color:refActiveClass.value==='/home/find'?"rgba(102, 102, 204, 1)":"#000",
          setColor:()=>{
            refActiveClass.value='/home/find'
          },
          isDot:thoseDot.find
        },
        {
          to:'/home/search',
          iconName:'search',
          title:'搜索',
          color:refActiveClass.value==='/home/search'?"rgba(102, 102, 204, 1)":"#000",
          setColor:()=>{
            refActiveClass.value='/home/search'
          },
          isDot:thoseDot.search
        },
        {
          to:'/home/advice',
          iconName:'volume-o',
          title:'通知',
          color:refActiveClass.value==='/home/advice'?"rgba(102, 102, 204, 1)":"#000",
          setColor:()=>{
            refActiveClass.value='/home/advice'
          },
          isDot:thoseDot.advice
        },
        {
          to:'/home/chat',
          iconName:'chat-o',
          title:'聊天',
          color:refActiveClass.value==='/home/chat'?"rgba(102, 102, 204, 1)":"#000",
          setColor:()=>{
            refActiveClass.value='/home/chat'
          },
          isDot:thoseDot.chat
        }
      ]
      return (
        <div class={s.wrapper}>
          <ul class={s.leftIcon}>
            {
              buttonMap.slice(0,2).map((item,index)=>{
                return <li key={index} onClick={item.setColor}>
                  <RouterLink to={item.to} >
                     <BottomIcon iconName={item.iconName} title={item.title} color={item.color} isDot={item.isDot} />
                  </RouterLink>
                </li>
              })
            }
          </ul>
          <div class={s.middleAdd}>
            <RouterLink to='/home/add'>
              <BottomIcon iconName='plus' color='#fff' />
            </RouterLink>
          </div>
          <ul class={s.rightIcon}>
              {
                buttonMap.splice(2,4).map((item,index)=>{
                  return <li key={index*2} onClick={item.setColor}>
                  <RouterLink to={item.to} >
                     <BottomIcon iconName={item.iconName} title={item.title} color={item.color} isDot={item.isDot} />
                  </RouterLink>
                </li>
                })
              }
          </ul>
        </div>
      );
    };
  },
});