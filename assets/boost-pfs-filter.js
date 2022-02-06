var onSale = false;
var soldOut = false;
var priceVaries = false;
var images = [];
var firstVariant = {};

// Fix the confict suggestion search in Debut theme
if (typeof theme !== 'undefined' && theme.hasOwnProperty('settings')) theme.settings.predictiveSearchEnabled = false;
// Override Settings
var boostPFSFilterConfig = {
	general: {
		limit: boostPFSThemeConfig.custom.products_per_page,	
		/* Optional */	
		loadProductFirst: true,	
		// Placeholder	
		showPlaceholderProductList: true,	
		placeholderProductPerRow: 3,	
    placeholderProductGridItemClass: 'boost-pfs-filter-product-item boost-pfs-filter-product-item-grid boost-pfs-filter-grid-width-3 boost-pfs-filter-grid-width-mb-2',	
		enableOTP: true,	
		separateRefineByFromFilter: true,	
		//filterTreeMobileStyle: 'style2', // 'style2', 'style3',
		equal_height: boostPFSThemeConfig.custom.equal_height,
    cropImagePossitionEqualHeight: boostPFSThemeConfig.custom.equal_height_crop_image_position
	},
    selector: {
      otpButtons:'.boost-pfs-filter-product-item-image'
    }
};

