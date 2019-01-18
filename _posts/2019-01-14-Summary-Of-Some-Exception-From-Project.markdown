---
layout: post
title:  "项目中一些异常整理"
author: "XNRavenZen"
date:   2019-01-14 17:17:17 +0800
categories: java ssh exception
summary: 总结一下项目里出现的一些异常
---
## 数据库相关
### 类型转换异常
**java.lang.ClassCastException**:java.math.BigDecimal cannot be cast to java.lang.String
**说明**：实体类的属性弄成String类型，无法接收Oracle数据库内INTEGER类型的字段

### SQL语法异常
**org.hibernate.exception.SQLGrammaException**: could not get next sequence value
Caused by: **java.sql.SQLException**: ORA-02289:序列不存在
**说明**: 实体类中声明的序列在数据库中不存在，去掉实体类中的序列声明

### hibernate声明异常
**org.hibernate.AnnotationException**: No identifier specified for entity
**说明**:hibernate要求必须为实体类声明一个主键(@ID)
注:由于实体类对应的数据库表不存在主键，因此将表的唯一索引的字段封装成类，由这个类作为实体类的复合主键并声明@EmbeddedId

### 非唯一实体异常
**org.hibernate.NonUniqueObjectException**: a different object with the same identifier value was already associated with the session
**说明**:session中已存在另一个id相同的实体对象,由于采用的saveOrUpdate方法不适用于存在复合主键的实体类，因此采用merge方法(Hibernate3以上使用)

### 未找到指定实体对象
**org.hibernate.ObjectNotFoundException**:No row with the given identifier exists
**说明**:根据给定的id未能找到指定实体对象
表A和表B通过中间表A-B连接,表B中的数据删除而表A-B中仍存在引用，则根据表A的id通过表A-B查找不到表B的实体对象报错

### bean创建异常
**org.springframework.beans.factory.BeanCreationException**: Error creating bean with name '_filterChainProxyPostProcessor':Initialization of bean failed; nested exception is **org.springframework.beans.factory.BeanCreationException**:Error creating bean with name 'org.springframework.transaction.interceptor.TransactionAttributeSourceAdvisor#0':Cannot create inner bean '(inner bean)' of type [org.springframework.transaction.interceptor.TransactionInterceptor] while setting bean property 'transactionInterceptor'; nested exception is **org.springframework.beans.factory.BeanCreationException**: Error creating bean with name '(inner bean)': Cannot resolve reference to bean 'transactionManager' while setting bean property 'transactionManager' while setting bean property 'transactionManager'; nested exception is **org.springframework.beans.factory.BeanCreationException**: Error creating bean with name 'transactionManager' defined in file [xxx\WEB-INF\classes\applicationContext.xml]: Cannot resole reference to bean 'sessionFactory' while setting bean property 'sessionFactory'; nested exception is **org.springframework.beans.factory.BeanCreationException**: Error creating bean with name 'sessionFactory' defined in file [xxx\WEB-INF\classes\applicationContext.xml]: Cannot resolve reference to bean 'dataSource' while setting bean property 'dataSource'; nested exception is **org.springframework.beans.factory.BeanCreationException**: Error creating bean with name 'dataSource':Invocation of init method failed; nested exception is  **javax.naming.NameNotFoundException**: Name [xxx_oracle] is not bound in this Context. Unable to find [xxx_oracle].
**说明**：本地测试时没有把数据源从jndi配置换成本地的数据库连接配置

## 从struts2.3升级到2.5.18
### 替换jar包

| 升级前 | 升级后 |
| :-: | :-: |
|asm-3.3.jar| asm-5.2.jar |
|asm-commons-3.3.jar| asm-commons-5.2.jar |
|-| asm-tree-5.2.jar |
| commons-io.jar | commons-io-2.5.jar |
| commons-lang3-3.1.jar | commons-lang3-3.6.jar |
| freemarker-2.3.16.jar | freemarker-2.3.26-incubating.jar |
| javassist-3.11.0.GA.jar | javassist-3.20.0.GA.jar |
| - | log4j-api-2.10.0.jar |
| - | log4j-core-2.10.0.jar |
| - | log4j-web-2.10.0.jar |
| ognl-3.0.6.jar | ognl-3.1.15.jar |
| struts-convention-2.3.15.1.jar | struts-convention-2.5.18.jar |
| struts-core-2.3.15.1.jar | struts-core-2.5.18.jar |
| struts-json-plugin-2.3.15.1.jar | struts-json-plugin-2.5.18.jar |
| struts-spring-plugin-2.3.15.1.jar | struts-spring-plugin-2.5.18.jar |
| xwork-core-2.3.15.1.jar | - |
注："-"表示在项目中不存在或删除了jar包

### 无法解析jar包
Unable to process Jar entry [module-info.class] from Jar[jar:file:/log4j-api-2.10.0.jar!/] for annotaitions
**org.apache.tomcat.util.bcel.classfile.ClassFormatException**:Invalid byte tag in constant pool :19
**说明**:tomcat版本低无法解析jar包，从tomcat7.0.70换成7.0.92版本问题解决

### jsp访问异常
Servlet.service() for servlet [jsp] in context with path[/] threw exception [/login.jsp (line:2, column 0) null] with root cause
**org.apache.jsper.JasperException**: /login.jsp (line: 2, column: 0) 
tomcat的lib混进了dubbo的相关配置和jar包，导致路径无法访问，去除相关文件后清除浏览器缓存
