$(function() {
    function t(t) {
        var e = 0;
        return $(t).each(function() {
            e += $(this).outerWidth(!0)
        }),
        e
    }
    function e(e) {
        var a = t($(e).prevAll()),
        i = t($(e).nextAll()),
        n = t($(".content-tabs").children().not(".J_menuTabs")),
        s = $(".content-tabs").outerWidth(!0) - n,
        r = 0;
        if ($(".page-tabs-content").outerWidth() < s) r = 0;
        else if (i <= s - $(e).outerWidth(!0) - $(e).next().outerWidth(!0)) {
            if (s - $(e).next().outerWidth(!0) > i) {
                r = a;
                for (var o = e; r - $(o).outerWidth() > $(".page-tabs-content").outerWidth() - s;) r -= $(o).prev().outerWidth(),
                o = $(o).prev()
            }
        } else a > s - $(e).outerWidth(!0) - $(e).prev().outerWidth(!0) && (r = a - $(e).prev().outerWidth(!0));
        $(".page-tabs-content").animate({
            marginLeft: 0 - r + "px"
        },
        "fast")
    }
    function a() {
        var e = Math.abs(parseInt($(".page-tabs-content").css("margin-left"))),
        a = t($(".content-tabs").children().not(".J_menuTabs")),
        i = $(".content-tabs").outerWidth(!0) - a,
        n = 0;
        if ($(".page-tabs-content").width() < i) return ! 1;
        for (var s = $(".J_menuTab:first"), r = 0; r + $(s).outerWidth(!0) <= e;) r += $(s).outerWidth(!0),
        s = $(s).next();
        if (r = 0, t($(s).prevAll()) > i) {
            for (; r + $(s).outerWidth(!0) < i && s.length > 0;) r += $(s).outerWidth(!0),
            s = $(s).prev();
            n = t($(s).prevAll())
        }
        $(".page-tabs-content").animate({
            marginLeft: 0 - n + "px"
        },
        "fast")
    }
    function i() {
        var e = Math.abs(parseInt($(".page-tabs-content").css("margin-left"))),
        a = t($(".content-tabs").children().not(".J_menuTabs")),
        i = $(".content-tabs").outerWidth(!0) - a,
        n = 0;
        if ($(".page-tabs-content").width() < i) return ! 1;
        for (var s = $(".J_menuTab:first"), r = 0; r + $(s).outerWidth(!0) <= e;) r += $(s).outerWidth(!0),
        s = $(s).next();
        for (r = 0; r + $(s).outerWidth(!0) < i && s.length > 0;) r += $(s).outerWidth(!0),
        s = $(s).next();
        n = t($(s).prevAll()),
        n > 0 && $(".page-tabs-content").animate({
            marginLeft: 0 - n + "px"
        },
        "fast")
    }
    function n() {
        var t = $(this).attr("href"),
        a = $(this).data("index"),
        i = $.trim($(this).text()),
        n = !0;

        if (void 0 == t || 0 == $.trim(t).length) return ! 1;
        if ($(".J_menuTab").each(function() {
            var tabIndex = $(this).index();
            return $(this).data("id") == t ? ($(this).hasClass("active") || ($(this).addClass("active").siblings(".J_menuTab").removeClass("active"), e(this), $(".J_mainContent .J_iframe").each(function() {
                return $(this).data("id") == t ? ($(this).show().siblings(".J_iframe").hide(), !1) : void 0
            })), n = !1, !1) : void 0
        }), n) {
            var s = '<a href="javascript:;" class="active J_menuTab" data-id="' + t + '">' + i + ' <i class="fa fa-times-circle"><img src="images/contab-ico.jpg"></i></a>';
            $(".J_menuTab").removeClass("active");
            var r = '<iframe class="J_iframe" name="iframe' + a + '" width="100%" height="100%" src="' + t + '" frameborder="0" data-id="' + t + '" seamless></iframe>';
            // $(".J_mainContent").find("iframe.J_iframe").hide().parents(".J_mainContent").append(r);
            $(".J_mainContent").find("iframe.J_iframe").hide();
            $(".J_mainContent").append(r);
            lo();
            $(".J_mainContent iframe:visible").load(function() {
                lx();
            }),
            $(".J_menuTabs .page-tabs-content").append(s),
            e($(".J_menuTab.active"))
        }
        return ! 1
    }

    // 关闭
    function s() {
        var t = $(this).parents(".J_menuTab").data("id"),
        a = $(this).parents(".J_menuTab").width();
        if ($(this).parents(".J_menuTab").hasClass("active")) {
            if ($(this).parents(".J_menuTab").next(".J_menuTab").size()) {
                var i = $(this).parents(".J_menuTab").next(".J_menuTab:eq(0)").data("id");
                $(this).parents(".J_menuTab").next(".J_menuTab:eq(0)").addClass("active"),
                $(".J_mainContent .J_iframe").each(function() {
                    return $(this).data("id") == i ? ($(this).show().siblings(".J_iframe").hide(), !1) : void 0
                });
                var n = parseInt($(".page-tabs-content").css("margin-left"));
                0 > n && $(".page-tabs-content").animate({
                    marginLeft: n + a + "px"
                },
                "fast"),
                $(this).parents(".J_menuTab").remove(),
                $(".J_mainContent .J_iframe").each(function() {
                    return $(this).data("id") == t ? ($(this).remove(), !1) : void 0
                })
            }
            if ($(this).parents(".J_menuTab").prev(".J_menuTab").size()) {
                var i = $(this).parents(".J_menuTab").prev(".J_menuTab:last").data("id");
                $(this).parents(".J_menuTab").prev(".J_menuTab:last").addClass("active"),
                $(".J_mainContent .J_iframe").each(function() {
                    return $(this).data("id") == i ? ($(this).show().siblings(".J_iframe").hide(), !1) : void 0
                }),
                $(this).parents(".J_menuTab").remove(),
                $(".J_mainContent .J_iframe").each(function() {
                    return $(this).data("id") == t ? ($(this).remove(), !1) : void 0
                })
            }
        } else $(this).parents(".J_menuTab").remove(),
        $(".J_mainContent .J_iframe").each(function() {
            return $(this).data("id") == t ? ($(this).remove(), !1) : void 0
        }),
        e($(".J_menuTab.active"));
        return ! 1
    }
    function r() {
        $(".page-tabs-content").children("[data-id]").not(":first").not(".active").each(function() {
            $('.J_iframe[data-id="' + $(this).data("id") + '"]').remove(),
            $(this).remove()
        }),
        $(".page-tabs-content").css("margin-left", "0")
    }

    // 定位当前选项卡
    function o() {
        e($(".J_menuTab.active"))
    }
    function d() {
        if (!$(this).hasClass("active")) {
            var t = $(this).data("id");
            $(".J_mainContent .J_iframe").each(function() {
                return $(this).data("id") == t ? ($(this).show().siblings(".J_iframe").hide(), !1) : void 0
            }),
            $(this).addClass("active").siblings(".J_menuTab").removeClass("active"),
            e(this)
        }
    }
    // iframe 双击 重载
    function c() {
        var t = $('.J_iframe[data-id="' + $(this).data("id") + '"]'),
        e = t.attr("src");
        lo();
        t.attr("src", e).load(function() {
            lx();
        })
    }
    // iframe 右键 重载
    function yl(iframeindex){
        var t = $('.J_iframe[data-id="' + iframeindex + '"]'),
        e = t.attr("src");
        lo();
        t.attr("src", e).load(function() {
            lx();
        });
        yc();
    }


    // iframe 加载前 load 特效样式
    function lo(){
        $('#J_load_gif').show();
    }

    // iframe 页面加载完成后去除 load 特效
    function lx(){
        $('#J_load_gif').hide();
    }

    // 右键关闭
    function yc(){
        $("#J_Mouse_Menu").hide();
    }
    


    // 页面 load 特效
    var ifload = '<div id="J_load_gif" style="display:none"></div>';
    $(document.body).append(ifload);
    var mousemenu = '<div id="J_Mouse_Menu" style="display:none"><div id="J_Load_Refresh">刷新</div><div id="J_Close_All">关闭所有</div><div id="J_Close_Other">关闭其他</div><div id="J_Close_Self">关闭当前</div></div>';
    $(document.body).append(mousemenu);

    // t 为 each 的默认遍历 key 数字， 在没有data-index属性的时候，赋值遍历键值默认属性
    $(".J_menuItem").each(function(t) {
        $(this).attr("data-index") || $(this).attr("data-index", t)
    }),

    // 点击左边链接 加入 iframe 和头部菜单
    $(".J_menuItem").on("click", n),
    // 点击关闭 菜单
    $(".J_menuTabs").on("click", ".J_menuTab i", s),

    // 右键 菜单 事件
    $(".J_menuTabs").on("contextmenu", ".J_menuTab", function(e){
        // 取消原生右键显示
        if(typeof e.preventDefault === "function"){
                e.preventDefault();
                e.stopPropagation();
        }else{
                e.returnValue = false;
                e.cancelBubble = true;
        }
        // 右键div显示
        $("#J_Mouse_Menu").css({"left": e.pageX, "top": e.pageY});
        // 增加标记 iframe 的 id
        $("#J_Load_Refresh").attr("iframe-index", $(this).data("id"));
        // 标记 J_menuTab 的位置
        $("#J_Close_Self").attr("menutab-index", $(this).index());

        $("#J_Mouse_Menu").show();
        return false;
    }),
    
    // 右键刷新
    $("#J_Load_Refresh").on("click", function(){
        var iframe_index = $(this).attr("iframe-index");
        if(iframe_index==undefined || iframe_index=='' || iframe_index==null)
            return false;
        yl(iframe_index);
        return false;
    }),

    // 右键关闭当前
    $("#J_Close_Self").on("click", function(){
        var menutab_index = $(this).attr("menutab-index");
        $(".J_menuTabs .J_menuTab:eq("+menutab_index+") i").trigger("click");
        yc();
    }),

    $(".J_tabCloseOther").on("click", r),
    $(".J_tabShowActive").on("click", o),
    $(".J_menuTabs").on("click", ".J_menuTab", d),

    // 刷新重载
    $(".J_menuTabs").on("dblclick", ".J_menuTab", c),
    
    $(".J_tabLeft").on("click", a),
    $(".J_tabRight").on("click", i),
    
    // 右键 关闭其他
    $("#J_Close_Other").on("click",function(){
        var menutab_index = $("#J_Close_Self").attr("menutab-index");
        $(".page-tabs-content").children("[data-id]:not(:eq("+ menutab_index +"))").each(function() {
            $('.J_iframe[data-id="' + $(this).data("id") + '"]').remove(),
            $(this).remove()
        }),
        $(".page-tabs-content").children("[data-id]:not(:eq("+ menutab_index +"))").each(function() {
            $('.J_iframe[data-id="' + $(this).data("id") + '"]').show(),
            $(this).addClass("active")
        }),
        $(".page-tabs-content").css("margin-left", "0");
        yc();
    }),

    // 右键 关闭所有
    $("#J_Close_All").on("click", 
    function() {
        $(".page-tabs-content").children("[data-id]").each(function() {
            $('.J_iframe[data-id="' + $(this).data("id") + '"]').remove(),
            $(this).remove()
        }),
        $(".page-tabs-content").css("margin-left", "0");
        yc();
    })


});