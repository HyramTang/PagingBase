var Paging = (function () {
    var pageContent = function (pageindex, pagetotal) {
        //生成分页HTML样式代码
        var str = "",
            prePageIndex = (pageindex - 1) <= 0 ? pagetotal : (pageindex - 1),
            nexPageIndex = (pageindex + 1) > pagetotal ? 1 : (pageindex + 1);
        var pre = '<li><a href="javascript:changePage(' + prePageIndex + ')" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>',
            next = '<li><a href="javascript:changePage(' + nexPageIndex + ')" aria-label="Previous"><span aria-hidden="true">&raquo;</span></a></li>';

        if (pageindex <= 3) {
            for (var i = 1; i <= 5; i++) {
                str += '<li class=\"' + (i == pageindex ? 'active' : '') + '\"><a href="javascript:changePage(' + i + ')">' + i + '</a></li>';
            }
        } else if (pageindex > (pagetotal - 3)) {
            for (var i = (pagetotal - 4) ; i <= pagetotal; i++) {
                str += '<li class=\"' + (i == pageindex ? 'active' : '') + '\"><a href="javascript:changePage(' + i + ')">' + i + '</a></li>';
            }
        } else {
            for (var i = (pageindex - 2) ; i <= pageindex + 2; i++) {
                str += '<li class=\"' + (i == pageindex ? 'active' : '') + '\"><a href="javascript:changePage(' + i + ')">' + i + '</a></li>';
            }
        }
        str = pre + str + next;
        return '<ul class="pagination">' + str + '</ul>';
    }

    return pageContent;
})();