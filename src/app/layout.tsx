import { createStaticNavigation } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  createNativeStackScreen,
} from '@react-navigation/native-stack';

import HomeScreen from '@/app/Home';
import DetailScreen from '@/app/Detail';

// 注册页面，创建栈导航。
const RootStack = createNativeStackNavigator({
  screens: {
    Home: createNativeStackScreen({
      screen: HomeScreen,
    }),
    Detail: createNativeStackScreen({
      screen: DetailScreen,
    }),
  },
});


/**
 * 生成供 App 渲染的导航组件。
 * createStaticNavigation 的作用
 * 1. 自动创建 NavigationContainer 组件
 * 2. 解析静态 screens 列表，生成对应的导航数据
 * 3. 生成真正的导航树结构
 * 4. 返回一个 React 组件，可以直接作为子组件渲染到 App 中
*/
const Navigation = createStaticNavigation(RootStack);

export default Navigation;

type RootStackType = typeof RootStack;

declare module '@react-navigation/native' {
  interface RootNavigator extends RootStackType {}
}
