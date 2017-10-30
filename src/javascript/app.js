$(function() {
  var $productsList = $('.js-product_list');

  $.ajax({
    url: '../../api/milmeal.json',
    dataType: 'json'
  })
  .done(function(data) {
    showProducts(data);
  })
  .fail(function() {
    console.log("error");
  })
  .always(function() {
    console.log("complete");
  });

  function showProducts(data) {
    data.products
    .forEach(function(products) {
      item =
        '<li class="js-'+ products.category +'">'+
          '<a href="" class="p-img p-img-shadow u-inlineblock">'+
            '<div class="p-img-product" style="background-image: url('+ products.img +');"></div>'+
            '<div class="c-text-basic c-text-bold p-img-cap u-block u-align-left">'+
              '<p class="p-img-cap-text">'+ products.name +'</p>'+
              '<p class="c-text-essential c-text-light u-block u-align-right u-fs-14">販売価格(税込)： '+ products.price +'円</p>'+
            '</div>'+
          '</a>'+
        '</li>';

        $productsList.append(item);
    });
  }

  $('.js-category').on('change', function() {
    var value = Array.from(
          $('.js-category input:checked')
          .map(function(){
            return $(this).val();
          })
        );

    $productsList.children().hide();

    value.forEach(function(value) {
      $('.js-' + value).show();
    });
  });
});

