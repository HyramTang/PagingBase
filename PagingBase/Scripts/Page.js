var Paging = (function () {
    var pageContent = function (pageIndex, pageTotal) {
        //生成分页HTML样式代码
        var str = "",
            prePageIndex = (pageIndex - 1) <= 0 ? pageTotal : (pageIndex - 1),
            nexPageIndex = (pageIndex + 1) > pageTotal ? 1 : (pageIndex + 1),
            pre = '<li><a href="javascript:changePage(' + prePageIndex + ')" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>',//上一页
            next = '<li><a href="javascript:changePage(' + nexPageIndex + ')" aria-label="Previous"><span aria-hidden="true">&raquo;</span></a></li>',//下一页
            startPageIndex = 0,//起始页码
            endPageIndex = 0;//结束页码

        if (pageIndex < 3) {//页码小于3时
            startPageIndex = 1;
            endPageIndex = 5;
        } else if (pageIndex > pageTotal - 3) {//页码大于7时
            startPageIndex = pageTotal - 4;
            endPageIndex = pageTotal;
        } else {//其它情况
            startPageIndex = pageIndex - 2;
            endPageIndex = pageIndex + 2;
        }

        //生成页码
        for (var i = startPageIndex ; i <= endPageIndex; i++) {
            str += '<li class=\"' + (i == pageIndex ? 'active' : '') + '\"><a href="javascript:changePage(' + i + ')">' + i + '</a></li>';
        }
        str = pre + str + next;
        return '<ul class="pagination">' + str + '</ul>';
    }

    return pageContent;
})();