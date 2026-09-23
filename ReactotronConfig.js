import Reactotron, {networking} from "reactotron-react-native";

Reactotron.configure() // 配置连接 & 通信设置
  .useReactNative() // 添加所有内置的 React Native 插件
  .use(networking()) // 添加网络监听插件
  .connect(); // 连接