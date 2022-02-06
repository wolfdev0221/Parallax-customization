var boostPFS = new BoostPFS();
boostPFS.init(); 
if (typeof boostPFSConfig != 'undefined' 
	&& typeof boostPFSConfig.general != 'undefined' 
	&& typeof boostPFSConfig.general.isInitFilter != 'undefined' 
	&& boostPFSConfig.general.isInitFilter === true) { 
	boostPFS.initFilter(); 
} 
BoostPFS.jQ(window).on('load', function(){
	boostPFS.initSearchBox();
	boostPFS.initAnalytics();
//     $('.boost-pfs-filter-option .boost-pfs-filter-option-title button').on('click', function(e) {
// 	    jQ(this).parent().siblings('.boost-pfs-filter-option-content').animate({opacity: "toggle"});
//     });
    var filters_width = 0;
    var filters_count = $('.boost-pfs-filter-options-wrapper .boost-pfs-filter-option').length;
    $('.boost-pfs-filter-option').each(function() {
      filters_width = filters_width + $(this).width();
    });
    filters_width = filters_width + $('.boost-pfs-filter-custom-sorting').width();
    var margin = ($('.filter_container_wrap_p').width() - filters_width) / filters_count;
    $('.boost-pfs-filter-custom-sorting').css('margin-right', margin);
  
});