define([
        'jquery'
    ],
    function ($) {
        'use strict';

        return {
            // Define what our properties panel look like
            // 这基本上定义了带有要使用的部分和组件的手风琴
            definition: {
                type: "items",
                // 手风琴
                component: "accordion",
                items: {
                    appearancePanel: {
                        use: "settings",
                        items: {
                            // 是我们新的自定义对象的表示
                            MyStringProp: {
                                // 定义名称以引用代码中的新属性
                                ref: 'myDynamicOutput',
                                // 定义了类型定义，在这种情况下我们希望返回一个字符串
                                type: 'string',
                                // 用于在文本框上方显示标签
                                label: 'Hello World Text',
                                // 定义文本框的默认值
                                defaultValue: 'Hello wrold'
                            }
                        }
                    },
                    // 维度
                    dimensions: {
                        uses: "dimensions",
                        // 可视化扩展必须具有一个维度。
                        min: 1,
                        max: 1
                    },
                    // 度量
                    measures: {
                        uses: "measures",
                        // 可视化扩展必须只有一个度量
                        min: 1,
                        max: 1
                    },
                    // 排序
                    sorting: {
                        uses: "sorting"
                    },
                    // 添加加载项部分
                    addons: {
                        uses: "addons"
                    },
                    // 外观 Appearance (settings)
                    appearance: {
                        uses: "settings",
                    }
                }
            },

            //Paint resp.Rendering logic
            paint: function ($element, layout) {
                // 方法1：每次加载前先清空
                $element.empty();
                var $helloWorld = $(document.createElement('div'));
                var html = '<b>Property values:</b><br/>'
                html += 'Title:' + layout.title + '<br/>'
                html += 'Subtitle:' + layout.subtitle + '<br/>'
                $helloWorld.html(html)
                $element.append($helloWorld);

                // 方法2：先判断是否有带有id的该元素，没有再添加
                // var id = layout.qInfo.qId + '_hellowrold';
                // var $helloWorld = $('#' + id);
                // if (!$helloWorld.length) {
                //     console.log('No element found with the given Id, so create the element')
                //     $helloWorld = $(document.createElement('div'));
                //     $helloWorld.attr('id', id)
                //     $helloWorld.html('Hello World from the extension "SimpleHelloWorld"<br/>');
                //     $element.append($helloWorld);
                // } else {
                //     console.log('Found an element with the given Id, so just change it')
                //     $helloWorld.html('Hello World from the extension "SimpleHelloWorld"<br/>')
                // }

            }
        };
    });