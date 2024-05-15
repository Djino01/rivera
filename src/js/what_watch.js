$(document).ready(function() {
    let wwback = $('.what_watch_layer_2');
    let wwvideo = $('.what_video_block');
    let current_scale = 0;
    let timeout;
    let isVideoVisible = false;

    $('.what_watch').mousemove(function(event) {
        var pos = $(this).offset();
        var elem_left = pos.left.toFixed(0);
        var elem_top = pos.top.toFixed(0);
        var x = event.pageX - elem_left;
        var y = event.pageY - elem_top;

        if (current_scale < 0.12) current_scale += 0.002;

        let scx = 1 + current_scale;
        let scy = 1 - current_scale;

        wwback.css('clip-path', 'circle(155px at ' + x + 'px ' + y + 'px)');
        wwvideo.css('transform', 'translate(' + (x - 155) + 'px, ' + (y - 155) + 'px) scale(' + scx + ', ' + scy + ')');

        clearTimeout(timeout);
        timeout = setTimeout(() => {
            current_scale = 0;
            wwvideo.css('transform', 'translate(' + (x - 155) + 'px, ' + (y - 155) + 'px) scale(1, 1)');
        }, 100);
    });

    $('.what_watch_link_item').hover(function() {
        let id = $(this).attr('data-id');
        let _item = $('.js_what_video_item_' + id);
        $('.what_video_item').hide();
        _item.show();
    }, function() {});

    $('.what_watch_links').hover(function() {
        if (!isVideoVisible) {
            isVideoVisible = true;
            wwvideo.css('opacity', 1);
            wwvideo.css('visibility', 'visible');
        }
    }, function() {
        if (isVideoVisible) {
            isVideoVisible = false;
            wwvideo.css('opacity', 0);
            wwvideo.css('visibility', 'hidden');
        }
    });

    $('.what_watch_links').hover(function() {
        wwback.css('opacity', 1);
    }, function() {
        wwback.css('opacity', 0);
    });
});
