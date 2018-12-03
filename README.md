##调试/打包的前提工作
1、
#react-native-vector-icons
#node_modules 下的 android 文件夹 build.gradle 修改版本 #去掉 google() #将 implation 改为 compile
2、
#react-native-baidu-map
#node_modules 下的 android 文件夹 build.gradle 修改版本 #将 MapView.js 的 PropTypes 引入路径改一下 #将 BaiduMapPackage.java 最后一个方法的@override 去掉
#2、运行命令
#rm ./node_modules/react-native/local-cli/core/**fixtures**/files/package.json
#3、