(function() {
	BoostPFS.inject(this);
	
	/************************** CUSTOMIZE DATA BEFORE BUILDING PRODUCT ITEM **************************/
	function prepareShopifyData(data) {
		// Displaying price base on the policy of Shopify, have to multiple by 100
		soldOut = !data.available; // Check a product is out of stock
		onSale = data.compare_at_price_min > data.price_min; // Check a product is on sale
		priceVaries = data.price_min != data.price_max; // Check a product has many prices
		// Convert images to array
		images = data.images_info;
		// Get First Variant (selected_or_first_available_variant)
		var firstVariant = data['variants'][0];
		if (Utils.getParam('variant') !== null && Utils.getParam('variant') != '') {
			var paramVariant = data.variants.filter(function(e) {
				return e.id == Utils.getParam('variant');
			});
			if (typeof paramVariant[0] !== 'undefined') firstVariant = paramVariant[0];
		} else {
			for (var i = 0; i < data['variants'].length; i++) {
				if (data['variants'][i].available) {
					firstVariant = data['variants'][i];
					break;
				}
			}
		}
		return data;
	}
	/************************** END CUSTOMIZE DATA BEFORE BUILDING PRODUCT ITEM **************************/
	/************************** BUILD PRODUCT LIST **************************/
	// Build Product Grid Item
	ProductGridItem.prototype.compileTemplate = function(data) {
		if (!data) data = this.data;
		// Get Template
		var itemHtml = boostPFSTemplate.productGridItemHtml;
		// Customize API data to get the Shopify data
		data = prepareShopifyData(data);
		// Add Custom class
		var soldOutClass = soldOut ? boostPFSTemplate.soldOutClass : '';
		var saleClass = onSale ? boostPFSTemplate.saleClass : '';
		itemHtml = itemHtml.replace(/{{soldOutClass}}/g, soldOutClass);
		itemHtml = itemHtml.replace(/{{saleClass}}/g, saleClass);
		// Add Grid Width class
		itemHtml = itemHtml.replace(/{{gridWidthClass}}/g, buildGridWidthClass(data));
		// Add Label
		itemHtml = itemHtml.replace(/{{itemLabels}}/g, buildLabels(data));
		// Add TAG Label
		itemHtml = itemHtml.replace(/{{itemTagLabels}}/g, buildTagLabels(data, false));
		// Add Images
		itemHtml = itemHtml.replace(/{{itemImages}}/g, buildImages(data));
		// Add Price
		itemHtml = itemHtml.replace(/{{itemPrice}}/g, buildPrice(data));

		// Add Review
		if (boostPFSThemeConfig.custom.show_product_review) {
			var itemReviewHtml = '<span class="shopify-product-reviews-badge" data-id="{{itemId}}"></span>';
			itemHtml = itemHtml.replace(/{{itemReviewHtml}}/g, itemReviewHtml);
		} else {
			itemHtml = itemHtml.replace(/{{itemReviewHtml}}/g, '');
		}
  
		// Add Vendor
		itemHtml = itemHtml.replace(/{{itemVendor}}/g, buildVendor(data));
		// itemActiveSwapClass
		var itemActiveSwapClass = boostPFSThemeConfig.custom.active_image_swap ? 'has-bc-swap-image' : '';
		itemHtml = itemHtml.replace(/{{itemActiveSwapClass}}/g, itemActiveSwapClass);
		// Add Color Swatches
  		itemHtml = itemHtml.replace(/{{itemColorSwatches}}/g, buildColorSwatches(data));

		// Add main attribute (Always put at the end of this function)
		itemHtml = itemHtml.replace(/{{itemId}}/g, data.id);
		itemHtml = itemHtml.replace(/{{itemTitle}}/g, data.title);
		itemHtml = itemHtml.replace(/{{itemHandle}}/g, data.handle);
		itemHtml = itemHtml.replace(/{{itemVendorLabel}}/g, data.vendor);
		itemHtml = itemHtml.replace(/{{itemUrl}}/g, Utils.buildProductItemUrl(data));
		return itemHtml;
	};
	// Build Product List Item
	ProductListItem.prototype.compileTemplate = function(data) {
		if (!data) data = this.data;
		// For List View
		/*** Prepare data ***/
		var images = data.images_info;
		// Displaying price base on the policy of Shopify, have to multiple by 100
		var soldOut = !data.available; // Check a product is out of stock
		var onSale = data.compare_at_price_min > data.price_min; // Check a product is on sale
		var priceVaries = data.price_min != data.price_max; // Check a product has many prices
		// Get First Variant (selected_or_first_available_variant)
		var firstVariant = data['variants'][0];
		if (Utils.getParam('variant') !== null && Utils.getParam('variant') != '') {
			var paramVariant = data.variants.filter(function(e) {
				return e.id == Utils.getParam('variant');
			});
			if (typeof paramVariant[0] !== 'undefined') firstVariant = paramVariant[0];
		} else {
			for (var i = 0; i < data['variants'].length; i++) {
				if (data['variants'][i].available) {
					firstVariant = data['variants'][i];
					break;
				}
			}
		}
		/*** End Prepare data ***/
		// Get Template
		var itemHtml = boostPFSTemplate.productListItemHtml;
		// Customize API data to get the Shopify data
		data = prepareShopifyData(data);
		// Add Custom class
		var soldOutClass = soldOut ? boostPFSTemplate.soldOutClass : '';
		var saleClass = onSale ? boostPFSTemplate.saleClass : '';
		itemHtml = itemHtml.replace(/{{soldOutClass}}/g, soldOutClass);
		itemHtml = itemHtml.replace(/{{saleClass}}/g, saleClass);
		// Add Label
		itemHtml = itemHtml.replace(/{{itemLabels}}/g, buildLabels(data));
		// Add TAG Label
		itemHtml = itemHtml.replace(/{{itemTagLabels}}/g, buildTagLabels(data, false));
		// Add Images
		itemHtml = itemHtml.replace(/{{itemImages}}/g, buildImages(data));

		// Add Review
		if (boostPFSThemeConfig.custom.show_product_review) {
			var itemReviewHtml = '<span class="shopify-product-reviews-badge" data-id="{{itemId}}"></span>';
			itemHtml = itemHtml.replace(/{{itemReviewHtml}}/g, itemReviewHtml);
		} else {
			itemHtml = itemHtml.replace(/{{itemReviewHtml}}/g, '');
		}

		// Add Vendor
		itemHtml = itemHtml.replace(/{{itemVendor}}/g, buildVendor(data));
		// Add Price
		var itemPriceHtml = buildPrice(data, onSale, priceVaries);
		itemHtml = itemHtml.replace(/{{itemPrice}}/g, itemPriceHtml);
		// Description
		var itemDescription = jQ('<p>' + data.body_html + '</p>').text();
		itemDescription = (itemDescription.split(" ")).length > 35 ? itemDescription.split(" ").splice(0, 35).join(" ") + '...' : itemDescription.split(" ").splice(0, 35).join(" ");
		itemHtml = itemHtml.replace(/{{itemDescription}}/g, itemDescription);
		// itemActiveSwapClass
		var itemActiveSwapClass = boostPFSThemeConfig.custom.active_image_swap ? 'has-bc-swap-image' : '';
		itemHtml = itemHtml.replace(/{{itemActiveSwapClass}}/g, itemActiveSwapClass);
		// Add Color Swatches
  		itemHtml = itemHtml.replace(/{{itemColorSwatches}}/g, buildColorSwatches(data));
		
		// Add main attribute
		itemHtml = itemHtml.replace(/{{itemTitle}}/g, data.title);
		itemHtml = itemHtml.replace(/{{itemVendorLabel}}/g, data.vendor);
		itemHtml = itemHtml.replace(/{{itemUrl}}/g, Utils.buildProductItemUrl(data));
		itemHtml = itemHtml.replace(/{{itemId}}/g, data.id);
		return itemHtml;
		// End For List View
	};
	/************************** END BUILD PRODUCT LIST **************************/
	/************************** BUILD PRODUCT ITEM ELEMENTS **************************/
	function buildGridWidthClass() {
		var gridWidthClass = '';
		// On PC
		switch (boostPFSThemeConfig.custom.products_per_row) {
			case 2:
				gridWidthClass = 'boost-pfs-filter-grid-width-2';
				break;
			case 3:
				gridWidthClass = 'boost-pfs-filter-grid-width-3';
				break;
			case 5:
				gridWidthClass = 'boost-pfs-filter-grid-width-5';
				break;
			default:
				gridWidthClass = 'boost-pfs-filter-grid-width-4';
				break;
		}
		// On Mobile
		switch (boostPFSThemeConfig.custom.products_per_row_mobile) {
			case 1:
				gridWidthClass += ' boost-pfs-filter-grid-width-mb-1';
				break;
			case 3:
				gridWidthClass += ' boost-pfs-filter-grid-width-mb-3';
				break;
			default:
				gridWidthClass += ' boost-pfs-filter-grid-width-mb-2';
				break;
		}
		return gridWidthClass;
	}

	function buildImages(data) {      
	  var html = '';
      var aspect_ratio = '';
	  // Build Main Image
	  var thumbUrl = Utils.getFeaturedImage(images, '600x');
      
      
	  
	  var flipImageSrc = images.length > 1 ? Utils.optimizeImage(images[1]['src'],'600x') : (images.length > 0 ? Utils.optimizeImage(images[0]['src'], '600x') : boostPFSAppConfig.general.no_image_url);
      var srcSet = (images.length > 0 ? bgset(images[0]) : boostPFSAppConfig.general.no_image_url);
      var flipImageSrcset = boostPFSAppConfig.general.no_image_url;
      if (images.length > 0) {
        var flipImageSrcset = images.length > 1 ? bgset(images[1]) : srcSet;
      }

	  html += '<a href="{{itemUrl}}" class="boost-pfs-filter-product-item-image-link" style="padding-top:';
		
		if (images.length > 0) {
			aspect_ratio = images[0]['width'] / images[0]['height'];
			html += 1 / aspect_ratio * 100;
		} else {
			html += 100;
		}
		html += '%;">';
      	html += '<img class="boost-pfs-filter-product-item-main-image lazyload lazypreload Image--lazyLoad"' +          
		  'data-src="' + thumbUrl + '" ' +		  
		  'src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" ' +
          'data-img-flip = "' + flipImageSrc + '" ' +          
		  'alt="{{itemTitle}}" />';
        html += '</a>';
	  
	  return html;
  }
  
  function bgset(image) {
	var bgset = '';
	if (image) {
		var aspect_ratio = image.width / image.height;

		if (image.width > 180) bgset += ' ' + Utils.optimizeImage(image.src, '180x') + ' 180w ' + Math.round(180 / aspect_ratio) + 'h,';
		if (image.width > 360) bgset += ' ' + Utils.optimizeImage(image.src, '360x') + ' 360w ' + Math.round(360 / aspect_ratio) + 'h,';
		if (image.width > 540) bgset += ' ' + Utils.optimizeImage(image.src, '540x') + ' 540w ' + Math.round(540 / aspect_ratio) + 'h,';
		if (image.width > 720) bgset += ' ' + Utils.optimizeImage(image.src, '720x') + ' 720w ' + Math.round(720 / aspect_ratio) + 'h,';
		if (image.width > 900) bgset += ' ' + Utils.optimizeImage(image.src, '900x') + ' 900w ' + Math.round(900 / aspect_ratio) + 'h,';
		if (image.width > 1080) bgset += ' ' + Utils.optimizeImage(image.src, '1080x') + ' 1080w ' + Math.round(1080 / aspect_ratio) + 'h,';
		if (image.width > 1296) bgset += ' ' + Utils.optimizeImage(image.src, '1296x') + ' 1296w ' + Math.round(1296 / aspect_ratio) + 'h,';
		if (image.width > 1512) bgset += ' ' + Utils.optimizeImage(image.src, '1512x') + ' 1512w ' + Math.round(1512 / aspect_ratio) + 'h,';
		if (image.width > 1728) bgset += ' ' + Utils.optimizeImage(image.src, '1728x') + ' 1728w ' + Math.round(1728 / aspect_ratio) + 'h,';
		if (image.width > 1950) bgset += ' ' + Utils.optimizeImage(image.src, '1950x') + ' 1950w ' + Math.round(1950 / aspect_ratio) + 'h,';
		if (image.width > 2100) bgset += ' ' + Utils.optimizeImage(image.src, '2100x') + ' 2100w ' + Math.round(2100 / aspect_ratio) + 'h,';
		if (image.width > 2260) bgset += ' ' + Utils.optimizeImage(image.src, '2260x') + ' 2260w ' + Math.round(2260 / aspect_ratio) + 'h,';
		if (image.width > 2450) bgset += ' ' + Utils.optimizeImage(image.src, '2450x') + ' 2450w ' + Math.round(2450 / aspect_ratio) + 'h,';
		if (image.width > 2700) bgset += ' ' + Utils.optimizeImage(image.src, '2700x') + ' 2700w ' + Math.round(2700 / aspect_ratio) + 'h,';
		if (image.width > 3000) bgset += ' ' + Utils.optimizeImage(image.src, '3000x') + ' 3000w ' + Math.round(3000 / aspect_ratio) + 'h,';
		if (image.width > 3350) bgset += ' ' + Utils.optimizeImage(image.src, '3350x') + ' 3350w ' + Math.round(3350 / aspect_ratio) + 'h,';
		if (image.width > 3750) bgset += ' ' + Utils.optimizeImage(image.src, '3750x') + ' 3750w ' + Math.round(3750 / aspect_ratio) + 'h,';
		if (image.width > 4100) bgset += ' ' + Utils.optimizeImage(image.src, '4100x') + ' 180w ' + Math.round(4100 / aspect_ratio) + 'h,';
		bgset += ' ' + image.src + ' ' + image.width + 'w ' + image.height + 'h,';
	}
	return bgset;
  }

	function buildVendor(data) {
		var html = '';
		if (boostPFSThemeConfig.custom.show_vendor) {
			html = boostPFSTemplate.vendorHtml;
		}
		return html;
	}

	function buildPrice(data) {
		var html = '';
		if (boostPFSThemeConfig.custom.show_price) {
			html = '<p class="boost-pfs-filter-product-item-price">';
			if (onSale) {
				
				html += '<span class="boost-pfs-filter-product-item-sale-price">' + Utils.formatMoney(data.price_min) + '</span>';
				html += '<s>' + Utils.formatMoney(data.compare_at_price_min) + '</s> ';
			} else {
              if (data.price_min) {
				if (priceVaries) {
					html += '<span class="boost-pfs-filter-product-item-price-from-text">' + (boostPFSThemeConfig.label_basic.from) + ' '+ '</span>';
				}
				html += '<span class="boost-pfs-filter-product-item-regular-price">' + Utils.formatMoney(data.price_min) + '</span>';
              }
			}
			html += '</p>';
		}
		return html;
	}

	function buildLabels(data) {
		// Build Sold out label
		var soldOutLabel = '';
		if (boostPFSThemeConfig.custom.show_sold_out_label && soldOut) {
			soldOutLabel = boostPFSTemplate.soldOutLabelHtml.replace(/{{style}}/g, '');
		}
		// Build Sale label
		var saleLabel = '';
		if (boostPFSThemeConfig.custom.show_sale_label && onSale && !soldOut) {
			saleLabel = boostPFSTemplate.saleLabelHtml.replace(/{{style}}/g, '');
		}
		// Build Labels
		return soldOutLabel + saleLabel;
	}
	// BUILD LABEL PRODUCT WITH TAGS
	function buildTagLabels(data, showall) {
		if (boostPFSThemeConfig.custom.show_lable_by_tag) {
			if (showall) {
				var tagLabel = '';
				if (data.tags) {
					for (var i = 0; i < data.tags.length; i++) {
						var tag = data.tags[i];
						if (tag.indexOf("pfs:label") !== -1) {
							var preTagLabel = boostPFSTemplate.tagLabelHtml.replace(/{{labelTag}}/g, tag.split('pfs:label-')[1]);
							tagLabel += preTagLabel;
						}
					}
				}
			} else {
				var tagLabel = '';
				if (data.tags) {
					for (var i = data.tags.length - 1; i >= 0; i--) {
						tag = data.tags[i];
						if (tag.indexOf("pfs:label") !== -1) {
							var preTagLabel = boostPFSTemplate.tagLabelHtml.replace(/{{labelTag}}/g, tag.split('pfs:label-')[1]);
							tagLabel += preTagLabel;
							break;
						}
					}
				}
			}
			return tagLabel;
		} else {
			return "";
		}
	}

	// Build Color Swatches
	function buildColorSwatches(data) {
		var colorSwatchesHtml = '';
		if (boostPFSThemeConfig.custom.display_item_swatch) {
			colorSwatchesHtml += '<ul class="boost-pfs-filter-item-swatch">';
			for (var index = 0; index < data.options.length; index++) {
				var option = data['options'][index].toLowerCase();
				if (option == 'color') {
					var colorlist = '';
					var color = '';
					var totalVariants = 0;
					for (var k = 0; k < data.variants.length; k++) {
						var variant = data['variants'][k];
						color = variant['options'][index];
						if (colorlist.indexOf(color) == -1) {
							if (totalVariants < 4) {
								var text = Utils.slugify(color);
								var border = text == 'white' ? 'border: 1px solid #cbcbcb;' : '';
								var backgroundImage = Utils.optimizeImage(variant.image, '24x');
								var backgroundImageURL = '';
								var dataImg = '';
								var dataColor = '#fff';
								dataColors = variant.option_color.toLowerCase().split(' ');
								var i = dataColors.length - 1;
								if (dataColors[i] !== '' && dataColors[i] !== 'colors') {
									dataColor = dataColors[i];
								}

								if (variant.image !== null) {
									dataImg = "data-img='" + Utils.optimizeImage(variant.image, '300x') + " 300w'";
								} 
	
								// if (variant.image !== null) {
								// 	dataImg = "data-img='" + Utils.optimizeImage(variant.image) + "'";
								// } else {
								// 	var _file = variant.option_color.toLowerCase().replace(/ /g, '-');
								// 	backgroundImage = boostPFSAppConfig.general.file_url.split('?')[0] + 'color-' + _file + '.png';
								// }

								var _file = variant.option_color.toLowerCase().replace(/ /g, '-');
								if (boostPFSThemeConfig.custom.swatch_color_display_type == 'swatch_color_display_type_image_color') {
									backgroundImage = boostPFSAppConfig.general.file_url.split('?')[0] + 'color-' + _file + '.png?v=' + boostPFSAppConfig.general.file_url.split('?')[1];
									backgroundImageURL = 'url(' + backgroundImage + ')';
								} else if (boostPFSThemeConfig.custom.swatch_color_display_type == 'swatch_color_display_type_image_product') {
									backgroundImage = Utils.optimizeImage(variant.image, '24x');
									backgroundImageURL = 'url(' + backgroundImage + ')';
								} else {
									backgroundImageURL = 'none';
								}
								colorSwatchesHtml += '<li>';
								colorSwatchesHtml += '<div class="tooltip">' + color + '</div>';
								colorSwatchesHtml += '<label style="background-color: ' + dataColor + '; background-image: '+ backgroundImageURL +';" ' + dataImg + '></label>';
	
								//colorSwatchesHtml += '<label style="' + border + 'background-image: url(' + Utils.optimizeImage(variant.image, '24x') + ');"' + if (variant.image !== null){ + 'data-img="' + Utils.optimizeImage(variant.image) + '"' + } '></label>';
								colorSwatchesHtml += '</li>';
	
							}
							var templist = colorlist + color + ' ';
							colorlist = templist;
	
							totalVariants++;
	
						}
					}
					// if (totalVariants == 1) {
					// colorSwatchesHtml = '<ul class="boost-pfs-filter-item-swatch">';
					// }
					if (totalVariants > 4) {
						colorSwatchesHtml += '<li class="boost-pfs-filter-item-swatch-more">';
						colorSwatchesHtml += '<a href="{{itemUrl}}" title="More Color">+' + (totalVariants - 4) + '</a>';
						colorSwatchesHtml += '</li>';
						totalVariants = 0;
					}
				}
			}
			colorSwatchesHtml += '</ul>';
		}
		return colorSwatchesHtml;
	}

	// Build Color Swatches
	function eventColorSwatches(event) {
		jQ('.boost-pfs-filter-item-swatch li label').each(function(){
			var img = jQ(this).parents('.boost-pfs-filter-product-item-inner').find('.boost-pfs-filter-product-item-main-image');
          if(event == 'hover'){
			jQ(this).hover(function(){
				var newImage = jQ(this).data('img');
				img.attr('srcset', newImage);
			});
          }
          if(event == 'click'){
			jQ(this).click(function(){
				var newImage = jQ(this).data('img');
				img.attr('srcset', newImage);
			});
          }
		});
	}

	/************************** END BUILD PRODUCT ITEM ELEMENTS **************************/
	/************************** BUILD TOOLBAR **************************/
	// Build Pagination
	ProductPaginationDefault.prototype.compileTemplate = function(totalProduct) {
		if (!totalProduct) totalProduct = this.totalProduct;
		// Get page info
		var currentPage = parseInt(Globals.queryParams.page);
		var totalPage = Math.ceil(totalProduct / Globals.queryParams.limit);
		// If it has only one page, clear Pagination
		if (totalPage <= 1) {
			return '';
		}
		if (Settings.getSettingValue('general.paginationType') == 'default') {
			var paginationHtml = boostPFSTemplate.paginateHtml;
			// Build Previous
			var previousHtml = (currentPage > 1) ? boostPFSTemplate.previousActiveHtml : boostPFSTemplate.previousDisabledHtml;
			previousHtml = previousHtml.replace(/{{itemUrl}}/g, Utils.buildToolbarLink('page', currentPage, currentPage - 1));
			paginationHtml = paginationHtml.replace(/{{previous}}/g, previousHtml);
			// Build Next
			var nextHtml = (currentPage < totalPage) ? boostPFSTemplate.nextActiveHtml : boostPFSTemplate.nextDisabledHtml;
			nextHtml = nextHtml.replace(/{{itemUrl}}/g, Utils.buildToolbarLink('page', currentPage, currentPage + 1));
			paginationHtml = paginationHtml.replace(/{{next}}/g, nextHtml);
			// Create page items array
			var beforeCurrentPageArr = [];
			for (var iBefore = currentPage - 1; iBefore > currentPage - 3 && iBefore > 0; iBefore--) {
				beforeCurrentPageArr.unshift(iBefore);
			}
			if (currentPage - 4 > 0) {
				beforeCurrentPageArr.unshift('...');
			}
			if (currentPage - 4 >= 0) {
				beforeCurrentPageArr.unshift(1);
			}
			beforeCurrentPageArr.push(currentPage);
			var afterCurrentPageArr = [];
			for (var iAfter = currentPage + 1; iAfter < currentPage + 3 && iAfter <= totalPage; iAfter++) {
				afterCurrentPageArr.push(iAfter);
			}
			if (currentPage + 3 < totalPage) {
				afterCurrentPageArr.push('...');
			}
			if (currentPage + 3 <= totalPage) {
				afterCurrentPageArr.push(totalPage);
			}
			// Build page items
			var pageItemsHtml = '';
			var pageArr = beforeCurrentPageArr.concat(afterCurrentPageArr);
			for (var iPage = 0; iPage < pageArr.length; iPage++) {
				if (pageArr[iPage] == '...') {
					pageItemsHtml += boostPFSTemplate.pageItemRemainHtml;
				} else {
					pageItemsHtml += (pageArr[iPage] == currentPage) ? boostPFSTemplate.pageItemSelectedHtml : boostPFSTemplate.pageItemHtml;
				}
				pageItemsHtml = pageItemsHtml.replace(/{{itemTitle}}/g, pageArr[iPage]);
				pageItemsHtml = pageItemsHtml.replace(/{{itemUrl}}/g, Utils.buildToolbarLink('page', currentPage, pageArr[iPage]));
			}
			paginationHtml = paginationHtml.replace(/{{pageItems}}/g, pageItemsHtml);
			return paginationHtml;
		}
	};

	// Build Sorting
	ProductSorting.prototype.compileTemplate = function() {
		var html = '';
		if (boostPFSThemeConfig.custom.show_sorting && boostPFSTemplate.hasOwnProperty('sortingHtml')) {
			var sortingArr = Utils.getSortingList();
			if (sortingArr) {
				var paramSort = Globals.queryParams.sort || '';
				// Build content
				var sortingItemsHtml = '';
				for (var k in sortingArr) {
					activeClass = '';
					if(paramSort == k) {
						activeClass = 'boost-pfs-filter-sort-item-active';
					}
					sortingItemsHtml += '<li class="' + activeClass+ '"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-box" viewBox="0 0 20 20"><g fill="none" fill-rule="evenodd"><circle class="checkbox-border" cx="10" cy="10" r="8" stroke="gray" stroke-width="1"></circle><circle class="checkbox-core" cx="10" cy="10" r="4" stroke="white" stroke-width="0.5"></circle></g></svg><a href="#" data-sort="' + k + '" class="' + activeClass+ '">' + sortingArr[k] + '</a></li>';
				}
				html = boostPFSTemplate.sortingHtml.replace(/{{sortingItems}}/g, sortingItemsHtml);
			}
		}
		return html;
	};

	ProductSorting.prototype.render = function() {
		jQ(Selector.topSorting).html(this.compileTemplate());

		if (jQ('.boost-pfs-filter-custom-sorting').hasClass('boost-pfs-filter-sort-active')) {
			jQ('.boost-pfs-filter-custom-sorting').toggleClass('boost-pfs-filter-sort-active');
		}

		var labelSort = '';
		var paramSort = Globals.queryParams.sort || '';
		if (paramSort.length > 0) {
			var labelHandle = 'sorting_' + paramSort.replace(/\-/g, '_');
			labelSort = Labels[labelHandle];
		} else {
			labelSort = Labels.sorting_heading;
		}

		jQ('.boost-pfs-filter-custom-sorting button span span').text(labelSort);
	}

	// Build Sorting event
	ProductSorting.prototype.bindEvents = function() {
		var _this = this;
		jQ('.boost-pfs-filter-filter-dropdown a').click(function(e){
			e.preventDefault();
			FilterApi.setParam('sort', jQ(this).data('sort'));
			FilterApi.setParam('page', 1);
			FilterApi.applyFilter('sort');
		});

		jQ(".boost-pfs-filter-custom-sorting > button").click(function(){
			if (!jQ('.boost-pfs-filter-filter-dropdown').is(':animated')) {
              jQ('.boost-pfs-filter-filter-dropdown').animate({height: "toggle", opacity: "toggle"}, 400).parent().toggleClass('boost-pfs-filter-sort-active');
				//jQ('.boost-pfs-filter-tree-v').hide();
			}
		});

		jQ(Selector.filterTreeMobileButton).click(function(){
			jQ('.boost-pfs-filter-top-sorting-mobile .boost-pfs-filter-filter-dropdown').hide();
		});
	};
	// For Toolbar - Build Display type
	ProductDisplayType.prototype.compileTemplate = function() {
		var itemHtml = '<span>' + boostPFSThemeConfig.label.toolbar_viewas + '</span>';
		itemHtml += '<a href="' + Utils.buildToolbarLink('display', 'list', 'grid') + '" title="Grid view" class="{{class.productDisplayType}}-item {{class.productDisplayType}}-grid" data-view="grid"><span class="icon-fallback-text"><span class="fallback-text">Grid view</span></span></a>';
		itemHtml += '<a href="' + Utils.buildToolbarLink('display', 'grid', 'list') + '" title="List view" class="{{class.productDisplayType}}-item {{class.productDisplayType}}-list" data-view="list"><span class="icon-fallback-text"><span class="fallback-text">List view</span></span></a>';
		itemHtml = itemHtml.replace(/{{class.productDisplayType}}/g, Class.productDisplayType);

		return itemHtml;
	};
	
	// Build Show Limit
	ProductLimit.prototype.compileTemplate = function() {
		var html = '';
		if (boostPFSThemeConfig.custom.show_limit && boostPFSTemplate.hasOwnProperty('showLimitHtml')) {
			
			var numberList = Settings.getSettingValue('general.showLimitList');
			if (numberList != '') {
				// Build content
				var showLimitItemsHtml = '';
				var arr = numberList.split(',');
				for (var k in sortingArr) {
					showLimitItemsHtml += '<option value="' + arr[k].trim() + '">' + arr[k].trim() + '</option>';
				}
				html = boostPFSTemplate.showLimitHtml.replace(/{{showLimitItems}}/g, showLimitItemsHtml);
			}
		}
		return html;
	};
	// Build Breadcrumb
	Breadcrumb.prototype.compileTemplate = function (colData) {
		if (!colData) colData = this.collectionData;
		var breadcrumbItemsHtml = '';
		if (boostPFSTemplate.hasOwnProperty('breadcrumbHtml')) {
			if (typeof colData !== 'undefined' && colData.hasOwnProperty('collection')) {
				var colInfo = colData.collection;
				if (typeof this.collectionTags !== 'undefined' && this.collectionTags !== null) {
					breadcrumbItemsHtml += boostPFSTemplate.breadcrumbItemLink.replace(/{{itemLink}}/g, '/collections/' + colInfo.handle).replace(/{{itemTitle}}/g, colInfo.title);
					breadcrumbItemsHtml += " {{breadcrumbDivider}} ";
					breadcrumbItemsHtml += boostPFSTemplate.breadcrumbItemSelected.replace(/{{itemTitle}}/g, this.collectionTags[0]);
				} else {
					breadcrumbItemsHtml += boostPFSTemplate.breadcrumbItemSelected.replace(/{{itemTitle}}/g, colInfo.title);
				}
			} else {
				breadcrumbItemsHtml += boostPFSTemplate.breadcrumbItemSelected.replace(/{{itemTitle}}/g, Settings.getSettingValue('label.defaultCollectionHeader'));
			}
		}
		return breadcrumbItemsHtml
	};
	/************************** END BUILD TOOLBAR **************************/
	function matchHeightImage() {
		// jQ('.boost-pfs-filter-product-item-main-image').load(function() {
		// 	var imageContainer = jQ(this).parent();
		// 	imageContainer.css('width', '100%').css('height', jQ(this).height());
		// }).each(function() {
		// 	if (this.complete) jQ(this).load();
		// });
	}
	
	// Add additional feature for product list, used commonly in customizing product list
	ProductList.prototype.afterRender = function (data) {
		if(boostPFSThemeConfig.custom.swatch_color_event_change_image != 'none'){
			eventColorSwatches(boostPFSThemeConfig.custom.swatch_color_event_change_image);
		}

		if (!data) data = this.data;
		
		// Intergrate Review Shopify
		if (window.SPR && boostPFSThemeConfig.custom.show_product_review) {
			window.SPR.initDomEls();
			window.SPR.loadBadges();
		}
		
		if (Globals.queryParams.display !== 'list') equalHeight(data);
      

	};

	// Build additional elements
	Filter.prototype.afterRender = function(data) {
		if (!data) data = this.data;

		var totalProduct = data.total_product + '<span> ' + boostPFSThemeConfig.label.items_with_count_other + '</span>';
		if (data.total_product == 1) {
			totalProduct = data.total_product + '<span> ' + boostPFSThemeConfig.label.items_with_count_one + '</span>';
		}
		jQ('.boost-pfs-filter-total-product').html(totalProduct);
		matchHeightImage();
		jQ(window).resize(function() {
			matchHeightImage();
		});

		jQ('body').find('.boost-pfs-filter-skeleton-button').remove();

		// Prevent double tap on iOS
		var isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
		if (isiOS){
			Utils.isMobile()&&jQ(".boost-pfs-filter-product-item").find("a").on("touchstart",function(){isScrolling=!1}).on("touchmove",function(){isScrolling=!0}).on("touchend",function(){isScrolling||(window.location=jQ(this).attr("href"))});
		}

		// Fix image not loaded on mobile
		//(Utils.isMobile()||null!=navigator.userAgent.match(/iPad/i))&&(setTimeout(function(){jQ(".boost-pfs-filter-product-item-image img").each(function(){var a=jQ(this).attr("src")+"3";jQ(this).attr("src",a)})},200),setTimeout(function(){jQ(".boost-pfs-filter-product-item-image img").each(function(){var a=jQ(this).attr("src")+"3";jQ(this).attr("src",a)})},2e3));		
      
        // Build Image Swap
        swapImage(data);
		
	};

	Filter.prototype.isRender = function() {
        return this.isFetchedFilterData || this.isFetchedProductData;
  }
  var originalFilterRender = Filter.prototype.render;
  Filter.prototype.render = function() {
      if (this.isFetchedFilterData) {
         originalFilterRender.call(this);
      }
  }

	ProductListPlaceholder.prototype.render = function() {	
		// Set limit number for product skeleton	
		var placeholderLimit = this.settings.productsPerRow || this.settings.placeholderProductPerRow;	
		// Build placeholder items	
		var placeholderItem = this.compileTemplate();	
		this.$element = [];	
		for (var i = 0; i < placeholderLimit; i++) {	
		  this.$element.push(jQ(placeholderItem));	
		}	
		// Show placeholder before send filter request OR hide it after get filter data	
		if (!this.isFetchedProductData) {	
		  this.setShow();	
		} else {	
		  this.setHide();	
		}	
	}	
		  
	ProductListPlaceholder.prototype.compileTemplateExtra = function() {	
		var display = Globals.queryParams.display	
		switch (display) {	
			case 'list':	
			//Todo: Build placeholder for List mode	
			var template = boostPFSTemplate.productListPlaceholderHtml;	
			var imgRatioSetting = parseFloat(this.settings.placeholderImageRatio);	
			var imgRatio = imgRatioSetting > 0 ? imgRatioSetting : 1.4; // It mean w1:h1.4	
			/**	
			 * Set product class for product skeleton (to set column, style, etc.)	
			 * - If had defined product_grid_class in boostPFSThemeConfig => use this config ELSE use our setting	
			 */	
			break;	
		}	
		return template	
		.replace(/{{class.filterProductSkeleton}}/g, Class.filterProductSkeleton)	
		.replace(/{{class.filterSkeleton}}/g, Class.filterSkeleton)	
		.replace(/{{class.filterSkeletonText}}/g, Class.filterSkeletonText)	
		.replace(/{{paddingTop}}/g, imgRatio * 100)	
	}

	/* Prevent conflict with theme vendor js */ 
	Array.prototype.insert = function(a, b) {}

/* Math qual Height */ 
	function equalHeight(data) {
		var equal_height = boostPFSFilterConfig.general.equal_height;

		if(equal_height != 'false'){
			var cropImagePosition = boostPFSFilterConfig.general.cropImagePossitionEqualHeight;

			var equal_i = -1;
	    var equal_els = [];
	    var equal_element = null;
	    var widthImage = jQ('.boost-pfs-filter-product-item').width();

	    var indexData = 0;


			// Equal Height Title
			jQ('.boost-pfs-filter-product-item').each(function(i, element) {
				
				var offsetTop = jQ(element).offset().top;
				if(!equal_element || equal_element.offset().top !== offsetTop) {
					equal_element = jQ(element);
					equal_i++;
				}
				
				if(!equal_els[equal_i]) {
					equal_els[equal_i] = [];
				}
				equal_els[equal_i].push(element);
			});


			// // For Auto
			// if(equal_height == 'auto'){
		    
	  //     for(var i = 0; i < equal_els.length; i++) {
	  //       var max = 0;
	  //       var maxRatio = 0;
	  //       var iLength = equal_els[i].length;

	  //       for(var j = 0; j < equal_els[i].length; j++) {
	  //         var item = equal_els[i][j];
	  //         var height = jQ(item).find('.boost-pfs-filter-product-item-title').height();
	  //         max = Math.max(max, height);

	  //         indexData = (i * iLength) + j;
	  //         if (typeof(data[indexData]) != 'undefined') {            
	  //           var images = data[indexData].images_info;
	  //           if(images.length > 0){
	  //             var ratioImage = images[0].height / images[0].width;
	  //             maxRatio = Math.max(maxRatio, ratioImage);
	  //         	}
	  //         }
	  //       }

	  //       jQ(equal_els[i]).find('.boost-pfs-filter-product-item-title').css({'min-height': max});

	  //       var maxHeightImage = widthImage * maxRatio;
	  //       jQ(equal_els[i]).find('.boost-pfs-filter-product-item-image-link').css({'padding-top': maxHeightImage}).addClass('boost-pfs-filter-crop-image-position-' + cropImagePosition);
	  //     }
	  //   }

	    // For Ratio
	    if(equal_height != 'false' && equal_height != 'auto'){
	      var heightImage = 0;
	      var widthImage = jQ('.boost-pfs-filter-product-item').width();
	      if(equal_height != 'false' && equal_height != 'auto'){
	        var ratioWidthHeight = boostPFSThemeConfig.custom.equal_height;
	      } else {
	        var ratioWidthHeight = '';
	      }

	      var ratioWidthHeightOther = boostPFSThemeConfig.custom.ratio_width_height_other;
	      if (ratioWidthHeightOther == '' &&  ratioWidthHeight == ''){
	        return null;
	      } else {
	        if (ratioWidthHeightOther == '') {
	          ratioWidthHeight = ratioWidthHeight.split(':');
	          ratioWidthHeight = parseInt(ratioWidthHeight[1]) / parseInt(ratioWidthHeight[0]);
	          heightImage = widthImage * ratioWidthHeight;
	        } else if (ratioWidthHeightOther != '')  {
	          ratioWidthHeightOther = ratioWidthHeightOther.split(':');
	          ratioWidthHeightOther = parseInt(ratioWidthHeightOther[1]) / parseInt(ratioWidthHeightOther[0]);
	          heightImage = widthImage * ratioWidthHeightOther;
	        } 
	      }
	      jQ('.boost-pfs-filter-product-item-image-link').css({'padding-top': heightImage + 'px'}).addClass('boost-pfs-filter-crop-image-position-' + cropImagePosition);;

	    }
    }
  }

  // Swap Image
  function swapImage(data) {
    if (!Utils.isMobile()) {
        if (boostPFSThemeConfig.custom.active_image_swap) {
          var thumbUrl = Utils.getFeaturedImage(images, '260x');
          
          jQ(".boost-pfs-filter-product-item").each(function(){
            var flipImageUrl = jQ(this).find('.boost-pfs-filter-product-item-main-image').data('img-flip');            
            var alt = jQ(this).find('.boost-pfs-filter-product-item-main-image').attr('alt');            
            
            var html = '<img class="boost-pfs-filter-product-item-flip-image lazyload lazypreload Image--lazyLoad"' +            
            'data-src="' + flipImageUrl + '" ' +
            'src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" ' +
            'alt="' + alt + '" />';
            
            jQ(this).find('.boost-pfs-filter-product-item-image-link').prepend(html);
            
            
          });
            
        }
      }
  }
  
  FilterCollapse.prototype.onToggleHorizontal = function() {
		var isCollapsed = !this.isCollapsed;

		this.calculateHorizontalColumn();
		var isApply = this.closeAllHorizontalTabs();

		if (!isCollapsed) {
			if (isApply) {
				reopenHorizontalFilterOptionId = this.parent.filterOptionId;
			} else {
				reopenHorizontalFilterOptionId = '';
				this.parent.$element.removeClass('boost-pfs-filter-option-collapsed');
				this.$toggleElement.animate({height: "toggle", opacity: "toggle"}, 400);
				this.isCollapsed = false;
			}
		}

		this.afterToggle();
  }
  
  FilterCollapse.prototype.closeAllHorizontalTabs = function() {
		var filterTree = this.parent.parent;
		var isChangedFilter = false;
		filterTree.filterOptions.forEach((filterOption) => {
			if (filterOption.$element && filterOption.collapse && !filterOption.collapse.isCollapsed) {
				filterOption.$element.addClass('boost-pfs-filter-option-collapsed');
				filterOption.collapse.isCollapsed = true;
				filterOption.collapse.$toggleElement.css('display', 'none');
				var filterItems = filterOption.allNestedFilterItems ? filterOption.allNestedFilterItems : filterOption.filterItems;
				filterItems.forEach(item => {
					if (!isChangedFilter) {
						if (item.isAppliedFilter() != item.isSelected) {
							isChangedFilter = filterOption;
						}
					}
				});
			}
		})
		if (isChangedFilter) {
			isChangedFilter.applyButton.onApplyOptionValues();
			return true;
		} else {
			return false;
		}
	}

})();

/* Begin patch boost-010 run 2 */
Filter.prototype.beforeInit=function(){var t=this.isBadUrl();t&&(this.isInit=!0,window.location.href=window.location.pathname)},Filter.prototype.isBadUrl=function(){try{var t=decodeURIComponent(window.location.search).split("&"),e=!1;if(t.length>0)for(var n=0;n<t.length;n++){var i=t[n],r=(i.match(/</g)||[]).length,a=(i.match(/>/g)||[]).length,o=(i.match(/alert\(/g)||[]).length,h=(i.match(/execCommand/g)||[]).length;if(r>0&&a>0||r>1||a>1||o||h){e=!0;break}}return e}catch(l){return!0}};
/* End patch boost-010 run 2 */
