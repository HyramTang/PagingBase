var Paging = (function () {
    var pageContent = function (page, pagetotal) {
        //生成分页HTML样式代码
        var str = "";
        var pre = '<li><a href="javascript:changePage(' + (page - 1) + ')" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>', next = '<li><a href="javascript:changePage(' + (page + 1) + ')" aria-label="Previous"><span aria-hidden="true">&raquo;</span></a></li>';

        if (page <= 3) {
            for (var i = 1; i <= 5; i++) {
                str += '<li class=\"' + (i == page ? 'active' : '') + '\"><a href="javascript:changePage(' + i + ')">' + i + '</a></li>';
            }
            str = str + next;
        } else if (page >= (pagetotal - 4)) {
            for (var i = (pagetotal - 4) ; i <= pagetotal; i++) {
                str += '<li class=\"' + (i == page ? 'active' : '') + '\"><a href="javascript:changePage(' + i + ')">' + i + '</a></li>';
            }
            str = pre + str;
        } else {
            for (var i = (page - 2) ; i <= page + 2; i++) {
                str += '<li class=\"' + (i == page ? 'active' : '') + '\"><a href="javascript:changePage(' + i + ')">' + i + '</a></li>';
            }
            str = pre + str + next;
        }
        
        var ssss = '<ul class="pagination">' + str + '</ul>';
        console.info(ssss);

        return ssss;
    }

    return pageContent;
})();