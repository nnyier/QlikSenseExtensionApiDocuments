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
                        },
                        MyArrayProp: {
                            // 定义名称以引用代码中的新属性
                            ref: 'myDynamicOutput',
                            // 定义了类型定义，在这种情况下我们希望返回一个字符串
                            type: 'Array',
                            // 用于在文本框上方显示标签
                            label: 'Hello World Array',
                            // 定义文本框的默认值
                            defaultValue: 'Hello array'
                        }
                    }
                }
            }
        },

        //Paint resp.Rendering logic
        paint: function ($element, layout) {
            // 方法1：每次加载前先清空
            $element.empty();
            var $helloWorld = $(document.createElement('div'));
            // $helloWorld.html('Hello world from the extension')
            // 通过使用layout.myDynamicOutput来动态渲染
            $helloWorld.html(layout.myDynamicOutput)
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