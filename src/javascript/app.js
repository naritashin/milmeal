$(function() {
  var $checkbox = $('.js-category');
  var $products = $('.js-products');

  $.ajax({
    url: '../../api/milmeal.json',
    dataType: 'json',
  })
  .done(function(data) {
    var $productList = $('.js-products');
    var productArr = data.products;
    var len = productArr.length;

    for (var i = 0; i < len; i ++) {
      var name = productArr[i].name;
      var path = productArr[i].image;
      var price = productArr[i].price;
      var category = productArr[i].category;

      $productList.append('<li class="js-'+ category +'"><a href="" class="p-img p-img-shadow u-inlineblock"><div class="p-img-product" style="background-image: url('+ path +');"></div><div class="c-text-basic c-text-bold p-img-cap u-block u-align-left"><p class="p-img-cap-text">'+ name +'</p><p class="c-text-essential c-text-light u-block u-align-right u-fs-14">販売価格(税込)： '+ price +'円</p></div></a></li>');
    }
  })
  .fail(function() {
    console.log("error");
  })
  .always(function() {
    console.log("complete");
  });

  $checkbox.on('change', function() {
    var $checked = $('.js-category input:checked');
    var productList = $products.find('li');
    var value = $checked.map(function(){
      return $(this).val();
    });
    var len = value.length;

    if(len) {
      productList.hide();
    } else {
      productList.show();
    };

    for (var i = 0; i < len; i++) {
        $('.js-'+ value[i]).show();
    };
  });
});

