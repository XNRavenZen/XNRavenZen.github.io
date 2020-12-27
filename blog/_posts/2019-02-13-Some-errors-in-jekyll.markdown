---
layout: post
title:  "使用Jekyll出现的异常"
author: "XNRavenZen"
categories: Jekyll
summary: 
---
```
/var/lib/gems/2.5.0/gems/jekyll-3.8.3/lib/jekyll/drops/document_drop.rb:8: warning: already initialized constant Jekyll::Drops::DocumentDrop::NESTED_OBJECT_FIELD_BLACKLIST
/usr/lib/ruby/vendor_ruby/jekyll/drops/document_drop.rb:8: warning: previous definition of NESTED_OBJECT_FIELD_BLACKLIST was here
/var/lib/gems/2.5.0/gems/jekyll-3.8.3/lib/jekyll/drops/drop.rb:8: warning: already initialized constant Jekyll::Drops::Drop::NON_CONTENT_METHODS
/usr/lib/ruby/vendor_ruby/jekyll/drops/drop.rb:8: warning: previous definition of NON_CONTENT_METHODS was here
Configuration file: /mnt/r/area/jekyll/XNRavenZen.github.io/_config.yml
Configuration file: /mnt/r/area/jekyll/XNRavenZen.github.io/_config.yml
Configuration file: /mnt/r/area/jekyll/XNRavenZen.github.io/_config.yml
            Source: /mnt/r/area/jekyll/XNRavenZen.github.io
       Destination: /mnt/r/area/jekyll/XNRavenZen.github.io/_site
 Incremental build: disabled. Enable with --incremental
      Generating...
             ERROR: YOUR SITE COULD NOT BE BUILT:
                    ------------------------------------
                    Key related_posts cannot be set in the drop.
```
**说明:**gem 安装的jekyll版本与插件依赖的jekyll版本高于apt-get安装的版本(3.1.6)，卸载(apt-get uninstall jekyll)