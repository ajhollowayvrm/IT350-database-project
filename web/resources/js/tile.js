function moveToTile(tile_name) {
    $.getCurrentTile().hideTile();
    $.getTile(tile_name).showTile();
}

//Custom jQuery functions
(function($) {
    $.fn.getTileName = function() {
        return this.attr('tile');
    };
}(jQuery));

(function($) {
    $.fn.getTileView = function() {
        return this.attr('tileview');
    };
}(jQuery));

jQuery.getTile = function(tile_name) {
    return $($("div[tile='" + tile_name + "']")[0])
};

jQuery.getCurrentTile = function(tile_name) {
    return $($("div[tileview='yes']")[0])
};

(function($) {
    $.fn.showTile = function() {
        this.fadeIn('slow').attr({'tileview':'yes'});
    };
}(jQuery));

(function($) {
    $.fn.hideTile = function() {
        $(this).fadeOut('slow').attr({'tileview':'no'});
}
}(jQuery));