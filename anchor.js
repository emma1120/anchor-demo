;
(function(window, undefined) {
    /**
     * 
     * @param {*} ele 初始化的Id
     * @param {*} names Array [] 名称数组列表
     */

    var Anchor = function(ele, names) {
        this.ele = ele;
        this.names = names;
    }


    /**
     * 渲染生成锚点DOM
     */
    Anchor.prototype.initHtml = function() {

        var _anchorHtmlBefore = '<div class="m-location-box"><ul class="m-locaiton-list"><li class="top-dot"></li>'
        var _anchorHtmlAfter = '<li class="bottom-dot"></li></ul></div>'
        var _html = '';

        this.names.forEach(function(item, index) {
            var _isAcitve
            var _num = index + 1;
            (index === 0) ? _isAcitve = 'active': '';
            var _li = '<li class="location ' + _isAcitve + '">' + '<div class="icon-angle-right"></div>' +
                '<a href="#sec' + index + '"><span class="num">' + _num + '</span><span class="txt">' + item + '</span></a></li>'

            _html += _li
        });
        _html = _anchorHtmlBefore + _html + _anchorHtmlAfter
        return _html

    }

    /**
     * 初始化执行函数
     */
    Anchor.prototype.init = function() {
        if (!Array.isArray(this.names)) {
            return;
        }
        var _html = this.initHtml();
        var anchorELE = this.ele && document.querySelector(this.ele);
        anchorELE.innerHTML = _html

        var locationELE = document.querySelectorAll(".m-locaiton-list .location");
        window.addEventListener('scroll', function(e) {
            var top = document.body.scrollTop || document.documentElement.scrollTop;
            locationELE.forEach(function(item, index) {
                  var _dom = document.querySelector("#sec" + index)
                if (_dom&&_dom.offsetTop <= top) {
                    locationELE.forEach(function(item) {
                        item.classList.remove("active")
                    })
                    item.classList.add('active')
                }
            })
        })
    }


    // 最后将插件对象暴露给全局对象
    !("Anchor" in window) && (window.Anchor = Anchor)
})(window)