 


> 在 [https://cubicbird.github.io/myknight-playground/](https://cubicbird.github.io/myknight-playground/) 打开此页面

## 用作项目模版

此仓库可以作为 **项目模版** 添加到 MakeCode 中。

* 打开 [https://arcade.makecode.com/](https://arcade.makecode.com/)
* 点击 **新项目**
* 点击齿轮图标菜单下的 **扩展**
* 搜索 **https://github.com/cubicbird/myknight-playground** 并导入


## 开发

* 此项目已含有基础的迷宫、角色、武器、敌人等
* 其中main.block中已经展示了迷宫、角色、武器、弹射物
* 敌人、敌人小队等进阶内容进行了隐藏

## 集成

* 切换到Javascript
* 将main.ts中默认内容删除（默认敌人、默认迷宫、默认武器等未做修改的内容)
* 删除playground_helpers.startPlayground()的调用
* 将剩余代码放入namespace myfighter\_[id]\_dlc.mod_name() 方法中并export
* 发布项目获取arcade url
* 在集成项目中以url加入
* 如果有自定义地图，请看地图的引入

## 地图的引入

* 在编辑器中切换至资源页签
* 删除所有没有使用的tilemap、tiles等内容
* 获取 https://github.com/felixtsu/arcade-asset-merge-helper
* 此时有两个文件需要merge: tilemap.g.jres | tilemap.g.ts
* 其中tilemap.g.jres可以用过上面的arcade-asset-merge-helper下的merge.py处理，输出结果在result.jres中，直接对应复制
* tilemap.g.ts需要进入ide里面做regex的替换，把tile0 - tile0x加项目前缀进行匹配替换


## 编辑此项目 ![构建状态标志](https://github.com/cubicbird/myknight-playground/workflows/MakeCode/badge.svg)


## 积木块预览

此图像显示主分支中最后一次提交的块代码。
此图像可能需要几分钟才能刷新。

![块的渲染视图](https://github.com/felixtsu/myknight-playground/raw/master/.github/makecode/blocks.png)

#### 元数据（用于搜索、渲染）

* for PXT/arcade
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>



> 在 [https://laoyizun.github.io/21wintermyknightplayground/](https://laoyizun.github.io/21wintermyknightplayground/) 打开此页面

## 用作扩展

此仓库可以作为 **插件** 添加到 MakeCode 中。

* 打开 [https://arcade.makecode.com/](https://arcade.makecode.com/)
* 点击 **新项目**
* 点击齿轮图标菜单下的 **扩展**
* 搜索 **https://github.com/laoyizun/21wintermyknightplayground** 并导入

## 编辑此项目 ![构建状态标志](https://github.com/laoyizun/21wintermyknightplayground/workflows/MakeCode/badge.svg)

在 MakeCode 中编辑此仓库。

* 打开 [https://arcade.makecode.com/](https://arcade.makecode.com/)
* 点击 **导入**，然后点击 **导入 URL**
* 粘贴 **https://github.com/laoyizun/21wintermyknightplayground** 并点击导入

## 积木块预览

此图像显示主分支中最后一次提交的块代码。
此图像可能需要几分钟才能刷新。

![块的渲染视图](https://github.com/laoyizun/21wintermyknightplayground/raw/master/.github/makecode/blocks.png)

#### 元数据（用于搜索、渲染）

* for PXT/arcade
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
