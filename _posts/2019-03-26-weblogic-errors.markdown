---
layout: post
title: "weblogic部署项目时出现的问题"
author: "XNRavenZen"
categories: java weblogic exception
summary: 
---

## java.lang.NoSuchMethodError: javax/persistence/Persistence

由于wls  /Oracle/Middleware/modules 目录下存在两个版本的 javax.persistence 包: 
```
javax.persistence_1.0.0.0_1-0-2.jar 
javax.persistence_1.1.0.0_2-0.jar 
```
经检测 10.3.6 版本的wlc默认配置加载的 javax.persistence_1.0.0.0_1-0-2.jar, 此jar包版本跟项目中用到的 hibernate-jpa-2.0-api-1.0.0.Final.jar 版本不兼容 , 
而 javax.persistence_1.1.0.0_2-0.jar 与 项目中的hibernate-jpa-2.0-api-1.0.0.Final.jar 版本是兼容的, 因此只需要将 javax.persistence_1.0.0.0_1-0-2.jar 替换成 javax.persistence_1.1.0.0_2-0.jar 即可. 

三、具体操作: 
1.停止wls 
2.备份原来的jar包:    mv  javax.persistence_1.0.0.0_1-0-2.jar  javax.persistence_1.0.0.0_1-0-2.jar.bak20120925 
3.拷贝兼容的jar包:    cp   javax.persistence_1.1.0.0_2-0.jar  javax.persistence_1.0.0.0_1-0-2.jar 
4.启动wls即可!